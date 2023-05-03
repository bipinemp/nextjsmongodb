import axios from "axios";
import React from "react";
import MovieCard from "./MovieCard";
import styles from "@/app/styles/movies.module.css";

async function page() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.MOVIE_API_KEY}`;
  const res = await axios.get(url, {
    method: "GET",
  });
  const movies = res.data.results;

  return (
    <div className={styles.moviemain}>
      <h1>Movies page</h1>
      <div className={styles.moviecardmain}>
        {movies.map((item) => (
          <MovieCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default page;
