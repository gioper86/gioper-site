import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '20px',
  },
});
  
const Articles = () => {
  const classes = useStyles();
  const posts = ['post1', 'post2', 'post3', 'post4', 'post5'];
  const listPosts = posts.map((post) =>
    <Grid item md={6} xs={12} key={post}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
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
        </CardActions>
      </Card>
    </Grid>
  );

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3}>
        {listPosts}
      </Grid>
    </Container>
  );
}

export default Articles;