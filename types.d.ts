// paypal
import type { OrderResponseBody } from "@paypal/paypal-js"
import { Dispatch, SetStateAction } from "react"
import { ZodSchema } from "zod"

export type PayPalButtonProps = {
  name: string
  price: string
  userId: string | undefined
}
type handlePaymentSuccessProps = {
  details: OrderResponseBody
  name: string
  price: string
  userId: string
}

// backend
export type UseAIRequestBodyType = {
  instruction: string
  headDataForm: HeadDataType
  personalDataForm: PersonalDataType
  educationForm: EducationType[]
  experienceForm: ExperienceType[]
  projectForm: ProjectType[]
  skillsForm: SkillsType[]
}

// forms
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

// functions
type GenericFormProps<T> = {
  editingIndex: number | null
  data: T[]
  previousValue: T[]
  setData: React.Dispatch<React.SetStateAction<T[]>>
  setFormData: React.Dispatch<React.SetStateAction<T[]>>
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
  schema?: ZodSchema<T>
  config: {
    INPUTS: Record<
      string,
      {
        KEY: keyof T
        LABEL: string
        PLACEHOLDER: string
        REQUIRED: boolean
        TYPE?: string
        CATEGORIES?: readonly string[]
        AUTOCOMPLETE?: string
        INSTRUCTION?: string
      }
    >
  }
  slotProps: {
    htmlInput: {
      tabIndex: number
      marginTop?: string
    }
  }
}

type SectionFormProps<T> = {
  formKey: string
  formStep: number
  config: {
    INPUTS: Record<
      string,
      {
        KEY: keyof T
        LABEL: string
        PLACEHOLDER: string
        REQUIRED: boolean
        TYPE?: string
        CATEGORIES?: readonly string[]
        AUTOCOMPLETE?: string
        INSTRUCTION?: string
      }
    >
  }
  schema?: ZodType<T, ZodTypeDef, T> | undefined
  addButtonText: string
  formData: T[]
  setFormData: Dispatch<SetStateAction<T[]>>
  initialData?: T[]
  items: T[]
  setItems: Dispatch<SetStateAction<T[]>>
}

type UseDynamicInputPropsProps<T> = {
  editingIndex: number | null
  data: T[]
  config: {
    INPUTS: Record<
      string,
      {
        KEY: keyof T
        LABEL: string
        PLACEHOLDER: string
        REQUIRED: boolean
        TYPE?: string
        CATEGORIES?: readonly string[]
        AUTOCOMPLETE?: string
        INSTRUCTION?: string
      }
    >
  }
}

type handleFieldChangeProps = {
  field: keyof T
  value: string
  isSkillsForm: boolean
  setInstructions: React.Dispatch<React.SetStateAction<Record<keyof T, string>>>
  setPlaceholders: React.Dispatch<React.SetStateAction<Record<keyof T, string>>>
}

type HandleSaveProps = {
  editingIndex: number | null
  item: T
  setData: React.Dispatch<React.SetStateAction<T[]>>
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>
  setFormData: React.Dispatch<React.SetStateAction<T[]>>
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
  data: T[]
}

type handleCancelProps = {
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}
