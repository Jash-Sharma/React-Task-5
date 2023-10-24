import React, { Component } from "react";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
    };
    this.check = this.check.bind(this);
  }
  check(e) {
    e.preventDefault();
    this.state.time = document.getElementById("date").value;
    var d = new Date(this.state.time);
    var curr = new Date();
    var res = curr.getFullYear() - d.getFullYear();
    document.getElementById("i2").innerHTML = `You are ${res} years old.`;
  }
  render() {
    return (
      <div className="text-center h-100 p-5">
        <h1 className="mb-4">
          <b>Age Calculator</b>
        </h1>
        <div className="w-25 me-auto ms-auto">
          <form>
            <div className="mb-1 ">
              <h5>
                <label htmlFor="date" className="form-label" id="e1">
                  <b>Enter your date of birth</b>
                </label>
              </h5>
            </div>
            <input className="form-control " type="date" id="date"></input>
            <br />
            <input
              className="btn btn-primary"
              type="submit"
              value="Calculate Age"
              onClick={this.check}
            ></input>
          </form>
        </div>
        <div>
          <h1 className="mt-4">
            <b id="i2"></b>
          </h1>
        </div>
      </div>
    );
  }
}

export default Body;
