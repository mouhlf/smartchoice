import React, { useState } from 'react';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import {
  Typography,
  Container,
  Box,
  TextField,
  InputAdornment,
  Paper,
  Button,
} from '@mui/material';
import { Icon } from '@iconify/react';
import Link from 'next/link'

const StyledIcon = styled(Icon)(({ theme }) =>
theme.unstable_sx({
  fontSize: '24px',
}),
);
const StyledLink = styled(Link)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    color: "secondary",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "32px",
    fontWeight:"bold",
    "&:hover": {
      color: "primary.main",
      backgroundColor: "white",
    },
    "&:active": {
      color: "primary.main",
      backgroundColor: "white",
    },
    "&:visited": {
      color: "primary.main",
      backgroundColor: "white",
    },
  })
);

const SearchBar = () => {
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

  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();

  // Handle the search
  const handleSearch = (event) => {
    event.preventDefault();
    // Check if searchQuery is not empty
    if (searchQuery.trim() !== '') {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <Box sx={{backgroundColor :"background.paper"}}> 
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', py: '15px', gap:'50px' }}>
        {/* Logo */}
        
        <StyledLink href='/'>
            SmartChoice
        </StyledLink>

        {/* Search Input */}
        <Box sx={{ flex: 1, ml: 2 }}>
          <Paper component="form" elevation={0} sx={{display:'flex', alignItems:'center', gap:'10px'}} onSubmit={handleSearch}>
            <TextField
              fullWidth
              focused
              color = 'primary'
              variant="outlined"
              placeholder="Search..."
              InputProps={{ sx: { borderRadius: "10px", px:'18px', height:"40px"} }}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <InputAdornment position="end">
              <Button variant="contained" sx={{ borderRadius:'10px', height: "max-content"}} type="submit" >
                <StyledIcon icon={"mdi:search"} />
              </Button>
            </InputAdornment>
          </Paper>
        </Box>

      </Container>
      </Box>
    </>
  );
};

export default SearchBar;
