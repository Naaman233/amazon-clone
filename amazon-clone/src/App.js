import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// function App() {
//   return (
//     <div className="App">
//       <header>
//         <h1>Building an amazon clone with React Js</h1>
//       </header>
//     </div>
//   );
// }

function App(){
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <h1> Checkout </h1>
        </Route>
        <Route path="/login">
          <h1> Login page</h1>
        </Route>
        <Route path="/purchases">
          <h1> purchases </h1>
        </Route>
        {/*This is the default page */}
        <Route path="/">
          <div className="app">
            <header>
              <h1>Building an amazon clone with React JS</h1>
            </header>
          </div>
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
