import React, { useState, useEffect } from "react";

import { useBetween } from "use-between";

import { Button, Box, Typography, Container } from "@mui/material";

import { styled } from "@mui/system";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import {
  DataGridPro,
  gridFilteredSortedRowIdsSelector,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  useGridApiRef 
} from "@mui/x-data-grid-pro";

import ProductImages from "./productImages";

const getRowsWithGroups = ({ apiRef }) => gridFilteredSortedRowIdsSelector(apiRef);



const StyledToggleButton = styled(ToggleButton)(({ theme }) =>
  theme.unstable_sx({
    color: theme.palette.text.primary,
    fontWeight: "bold",
  })
);

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
      border: "2px solid",
      borderColor: theme.palette.grey[300],
      color: theme.palette.text.main,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
      border: "2px solid",
      borderColor: theme.palette.grey[300],
      color: theme.palette.text.main,
    },
    "&.Mui-selected": {
      border: "2px solid black",
      color: theme.palette.text.main,
    },
  },
}));
const specHandler = (product, id) => {
  //split the ram string to get the ram value and delete the empty value
  const specArray = product.product_spec.filter((item) => item.specid === id)[0]
    .spec_value;
  return specArray.split(";").filter((item) => item !== "");
};

const useShareableState = () => {
  const [filt, setFilt] = React.useState({
    items: [{}],
  });
  return {
    filt,
    setFilt,
  };
};

function DataGrid({ stores }) {
  const apiRef = useGridApiRef();
  const handleSelectFirstVisibleRow = () => {
    const visibleRows = gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);
    console.log(visibleRows);
  }


  const { filt, setFilt } = useBetween(useShareableState);
  stores.map((store) => {
    const specArray = store.spec.split(";").filter((item) => item !== "");
    store.ram = specArray[0];
    store.rom = specArray[1];
    store.colors = specArray[2];
    store.seeOffre = 20;
  });

  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <DataGridPro
        apiRef={apiRef}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableColumnMenu
          disableColumnReorder
          disableColumnResize
          disableSelectionOnClick
          disableMultipleColumnsSorting
          disableMultipleSelection
          filterModel={filt}
          onFilterModelChange={(newFilterModel) => {setFilt(newFilterModel)}}
          columns={[
            { field: "store_name" },
            { field: "price" },
            {
              field: "seeOffre",
              headerName: "",
              renderCell: (cellValues) => {
                const onClick = (e, cellValues) => {
                  return alert(cellValues);
                };

                return <Button onClick={onClick}>See offer</Button>;
              },
            },
            { field: "rom" },
            { field: "ram" },
            { field: "colors" },
            { field: "extra" },
          ]}
          initialState={{
            columns: {
              columnVisibilityModel: {
                ram: false,
                rom: false,
                extra: false,
                colors: false,
              },
            },
          }}
          rows={stores}
          sx={{
            height: "100%",
            width: "100%",
            border: "1px solid",
            borderColor: "grey.300",
          }}
        />
      </Box>
    </>
  );
}

const ProductInfo = ({ product }) => {
  const [romVal, setRom] = React.useState();
  const [ramVal, setRam] = React.useState();
  const [colorsVal, setColors] = React.useState();
  const { filt, setFilt } = useBetween(useShareableState);

  const handleRom = (event, newAlignment) => {
    setRom(newAlignment);
  };
  const handleRam = (event, newAlignment) => {
    setRam(newAlignment);
  };
  const handleColors = (event, newAlignment) => {
    setColors(newAlignment);
  };
  const handleClick = (field, item) => (event) => {
    const { currentTarget } = event;
    const ariaPressed = currentTarget.getAttribute("aria-pressed");

    if (ariaPressed === "false") {
      // Perform some action if aria-pressed is true
      setFilt({
        items: [
          {
            field: field,
            operator: "contains",
            value: item,
          },
        ],
      });
    } else {
      // Perform some action if aria-pressed is false
      setFilt({
        items: [],
      });
    }
  };

  const colors = specHandler(product, 44);
  const ram = specHandler(product, 67);
  const rom = specHandler(product, 68);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <Typography variant="h4">{product.name}</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <Rating
          name="text-feedback"
          value={product.review_score}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Typography variant="body1">{product.review_score} reviews</Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <Typography variant="h5">{product.price} €</Typography>
        <Typography variant="h5">~</Typography>
        <Typography variant="h5">{product.price} €</Typography>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="productVariation">Rom</Typography>
        <StyledToggleButtonGroup
          value={romVal}
          exclusive
          onChange={handleRom}
          aria-label="text alignment"
          sx={{ display: "flex", flexDirection: "row", gap: 5 }}
        >
          {rom.map((item) => (
            <StyledToggleButton
              value={item}
              aria-label="left aligned"
              sx={{ color: "black" }}
              onClick={handleClick("rom", item)}
            >
              {item}
            </StyledToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="productVariation">Ram</Typography>
        <StyledToggleButtonGroup
          value={ramVal}
          exclusive
          onChange={handleRam}
          aria-label="text alignment"
          sx={{ display: "flex", flexDirection: "row", gap: 5 }}
        >
          {ram.map((item) => (
            <StyledToggleButton
              value={item}
              aria-label="left aligned"
              sx={{ color: "black" }}
              onClick={handleClick("ram", item)}
            >
              {item}
            </StyledToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="productVariation">Colors</Typography>
        <StyledToggleButtonGroup
          value={colorsVal}
          exclusive
          onChange={handleColors}
          aria-label="text alignment"
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          {colors.map((item) => (
            <StyledToggleButton
              value={item}
              aria-label="left aligned"
              sx={{ color: "black" }}
              onClick={handleClick("colors", item)}
            >
              {item}
            </StyledToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default function GeneralInfo({ props }) {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ display: "flex", gap: 5, marginY: 7 }}>
        <ProductImages images={props.images} thumbnail={props.product.thumbnail}/>
        <ProductInfo product={props.product} />
        <DataGrid stores={props.stores} />
      </Container>
    </>
  );
}
