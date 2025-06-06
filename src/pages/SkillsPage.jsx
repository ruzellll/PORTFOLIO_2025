import "../styles/SkillsPage.css";
import Header from "../components/Header";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const languages = [
  { subject: "Typescript", A: 64 },
  { subject: "HTML5", A: 66 },
  { subject: "CSS3", A: 75 },
  { subject: "Javascipt", A: 42 },
  { subject: "Python", A: 32 },
];

const frameworksAndLibraries = [
  { subject: "Tailwind", A: 60 },
  { subject: "React", A: 70 },
  { subject: "Express", A: 64 },
  { subject: "GSAP", A: 69 },
  { subject: "Django", A: 80 },
];

export default function SkillsPage() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Apply the theme to the document element
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div className="skills-page">
      <Header />
      <KeyboardArrowDownIcon className="arrowDown" fontSize="large" />
      <div className="charts-group">
        <div className="chart">
          <div className="w-full h-[70vh]">
            {/* Limits max width and height */}
            <p className="chart-label">Languages</p>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius="70%" data={languages}>
                {/* Adjust grid and text color based on theme */}
                <PolarGrid className="chart-grid" />
                <PolarAngleAxis
                  dataKey="subject"
                  className="chart-subject"
                  stroke="var(--black-yellow)"
                />
                <PolarRadiusAxis
                  domain={[0, 100]}
                  axisLine={false}
                  tick={false}
                />
                {""}
                {/* Set the base to 100 */}
                {/* Radar Chart with dynamic colors */}
                <Radar
                  name="Ruzel"
                  dataKey="A"
                  fill="var(--white-yellow)"
                  fillOpacity={0.75}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="chart">
          <div className="w-full h-[70vh]">
            {/* Limits max width and height */}
            <p className="chart-label">Frameworks / Libraries</p>
            <ResponsiveContainer
              width="100%"
              height="100%"
              className="overflow-visible"
            >
              <RadarChart
                outerRadius="70%"
                data={frameworksAndLibraries}
                className="overflow-visible"
              >
                {/* Adjust grid and text color based on theme */}
                <PolarGrid className="chart-grid" />
                <PolarAngleAxis
                  dataKey="subject"
                  className="chart-subject"
                  stroke="var(--black-yellow)"
                />
                <PolarRadiusAxis
                  domain={[0, 100]}
                  axisLine={false}
                  tick={false}
                />
                {/* Radar Chart with dynamic colors */}
                <Radar
                  name="Ruzel"
                  dataKey="A"
                  fill="var(--white-yellow)"
                  fillOpacity={0.75}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
