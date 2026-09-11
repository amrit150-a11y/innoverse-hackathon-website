function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">

        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="/innoverse-logo.jpg"
            alt="INNOVERSE"
            className="club-logo"
          />

          <div className="brand-text">
            <strong>INNOVERSE</strong>
            <small>TECHNICAL CLUB</small>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#problems">
                Problems
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#quiz">
                Tech Quiz
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#register">
                Register
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;