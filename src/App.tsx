import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Layout } from "./layout/Layout";
import { AllProjects } from "./pages/AllProjects";
import { Project } from "./pages/project/Project";

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
