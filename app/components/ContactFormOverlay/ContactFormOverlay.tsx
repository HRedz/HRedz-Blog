"use client";

import React from "react";
import ContactForm from "../ContactForm/ContactForm";

interface ContactFormOverlayProps {
  toggleOverlay: (status: boolean | null) => void;
  siteKey: string;
}

const ContactFormOverlay: React.FC<ContactFormOverlayProps> = ({
  toggleOverlay,
  siteKey,
}) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <button
          className="btn btn-circle btn-sm absolute right-2 top-2"
          onClick={() => toggleOverlay(null)}
        >
          ✕
        </button>
        <ContactForm siteKey={siteKey} />
      </div>
    </div>
  );
};

export default ContactFormOverlay;
