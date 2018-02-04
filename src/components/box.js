import React, { Component } from 'react';

let urlArray = []
class Box extends Component {
  // this.props.selectedState == 'urls'
  //
  // else if this.props.selectedState='playlists'
  // use jsx for this

  constructor(props) {
    super(props);
    this.state = {};
}
  render() {
          urlArray = [] 
    if (this.props.selectedState === 'urls') {
  console.log(this.props.URL)
  for (var i = 0; i < this.props.URL.length; i++) {
      urlArray.push(
          <li>
              {this.props.URL[i]}
          </li>
      )
  }

    }
      return (
 <div>{urlArray}</div>
    );
  }
}

// {urls: [1, 2, 3]}

export default Box
