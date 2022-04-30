import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {

  render() {
    const {handleReset, counters, handleDelete, handleIncrement} = this.props
    return (
      <div>
        <button onClick={handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map((count) => (
          <li style={{listStyle:"none"}} key={count.id}><Counter count={count} handleDelete={handleDelete} 
          handleIncrement={handleIncrement}/></li>
        ))}
      </div>
    );
  }
}

export default Counters;
