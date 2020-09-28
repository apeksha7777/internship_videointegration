import React,{Component} from 'react'
import ListItem from './ListItem';
import { Button} from 'react-bootstrap';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import './AddLink.css'
import{BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
library.add(faTrash);

class AddLink extends React.Component
{
        constructor(props)
    {
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput=this.handleInput.bind(this);
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
   handleInput(e){
       this.setState({
        currentItem:{
            text:e.target.value,
            key:Date.now()
        }

       })
   }
   addItem(e){
      e.preventDefault();
      const newItem=this.state.currentItem;
      if(newItem.text!==""){
              const newItems=[...this.state.items,newItem];
              this.setState({
                  items:newItems,
                  currentItem:{
                    text:'',
                    key:''
                }
              })
             
      }
     
   }
   deleteItem(key)
   {
       const filteredItems=this.state.items.filter(item=>item.key!==key);
       this.setState({
           items:filteredItems
       })
   }
    render(){
        return(
            <div >
              
                       <h1 id="add">Add Link</h1> 
                       <form className="forml" id="to-do-form" onSubmit={this.addItem}>
                         <input type="text" placeholder="enter youtube link" size="50"
                         value={this.state.currentItem.text} onChange={this.handleInput} required></input>
                         <button id="addLink" type="submit">ADD</button>
                         <br></br>
                         <Link to={{
                            pathname: "/Arrange",
                            items: this.state.items

                         }}
                        >
                        <Button  id="addButt" renderAs="button">
                        <span>Next</span>
                        </Button>  </Link>
                       
                       </form>
                       <ListItem items={this.state.items}
                                 deleteItem={this.deleteItem}
                       ></ListItem>
                      </div>
                      
          

        )
    }
}

export default AddLink
