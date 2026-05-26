const questions = [
    {
        question: "Wo liegt das Casa Nova?",
        options: [
            "Dorotheergasse 6-8",
            "Liliengasse 2",
            "Wollzeile 36",
            "Rotenturmstraße 20"
        ],
        answer: "Dorotheergasse 6-8",
    },

    {
        question: "Wo liegt die Eden Bar?",
        options: [
            "Liliengasse 2",
            "Dorotheergasse 6-8",
            "Wollzeile 36",
            "Seilerstätte 25"
        ],
        answer: "Liliengasse 2",
    },

    {
        question: "Wo liegt die Globe Wien - Marx Halle?",
        options: [
            "Karl-Farkas-Gasse 19",
            "Rabengasse 3",
            "Lenaugasse 1A",
            "Wallensteinplatz 6"
        ],
        answer: "Karl-Farkas-Gasse 19",
    },

    {
        question: "Wo liegt das Kabarett Niedermair?",
        options: [
            "Lenaugasse 1A",
            "Rabengasse 3",
            "Wallensteinplatz 6",
            "Wollzeile 36"
        ],
        answer: "Lenaugasse 1A",
    },

    {
        question: "Wo liegt das Kabarett Vindobona?",
        options: [
            "Wallensteinplatz 6",
            "Lenaugasse 1A",
            "Rabengasse 3",
            "Goldschlagstraße 169"
        ],
        answer: "Wallensteinplatz 6",
    },

    {
        question: "Wo liegt die Kulisse?",
        options: [
            "Rosensteingasse 39",
            "Hernalser Hauptstraße 55",
            "Rabengasse 3",
            "Spittelberggasse 10"
        ],
        answer: "Rosensteingasse 39",
    },

    {
        question: "Wo liegt das Metropol?",
        options: [
            "Hernalser Hauptstraße 55",
            "Rosensteingasse 39",
            "Wallensteinplatz 6",
            "Rabengasse 3"
        ],
        answer: "Hernalser Hauptstraße 55",
    },

    {
        question: "Wo liegt das Orpheum?",
        options: [
            "Steigenteschgasse 94b",
            "Karl-Farkas-Gasse 19",
            "Goldschlagstraße 169",
            "Rabengasse 3"
        ],
        answer: "Steigenteschgasse 94b",
    },

    {
        question: "Wo liegt das Rabenhof Theater?",
        options: [
            "Rabengasse 3",
            "Lenaugasse 1A",
            "Spittelberggasse 10",
            "Liliengasse 2"
        ],
        answer: "Rabengasse 3",
    },

    {
        question: "Wo liegt die Sargfabrik?",
        options: [
            "Goldschlagstraße 169",
            "Mariahilfer Straße 81",
            "Spittelberggasse 10",
            "Wollzeile 36"
        ],
        answer: "Goldschlagstraße 169",
    },

    {
        question: "Wo liegt das Schutzhaus der Zukunft?",
        options: [
            "Auf der Schmelz",
            "Goldschlagstraße 169",
            "Mariahilfer Straße 81",
            "Hernalser Hauptstraße 55"
        ],
        answer: "Auf der Schmelz",
    },

    {
        question: "Wo liegt das Simpl?",
        options: [
            "Wollzeile 36",
            "Liliengasse 2",
            "Dorotheergasse 6-8",
            "Rabengasse 3"
        ],
        answer: "Wollzeile 36",
    },

    {
        question: "Wo liegt der Stadtsaal?",
        options: [
            "Mariahilfer Straße 81",
            "Wollzeile 36",
            "Rotenturmstraße 20",
            "Spittelberggasse 10"
        ],
        answer: "Mariahilfer Straße 81",
    },

    {
        question: "Wo liegt das Theater Akzent?",
        options: [
            "Theresianumgasse 18",
            "Lisztstraße 1",
            "Lothringerstraße 20",
            "Seilerstätte 25"
        ],
        answer: "Theresianumgasse 18",
    },

    {
        question: "Wo liegt das Theater am Spittelberg?",
        options: [
            "Spittelberggasse 10",
            "Rabengasse 3",
            "Lenaugasse 1A",
            "Mariahilfer Straße 81"
        ],
        answer: "Spittelberggasse 10",
    },
];
// عدد الأسئلة الكلي
const totalQuestions = questions.length;

// خلط عشوائي (Fisher-Yates) — للخيارات وترتيب الأسئلة عند كل فتح/تحديث صفحة
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// نسخ الأسئلة وخلط ترتيبها عند كل تحميل صفحة
// let remainingQuestions = [...questions];
let remainingQuestions = shuffleArray(questions);
let score = 0;
let answered = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    feedbackEl.textContent = "";
    nextBtn.disabled = true;
    answersEl.innerHTML = "";

    // انتهاء الاختبار
    if (remainingQuestions.length === 0) {
        showResult();
        return;
    }

    // const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const currentQuestion = remainingQuestions.splice(0, 1)[0];

    questionEl.textContent = `(${answered + 1} / ${totalQuestions}) ${currentQuestion.question}`;

    // خلط الخيارات عشوائياً عند كل سؤال (عند كل تحديث أو فتح صفحة)
    const shuffledOptions = shuffleArray(currentQuestion.options);
    shuffledOptions.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;

        btn.onclick = () => {
            answered++;

            // تعطيل كل الأزرار
            const allButtons = document.querySelectorAll("#answers button");
            allButtons.forEach(b => b.disabled = true);

            // لو الإجابة صحيحة
            if (option === currentQuestion.answer) {
                btn.style.background = "#0d6efd"; // أزرق
                btn.style.color = "white";
                feedbackEl.textContent = "✅ إجابة صحيحة";
                feedbackEl.className = "correct";
                score++;
            } else {
                // الإجابة المختارة خطأ → أحمر
                btn.style.background = "#dc3545";
                btn.style.color = "white";
                feedbackEl.textContent = "❌ إجابة خاطئة";
                feedbackEl.className = "wrong";

                // إظهار الإجابة الصحيحة باللون الأزرق
                allButtons.forEach(b => {
                    if (b.textContent === currentQuestion.answer) {
                        b.style.background = "#00FFFF"; // أزرق
                        b.style.color = "white";
                    }
                });
            }

            scoreEl.textContent = `النتيجة: ${score}`;
            nextBtn.disabled = false;
        };


        answersEl.appendChild(btn);
    });
}

function showResult() {
    const wrong = totalQuestions - score;
    const successRate = ((score / totalQuestions) * 100).toFixed(1);

    questionEl.innerHTML = "🎉 انتهى الاختبار!";
    answersEl.innerHTML = `
        <p>✅ الإجابات الصحيحة: <strong>${score}</strong></p>
        <p>❌ الأخطاء: <strong>${wrong}</strong></p>
        <p>📊 نسبة النجاح: <strong>${successRate}%</strong></p>
    `;

    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
}

// زر التالي
nextBtn.onclick = loadQuestion;

// بدء اللعبة
loadQuestion();
