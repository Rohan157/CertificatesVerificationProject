# HotelCertificateVerificationProject

## Table of Contents

- [Getting Started](#getting-started)
  - [Setting up the React App](#setting-up-the-react-app)
  - [Setting up the Dotnet App](#setting-up-the-dotnet-app)

## Getting Started

To get started with this project, you will need to set up both the React App and the Dotnet App. Follow the instructions below to set up and run the project locally.

### Setting up the React App

Inside the main folder Navigate to the client Directory: Open your command prompt and navigate to the client project directory.

#### Install Dependencies:

Run the following command to install the required dependencies for the React App.

```
npm install
```

#### Run the React App:

Start the development server by running the following command:

```
npm run dev
```

Access the App: The React App will be running at:

http://localhost:5173/.

### Setting up the Dotnet App

#### Navigate to the Server Directory:

Open the solution file located in the server directory.

#### Open Package Manager Console or Terminal:

In Visual Studio, open the Package Manager Console.
Apply Database Migration: Add the database migration using the following command:

```
dotnet ef database update --project Server.Infrastructure --startup-project Server.API
```

#### Run the Dotnet App:

Now, start the Dotnet Application and you are good to go.
