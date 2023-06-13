import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";

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

export default function SellOnSmartchoice() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            mx: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Typography
            component="h4"
            variant="h4"
            sx={{ alignSelf: "start", fontWeight: "600", mb: 15 }}
          >
            Create an account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Container maxWidth="md" sx={{ mt: 8 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <div height="80" width="80">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Uploaded Image"
                      height="100"
                      width="100"
                      style={{ borderRadius: "50%" }}
                    />
                  ) : (
                    <Box
                      height="100px"
                      width="100px"
                      sx={{
                        backgroundColor: "grey.200",
                        borderRadius: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhotoIcon sx={{ fontSize: 40, color: "grey.800" }} />
                    </Box>
                  )}
                </div>

                <label
                  htmlFor="upload-image"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 15,
                  }}
                >
                  <Button
                    variant="outline"
                    component="span"
                    sx={{ border: "1px solid #ccc" }}
                  >
                    Upload new photo
                  </Button>
                  <Typography variant="caption" sx={{ color: "grey.500" }}>
                    JPG, GIF or PNG. Max size of 800K
                  </Typography>
                  <input
                    id="upload-image"
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleFileUpload}
                  />
                </label>
              </Stack>
            </Container>
            <TextField
              margin="normal"
              required
              fullWidth
              id="storeName"
              label="Store name"
              name="storeName"
              autoComplete="storeName"
              autoFocus
            />
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
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Already have an account ? Log in
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Sign up as a customer"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${BG.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        display={{ xs: "none", sm: "block", lg: "block" }}
        p={10}
      >
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Typography
            variant="logo"
            color={"common.white"}
            sx={{ fontSize: { xs: "15px", sm: "25px", lg: "36px" } }}
          >
            SmartChoice
          </Typography>
          <Typography
            variant="welcome"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "50px",
                lg: "100px",
              },
            }}
          >
            Welcome. Start your journey now with our recommendation system!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
