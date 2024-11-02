import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Modal, Box } from '@mui/material';

const BookCard = ({ book }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card 
        onClick={handleOpen} 
        style={{
          width: '220px',
          height: '400px', 
          borderRadius: '10px', 
          boxShadow: '3px 3px 8px rgba(0,0,0,0.5)',
          cursor: 'pointer',
          transform: 'scale(1)',
          transition: 'transform 0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <CardMedia
          component="img"
          height="300"
          image={book.cover || 'https://via.placeholder.com/150'} 
          alt={book.title}
        />
        <CardContent>
          <Typography variant="h6" >{book.title}</Typography>
        </CardContent>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          display: 'flex', 
          width: '70%', 
          height: '80%', 
          margin: 'auto', 
          mt: '5%', 
          borderRadius: '10px',
          boxShadow: '5px 5px 15px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          bgcolor: '#f9f7f1'
        }}>
          <Box 
            sx={{
              width: '50%', 
              p: 3, 
              backgroundColor: '#f7f2e8', 
              borderRight: '2px solid #d1c7b7', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center'
            }}
          >
            <Typography variant="h4" color="text.secondary" gutterBottom>{book.title}</Typography>
            <Typography variant="h6" color="text.secondary">{book.author}</Typography>
            <Typography variant="body2" color="text.secondary">Fecha de publicación: {book.release_date}</Typography>
          </Box>

          <Box 
            sx={{
              width: '50%', 
              p: 3, 
              backgroundColor: '#f7f2e8', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-start',
              overflowY: 'auto'
            }}
          >
            <Typography variant="body1" color="text.secondary" paragraph>Description: {book.description}</Typography>
            <Typography variant="body1" color="text.secondary" paragraph>Pages: {book.pages}</Typography>
            <Typography variant="body1" color="text.secondary" paragraph><a target='_blank' href={book.wiki}>Ver mas</a></Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default BookCard;
