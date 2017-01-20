import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importing components
import Search from './components/search';
import Results from './components/results';

class App extends Component {
  constructor(){
    super();

    // initialising data with an empty array to be filled after the call back from child component at following line <Search parent={this.bindParent.bind(this)}/>
    this.state = {data: []};
  }

  //call this function on callback from child component
  bindParent(childdata) {
    //set the state of the data with the data that has been recieved from child component
    this.setState({data : childdata});
    console.log('inside bindparent function of App', childdata)
  }

  render() {
    console.log("from render of APPS",this.state.data);
    return (
      <div>
        <Search parent={this.bindParent.bind(this)}/>
        <Results datatochild={this.state.data}/>
      </div>
    );
  }
}


//<Search parent={this.bindParent.bind(this)}/> 
// significanse: to get the call back from the child component and setState({data}) to be called and set the state of the parent using child's data

//<Results datatochild={this.state.data}/>
//significanse: passing data to child component using {this.state.data}
export default App;
