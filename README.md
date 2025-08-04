# Chat Application MERN-Stack Web Application.


-------
<a href="https://chat-app-2tmo.onrender.com" target="_blank" rel="noopener noreferrer">
  Live Link
</a>
---

  
![Macbook-Air-Iphone-13](../chat/frontend/public/s1.png)



---

## Project Overview

_A real-time **Chat application** built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS and Daisyui. It supports user authentication,  and instant messaging with real-time updates via Socket.IO and image sending using Cloudinary. The application is fully responsive and provides smooth communication with features  and state management using Zustand._

## Technologies & Packages Used

-   **MongoDB**: NoSQL database for flexible and scalable data storage.
-   **Express.js**: Web application framework for Node.js, providing robust features for web and mobile applications.
-   **Node.js**: JavaScript runtime for server-side development.
-   **React.js**: A JavaScript library for building reusable UI components and efficient single-page application views.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Socket.IO**: Enables real-time, bidirectional and event-based communication.
-   **JWT (JSON Web Tokens)**: Securely transmits information between parties as a JSON object.
-   **Zustand**: A Predictable State Container for JavaScript Apps.
-   **React-Hot-Toast**: A JavaScript library for providing toast notifications in React.

## Key Features

-   **User Authentication:** SignIn, SignUp, and Logout functionality.
-   **Real-time Chat:** Users can send and receive messages in real-time.
-   **Message Notifications:** Get notified of new messages with sound and visual alerts.
-   **State Management:** Manage application state efficiently using zustand.
-   **Responsive Design:** Tailwind CSS for a responsive and modern user interface.
-   **User Status:** Display online/offline status of users. 

## How to Install

Follow these steps to set up and run the project locally:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/akashdeep023/Chat_App.git
    cd Chat_App
    ```

---


  
![Macbook-Air-Iphone-13](../chat/frontend/public/s3.png)



---




## How to Install

Follow these steps to set up and run the project locally:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/rahul8279/chat-app.git
    cd Chat_App
    ```

2.  **Install Dependencies:**
    Frontend Folder :

    ```bash
    cd frontend
    npm install
    ```

    Backend Folder :

    ```bash
    cd backend
    npm install
    ```

3.  **Set Up Environment Variables:**

    Configure the following environment variables by creating a .env file in the root of Forntend and Backend Folder:

    Frontend Folder :

    ```bash
    VITE_BACKEND_URL=http://localhost:3000
    ```

    Backend Folder :

    ```bash
   PORT=3000
DB_URL= MONGODB URL
JWT_SECRET= Enter your JASONWEBTOKEN SECRET
CLOUDINARY_CLOUD_NAME= Enter your CLOUD_NAME
CLOUDINARY_API_KEY= Enter your cloudinary API-KEY
CLOUDINARY_SECRET= Enter your cloudinary SECRET

    ```

    Replace the values with your specific configurations.

4.  **Run the Application:**

    Frontend Folder :

    ```bash
    npm run dev
    ```

    Backend Folder :

    ```bash
    npm run dev
    ```

5.  **Open in Your Browser:**

Open `http://localhost:5173` in your web browser.

## Project Structure

    ├── frontend
    │   ├── src
    │   │   ├── assets
    │   │   ├── components
    │   │   ├── pages
    │   │   ├── store
    │   │   ├── constant
    │   │   ├── lib
    │   │   ├── App.jsx
    │   │   ├── main.jsx
    │   │   └── index.css
    │   ├── index.html
    │   ├── vite.config.js
    │   ├── package-lock.json
    │   └── package.json
    ├── backend
    │   ├── lob
    │   ├── controllers
    │   ├── middlewares
    │   ├── models
    │   ├── routes
    │   ├── index.js
    │   ├── .env
    │   └── package.json
    └── README.md

## Author

Rahul Singh \
Email: rana827965@gmail.com \
LinkedIn : https://www.linkedin.com/in/akashdeep023/







## Thank You

Thank you for exploring Chat App! Your feedback is valuable. If you have any suggestions or thoughts, feel free to share them with us. 😊

---
