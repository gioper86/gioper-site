import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EventIcon from '@material-ui/icons/Event';
import { Link } from "react-router-dom";
// import { posts } from '../../services/dataService';
import InstaFeed from '../../services/instaMock';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontSize: 14,
  }
});

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '20px',
  },
  media: {
    height: '300px'    
  },
  cardLinks: {
    color: 'inherit',
    textDecoration: 'none',
  },
  sectionHeader: {
    marginBottom: '20px',
  },
  postContent: {
    whiteSpace: 'pre-line'
  }
});
  
const Articles = () => {
  const classes = useStyles();
  console.log(InstaFeed.graphql.user.edge_owner_to_timeline_media.edges);

  const posts = InstaFeed.graphql.user.edge_owner_to_timeline_media.edges.map((apost) => {
    const post = apost.node;
    return (
      <Grid item md={6} xs={12} key={post.id}>
      <Card className={classes.root}>
        <Link to={`/ocean/${post.id}`} className={classes.cardLinks}>
          {/* <CardHeader
            title="a"
            subheader="b"
          /> */}
          <CardMedia
            className={classes.media}
            image={post.thumbnail_src}
            title=""
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon style={{fill: "red"}} /> {post.edge_liked_by.count}
            </IconButton>
            <IconButton aria-label="add to favorites">
              <EventIcon /> 19/07/2020
            </IconButton>            
          </CardActions>          
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.postContent}>
              {post.edge_media_to_caption.edges[0].node.text}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>   
    );
  });
  
  return (
    <Container maxWidth="md" className={classes.root}>
      <div><Typography component="h5" variant="h5" align='center' className={classes.sectionHeader}>Latest posts</Typography></div> 
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
            {posts}
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

export default Articles;