import React, { useRef } from "react";
import { alpha, styled } from "@mui/material/styles";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import NestedList from "./nestedList";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StyledTextField = styled(TextField)(({ theme }) => ({
  maxWidth: 100,
  "& label.Mui-focused": {
    color: theme.palette.text.primary,
  },

  "& .MuiFormLabel-root": {
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.grey[500],
      borderRadius: 10,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[500],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.grey[500],
    },
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor:theme.palette.grey[300],
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[400], 1),
  },
}));

const data = {
  labels: ["Low", "Medium", "High", "Out of range"],
  ranges: [
    { min: 0, max: 15 },
    { min: 150, max: 1255 },
    { min: 5240, max: 14525 },
    { min: 45240, max: 12455 },
  ],
  datasets: [
    {
      data: [20, 50, 30, 20],
      backgroundColor: ["#80B3FF", "#80B3FF", "#80B3FF", "#80B3FF"],
      base: 0,
      borderWidth: 1,
      borderSkipped: "bottom",
      borderRadius: 20,
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      grouped: true,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: false,

      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
};

const progressBar = {
  id: "progressBar",
  beforeDatasetsDraw: (chart, args, pluginOptions) => {
    const {
      ctx,
      chartArea: { top, bottom, height },
      scales: { x, y },
    } = chart;
    ctx.save();
    const { width } = chart.getDatasetMeta(0).data[0];
    chart.getDatasetMeta(0).data.forEach((dataPoint, index) => {
      ctx.fillStyle = "rgba(128, 179, 255, 0.2)";
      ctx.roundRect(
        x.getPixelForValue(index) - width / 2,
        top,
        width,
        height,
        [20, 20, 0, 0]
      );
      ctx.stroke();
    });
  },
};

const getPriceRange = (element) => {
  if (!element.length) {
    return;
  }

  const { index } = element[0];

  console.log(data.ranges[index]);
};

export default function Price() {
  const chartRef = useRef(null);

  const onClick = (event) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    getPriceRange(getElementAtEvent(chart, event));
  };

  return (
    <NestedList itemName="Price">
      <Box sx={{ width: "100%", alignItems: "center" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ maxWidth: "220px" }}>
            <Bar
              ref={chartRef}
              data={data}
              options={options}
              plugins={[progressBar]}
              onClick={onClick}
              style={{ cursor: "pointer", margin: "auto" }}
            />
          </Box>
          <Box sx={{ display: "flex", gap:2, alignItems:"center" }}>
            <StyledTextField
              id="outlined-basic"
              label="Min"
              variant="outlined"
            />
            ~
            <StyledTextField
              id="outlined-basic"
              label="max"
              variant="outlined"
            />
            <StyledIconButton aria-label="apply" >
              <ArrowForwardIcon />
            </StyledIconButton>
          </Box>
        </Box>
      </Box>
    </NestedList>
  );
}
