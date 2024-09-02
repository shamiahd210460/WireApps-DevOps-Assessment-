Scalable Web Application Deployment on AWS

This repository contains the infrastructure and configuration files for deploying a scalable web application on AWS. The project utilizes Docker for containerization, PostgreSQL for database management, and Nginx for traffic management. The setup ensures a robust, scalable, and easily maintainable architecture.

Key Features
Dockerized Application: Includes Dockerfiles and Docker Compose configurations for building and managing application services, including web and API services.
PostgreSQL Database: Configured with Docker to manage application data efficiently.
Nginx Traffic Management: Set up to handle HTTP requests and route traffic to appropriate services based on domain names.
AWS Deployment: Instructions and scripts for deploying the application on an AWS EC2 instance, including automated setup using a bash script.
Custom Domain: Integrated with No-IP to provide a user-friendly domain name for accessing the application.
Folder Structure
api/: Contains the backend API service code.
web/: Contains the frontend web application code.
docker-compose.yml: Docker Compose configuration for managing services.
nginx.conf: Nginx configuration file for traffic management.
update-content.sh: Bash script for updating application content and restarting services.
README.md: This file.
Getting Started
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/devops-challenge-apps.git
cd devops-challenge-apps
Set Up Docker Environment:

Ensure Docker and Docker Compose are installed. Then, build and start the services:

bash
Copy code
sudo docker-compose up --build -d
Access the Application:

Navigate to the custom domain set up via No-IP to access the web application and API.

Automated Updates:

Use the update-content.sh script to pull the latest changes and restart the services. Set it up to run automatically using cron for regular updates.

Contributing
Feel free to open issues or submit pull requests if you have suggestions or improvements. Contributions are welcome!

License
This project is licensed under the MIT License. See the LICENSE file for details.
