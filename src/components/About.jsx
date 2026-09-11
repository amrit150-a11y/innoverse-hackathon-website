function About() {
  return (
    <section id="about" className="section-padding">

      <div className="container">

        <div className="section-title">
          <span>ABOUT THE EVENT</span>
          <h2>Where Ideas Become Innovation</h2>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovate</h3>
              <p>
                Bring your unique ideas and transform them
                into meaningful solutions.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Build</h3>
              <p>
                Work with your team and build a functional
                solution using modern technologies.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Compete</h3>
              <p>
                Present your solution and compete with
                innovative teams across the campus.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;