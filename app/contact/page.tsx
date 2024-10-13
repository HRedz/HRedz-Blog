import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haris' Blog - Contact Me",
  description:
    "If you would like to reach out to me, please send me an email or message on LinkedIn.",
};

const Contact = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-top">
        <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://www.linkedin.com/in/haris-redzic/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Connect on LinkedIn
          </a>
          <a href="mailto:hredzic01@gmail.com" className="btn btn-secondary">
            Send me an Email
          </a>
        </div>
      </main>
    </>
  );
};

export default Contact;
