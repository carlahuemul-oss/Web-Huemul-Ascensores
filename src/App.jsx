import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css";

import hospitalItaliano from "./assets/logos/hospital italiano.png";
import bancor from "./assets/logos/Logo_Bancor_1200x630_verde_OG_c3679f31a7.png";
import yelicich from "./assets/logos/Adm yelicich.png";
import renault from "./assets/logos/renault.png";
import conicet from "./assets/logos/conicetea1_732_1296.jpg";
import fcefyn from "./assets/logos/FCEFyN-.png";
import seguridad from "./assets/logos/ministerio de seguridad.png";
import radioMaria from "./assets/logos/radio maria.png";
import institutoCentral from "./assets/logos/Escudo_Instituto_Atletico_Central_Cordobna-4.png";

import ascensorTerminado from "./assets/galeria/ascensor-terminado-1.png";
import camioneta from "./assets/galeria/camioneta.png";
import trabajando from "./assets/galeria/Trabajando.png";

function IconPhone() {
  const whatsappUrgencias =
  "https://wa.me/5493512700691?text=Hola%20Huemul%20Ascensores%2C%20necesito%20asistencia%20urgente";
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.64a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.48 0 .12 5.36.12 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.65a11.88 11.88 0 0 0 5.79 1.48h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.49-8.41ZM12.06 21.8a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.72.98 1-3.63-.24-.37a9.82 9.82 0 0 1-1.51-5.25c0-5.44 4.42-9.86 9.86-9.86 2.63 0 5.1 1.02 6.96 2.89a9.79 9.79 0 0 1 2.89 6.96c0 5.44-4.42 9.86-9.86 9.86Zm5.4-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-1.78-.89-2.95-1.59-4.12-3.61-.31-.53.31-.49.89-1.64.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function IconMantenimiento() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.2 2.2-2.8-.7-.7-2.8 2.2-2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m14 14 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconModernizacion() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.42 1.42M16.94 16.94l1.42 1.42M18.36 5.64l-1.42 1.42M7.06 16.94l-1.42 1.42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  );
}

