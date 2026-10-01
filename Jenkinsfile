pipeline {

    agent {
    docker {
        image 'mcr.microsoft.com/playwright:v1.55.0-noble'
        args '--ipc=host'
    }
}

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {

        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**',
                allowEmptyArchive: true
            )
        }

        success {
            echo 'Playwright tests completed successfully'
        }

        failure {
            echo 'Playwright tests failed'
        }
    }
}