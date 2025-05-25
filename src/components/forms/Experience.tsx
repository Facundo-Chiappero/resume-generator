import { useState } from "react"
import { ExperienceType } from "@types"

import { formMovement } from "@utils/formMovement"
import { BUTTON_LABEL, EXPERIENCE_FORM, FORM_POSITION } from "@utils/consts"
import AddButton from "@components/buttons/AddButton"
import GenericEntityForm from "@components/template/GenericEntityForm"
import GenericEntityList from "@components/template/GenericEntityList"
import { handleDelete, handleEdit } from "@utils/formHandlers"
import { singleExperienceSchema } from "@schema/experience"
import FormTitle from "@components/FormTitle"
import { useExperience, useProgress } from "@context/useFormContextHooks"

export default function Education() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const { progress } = useProgress()
  const { setExperienceForm, experienceForm } = useExperience()

  const { translateClass, slotProps } = formMovement({
    progress,
    step: FORM_POSITION.EXPERIENCE,
  })

  return (
    <section className={`form ${translateClass} overflow-y-auto  justify-end`}>
      <FormTitle text={EXPERIENCE_FORM.TITLE} />

      <GenericEntityList<ExperienceType>
        data={experiences}
        config={EXPERIENCE_FORM}
        onEdit={(index) => handleEdit({ index, setEditingIndex, setShowForm })}
        onDelete={(index) =>
          handleDelete({
            index,
            items: experiences,
            setItems: setExperiences,
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
          text={BUTTON_LABEL.ADD_EXPERIENCE}
        />
      )}

      {showForm && (
        <GenericEntityForm<ExperienceType>
          editingIndex={editingIndex}
          data={experiences}
          setData={setExperiences}
          setFormData={setExperienceForm}
          setEditingIndex={setEditingIndex}
          setShowForm={setShowForm}
          schema={singleExperienceSchema}
          config={EXPERIENCE_FORM}
          slotProps={slotProps}
          previousValue={experienceForm}
        />
      )}
    </section>
  )
}
