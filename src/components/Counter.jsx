import React, { Component } from "react"

class Counter extends Component {
    render() { 
        return (
            <>
            <span className={this.classes()} >{this.format()}</span>
            <button onClick={()=>this.props.handleIncrement(this.props.count)} className="btn btn-secondary btn-sm" >Increment</button>
            <button onClick={()=>this.props.handleDelete(this.props.count.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </>
        );
        
    }
    format(){
       const {value} = this.props.count
        return value===0?"Zero":value
    } 

    classes(){
        let classes = "badge m-2 badge-";
        classes+=(this.props.count.value===0)?"warning":"primary"
        return classes
        
    }
   
}

export default Counter;