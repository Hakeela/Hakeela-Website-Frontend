import './styling/hdxconsulting.css';

export default function HDxConsulting() {
    const services = [
        { id: 1, name: "Product UI/UX & Brand Design", position: "top-left" },
        { id: 2, name: "Social email and presntation design", position: "top-right" },
        { id: 3, name: "Software Development", position: "bottom-left" },
        { id: 4, name: "Project writing and Research", position: "bottom-right" },
        { id: 5, name: "Tech talent training & Acquisition", position: "bottom-center" }
    ];

    return (
        <div className="hdx-consulting-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h3 className="hero-title">
                        <span className="highlight">Where</span> inclusion meets digital cons<span className="highlight">ulting</span></h3>
                    <p className="hero-description">
                        HakStudios is a digital consulting agency under Hakeela, delivering end-to-end creative and 
                        technical solutions including brand identity design, product design, project writing, 
                        software development, social media design, email design, and presentation design.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-secondary">Our Services</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/maxhakeela.png" alt="HDx Consulting" />
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="services-flex-row">
                  <div className="services-list-col">
                    <h2 className="services-title services-title-blue">Our Services</h2>
                    <ul className="services-list">
                      {services.map((service, idx) => (
                        <li
                          key={service.id}
                          className={`service-card-list${idx % 2 === 0 ? ' deep-blue-bg' : ''}`}
                        >
                          {service.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="services-center-image-large">
                    <img src="/ourservices.png" alt="Services" />
                  </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="portfolio-section">
                <h2 className="portfolio-title">Our Portfolio</h2>
                <p className="portfolio-description">
                  Explore some of our portfolio and brands we have worked with
                </p>
                <div className="portfolio-items">
                  <div className="portfolio-card">
                    <div className="portfolio-image-wrapper">
                      <img src="/trybe.jpg" alt="Project 1" className="portfolio-image" />
                    </div>
                    <div className="portfolio-text">Trybe Brand and Visual Identity Design</div>
                    <button className="btn btn-primary portfolio-btn">View Project</button>
                  </div>
                  <div className="portfolio-card">
                    <div className="portfolio-image-wrapper">
                      <img src="/seekee.png" alt="Project 2" className="portfolio-image" />
                    </div>
                    <div className="portfolio-text">Seekee Footies Pitch Deck</div>
                    <button className="btn btn-primary portfolio-btn">View Project</button>
                  </div>
                </div>
            </section>

        {/* Our Trusted Clients Section */}
        <section className="partners-section">
          <h2 className="partners-title">Our Tru<span className="highlight">sted Clients</span></h2>
          <div className="partners-grid">
            <div className="partner-card">
              <img src="/seekeeLogo.png" className="partner-logo" alt="Seekee Footies Logo" />
              <p className="partner-desc">“HakStudios understood Seekee Footies at a depth that surprised me. They captured our mission, our market, and our ambition in a pitch deck that truly speaks for us. The result was clean, bold, and investor-ready. If you want your story told right, HakStudios delivers.”</p>
              <p className="partner-name">— Tamunosiki, Founder, Seekee Footies</p>
            </div>
           
            <div className="partner-card">
              <img src="/zeroupLogo.png" className="partner-logo" alt="Zeroup Logo" />
              <p className="partner-desc">“HakStudios didn't just design a logo for ZeroUp—they built an identity. Every detail was intentional, modern, and aligned with where we're headed as a brand. I'm proud of what we created together.”</p>
              <p className="partner-name">— Magnus, Founder, ZeroUp</p>
            </div>
            
            <div className="partner-card">
              <img src="/trybeLogo.png" className="partner-logo" alt="Partner 3 Logo" />
              <p className="partner-desc">“HakStudios captured the heart of Trybe and turned it into a strong, clear brand identity.”</p>
              <p className="partner-name">— Nonso, Founder, Trybe</p>
            </div>
            
            <div className="partner-card">
              <img src="/afakelLogo.png" className="partner-logo" alt="Partner 4 Logo" />
              <p className="partner-desc">“HakStudios delivered a brand and product design that truly reflects Afakel's vision—clear, modern, and intentional.”</p>
              <p className="partner-name">— Divine, Founder, Afakel</p>
            </div>

            <div className="partner-card">
              <img src="/genusLogo.png" className="partner-logo" alt="Partner 1 Logo" />
              <p className="partner-desc">“From brand to merch, HakStudios understood the assignment.”</p>
              <p className="partner-name">— Victor, Founder, GenJesus</p>
            </div>

            <div className="partner-card">
              <img src="/mediaLogo.png" className="partner-logo" alt="Partner 6 Logo" />
              <p className="partner-desc">“HakStudios crafted a brand identity that clearly positions DC Media as a modern, credible media company.”</p>
              <p className="partner-name">— Daniel, Director, DC Media</p>
            </div>
          </div>
        </section>
        </div>
    );
}