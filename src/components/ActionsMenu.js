import React from "react";

const ActionsMenu = ({feedDuck, takeDuckForSwim}) => {
  return (
    <div>
        <button onClick={feedDuck}>Feed</button>
        <button>Tuck In</button>
        <button onClick={takeDuckForSwim}>Take for a swim</button>
        <button>Squeak</button>
        <button>KILL</button>
    </div>
  );
};

export default ActionsMenu;
