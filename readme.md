# 📰 News Inventure: Full-Stack News Management Platform

A comprehensive full-stack news application built with the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript. This platform features a user-facing news feed and a secure, role-based admin dashboard for content management.

> **Note:** 🎨 The UI part was developed with AI assistance as I'm learning TypeScript. There might be some glitches and areas for improvement. Your patience and feedback are greatly appreciated! 😊

---

## ✨ Features

### User Features
- 🔐 **Secure Authentication**: User registration and login with JWT tokens stored in HTTP-only cookies
- 📱 **News Feed**: Browse all published news articles
- 📖 **Article Details**: View individual articles with full content
- ❤️ **Like System**: Like and unlike news articles (authenticated users)
- 🏷️ **Categories**: Browse news by categories

### Admin Features
- 📝 **News Management**: Full CRUD operations for news articles
- 🗂️ **Category Management**: Create, update, and delete news categories
- 🔄 **Publish Control**: Toggle publish/unpublish status for articles
- 👥 **Role-Based Access**: Secure admin-only routes and operations
- 📊 **Dashboard**: View all articles including drafts

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js with ES Modules
- **Framework**: Express.js v5
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken) + bcryptjs for password hashing
- **Security**: CORS enabled, HTTP-only cookies
- **Environment**: dotenv for configuration

### Frontend
- **Library**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **State Management**: Redux Toolkit 2.0.1
- **Routing**: React Router DOM 6.21.1
- **HTTP Client**: Axios 1.6.2
- **Form Handling**: React Hook Form 7.64.0
- **Notifications**: React Toastify 9.1.3

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher
- **MongoDB**: Atlas account or local MongoDB instance
- **Git**: For cloning the repository

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Inventures-2.git
cd Inventures-2
```

### 2. Backend Setup

#### Install Dependencies

```bash
cd backend
npm install
```

#### Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=3001

# Database Configuration
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/newsInventure?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random

# Node Environment (optional)
NODE_ENV=development
```

**Important:** 
- Replace `<username>` and `<password>` with your MongoDB credentials
- Use a strong, random string for `JWT_SECRET`
- Never commit the `.env` file to version control

#### Start the Backend Server

```bash
npm start
```

The backend server will run on `http://localhost:3001`

---

### 3. Frontend Setup

#### Install Dependencies

Open a new terminal window:

```bash
cd frontend
npm install
```

#### Start the Frontend Development Server

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

---
## ENV example
PORT=3000
MONGO_URI=your_mongo_uri_NewsApp
JWT_SECRET=kjbjwbbwddkbad4545s4d54

## 📁 Project Structure

```
Inventures-2/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── admin.controller.js      # Admin CRUD operations
│   │   │   ├── auth.controller.js       # Login/Register
│   │   │   ├── category.controller.js   # Category management
│   │   │   └── news.controller.js       # Public news operations
│   │   ├── db/
│   │   │   └── db.js                    # MongoDB connection
│   │   ├── middlewares/
│   │   │   ├── admin.middleware.js      # Admin role verification
│   │   │   └── auth.middleware.js       # JWT authentication
│   │   ├── models/
│   │   │   ├── category.model.js        # Category schema
│   │   │   ├── news.model.js            # News schema
│   │   │   └── user.model.js            # User schema
│   │   ├── routes/
│   │   │   ├── admin.routes.js          # Admin endpoints
│   │   │   ├── auth.routes.js           # Auth endpoints
│   │   │   ├── category.routes.js       # Category endpoints
│   │   │   └── news.routes.js           # News endpoints
│   │   └── app.js                       # Express app configuration
│   ├── server.js                        # Server entry point
│   ├── package.json
│   └── .env                             # Environment variables (create this)
│
└── frontend/
    ├── src/
    │   ├── components/                  # React components
    │   │   ├── admin/
    │   │   │   └── NewsManagement.tsx
    │   │   ├── AdminDashboard.jsx
    │   │   ├── AdminRoute.tsx
    │   │   ├── CreateCategory.tsx
    │   │   ├── CreateNews.tsx
    │   │   ├── EditNews.tsx
    │   │   ├── Home.tsx
    │   │   ├── Login.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── NewsCard.tsx
    │   │   ├── NewsDetail.tsx
    │   │   ├── NewsList.tsx
    │   │   ├── NotFound.tsx
    │   │   └── Register.tsx
    │   ├── pages/
    │   │   └── HomePage.tsx
    │   ├── redux/
    │   │   ├── authSlice.ts             # Auth state management
    │   │   └── store.ts                 # Redux store
    │   ├── api/
    │   │   └── axios.ts                 # Axios configuration
    │   ├── styles/                      # CSS files
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    └── vite.config.ts
```

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |

