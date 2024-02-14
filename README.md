## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the development server by running `npm run dev`.

The application will be running at `http://localhost:3500`.

## Endpoints

### 1. Create Shift

- URL: `POST /api/shifts/:id`
- Description: Creates a new shift for the specified employee.
- Request Body: None required.
- Parameters:
  -`id`: Employee ID
- Example: `http://localhost:3500/api/shifts/12345`

### 2. Register Employee

- URL: `POST /api/employees`
- Description: Registers a new employee.
- Request Body:
  ```json
  {
    "name": "John Doe"
  }
  ```
