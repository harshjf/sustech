import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, phone_no, message, subject } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "racheltb123@gmail.com",
          pass: "lxphgpfdzxgnsvsj",
        },
      });

      let mailOptions;

      mailOptions = {
        from: "racheltb123@gmail.com",
        to: "racheltb123@gmail.com",
        subject: "New Contact Form Submission",
        text: `You have received a new message from your website contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\nMobile No: ${mobile_no}\nMessage: ${message}`,
        html: `<strong>You have received a new message from your website contact form.</strong><br><br>Here are the details:<br>Name: ${name}<br>Email: ${email}<br>Mobile No: ${mobile_no}<br>Message: ${message}`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);

      res.status(200).json({
        success: true,
        message: "Your free trial request has been sent!",
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
