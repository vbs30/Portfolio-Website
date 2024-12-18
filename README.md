# 🚀 Personal Portfolio Website

## 📝 Project Overview

This is a personal portfolio website built using React.js, designed to showcase my projects, skills, and professional experience. The project is set up with a robust CI/CD pipeline using Jenkins, Docker, and GitHub for seamless deployment and continuous integration.

## 🛠 Technologies Used

- **Frontend**: React.js
- **Containerization**: Docker
- **CI/CD**: Jenkins
- **Version Control**: GitHub

## 🗂 Project Structure

```
portfolio-website/
│
├── src/                # 💻 React source code
├── public/             # 🖼 Public assets
├── Dockerfile          # 🐳 Docker configuration
├── docker-compose.yml  # 🚢 Docker Compose configuration
├── Jenkinsfile         # 🤖 Jenkins pipeline configuration
└── README.md           # 📖 Project documentation
```

## 🎯 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or Yarn
- Docker
- Docker Compose

## 🛠 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/vbs30/Portfolio-Website.git
cd Portfolio-Website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Locally

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## 🐳 Docker Deployment

### Building Docker Image

```bash
docker build -t portfolio-website .
```

### Running with Docker Compose

```bash
docker-compose up -d
```

## 🔄 CI/CD Pipeline Configuration

### Jenkins Pipeline Overview

The project uses a master-agent Jenkins configuration for automated deployment:

1. **Source Code Management**: 
   - Repository: GitHub
   - URL: https://github.com/vbs30/Portfolio-Website.git

2. **Automated Triggers**:
   - Automatic deployment triggered on:
     - Push to main branch
     - Pull request merges

### Jenkins Pipeline Stages

The `Jenkinsfile` defines the following typical stages:
- Checkout
- Install Dependencies
- Build
- Test
- Docker Build
- Deploy

## 🚀 Deployment Process

1. Code changes are pushed to GitHub
2. Jenkins automatically detects the changes
3. Pipeline runs tests and builds the application
4. Docker image is created
5. Application is deployed to the target environment

## 🎨 Customization

To customize the portfolio:
1. Update content in `src/` directory
2. Modify components as needed
3. Add your personal projects, skills, and information

## 🛠 Troubleshooting

- Ensure all dependencies are installed correctly
- Check Docker and Jenkins configurations
- Verify network and port settings

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Your Name - vbs02002@gmail.com
Project Link: http://13.201.53.123:3000/
