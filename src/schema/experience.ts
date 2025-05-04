import { ERROR, EXPERIENCE_FORM } from "@utils/consts"
import { z } from "zod"

//single version is required to be used in GenericEntityForm
export const singleExperienceSchema = z
  .object({
    [EXPERIENCE_FORM.INPUTS.PLACE.KEY]: z
      .string()
      .min(1, { message: ERROR.EXPERIENCE.PLACE_REQUIRED }),

    [EXPERIENCE_FORM.INPUTS.ROLE.KEY]: z
      .string()
      .min(1, { message: ERROR.EXPERIENCE.ROLE_REQUIRED }),

    [EXPERIENCE_FORM.INPUTS.EXPERIENCE_LOCATION.KEY]: z
      .string()
      .min(1, { message: ERROR.EXPERIENCE.LOCATION_REQUIRED }),

    [EXPERIENCE_FORM.INPUTS.FROM.KEY]: z
      .string()
      .min(1, { message: ERROR.EXPERIENCE.FROM_REQUIRED })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: ERROR.EXPERIENCE.INVALID_FROM_DATE,
      }),

    [EXPERIENCE_FORM.INPUTS.TO.KEY]: z
      .string()
      .min(1, { message: ERROR.EXPERIENCE.TO_REQUIRED })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: ERROR.EXPERIENCE.INVALID_TO_DATE,
      }),

    // No transform here, tasks stays as a string with semicolons
    [EXPERIENCE_FORM.INPUTS.TASKS.KEY]: z
      .string()
      .min(1, { message: ERROR.EXPERIENCE.SPLIT_TASKS }) // Ensure at least one task
      .refine((val) => val.includes(";"), {
        message: ERROR.EXPERIENCE.SPLIT_TASKS,
      }),
  })
  .refine((data) => new Date(data.from) <= new Date(data.to), {
    path: [EXPERIENCE_FORM.INPUTS.FROM.KEY],
    message: ERROR.EXPERIENCE.FROM_BEFORE_TO,
  })

export const experienceSchema = z.array(singleExperienceSchema)
