import { Select } from "react-materialize";

function Match({ team1, team2, group, matchId, onChange }) {
  return (
    <tr>
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
              onCloseStart: null,
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
