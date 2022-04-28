import React, { useState, useEffect } from "react";
import Match from "./Match";
import Fixture from "../qatar2022.json";
import { Col, Row, Tab, Tabs, TextInput, Table } from "react-materialize";

function Prode({ prode, onChange }) {
  return (
    <Tabs
      className=" z-depth-1"
      options={{
        swipeable: true,
      }}
      scope="tabs-5"
    >
      {Object.entries(Fixture.Groups).map(([key, value]) => {
        console.log(prode);
        return (
          <Tab
            className=" lime lighten-3"
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false,
            }}
            title={"GRUPO " + key}
          >
            <Row>
              <Col s={3}></Col>
              <Col s={6}>
                <Table centered="true">
                  <thead>
                    <tr>
                      <th data-field="local">LOCAL</th>
                      <th data-field="switch"></th>
                      <th data-field="visitante">VISITANTE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Match
                      team1={value[0]}
                      team2={value[1]}
                      group={key}
                      matchId="1"
                      onChange={onChange}
                    />

                    <Match
                      team1={value[2]}
                      team2={value[3]}
                      group={key}
                      matchId="2"
                      onChange={onChange}
                    />

                    <Match
                      team1={value[0]}
                      team2={value[2]}
                      group={key}
                      matchId="3"
                      onChange={onChange}
                    />
                    <Match
                      team1={value[1]}
                      team2={value[3]}
                      group={key}
                      matchId="4"
                      onChange={onChange}
                    />
                    <Match
                      team1={value[0]}
                      team2={value[3]}
                      group={key}
                      matchId="5"
                      onChange={onChange}
                    />
                    <Match
                      team1={value[1]}
                      team2={value[2]}
                      group={key}
                      matchId="6"
                      onChange={onChange}
                    />
                  </tbody>
                </Table>
              </Col>
              <Col s={3}></Col>
            </Row>
          </Tab>
        );
      })}
    </Tabs>
  );
}

export default Prode;
