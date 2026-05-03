import { Link } from "@tanstack/react-router";

export default function Logo() {
  return (
    <div className="logo inline-flex justify-center items-center">
      <Link to="/" title="home" className="text-3xl font-semibold font-heading">
        Clinic
      </Link>
    </div>
  );
}
