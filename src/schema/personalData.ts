import { ERROR, PERSONAL_DATA_FORM } from "@utils/consts"
import { z } from "zod"

const locationFormat = /^[A-Za-zÀ-ÿ\s,.'-]+$/
const phoneFormat = /\d[\d\s]{5,20}$/

export const personalDataSchema = z.object({
  [PERSONAL_DATA_FORM.INPUTS.ADDRESS.KEY]: z
    .string()
    .refine((value) => value === "" || value.length >= 10, {
      message: ERROR.PERSONAL_DATA.ADDRESS_LENGTH,
    })
    .optional(),

  [PERSONAL_DATA_FORM.INPUTS.LOCATION.KEY]: z
    .string({ message: ERROR.PERSONAL_DATA.LOCATION_REQUIRED })
    .min(1, { message: ERROR.PERSONAL_DATA.LOCATION_EMPTY })
    .regex(locationFormat, {
      message: ERROR.PERSONAL_DATA.LOCATION_FORMAT,
    }),

  // i'm not using .email() since the integration with AI fails
  [PERSONAL_DATA_FORM.INPUTS.EMAIL.KEY]: z
    .string({ message: ERROR.PERSONAL_DATA.EMAIL_REQUIRED })
    .trim()
    .transform((value) => value.toLowerCase())
    .refine(
      (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(val)
      },
      { message: ERROR.PERSONAL_DATA.EMAIL_FORMAT }
    ),

  [PERSONAL_DATA_FORM.INPUTS.PHONE.KEY]: z
    .string()
    .regex(phoneFormat, {
      message: ERROR.PERSONAL_DATA.PHONE_FORMAT,
    })
    .optional(),
})
