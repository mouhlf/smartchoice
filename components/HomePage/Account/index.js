import React from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/system";

import image from "assets/Account.png";

import { useSession, signIn, signOut } from "next-auth/react";


const StyledBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundImage: `url(${image.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px",
    padding: "10px",
    flexGrow: 1,
    width: "100%",
  })
);

const StyledButton = styled(Button)(({ theme }) =>
  theme.unstable_sx({
    width: "100%",
    flexGrow: 1,
    margin: "10px",
    fontWeight: "bold",
    margin: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(11.9422px)",
    color: "black",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255)",
      color: "black",
    },
  })
);
const Account = () => {
  const { data: session } = useSession();
  return (
    <StyledBox>
      <h1></h1>
      {session ? (
        <h2 style={{ textAlign: "center" }}>
          {" "}
          Welcome <br /> {session?.user?.user.first_name}
        </h2>
      ) : (
        <h2 style={{ textAlign: "center" }}>
          {" "}
          Welcome <br /> to smartChoice
        </h2>
      )}

      <Box sx={{ display: "flex" }}>
      {session ? (
          <StyledButton variant="contained" href="/account">Account</StyledButton>
        ) : (
          <StyledButton variant="contained" onClick={()=>signIn()}>Login</StyledButton>
        )}
        {session ? (
          <StyledButton variant="contained" href="/account">wishlist</StyledButton>
        ) : (
          <StyledButton variant="contained" href="/sign-up">Register</StyledButton>
        )}
      </Box>
    </StyledBox>
  );
};

export default Account;
