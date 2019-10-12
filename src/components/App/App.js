import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Ocean from '../Pages/Ocean/Ocean';

const  App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/ocean" component={Ocean} />
    </Router>  
  );
}
 
export default App;