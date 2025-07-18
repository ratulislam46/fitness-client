# 🌟 FitNess - Fitness & Training Platform (Client Side)

FitNess is a modern fitness and training platform that allows users to explore fitness classes, book training slots, communicate via forums, and pay securely. Trainers can manage their profiles, add available slots, and track bookings. Admins have full control over the system with analytics and management tools.

---

## 🔗 Live Site

👉 [Live Website](https://whimsical-praline-dd388c.netlify.app/)

---

## 📁 Project Structure

src/
├── assets/ # All static images/icons
├── components/ # Reusable components (e.g., Loading, DynamicTitle)
├── context/ # React Context Providers (AuthProvider, AuthContext, etc.)
├── hooks/ # Custom React hooks (useAxios, useAxiosSecure, useAxiosRole)
├── pages/ # All page components
│ ├── Home/ # Homepage and its sections
│ ├── AllClasses/ # AllClasses, ClassDetails
│ ├── AllTrainers/ # AllTrainers, TrainerDetails
│ ├── BeATrainer/ # Trainer application page
│ ├── Booking/ # BookingPage, PaymentPage
│ ├── ForumPage/ # Forum posts and add forum
│ ├── Authentication/ # Login, Register, GoogleSignIn
│ └── Dashboard/ # Admin, Trainer, and User Dashboard Pages
├── PrivateRoutes/ # Role-based private route components
├── RootLayout/ # Layout components (e.g., DashboardLayout)
├── routes/ # Route configuration files
├── App.jsx # Main app component with route setup
└── main.jsx # Entry point, wrapped with providers


---

## 🚀 Features

- 🧘 Browse and join fitness classes
- 📆 Book training slots with available trainers
- 💬 Forum system for discussion and tips
- ✅ Secure Stripe payment integration
- 👨‍🏫 Role-based dashboard (Admin, Trainer, User)
- 📊 Admin dashboard with analytics and stats
- 🔍 Search and filter trainers or classes
- 📱 Fully responsive UI with mobile support

---

## 🛠 Tech Stack

- **React**
- **React Router DOM**
- **React Hook Form**
- **Tailwind CSS** + **DaisyUI**
- **Axios** + **Custom Secure Axios Hook**
- **Stripe JS** (Payment Gateway)
- **AOS (Animate On Scroll)**
- **SweetAlert2**
- **TanStack Query** + **Axios**

---
---


## 📸 Screenshots

![Homepage](./src/assets/banner.png)
![Dashboard](./src/assets/dashboard.png)
![Classes](./src/assets/class.png)
![Forums](./src/assets/forum.png)

## ⚙️ Installation & Running Locally

# Install dependencies
npm install

# Run the development server
npm run dev
