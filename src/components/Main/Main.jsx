import React, { useState } from 'react'
import { playersList } from '../../ListOfPlayers'
import Players from '../Player/Players';

const Main = () => {
  const [players, setPlayers] = useState(playersList);
  return (
    <Players players={players}/>)
}

export default Main