**Register Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "user"
}
```

**Login Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

---

### News Routes (`/api/news`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/news` | Get all published news | No |
| GET | `/api/news/:id` | Get single news article | No |
| POST | `/api/news/:id/like` | Like/Unlike news article | Yes (User) |

---

### Category Routes (`/api/categories`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/categories` | Get all categories | No |
| POST | `/api/categories` | Create new category | Yes (Admin) |
| PUT | `/api/categories/:id` | Update category | Yes (Admin) |
| DELETE | `/api/categories/:id` | Delete category | Yes (Admin) |

**Create/Update Category Body:**
```json
{
  "name": "Technology"
}
```

---

### Admin Routes (`/api/admin`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/admin/news` | Get all news (including unpublished) | Yes (Admin) |
| POST | `/api/admin/news` | Create new news article | Yes (Admin) |
| PUT | `/api/admin/news/:id` | Update news article | Yes (Admin) |
| DELETE | `/api/admin/news/:id` | Delete news article | Yes (Admin) |
| PATCH | `/api/admin/news/:id/publish` | Toggle publish status | Yes (Admin) |

**Create News Request Body:**
```json
{
  "title": "Breaking News Title",
  "content": "Full content of the news article...",
  "categoryId": "648f4b3e7c9a2d001f123456",
  "published": true
}
```

**Publish Toggle Body:**
```json
{
  "published": true
}
```

---

## 🗄️ Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  passwordHash: String (excluded from queries by default),
  role: String (enum: ["admin", "user"], default: "user"),
  timestamps: true
}
```

### News Model
```javascript
{
  title: String,
  content: String,
  categoryId: ObjectId (ref: 'category'),
  authorId: ObjectId (ref: 'user'),
  published: Boolean (default: false),
  likes: Map (userId -> Boolean)
}
```

### Category Model
```javascript
{
  name: String,
  timestamps: true
}
```

---

## 🔒 Security Features

- **Password Hashing**: bcryptjs with salt rounds of 10
- **JWT Authentication**: Tokens expire in 24 hours
- **HTTP-Only Cookies**: Prevents XSS attacks
- **CORS Configuration**: Restricted to frontend origin (localhost:5173)
- **Role-Based Access Control**: Admin middleware for protected routes
- **Password Exclusion**: Password hashes excluded from query results by default

---

## 🎯 Usage Guide

### Creating an Admin User

1. Register a new user through `/api/auth/register`
2. Set `role: "admin"` in the request body
3. Login to receive JWT token
4. Access admin dashboard at `/admin`

### Managing News Articles

**As Admin:**
1. Login with admin credentials
2. Navigate to Admin Dashboard
3. Create categories first
4. Create news articles with selected category
5. Toggle publish status to make articles visible to users

**As User:**
1. Register/Login
2. Browse published news on homepage
3. Click on articles to read full content
4. Like/Unlike articles

---

## 📝 Development Notes

### Backend
- Uses ES Modules (`type: "module"` in package.json)
- MongoDB connection with Mongoose
- JWT stored in HTTP-only cookies for security
- Environment-based CORS configuration
- Comprehensive error handling in controllers

### Frontend
- TypeScript for type safety
- Redux Toolkit for state management
- Axios interceptors for API calls
- Protected routes with AdminRoute component
- Responsive design (though may have some glitches as mentioned 😅)

---

## 🐛 Known Issues

Since this is a learning project with AI-assisted frontend development:
- Some TypeScript type definitions might need refinement
- UI/UX may have minor glitches
- Responsive design could be improved
- Form validations might need enhancement

**Contributions and feedback are welcome!** 🙏

---

## 🚧 Future Enhancements

- [ ] Add image upload for news articles
- [ ] Implement comment system
- [ ] Add search and filter functionality
- [ ] Email verification for user registration
- [ ] Password reset functionality
- [ ] User profile management
- [ ] News article pagination
- [ ] Rich text editor for article creation
- [ ] Social media sharing
- [ ] Analytics dashboard for admins

---

## 🤝 Contributing

This is a learning project, and contributions are welcome! If you'd like to help improve the codebase:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Anurag Rajpoot**

- GitHub: [@your-username](https://github.com/your-username)
- Project Repository: [Inventures-2](https://github.com/your-username/Inventures-2)

---

## 🙏 Acknowledgments

- Thanks to the AI assistance for helping with the frontend TypeScript implementation
- MongoDB for excellent documentation
- React and Redux communities for awesome resources
- Express.js team for the robust framework

---

## 💬 Support

If you have any questions or run into issues:
1. Check the [Issues](https://github.com/your-username/Inventures-2/issues) page
2. Create a new issue with detailed description
3. Feel free to reach out for help

---

**Happy Coding! 🚀 Keep Learning! 📚**

*Made with ❤️ and lots of ☕ by a TypeScript learner*
