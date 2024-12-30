# User Registration Endpoint

## POST /users/register

### Description

This endpoint is used to register a new user.

### Request Body

The request body must be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example of Responses

- `user`: An object containing:
  - `fullname`: An object containing
    - `firstname`: A string with at least 3 characters (required)
    - `lastname`: A string with at least 3 characters (optional)
  - `email`: A valid email address (required)
  - `password`: A string with at least 6 characters (required)
  - `token` (String): JWT Token

#### Success

- **Status Code**: 201 Created
- **Body**: A JSON object containing the authentication token and user details.

Example:

```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors

- **Status Code**: 400 Bad Request
- **Body**: A JSON object containing validation errors.

Example:

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "firstname must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Notes

- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint.

# User Login Endpoint

## POST /users/login

### Description

This endpoint is used to authenticate a user and provide a JWT token upon successful login.

### Request Body

The request body must be a JSON object containing the following fields:

- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example of Responses

#### Success

- **Status Code**: 200 OK
- **Body**: A JSON object containing the authentication token and user details.

Example:

```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors

- **Status Code**: 400 Bad Request
- **Body**: A JSON object containing validation errors.

Example:

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Errors

- **Status Code**: 401 Unauthorized
- **Body**: A JSON object indicating invalid credentials.

Example:

```json
{
  "message": "Invalid email and password!"
}
```

### Notes

- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint.

# Get User Profile Endpoint

## GET /users/profile

### Description

This endpoint retrieves the profile information of the currently authenticated user.

### Authentication

A valid JWT token must be included in the request header as an Authorization Bearer token or in the `cookie` header.

### Example of Responses

#### Success

- **Status Code**: 200 OK
- **Body**: A JSON object containing the user profile information.

Example:

```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Authentication Errors

- **Status Code**: 401 Unauthorized
- **Body**: A JSON object indicating that authentication is required.

Example:

```json
{
  "message": "Authentication required."
}
```

### Notes

- Ensure that the `Authorization` header is set to `Bearer <JWT>` when making requests to this endpoint.

# Logout User Endpoint

## GET /users/logout

### Description

This endpoint logs out the currently authenticated user by clearing the authentication cookie and invalidating the token.

### Authentication

A valid JWT token must be included in the request header as an Authorization Bearer token or in the `cookie` header.

### Example of Responses

#### Success

- **Status Code**: 200 OK
- **Body**: A JSON object indicating a successful logout.

Example:

```json
{
  "message": "Logged out"
}
```

#### Authentication Errors

- **Status Code**: 401 Unauthorized
- **Body**: A JSON object indicating that authentication is required.

Example:

```json
{
  "message": "Authentication required."
}
```

### Notes

- This endpoint clears the authentication cookie and invalidates the token by adding it to a blacklist.
