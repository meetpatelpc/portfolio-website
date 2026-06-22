import { skills } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";

export default function Skills() {
  const ref = useFadeIn();

  return (
    <section className="section section " id="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
