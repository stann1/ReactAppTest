pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('build') {
            steps {
		sh 'echo "Building my first pipeline..."'
                sh 'npm --version'
            }
        }
	stage('Test') {
	    steps {
	        sh 'npm test'
	    }
	}
    }
}
