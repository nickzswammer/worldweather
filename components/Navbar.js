import Image from "next/image";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-4">
      <div class="container-fluid">
        <a class="navbar-brand text-4xl" href="/">
          <img
            src="/weather.png"
            alt=""
            width="50"
            height="40"
            class="d-inline-block align-text-top mr-3"
          />
          World Weather
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
