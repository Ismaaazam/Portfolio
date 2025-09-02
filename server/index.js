const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const projects = require("./projects");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Projects route
app.get("/projects", (req, res) => {
  res.json(projects);
});

// Contact form route
app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com", // from Brevo
      port: 587,
      secure: false,
      auth: {
        user: "YOUR_BREVO_EMAIL", // the email you used for Brevo
        pass: "YOUR_BREVO_SMTP_KEY" // your SMTP key
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <YOUR_BREVO_EMAIL>`,
      to: "YOUR_PERSONAL_EMAIL",
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
