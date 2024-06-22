# Project Name: Lendsqr-Fe-Test

## Introduction
This project is a test assignment for Lendsqr, designed to demonstrate my proficiency in frontend development and my ability to create a functional, responsive application.

## Features
- Four main pages: Login, Dashboard, User Page, and User Details Page.
- Data fetching from a mock API with 500 records.
- Fully mobile responsive design.
- Built with React, Vite and Typescript for fast development and performance.

## Project Structure
```
frontend/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── models/
│   │   ├── router/
│   │   └──  stores/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── image/
│   │   ├── svg/
│   ├── commom/
│   │   ├── filter/
│   │   ├── loading/
│   │   ├── Pagination.scss
│   │   └── Pagination.tsx
│   ├── features/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── sidebar/
│   │   └── users/
│   ├── hooks/
│   │   └── useWindowResize.tsx
│   ├── App.tsx
│   ├── main.tsx
├── index.html
├── .gitignore
├── package.json
├── README.md
├── vite.config.js
```

## Setup and Installation
1. **Clone the repository:**
    ```sh
    git clone https://github.com/Benkennyt/lendsqr-fe-test.git
    cd frontend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm run dev
    ```

4. **Build for production:**
    ```sh
    npm build
    ```

5. **Preview the production build:**
    ```sh
    npm preview
    ```

## Usage
- Navigate to `http://localhost:5173` to view the application in development mode.
- Use the login page to authenticate (no actual authentication logic is implemented for the mock).
- Navigate through the Dashboard, User Page, and User Details Page to view data fetched from the mock API.

## Pages Overview

### Login Page
- **Path:** `/login`
- **Description:** The entry point for users to log in. Provides a simple form to enter login credentials.

### Dashboard
- **Path:** `/dashboard`
- **Description:** The main dashboard displaying an overview of the app’s functionalities and quick access links.

### User Page
- **Path:** `/users`
- **Description:** Displays a list of users fetched from the mock API. Users can click on a user to view more details.


## API Integration
- **Mock API:** A mock API with 500 records is used for data fetching.
- **API File:** `src/api/mockApi.js` contains functions to fetch data from the mock API.

