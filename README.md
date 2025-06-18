## 💎 SmartGemRevBot 

SmartGemRevBot is a full-stack AI-powered code review assistant that helps developers improve their codes with the feedback style of a senior software engineer. Just paste your code and receive actionable suggestions using the power of Google's Gemini API.



## 🎯 Purpose

Switching to ChatGPT, Gemini, or other tools every time you want feedback slows you down. **SmartGemRevBot** is built to bring that power into one clean interface—no context switching, no distractions, just focused AI feedback.



## ✨ Features

- 🧠 AI-based intelligent code review (via Google Gemini API)
- 🔐 Full user authentication system (Sign up, Login, Logout)
- 🎨 Real-time editable code editor with syntax highlighting
- 📄 Clean markdown-rendered suggestions with proper formatting
- 🔗 Frontend-backend integrated using Axios and Express
- 🔒 API Key, JWT Secret & Mongo URI securely managed via `.env`
- ✅ Modular and scalable backend architecture
- 🔒 JWT-protected API routes


## 👤 User Authentication System

A complete user authentication system has been implemented, featuring:

- **Sign Up:** Secure registration with bcrypt-hashed passwords.
- **Login:** Validates credentials and returns a JWT token.
- **Protected Routes:** Backend routes like `/ai/get-review` are protected using middleware that checks JWT validity.
- **Logout:** Frontend simply clears token from localStorage to log out.

**Technology Used:**
- `bcrypt` for password hashing
- `jsonwebtoken` for token generation and verification
- `MongoDB + Mongoose` for user data storage
- `React Context API` for auth state management in the frontend

**Frontend Integration:**
- Sign-up and login forms with validation
- JWT stored in browser for authenticated sessions
- Conditional rendering of protected UI (like editor) based on login status
- Logout button to destroy session



  
## 📁 Project Structure

```bash
CODE-REVIEW/
│
├── BackEnd/
│   ├── .env                      # Environment variables (excluded via .gitignore)
│   ├── package.json              # Backend dependencies and scripts
│   ├── server.js                 # Starts the Express server
│   └── src/
│       ├── app.js                # Express app setup and middleware
│       ├── controllers/
│       │   ├── ai.controller.js  # Handles AI prompt logic
│       │   └── auth.controller.js# Handles user registration & login logic
│       ├── middleware/
│       │   └── auth.middleware.js# JWT verification middleware
│       ├── models/
│       │   └── user.model.js     # Mongoose schema for users
│       ├── routes/
│       │   ├── ai.routes.js      # AI route definitions
│       │   └── auth.routes.js    # Auth route definitions
│       └── services/
│           └── ai.service.js     # Gemini API integration logic
│
├── Frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/               # Static assets (e.g., screenshot)
│   │   ├── App.jsx               # Main React component
│   │   ├── App.css               # Component-level styles
│   │   ├── index.css             # Global styles
│   │   └── main.jsx              # ReactDOM entry point
│   ├── .gitignore                # Ignores .env, node_modules, etc.
│   ├── index.html                # Vite root HTML template
│   ├── eslint.config.js         # Linting rules
│   ├── vite.config.js           # Vite config for frontend build
│   ├── package.json              # Frontend dependencies and scripts
│   ├── package-lock.json
│   └── README.md                 # (Optional) Frontend-specific readme

```



## 🛠️ Tech Stack
**🔹 Frontend**
- React.js (via Vite)
- Prism.js + react-simple-code-editor for code editing with syntax highlighting
- Axios 
- React Markdown + Rehype Highlight for clean AI response rendering
- Context API for auth state


**🔸 Backend**
- Node.js + Express
- MongoDB + Mongoose
- Google Gemini API (`@google/gemini`)
- Bcrypt, JWT, CORS, dotenv


## UI Screenshot
![image](https://github.com/user-attachments/assets/72594424-9be7-41fa-b45a-7df88acbf291)

![image](https://github.com/user-attachments/assets/4b694976-b604-4783-99d4-8b5d39ad36fd)


## 🧠 Future Enhancements

- 💾 Save review history for each user
- 📊 Personalized feedback analytics


## 🙋‍♀️ Author

**Sanskriti Jaiswal** 💻  
*Passionate about building impactful, intelligent full-stack apps.*


