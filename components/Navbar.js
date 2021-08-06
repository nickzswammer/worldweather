import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-4">
      <div className="container-fluid">
        <a className="navbar-brand text-4xl">
          <Image
            src="/weather.png"
            alt=""
            width="50"
            height="40"
            className="d-inline-block align-text-top mr-3"
          />
          World Weather
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
