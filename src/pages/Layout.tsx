import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import SignInButton from "@components/buttons/SigninButton"
import { Link } from "@components/Link"
import { NAVIGATION } from "@utils/consts"

export default function Layout() {
  return (
    <header className="flex justify-end gap-4 py-4 px-8 bg-dark-background-secondary text-gray-300 whitespace-nowrap fixed top-0 left-0 right-0 z-50">
      <Link to={NAVIGATION.HOME.SLUG} className="flex items-center">
        {NAVIGATION.HOME.NAME}
      </Link>
      <Link to={NAVIGATION.UPGRADE.SLUG} className="flex items-center">
        {NAVIGATION.UPGRADE.NAME}
      </Link>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  )
}
