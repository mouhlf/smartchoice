import React from "react";
import { Container, Box, Typography } from "@mui/material";

import Header from "components/Header";
import SearchBar from "components/SearchBar";
import Tabs from "components/AccountPage/tab";

export default function Account() {
  return (
    <>
      <Header />
      <SearchBar />
      <Container>
        <Tabs />
      </Container>
    </>
  );
}
