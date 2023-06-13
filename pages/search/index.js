import React from "react";
import { Container, Box, Typography } from "@mui/material";

import Header from "components/Header";
import SearchBar from "components/SearchBar";
import Filter from "components/SearchPage/filter";
import SortBy from "components/SearchPage/sortBy";
import ProductSearchContainer from "@/components/ProductSearchContainer";



export default function Search() {
  return (
    <>
      <Header />
      <SearchBar />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          gap: 5,
          flexDirection: "row",
          maxWidth: "1400px",
        }}
      >
        <Filter />
        <Box pt={8} sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <SortBy />
          <ProductSearchContainer  />
        </Box>
      </Container>
    </>
  );
}
