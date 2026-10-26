import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <header className="header">
          <h1 className="logo">My Website</h1>

          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="*"
              element={
                <div className="page">
                  <h2>404 - Page Not Found</h2>
                  <Link to="/">Go to Home</Link>
                </div>
              }
            />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2026 My Website | React Router Navigation</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;