import React, { useState } from 'react';
import { X, Sparkles, Save } from 'lucide-react';
import { portfolio, type PortfolioData } from '../../data/portfolio';

interface EditPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedData: Partial<PortfolioData>) => void;
}

export const EditPortfolioModal: React.FC<EditPortfolioModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState(portfolio.person.name);
  const [title, setTitle] = useState(portfolio.person.title);
  const [email, setEmail] = useState(portfolio.person.email);
  const [para1, setPara1] = useState(portfolio.about.paragraphs[0] || '');
  const [para2, setPara2] = useState(portfolio.about.paragraphs[1] || '');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      person: {
        ...portfolio.person,
        name,
        title,
        email,
      },
      about: {
        ...portfolio.about,
        paragraphs: [para1, para2, ...portfolio.about.paragraphs.slice(2)],
      },
    });
    onClose();
  };

  return (
    <div className="edit-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="edit-modal-title">
      <div className="edit-modal-scroll-parchment">
        <div className="edit-modal-header">
          <div className="edit-modal-title-box">
            <Sparkles size={18} className="edit-sparkle-icon" />
            <h3 id="edit-modal-title" className="edit-modal-title">Inscribe Portfolio Scrolls</h3>
          </div>
          <button
            type="button"
            className="edit-modal-close-btn"
            onClick={onClose}
            aria-label="Close Editor"
          >
            <X size={18} />
          </button>
        </div>

        <form className="edit-modal-form" onSubmit={handleSubmit}>
          <div className="edit-form-row">
            <div className="edit-form-group">
              <label htmlFor="edit-name">Magician / Author Name</label>
              <input
                id="edit-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="edit-form-group">
              <label htmlFor="edit-title">Professional Title</label>
              <input
                id="edit-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="edit-form-group">
            <label htmlFor="edit-email">Dispatch Owl Email</label>
            <input
              id="edit-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="edit-form-group">
            <label htmlFor="edit-para1">About Me — Paragraph 1</label>
            <textarea
              id="edit-para1"
              rows={2}
              value={para1}
              onChange={(e) => setPara1(e.target.value)}
              required
            />
          </div>

          <div className="edit-form-group">
            <label htmlFor="edit-para2">About Me — Paragraph 2</label>
            <textarea
              id="edit-para2"
              rows={2}
              value={para2}
              onChange={(e) => setPara2(e.target.value)}
              required
            />
          </div>

          <div className="edit-modal-actions">
            <button type="button" className="edit-btn-cancel" onClick={onClose}>
              Dismiss
            </button>
            <button type="submit" className="antique-action-button edit-btn-save">
              <Save size={15} />
              <span>Seal & Inscribe</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
