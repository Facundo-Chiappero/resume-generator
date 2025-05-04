import { headDataSchema } from "@schema/headData"
import { FORMS_AMOUNT } from "@utils/consts"
import { ZodError } from "zod"
import { educationSchema } from "@schema/education"
import { personalDataSchema } from "@schema/personalData"
import { useForm } from "@context/FormContext"
import { FormErrors } from "types"
import { experienceSchema } from "@schema/experience"
import { projectSchema } from "@schema/project"
import { skillsSchema } from "@schema/skills"

export const useHandleNext = () => {
  const {
    progress,
    setProgress,
    headDataForm,
    personalDataForm,
    educationForm,
    experienceForm,
    projectForm,
    skillsForm,
    setErrors,
  } = useForm()

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
      setErrors({}) // Limpiamos los errores si la validación es exitosa
      setProgress(progress + 1)
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors: FormErrors = {}
        error.errors.forEach((e) => {
          newErrors[e.path[0]] = e.message
        })
        setErrors(newErrors) // Establecemos los errores en el contexto
      }
    }
  }

  return { handleNext }
}
