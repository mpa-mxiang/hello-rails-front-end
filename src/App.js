import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the Hello React Frontend App!</p>
  </div>
);

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/greeting">Greeting</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  </Router>
);

export default App;