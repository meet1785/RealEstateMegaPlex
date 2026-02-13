import { useState } from 'react';

export default function FAQ({ data }) {
  const [openIdx, setOpenIdx] = useState(null);

  if (!data) return null;

  return (
    <section className="faq reveal reveal-delay-3" id="faq">
      <h2>{data.title}</h2>
      <div className="faq-list">
        {data.items && data.items.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <div
              className="faq-question"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span>{item.question}</span>
              <span className={`icon ${openIdx === idx ? 'open' : ''}`}>+</span>
            </div>
            <div className={`faq-answer ${openIdx === idx ? 'open' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