function IconInstalaciones() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="5"
        y="3"
        width="14"
        height="18"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 3v18M9 9v3M15 9v3M8 6h1M15 6h1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function App() {
  const whatsappUrgencias =
    "https://wa.me/5493512700691";

  return (
    <div className="app">
      <Navbar />

      <Hero />

      <main>
        {/* SERVICIOS */}

        <section id="servicios" className="section section-services">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">
                  NUESTROS SERVICIOS
                </p>

                <h2>
                  Soluciones integrales en transporte vertical{" "}
                  <span>a su medida.</span>
                </h2>
              </div>

              <p className="section-text">
                Ingeniería y mantenimiento, desde el diseño y la instalación hasta el mantenimiento preventivo y correctivo.
              </p>
            </div>

            <div className="service-grid">
              <article className="service-card">
                <div className="service-number">
                  <IconMantenimiento />
                </div>

                <h3>Mantenimiento</h3>

                <p>
                  Planes preventivos y correctivos continuos para evitar
                  interrupciones y cumplir normativas vigentes.
                </p>
              </article>

              <article className="service-card">
                <div className="service-number">
                  <IconModernizacion />
                </div>

                <h3>Modernización</h3>

                <p>
                  Actualización tecnológica de maniobras, motores y cabinas
                  para elevar la valorización del edificio.
                </p>
              </article>

              <article className="service-card">
                <div className="service-number">
                  <IconInstalaciones />
                </div>

                <h3>Instalaciones</h3>

                <p>
                  Proyectos integrales desde el diseño hasta el montaje final
                  en obras nuevas o reemplazos completos.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* GALERIA */}

        <section id="galeria" className="section section-gallery">
          <div className="section-inner">
            <p className="section-eyebrow">
              PROYECTOS Y OBRAS
            </p>

            <h2>Excelencia en cada detalle.</h2>

            <p className="section-text">
              Registro de nuestras intervenciones técnicas,
              modernizaciones mecánicas y renovaciones estéticas de cabina.
            </p>

            <div className="gallery-placeholder">
              <img
                src={ascensorTerminado}
                alt=""
              />

              <img
                src={camioneta}
                alt=""
              />

              <img
                src={trabajando}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* CLIENTES */}

        <section id="clientes" className="section section-clients">
          <div className="section-inner">
            <p className="section-eyebrow">
              RESPALDO INSTITUCIONAL
            </p>

            <h2>
              Empresas y consorcios que confían en nuestro servicio.
            </h2>

            <p className="section-text">
              Brindamos soporte continuo e ingeniería a instituciones de
              primer nivel en toda la provincia.
            </p>

            <div className="clients-grid">
              <div className="client-logo">
                <img
                  src={hospitalItaliano}
                  alt="Hospital Italiano"
                />
              </div>

              <div className="client-logo">
                <img
                  src={bancor}
                  alt="Bancor"
                />
              </div>

              <div className="client-logo">
                <img
                  src={yelicich}
                  alt="Administración Yelicich"
                />
              </div>

              <div className="client-logo">
                <img
                  src={renault}
                  alt="Renault"
                />
              </div>

              <div className="client-logo">
                <img
                  src={conicet}
                  alt="CONICET"
                />
              </div>

              <div className="client-logo">
                <img
                  src={fcefyn}
                  alt="Facultad de Ciencias Exactas, Físicas y Naturales"
                />
              </div>

              <div className="client-logo">
                <img
                  src={seguridad}
                  alt="Ministerio de Seguridad de Córdoba"
                />
              </div>

              <div className="client-logo">
                <img
                  src={radioMaria}
                  alt="Radio María"
                />
              </div>

              <div className="client-logo">
                <img
                  src={institutoCentral}
                  alt="Instituto Atlético Central Córdoba"
                />
              </div>
            </div>
          </div>
        </section>

        {/* UBICACION */}

        <section id="ubicacion" className="section section-location">
          <div className="section-inner location-layout">
            <div className="location-info">
              <p className="section-eyebrow">
                OFICINAS CENTRALES
              </p>

              <h2>
                Estamos en <span>Córdoba.</span>
              </h2>

              <p className="section-text location-address">
                Justo José de Urquiza 733
                <br />
                B° Ducasse · Córdoba, Argentina
              </p>

              <a
                className="location-button"
                href="https://www.google.com/maps/search/?api=1&query=Justo+José+de+Urquiza+733,+Córdoba"
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps
              </a>
            </div>

            <div className="location-map">
              <iframe
                title="Ubicación de Huemul Ascensores"
                src="https://www.google.com/maps?q=Justo+José+de+Urquiza+733,+Córdoba&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* CONTACTO */}

        <section id="contacto" className="section section-contact">
          <div className="section-inner">
            <div className="contact-heading">
              <p className="section-eyebrow">
                CONTACTO DIRECTO
              </p>

              <h2>Siempre Disponibles.</h2>

              <p className="section-text">
                Atención comercial, administrativa y guardia técnica 24/7
              </p>
            </div>

            <div className="contact-layout">
              <div className="contact-left">
                <div className="contact-grid">
                  <a
                    className="contact-card"
                    href="tel:4354377"
                  >
                    <span className="contact-icon">
                      <IconPhone />
                    </span>

                    <div>
                      <span className="contact-label">
                        ADMINISTRACIÓN
                      </span>

                      <strong>435-4377</strong>

                      <small>
                        Atención lunes a viernes
                      </small>
                    </div>
                  </a>

                  <a
                    className="contact-card"
                    href="tel:+5493512700692"
                  >
                    <span className="contact-icon">
                      <IconPhone />
                    </span>

                    <div>
                      <span className="contact-label">
                        RECLAMOS TÉCNICOS
                      </span>

                      <strong>351 27 00692</strong>

                      <small>
                        Mantenimiento activo
                      </small>
                    </div>
                  </a>

                  <a
                    className="contact-card contact-card-urgent"
                    href={whatsappUrgencias}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-icon">
                      <IconWhatsApp />
                    </span>

                    <div>
                      <span className="contact-label">
                        URGENCIAS 24/7
                      </span>

                      <strong>351 27 00691</strong>

                      <small>
                        Respuesta de guardia inmediata
                      </small>
                    </div>
                  </a>
                </div>

                {/* RESPALDO PROFESIONAL */}

                <div className="trust-box">
                  <div className="trust-header">
                    <span className="trust-kicker">
                      RESPALDO PROFESIONAL
                    </span>

                    <h3>
                      Una empresa habilitada, con respaldo técnico y compromiso permanente.
                    </h3>
                  </div>

                  <div className="trust-grid">
                    <div className="trust-item trust-item-highlight">
                      <div className="trust-icon">
                        🏢
                      </div>

                      <div>
                        <strong>
                          Empresa habilitada
                        </strong>

                        <p>
                          ELEVAR S.R.L. · Empresa conservadora habilitada
                          conforme a la Ordenanza Municipal N.º 10.950/05.
                        </p>
                      </div>
                    </div>

                    <div className="trust-item">
                      <div className="trust-icon">
                        👷
                      </div>

                      <div>
                        <strong>
                          Respaldo técnico
                        </strong>

                        <p>
                          Representantes Técnicos habilitados por el
                          Colegio de Ingenieros Especialistas de Córdoba
                          (CIEC).
                        </p>
                      </div>
                    </div>

                    <div className="trust-item">
                      <div className="trust-icon">
                        🛡️
                      </div>

                      <div>
                        <strong>
                          Servicio profesional
                        </strong>

                        <p>
                          Mantenimiento preventivo, correctivo y atención
                          de urgencias para garantizar seguridad y
                          continuidad operativa.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="trust-note">
                    Web Master "Libélula" copyright © 2024. Todos los derechos reservados.
                  </p>
                </div>
              </div>

              <form
                className="contact-form"
                action="https://formsubmit.co/ascensoreshuemul@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Nueva consulta comercial - Huemul Ascensores"
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="true"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                <div className="form-row">
                  <label>
                    Nombre

                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre completo o empresa"
                      required
                    />
                  </label>

                  <label>
                    Teléfono

                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Número de contacto"
                      required
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Email

                    <input
                      type="email"
                      name="email"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </label>
                </div>

                <div className="form-row full-width">
                  <label>
                    Mensaje o consulta

                    <textarea
                      name="mensaje"
                      rows="4"
                      placeholder="Detalle la necesidad de su consorcio o proyecto..."
                      required
                    ></textarea>
                  </label>
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  Solicitar asesoramiento
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href={whatsappUrgencias}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <IconWhatsApp />
      </a>
    </div>
  );
}

export default App;