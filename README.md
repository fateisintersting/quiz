# Quiz App - Full Stack Project

## Overview
This is a **full-stack** Quiz application built with:
- **Frontend:** React (Vite) + Tailwind CSS + Chart.js
- **Backend:** Express.js + CORS + Axios

The application fetches quiz data from an API and provides an interactive quiz-taking experience with performance analysis via charts.

## Project Structure
```
quiz-app/
├── frontend/  # React Vite frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── index.html
│   ├── README.md
│
├── backend/  # Express backend
│   ├── index.js
│   ├── package.json
│   ├── README.md
```

## Setup Instructions

### 1. Clone the Repository
```sh
 git clone https://github.com/fateisintersting/quiz.git
 cd quiz-app
```

## Frontend Setup (React Vite)
```sh
cd frontend
npm install
npm run dev
```
**Technologies:** React, TailwindCSS, Axios, Chart.js, Framer Motion

### Start Development Server
```sh
npm run dev
```
The app runs on **http://localhost:5173**

---

## Backend Setup (Express.js)
```sh
cd backend
npm install
node index.js
```
**Technologies:** Express, CORS, Axios

### Start Backend Server
```sh
node index.js
```
The backend runs on **http://localhost:5000**

---

## API Routes
- `GET /api/quiz` - Fetch quiz questions

## Deployment
For production, build the frontend:
```sh
cd frontend
npm run build
```
Serve the backend with **PM2**:
```sh
npm install -g pm2
pm2 start index.js
```

