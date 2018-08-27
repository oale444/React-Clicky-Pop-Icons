import React from "react";
import "./Header.css";

const Header = props => (

  <div className="header">
    <nav>
      <div className="header">
        <div className="title"> Don't click on the same image twice!</div>

        <div className="scores">
          Score: {props.score} | Highscore: {props.highscore}
        </div>
      </div>
    </nav>
  </div>

)

export default Header;