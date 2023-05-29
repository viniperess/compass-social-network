![image](https://github.com/viniperess/compass-social-network/assets/107048343/93009c6c-fb0c-4baf-af86-0066fc4e64b2)


# Compass Social Network

Compass Social Network is a social networking application that allows users to register, login, and interact with other users through posts and comments. The application is developed using React and TypeScript on the frontend and NestJS on the backend.

## Features
The application includes the following features:

- User registration with field validations and password encryption.<br/>
- User login with JWT Token authentication.<br/>
- Home page with a list of friends, posts, and interaction features.<br/>
- Addition and deletion of posts.<br/>

# Dependencies

## The application utilizes the following dependencies:

## Frontend
* react: JavaScript library for building user interfaces.<br/>
* react-dom: Package for manipulating the React DOM.<br/>
* react-router-dom: Library for routing in React.<br/>
* react-scripts: Set of scripts for React development and building.<br/>
* typescript: Typed and compiled programming language for JavaScript.<br/>
* web-vitals: Library for measuring web performance metrics.<br/>

## Backend
* bcrypt: Library for password encryption.<br/>
* class-transformer: Library for object transformation.<br/>
* class-validator: Library for class and object validation.<br/>
* dotenv: Library for loading environment variables from .env files.<br/>
* cors: Package for enabling Cross-Origin Resource Sharing (CORS) in the backend.<br/>
* mongoose: Object-Document Mapper (ODM) for MongoDB data modeling.<br/>
* passport: Authentication middleware for Node.js.<br/>
* passport-jwt: JWT authentication strategy for Passport.<br/>
* passport-local: Local authentication strategy for Passport.<br/>
* reflect-metadata: Library for runtime metadata support.<br/>
* rxjs: Library for reactive asynchronous programming.<br/>

## Installation

Follow the instructions below to set up and run the application:

1. Clone the project repository: git clone <https://github.com/viniperess/compass-social-network.git><br/>
2. Navigate to the project directory: cd compass-social-network<br/>
3. Install frontend dependencies: cd frontend && npm install<br/>
4. Install backend dependencies: cd ../backend && npm install<br/>
5. Create an .env file in the backend directory and define the required environment variables.<br/>
6. Run the frontend and backend in separate terminals: cd frontend && npm start and cd backend && npm run start:dev<br/>
7. Access the application in the browser: http://localhost:3000 for the frontend and http://localhost:3001 for the backend.<br/>

## API Routes

The Compass Social Network backend provides the following API routes:

### Users

* GET /api/v1/users: Get a list of all users.

* GET /api/v1/users/:id: Get a specific user by ID.

* POST /api/v1/users: Create a new user.

* PUT /api/v1/users/:id: Update a user by ID.

* DELETE /api/v1/users/:id: Delete a user by ID.

### Posts

* GET /api/v1/posts: Get a list of all posts.

* GET /api/v1/posts/:id: Get a specific post by ID.

* POST /api/v1/posts: Create a new post.

* PUT /api/v1/posts/:id: Update a post by ID.

* DELETE /api/v1/posts/:id: Delete a post by ID.

### Comments

* GET /api/v1/posts/:postId/comments: Get all comments for a specific post.

* GET /api/v1/posts/:postId/comments/:commentId: Get a specific comment for a post.

* POST /api/v1/posts/:postId/comments: Add a new comment to a post.

* PUT /api/v1/posts/:postId/comments/:commentId: Update a comment for a post.

* DELETE /api/v1/posts/:postId/comments/:commentId: Delete a comment for a post.

Please note that you need to replace :id, :postId, and :commentId with the actual IDs when making requests to these routes.

Feel free to customize and expand this list based on your specific API routes and their functionalities.

## Configuration

Make sure to properly configure the environment variables in the .env file in the backend directory. The required variables may include the following:

* MONGODB_URI: MongoDB database connection URL.<br/>
* JWT_SECRET: Secret key for JWT token generation and verification.<br/>
* Ensure to provide the correct values for these variables based on your local configuration.<br/>

## Fetch API Integration

The frontend of the Compass Social Network application uses the Fetch API to communicate with the backend API. The Fetch API provides a modern and native way to make HTTP requests.

## Contribution

If you wish to contribute to the Compass Social Network project, follow the steps below:

1. Fork the repository.<br/>
2. Create a branch for your contribution: git checkout -b my-contribution.<br/>
3. Make the changes and commit to the branch.<br/>
4. Push your branch with the changes: git push origin my-contribution.<br/>
5. Open a pull request in the original repository.<br/>


