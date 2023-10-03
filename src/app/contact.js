// pages/api/contact.ts

// import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_AUTH_USER,
    pass: process.env.NODEMAILER_AUTH_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (name, email, message) => {
  await transporter.sendMail({
    from: email,
    to: "raleighefe@gmail.com",
    subject: "Email from portfolio",
    html: `
      <h2>Email from portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    res.status(200).json({ name, email, message });
    try {
      await sendMail(name, email, message);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send message" });
    }
  }
}
