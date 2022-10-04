import React, { useState } from "react";
import "./styles.css";

var animalDictionary = {
  "🌹": "Rose",
  "🌴": "Palm Tree",
  "🐪": "Camel",
  "🦒": "giraffe",
  "🐎": "Horse",
  "🦌": "Dear",
  "🐶": "Dog",
  "🐵": "Monkey",
  "🐇": "Rabbit",
  "🐻": "Bear"
};

var animalWeKnow = Object.keys(animalDictionary);

export default function App() {
  var [animal, setcountry] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var animal = animalDictionary[userInput];

    if (animal === undefined) {
      animal = "we dont have database in our country";
    }
    setcountry(animal);
  }

  function flagClickHandler(animal) {
    var animal = animalDictionary[animal];
    setcountry(animal);
    // console.log(country);
  }

  return (
    <div className="App">
      <h1> Animal Interpreter </h1>
      <input style={{ fontSize: "2rem" }} onClick={emojiInputHandler} />
      <h2>{animal}</h2>
      <h3> Animal We Know </h3>
      {animalWeKnow.map(function (animal) {
        return (
          <span
            onClick={() => flagClickHandler(animal)}
            style={{ fontSize: "2.3rem", padding: "0.5rem", cursor: "pointer" }}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
    </div>
  );
}
