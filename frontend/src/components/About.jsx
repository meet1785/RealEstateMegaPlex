export default function About({ data }) {
  if (!data) return null;

  return (
    <section className="about reveal reveal-delay-1" id="about">
      <div className="about-images">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80"
          alt="Project 1"
        />
        <img
          src="https://images.unsplash.com/photo-1560185008-b033106af5c3?w=900&q=80"
          alt="Project 2"
        />
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80"
          alt="Project 3"
        />
      </div>
      <div className="about-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p className="quote">{data.quote}</p>
        <button className="btn-brochure">{data.buttonText}</button>
      </div>
    </section>
  );
}
