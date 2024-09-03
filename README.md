# DevOps Challenge Apps

## Overview

This repository contains a project that demonstrates the deployment of a scalable web application on AWS using Docker, PostgreSQL, and Nginx. The project includes steps for setting up a virtual machine, configuring domain names, and managing traffic with Nginx.

## Project Setup

### 1. Setting Up the Virtual Machine

- Provisioned a Linux-based virtual machine on AWS.
- Configured firewall settings to allow web traffic on ports 80 (HTTP) and 443 (HTTPS).

### 2. Creating a Domain Name

- Used No-IP to set up a custom domain name (e.g., web.example.com) pointing to the VM’s IP address.

### 3. Automating Setup on the Virtual Machine

- Used a bash script to install necessary software (Nginx, Docker, Docker Compose) on the VM.

### 4. Cloning and Setting Up Repositories

- Cloned the `busbud/devops-challenge-apps` repository.
- Created Dockerfiles and Docker Compose configurations to build and run the services.

### 5. Setting Up the Database (PostgreSQL)

- Configured PostgreSQL database service in the `docker-compose.yml` file.

### 6. Setting Up the Application

- Used Docker Compose to build and start the web and API services.

### 7. Configuring Nginx for Traffic Management

- Configured Nginx to route traffic to the web and API services based on domain names.

### 8. Configuring HTTP

- Verified that the application is accessible through web browsers via HTTP.

## Automation

### Basic Automation with a Bash Script

- A bash script (`update-app.sh`) is provided to update the application content or configuration. The script pulls the latest changes from the GitHub repository, rebuilds, and restarts the Docker services.

### Cron Job Setup

- The script is set up to run automatically every day at 2 AM using cron.

## Results

- The web application is live and accessible online.
- Nginx effectively routes traffic to the correct services.
- Custom domain name from No-IP is successfully used.
- The system can be scaled by adding more containers if needed.

## Troubleshooting

- **VM Provisioning Issues:** Use SSH access to troubleshoot if the VM setup fails.
- **High Traffic:** Add more containers to handle higher traffic.

## Conclusion

This repository showcases the deployment of a scalable web application on AWS with Docker, PostgreSQL, and Nginx. It includes automation scripts and configuration for efficient management.

---

Feel free to explore the repository and contribute to its development!
