import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  ImageRun,
} from "docx"
import { saveAs } from "file-saver"

import {
  EducationType,
  ExperienceType,
  HeadDataType,
  PersonalDataType,
  ProjectType,
  SkillsType,
} from "types"

type Props = {
  headDataForm: HeadDataType
  personalDataForm: PersonalDataType
  educationForm: EducationType[]
  experienceForm: ExperienceType[]
  projectForm: ProjectType[]
  skillsForm: SkillsType[]
}

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

export const createResumeDocx = async ({
  headDataForm,
  personalDataForm,
  educationForm,
  experienceForm,
  projectForm,
  skillsForm,
}: Props) => {
  const children: Paragraph[] = []

  // PHOTO
  if (headDataForm.photo) {
    const base64 = await toBase64(headDataForm.photo)
    const imageData = base64.split(",")[1]
    const byteCharacters = atob(imageData)
    const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0))
    const imageBuffer = new Uint8Array(byteNumbers)

    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new ImageRun({
            data: imageBuffer,
            type: "jpg",
            transformation: {
              width: 100,
              height: 100,
            },
          }),
        ],
      })
    )
  }

  // NAME
  children.push(
    new Paragraph({
      text: headDataForm.fullName,
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
    })
  )

  // PERSONAL DATA
  const personalFields = [
    personalDataForm.address?.trim(),
    personalDataForm.location?.trim(),
    personalDataForm.email.trim(),
    personalDataForm.phone?.trim(),
  ].filter(Boolean)

  if (personalFields.length) {
    children.push(
      new Paragraph({
        text: personalFields.join(" • "),
        alignment: AlignmentType.CENTER,
      })
    )
  }

  // EDUCATION
  if (educationForm.length) {
    children.push(
      new Paragraph({
        text: "Education",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER,
      })
    )

    educationForm.forEach((edu) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: edu.institution, bold: true }),
            new TextRun(" – "),
            new TextRun({ text: edu.educationLocation, bold: true }),
          ],
        }),
        new Paragraph({
          children: [
            edu.gpa
              ? new TextRun({ text: `GPA: ${edu.gpa}`, bold: true })
              : new TextRun(""),
            new TextRun("  "),
            new TextRun({ text: `Graduated: ${edu.year}`, bold: true }),
          ],
        }),
        edu.thesis
          ? new Paragraph({
              children: [
                new TextRun({ text: "Thesis: ", bold: true }),
                new TextRun(edu.thesis),
              ],
            })
          : new Paragraph({}),
        edu.relatedSubjects
          ? new Paragraph({
              children: [
                new TextRun({ text: "Related Subjects: ", bold: true }),
                new TextRun(edu.relatedSubjects),
              ],
            })
          : new Paragraph({})
      )
    })
  }

  // EXPERIENCE
  if (experienceForm.length) {
    children.push(
      new Paragraph({
        text: "Experience",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER,
      })
    )

    experienceForm.forEach((exp) => {
      const fromTo = exp.from && exp.to ? `${exp.from} - ${exp.to}` : ""
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: exp.place, bold: true }),
            new TextRun(" – "),
            new TextRun({ text: exp.experienceLocation, bold: true }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: exp.role, bold: true }),
            new TextRun("  "),
            new TextRun({ text: fromTo, bold: true }),
          ],
        })
      )

      const tasks = exp.tasks
        .split(";")
        .map((t) => t.trim())
        .filter((t) => t.length)

      if (tasks.length) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: "Key Responsibilities / Achievements:",
                bold: true,
              }),
            ],
          })
        )

        tasks.forEach((task) => {
          children.push(
            new Paragraph({
              text: `• ${task}`,
              bullet: { level: 0 },
            })
          )
        })
      }
    })
  }

  // PROJECTS
  if (projectForm.length) {
    children.push(
      new Paragraph({
        text: "Projects / Related Activities",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER,
      })
    )

    projectForm.forEach((proj) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: proj.title, bold: true }),
            proj.projectFrom && proj.projectTo
              ? new TextRun({
                  text: ` (${proj.projectFrom} - ${proj.projectTo})`,
                  bold: true,
                })
              : new TextRun(""),
          ],
        })
      )

      const lines = proj.explanation
        .split(";")
        .map((line) => line.trim())
        .filter(Boolean)

      lines.forEach((line) => {
        children.push(
          new Paragraph({
            text: `• ${line}`,
            bullet: { level: 0 },
          })
        )
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
    children.push(
      new Paragraph({
        text: "Skills",
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.CENTER,
      })
    )

    categories.forEach(([category, skills]) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: `${category}: `, bold: true }),
            new TextRun(skills.join(", ")),
          ],
        })
      )
    })
  }

  const docFinal = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Calibri",
            size: 22,
          },
          paragraph: {
            spacing: { after: 120 },
          },
        },
      },
    },
    sections: [
      {
        children: children.filter(Boolean),
      },
    ],
  })

  Packer.toBlob(docFinal).then((blob) => {
    saveAs(blob, "resume.docx")
  })
}
