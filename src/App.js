import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Container, Typography} from "@material-ui/core";
import "./App.css";
import Show from "./components/Pages/Show";
import About from "./components/Pages/About";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Pages/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/show" component={Show} />
          <Route path="/show/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
return(
  <div>
    <Container maxWidth="lg"  >
      <h1>Welcome Home</h1>
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
    </Container>
  </div>
)};
export default App;
