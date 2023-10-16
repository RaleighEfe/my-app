import nodemailer from "nodemailer";

//would have to install cors

export async function POST(req) {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_AUTH_USER,
      pass: process.env.NODEMAILER_AUTH_PASSWORD,
    },
  });

  try {
    // Send an email
    const mailing = await transporter.sendMail({
      to: "raleighefe@gmail.com",
      subject: "Email from portfolio",
      html: `
      <h2>Email from portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    });
    return Response.json({
      success: true,
      message: "Email sent successfully"
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: `An error occurred; ${error.message}`
    });
  }
}

export async function GET(request) {
  return Response.json({ name: "efe" });
}
