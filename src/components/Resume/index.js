// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Typography, Box, Button } from "@material-ui/core";
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import NavBar from "../../components/Navbar";

// const useStyles = makeStyles((theme) => ({
//   mainContainer: {
//     background: "#4bacb8",
//   },
//   timeLine: {
//     position: "relative",
//     padding: "1rem",
//     margin: "0 auto",
//     "&:before": {
//       content: "''",
//       position: "absolute",
//       height: "100%",
//       border: "1px solid yellow",
//       right: "40px",
//       top: 0,
//     },
//     "&:after": {
//       content: "''",
//       display: "table",
//       clear: "both",
//     },
//     [theme.breakpoints.up("md")]: {
//       padding: "2rem",
//       "&:before": {
//         left: "calc(50% - 1px)",
//         right: "auto",
//       },
//     },
//   },
//   timeLineItem: {
//     padding: "1rem",
//     borderBottom: "2px solid yellow",
//     position: "relative",
//     margin: "1rem 3rem 1rem 1rem",
//     clear: "both",
//     "&:after": {
//       content: "''",
//       position: "absolute",
//     },
//     "&:before": {
//       content: "''",
//       position: "absolute",
//       right: "-0.625rem",
//       top: "calc(50% - 5px)",
//       borderStyle: "solid",
//       borderColor: "#880e4f #880e4f transparent transparent",
//       borderWidth: "0.625rem",
//       transform: "rotate(45deg)",
//     },
//     [theme.breakpoints.up("md")]: {
//       width: "44%",
//       margin: "1rem",
//       "&:nth-of-type(2n)": {
//         float: "right",
//         margin: "1rem",
//         borderColor: "yellow",
//       },
//       "&:nth-of-type(2n):before": {
//         right: "auto",
//         left: "-0.625rem",
//         borderColor: "transparent transparent #880e4f #880e4f",
//       },
//     },
//   },
//   timeLineYear: {
//     textAlign: "center",
//     maxWidth: "9.375rem",
//     margin: "0 3rem 0 auto",
//     fontSize: "1.8rem",
//     background: "#880e4f",
//     color: "pink",
//     lineHeight: 1,
//     padding: "0.5rem 0 1rem",
//     "&:before": {
//       display: "none",
//     },
//     [theme.breakpoints.up("md")]: {
//       textAlign: "center",
//       margin: "0 auto",
//       "&:nth-of-type(2n)": {
//         float: "none",
//         margin: "0 auto",
//       },
//       "&:nth-of-type(2n):before": {
//         display: "none",
//       },
//     },
//   },
//   heading: {
//     color: "#880e4f",
//     padding: "3rem 0",
//     textTransform: "uppercase",
//   },
//   subHeading: {
//     color: "pink",
//     padding: "0",
//     textTransform: "uppercase",
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// const Resume = () => {
//   const classes = useStyles();
//   return (
//     <>
//       <NavBar />
//       <Box component="header" className={classes.mainContainer}>
//         <Typography variant="h4" align="center" className={classes.heading}>
//           My Experience
//         </Typography>
//         <Box component="div" className={classes.timeLine}>
//           <Typography
//             variant="h2"
//             className={`${classes.timeLineYear} ${classes.timeLineItem}`}
//           >
//             2018 - Present
//           </Typography>
//           <Box component="div" className={classes.timeLineItem}>
//             <Typography
//               variant="h5"
//               align="center"
//               className={classes.subHeading}
//             >
//               Server		
//             </Typography>
//             <Typography
//               variant="body1"
//               align="center"
//               style={{ color: "#880e4f" }}
//             >
//               Husk - Nashville, TN
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               align="center"
//               style={{ color: "yellow" }}
//             >
//              Server in a fine-dining establishment, consistently providing excellent service to a diverse clientele in a fast paced environment. Team oriented with a proactive attitude, constantly striving to improve operational efficiency while increasing sales, anticipating the needs of each guest, and resolving customer concerns and complaints expediently.
//             </Typography>
//           </Box>
//           <Typography
//             variant="h2"
//             className={`${classes.timeLineYear} ${classes.timeLineItem}`}
//           >
//             Education
//           </Typography>
//           <Box component="div" className={classes.timeLineItem}>
//             <Typography
//               variant="h5"
//               align="center"
//               className={classes.subHeading}
//             >
//               Bootcamp Certificate 
//             </Typography>
//             <Typography
//               variant="body1"
//               align="center"
//               style={{ color: "#880e4f" }}
//             >
//               Vanderbilt University - Nashville, TN 
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               align="center"
//               style={{ color: "yellow" }}
//             >
//             2020
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               align="center"
//               style={{ color: "yellow" }}
//             >
//            A 13-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.
//             </Typography>
//           </Box>
//           {/* <Typography
//             variant="h2"
//             className={`${classes.timeLineYear} ${classes.timeLineItem}`}
//           >
          
//           </Typography> */}
//           <Box component="div" className={classes.timeLineItem}>
//             <Typography
//               variant="h5"
//               align="center"
//               className={classes.subHeading}
//             >
//             Bachelor of Music
//             </Typography>
//             <Typography
//               variant="body1"
//               align="center"
//               style={{ color: "#880e4f" }}
//             >
//                Berklee College of Music - Boston, MA 
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               align="center"
//               style={{ color: "yellow" }}
//             >
//               2007 - 2010
//             </Typography>
            
//           </Box>
//           <Box>
//           <Button variant="contained"
//         color="primary"
//         className={classes.button}
//         startIcon={<CloudDownloadIcon />}
//         href="https://docs.google.com/document/d/1vmt9X4UER2_D5mKX5Sonmwj_5_cloqowUTW2ZFfQNhc/edit?usp=sharing"
//         target="_blank"
//       >
//            Download my Resume
//        </Button>
//        </Box>
//        </Box>
//       </Box>
//     </>
//   );
// };

// export default Resume;
