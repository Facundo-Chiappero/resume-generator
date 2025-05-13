import { createTheme, useMediaQuery } from "@mui/material"

export const useIsLight = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  })
  const isLight = theme.palette.mode === "light"

  return isLight
}
