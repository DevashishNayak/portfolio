import { journey } from "@/content/projects";

export function Journey() {
  return (
    <section className="journey-section">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / A little history</span>
            <h2>
              Where I&apos;ve
              <br />
              <em>been.</em>
            </h2>
          </div>
        </div>
        <div className="timeline">
          {journey.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span>{item.dates}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <span className="timeline-place">{item.place}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
