import React from "react";
import { Link, Box } from "@mui/material";
import { Icon } from "@iconify/react";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: "background.paper",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: "10px",
  })
);

const StyledLink = styled(Link)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "secondary",
    cursor: "pointer",
    textDecoration: "none",
    fontZise: "14px",
    mb : '10px',
    "&:hover": {
      color: "primary.main",
      backgroundColor: "white",
    },
  })
);

const Categories = () => {
  return (
    <StyledBox>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Icon icon="ion:list" width="30" height="30" />
        <h3>Categories</h3>
      </Box>
      <Box sx={{ padding: "5px" }}>
        <StyledLink color="secondary" target="_blank">
          <Icon icon="bi:phone" width="20" height="20" />
          Phones & Tablets
        </StyledLink>
        <StyledLink color="secondary" target="_blank">
          <Icon icon="bi:camera" width="20" height="20" />
          Consumer Electronics
        </StyledLink>
        <StyledLink color="secondary" target="_blank">
          <Icon icon="bi:laptop" width="20" height="20" />
          Computer, Office & Security
        </StyledLink>
      </Box>
    </StyledBox>
  );
};

export default Categories;
