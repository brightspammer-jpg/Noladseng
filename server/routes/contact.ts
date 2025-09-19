import express from 'express';
import { sendEmail, renderContactEmail } from '../services/email.ts';

const router = express.Router();

router.post('/send', async (req, res) => {
	try {
		const { name, email, phone, subject, message } = req.body || {};
		if (!name || !email || !message) {
			return res.status(400).json({ success: false, error: 'name, email, and message are required' });
		}

		const to = process.env.CONTACT_RECIPIENT || process.env.EMAIL_TO || process.env.SMTP_USER;
		if (!to) {
			console.error('Email configuration error: Recipient email not configured');
			return res.status(500).json({ success: false, error: 'Recipient email not configured' });
		}

		try {
			await sendEmail({
				to,
				subject: subject ? `Contact: ${subject}` : 'New Contact Message',
				html: renderContactEmail({ name, email, phone, subject, message }),
				text: `New contact message from ${name} <${email}>\nPhone: ${phone || '-'}\nSubject: ${subject || '-'}\n\n${message}`,
			});
		} catch (emailError: any) {
			console.error('Failed to send contact email:', {
				error: emailError.message,
				stack: emailError.stack,
				config: {
					to,
					smtpConfigured: !!process.env.SMTP_HOST && !!process.env.SMTP_USER
				}
			});
			throw new Error('Failed to send email: ' + emailError.message);
		}

		return res.json({ success: true });
	} catch (error: any) {
		return res.status(500).json({ success: false, error: error?.message || 'Failed to send contact email' });
	}
});

export default router;


