import * as React from "react";

import Categories from "./categories";
import Rating from "./rating";
import Price from "./price";
import Brands from "./brands";
import Attributes from "./attributes";
import { Box } from "@mui/material";

export default function filter() {
  const nestedListItems = [
    {
      label: "Parent Item 1",
      children: [
        {
          label: "Child Item 1.1",
        },
        {
          label: "Child Item 1.2",
        },
      ],
    },
    {
      label: "Parent Item 2",
      children: [
        {
          label: "Child Item 2.1",
          children: [
            {
              label: "Grandchild Item 2.1.1",
            },
            {
              label: "Grandchild Item 2.1.2",
            },
          ],
        },
        {
          label: "Child Item 2.2",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{ backgroundColor: "background.paper", width: 400 }}
    >
      <Box p={5}>
        <Categories items={nestedListItems} />
        <Rating />
        <Price />
        <Brands />
        <Attributes />
      </Box>
    </Box>
  );
}
