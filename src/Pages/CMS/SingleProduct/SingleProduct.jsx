import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchDetails } from '../../ReduxToolkit/ProductSlice'
import { Box,CardActionArea,Container,Button,CardActions,Typography,CardContent,CardMedia,Card } from '@mui/material';
import { myproduct } from '../../../Component/Helper/Helper';


function SingleProduct() {
    const{id}=useParams()
    console.log(id)
    const{detail}=useSelector(state=>state.Product)
    console.log(detail)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchDetails(id))
    },[dispatch,id])

  return (
    <>

<Box>
  
  <Typography variant='h5' textAlign="center" sx={{ marginTop: "80px" }}>Product Details</Typography>
  <Container sx={{justifyContent:"center",display:"flex"}}>
      <Card sx={{ marginTop: "20px", width: "500px", height: "550px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            image={myproduct(detail?.image)} />
          <CardContent>
            <Typography variant='h5' component="div" textAlign="center">Title:{ detail && detail.title}</Typography>
            <Typography variant='h6' component="div">Description:{detail && detail.description}</Typography>


          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "center",marginTop:"50px" }}>
            <Link to={`/edit/${detail._id}`}> <Button variant='contained'>Edit </Button>   </Link>
        </CardActions>
      </Card>
      </Container>
</Box>


    </>
  )
}

export default SingleProduct
