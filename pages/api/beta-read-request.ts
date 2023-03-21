// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * This API Route adds a beta reader to a Google Spreadsheet and then
 * sends a notification to a discord server
 * 
 * @param req NextApiRequest
 * @param res NextApiResponse
 * @returns Status of the response and JSON data
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body: { name, email, socialMedia } } = req

  if (name && email && socialMedia && method === "POST") {
    await fetch(process.env.SHEET_BEST_API_URL!, {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        socialMedia: socialMedia
      })
    })
    .then((r) => r.json())
    .then(async (data) => {
      // The response comes here

      // Notify discord server
      const description = `
        Name: ${name}
        Email: ${email}
        Social Media: ${socialMedia}
      `

      // Configures the discord notification
      const message = {
        "content": "New beta reader request",
        "embeds": [{
          "title": "You have received a new request to beta read The Pivot",
          "description": description
        }]
      }

      await fetch(process.env.BETA_SIGNUP_DISCORD_WEBHOOK!, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        }
      })

      return res.status(200).json({ message: "Successfully added beta reader."})
    })
    .catch((error) => {
      // Errors are reported there
      return res.status(400).json({ message: "There was an error adding the beta reader", description: error})
    });
  }
  else {
    return res.status(400).json({ error: 'Invalid Request', description: 'The request had malformed data.'})
  }
}
