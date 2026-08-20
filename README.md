# 🚀 AI-Powered Resume Builder

An intelligent web application built to help users craft professional, ATS-friendly resumes effortlessly using Generative AI.

## ✨ Features
* **AI Content Generation:** Generate professional summaries, work experiences, and skill sets tailored to specific job roles using Gemini API.
* **Real-time Preview:** See your resume update instantly as you fill in your details.
* **Customization:** Multiple templates, color schemes, and formatting options.
* **Secure Authentication:** Seamless user login and management powered by Clerk.
* **Export Options:** Download your finished resume cleanly.

## 🛠️ Tech Stack
* **Frontend:** React, Vite, Tailwind CSS
* **Backend/Database:** Convex / Context API
* **AI Integration:** Google Gemini API
* **Authentication:** Clerk

## 📂 Project Structure
```text
ai-resume-builder/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md

⚙️ Installation & Setup
1. Install dependencies:
   npm install

2. Set up Environment Variables:
Create a .env file in the root directory and add your API keys:
   VITE_STRAPI_API_KEY=your_gemini_api_key_here
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here

3. Run the development server:
   npm run dev

