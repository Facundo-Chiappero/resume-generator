import { TextField } from "@mui/material"
import { FORM_POSITION, HEAD_DATA_FORM } from "@utils/consts"
import { formMovement } from "@utils/formMovement"

import { handleFileChange, handleInputChange } from "@utils/updateForm"
import FormTitle from "@components/FormTitle"
import {
  useErrors,
  useHeadData,
  useProgress,
} from "@context/useFormContextHooks"
import { getBasicInputStyle } from "@utils/getBasicInputStyle"
import { useIsLight } from "@hooks/useIsLight"
import Input from "@components/Input"
import { HeadDataType } from "types"

export default function HeadData() {
  const isLight = useIsLight()

  const basicInputStyle = getBasicInputStyle(isLight)

  const { progress } = useProgress()
  const { errors } = useErrors()
  const { setHeadDataForm, headDataForm } = useHeadData()

  const { translateClass, slotProps } = formMovement({
    progress,
    step: FORM_POSITION.HEAD_DATA,
  })

  return (
    <section className={`form ${translateClass} justify-center flex`}>
      <FormTitle text={HEAD_DATA_FORM.TITLE} />

      <Input<HeadDataType>
        aria-invalid="false"
        aria-describedby={HEAD_DATA_FORM.INPUTS.FULL_NAME.KEY}
        slotProps={slotProps}
        autoFocus
        placeholder={HEAD_DATA_FORM.INPUTS.FULL_NAME.PLACEHOLDER}
        type="text"
        name={HEAD_DATA_FORM.INPUTS.FULL_NAME.KEY}
        label={HEAD_DATA_FORM.INPUTS.FULL_NAME.LABEL}
        autoComplete={HEAD_DATA_FORM.INPUTS.FULL_NAME.AUTOCOMPLETE}
        required={HEAD_DATA_FORM.INPUTS.FULL_NAME.REQUIRED}
        error={!!errors.fullName}
        helperText={errors.fullName}
        onChange={(element) =>
          handleInputChange({ element, setter: setHeadDataForm })
        }
        basicInputStyle={basicInputStyle}
        value={headDataForm.fullName ?? ""}
        previousValue={headDataForm.fullName ?? ""}
        instruction={HEAD_DATA_FORM.INPUTS.FULL_NAME.INSTRUCTION}
        setFormEntry={setHeadDataForm}
      />

      <TextField
        aria-invalid="false"
        aria-describedby={HEAD_DATA_FORM.INPUTS.PHOTO.KEY}
        type="file"
        slotProps={{
          htmlInput: {
            accept: "image/*",
            tabIndex: slotProps.htmlInput.tabIndex,
          },
        }}
        name={HEAD_DATA_FORM.INPUTS.PHOTO.KEY}
        id={HEAD_DATA_FORM.INPUTS.PHOTO.KEY}
        label={HEAD_DATA_FORM.INPUTS.PHOTO.LABEL}
        error={!!errors.photo}
        helperText={errors.photo}
        onChange={(element) =>
          handleFileChange({
            element: element as React.ChangeEvent<HTMLInputElement>,
            setter: setHeadDataForm,
          })
        }
        {...basicInputStyle}
        sx={{
          input: {
            marginTop: "1rem",
            cursor: "pointer",
            ...basicInputStyle.sx.input,
          },
          label: { ...basicInputStyle.sx.label },
          ".MuiFilledInput-root": {
            ...basicInputStyle.sx[".MuiFilledInput-root"],
          },
        }}
      />

      {/* //preview */}
      {headDataForm.photoPreview && (
        <div className="flex gap-3 mt-4 self-center">
          <p className="-mt-1.5">Preview:</p>
          <img
            src={headDataForm.photoPreview}
            alt="User's image preview"
            className="max-h-40 rounded-md object-contain"
          />
        </div>
      )}
    </section>
  )
}
