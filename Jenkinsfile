pipeline {

    agent {
        docker {
            image 'tropatt-playwright:1.62.1'
            args '--ipc=host'
        }
    }

    parameters {
        choice(
            name: 'ENV',
            choices: ['qa', 'stage'],
            description: 'Select test environment'
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select browser for testing'
        )

        choice(
            name: 'TEST_TYPE',
            choices: ['smoke', 'regression', 'sanity'],
            description: 'Select test type'
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
        echo "Using browser: ${params.BROWSER}"
        echo "Test type: ${params.TEST_TYPE}"

        sh 'rm -rf allure-results playwright-report'

        withCredentials([
            usernamePassword(
                credentialsId: 'tropatt-credentials',
                usernameVariable: 'TROPATT_USERNAME',
                passwordVariable: 'TROPATT_PASSWORD'
            )
        ]) {
            sh "TEST_ENV=${params.ENV} npx playwright test --project=${params.BROWSER} --grep @${params.TEST_TYPE}"
        }
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

            allure([
                results: [[path: 'allure-results']]
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