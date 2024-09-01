document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is HTML?",
            options: ["Place", "Animal", "Language", "Tree"],
            answer: 2
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: 1
        },
        {
            question: "Which language add functionality ?",
            options: ["Css", "Bootstrap", "C++", "Jaavscript"],
            answer: 3
        },
        {
            question: "Which language is add styling to html documents?",
            options: ["PHP", "CSS", "Database", "React"],
            answer: 1
        },
        {
            question: "Which HTML element is used for creating Table?",
            options: ["</table>", "<table>", "<form>", "<tablt>"],
            answer:1
        },
        {
            question: "Which HTML element is used for creating Form?",
            options: ["</form>", "<forms>", "<form>", "<table>"],
            answer:2
        },
        {
            question: "Which Sign  is used for creating id html?",
            options: ["%", "$", "@", "#"],
            answer:3
        },
        {
            question: "What is variable?",
            options: ["container for value", "datatype", "element", "class"],
            answer:0
        },
        {
            question: "What is prompt?",
            options: ["class", "dialogue box", "id", "variable"],
            answer:1
        },
        {
            question: "What is th answer of 2 + '2'?",
            options: ["4", "22", "6", "2"],
            answer:1
        },



    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionText = document.getElementById('question-text');
    const answerButtons = document.querySelectorAll('.answer-button');
    const scoreDisplay = document.getElementById('score');
    const nextButton = document.getElementById('next-question');
    const playAgainButton = document.getElementById('play-again');

    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        answerButtons.forEach((button, index) => {
            button.textContent = question.options[index];
            button.onclick = () => handleAnswer(index);
        });
    }

    function handleAnswer(selectedIndex) {
        const correctIndex = questions[currentQuestionIndex].answer;
        if (selectedIndex === correctIndex) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            alert('Correct!');
        } else {
            alert('Try Again!');
        }
        nextButton.style.display = 'inline-block';
        answerButtons.forEach(button => button.disabled = true);
    }

    function loadNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
            nextButton.style.display = 'none';
            answerButtons.forEach(button => button.disabled = false);
        } else {
            showEndGame();
        }
    }

    function showEndGame() {
        questionText.textContent = `Game Over! Your score is ${score}.`;
        answerButtons.forEach(button => button.style.display = 'none');
        nextButton.style.display = 'none';
        playAgainButton.style.display = 'inline-block';
    }

    function playAgain() {
        currentQuestionIndex = 0;
        score = 0;
        scoreDisplay.textContent = `Score: ${score}`;
        playAgainButton.style.display = 'none';
        answerButtons.forEach(button => button.style.display = 'inline-block');
        displayQuestion();
    }

    nextButton.addEventListener('click', loadNextQuestion);
    playAgainButton.addEventListener('click', playAgain);

    // Keyboard Interaction
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key >= '1' && key <= '4') {
            handleAnswer(Number(key) - 1);
        }
    });

    // Hover Effects
    answerButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#f0ad4e';
            button.style.color = '#fff';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '';
            button.style.color = '';
        });
    });

    // Initialize
    displayQuestion();
});
