import { createContext, useContext } from "react"
import {
  EducationType,
  ExperienceType,
  FormErrors,
  HeadDataType,
  PersonalDataType,
  ProjectType,
  SkillsType,
} from "types"

export const EducationContext = createContext<
  | {
      educationForm: EducationType[]
      setEducationForm: React.Dispatch<React.SetStateAction<EducationType[]>>
    }
  | undefined
>(undefined)
export const useEducation = () => {
  const context = useContext(EducationContext)
  if (!context)
    throw new Error("useEducation must be used within an EducationProvider")
  return context
}

export const ErrorsContext = createContext<
  | {
      errors: FormErrors
      setErrors: React.Dispatch<React.SetStateAction<FormErrors>>
    }
  | undefined
>(undefined)
export const useErrors = () => {
  const context = useContext(ErrorsContext)
  if (!context)
    throw new Error("useErrors must be used within an ErrorsProvider")
  return context
}

export const ExperienceContext = createContext<
  | {
      experienceForm: ExperienceType[]
      setExperienceForm: React.Dispatch<React.SetStateAction<ExperienceType[]>>
    }
  | undefined
>(undefined)
export const useExperience = () => {
  const context = useContext(ExperienceContext)
  if (!context)
    throw new Error("useExperience must be used within an ExperienceProvider")
  return context
}

export const HeadDataContext = createContext<
  | {
      headDataForm: HeadDataType
      setHeadDataForm: React.Dispatch<React.SetStateAction<HeadDataType>>
    }
  | undefined
>(undefined)
export const useHeadData = () => {
  const context = useContext(HeadDataContext)
  if (!context)
    throw new Error("useHeadData must be used within a HeadDataProvider")
  return context
}

export const PersonalDataContext = createContext<
  | {
      personalDataForm: PersonalDataType
      setPersonalDataForm: React.Dispatch<
        React.SetStateAction<PersonalDataType>
      >
    }
  | undefined
>(undefined)
export const usePersonalData = () => {
  const context = useContext(PersonalDataContext)
  if (!context)
    throw new Error(
      "usePersonalData must be used within a PersonalDataProvider"
    )
  return context
}

export const ProgressContext = createContext<
  | {
      progress: number
      setProgress: React.Dispatch<React.SetStateAction<number>>
    }
  | undefined
>(undefined)
export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context)
    throw new Error("useProgress must be used within a ProgressProvider")
  return context
}

export const ProjectContext = createContext<
  | {
      projectForm: ProjectType[]
      setProjectForm: React.Dispatch<React.SetStateAction<ProjectType[]>>
    }
  | undefined
>(undefined)
export const useProject = () => {
  const context = useContext(ProjectContext)
  if (!context)
    throw new Error("useProject must be used within a ProjectProvider")
  return context
}

export const SkillsContext = createContext<
  | {
      skillsForm: SkillsType[]
      setSkillsForm: React.Dispatch<React.SetStateAction<SkillsType[]>>
    }
  | undefined
>(undefined)
export const useSkills = () => {
  const context = useContext(SkillsContext)
  if (!context)
    throw new Error("useSkills must be used within a SkillsProvider")
  return context
}
