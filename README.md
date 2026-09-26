Project Overview:-

A React + Tailwind project that simulates a student/admin assignment dashboard. Students can view and submit assignments, while admins can create and manage them. Built as part of Joineazy Task 1.


📌 Features
Student assignment submission with verification

Admin assignment creation (title, due date, link)

Role switching between Student and Admin

Progress tracking with submission status

Responsive UI styled with Tailwind CSS


🛠 Tech Stack
React 19

Tailwind CSS

Node.js 18

Netlify (deployment)

⚡ Setup Instructions
bash
git clone https://github.com/Akshay-443/joineazy-task1.git
cd assignment-dashboard
npm install
npm start


📂 Folder Structure
Code
assignment-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── StudentPanel.jsx
│   │   ├── AdminPanel.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles/
│       └── tailwind.css
├── package.json
└── README.md


🏗 Component / Architecture Explanation
StudentPanel → Displays assignments and handles submission flow.

AdminPanel → Allows admins to create assignments and track submissions.

Dashboard → Central hub that switches between Student and Admin views.

App.jsx → Root component managing state and role switching.


🎨 Design Decisions
Used Tailwind CSS for fast, responsive styling.

Chose functional components + hooks (useState, useEffect) for simplicity.

Simulated data with mock JSON/state instead of backend (per task requirement).

Deployed on Netlify for easy hosting and live demo access.