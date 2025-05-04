import { z } from "zod"
import { ERROR, PROJECTS_FORM } from "@utils/consts"

export const singleProjectSchema = z
  .object({
    [PROJECTS_FORM.INPUTS.TITLE.KEY]: z
      .string()
      .min(1, { message: ERROR.PROJECT.TITLE_REQUIRED }),

    [PROJECTS_FORM.INPUTS.EXPLANATION.KEY]: z
      .string()
      .refine((val) => val.includes(";"), {
        message: ERROR.PROJECT.EXPLANATION_SEPARATOR_REQUIRED,
      })
      .refine((arr) => arr.length >= 1, {
        message: ERROR.PROJECT.EXPLANATION_SEPARATOR_REQUIRED,
      }),
    [PROJECTS_FORM.INPUTS.FROM.KEY]: z
      .string()
      .optional()
      .refine((val) => !val || !isNaN(Date.parse(val)), {
        message: ERROR.PROJECT.INVALID_FROM_DATE,
      })
      .refine(
        (val) => {
          if (!val) return true
          const date = new Date(val)
          return date <= new Date()
        },
        {
          message: ERROR.EXPERIENCE.FROM_NOT_IN_FUTURE,
        }
      ),

    [PROJECTS_FORM.INPUTS.TO.KEY]: z
      .string()
      .optional()
      .refine((val) => !val || !isNaN(Date.parse(val)), {
        message: ERROR.PROJECT.INVALID_TO_DATE,
      }),
  })
  .refine(
    (data) => {
      const hasFrom = !!data[PROJECTS_FORM.INPUTS.FROM.KEY]
      const hasTo = !!data[PROJECTS_FORM.INPUTS.TO.KEY]
      return hasFrom === hasTo
    },
    {
      path: [PROJECTS_FORM.INPUTS.FROM.KEY],
      message: ERROR.PROJECT.BOTH_DATES_REQUIRED,
    }
  )
  .refine(
    (data) => {
      const from = data[PROJECTS_FORM.INPUTS.FROM.KEY]
      const to = data[PROJECTS_FORM.INPUTS.TO.KEY]
      if (from && to) {
        return new Date(from) <= new Date(to)
      }
      return true
    },
    {
      path: [PROJECTS_FORM.INPUTS.FROM.KEY],
      message: ERROR.PROJECT.FROM_BEFORE_TO,
    }
  )

export const projectSchema = z.array(singleProjectSchema)
