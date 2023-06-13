import * as React from "react";
import Rating from "@mui/material/Rating";
import NestedList from "./nestedList";
import { Box } from "@mui/system";


const RatingFilter = ({ items }) => {

  return (
    <Box width="100%">
      <NestedList itemName="Rating">
        <div>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
      </NestedList>
    </Box>
  );
};

export default RatingFilter;
