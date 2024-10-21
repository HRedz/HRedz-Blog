import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteKey: string = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
  return (
    <html data-theme="night" lang="en">
      <>
        <head>
          <meta
            name="google-site-verification"
            content="nx7lx6CLS6eM6TSsVk4pH02ZBwTlheYC1zeKE1q0dBE"
          />
          <link rel="icon" href="./favicon.ico" />
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
            async
            defer
          ></script>
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </>
    </html>
  );
}
