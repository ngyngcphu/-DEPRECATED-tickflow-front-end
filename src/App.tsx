import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { SideBar } from "./components/SideBar";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/overview' element={<SideBar />} />
    </Routes>
  );
}
