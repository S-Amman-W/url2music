import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import Box from  './components/box.js';
import URL from './components/url.js';
    var newData = [];
class App extends Component {
  constructor() {
  super();
  this.state = {
    URL: ''
  }
  var config = {
      apiKey: "AIzaSyBV4ISoX0keSocOpnIRNrpzYuvzkRN8TQ0",
      authDomain: "url2sound.firebaseapp.com",
     databaseURL: "https://url2sound.firebaseio.com",
     projectId: "url2sound",
     storageBucket: "",
     messagingSenderId: "907970903449"
 };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  firebase.initializeApp(config);
}
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items/');
    console.log(document.getElementById('urlForm').value);
    itemsRef.push({      "URL": document.getElementById('urlForm').value});

  }


      componentDidMount(e) {
        var starCountRef = firebase.database().ref('items/');
  starCountRef.on('value', function(snapshot) {
    var data = snapshot.val();
    var dataKeys = Object.keys(data);
    for (var i = 0; i < dataKeys.length; i++) {
        newData.push(data[dataKeys[i]].URL);
    }
  })
  console.log(newData);
      this.setState({URL: newData})
      };



  // <form onSubmit={this.handleSubmit}>
  //                <input type="text" name="username" placeholder="URL" onChange={this.handleChange} value={this.state.URL} />
  //               <button>Save URL</button>
  //              </form>

  render() {

    return (
        <div className="App">
          <head>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script type="text/javascript">
            {/* document.getElementById("").addEventListener("click", function(event) {
              event.preventDefault() */}
            {/* }); */}
            </script>
          </head>
          <body>

            <div class="Title">
          <h1> FeelTheWave </h1>
          <p> A Free Alternative To Paid Music Streaming. All You Need Is A URL. </p>
        </div>

        <br/>
          <p>URL to Save : </p>
          <form name="urlsaver" onSubmit={this.handleSubmit}>
            <input type="URL"  id="urlForm"  name="URL"/>
            <div class="URL"><button onChange={this.handleChange} onClick =  {() => {
              this.setState({selectedState: "urls"});
              <br/>
            }}> Save Song </button></div>
          </form>

          <br/> <br/>

              <button onClick = {() => {this.setState({selectedState: "urls"})}}> Playlist </button>
                <Box selectedState={this.state.selectedState} URL={this.state.URL}>

              </Box>
          <br/> <br/>
              {/* <div class="URL"><button onClick =  {() => {this.setState({selectedState: "playlists"})}}> Your Playlists </button></div>
                <Box></Box> */}
              <URL/>
            </body>
            </div>
    );
  }
}

export default App;
