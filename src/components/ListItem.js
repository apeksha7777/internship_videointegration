import React from 'react';
import './ListItem.css';

function ListItem(props){
    const items=props.items;
    const listItems=items.map(item => {
        return <div className="list" key={item.key}>
            <p id="listLink">{item.text}
            <span>
            <i className="fas fa-trash" onClick={
               () => props.deleteItem(item.key)
            }></i>
            </span></p>
            
        </div>
    })
    return(
        <div>{listItems}</div>
    )
}
export default ListItem