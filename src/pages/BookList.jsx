import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/ui/BookCard';
import { CircularProgress, Box } from '@mui/material';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://api.potterdb.com/v1/books');
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error al obtener los libros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={{
                title: book.attributes.title,
                author: book.attributes.author,
                release_date: book.attributes.release_date,
                cover: book.attributes.cover,
                description: book.attributes.summary,
                pages: book.attributes.pages,
                dedication: book.attributes.dedication,
                wiki: book.attributes.wiki,
              }}
            />
          ))}
        </div>
      )}
    </Box>
  );
};

export default BookList;
