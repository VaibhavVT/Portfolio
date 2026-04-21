import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          {/* LEFT - Role Info */}
          <div className="career-left">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Development Engineer</h4>
                <h5>Media.net</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
          </div>

          {/* TIMELINE LINE */}
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* RIGHT - Bullet Points */}
          <div className="career-info-box">
            <ul className="career-points">
              <li>Design, develop, and deploy intelligent, production-ready software solutions for Web and Mobile platforms</li>
              <li>Use AI tools (e.g., Cursor, GPT-based coding assistants, OpenAI APIs, ML frameworks) to accelerate development cycles</li>
              <li>Apply prompt engineering to generate and refine user interfaces and backend logic</li>
              <li>Integrate AI models and APIs to enhance automation, performance, and user experience</li>
              <li>Bring product thinking into engineering decisions — balancing feasibility, user needs, and business goals</li>
              <li>Analyze large datasets to build predictive models and deliver data-driven insights</li>
              <li>Optimize code for performance, scalability, and reliability in high-volume, low-latency environments</li>
              <li>Stay updated with the latest AI/ML advancements and adopt them into development workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;