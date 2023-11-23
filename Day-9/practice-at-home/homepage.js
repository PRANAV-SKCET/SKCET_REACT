import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the Home Page!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About Page</h2>
    <p>Learn more about us on the About Page.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact Page</h2>
    <p>Contact us through the Contact Page.</p>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);