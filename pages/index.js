import React from "react";
import { Container, Box, Typography } from "@mui/material";


import Header from "components/Header";
import SearchBar from "components/SearchBar";
import Ads from "components/HomePage/Ads";
import Account from "components/HomePage/Account";
import Categories from "components/HomePage/Categories";
import TopRanking from "components/HomePage/TopRanking";
import Discount from "components/HomePage/Discount";
import ProductContainer from "components/ProductContainer";


import { createEmotionCache } from "@core/utils/create-emotion-cache";

const clientSideEmotionCache = createEmotionCache();

import {getProductForyou} from 'pages/api/endpoints';



export default function Home() {

  return (
    <>
      <Header />
      <SearchBar />
      <Container sx={{ display: "flex", marginY: 7 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Ads />
        </Box>
        <Box sx={{ flexGrow: 0.008 }}>
          <Account />
        </Box>
      </Container>
      <Container sx={{ display: "flex", gap: 8, marginY: 7 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Categories />
        </Box>
        <Box sx={{ width: "80%" }}>
          <TopRanking />
        </Box>
      </Container>
      <Container>
        <Discount />
      </Container>
      <Container
        sx={{
          display: "flex",
          gap: 5,
          marginY: 7,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="title" component="div">
          For You
        </Typography>
        <ProductContainer api={getProductForyou}/>
      </Container>
    </>
  );
}
