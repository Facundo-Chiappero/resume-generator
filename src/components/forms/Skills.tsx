import { useState } from "react"

import { formMovement } from "@utils/formMovement"
import { BUTTON_LABEL, FORM_POSITION, SKILLS_FORM } from "@utils/consts"
import AddButton from "@components/AddButton"
import GenericEntityList from "@components/template/GenericEntityList"
import { handleDelete, handleEdit } from "@utils/formHandlers"
import GenericEntityForm from "@components/template/GenericEntityForm"
import { SkillsType } from "types"
import { skillSchema } from "@schema/skills"
import FormTitle from "@components/FormTitle"
import { useProgress, useSkills } from "@context/useFormContextHooks"

export default function Skills() {
  const [skills, setSkills] = useState<SkillsType[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const { progress } = useProgress()

  const { setSkillsForm } = useSkills()

  const { translateClass, slotProps } = formMovement({
    progress,
    step: FORM_POSITION.SKILLS,
  })

  return (
    <section className={`form ${translateClass} overflow-y-auto  justify-end`}>
      <FormTitle text={SKILLS_FORM.TITLE} />

      <GenericEntityList<SkillsType>
        data={skills}
        config={SKILLS_FORM}
        onEdit={(index) => handleEdit({ index, setEditingIndex, setShowForm })}
        onDelete={(index) =>
          handleDelete({
            index,
            items: skills,
            setItems: setSkills,
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
          text={BUTTON_LABEL.ADD_SKILL}
        />
      )}

      {showForm && (
        <GenericEntityForm<SkillsType>
          editingIndex={editingIndex}
          data={skills}
          setData={setSkills}
          setFormData={setSkillsForm}
          setEditingIndex={setEditingIndex}
          setShowForm={setShowForm}
          schema={skillSchema}
          config={SKILLS_FORM}
          slotProps={slotProps}
        />
      )}
    </section>
  )
}
