import Input from "@components/Input"
import { useIsLight } from "@hooks/useIsLight"
import {
  Button,
  Select,
  TextFieldProps,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material"
import { BUTTON_LABEL } from "@utils/consts"
import { handleChange, handleSubmit } from "@utils/form/formHandlers"
import { getBasicInputStyle } from "@utils/getBasicInputStyle"
import { useState } from "react"
import { ZodSchema } from "zod"

interface GenericFormProps<T> {
  initialData?: T
  onSave: (data: T) => void
  onCancel: () => void
  formFields: ({
    label: string
    field: keyof T
    required?: boolean
    type?: string
    categories?: readonly string[] //used for select type inputs
    autoComplete?: string
    instruction?: string
    previousValue: string
  } & Omit<TextFieldProps, "value" | "onChange" | "name" | "label">)[]
  zodSchema?: ZodSchema<T>
  onFieldChange?: (field: keyof T, value: string) => void
  slotProps: {
    htmlInput: {
      tabIndex: number
      marginTop?: string
    }
  }
}

//this generates the list used in GenericEntityForm, the other component is used to reduce even more the amount of code in the main components
export default function GenericForm<T>({
  initialData,
  onSave,
  onCancel,
  formFields,
  zodSchema,
  onFieldChange,
  slotProps,
}: GenericFormProps<T>) {
  const isLight = useIsLight()

  const basicInputStyle = getBasicInputStyle(isLight)

  const [formData, setFormData] = useState<T>(initialData || ({} as T))
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})

  return (
    <section
      className="flex flex-col gap-2 overflow-auto relative w-full z-50 top-0 left-0 bg-light-background-secondary dark:bg-dark-background-secondary h-full"
      tabIndex={slotProps.htmlInput.tabIndex}
    >
      {formFields.map(
        ({
          label,
          field,
          required = false,
          type = "text",
          categories,
          autoComplete,
          instruction,
          previousValue,
          ...props
        }) => {
          if (type === "select") {
            return (
              <FormControl
                fullWidth
                variant="filled"
                required={required}
                error={Boolean(errors[field])}
                sx={basicInputStyle.sx}
                key={String(field)}
              >
                <InputLabel id={`mui-select-label-${String(field)}`}>
                  {label}
                </InputLabel>
                <Select
                  labelId={`mui-select-label-${String(field)}`}
                  id={String(field)}
                  name={String(field)}
                  value={formData[field] ?? ""}
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
                      field,
                      setErrors,
                      setFormData,
                      value,
                    })
                    onFieldChange?.(field, value)
                  }}
                >
                  {categories?.map((category) => (
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
                {errors[field] && (
                  <FormHelperText>{errors[field]}</FormHelperText>
                )}
              </FormControl>
            )
          }

          return (
            <Input<T>
              key={label}
              label={label}
              name={String(field)}
              value={formData[field] as string}
              setFormEntry={setFormData}
              instruction={instruction ?? label.toLowerCase()}
              previousValue={previousValue}
              onChange={(e) => {
                const value = e.target.value
                handleChange({
                  field,
                  setErrors,
                  setFormData,
                  value,
                })
                onFieldChange?.(field, value)
              }}
              error={Boolean(errors[field])}
              // @ts-expect-error for an unknown reason it always says that the value can be null
              helperText={String(errors[field] ?? "")}
              basicInputStyle={basicInputStyle}
              type={type}
              required={required}
              autoComplete={autoComplete}
              slotProps={slotProps}
              {...props}
            />
          )
        }
      )}

      <div className="flex justify-end gap-2">
        <Button
          onClick={onCancel}
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
              onSave,
              setErrors,
              zodSchema,
            })
          }
          variant="contained"
          color="primary"
        >
          {BUTTON_LABEL.SAVE}
        </Button>
      </div>
    </section>
  )
}
