import "../styles/Header.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("/");
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Apply the theme to the document element
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    // Update the active button based on the current route
    setActiveButton(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  function handleButtonClick(path) {
    setActiveButton(path);
    navigate(path);
  }

  return (
    <header>
      {isMenuOpen && (
        <div className="menuOverlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
      <nav>
        <div className="menu">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menuButton"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div
          ref={menuRef}
          className={`${isMenuOpen ? "block" : "hidden"} md:block`}
        >
          <div className="navbar">
            <div className="navButton-container">
              <button
                className={`navButton ${activeButton === "/" ? "active" : ""}`}
                onClick={() => handleButtonClick("/")}
              >
                About Me
              </button>
              <button
                className={`navButton ${
                  activeButton === "/skills-page" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("/skills-page")}
              >
                Skills
              </button>
              <button
                className={`navButton ${
                  activeButton === "/projects-page" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("/projects-page")}
              >
                Projects
              </button>
              <button
                className={`navButton ${
                  activeButton === "/contacts-page" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("/contacts-page")}
              >
                Contacts
              </button>
            </div>
            <button onClick={toggleTheme} className="themeButton">
              {theme === "light" ? (
                <DarkModeRoundedIcon />
              ) : (
                <LightModeRoundedIcon />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
