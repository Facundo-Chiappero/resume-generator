import { SKILLS_FORM } from "@utils/consts"
import { useState } from "react"
import { UseDynamicInputPropsProps } from "types"

export function useDynamicInputProps<T>({
  config,
  data,
  editingIndex,
}: UseDynamicInputPropsProps<T>) {
  const emptyData = Object.fromEntries(
    Object.values(config.INPUTS).map(({ KEY }) => [KEY, ""])
  ) as T

  const [formData, setFormDataLocal] = useState<T>(
    editingIndex !== null ? data[editingIndex] : emptyData
  )
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [placeholders, setPlaceholders] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  )
  const [instructions, setInstructions] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  )
  const isSkillsForm =
    SKILLS_FORM.INPUTS.CATEGORY.KEY.toUpperCase() in config.INPUTS &&
    SKILLS_FORM.INPUTS.SKILL.KEY.toUpperCase() in config.INPUTS

  return {
    formData,
    setFormDataLocal,
    errors,
    setErrors,
    placeholders,
    setPlaceholders,
    instructions,
    setInstructions,
    isSkillsForm,
  }
}
