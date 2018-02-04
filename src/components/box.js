import React, { Component } from 'react';


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
    if (this.props.selectedState === 'urls') {
      console.log("urls");
    }
    return (
<div>{this.state.selectedState}</div>

    );
  }
}

// {urls: [1, 2, 3]}

export default Box
