import React from "react";
import Content1 from "./components/Content1/Main";
import Shape from "./components/Content1/Shape";
import Card from "./components/Content2/Card";
import Brands from "./components/Content2/Brands";
function App() {
  return (
    <div>
      <Content1 />
      <Shape />
      <div className="pt-5 mt-5">
        <Card />
        <Brands />
        <div
          style={{
            height: "50vh",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
