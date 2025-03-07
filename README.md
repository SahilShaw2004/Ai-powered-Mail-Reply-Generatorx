

# 📧 AI Email Reply Generator

This project is a **React + Vite** frontend application that works with a **Spring Boot backend** to generate email replies based on given content and tone. The application allows users to paste an email, select a tone (Formal, Professional, Friendly, Casual), and generate a reply using backend logic.

---

## 🛠️ Tech Stack

### Frontend
- **React** (with Vite)
- **CSS** for styling

### Backend
- **Spring Boot** (running on port `8080` by default)

---

## 🚀 Features
- Enter recipient email (for reference, not required for reply generation).
- Paste the original email content.
- Choose a tone (Formal, Professional, Friendly, Casual).
- Generate a reply using AI-powered logic in the backend.
- View the generated reply directly on the frontend.
- Error handling for API failures.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/email-reply-generator.git
cd email-reply-generator
```

### 2️⃣ Backend Setup (Spring Boot)
- Open the **backend** folder in your preferred IDE (IntelliJ, Eclipse, VS Code).
- Ensure you have **Java 17+** installed.
- Run the Spring Boot application (usually available at `http://localhost:8080`).
- Your backend should expose an endpoint:

```
POST /api/email/generate
```

- Example Request Body:
```json
{
    "emailContent": "Hello, I need assistance with my recent order.",
    "tone": "Professional"
}
```
- Example Response:
```json
{
    "generatedReply": "Dear Customer, We are happy to assist you with your order. Please provide more details."
}
```

---

### 3️⃣ Frontend Setup (React + Vite)

- Navigate to the **frontend** folder.
- Install dependencies:
```bash
npm install
```

- Update the `vite.config.js` for **local development (backend running on localhost)**:

#### vite.config.js (for local development)
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});
```

- Start the development server:
```bash
npm run dev
```

- Access the app at:  
`http://localhost:5173`

---

## 🗂️ Folder Structure

```
/frontend               // React Frontend
    /src
        /App.jsx        // Main React Component
        /App.css        // Styling
    vite.config.js      // Vite Configuration
/backend                // Spring Boot Backend
    /src/main/java
        /controller     // EmailController.java
        /service        // EmailService.java
        /model          // Request and Response DTOs
    application.yml     // Backend Configurations
README.md                // This file
```

---

## 🌐 Deployment (Optional)

### Production Vite Proxy Example
For production, if your backend is deployed on **Koyeb** or any cloud service, update `vite.config.js` like this:

```javascript
server: {
    proxy: {
        '/api': {
            target: 'https://your-backend-service.koyeb.app',
            changeOrigin: true,
            secure: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
}
```

This allows you to call `/api/email/generate` directly from the frontend.

---

## ⚠️ Common Issues

### 1. CORS Error
Ensure your **Spring Boot backend** allows CORS from the frontend URL (http://localhost:5173). Add this in your controller:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

Or create a global CORS configuration.

### 2. API URL Issue
Make sure your requests match `/api/email/generate` and the backend supports it.

---

## 📄 Example Request Flow

### Request
```http
POST /api/email/generate
Content-Type: application/json

{
    "emailContent": "Hi, I have a question about my order.",
    "tone": "Friendly"
}
```

### Response
```json
{
    "generatedReply": "Hey there! Thanks for reaching out. I'd love to help you with your order. Could you please share more details?"
}
```

---

## 📬 Contact
For any issues or contributions, feel free to open an **issue** or create a **pull request**.
