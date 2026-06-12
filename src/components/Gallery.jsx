// Renders a photo grid. Shows a clean placeholder for any item without a src,
// so the layout looks intentional before real images are added.

export default function Gallery({ items }) {
  return (
    <div className="gallery">
      {items.map((photo) => (
        <figure className="gallery-figure" key={photo.id}>
          {photo.src ? (
            <span className="frame">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </span>
          ) : (
            <span className="frame placeholder" role="img" aria-label={photo.alt}>
              {photo.caption}
            </span>
          )}
          {photo.caption && <figcaption className="frame-caption">{photo.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}
