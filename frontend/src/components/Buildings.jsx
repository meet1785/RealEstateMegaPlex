import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const buildingImages = [
  'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1200&q=80',
  'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80',
];

export default function Buildings({ data }) {
  const carouselRef = useRef(null);
  const dragStateRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  if (!data) return null;

  const scroll = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    const onWheel = (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        node.scrollBy({ left: event.deltaY, behavior: 'auto' });
      }
    };

    node.addEventListener('wheel', onWheel, { passive: false });
    return () => node.removeEventListener('wheel', onWheel);
  }, []);

  const onMouseDown = (event) => {
    if (!carouselRef.current) return;
    dragStateRef.current = {
      isDown: true,
      startX: event.pageX - carouselRef.current.offsetLeft,
      scrollLeft: carouselRef.current.scrollLeft,
    };
    setIsDragging(true);
  };

  const onMouseLeave = () => {
    dragStateRef.current.isDown = false;
    setIsDragging(false);
  };

  const onMouseUp = () => {
    dragStateRef.current.isDown = false;
    setIsDragging(false);
  };

  const onMouseMove = (event) => {
    if (!dragStateRef.current.isDown || !carouselRef.current) return;
    event.preventDefault();
    const x = event.pageX - carouselRef.current.offsetLeft;
    const walk = (x - dragStateRef.current.startX) * 1.3;
    carouselRef.current.scrollLeft = dragStateRef.current.scrollLeft - walk;
  };

  return (
    <section className="buildings reveal reveal-delay-3" id="buildings">
      <h2>{data.title}</h2>
      <div
        className={`buildings-carousel ${isDragging ? 'is-dragging' : ''}`}
        ref={carouselRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {data.items && data.items.map((item, idx) => (
          <div className={`building-card ${isDragging ? 'dragging' : ''}`} key={idx}>
            <img src={buildingImages[idx % buildingImages.length]} alt={item.name} />
            <div className="card-info">
              {item.tag && <span className="card-tag">{item.tag}</span>}
              <div className="card-name">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button onClick={() => scroll(-1)}><FaChevronLeft /></button>
        <button onClick={() => scroll(1)}><FaChevronRight /></button>
      </div>
    </section>
  );
}
