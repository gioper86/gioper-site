import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import hero from "./../../../images/elnido.jpg";
import Articles from "./../../Articles/Articles";
import Header from "./../../Header/Header";

const useStyles = makeStyles({
  heroImage: {
    /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${hero})`,

    /* Set a specific height */
    minHeight: "350px",

    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    color: `white`,
  },
});

const Ocean = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      {/* <div className={classes.heroImage}>
        <Container maxWidth="md">
          <div className={classes.heroTitle}>
            <Typography component="h6" variant="h6">Underwater blog</Typography>
            <Typography component="subtitle2" align="center">
              Some kind of intro on the blog   
            </Typography>
          </div>
        </Container>
      </div> */}
      <Articles />
    </React.Fragment>
  );
};

export default Ocean;
