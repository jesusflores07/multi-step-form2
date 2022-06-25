import React, { Component } from 'react'
import MuiThemeprovider from "@material-ui/styles/ThemeProvider";
import AppBar from "@material-ui/core/AppBar";





export class Success extends Component {
  continue = e => {
      e.preventDefault();
      this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }


  render() {
   
    return (
      <MuiThemeprovider>
        <React.Fragment>
            <AppBar title = 'succes' />
            <br />
            <h1>thank you</h1>
        </React.Fragment>
      </MuiThemeprovider>
    )
  }
}



