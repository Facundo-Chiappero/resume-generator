import { EducationType } from "@types"
import { formMovement } from "@utils/form/formMovement"
import { BUTTON_LABEL, EDUCATION_FORM, FORM_POSITION } from "@utils/consts"
import { singleEducationSchema } from "@schema/education"
import FormTitle from "@components/FormTitle"
import { useEducation, useProgress } from "@context/useFormContextHooks"
import SectionForm from "@components/template/SectionForm"
import { useLocalStorage } from "@hooks/useLocalStorage"

export default function Education() {
  const { items, setItems } = useLocalStorage<EducationType>({
    itemName: EDUCATION_FORM.LOCAL_STORAGE,
  })

  const { progress } = useProgress()

  const { setEducationForm, educationForm } = useEducation()

  const { translateClass } = formMovement({
    progress,
    step: FORM_POSITION.EDUCATION,
  })

  return (
    <section className={`form ${translateClass} overflow-y-auto justify-end`}>
      <FormTitle text={EDUCATION_FORM.TITLE} />

      <SectionForm<EducationType>
        formKey={EDUCATION_FORM.LOCAL_STORAGE}
        formStep={FORM_POSITION.EDUCATION}
        config={{ ...EDUCATION_FORM }}
        schema={singleEducationSchema}
        addButtonText={BUTTON_LABEL.ADD_EDUCATION}
        formData={educationForm}
        setFormData={setEducationForm}
        items={items}
        setItems={setItems}
      />
    </section>
  )
}
