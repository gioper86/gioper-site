import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  intro: {
    textAlign: 'center',
    padding: '20px',
  },
  heroTitle: {
    paddingTop: '15px',
  },
  link: {
    margin: '6px',
    fontWeight: 'bold',
  },
});

const Header = () => {
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
    </React.Fragment>    

  );
}

export default Header;