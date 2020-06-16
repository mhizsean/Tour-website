import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './layouts/Navbar';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import About from './components/About';
import Footer from './layouts/Footer';

class App extends Component {
  render(){
    return (
        <React.Fragment>
        <NavBar />
            <Router>
                <Switch>
                    
                    <Route  path="/" exact component={Home} />
                    <Route  path="/about" exact component={About} />
                    <Route path="/blog" component={Blog}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/contact-us" component={Contact}/>
                    {/* <Route path="/pricing" component={Pricing}/> */}
                    <Route component={NotFound} />
                </Switch>        
            </Router>
        <Footer />
        </React.Fragment>
    )
  }
}

export default App;
