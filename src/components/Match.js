import { Select } from "react-materialize";
import React, { useState, useEffect } from "react";

function Match({ team1, team2, group, matchId, onChange }) {
  const [selected, setSelected] = useState(false);
  const selectOnChange = () => {
    setSelected(true);
  };
  return (
    <tr
      style={
        selected
          ? { "background-color": "grey" }
          : { "background-color": "green" }
      }
    >
      <td>{team1}</td>
      <td>
        <Select
          id={group + matchId}
          multiple={false}
          onChange={onChange}
          options={{
            classes: "",
            dropdownOptions: {
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: selectOnChange,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            },
          }}
          value=""
        >
          <option disabled value="">
            Choose your option
          </option>
          <option value={team1}>{team1} Wins</option>
          <option value="Tide">Both teams are loosers</option>
          <option value={team2}>{team2} Wins</option>
        </Select>
      </td>
      <td>{team2}</td>
    </tr>
  );
}

export default Match;
