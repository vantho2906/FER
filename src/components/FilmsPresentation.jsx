import { useState } from 'react';
import { Link } from 'react-router-dom';

const Players = ({ films }) => {
  const [film, setFilm] = useState([...films]);
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-10 max-w-[90%] mx-auto">
        {films.map((filmItem) => (
          <div
            className="gap-4 shadow-md p-5 rounded-lg mx-auto my-0"
            key={filmItem.key}
          >
            <img src={filmItem.image} alt="" className="rounded-lg" />
            <h2 className="text-center my-4 font-bold text-2xl">
              {filmItem.title}
            </h2>
            <p>
              <Link
                className="w-full"
                id="openPopUp"
                to={`detail/${filmItem.id}`}
              >
                <button
                  className="bg-black text-white w-full text-lg rounded-lg py-2 hover:opacity-70"
                >
                  Detail
                </button>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Players;
