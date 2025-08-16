# Custom Form Builder (MERN Stack + Tailwind CSS)

A full‑stack **Custom Form Builder** built with the **MERN** stack and **Tailwind CSS**. Create, preview, and fill interactive forms featuring:

* **Categorized questions** (drag & drop)
* **Cloze questions** (fill‑in‑the‑blank)
* **Comprehension questions** (MCQs under a passage)

All forms and responses are persisted in **MongoDB**.

---

## Features

* **Form Builder UI** – Add questions dynamically, configure options, and save forms
* **Renderer / Form Filling** – Student‑style interactive inputs
* **Categorized Drag‑and‑Drop** – Sort answers into category buckets
* **Cloze Inputs** – Type answers in underlined blanks
* **Comprehension MCQs** – Multiple‑choice under a paragraph
* **Images Support** – Header images and per‑question images
* **Responsive** – Tailwind CSS for mobile & desktop

---

## Tech Stack

**Frontend:** React, Tailwind CSS, React Router, React DnD, Axios
**Backend:** Node.js, Express.js
**Database:** MongoDB (+ Mongoose)
**Deploy:** Vercel/Netlify (frontend), Render/Railway (backend)

---

## Project Structure

```
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
```

---

## Getting Started

### Prerequisites

* Node.js 18+
* MongoDB (local or Atlas)

### Environment Variables

Create a **backend** `.env` file:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/formbuilder
CLIENT_ORIGIN=http://localhost:3000
```

(Optional) In **frontend**, if you use an Axios base URL env:

```
REACT_APP_API_BASE_URL=http://localhost:5000
```

### Installation & Run

**Backend**

```bash
cd backend
npm install
npm start
```

Starts on: `http://localhost:5000`

**Frontend**

```bash
cd frontend
npm install
npm start
```

Starts on: `http://localhost:3000`

---

## Usage

1. Open the **Form Builder** (frontend)
2. Add questions of type **Categorized**, **Cloze**, or **Comprehension (MCQ)**
3. Save the form → stored in MongoDB
4. Open the **Renderer** to preview/fill
5. Submit responses → stored in MongoDB

---

## Question Types (Overview)

* **Categorized:** Define categories and draggable answer chips; users drag chips into categories
* **Cloze:** Insert blanks inside text; users type answers into inputs
* **Comprehension:** Provide a paragraph and attach MCQs (one or multiple correct as you configure)

---

## API (typical routes)

> Adjust if your route names differ.

**Forms**

* `POST /api/forms` – create a form
* `GET /api/forms/:id` – get a form
* `PUT /api/forms/:id` – update a form
* `DELETE /api/forms/:id` – delete a form

**Responses**

* `POST /api/responses` – submit a response
* `GET /api/responses/form/:formId` – list responses for a form

---

## Roadmap

* Authentication (creator & respondent roles)
* Form dashboard & sharing links
* Response analytics (charts, export CSV/Excel)
* Question banks & templates

---

## Notes

* Started as a small demo; evolved to include drag‑and‑drop and cloze
* Core features are functional; improvements in progress
* Demonstrates MERN + Tailwind + interactive form handling

---

## License

MIT
