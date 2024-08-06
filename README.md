# OptiToggle Frontend

## Overview

OptiToggle is a web application for managing feature toggles and user management. This frontend application, built with React, provides a user-friendly interface for interacting with the OptiToggle backend services.

## Features

- **Home Page**: Overview of features, pricing plans, and FAQs.
- **Login Page**: User login functionality with validation.
- **SignUp Page**: User registration with form validation.
- **Documentation Page**: Access API documentation directly from the application.
- **Responsive Design**: Ensures a seamless experience across different devices.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **React Router**: For navigation between different pages.
- **Reactstrap**: UI components for styling and layout.
- **MDBReact**: Additional UI components and icons.
- **CSS**: Custom styles for layout and design.
- **Axios**: For making HTTP requests to the backend.
- **React Icons**: For adding icons to the interface.
- **React Toastify**: For displaying notifications.

## Installation

To set up and run the frontend application locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-repo/optitoggle-client.git
   cd optitoggle-client
   ```

2. **Install Dependencies**:

   Ensure you have `node` and `npm` installed. Then, install the required packages:

   ```bash
   npm install
   ```

3. **Run the Application**:

   Start the development server:

   ```bash
   npm start
   ```

   The application should now be accessible at `http://localhost:3000`.

## Folder Structure

- **`src/`**: Contains the source code for the application.
  - **`components/`**: Reusable components.
  - **`pages/`**: Page components corresponding to different routes.
  - **`services/`**: API service functions for communicating with the backend.
  - **`App.js`**: Main application component and routing configuration.
  - **`index.js`**: Entry point for the React application.
  - **`styles.css`**: Global styles.

## API Endpoints

The frontend communicates with the following backend endpoints:

- **User Management**:
  - `POST /api/v1/auth/register`: Register a new user.
  - `POST /api/v1/auth/login`: Login a user.
  - `GET /optitoggle/users`: Retrieve all users.
  - `POST /optitoggle/users`: Create a new user.
  - `PUT /optitoggle/users/{userid}`: Update a user.
  - `DELETE /optitoggle/users/{userid}`: Delete a user.

- **Feature Toggles**:
  - `GET /optitoggle/toggle`: Retrieve all feature toggles.
  - `POST /optitoggle/user/{userid}/toggle`: Create a new feature toggle.
  - `PUT /optitoggle/toggle/{flagId}`: Update a feature toggle.
  - `DELETE /optitoggle/toggle/{flagId}`: Delete a feature toggle.

## Testing

To run tests, use:

```bash
npm test
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. 


## Contact

For any inquiries or issues, please contact:

- **Author**: Ritesh Gaygawali
- **Email**: riteshgaigawali2001.com

```
