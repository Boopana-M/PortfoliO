import React from 'react';
import { Mail, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons';
import { portfolio } from '../data/portfolio';

export const ContactPage: React.FC = () => {
  const { contact } = portfolio;

  return (
    <div className="page-content-wrapper contact-manuscript-page">
      <h2 className="page-title">{contact.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="contact-manuscript-container">
        <div className="contact-missive-card">
          <div className="contact-seal-icon">
            <MessageSquare size={24} />
          </div>

          <h3 className="contact-invite-heading">“{contact.invitation}”</h3>
          
          <p className="contact-missive-body">
            {contact.message}
          </p>

          <div className="contact-direct-actions">
            <a
              href={`mailto:${contact.email}`}
              className="contact-primary-email-btn"
              aria-label="Send email to Boopana"
            >
              <Mail size={16} />
              <span>{contact.email}</span>
              <Send size={14} className="send-arrow-sigil" />
            </a>

            <div className="contact-social-row">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-pill"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-pill"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
