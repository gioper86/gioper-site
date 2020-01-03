import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Header from './../../Header/Header';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import ReactMarkdown from 'react-markdown';
import Map from 'pigeon-maps'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
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
  },
  mapBox: {
    minHeight: '200px',
  }
});

const Post = () => {
  const classes = useStyles();
  
  const markdown = 'ciao \n\n **ciao** e ciao';
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
          </Grid>
          <Grid item sm={8} xs={12}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary="Caletta Rovaglioso, Palmi, Italy" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText primary="16 August 2019" />
              </ListItem>
            </List>
            <Typography component="body1"> 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>          
          <Grid item sm={4} xs={12} className={classes.mapBox}>
            {/* <div  */}
              <Map center={[50.879, 4.6997]} zoom={3}>
              </Map>
            {/* </div> */}
          </Grid>
          <Grid item xs={12}>
            <Typography component="h6" align="center">
            </Typography>
            <Box m={2}>
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