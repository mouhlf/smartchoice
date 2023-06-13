import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useState } from "react";


export default function Specifications({ props }) {
  const [expanded, setExpanded] = useState(false);
  const {product_spec_value} = props.product;
  const groupedData = product_spec_value.reduce((acc, { spec_group_name, spec_name, spec_value }) => {
    acc[spec_group_name] = spec_name.map((name, i) => ({
      label: name,
      value: spec_value[i],
    }));
    return acc;
  }, {});

  const totalRows = Object.values(groupedData).reduce(
    (accumulator, currentValue) => accumulator + currentValue.length,
    0
  );

  const itemsToShow = expanded ? totalRows : 3;

  const showMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 5, p: 5 }}>
      <Typography variant="h4" component="div" align="center">
        Specifications
      </Typography>
      <Container sx={{ display: "flex", flexDirection: "row", gap: 5, p: 5 }}>
        <img
          src={props.product.thumbnail}
          style={{ height: "18.125rem", marginTop: 50, aspectRatio: "auto 290 / 241" }}
        />
        <Container sx={{ display: "flex", flexDirection: "column", gap: 5, p: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {Object.entries(groupedData)
              .slice(0, itemsToShow)
              .map(([group, items]) => (
                <Box key={group} sx={{ pb: 8 }}>
                  <Typography variant="h6" component="div" pb={3}>
                    {group}
                  </Typography>
                  {items.map(({ label, value }, i) => (
                    <Box
                      key={label}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        justifyContent: "space-between",
                        backgroundColor: i % 2 === 0 ? "grey.A100" : "inherit",
                        borderRadius: 1,
                        padding: 2,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        component="div"
                        width={"25%"}
                        sx={{ color: "grey.750", flexShrink: 0 }}
                      >
                        {label}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        width={"75%"}
                        sx={{ color: "text.primary", flexShrink: 0 }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" onClick={showMore}>
              {expanded ? "See Less" : "See More"}
            </Button>
          </Box>
        </Container>
      </Container>
    </Container>
  );
}