import { useState, useEffect } from 'react';
import axios from 'axios';
import { Book, BookDetails } from '../types/book';

const BASE_URL = 'https://api.itbook.store/1.0';

export const useAxiosBooks = (query: string = '', isbn13: string | null = null) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [bookDetails, setBookDetails] = useState<BookDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (isbn13) {
          const response = await axios.get(`${BASE_URL}/books/${isbn13}`);
          setBookDetails(response.data);
        } else if (query) {
          const response = await axios.get(`${BASE_URL}/search/${query}`);
          setBooks(response.data.books || []);
        } else {
          const response = await axios.get(`${BASE_URL}/new`);
          setBooks(response.data.books || []);
        }
      } catch (err: any) {
        setError('Veriler alınırken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, isbn13]);

  return { books, bookDetails, loading, error };
};
