# Contact Management System

A full-stack contact management application built with MongoDB, Express, React, and Node.js.

## Features

- View all contacts
- Add new contacts
- Update existing contacts
- Delete contacts
- View contact details

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Installation & Setup

### 1. Clone the repository

\`\`\`bash
git clone <repository-url>
cd contact-management-system
\`\`\`

### 2. Backend Setup

\`\`\`bash
cd backend
npm install
\`\`\`

Make sure MongoDB is running on your local machine at port 27017, or update the connection string in `server.js` to point to your MongoDB instance.

Start the backend server:

\`\`\`bash
npm run dev
\`\`\`

The server will run on http://localhost:5000.

### 3. Frontend Setup

Open a new terminal window:

\`\`\`bash
cd frontend
npm install
\`\`\`

Start the React development server:

\`\`\`bash
npm start
\`\`\`

The application will open in your browser at http://localhost:3000.

## Usage

- The home page displays all contacts
- Click "Add Contact" to create a new contact
- Click the eye icon to view contact details
- Click the edit icon to update a contact
- Click the trash icon to delete a contact
