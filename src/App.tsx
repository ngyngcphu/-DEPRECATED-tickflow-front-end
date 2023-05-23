import { Route, Routes } from 'react-router-dom';
import { Layout } from '@layout';
import { AllProjectsPage, DetailProjectPage, LoginPage } from '@pages';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/*' element={<Layout />}>
        <Route path='overview' element={<Layout />} />
        <Route path='projects' element={<AllProjectsPage />} />
        <Route path='projects/:projectId' element={<DetailProjectPage />} />
      </Route>
    </Routes>
  );
}
