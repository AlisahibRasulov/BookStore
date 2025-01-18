import { Card } from 'antd';
import { Book } from '../types/book'; 
import { Link } from 'react-router-dom';
import { useFavoriteBooks } from '../hooks/useFavoriteBooks';

interface Props {
  books: Book[];
}



const BookList: React.FC<Props> = ({ books }) => {
  const { addToBookfavs, removeFromBookfavs, checkInBookfavs } = useFavoriteBooks();

  const handleBookfav = (book: Book) => {
    if (checkInBookfavs(book.isbn13)) {
      removeFromBookfavs(book.isbn13);
    } else {
      addToBookfavs(book);
    }
  };




  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {books.map((book) => (
        <Card
          key={book.isbn13}
          hoverable
          style={{ width: 240 }}
          cover={<img className="bg-stone-100" alt={book.title} src={book.image} />}
          className="bg-cyan-950 mt-5 mb-5 "
        >
          <div className="card-detail h-28 flex flex-col justify-between">
            <h3 className="text-amber-400 font-bold">{book.title}</h3>
            <p className="text-white">{book.subtitle}</p>
          </div>

          <Link to={`/book/${book.isbn13}`} className="text-a text-blue-400 mt-2 mb-2">
            View Details
          </Link>

          <button
            onClick={() => handleBookfav(book)}
            className={`p-2 rounded-md text-sm mt-2 ${
              checkInBookfavs(book.isbn13)
                ? 'bg-white text-amber-400'
                : 'bg-amber-400 text-white'
            }`}
          >
            {checkInBookfavs(book.isbn13) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
