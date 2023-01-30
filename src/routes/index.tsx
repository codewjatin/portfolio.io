import { createResource, For } from "solid-js";
import { useRouteData } from "solid-start";

type Featured = {
  name: string;
  logo: string;
  projectUrl: string;
  description: string;
};

export function routeData() {
  const [featured] = createResource(async () => {
    const response = await fetch(
      `http://${import.meta.env.VITE_BASE_URL}/api/featured`
    );
    return (await response.json()).data as Featured[];
  });

  return { featured };
}

export default function Home() {
  const { featured } = useRouteData<typeof routeData>();
  return (
    <div class="main-wrapper">
      <div class="container mx-auto">
        <h1 class="container">
          Software Developer learning and building applications and interfaces.
        </h1>
        <div class="home-intro text-large content mt-l">
          <p>
            My name is Jatin and I am a student pursuing a Bachelor's degree in
            Computer Science. My specialty is in creating mobile and web-based
            applications with a strong emphasis on simplicity and usability,
            with a focus on building interfaces for the same.
          </p>
          <p>
            I am currently gaining knowledge and experience in{" "}
            <a
              href="http://flutter.dev"
              target="_blank"
              rel="noopener noreferrer">
              Flutter
            </a>{" "}
            and{" "}
            <a
              href="https://developer.apple.com/xcode/swiftui/"
              target="_blank"
              rel="noopener noreferrer">
              Swift UI
            </a>{" "}
            by building applications and contributing to open-source projects.
            Additionally, I am proficient in frontend and backend web
            development, utilizing frameworks such as{" "}
            <a
              href="http://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              React
            </a>{" "}
            and{" "}
            <a
              href="http://nextjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Next.js
            </a>{" "}
            for the frontend and{" "}
            <a
              href="http://nodejs.org"
              target="_blank"
              rel="noopener noreferrer">
              Node.js
            </a>{" "}
            and{" "}
            <a
              href="https://palletsprojects.com/p/flask/"
              target="_blank"
              rel="noopener noreferrer">
              Flask
            </a>{" "}
            for the backend.
          </p>
          <p>
            I am passionate about open-source and enjoy exploring and learning
            from open-sourced repositories. I also contribute to them whenever I
            can. Additionally, I prefer to keep my own projects open-sourced.
          </p>
        </div>
        <div class="home-links-list mt-l">
          <ul class="home-links">
            <li>
              <a
                target="_blank"
                class="icon-link icon-link-twitter"
                href="https://twitter.com/p__jatin"
                title="Twitter">
                <i class="icon icon-twitter">Twitter</i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                class="icon-link icon-link-instagram"
                href="https://instagram.com/p__jatin"
                title="Instagram">
                <i class="icon icon-instagram">Instagram</i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                class="icon-link icon-link-github"
                href="https://github.com/codewjatin"
                title="Github">
                <i class="icon icon-github">GitHub</i>
              </a>
            </li>
          </ul>
          <button
            onclick={(e) => {
              e.currentTarget.innerText = "Copied!";
              setTimeout(() => {
                console.log(e.currentTarget.innerText);
              }, 100);
            }}
            class="btn">
            Email me
          </button>
        </div>
        <hr class="mt-xxl mb-xxl" />
        <div>
          <div class="heading-group">
            <h4>Featured projects</h4>
            <div class="sub-heading">
              A collection of some side projects that have shipped recently.
            </div>
          </div>
          <div class="home-featured-projects">
            <For each={featured()}>
              {(project) => {
                return (
                  <a
                    target="_blank"
                    class="tile-project mb-xs"
                    href={project.projectUrl}>
                    <div class="thumbnail">
                      <img src={project.logo} alt={project.name} />
                    </div>
                    <div class="detail">
                      <span class="title">{project.name}</span>
                      <p>{project.description}</p>
                    </div>
                  </a>
                );
              }}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
