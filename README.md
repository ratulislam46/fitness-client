# 🌟 FitNest - Fitness & Training Platform (Client Side)

FitNest is a modern fitness and training platform that allows users to explore fitness classes, book training slots, communicate via forums, and pay securely. Trainers can manage their profiles, add available slots, and track bookings. Admins have full control over the system with analytics and management tools.

---

## 🔗 Live Site

👉 [Live Website](https://your-live-site-link-here)

---

## 📸 Screenshots

![Homepage]('./assests/banner.png)
![Dashboard]('./assests/dashboard.png)
![classes]('./assests/class.png)
![forums]('./assests/forum.png)

---

## 📁 Project Structure

src/
│
├── assets/               # All static images/icons
├── components/           # Reusable components (loading,DynamicTitle.)
├── hooks/                # Custom React hooks (UseAxios, UseAxiosSecure.jsx,UseAxiosRole)
├── PrivateRoutes/                # Private Route (AdmnRoute,MemberRoute,TrainerRoute,PrivateRoute.jsx)
├── RootLayout/               # Layout components ( DashboardLayout)
├── pages/                # All page components
│   ├── Home/             # Homepage and its sections
│   ├── AllClasses/       # AllClasses, ClassDetails
│   ├── AllTrainers/      # AllTrainers, TrainerDetails
│   ├── BeATrainer/       # BeATrainer
│   ├── Booking/          # BookingPage, PaymentPage
│   ├── ForumPage/            # Forum posts, add forum
│   ├── Authentication/   # Login, Register, GoogleSignIn
│   └── Dashboard/        # Admin/Rider/User Dashboard Pages
│
├── routes/               # All route config files
├── context/              # React Context Providers (AuthProvider,AuthContext etc.)
├── App.jsx               # Main app with route setup
└── main.jsx              # Entry point, wrapped with Providers


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
- **TanStack Query + axios** (for async data fetching)

---

## ⚙️ Installation & Run Locally

# 2. Install dependencies
npm install

# 4. Run the project
npm run dev


## 🔀 Routes and Pages

| Route | Role | Purpose |
|-------|------|---------|
| `/` | Public | Home page with banner, intro, top classes, trainers |
| `/login` | Public | Login form |
| `/register` | Public | Registration form |
| `/all-classes` | Public | View all available classes with pagination |
| `/class/:id` | Public | Class details with trainer list |
| `/all-trainers` | Public | View all trainers |
| `/trainer/:id` | Public | Trainer profile with available slots |
| `/booking` | Protected | Booking confirmation page |
| `/payment` | Protected | Stripe payment page |
| `/forum` | Public | View all forum posts |
| `/dashboard` | Protected | Dashboard with role-based routes |
| `/dashboard/manage-classes` | Admin | Admin can add/edit/delete classes |
| `/dashboard/my-bookings` | User | View personal bookings |
| `/dashboard/add-forum` |Admin | Trainer | Post new forum discussion |
| `/dashboard/slot-manage` | Trainer | Manage your available slots |
| `/dashboard/applications` | Admin | Manage trainer applications |
