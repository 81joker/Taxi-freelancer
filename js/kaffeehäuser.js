const questions = [
    {
        question: "Wo ist das Café Central?",
        options: [
            "Bezirke 1. Herrengasse 14",
            "Bezirke 1. Rathausplatz 8",
            "Bezirke 1. Dorotheergasse 6",
            "Bezirke 1. Universitätsring 4"
        ],
        answer: "Bezirke 1. Herrengasse 14"
    },

    {
        question: "Wo ist das Café Einstein?",
        options: [
            "Bezirke 1. Rathausplatz 8",
            "Bezirke 1. Herrengasse 14",
            "Bezirke 1. Dorotheergasse 6",
            "Bezirke 1. Albertinaplatz 2"
        ],
        answer: "Bezirke 1. Rathausplatz 8"
    },

    {
        question: "Wo ist das Café Hawelka?",
        options: [
            "Bezirke 1. Dorotheergasse 6",
            "Bezirke 1. Rathausplatz 8",
            "Bezirke 1. Universitätsring 4",
            "Bezirke 1. Operngasse 7"
        ],
        answer: "Bezirke 1. Dorotheergasse 6"
    },

    {
        question: "Wo ist das Café Landtmann?",
        options: [
            "Bezirke 1. Universitätsring 4",
            "Bezirke 1. Albertinaplatz 2",
            "Bezirke 1. Dorotheergasse 6",
            "Bezirke 1. Operngasse 7"
        ],
        answer: "Bezirke 1. Universitätsring 4"
    },

    {
        question: "Wo ist das Café Mozart?",
        options: [
            "Bezirke 1. Albertinaplatz 2",
            "Bezirke 1. Universitätsring 4",
            "Bezirke 1. Operngasse 7",
            "Bezirke 1. Stubenring 24"
        ],
        answer: "Bezirke 1. Albertinaplatz 2"
    },

    {
        question: "Wo ist das Café Museum?",
        options: [
            "Bezirke 1. Operngasse 7",
            "Bezirke 1. Albertinaplatz 2",
            "Bezirke 1. Stubenring 24",
            "Bezirke 1. Kärntner Ring 17"
        ],
        answer: "Bezirke 1. Operngasse 7"
    },

    {
        question: "Wo ist das Café Prückel?",
        options: [
            "Bezirke 1. Stubenring 24",
            "Bezirke 1. Operngasse 7",
            "Bezirke 1. Kärntner Ring 17",
            "Bezirke 6. Linke Wienzeile 22"
        ],
        answer: "Bezirke 1. Stubenring 24"
    },

    {
        question: "Wo ist das Café Schwarzenberg?",
        options: [
            "Bezirke 1. Kärntner Ring 17",
            "Bezirke 1. Stubenring 24",
            "Bezirke 6. Linke Wienzeile 22",
            "Bezirke 6. Mariahilfer Straße 73"
        ],
        answer: "Bezirke 1. Kärntner Ring 17"
    },

    {
        question: "Wo ist das Café Lusthaus?",
        options: [
            "Bezirke 2. Freudenau 254 / Aspernallee",
            "Bezirke 1. Kärntner Ring 17",
            "Bezirke 6. Linke Wienzeile 22",
            "Bezirke 6. Gumpendorfer Straße 11"
        ],
        answer: "Bezirke 2. Freudenau 254 / Aspernallee"
    },

    {
        question: "Wo ist das Café Drechsler?",
        options: [
            "Bezirke 6. Linke Wienzeile 22",
            "Bezirke 6. Mariahilfer Straße 73",
            "Bezirke 6. Gumpendorfer Straße 11",
            "Bezirke 8. Josefstädter Straße 2"
        ],
        answer: "Bezirke 6. Linke Wienzeile 22"
    },

    {
        question: "Wo ist das Café Ritter?",
        options: [
            "Bezirke 6. Mariahilfer Straße 73",
            "Bezirke 6. Linke Wienzeile 22",
            "Bezirke 6. Gumpendorfer Straße 11",
            "Bezirke 8. Josefstädter Straße 66"
        ],
        answer: "Bezirke 6. Mariahilfer Straße 73"
    },

    {
        question: "Wo ist das Café Sperl?",
        options: [
            "Bezirke 6. Gumpendorfer Straße 11",
            "Bezirke 6. Mariahilfer Straße 73",
            "Bezirke 8. Josefstädter Straße 2",
            "Bezirke 8. Josefstädter Straße 66"
        ],
        answer: "Bezirke 6. Gumpendorfer Straße 11"
    },

    {
        question: "Wo ist das Café Eiles?",
        options: [
            "Bezirke 8. Josefstädter Straße 2",
            "Bezirke 6. Gumpendorfer Straße 11",
            "Bezirke 13. Auhofstraße 2"
        ],
        answer: "Bezirke 8. Josefstädter Straße 2"
    },

    {
        question: "Wo ist das Café Hummel?",
        options: [
            "Bezirke 8. Josefstädter Straße 66",
            "Bezirke 6. Gumpendorfer Straße 11",
            "Bezirke 13. Auhofstraße 2",
            "Bezirke 6. Mariahilfer Straße 73"
        ],
        answer: "Bezirke 8. Josefstädter Straße 66"
    },

    {
        question: "Wo ist das Café Dommayer?",
        options: [
            "Bezirke 13. Auhofstraße 2",
            "Bezirke 8. Josefstädter Straße 66",
            "Bezirke 6. Gumpendorfer Straße 11",
            "Bezirke 6. Linke Wienzeile 22"
        ],
        answer: "Bezirke 13. Auhofstraße 2"
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
