import React from "react";
import Header from "../Header";
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <Header />
      <div>{props.name}</div>
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

const mapStatetoProps = state => ({
  name: state.name
});

export default connect(mapStatetoProps, null)(Home);
