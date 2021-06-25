node {
  def commit_id

  stage('Preparation') {
    checkout scm
    sh "git rev-parse --short HEAD > .git/commit-id"
    commit_id = readFile('.git/commit-id').trim()
  }

  stage('test') {
    echo 'lol1'
    script {
      // Building the Docker image
      dockerImage = docker.build("daniladanila2378/react-test", "-f ./client/Dockerfile.spec ./client")
      echo 'lol2'
      try {
        dockerImage.run() {
          echo 'lol3'
          sh "npm test -- --coverage"
          echo 'lol4'
        }
      } finally {
        // Removing the docker image
        sh "docker rmi daniladanila2378/react-test"
      }
    }
  }                                    
}
