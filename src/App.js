import logo from "./logo.svg";
import "./App.css";
import { Col, Row } from "react-materialize";
import Fixture from "./qatar2022.json";
import React, { useState, useEffect } from "react";
import Match from "./components/Match";
import Prode from "./components/Prode";

function App() {
  const [prode, setProde] = useState({});
  function handleResult(e) {
    console.log(e.target);
    const { id, value } = e.target;
    setProde((prevState) => ({ ...prevState, [id]: value }));
  }

  return (
    <div className="App ">
      <Row>
        <Col s={1}></Col>
        <Col s={6}>
          <Prode prode={prode} onChange={handleResult} />
        </Col>
        <Col s={5}></Col>
      </Row>
    </div>
  );
}

export default App;
