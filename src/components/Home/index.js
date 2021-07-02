import React from "react";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Header />
      Home
      <button
        onClick={() => {
          alert("click1");
        }}
      >
        按钮
      </button>
    </div>
  );
};

export default Home;
