import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { useSession, signIn } from "next-auth/react"

import BG from "assets/signUpInBG.svg";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignInSide() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      callbackUrl: "/",
    });
  };

  return (
    <Box
      container
      component="main"
      sx={{
        display: "flex",
        itemAlign: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${BG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        component={Paper}
        m="auto"
        sx={{
          height: {
            xs: "inherit",
            sm: "inherit",
            lg: "fit-content",
            display: "flex",
            itemAlign: "center",
            justifyContent: "center",
          },
          width: { xs: "100%", sm: "100%", lg: "fit-content" },
          borderRadius: { xs: "0", sm: "0", lg: 1 },
        }}
      >
        <Box
          sx={{
            maxWidth: 400,
            mx: 20,
            my: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            component="h4"
            variant="h4"
            sx={{ alignSelf: "start", fontWeight: "600", mb: 15 }}
          >
            Login to your account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  forget password
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Sign up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
