# Blog Management System

This project is a backend API for a Blog Management System, built using Node.js, Express, and MongoDB. It provides functionality for user management, blog creation, comment management, and role-based access control.

## Features

- **User Management:**
  - User registration with password hashing
  - User login with JWT token authentication
  - Email verification (optional)

- **Role-Based Access Control (RBAC):**
  - Admin can create, edit, and delete blogs
  - Admin can assign blogs to editors
  - Editors can edit assigned blogs
  - Users can view blogs and manage their own comments

- **Blog Management:**
  - Create, retrieve, update, and delete blogs
  - Access control based on roles

- **Comment Management:**
  - Add comments to blogs
  - Delete own comments

## Project Structure

```
blog-management/
│-- backend/
│   ├── config/
│   │   ├── db.js
│   │   ├── env.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   ├── commentController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Blog.js
│   │   ├── Comment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── blogRoutes.js
│   │   ├── commentRoutes.js
│   ├── utils/
│   │   ├── emailService.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   ├── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/blog-management.git
   cd blog-management/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env` file:
   ```plaintext
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get a JWT token

### Blog Management
- `POST /api/blogs` - Create a new blog (Admin, Editor)
- `GET /api/blogs` - Retrieve all blogs
- `PUT /api/blogs/:id` - Update a blog (Admin, Editor)
- `DELETE /api/blogs/:id` - Delete a blog (Admin)

### Comment Management
- `POST /api/comments` - Add a comment
- `DELETE /api/comments/:id` - Delete a comment

## Middleware

- **Authentication Middleware (`authMiddleware.js`)** ensures that only authenticated users can access protected routes.
- **Role-Based Middleware (`roleMiddleware.js`)** restricts actions based on user roles (Admin, Editor, User).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt.js
- Nodemailer
- Cors
- Helmet

## Security Considerations

- Passwords are securely hashed using bcrypt.
- JWT authentication is used to secure API endpoints.
- CORS and Helmet are used for security hardening.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, contact:
- **Email:** abhihavinal805@gmail.com
- **GitHub:** [Abhich05](https://github.com/Abhich05)
- **LinkedIn:** [Abhishek C H](https://www.linkedin.com/in/errorwithabhich)

