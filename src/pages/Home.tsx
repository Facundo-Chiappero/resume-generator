import Project from "@components/forms/Project"
import Education from "@components/forms/Education"
import Experience from "@components/forms/Experience"
import HeadData from "@components/forms/HeadData"
import PersonalData from "@components/forms/PersonalData"
import NavButtons from "@components/buttons/NavButtons"
import { ADVICE, HOME_TITLE, NAVIGATION } from "@utils/consts"
import Skills from "@components/forms/Skills"
import CreateResume from "@components/forms/CreateResume"
import { FormProviders } from "@context/FormProviders"
import { useIsPro } from "@hooks/useIsPro"
import { Link } from "@components/Link"

export default function Home() {
  const isPro = useIsPro()
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center gap-4 p-4 mt-16">
        <h1 className="light-text-secondary title   text-4xl font-bold text-center">
          {HOME_TITLE}
        </h1>

        {!isPro && (
          <Link
            to={NAVIGATION.UPGRADE.SLUG}
            className="-mt-3 flex items-center justify-center flex-wrap"
          >
            {ADVICE.PART1} &nbsp;{" "}
            <span className="advice underline">{ADVICE.PART2}</span>
          </Link>
        )}

        <form className="w-full min-w-fit max-w-[526px] bg-light-background-secondary dark:bg-dark-background-secondary shadow-xl p-4 rounded-xl">
          <FormProviders>
            <fieldset className=" relative overflow-x-hidden min-h-80 justify-center items-center flex max-w-[500px] max-h-[490px]">
              <HeadData />
              <PersonalData />
              <Education />
              <Experience />
              <Project />
              <Skills />
              <CreateResume />
            </fieldset>
            <NavButtons />
          </FormProviders>
        </form>
      </main>
    </>
  )
}
