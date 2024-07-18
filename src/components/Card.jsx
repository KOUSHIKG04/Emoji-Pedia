import React from "react";
import emojipedia from "../emojipedia";

function Card(props) {
  return (
    <div className="term">
      {/* dt = term, dl = list, dd = description  --> dictonary element  */}
      <dt>
        <span className="emoji" role="img">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}
export default Card;
