import React from 'react'
import './PlayVideo.css'
import ReactPlayer from 'react-player';
class PlayVideo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            videoitems:this.props.location,
           
        }
       
    }
    
   play(key)
    {
        const { items } = this.state.videoitems;
        console.log("startedddd");
         if (items) {
              
            const listItems=items.map(item => {
                if(item.key!==key)
                {
                    console.log(item.key)
                   
                }
                  
                return <div className="videos" key={item.key}>
                    <p>
                  
                   
                    </p>
                    
                </div>
            })
            return(
                <>
                 <div>{listItems}</div>
                </>
            )
        }
        
     
          

    }
    render(){
    const { items } = this.state.videoitems;
    console.log(items);
    if (items) {
              
        const listItems=items.map(item => {
           
            return <div className="videos" key={item.key}>
                <p>
              
                <ReactPlayer id={item.key} onPlay={()=>this.play(item.key)} url={item.text} controls="true"
                ></ReactPlayer>
                </p>
                
            </div>
        })
        return(
            <>
             <div>{listItems}</div>
            </>
        )
    }
    return (
        <div>
            <h1>your videos</h1>
        </div>
    )

    }
    
    
}

export default PlayVideo
