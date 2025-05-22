import { useIsLight } from "@hooks/useIsLight"
import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material"

export default function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  const isLight = useIsLight()
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "50%",
        marginInline: ".5rem",
      }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: isLight ? "#fff" : "#444",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#66ff66",
            },
            border: "1px solid #1976d2",
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
