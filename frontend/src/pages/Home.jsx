import { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE from '../api';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Amenities from '../components/Amenities';
import Buildings from '../components/Buildings';
import FloorPlans from '../components/FloorPlans';
import VideoSection from '../components/VideoSection';
import Connectivity from '../components/Connectivity';
import Developer from '../components/Developer';
import Construction from '../components/Construction';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  const [sections, setSections] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE}/api/sections`)
      .then(res => {
        setSections(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load data:', err);
        // Set default data if API fails
        setSections({
          hero: {
            tagline: "THINKING OF A FANTASTIC VICINITY?",
            subtitle1: "20+ PODIUM LUXURIOUS AMENITIES",
            subtitle2: "SPACIOUS BALCONY HOMES",
            projectName: "VIGHNAHARTA INFINITY",
            smart1bhk: "SMART 1 BHK",
            smart1bhkOldPrice: "74.99 Lacs",
            smart1bhkNewPrice: "69.99 Lacs*",
            premium2bhk: "PREMIUM 2 BHK",
            premium2bhkOldPrice: "1.05 CR",
            premium2bhkNewPrice: "96.99 Lacs*",
            location: "BLDG. NO. 223/224, CIRCLE KANNAMWAR NAGAR 1, VIKHROLI (EAST)"
          },
          about: {
            title: "About Project",
            description: "At Vighnaharta Enclave, every detail reflects the greatest gesture of life in the most authentic and desirable home.",
            quote: "\"The moment I entered the house, it felt welcomed\"",
            buttonText: "Download Brochure"
          },
          amenities: {
            title: "Amenities",
            subtitle: "Thoughtfully crafted surroundings",
            items: [
              { name: "Gymnasium", icon: "gymnasium" },
              { name: "Kids Play Area", icon: "kidsplay" }
            ],
            buttonText: "View more"
          },
          buildings: {
            title: "Explore More Buildings",
            items: [
              { name: "Vighnaharta Aaradhana" },
              { name: "Vighnaharta Enclave", tag: "Newly Launched" }
            ]
          },
          floorPlans: {
            title: "Floor Plans",
            plans: [
              { type: "1 BHK", area: "385-411 Sq.ft", price: "Click for price" }
            ],
            buttonText: "Download Floor File"
          },
          connectivity: {
            title: "Nearby Connectivity",
            description: "Strategically located",
            items: [
              { place: "Vikhroli Railway Station", distance: "1.2 km" }
            ]
          },
          developer: {
            title: "About Developer",
            description: "Vighnaharta Group has been a trusted name",
            stats: [
              { value: "6", label: "Projects" }
            ]
          },
          construction: {
            title: "Construction Updates",
            updates: [
              { label: "Foundation Work", description: "In progress" }
            ]
          },
          faq: {
            title: "Frequently Asked Questions",
            items: [
              { question: "What makes Vighnaharta Group a trusted name?", answer: "Proven track record" }
            ]
          },
          contact: {
            title: "Contact Us",
            phone: "+91 98765 43210",
            email: "info@vighnaharta.com",
            address: "BLDG. NO. 223/224, CIRCLE KANNAMWAR NAGAR 1, VIKHROLI (EAST)"
          }
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#0a0a0c',
        gap: 24
      }}>
        <div style={{
          width: 48,
          height: 48,
          background: 'linear-gradient(135deg, #c8a44e, #dfc275)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0a0a0c',
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: '1.4rem',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          animation: 'spin 3s linear infinite'
        }}>V</div>
        <p style={{
          color: '#c8a44e',
          fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
          fontSize: '0.8rem',
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}>Loading</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero data={sections.hero} />
      <About data={sections.about} />
      <Amenities data={sections.amenities} />
      <Buildings data={sections.buildings} />
      <FloorPlans data={sections.floorPlans} />
      <VideoSection />
      <Connectivity data={sections.connectivity} />
      <Developer data={sections.developer} />
      <Construction data={sections.construction} />
      <FAQ data={sections.faq} />
      <Footer data={sections.contact} />
    </div>
  );
}
