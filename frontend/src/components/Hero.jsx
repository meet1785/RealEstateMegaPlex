import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section className="hero reveal" id="hero">
      <div className="hero-left">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80"
          alt="Luxury Apartment"
        />
        <div className="hero-badge">
          {data.subtitle1} &bull; {data.subtitle2}
        </div>
      </div>
      <div className="hero-right">
        <p className="hero-tagline">{data.tagline}</p>
        <div className="hero-subtitles">
          <span>{data.subtitle1}</span>
          <span>{data.subtitle2}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, animation: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both' }}>
          <div className="navbar-logo-mark" style={{ width: 48, height: 48, fontSize: '1.4rem', flexShrink: 0 }}>V</div>
          <div className="hero-project-name">{data.projectName}</div>
        </div>

        <div className="hero-diamond">◇ ◇ ◇</div>
        <div className="hero-divider"></div>

        <div className="hero-pricing">
          <div className="hero-price-card">
            <div className="type">{data.smart1bhk}</div>
            <div className="old-price">{data.smart1bhkOldPrice}</div>
            <div className="new-price"><span className="rupee">₹</span>{data.smart1bhkNewPrice}</div>
            <div className="onwards">— onwards —</div>
          </div>
          <div className="hero-price-card">
            <div className="type">{data.premium2bhk}</div>
            <div className="old-price">{data.premium2bhkOldPrice}</div>
            <div className="new-price"><span className="rupee">₹</span>{data.premium2bhkNewPrice}</div>
            <div className="onwards">— onwards —</div>
          </div>
        </div>

        <div className="hero-location">
          <FaMapMarkerAlt className="pin" />
          <span>{data.location}</span>
        </div>
      </div>
    </section>
  );
}
