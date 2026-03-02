import { transporter } from "@/lib/mailer";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	let to ="sales@bbqpodspain.com";
     to = 'pritam.biswas489@gmail.com'; // for testing, replace with actual recipient in production
    const name = req.body?.fullName ;
    const email = req.body?.email;
    const phone = req.body?.phone;
    const installStreet = req.body?.installStreet;
    const installCity = req.body?.installCity;
    const installPostcode = req.body?.installPostcode;
    const installProvince = req.body?.installProvince;
    const howDidYouHear = req.body?.howDidYouHear;
    const message = req.body?.message;

    const model = req.body?.model;
    const color = req.body?.color;
    const interior = req.body?.interior;
    const counterTop = req.body?.countertop;
    const doorConfig = req.body?.doorConfig;
    const bbqStyle = req.body?.bbqStyle;
    const installationRequirements = req.body?.installationRequirements;
    const additionalNotes = req.body?.additionalNotes;




    const subject = `Online design submission ${name}`;
	const templatePath = path.join(process.cwd(), "public", "order-confirmation-email.html");
	let htmlBody = fs.readFileSync(templatePath, "utf8");
    htmlBody = htmlBody.replace(/\[\s*customer_name\s*\]/g, name );
    htmlBody = htmlBody.replace(/\[\s*customer_phone\s*\]/g, phone );
    htmlBody = htmlBody.replace(/\[\s*customer_email\s*\]/g, email );
    htmlBody = htmlBody.replace(/\[\s*installation_address\s*\]/g, installStreet );
    htmlBody = htmlBody.replace(/\[\s*installation_city\s*\]/g, installCity );
    htmlBody = htmlBody.replace(/\[\s*installation_state\s*\]/g, installProvince );
    htmlBody = htmlBody.replace(/\[\s*installation_zip\s*\]/g, installPostcode );
    htmlBody = htmlBody.replace(/\[\s*message\s*\]/g, message );
    htmlBody = htmlBody.replace(/\[\s*referral_source\s*\]/g, howDidYouHear );
    htmlBody = htmlBody.replace(/\[\s*model\s*\]/g, model );
    htmlBody = htmlBody.replace(/\[\s*exterior_color\s*\]/g, color );
    htmlBody = htmlBody.replace(/\[\s*interior\s*\]/g, interior );
    htmlBody = htmlBody.replace(/\[\s*countertop\s*\]/g, counterTop );
    htmlBody = htmlBody.replace(/\[\s*door_configuration\s*\]/g, doorConfig );
    htmlBody = htmlBody.replace(/\[\s*bbq_style\s*\]/g, bbqStyle );
    htmlBody = htmlBody.replace(/\[\s*additional_notes\s*\]/g, additionalNotes );

    const installationReqsFormatted = installationRequirements
      .map((q) => ` <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:0;background:#1a1a1a;border:1px solid #252525;">
                      <tr>
                        <td width="36" style="padding:14px 0 14px 16px;vertical-align:top;text-align:center;">
                          <span style="font-size:14px;color:#4caf50;">✓</span>
                        </td>
                        <td style="padding:14px 16px 14px 8px;">
                          <p style="margin:0 0 2px;font-size:11px;color:#777;font-family:Arial,sans-serif;">${q.label}</p>
                          <p style="margin:0;font-size:13px;color:#d0d0d0;font-family:Arial,sans-serif;">${q.answer}</p>
                        </td>
                      </tr>
                    </table>`)
      .join("");
    htmlBody = htmlBody.replace(/\[\s*installation_requirements\s*\]/g, installationReqsFormatted );

		
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
