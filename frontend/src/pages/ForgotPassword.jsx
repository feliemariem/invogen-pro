import { Link } from 'react-router-dom';
import '../styles/tokens.css';

export default function ForgotPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h1 className="forgot-heading">Reset Your Password</h1>

        <p className="forgot-message">
          To reset your password, update the password hash directly in{' '}
          <code>backend/data/users.json</code> using bcrypt, or contact your system administrator.
        </p>

        <div className="code-block">
          <code>
            node -e "const b=require('bcryptjs'); b.hash('newpassword',12).then(console.log)"
          </code>
        </div>

        <Link to="/" className="back-link">
          ← Back to login
        </Link>
      </div>

      <style>{`
        .forgot-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--white);
          font-family: var(--font-body);
          padding: 24px;
          animation: fadeUp 0.6s ease-out;
        }

        .forgot-card {
          width: 100%;
          max-width: 480px;
          text-align: center;
        }

        .forgot-heading {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 400;
          color: var(--gray-900);
          margin: 0 0 24px;
        }

        .forgot-message {
          color: var(--gray-700);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .forgot-message code {
          background: var(--gray-100);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 13px;
          color: var(--slate-800);
        }

        .code-block {
          background: var(--slate-900);
          color: var(--gray-100);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          text-align: left;
          overflow-x: auto;
          margin-bottom: 32px;
        }

        .code-block code {
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
          font-size: 13px;
          line-height: 1.5;
          white-space: nowrap;
        }

        .back-link {
          color: var(--slate-700);
          font-size: 15px;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .back-link:hover {
          color: var(--slate-900);
          text-decoration: underline;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
