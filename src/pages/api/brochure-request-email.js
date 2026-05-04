import { transporter } from "@/lib/mailer";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    let to ="sales@bbqpodspain.com";
      // to = 'pritam.biswas489@gmail.com'; // for testing, replace with actual recipient in production
    const name = req.body?.fullName ;
    const email = req.body?.email;
    const language = req.body?.language;  

    const subject = `Brochure Request – ${name}`;
    const templatePath = path.join(process.cwd(), "public", "brochure-request-email.html");
    let htmlBody = fs.readFileSync(templatePath, "utf8");
    htmlBody = htmlBody.replace(/\[\s*customer_name\s*\]/g, name );
    htmlBody = htmlBody.replace(/\[\s*customer_email\s*\]/g, email );
    htmlBody = htmlBody.replace(/\[\s*customer_language\s*\]/g, language ); 
    htmlBody = htmlBody.replace(/\[\s*customer_date\s*\]/g, new Date().toLocaleString() );
    htmlBody = htmlBody.replace(/\[\s*customer_ip\s*\]/g, req.headers['x-forwarded-for'] || req.connection.remoteAddress || '' );

        
    try {
        await transporter.sendMail({
            from: `"BBQSPAIN" <${process.env.EMAIL_FROM}>`,
            to,
            subject,
            html: htmlBody,
        });

        

        if(language === "es") { // Spanish Brochure
           const templatePathEs = path.join(process.cwd(), "public", "bbqpodspain-brochure-email-es.html");
           let htmlBodyEs = fs.readFileSync(templatePathEs, "utf8");
           const attchmentPathEs = path.join(process.cwd(), "public", "BBQPodSpainESP.pdf");
           const pdfAttachmentEs = fs.readFileSync(attchmentPathEs);
           htmlBodyEs = htmlBodyEs.replace(/\[\s*Name\s*\]/g, name );
           const attamentEs = {
            filename: "BBQPodSpainESP.pdf",
            content:  pdfAttachmentEs,
            contentType: "application/pdf",
           };
           const esSubject = `Tu catálogo de BBQ Pod Spain 🔥`;
           const customerEmail = email ;
              await transporter.sendMail({
                from: `"BBQPODSPAIN" <sales@bbqpodspain.com>`,
                to: customerEmail,
                subject: esSubject,
                html: htmlBodyEs,
                attachments: [attamentEs],
            });
        }
        if(language === "en") { // English Brochure
            const templatePathEn = path.join(process.cwd(), "public", "bbqpodspain-brochure-email.html");
            let htmlBodyEn = fs.readFileSync(templatePathEn, "utf8");
            const attchmentPathEn = path.join(process.cwd(), "public", "BBQPodSpainENG.pdf");
            const pdfAttachmentEn = fs.readFileSync(attchmentPathEn);
            htmlBodyEn = htmlBodyEn.replace(/\[\s*Name\s*\]/g, name );
            const attamentEn = {
             filename: "BBQPodSpainENG.pdf",
             content:  pdfAttachmentEn,
             contentType: "application/pdf",
            };
            const enSubject = `Your BBQ Pod Spain Brochure 🔥`;
            const customerEmail = email ;
               await transporter.sendMail({
                 from: `"BBQPODSPAIN" <sales@bbqpodspain.com>`,
                 to: customerEmail,
                 subject: enSubject,
                 html: htmlBodyEn,
                 attachments: [attamentEn],
             });
        }

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("Email error:", err);
        return res.status(500).json({ error: "Failed to send email" });
    }
}
