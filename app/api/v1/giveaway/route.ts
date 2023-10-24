import LmpWelcomeEmail from "@/emails/welcome";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

export async function POST(req:Request) {
  const transporter = nodemailer.createTransport({
    host: `${process.env.NEXT_PUBLIC_SMTP_HOST}`,
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.NEXT_PUBLIC_SMTP_USER}`,
      pass: `${process.env.NEXT_PUBLIC_SMTP_PASSWORD}`,
    },
  });
 const body = await req.json()
  const emailHtml = render(LmpWelcomeEmail({ fullName: body.fullName }));

  const options = {
    from: ` Learning Manifest <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
    to: `${body.email}`,
    bcc:"hello@lmp.com.ng",
    subject: "Learning Manifest Pod - Giveaway",
    html: emailHtml,
  };

  await transporter.sendMail(options);

  return new Response("Success");
}
