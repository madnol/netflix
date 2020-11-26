import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
import React from "react";
import "./App.css";
import JumboCarousel from "./components/JumboCarousel";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowDetail from "./components/ShowDetail";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <JumboCarousel />
        <Route
          path="/"
          exact
          // render={(props) => (
          //   <Home title="Stefano" history={props.history} location={props.location} match={props.match} />
          // )}
          render={(
            props // props are history, location, match
          ) => <Home {...props} />} // in this way you can pass your own props along with the router ones
        />
        <Route path="/details/:something" component={ShowDetail} />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
