import React, { useState } from "react";

import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Rating,
  Divider
} from "@mui/material";

const WishlistProductViewer = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: "Product 1",
      rating: 4,
      price: 19.99,
      imageUrl: "product-image-1-url",
    },
    {
      id: 2,
      title: "Product 2",
      rating: 3,
      price: 24.99,
      imageUrl: "product-image-2-url",
    },
    // Add more products to the wishlist array as needed
  ]);

  const handleDelete = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((product) => product.id !== productId)
    );
  };

  return (
    <Container maxWidth="md">
      {wishlist.map((product) => (
        <>
          <Card
            key={product.id}
            sx={{ display: "flex", alignItems: "center", my: 2 }}
          >
            <CardMedia
              component="img"
              sx={{ maxWidth: 150, borderRadius: 5 }}
              image={product.imageUrl}
              alt="Product"
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6">{product.title}</Typography>
                <Rating
                  name={`product-rating-${product.id}`}
                  value={product.rating}
                  readOnly
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1">${product.price}</Typography>
              </Box>
            </CardContent>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(product.id)}
              sx={{ ml: 2 }}
            >
              Delete
            </Button>
          </Card>
          <Divider />
        </>
      ))}
    </Container>
  );
};

export default WishlistProductViewer;
