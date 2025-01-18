import { useParams } from 'react-router-dom';
import { useAxiosBooks } from '../hooks/useAxiosBooks';
import { Card } from 'antd';

const BookDetails = () => {
  const { isbn13 } = useParams<{ isbn13: string }>();
  console.log('ISBN13 from URL:', isbn13);

  const { bookDetails, loading, error } = useAxiosBooks('', isbn13);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log('Book Details from API:', bookDetails);

  return (
    <div className='flex justify-center'>
      {bookDetails && (
      <Card
      className='bg-cyan-950 mt-5 mb-5'
        hoverable
        style={{ width: 300 }}
        cover={<img className='bg-stone-100' alt={bookDetails.title} src={bookDetails.image} />}
      >
        <div className="card-info text-amber-400">
          <h3 className="font-bold">{bookDetails.title}</h3>
          <p className="text-white">{bookDetails.subtitle}</p>
          <p className='font-bold'>{bookDetails.price}</p>
          <h1 className='font-bold flex'>Author: <p className='text-white ml-3'>{bookDetails.authors}</p> </h1>
        </div>
      </Card>
      ) }
    </div>

  );
};

export default BookDetails;
