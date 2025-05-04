import { useState, useMemo, ReactNode } from "react"
import { HeadDataType } from "types"
import { HeadDataContext } from "./useFormContextHooks"

export const HeadDataProvider = ({ children }: { children: ReactNode }) => {
  const [headDataForm, setHeadDataForm] = useState<HeadDataType>({
    fullName: "",
    photo: null,
    photoPreview: null,
  })

  const value = useMemo(
    () => ({ headDataForm, setHeadDataForm }),
    [headDataForm]
  )

  return (
    <HeadDataContext.Provider value={value}>
      {children}
    </HeadDataContext.Provider>
  )
}
