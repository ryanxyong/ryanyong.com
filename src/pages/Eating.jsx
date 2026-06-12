import { intro, places } from '../data/eating'

export default function Eating() {
  return (
    <div className="page section">
      <p className="eyebrow">Eating</p>
      <h1 className="page-title serif">Where I’m eating</h1>
      <p className="page-intro">{intro}</p>
      {places.map((p) => (
        <div className="eat-item" key={p.name}>
          <div className="eat-head">
            <h2 className="eat-name">{p.name}</h2>
            <span className="eat-area">{p.area}</span>
          </div>
          <p className="eat-note">{p.note}</p>
        </div>
      ))}
    </div>
  )
}
