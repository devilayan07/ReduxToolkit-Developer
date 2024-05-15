import React, { useState } from 'react'
import { Container,Box,TextField,Typography,Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchCreate } from '../../ReduxToolkit/CreateSlice';

function Create() {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const[image,setImage]=useState()
    const dispatch=useDispatch()

    const onSubmit=(data)=>{
        const formdata=new FormData()
        formdata.append("title",data.title)
        formdata.append("description",data.description)
        formdata.append("image",data.image[0])
         dispatch(fetchCreate(formdata))


    }


  return (
    <Container component="main" maxWidth="xs">

    <Box
      sx={{ marginTop: "80px" }}>
      <Typography textAlign={"center"} variant='h5'>Create Data</Typography>

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

<TextField
    {...register("image", { required: true, maxLength: 20 })}
    fullWidth
    margin="normal"
    variant="outlined"
    type="file"
    error={!image && !!errors.image} 
    helperText={!image && errors.image && "Image is required"} 
    onChange={(e) => setImage(e.target.files[0])}
/>


{image && (
                <img
                  style={{ height: "180px" }}
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="upload-img"
                />
              )}


       
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

export default Create


// import React, { useState } from "react";
// import { Box, TextField, Typography, Container, Button } from "@mui/material";

// import { useDispatch } from "react-redux";
// import { fetchCreate } from "../../ReduxToolkit/CreateSlice";

// function Create() {
//   const dispatch=useDispatch()
//   const [user, setUser] = useState({
//     title: "",

//     description: "",
    
//   });

//   const [error, setError] = useState("");
//   const [img, setimg] = useState("");
//   const validation = () => {
//     let error = {};
//     if (!user.title) {
//       error.name = "Name is Required";
//     }
//     if (!user.description) {
//       error.description = "Description is Required";
//     }
//     return error;
//   };

//   console.log(error);

//   const SubmitInfo = async (e) => {
//     e.preventDefault();
//     setError(validation());
//     // toast.success("Create in successfully");

//     const formdata = new FormData();

//     formdata.append("title", user.title);
//     formdata.append("description", user.description);
//     formdata.append("image", img);
//     dispatch(fetchCreate(formdata))

//   };

//   let name, value;
//   const postUserData = (e) => {
//     name = e.target.name;
//     value = e.target.value;

//     if (name === "title") {
//       if (value.length === 0) {
//         setError({ ...error, title: "Title is Required" });
//         setUser({ ...user, title: "" });
//       } else {
//         setError({ ...error, title: "" });
//         setUser({ ...user, title: value });
//       }
//     }

//     if (name === "description") {
//       if (value.length === 0) {
//         setError({ ...error, description: " Description is Required" });
//         setUser({ ...user, description: "" });
//       } else {
//         setError({ ...error, description: "" });
//         setUser({ ...user, description: value });
//       }
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box sx={{ marginTop: "80px" }}>
//         <Typography textAlign="center" variant="h5">Create Data</Typography>

//         <Box
//           component="form"
//           onSubmit={SubmitInfo}
//           sx={{ margin: "20px", padding: "10px" }}
//           boxShadow={5}
//         >
//           <TextField
//             margin="normal"
//             fullWidth
//             id="name"
//             label="Enter The Title"
//             name="title"
//             onChange={postUserData}
//             autoComplete="name"
//             autoFocus
//           />
//           <span style={{ color: "red" }}>{""} {error.title}{""} </span>




//           <TextField
//             margin="normal"
//             fullWidth
//             id="description"
//             label="Enter The Description"
//             name="description"
//             autoComplete="description"
//             onChange={postUserData}
//             autoFocus
//           />
//           <span style={{ color: "red" }}>{""} {error.description}{""} </span>



//           <div class="mb-3">
//             <label for="exampleInputPassword1" class="form-label">
//               {" "}
//               Image
//             </label>
//             <input
//               type="file"
//               onChange={(e) => setimg(e.target.files[0])}
//               name="img"
//               accept="image/*"
//               class="form-control"
//             />
//             {img !== "" && img !== undefined && img !== null ? (
//               <img
//                 style={{ height: "180px" }}
//                 src={URL.createObjectURL(img)}
//                 alt=""
//                 className="upload-img"
//               />
//             ) : (
//               <>{img === "" && <p>Drag or drop content here</p>}</>
//             )}
//           </div>

//           {/* <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ marginTop: "20px" }}
//           >
//             Submit
//           </Button> */}


 
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 fullWidth
//                 size="large"
//                 type="submit"
//                 // onClick={handelSubmit}
//               >
//                 Create
//               </Button>

//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Create;















// .......EXPLANATION.......


// Constructing FormData:

// It creates a new instance of FormData. FormData objects provide a way to easily construct a set of key/value pairs representing form fields and their values, which can then be sent with XMLHttpRequest or fetch().
// The title, description, and image data are appended to the FormData object using the append method. The title and description are taken from the user state, while the image is taken from the img state.
        //  These lines append data to the formdata object.
// The append() method is used to add a new field with the specified name and value to the FormData object.
// The user.title and user.description values represent the title and description entered by the user, respectively.
// The img value represents the image selected by the user.




// Sending POST Request:

// It sends a POST request to the server using Axios (axiosInstance.post).
// The URL for the request is "product/create", which is where the form data will be sent for processing.
// The FormData object containing the form data is passed as the second argument to axiosInstance.post.
// Additionally, it sets the Content-Type header to multipart/form-data, indicating that the form data being sent contains binary data (like images).

      //  Here, an asynchronous POST request is sent to the server using Axios.
// The URL for the POST request is "product/create", which is the endpoint where the data will be sent to create a new product.
// The formdata object containing the form data is passed as the second argument to axiosInstance.post(). This includes the title, description, and image data.
// Additionally, a headers object is provided as the third argument, specifying that the content type is multipart/form-data. This is necessary when sending form data that includes files (such as images) to the server.

        




// headers: This is an object containing key-value pairs representing HTTP headers to be included in the request. HTTP headers provide additional information about the request or response.

// "Content-type": "multipart/form-data":

// Content-type is a commonly used HTTP header that indicates the media type of the resource being sent or received. It specifies the format of the content enclosed in the request or response body.
// In this case, "multipart/form-data" specifies the content type as multipart form data. This content type is typically used when submitting forms that include files (such as images) or binary data.
// When sending form data that includes files, it's important to specify the content type as multipart/form-data to ensure that the server can properly parse the data.import { useDispatch } from 'react-redux';