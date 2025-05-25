import { SKILL_PLACEHOLDERS } from "@utils/consts"

type Props<T> = {
  category: string | undefined
  isSkillsForm: boolean
  field: keyof T
}

export function getSkillPlaceholder<T>({
  category,
  isSkillsForm,
  field,
}: Props<T>): string {
  if (!isSkillsForm || field !== "category") return ""
  if (!category) return ""
  const normalized = category.toLowerCase()
  const examples = SKILL_PLACEHOLDERS[normalized] || []
  return examples.join(", ")
}
