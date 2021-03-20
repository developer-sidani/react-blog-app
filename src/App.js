import Nav from "./Nav";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Error";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
