# RealEstateMegaPlex - Vighnaharta Infinity

A full-stack real estate website with a cinematic "Noir Bombay" theme, featuring dynamic content management through an admin panel. Built with modern web technologies for a luxurious, interactive user experience.

## 🌐 Live Deployment

- **Frontend:** [https://real-estate-mega-plex.vercel.app](https://real-estate-mega-plex.vercel.app)
- **Backend:** [https://realestatemegaplex.onrender.com](https://realestatemegaplex.onrender.com)

---

## ✨ Features

### Public Website
- **🎭 Noir Bombay Theme** – Deep black backgrounds, brass accents, serif/sans typography
- **🏠 Hero Section** – Project branding, pricing cards, location pin
- **📖 About Project** – Rich description with quote and brochure download
- **🏋️ Amenities** – Interactive icon grid (Gym, Yoga, Kids Play, Jogging Track)
- **🏢 Buildings Carousel** – Drag-scrollable township buildings with tags
- **📐 Floor Plans** – Tabbed interface with clickable image gallery
- **🎥 Video Section** – Mumbai skyline with YouTube overlay player
- **🚇 Connectivity** – Nearby landmarks with distance indicators
- **👷 Developer Profile** – Stats cards and project portfolio images
- **🔨 Construction Updates** – Progress timeline with status images
- **❓ FAQ Accordion** – Expandable questions and answers
- **📞 Contact Footer** – Complete contact information

### Admin Panel (`/admin`)
- 🔐 Secure login system (bcryptjs hashed passwords)
- ✏️ Real-time content editing for all website sections
- 📑 Tab-based navigation between different content areas
- 💾 Auto-save with success/error notifications
- 🔄 Live preview of changes

### Interactive Elements
- **Mouse Drag Scrolling** on Buildings carousel
- **Thumbnail Clicking** for Floor Plan image switching
- **Video Playback** with overlay controls
- **Smooth Animations** with staggered reveal effects
- **Responsive Design** for all screen sizes

---

## 🛠️ Tech Stack

| Layer      | Technology              | Purpose                          |
|------------|-------------------------|----------------------------------|
| **Frontend** | React 19 + Vite        | Modern UI with fast development  |
| **Backend**  | Node.js + Express.js   | RESTful API server               |
| **Database** | SQLite (better-sqlite3)| Lightweight data persistence     |
| **Auth**     | bcryptjs               | Secure password hashing          |
| **HTTP**     | Axios                  | API communication                |
| **Icons**    | React Icons            | UI iconography                   |
| **Styling**  | CSS Variables          | Dynamic theming                  |
| **Fonts**    | Google Fonts           | Instrument Serif + Bricolage     |

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/meet1785/RealEstateMegaPlex.git
   cd RealEstateMegaPlex
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   npm start
   ```
   Backend runs on `http://localhost:5000`

3. **Setup Frontend** (in new terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Frontend runs on `http://localhost:5174`

4. **Access the application**
   - Website: `http://localhost:5174`
   - Admin Panel: `http://localhost:5174/admin`

---

## 🔐 Admin Credentials

```
Email:    admin@gmail.com
Password: 1234
```

---

## 📦 Project Structure

```
RealEstateMegaPlex/
├── backend/
│   ├── server.js          # Express server with API routes
│   ├── database.sqlite    # SQLite database file
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Route pages
│   │   ├── api.js         # API configuration
│   │   └── styles.css     # Noir Bombay theme styles
│   ├── vite.config.js     # Vite configuration with proxy
│   └── package.json       # Frontend dependencies
└── README.md
```

---

## 🌍 Deployment Guide

### Backend (Render)

1. **Create Render Account** and connect GitHub
2. **New Web Service**:
   - Repository: `meet1785/RealEstateMegaPlex`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
3. **Deploy** and note the URL

### Frontend (Vercel)

1. **Create Vercel Account** and connect GitHub
2. **New Project**:
   - Repository: `meet1785/RealEstateMegaPlex`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Environment Variables**:
   - `VITE_API_URL`: Your Render backend URL
4. **Deploy** and note the URL

---

## 🎨 Design Philosophy

**"Noir Bombay" Theme** inspired by Mumbai Art Deco architecture:
- **Colors**: Deep blacks (#0a0a0c), brass golds (#c8a44e, #dfc275)
- **Typography**: Instrument Serif for headings, Bricolage Grotesque for body
- **Effects**: Subtle noise overlay, smooth animations, luxury feel
- **Interactivity**: Real movement replaces static elements

---

## 📊 API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/api/health`     | Server health check      |
| GET    | `/api/sections`   | Get all content sections |
| GET    | `/api/sections/:key` | Get specific section     |
| PUT    | `/api/sections/:key` | Update section content   |
| POST   | `/api/admin/login`| Admin authentication     |

---

## 🔧 Development Notes

- **Proxy Configuration**: Vite dev server proxies `/api/*` to backend for CORS-free development
- **Fallback Data**: Frontend includes default content if API fails
- **Image Optimization**: All images served via Unsplash CDN with responsive sizing
- **Database**: SQLite with WAL mode for concurrent access
- **Security**: CORS enabled, bcryptjs for password hashing

---

## 📝 Assignment Submission

This project demonstrates:
- ✅ Full-stack web development
- ✅ Modern React architecture
- ✅ RESTful API design
- ✅ Database integration
- ✅ Authentication system
- ✅ Responsive UI/UX design
- ✅ Production deployment
- ✅ Interactive features
- ✅ Content management system

**Live Demo**: [https://real-estate-mega-plex.vercel.app](https://real-estate-mega-plex.vercel.app)

---

## 📞 Support

For questions or issues, check the deployment logs or contact the development team.

Access the admin panel at `/admin`

---

## Project Structure

```
RealEstateMegaPlex/
├── backend/
│   ├── server.js          # Express API server
│   ├── package.json
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── components/    # Navbar, Hero, About, Amenities, etc.
│   │   ├── pages/         # Home, AdminLogin, AdminPanel
│   │   ├── App.jsx        # Router setup
│   │   ├── api.js         # API base URL config
│   │   ├── styles.css     # All styles
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/meet1785/RealEstateMegaPlex.git
cd RealEstateMegaPlex
```

### 2. Start the Backend

```bash
cd backend
npm install
npm start
```

The backend runs on `http://localhost:5000`

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`

### 4. Environment Variables (Optional)

For the frontend, create a `.env` file:
```
VITE_API_URL=http://localhost:5000
```

For production, set `VITE_API_URL` to your deployed backend URL.

---

## API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| POST   | `/api/admin/login`    | Admin authentication     |
| GET    | `/api/sections`       | Get all section content  |
| GET    | `/api/sections/:key`  | Get single section       |
| PUT    | `/api/sections/:key`  | Update section content   |
| GET    | `/api/health`         | Health check             |

---

## Deployment Guide

### Backend (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repo
3. Set root directory to `backend`
4. Build command: `npm install`
5. Start command: `npm start`

### Frontend (Vercel)
1. Import your GitHub repo on Vercel
2. Set root directory to `frontend`
3. Set environment variable: `VITE_API_URL=<your-backend-url>`
4. Deploy

---

## Screenshots

The website closely matches the reference design with:
- Green/nature themed color scheme
- Sticky navigation bar
- Hero section with pricing cards
- Circular image gallery for About section
- Icon-based amenities grid
- Building carousel with navigation arrows
- Tabbed floor plan viewer
- City skyline video section
- Developer stats bar
- Accordion FAQ

---

## License

MIT