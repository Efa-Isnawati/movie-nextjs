import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface MovieDetail {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

const MovieDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setMovie(data);
          } else {
            setError("Movie not found");
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Fetch Error:", err);
          setError("Failed to fetch data");
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>No movie details available</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mt-16 flex flex-col md:flex-row md:items-start">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0"
        />
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
          <p>{movie.overview}</p>
          <p className="mt-2">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
