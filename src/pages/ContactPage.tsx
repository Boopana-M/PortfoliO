import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';

export const ContactPage: React.FC = () => {
  const { contact } = portfolio;
  const [formSent, setFormSent] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendOwl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setSenderName('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="page-content-wrapper">
      <div className="page-header-number">— {contact.chapterNumber} —</div>
      <h2 className="page-title">{contact.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <p className="page-subtitle">{contact.subtitle}</p>

      {formSent ? (
        <div className="owl-sent-message">
          <div className="owl-icon">🦉 ✨</div>
          <h4>The owl has taken flight!</h4>
          <p>Your dispatch has been committed to the magical ether.</p>
        </div>
      ) : (
        <form className="manuscript-form" onSubmit={handleSendOwl}>
          <div className="form-group">
            <label className="form-label" htmlFor="contact-sender">Your Name / Title</label>
            <input 
              id="contact-sender"
              type="text" 
              className="manuscript-input" 
              placeholder="e.g. Archmage Alex"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="contact-msg">Message Scroll</label>
            <textarea 
              id="contact-msg"
              rows={3} 
              className="manuscript-textarea" 
              placeholder="Your dispatch or invitation..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="antique-action-button submit-dispatch-btn">
            🦉 Dispatch Owl
          </button>
        </form>
      )}

      <div className="social-runes-footer">
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="rune-link" aria-label="GitHub Profile">
          GitHub
        </a>
        <span className="rune-dot">•</span>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="rune-link" aria-label="LinkedIn Profile">
          LinkedIn
        </a>
        <span className="rune-dot">•</span>
        <a href={`mailto:${contact.email}`} className="rune-link" aria-label="Email Dispatch">
          {contact.email}
        </a>
      </div>
    </div>
  );
};
