pipeline {
    agent { docker { image 'node:latest' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm -v'
            }
        }
    }
}