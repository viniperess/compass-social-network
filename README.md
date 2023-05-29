# Compass Social Network

Compass Social Network is a social networking application that allows users to register, login, and interact with other users through posts and comments. The application is developed using React and TypeScript on the frontend and NestJS on the backend.

## Features
The application includes the following features:

User registration with field validations and password encryption.
User login with JWT Token authentication.
Home page with a list of friends, posts, and interaction features.
Addition and deletion of posts.
Comments on existing posts.
Dependencies

## The application utilizes the following dependencies:

## Frontend
react: JavaScript library for building user interfaces.
react-dom: Package for manipulating the React DOM.
react-router-dom: Library for routing in React.
react-scripts: Set of scripts for React development and building.
typescript: Typed and compiled programming language for JavaScript.
web-vitals: Library for measuring web performance metrics.

## Backend
bcrypt: Library for password encryption.
class-transformer: Library for object transformation.
class-validator: Library for class and object validation.
dotenv: Library for loading environment variables from .env files.
cors: Package for enabling Cross-Origin Resource Sharing (CORS) in the backend.
mongoose: Object-Document Mapper (ODM) for MongoDB data modeling.
passport: Authentication middleware for Node.js.
passport-jwt: JWT authentication strategy for Passport.
passport-local: Local authentication strategy for Passport.
reflect-metadata: Library for runtime metadata support.
rxjs: Library for reactive asynchronous programming.

## Installation

Follow the instructions below to set up and run the application:

1.Clone the project repository: git clone <https://github.com/viniperess/compass-social-network.git>
2.Navigate to the project directory: cd compass-social-network
3.Install frontend dependencies: cd frontend && npm install
4.Install backend dependencies: cd ../backend && npm install
5.Create an .env file in the backend directory and define the required environment variables.
6.Run the frontend and backend in separate terminals: cd frontend && npm start and cd backend && npm run start:dev
7.Access the application in the browser: http://localhost:3000 for the frontend and http://localhost:3001 for the backend.

## Configuration

Make sure to properly configure the environment variables in the .env file in the backend directory. The required variables may include the following:

MONGODB_URI: MongoDB database connection URL.
JWT_SECRET: Secret key for JWT token generation and verification.
Ensure to provide the correct values for these variables based on your local configuration.

## Fetch API Integration

The frontend of the Compass Social Network application uses the Fetch API to communicate with the backend API. The Fetch API provides a modern and native way to make HTTP requests.

## Contribution

If you wish to contribute to the Compass Social Network project, follow the steps below:

1.Fork the repository.
2.Create a branch for your contribution: git checkout -b my-contribution.
3.Make the changes and commit to the branch.
4.Push your branch with the changes: git push origin my-contribution.
5.Open a pull request in the original repository.


