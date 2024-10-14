"use client";

import { useState, useEffect } from "react";

interface ContactFormProps {
  siteKey: string;
}

declare global {
  interface Window {
    grecaptcha?: ReCaptchaV3;
  }
}

interface ReCaptchaV3 {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

const ContactForm: React.FC<ContactFormProps> = ({ siteKey }) => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [grecaptchaReady, setGrecaptchaReady] = useState(false);

  useEffect(() => {
    // Check if grecaptcha is available
    const checkGrecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          setGrecaptchaReady(true);
          console.log("grecaptcha is ready");
        });
      } else {
        // Try again after a delay
        setTimeout(checkGrecaptcha, 500);
      }
    };

    checkGrecaptcha();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!grecaptchaReady) {
      alert("reCAPTCHA is not ready yet. Please wait a moment and try again.");
      return;
    }

    setLoading(true);

    try {
      // Obtain the reCAPTCHA token
      const token = await window.grecaptcha!.execute(siteKey, {
        action: "submit",
      });

      // Prepare form data
      const data = {
        ...formData,
        "g-recaptcha-response": token,
      };

      // Send the form data to Formspree
      const response = await fetch("https://formspree.io/f/mpwzzpyy", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg">
      <div className="form-control">
        <label className="label font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-4">
        <label className="label font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-4">
        <label className="label font-semibold">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-6"
        disabled={loading || !grecaptchaReady}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
