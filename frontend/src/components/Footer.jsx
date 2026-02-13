import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer({ data }) {
  if (!data) return null;

  return (
    <footer className="footer reveal reveal-delay-4" id="contact">
      <div className="footer-content">
        <div className="footer-col">
          <h4>Vighnaharta Group</h4>
          <p>Building dreams into reality with quality construction and modern amenities.</p>
        </div>
        <div className="footer-col">
          <h4>{data.title}</h4>
          <p><FaPhone style={{ marginRight: 8 }} />{data.phone}</p>
          <p><FaEnvelope style={{ marginRight: 8 }} />{data.email}</p>
        </div>
        <div className="footer-col">
          <h4>Address</h4>
          <p><FaMapMarkerAlt style={{ marginRight: 8 }} />{data.address}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Vighnaharta Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
