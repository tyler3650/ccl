const myQuestions = [
            {
                type: "choice",
                question: "What's your dog's name?",
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
                type: "choice",
                question: "Where did we have our first kiss? (w rizz from me btw)",
                answers: [
                    { text: "in the egg under the Greensborough shops", correct: false },
                    { text: "at the top of the slide at your local playground", correct: true },
                    { text: "in our minecraft world", correct: false },
                    { text: "in your head (I'm not real)", correct: false }
                ]
            },
            {
                type: "text",
                question: "What's my middle name?",
                correctAnswer: "john"
            },
            {
                type: "text",
                question: "What's your middle name?",
                correctAnswer: "caroline"
            },
            {
                type: "text",
                question: "What's my youngest sister's name?",
                correctAnswer: "annie"
            },
            {
                type: "text",
                question: "How many gym sessions have we done together? (write a number e.g. 67)",
                correctAnswer: "2"
            },
            {
                type: "text",
                question: "How many (whole) days until you're in my arms?",
                correctAnswer: "7"
            },
            {
                type: "choice",
                question: "What's your favourite thing about me?",
                answers: [
                    { text: "my abs (boring)", correct: false },
                    { text: "my insane minecraft skills", correct: true },
                    { text: "my coding tekkers", correct: true },
                    { text: "my elite rizz", correct: true },
                    { text: "my instagram following list", correct: false },
                    { text: "my shirtless cooking expertise", correct: true },
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

            const qImage = document.getElementById('question-image');
            if (question.image) {
                qImage.src = question.image;
                qImage.classList.remove('hidden');
            } else {
                qImage.classList.add('hidden');
            }
            
            const answerButtons = document.getElementById('answer-buttons');
            answerButtons.innerHTML = '';

            if (question.type === "text") {
                const inputField = document.createElement('input');
                inputField.type = "text";
                inputField.classList.add('text-input');
                inputField.placeholder = "Type your answer...";
                
                const submitBtn = document.createElement('button');
                submitBtn.innerText = "Submit Answer";
                submitBtn.classList.add('btn');
                
                submitBtn.onclick = () => {
                    const herAnswer = inputField.value.toLowerCase().trim();
                    const isCorrect = (herAnswer === question.correctAnswer.toLowerCase());
                    selectAnswer(isCorrect);
                };

                answerButtons.appendChild(inputField);
                answerButtons.appendChild(submitBtn);

            } else {
                question.answers.forEach(answer => {
                    const button = document.createElement('button');
                    button.innerText = answer.text;
                    button.classList.add('btn');
                    button.onclick = () => selectAnswer(answer.correct);
                    answerButtons.appendChild(button);
                });
            }
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