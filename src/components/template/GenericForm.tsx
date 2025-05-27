import Input from "@components/Input"
import { useIsLight } from "@hooks/useIsLight"
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material"
import { handleChange, handleSubmit } from "@utils/form/formHandlers"
import { getBasicInputStyle } from "@utils/inputField/getBasicInputStyle"
import { BUTTON_LABEL } from "@utils/consts"
import { GenericFormProps } from "types"
import { useDynamicInputProps } from "@hooks/useDynamicInputProps"
import {
  handleCancel,
  handleFieldChange,
  handleSave,
} from "@utils/inputField/inputFieldHandlers"

export default function GenericForm<T>({
  editingIndex,
  data,
  previousValue,
  setData,
  setFormData,
  setEditingIndex,
  setShowForm,
  schema,
  config,
  slotProps,
}: GenericFormProps<T>) {
  const isLight = useIsLight()
  const basicInputStyle = getBasicInputStyle(isLight)

  const {
    errors,
    formData,
    instructions,
    isSkillsForm,
    placeholders,
    setErrors,
    setFormDataLocal,
    setInstructions,
    setPlaceholders,
  } = useDynamicInputProps({ config, data, editingIndex })

  return (
    <section
      className="flex flex-col gap-2 overflow-auto relative w-full z-50 top-0 left-0 bg-light-background-secondary dark:bg-dark-background-secondary h-full"
      tabIndex={slotProps.htmlInput.tabIndex}
    >
      {Object.values(config.INPUTS).map((input) => {
        const {
          KEY,
          LABEL,
          PLACEHOLDER,
          REQUIRED,
          TYPE = "text",
          CATEGORIES,
          AUTOCOMPLETE,
          INSTRUCTION,
        } = input

        const previousVal = previousValue?.length
          ? previousValue.map((item) => item[KEY]).join(", ")
          : ""

        if (TYPE === "select") {
          return (
            <FormControl
              fullWidth
              variant="filled"
              required={REQUIRED}
              error={Boolean(errors[KEY])}
              sx={basicInputStyle.sx}
              key={String(KEY)}
            >
              <InputLabel id={`mui-select-label-${String(KEY)}`}>
                {LABEL}
              </InputLabel>
              <Select
                labelId={`mui-select-label-${String(KEY)}`}
                id={String(KEY)}
                name={String(KEY)}
                value={formData[KEY] ?? ""}
                MenuProps={{
                  slotProps: {
                    paper: {
                      sx: {
                        background: "#333",
                      },
                    },
                  },
                }}
                sx={{
                  ".MuiSelect-select": {
                    color: "white",
                  },
                }}
                onChange={(e) => {
                  const value = e.target.value as string
                  handleChange({
                    field: KEY,
                    setErrors,
                    setFormData: setFormDataLocal,
                    value,
                  })
                  handleFieldChange({
                    field: KEY,
                    isSkillsForm,
                    setInstructions,
                    setPlaceholders,
                    value,
                  })
                }}
              >
                {CATEGORIES?.map((category) => (
                  <MenuItem
                    key={category}
                    value={category}
                    sx={{
                      backgroundColor: "#333",
                      color: "#fff",
                      "&.Mui-selected": {
                        backgroundColor: "#444",
                      },
                      "&:hover": {
                        backgroundColor: "#555",
                      },
                    }}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Select>
              {errors[KEY] && <FormHelperText>{errors[KEY]}</FormHelperText>}
            </FormControl>
          )
        }

        return (
          <Input<T>
            placeholder={placeholders[KEY] || PLACEHOLDER}
            key={LABEL}
            label={LABEL}
            name={String(KEY)}
            value={formData[KEY] as string}
            setFormEntry={setFormDataLocal}
            instruction={
              instructions[KEY] ?? INSTRUCTION ?? LABEL.toLowerCase()
            }
            previousValue={previousVal}
            onChange={(e) => {
              const value = e.target.value
              handleChange({
                field: KEY,
                setErrors,
                setFormData: setFormDataLocal,
                value,
              })
              handleFieldChange({
                field: KEY,
                isSkillsForm,
                setInstructions,
                setPlaceholders,
                value,
              })
            }}
            error={Boolean(errors[KEY])}
            helperText={String(errors[KEY] ?? "")}
            basicInputStyle={basicInputStyle}
            type={TYPE}
            required={REQUIRED}
            autoComplete={AUTOCOMPLETE}
            slotProps={slotProps}
          />
        )
      })}

      <footer className="flex justify-end gap-2">
        <Button
          onClick={() => handleCancel({ setEditingIndex, setShowForm })}
          color="inherit"
          aria-label={BUTTON_LABEL.CANCEL}
          title={BUTTON_LABEL.CANCEL}
          tabIndex={slotProps.htmlInput.tabIndex}
        >
          {BUTTON_LABEL.CANCEL}
        </Button>
        <Button
          aria-label={BUTTON_LABEL.SAVE}
          title={BUTTON_LABEL.SAVE}
          tabIndex={slotProps.htmlInput.tabIndex}
          onClick={() =>
            handleSubmit({
              formData,
              onSave: (item) =>
                handleSave({
                  editingIndex,
                  item,
                  setData,
                  setEditingIndex,
                  setFormData,
                  setShowForm,
                  data,
                }),
              setErrors,
              zodSchema: schema,
            })
          }
          variant="contained"
          color="primary"
        >
          {BUTTON_LABEL.SAVE}
        </Button>
      </footer>
    </section>
  )
}
