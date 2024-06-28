# Product Management Project

This project is a full-stack web application built with Django for the backend and React for the frontend. The application allows users to create, update, delete, and view a list of products using GraphQL.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python (version 3.7 or higher)
- Node.js (version 14 or higher)
- npm or yarn
- PostgreSQL (or another database, if preferred)

## Setup Instructions

### Backend Setup (Django)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/iryanraushan/Assignment-SRJCorp.git
   cd Assignment-SRJCorp
   ```

2. **Set up backend dependencies:**

   #### Navigate to the backend directory:

   ```
   cd product_backend
   ```

   #### Create a virtual environment:

   ```
   python -m venv venv
   ```

   #### Activate the virtual environment:

   - On Linux

   ```
   source venv/bin/activate
   ```

   - On Windows

   ```
   .\env\Scripts\activate
   ```

   #### Install dependencies:

   ```
   pip install -r requirements.txt
   ```

   #### Run migrations:

   ```
   python manage.py migrate
   ```

   #### Create superuser:

   ```
   python manage.py createsuperuser
   ```

   #### Run the server:

   ```
   python manage.py runserver
   ```

### Frontend Setup (React)

1. **Setup frontend:**

   #### Navigate to the backend directory:

   ```
   cd product_frontend
   ```

   #### Install dependencies:

   ```
   npm install
   ```

   #### run:

   ```
   npm run start
   ```

- Open your browser and go to http://localhost:3000 to access the application.

### Contributing

To contribute to this project, please fork the repository and submit a pull request. Ensure your code follows the project's coding standards and includes tests where applicable.
