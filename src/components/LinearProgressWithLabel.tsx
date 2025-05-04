import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material"

export default function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "50%" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#444",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#66ff66",
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: "fit-content" }}>
        <Typography
          variant="body2"
          sx={{ color: "-dark-text-primary)" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}
