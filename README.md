# 🚀 INNOVERSE Hackathon Website

A modern and responsive hackathon registration website built for **INNOVERSE Technical Club, SMCET**.

The website allows participants to learn about the hackathon, view the live problem-statement announcement section, complete a technical quiz, and register their teams online.

## 🌐 Live Demo

**Live Website:** https://innoverse-hackathon.vercel.app/

**GitHub Repository:** https://github.com/amrit150-a11y/innoverse-hackathon-website

---

## ✨ Features

* 🏠 Modern hackathon landing page
* 📢 Live problem statement reveal section
* 📝 Online team registration
* 👥 Team registration for up to 3 members
* 🧠 Technical quiz for authorized participants
* ⏱️ Timed quiz with automatic question progression
* 🔐 Email and access-code based quiz entry
* 📊 Registration data stored in Google Sheets
* 📊 Quiz results stored in Google Sheets
* 📱 Fully responsive design
* 🎨 Dark, modern technical-club themed UI
* 🔗 LinkedIn profile collection for participants

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* Bootstrap
* Bootstrap Icons
* CSS

### Backend / Data

* Google Apps Script
* Google Sheets

### Deployment

* Vercel

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```text
innoverse-hackathon/
│
├── public/
│   ├── innoverse-logo.jpg
│   └── smcet-logo.svg
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProblemStatements.jsx
│   │   ├── Registration.jsx
│   │   └── TechQuiz.jsx
│   │
│   ├── data/
│   │   └── quizQuestions.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/amrit150-a11y/innoverse-hackathon-website.git
```

### 2. Open the project

```bash
cd innoverse-hackathon-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env` file in the project root:

```env
VITE_GOOGLE_SCRIPT_URL=your_google_apps_script_url
```

> Never commit the `.env` file to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The application will run locally using the Vite development server.

---

## 📊 Google Sheets Integration

The website uses **Google Apps Script** to send registration and quiz data to Google Sheets.

The frontend communicates with the deployed Apps Script endpoint, while the spreadsheet acts as the data storage layer.

This allows the organizing team to manage registrations and quiz results without requiring a traditional database for this project.

---

## 🧠 Technical Quiz

The website includes a technical quiz designed for authorized participants.

### Quiz Flow

```text
Enter Email
     ↓
Verify Authorized Email
     ↓
Enter Access Code
     ↓
Start Quiz
     ↓
Timed Questions
     ↓
Submit Quiz
     ↓
Display Result
     ↓
Save Result to Google Sheets
```

---

## 📝 Registration Flow

```text
Team Details
     ↓
Member Details
     ↓
Technology / Domain
     ↓
Project Idea
     ↓
LinkedIn Profile
     ↓
Submit Registration
     ↓
Google Sheets
```

---

## 🔐 Environment Variables

The project uses Vite environment variables for configuration.

| Variable                 | Purpose                     |
| ------------------------ | --------------------------- |
| `VITE_GOOGLE_SCRIPT_URL` | Google Apps Script endpoint |

The `.env` file is intentionally excluded from Git using `.gitignore`.

---

## 🚀 Deployment

The application is deployed using **Vercel**.

Production build:

```bash
npm run build
```

The generated production files are created inside the `dist` directory.

---

## 🎯 Project Purpose

This project was created to provide a simple and efficient digital platform for managing an engineering college hackathon.

Instead of handling registrations and quiz results manually, the website provides a centralized online workflow for participants and organizers.

---

## 🔮 Future Improvements

Possible future features include:

* 👨‍💼 Admin dashboard
* 📊 Registration analytics
* 🏆 Live leaderboard
* 📄 Participant certificate generation
* 📧 Automated email notifications
* 📁 Project submission system
* 🔑 Secure backend authentication
* 🗄️ Database integration
* 📱 PWA / mobile support

---

## 👨‍💻 Developer

**Amrit Singh**

B.Tech CSE Student
Technical Club Head

### Links

* 🌐 Live Website: https://innoverse-hackathon.vercel.app/
* 💻 GitHub: https://github.com/amrit150-a11y/innoverse-hackathon-website

---

## ⭐ If you like this project

Feel free to explore the repository and use the project as inspiration for your own college hackathon or event-management website.
