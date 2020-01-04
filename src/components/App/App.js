import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Ocean from '../Pages/Ocean/Ocean';
import Post from '../Pages/Post/Post';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const  App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/ocean" component={Ocean} />
        <Route path="/ocean/:postId">
          <Post />
        </Route>      
    </Router>  
  );
}
 
export default App;