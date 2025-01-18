import React from "react";
import { useFavoriteBooks } from "../hooks/useFavoriteBooks";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const BookfavsBasket: React.FC = () => {
  const { bookFavs, removeFromBookfavs } = useFavoriteBooks();

  return (
    <div className="p-5">
      {bookFavs.length === 0 ? (
        <p className="mt-20 text-cyan-900 text-center text-3xl font-bold">
          Favorites list is empty.
        </p>
      ) : (
        <ul className="space-y-4">
          {bookFavs.map((book) => (
            <li
              className="flex items-center justify-between bg-cyan-950 font-bold text-amber-400 py-4 px-6 rounded-lg"
              key={book.isbn13}
            >
              <img
                className="w-[100px] h-[150px] object-cover"
                src={book.image}
                alt={book.title}
              />
              <h3 className="flex-1 pl-4 text-lg font-semibold">
                {book.title}
              </h3>
              <Link
                to={`/book/${book.isbn13}`}
                className="font-bold text-white mr-2"
              >
                View Details !
              </Link>
              <h3 className="text-lg mr-2">{book.price}</h3>
              <button
                onClick={() => removeFromBookfavs(book.isbn13)}
                className="font-bold text-white  hover:text-slate-200"
              >
                <CloseOutlined />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookfavsBasket;
