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

const programmingSkills = [
  { subject: "React.js", A: 64 },
  { subject: "CSS", A: 66 },
  { subject: "HTML", A: 75 },
  { subject: "Javascipt", A: 42 },
  { subject: "Tailwind", A: 50 },
  { subject: "Python", A: 32 },
];

const technicalSkills = [
  { subject: "Troubleshooting", A: 60 },
  { subject: "UX/UI Design", A: 70 },
  { subject: "Figma", A: 64 },
  { subject: "Communication", A: 69 },
  { subject: "Prompting", A: 80 },
  { subject: "Problem-Solving", A: 71 },
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
            <p className="chart-label">Programming Skills</p>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius="70%" data={programmingSkills}>
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
            <p className="chart-label">Technical Skills</p>
            <ResponsiveContainer
              width="100%"
              height="100%"
              className="overflow-visible"
            >
              <RadarChart
                outerRadius="70%"
                data={technicalSkills}
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
