class Quiz {
    constructor(quizType) {
        this.quizType = quizType;
        this.questions = quizData[quizType];
        this.currentQuestion = 0;
        this.score = 0;
        this.answered = new Set();
        this.autoNextDelay = 1500;
        
        // Check if quiz has been completed before
        if (this.isQuizCompleted()) {
            this.showCompletedScreen();
            return;
        }
        
        this.progressBar = this.createProgressBar();
        this.initializeQuiz();
        this.attachEventListeners();
    }

    isQuizCompleted() {
        return localStorage.getItem(`${this.quizType}_completed`) === 'true';
    }

    showCompletedScreen() {
        const container = document.querySelector('.quiz-container');
        const savedScore = localStorage.getItem(`${this.quizType}_score`) || 0;
        const percentage = (savedScore / this.questions.length) * 100;

        container.innerHTML = `
            <div class="completed-screen">
                <h2>Quiz Already Completed!</h2>
                <div class="final-score">Your Previous Score: ${savedScore}/${this.questions.length}</div>
                <div class="percentage">${percentage.toFixed(1)}%</div>
                <div class="reset-section">
                    <p>To retake the quiz, please enter the reset password:</p>
                    <input type="password" id="resetPassword" class="reset-input">
                    <button class="btn btn-primary" onclick="resetQuiz('${this.quizType}')">Reset Quiz</button>
                </div>
                <button class="btn" onclick="window.location.href='index.html'">Back to Main Menu</button>
            </div>
        `;
    }

    createProgressBar() {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        progressContainer.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <div class="progress-text">Question 1 of ${this.questions.length}</div>
        `;
        document.querySelector('.quiz-container').insertBefore(
            progressContainer,
            document.querySelector('.quiz-controls')
        );
        return progressContainer;
    }

    updateProgressBar() {
        const percentage = ((this.currentQuestion + 1) / this.questions.length) * 100;
        const progressFill = this.progressBar.querySelector('.progress-fill');
        const progressText = this.progressBar.querySelector('.progress-text');
        
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
    }

    initializeQuiz() {
        this.renderQuestion();
        this.updateScore();
        this.updateNavButtons();
        this.updateProgressBar();
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestion];
        const quizContent = document.getElementById('quiz-content');
        
        let html = `
            <div class="question-card">
                <h3>${this.currentQuestion + 1}. ${question.question}</h3>
                <ul class="options-list">
        `;

        question.options.forEach((option, index) => {
            const isAnswered = this.answered.has(this.currentQuestion);
            const isSelected = isAnswered && question.selected === index;
            const isCorrect = isAnswered && index === question.correct;
            
            let className = 'option-item';
            if (isAnswered) {
                if (isSelected) {
                    className += isCorrect ? ' correct' : ' wrong';
                } else if (isCorrect) {
                    className += ' correct';
                }
            }

            html += `
                <li class="${className}" data-index="${index}">
                    ${String.fromCharCode(65 + index)}) ${option}
                </li>
            `;
        });

        html += `</ul></div>`;
        quizContent.innerHTML = html;

        if (!this.answered.has(this.currentQuestion)) {
            this.attachOptionListeners();
        }
    }

    attachOptionListeners() {
        const options = document.querySelectorAll('.option-item');
        options.forEach(option => {
            option.addEventListener('click', () => {
                if (!this.answered.has(this.currentQuestion)) {
                    const selectedIndex = parseInt(option.dataset.index);
                    this.checkAnswer(selectedIndex);
                }
            });
        });
    }

    checkAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestion];
        question.selected = selectedIndex;
        
        if (selectedIndex === question.correct) {
            this.score++;
            this.showFeedback('Correct!', 'correct');
        } else {
            this.showFeedback('Incorrect', 'wrong');
        }
        
        this.answered.add(this.currentQuestion);
        this.updateScore();
        this.renderQuestion();

        setTimeout(() => {
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.renderQuestion();
                this.updateNavButtons();
                this.updateProgressBar();
            } else {
                this.finishQuiz();
            }
        }, this.autoNextDelay);
    }

    showFeedback(message, type) {
        const feedback = document.createElement('div');
        feedback.className = `feedback ${type}`;
        feedback.textContent = message;
        document.querySelector('.quiz-container').appendChild(feedback);

        setTimeout(() => feedback.remove(), this.autoNextDelay);
    }

    updateScore() {
        document.getElementById('score').textContent = this.score;
    }

    updateNavButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        prevBtn.disabled = this.currentQuestion === 0;
        nextBtn.textContent = this.currentQuestion === this.questions.length - 1 ? 'Finish' : 'Next';
    }

    attachEventListeners() {
        document.getElementById('prev-btn').addEventListener('click', () => {
            if (this.currentQuestion > 0) {
                this.currentQuestion--;
                this.renderQuestion();
                this.updateNavButtons();
                this.updateProgressBar();
            }
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.renderQuestion();
                this.updateNavButtons();
                this.updateProgressBar();
            } else {
                this.finishQuiz();
            }
        });
    }

    finishQuiz() {
        const percentage = (this.score / this.questions.length) * 100;
        const quizContent = document.getElementById('quiz-content');
        
        // Save completion status and score
        localStorage.setItem(`${this.quizType}_completed`, 'true');
        localStorage.setItem(`${this.quizType}_score`, this.score);
        
        quizContent.innerHTML = `
            <div class="result-card">
                <h2>Quiz Completed!</h2>
                <div class="final-score">Your Score: ${this.score}/${this.questions.length}</div>
                <div class="percentage">${percentage.toFixed(1)}%</div>
                <button class="btn btn-primary" onclick="window.location.href='index.html'">
                    Return to Main Menu
                </button>
            </div>
        `;

        document.querySelector('.quiz-controls').style.display = 'none';
    }
}

// Reset quiz function (called from reset button)
function resetQuiz(quizType) {
    const resetPassword = document.getElementById('resetPassword').value;
    const RESET_PASSWORD = "admin123"; // Change this to your desired reset password
    
    if (resetPassword === RESET_PASSWORD) {
        localStorage.removeItem(`${quizType}_completed`);
        localStorage.removeItem(`${quizType}_score`);
        location.reload();
    } else {
        alert("Incorrect reset password!");
    }
}

// Initialize quiz based on page
const page = window.location.pathname;
if (page.includes('html-mcq')) {
    new Quiz('html');
} else if (page.includes('css-mcq')) {
    new Quiz('css');
} else if (page.includes('js-mcq')) {
    new Quiz('javascript');
} 