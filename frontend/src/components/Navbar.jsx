import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: '0 4px 30px rgba(0,0,0,0.3)' } : {}}>
      <div className="navbar-logo">
        <div className="navbar-logo-mark">V</div>
        <span>Vighnaharta</span>
      </div>
      <ul className={`navbar-links ${open ? 'open' : ''}`}>
        <li><a onClick={() => scrollTo('hero')}>Home</a></li>
        <li><a onClick={() => scrollTo('about')}>Overview</a></li>
        <li><a onClick={() => scrollTo('amenities')}>Amenities</a></li>
        <li><a onClick={() => scrollTo('floor-plans')}>Floor Plans</a></li>
        <li><a onClick={() => scrollTo('connectivity')}>Location</a></li>
        <li><a onClick={() => scrollTo('developer')}>Developer</a></li>
        <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
      </ul>
      <button className="navbar-enquiry" onClick={() => scrollTo('contact')}>Enquire</button>
      <button className="navbar-hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
