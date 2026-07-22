# Deena Portfolio

A professional portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

## Features

- **Modern UI/UX**: Glassmorphism design with smooth animations using Framer Motion
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Project Showcase**: Interactive project cards with live demo links and GitHub repositories
- **Skills Section**: Categorized display of technical skills
- **Experience Timeline**: Visual timeline of work experience and education
- **Contact Form**: Functional contact form using EmailJS for message delivery
- **Social Links**: Integration with LinkedIn, GitHub, Instagram, and email/phone

## Technologies Used

- React 18
- Framer Motion (animations)
- React Icons
- EmailJS (contact form)
- CSS3 (custom styling with CSS variables)

## Live Demo

[https://Deena2616.github.io/deena-portfolio](https://Deena2616.github.io/deena-portfolio)

## Installation

```bash
npm install
npm start
```

## EmailJS Setup

To enable automatic email delivery from the contact form, create a local `.env` file in the project root with the following values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Then configure EmailJS with a template that uses these field names:

- `name`
- `email`
- `subject`
- `message`

If your EmailJS account provides a user ID instead of a public key, add that value as `REACT_APP_EMAILJS_USER_ID`.

For example, use this email template body:

```text
Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

Set the recipient address in your EmailJS email service to `jeevaanandhan503@gmail.com` so messages arrive there.

If EmailJS is not configured, the form will open the user's email client as a fallback.

## Deployment

This project is deployed on GitHub Pages.
