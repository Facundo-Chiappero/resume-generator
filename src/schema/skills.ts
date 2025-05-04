import { z } from "zod"
import { ERROR, SKILLS_FORM } from "@utils/consts"
import { SkillsType } from "types"

export const skillSchema = z.object({
  [SKILLS_FORM.INPUTS.CATEGORY.KEY]: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(SKILLS_FORM.INPUTS.CATEGORY.CATEGORIES, {
      errorMap: () => ({ message: ERROR.SKILLS.CATEGORY }),
    })
  ),
  [SKILLS_FORM.INPUTS.SKILL.KEY]: z.string().min(1, {
    message: ERROR.SKILLS.SKILL,
  }),
}) as z.ZodType<SkillsType>

export const skillsSchema = z.array(skillSchema)
