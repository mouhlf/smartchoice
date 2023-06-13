import React, { useState } from "react";
import { useSession } from "next-auth/react";

import {
  Box,
  Typography,
  Container,
  Button,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useTheme } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#191919",
  },
});
import useMediaQuery from "@mui/material/useMediaQuery";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  flexGrow: 1,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.grey[900] : "#308fe8",
  },
}));


export default function Reviews({ props }) {
  let { data: session } = useSession();

  const { review, review_count } = props.reviews;
  const reviewLength = review.length;

  const [showAllDialog, setShowAllDialog] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleShowAllDialog = () => {
    setShowAllDialog(true);
  };

  const handleCloseAllDialog = () => {
    setShowAllDialog(false);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleRatingChange = (event, value) => {
    setRating(value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleCreateReview = () => {
    // Here you can implement the logic to save the review data

    // Reset the form
    setRating(0);
    setReviewText("");
    handleCloseDialog();
  };

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Typography variant="title" component="div" align="center">
          Reviews
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            backgroundColor: "background.paper",
            p: 8,
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              justifyContent: "space-between",
              width: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                width: "50%",
              }}
            >
              <Typography variant="rating" component="div">
                {props.rating}
              </Typography>
              <StyledRating
                name="text-feedback"
                value={props.rating}
                readOnly
                precision={0.5}
                size="large"
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="50px" />
                }
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "50%",
              }}
            >
              {review_count.map((review_number, index) => {
                const reviewPercentage =
                  (review_number.review_count / reviewLength) * 100;
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h7"
                      component="h7"
                      sx={{ flexShrink: 0 }}
                    >
                      {index + 1} stars
                    </Typography>
                    <BorderLinearProgress
                      variant="determinate"
                      value={reviewPercentage}
                    />
                    <Typography
                      variant="h7"
                      component="div"
                      sx={{ flexShrink: 0 }}
                    >
                      {review_number.review_count}
                    </Typography>
                    {/* Add more star rating progress bars here */}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              alignItems: "flex-start",
            }}
          >
            {/* Render reviews dynamically */}
            {review.slice(0, 3).map((review, index) => {
              const date = new Date(review.created_at);
              const reviewDate = date.toDateString();

              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "flex-start",
                    width: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 5}}
                  >
                    <StyledRating
                      name="text-feedback"
                      value={review.rating}
                      readOnly
                    />
                    <Typography variant="h7" component="div">
                      {review.comment}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      alignItems: "flex-end",
                      flexShrink: 0,
                    }}
                  >
                    <Typography variant="h7" component="div">
                      {reviewDate}
                    </Typography>
                    <Typography variant="h7" component="div">
                      {review.username}
                    </Typography>
                  </Box>
                </Box>
              );
            })}

            <Button
              variant="contained"
              sx={{ alignSelf: "center", borderRadius: 10, px: 8 }}
              onClick={handleShowAllDialog}
            >
              Show all
            </Button>
            <Dialog
              open={showAllDialog}
              onClose={handleCloseAllDialog}
              fullScreen={fullScreen}
            >
              <DialogTitle>All Reviews</DialogTitle>
              <DialogContent
                dividers
                sx={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                {review.map((review, index) => {
                  const date = new Date(review.created_at);
                  const reviewDate = date.toDateString();
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", flexDirection: "row", gap: 5 }}
                      >
                        <StyledRating
                          name="text-feedback"
                          value={review.rating}
                          readOnly
                        />
                        <Typography variant="h7" component="div">
                          {reviewDate} - {review.username}
                        </Typography>
                      </Box>
                      <Typography variant="h7" component="div">
                        {review.comment}
                      </Typography>
                    </Box>
                  );
                })}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAllDialog}>Close</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>

        {session ? (
          <>
          <Button
            variant="contained"
            onClick={handleOpenDialog}
            sx={{ alignSelf: "center", borderRadius: 10, px: 15 }}
          >
            Add Review
          </Button>

          <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
            <DialogTitle>Add a Review</DialogTitle>
            <DialogContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="body1">Overall rating:</Typography>
                <StyledRating
                  name="rating"
                  value={rating}
                  precision={0.5}
                  onChange={handleRatingChange}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  marginTop: 2,
                }}
              >
                <Typography variant="body1">Your review:</Typography>
                <TextField
                  multiline
                  rows={4}
                  variant="outlined"
                  value={reviewText}
                  onChange={handleReviewTextChange}
                  fullWidth
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button
                onClick={handleCreateReview}
                variant="contained"
                disabled={!rating || !reviewText}
              >
                Create Review
              </Button>
            </DialogActions>
          </Dialog>
        </>
        ) : (
          <>
          </>
        )}

      </Box>
    </Container>
  );
}
