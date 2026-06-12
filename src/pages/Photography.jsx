import { intro, photos } from '../data/photos'
import Gallery from '../components/Gallery'

export default function Photography() {
  return (
    <div className="page section">
      <p className="eyebrow">Photography</p>
      <h1 className="page-title serif">Photographs</h1>
      <p className="page-intro">{intro}</p>
      <Gallery items={photos} />
    </div>
  )
}
