import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from 'prismjs'
import axios from 'axios'
import Markdown from "react-markdown"
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState('')
  
  const [review, setReview] = useState('')
  const [isLoading, setIsLoading] = useState(false)
    
  useEffect(() => {
    prism.highlightAll()
  })

  async function reviewCode() {
    setIsLoading(true)
    try {
      //sends request to backend to review code
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
      // sets the response from the backend
    } catch (error) {
      console.error('Error reviewing code:', error)
    } finally {
      setIsLoading(false)
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
      </header>
      <main>
        <div className="left">
          <div className="code-header">
            <h3 className="code-title">
              <span className="code-icon">📝</span>
              Your Code
            </h3>
            <span className="code-subtitle">JavaScript</span>
          </div>
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => code ? prism.highlight(code, prism.languages.javascript, "javascript") : code}
              padding={20}
              placeholder="// Enter your code here...
// Example:
function greetUser(name) {
    return 'Hello, ' + name + '!';
}

const result = greetUser('World');
console.log(result);"
              style={{
                fontFamily: '"Fira Code", "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
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
- 🐛 **Bug Detection** - Find potential issues
- 💡 **Optimization Tips** - Improve performance  
- 📚 **Best Practices** - Follow coding standards
- 🔧 **Refactoring Suggestions** - Clean up your code

*Your review will appear here once you submit your code...*`}
            </Markdown>
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <p className="footer-text">
          Created with <span className="heart">❤️</span> by Sanskriti
        </p>
      </footer>
    </>
  )
}

export default App