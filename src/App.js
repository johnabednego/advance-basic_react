import React, { Component } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Nav";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement=counter=>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index].value++;
    this.setState({counters})

  }

  handleDelete=countId=>{
    const counters = this.state.counters.filter(c=>c.id !== countId)
    this.setState({counters})
  }


  handleReset=()=>{
   const counters = this.state.counters.map(c=>{
      c.value=0;
      return c;
    })
    this.setState({counters})
  }
  render(){
  return (
    <>
    <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
    <main className="container">
    <Counters counters={this.state.counters} handleReset={this.handleReset}  handleDelete={this.handleDelete} 
          handleIncrement={this.handleIncrement} />
    </main>
    </>
  );
  }
}

export default App;
