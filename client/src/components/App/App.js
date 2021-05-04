import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Ocean from "../Pages/Ocean/Ocean";
import Post from "../Pages/Post/Post";
import Blog from "../Pages/Blog/Blog";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/ocean" component={Ocean} />
        <Route path="/ocean/:postId">
          <Post />
        </Route>
      </Router>
    </ThemeProvider>
  );
};

export default App;
