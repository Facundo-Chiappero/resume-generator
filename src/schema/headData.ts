import { z } from "zod"
import { checkMagicBytes } from "@utils/checkMagicBytes"
import { ERROR, HEAD_DATA_FORM } from "@utils/consts"
const photoRegex = /\.(jpg|jpeg|png|webp)$/i
const nameRegex = /^[\p{L}\s'-]+$/u

export const headDataSchema = z.object({
  [HEAD_DATA_FORM.INPUTS.FULL_NAME.KEY]: z
    .string()
    .min(2, { message: ERROR.HEAD_DATA.SHORT })
    .regex(nameRegex, { message: ERROR.HEAD_DATA.ONLY_ALPHABETICAL }),

  [HEAD_DATA_FORM.INPUTS.PHOTO.KEY]: z.any().refine(
    async (file) => {
      if (!file) return true
      if (!(file instanceof File)) return false
      const validExt = photoRegex.test(file.name)
      const validSize = file.size <= 5 * 1024 * 1024
      const validBytes = await checkMagicBytes(file)
      return validExt && validSize && validBytes
    },
    {
      message: ERROR.HEAD_DATA.INVALID_FORMAT,
    }
  ),
})
