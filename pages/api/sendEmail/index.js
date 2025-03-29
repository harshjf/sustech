import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, message, subject } = req.body;

      const { SENDER_EMAIL, SENDER_PASSWORD, RECEIVER_EMAIL } = process.env;

      // Create a transporter using SMTP details
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: SENDER_EMAIL,
          pass: SENDER_PASSWORD,
        },
      });

      let mailOptions;

      mailOptions = {
        from: SENDER_EMAIL,
        to: RECEIVER_EMAIL,
        subject: `Contact Form Submission - ${subject}`,
        text: `User Name: ${name}       
    User Contact number: ${phone}
    User Mail: ${email}
    User Message: ${message}
  `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);

      res.status(200).json({
        success: true,
        message: "Email sent successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error, please try again",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
