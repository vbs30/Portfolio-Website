@Library("CICD") _

pipeline {
    agent { label "vbs" }
    
    stages {
        stage('Code') {
            steps {
                script{
                    clone("https://github.com/vbs30/Portfolio-Website.git", "master")
                }
            }
        }
        
        stage('Build') {
            steps {
                script{
                    docker_build("portfolio", "latest", "vinayak30")
                }
                
            }
        }
        
        stage('PushToHub') {
            steps {
                script{
                    docker_push("portfolio", "latest", "vinayak30")
                }
                
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying'
                sh "docker compose up -d"
            }
        }
    }
}
