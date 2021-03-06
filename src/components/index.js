import React from "react";
import NavBar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  particlesCanvas: {
    position: "absolute",
    opacity: "0.4"
  },

});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 5,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true
              },
            },
          },
        }}
        
      />
    </>
  );
};

export default Home;
