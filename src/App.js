import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importing components
import Search from './components/search';
import Results from './components/results';

class App extends Component {
  constructor(){
    super();
    this.state = {data: []};
  }

  bindParent(data) {
    this.setState({data});
    console.log('inside bindparent function of App', data)
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

export default App;
