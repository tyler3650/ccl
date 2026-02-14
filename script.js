const myQuestions = [
            {
                question: "What is the correct spelling of your dog's name?",
                answers: [
                    { text: "Butterball", correct: false },
                    { text: "Butter ball", correct: false },
                    { text: "butter ball", correct: false },
                    { text: "ButterBall", correct: false },
                    { text: "butterball", correct: false },
                    { text: "Butter Ball", correct: true },
                    { text: "Butter-ball", correct: false },
                    { text: "butt her balls", correct: false }
                ]
            },
            {
                question: "Where did we have our first kiss (w rizz from me btw)?",
                answers: [
                    { text: "in the egg under the Greensborough shops", correct: false },
                    { text: "at the top of the slide at your local playground", correct: true },
                    { text: "in our minecraft world", correct: false },
                    { text: "in your head (I'm not real)", correct: false }
                ]
            },
            {
                question: "What's my middle name?",
                answers: [
                    { text: "Caroline", correct: true },
                    { text: "John", correct: false },
                    { text: "Butterball", correct: false },
                ]
            },
        ];

        
        let currentQuestionIndex = 0;

        function startQuiz() {
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('question-screen').classList.remove('hidden');
            showQuestion();
        }

        function showQuestion() {
            let question = myQuestions[currentQuestionIndex];
            document.getElementById('question-text').innerText = question.question;
            
            const answerButtons = document.getElementById('answer-buttons');
            answerButtons.innerHTML = '';

            question.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add('btn');
                button.onclick = () => selectAnswer(answer.correct);
                answerButtons.appendChild(button);
            });
        }

        function selectAnswer(isCorrect) {
            if (isCorrect) {
                currentQuestionIndex++;
                if (currentQuestionIndex < myQuestions.length) {
                    showQuestion();
                } else {
                    showReward();
                }
            } else {
                alert("nah, try again lol");
            }
        }

        function showReward() {
            document.getElementById('question-screen').classList.add('hidden');
            document.getElementById('reward-screen').classList.remove('hidden');
        }