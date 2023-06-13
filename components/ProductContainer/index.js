import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../cards/productCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

//create a grid with max 1200ps width, responsive, and the items will be ProductCard component

const ProductContainer = (api) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await axios.get(`${api.api}?page=${page}`);
    setProducts((prevProducts) => [...prevProducts, ...res.data.items]);
    setPage(page + 1);
  };

  useEffect(() => {
    fetchData(); // Fetch initial data on component mount
  }, []);
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
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
    </InfiniteScroll>
  );
};

export default ProductContainer;
