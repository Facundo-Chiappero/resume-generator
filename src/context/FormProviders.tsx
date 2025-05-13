import { ReactNode } from "react"
import { HeadDataProvider } from "./HeadDataContext"
import { PersonalDataProvider } from "./PersonalDataContext"
import { EducationProvider } from "./EducationContext"
import { ExperienceProvider } from "./ExperienceContext"
import { ProjectProvider } from "./ProjectContext"
import { SkillsProvider } from "./SkillsContext"
import { ProgressProvider } from "./ProgressContext"
import { ErrorsProvider } from "./ErrorsContext"

export const FormProviders = ({ children }: { children: ReactNode }) => {
  // This approach is better than using a single context, since each piece of state is managed and memoized independently.
  // As a result, only the components consuming the context that changed will re-render, improving performance and avoiding unnecessary updates.
  return (
    <ErrorsProvider>
      <ProgressProvider>
        <HeadDataProvider>
          <PersonalDataProvider>
            <EducationProvider>
              <ExperienceProvider>
                <ProjectProvider>
                  <SkillsProvider>{children}</SkillsProvider>
                </ProjectProvider>
              </ExperienceProvider>
            </EducationProvider>
          </PersonalDataProvider>
        </HeadDataProvider>
      </ProgressProvider>
    </ErrorsProvider>
  )
}
