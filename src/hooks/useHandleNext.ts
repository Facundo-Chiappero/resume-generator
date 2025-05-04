import { headDataSchema } from "@schema/headData"
import { FORMS_AMOUNT } from "@utils/consts"
import { ZodError } from "zod"
import { educationSchema } from "@schema/education"
import { personalDataSchema } from "@schema/personalData"

import { FormErrors } from "types"
import { experienceSchema } from "@schema/experience"
import { projectSchema } from "@schema/project"
import { skillsSchema } from "@schema/skills"
import {
  useEducation,
  useErrors,
  useExperience,
  useHeadData,
  usePersonalData,
  useProgress,
  useProject,
  useSkills,
} from "@context/useFormContextHooks"

export const useHandleNext = () => {
  const { progress, setProgress } = useProgress()
  const { setErrors } = useErrors()
  const { personalDataForm } = usePersonalData()
  const { headDataForm } = useHeadData()
  const { educationForm } = useEducation()
  const { experienceForm } = useExperience()
  const { projectForm } = useProject()
  const { skillsForm } = useSkills()
  const steps = [
    { schema: headDataSchema, data: headDataForm },
    { schema: personalDataSchema, data: personalDataForm },
    { schema: educationSchema, data: educationForm },
    { schema: experienceSchema, data: experienceForm },
    { schema: projectSchema, data: projectForm },
    { schema: skillsSchema, data: skillsForm },
  ]

  const handleNext = async () => {
    if (progress > FORMS_AMOUNT) return

    try {
      const { schema, data } = steps[progress]
      if (!schema) throw new Error("No schema found for the current step")

      await schema.parseAsync(data)
      setErrors({})
      setProgress(progress + 1)
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors: FormErrors = {}
        error.errors.forEach((e) => {
          newErrors[e.path[0]] = e.message
        })
        setErrors(newErrors)
      }
    }
  }

  return { handleNext }
}
