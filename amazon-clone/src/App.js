import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'


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
          <Header />
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
            <Header />
            <Home />
          </div>
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
