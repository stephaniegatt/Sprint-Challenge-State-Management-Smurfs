import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { SmurfContext } from "../context/SmurfContext";
import Smurfs from "./Smurfs";
import NewSmurfForm from "./NewSmurfForm";


class App extends Component {
  state = {
    smurfs: [],
    newSmurf: {
      name: "",
      age: "",
      height: "",
    },
  };
  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
      this.setState({
        ...this.state,
        smurfs: res.data,
      })
    })
    .catch(err => {
      console.log(err)
    })
  };


  addNewSmurf = () => {
    axios.post("http://localhost:3333/smurfs", this.state.newSmurf)
    .then(res => {
      this.setState({
        ...this.state,
        smurfs: res.data,
      });
    })
  } 

  onChange = e => {
    this.setState({
      ...this.state,
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {

    
    return (
      <div className="App">
        <SmurfContext.Provider value={{ ...this.state, addNewSmurf: this.addNewSmurf}}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <Smurfs  />
          <NewSmurfForm onChange={this.onChange}/>
        </SmurfContext.Provider>
      </div>
    );
  }
}

export default App;
