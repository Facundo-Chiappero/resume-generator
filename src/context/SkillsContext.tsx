import { useState, useMemo, ReactNode } from "react"
import { SkillsType } from "types"
import { SkillsContext } from "./useFormContextHooks"

export const SkillsProvider = ({ children }: { children: ReactNode }) => {
  const [skillsForm, setSkillsForm] = useState<SkillsType[]>([])

  const value = useMemo(() => ({ skillsForm, setSkillsForm }), [skillsForm])

  return (
    <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>
  )
}
