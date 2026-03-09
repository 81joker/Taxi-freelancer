const questions = [
    {
        question: "Wo ist das Café Central?",
        options: [
            "Herrengasse 14",
            "Rathausplatz 8",
            "Dorotheergasse 6",
            "Universitätsring 4"
        ],
        answer: "Herrengasse 14"
    },

    {
        question: "Wo ist das Café Einstein?",
        options: [
            "Rathausplatz 8",
            "Herrengasse 14",
            "Dorotheergasse 6",
            "Albertinaplatz 2"
        ],
        answer: "Rathausplatz 8"
    },

    {
        question: "Wo ist das Café Hawelka?",
        options: [
            "Dorotheergasse 6",
            "Rathausplatz 8",
            "Universitätsring 4",
            "Operngasse 7"
        ],
        answer: "Dorotheergasse 6"
    },

    {
        question: "Wo ist das Café Landtmann?",
        options: [
            "Universitätsring 4",
            "Albertinaplatz 2",
            "Dorotheergasse 6",
            "Operngasse 7"
        ],
        answer: "Universitätsring 4"
    },

    {
        question: "Wo ist das Café Mozart?",
        options: [
            "Albertinaplatz 2",
            "Universitätsring 4",
            "Operngasse 7",
            "Stubenring 24"
        ],
        answer: "Albertinaplatz 2"
    },

    {
        question: "Wo ist das Café Museum?",
        options: [
            "Operngasse 7",
            "Albertinaplatz 2",
            "Stubenring 24",
            "Kärntner Ring 17"
        ],
        answer: "Operngasse 7"
    },

    {
        question: "Wo ist das Café Prückel?",
        options: [
            "Stubenring 24",
            "Operngasse 7",
            "Kärntner Ring 17",
            "Linke Wienzeile 22"
        ],
        answer: "Stubenring 24"
    },

    {
        question: "Wo ist das Café Schwarzenberg?",
        options: [
            "Kärntner Ring 17",
            "Stubenring 24",
            "Linke Wienzeile 22",
            "Mariahilfer Straße 73"
        ],
        answer: "Kärntner Ring 17"
    },

    {
        question: "Wo ist das Café Lusthaus?",
        options: [
            "Freudenau 254 / Aspernallee",
            "Kärntner Ring 17",
            "Linke Wienzeile 22",
            "Gumpendorfer Straße 11"
        ],
        answer: "Freudenau 254 / Aspernallee"
    },

    {
        question: "Wo ist das Café Drechsler?",
        options: [
            "Linke Wienzeile 22",
            "Mariahilfer Straße 73",
            "Gumpendorfer Straße 11",
            "Josefstädter Straße 2"
        ],
        answer: "Linke Wienzeile 22"
    },

    {
        question: "Wo ist das Café Ritter?",
        options: [
            "Mariahilfer Straße 73",
            "Linke Wienzeile 22",
            "Gumpendorfer Straße 11",
            "Josefstädter Straße 66"
        ],
        answer: "Mariahilfer Straße 73"
    },

    {
        question: "Wo ist das Café Sperl?",
        options: [
            "Gumpendorfer Straße 11",
            "Mariahilfer Straße 73",
            "Josefstädter Straße 2",
            "Josefstädter Straße 66"
        ],
        answer: "Gumpendorfer Straße 11"
    },

    {
        question: "Wo ist das Café Eiles?",
        options: [
            "Josefstädter Straße 2",
            "Gumpendorfer Straße 11",
            "Josefstädter Straße 66",
            "Auhofstraße 2"
        ],
        answer: "Josefstädter Straße 2"
    },

    {
        question: "Wo ist das Café Hummel?",
        options: [
            "Josefstädter Straße 66",
            "Josefstädter Straße 2",
            "Auhofstraße 2",
            "Mariahilfer Straße 73"
        ],
        answer: "Josefstädter Straße 66"
    },

    {
        question: "Wo ist das Café Dommayer?",
        options: [
            "Auhofstraße 2",
            "Josefstädter Straße 66",
            "Gumpendorfer Straße 11",
            "Linke Wienzeile 22"
        ],
        answer: "Auhofstraße 2"
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
let remainingQuestions = [...questions];
// let remainingQuestions = shuffleArray(questions);
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
