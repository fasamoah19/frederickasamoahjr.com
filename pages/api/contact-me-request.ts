// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * This API route notifies a discord server when a new request has been
 * made throught the contact form.
 * 
 * @param req NextApiRequest
 * @param res NextApiResponse
 * @returns Status of the response and JSON data
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body: { name, email, subject, message } } = req

  // Verify all data is present
  if (name && email && subject && message && method === "POST") {
    // Configure the discord notification description
    const description = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `

    // Configures the discord notification alert message
    const discordMessage = {
      "content" : "Received a new contact request",
      "embeds": [{
        "title": "You have received a new message through the contact form",
        "description": description
      }]
    }

    // Notifies discord
    await fetch(process.env.NEXT_PUBLIC_CONTACT_ME_DISCORD_WEBHOOK!, {
      method: 'POST',
      body: JSON.stringify(discordMessage),
      headers: {
        "Content-Type": "application/json",
      }
    })

    return res.status(200).json({ message: "Successfully notified."})
  }
  else {
    return res.status(400).json({ error: "Invalid Request", description: "The request had malformed data." })
  }
}