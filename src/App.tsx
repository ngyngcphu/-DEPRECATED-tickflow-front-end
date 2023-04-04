import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { Layout } from "./components/layout/Layout";
import { AllProjects } from "./components/pages/projects/AllProjects";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/*' element={<Layout />}>
        <Route path='overview' element={<Layout />} />
        <Route path='projects' element={<AllProjects />} />
      </Route>
    </Routes>
  );
}
