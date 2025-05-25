import { ZodSchema, ZodTypeDef } from "zod"

type EditProps = {
  index: number
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}
type DeleteProps<T> = {
  index: number
  items: T[]
  setItems: React.Dispatch<React.SetStateAction<T[]>>
  editingIndex: number | null
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}
type ChangeProps<T> = {
  field: keyof T
  value: string | NonNullable<T[keyof T]>
  setFormData: (value: React.SetStateAction<T>) => void
  setErrors: (
    value: React.SetStateAction<Partial<Record<keyof T, string>>>
  ) => void
}
type SubmitProps<T> = {
  zodSchema: ZodSchema<T, ZodTypeDef, T> | undefined
  formData: T
  setErrors: (
    value: React.SetStateAction<Partial<Record<keyof T, string>>>
  ) => void
  onSave: (data: T) => void
}
export const handleEdit = ({
  index,
  setEditingIndex,
  setShowForm,
}: EditProps) => {
  setEditingIndex(index)
  setShowForm(true)
}

export const handleDelete = <T>({
  editingIndex,
  index,
  setEditingIndex,
  setShowForm,
  items,
  setItems,
}: DeleteProps<T>) => {
  setItems(items.filter((_, i) => i !== index))
  if (editingIndex === index) {
    setShowForm(false)
    setEditingIndex(null)
  }
}

export const handleChange = <T>({
  field,
  setErrors,
  setFormData,
  value,
}: ChangeProps<T>) => {
  setFormData((prev) => ({ ...prev, [field]: value }))
  setErrors((prev) => ({ ...prev, [field]: undefined }))
}

export const handleSubmit = <T>({
  zodSchema,
  formData,
  setErrors,
  onSave,
}: SubmitProps<T>) => {
  if (!zodSchema) return

  const result = zodSchema.safeParse(formData)
  if (!result.success) {
    const newErrors = {} as Partial<Record<keyof T, string>>
    result.error.errors.forEach((err) => {
      const field = err.path[0] as keyof T
      newErrors[field] = err.message
    })
    setErrors(newErrors)
    return
  }
  onSave(formData)
}
