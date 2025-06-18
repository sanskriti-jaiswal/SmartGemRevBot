import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from 'prismjs';
import axios from 'axios';
import Markdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import './App.css';

// Optional: Load more PrismJS languages
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';

function App() {
  const [code, setCode] = useState('');
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('javascript');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const placeholders = {
    javascript: "// Write your JavaScript code here...",
    python: "# Write your Python code here...",
    java: "// Write your Java code here...",
    c: "// Write your C code here...",
    cpp: "// Write your C++ code here..."
  };

  useEffect(() => {
    prism.highlightAll();
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, [code, language]);

  async function reviewCode() {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3000/ai/get-review',
        { code, language },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReview(response.data);
    } catch (error) {
      console.error('Error reviewing code:', error);
      setReview('Please sign in to use this feature.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  }

  async function handleAuth() {
    setAuthError('');
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(`http://localhost:3000${endpoint}`, {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      setIsAuthModalOpen(false);
    } catch (error) {
      setAuthError(error.response?.data?.message || 'Authentication failed');
    }
  }

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">🔍</span>
            SmartGemRevBot
          </h1>
          <p className="app-subtitle">
            Paste your code and get instant AI-powered feedback and suggestions
          </p>
        </div>
        <div className="auth-buttons">
          <button
            onClick={isAuthenticated ? handleLogout : () => setIsAuthModalOpen(true)}
            className="auth-button"
          >
            {isAuthenticated ? 'Logout' : 'Sign In / Sign Up'}
          </button>
          {isAuthenticated && (
            <span className="auth-username">Hello, {username}</span>
          )}
        </div>
      </header>
      <main>
        <div className="left">
          <div className="code-header">
            <h3 className="code-title">
              <span className="code-icon">📝</span>
              Your Code
            </h3>
            <select
              className="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c">C</option>
              <option value="cpp">C++</option>
            </select>
          </div>
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code => prism.highlight(code, prism.languages[language] || prism.languages.javascript, language)}
              padding={20}
              placeholder={placeholders[language]}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 16,
                lineHeight: 1.6,
                border: "none",
                borderRadius: "12px",
                height: "100%",
                width: "100%",
                background: "transparent",
                color: "#e4e4e7",
                caretColor: "#3b82f6"
              }}
            />
          </div>
          <button
            onClick={reviewCode}
            disabled={isLoading}
            className={`review ${isLoading ? 'loading' : ''}`}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Reviewing...
              </>
            ) : (
              'Review Code'
            )}
          </button>
        </div>
        <div className="right">
          <div className="review-header">
            <h3 className="review-title">
              <span className="review-icon">🤖</span>
              AI Review
            </h3>
            <span className="review-subtitle">Analysis & Suggestions</span>
          </div>
          <div className="markdown-content">
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {review || `## 👋 Welcome to AI Code Reviewer!

**How to get started:**
1. **Write or paste your code** in the editor on the left
2. **Click the "Review Code" button** to get AI analysis
3. **Read the feedback** and improve your code

### What you'll get:
- 🐛 **Bug Detection**
- 💡 **Optimization Tips**
- 📚 **Best Practices**
- 🔧 **Refactoring Suggestions**

*Your review will appear here once you submit your code...*`}
            </Markdown>
          </div>
        </div>
        {isAuthModalOpen && (
          <div className="auth-modal">
            <div className="auth-modal-content">
              <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
              {authError && <p className="auth-error">{authError}</p>}
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleAuth}>
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="auth-toggle"
              >
                {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
              </button>
              <button
                onClick={() => setIsAuthModalOpen(false)}
                className="auth-close"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <footer className="app-footer">
        <p className="footer-text">
          Created with <span className="heart">❤️</span> by Sanskriti
        </p>
      </footer>
    </>
  );
}

export default App;
