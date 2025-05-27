import { formMovement } from "@utils/form/formMovement"
import { BUTTON_LABEL, FORM_POSITION, SKILLS_FORM } from "@utils/consts"
import { SkillsType } from "types"
import { skillSchema } from "@schema/skills"
import FormTitle from "@components/FormTitle"
import { useProgress, useSkills } from "@context/useFormContextHooks"
import { useLocalStorage } from "@hooks/useLocalStorage"
import SectionForm from "@components/template/SectionForm"

export default function Skills() {
  const { items, setItems } = useLocalStorage<SkillsType>({
    itemName: SKILLS_FORM.LOCAL_STORAGE,
  })

  const { progress } = useProgress()

  const { skillsForm, setSkillsForm } = useSkills()

  const { translateClass } = formMovement({
    progress,
    step: FORM_POSITION.SKILLS,
  })

  return (
    <section className={`form ${translateClass} overflow-y-auto  justify-end`}>
      <FormTitle text={SKILLS_FORM.TITLE} />

      <SectionForm<SkillsType>
        formKey={SKILLS_FORM.LOCAL_STORAGE}
        formStep={FORM_POSITION.EDUCATION}
        config={{ ...SKILLS_FORM }}
        schema={skillSchema}
        addButtonText={BUTTON_LABEL.ADD_EDUCATION}
        formData={skillsForm}
        setFormData={setSkillsForm}
        items={items}
        setItems={setItems}
      />
    </section>
  )
}
