import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";

import {getAds} from "../../../pages/api/endpoints";


const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  minHeight: "450px",
  borderRadius: "20px",
});

function Ads() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(getAds)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <Container sx={{minHeight:"450px"}} >
      <Carousel
        indicators={false}
        animation="slide"
        timeout={1000}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        swipe={true}
        navButtonsWrapperProps={{
          style: {
            margin: "0px 20px",
          },
        }}
        navButtonsProps={{
          style: {
            backgroundColor: "#0067FF",
            color: "#fff",
            fontSize: "20px",
            borderRadius: 50,
            padding: "10px",
            "&:hover": {
              opacity: "1 !important",
            },
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  );
}

function Item(props) {
  return (
    <Container sx={{ borderRadius: "20px" }}>
      <StyledImg src={props.item.image.url} />
    </Container>
  );
}

export default Ads;
