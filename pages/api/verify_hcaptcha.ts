import { NextApiRequest, NextApiResponse } from "next";

/**
 * This API route verifies the hcaptcha token
 * 
 * @param req NextApiRequest
 * @param res NextApiResponse
 * @returns response
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body, method } = req;

  const { hcaptcha } = body;

  if (method === 'POST') {
    if (!hcaptcha) {
      return res.status(422).json({
        message: "Unprocessable request, please provide the required fields"
      });
    }
    
    try {
      const response = await fetch(
        `https://hcaptcha.com/siteverify`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          },
          body: `response=${hcaptcha}&secret=${process.env.NEXT_PUBLIC_HCAPTCHA_SECRET_KEY}`,
          method: "POST",
        }
      );
      const hcaptchaValidation = await response.json()

      if (hcaptchaValidation.success) {
        return res.status(200).send("OK")
      }

      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
      });
    } catch (error) {
      console.log(error)
      return res.status(422).json({ message: "Something went wrong" });
    }
  }

  return res.status(404).send("Not found.")
}