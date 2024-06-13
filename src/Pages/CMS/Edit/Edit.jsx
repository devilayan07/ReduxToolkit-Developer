import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDetails, fetchEdit } from '../../ReduxToolkit/ProductSlice'
import { useForm } from 'react-hook-form'
import { Container,Box,TextField,Typography,Button,Grid } from '@mui/material';
import { myproduct } from '../../../Component/Helper/Helper'

function Edit() {
    const{id}=useParams()
    console.log(id)
    const {detail}=useSelector(state=>state.Product)
    console.log(detail)
    const dispatch=useDispatch()
const{register,handleSubmit,setValue,formState:{errors}}=useForm()

const[image,setImage]=useState(null)
const[form,setFormData]=useState({})
    useEffect(()=>{
        dispatch(fetchDetails(id))
    },[dispatch,id])

    useEffect(()=>{
      if(detail){
        setValue("title",detail?.title)
        setValue("description",detail?.description)
        setFormData(detail)
      }

    },[detail,setValue])

    const onSubmit=(data)=>{
        const formdata=new FormData()
        formdata.append("title",data.title)
        formdata.append("description",data.description)
        formdata.append("image",data.image[0])
        formdata.append("id",data.id)

        dispatch(fetchEdit(formdata))


    }
  return (
    <Container component="main" maxWidth="xs">

    <Box
      sx={{ marginTop: "80px" }}>
      <Typography textAlign={"center"} variant='h5'>Edit Data</Typography>

      <Box component="form"  sx={{ margin: "20px", padding: "10px", alignItems: "center" }}  >
        <TextField
        {...register("title",{required:true})}
          margin='normal'
          fullWidth

          id='title'
          label="Enter The Title"
          name='title'
          autoComplete='title'
          error={errors.title}
          helperText={errors.title && "Title is required"}
          autoFocus
        />


        <TextField
        {...register("description",{required:true})}
          margin='normal'
          fullWidth

          id='description'
          label="Enter The Description"
          name='description'
          autoComplete='description'
          error={errors.description}
          helperText={errors.description && "Description is required"}
          autoFocus
        />
               <Grid item xs={12} >
                <TextField
                {...register("image",{required:"true"})}
                 fullWidth
                 variant='outlined'
                 type='file'
                 margin='normal'
                 error={!errors.image}
                 helperText={errors.image && "Image is required"}
                 defaultValue={form?.image || ""}

                 onChange={(e)=>setImage(e.target.files[0])}
                />
              </Grid>
              <div
               style={{
                  position: "relative",
                  width: "100%",
                  height: "180px",
                  marginTop: "10px",
                  objectFit:"cover",
                  marginBottom:"20px",
                  overflow:"hidden",
                  display: "flex",
                    justifyContent: "center",
                   alignItems: "center",


                }}
              >
               
                {image && (
                  <img
                   style={{
                      // position: "absolute",
                      //  top: 0,
                      //  left: 0,
                      //  height: "180px",
                      //  width: "auto",
                      maxHeight: "100%",  
                      maxWidth: "100%",   
                      objectFit: "contain"


                     }}
                     src={URL.createObjectURL(image)}
                     alt=""
                     className="upload-img"
                   />
               )}
               {!image && detail?.image && (
                  <img                     src={myproduct(detail.image)}
                     alt=""
                    style={{ width: "100%", height: "auto" }}
                   />
                )}
             </div> 







       
        <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
</Box>
</Box>
</Container>

  

  )
}

export default Edit


// import React, { useEffect, useState } from 'react'
// import { Box, TextField, Typography, Container, Button } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDetails, fetchEdit } from '../../ReduxToolkit/ProductSlice';
// import { myproduct } from '../../../Component/Helper/Helper';


// function Edit() {
//   const[user,setUser]=useState({
//     title:"",
//     description:""
//   })
//   const[error,setError]=useState("")
//   const[img,setimg]=useState("")
//   const{id}=useParams()
//   console.log(id)
  
