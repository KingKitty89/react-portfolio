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
    color: "tomato",
    borderColor: "tomato",
  },
}));

//Custom styling for element
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <NavBar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Contact me...
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
            Contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
