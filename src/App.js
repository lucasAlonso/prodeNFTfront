import logo from "./logo.svg";
import "./App.css";
import { Col, Row } from "react-materialize";
import Fixture from "./qatar2022.json";
import React, { useState, useEffect } from "react";
import Prode from "./components/Prode";
import WalletConect from "./components/WalletConect";

function App() {
  const [prode, setProde] = useState({});
  function handleResult(e) {
    const { id, value } = e.target;
    setProde((prevState) => ({ ...prevState, [id]: value }));
  }

  return (
    <div className="App ">
      <Row>
        <Col s={1}></Col>
        <Col s={8}>
          <Prode prode={prode} onChange={handleResult} />
        </Col>
        <Col s={3}>
          <WalletConect />
        </Col>
      </Row>
    </div>
  );
}

export default App;
