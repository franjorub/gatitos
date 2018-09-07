import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = props => (
  <div className="container-fluid">
    <div className="row text-center">
      <div className="col">
        <h1>Kitties</h1>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>Developed By: Francisco Rubial</h2>
        <p>Github: </p>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-sm-8 col-md-6">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              <FontAwesomeIcon icon="search" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search your favorite kitty"
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
