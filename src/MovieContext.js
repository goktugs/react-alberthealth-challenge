import { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [header, setHeader] = useState('Popular Movies');
  const [radioValue, setRadioValue] = useState('en-EN');

  const [favourites, setFavourites] = useLocalStorage('fav', []);

  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${radioValue}&page=1`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader('Popular Movies');
  };

  const fetchSearch = async (query) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${radioValue}&query=${query}&page=1&include_adult=false`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader(`Results for "${query}"`);
  };

  const fetchTopRated = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${radioValue}&page=1`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader('Top Rated Movies');
  };
  const fetchUpcoming = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${radioValue}&page=1`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader('Upcoming Movies');
  };

  const addToFavourites = (movie) => {
    let isOnArray = false;
    favourites.map((fav) => {
      if (fav.id === movie.id) {
        isOnArray = true;
      }
    });

    if (isOnArray) {
      setFavourites(favourites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavourites((prevState) => [...prevState, movie]);
    }
  };

  const getFavourites = () => {
    setMovies(favourites);
    setFiltered(favourites);
    setHeader('Your favourites');
  };

  const isFav = (id) => {
    let fav = favourites.filter((fav) => fav.id === id);
    return fav.length === 0 ? true : false;
  };

  return (
    <MovieContext.Provider
      value={{
        header,
        setHeader,
        addToFavourites,
        filtered,
        setFiltered,
        fetchPopular,
        movies,
        setMovies,
        radioValue,
        setRadioValue,
        fetchSearch,
        getFavourites,
        isFav,
        fetchUpcoming,
        fetchTopRated,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
