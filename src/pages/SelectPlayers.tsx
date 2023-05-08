import { useState } from "react";

const SelectPlayers = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(5);
  const [players, setPlayers] = useState<string[]>([]);
  //Get Number of players
  //Get players Name

  return (
    <div>
      <label htmlFor="numberOfPlayers">Number Of Players:</label>
      <input
        type="number"
        max={10}
        min={5}
        defaultValue={5}
        onChange={(e) => setNumberOfPlayers(Number(e.target.value))}
      />
    </div>
  );
};

export default SelectPlayers;
