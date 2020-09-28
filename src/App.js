import React,{component} from 'react';
import { Button} from 'react-bootstrap';
import{BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddLink from './components/AddLink';
import Arrange from './components/Arrange';
import PlayVideo from './components/PlayVideo';
import history from './History';

function App() {
  return (
    <>
    <Navbar/>
    
              
   <Route exact path='/' component={Home}/>
   <Route exact path='/addlink' component={AddLink}/>
   <Route exact path='/arrange' component={Arrange}/>
   <Route exact path='/playvideo' component={PlayVideo}/>
                
              
    </>
    
   
  );
}

export default App;
