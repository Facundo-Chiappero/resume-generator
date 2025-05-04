import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

type Props = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
  slotProps: {
    htmlInput: {
      tabIndex: number
    }
  }
  text: string
}

export default function AddButton({ setShowForm, slotProps, text }: Props) {
  return (
    <Button
      onClick={() => setShowForm(true)}
      startIcon={<AddIcon />}
      variant="contained"
      color="primary"
      tabIndex={slotProps.htmlInput.tabIndex}
      sx={{
        fontWeight: "600",
      }}
      title={text}
      aria-label={text}
    >
      {text}
    </Button>
  )
}
