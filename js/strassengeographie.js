
const questions = [

    {
        question: "Welche Straße führt zum Praterstern?",
        options: [
            "Praterstraße",
            "Favoritenstraße",
            "Floridsdorfer Hauptstraße",
            "Breitenfurter Straße"
        ],
        answer: "Praterstraße"
    },

    {
        question: "Welche Straße führt zum Praterstern?",
        options: [
            "Franzensbrückenstraße",
            "Oberen Augartenstraße",
            "Brünner Straße",
            "Erläaer Straße"
        ],
        answer: "Franzensbrückenstraße"
    },

    {
        question: "Welche Straße führt zum Praterstern?",
        options: [
            "Lassallestraße",
            "Wasnergasse",
            "Treustraße",
            "Württemberggasse"
        ],
        answer: "Lassallestraße"
    },

    {
        question: "Welche Straße führt zum Verteilerkreis Favoriten / Altes Landgut?",
        options: [
            "Favoritenstraße",
            "Praterstraße",
            "Taborstraße",
            "Radetzkystraße"
        ],
        answer: "Favoritenstraße"
    },

    {
        question: "Welche Straße führt zum Verteilerkreis Favoriten / Altes Landgut?",
        options: [
            "Grenzackerstraße",
            "Wagramer Straße",
            "Schlößhofer Straße",
            "Jägerstraße"
        ],
        answer: "Grenzackerstraße"
    },

    {
        question: "Welche Straße führt zum Gaußplatz?",
        options: [
            "Obere Donau Straße",
            "Prager Straße",
            "Breitenfurter Straße",
            "Lassallestraße"
        ],
        answer: "Obere Donau Straße"
    },

    {
        question: "Welche Straße führt zum Gaußplatz?",
        options: [
            "Obere Augartenstraße",
            "Floridsdorfer Hauptstraße",
            "Favoritenstraße",
            "Praterstraße"
        ],
        answer: "Obere Augartenstraße"
    },

    {
        question: "Welche Straße führt zum Gaußplatz?",
        options: [
            "Klosterneuburger Straße",
            "Brünner Straße",
            "Wagramer Straße",
            "Erläaer Straße"
        ],
        answer: "Klosterneuburger Straße"
    },

    {
        question: "Welche Straße führt nach Floridsdorf / Am Spitz?",
        options: [
            "Floridsdorfer Hauptstraße",
            "Praterstraße",
            "Lassallestraße",
            "Taborstraße"
        ],
        answer: "Floridsdorfer Hauptstraße"
    },

    {
        question: "Welche Straße führt nach Floridsdorf / Am Spitz?",
        options: [
            "Brünner Straße",
            "Radetzkystraße",
            "Wasnergasse",
            "Treustraße"
        ],
        answer: "Brünner Straße"
    },

    {
        question: "Welche Straße führt zum Atzgersdorfer Platz?",
        options: [
            "Breitenfurter Straße",
            "Prager Straße",
            "Obere Donau Straße",
            "Floridsdorfer Hauptstraße"
        ],
        answer: "Breitenfurter Straße"
    },

    {
        question: "Welche Straße führt zum Atzgersdorfer Platz?",
        options: [
            "Erläaer Straße",
            "Wagramer Straße",
            "Lassallestraße",
            "Taborstraße"
        ],
        answer: "Erläaer Straße"
    }

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