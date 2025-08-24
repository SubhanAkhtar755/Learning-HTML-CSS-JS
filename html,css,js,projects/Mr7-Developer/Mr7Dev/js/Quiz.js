// Quiz Questions Database
const quizData = {
    math: [
        {
            question: "What is 8 × 7?",
            options: ["54", "56", "58", "60"],
            correct: 1
        },
        {
            question: "What is the square root of 144?",
            options: ["10", "12", "14", "16"],
            correct: 1
        },
        {
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            correct: 2
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for Gold?",
            options: ["Au", "Ag", "Fe", "Cu"],
            correct: 0
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Jupiter", "Mars", "Saturn"],
            correct: 2
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2
        },
        {
            question: "Who was the first President of the United States?",
            options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
            correct: 2
        },
        {
            question: "Which ancient wonder was located in Egypt?",
            options: ["Hanging Gardens", "Great Pyramid", "Colossus", "Temple of Artemis"],
            correct: 1
        }
    ]
};

// Modified quiz state to include attempt tracking
const quizState = {
    math: { current: 0, score: 0, attempted: false },
    science: { current: 0, score: 0, attempted: false },
    history: { current: 0, score: 0, attempted: false }
};

// Check if user has already attempted quizzes
function checkPreviousAttempts() {
    const attempts = JSON.parse(localStorage.getItem('quizAttempts')) || {};
    
    ['math', 'science', 'history'].forEach(subject => {
        if (attempts[subject]) {
            // Quiz was already attempted
            disableQuiz(subject);
            displayPreviousScore(subject, attempts[subject]);
        }
    });
}

// Disable quiz that was already attempted
function disableQuiz(subject) {
    const quizSection = document.getElementById(`${subject}Quiz`);
    const questionElement = document.getElementById(`${subject}Question`);
    const optionsElement = document.getElementById(`${subject}Options`);

    questionElement.innerHTML = `<div class="attempted-message">
        You have already attempted this quiz!
    </div>`;
    optionsElement.innerHTML = '';
    
    // Add visual indication that quiz is locked
    quizSection.classList.add('quiz-attempted');
}

// Display the previous score
function displayPreviousScore(subject, attemptData) {
    const scoreElement = document.getElementById(`${subject}Score`);
    scoreElement.innerHTML = `Previous Score: ${attemptData.score}/${quizData[subject].length}`;
    
    // Update progress bar to show previous progress
    const progress = document.getElementById(`${subject}Progress`);
    const percentage = (attemptData.score / quizData[subject].length) * 100;
    progress.style.width = `${percentage}%`;
}

// Initialize quizzes
function initializeQuizzes() {
    // Check for previous attempts first
    checkPreviousAttempts();
    
    // Only load questions for non-attempted quizzes
    ['math', 'science', 'history'].forEach(subject => {
        const attempts = JSON.parse(localStorage.getItem('quizAttempts')) || {};
        if (!attempts[subject]) {
            loadQuestions(subject);
        }
    });
}

// Load questions for a specific subject
function loadQuestions(subject) {
    const currentQuestion = quizData[subject][quizState[subject].current];
    const questionElement = document.getElementById(`${subject}Question`);
    const optionsElement = document.getElementById(`${subject}Options`);

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(subject, index);
        optionsElement.appendChild(optionDiv);
    });
}

// Modified checkAnswer function
function checkAnswer(subject, selectedIndex) {
    const currentQuestion = quizData[subject][quizState[subject].current];
    const options = document.querySelectorAll(`#${subject}Options .option`);
    
    options.forEach(option => option.style.pointerEvents = 'none');
    
    if (selectedIndex === currentQuestion.correct) {
        options[selectedIndex].classList.add('correct');
        quizState[subject].score++;
        updateScore(subject);
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[currentQuestion.correct].classList.add('correct');
    }

    updateProgress(subject);
    
    setTimeout(() => {
        quizState[subject].current++;
        if (quizState[subject].current < quizData[subject].length) {
            loadQuestions(subject);
        } else {
            // Quiz completed - save attempt to localStorage
            saveQuizAttempt(subject);
            displayQuizComplete(subject);
        }
    }, 1000);
}

