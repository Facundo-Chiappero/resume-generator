import { useState } from "react"
import AddButton from "@components/buttons/AddButton"
import GenericList from "@components/template/GenericList"
import GenericForm from "@components/template/GenericForm"
import { handleDelete, handleEdit } from "@utils/form/formHandlers"
import { formMovement } from "@utils/form/formMovement"
import { SectionFormProps } from "types"
import { useProgress } from "@context/useFormContextHooks"

export default function SectionForm<T>({
  formStep,
  config,
  schema,
  addButtonText,
  formData,
  setFormData,
  items,
  setItems,
}: SectionFormProps<T>) {
  const { progress } = useProgress()

  const [showForm, setShowForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const { slotProps } = formMovement({
    progress: progress,
    step: formStep,
  })

  return (
    <>
      <GenericList<T>
        data={items}
        config={config}
        onEdit={(index) => handleEdit({ index, setEditingIndex, setShowForm })}
        onDelete={(index) =>
          handleDelete({
            index,
            items,
            setItems,
            editingIndex,
            setEditingIndex,
            setShowForm,
          })
        }
      />

      {!showForm && (
        <AddButton
          setShowForm={setShowForm}
          slotProps={slotProps}
          text={addButtonText}
        />
      )}

      {showForm && (
        <GenericForm<T>
          editingIndex={editingIndex}
          data={items}
          setData={setItems}
          setFormData={setFormData}
          setEditingIndex={setEditingIndex}
          setShowForm={setShowForm}
          schema={schema}
          config={config}
          slotProps={slotProps}
          previousValue={formData}
        />
      )}
    </>
  )
}
