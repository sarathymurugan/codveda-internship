# 🛠️ Full Stack Product Management App  
**Codveda Internship Project – Full Stack Development**

This project is a complete **Full Stack CRUD Application** with authentication and role-based access control.  
It was built as part of my **Codveda Technologies Internship**.  

The application allows **users/admins** to:
- **Sign up** and **log in** with JWT authentication
- **Create**, **View**, **Update**, and **Delete** products
- Protect pages using **Auth Guards** in Angular
- Perform secure backend operations with **role-based access**

---

## 🚀 Features
- **Authentication**: JWT-based login/signup
- **Authorization**: Role-based access for `user` and `admin`
- **CRUD Operations**: Manage products with backend API
- **Responsive UI**: Angular-based forms and dashboard
- **Secure API**: Middleware to verify tokens and restrict access
- **Glassmorphism UI**: Modern look with background blur

---

## 🖥️ Tech Stack

### **Frontend**
- Angular 17
- Axios for API calls
- Angular Router & Guards
- HTML5 / CSS3

### **Backend**
- Node.js / Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS and Cookie Parser

---

## 📂 Project Structure
```
codveda-internship/
│── backend/ # Node.js + Express API
│ ├── routes/ # Auth & product routes
│ ├── middleware/ # Auth middleware
│ ├── models/ # Mongoose schemas
│ ├── server.js # Main backend entry
│
│── client/ # Angular frontend app
│ ├── src/app/ # Components, services, guards
│ ├── assets/ # Images, styles
│
│── README.md # Project documentation
│── .env # Environment variables

```
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd codveda-internship

cd backend
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d

npm run dev

cd ../client
npm install

ng serve

Frontend runs on http://localhost:4200
Backend runs on http://localhost:5000
```
🔑 API Endpoints
Method	Endpoint	Description	Auth Required
POST	/api/auth/signup	Register new user	❌ No
POST	/api/auth/login	Login user	❌ No
GET	/api/products	Get all products	✅ Yes
POST	/api/products	Add product	✅ Yes
PUT	/api/products/:id	Update product	✅ Yes
DELETE	/api/products/:id	Delete product	✅ Yes


📸 Screenshots
!Login

Dashboard

🏆 Internship Acknowledgement
This project was developed as part of my Codveda Technologies Internship.
Special thanks to Codveda for providing guidance and project requirements.

Hashtags:
#CodvedaJourney #CodvedaExperience #FutureWithCodveda #CodvedaAchievements #CodvedaProjects

