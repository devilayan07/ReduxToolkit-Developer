import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDelete, fetchProduct } from '../../ReduxToolkit/ProductSlice'
import {  Typography, Card, CardMedia, CardContent, CardActions, Button, CardActionArea, Grid, Box, Pagination } from '@mui/material'
import { myproduct } from '../../../Component/Helper/Helper'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Productlist() {
    const Products=useSelector(state=>state.Product)
    const dispatch=useDispatch()
    const{totalpage}=useSelector(state=>state.Product)
    const[totalrecords,setPage]=useState()
    console.log(totalrecords,"totalrecords")
    console.log(Products)
    console.log(totalpage)
   

    const handleChange=(pageno)=>{
      setPage(pageno)
      dispatch(
        fetchProduct({

          page:pageno,
          perpage:10

        })
      )

    }

    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])

    const handleDelete=(id)=>{
      const formdata=new FormData()
      formdata.append("id",id)
      dispatch(fetchDelete(formdata)).then(()=>dispatch(fetchProduct()))
      Swal.fire({
        title: "Deleted",
        text: "Your file has been deleted",
        icon: "success"
      });

    }


    const confirmDeleted=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          handleDelete(id)
        }
      });



    }
  return (
    <section >
    <Typography variant='h5'textAlign={"center"} sx={{marginTop:"80px"}}>Available Products</Typography>
    <Grid container  >
      {
        Array.isArray(Products.product?.data) && Products.product?.data.map((item, index) =>
          <Grid item xs={12} md={4} sm={6} sx={{ marginTop: "30px", paddingLeft: "10px"}}>
            <Card sx={{ marginTop: "20px", maxWidth: 350, height: "450px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200px"
                  image={myproduct(item?.image)} />
                <CardContent>
                  <Typography variant='h5' component="div" textAlign="center">{item?.title}</Typography>
                  <Typography variant='h6' component="div" >{item?.description}</Typography>

                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Link to={`/product/${item._id}`}><Button variant='contained' size='small'>Details</Button></Link>
                 <Button size='small' variant='contained' onClick={()=>confirmDeleted(item._id)}>Delete</Button>
              </CardActions>

            </Card>
          </Grid>
        )
      }

    </Grid>
    <Box sx={{display:"flex",justifyContent:"center",mt:4}} >
    {Products.length!==0?(
        <Pagination
         count={totalpage}
         onChange={handleChange}
         totalrecords={totalrecords}
         sx={{alignItems:"center",justifyContent:"center"}}
        />

      ):(
      <></>
      )}

      

    </Box>
    </section>

  )
}

export default Productlist


