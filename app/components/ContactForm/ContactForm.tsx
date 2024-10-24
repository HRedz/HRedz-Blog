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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Make sure reCAPTCHA is loaded
  useEffect(() => {
    const checkGrecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          setGrecaptchaReady(true);
          console.log("grecaptcha is ready");
        });
      } else {
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

    // ensure reCAPTCHA is loaded
    if (!grecaptchaReady) {
      setErrorMessage(
        "reCAPTCHA is not ready yet. Please wait a moment and try again.",
      );
      return;
    }

    setLoading(true);
    setErrorMessage("");

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

      // Check response and handle errors
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const result = await response.json();
        setErrorMessage(
          result.error ||
            "There was an error sending your message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        "There was an error sending your message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 w-full max-w-lg">
      {isSubmitted && (
        <div>
          <span>
            Thank you for reaching out! I&apos;ll get back to you as soon as
            possible :)
          </span>
        </div>
      )}

      {errorMessage && (
        <div className="alert alert-error mt-4">
          <span>{errorMessage}</span>
        </div>
      )}

      {!isSubmitted ? (
        <>
          <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-semibold">Your Name</label>
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
              <label className="label font-semibold">Your Email</label>
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
        </>
      ) : null}
    </div>
  );
};

export default ContactForm;
