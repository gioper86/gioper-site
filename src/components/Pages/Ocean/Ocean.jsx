import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import hero from './../../../images/hero.jpg';
import Articles from './../../Articles/Articles';

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
  heroTitle: {
    paddingTop: '15px',
  },
  link: {
    margin: '6px',
    fontWeight: 'bold',
  },
});

const Ocean = () => {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.intro}>
        <Typography component="h4" variant="h4" align="center">Giovanni Perna</Typography>
        <Typography component="subtitle2" align="center"> 
          Engineering manager @ Skyscanner <span role="img">&#128745;</span>
        </Typography>
        <Typography component="subtitle2" align="center" display="block"> 
          Ocean lover <span role="img">&#128044;</span>
        </Typography>
        <Typography>
          <Link href="" className={classes.link}>
            About
          </Link>
          <Link href="" className={classes.link}>
            Underwater blog
          </Link>
          <Link href="" className={classes.link}>
            Contacts
          </Link>
        </Typography>
      </Container>
      <div className={classes.heroImage}>
        <Container maxWidth="md">
          <div className={classes.heroTitle}>
            <Typography component="h6" variant="h6">Underwater blog</Typography>
            <Typography component="subtitle2" align="center">
              Some kind of intro on the blog   
            </Typography>
          </div>
        </Container>
      </div>
      <Articles />
    </React.Fragment>    

  );
}

export default Ocean;