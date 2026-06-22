import{ certificates} from "../data/portfolioData";

export default function Certificate(){
    return(
        <section className="section" id="certificate">
            <div className="container">
                <h2 className="section-title">Certificate</h2>
                    <div className="skills-grid">
                        <div className="certificate-list">
                            {certificates.map((cert) => (
                                <div key={cert.title} className="certificate-item">
                                    <h3>{cert.title}</h3>
                                    <p>Provider: {cert.provider}</p>
                                    <p>Date: {cert.date}</p>
                                    <div className="project-links">
                                        {cert.links.map((links) => (
                                            <a
                                                href={links.href}
                                                className="btn btn-outline"
                                                download
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                            Download Certificate
                                            </a>
                                        ))}
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </div>
                    
            </div>
        </section>
    );
}