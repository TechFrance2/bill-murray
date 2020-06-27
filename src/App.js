import React from "react";

function handleClick() {
  console.log("I was clicked");
}

function App() {
  return (
    <div>
      <img
        onMouseOver={() => console.log("Hovering over Bill")}
        src="https://www.fillmurray.com/300/200"
        alt=" "
      />
      <br />
      <br />
      <button onClick={handleClick}> Click Here</button>
    </div>
  );
}

export default App;
