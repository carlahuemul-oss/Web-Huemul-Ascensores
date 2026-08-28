import heroImg from "../assets/hero-huemul.jpg";

export default function Hero() {
  const llamarUrgencias = () => {
    window.location.href = "tel:+5493512700691";
  };

  return (
    <section id="inicio" className="hero">
      <img
        src={heroImg}
        alt="Ascensores Huemul"
        className="hero-image"
      />

      <div className="hero-shade"></div>

      <div className="hero-content">
        <button
          className="hero-emergency"
          onClick={llamarUrgencias}
        >
          <span className="button-icon">☎</span>
          Emergencias 24/7
        </button>
      </div>
    </section>
  );
}