// Update progress bar
function updateProgress(subject) {
    const progress = document.getElementById(`${subject}Progress`);
    const percentage = ((quizState[subject].current + 1) / quizData[subject].length) * 100;
    progress.style.width = `${percentage}%`;
}

// Update score display
function updateScore(subject) {
    document.getElementById(`${subject}Score`).textContent = quizState[subject].score;
}

// Save quiz attempt to localStorage
function saveQuizAttempt(subject) {
    const attempts = JSON.parse(localStorage.getItem('quizAttempts')) || {};
    attempts[subject] = {
        score: quizState[subject].score,
        timestamp: new Date().toISOString(),
        completed: true
    };
    localStorage.setItem('quizAttempts', JSON.stringify(attempts));
}

// Display quiz completion message
function displayQuizComplete(subject) {
    const questionElement = document.getElementById(`${subject}Question`);
    const optionsElement = document.getElementById(`${subject}Options`);
    
    questionElement.innerHTML = `
        <div class="completion-message">
            Quiz Completed!
            <br>
            Final Score: ${quizState[subject].score}/${quizData[subject].length}
        </div>`;
    optionsElement.innerHTML = `
        <div class="completion-details">
            Thank you for participating!
            <br>
            This quiz is now locked.
        </div>`;
}

// Add these styles to your CSS file
const styles = `
    .quiz-attempted {
        opacity: 0.8;
        pointer-events: none;
    }

    .attempted-message {
        color: #ff5252;
        font-weight: bold;
        text-align: center;
        padding: 20px;
        background: #fff5f5;
        border-radius: 8px;
    }

    .completion-message {
        color: #4CAF50;
        font-weight: bold;
        text-align: center;
        padding: 20px;
        background: #f1f8e9;
        border-radius: 8px;
    }

    .completion-details {
        text-align: center;
        padding: 15px;
        color: #666;
    }
`;

// Add password configuration
const RESET_PASSWORD = "admin123"; // You can change this password

// Modified reset function with password protection
function resetAllQuizzes() {
    const passwordPrompt = document.getElementById('passwordPrompt');
    passwordPrompt.style.display = 'flex';
}

function checkPasswordAndReset() {
    const passwordInput = document.getElementById('resetPassword');
    const passwordPrompt = document.getElementById('passwordPrompt');
    const errorMessage = document.getElementById('passwordError');
    
    if (passwordInput.value === RESET_PASSWORD) {
        localStorage.removeItem('quizAttempts');
        passwordPrompt.style.display = 'none';
        passwordInput.value = '';
        errorMessage.style.display = 'none';
        location.reload();
    } else {
        errorMessage.style.display = 'block';
        passwordInput.value = '';
        // Shake animation on wrong password
        passwordPrompt.classList.add('shake');
        setTimeout(() => {
            passwordPrompt.classList.remove('shake');
        }, 500);
    }
}

function closePasswordPrompt() {
    const passwordPrompt = document.getElementById('passwordPrompt');
    const passwordInput = document.getElementById('resetPassword');
    const errorMessage = document.getElementById('passwordError');
    
    passwordPrompt.style.display = 'none';
    passwordInput.value = '';
    errorMessage.style.display = 'none';
}

// Add keyboard listener for secret reset
document.addEventListener('keydown', function(event) {
    // Check if 'F' key is pressed while holding Ctrl+Shift
    if (event.key.toLowerCase() === 'q' &&event.shiftKey) {
        event.preventDefault(); // Prevent default browser behavior
        secretReset();
    }
});

// Secret reset function
function secretReset() {
    // Add a subtle flash effect to indicate reset
    document.body.style.transition = 'background-color 0.3s';
    document.body.style.backgroundColor = '#ffeb3b22';
    
    setTimeout(() => {
        localStorage.removeItem('quizAttempts');
        document.body.style.backgroundColor = '';
        
        // Add a small confirmation animation
        const confirmDiv = document.createElement('div');
        confirmDiv.className = 'secret-reset-confirm';
        confirmDiv.textContent = 'Quizzes Reset!';
        document.body.appendChild(confirmDiv);
        
        setTimeout(() => {
            confirmDiv.remove();
            location.reload();
        }, 1000);
    }, 300);
}

// Initialize when page loads
window.onload = initializeQuizzes; 