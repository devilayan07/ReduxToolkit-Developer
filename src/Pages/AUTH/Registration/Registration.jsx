// import React,{useState} from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../../ReduxToolkit/AuthSlice';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function Registration() {
//   const{status}=useSelector(state=>state.AUTH)
//     const dispatch=useDispatch()

//     const[user,setUser]=useState({
//         first_name:"",
//         last_name:"",
//         email:"",
//         password:""
//     })
//     const[error,setError]=useState("")
//     const[img,setimg]=useState("")


//     const validation=()=>{
//         let error={};
//         if(!user.first_name){
//             error.first_name="First Name is Required"
//         }
//         if(!user.last_name){
//             error.last_name="Last Name is Required"
//         }
//         if(!user.email){
//             error.email="Email is Required"
//         }
//         if(!user.password){
//             error.password="Password is Required"
//         }
//         if (!img) {
//             error.img = "Image  is required";
//           }
      
//         return error;

//     }
//     console.log(error)

//     const image_change = (e) => {
//         const file = e.target.files[0];
//         if (!file) {
//           setError({ ...error, img: "Image is required" });
//           setimg(null);
//         } else {
//           setError({ ...error, img: "" });
    
//           setimg(file);
//           // console.log(file);
//         }
//       };
    

//     const SubmitInfo=(e)=>{
//         e.preventDefault()
//         setError(validation())

//         const formdata=new FormData()
//         formdata.append("first_name",user.first_name)
//         formdata.append("last_name",user.last_name)
//         formdata.append("email",user.email)
//         formdata.append("password",user.password)
//         formdata.append("profile_pic",img)

//         dispatch(register(formdata))

//     }

//     let name,value

//     const postUserData=(e)=>{
//         name=e.target.name
//         value=e.target.value  

//         if(name==="first_name"){
//             if(value.length===0){
//                 setError({...error,first_name:"First Name is Required"})
//                 setUser({...user,first_name:""})
//             }
//             else{
//                 setError({...error,first_name:""})
//                 setUser({...user,first_name:value})
//             }
//         }

//         if(name==="last_name"){
//             if(value.length===0){
//                 setError({...error,last_name:"Last Name is Required"})
//                 setUser({...user,last_name:""})
//             }
//             else{
//                 setError({...error,last_name:""})
//                 setUser({...user,last_name:value})
//             }
//         }
        
//         if(name==="email"){
//             if(value.length===0){
//                 setError({...error,email:"Email is Required"})
//                 setUser({...user,email:""})
//             }
//             else{
//                 setError({...error,email:""})
//                 setUser({...user,email:value})
//             }
//         }
         
//         if(name==="password"){
//             if(value.length===0){
//                 setError({...error,password:"First Name is Required"})
//                 setUser({...user,password:""})
//             }
//             else{
//                 setError({...error,password:""})
//                 setUser({...user,password:value})
//             }
//         }


//     }
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={SubmitInfo} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="first_name"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   value={user.first_name}
//                   onChange={postUserData}
//                   autoFocus
//                 />
//                 <span style={{ color: "red" }}>
//                 {""}
//                 {error.first_name}
//                 {""}
// </span>

//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="last_name"
//                   value={user.last_name}
//                   onChange={postUserData}
//                   autoComplete="family-name"
//                 />
//                 <span style={{ color: "red" }}>
//                 {""}
//                 {error.last_name}
//                 {""}
// </span>

//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   value={user.email}
//                   onChange={postUserData}
//                   autoComplete="email"
//                 />
//                 <span style={{ color: "red" }}>
//                 {""}
//                 {error.email}
//                 {""}
// </span>

//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   value={user.password}
//                   onChange={postUserData}
//                   autoComplete="new-password"
//                 />
//                 <span style={{ color: "red" }}>
//                 {""}
//                 {error.password}
//                 {""}
// </span>

//               </Grid>
//               <div class="mb-3">
//                 <label for="exampleInputPassword1" class="form-label">
//                    Image
//                  </label>
//                   <input
//                      type="file"
//   // onChange={(e) => setimg(e.target.files[0])}
//                  onChange={image_change}
//                      name="img"
//                      accept="image/*"
//                     class="form-control"
//                   />
//                   {img !== "" && img !== undefined && img !== null ? (
//                     <img                       style={{ height: "180px" }}
//                        src={URL.createObjectURL(img)}                       alt=""
//                       className="upload-img"
//                     />
//                  ) : (
//                    <>{img=== "" && <p>Drag or drop content here</p>}</>                 )}
// </div>
// <span style={{ color: "red" }}>
//                 {""}
//                 {error.img}
//                 {""}
// </span>

//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             {
//               status==="idle" ? (
//                 <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign Up
//               </Button>
  
//               ):(
//                 <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Loading...
//               </Button>
  
//               )
//             }
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }


import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {fetchregister} from '../../ReduxToolkit/AuthSlice';
// import { profile_pic } from './../../../Component/Helper/Helper';
import { IconButton,InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Registration() {
  const{register,handleSubmit,formState:{errors}}=useForm()
  const[profile_pic,setProfile_pic]=useState()
  const[isvisible,setVisible]=useState(false)

  const dispatch=useDispatch()

  const toggle=()=>{
    setVisible(!isvisible)
  }


 const onSubmit=(data)=>{
  const formdata=new FormData()
  formdata.append("first_name",data.first_name)
  formdata.append("last_name",data.last_name)
  formdata.append("email",data.email)
  formdata.append("password",data.password)
  formdata.append("profile_pic",data.profile_pic[0])
  dispatch(fetchregister(formdata))

 }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                {...register("first_name",{required:true,maxLength:20})}
                  autoComplete="given-name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  error={errors.first_name}
                  helperText={errors.first_name && "First name is required"}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                {...register("last_name",{required:true,maxLength:20})}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  error={errors.last_name}
                  helperText={errors.last_name && "Last name is required"}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register("email",{required:true})}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  error={errors.email}
                  helperText={errors.email && "Email is Required"}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register("password",{required:true})}
                  required
                  fullWidth
                  label="Password"
                  type={!isvisible ? "password" : "text"}

                  id="password"
                  error={errors.password}
                  helperText={errors.password && "Password is required"}
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggle} className="icon"> 
                          {isvisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}

                />
              </Grid>

              <TextField
    {...register("profile_pic", { required: true, maxLength: 20 })}
    fullWidth
    margin="normal"
    variant="outlined"
    type="file"
    error={!profile_pic && !!errors.profile_pic} 
    helperText={!profile_pic && errors.profile_pic && "Image is required"} 
    onChange={(e) => setProfile_pic(e.target.files[0])}
/>


{profile_pic && (
                <img
                  style={{ height: "180px" }}
                  src={URL.createObjectURL(profile_pic)}
                  alt=""
                  className="upload-img"
                />
              )}
    


              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}