import { formMovement } from "@utils/form/formMovement"
import { FORM_POSITION, PERSONAL_DATA_FORM } from "@utils/consts"
import { handleInputChange } from "@utils/form/updateForm"
import FormTitle from "@components/FormTitle"
import {
  useErrors,
  usePersonalData,
  useProgress,
} from "@context/useFormContextHooks"
import { getBasicInputStyle } from "@utils/inputField/getBasicInputStyle"
import { useIsLight } from "@hooks/useIsLight"
import Input from "@components/Input"
import { PersonalDataType } from "types"

export default function PersonalData() {
  const isLight = useIsLight()

  const basicInputStyle = getBasicInputStyle(isLight)
  const { progress } = useProgress()
  const { errors } = useErrors()
  const { setPersonalDataForm, personalDataForm } = usePersonalData()

  const { translateClass, slotProps } = formMovement({
    progress,
    step: FORM_POSITION.PERSONAL_DATA,
  })

  const inputs = PERSONAL_DATA_FORM.INPUTS

  return (
    <section className={`form ${translateClass} justify-center`}>
      <FormTitle text={PERSONAL_DATA_FORM.TITLE} />

      <Input<PersonalDataType>
        aria-invalid="false"
        aria-describedby={PERSONAL_DATA_FORM.INPUTS.LOCATION.KEY}
        onChange={(element) =>
          handleInputChange({ element, setter: setPersonalDataForm })
        }
        placeholder={inputs.LOCATION.PLACEHOLDER}
        type="text"
        name={inputs.LOCATION.KEY}
        id={inputs.LOCATION.KEY}
        label={inputs.LOCATION.LABEL}
        error={!!errors[inputs.LOCATION.KEY]}
        helperText={errors[inputs.LOCATION.KEY]}
        required={inputs.LOCATION.REQUIRED}
        autoComplete={inputs.LOCATION.AUTOCOMPLETE}
        slotProps={slotProps}
        basicInputStyle={basicInputStyle}
        value={personalDataForm.location ?? ""}
        previousValue={personalDataForm.location ?? ""}
        instruction={PERSONAL_DATA_FORM.INPUTS.LOCATION.INSTRUCTION}
        setFormEntry={setPersonalDataForm}
      />

      <Input<PersonalDataType>
        aria-invalid="false"
        aria-describedby={PERSONAL_DATA_FORM.INPUTS.EMAIL.KEY}
        onChange={(element) =>
          handleInputChange({ element, setter: setPersonalDataForm })
        }
        placeholder={inputs.EMAIL.PLACEHOLDER}
        type="email"
        name={inputs.EMAIL.KEY}
        id={inputs.EMAIL.KEY}
        label={inputs.EMAIL.LABEL}
        error={!!errors[inputs.EMAIL.KEY]}
        helperText={errors[inputs.EMAIL.KEY]}
        required={inputs.EMAIL.REQUIRED}
        autoComplete={inputs.EMAIL.AUTOCOMPLETE}
        slotProps={slotProps}
        basicInputStyle={basicInputStyle}
        value={personalDataForm.email ?? ""}
        previousValue={personalDataForm.email ?? ""}
        instruction={PERSONAL_DATA_FORM.INPUTS.EMAIL.INSTRUCTION}
        setFormEntry={setPersonalDataForm}
      />

      <Input<PersonalDataType>
        aria-invalid="false"
        aria-describedby={PERSONAL_DATA_FORM.INPUTS.ADDRESS.KEY}
        onChange={(element) =>
          handleInputChange({ element, setter: setPersonalDataForm })
        }
        placeholder={inputs.ADDRESS.PLACEHOLDER}
        type="text"
        name={inputs.ADDRESS.KEY}
        id={inputs.ADDRESS.KEY}
        label={inputs.ADDRESS.LABEL}
        error={!!errors[inputs.ADDRESS.KEY]}
        helperText={errors[inputs.ADDRESS.KEY]}
        required={inputs.ADDRESS.REQUIRED}
        autoComplete={inputs.ADDRESS.AUTOCOMPLETE}
        slotProps={slotProps}
        basicInputStyle={basicInputStyle}
        value={personalDataForm.address ?? ""}
        previousValue={personalDataForm.address ?? ""}
        instruction={PERSONAL_DATA_FORM.INPUTS.ADDRESS.INSTRUCTION}
        setFormEntry={setPersonalDataForm}
      />

      <Input<PersonalDataType>
        aria-invalid="false"
        aria-describedby={PERSONAL_DATA_FORM.INPUTS.PHONE.KEY}
        onChange={(element) =>
          handleInputChange({ element, setter: setPersonalDataForm })
        }
        placeholder={inputs.PHONE.PLACEHOLDER}
        type="tel"
        name={inputs.PHONE.KEY}
        id={inputs.PHONE.KEY}
        label={inputs.PHONE.LABEL}
        error={!!errors[inputs.PHONE.KEY]}
        helperText={errors[inputs.PHONE.KEY]}
        required={inputs.PHONE.REQUIRED}
        autoComplete={inputs.PHONE.AUTOCOMPLETE}
        slotProps={slotProps}
        basicInputStyle={basicInputStyle}
        value={personalDataForm.phone ?? ""}
        previousValue={personalDataForm.phone ?? ""}
        instruction={PERSONAL_DATA_FORM.INPUTS.PHONE.INSTRUCTION}
        setFormEntry={setPersonalDataForm}
      />
    </section>
  )
}
