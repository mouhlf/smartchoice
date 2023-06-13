import React from 'react';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Rating,
} from '@mui/material';

const CommentsPage = () => {
  const comments = [
    {
      id: 1,
      product: {
        title: 'Product 1',
        rating: 4,
        price: 19.99,
        imageUrl: 'product-image-1-url',
      },
      feedback: {
        title: 'Feedback I Left',
        rating: 5,
        text: 'This product is amazing!',
      },
    },
    {
      id: 2,
      product: {
        title: 'Product 2',
        rating: 3,
        price: 24.99,
        imageUrl: 'product-image-2-url',
      },
      feedback: {
        title: 'Feedback I Left',
        rating: 4,
        text: 'Good product, but could be better.',
      },
    },
    // Add more comments as needed
  ];

  return (
    <Container maxWidth="md">
      {comments.map((comment) => (
        <>
          <Box display="flex" m={3} >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}  width={"40%"}>
              <CardMedia
                component="img"
                sx={{ maxWidth: 150, borderRadius: 5 }}
                image={comment.product.imageUrl}
                alt="Product"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h6">{comment.product.title}</Typography>
                <Rating name={`product-rating-${comment.id}`} value={comment.product.rating} readOnly />
                <Typography variant="body1">${comment.product.price}</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column' }} flexGrow={1}>
              <Typography variant="subtitle1">{comment.feedback.title}</Typography>
              <Rating name={`feedback-rating-${comment.id}`} value={comment.feedback.rating} readOnly />
              <Typography variant="body1">{comment.feedback.text}</Typography>
            </Box>
           
          </Box>
          <Divider  />
          </>
      ))}
    </Container>
  );
};

export default CommentsPage;
