pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Serve App on Server') {
            steps {
                echo 'Application is ready.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline complete.'
        }
        success {
            echo 'Build Successful!'
        }
        failure {
            echo 'Build Failed!'
        }
    }
}
