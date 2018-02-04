import React, { Component } from 'react';
import './App.css';
import Box from  './components/box.js';
import URL from './components/url.js';
class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    selectedState: ''
  }
}
  render() {
    return (
      // stuff that doesn't change
        <div className="App">
          <head>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'/>
          </head>

          <h1> FeelTheWave </h1>
          <p> A Free Alternative To Paid Music Streaming. All You Need Is A URL. </p>

          <p>URL to Save : </p><input type="text" name="url" /> <input type="submit" value="submit" />
          {/* change h2 to button */}
          <br/> <br/>
          <button onClick =  {() => {this.setState({selectedState: "urls"})}}> Your URLs </button>
          <br/> <br/>
          <button onClick =  {() => {this.setState({selectedState: "playlists"})}}> Your Playlists </button>
            <Box selectedState={this.state.selectedState}></Box>
            <URL/>
        </div>
    );
  }
}

export default App;
