import Logo from "../Logo";
import NavBar from "./navigation/NavBar";
import OthersBar from "./others/OthersBar";

export default function HeaderBot() {
  return (
    <div className="container-box flex justify-between items-center py-3 shadow-md">
      <Logo />
      <NavBar />
      <OthersBar />
    </div>
  );
}
