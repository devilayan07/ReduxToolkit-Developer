// import { Drawer, IconButton,List,  ListItemButton, ListItemIcon, ListItemText,Box } from '@mui/material'
// import React,{useState} from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// //  const Pages=["home","about","product","login"]
// function DrawerComp() {
//     const[open,setOpen]=useState(false)
//     const handleClose=()=>{
//         setOpen(false)
//     }

//     const handleOpen=()=>{
//         setOpen(!open)
//     }
//   return (
//     <>
//     <Drawer PaperProps={{sx:{backgroundColor:"#1c1e32"}}} open={open} onClose={handleClose}>
//     <List>
        
//             <ListItemButton  onClick={handleClose} >
//             <ListItemIcon>
                
//                 <ul className='mobile-navigation'>
//                     <li>
//                     <Link to={"/"}>Home</Link>
//                     </li>
//                     <li>
//                         <Link to={"/product"}>Product</Link>
//                     </li>
//                     <li>
//                         <Link to={"/create"}>Create</Link>
//                     </li>
//                     {/* <li>
//                         <Link to={"/blog"}>Blog</Link>
//                     </li>
//                     <li>
//                     <Link to={"/contact"}>Contact</Link>

//                     </li> */}

//                     <li>
//                         <Link to={"/login"}>Login</Link>
//                     </li>
//                 </ul>
                


//             </ListItemIcon>
//             </ListItemButton>

            
            
        
   

//     </List>

//     </Drawer>
//     <IconButton sx={{marginLeft:"auto"}} onClick={handleOpen}>
//         <MenuIcon/>
//     </IconButton>
    
//     </>
//   )
// }

// export default DrawerComp


import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLoggedout } from '../../Pages/ReduxToolkit/AuthSlice';

function DrawerComp() {
    const [open, setOpen] = useState(false);
    const dispatch=useDispatch()

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    const logOut=()=>{
        dispatch(handleLoggedout())
    }

    return (
        <>
            <Drawer PaperProps={{ sx: { backgroundColor: "#1c1e32" } }} open={open} onClose={handleClose}>
                <List>
                    {[
                        { text: 'Home', link: '/' },
                        { text: 'Product', link: '/product' },
                        { text: 'Create', link: '/create' },
                        { text: 'Login', link: '/login' }
                    ].map((item, index) => (
                        <ListItemButton key={index} component={Link} to={item.link} onClick={handleClose}>
                            <ListItemText primary={item.text} sx={{color:"#fff"}} />
                        </ListItemButton>
                    ))}
                    <ListItemButton component={Link} to={"/login"} onClick={logOut}>
                        <ListItemText sx={{color:"#fff"}}>Logout</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton sx={{ marginLeft: "auto" }} onClick={handleOpen}>
                <MenuIcon />
            </IconButton>
        </>
    );
}

export default DrawerComp;

