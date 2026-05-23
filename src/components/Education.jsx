import { timeline } from "../data/portfolioData";
import { useFadeIn } from "../hooks/useFadeIn";

export default function Education() {
  const ref = useFadeIn();

  return (
    <section className="section section-alt" id="education" ref={ref}>
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
