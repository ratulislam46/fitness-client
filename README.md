# 🏋️ FitNess - Fitness & Training Platform

FitNess is a modern fitness and training platform that allows users to explore fitness classes, book training slots, communicate via forums, and pay securely. Trainers can manage their profiles, add available slots, and track bookings. Admins have full control over the system with analytics and management tools.

---

## 🚀 Live Demo
🔗 Live Site: https://whimsical-praline-dd388c.netlify.app/



## ✨ Features

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

### 🌐 Frontend
- **React (v19)** – Modern frontend library
- **React DOM**
- **React Router & React Router DOM (v7)** – Client-side routing
- **Tailwind CSS (v4)** – Utility-first CSS framework
- **DaisyUI** – Tailwind-based component library
- **Framer Motion** – Animations & transitions
- **AOS (Animate On Scroll)** – Scroll-based animations

### 🧩 State & Data Management
- **TanStack React Query** – Server state & data fetching
- **Axios** – HTTP client for API communication
- **Secure Axios Instance** – Protected API requests

### 📝 Forms & Input Handling
- **React Hook Form** – Form handling & validation
- **React Select** – Advanced select inputs

### 💳 Payment Integration
- **Stripe JS**
- **@stripe/react-stripe-js**
- **@stripe/stripe-js**

### 🔐 Authentication & Services
- **Firebase** – Authentication & user management
- **EmailJS** – Client-side email sending

### 📊 Charts & UI Components
- **Recharts**
- **react-chartjs-2**
- **Swiper**
- **React Multi Carousel**
- **React Responsive Carousel**
- **React Icons**
- **Lucide React**
- **Moment.js**

### 🎨 Visual Effects & Loaders
- **tsparticles / react-tsparticles**
- **react-particles**
- **react-spinners**

### 🔔 Notifications & Alerts
- **React Hot Toast**
- **SweetAlert2**

### 🛠 Development Tools
- **Vite** – Fast development & build tool
- **ESLint** – Code linting & quality assurance

---


## 🧩 Challenges & Solutions

- **Problem:** Designing a scalable role-based access system as the application grew  
  **Solution:** Implemented protected routes, role-based guards, and centralized permission logic to ensure scalability and clean access control.

- **Problem:** Preventing invalid or duplicate Stripe payments in real-world scenarios  
  **Solution:** Used Stripe Elements with server-side payment intent verification and handled edge cases like page refresh and double submission.

- **Problem:** Managing complex server state and reducing unnecessary API calls  
  **Solution:** Adopted TanStack React Query with caching, background refetching, and request deduplication to optimize performance.

- **Problem:** Keeping large forms performant and maintainable  
  **Solution:** Leveraged React Hook Form with controlled and uncontrolled inputs to minimize re-renders and simplify validation logic.

- **Problem:** Maintaining UI smoothness while using multiple animation libraries  
  **Solution:** Carefully orchestrated Framer Motion and AOS animations to avoid layout shifts and performance bottlenecks.

- **Problem:** Avoiding tight coupling between UI and business logic  
  **Solution:** Abstracted logic into reusable custom hooks and utility functions for better separation of concerns.

- **Problem:** Securing sensitive configuration and third-party keys  
  **Solution:** Used environment variables with Vite’s build-time configuration and ensured no secrets were exposed to the client repository.

- **Problem:** Ensuring long-term maintainability as the codebase expanded  
  **Solution:** Followed consistent folder conventions, reusable component patterns, and ESLint rules to enforce code quality.

---


## 🧠 What I Learned
- Building scalable React applications
- Implementing secure authentication & authorization
- Integrating Stripe payments safely
- Managing server state with React Query
- Writing clean, reusable, and maintainable code

---

## 📸 Screenshots

#### 🔹 Home Page

![Homepage](./assets/fitness-home.png)

#### 🔹 Register Page
![Dashboard](./assets/register-page.png)

---

## 🧪 Demo Credentials
- **User Email:** tamim@gmail.com
- **Password:** 111111
- **Trainer Email:** sourav@gmail.com
- **Password:** 111111

---

## Install Dependencies
```bash
npm install
```

---

## Start Development Server
```bash
npm run dev
```
