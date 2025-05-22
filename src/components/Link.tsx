import { useNavigation } from "@hooks/useNavigation"
import { AnchorHTMLAttributes, ReactNode } from "react"

type Props = {
  target?: string
  to: string
  children?: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ target, to, children, ...props }: Props) {
  const { navigate } = useNavigation()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMainEvent = e.buttons == 0
    const isModifiedEvent = e.metaKey || e.altKey || e.shiftKey || e.ctrlKey
    const isManageableEvent = target == undefined || target == "_self"

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      e.preventDefault()
      navigate(to)
    }
  }

  return (
    <a onClick={handleClick} target={target} href={to} {...props}>
      {children}
    </a>
  )
}
