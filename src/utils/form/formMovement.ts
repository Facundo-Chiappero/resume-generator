type Props = {
  progress: number
  step: number
}
export function formMovement({ progress, step }: Props) {
  //by default every step in the form is a the right and won't be focusable through tab key
  let translateClass =
    "-translate-x-full opacity-0 pointer-events-none absolute"
  let tabIndex = -1

  //it is visible and focusable when is the current step
  if (progress === step) {
    translateClass = "translate-x-0 opacity-100 static"
    tabIndex = 1

    //when that step is already done it go the right and is not focusable
  } else if (progress < step) {
    translateClass = "translate-x-full opacity-0 pointer-events-none absolute"
  }

  // with this object we can apply tabIndex in Material UI inputs
  const slotProps = {
    htmlInput: {
      tabIndex: tabIndex,
    },
  }

  return { translateClass, slotProps }
}
