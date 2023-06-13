import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Box, Button } from "@mui/material";

import { getProductTopRanking } from "pages/api/endpoints";

import ProductCard from "components/cards/productCard2";



const TopRanking = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(getProductTopRanking);
      setProducts(res.data);
    }
    
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        backgroundColor: "background.paper",
        borderRadius: "10px",
        height: 1,
        p: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          flexDirection: "column",
        }}
      >
        <h2>Top Ranking</h2>
        <Button style={{ backgroundColor: "primary" }}>See more</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          gap: 5,
          padding: "5px",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            height: "10px",
          },

        }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            img={product.thumbnail}
            price={product.price}
            title={product.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TopRanking;