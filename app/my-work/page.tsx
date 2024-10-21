import { Metadata } from "next";

interface RepoData {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  description: string;
  language: string;
}

export const metadata: Metadata = {
  title: "Haris' Blog - My Work",
  description:
    "Discover the diverse range of projects and repositories developed by Haris Redzic, showcasing his expertise in software development, problem-solving skills, and contributions to the tech community.",
};

const username = "HRedz";
const repositories = ["ePantry", "HRedz-Blog"];

async function fetchRepos(): Promise<RepoData[]> {
  const repoDataPromises = repositories.map(async (repoName) => {
    const res = await fetch(
      `https://api.github.com/repos/${username}/${repoName}`,
      {
        cache: "force-cache",
      },
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return {
      id: data.id,
      name: data.name,
      html_url: data.html_url,
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count,
      description: data.description,
      language: data.language,
    };
  });

  const repos = (await Promise.all(repoDataPromises)).filter(
    Boolean,
  ) as RepoData[];
  return repos;
}

const MyWork = async () => {
  const repos = await fetchRepos();

  return (
    <main className="justify-top flex min-h-screen flex-col items-center p-4">
      <h1 className="mb-8 text-5xl font-bold">My Work</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="card bg-base-200 shadow-xl shadow-base-300"
          >
            <div className="card-body">
              <h2 className="card-title">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {repo.name}
                </a>
              </h2>
              <p className="">{repo.description}</p>
              <div className="mt-4 flex flex-wrap items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <svg
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927C9.412 2.004 10.588 2.004 10.951 2.927l1.05 2.9a1 1 0 00.95.69h3.011c1.05 0 1.494 1.344.638 2.01l-2.444 1.828a1 1 0 00-.364 1.118l1.05 2.9c.363.923-.755 1.688-1.538 1.118l-2.444-1.828a1 1 0 00-1.176 0L7.32 15.491c-.783.57-1.901-.195-1.538-1.118l1.05-2.9a1 1 0 00-.364-1.118L4.024 8.527c-.856-.666-.412-2.01.638-2.01h3.011a1 1 0 00.95-.69l1.05-2.9z" />
                  </svg>
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 3a2 2 0 00-2 2v11.5a.5.5 0 00.757.429L8 14l4.243 2.929A.5.5 0 0013 16.5V5a2 2 0 00-2-2H5z" />
                    <path d="M13 5h3a2 2 0 012 2v9.5a.5.5 0 01-.757.429L13 14V5z" />
                  </svg>
                  <span>{repo.forks_count}</span>
                </div>
                {repo.language && (
                  <span className="badge badge-outline">{repo.language}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyWork;
