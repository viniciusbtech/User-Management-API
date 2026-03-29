# User-Management-API
A simple RESTful API built with Express.js for managing user data. This project demonstrates basic CRUD operations using an in-memory data store.

# User Management API

A simple RESTful API built with Express.js for managing user data. This project demonstrates basic CRUD operations using an in-memory data store.

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **JavaScript** - ES6+ features

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Retrieve all users |
| GET | `/users/:id` | Retrieve a specific user by ID |
| POST | `/users` | Create a new user |
| PUT | `/users/:id` | Update an existing user |
| DELETE | `/users/:id` | Delete a user |

## 🔧 Installation & Setup

1. Clone the repository
``bash
git clone <repository-url>
cd <project-directory>

2. Install dependencies
npm install express

3. Start the server

bash
node server.js
The server will start at http://localhost:3000


CRUD Operations

GET - Retrieves data from the server
POST - Creates new resources
PUT - Updates existing resources
DELETE - Removes resources

Important Methods Used
parseInt() - Converts string parameters to integers for ID comparison
users.find() - Searches array for specific user by ID
users.filter() - Creates new array excluding deleted user
users.push() - Adds new user to the array
res.status() - Sets HTTP response status code
res.json() - Sends JSON response

🧪 Testing the API
You can test the API using:

Postman
Insomnia
cURL commands
REST Client extensions (like the one in VS Code)

📊 HTTP Status Codes Used
200 OK - Successful GET and PUT requests
201 Created - Successful POST request
204 No Content - Successful DELETE request
404 Not Found - Resource not found