//   const {detail}=useSelector(state=>state.Product)
//   console.log(detail)
//   const dispatch=useDispatch()

//   useEffect(()=>{
//     dispatch(fetchDetails(id))

//   },[dispatch,id])


//   const validation=()=>{
//     let error={}

//     if(!user.title){
//       error.title="Title is required"
//     }
//     if(!user.description){
//       error.description="Description is required"
//     }
//     return error;
//   }

//   console.log(error)

//   useEffect(()=>{
//     if(detail){
//       setUser({
//        title:detail.title,
//        description:detail.description,
       
//       })
//     }
//   },[detail])

//   const SubmitInfo=(e)=>{
//     e.preventDefault()
//     setError(validation())

//     const formdata=new FormData()
//     formdata.append("title",user.title)
//     formdata.append("description",user.description)
//     formdata.append("id",id)

//     if (img) {
//       formdata.append("image", img)
//     }
//     else {
//       formdata.append("image", user.image)
//     }

//     dispatch(fetchEdit(formdata))

//   }

//   let name, value
//   const postUserData = (e) => {
//     name = e.target.name;
//     value = e.target.value

//     if (name === "title") {
//       if (value.length === 0) {
//         setError({ ...error, title: "Title is Required" })
//         setUser({ ...user, title: "" })
//       }
//       else {
//         setError({ ...error, title: "" })
//         setUser({ ...user, title: value })
//       }
//     }
//     if (name === "description") {
//       if (value.length === 0) {
//         setError({ ...error, description: " Description is Required" })
//         setUser({ ...user, description: "" })
//       }
//       else {
//         setError({ ...error, description: "" })
//         setUser({ ...user, description: value })
//       }
//     }
//   }

//   return (
//     <Container component="main" maxWidth="xs">

//     <Box
//       sx={{ marginTop: "80px" }}>
//       <Typography textAlign={"center"} variant='h5'>Edit Data</Typography>

//       <Box component="form" onSubmit={SubmitInfo} sx={{ margin: "20px", padding: "10px", alignItems: "center" }}  >
//         <TextField
//           margin='normal'
//           fullWidth

//           id='name'
//           label="Enter The Name"
//           name='title'
//           value={user.title}
//           onChange={postUserData}
//           autoComplete='name'
//           autoFocus
//         />
//         <span style={{ color: "red" }}>
//           {" "}
//           {error.title} {" "}
//         </span>


//         <TextField
//           margin='normal'
//           fullWidth

//           id='description'
//           label="Enter The Description"
//           name='description'
//           autoComplete='description'
//           value={user.description}
//           onChange={postUserData}
//           autoFocus
//         />
//         <span style={{ color: "red", alignItems: "center" }}>
//           {" "}
//           {error.description} {" "}
//         </span>





//         <div class="mb-3">
//           <label for="exampleInputPassword1" class="form-label">
//             Image
//           </label>
//           <input
//             type="file"
//             onChange={(e) => setimg(e.target.files[0])}
//             name="img"
//             accept="image/*"
//             class="form-control"
//           />

//           {img !== "" && img !== undefined && img !== null ? (
//             <img
//               height="40px"
//               src={URL.createObjectURL(img)}
//               alt=""
//               className="upload-img"
//             />
//           ) : (
//             <>
//               {user?.image === "" ? (
//                 <img
//                   height="70px"
//                   // src={image}
//                   alt=""
//                   className="upload-img"
//                 />
//               ) : (
//                 <img
//                   height="60px"
//                   src={myproduct(detail.image)}
//                   alt=""
//                   className="upload-img"
//                 />
//               )}
//             </>
//           )}
//           {img === "" && <p>Drag or drop content here</p>}
//         </div>






//         <Button
//           type='submit'
//           variant='contained'
//           fullWidth
//           sx={{ marginTop: "20px" }}>
//           Submit
//         </Button>

//       </Box>


//     </Box>
//   </Container>

//   )
// }

// export default Edit



