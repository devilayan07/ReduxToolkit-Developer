import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid, Typography, Box,  Button } from '@mui/material';
import { Link } from 'react-router-dom';
import image1 from "../../../img/Laptop.jpg"
import image2 from "../../../img/Phone.jpg"
import image3 from "../../../img/Headphone.jpg"
import image4 from "../../../img/TV.jpg"
import image5 from "../../../img/Speaker.jpg"
import image6 from "../../../img/Watch.jpg"

function Footer() {
  // const [value, setValue] = useState();

  // const handleChange = (e, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <section>
      <Grid container sx={{ backgroundColor: '#1c1e32', marginTop: '50px' }} spacing={2}>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="body1" textAlign="center">
            {' '}
            <LocationOnIcon /> Ballygaunge, Kolkata, West Bengal{' '}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {' '}
            <LocalPhoneIcon /> 6290652764{' '}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {' '}
            <EmailIcon /> info@gmail.com{' '}
          </Typography>
          <Typography variant="h4" textAlign="center" sx={{ marginTop: "10px" }}>FOLLOW US</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }}>
            <XIcon />
            <FacebookIcon />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            USEFUL LINKS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/">Home</Button>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/create">Create</Button>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/product">Product</Button>
            <Button sx={{ color: 'white', textAlign: 'center', marginBottom: '10px' }} component={Link} to="/login">Login</Button>
          </Box>


        </Grid>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            PRODUCT GALLERY
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
            <Grid item xs={4}>
              <img src={image1} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image2} alt="" height="100px" />
            </Grid>
            <Grid item xs={4}>
              <img src={image3} alt="" style={{ height: "70px", width: "100px" }} />
            </Grid>
            <Grid item xs={4}>
              <img src={image4} alt="" style={{ height: "80px", width: "100px" }} />
            </Grid>
            <Grid item xs={4}>
              <img src={image5} alt="" style={{ height: "80px", width: "100px", marginLeft: "20px" }} />
            </Grid>
            <Grid item xs={4}>
              <img src={image6} alt="" height="80px" />
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ color: 'white' }}>
          <Typography variant="h5" textAlign="center" sx={{ marginTop: '20px' }}>
            OTHERS
          </Typography>
          <Typography variant="body1" textAlign="center">
            Private Policy
          </Typography>
          <Typography variant="body1" textAlign="center">
            Term & Condition
          </Typography>
          <Typography variant="body1" textAlign="center">
            Return & Refund
          </Typography>
          <Typography variant="body1" textAlign="center">
            Support
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default Footer;
