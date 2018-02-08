import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputTxt: '',
      language: 'english',
      arr: [],
      newUser: [],
      name: '',
      age: 0,
      favSport: '',
      id: 0
    }
  }

  changeName(e) {
    var name = e.target.value
    this.setState({ name: name})
  }

  changeAge(e) {
    var age = e.target.value
    this.setState({ age: age})
  }

  changeId(e) {
    var id = e.target.value
    this.setState({id: id})
  }
  changefavSport(e) {
    var sport = e.target.value
    this.setState({ favSport: sport})
  }

//GET //no Params
  getAllUsers() {

  }

//POST user -- REQ.BODY
postUser() {

}

//GET USERS WHO'S FAVSPORT MATCHES INPUT THROUGH QUERY
getSpecificUser() {

}
//PUT with PARAM
updateUser() {

}

  render() {  
    return (
      <div className="App">
        
        <div className = 'form'>
        <input placeholder = 'name' onChange={(e)=> this.changeName(e)}/> 
        <input placeholder = 'age' onChange={(e)=> this.changeAge(e)}/>
        <input  placeholder = 'favsport' onChange={(e)=> this.changefavSport(e)}/>
        <input placeholder='id' type="number" onChange={(e)=> this.changeId(e)}/> 
        <button onClick={()=> this.updateUser()}> Update user (params) </button> Requires ID input
        <button onClick={()=> this.getSpecificUser()}> FavSport (query)</button> Requires favSport input
        <button onClick={ ()=> this.getAllUsers()}> Get all users </button>
        <button onClick={ () => this.postUser()}> Create user </button> Fill out all fields
        <button onClick={ () => this.queryUser()}> Query user </button> 
        </div>
{ this.state.arr.length > 0?
      <div> 
        {JSON.stringify(this.state.arr)}
</div> : null}
      </div>
    );
  }
}

export default App;
