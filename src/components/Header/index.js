import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box, Button } from "@material-ui/core";
import avatar from "../../Images/avatar.png";
import Typed from "react-typed";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#880e4f",
  },
  subtitle: {
    color: "yellow",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  button: {
    color: "#880e4f", 
    background: "transparent",
    
   },
  
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Jessica Helft" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Hello, my name is Jessica Helft."]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["I am a Full Stack Web Developer living in Nashville, TN.", "I specialize in: web design, web development, and the MERN Stack."]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <Button style={{ padding: "20px 20px", fontSize: "20"}} variant="contained"
        // color="primary"
        className={classes.button}
        startIcon={<CloudDownloadIcon />}
        href={require("/Users/jessicahelft/Desktop/PROJECTS/react-portfolio/src/ resume.pdf")}
        target="_blank"
      >
           Download my Resume
       </Button>
    </Box>
    
  );
};
export default Header;
