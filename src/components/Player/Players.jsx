import { useState } from 'react';
import './Players.css';

const Players = ({players}) => {
  const [player, setPlayer] = useState([...players]);
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-10 max-w-[90%] mx-auto">
        {players.map((playerItem) => (
          <div
            className="gap-4 shadow-md p-5 rounded-lg mx-auto my-0"
            key={playerItem.key}
          >
            <img src={playerItem.img} alt="" className="rounded-lg" />
            <h2 className="text-center my-4 font-bold text-2xl">
              {playerItem.name}
            </h2>
            <p>
              <a className="w-full" href="#popup1" id="openPopUp">
                <button
                  onClick={() => {
                    setPlayer(playerItem);
                  }}
                  className="bg-black text-white w-full text-lg rounded-lg py-2 hover:opacity-70"
                >
                  Detail
                </button>
              </a>
            </p>
          </div>
        ))}
        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={player.img} alt="" />
            <h2 className='font-bold'>{player.name}</h2>
            <a href="#" className="close">
              &times;
            </a>
            <div className="content">{player.info}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Players;
