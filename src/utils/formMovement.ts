type Props = {
  progress: number
  step: number
}
export function formMovement({ progress, step }: Props) {
  let translateClass =
    "-translate-x-full opacity-0 pointer-events-none absolute"
  let tabIndex = -1 // Establece tabIndex como un número
  if (progress === step) {
    translateClass = "translate-x-0 opacity-100 static"
    tabIndex = 1 // Establece el tabIndex a 1 si el paso es el actual
  } else if (progress < step) {
    translateClass = "translate-x-full opacity-0 pointer-events-none absolute"
  }

  const slotProps = {
    htmlInput: {
      tabIndex: tabIndex, // Aplicamos el tabIndex al input
    },
  }

  return { translateClass, slotProps } // Regresa tabIndex como un número
}
