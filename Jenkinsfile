pipeline {

    environment {
        JAVA_HOME = '/usr/lib/jvm/java-21-openjdk-amd64'
        PATH = "/usr/lib/jvm/java-21-openjdk-amd64/bin:${env.PATH}"
    }

    agent {
    docker {
        image 'mcr.microsoft.com/playwright:v1.62.1'
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
        stage('Verify Java') {
    steps {
        sh 'echo JAVA_HOME=$JAVA_HOME'
        sh 'which java'
        sh 'java -version'
    }
}

       stage('Run Playwright Tests') {
    steps {
        echo "Running tests on environment: ${params.ENV}"
        echo "Using browser: ${params.BROWSER}"
        echo "Test type: ${params.TEST_TYPE}"

        withCredentials([
            usernamePassword(
                credentialsId: 'tropatt-credentials',
                usernameVariable: 'TROPATT_USERNAME',
                passwordVariable: 'TROPATT_PASSWORD'
            )
        ]) 
        {
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