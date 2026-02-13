import { useState } from 'react';

const floorPlanImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
  'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80',
];

export default function FloorPlans({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  if (!data) return null;

  const activePlan = data.plans && data.plans[activeTab];

  return (
    <section className="floor-plans reveal reveal-delay-4" id="floor-plans">
      <h2>{data.title || 'Floor Plans'}</h2>
      <div className="section-decorator"><span>◇</span></div>
      <div className="floor-plans-container">
        <div className="floor-plan-image">
          <img
            src={floorPlanImages[activeImage]}
            alt="Floor Plan"
          />
        </div>
        <div className="floor-plan-details">
          <div className="floor-plan-tabs">
            {data.plans && data.plans.map((plan, idx) => (
              <button
                key={idx}
                className={activeTab === idx ? 'active' : ''}
                onClick={() => setActiveTab(idx)}
              >
                {plan.type}
              </button>
            ))}
          </div>
          {activePlan && (
            <div className="floor-plan-info">
              <p><span className="label">Type</span> {activePlan.type}</p>
              <p><span className="label">Area</span> {activePlan.area}</p>
              <p><span className="label">Price</span> {activePlan.price}</p>
            </div>
          )}
          <button className="btn-download-floor">{data.buttonText}</button>
          <div className="floor-thumbs">
            {floorPlanImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx + 1}`}
                className={activeImage === idx ? 'active' : ''}
                onClick={() => setActiveImage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
