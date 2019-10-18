import React from "react";
import "../stylesheets/ActionsMenu.css";


const ActionsMenu = ({alive, awake, hunger, feedDuck, takeDuckForSwim, sleepChange, squeakDuck, killDuck}) => {
  return (
    <div>
        <button onClick={feedDuck} disabled={!alive || !awake} className={hunger > 9 ? "red" : "normal"} >Feed</button>
        <button onClick={sleepChange} disabled={!alive}>{awake ? "Put to Bed" : "Wake Up"}</button>
        <button onClick={takeDuckForSwim} disabled={!alive || !awake || hunger > 9}>Take for a swim</button>
        <button onClick={squeakDuck} disabled={!alive || !awake || hunger > 9}>Squeak</button>
        <button onClick={killDuck} disabled={!alive}>KILL</button>
    </div>
  );
};

export default ActionsMenu;
