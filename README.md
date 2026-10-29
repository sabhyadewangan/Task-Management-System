# Task Management System Using Firebase Cloud Firestore

A simple web-based Task Management System developed using HTML, JavaScript, and Firebase Cloud Firestore. The application allows users to create, view, update, delete, and filter daily tasks.

## Project Overview

Managing multiple daily tasks manually can be difficult. This project provides a simple cloud-based solution to organize tasks and track their completion status.

Firebase Cloud Firestore is used as the backend database to store task information in the form of documents within a collection.

## Technologies Used

- **HTML:** Frontend structure.
- **JavaScript:** Application logic and functionality.
- **Firebase Cloud Firestore:** Cloud-based NoSQL database.
- **Firebase JavaScript SDK:** Communication between the application and Firestore.
- **Python HTTP Server:** Local application testing.
- **Visual Studio Code:** Development environment.

## Features

- **Add Tasks:** Create tasks with a name, description, and priority.
- **View Tasks:** Retrieve and display stored tasks.
- **Update Tasks:** Change task status between Pending and Completed.
- **Delete Tasks:** Remove unwanted tasks.
- **Filter Tasks:** Display All Tasks, Pending Tasks, or Completed Tasks.
- **Cloud Storage:** Store task information in Firebase Cloud Firestore.

## Database Structure

**Collection Name:** `Tasks`

Each task document contains the following fields:

| Field | Data Type | Description |
|---|---|---|
| taskName | String | Task name |
| description | String | Task description |
| priority | String | High, Medium, or Low |
| status | String | Pending or Completed |
| createdAt | Timestamp | Task creation time |

## Project Structure

```text
Task-Management-System/
│
├── index.html
├── firebase.js
└── app.js
```

## Setup and Execution

### 1. Clone the Repository

```bash
git clone https://github.com/sabhyadewangan/Task-Management-System.git
```

### 2. Open the Project

Open the downloaded project folder in Visual Studio Code.

### 3. Configure Firebase

Create a Firebase project and enable Cloud Firestore.

Register a web application in Firebase and copy its configuration into `firebase.js`.

Make sure the Firestore collection name is `Tasks`.

### 4. Run the Application

Open the VS Code terminal inside the project folder and execute:

```bash
python3 -m http.server 8000
```

Open the following address in your browser:

http://localhost:8000

## CRUD Operations

The application implements the following database operations:

| Operation | Firestore Function |
|---|---|
| Create | `addDoc()` |
| Read | `getDocs()` |
| Update | `updateDoc()` |
| Delete | `deleteDoc()` |

## Advantages

- Cloud-based data storage.
- Simple integration with JavaScript.
- Flexible NoSQL document structure.
- Easy implementation of CRUD operations.
- Scalable database infrastructure.

## Limitations

- Requires an internet connection for cloud database operations.
- Security rules must be configured properly.
- Complex relational queries are less convenient than in relational databases.
- Usage is subject to Firebase plan limits and pricing.

**Security Note:** This repository contains frontend Firebase configuration. The demonstration database uses temporary test-mode rules and should only contain dummy data. Production use requires authentication and restrictive Firestore security rules.

## Future Enhancements

- User authentication and individual task management.
- Task deadlines and reminders.
- Search and sorting functionality.
- Improved dashboard and task analytics.
- Real-time synchronization using Firestore listeners.

## Author

**Sabhya Dewangan**

GitHub: [sabhya dewangan](https://github.com/sabhyadewangan)

## References

- [Firebase Documentation](https://firebase.google.com/docs)
- [Cloud Firestore Documentation](https://firebase.google.com/docs/firestore)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
