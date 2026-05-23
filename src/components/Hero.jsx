import { profile } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-badge">{profile.badge}</p>
          <h1 className="hero-title">
            Hi, I&apos;m <span className="highlight">{profile.name}</span>
          </h1>
          <p className="hero-subtitle">{profile.title}</p>
          <p className="hero-desc">{profile.intro}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                className="btn btn-outline"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            )}
          </div>
          <div className="hero-social">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <EmailIcon />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
