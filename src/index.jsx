import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"

/**
 * Challenge:
 * https://scrimba.com/learn/reactrouter6/vanlife-project-bootstrapping-co8bc40b191eec875ecf00b23
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <BrowserRouter>
      <header>
        {/* <Link to="/">#VANLIFE</Link> */}
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          {/* <Link to="/">Home</Link> */}
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

// function Home() {
//   return (
//     <h1>Start here</h1>
//   )
// }

// function About() {
//   return (
//     <h1>About page goes here!</h1>
//   )
// }

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);