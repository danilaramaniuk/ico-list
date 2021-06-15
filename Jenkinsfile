pipeline {
    agent { docker { image 'node:14-alpine' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
                echo 'YOY'
                sh 'node -v'
            }
        }
    }
}