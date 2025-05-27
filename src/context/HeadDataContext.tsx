import { useState, useMemo, ReactNode } from "react"
import { HeadDataType } from "types"
import { HeadDataContext } from "./useFormContextHooks"
import { HEAD_DATA_FORM } from "@utils/consts"

export const HeadDataProvider = ({ children }: { children: ReactNode }) => {
  const [headDataForm, setHeadDataForm] = useState<HeadDataType>(() => {
    const stored = localStorage.getItem(HEAD_DATA_FORM.LOCAL_STORAGE)

    return stored
      ? JSON.parse(stored)
      : {
          fullName: "",
          photo: null,
          photoPreview: null,
        }
  })

  const value = useMemo(() => {
    localStorage.setItem(
      HEAD_DATA_FORM.LOCAL_STORAGE,
      JSON.stringify(headDataForm)
    )
    return { headDataForm, setHeadDataForm }
  }, [headDataForm])

  return (
    <HeadDataContext.Provider value={value}>
      {children}
    </HeadDataContext.Provider>
  )
}
