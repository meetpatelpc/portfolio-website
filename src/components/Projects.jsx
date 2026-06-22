import { projects } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";

export default function Projects() {
  const ref = useFadeIn();

  return (
    <section className="section section-alt" id="projects" ref={ref}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">
          Academic and personal projects that showcase what I&apos;ve built so far.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <div className="project-icon">{project.id}</div>
                {project.features?.map((feature) => (
                  <span className="project-feature" key={feature}>
                    {feature}
                  </span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
