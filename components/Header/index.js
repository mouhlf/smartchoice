import React from "react";
import { styled } from "@mui/system";

import { useSession, signOut } from "next-auth/react";

import { AppBar, Menu, MenuItem, Container, Box, Link } from "@mui/material";
import { Icon } from "@iconify/react";

const StyledContainer = styled(Container)`
  padding: 14px;
`;

const StyledLink = styled(Link)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    color: "secondary",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      color: "primary.main",
      backgroundColor: "white",
    },
  })
);

const StyledIcon = styled(Icon)(({ theme }) =>
  theme.unstable_sx({
    mr: "10px",
    fontSize: "24px",
  })
);

const Header = () => {
  // State for account menu
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);

  // Open account menu
  const handleAccountMenuOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  // Close account menu
  const handleAccountMenuClose = () => {
    setAccountAnchorEl(null);
  };
  let { data: session } = useSession();


  return (
    <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
      <StyledContainer maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            columnGap: "30px",
          }}
        >
          <StyledLink color="secondary" href="/sell-on-smartchoice">
            Sell on SmartChoice
          </StyledLink>

          {/* Language */}
          <StyledLink color="secondary" aria-label="language">
            <StyledIcon icon={"clarity:language-line"} />
            Language
          </StyledLink>

          {/* Wish List */}
          <StyledLink edge="start" color="secondary" aria-label="wishlist">
            <StyledIcon icon={"mdi:heart-outline"} />
            Wish List
          </StyledLink>

          {/* Account */}
          <StyledLink
            edge="start"
            color="secondary"
            aria-label="account"
            aria-controls="account-menu"
            aria-haspopup="true"
            onClick={handleAccountMenuOpen}
            href={session ? '#' : '/sign-in'}

          >
            <StyledIcon icon={"mdi:account-outline"} />
            {session ? ("Hi " + session?.user?.user.first_name) :( "Account")}
          </StyledLink>
          {session ? (
            <Menu
              id="account-menu"
              anchorEl={accountAnchorEl}
              keepMounted
              open={Boolean(accountAnchorEl)}
              onClose={handleAccountMenuClose}
              
            >
              <MenuItem onClick={handleAccountMenuClose}>My Account</MenuItem>
              <MenuItem onClick={()=>signOut()}>Logout</MenuItem>
            </Menu>
          ) : (
            ""
          )}
        </Box>
      </StyledContainer>
    </AppBar>
  );
};

export default Header;
