const questions = [
    {
        question: "Wo liegt die Albertina?",
        options: [
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 1. Stubenring 5",
            "Bezirke 1. Burgring 5",
            "Bezirke 1. Burgring 7"
        ],
        answer: "Bezirke 1. Albertinaplatz 1",
    },

    {
        question: "Wo liegt das Museum für angewandte Kunst (MAK)?",
        options: [
            "Bezirke 1. Stubenring 5",
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 1. Burgring 5",
            "Bezirke 4. Friedrichstraße 12"
        ],
        answer: "Bezirke 1. Stubenring 5",
    },

    {
        question: "Wo liegt das Kunsthistorische Museum?",
        options: [
            "Bezirke 1. Burgring 5",
            "Bezirke 1. Burgring 7",
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 1. Stubenring 5"
        ],
        answer: "Bezirke 1. Burgring 5",
    },

    {
        question: "Wo liegt das Naturhistorische Museum?",
        options: [
            "Bezirke 1. Burgring 7",
            "Bezirke 1. Burgring 5",
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 4. Friedrichstraße 12"
        ],
        answer: "Bezirke 1. Burgring 7",
    },

    {
        question: "Wo liegt die Secession?",
        options: [
            "Bezirke 4. Friedrichstraße 12",
            "Bezirke 1. Burgring 5",
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 1. Stubenring 5"
        ],
        answer: "Bezirke 4. Friedrichstraße 12",
    },

    {
        question: "Wo liegt das Weltmuseum Wien?",
        options: [
            "Bezirke 1. Neue Burg (Heldenplatz)",
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 1. Burgring 5",
            "Bezirke 7. Museumsplatz 1"
        ],
        answer: "Bezirke 1. Neue Burg (Heldenplatz)",
    },

    {
        question: "Wo liegt das Sissi Museum Wien?",
        options: [
            "Bezirke 1. Hofburg / Michaelerkuppel",
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 1. Burgring 7",
            "Bezirke 1. Stubenring 5"
        ],
        answer: "Bezirke 1. Hofburg / Michaelerkuppel",
    },

    {
        question: "Wo liegt die Kaisergruft (Kapuzinergruft)?",
        options: [
            "Bezirke 1. Tegetthoffstraße 2 / Neuer Markt",
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 1. Burgring 5",
            "Bezirke 1. Stubenring 5"
        ],
        answer: "Bezirke 1. Tegetthoffstraße 2 / Neuer Markt",
    },

    {
        question: "Wo liegt das Heeresgeschichtliche Museum?",
        options: [
            "Bezirke 3. Arsenal Objekt 1",
            "Bezirke 7. Museumsplatz 1",
            "Bezirke 1. Burgring 7",
            "Bezirke 1. Albertinaplatz 1"
        ],
        answer: "Bezirke 3. Arsenal Objekt 1",
    },

    {
        question: "Wo liegt das KunstHaus Wien?",
        options: [
            "Bezirke 3. Untere Weißgerberstraße 13",
            "Bezirke 4. Karlsplatz 8",
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 1. Burgring 5"
        ],
        answer: "Bezirke 3. Untere Weißgerberstraße 13",
    },

    {
        question: "Wo liegt das Historische Museum der Stadt Wien?",
        options: [
            "Bezirke 4. Karlsplatz 8",
            "Bezirke 3. Untere Weißgerberstraße 13",
            "Bezirke 7. Museumsplatz 1",
            "Bezirke 1. Burgring 7"
        ],
        answer: "Bezirke 4. Karlsplatz 8",
    },

    {
        question: "Wo liegt das Museumsquartier?",
        options: [
            "Bezirke 7. Museumsplatz 1",
            "Bezirke 1. Burgring 5",
            "Bezirke 1. Albertinaplatz 1",
            "Bezirke 4. Karlsplatz 8"
        ],
        answer: "Bezirke 7. Museumsplatz 1",
    },

    {
        question: "Wo liegt das Technische Museum?",
        options: [
            "Bezirke 14. Mariahilfer Straße 212",
            "Bezirke 7. Museumsplatz 1",
            "Bezirke 4. Karlsplatz 8",
            "Bezirke 1. Burgring 7"
        ],
        answer: "Bezirke 14. Mariahilfer Straße 212",
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