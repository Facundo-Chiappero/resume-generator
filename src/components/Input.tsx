import { TextField, TextFieldProps } from "@mui/material"
import AIButton from "./buttons/AIButton"
import { ChangeEvent, useState } from "react"
import Loading from "./Loading"

type Props<T> = {
  label: string
  name: string
  value: string
  instruction: string
  previousValue: string
  setFormEntry: React.Dispatch<React.SetStateAction<T>>
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error: boolean
  helperText: string
  basicInputStyle: {
    fullWidth: boolean
    variant: "filled"
    color: "primary"
    sx: {
      input: {
        color: string
      }
      label: {
        color: string
      }
      ".MuiFilledInput-root": {
        backgroundColor: string
        "&:hover": {
          backgroundColor: string
        }
        "&.Mui-focused": {
          backgroundColor: string
        }
      }
    }
  }
  inputSlotProps?: {
    htmlInput: {
      tabIndex: number
      marginTop?: string
    }
  }
} & TextFieldProps
export default function Input<T>({
  label,
  name,
  value,
  error,
  helperText,
  instruction,
  previousValue,
  setFormEntry,
  onChange,
  inputSlotProps,
  basicInputStyle,
  type,
  ...textFieldProps
}: Props<T>) {
  const [loading, setLoading] = useState(false)

  const tabIndex = inputSlotProps?.htmlInput?.tabIndex

  const combinedSx = {
    ...basicInputStyle.sx,
    ...(type === "date"
      ? {
          "& .MuiInputBase-input": {
            paddingTop: "1rem",
          },
          "& .MuiInputBase-root": {
            paddingTop: "1.5rem",
          },
        }
      : {}),
  }

  return !loading ? (
    <fieldset className="flex relative">
      <TextField
        aria-invalid={!!error}
        aria-describedby={name}
        slotProps={inputSlotProps}
        name={name}
        id={name}
        error={!!error}
        helperText={helperText}
        onChange={onChange}
        value={value ?? ""}
        fullWidth={basicInputStyle.fullWidth}
        variant={basicInputStyle.variant}
        color={basicInputStyle.color}
        sx={combinedSx}
        {...textFieldProps}
        label={label}
        type={type}
      />
      <AIButton
        instruction={instruction}
        setFormEntry={setFormEntry}
        previousValue={previousValue}
        property={name}
        setLoading={setLoading}
        tabIndex={typeof tabIndex === "number" ? tabIndex : -1}
      />
    </fieldset>
  ) : (
    <Loading />
  )
}
