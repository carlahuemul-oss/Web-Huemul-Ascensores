import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const irA = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <nav className="navbar">

      <button
        className="brand"
        onClick={() => irA("inicio")}
        aria-label="Ir al inicio"
      >

        <span className="brand-main">
          HUEMUL
        </span>

        <span className="brand-sub">
          ASCENSORES
        </span>

      </button>


      <button className="hamburger" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen} aria-controls="menu-principal" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>

      <div id="menu-principal" className={`navbar-menu${menuOpen ? " open" : ""}`}>

        <button onClick={() => irA("inicio")}>
          Inicio
        </button>

        <button onClick={() => irA("servicios")}>
          Servicios
        </button>

        <button onClick={() => irA("galeria")}>
          Galería
        </button>

        <button onClick={() => irA("clientes")}>
          Clientes
        </button>

        <button onClick={() => irA("ubicacion")}>
          Ubicación
        </button>

        <button onClick={() => irA("contacto")}>
          Contacto
        </button>


        <button
          className="nav-quote"
          onClick={() => irA("contacto")}
        >
          Solicitar cotización
        </button>

      </div>

    </nav>
  );
}
