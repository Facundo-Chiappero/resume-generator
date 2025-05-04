import { z } from "zod"
import { EDUCATION_FORM, ERROR } from "@utils/consts"

const gpaFormat = /^[0-9]+(\.[0-9]+)?\/[0-9]+$/

//single version is required to be used in GenericEntityForm
export const singleEducationSchema = z.object({
  [EDUCATION_FORM.INPUTS.INSTITUTION.KEY]: z
    .string()
    .min(1, { message: ERROR.EDUCATION.INSTITUTION_REQUIRED }),

  [EDUCATION_FORM.INPUTS.GPA.KEY]: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (value) {
          return gpaFormat.test(value)
        }
        return true
      },
      { message: ERROR.EDUCATION.GPA_FORMAT }
    ),

  [EDUCATION_FORM.INPUTS.LOCATION.KEY]: z
    .string()
    .min(1, { message: ERROR.EDUCATION.LOCATION_REQUIRED }),

  [EDUCATION_FORM.INPUTS.YEAR.KEY]: z
    .string()
    .min(1, { message: ERROR.EDUCATION.YEAR_REQUIRED })
    .refine(
      (value) => {
        const currentYear = new Date().getFullYear()
        return parseInt(value) <= currentYear
      },
      { message: ERROR.EDUCATION.YEAR_VALIDATION }
    ),

  [EDUCATION_FORM.INPUTS.THESIS.KEY]: z
    .string()
    .optional()
    .refine((value) => (value ? value.trim().length > 0 : true), {
      message: ERROR.EDUCATION.THESIS_TEXT,
    }),

  [EDUCATION_FORM.INPUTS.RELATED_SUBJECTS.KEY]: z
    .string()
    .optional()
    .refine((value) => (value ? value.trim().length > 0 : true), {
      message: ERROR.EDUCATION.RELATED_SUBJECTS_TEXT,
    }),
})

export const educationSchema = z.array(singleEducationSchema)
