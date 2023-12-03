import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [PlayerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editHandler() {
    setIsEditing((editing) => !editing);
    if(isEditing){
      onChangeName(symbol, PlayerName)
    }
    
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name"> {PlayerName} </span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        defaultValue={PlayerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className= {isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editHandler}>{isEditing ? "Save" : "Edit"} </button>
      </span>
    </li>
  );
};

export default Player;
