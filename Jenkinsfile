pipeline {

    agent {
    docker {
        image 'mcr.microsoft.com/playwright:v1.55.0-noble'
        args '--ipc=host'
    }
}

parameters {
    choice(
        name: 'ENV',
        choices: ['qa', 'stage'],
        description: 'Select test environment'
    )
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

       stage('Run Playwright Tests') {
    steps {
        echo "Running tests on environment: ${params.ENV}"
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