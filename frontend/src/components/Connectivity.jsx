export default function Connectivity({ data }) {
  if (!data) return null;

  return (
    <section className="connectivity reveal reveal-delay-5" id="connectivity">
      <h2>{data.title}</h2>
      <p className="subtitle">{data.description}</p>
      <div className="connectivity-grid">
        {data.items && data.items.map((item, idx) => (
          <div className="connectivity-item" key={idx}>
            <span className="place">{item.place}</span>
            <span className="distance">{item.distance}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
