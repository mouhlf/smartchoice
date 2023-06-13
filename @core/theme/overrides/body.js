const Body = theme => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: theme.palette.background.secondary,
          "&::-webkit-scrollbar": {
            height: "10px",
            width: "10px",
          },
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#E6E6E6",
            borderRadius: 8,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#8F8F8F",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#959595",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#959595",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#959595",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },

        }
      }
    }
  }
}

export default Body