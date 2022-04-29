import React, { Component } from "react"

class Counter extends Component {
    state = { 
        count:0
     } 
    
    render() { 
        return (
            <>
            <span style={{marginLeft:10, color:"white", borderRadius:10,backgroundColor:"blue", padding:3}} >{this.formatCount()}</span>
            <button style={{marginTop:10, marginLeft:30, backgroundColor:"snow", padding:5, borderRadius:10}} >Increment</button>
            </>
        );
        
    }
    formatCount(){
        {this.state.count==0&&"Zero"}
    }
}

export default Counter;