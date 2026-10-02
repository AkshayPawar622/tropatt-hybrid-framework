pipeline {

    agent {
    docker {
        image 'mcr.microsoft.com/playwright:v1.62.1-noble'
        args '--ipc=host'
    }
}

parameters {
    choice(
        name: 'ENV',
        choices: ['qa', 'stage'],
        description: 'Select test environment'
    ),
    choice(
        name: 'Browser',
        choices:['chromium', 'fireforx', 'webkit'],
        description: 'Select browser for testing'
    ),
    choice(
        name: 'TestType',
        choices:['smoke', 'regression', 'Sanity'],
        description: ''
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
        echo "Using browser: ${params.Browser}"
        sh 'npx playwright test'
    }
}
    }

   post {
    always {
        publishHTML([
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright Report'
        ])
    }

    success {
        echo 'Playwright tests completed successfully'
    }

    failure {
        echo 'Playwright tests failed'
    }
}
}