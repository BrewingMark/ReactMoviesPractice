import React, {Fragment} from 'react';
import Film from './Film.js'

const FilmList = (props) => {

  const filmNodes = props.films.map((film) => {
    return <Film film={film} key={film.id} />
  });

  return (
    <Fragment>
      <h2>Upcoming Films</h2>
      {filmNodes}
      <button>View more upcoming releases</button>
    </Fragment>
  )
}

export default FilmList;
