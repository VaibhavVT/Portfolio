import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    id: "01",
    title: "DeepVision: Deepfake Detection Using Human Eye Blinking Pattern",
    category: "AI / Machine Learning",
    tools:
      "Python, OpenCV, CNN, NumPy, SQLite, Spyder IDE, Machine Learning, Deep Learning",
    features:
      "Deepfake detection, Eye blink analysis, Real-time video processing, Facial feature extraction, CNN-based classification, Image and video input handling, User authentication system, Database integration",
    image: "/images/Deepvision.png",
  },
  {
    id: "02",
    title: "Unsupervised Log-Based Threat Detection Using Isolation Forest and Autoencoder Ensembles",
    category: "AI / Cyber Security",
    tools:
      "Python, Scikit-learn, TensorFlow, Pandas, NumPy",
    features:
      "Anomaly detection, Isolation Forest, Autoencoder models, Log analysis, Unsupervised learning",
    image: "/images/Log.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")
        ?.getBoundingClientRect().left || 0;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement?.getBoundingClientRect().width || 0;

      let padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2 || 0;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools</h4>
                <p>{project.tools}</p>

                <h4>Features</h4>
                <p>{project.features}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;