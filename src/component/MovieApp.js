import React, { useState } from "react";
import FilterByName from "./FilterByName/FilterByName";
import FilterByRating from "./Rating/Rating";
import Footer from "./Footer/Footer";
import MovieList from "./MovieList/MovieList";
import listMovies from "./MovieData";

const MovieApp = () => {
  const [movies, setMovies] = useState(listMovies);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  const AddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://static.lexpress.fr/medias_12238/w_640,h_358,c_fill,g_center/v1592636681/une-salle-de-cinema-vide-a-perpignan_6266294.jpg")`,
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "100%",
      }}
    >
      <div className="movieApp">
        <div className="filterPart">
          <FilterByName
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
          />
          <FilterByRating
            filterRate={true}
            rating={rating}
            setRating={setRating}
          />
        </div>

        <MovieList
          movies={movies}
          inputSearch={inputSearch}
          rating={rating}
          AddMovie={AddMovie}
        />

        <Footer />
      </div>
    </div>
  );
};

export default MovieApp;
