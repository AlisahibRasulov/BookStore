import React from "react";
import { useFavoriteBooks } from "../hooks/useFavoriteBooks";
import { CloseOutlined } from "@ant-design/icons";

const BookfavsBasket: React.FC = () => {
  const { bookFavs, removeFromBookfavs } = useFavoriteBooks();

  return (
    <div className="p-5">
      {bookFavs.length === 0 ? (
        <p className="mt-20 text-cyan-900 text-center text-3xl font-bold">Favorites list is empty.</p>
      ) : (
        <ul className="space-y-4">
          {bookFavs.map((book) => (
            <li
              className="flex items-center justify-between bg-cyan-950 text-amber-400 py-4 px-6 rounded-lg"
              key={book.isbn13}
            >
              <img
                className="w-[100px] h-[150px] object-cover"
                src={book.image}
                alt={book.title}
              />
              <h3 className="flex-1 pl-4 text-lg font-semibold">{book.title}</h3>
              <h3 className="text-lg">{book.price}</h3>
              <button
                onClick={() => removeFromBookfavs(book.isbn13)}
                className="text-amber-400 hover:text-amber-500"
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
