import proptypes from "prop-types";

const Movie = ({ coverImg, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImg}></img>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.proptypes = {
  coverImg: proptypes.string.isRequired,
  title: proptypes.string.isRequired,
  summary: proptypes.string.isRequired,
  genres: proptypes.arrayOf(proptypes.string).isRequired,
};

export default Movie;
