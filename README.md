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
```
🔑 API Endpoints
Method	Endpoint	Description	Auth Required
POST	/api/auth/signup	Register new user	❌ No
POST	/api/auth/login	Login user	❌ No
GET	/api/products	Get all products	✅ Yes
POST	/api/products	Add product	✅ Yes
PUT	/api/products/:id	Update product	✅ Yes
DELETE	/api/products/:id	Delete product	✅ Yes
```

📸 Screenshots
----------------------------------------------------------------------------------------------------------------------------
<img width="1919" height="1020" alt="1" src="https://github.com/user-attachments/assets/6b2a1e9e-a608-49c8-99fb-d6313f7a1c9a" />
--------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="1919" height="1021" alt="2" src="https://github.com/user-attachments/assets/c979cf44-9b78-4040-bff4-cacc92b94270" />
------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="1919" height="1020" alt="3" src="https://github.com/user-attachments/assets/1b29c8a1-f83f-40e3-8d1f-f2da8d27ab8a" />
------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="1919" height="1020" alt="4" src="https://github.com/user-attachments/assets/8e75d656-54eb-4c09-a7c7-565c8adb03ad" />
----------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="1919" height="1021" alt="5" src="https://github.com/user-attachments/assets/42c94cc1-40a9-4ecd-b9fb-aea3c6ea826e" />
--------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="1919" height="970" alt="Screenshot 2025-08-12 111015" src="https://github.com/user-attachments/assets/d069e10a-2b88-49ae-8df3-ea0bc87f3b17" />
--------------------------------------------------------------------------------------------------------------------------------------------------------------
<img width="1919" height="962" alt="image" src="https://github.com/user-attachments/assets/1e070643-bb45-47c5-8ae3-fc5acc124559" />
---------------------------------------------------------------------------------------------------------------------------------------------------------

🏆 Internship Acknowledgement

This project was developed as part of my Codveda Technologies Internship.
Special thanks to Codveda for providing guidance and project requirements.

Hashtags:
#CodvedaJourney #CodvedaExperience #FutureWithCodveda #CodvedaAchievements #CodvedaProjects

