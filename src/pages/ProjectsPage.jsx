import "../styles/ProjectsPage.css";
import Header from "../components/Header";
import ReusableCard from "../components/ReusableCard";
import pmes from "../assets/projects-pmes.png";
import capstone from "../assets/projects-capstone.png";
import kanban from "../assets/projects-kanban.png";
import pips from "../assets/projects-pips.png";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <Header />
      <div>
        <div className="projects-container">
          <ReusableCard
            className="projects-card"
            image={pmes}
            title="PMES"
            description="I was part of a development team working on the BULSU Planning and Development Office PMES website. My primary role focused on frontend development and UI/UX design using Figma. One of my first major tasks was designing the 'Contact Support' section of the system, ensuring that it was user-friendly, visually consistent, and aligned with the overall branding of the platform. I was also given the responsibility to redesign the system’s chatbot interface in Figma, aiming to make it more modern, intuitive, and accessible for users. In addition to design work, I contributed to the frontend development by building reusable components and working on bug fixes to improve the stability and performance of the website."
            cardLink="https://pdo-bulsu"
          />
          <ReusableCard
            className="projects-card"
            image={pips}
            title="PIPS"
            description="I was part of a development team working on the BULSU PIPS (Planning and Development Office) system and its official website. My main role focused on frontend development, where one of my key responsibilities was designing and building the entire 'About' page of the system from scratch. I implemented smooth and engaging animations using GSAP to enhance the user experience and make the page more interactive. Aside from the About page, I also contributed to the dashboard development, specifically by creating dynamic charts that display project data clearly and interactively. I ensured that the visual presentation of the charts was both informative and user-friendly, helping users quickly understand important project statistics."
            cardLink="https://pdo-bulsupips.web.app/"
          />
          <ReusableCard
            className="projects-card"
            image={kanban}
            title="Kanban"
            description="I collaborated with a development team to build the Planning and Development Office Kanban System, a project aimed at streamlining task management and workflow tracking. My primary responsibilities were focused on the frontend development, I was tasked to handle and fix the responsiveness of the system. "
            cardLink="https://pdokandan.web.app/"
          />
          <ReusableCard
            className="projects-card"
            image={capstone}
            title="Electro-Cutie"
            description="I was a key member of a development team for a capstone project, where we created a game titled Electro-Cutie — an educational game focused on teaching circuits and electronics through fun and interactive gameplay. My primary role involved designing all visual assets for the game, including character illustrations, environment backgrounds, animated GIFs, user interface elements, and additional in-game graphics. I worked closely with the programming and design teams to ensure that the art style was consistent, engaging, and effectively supported the game's educational objectives, helping to create a polished and cohesive final product."
          />
        </div>
      </div>

      <a
        href="https://github.com/ruzellll"
        target="_blank"
        className="linkButton"
      >
        <div className="linkButton-content">
          More of my projects at my github repository..
        </div>
      </a>
    </div>
  );
}
