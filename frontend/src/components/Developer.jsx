export default function Developer({ data }) {
  if (!data) return null;

  return (
    <section className="developer reveal reveal-delay-6" id="developer">
      <h2>{data.title}</h2>
      <p className="description">{data.description}</p>
      <div className="developer-stats">
        {data.stats && data.stats.map((stat, idx) => (
          <div className="stat-item" key={idx}>
            <div className="value">{stat.value}</div>
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="developer-images">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
          alt="Developer Project 1"
        />
        <img
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=900&q=80"
          alt="Developer Project 2"
        />
        <img
          src="https://images.unsplash.com/photo-1464146072230-91cabc968266?w=900&q=80"
          alt="Developer Project 3"
        />
      </div>
    </section>
  );
}
