import './SectionHeading.css'

function SectionHeading({ number, eyebrow, title, intro, className = '' }) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <div>
        <p className="eyebrow"><span className="eyebrow-mark">{number}</span> {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="section-intro-copy">{intro}</p>
    </div>
  )
}

export default SectionHeading
