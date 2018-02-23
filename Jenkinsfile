pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Install dependencies') {
            steps {
		sh 'echo "Building my first pipeline..."'
                sh 'npm install'
            }
        }
	stage('Test') {
	    steps {
	        sh 'npm test'
	    }
	}
	stage('Build') {
	    steps {
	        sh 'npm run build'
	    }
	}
    }
}
