import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../cards/productCard";
import axios from "axios";
import {
  searchProduct,

} from "pages/api/endpoints";
//create a grid with max 1200ps width, responsive, and the items will be ProductCard component

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    // Get the current URL
    const currentUrl = new URL(window.location.href);
    // Get the search params from the URL
    const searchParams = new URLSearchParams(currentUrl.search);

    // Convert the search params to an object
    let params = {};
    for (let pair of searchParams.entries()) {
      params[pair[0]] = pair[1];
    }

    console.log(params);
    // Send a get request with the search params
    const res = await axios.get(searchProduct+params.query);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchData(); // Fetch initial data on component mount
  }, []);

  return (
    <Grid
      maxWidth={"lg"}
      container
      spacing={{ xs: 6, md: "auto" }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {products.map((product, index) => (
        <Grid item xs={4} sm={3} md={"auto"} key={index}>
          <ProductCard
            key={index}
            id={product.id}
            img={product.thumbnail}
            price={product.price}
            title={product.name}
            rating={product.review_score}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductContainer;
