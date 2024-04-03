

## Overview
This Apllication serves as backend for Heliverse Frontend. Acess the project using github link(https://github.com/maaz64/HELIVERSE_FRONTEND) OR Live link (https://heliverse-frontend-three.vercel.app/)

## Live Link
- https://heliverse-backend-nu.vercel.app/

## Features
- User management (create, read, update, delete)
- Create Team


## Technology used
- MongoDB: Database to store and manage data.
- Express.js: Backend framework for building RESTful APIs.
- Node.js: Server-side JavaScript runtime environment.

## Requirements
Before getting started, ensure you have the following installed:
- Node.js and npm: Node.js is the JavaScript runtime, and npm is the package manager for Node.js.
- MongoDB: MongoDB is the NoSQL database used for storing data.


## Configuration
Create a .env file in the server directory of the project and add the necessary environment variables:

- MONGODB_URL
- CORS_ORIGIN

Replace the values with your desired configurations, such as  MongoDB URI and a secure JWT secret key.

## Installation

- `git clone https://github.com/maaz64/HELIVERSE_BACKEND.git`
- `cd HELIVERSE_BACKEND` 
- `npm install` to install all the dependencies.
- `npm start` to start the development server.



## API Endpoints

### User
#### Create User

```http
  POST /api/users
```

#### Get Single User

```http
  GET /api/users/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of User |

#### Get All User

```http
  GET /api/users/?page=1
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `string` | **Required**. Page number |

#### Update User

```http
  PUT /api/users/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of User |

#### Delete User

```http
  DELETE /api/users/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of User |

###

### Team
#### Create Team

```http
  POST /api/team
```
#### Get Single User

```http
  GET /api/team/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Team |


## Authors

- [@Maaz](https://www.linkedin.com/in/abumaaz/)



