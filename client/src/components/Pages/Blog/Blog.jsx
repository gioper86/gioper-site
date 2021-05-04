import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Header from "../../Header/Header";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  sectionHeader: {
    marginBottom: "20px",
  },
});

const Blog = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" className={classes.root}>
        <div>
          <Typography
            component="h5"
            variant="h5"
            className={classes.sectionHeader}
          >
            Tech Blog
          </Typography>
        </div>
        <div>
          <Typography component="body1" variant="body1">
            Some articles I have written about software engineering, engineering
            management and DIY electronics
          </Typography>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Blog;
