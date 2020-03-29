import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Map from 'pigeon-maps'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles({
  title: {
    marginBottom: '30px',
  },
  mapBox: {
    minHeight: '200px',
  }
});

export default function PostHeader(props) {
  const classes = useStyles();
  const post = props.post;

  // import Marker from 'pigeon-marker'
  // import Overlay from 'pigeon-overlay'

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography component="h4" variant="h4" align="left" className={classes.title}>{post.title}</Typography>
        <Typography component="h6" variant="h6"> {post.intro} </Typography>        
      </Grid>
      <Grid item sm={8} xs={12}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary={post.location.name} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary={post.date} />
          </ListItem>
        </List>
      </Grid>      
      <Grid item sm={4} xs={12} className={classes.mapBox}>
          <Map center={[50.879, 4.6997]} zoom={3}>
          </Map>
      </Grid>
    </React.Fragment>
  )
}
