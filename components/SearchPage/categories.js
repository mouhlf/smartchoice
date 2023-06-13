import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NestedList from "./nestedList";
import { Box } from "@mui/system";

const Categories = ({ items }) => {
  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderNestedList = (nestedItems, parentIndex = "", level = 0) => {
    return (
      <List component="div" disablePadding>
        {nestedItems.map((item, index) => {
          const itemIndex =
            parentIndex !== "" ? `${parentIndex}-${index}` : `${index}`;
          const isItemOpen = !!open[itemIndex];
          const hasChildren = item.children && item.children.length > 0;

          const handleItemClick = () => {
            handleClick(itemIndex);
          };

          const paddingLeft = `${level * 16}px`; // Adjust the padding level as needed

          return (
            <React.Fragment key={itemIndex}>
              <ListItemButton
                sx={{ pl: paddingLeft }}
                onClick={handleItemClick}
              >
                <ListItemText primary={item.label} />
                {hasChildren ? (
                  isItemOpen ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>
              {hasChildren && (
                <Collapse in={isItemOpen} timeout="auto" unmountOnExit>
                  {renderNestedList(item.children, itemIndex, level + 1)}
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>
    );
  };

  return (
    <Box width="100%">
      <NestedList itemName="Categories">{renderNestedList(items)}</NestedList>
    </Box>
  );
};

export default Categories;
