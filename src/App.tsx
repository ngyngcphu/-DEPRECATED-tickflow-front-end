import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/pages/LoginPage";
import { Layout } from "./components/layout/Layout";
import { AllProjects } from "./components/pages/allprojects/AllProjects";
import { Project } from "./components/pages/project/Project";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/*' element={<Layout />}>
        <Route path='overview' element={<Layout />} />
        <Route path='projects' element={<AllProjects />} />
        <Route path='projects/:projectId' element={<Project />} />
      </Route>
    </Routes>
  );
}
