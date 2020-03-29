import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { posts } from '../../services/dataService';

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
  cardLinks: {
    color: 'inherit',
    textDecoration: 'none',
  },
  sectionHeader: {
    marginBottom: '20px',
  }
});
  
const Articles = () => {
  const classes = useStyles();
  const listPosts = posts.map((post) =>
    <Grid item md={6} xs={12} key={post.id}>

      <Card className={classes.root}>
        <Link to={`/ocean/${post.id}`} className={classes.cardLinks}>
          <CardHeader
            title={post.title}
            subheader={post.publishingDate}
          />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.intro}</Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );

  return (
    <Container maxWidth="md" className={classes.root}>
      <div><Typography component="h5" variant="h5" align='center' className={classes.sectionHeader}>Latest posts</Typography></div> 
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
            {listPosts}
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

export default Articles;