function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container">
        <div className="row align-items-center min-vh-100">

          <div className="col-lg-7">

            <img
                src="/smcet-logo.svg"
                alt="SMCET"
                className="smcet-logo"
              />

            

            <h1>
              STANI TECH MANTHAN
              <span> 2026</span>
            </h1>

            <p className="hero-tagline">
              Think. Build. Innovate.
            </p>

            <p className="hero-description">
              Turn your ideas into real-world solutions.
              Build innovative projects, solve meaningful problems
              and compete with the best minds.
            </p>

            <div className="hero-buttons">
              <a href="#register" className="btn btn-primary btn-lg">
                Register Your Team 🚀
              </a>

              <a href="#problems" className="btn btn-outline-light btn-lg">
                View Problems
              </a>
            </div>

            <div className="event-info">

              <div>
                <strong>📅 Date</strong>
                <span>Coming Soon</span>
              </div>

              <div>
                <strong>👥 Team Size</strong>
                <span>Minimum 3 Members</span>
              </div>

              <div>
                <strong>📍 Venue</strong>
                <span>SMCET, Jaipur</span>
              </div>

            </div>

          </div>

          <div className="col-lg-5 text-center">

            <div className="logo-card">

              <img
                src="/innoverse-logo.jpg"
                alt="Innoverse Technical Club"
              />

              <h3>Innoverse Technical Club</h3>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;