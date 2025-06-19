## 💎 SmartGemRevBot 

SmartGemRevBot is a full-stack (MERN) AI-powered code review assistant that helps developers improve their codes to deliver context-rich, real-time feedback with style of a senior software engineer. It features a modular, scalable backend, secure JWT-based authentication (signup, sign-in, logout), protected routes, and a dynamic syntax-highlighted editor with markdown-rendered insights.


## 🎯 Purpose

Switching to ChatGPT, Gemini, or other tools every time you want feedback slows you down. **SmartGemRevBot** is built to bring that power into one clean interface—no context switching, no distractions, just focused AI feedback.
The purpose of SmartGemRevBot is to provide developers with a dedicated, real-time code review assistant that mimics the feedback of a senior software engineer. It aims to streamline the code review process by offering instant, context-aware suggestions across multiple programming languages, eliminating the need to manually interact with general-purpose AI tools. The platform also ensures secure access, personalized sessions, and a developer-friendly experience through an integrated editor and modular backend — making AI-driven code reviews more practical, scalable, and production-ready.


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

```bash
## 🧪 Postman Testing (Backend)

| Endpoint               | Method | Description          |
|------------------------|--------|----------------------|
| `/api/auth/register`   | POST   | Register new users   |
| `/api/auth/login`      | POST   | Login and get JWT    |
| `/ai/get-review`       | POST   | Protected route for AI review |
```
Pass the **JWT token** in headers as:  
Authorization: Bearer <your_token>

```bash
## ⚙️ Local Environment Setup
Create a `.env` file in both backend and (if needed) frontend folders:

### 📁 `.env` for Backend
MONGO_URI=mongodb://localhost:27017/smartgenrevbot
JWT_SECRET=your_super_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
> ⚠️ This file is **excluded from GitHub** via `.gitignore`. Do not commit secrets.
```
  
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

| Technology / Library                      | Purpose                                                               |
|-------------------------------------------|----------------------------------------------------------------------------------|
| React.js (via Vite)                       | Builds a fast, modular, and optimized user interface.                           |
| Prism.js + react-simple-code-editor       | Enables a live code editor with syntax highlighting for multiple languages.     |
| Axios                                     | Handles HTTP requests from frontend to backend APIs.                            |
| React Markdown + Rehype Highlight         | Renders AI responses in clean, markdown format with syntax highlighting.        |
| Context API                               | Manages authentication state and shares it across components securely.          |



**🔸 Backend**

| Technology / Library                      | Purpose / Usage                                                                 |
|-------------------------------------------|----------------------------------------------------------------------------------|
| Node.js + Express.js                      | Builds the backend server, REST APIs, and handles core logic.                   |
| MongoDB + Mongoose                        | Stores user data and code; Mongoose provides a structured schema layer.         |
| Google Gemini API (@google/gemini)        | Provides AI-powered, context-aware code review suggestions.                     |
| Bcrypt                                    | Hashes user passwords securely before storing them in the database.             |
| JWT (JSON Web Tokens)                     | Handles secure, token-based authentication and protected route access.          |
| CORS (Cross-Origin Resource Sharing)      | Enables controlled communication between frontend and backend.                  |
| dotenv                                    | Loads environment variables securely from `.env` files.                         |



## UI Screenshot
![image](https://github.com/user-attachments/assets/72594424-9be7-41fa-b45a-7df88acbf291)

![image](https://github.com/user-attachments/assets/4b694976-b604-4783-99d4-8b5d39ad36fd)


## 🧠 Future Enhancements

- 💾 Save review history for each user
- 📊 Personalized feedback analytics


## 🙋‍♀️ Author

**Sanskriti Jaiswal** 💻  
*Passionate about building impactful, intelligent full-stack apps.*


