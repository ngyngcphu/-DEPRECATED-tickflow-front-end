import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { Layout } from "./components/layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/overview' element={<Layout />} />
    </Routes>
  );
}
