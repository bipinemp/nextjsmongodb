import React from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/app/styles/movies.module.css";

const page = async ({ params }) => {
  const id = params.id;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c3913f726cde9ba73b0b7211ecfc40b9`;
  const image = "https://image.tmdb.org/t/p/original";

  const res = await axios.get(url);
  const movie = res.data;

  const formatRevenue = (revenue) => {
    if (revenue >= 1000000000) {
      return (
        (revenue / 1000000000).toLocaleString("en-US", {
          maximumFractionDigits: 2,
        }) + " billion"
      );
    } else if (revenue >= 1000000) {
      return (
        (revenue / 1000000).toLocaleString("en-US", {
          maximumFractionDigits: 2,
        }) + " million"
      );
    } else {
      return revenue.toLocaleString("en-US");
    }
  };

  return (
    <div className={styles.singlemovie}>
      {movie && (
        <>
          <div className={styles.singlemovieleft}>
            <Image
              src={`${image}${movie.poster_path}`}
              width={500}
              height={500}
              alt={movie.original_title}
              priority
            />
          </div>
          <div className={styles.singlemovieright}>
            <h2>{movie.original_title}</h2>
            <p>
              <b>Description: </b>
              <br />
              <span>{movie.overview}</span>
            </p>
            <p>
              <b>Genres: &nbsp;</b>
              {movie.genres.map((item) => (
                <span>{item.name} , </span>
              ))}
            </p>
            <p style={{ display: "flex", gap: "1em", alignItems: "center" }}>
              <span>
                <b>Production Companies :</b>
              </span>
              {movie.production_companies.map((item) => (
                <span>
                  {item.logo_path && (
                    <Image
                      src={`${image}${item.logo_path}`}
                      width={80}
                      height={50}
                      style={{ objectFit: "contain" }}
                      alt="companies"
                    />
                  )}
                </span>
              ))}
            </p>
            <p>
              <b>Release Date: &nbsp;</b>
              {movie.release_date}
            </p>
            <p>
              <b>Runtime: &nbsp;</b>
              {movie.runtime} min
            </p>
            <p>
              <b>Rating: &nbsp;</b>
              {movie.vote_average.toFixed(1)} ({movie.vote_count})
            </p>
            <p>
              <b>Box-Office: &nbsp; </b>
              {movie.revenue !== 0 ? formatRevenue(movie.revenue) : " N/A"}
            </p>
            <i># {movie.tagline}</i>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
