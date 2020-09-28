import React from 'react'
import AddLink from './AddLink';
import{BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import { Button} from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Arrange.css';

class Arrange extends React.Component
{
    constructor(props)
    {
        super(props);
       
        this.state={
            users:this.props.location.items
        }
      
    }
 
    onDragEnd = result => {
        const { destination, source, reason } = result;
      
        if (!destination || reason === 'CANCEL') {
          return;
        }
    
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
    
        const users = Object.assign([], this.state.users);
        const droppedUser = this.state.users[source.index];


        users.splice(source.index, 1);
        users.splice(destination.index, 0, droppedUser);
        this.setState({
          users
        });
      }

      renderUsers = (item, index) => {
        return <Draggable
            key={index}
            draggableId={index+' '}
            index={index}>

            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div id="arrangeL" className='item'>
                        <div>{index+1}</div>
                       
                        <div  className='name'>
                            <div>{item.text}</div>
                          
                        </div>

                    </div>
                </div>
            )}



        </Draggable>
    }
  
    render() {
        const { items } = this.props.location;
        console.log(items);
        console.log("itemvvvvv")
        console.log(this.state.users);
        if (items) {
        return (
          
        <DragDropContext onDragEnd={this.onDragEnd}>
            <div className='container'>
                <div className='users'>
               
                <h1 id="reorderh">Reorder the List </h1> 
                     
                     <Link to={{
                         pathname: "/PlayVideo",
                         items: this.state.users
 
                      }}
                     >
                     <Button id="arrangebutton" renderAs="button">
                     <span>Next</span>
                     </Button>  </Link>
                    <Droppable droppableId="dp1">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {this.state.users.map(this.renderUsers)}
                                {provided.placeholder}
                            </div>
                        )}

                      </Droppable>
                      
 
                    
                </div>
                
            </div>
        </DragDropContext>);
        
        }
        return(
                    <>
                         <h1 id="reorderh">Reorder the List </h1> 
                     
                    <Link to={{
                        pathname: "/PlayVideo",
                        items: this.state.users

                     }}
                    >
                    <Button id="arrangebutton" renderAs="button">
                    <span>Next</span>
                    </Button>  </Link>
                                
            
                    </>)
    }

}


export default Arrange
