import "../styles/ContactsPage.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Your message has been sent!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          alert("Failed to send your message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send your message. Please try again later.");
      });
  }

  useEffect(() => {
    // GSAP animation for the email-section
    gsap.fromTo(
      ".email-section",
      {
        y: 50, // Start 50px below
        opacity: 0, // Start fully transparent
      },
      {
        y: 0, // End at its original position
        opacity: 1, // Fully visible
        duration: 2, // Animation duration
        ease: "power3.out", // Smooth easing
      }
    );

    // GSAP stagger animation for linksButton with ScrollTrigger
    gsap.fromTo(
      ".linksButton",
      {
        y: 50, // Start 50px below
        opacity: 0, // Start fully transparent
      },
      {
        y: 0, // End at its original position
        opacity: 1, // Fully visible
        duration: 2, // Animation duration
        ease: "power3.out", // Smooth easing
        stagger: 0.25, // Delay between each button animation
        scrollTrigger: {
          trigger: ".links-container", // Trigger animation when this container enters the viewport
          start: "top 80%", // Start animation when the top of the container is 80% down the viewport
          toggleActions: "play none none none", // Play animation only once
        },
      }
    );
  }, []);

  return (
    <div className="contacts-page">
      <Header />
      <div className="contact-container">
        <div className="email-section">
          <h2 className="letsWork">LET'S WORK</h2>
          <h1 className="together">TOGETHER</h1>
          <form onSubmit={handleSubmit} className="email-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                autoComplete="off"
                required
              ></textarea>
            </div>
            <button type="submit" className="submitButton">
              Send
            </button>
          </form>
          <div className="divider">
            <hr className="w-full h-[1px]" />
            <span>or</span>
            <hr className="w-full h-[1px]" />
          </div>
        </div>

        <div className="links-container">
          <a
            href="/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="linksButton"
          >
            <span className="linksButton-content">View my Resume</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ruzel-yuan-ortega-2196a1357/"
            target="_blank"
            className="linksButton"
          >
            <span className="linksButton-content">LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/yuan.ortega.96"
            target="_blank"
            className="linksButton"
          >
            <span className="linksButton-content">Facebook</span>
          </a>
          <a
            href="https://github.com/ruzellll"
            target="_blank"
            className="linksButton"
          >
            <span className="linksButton-content">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}
