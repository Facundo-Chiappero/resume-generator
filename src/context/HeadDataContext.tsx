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
    // since we are using a blob for the preview when user reloads the page the blob will be lost, to avoid this problem we simply delete de information.
    headDataForm.photo = null
    headDataForm.photoPreview = null
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
