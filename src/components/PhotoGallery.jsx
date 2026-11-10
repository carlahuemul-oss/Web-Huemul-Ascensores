import { useEffect, useRef, useState } from "react";
import photos from "./galleryData.json";

const imageFiles = import.meta.glob("../assets/galeria/carrusel/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});
const images = Object.fromEntries(
  Object.entries(imageFiles).map(([path, url]) => [path.split("/").pop(), url]),
);
const categories = ["Todos", ...new Set(photos.map((photo) => photo.category))];

export default function PhotoGallery() {
  const [category, setCategory] = useState("Todos");
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);
  const visible = category === "Todos" ? photos : photos.filter((photo) => photo.category === category);
  const photo = visible[index] || visible[0];
  const imageUrl = images[photo.image.split("/").pop()];

  function show(next) {
    setIndex((next + visible.length) % visible.length);
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (!event.target.closest?.(".photo-gallery")) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        show(index + (event.key === "ArrowRight" ? 1 : -1));
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="photo-gallery" aria-label="Carrusel de trabajos de Huemul">
      <p className="section-eyebrow">CARRUSEL FOTOGRÁFICO</p>
      <div className="gallery-filters" aria-label="Filtrar trabajos">
        {categories.map((name) => (
          <button key={name} type="button" className={name === category ? "active" : ""}
            aria-pressed={name === category} onClick={() => { setCategory(name); setIndex(0); }}>
            {name}
          </button>
        ))}
      </div>
      <div className="gallery-carousel">
        <div className="gallery-stage" onTouchStart={(event) => { touchStart.current = event.changedTouches[0].screenX; }}
          onTouchEnd={(event) => { if (touchStart.current === null) return; const delta = event.changedTouches[0].screenX - touchStart.current; if (Math.abs(delta) > 45) show(index + (delta < 0 ? 1 : -1)); touchStart.current = null; }}>
          <img src={imageUrl} alt={photo.description} />
          <button className="gallery-arrow gallery-prev" type="button" aria-label="Foto anterior" onClick={() => show(index - 1)}>‹</button>
          <button className="gallery-arrow gallery-next" type="button" aria-label="Foto siguiente" onClick={() => show(index + 1)}>›</button>
        </div>
        <div className="gallery-progress"><span style={{ width: `${((index + 1) / visible.length) * 100}%` }} /></div>
        <div className="gallery-caption">
          <div><h3>{photo.title}</h3><p>{photo.description}</p></div>
          <div className="gallery-caption-side"><span className="gallery-phase">{photo.phase}</span>
            <div><a href={imageUrl} target="_blank" rel="noreferrer">Ver foto completa ↗</a><span aria-live="polite">{index + 1} / {visible.length}</span></div>
          </div>
        </div>
      </div>
      <div className="gallery-thumbs" aria-label="Elegir fotografía">
        {visible.map((item, itemIndex) => <button key={item.id} type="button" className={itemIndex === index ? "active" : ""}
          aria-label={`Ver foto ${itemIndex + 1}: ${item.title}`} aria-current={itemIndex === index ? "true" : undefined}
          onClick={() => setIndex(itemIndex)}><img src={images[item.image.split("/").pop()]} alt="" loading="lazy" /></button>)}
      </div>
    </div>
  );
}
