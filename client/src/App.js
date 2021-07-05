// import './App.css'; 

// import 'react-toastify/dist/ReactToastify.css';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="App">
//       <ToastContainer />
//      <Contact />
//     </div>
//   );
// }

// export default App;

import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Cal from "./components/Calendar/Calendar";
import Contact from "./components/Contact/Contact";
import Learn from "./components/SuperSecret/Learn";
import hotDrink from "./components/Menu/hotDrinkMenu";
import coldDrink from "./components/Menu/coldDrinkMenu";
import food from "./components/Menu/foodMenu";
import Footer from "./components/Footer/Footer";
import MenuData from "./components/MenuData/MenuData";
import food_menu from "./menu.json";
import './App.css';



function App() {
  return (
    
   <div>
    <Router>
      <div className="wrapper">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} MenuData={MenuData} food_menu={food_menu}/>
        <Route exact path="/calendar" component={Cal} />
        <Route path="/contact" component={Contact} />
        <Route path="/contact/learn" component={Learn} />
        <Route exact path="/hotDrink" component={hotDrink} />
        <Route exact path="/coldDrink" component={coldDrink} />
        <Route exact path="/food" component={food} />
        <Footer />
      </div>
    </Router>
    </div>
    
    
  );
}

export default App;

