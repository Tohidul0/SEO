# LightShot

A single-page web application that displays scrollable card components and handles file attachments in a responsive modal interface. Built with React, Node.js, and MongoDB using the MERN stack and Vite as a build tool.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Screenshots](#screenshots)
9. [Contributing](#contributing)
10. [License](#license)

---

### Overview

This project implements a scrollable card interface with horizontal scrolling for a single-page layout, a dynamic attachment modal for file uploads, and an API to upload files to a database. It supports viewing file attachments in a list view with details, including the file extension.

### Features

1. **Horizontal Scrolling Cards:** All content is displayed on a single page with a horizontal scrollbar, allowing a streamlined view.
2. **Card-Level Scrolling:** Each card is scrollable individually within its parent.
3. **Attachment Modal:** Open a modal to upload files dynamically with JavaScript.
4. **Multi-File Upload Support:** Upload multiple files at once and display them in a list view with their original file names and extensions.
5. **File Count Display:** Displays the count of uploaded attachments.
6. **RESTful API for File Management:** A backend API to handle file uploads and storage in a MongoDB database.

### Technologies Used

- **Frontend:** React, JavaScript, Tailwind CSS 
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Build Tool:** Vite
- **API Development:** RESTful API

### Getting Started

Follow these instructions to set up the project on your local machine.

#### Prerequisites

- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/projectname.git
   cd projectname
   cd client
   npm install
   cd ../server
   npm install
   cd server
   npm run dev
   cd client
   npm run dev


Screenshots
Include screenshots of your application’s interface for a better visual understanding:

Horizontal scrolling card view
Attachment modal view
List view of uploaded attachments with extension details
