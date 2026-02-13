# RealEstateMegaPlex - Vighnaharta Infinity

A full-stack real estate website with an admin panel for dynamic content management.

## Live URLs

- **Frontend:** *(Deploy to Vercel/Netlify/Render)*
- **Backend:** *(Deploy to Render/Railway)*

---

## Features

### Public Website
- **Hero Section** – Project name, pricing, and location
- **About Project** – Description with download brochure button
- **Amenities** – Icon grid with gymnasium, yoga deck, jogging track, etc.
- **Explore Buildings** – Horizontal carousel of township buildings
- **Floor Plans** – Tabbed view with 1 BHK, 2 BHK, 1.5 BHK details
- **Video Section** – City skyline with play button overlay
- **Nearby Connectivity** – Grid of nearby landmarks with distances
- **About Developer** – Developer stats and project images
- **Construction Updates** – Progress cards with descriptions
- **FAQ** – Expandable accordion with questions and answers
- **Contact Footer** – Phone, email, and address

### Admin Panel
- Secure login (email + password)
- Edit text content for **every section** of the website
- Tab-based navigation between sections
- Real-time save with success/error feedback

---

## Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | React.js (Vite)         |
| Backend    | Node.js + Express.js    |
| Database   | SQLite (better-sqlite3) |
| Auth       | Credential-based login (bcryptjs) |

---

## Admin Login Credentials

```
Email:    admin@gmail.com
Password: 1234
```

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