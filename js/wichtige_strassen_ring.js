const questions = [

    {
        question: "Welche Straße führt vom Stubenring stadtauswärts?",
        options: [
            "Weiskirchnerstraße",
            "Operngasse",
            "Babenbergerstraße",
            "Grillparzerstraße"
        ],
        answer: "Weiskirchnerstraße"
    },

    {
        question: "Welche Straße führt vom Parkring stadtauswärts?",
        options: [
            "Johannesgasse",
            "Operngasse",
            "Liechtensteinstraße",
            "Babenbergerstraße"
        ],
        answer: "Johannesgasse"
    },

    {
        question: "Welcher Platz führt vom Schubertring stadtauswärts?",
        options: [
            "Schwarzenbergplatz",
            "Schmerlingplatz",
            "Rathausplatz",
            "Julius-Raab-Platz"
        ],
        answer: "Schwarzenbergplatz"
    },

    {
        question: "Welche Straße führt vom Opernring stadtauswärts?",
        options: [
            "Operngasse",
            "Johannesgasse",
            "Grillparzerstraße",
            "Wipplingerstraße"
        ],
        answer: "Operngasse"
    },

    {
        question: "Welche Straße führt vom Opernring stadtauswärts?",
        options: [
            "Eschenbachgasse",
            "Babenbergerstraße",
            "Liechtensteinstraße",
            "Volksgartenstraße"
        ],
        answer: "Eschenbachgasse"
    },

    {
        question: "Welche Straße führt vom Burgring stadtauswärts?",
        options: [
            "Babenbergerstraße",
            "Operngasse",
            "Johannesgasse",
            "Währinger Straße"
        ],
        answer: "Babenbergerstraße"
    },

    {
        question: "Welcher Platz führt vom Dr. Karl-Renner-Ring stadtauswärts?",
        options: [
            "Schmerlingplatz",
            "Schwarzenbergplatz",
            "Julius-Raab-Platz",
            "Morzinplatz"
        ],
        answer: "Schmerlingplatz"
    },

    {
        question: "Welche Straße führt vom Dr. Karl-Renner-Ring stadtauswärts?",
        options: [
            "Volksgartenstraße",
            "Operngasse",
            "Johannesgasse",
            "Babenbergerstraße"
        ],
        answer: "Volksgartenstraße"
    },

    {
        question: "Welcher Platz führt vom Dr. Karl-Renner-Ring stadtauswärts?",
        options: [
            "Rathausplatz",
            "Schwarzenbergplatz",
            "Morzinplatz",
            "Schmerlingplatz"
        ],
        answer: "Rathausplatz"
    },

    {
        question: "Welche Straße führt vom Universitätsring stadtauswärts?",
        options: [
            "Grillparzerstraße",
            "Johannesgasse",
            "Operngasse",
            "Wipplingerstraße"
        ],
        answer: "Grillparzerstraße"
    },

    {
        question: "Welche Straße führt vom Universitätsring stadtauswärts?",
        options: [
            "Währinger Straße",
            "Liechtensteinstraße",
            "Johannesgasse",
            "Babenbergerstraße"
        ],
        answer: "Währinger Straße"
    },

    {
        question: "Welche Straße führt vom Schottenring stadtauswärts?",
        options: [
            "Hohenstaufengasse",
            "Operngasse",
            "Grillparzerstraße",
            "Volksgartenstraße"
        ],
        answer: "Hohenstaufengasse"
    },

    {
        question: "Welche Straße führt vom Schottenring stadtauswärts?",
        options: [
            "Liechtensteinstraße",
            "Johannesgasse",
            "Babenbergerstraße",
            "Operngasse"
        ],
        answer: "Liechtensteinstraße"
    },

    {
        question: "Welche Straße führt vom Schottenring stadtauswärts?",
        options: [
            "Wipplingerstraße",
            "Operngasse",
            "Volksgartenstraße",
            "Grillparzerstraße"
        ],
        answer: "Wipplingerstraße"
    },

    {
        question: "Welche Brücke führt vom Franz-Josefs-Kai über den Donaukanal?",
        options: [
            "Schwedenbrücke",
            "Floridsdorfer Brücke",
            "Reichsbrücke",
            "Brigittenauer Brücke"
        ],
        answer: "Schwedenbrücke"
    },

    {
        question: "Welche Brücke führt vom Franz-Josefs-Kai über den Donaukanal?",
        options: [
            "Aspernbrücke",
            "Reichsbrücke",
            "Nordbrücke",
            "Floridsdorfer Brücke"
        ],
        answer: "Aspernbrücke"
    },

    {
        question: "Welche Straße führt vom Franz-Josefs-Kai stadtauswärts?",
        options: [
            "Uraniastraße",
            "Operngasse",
            "Johannesgasse",
            "Babenbergerstraße"
        ],
        answer: "Uraniastraße"
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