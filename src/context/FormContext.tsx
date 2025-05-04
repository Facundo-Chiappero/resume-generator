import { createContext, useState, ReactNode, useContext } from "react"
import {
  EducationType,
  ExperienceType,
  FormErrors,
  HeadDataType,
  PersonalDataType,
  ProjectType,
  SkillsType,
} from "types"

export type FormContextType = {
  errors: FormErrors
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>

  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>

  headDataForm: HeadDataType
  setHeadDataForm: React.Dispatch<React.SetStateAction<HeadDataType>>

  personalDataForm: PersonalDataType
  setPersonalDataForm: React.Dispatch<React.SetStateAction<PersonalDataType>>

  educationForm: EducationType[]
  setEducationForm: React.Dispatch<React.SetStateAction<EducationType[]>>

  experienceForm: ExperienceType[]
  setExperienceForm: React.Dispatch<React.SetStateAction<ExperienceType[]>>

  projectForm: ProjectType[]
  setProjectForm: React.Dispatch<React.SetStateAction<ProjectType[]>>

  skillsForm: SkillsType[]
  setSkillsForm: React.Dispatch<React.SetStateAction<SkillsType[]>>
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: ReactNode }) {
  const [errors, setErrors] = useState<FormErrors>({})

  // Estado de progreso
  const [progress, setProgress] = useState(0)

  // Estados de los datos del formulario
  const [headDataForm, setHeadDataForm] = useState<HeadDataType>({
    fullName: "",
    photo: null,
    photoPreview: null,
  })

  const [personalDataForm, setPersonalDataForm] = useState<PersonalDataType>({
    address: "",
    location: "",
    email: "",
    phone: undefined,
  })

  const [educationForm, setEducationForm] = useState<EducationType[]>([])
  const [experienceForm, setExperienceForm] = useState<ExperienceType[]>([])
  const [projectForm, setProjectForm] = useState<ProjectType[]>([])
  const [skillsForm, setSkillsForm] = useState<SkillsType[]>([])

  return (
    <FormContext.Provider
      value={{
        progress,
        setProgress,
        headDataForm,
        setHeadDataForm,
        personalDataForm,
        setPersonalDataForm,
        educationForm,
        setEducationForm,
        experienceForm,
        setExperienceForm,
        projectForm,
        setProjectForm,
        skillsForm,
        setSkillsForm,
        errors,
        setErrors,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("useForm must be used within a FormProvider")
  }
  return context
}
