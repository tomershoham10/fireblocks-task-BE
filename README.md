# 📌 TODO List - Fireblock Task

## Run the project (non-tech)

1.  Run setup.bat file.
2.  After the cmd is closed, run run_project.bat

## 🚀 Project Overview
This project is a backend service for managing tasks via a RESTful API. It integrates with an Ethereum smart contract to store and manage tasks securely.

## 🏗 Tech Stack
- **Node.js** (Express.js)
- **TypeScript**
- **Swagger** (API documentation)
- **Ethereum Smart Contract**

---

## 🔧 Installation & Setup
### **1️⃣ Clone the repository**
```sh
  git clone https://github.com/tomershoham10/fireblocks-task-BE.git
  cd your-project
```

### **2️⃣ Install dependencies**
```sh
  npm install
```

### **3️⃣ Set up environment variables**
Create a `.env` file in the root directory and add:
```env
PORT
PRIVATE_KEY
CONTRACT_ADDRESS
```

### **4️⃣ Start the server**
```sh
  npm run dev  # Start in development mode
```

For production:
```sh
  npm start
```

---

## 📖 API Documentation
### **Swagger UI**
After running the server, access the API documentation at:
📌 **[http://localhost:8080/api-docs](http://localhost:8080/api-docs)**

---

## 📌 API Endpoints
### ✅ **Get all tasks**
```http
GET /tasks
```
Response:
```json
{
  "tasks": [
    {
      "id": 1,
      "description": "Sample Task",
      "completed": false
    }
  ]
}
```

### ✅ **Complete a task**
```http
POST /tasks/:id/complete
```

### ✅ **Add a new task**
```http
POST /tasks
```
Body:
```json
{
  "description": "New Task Description"
}
```
