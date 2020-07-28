import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import NavBar from "../../components/Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "#880e4f",
    borderColor: "#880e4f",
  },
}));

//Custom styling for element
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#880e4f",
    },
    "& label": {
      color: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "yellow",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <Box component="div" style={{ background: "#4bacb8", height: "100vh" }}>
      <NavBar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h4"
            style={{
              color: "#880e4f",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Contact me...
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: "#880e4f",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Phone: 954.914.0529
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: "#880e4f",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
           Email: jessicahelft@gmail.com
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />

          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />

          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            submit
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
