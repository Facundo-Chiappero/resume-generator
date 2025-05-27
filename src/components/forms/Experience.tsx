import { ExperienceType } from "@types"
import { formMovement } from "@utils/form/formMovement"
import { BUTTON_LABEL, EXPERIENCE_FORM, FORM_POSITION } from "@utils/consts"
import { singleExperienceSchema } from "@schema/experience"
import FormTitle from "@components/FormTitle"
import { useExperience, useProgress } from "@context/useFormContextHooks"
import { useLocalStorage } from "@hooks/useLocalStorage"
import SectionForm from "@components/template/SectionForm"

export default function Education() {
  const { items, setItems } = useLocalStorage<ExperienceType>({
    itemName: EXPERIENCE_FORM.LOCAL_STORAGE,
  })

  const { progress } = useProgress()
  const { experienceForm, setExperienceForm } = useExperience()

  const { translateClass } = formMovement({
    progress,
    step: FORM_POSITION.EXPERIENCE,
  })

  return (
    <section className={`form ${translateClass} overflow-y-auto  justify-end`}>
      <FormTitle text={EXPERIENCE_FORM.TITLE} />

      <SectionForm<ExperienceType>
        formKey={EXPERIENCE_FORM.LOCAL_STORAGE}
        formStep={FORM_POSITION.EDUCATION}
        config={{ ...EXPERIENCE_FORM }}
        schema={singleExperienceSchema}
        addButtonText={BUTTON_LABEL.ADD_EDUCATION}
        formData={experienceForm}
        setFormData={setExperienceForm}
        items={items}
        setItems={setItems}
      />
    </section>
  )
}
