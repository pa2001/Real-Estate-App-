import './App.css';
import React ,{useState} from 'react';
import DropDown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import { Route, Switch } from "react-router-dom";
function App() {
  const [isOpen,setIsOpen]=useState(false)
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <Switch>
        <Route exact path="/"/>
        <Route exact path="/Contact/"/>
        <Route exact path="/About"/>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
