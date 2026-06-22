import { profile } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";

export default function About() {
  const ref = useFadeIn();

  return (
    <section className="section section-alt" id="about" ref={ref}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <p className="about-text">{profile.about}</p>
          <ul className="about-highlights">
            {profile.highlights.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
