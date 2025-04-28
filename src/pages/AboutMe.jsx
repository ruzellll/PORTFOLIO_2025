import "../styles/AboutMe.css";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import author from "../assets/author.png";
import ghibli from "../assets/ghibli-img.png";
import projects from "../assets/home-projects.png";
import arts from "../assets/home-arts.png";
import dev from "../assets/home-dev.png";

export default function AboutMe() {
  const ruzelRef = useRef(null);
  const yuanRef = useRef(null);
  const navigate = useNavigate();
  const overlayRef = useRef(null); // Ref for the overlay
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false); // State for tooltip visibility
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [visibleContainers, setVisibleContainers] = useState([]); // State for sequential visibility

  useEffect(() => {
    // Slide "ruzel" from left to right
    gsap.fromTo(
      ruzelRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1.75, ease: "power3.out" }
    );

    // Slide "yuan" from right to left
    gsap.fromTo(
      yuanRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 2, ease: "power3.out" }
    );

    // Show tooltip after 5 seconds
    const tooltipTimeout = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(tooltipTimeout); // Cleanup timeout on component unmount
  }, []);

  const handleAuthorClick = () => {
    setOverlayVisible(true);
    // Tooltip will no longer be hidden when clicked
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      setOverlayVisible(false);
    }
  };

  useEffect(() => {
    if (isOverlayVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOverlayVisible]);

  function handleButtonClick(path) {
    navigate(path);
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
    setVisibleContainers([]); // Reset visible containers
    const delays = [0, 150, 300, 450]; // Delays for each container in milliseconds
    delays.forEach((delay, index) => {
      setTimeout(() => {
        setVisibleContainers((prev) => [...prev, index]);
      }, delay);
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setVisibleContainers([]); // Clear visible containers
  };

  return (
    <div className="aboutMe-page">
      <Header />
      <div className="bgName ruzel" ref={ruzelRef}>
        RUZEL
      </div>
      <div className="bgName yuan" ref={yuanRef}>
        YUAN
      </div>
      <div
        className="author-container"
        onClick={handleAuthorClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden hover:brightness-105">
          <img src={ghibli} alt="Author" className="ghibli-image" />
        </div>

        {/* Tooltip */}
        {showTooltip && <div className="tooltip">Click me</div>}
      </div>
      {isHovered && (
        <div className="hidden md:block">
          {visibleContainers.includes(0) && (
            <div className="hover-container top-left">
              <img src={projects} alt="Project" className="w-[35%]" />
            </div>
          )}
          {visibleContainers.includes(1) && (
            <div className="hover-container top-right">
              <div className="fun-facts-container">
                <h2 className="fun-facts-title">Fun facts</h2>

                <div className="space-y-4">
                  <div>
                    <p className="fun-fact-item">💬 I can read Hangeul</p>
                    <p className="fun-fact-subtext">
                      ~I can only read not understand...
                    </p>
                  </div>

                  <div>
                    <p className="fun-fact-item">
                      ⚗️ I'm currently watching Breaking Bad.
                    </p>
                    <p className="fun-fact-subtext">
                      a reference for the future me its 2025.
                    </p>
                  </div>

                  <div>
                    <p className="fun-fact-item">🍭 I'm a Once.</p>
                    <p className="fun-fact-subtext">
                      I like listening / watching to Twice.
                    </p>
                  </div>

                  <div>
                    <p className="fun-fact-item">
                      🥚 I make the best omelette.
                    </p>
                    <p className="fun-fact-subtext">according to me..</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {visibleContainers.includes(2) && (
            <div className="hover-container bottom-left">
              <div className="dev-container">
                <h2 className="dev-title">
                  Frontend & Backend
                  <br />
                  Developer
                </h2>
                <div className="w-90% h-32 m-2 rounded-xl overflow-hidden">
                  <img src={dev} alt="Mobile and Desktop Designs" />
                </div>
              </div>
            </div>
          )}
          {visibleContainers.includes(3) && (
            <div className="hover-container bottom-right">
              <img src={arts} alt="Arts" className="w-full" />
            </div>
          )}
        </div>
      )}
      {isOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content" ref={overlayRef}>
            <button className="close-button" onClick={handleCloseOverlay}>
              &times;
            </button>

            <h1 className="text-left">Hello there,</h1>
            <h2 className="text-left text-3xl">
              I'm <strong>Ruzel Yuan Ortega</strong>
            </h2>
            <div className="author-image-container">
              <img src={author} alt="Author" className="author-image" />
            </div>
            <p>
              I am a passionate web developer with a strong focus on creating
              modern, responsive, and user-friendly web applications. My journey
              in programming started at a young age, and over the years, I have
              honed my skills in various technologies, including React,
              JavaScript, CSS, and more.
            </p>

            <ul>
              <h3>Skills</h3>
              <li>Proficient in React, and JavaScript.</li>
              <li>
                Experienced in building responsive designs with CSS and
                Tailwind.
              </li>
              <li>Familiar with backend technologies like Node.js.</li>
              <li>Knowledgeable in database management with MongoDB.</li>
              <li>Version control using Git and GitHub.</li>
            </ul>

            <ul>
              <h3>Achievements</h3>
              <li>Developed a portfolio website showcasing my projects.</li>
              <li>
                Completed certifications in web development and JavaScript.
              </li>
              <li>
                Built a fully functional e-commerce website for a team project.
              </li>
            </ul>
            <section>
              <h3>Hobbies</h3>
              <p>
                When I'm not coding, I enjoy exploring new technologies, reading
                technical blogs, drawing, designing and playing video games.
                This sparks my creativity and keeps me updated with the latest
                trends in the tech world. I also love to travel and experience
                different cultures, explore different countries via which
                inspires my work and helps me think outside the box.
              </p>
            </section>
            <section>
              <h3>Contact Me</h3>
              <p>
                Feel free to reach out to me on my social media platforms or via
                email. I'm always open to discussing new projects,
                collaborations, or opportunities.
              </p>
              <button
                className="contacts-button"
                onClick={() => handleButtonClick("/contacts-page")}
              >
                Contacts
              </button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
