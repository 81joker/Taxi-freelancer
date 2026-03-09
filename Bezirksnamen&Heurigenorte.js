



const questions = [
    {
        question: "Wie heißt der 1. Bezirk von Wien?",
        options: ["Innere Stadt", "Leopoldstadt", "Landstraße", "Wieden"],
        answer: "Innere Stadt",
    },

    {
        question: "Wie heißt der 2. Bezirk von Wien?",
        options: ["Leopoldstadt", "Landstraße", "Wieden", "Margareten"],
        answer: "Leopoldstadt",
    },

    {
        question: "Wie heißt der 3. Bezirk von Wien?",
        options: ["Landstraße", "Leopoldstadt", "Wieden", "Margareten"],
        answer: "Landstraße",
    },

    {
        question: "Wie heißt der 4. Bezirk von Wien?",
        options: ["Wieden", "Margareten", "Mariahilf", "Neubau"],
        answer: "Wieden",
    },

    {
        question: "Wie heißt der 5. Bezirk von Wien?",
        options: ["Margareten", "Wieden", "Mariahilf", "Neubau"],
        answer: "Margareten",
    },

    {
        question: "Wie heißt der 6. Bezirk von Wien?",
        options: ["Mariahilf", "Margareten", "Neubau", "Josefstadt"],
        answer: "Mariahilf",
    },

    {
        question: "Wie heißt der 7. Bezirk von Wien?",
        options: ["Neubau", "Josefstadt", "Alsergrund", "Favoriten"],
        answer: "Neubau",
    },

    {
        question: "Wie heißt der 8. Bezirk von Wien?",
        options: ["Josefstadt", "Alsergrund", "Favoriten", "Simmering"],
        answer: "Josefstadt",
    },

    {
        question: "Wie heißt der 9. Bezirk von Wien?",
        options: ["Alsergrund", "Josefstadt", "Favoriten", "Simmering"],
        answer: "Alsergrund",
    },

    {
        question: "Wie heißt der 10. Bezirk von Wien?",
        options: ["Favoriten", "Simmering", "Meidling", "Hietzing"],
        answer: "Favoriten",
    },

    {
        question: "Wie heißt der 11. Bezirk von Wien?",
        options: ["Simmering", "Favoriten", "Meidling", "Hietzing"],
        answer: "Simmering",
    },

    {
        question: "Wie heißt der 12. Bezirk von Wien?",
        options: ["Meidling", "Hietzing", "Penzing", "Rudolfsheim-Fünfhaus"],
        answer: "Meidling",
    },

    {
        question: "Wie heißt der 13. Bezirk von Wien?",
        options: ["Hietzing", "Penzing", "Rudolfsheim-Fünfhaus", "Ottakring"],
        answer: "Hietzing",
    },

    {
        question: "Wie heißt der 14. Bezirk von Wien?",
        options: ["Penzing", "Hietzing", "Rudolfsheim-Fünfhaus", "Ottakring"],
        answer: "Penzing",
    },

    {
        question: "Wie heißt der 15. Bezirk von Wien?",
        options: ["Rudolfsheim-Fünfhaus", "Penzing", "Ottakring", "Hernals"],
        answer: "Rudolfsheim-Fünfhaus",
    },

    {
        question: "Wie heißt der 16. Bezirk von Wien?",
        options: ["Ottakring", "Hernals", "Währing", "Döbling"],
        answer: "Ottakring",
    },

    {
        question: "Wie heißt der 17. Bezirk von Wien?",
        options: ["Hernals", "Währing", "Döbling", "Brigittenau"],
        answer: "Hernals",
    },

    {
        question: "Wie heißt der 18. Bezirk von Wien?",
        options: ["Währing", "Döbling", "Brigittenau", "Floridsdorf"],
        answer: "Währing",
    },

    {
        question: "Wie heißt der 19. Bezirk von Wien?",
        options: ["Döbling", "Währing", "Brigittenau", "Floridsdorf"],
        answer: "Döbling",
    },

    {
        question: "Wie heißt der 20. Bezirk von Wien?",
        options: ["Brigittenau", "Döbling", "Floridsdorf", "Donaustadt"],
        answer: "Brigittenau",
    },

    {
        question: "Wie heißt der 21. Bezirk von Wien?",
        options: ["Floridsdorf", "Donaustadt", "Liesing", "Döbling"],
        answer: "Floridsdorf",
    },

    {
        question: "Wie heißt der 22. Bezirk von Wien?",
        options: ["Donaustadt", "Floridsdorf", "Liesing", "Döbling"],
        answer: "Donaustadt",
    },

    {
        question: "Wie heißt der 23. Bezirk von Wien?",
        options: ["Liesing", "Donaustadt", "Floridsdorf", "Hietzing"],
        answer: "Liesing",
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
