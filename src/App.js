import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Dino from './screens/Dino';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/dino" component={Dino} />

    </div>
  </Router>

);


export default App;
