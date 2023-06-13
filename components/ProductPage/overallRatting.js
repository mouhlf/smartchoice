import React, { useRef, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Grid } from "@mui/material";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,

  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
function createGradient(ctx, area) {
  const centerX = (area.left + area.right) / 2;
  const centerY = (area.top + area.bottom) / 2;
  const r = Math.min(
    (area.right - area.left) / 2,
    (area.bottom - area.top) / 2
  );
  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );

  gradient.addColorStop(0, "rgba(118, 0, 224, 0.25)");
  gradient.addColorStop(1, "rgba(60, 89, 252, 0.75)");

  return gradient;
}
export const data = {
  labels: [
    "Thing 1",
    "Thing 2",
    "Thing 3",
    "Thing 4",
    "Thing 5",
    "Thing 6",
    "Thing 7",
    "Thing 8",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [83, 100, 92, 86, 96, 78, 50, 88],
      borderWidth: 0,
    },
  ],
};

const labelsExtractor = (specGroups) => {
  let labels = [];
  let data = [];
  specGroups.forEach((specGroup) => {
    labels.push(specGroup.spec_group_name);
    data.push(specGroup.note );
  });
  let datasets = [
    {
      label: "/10",
      data: data,
      borderWidth: 0,
    },
  ];
  return { labels, datasets };
};

export default function OverallRatting({ props }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...labelsExtractor(props.specGroups),
      datasets: labelsExtractor(props.specGroups).datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);
  const options = {
    scales: {
      r: {
        ticks: {
          display: false,
        },
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 8,
      }}
    >
      <Typography variant="title" component="div">
        Overall Ratting
      </Typography>
      <Box
        width={"inherit"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" component="div">
          {props.overallScore} / 10
        </Typography>

        <Box>
          <Radar options={options} ref={chartRef} data={chartData} />
        </Box>
        <Grid
          maxWidth={"lg"}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ backgroundColor: "background.paper", p: 5, borderRadius: 1 }}
        >
          {props.specGroups.map((specGroup, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  p: 5,
                  border: "1px solid #ccc",
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6" component="div">
                  {specGroup.spec_group_name}
                </Typography>
                <Typography variant="h7" component="div" color={"grey.500"}>
                  {specGroup.note}/10
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={specGroup.note * 10}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
