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
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <NavBar />
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
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque
                  his de rebus et splendida est eorum et illustris oratio. Quod
                  autem principium officii quaerunt, melius quam Pyrrho;
                  Scaevola tribunus plebis ferret ad plebem vellentne de ea re
                  quaeri. Iam id ipsum absurdum, maximum malum neglegi. Quae
                  animi affectio suum cuique.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Give it a Try!
              </Button>
              <Button size="small" color="primary">
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
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque
                  his de rebus et splendida est eorum et illustris oratio. Quod
                  autem principium officii quaerunt, melius quam Pyrrho;
                  Scaevola tribunus plebis ferret ad plebem vellentne de ea re
                  quaeri. Iam id ipsum absurdum, maximum malum neglegi. Quae
                  animi affectio suum cuique.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Give it a Try!
              </Button>
              <Button size="small" color="primary">
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
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque
                  his de rebus et splendida est eorum et illustris oratio. Quod
                  autem principium officii quaerunt, melius quam Pyrrho;
                  Scaevola tribunus plebis ferret ad plebem vellentne de ea re
                  quaeri. Iam id ipsum absurdum, maximum malum neglegi. Quae
                  animi affectio suum cuique.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Give it a Try!
              </Button>
              <Button size="small" color="primary">
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
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque
                  his de rebus et splendida est eorum et illustris oratio. Quod
                  autem principium officii quaerunt, melius quam Pyrrho;
                  Scaevola tribunus plebis ferret ad plebem vellentne de ea re
                  quaeri. Iam id ipsum absurdum, maximum malum neglegi. Quae
                  animi affectio suum cuique.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Give it a Try!
              </Button>
              <Button size="small" color="primary">
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
                  Project 5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque
                  his de rebus et splendida est eorum et illustris oratio. Quod
                  autem principium officii quaerunt, melius quam Pyrrho;
                  Scaevola tribunus plebis ferret ad plebem vellentne de ea re
                  quaeri. Iam id ipsum absurdum, maximum malum neglegi. Quae
                  animi affectio suum cuique.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Give it a Try!
              </Button>
              <Button size="small" color="primary">
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
                  Project 6
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque
                  his de rebus et splendida est eorum et illustris oratio. Quod
                  autem principium officii quaerunt, melius quam Pyrrho;
                  Scaevola tribunus plebis ferret ad plebem vellentne de ea re
                  quaeri. Iam id ipsum absurdum, maximum malum neglegi. Quae
                  animi affectio suum cuique.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Give it a Try!
              </Button>
              <Button size="small" color="primary">
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
