pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "tejavardhan0987/jenkins-docker-ci-cd-pipeline"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/teja93208-commits/jenkins-docker-ci-cd-pipeline.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-cred', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }

        stage('Success Message') {
            steps {
                echo '✅ CI/CD Pipeline executed successfully!'
            }
        }
    }
}
