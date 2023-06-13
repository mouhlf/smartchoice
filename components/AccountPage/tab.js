import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from '@mui/lab/TabContext';
import { useState } from "react";



import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import EditProfilePage from "./editProfile";
import ChangePasswordPage from "./changePassword";
import WishlistPage from "./wishlist";
import CommentsPage from "./comments";

function a11yProps(index) {
  return {
    style: { minWidth: "0", minHeight: "0", padding: "10px", margin: "10px" },
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState("editProfile");
  const [tab, setTab] = React.useState("EDIT PROFILE");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTab(event.target.innerText);
  };

  return (
    <Container
      sx={{
        display: "flex",
        marginY: "40px",
        gap: 2,
        minHeight: "50vh",
      }}
    >
      <TabContext value={value}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          TabIndicatorProps={{
            sx: {
              backgroundColor: "red",
            },
          }}
          sx={{
            width: "25%",
            alignItems: "flex-start",
            borderRadius: "10px",
            borderRight: 0,
            bgcolor: "background.paper",
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTab-root": {
              justifyContent: "flex-start",
            },
          }}
        >
          <Typography variant="h5" component="div" margin={3}>
            Account
          </Typography>
          <Tab
            icon={<PersonOutlineIcon />}
            iconPosition="start"
            label="Edit profile"
            value="editProfile"
            {...a11yProps(0)}
          />
          <Tab
            icon={<PersonOutlineIcon />}
            iconPosition="start"
            label="Password"
            value={"password"}
            {...a11yProps()}
          />
          <Tab
            icon={<PersonOutlineIcon />}
            iconPosition="start"
            label="Wish List"
            value="wishList"
            {...a11yProps()}
          />
          <Tab
            icon={<PersonOutlineIcon />}
            iconPosition="start"
            label="My comments"
            value="myComments"
            {...a11yProps()}
          />
          <Tab
            icon={<PersonOutlineIcon />}
            iconPosition="start"
            label="Preferences"
            value="preferences"
            {...a11yProps()}
          />
        </Tabs>
        <Box width={1} display={"flex"} flexDirection="column" sx={{ gap: 5 }}>
          <Box
            width={1}
            sx={{ bgcolor: "background.paper", borderRadius: "10px" }}
          >
            <Typography variant="" component="div" m={5}>
              {tab}
            </Typography>
          </Box>

          <Box
            width={1}
            height={1}
            sx={{ bgcolor: "background.paper", borderRadius: "10px" }}
          >
            <TabPanel value="editProfile" index={0}>
              <EditProfilePage />
            </TabPanel>
            <TabPanel value="password" index={1}>
              <ChangePasswordPage />
            </TabPanel>
            <TabPanel value="wishList" index={2}>
              <WishlistPage />
            </TabPanel>
            <TabPanel value="myComments" index={3}>
              <CommentsPage />
            </TabPanel>
            <TabPanel value="preferences" index={4}>
            PREFERENCES
            </TabPanel>
          </Box>
        </Box>
      </TabContext>
    </Container>
  );
}
