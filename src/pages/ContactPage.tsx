import React from 'react';
import { Mail, Send, MessageSquare, FileText, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from '../components/common/BrandIcons';
import { portfolio } from '../data/portfolio';

export const ContactPage: React.FC = () => {
  const { contact, resume } = portfolio;
  const resumeDriveUrl = resume.driveUrl || resume.downloadUrl || 'https://drive.google.com/drive/folders/1Q4wDEq9CTdUUuqDcsqf5AI5xxMyidS89?usp=drive_link';

  const handleOpenUrl = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleOpenMail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="page-content-wrapper contact-manuscript-page">
      <h2 className="page-title">{contact.title}</h2>
      <div className="page-subtitle-hint">Get In Touch &amp; Curriculum Vitae</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="contact-manuscript-container">
        {/* Separate Top Card: "Let's build something together" */}
        <div className="contact-invite-card">
          <div className="contact-seal-icon">
            <MessageSquare size={20} />
          </div>

          <h3 className="contact-invite-heading">“Let's build something together.”</h3>
          
          <p className="contact-missive-body">
            I'm always open to interesting projects, software engineering opportunities, collaborations, and conversations around technology.
          </p>
        </div>

        {/* Below Card: Action Links in exact order (1. Mail, 2. LinkedIn, 3. Resume Link) */}
        <div className="contact-links-stack">
          {/* 1. Mail */}
          <a
            href={`mailto:${contact.email}`}
            className="contact-action-card contact-mail-card"
            aria-label="Send email to Boopana"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenMail(contact.email);
            }}
          >
            <div className="contact-card-left">
              <div className="contact-card-icon-box mail-icon-box">
                <Mail size={16} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Direct Mail</span>
                <span className="contact-card-value">{contact.email}</span>
              </div>
            </div>
            <Send size={14} className="contact-card-arrow" />
          </a>

          {/* 2. LinkedIn */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-card contact-linkedin-card"
            aria-label="Visit Boopana LinkedIn Profile"
            title="Open LinkedIn Profile"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenUrl(contact.linkedin);
            }}
          >
            <div className="contact-card-left">
              <div className="contact-card-icon-box linkedin-icon-box">
                <LinkedinIcon size={16} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Professional Network</span>
                <span className="contact-card-value">LinkedIn Profile</span>
              </div>
            </div>
            <ArrowUpRight size={15} className="contact-card-arrow" />
          </a>

          {/* 3. Resume Link */}
          <a
            href={resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-card contact-resume-card"
            aria-label="Access Resume on Google Drive"
            title="Open Resume Document"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenUrl(resumeDriveUrl);
            }}
          >
            <div className="contact-card-left">
              <div className="contact-card-icon-box resume-icon-box">
                <FileText size={16} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Curriculum Vitae</span>
                <span className="contact-card-value">View Resume (Google Drive)</span>
              </div>
            </div>
            <ArrowUpRight size={15} className="contact-card-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
