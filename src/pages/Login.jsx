import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Demo Credentials Auto-fill Function
  const fillDemo = () => {
    setEmail('admin@gmail.com');
    setPassword('admin123');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Sign In અથવા Create Account (Sign Up) બંને કિસ્સામાં લોગિન કરી દેશે
    localStorage.setItem('isAuthenticated', 'true');
    
    // સીધા હોમ પેજ પર મોકલી દેશે
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '400px', borderRadius: '15px' }}>
        <h2 className="text-center fw-bold mb-1">
          {isSignUp ? 'Create Account' : 'Welcome Back!'}
        </h2>
        <p className="text-center text-muted mb-4">
          {isSignUp ? 'Sign up to StudentHub' : 'Sign in to StudentHub'}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {!isSignUp && (
          <div className="text-muted small mb-3">
            <p className="mb-1" style={{ cursor: 'pointer', color: '#702de5' }} onClick={fillDemo}>
              <strong>Click to Auto-fill Demo:</strong>
            </p>
            <p className="mb-0">Demo email: admin@gmail.com</p>
            <p className="mb-0">Demo password: admin123</p>
          </div>
        )}

        <div className="text-center pt-2 border-top">
          {isSignUp ? (
            <p className="mb-0">
              Already have an account?{' '}
              <span
                className="text-primary fw-bold"
                style={{ cursor: 'pointer' }}
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p className="mb-0">
              Don't have an account?{' '}
              <span
                className="text-primary fw-bold"
                style={{ cursor: 'pointer' }}
                onClick={() => setIsSignUp(true)}
              >
                Create Account
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;