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

       stage('Run Tests') {
    steps {
        bat 'npx playwright test tests/MyFirstTest.spec.ts tests/MyFirstTest2.spec.ts'
    }
}
    }
}