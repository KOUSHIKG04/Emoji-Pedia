import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function CardDetail(emoji) {
  return (
    <Card
      // id={emoji.id}
      emoji={emoji.emoji}
      key={emoji.id}
      names={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
    
      <dl className="dictionary">
        {/* NORMAL FUNCTION*/}
        {/* {emojipedia.map(CardDetail)} */}

        {/* ARROW FUNCTION*/}
        {emojipedia.map((emojis, index) => (
          <Card
            emoji={emojis.emoji}
            key={index}
            name={emojis.name}
            meaning={emojis.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
