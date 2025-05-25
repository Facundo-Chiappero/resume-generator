import { useState } from "react"

import { formMovement } from "@utils/formMovement"
import { BUTTON_LABEL, FORM_POSITION, PROJECTS_FORM } from "@utils/consts"
import AddButton from "@components/buttons/AddButton"
import GenericEntityList from "@components/template/GenericEntityList"
import { handleDelete, handleEdit } from "@utils/formHandlers"
import GenericEntityForm from "@components/template/GenericEntityForm"
import { ProjectType } from "types"
import { singleProjectSchema } from "@schema/project"
import FormTitle from "@components/FormTitle"
import { useProgress, useProject } from "@context/useFormContextHooks"

export default function Project() {
  const [projects, setProjects] = useState<ProjectType[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const { progress } = useProgress()

  const { setProjectForm, projectForm } = useProject()

  const { translateClass, slotProps } = formMovement({
    progress,
    step: FORM_POSITION.PROJECT,
  })

  return (
    <section className={`form ${translateClass} overflow-y-auto  justify-end`}>
      <FormTitle text={PROJECTS_FORM.TITLE} />

      <GenericEntityList<ProjectType>
        data={projects}
        config={PROJECTS_FORM}
        onEdit={(index) => handleEdit({ index, setEditingIndex, setShowForm })}
        onDelete={(index) =>
          handleDelete({
            index,
            items: projects,
            setItems: setProjects,
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
          text={BUTTON_LABEL.ADD_PROJECT}
        />
      )}

      {showForm && (
        <GenericEntityForm<ProjectType>
          editingIndex={editingIndex}
          data={projects}
          setData={setProjects}
          setFormData={setProjectForm}
          setEditingIndex={setEditingIndex}
          setShowForm={setShowForm}
          schema={singleProjectSchema}
          config={PROJECTS_FORM}
          slotProps={slotProps}
          previousValue={projectForm}
        />
      )}
    </section>
  )
}
