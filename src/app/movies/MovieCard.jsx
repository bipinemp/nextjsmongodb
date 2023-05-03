import Image from "next/image";
import React from "react";
import styles from "@/app/styles/movies.module.css";
import Link from "next/link";

const MovieCard = (elem) => {
  const { id, original_title, overview, backdrop_path, poster_path } = elem;
  const image = "https://image.tmdb.org/t/p/original";
  return (
    <div className={styles.moviecard}>
      <h3>{original_title}</h3>
      <p>{overview.substring(0, 100)}&nbsp;...</p>
      <Image
        src={`${image}${backdrop_path}`}
        width={250}
        height={150}
        alt={original_title}
        priority
      />

      <Link href={`/movies/${id}`}>Read More</Link>
    </div>
  );
};

export default MovieCard;
