import React,{component} from 'react';
import { Button} from 'react-bootstrap';
import history from '../History';
import AddLink from '../components/AddLink';
import './Home.css';
import{BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1 className="primary h2">A video integration Web APP</h1>
           <img className="image" src={require('../images/youtube.jpeg')} /> 
           
           
           <Link to="/AddLink">
           <Button className="butt" renderAs="button">
           <span>start</span>
           </Button>  </Link>
        </div>
    )
}

export default Home

