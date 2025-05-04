import { useState, useMemo, ReactNode } from "react"
import { ProjectType } from "types"
import { ProjectContext } from "./useFormContextHooks"

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projectForm, setProjectForm] = useState<ProjectType[]>([])

  const value = useMemo(() => ({ projectForm, setProjectForm }), [projectForm])

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  )
}
