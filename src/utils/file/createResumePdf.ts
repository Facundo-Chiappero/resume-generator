import {
  TDocumentDefinitions,
  Content,
  StyleDictionary,
} from "pdfmake/interfaces"
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import {
  EducationType,
  ExperienceType,
  HeadDataType,
  PersonalDataType,
  ProjectType,
  SkillsType,
} from "types"
import { toBase64 } from "./toBase64"

pdfMake.vfs = pdfFonts.vfs

type Props = {
  headDataForm: HeadDataType
  personalDataForm: PersonalDataType
  educationForm: EducationType[]
  experienceForm: ExperienceType[]
  projectForm: ProjectType[]
  skillsForm: SkillsType[]
}

export const createResumePdf = async ({
  headDataForm,
  personalDataForm,
  educationForm,
  experienceForm,
  projectForm,
  skillsForm,
}: Props) => {
  const content: Content[] = []

  // PHOTO
  if (headDataForm.photo) {
    const base64Image = await toBase64(headDataForm.photo)
    content.push({
      image: base64Image,
      width: 100,
      alignment: "center",
      margin: [0, 0, 0, 10],
    })
  }

  // NAME
  content.push(
    {
      text: headDataForm.fullName,
      style: "header",
      alignment: "center",
      margin: [0, 0, 0, 5],
    },
    {
      canvas: [
        {
          type: "line",
          x1: 0,
          y1: 0,
          x2: 515,
          y2: 0,
          lineWidth: 1,
        },
      ],
      margin: [0, 0, 0, 10],
    }
  )

  // PERSONAL DATA
  const personalFields = [
    personalDataForm.address?.trim(),
    personalDataForm.location?.trim(),
    personalDataForm.email.trim(),
    personalDataForm.phone?.trim(),
  ].filter(Boolean)

  if (personalFields.length) {
    content.push({
      text: personalFields.join(" • "),
      style: "small",
      alignment: "center",
      margin: [0, 0, 0, 10],
    })
  }

  // EDUCATION
  if (educationForm.length) {
    content.push({ text: "Education", style: "sectionHeader" })

    educationForm.forEach((edu) => {
      content.push({
        columns: [
          { text: edu.institution, bold: true, width: "60%" },
          {
            text: edu.educationLocation,
            alignment: "right",
            width: "40%",
            bold: true,
          },
        ],
        margin: [0, 4, 0, 2],
      })

      content.push({
        columns: [
          {
            text: edu.gpa ? [{ text: "GPA: ", bold: true }, `${edu.gpa}`] : "",
            width: "60%",
          },
          {
            text: [
              { text: "Graduated: ", bold: true },
              { text: `${edu.year}`, bold: true },
            ],
            alignment: "right",
            width: "40%",
          },
        ],
        margin: [0, 0, 0, 10],
      })

      if (edu.thesis?.trim()) {
        content.push({
          text: [{ text: "Thesis: ", bold: true }, edu.thesis],
          style: "small",
          margin: [0, 0, 0, 2],
        })
      }

      if (edu.relatedSubjects?.trim()) {
        content.push({
          text: [
            { text: "Related Subjects: ", bold: true },
            edu.relatedSubjects,
          ],
          style: "small",
          margin: [0, 0, 0, 4],
        })
      }
    })
  }

  // EXPERIENCE
  if (experienceForm.length) {
    content.push({ text: "Experience", style: "sectionHeader" })

    experienceForm.forEach((exp) => {
      content.push({
        columns: [
          { text: exp.place, bold: true, width: "60%" },
          {
            text: exp.experienceLocation,
            bold: true,
            alignment: "right",
            width: "40%",
          },
        ],
        margin: [0, 4, 0, 2],
      })

      content.push({
        columns: [
          { text: exp.role, bold: true, width: "60%" },
          {
            text: exp.from && exp.to ? `${exp.from} - ${exp.to}` : "",
            bold: true,
            alignment: "right",
            width: "40%",
          },
        ],
        margin: [0, 0, 0, 4],
      })

      // Key Responsibilities / Achievements label
      const tasks = exp.tasks
        .split(";")
        .map((t) => t.trim())
        .filter((t) => t.length)

      if (tasks.length) {
        content.push({
          text: "Key Responsibilities / Achievements:",
          bold: true,
          margin: [0, 0, 0, 2],
        })

        tasks.forEach((task) => {
          content.push({
            text: `• ${task}`,
            style: "small",
            margin: [10, 0, 0, 1],
          })
        })
      }

      content.push({ text: "", margin: [0, 4] })
    })
  }

  // PROJECTS
  if (projectForm.length) {
    content.push({
      text: "Projects / Related Activities",
      style: "sectionHeader",
    })

    projectForm.forEach((proj) => {
      content.push({
        columns: [
          { text: proj.title, bold: true, width: "60%" },
          {
            text:
              proj.projectFrom && proj.projectTo
                ? `${proj.projectFrom} - ${proj.projectTo}`
                : "",
            bold: true,
            alignment: "right",
            width: "40%",
          },
        ],
        margin: [0, 4, 0, 2],
      })

      const lines = proj.explanation
        .split(";")
        .map((l) => l.trim())
        .filter(Boolean)
      lines.forEach((line) => {
        content.push({
          text: `• ${line}`,
          style: "small",
          margin: [10, 0, 0, 1],
        })
      })
    })
  }

  // SKILLS
  const skillsGrouped: Record<string, string[]> = {
    technical: [],
    language: [],
    tool: [],
    interests: [],
  }

  skillsForm.forEach(({ category, skill }) => {
    if (skillsGrouped[category]) {
      skillsGrouped[category].push(skill.trim())
    }
  })

  const categories = Object.entries(skillsGrouped).filter(
    ([, skills]) => skills.length
  )

  if (categories.length) {
    content.push({ text: "Skills", style: "sectionHeader" })

    categories.forEach(([category, skills]) => {
      content.push({
        text: [{ text: `${category}: `, bold: true }, skills.join(", ")],
        style: "small",
        margin: [0, 0, 0, 2],
      })
    })
  }

  const styles: StyleDictionary = {
    header: { fontSize: 18, bold: true },
    sectionHeader: {
      fontSize: 14,
      bold: true,
      margin: [0, 10, 0, 4],
      alignment: "center",
    },
    small: { fontSize: 10 },
    wrapRight: {
      fontSize: 10,
      alignment: "right",
      // this is like overflow-wrap: anywhere
      characterSpacing: 0,
    },
  }

  const docDefinition: TDocumentDefinitions = {
    content,
    styles,
    defaultStyle: {
      fontSize: 11,
    },
    pageMargins: [40, 40, 40, 40],
  }

  pdfMake.createPdf(docDefinition).download("resume.pdf")
}
