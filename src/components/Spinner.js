import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <>
        <center>
          {" "}
          <div className="spinner-border m-5 " role="status">
            <span className="sr-only"></span>
          </div>
        </center>
      </>
    );
  }
}
