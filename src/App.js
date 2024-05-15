import './App.css';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
// import Registration from './Pages/AUTH/Registration/Registration';
// import Login from './Pages/AUTH/Login/Login';
// import Home from './Pages/CMS/Home/Home';
// import Create from './Pages/CMS/Create/Create';
// import Productlist from './Pages/CMS/Product/Productlist';
// import Header from './Pages/Layout/Header/Header';
// import SingleProduct from './Pages/CMS/SingleProduct/SingleProduct';
// import Edit from './Pages/CMS/Edit/Edit';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { check_token } from './Pages/ReduxToolkit/AuthSlice';
import Loader from './Component/Loader/Loader';

const Registration=lazy(()=> import("./Pages/AUTH/Registration/Registration") )
const Login=lazy(()=> import("./Pages/AUTH/Login/Login"))
const Home=lazy(()=> import("./Pages/CMS/Home/Home"))
const Create=lazy(()=> import("./Pages/CMS/Create/Create"))
const Productlist=lazy(()=> import("./Pages/CMS/Product/Productlist"))
const SingleProduct=lazy(()=> import("./Pages/CMS/SingleProduct/SingleProduct"))
const Edit=lazy(()=> import("./Pages/CMS/Edit/Edit") )
const Header=lazy(()=> import("./Pages/Layout/Header/Header"))
const Footer=lazy(()=>import("./Pages/Layout/Footer/Footer"))
function PrivateRoute({children}){
  console.log(children,"children")

  const token=localStorage.getItem("token") || sessionStorage.getItem("token")
  return token!==null && token!==undefined?(
    children

  ):(
    <>
    <Navigate to={"/login"} />
    {toast("Please go for login either you cannot access other pages")}
    </>

  )


}
const PublicRouteNames=[

{
path:"/login",
Component:<Login/>
},
{ 
path:"/registration",
Component:<Registration/>

}]

const PrivateRouteNames=[
{
  path:"/",
  Component:<Home/>
},

{
path:"/create",
Component:<Create/>
},
{
path:"/product",
Component:<Productlist/>
},
{
path:"/product/:id",
Component:<SingleProduct/>

},
{
path:"/edit/:id",
Component:<Edit/>
}]


function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch((check_token()))
  })

  return (
    <div className="App">
      {/* <Router>
        <Header/>
        <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path="/product" element={<Productlist/>}/>
          <Route path="/product/:id" element={<SingleProduct/>}/>
          <Route path="/edit/:id"  element={<Edit/>} />
        </Routes>
      </Router> */}
     <Suspense fallback={<Loader/>}>
      <Router>
        <Header/>
        <Routes>
          {
            PublicRouteNames?.map((route,index)=>{
              return(
                <Route key={index} exact path={route.path} element={route.Component}/>
              )
            })
          }
          {
            PrivateRouteNames?.map((route,index)=>{
              return(
                <Route key={index} exact path={route.path} element={ <PrivateRoute> {route.Component}</PrivateRoute>}/>
              )
            })
          }
        </Routes>
        <Footer/>
      </Router>
      </Suspense>

    </div>
  );
}

export default App;
