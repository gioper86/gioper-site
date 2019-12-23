import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Header from './../../Header/Header';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import ReactMarkdown from 'react-markdown';
import Map from 'pigeon-maps'
// import Marker from 'pigeon-marker'
// import Overlay from 'pigeon-overlay'

const useStyles = makeStyles({
  title: {
    marginBottom: '30px',
  },
  videoWrapper: {
      position: 'relative',
      width: '100%',
      height: 0,
      paddingBottom: '56.25%',
  },
  video: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
  }  
});

const Post = () => {
  const classes = useStyles();
  
  const markdown = 'ciao **ciao** e ciao';
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Divider variant="middle" />
      <br /><br />
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography component="h4" variant="h4" align="center" className={classes.title}>Title</Typography>
            {/* TODO set same max width to this guy */}
            <Map center={[50.879, 4.6997]} zoom={3} width={200} height={150}>
            </Map>           
            <Typography component="h6" align="center"> 
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Box m={4}>
              <div className={classes.videoWrapper}>
                <iframe title="postVideo" className={classes.video} src="https://www.youtube.com/embed/QlAJSdJIBqU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
              </div>
            </Box>
            <Typography component="body1"> 
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              <ReactMarkdown
                source={markdown}
                escapeHtml={false}
              />      
            </Typography>
             
          </Grid>
        </Grid>
      </Container>      
    </React.Fragment>    

  );
}

export default Post;