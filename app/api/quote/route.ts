import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, phone, email, location, volume, message } = body

    if (!name || !phone || !location || !volume) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: "24HR Bulk Water <quotes@24hrbulkwater.co.za>",
      to: ["24hrbulkwaterdelivery@gmail.com"],
      subject: "🚨 New Water Delivery Quote Request",
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Volume:</strong> ${volume}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    })

    return Response.json({ success: true })

  } catch (error) {
    console.error(error)

    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    )
  }
}