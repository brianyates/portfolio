import axios from "axios";
import { sendEmail } from "./utils";
import { GOOGLE_RECAPTCHA_SECRET } from "./config";
import { Request, Response } from "firebase-functions";

function validate(data: any) {
  if (!data.name || !data.email || !data.message) {
    throw new Error("Invalid data");
  }
}

async function validateRecaptchaToken(response: string) {
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_RECAPTCHA_SECRET}&response=${response}`,
    {}
  );
  if (!data.success) {
    throw new Error("Invalid recaptcha token");
  }
  return;
}

export default async (req: Request, res: Response<any>) => {
  const EMAIL_ADDRESS = "hello@brianyates.dev";
  try {
    const data = req.body;
    validate(data);
    await validateRecaptchaToken(data.recaptchaToken);
    await sendEmail(
      EMAIL_ADDRESS,
      "New Message from Portfolio Contact Us Form",
      `<div>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong> ${data.message}</p>
        </div>`
    );
    res.status(200).send({});
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
};
