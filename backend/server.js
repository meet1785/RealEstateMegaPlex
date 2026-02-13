const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const bcryptjs = require('bcryptjs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const db = new Database(path.join(__dirname, 'database.sqlite'));
db.pragma('journal_mode = WAL');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    section_key TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL
  );
`);

// Seed admin user
const adminExists = db.prepare('SELECT * FROM admins WHERE email = ?').get('admin@gmail.com');
if (!adminExists) {
  const hash = bcryptjs.hashSync('1234', 10);
  db.prepare('INSERT INTO admins (email, password) VALUES (?, ?)').run('admin@gmail.com', hash);
  console.log('Admin user seeded');
}

// Seed default section content
const defaultSections = {
  hero: JSON.stringify({
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
  }),
  about: JSON.stringify({
    title: "About Project",
    description: "At Vighnaharta Enclave, every detail reflects the greatest gesture of life in the most authentic and desirable home. Guided by a humanist approach where comfort, design and purpose are at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, gathering, and belonging.",
    quote: "\"The moment I entered the house, it felt welcomed\" – this feeling defines the privilege Vighnaharta Enclave offers. Thoughtfully designed with crafted amenities and timeless choices, this space resonates with the warmth and authenticity that you and your family truly deserve. It's the place your soul has long been searching for.",
    buttonText: "Download Brochure"
  }),
  amenities: JSON.stringify({
    title: "Amenities",
    subtitle: "Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.",
    items: [
      { name: "Gymnasium", icon: "gymnasium" },
      { name: "Kids Play Area", icon: "kidsplay" },
      { name: "Kids Play Area", icon: "kidsplay2" },
      { name: "Jogging Track", icon: "jogging" },
      { name: "Yoga Deck", icon: "yoga" },
      { name: "Yoga Deck", icon: "yoga2" }
    ],
    buttonText: "View more"
  }),
  connectivity: JSON.stringify({
    title: "Nearby Connectivity",
    description: "Strategically located with excellent connectivity to key landmarks, transportation hubs, and daily conveniences.",
    items: [
      { place: "Vikhroli Railway Station", distance: "1.2 km" },
      { place: "Eastern Express Highway", distance: "0.5 km" },
      { place: "LBS Marg", distance: "2.0 km" },
      { place: "Godrej Memorial Hospital", distance: "1.5 km" },
      { place: "R-City Mall", distance: "3.0 km" },
      { place: "IIT Bombay", distance: "4.5 km" }
    ]
  }),
  floorPlans: JSON.stringify({
    title: "Floor Plans",
    plans: [
      { type: "1 BHK", area: "385-411 RERA Sq.ft", price: "Click for price" },
      { type: "2 BHK", area: "520-560 RERA Sq.ft", price: "Click for price" },
      { type: "1.5 BHK", area: "450-480 RERA Sq.ft", price: "Click for price" }
    ],
    buttonText: "Download Floor File"
  }),
  buildings: JSON.stringify({
    title: "Explore More Buildings in the Township",
    items: [
      { name: "Vighnaharta Aaradhana", tag: "" },
      { name: "Vighnaharta Enclave", tag: "Newly Launched" },
      { name: "Vighnaharta Infinity", tag: "Newly Launched" }
    ]
  }),
  developer: JSON.stringify({
    title: "About Developer",
    description: "Vighnaharta Group has been a trusted name in real estate, delivering quality homes that combine modern living with thoughtful design. With a strong portfolio of residential projects, the group is committed to creating spaces that enhance lifestyle and community living.",
    stats: [
      { value: "6", label: "Projects" },
      { value: "1.32 LAC", label: "Sq.ft Delivered" },
      { value: "449+", label: "Happy Families" },
      { value: "5.77 LAC", label: "Sq.ft Ongoing" },
      { value: "2.7 LAC", label: "Sq.ft Upcoming" }
    ]
  }),
  construction: JSON.stringify({
    title: "Construction Updates",
    updates: [
      { label: "Foundation Work", description: "Foundation and structural work in progress" },
      { label: "Structure Progress", description: "Building structure taking shape" },
      { label: "Exterior Development", description: "Exterior finishing and cladding work" }
    ]
  }),
  faq: JSON.stringify({
    title: "Frequently Asked Questions",
    items: [
      { question: "What makes Vighnaharta Group a trusted name in real estate in Vikhroli?", answer: "Vighnaharta Group has a proven track record of delivering quality residential projects in Vikhroli, with a focus on modern amenities, excellent connectivity, and community-centered designs." },
      { question: "What types of residential projects does Vighnaharta Group offer in Vikhroli?", answer: "Vighnaharta Group offers a range of residential projects from 1 BHK to 2 BHK apartments, designed to suit different lifestyle needs and budgets." },
      { question: "Why should I invest in a Vighnaharta Group's new projects in Vikhroli?", answer: "Vikhroli is a rapidly developing area with excellent connectivity, growing infrastructure, and increasing property values, making it a smart investment choice." },
      { question: "How does Vighnaharta Group ensure quality and sustainability in its real-estate projects?", answer: "The group follows stringent quality standards, uses sustainable materials, and employs modern construction techniques to ensure durability and eco-friendliness." },
      { question: "Where can I learn more about upcoming projects by Vighnaharta Group in Vikhroli?", answer: "You can visit our website, contact our sales office, or call us to learn about the latest projects and offers from Vighnaharta Group." }
    ]
  }),
  contact: JSON.stringify({
    title: "Contact Us",
    phone: "+91 98765 43210",
    email: "info@vighnaharta.com",
    address: "BLDG. NO. 223/224, CIRCLE KANNAMWAR NAGAR 1, VIKHROLI (EAST), MUMBAI - 400083"
  })
};

// Seed sections
const insertSection = db.prepare('INSERT OR IGNORE INTO sections (section_key, content) VALUES (?, ?)');
for (const [key, content] of Object.entries(defaultSections)) {
  insertSection.run(key, content);
}

// ===== ROUTES =====

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  const admin = db.prepare('SELECT * FROM admins WHERE email = ?').get(email);
  
  if (!admin) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const isMatch = bcryptjs.compareSync(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  res.json({ message: 'Login successful', admin: { id: admin.id, email: admin.email } });
});

// Get all sections
app.get('/api/sections', (req, res) => {
  const sections = db.prepare('SELECT * FROM sections').all();
  const result = {};
  sections.forEach(s => {
    result[s.section_key] = JSON.parse(s.content);
  });
  res.json(result);
});

// Get a single section
app.get('/api/sections/:key', (req, res) => {
  const section = db.prepare('SELECT * FROM sections WHERE section_key = ?').get(req.params.key);
  if (!section) {
    return res.status(404).json({ error: 'Section not found' });
  }
  res.json({ key: section.section_key, content: JSON.parse(section.content) });
});

// Update a section
app.put('/api/sections/:key', (req, res) => {
  const { content } = req.body;
  const existing = db.prepare('SELECT * FROM sections WHERE section_key = ?').get(req.params.key);
  
  if (!existing) {
    return res.status(404).json({ error: 'Section not found' });
  }
  
  db.prepare('UPDATE sections SET content = ? WHERE section_key = ?').run(JSON.stringify(content), req.params.key);
  res.json({ message: 'Section updated', key: req.params.key, content });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
