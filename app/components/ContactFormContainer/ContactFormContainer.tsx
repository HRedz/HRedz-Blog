"use client";

import React, { useState } from "react";
import ContactFormOverlay from "../ContactFormOverlay/ContactFormOverlay";

interface ContactFormContainerProps {
  siteKey: string;
}

const ContactFormContainer: React.FC<ContactFormContainerProps> = ({
  siteKey,
}) => {
  const [selectedForm, setSelectedForm] = useState<boolean | null>(null);

  const toggleOverlay = (status: boolean | null) => {
    setSelectedForm(status);
  };

  return (
    <>
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => toggleOverlay(true)}
        >
          Send me an Email
        </button>
      </div>
      {selectedForm && (
        <ContactFormOverlay toggleOverlay={toggleOverlay} siteKey={siteKey} />
      )}
    </>
  );
};

export default ContactFormContainer;
