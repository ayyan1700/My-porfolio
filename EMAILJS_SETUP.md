# 📧 EmailJS Setup Guide

Your contact form is now configured to use **EmailJS** to send real emails! Follow these steps to set it up.

## 🚀 Step 1: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **Sign Up** (free account)
3. Create account with your email
4. Verify your email

## 🔑 Step 2: Get Your Credentials

### Public Key (API Key):
1. After signing in, go to **Account** (top right)
2. Click on **API** tab
3. Copy your **Public Key**
4. Keep this safe!

### Service ID:
1. Go to **Email Services** (left sidebar)
2. Click **Add New Service**
3. Choose your email provider:
   - Gmail
   - Outlook
   - Yahoo
   - Custom SMTP
4. Follow the prompts
5. Copy your **Service ID** (looks like: `service_xxxxx`)

### Template ID:
1. Go to **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Use this template structure:

```
Email Subject: Message from {{from_name}}

Body:
From: {{from_name}} ({{from_email}})
Message:
{{message}}
```

4. Save the template
5. Copy your **Template ID** (looks like: `template_xxxxx`)

## 📝 Step 3: Update Your Code

Open `src/components/Contact.jsx` and find these lines (around line 24 and 48):

```jsx
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Line 24
```

Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key.

Then find line 48:

```jsx
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace this
  'YOUR_TEMPLATE_ID',     // Replace this
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'your-email@example.com', // Replace this with your email
  }
);
```

Replace:
- `YOUR_SERVICE_ID` - Your Service ID
- `YOUR_TEMPLATE_ID` - Your Template ID
- `your-email@example.com` - Your actual email address where you want to receive messages

## ✅ Step 4: Test Your Form

1. Go to **http://localhost:5173**
2. Scroll to Contact section
3. Fill in the form
4. Click **Send Message**
5. Check your email! 📧

## 🔐 Security Note

**NEVER commit your credentials to GitHub!** 

For production, use environment variables:

```jsx
// Better approach using .env file
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateData
);
```

Create `.env` file in your project root:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## 📝 Template Variables Available

You can use these variables in your EmailJS template:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{message}}` - User's message
- `{{to_email}}` - Your email

## 🆘 Troubleshooting

### "Failed to send email"
- Check your Service ID is correct
- Check your Template ID is correct
- Check your Public Key is correct
- Make sure you've verified your email on EmailJS

### Email not received
- Check spam folder
- Verify email address in template
- Check EmailJS dashboard for error logs

### Rate limiting
- EmailJS free tier: 200 emails/month
- Upgrade for higher limits

## 💾 EmailJS Limits (Free Plan)

- **200 emails/month**
- 1 email service
- 5 email templates
- No support
- Limited storage

**Paid plans** start at $10/month for unlimited emails.

## 🎯 Done!

Your contact form will now send real emails when users submit the form. The form shows:
- ✓ Success message (when email sends)
- ✗ Error message (if something goes wrong)
- Loading state (while sending)

All features are animated and user-friendly! 🎉
