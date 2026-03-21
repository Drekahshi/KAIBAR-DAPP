import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(email) {
      setSubmitted(true)
      // Normally you would send this to your backend API here
      setTimeout(() => {
        setEmail('')
        setSubmitted(false)
      }, 5000)
    }
  }

  return (
    <div className="container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#fff',
      padding: '20px'
    }}>
      <div className="glass-card" style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 215, 0, 0.15)',
        borderRadius: '24px',
        padding: '40px',
        width: '100%',
        maxWidth: '480px',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #FFD700, #F97316)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '32px', margin: '0 auto 24px',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
        }}>
          💎
        </div>

        <h1 style={{ 
          margin: '0 0 12px 0', fontSize: '32px', fontWeight: '800',
          background: 'linear-gradient(to right, #fff, #a5b4fc)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          KAIBAR is coming
        </h1>
        
        <p style={{ 
          margin: '0 0 32px 0', fontSize: '15px', color: 'rgba(255,255,255,0.7)',
          lineHeight: '1.6'
        }}>
          We are currently fine-tuning our next-generation Agentic Web3 platform. Join the waitlist to be first in line for our exclusive launch.
        </p>

        {submitted ? (
          <div style={{
            background: 'rgba(34, 197, 94, 0.15)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '16px', padding: '20px',
            animation: 'fadeIn 0.5s ease-out'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>✨</div>
            <h3 style={{ margin: '0 0 4px 0', color: '#4ade80', fontSize: '18px' }}>You're on the list!</h3>
            <p style={{ margin: '0', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              Keep an eye on {email} for updates.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input 
              type="email" 
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%', boxSizing: 'border-box',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#fff', fontSize: '16px',
                padding: '16px 20px', borderRadius: '12px',
                outline: 'none', transition: 'all 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(249, 115, 22, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
            <button 
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #F97316, #EA580C)',
                color: '#fff', fontSize: '16px', fontWeight: '700',
                padding: '16px 20px', borderRadius: '12px',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(249, 115, 22, 0.4)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default App
