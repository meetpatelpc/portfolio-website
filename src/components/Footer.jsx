import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {year} {profile.name}. 
        </p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
