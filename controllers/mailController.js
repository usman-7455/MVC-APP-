const express = require("express");
const router = express.Router();
const transporter = require("../config/mail.config");

// Render email form (GET /)
router.get("/", (req, res) => {
  res.render("emailForm", { message: null });
});

// Handle email submission (POST /send)
router.post("/send", async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    });
    res.render("emailForm", { message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.render("emailForm", { message: "Failed to send email." });
  }
});

module.exports = router;