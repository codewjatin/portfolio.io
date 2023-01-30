import { createResource, For, lazy } from "solid-js";
import { useRouteData } from "solid-start";

type Projects = {
  name: string;
  logo: string;
  imageUrl: string;
  projectUrl: string;
  sourceUrl: string;
  description: string;
};

export function routeData() {
  const [projects] = createResource(async () => {
    const response = await fetch(
      `http://${import.meta.env.VITE_BASE_URL}/api/projects`
    );
    return (await response.json()).data as Projects[];
  });

  return { projects };
}

export default function Projects() {
  const { projects } = useRouteData<typeof routeData>();
  return (
    <div class="main-wrapper">
      <div class="container mx-auto content">
        <h1 class="page-title">Projects</h1>
        <div class="page-sub-heading">
          I have developed a variety of projects as part of my learning process,
          all open-sourced on my GitHub profile. I have shared some of these
          projects for others to view. I am always looking for ways to improve
          and expand my skills as a developer.
        </div>
        <hr class="mt-xl mb-xxl" />
      </div>
      <div class="container-slim mx-auto content">
        <For each={projects()}>
          {(project) => {
            const description = project.description.split("\n\n");
            const projectUrl = new URL(project.projectUrl).hostname;
            return (
              <div class="project-container mb-xxl">
                <div class="inset-image project-image mb-m">
                  <img
                    alt={project.name}
                    width={880}
                    height={495}
                    loading="lazy"
                    src={project.imageUrl}
                  />
                </div>
                <h4 class="project-title">{project.name}</h4>
                <For each={description}>
                  {(paragraph) => {
                    return <p>{paragraph}</p>;
                  }}
                </For>
                <a
                  href={project.projectUrl}
                  class="btn project-btn"
                  target="_blank"
                  rel="noopener noreferrer">
                  {projectUrl}
                  <i class="icon icon-external-link"></i>
                </a>
                <a
                  href={project.sourceUrl}
                  class="btn project-btn"
                  target="_blank"
                  rel="noopener noreferrer">
                  github.com
                  <i class="icon icon-external-link"></i>
                </a>
              </div>
            );
          }}
        </For>
      </div>
      <div class="container mx-auto">
        <hr class="mt-xxl mb-xxl" />
      </div>
      <div class="container-slim mx-auto">
        <div class="heading-group mb-m">
          <h4>Acknowledgments</h4>
          <div class="sub-heading mb-s">
            Significant projects I worked on are inspired by a lot of other
            projects.
          </div>
          <p>
            By this I would like to thank all the developers who worked hard to
            create content for others to learn and create beautiful websites and
            contribute to open source.
          </p>
        </div>
      </div>
    </div>
  );
}
