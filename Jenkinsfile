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
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Serve App on Server') {
      steps {
        script {
          if (isUnix()) {
            sh 'nohup node server.js > app.log 2>&1 &'
            sh 'sleep 3 && curl -I http://localhost:3000'
          } else {
            bat 'start /B node server.js > app.log 2>&1'
          }
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline complete.'
    }
  }
}
