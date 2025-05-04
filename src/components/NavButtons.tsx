import { Button } from "@mui/material"
import LinearProgressWithLabel from "./LinearProgressWithLabel"
import { FORMS_AMOUNT, NAV_BUTTONS } from "@utils/consts"
import { useHandleNext } from "@hooks/useHandleNext"
import { useProgress } from "@context/useFormContextHooks"

const basicButtonStyle = {
  fontWeight: "bold",
  borderWidth: "2px",
}
const handlePrevious = ({
  progress,
  setProgress,
}: {
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
}) => {
  if (!progress || !setProgress) return

  if (progress > 0) {
    setProgress(progress - 1)
  }
}

export default function NavButtons() {
  const { progress, setProgress } = useProgress()

  const { handleNext } = useHandleNext()

  return (
    <nav aria-label="Form navigation" className="flex justify-between mt-2">
      <Button
        title={NAV_BUTTONS.BACK}
        aria-label={NAV_BUTTONS.BACK}
        onClick={() => handlePrevious({ progress, setProgress })}
        variant="outlined"
        sx={{ ...basicButtonStyle }}
      >
        {NAV_BUTTONS.BACK}
      </Button>

      <LinearProgressWithLabel
        value={(progress / FORMS_AMOUNT) * 100}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <Button
        title={NAV_BUTTONS.NEXT}
        aria-label={NAV_BUTTONS.NEXT}
        onClick={handleNext}
        variant="outlined"
        sx={{ ...basicButtonStyle }}
      >
        {NAV_BUTTONS.NEXT}
      </Button>
    </nav>
  )
}
