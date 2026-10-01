import Image from "next/image";
import { projects } from "@/content/projects";

export function Work() {
  return (
    <section id="work" className="work-section">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / Selected work</span>
            <h2>
              A few things
              <br />
              <em>I&apos;ve made.</em>
            </h2>
          </div>
          <p>
            Each project starts with a question
            <br />
            and ends with something useful.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className={`project-card ${project.className}`}>
              <div className="project-image">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                ) : null}
                <span className="project-index">{project.index}</span>
              </div>
              <div className="project-info">
                <span className="eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
