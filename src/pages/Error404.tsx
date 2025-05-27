import { Link } from "@components/Link"
import { NAVIGATION } from "@utils/consts"

export default function Error404() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center  text-center">
        <h1 className="text-4xl font-bold">Error 404</h1>
        <p>Page not found</p>

        <Link
          to={NAVIGATION.HOME.SLUG}
          className="mt-8 dark:bg-dark-background-white dark:text-dark-text-secondary rounded-2xl px-3 py-1"
        >
          {NAVIGATION.HOME.NAME}
        </Link>
      </main>
    </>
  )
}
