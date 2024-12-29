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
