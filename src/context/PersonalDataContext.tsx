import { useState, useMemo, ReactNode } from "react"
import { PersonalDataType } from "types"
import { PersonalDataContext } from "./useFormContextHooks"
import { PERSONAL_DATA_FORM } from "@utils/consts"

export const PersonalDataProvider = ({ children }: { children: ReactNode }) => {
  const [personalDataForm, setPersonalDataForm] = useState<PersonalDataType>(
    () => {
      const stored = localStorage.getItem(PERSONAL_DATA_FORM.LOCAL_STORAGE)

      return stored
        ? JSON.parse(stored)
        : {
            address: "",
            location: "",
            email: "",
            phone: undefined,
          }
    }
  )

  const value = useMemo(() => {
    localStorage.setItem(
      PERSONAL_DATA_FORM.LOCAL_STORAGE,
      JSON.stringify(personalDataForm)
    )
    return { personalDataForm, setPersonalDataForm }
  }, [personalDataForm])

  return (
    <PersonalDataContext.Provider value={value}>
      {children}
    </PersonalDataContext.Provider>
  )
}
