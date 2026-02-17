import * as dotenv from "dotenv";
dotenv.config();
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

async function testEmail() {
  try {
    const msg = {
      to: "ljnformi@gmail.com", // replace with your email
      from: "hello.wgdtafrica@gmail.com", // must be verified in SendGrid
      subject: "SendGrid Test Email",
      text: "This is a test email from your SendGrid API key.",
      html: "<strong>This is a test email from your SendGrid API key.</strong>",
    };

    await sendgrid.send(msg);
    console.log("✅ Email sent successfully!");
  } catch (err: any) {
    console.error("❌ Email failed:", err.response?.body || err.message);
  }
}

testEmail();
