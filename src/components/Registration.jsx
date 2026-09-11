import { useState } from "react";

function Registration() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [teamSize, setTeamSize] = useState("");

  const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);

    const form = e.target;
    const formData = new FormData(form);

    // Collect member details
    const members = [];
    for (let i = 1; i <= Number(teamSize); i++) {
      const name = formData.get(`member${i}Name`);
      const email = formData.get(`member${i}Email`);
      members.push(`Member ${i}: ${name} (${email})`);
    }

    // Construct Payload Object
    const payload = {
      action: "registration",
      teamName: formData.get("teamName"),
      leaderName: formData.get("leaderName"),
      email: formData.get("email"),
      contact: formData.get("contact"),
      department: formData.get("department"),
      teamSize: teamSize,
      members: members.join(" | "),
      problemStatement: formData.get("problemStatement"),
      technology: formData.get("technology"),
      projectIdea: formData.get("projectIdea"),
      linkedin: formData.get("linkedin"),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      form.reset();
      setTeamSize("");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="section-padding">
      <div className="container">
        <div className="section-title">
          <span>JOIN THE HACKATHON</span>
          <h2>Register Your Team</h2>
        </div>

        <div className="registration-box">
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              {/* Team Name */}
              <div className="col-md-6">
                <label>Team Name</label>
                <input
                  type="text"
                  name="teamName"
                  className="form-control"
                  placeholder="Enter team name"
                  required
                />
              </div>

              {/* Team Leader */}
              <div className="col-md-6">
                <label>Team Leader Name</label>
                <input
                  type="text"
                  name="leaderName"
                  className="form-control"
                  placeholder="Enter leader name"
                  required
                />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>

              {/* Contact */}
              <div className="col-md-6">
                <label>Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  className="form-control"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              {/* Department */}
              <div className="col-md-6">
                <label>Department</label>
                <select name="department" className="form-select" required>
                  <option value="">Select Department</option>
                  <option value="CSE">CSE</option>
                  <option value="AI & ML">AI & ML</option>
                  <option value="ECE">ECE</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Team Size */}
              <div className="col-md-6">
                <label>Team Size</label>
                <select
                  name="teamSize"
                  className="form-select"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  required
                >
                  <option value="">Select Team Size</option>
                  <option value="3">3 Members</option>
                </select>
              </div>

              {/* Dynamic Members */}
              {teamSize &&
                Array.from({ length: Number(teamSize) }, (_, index) => {
                  const memberNumber = index + 1;
                  return (
                    <div className="col-12 member-box" key={memberNumber}>
                      <h5>👤 Member {memberNumber}</h5>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            name={`member${memberNumber}Name`}
                            className="form-control"
                            placeholder={`Member ${memberNumber} Name`}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            name={`member${memberNumber}Email`}
                            className="form-control"
                            placeholder={`Member ${memberNumber} Email`}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/* Problem Statement */}
              <div className="col-12">
                <label className="form-label">Problem Statement</label>
                <input
                  type="text"
                  name="problemStatement"
                  className="form-control"
                  value="Will be revealed live during the hackathon"
                  readOnly
                />
                <small className="text-muted">
                  The problem statement will be announced by the organizing team.
                </small>
              </div>

              {/* Technology */}
              <div className="col-md-6">
                <label>Technology / Domain</label>
                <input
                  type="text"
                  name="technology"
                  className="form-control"
                  placeholder="React, AI, IoT..."
                />
              </div>

              {/* Project Idea */}
              <div className="col-12">
                <label>Project Idea</label>
                <textarea
                  name="projectIdea"
                  className="form-control"
                  rows="4"
                  placeholder="Briefly describe your project idea..."
                  required
                ></textarea>
              </div>

              {/* LinkedIn Profile */}
              <div className="col-12">
                <label>LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  className="form-control"
                  placeholder="Enter your LinkedIn profile URL"
                  required
                />
              </div>

              {/* Confirmation */}
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" required />
                  <label className="form-check-label">
                    I confirm that the information provided is correct and my team has 3 members.
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-5"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Registration 🚀"}
                </button>
              </div>
            </div>
          </form>

          {submitted && (
            <div className="alert alert-success mt-4 text-center">
              🎉 Registration submitted successfully!
              <br />
              Your team details have been recorded.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Registration;