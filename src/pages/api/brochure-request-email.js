import { transporter } from "@/lib/mailer";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    let to ="sales@bbqpodspain.com";
    //  to = 'pritam.biswas489@gmail.com'; // for testing, replace with actual recipient in production
    const name = req.body?.fullName ;
    const email = req.body?.email;
    const language = req.body?.language;  

    const subject = `Brochure Request – ${name}`;
    const templatePath = path.join(process.cwd(), "public", "brochure-request-email.html");
    let htmlBody = fs.readFileSync(templatePath, "utf8");
    htmlBody = htmlBody.replace(/\[\s*customer_name\s*\]/g, name );
    htmlBody = htmlBody.replace(/\[\s*customer_email\s*\]/g, email );
    htmlBody = htmlBody.replace(/\[\s*customer_language\s*\]/g, language ); 

        
    try {
        await transporter.sendMail({
            from: `"BBQSPAIN" <${process.env.EMAIL_FROM}>`,
            to,
            subject,
            html: htmlBody,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("Email error:", err);
        return res.status(500).json({ error: "Failed to send email" });
    }
}
