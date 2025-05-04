import { TextField } from "@mui/material"
import { BASIC_INPUT_STYLE, FORM_POSITION, HEAD_DATA_FORM } from "@utils/consts"
import { formMovement } from "@utils/formMovement"
import { useForm } from "@context/FormContext"
import { handleFileChange, handleInputChange } from "@utils/updateForm"
import FormTitle from "@components/FormTitle"

export default function HeadData() {
  const { progress, headDataForm, setHeadDataForm, errors } = useForm()

  const { translateClass, slotProps } = formMovement({
    progress,
    step: FORM_POSITION.HEAD_DATA,
  })

  return (
    <section className={`form ${translateClass} justify-center flex`}>
      <FormTitle text={HEAD_DATA_FORM.TITLE} />
      <TextField
        aria-invalid="false"
        aria-describedby={HEAD_DATA_FORM.INPUTS.FULL_NAME.KEY}
        slotProps={slotProps}
        autoFocus
        placeholder={HEAD_DATA_FORM.INPUTS.FULL_NAME.PLACEHOLDER}
        type="text"
        name={HEAD_DATA_FORM.INPUTS.FULL_NAME.KEY}
        id={HEAD_DATA_FORM.INPUTS.FULL_NAME.KEY}
        label={HEAD_DATA_FORM.INPUTS.FULL_NAME.LABEL}
        autoComplete={HEAD_DATA_FORM.INPUTS.FULL_NAME.AUTOCOMPLETE}
        required
        error={!!errors.fullName}
        helperText={errors.fullName}
        value={headDataForm.fullName}
        onChange={(element) =>
          handleInputChange({ element, setter: setHeadDataForm })
        }
        {...BASIC_INPUT_STYLE}
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
        error={!!errors.photo} // Si hay error, mostramos el campo en rojo
        helperText={errors.photo}
        onChange={(element) =>
          handleFileChange({
            element: element as React.ChangeEvent<HTMLInputElement>,
            setter: setHeadDataForm,
          })
        } // Manejamos el cambio del archivo
        {...BASIC_INPUT_STYLE}
        sx={{
          input: {
            marginTop: "1rem",
            cursor: "pointer",
            ...BASIC_INPUT_STYLE.sx.input,
          },
          label: { ...BASIC_INPUT_STYLE.sx.label },
          ".MuiFilledInput-root": {
            ...BASIC_INPUT_STYLE.sx[".MuiFilledInput-root"],
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
