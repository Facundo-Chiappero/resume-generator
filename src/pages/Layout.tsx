import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import SignInButton from "@components/SigninButton"
import { useNavigation } from "@hooks/useNavigation"
import { NAVIGATION } from "@utils/consts"

export default function Layout() {
  const { navigate } = useNavigation()

  return (
    <header className="flex justify-end gap-4 py-4 px-8 bg-dark-background-secondary text-gray-300">
      <button
        onClick={() => navigate(NAVIGATION.HOME.SLUG)}
        className="cursor-pointer"
      >
        {NAVIGATION.HOME.NAME}
      </button>
      <button
        onClick={() => navigate(NAVIGATION.UPGRADE.SLUG)}
        className="cursor-pointer"
      >
        {NAVIGATION.UPGRADE.NAME}
      </button>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  )
}
