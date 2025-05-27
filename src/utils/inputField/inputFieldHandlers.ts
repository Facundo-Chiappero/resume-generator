import {
  SKILL_INSTRUCTIONS,
  SKILL_PLACEHOLDERS,
  SKILLS_FORM,
} from "@utils/consts"
import {
  handleCancelProps,
  handleFieldChangeProps,
  HandleSaveProps,
} from "types"

export const handleFieldChange = <T>({
  field,
  value,
  isSkillsForm,
  setPlaceholders,
  setInstructions,
}: handleFieldChangeProps) => {
  if (!isSkillsForm || field !== SKILLS_FORM.INPUTS.CATEGORY.KEY) return

  const examples = SKILL_PLACEHOLDERS[value?.toLowerCase()] || []
  const placeholder = examples.join(", ")
  const instruction = SKILL_INSTRUCTIONS[value?.toLowerCase()] || ""

  setPlaceholders((prev) => ({
    ...prev,
    ["skill" as keyof T]: placeholder,
  }))
  setInstructions((prev) => ({
    ...prev,
    ["skill" as keyof T]: instruction,
  }))
}

export const handleSave = ({
  item,
  setData,
  setFormData,
  setEditingIndex,
  setShowForm,
  editingIndex,
  data,
}: HandleSaveProps) => {
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
}

export const handleCancel = ({
  setShowForm,
  setEditingIndex,
}: handleCancelProps) => {
  setShowForm(false)
  setEditingIndex(null)
}
