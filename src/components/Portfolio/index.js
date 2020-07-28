import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider
} from "@material-ui/core";
import NavBar from "../../components/Navbar";
import project1 from "../../assets/dayplannergif.gif";
import project2 from "../../assets/Eat-Da-Burger.gif";
import project3 from "../../assets/onhandgif.gif";
import project4 from "../../assets/passwordgengif.gif";
import project5 from "../../assets/simplysomm.gif";
import project6 from "../../assets/teamgen.gif";

const useStyles = makeStyles({
  mainContainer: {
    background: "#4bacb8",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto 5rem auto",
  },
  heading: {
    color: "#880e4f",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    
    <Box component="div" className={classes.mainContainer}>
      <NavBar />
      <Typography variant="h4" align="center" className={classes.heading}>
      Recent Projects
    </Typography>
    <Divider />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="200"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Day Planner
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Plan out your work day with this handy scheduler.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="https://kingkitty89.github.io/Day-Planner/"  target="_blank">
                Give it a Try!
              </Button>
              <Button size="small" color="primary" href="https://github.com/KingKitty89/Day-Planner" target="_blank">
                See the Code!
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="200"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Eat Da Burger
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Track your burger consumption.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="https://salty-ravine-30366.herokuapp.com/" target="_blank">
                Give it a Try!
              </Button>
              <Button size="small" color="primary" href="https://github.com/KingKitty89/burger" target="_blank" >
                See the Code!
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="200"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  OnHand
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A simple solution for meals and cocktails based on ingredients
                  you have OnHand.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="https://msplawn.github.io/on-hand/" target="_blank" >
                Give it a Try!
              </Button>
              <Button size="small" color="primary" href="https://github.com/msplawn/on-hand" target="_blank">
                See the Code!
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="200"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Password Generator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Create a strong and secure password.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="https://kingkitty89.github.io/PasswordGenerator" target="_blank">
                Give it a Try!
              </Button>
              <Button size="small" color="primary" href="https://github.com/KingKitty89/PasswordGenerator" target="_blank">
                See the Code!
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 5 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 5"
                height="200"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Simply Somm
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A sommelier at your fingertips.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="https://metric-drake-50737.herokuapp.com/" target="_blank">
                Give it a Try!
              </Button>
              <Button size="small" color="primary" href="https://github.com/KingKitty89/project2" target="_blank">
                See the Code!
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 6 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 6"
                height="200"
                image={project6}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Employee Template Generator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Build your team of employees.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/KingKitty89/employee-team-generator-template" target="_blank">
                See the Code!
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
