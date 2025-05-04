import Project from "@components/forms/Project"
import Education from "./components/forms/Education"
import Experience from "./components/forms/Experience"
import HeadData from "./components/forms/HeadData"
import PersonalData from "./components/forms/PersonalData"
import NavButtons from "./components/NavButtons"
import { TITLE } from "./utils/consts"
import Skills from "@components/forms/Skills"
import CreateResume from "@components/forms/CreateResume"

//todo mejorar semantica
//todo arreglar los tabindex

//todo modo claro
function App() {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="dark-text-secondary text-dark-text-primary text-4xl font-bold">
          {TITLE}
        </h1>

        <form className="w-full min-w-fit max-w-[526px] bg-dark-background-secondary p-4 rounded-xl">
          <fieldset className=" relative overflow-x-hidden min-h-80 justify-center items-center flex max-w-[500px] max-h-[450px]">
            <HeadData />
            <PersonalData />
            <Education />
            <Experience />
            <Project />
            <Skills />
            <CreateResume />
          </fieldset>

          <NavButtons />
        </form>
      </main>
    </>
  )
}

export default App
