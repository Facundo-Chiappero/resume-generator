import { useNavigation } from "@hooks/useNavigation"
import Layout from "./pages/Layout"
import { lazy, Suspense } from "react"
import { NAVIGATION } from "@utils/consts"
import Loading from "@components/Loading"
import { ToastContainer } from "react-toastify"

const LazyHome = lazy(() => import("./pages/Home"))
const LazyUpgrade = lazy(() => import("./pages/Upgrade"))
const LazyError404 = lazy(() => import("./pages/Error404"))

// TODO agregar emote
// TODO hacer que se guarde todo en localhost
function App() {
  const { currentPage } = useNavigation()
  return (
    <>
      <Layout />

      <Suspense
        fallback={
          <div className="w-full min-h-[90vh] flex flex-col justify-center">
            <Loading />
          </div>
        }
      >
        {currentPage === NAVIGATION.HOME.SLUG && <LazyHome />}
        {currentPage === NAVIGATION.UPGRADE.SLUG && <LazyUpgrade />}

        {currentPage !== NAVIGATION.HOME.SLUG &&
          currentPage !== NAVIGATION.UPGRADE.SLUG && <LazyError404 />}
      </Suspense>

      <ToastContainer
        position="bottom-right"
        closeOnClick={true}
        theme="colored"
      />
    </>
  )
}

export default App
