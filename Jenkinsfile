pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
		sh 'echo "Building my first pipeline..."'
                sh 'npm --version'
            }
        }
    }
}
