## 💎 SmartGemRevBot 

SmartGemRevBot is a full-stack AI-powered code review assistant that helps developers improve their JavaScript code with the feedback style of a senior software engineer. Just paste your code and receive actionable suggestions using the power of Google's Gemini API.

---

## 🎯 Purpose

Switching to ChatGPT, Gemini, or other tools every time you want feedback slows you down. **SmartGemRevBot** is built to bring that power into one clean interface—no context switching, no distractions, just focused AI feedback.

---

## ✨ Features

- 🧠 AI-based intelligent code review (via Google Gemini API)
- 🎨 Real-time editable code editor with syntax highlighting
- 📄 Markdown-rendered suggestions with proper formatting
- 🔗 Frontend-backend integrated using Axios and Express
- 🔐 API Key hidden using `.env`
- ✅ Modular backend architecture for scalability

---
## 📁 Project Structure

```bash
CODE-REVIEW/
│
├── BackEnd/
│   ├── server.js                   # Entry point – starts Express server
│   ├── .env                        # Stores your API key securely
│   ├── package.json
│   └── src/
│       ├── app.js                 # Express instance setup
│       ├── controllers/
│       │   └── ai.controller.js   # Logic to handle AI prompt routes
│       ├── routes/
│       │   └── ai.routes.js       # Route definitions
│       └── services/
│           └── ai.service.js     # Gemini AI API logic
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # ReactDOM render
│   │   ├── index.css              # CSS styling
│   │   └── assets/
│   │       └── screenshot.png     # Screenshot of the app
│   ├── package.json
│
└── README.md
```

## 🛠️ Tech Stack
🔹 Frontend

React.js (via Vite)

Prism.js + react-simple-code-editor for code editing with syntax highlighting

Axios for making API requests

React Markdown + Rehype Highlight for clean AI response rendering

🔸 Backend

Node.js

Express.js

Google Gemini AI via @google/gemini

CORS & dotenv

---
## UI Screenshot
![image](https://github.com/user-attachments/assets/6202fe79-d410-4f9a-96eb-9e7054649811)


## 🧠 Future Enhancements

💾 Save review history

🧑‍💻 User authentication and dashboard

---
## 🙋‍♀️ Author- 
Sanskriti Jaiswal


