import { Button } from "@mui/material"
import { BUTTON_LABEL, CREATE_RESUME, FORM_POSITION } from "@utils/consts"
import { formMovement } from "@utils/formMovement"
import { createResumePdf } from "@utils/createResumePdf"
import { createResumeWord } from "@utils/createResumeWord"
import FormTitle from "@components/FormTitle"
import {
  useEducation,
  useExperience,
  useHeadData,
  usePersonalData,
  useProgress,
  useProject,
  useSkills,
} from "@context/useFormContextHooks"

export default function CreateResume() {
  const { progress } = useProgress()
  const { personalDataForm } = usePersonalData()
  const { headDataForm } = useHeadData()
  const { educationForm } = useEducation()
  const { experienceForm } = useExperience()
  const { projectForm } = useProject()
  const { skillsForm } = useSkills()

  const { translateClass, slotProps } = formMovement({
    progress,
    step: FORM_POSITION.CREATE_RESUME,
  })

  return (
    <section className={`form ${translateClass} justify-center items-center`}>
      <FormTitle text={CREATE_RESUME.TITLE} />

      <Button
        aria-label={BUTTON_LABEL.DOWNLOAD_PDF}
        tabIndex={slotProps.htmlInput.tabIndex}
        variant="contained"
        onClick={() => {
          createResumePdf({
            headDataForm,
            personalDataForm,
            educationForm,
            experienceForm,
            projectForm,
            skillsForm,
          })
        }}
        sx={{
          width: "fit-content",
          height: "60px",
          marginTop: "1rem",
        }}
        title={BUTTON_LABEL.DOWNLOAD_PDF}
      >
        {BUTTON_LABEL.DOWNLOAD_PDF}
      </Button>

      <Button
        title={BUTTON_LABEL.DOWNLOAD_WORD}
        aria-label={BUTTON_LABEL.DOWNLOAD_WORD}
        onClick={() => {
          alert(CREATE_RESUME.WARNING)
          createResumeWord({
            headDataForm,
            personalDataForm,
            educationForm,
            experienceForm,
            projectForm,
            skillsForm,
          })
        }}
        sx={{
          maxWidth: "180px",
        }}
        tabIndex={slotProps.htmlInput.tabIndex}
      >
        {BUTTON_LABEL.DOWNLOAD_WORD}
      </Button>
    </section>
  )
}
