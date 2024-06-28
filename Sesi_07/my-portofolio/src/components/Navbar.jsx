import { Link } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  useEffect(() => {
    Swal.fire({
      title: "Selamat Datang",
      text: "Welcome to the application!",
      icon: "success",
      confirmButtonText: "OK",
    });
  }, []);

  const handleClose = () => {
    Swal.fire({
      title: "Sampai Jumpa",
      text: "See you next time!",
      icon: "info",
      confirmButtonText: "OK",
    }).then(() => {
      window.close();
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="span-title" style={{ color: "#cb1818" }}>
            KAMI
          </span>{" "}
          <span>BELAJAR</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Application
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/application/temperature-converter"
                  >
                    Temperature Converter
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/application/todolist">
                    Todo List
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger nav-link" onClick={handleClose}>
                <i className="fas fa-times"></i> Close
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
