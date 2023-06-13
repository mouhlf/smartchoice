import * as React from "react";
import { Box, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState("Best-match");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };


  return (
    <Box
      direction="row"
      spacing={4}
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Typography variant="h7" component="div">
        Sort By:
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          "&:not(:first-of-type)": {
            backgroundColor: "#fff",
          },
          "&:first-of-type": {
            backgroundColor: "#fff",
          },
        }}
      >
        <ToggleButton value="Best-match" aria-label="Best-match">
          Best match
        </ToggleButton>
        <ToggleButton value="Newest" aria-label="Newest">
          Newest
        </ToggleButton>
        <ToggleButton value="Price-up" aria-label="Price-up">
          Price up
        </ToggleButton>
        <ToggleButton value="Price-down" aria-label="Price-down">
          Price down
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
