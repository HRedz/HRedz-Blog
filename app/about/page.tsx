import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haris Blog' - About Me",
  description:
    "A brief rundown of my professional skills and personal background.",
};

const ProfilePage = () => {
  return (
    <main className="flex flex-col items-center justify-top min-h-screen p-6">
      <div className="card w-full bg-base-200 shadow-xl shadow-base-300">
        <div className="card-body">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
            {/* Photo Section */}
            <div className="avatar">
              <div className="w-40 h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src="/1652900938783.jpg"
                  alt="Haris Redzic"
                  width={160}
                  height={160}
                />
              </div>
            </div>
            {/* Description Section */}
            <div className="flex-1 text-center lg:text-left mt-6 lg:mt-0">
              <h1 className="text-5xl font-bold">Haris Redzic</h1>
              <p className="mt-4 text-lg">
                Software developer who recently graduated from the University of
                Texas at Dallas&apos; Computer Science program, with a passion
                for full-stack development.
              </p>
            </div>
          </div>
          {/* Professional Skills */}
          <div className="mt-8">
            <h2 className="text-3xl font-semibold">Professional Skills</h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
              <li>Programming Languages: C++, Java, Python, TypeScript</li>
              <li>
                Frameworks/Libraries: React, Next.js, Node.js, TailwindCSS,
                JUnit
              </li>
              <li>
                Industry Skills: Amazon Web Services, Socket Programming, Data
                Structures and Algorithms
              </li>
              <li>Tools/OS: Windows, Linux, Git, Visual Studio Code, JUnit</li>
            </ul>
          </div>
          {/* Personal Hobbies */}
          <div className="mt-8">
            <h2 className="text-3xl font-semibold">Personal Hobbies</h2>
            <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
              <li>Love going to the gym and being active.</li>
              <li>
                Trying new restaurants or types of food is a necessity for me.
              </li>
              <li>
                Going out with friends—doesn&apos;t matter where, I just enjoy
                being out with others.
              </li>
              <li>Leetcode :(</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
