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


## Sample Output 
The below images shows the sample implementation of feature toggles on an E-commerce website and how we can manage features easily with **OptiToggle**.
-
-
![01 - Home Screen](https://github.com/user-attachments/assets/99dbbe92-f89f-4413-81a0-38de4caa6208)
-
-
![01 1 - Documentation page](https://github.com/user-attachments/assets/9fbc220f-bb7f-4fd0-9d8a-b903718e5e1f)
-
-
![02 - SignUp](https://github.com/user-attachments/assets/bf192556-e959-4b41-803e-e5277e714275)
-
-
![03 - Login](https://github.com/user-attachments/assets/198ac697-8578-4f91-9fba-5f96bac4512e)
-
-
![04 - User Management Dash](https://github.com/user-attachments/assets/ed197dc5-2331-4a96-a161-0bfc201548b1)
-
-
![04 1 - Add new user](https://github.com/user-attachments/assets/45779329-6a08-448c-94d5-2edbf313bd31)
-
-
![04 2 - Update existing user](https://github.com/user-attachments/assets/4c6bfb04-4653-426a-8049-b216fd293a95)
-
-
![05 - Toggle Management Dash](https://github.com/user-attachments/assets/bbda0f69-e6fb-4250-b30f-ef3fa08dc3d7)
-
-
![05 1 - Add new toggle](https://github.com/user-attachments/assets/d03217e9-c352-4fbd-967c-bd2220f81d3e)
-
-
![05 2 - Update existing toggle](https://github.com/user-attachments/assets/37fea747-5e14-4c63-a274-9f1871f6fe9e)
-
-
![06 - Profile Info Dash](https://github.com/user-attachments/assets/3ead2dda-8734-43ba-98eb-8223bfe83154)
-
-
![07 - Ecom site](https://github.com/user-attachments/assets/614acb1d-27e4-4093-ba4e-4ed102f3cfb4)
-
-
![07 1 - Code snippet](https://github.com/user-attachments/assets/ec747206-439c-4065-a909-1f2ce02ec842)
-
-
![08 - Toggle OFF - ON](https://github.com/user-attachments/assets/e3d4b067-c6bd-42ec-9d15-e7bf22065ce8)
-
-
![08 1 - Ecom discount OFF](https://github.com/user-attachments/assets/1dcb4fe9-4695-43ee-946f-8df5dfbf056a)
-
-
![08 2 - Toggle status changed](https://github.com/user-attachments/assets/95372e72-35b2-4594-bb8f-dd557002b08c)
-
-
![08 3 - Ecom discount ON](https://github.com/user-attachments/assets/7c7212e9-7a8f-40fd-85b7-567e6f5278d0)
-
-
## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. 


## Contact

For any inquiries or issues, please contact:

- **Author**: Ritesh Gaygawali
- **Email**: riteshgaigawali2001.com
