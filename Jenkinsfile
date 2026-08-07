pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm install'
          } else {
            bat 'npm install'
          }
        }
      }
    }

    stage('Install Playwright browser') {
      steps {
        script {
          if (isUnix()) {
            sh 'npx playwright install chromium'
          } else {
            bat 'npx playwright install chromium'
          }
        }
      }
    }

    stage('Run tests') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm test'
          } else {
            bat 'npm test'
          }
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
    }
  }
}
