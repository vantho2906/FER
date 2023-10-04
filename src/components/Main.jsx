import { useState } from 'react';
import { filmList } from '../ListOfFilms';
import FilmsPresentation from './FilmsPresentation';

const Main = () => {
  const [films, setFilms] = useState(filmList);
  return <FilmsPresentation films={filmList} />;
};

export default Main;
