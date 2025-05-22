import { useState } from "react"
import { EducationType } from "@types"
import { formMovement } from "@utils/formMovement"
import { BUTTON_LABEL, EDUCATION_FORM, FORM_POSITION } from "@utils/consts"
import AddButton from "@components/buttons/AddButton"
import GenericEntityList from "@components/template/GenericEntityList"
import { handleDelete, handleEdit } from "@utils/formHandlers"
import GenericEntityForm from "@components/template/GenericEntityForm"
import { singleEducationSchema } from "@schema/education"
import FormTitle from "@components/FormTitle"
import { useEducation, useProgress } from "@context/useFormContextHooks"

export default function Education() {
  const [educations, setEducations] = useState<EducationType[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const { progress } = useProgress()

  const { setEducationForm, educationForm } = useEducation()

  const { translateClass, slotProps } = formMovement({
    progress,
    step: FORM_POSITION.EDUCATION,
  })

  return (
    <section className={`form ${translateClass} overflow-y-auto justify-end`}>
      <FormTitle text={EDUCATION_FORM.TITLE} />

      <GenericEntityList<EducationType>
        data={educations}
        config={EDUCATION_FORM}
        onEdit={(index) => handleEdit({ index, setEditingIndex, setShowForm })}
        onDelete={(index) =>
          handleDelete({
            index,
            items: educations,
            setItems: setEducations,
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
          text={BUTTON_LABEL.ADD_EDUCATION}
        />
      )}

      {showForm && (
        <GenericEntityForm<EducationType>
          editingIndex={editingIndex}
          data={educations}
          setData={setEducations}
          setFormData={setEducationForm}
          setEditingIndex={setEditingIndex}
          setShowForm={setShowForm}
          schema={singleEducationSchema}
          config={EDUCATION_FORM}
          slotProps={slotProps}
          previousValue={educationForm}
        />
      )}
    </section>
  )
}
