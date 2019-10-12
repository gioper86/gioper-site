import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import hero from './../../../images/hero.jpg';

const useStyles = makeStyles({
  intro: {
    textAlign: 'center',
    padding: '20px',
  },
  heroImage: {
    /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${hero})`,
  
    /* Set a specific height */
    minHeight: '350px',
  
    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    color: `white`,
  },
});

const Ocean = () => {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.intro}>
        <Typography component="h4" variant="h4" align="center">Giovanni Perna</Typography>
        <Typography component="subtitle2" variant="subtitle2" align="center"> 
          Engineering manager @ Skyscanner <span role="img">&#128745;</span>
        </Typography>
        <Typography component="subtitle2" variant="subtitle2" align="center" display="block"> 
          Ocean lover <span role="img">&#128044;</span>
        </Typography>
        <div>{hero}</div>
    </Container>
    <div className={classes.heroImage}>
      <Container maxWidth="md">
        <Typography component="h4" variant="h4">Freediving blog</Typography>
        <Typography component="subtitle2" variant="subtitle1" align="center"> 
          I love freediving, underwater there's lots of cool stuff
        </Typography>
      </Container>
    </div>
    </React.Fragment>    

  );
}

export default Ocean;