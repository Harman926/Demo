###Custom Form Builder (MERN Stack + Tailwind CSS)
###Project Overview

This project is a Custom Form Builder built with the MERN stack and Tailwind CSS.
It allows users to create forms with three unique types of questions:

Categorized Questions – Drag-and-drop interface to sort answers into categories.

Cloze Questions – Fill-in-the-blank type questions with underlined words.

Comprehension Questions – Paragraph-based questions with MCQs.

Users can create forms, preview them, fill them, and submit responses. All data is stored in MongoDB.

###Features

Form Builder UI – Add questions dynamically, set options, and save forms.

Renderer / Form Filling – Fill forms as a student with interactive inputs.

Categorized Drag-and-Drop – Fully functional for categorized questions.

Cloze Inputs – Users can type answers in blanks.

MCQ for Comprehension – Multiple-choice questions under paragraph content.

Images Support – Add header images for forms and images for questions.

Responsive Design – Built with Tailwind CSS for mobile and desktop.

###Technologies Used

Frontend: React, Tailwind CSS, React Router, React DnD, Axios

Backend: Node.js, Express.js

Database: MongoDB (with Mongoose schemas)

Hosting: Can be deployed on Vercel, Netlify, or Render

###Installation & Setup
Backend
cd backend
npm install
npm start

###Frontend
cd frontend
npm install
npm start


Backend runs on http://localhost:5000
Frontend runs on http://localhost:3000

###Project Structure
backend/
  ├─ models/
  │   ├─ Form.js
  │   └─ Response.js
  ├─ routes/
  │   ├─ forms.js
  │   └─ responses.js
  ├─ index.js
frontend/
  ├─ src/
  │   ├─ components/
  │   │   ├─ Builder.js
  │   │   └─ Renderer.js
  │   ├─ App.js
  │   └─ index.js
  ├─ tailwind.config.js
  └─ postcss.config.js

Usage

Open the Form Builder (frontend).

Add a new form with questions of type:

Categorized

Cloze

Comprehension (MCQ)

Save the form – it is stored in MongoDB.

Open the Form Renderer link to fill the form as a user.

Submit responses – they are stored in MongoDB.

##Notes

This project started as a small demo and evolved to include drag-and-drop and cloze functionality.

The project is not fully complete, but all core features are functional.

Designed to demonstrate MERN stack, Tailwind CSS, and interactive form handling.
