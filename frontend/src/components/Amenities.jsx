import { FaDumbbell, FaChild, FaRunning, FaSpa } from 'react-icons/fa';
import { MdSportsTennis } from 'react-icons/md';
import { GiMeditation } from 'react-icons/gi';

const iconMap = {
  gymnasium: <FaDumbbell />,
  kidsplay: <FaChild />,
  kidsplay2: <MdSportsTennis />,
  jogging: <FaRunning />,
  yoga: <GiMeditation />,
  yoga2: <FaSpa />,
};

export default function Amenities({ data }) {
  if (!data) return null;

  return (
    <section className="amenities reveal reveal-delay-2" id="amenities">
      <h2>{data.title}</h2>
      <p className="subtitle">{data.subtitle}</p>
      <div className="amenities-content">
        <div className="amenities-image">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
            alt="Amenities"
          />
        </div>
        <div className="amenities-grid">
          {data.items && data.items.map((item, idx) => (
            <div className="amenity-item" key={idx}>
              <div className="amenity-icon">
                {iconMap[item.icon] || <FaSpa />}
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="btn-view">{data.buttonText}</button>
    </section>
  );
}
