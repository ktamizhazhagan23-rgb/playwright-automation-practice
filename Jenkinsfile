pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ktamizhazhagan23-rgb/playwright-automation-practice.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
stage('Install Browser') {
    steps {
        bat 'set PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=120000 && npx playwright install chromium'
    }
}
       stage('Run Tests') {
    steps {
        bat 'npx playwright test tests/MyFirstTest.spec.ts tests/MyFirstTest2.spec.ts'
    }
}
    }
}