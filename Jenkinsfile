node {
  def commit_id

  stage('Preparation') {
    checkout scm
    sh "git rev-parse --short HEAD > .git/commit-id"
    commit_id = readFile('.git/commit-id').trim()
  }

  stage('Test client') {
    script {
      docker.build("daniladanila2378/react-test", "-f ./client/Dockerfile.spec ./client")
      sh "docker run daniladanila2378/react-test npm test -- --coverage"
    }
  } 
  stage('Publish') {
     docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
       def app = docker.build("daniladanila2378/ico-list-client:${commit_id}", '.').push()
     }
  }                                
}
