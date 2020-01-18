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
import { useParams } from "react-router-dom";
import { getPostById } from '../../../services/dataService';
import PostHeader from './../../PostHeader/PostHeader';

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

const VideoBox = (props) => {
  const classes = useStyles();

  return (
    <Box m={2}>
      <div className={classes.videoWrapper}>
        <iframe title="postVideo" className={classes.video} src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
      </div>
    </Box>
  )
};

const MarkdownBox = (props) => {
  return (
    <Typography component="body1"> 
      <ReactMarkdown
        source={props.text}
        escapeHtml={false}
      />      
    </Typography>
  );
}

const contentTypeToComponent = {
  markdown: MarkdownBox,
  video: VideoBox,
}

const Post = () => {
  const { postId } = useParams();
  const post = getPostById(postId); // TODO: handle error when postId is not found
  const contentComponents = post.content.map(item=> {
    const Component = contentTypeToComponent[item.type];
    return <Component {...item.parameters} />
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Divider variant="middle" />
      <br /><br />
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <PostHeader post={post}/>
          <Grid item xs={12}>
            {contentComponents}

          </Grid>
        </Grid>
      </Container>      
    </React.Fragment>
  );
}

export default Post;