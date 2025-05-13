export const getBasicInputStyle = (isLight: boolean) => ({
  fullWidth: true,
  variant: "filled" as const,
  color: "primary" as const,
  sx: {
    input: {
      color: isLight ? "#000" : "#fff",
      textOverflow: "ellipsis",
    },
    label: {
      color: isLight ? "#000" : "#fff",
    },
    ".MuiFilledInput-root": {
      backgroundColor: isLight ? "#eee" : "#444",
      "&:hover": {
        backgroundColor: isLight ? "#ddd" : "#555",
      },
      "&.Mui-focused": {
        backgroundColor: isLight ? "#ccc" : "#333",
      },
    },
  },
})
