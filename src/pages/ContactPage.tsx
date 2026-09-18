import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';

export const ContactPage: React.FC = () => {
  const { contact } = portfolio;
  const [formSent, setFormSent] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
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
          <div className="owl-icon">✉ ✓</div>
          <h4>Message Sent Successfully!</h4>
          <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form className="manuscript-form" onSubmit={handleSendMessage}>
          <div className="form-group">
            <label className="form-label" htmlFor="contact-sender">Your Name</label>
            <input 
              id="contact-sender"
              type="text" 
              className="manuscript-input" 
              placeholder="e.g. Alex Johnson"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="contact-msg">Message</label>
            <textarea 
              id="contact-msg"
              rows={3} 
              className="manuscript-textarea" 
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="antique-action-button submit-dispatch-btn">
            Send Message
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
