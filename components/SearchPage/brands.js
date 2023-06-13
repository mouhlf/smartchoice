import * as React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { ListSubheader } from "@mui/material";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import NestedList from "./nestedList";

const SearchBar = ({ items, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = items.filter((device) =>
      device.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, items, setSearchResults]);

  return (
    <InputBase
      color="primary"
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
      inputProps={{ "aria-label": "search", color: "#ccc" }}
    />
  );
};

export default function CheckboxList() {
  const [checked, setChecked] = React.useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const items = [0, 1, 2, 3, 4, 5, 6, 7].map((value) => ({
    id: value,
    name: `Line item ${value + 1}`,
  }));

  return (
    <NestedList itemName="Brands">
      <Box >
        <List
          
          sx={{
            marginTop: 5,
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            maxHeight: 250,
            border: "2px solid ",
            borderColor:"grey.300",
            borderRadius: 2,
          }}
          disablePadding
        >
          <ListSubheader
            color="primary"
            sx={{
              backgroundColor: "grey.300",
              borderRadius: 1.5,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              marginBottom: 2,
            }}
          >
            <SearchBar items={items} setSearchResults={setSearchResults} />
          </ListSubheader>
          <Box
            sx={{
              height: 180,
              overflow: "auto",
              marginBottom: 10,
              marginRight: 3,
              "&::-webkit-scrollbar": {
                width: "0.5em",
              },
            }}
          >
            {searchResults.map((item) => {
              const labelId = `checkbox-list-label-${item.id}`;

              return (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(item.id)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(item.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={item.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        </List>
      </Box>
    </NestedList>
  );
}
