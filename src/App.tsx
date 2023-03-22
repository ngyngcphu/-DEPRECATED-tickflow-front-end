import { LoginPage } from "./components/LoginPage";
import { Flowbite } from "flowbite-react";

export default function App() {
  return (
    <Flowbite theme={{ dark: true }}>
      <LoginPage />
    </Flowbite>
  );
}
