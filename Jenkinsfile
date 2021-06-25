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
        // dockerImage.inside() {
        //   echo 'lol3'
        //   // Extracting the PROJECTDIR environment variable from inside the container
        //   // def PROJECTDIR = sh(script: 'echo \$PROJECTDIR', returnStdout: true).trim()

        //   // // Copying the project into our workspace
        //   // sh "cp -r '$PROJECTDIR' '$WORKSPACE'"

        //   // // Running the tests inside the new directory
        //   // dir("$WORKSPACE$PROJECTDIR") {
        //   //     sh "npm test -- --coverage"
        //   // // }
        //   // dir("client") {
        //   //     sh "npm test -- --coverage"
        //   // }
        //   // // sh "npm test -- --coverage"
        //   //  echo 'lol4'
        // }
        echo 'lol3'
        sh "docker run daniladanila2378/react-test npm test -- --coverage"
        echo 'lol4'
      } finally {
        // Removing the docker image
        sh "docker rmi daniladanila2378/react-test"
      }
    }
  }                                    
}
