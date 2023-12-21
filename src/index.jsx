import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from "react-router-dom"            // as Router, or Routes, or Route 
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <h1>Hello, React Router!</h1>
  )
}

//example.com/about
//example.com/contact
//example.com/blog/blog-article-1
//example.com/blog/1234



function About() {
    return (
        <h1>About page goes here! 🎉</h1>
    )
}
/**
 * Challenge:
 * 1. Create an "About" component (just render another h1 that says
 *    "About page" or something more interesting of your choosing).
 * 2. Create a new Route to render the About component when the path
 *    is /about
 */

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />   
      <Route path="/about" element={<About />} /> 
    </Routes>
  </BrowserRouter>
    
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );

/*
npm create vite@latest
√ Project name: ... react-router-tutorial
√ Select a framework: » React
√ Select a variant: » JavaScript
cd react-router-tutorial
npm install
npm run dev


npm install react-router-dom localforage match-sorter sort-by
npm run dev

*/
