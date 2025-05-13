import { useNavigation } from "@hooks/useNavigation"
import Layout from "./pages/Layout"
import { lazy, Suspense } from "react"
import { NAVIGATION } from "@utils/consts"
import Loading from "@components/Loading"

const LazyHome = lazy(() => import("./pages/Home"))
const LazyUpgrade = lazy(() => import("./pages/Upgrade"))

function App() {
  const { currentPage } = useNavigation()
  return (
    <>
      <Layout />

      <Suspense fallback={<Loading />}>
        {currentPage === NAVIGATION.HOME.SLUG && <LazyHome />}
        {currentPage === NAVIGATION.UPGRADE.SLUG && <LazyUpgrade />}
      </Suspense>
    </>
  )
}

export default App
