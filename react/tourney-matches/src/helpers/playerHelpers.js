export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {

  for (let eachPlayer of playerDataArray) {
    let count = 0;

    for (let eachMatch of matchData) {
      if (eachMatch.winner === eachPlayer.gamerTag) {
        count++
      }
    }
    eachPlayer.wins = count;

  }
  return playerDataArray;
}

