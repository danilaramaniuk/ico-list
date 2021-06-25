node {
  def commit_id

  stage('Preparation') {
    checkout scm
    sh "git rev-parse --short HEAD > .git/commit-id"
    commit_id = readFile('.git/commit-id').trim()
  }

  stage('test') {
    echo 'TODO'
    script {
      // Building the Docker image
      dockerImage = docker.build -t daniladanila2378/react-test -f ./client/Dockerfile.spec ./client

      try {
        dockerImage.inside() {
          // Extracting the PROJECTDIR environment variable from inside the container
          def PROJECTDIR = sh(script: 'echo \$PROJECTDIR', returnStdout: true).trim()

          // Copying the project into our workspace
          sh "cp -r '$PROJECTDIR' '$WORKSPACE'"

          // Running the tests inside the new directory
          dir("$WORKSPACE$PROJECTDIR") {
              sh "npm test -- --coverage"
          }
        }
      } finally {
        // Removing the docker image
        sh "docker rmi daniladanila2378/react-test"
      }
    }
  }                                    
}
