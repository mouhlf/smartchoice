import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Link from "@mui/material/Link";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";

const StyledLink = styled(Link)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    color: "secondary",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      color: "primary.main",
      backgroundColor: "white",
    },
  })
);
const ProductCard = (props) => {
  return (
    <Box
      contain={175}
      sx={{
        width: {xs: 122, sm: 122, md: 122},
        height: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "background.paper",
        borderRadius: "10px",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <StyledLink
      href={"/product/" + props.id}
      >
      <CardActionArea>
      <CardMedia
          component="img"
          image={props.img}
          sx={{ aspectRatio: "1/1", objectFit: "contain" }}
        />

        <CardContent sx={{ display: "flex", flexDirection: "column", px: 1.5, pb: 2 }}>
          <Typography variant="productPrice" component="div">
            {props.price}
          </Typography>
          <Typography variant="productTitle" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      </StyledLink>
    </Box>
  );
};

export default ProductCard;
