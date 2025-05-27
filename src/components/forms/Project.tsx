import { formMovement } from "@utils/form/formMovement"
import { BUTTON_LABEL, FORM_POSITION, PROJECTS_FORM } from "@utils/consts"
import { ProjectType } from "types"
import { singleProjectSchema } from "@schema/project"
import FormTitle from "@components/FormTitle"
import { useProgress, useProject } from "@context/useFormContextHooks"
import { useLocalStorage } from "@hooks/useLocalStorage"
import SectionForm from "@components/template/SectionForm"

export default function Project() {
  const { items, setItems } = useLocalStorage<ProjectType>({
    itemName: PROJECTS_FORM.LOCAL_STORAGE,
  })

  const { progress } = useProgress()

  const { projectForm, setProjectForm } = useProject()

  const { translateClass } = formMovement({
    progress,
    step: FORM_POSITION.PROJECT,
  })

  return (
    <section className={`form ${translateClass} overflow-y-auto  justify-end`}>
      <FormTitle text={PROJECTS_FORM.TITLE} />

      <SectionForm<ProjectType>
        formKey={PROJECTS_FORM.LOCAL_STORAGE}
        formStep={FORM_POSITION.EDUCATION}
        config={{ ...PROJECTS_FORM }}
        schema={singleProjectSchema}
        addButtonText={BUTTON_LABEL.ADD_EDUCATION}
        formData={projectForm}
        setFormData={setProjectForm}
        items={items}
        setItems={setItems}
      />
    </section>
  )
}
