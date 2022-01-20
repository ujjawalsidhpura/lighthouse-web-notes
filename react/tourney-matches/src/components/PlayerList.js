import React from "react";
import Player from "./Player";

function PlayerList(props) {
  const { parsedPlayerData } = props;
  const parsedPlayer =
    parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />)

  return (
    <section className="PlayerList">
      <h1> Currently participating players</h1>
      {parsedPlayer}
    </section>
  )

}

export default PlayerList;

