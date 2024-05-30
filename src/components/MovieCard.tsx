import Link from "next/link";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, posterPath }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={`/movie/${id}`} passHref>
        <div className="cursor-pointer">
          <img
            src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
            alt={title}
            className="w-full h-auto rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
