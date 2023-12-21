import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from "react-router-dom"            // as Router, or Routes, or Route 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <nav>
        <Link className='someClass' to="/">Home</Link>
        <Link className='someClass' to="about">About</Link>

      </nav>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              count={count} 
              setCount={setCount}
              />
          } />   
        <Route path="/about" element={<About count={count}/>} /> 
      </Routes>
    </BrowserRouter>
  )
}


function Home(props) {
//  console.log(props)
  let count = props.count
  return (
    <div>
        <h1>Hello, React Router!</h1>
        
        <button onClick={() => props.setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

function About(props) {
    return (
      <>
        <h1>About page goes here! 🎉</h1>
        <button>count is {props.count}</button>
      </>
    )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

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
