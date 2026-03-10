



const questions = [
    {
        question: "Wo liegt der Friedhof Aspern?",
        options: [
            "Langobardenstraße 180",
            "Waidhausenstraße 52",
            "Hartäckergasse 65",
            "Alszeile 28"
        ],
        answer: "Langobardenstraße 180",
    },

    {
        question: "Wo liegt der Friedhof Baumgarten?",
        options: [
            "Waidhäuserstraße 52",
            "Langobardenstraße 180",
            "Maxingstraße 15",
            "Sampwandnergasse 6"
        ],
        answer: "Waidhäuserstraße 52",
    },

    {
        question: "Wo liegt der Friedhof Döbling?",
        options: [
            "Hartäckergasse 65",
            "Wildgrubgasse 20",
            "Nottebohmstraße 51",
            "Alszeile 28"
        ],
        answer: "Hartäckergasse 65",
    },

    {
        question: "Wo liegt der Friedhof Dornbach?",
        options: [
            "Alszeile 28",
            "Maxingstraße 15",
            "Wildgrubgasse 20",
            "Hartäckergasse 65"
        ],
        answer: "Alszeile 28",
    },

    {
        question: "Wo liegt die Feuerhalle Simmering?",
        options: [
            "Simmeringer Hauptstraße 337",
            "Simmeringer Hauptstraße",
            "Unter der Kirche 5",
            "Friedhofstraße 33"
        ],
        answer: "Simmeringer Hauptstraße 337",
    },

    {
        question: "Wo liegt der Friedhof Grinzing?",
        options: [
            "An den Langen Lüssen 33",
            "Wildgrubgasse 20",
            "Nottebohmstraße 51",
            "Hartäckergasse 65"
        ],
        answer: "An den Langen Lüssen 33",
    },

    {
        question: "Wo liegt der Friedhof Großjedlersdorf?",
        options: [
            "Strebersdorfer Straße 2",
            "Langobardenstraße 180",
            "Stammersdorfer Straße 244-260",
            "Kolbegasse 34"
        ],
        answer: "Strebersdorfer Straße 2",
    },

    {
        question: "Wo liegt der Friedhof Heiligenstadt?",
        options: [
            "Wildgrubgasse 20",
            "An den Langen Lüssen 33",
            "Nottebohmstraße 51",
            "Hartäckergasse 65"
        ],
        answer: "Wildgrubgasse 20",
    },

    {
        question: "Wo liegt der Friedhof Hernals?",
        options: [
            "Leopold-Kunschak-Platz 7",
            "Alszeile 28",
            "Wildgrubgasse 20",
            "Maxingstraße 15"
        ],
        answer: "Leopold-Kunschak-Platz 7",
    },

    {
        question: "Wo liegt der Friedhof Hietzing?",
        options: [
            "Maxingstraße 15",
            "Sampwandnergasse 6",
            "Waidhäuserstraße 52",
            "Hartäckergasse 65"
        ],
        answer: "Maxingstraße 15",
    },

    {
        question: "Wo liegt der Friedhof Hütteldorf?",
        options: [
            "Sampwandnergasse 6",
            "Maxingstraße 15",
            "Waidhäuserstraße 52",
            "Strebersdorfer Straße 2"
        ],
        answer: "Sampwandnergasse 6",
    },

    {
        question: "Wo liegt der Friedhof Inzersdorf?",
        options: [
            "Kolbegasse 34",
            "Friedhofstraße 6-16",
            "Friedhofstraße 33",
            "Langobardenstraße 180"
        ],
        answer: "Kolbegasse 34",
    },

    {
        question: "Wo liegt der Islamische Friedhof?",
        options: [
            "Großmarktstraße",
            "Kolbegasse 34",
            "Friedhofstraße 6-16",
            "Langobardenstraße 180"
        ],
        answer: "Großmarktstraße",
    },

    {
        question: "Wo liegt der Friedhof Mauer?",
        options: [
            "Friedensstraße 6-16",
            "Kolbegasse 34",
            "Großmarktstraße",
            "Friedhofstraße 33"
        ],
        answer: "Friedensstraße 6-16",
    },

    {
        question: "Wo liegt der Friedhof Meidling?",
        options: [
            "Eibesbrunner Gasse 1a",
            "Friedhofstraße 33",
            "Unter der Kirche 5",
            "Herivicisgasse 44"
        ],
        answer: "Eibesbrunner Gasse 1a",
    },

    {
        question: "Wo liegt der Friedhof Neustift?",
        options: [
            "Pötzleinsdorfer Höhe 2",
            "Nottebohmstraße 51",
            "Wildgrubgasse 20",
            "An den Langen Lüssen 33"
        ],
        answer: "Pötzleinsdorfer Höhe 2",
    },

    {
        question: "Wo liegt der Friedhof Oberlaa?",
        options: [
            "Friedhofstraße 33",
            "Friedensstraße 6-16",
            "Kolbegasse 34",
            "Langobardenstraße 180"
        ],
        answer: "Friedhofstraße 33",
    },

    {
        question: "Wo liegt der Friedhof Ottakring?",
        options: [
            "Gallitzinstraße 5",
            "Alszeile 28",
            "Maxingstraße 15",
            "Sampwandnergasse 6"
        ],
        answer: "Gallitzinstraße 5",
    },

    {
        question: "Wo liegt der Friedhof Sievering?",
        options: [
            "Nottebohmstraße 51",
            "Wildgrubgasse 20",
            "An den Langen Lüssen 33",
            "Hartäckergasse 65"
        ],
        answer: "Nottebohmstraße 51",
    },

    {
        question: "Wo liegt der Friedhof Simmering?",
        options: [
            "Unter der Kirche 5",
            "Simmeringer Hauptstraße",
            "Friedhofstraße 33",
            "Kolbegasse 34"
        ],
        answer: "Unter der Kirche 5",
    },

    {
        question: "Wo liegt der Stammersdorfer Zentralfriedhof?",
        options: [
            "Stammersdorfer Straße 244-260",
            "Strebersdorfer Straße 2",
            "Langobardenstraße 180",
            "Kolbegasse 34"
        ],
        answer: "Stammersdorfer Straße 244-260",
    },

    {
        question: "Wo liegt der Südwestfriedhof?",
        options: [
            "Herviciusgasse 44",
            "Unter der Kirche 5",
            "Friedhofstraße 33",
            "Kolbegasse 34"
        ],
        answer: "Herviciusgasse 44",
    },

    {
        question: "Wo liegt der Zentralfriedhof?",
        options: [
            "Simmeringer Hauptstraße",
            "Simmeringer Hauptstraße 337",
            "Unter der Kirche 5",
            "Friedhofstraße 33"
        ],
        answer: "Simmeringer Hauptstraße",
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
