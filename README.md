# User Authentication and Authorization using Token

This project implements user authentication and authorization using Bearer tokens in a Node.js application with Express.js, Mongoose, and JWT. The application is structured with the MVC pattern and includes API documentation in Postman.

## Features
- **User Registration**: Register new users with hashed passwords.
- **User Login**: Authenticate users and issue JWTs for authorized access.
- **JWT-Based Authorization**: Protect routes using Bearer tokens.
- **Secure User Info Retrieval**: Users can retrieve their information using valid tokens.
- **Error Handling and Validation**: Proper error messages and input validations.
- **API Documentation**: Detailed documentation using Postman, with sample requests and responses.

## Tech Stack
- **Node.js**: JavaScript runtime for server-side applications.
- **Express.js**: Minimalist web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Token for secure token-based authentication.
- **Postman**: API testing and documentation.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/gowthamansv/userAuthentication.git
   cd userAuthetication

2. Install dependencies:

    ```bash 
    npm install express
    npm install bcrypt
    npm install nodemon --save-dev
    npm install cookie-parser
    npm install dotenv
    npm install jsonwebtoken 
    npm install mongoose

3. Setting up environment variables .
   Both of these values were put under .gitignore concerning security.

- **MongoDB Database URL** - The URL for the database stored in Atlas.
- **Secret Key** - Which is used in hashing the token in token encryption and decryption phase. 
4. Run the Application
    ```bash
    npm run dev   // In VS Code
    npm start     // In Server Deployment

## Postman Documentation URL
[Postman Documentation URL:](https://documenter.getpostman.com/view/33967457/2sAYHzJ42S)

## Endpoints

- `post /api/v1/register` - to register the user.
- `post /api/v1/login` - after the user registration the user can login to access the user's detail.
- `post /api/v1/logout` - user can logout
- `get /api/v1/userdetails` - user can get the details after the user login
  
