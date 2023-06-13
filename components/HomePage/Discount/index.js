import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import bg from "assets/bg.svg";

import { getProductDiscount } from "pages/api/endpoints";

import ProductCard from "components/cards/productCard2";

const Discount = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(getProductDiscount);
      setProducts(res.data);
    };

    fetchData();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 5,
        gap: 2,
        borderRadius: 1,
        flexShrink: 0,
        width: "100%",
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 55%",
        backgroundColor: "#F2F3F5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          color: "common.white",
        }}
      >
        <Typography variant="discount" component="div">
          Discount
        </Typography>
        <Typography variant="h7" component="div">
          Up to 50%
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 5,
          gap: 5,
          overflow: "auto",
          "&::-webkit-scrollbar": {
            height: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
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

export default Discount;
