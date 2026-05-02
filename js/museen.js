const questions = [
    {
        question: "Wo liegt die Albertina?",
        options: [
            "Albertinaplatz 1",
            "Stubenring 5",
            "Burgring 5",
            "Burgring 7"
        ],
        answer: "Albertinaplatz 1",
    },

    {
        question: "Wo liegt das Museum für angewandte Kunst (MAK)?",
        options: [
            "Stubenring 5",
            "Albertinaplatz 1",
            "Burgring 5",
            "Friedrichstraße 12"
        ],
        answer: "Stubenring 5",
    },

    {
        question: "Wo liegt das Kunsthistorische Museum?",
        options: [
            "Burgring 5",
            "Burgring 7",
            "Albertinaplatz 1",
            "Stubenring 5"
        ],
        answer: "Burgring 5",
    },

    {
        question: "Wo liegt das Naturhistorische Museum?",
        options: [
            "Burgring 7",
            "Burgring 5",
            "Albertinaplatz 1",
            "Friedrichstraße 12"
        ],
        answer: "Burgring 7",
    },

    {
        question: "Wo liegt die Secession?",
        options: [
            "Friedrichstraße 12",
            "Burgring 5",
            "Albertinaplatz 1",
            "Stubenring 5"
        ],
        answer: "Friedrichstraße 12",
    },

    {
        question: "Wo liegt das Weltmuseum Wien?",
        options: [
            "Neue Burg (Heldenplatz)",
            "Albertinaplatz 1",
            "Burgring 5",
            "Museumsplatz 1"
        ],
        answer: "Neue Burg (Heldenplatz)",
    },

    {
        question: "Wo liegt das Sissi Museum Wien?",
        options: [
            "Hofburg / Michaelerkuppel",
            "Albertinaplatz 1",
            "Burgring 7",
            "Stubenring 5"
        ],
        answer: "Hofburg / Michaelerkuppel",
    },

    {
        question: "Wo liegt die Kaisergruft (Kapuzinergruft)?",
        options: [
            "Tegetthoffstraße 2 / Neuer Markt",
            "Albertinaplatz 1",
            "Burgring 5",
            "Stubenring 5"
        ],
        answer: "Tegetthoffstraße 2 / Neuer Markt",
    },

    {
        question: "Wo liegt das Heeresgeschichtliche Museum?",
        options: [
            "Arsenal Objekt 1",
            "Museumsplatz 1",
            "Burgring 7",
            "Albertinaplatz 1"
        ],
        answer: "Arsenal Objekt 1",
    },

    {
        question: "Wo liegt das KunstHaus Wien?",
        options: [
            "Untere Weißgerberstraße 13",
            "Karlsplatz 8",
            "Albertinaplatz 1",
            "Burgring 5"
        ],
        answer: "Untere Weißgerberstraße 13",
    },

    {
        question: "Wo liegt das Historische Museum der Stadt Wien?",
        options: [
            "Karlsplatz 8",
            "Untere Weißgerberstraße 13",
            "Museumsplatz 1",
            "Burgring 7"
        ],
        answer: "Karlsplatz 8",
    },

    {
        question: "Wo liegt das Museumsquartier?",
        options: [
            "Museumsplatz 1",
            "Burgring 5",
            "Albertinaplatz 1",
            "Karlsplatz 8"
        ],
        answer: "Museumsplatz 1",
    },

    {
        question: "Wo liegt das Technische Museum?",
        options: [
            "Mariahilfer Straße 212",
            "Museumsplatz 1",
            "Karlsplatz 8",
            "Burgring 7"
        ],
        answer: "Mariahilfer Straße 212",
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