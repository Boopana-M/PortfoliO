import React from 'react';
import { Mail, Send, MessageSquare, FileText, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons';
import { portfolio } from '../data/portfolio';

export const ContactPage: React.FC = () => {
  const { contact, resume } = portfolio;
  const resumeDriveUrl = resume.driveUrl || resume.downloadUrl || '#';

  return (
    <div className="page-content-wrapper contact-manuscript-page">
      <h2 className="page-title">{contact.title}</h2>
      <div className="page-subtitle-hint">Get In Touch &amp; Curriculum Vitae</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="contact-manuscript-container">
        <div className="contact-missive-card">
          <div className="contact-seal-icon">
            <MessageSquare size={22} />
          </div>

          <h3 className="contact-invite-heading">“{contact.invitation}”</h3>
          
          <p className="contact-missive-body">
            {contact.message}
          </p>

          <div className="contact-direct-actions">
            {/* Primary Email Dispatch Button */}
            <a
              href={`mailto:${contact.email}`}
              className="contact-primary-email-btn"
              aria-label="Send email to Boopana"
              onClick={(e) => e.stopPropagation()}
            >
              <Mail size={16} />
              <span>{contact.email}</span>
              <Send size={13} className="send-arrow-sigil" />
            </a>

            {/* Resume Google Drive Link Button */}
            <a
              href={resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-resume-drive-btn"
              aria-label="Access Resume on Google Drive"
              title="Open Resume Document"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="resume-btn-left">
                <FileText size={15} className="resume-btn-icon" />
                <span>Curriculum Vitae (Resume)</span>
              </div>
              <ArrowUpRight size={13} className="resume-btn-arrow" />
            </a>

            {/* Professional & Social Channel Connectors */}
            <div className="contact-social-row">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-pill contact-linkedin-pill"
                aria-label="LinkedIn Profile"
                title="Connect on LinkedIn"
                onClick={(e) => e.stopPropagation()}
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={11} className="pill-arrow" />
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-pill contact-github-pill"
                aria-label="GitHub Profile"
                title="View GitHub Profile"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={11} className="pill-arrow" />
              </a>
            </div>
          </div>

          {/* Key Competency & Credential Badges */}
          <div className="contact-highlights-strip">
            <span className="contact-highlight-badge">
              <Sparkles size={11} />
              <span>Full-Stack &amp; AI</span>
            </span>
            <span className="contact-highlight-badge">
              <CheckCircle size={11} />
              <span>{portfolio.problemSolving.totalProblemsSolved} Solved</span>
            </span>
            <span className="contact-highlight-badge">
              <Sparkles size={11} />
              <span>Open Source</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
