import { Metadata } from "next";
import ContactFormContainer from "../components/ContactFormContainer/ContactFormContainer";

export const metadata: Metadata = {
  title: "Haris' Blog - Contact Me",
  description:
    "If you would like to reach out to me, please send me an email or message on LinkedIn.",
};

const Contact = () => {
  const siteKey: string = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
  return (
    <>
      <main className="justify-top flex flex-col items-center">
        <h1 className="mb-8 text-5xl font-bold">Get in Touch</h1>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://www.linkedin.com/in/hredz/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Connect on LinkedIn
          </a>
          <ContactFormContainer siteKey={siteKey} />
        </div>
      </main>
    </>
  );
};

export default Contact;
