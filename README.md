# 📚 Book Review App

This is a web application for adding, editing, and viewing book reviews.  
Developed as part of the **Web Technologies** coursework.

## 🔗 Project Links

- 🌐 Live App: https://book-review-app-23pf.onrender.com/
- 📁 GitHub Repository: https://github.com/yourusername/your-repo-name

---

## ⚙️ Technologies Used

- **Backend:** Node.js, Express.js  
- **Frontend:** Pug (template engine), Bootstrap 5  
- **Database:** MongoDB (via Mongoose)  
- **Validation:** express-validator  
- **Environment Config:** dotenv

---

## ✨ Features

- Add, edit, and delete book reviews  
- RESTful routing (including API endpoints)  
- Server-side form validation
- Pug templates with responsive layout using Bootstrap  
- Modular MVC structure:
  - `controllers/` for logic
  - `routes/` for routing
  - `models/` for MongoDB schemas
  - `views/` for frontend templates
- Secure MongoDB connection using `.env`

---

## 📂 Project Structure
```
book-review-app/
├── controllers/          # Logic for handling requests and responses
│   └── reviews/          # Review-specific controller functions
├── models/               # Mongoose schemas (Review model)
├── routes/               # Express route definitions
│   └── reviews/          # Routes for review-related pages
├── views/                # Pug templates for frontend rendering
│   ├── layout.pug        # Base layout template
│   ├── index.pug         # Homepage template
│   ├── reviews.pug       # List of all reviews
│   ├── createReview.pug  # Form to add a new review
│   └── updateReview.pug  # Form to edit a review
├── middlewares/          # Middleware for express-validator
├── validators/           # Validator for form submission
├── public/               # Static assets (CSS, images)
│   └── styles.css        # Custom styles
├── .env                  # Environment variables (NOT pushed to GitHub)
├── .gitignore            # Files/folders excluded from Git tracking
├── app.js                # Main server file (Express app entry point)
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```
---

## 📦 Dependencies

- express
- mongoose
- pug
- dotenv
- express-validator
- nodemon (dev)

## 🧪 Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/00017353/book_review_app.git
   cd book-review-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory and put MongoDB Connection String (uploaded in intranet .zip):
   ```bash
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

---

## 🧠 Author Info

- **Student ID:** 00017353  
- **Course:** Web Technologies  
