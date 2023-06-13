import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const NestedList = ({ children, itemName, isOpen: isOpen = true }) => {
  const [open, setOpen] = useState(isOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderNestedItems = () => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        const { label, children: nestedChildren } = child.props;

        if (nestedChildren) {
          return (
            <React.Fragment key={index}>
              <ListItemButton  onClick={handleClick} alignItems="flex-start">
                <ListItemText primary={itemName} primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: '600',
                  letterSpacing: 0,
                }} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit sx={{ pl: 5 }}>
                {nestedChildren}
              </Collapse>
            </React.Fragment>
          );
        }

        return (
          <ListItemButton key={index} >
            {child}
          </ListItemButton>
        );
      }

      return null;
    });
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {renderNestedItems(itemName)}
    </List>
  );
};

export default NestedList;
