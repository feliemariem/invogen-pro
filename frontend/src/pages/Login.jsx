import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/tokens.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="login-container">
      {/* Left Panel - Dark branding */}
      <div className="left-panel">
        <div className="left-content">
          <p className="eyebrow">FNR Core</p>
          <h1 className="brand-name">
            InvoGen<span className="brand-pro">Pro</span>
          </h1>
          <p className="tagline">AI-powered work order management & invoicing</p>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <strong>Automated Job Costing</strong>
                <p>Upload timesheets and materials — InvoGenPro pre-fills your full job cost automatically.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">✦</div>
              <div className="feature-text">
                <strong>AI Invoice Descriptions</strong>
                <p>Generate professional invoice copy from raw technician notes in seconds.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">◎</div>
              <div className="feature-text">
                <strong>Profitability at a Glance</strong>
                <p>See ideal cost to invoice, actual billing, and profit margin per work order.</p>
              </div>
            </div>
          </div>

          <p className="copyright">© 2025–2026 FNR Core. All rights reserved.</p>
        </div>

        {/* Gradient glows */}
        <div className="glow glow-top"></div>
        <div className="glow glow-bottom"></div>
      </div>

      {/* Right Panel - Login form */}
      <div className="right-panel">
        <div className="form-container">
          <h2 className="welcome-heading">Welcome back</h2>
          <p className="welcome-subheading">Sign in to your InvoGenPro workspace</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <span className="input-icon">👤</span>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <span className="input-icon">🔑</span>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Link to="/forgot-password" className="forgot-link">
              Forgot password?
            </Link>

            <button type="submit" className="submit-btn">
              Sign in to InvoGenPro
            </button>
          </form>

          <div className="divider">
            <span>secured by FNR Core</span>
          </div>

          <div className="secure-badge">
            <span className="lock-icon">🔒</span>
            <span>Your session is encrypted and protected</span>
          </div>

          <div className="form-footer">
            <span className="version">InvoGenPro v1.0</span>
            <span className="ai-badge">
              <span className="pulse-dot"></span>
              AI Active
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .login-container {
          display: flex;
          min-height: 100vh;
          font-family: var(--font-body);
        }

        /* Left Panel */
        .left-panel {
          flex: 1;
          background: var(--slate-900);
          color: var(--white);
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          animation: fadeUp 0.8s ease-out;
        }

        .left-content {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 16px;
        }

        .brand-name {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 400;
          margin: 0 0 12px;
        }

        .brand-pro {
          font-style: italic;
          color: rgba(255, 255, 255, 0.6);
        }

        .tagline {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 48px;
        }

        .features {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .feature {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .feature-text strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .feature-text p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          line-height: 1.5;
        }

        .copyright {
          position: absolute;
          bottom: 60px;
          left: 60px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
        }

        /* Gradient glows */
        .glow {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
        }

        .glow-top {
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, #6366f1, transparent);
        }

        .glow-bottom {
          bottom: -100px;
          right: -100px;
          background: radial-gradient(circle, #8b5cf6, transparent);
        }

        /* Right Panel */
        .right-panel {
          flex: 1;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
          animation: fadeUp 0.8s ease-out 0.1s both;
        }

        .form-container {
          width: 100%;
          max-width: 400px;
        }

        .welcome-heading {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 400;
          color: var(--gray-900);
          margin: 0 0 8px;
        }

        .welcome-subheading {
          color: var(--gray-700);
          font-size: 15px;
          margin-bottom: 36px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          font-size: 16px;
        }

        .input-group input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          border: 1px solid var(--gray-300);
          border-radius: var(--radius-md);
          font-size: 15px;
          font-family: var(--font-body);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .input-group input:focus {
          outline: none;
          border-color: var(--slate-700);
          box-shadow: 0 0 0 3px rgba(51, 65, 85, 0.1);
        }

        .input-group input::placeholder {
          color: var(--gray-700);
          opacity: 0.6;
        }

        .forgot-link {
          text-align: right;
          color: var(--slate-700);
          font-size: 14px;
          text-decoration: none;
          margin-top: -4px;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .submit-btn {
          background: var(--slate-800);
          color: var(--white);
          padding: 16px 24px;
          border: none;
          border-radius: var(--radius-md);
          font-size: 15px;
          font-weight: 500;
          font-family: var(--font-body);
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s;
          margin-top: 8px;
        }

        .submit-btn:hover {
          background: var(--slate-900);
        }

        .submit-btn:active {
          transform: scale(0.98);
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 28px 0;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--gray-200);
        }

        .divider span {
          padding: 0 16px;
          color: var(--gray-700);
          font-size: 13px;
        }

        .secure-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: var(--gray-50);
          border-radius: var(--radius-sm);
          font-size: 13px;
          color: var(--gray-700);
        }

        .lock-icon {
          font-size: 14px;
        }

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid var(--gray-200);
        }

        .version {
          font-size: 13px;
          color: var(--gray-700);
        }

        .ai-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #16a34a;
          font-weight: 500;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #16a34a;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
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

        /* Responsive */
        @media (max-width: 900px) {
          .login-container {
            flex-direction: column;
          }

          .left-panel {
            padding: 40px;
            min-height: auto;
          }

          .copyright {
            position: static;
            margin-top: 40px;
          }

          .right-panel {
            padding: 40px;
          }
        }
      `}</style>
    </div>
  );
}
