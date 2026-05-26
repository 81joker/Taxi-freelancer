const questions = [
    {
        question: "Wo liegt das Casa Nova?",
        options: [
            "Bezirke 1. Dorotheergasse 6-8",
            "Bezirke 1. Liliengasse 2",
            "Bezirke 1. Wollzeile 36",
            "Bezirke 1. Rotenturmstraße 20"
        ],
        answer: "Bezirke 1. Dorotheergasse 6-8",
    },

    {
        question: "Wo liegt die Eden Bar?",
        options: [
            "Bezirke 1. Liliengasse 2",
            "Bezirke 1. Dorotheergasse 6-8",
            "Bezirke 1. Wollzeile 36",
            "Bezirke 1. Seilerstätte 25"
        ],
        answer: "Bezirke 1. Liliengasse 2",
    },

    {
        question: "Wo liegt die Globe Wien - Marx Halle?",
        options: [
            "Bezirke 3. Karl-Farkas-Gasse 19",
            "Bezirke 3. Rabengasse 3",
            "Bezirke 8. Lenaugasse 1A",
            "Bezirke 20. Wallensteinplatz 6"
        ],
        answer: "Bezirke 3. Karl-Farkas-Gasse 19",
    },

    {
        question: "Wo liegt das Kabarett Niedermair?",
        options: [
            "Bezirke 8. Lenaugasse 1A",
            "Bezirke 3. Rabengasse 3",
            "Bezirke 20. Wallensteinplatz 6",
            "Bezirke 1. Wollzeile 36"
        ],
        answer: "Bezirke 8. Lenaugasse 1A",
    },

    {
        question: "Wo liegt das Kabarett Vindobona?",
        options: [
            "Bezirke 20. Wallensteinplatz 6",
            "Bezirke 8. Lenaugasse 1A",
            "Bezirke 3. Rabengasse 3",
            "Bezirke 14. Goldschlagstraße 169"
        ],
        answer: "Bezirke 20. Wallensteinplatz 6",
    },

    {
        question: "Wo liegt die Kulisse?",
        options: [
            "Bezirke 17. Rosensteingasse 39",
            "Bezirke 17. Hernalser Hauptstraße 55",
            "Bezirke 3. Rabengasse 3",
            "Bezirke 7. Spittelberggasse 10"
        ],
        answer: "Bezirke 17. Rosensteingasse 39",
    },

    {
        question: "Wo liegt das Metropol?",
        options: [
            "Bezirke 17. Hernalser Hauptstraße 55",
            "Bezirke 17. Rosensteingasse 39",
            "Bezirke 20. Wallensteinplatz 6",
            "Bezirke 3. Rabengasse 3"
        ],
        answer: "Bezirke 17. Hernalser Hauptstraße 55",
    },

    {
        question: "Wo liegt das Orpheum?",
        options: [
            "Bezirke 22. Steigenteschgasse 94b",
            "Bezirke 3. Karl-Farkas-Gasse 19",
            "Bezirke 14. Goldschlagstraße 169",
            "Bezirke 3. Rabengasse 3"
        ],
        answer: "Bezirke 22. Steigenteschgasse 94b",
    },

    {
        question: "Wo liegt das Rabenhof Theater?",
        options: [
            "Bezirke 3. Rabengasse 3",
            "Bezirke 8. Lenaugasse 1A",
            "Bezirke 7. Spittelberggasse 10",
            "Bezirke 1. Liliengasse 2"
        ],
        answer: "Bezirke 3. Rabengasse 3",
    },

    {
        question: "Wo liegt die Sargfabrik?",
        options: [
            "Bezirke 14. Goldschlagstraße 169",
            "Bezirke 6. Mariahilfer Straße 81",
            "Bezirke 7. Spittelberggasse 10",
            "Bezirke 1. Wollzeile 36"
        ],
        answer: "Bezirke 14. Goldschlagstraße 169",
    },

    {
        question: "Wo liegt das Schutzhaus der Zukunft?",
        options: [
            "Bezirke 15.  Auf der Schmelz,verl. Guntherstraße",
            "Bezirke 14. Goldschlagstraße 169",
            "Bezirke 6. Mariahilfer Straße 81",
            "Bezirke 17. Hernalser Hauptstraße 55"
        ],
        answer: "Bezirke 15.  Auf der Schmelz,verl. Guntherstraße",
    },

    {
        question: "Wo liegt das Simpl?",
        options: [
            "Bezirke 1. Wollzeile 36",
            "Bezirke 1. Liliengasse 2",
            "Bezirke 1. Dorotheergasse 6-8",
            "Bezirke 3. Rabengasse 3"
        ],
        answer: "Bezirke 1. Wollzeile 36",
    },

    {
        question: "Wo liegt der Stadtsaal?",
        options: [
            "Bezirke 6. Mariahilfer Straße 81",
            "Bezirke 1. Wollzeile 36",
            "Bezirke 1. Rotenturmstraße 20",
            "Bezirke 7. Spittelberggasse 10"
        ],
        answer: "Bezirke 6. Mariahilfer Straße 81",
    },

    {
        question: "Wo liegt das Theater Akzent?",
        options: [
            "Bezirke 4. Theresianumgasse 18",
            "Bezirke 3. Lisztstraße 1",
            "Bezirke 3. Lothringerstraße 20",
            "Bezirke 1. Seilerstätte 25"
        ],
        answer: "Bezirke 4. Theresianumgasse 18",
    },

    {
        question: "Wo liegt das Theater am Spittelberg?",
        options: [
            "Bezirke 7. Spittelberggasse 10",
            "Bezirke 3. Rabengasse 3",
            "Bezirke 8. Lenaugasse 1A",
            "Bezirke 6. Mariahilfer Straße 81"
        ],
        answer: "Bezirke 7. Spittelberggasse 10"
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
