import React from "react";

const Banner = ({ onContinue }) => (
  <div className="banner">
    <div className="mainTitle">
      <h1>It Will Be Better</h1>
      <p>Your daily mood tracker</p>
      <ul className="actions">
        <li><a onClick={ onContinue } className="button alt scrolly big">Continue</a></li>
      </ul>
    </div>
  </div>
);

export default Banner;
