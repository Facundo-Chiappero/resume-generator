export type UseAIRequestBodyType = {
  instruction: string
  headDataForm: HeadDataType
  personalDataForm: PersonalDataType
  educationForm: EducationType[]
  experienceForm: ExperienceType[]
  projectForm: ProjectType[]
  skillsForm: SkillsType[]
}

export type HeadDataType = {
  fullName: string
  photo: File | null
  photoPreview: string | null
}
export type PersonalDataType = {
  address?: string
  location: string
  email: string
  phone?: string
}
export type EducationType = {
  institution: string
  educationLocation: string
  gpa?: string
  year: string
  thesis?: string
  relatedSubjects?: string
}
export type ExperienceType = {
  place: string
  role: string
  experienceLocation: string
  from?: string
  to?: string
  tasks: string
}
export type ProjectType = {
  title: string
  explanation: string
  projectFrom?: string
  projectTo?: string
}
export type SkillsType = {
  category: SkillsCategory
  skill: string
}
export type SkillsCategory = "technical" | "language" | "tool" | "interests"

// errors
export type FormErrors = Record<string, string>

export type HeadDataErrors = {
  fullName?: string
  photo?: string
}

export type PersonalDataErrors = {
  address?: string
  location?: string
  email?: string
  phone?: string
}

export type EducationErrors = {
  institution?: string
  degree?: string
  startDate?: string
  endDate?: string
}
