import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE from '../api';

const SECTION_LABELS = {
  hero: 'Hero Section',
  about: 'About Project',
  amenities: 'Amenities',
  connectivity: 'Nearby Connectivity',
  floorPlans: 'Floor Plans',
  buildings: 'Explore Buildings',
  developer: 'About Developer',
  construction: 'Construction Updates',
  faq: 'FAQ',
  contact: 'Contact Info',
};

export default function AdminPanel() {
  const [sections, setSections] = useState({});
  const [activeTab, setActiveTab] = useState('hero');
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn');
    if (!loggedIn) {
      navigate('/admin');
      return;
    }
    fetchSections();
  }, [navigate]);

  const fetchSections = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/sections`);
      setSections(res.data);
      setLoading(false);
    } catch {
      // Set default data if API fails
      setSections({
        hero: { tagline: "Default Hero" },
        about: { title: "About" },
        amenities: { title: "Amenities" },
        connectivity: { title: "Connectivity" },
        floorPlans: { title: "Floor Plans" },
        buildings: { title: "Buildings" },
        developer: { title: "Developer" },
        construction: { title: "Construction" },
        faq: { title: "FAQ" },
        contact: { title: "Contact" }
      });
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminEmail');
    navigate('/admin');
  };

  const handleSave = async (key) => {
    setSaving(true);
    setSaveMsg('');
    try {
      await axios.put(`${API_BASE}/api/sections/${key}`, { content: sections[key] });
      setSaveMsg('Saved successfully!');
      setTimeout(() => setSaveMsg(''), 3000);
    } catch {
      setSaveMsg('Error saving. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const updateField = (sectionKey, field, value) => {
    setSections(prev => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        [field]: value,
      },
    }));
  };

  const updateArrayItem = (sectionKey, arrayField, idx, field, value) => {
    setSections(prev => {
      const arr = [...prev[sectionKey][arrayField]];
      arr[idx] = { ...arr[idx], [field]: value };
      return {
        ...prev,
        [sectionKey]: {
          ...prev[sectionKey],
          [arrayField]: arr,
        },
      };
    });
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading...</p>
      </div>
    );
  }

  const data = sections[activeTab];

  const renderFields = () => {
    if (!data) return <p>No data for this section.</p>;

    switch (activeTab) {
      case 'hero':
        return (
          <>
            <Field label="Tagline" value={data.tagline} onChange={v => updateField('hero', 'tagline', v)} />
            <Field label="Subtitle 1" value={data.subtitle1} onChange={v => updateField('hero', 'subtitle1', v)} />
            <Field label="Subtitle 2" value={data.subtitle2} onChange={v => updateField('hero', 'subtitle2', v)} />
            <Field label="Project Name" value={data.projectName} onChange={v => updateField('hero', 'projectName', v)} />
            <Field label="Smart 1BHK Label" value={data.smart1bhk} onChange={v => updateField('hero', 'smart1bhk', v)} />
            <Field label="Smart 1BHK Old Price" value={data.smart1bhkOldPrice} onChange={v => updateField('hero', 'smart1bhkOldPrice', v)} />
            <Field label="Smart 1BHK New Price" value={data.smart1bhkNewPrice} onChange={v => updateField('hero', 'smart1bhkNewPrice', v)} />
            <Field label="Premium 2BHK Label" value={data.premium2bhk} onChange={v => updateField('hero', 'premium2bhk', v)} />
            <Field label="Premium 2BHK Old Price" value={data.premium2bhkOldPrice} onChange={v => updateField('hero', 'premium2bhkOldPrice', v)} />
            <Field label="Premium 2BHK New Price" value={data.premium2bhkNewPrice} onChange={v => updateField('hero', 'premium2bhkNewPrice', v)} />
            <Field label="Location" value={data.location} onChange={v => updateField('hero', 'location', v)} textarea />
          </>
        );
      case 'about':
        return (
          <>
            <Field label="Title" value={data.title} onChange={v => updateField('about', 'title', v)} />
            <Field label="Description" value={data.description} onChange={v => updateField('about', 'description', v)} textarea />
            <Field label="Quote" value={data.quote} onChange={v => updateField('about', 'quote', v)} textarea />
            <Field label="Button Text" value={data.buttonText} onChange={v => updateField('about', 'buttonText', v)} />
          </>
        );
      case 'amenities':
        return (
          <>
            <Field label="Title" value={data.title} onChange={v => updateField('amenities', 'title', v)} />
            <Field label="Subtitle" value={data.subtitle} onChange={v => updateField('amenities', 'subtitle', v)} textarea />
            <Field label="Button Text" value={data.buttonText} onChange={v => updateField('amenities', 'buttonText', v)} />
            <h4 style={{ margin: '16px 0 8px', color: 'var(--accent-brass)', fontFamily: 'var(--font-display)', fontWeight: 400 }}>Amenity Items</h4>
            {data.items && data.items.map((item, idx) => (
              <div className="admin-array-item" key={idx}>
                <h5>Item {idx + 1}</h5>
                <Field label="Name" value={item.name} onChange={v => updateArrayItem('amenities', 'items', idx, 'name', v)} />
              </div>
            ))}
          </>
        );
      case 'connectivity':
        return (
          <>
            <Field label="Title" value={data.title} onChange={v => updateField('connectivity', 'title', v)} />
            <Field label="Description" value={data.description} onChange={v => updateField('connectivity', 'description', v)} textarea />
            <h4 style={{ margin: '16px 0 8px', color: 'var(--accent-brass)', fontFamily: 'var(--font-display)', fontWeight: 400 }}>Connectivity Items</h4>
            {data.items && data.items.map((item, idx) => (
              <div className="admin-array-item" key={idx}>
                <h5>Item {idx + 1}</h5>
                <Field label="Place" value={item.place} onChange={v => updateArrayItem('connectivity', 'items', idx, 'place', v)} />
                <Field label="Distance" value={item.distance} onChange={v => updateArrayItem('connectivity', 'items', idx, 'distance', v)} />
              </div>
            ))}
          </>
        );
      case 'floorPlans':
        return (
          <>
            <Field label="Button Text" value={data.buttonText} onChange={v => updateField('floorPlans', 'buttonText', v)} />
            <h4 style={{ margin: '16px 0 8px', color: 'var(--accent-brass)', fontFamily: 'var(--font-display)', fontWeight: 400 }}>Floor Plans</h4>
            {data.plans && data.plans.map((plan, idx) => (
              <div className="admin-array-item" key={idx}>
                <h5>Plan {idx + 1}</h5>
                <Field label="Type" value={plan.type} onChange={v => updateArrayItem('floorPlans', 'plans', idx, 'type', v)} />
                <Field label="Area" value={plan.area} onChange={v => updateArrayItem('floorPlans', 'plans', idx, 'area', v)} />
                <Field label="Price" value={plan.price} onChange={v => updateArrayItem('floorPlans', 'plans', idx, 'price', v)} />
              </div>
            ))}
          </>
        );
      case 'buildings':
        return (
          <>
            <Field label="Title" value={data.title} onChange={v => updateField('buildings', 'title', v)} />
            <h4 style={{ margin: '16px 0 8px', color: 'var(--accent-brass)', fontFamily: 'var(--font-display)', fontWeight: 400 }}>Building Items</h4>
            {data.items && data.items.map((item, idx) => (
              <div className="admin-array-item" key={idx}>
                <h5>Building {idx + 1}</h5>
                <Field label="Name" value={item.name} onChange={v => updateArrayItem('buildings', 'items', idx, 'name', v)} />
                <Field label="Tag" value={item.tag} onChange={v => updateArrayItem('buildings', 'items', idx, 'tag', v)} />
              </div>
            ))}
          </>
        );
      case 'developer':
        return (
          <>
            <Field label="Title" value={data.title} onChange={v => updateField('developer', 'title', v)} />
            <Field label="Description" value={data.description} onChange={v => updateField('developer', 'description', v)} textarea />
            <h4 style={{ margin: '16px 0 8px', color: 'var(--accent-brass)', fontFamily: 'var(--font-display)', fontWeight: 400 }}>Stats</h4>
            {data.stats && data.stats.map((stat, idx) => (
              <div className="admin-array-item" key={idx}>
                <h5>Stat {idx + 1}</h5>
                <Field label="Value" value={stat.value} onChange={v => updateArrayItem('developer', 'stats', idx, 'value', v)} />
                <Field label="Label" value={stat.label} onChange={v => updateArrayItem('developer', 'stats', idx, 'label', v)} />
              </div>
            ))}
          </>
        );
      case 'construction':
        return (
          <>
            <Field label="Title" value={data.title} onChange={v => updateField('construction', 'title', v)} />
            <h4 style={{ margin: '16px 0 8px', color: 'var(--accent-brass)', fontFamily: 'var(--font-display)', fontWeight: 400 }}>Updates</h4>
            {data.updates && data.updates.map((update, idx) => (
              <div className="admin-array-item" key={idx}>
                <h5>Update {idx + 1}</h5>
                <Field label="Label" value={update.label} onChange={v => updateArrayItem('construction', 'updates', idx, 'label', v)} />
                <Field label="Description" value={update.description} onChange={v => updateArrayItem('construction', 'updates', idx, 'description', v)} />
              </div>
            ))}
          </>
        );
      case 'faq':
        return (
          <>
            <Field label="Title" value={data.title} onChange={v => updateField('faq', 'title', v)} />
            <h4 style={{ margin: '16px 0 8px', color: 'var(--accent-brass)', fontFamily: 'var(--font-display)', fontWeight: 400 }}>FAQ Items</h4>
            {data.items && data.items.map((item, idx) => (
              <div className="admin-array-item" key={idx}>
                <h5>FAQ {idx + 1}</h5>
                <Field label="Question" value={item.question} onChange={v => updateArrayItem('faq', 'items', idx, 'question', v)} textarea />
                <Field label="Answer" value={item.answer} onChange={v => updateArrayItem('faq', 'items', idx, 'answer', v)} textarea />
              </div>
            ))}
          </>
        );
      case 'contact':
        return (
          <>
            <Field label="Title" value={data.title} onChange={v => updateField('contact', 'title', v)} />
            <Field label="Phone" value={data.phone} onChange={v => updateField('contact', 'phone', v)} />
            <Field label="Email" value={data.email} onChange={v => updateField('contact', 'email', v)} />
            <Field label="Address" value={data.address} onChange={v => updateField('contact', 'address', v)} textarea />
          </>
        );
      default:
        return <p>Select a section to edit.</p>;
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>admin@gmail.com</span>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="admin-body">
        <div className="admin-tabs">
          {Object.keys(SECTION_LABELS).map(key => (
            <button
              key={key}
              className={activeTab === key ? 'active' : ''}
              onClick={() => { setActiveTab(key); setSaveMsg(''); }}
            >
              {SECTION_LABELS[key]}
            </button>
          ))}
        </div>

        <div className="admin-section">
          <h3>{SECTION_LABELS[activeTab]}</h3>
          {renderFields()}
          <div style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}>
            <button className="btn-save" onClick={() => handleSave(activeTab)} disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            {saveMsg && <span className="save-success">{saveMsg}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, textarea }) {
  return (
    <div className="admin-field">
      <label>{label}</label>
      {textarea ? (
        <textarea
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
        />
      ) : (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
