const questions = [
    {
        question: "Wo ist ORF Rundfunk (Massenmedien)?",
        options: [
            "Argentinierstraße 30a",
            "Heiligenstädter Lände 27c",
            "Würzburggasse 30",
            "Muthgasse 2"
        ],
        answer: "Argentinierstraße 30a"
    },

    {
        question: "Wo ist ORF Rundfunk Ö3 (Massenmedien)?",
        options: [
            "Heiligenstädter Lände 27c",
            "Argentinierstraße 30a",
            "Würzburggasse 30",
            "Muthgasse 2"
        ],
        answer: "Heiligenstädter Lände 27c"
    },

    {
        question: "Wo ist ORF Fernsehen (Massenmedien)?",
        options: [
            "Würzburggasse 30",
            "Heiligenstädter Lände 27c",
            "Argentinierstraße 30a",
            "Muthgasse 2"
        ],
        answer: "Würzburggasse 30"
    },

    {
        question: "Wo ist die Kronen Zeitung Redaktion (Massenmedien)?",
        options: [
            "Muthgasse 2",
            "Würzburggasse 30",
            "Leopold-Ungar-Platz 1",
            "Richard-Strauss-Straße 16"
        ],
        answer: "Muthgasse 2"
    },

    {
        question: "Wo ist die Kurier Redaktion (Massenmedien)?",
        options: [
            "Leopold-Ungar-Platz 1",
            "Muthgasse 2",
            "Argentinierstraße 30a",
            "Würzburggasse 30"
        ],
        answer: "Leopold-Ungar-Platz 1"
    },

    {
        question: "Wo ist das Druckzentrum Media-Print (Massenmedien)?",
        options: [
            "Richard-Strauss-Straße 16",
            "Leopold-Ungar-Platz 1",
            "Muthgasse 2",
            "Würzburggasse 30"
        ],
        answer: "Richard-Strauss-Straße 16"
    },

    {
        question: "Wo ist die Österreichische Staatsdruckerei (Druckerei)?",
        options: [
            "Tenschertstraße 7",
            "Laimgrubengasse 10",
            "Prinz Eugen Straße 20-22",
            "Wiedner Hauptstraße 63"
        ],
        answer: "Tenschertstraße 7"
    },

    {
        question: "Wo ist die APA Austria Presseagentur (IPZ)?",
        options: [
            "Laimgrubengasse 10",
            "Tenschertstraße 7",
            "Prinz Eugen Straße 20-22",
            "Wiedner Hauptstraße 63"
        ],
        answer: "Laimgrubengasse 10"
    },

    {
        question: "Wo ist die Arbeiterkammer Wien (Kammer)?",
        options: [
            "Prinz Eugen Straße 20-22",
            "Wiedner Hauptstraße 63",
            "Straße der Wiener Wirtschaft 1",
            "Laimgrubengasse 10"
        ],
        answer: "Prinz Eugen Straße 20-22"
    },

    {
        question: "Wo ist die Wirtschaftskammer Österreich (Kammer)?",
        options: [
            "Wiedner Hauptstraße 63",
            "Prinz Eugen Straße 20-22",
            "Straße der Wiener Wirtschaft 1",
            "Laimgrubengasse 10"
        ],
        answer: "Wiedner Hauptstraße 63"
    },

    {
        question: "Wo ist die Wirtschaftskammer Wien (Kammer)?",
        options: [
            "Straße der Wiener Wirtschaft 1",
            "Wiedner Hauptstraße 63",
            "Prinz Eugen Straße 20-22",
            "Laimgrubengasse 10"
        ],
        answer: "Straße der Wiener Wirtschaft 1"
    },

    {
        question: "Wo ist die Fachgruppe Wien für Personenbeförderungsgewerbe?",
        options: [
            "Straße der Wiener Wirtschaft 1",
            "Wiedner Hauptstraße 63",
            "Prinz Eugen Straße 20-22",
            "Tenschertstraße 7"
        ],
        answer: "Straße der Wiener Wirtschaft 1"
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
