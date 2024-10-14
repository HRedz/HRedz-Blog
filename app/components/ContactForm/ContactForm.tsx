"use client";

import { useState } from "react";

interface ContactFormProps {
  siteKey: string;
}

interface ReCaptchaV3 {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

declare global {
  interface Window {
    grecaptcha: ReCaptchaV3;
  }
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Wait for grecaptcha to be ready
      await new Promise<void>((resolve) => {
        window.grecaptcha.ready(resolve);
      });

      // Obtain the reCAPTCHA token
      const token = await window.grecaptcha.execute(siteKey, {
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
        alert(
          "Your message has been sent! I'll get back to you as soon as I can :)",
        );
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
      <button type="submit" className="btn btn-primary mt-6" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
