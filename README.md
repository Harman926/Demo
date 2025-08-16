📝 Custom Form Builder (MERN + Tailwind CSS)

A Custom Form Builder built with the MERN stack and Tailwind CSS, allowing users to create and fill interactive forms with advanced question types.

This project supports drag-and-drop categorized questions, cloze (fill-in-the-blank) questions, and comprehension-based MCQs. Forms can be created, previewed, filled, and responses are stored in MongoDB.

🚀 Features

Form Builder UI – Add questions dynamically, configure options, and save forms.

Form Renderer – Fill forms as a student with interactive inputs.

Categorized Drag-and-Drop – Sort answers into categories with drag-and-drop.

Cloze Inputs – Type answers in underlined blanks.

Comprehension MCQs – Multiple-choice questions embedded under a passage.

Image Support – Add header images and images for questions.

Responsive Design – Optimized for both mobile and desktop using Tailwind CSS.

🛠️ Tech Stack

Frontend

React

Tailwind CSS

React Router

React DnD

Axios

Backend

Node.js

Express.js

Database

MongoDB (with Mongoose Schemas)

Deployment

Vercel / Netlify (Frontend)

Render / Railway (Backend)

📂 Project Structure
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

⚙️ Installation & Setup
Backend
cd backend
npm install
npm start


Backend runs on: http://localhost:5000

Frontend
cd frontend
npm install
npm start


Frontend runs on: http://localhost:3000

📖 Usage

Open the Form Builder (frontend).

Create a new form by adding questions of type:

Categorized (drag-and-drop)

Cloze (fill-in-the-blank)

Comprehension (MCQ)

Save the form – it will be stored in MongoDB.

Open the Form Renderer link to preview and fill the form.

Submit responses – they will be saved in MongoDB.

🗒️ Notes

Originally started as a small demo but grew into a full interactive form builder.

Core features are functional, though some enhancements are in progress.

Designed as a demo project to showcase MERN stack, Tailwind CSS, and interactive form handling.

📌 Roadmap (Future Enhancements)

User authentication (login/signup).

Dashboard for managing multiple forms.

Response analytics (charts & insights).

Export responses to CSV/Excel.
