import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({
  error,
  subject,
}: {
  error: unknown
  subject: string
}) {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.MY_EMAIL || "",
    subject: subject,
    html: `
<div>
<strong>There was an error in Resume Generator:</strong>
${error}
</div>
`,
  })
}
