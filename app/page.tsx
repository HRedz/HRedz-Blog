// app/page.tsx
import Image from "next/image";
import logo from "../public/blog_logo.webp";

export const metadata = {
  title: "Home - Haris' Blog",
  description:
    "Welcome to my blog where I share what I'm working on and showcase my projects.",
};

const HomePage = () => {
  return (
    <>
      {/* Logo Section */}
      <main className="min-h-screen">
        <section className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse justify-top">
            <Image
              src={logo}
              alt="Hero Image"
              width={500}
              height={500}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">
                Welcome to Haris&apos; Blog!
              </h1>
              <p className="py-6">
                This space highlights my current work and showcases my projects.
                You can also learn more about my areas of expertise and
                background. Feel free to reach out to me directly for any
                inquiries or collaboration opportunities.
              </p>
              <a href="/blog" className="btn btn-primary">
                Read the Blog
              </a>
            </div>
          </div>
        </section>
        {/* Featured Posts Section */}
        {/* Add code to fetch 3 most recent posts and showcase here */}
      </main>
    </>
  );
};

export default HomePage;
