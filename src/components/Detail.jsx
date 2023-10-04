import { useParams } from 'react-router-dom';
import { filmList } from '../ListOfFilms';
import { useState } from 'react';
import ModalCase from '../components/ModalCase';

const Detail = () => {
  const { id } = useParams();
  const film = filmList.find((filmItem) => {
    return filmItem.id === id;
  });
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 l5">
          <div className="card">
            <div className="card-image">
              <img src={film.image} alt={film.title} />
              <span className="card-title">{film.title}</span>
              <a
                onClick={() => setIsOpen(true)}
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">ondemand_video</i>
              </a>
            </div>
            <div className="card-content">
              <p>
                <span className="font-bold">Year: </span>
                {film.year}
              </p>
              <p>
                <span className="font-bold">Nation: </span>
                {film.nation}
              </p>
              <p>
                <span className="font-bold">Detail: </span>
                {film.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
    </div>
  );
};

export default Detail;
