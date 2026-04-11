import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-contact-form', handler);
    return () => window.removeEventListener('open-contact-form', handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const close = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 350);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:nagamasakagami@gmail.com?subject=${subject}&body=${body}`;
    setForm({ name: '', email: '', message: '' });
    close();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`contact-portal fixed inset-0 z-[200] ${isClosing ? 'is-closing' : 'is-opening'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
    >
      <div
        className="contact-backdrop absolute inset-0 cursor-pointer"
        onClick={close}
        aria-hidden="true"
      />

      <div className="contact-panel absolute bottom-6 left-0 right-0 mx-auto md:left-auto md:right-8 md:bottom-8 md:mx-0 w-[calc(100%-3rem)] max-w-[420px] bg-[var(--background)] border border-[var(--border)] shadow-2xl">
        <form onSubmit={handleSubmit} className="p-6 md:p-7">
          <div className="flex items-center justify-between mb-6 md:mb-7">
            <h3
              id="contact-form-title"
              className="font-poppins text-xl md:text-2xl font-medium text-[var(--foreground)]"
            >
              Get in touch
            </h3>
            <button
              type="button"
              onClick={close}
              className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--surface)] hover:border-[var(--foreground)] transition-all duration-300 cursor-pointer"
              aria-label="Close contact form"
            >
              <X size={14} className="text-[var(--foreground)]" />
            </button>
          </div>

          <div className="space-y-5">
            <div className="contact-field" style={{ '--field-delay': '0.2s' }}>
              <label htmlFor="contact-name" className="sr-only">Name</label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-[var(--border)] py-2.5 font-poppins text-sm text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--foreground)] transition-colors duration-300"
              />
            </div>
            <div className="contact-field" style={{ '--field-delay': '0.27s' }}>
              <label htmlFor="contact-email" className="sr-only">Email address</label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-[var(--border)] py-2.5 font-poppins text-sm text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--foreground)] transition-colors duration-300"
              />
            </div>
            <div className="contact-field" style={{ '--field-delay': '0.34s' }}>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                required
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-[var(--border)] py-2.5 font-poppins text-sm text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--foreground)] resize-none transition-colors duration-300"
              />
            </div>
          </div>

          <div className="contact-field" style={{ '--field-delay': '0.42s' }}>
            <button
              type="submit"
              className="contact-submit mt-7 w-full bg-[var(--foreground)] text-[var(--background)] font-poppins text-sm font-medium py-3.5 hover:bg-[var(--text-secondary)] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
