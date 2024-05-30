"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results) {
          setMovies(data.results);
        } else {
          setError("No results found");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError("Failed to fetch data");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 mt-16">Now Playing Movies</h1>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
              />
            ))
          ) : (
            <div>No movies available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
