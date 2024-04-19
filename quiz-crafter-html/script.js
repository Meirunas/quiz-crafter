// script.js
document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const nextButton = document.getElementById('next');

    let currentQuestionIndex = 0;
    let score = 0;
    const questions = [
        {
            question: "What does HTML stand for?",
            answers: {
                a: "Hyper Text Markup Language",
                b: "Home Tool Markup Language",
                c: "Hyperlinks and Text Markup Language"
            },
            correctAnswer: "a"
        },
        {
            question: "Which language runs in a web browser?",
            answers: {
                a: "Java",
                b: "C",
                c: "JavaScript"
            },
            correctAnswer: "c"
        },
        {
            question: "What year was JavaScript launched?",
            answers: {
                a: "1995",
                b: "1996",
                c: "1994"
            },
            correctAnswer: "a"
        }
    ];

    function showQuestion(questionIndex) {
        const q = questions[questionIndex];
        quizContainer.innerHTML = `<div class="text-xl font-semibold">${q.question}</div>
            <div class="mt-4">
                <label class="block"><input type="radio" name="answer" value="a" class="mr-2">${q.answers.a}</label>
                <label class="block"><input type="radio" name="answer" value="b" class="mr-2">${q.answers.b}</label>
                <label class="block"><input type="radio" name="answer" value="c" class="mr-2">${q.answers.c}</label>
            </div>`;
    }

    function showResults() {
        resultsContainer.innerHTML = `<div class="text-lg font-semibold">Your score is: ${score} out of ${questions.length}</div>`;
    }

    function checkAnswer() {
        const answerContainers = quizContainer.querySelectorAll('input[name="answer"]:checked');
        if (answerContainers.length > 0 && answerContainers[0].value === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
    }

    nextButton.addEventListener('click', () => {
        checkAnswer();
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            showResults();
            nextButton.style.display = 'none';
        } else {
            showQuestion(currentQuestionIndex);
        }
    });

    showQuestion(currentQuestionIndex);
});
