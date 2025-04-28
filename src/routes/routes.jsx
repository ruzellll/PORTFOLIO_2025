import { useRoutes } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactsPage from "../pages/ContactsPage";

const routesConfig = [
  //   { path: "*", element: <PageNotFound /> },
  { path: "/", element: <AboutMe /> },
  { path: "/skills-page", element: <SkillsPage /> },
  { path: "/projects-page", element: <ProjectsPage /> },
  { path: "/contacts-page", element: <ContactsPage /> },
];

export default function Routes() {
  return useRoutes(routesConfig);
}
