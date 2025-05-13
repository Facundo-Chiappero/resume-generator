import GenericForm from "@components/template/GenericForm"
import {
  SKILL_INSTRUCTIONS,
  SKILL_PLACEHOLDERS,
  SKILLS_FORM,
} from "@utils/consts"
import { useState } from "react"
import { z } from "zod"

type Props<T> = {
  editingIndex: number | null
  data: T[]
  previousValue: T[]
  setData: React.Dispatch<React.SetStateAction<T[]>>
  setFormData: React.Dispatch<React.SetStateAction<T[]>>
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
  schema: z.ZodSchema<T>
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

//this is what should be used in components to create a form
export default function GenericEntityForm<T>({
  editingIndex,
  data,
  previousValue,
  setData,
  setFormData,
  setEditingIndex,
  setShowForm,
  schema,
  config,
  slotProps,
}: Props<T>) {
  const emptyData = Object.fromEntries(
    Object.values(config.INPUTS).map(({ KEY }) => [KEY, ""])
  ) as T

  const [placeholders, setPlaceholders] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  )
  const [instructions, setInstructions] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  )

  // this references to the CATEGORY property in SKILLS_FORM.INPUTS
  // same whit SKILL
  const isSkillsForm =
    SKILLS_FORM.INPUTS.CATEGORY.KEY.toUpperCase() in config.INPUTS &&
    SKILLS_FORM.INPUTS.SKILL.KEY.toUpperCase() in config.INPUTS

  const initialFormData = editingIndex !== null ? data[editingIndex] : emptyData

  // with this we can dynamically change properties from the skills form
  const handleFieldChange = (field: keyof T, value: string) => {
    if (!isSkillsForm || field !== SKILLS_FORM.INPUTS.CATEGORY.KEY) return

    const examples = SKILL_PLACEHOLDERS[value?.toLowerCase()] || []
    const placeholder = examples.join(", ")

    const instruction = SKILL_INSTRUCTIONS[value?.toLowerCase()] || []

    setPlaceholders((prev) => ({
      ...prev,
      ["skill" as keyof T]: placeholder,
    }))
    setInstructions((prev) => ({
      ...prev,
      ["skill" as keyof T]: instruction,
    }))
  }

  return (
    <GenericForm<T>
      initialData={initialFormData}
      onSave={(item) => {
        const updated = [...data]
        if (editingIndex !== null) {
          updated[editingIndex] = item
        } else {
          updated.push(item)
        }
        setData(updated)
        setFormData(updated)
        setEditingIndex(null)
        setShowForm(false)
      }}
      onCancel={() => {
        setShowForm(false)
        setEditingIndex(null)
      }}
      zodSchema={schema}
      onFieldChange={handleFieldChange}
      formFields={Object.values(config.INPUTS).map((input) => {
        const fieldPreviousValue =
          previousValue?.length > 0
            ? previousValue.map((item) => item[input.KEY]).join(", ")
            : ""

        return {
          label: input.LABEL,
          field: input.KEY,
          required: input.REQUIRED,
          placeholder: placeholders[input.KEY] || input.PLACEHOLDER,
          type: input.TYPE,
          categories: input.CATEGORIES,
          autoComplete: input.AUTOCOMPLETE,
          instruction: instructions[input.KEY] || input.INSTRUCTION,
          previousValue: fieldPreviousValue,
        }
      })}
      slotProps={slotProps}
    />
  )
}
