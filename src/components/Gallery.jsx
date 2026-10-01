import { useEffect, useRef, useState } from 'react'

// Renders a photo grid. Shows a clean placeholder for any item without a src,
// so the layout looks intentional before real images are added.
// Clicking a real photo opens it uncropped in a lightbox built on the native
// <dialog> element (Esc, focus handling, and the backdrop come for free).

export default function Gallery({ items }) {
  const viewable = items.filter((p) => p.src)
  const [index, setIndex] = useState(null)
  const dialogRef = useRef(null)
  const returnFocusRef = useRef(null)
  const touchRef = useRef(null)

  const current = index === null ? null : viewable[index]
  const count = viewable.length

  useEffect(() => {
    const dialog = dialogRef.current
    if (current && dialog && !dialog.open) dialog.showModal()
  }, [current])

  function open(photo, trigger) {
    returnFocusRef.current = trigger
    setIndex(viewable.indexOf(photo))
  }
  const close = () => dialogRef.current?.close()
  const step = (delta) => setIndex((i) => (i + delta + count) % count)

  function handleClose() {
    setIndex(null)
    returnFocusRef.current?.focus()
  }

  function handleKeyDown(e) {
    if (count < 2) return
    if (e.key === 'ArrowRight') step(1)
    if (e.key === 'ArrowLeft') step(-1)
  }

  // Clicking empty space around the photo closes the viewer.
  function handleClick(e) {
    if (e.target === e.currentTarget || e.target.dataset.dismiss) close()
  }

  // Horizontal swipe on touch screens. Multi-finger touches (pinch zoom) are ignored.
  function handleTouchStart(e) {
    const t = e.touches[0]
    touchRef.current = e.touches.length === 1 ? { x: t.clientX, y: t.clientY } : null
  }
  function handleTouchEnd(e) {
    const start = touchRef.current
    touchRef.current = null
    if (!start || count < 2) return
    const t = e.changedTouches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1)
  }

  return (
    <>
      <div className="gallery">
        {items.map((photo) => (
          <figure className="gallery-figure" key={photo.id}>
            {photo.src ? (
              <button
                type="button"
                className="frame frame-button"
                aria-haspopup="dialog"
                onClick={(e) => open(photo, e.currentTarget)}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </button>
            ) : (
              <span className="frame placeholder" role="img" aria-label={photo.alt}>
                {photo.caption}
              </span>
            )}
            {photo.caption && <figcaption className="frame-caption">{photo.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={handleClose}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {current && (
          <>
            <div className="lightbox-top">
              <button type="button" className="lightbox-button" onClick={close}>
                Close
              </button>
            </div>
            <div className="lightbox-stage" data-dismiss="true">
              <img src={current.src} alt={current.alt} />
            </div>
            <div className="lightbox-bar">
              <p className="lightbox-caption" aria-live="polite">{current.caption}</p>
              {count > 1 && (
                <div className="lightbox-nav">
                  <button type="button" className="lightbox-button" aria-label="Previous photo" onClick={() => step(-1)}>
                    ←
                  </button>
                  <span className="lightbox-count">{index + 1} / {count}</span>
                  <button type="button" className="lightbox-button" aria-label="Next photo" onClick={() => step(1)}>
                    →
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  )
}
