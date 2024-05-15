import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProfile} from '../../ReduxToolkit/ProfileSlice'
import { profile_pic } from '../../../Component/Helper/Helper'
import { reset_redirectTo } from '../../ReduxToolkit/AuthSlice'

function Home() {
    const {profile}=useSelector(state=>state.Profile)
    console.log(profile)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchProfile())
    },[dispatch])

    useEffect(()=>{
      dispatch(reset_redirectTo(null))
    },[dispatch])

  return (
    <Box sx={{paddingTop:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Container>
        <Grid container   sx={{            height: "500px",
            border: "2px solid white",
            justifyContent:"center",
            alignItems:"center",
            gap:"20px"
}}>
                        <Grid item lg={6} sx={{backgroundColor:"green",textAlign:"center"}}>
        <img
            src={profile_pic(profile?.profile_pic)}
            alt=""
            height={"200px"}
            width={"200px"}
            style={{ marginTop: "20px", borderRadius: "50%" }}
          />

           
           <Box>
            <Typography variant='h5'>Name:{profile && profile.first_name} {profile && profile.last_name}</Typography>
            <Typography variant='h5'>Email:{profile && profile.email}</Typography>
           </Box>

          </Grid>
  


        </Grid>

      </Container>

      
    </Box>
  )
}

export default Home
