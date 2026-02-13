const constructionImages = [
  'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=900&q=80',
  'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=900&q=80',
  'https://images.unsplash.com/photo-1604014056132-223a9f0d0a13?w=900&q=80',
];

export default function Construction({ data }) {
  if (!data) return null;

  return (
    <section className="construction reveal reveal-delay-2" id="construction">
      <h2>{data.title}</h2>
      <div className="construction-grid">
        {data.updates && data.updates.map((update, idx) => (
          <div className="construction-card" key={idx}>
            <img src={constructionImages[idx % constructionImages.length]} alt={update.label} />
            <div className="card-label">
              <h4>{update.label}</h4>
              <p>{update.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
