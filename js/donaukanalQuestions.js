

const questions = [

    {
        question: "Wie heißt die Alserbachstraße nach der Brücke über den Donaukanal?",
        options: [
            "Wallensteinstraße",
            "Taborstraße",
            "Radetzkystraße",
            "Schlachthausgasse"
        ],
        answer: "Wallensteinstraße"
    },

    {
        question: "Wie heißt die Rembrandtstraße nach der Brücke über den Donaukanal?",
        options: [
            "Türkenstraße",
            "Wallensteinstraße",
            "Taborstraße",
            "Rasumofskygasse"
        ],
        answer: "Türkenstraße"
    },

    {
        question: "Wie heißt die Maria-Theresien-Straße nach der Brücke über den Donaukanal?",
        options: [
            "Untere Augartenstraße",
            "Taborstraße",
            "Radetzkystraße",
            "Schlachthausgasse"
        ],
        answer: "Untere Augartenstraße"
    },

    {
        question: "Wie heißt die Hollandstraße nach der Brücke über den Donaukanal?",
        options: [
            "Salztorgasse",
            "Untere Augartenstraße",
            "Taborstraße",
            "Radetzkystraße"
        ],
        answer: "Salztorgasse"
    },

    {
        question: "Wie heißt die Rotenturmstraße nach der Brücke über den Donaukanal?",
        options: [
            "Lilienbrunngasse / Gredlerstraße",
            "Taborstraße",
            "Radetzkystraße",
            "Wallensteinstraße"
        ],
        answer: "Lilienbrunngasse / Gredlerstraße"
    },

    {
        question: "Wie heißt der Laurenzerberg nach der Brücke über den Donaukanal?",
        options: [
            "Taborstraße",
            "Radetzkystraße",
            "Wallensteinstraße",
            "Türkenstraße"
        ],
        answer: "Taborstraße"
    },

    {
        question: "Wie heißt die Aspernbrückengasse nach der Brücke über den Donaukanal?",
        options: [
            "Julius-Raab-Platz (Stubenring)",
            "Taborstraße",
            "Radetzkystraße",
            "Schlachthausgasse"
        ],
        answer: "Julius-Raab-Platz (Stubenring)"
    },

    {
        question: "Wie heißt die Franzensbrückenstraße nach der Brücke über den Donaukanal?",
        options: [
            "Radetzkystraße",
            "Schlachthausgasse",
            "Rasumofskygasse",
            "Taborstraße"
        ],
        answer: "Radetzkystraße"
    },

    {
        question: "Wie heißt die Wittelsbachstraße nach der Brücke über den Donaukanal?",
        options: [
            "Rasumofskygasse",
            "Radetzkystraße",
            "Schlachthausgasse",
            "Taborstraße"
        ],
        answer: "Rasumofskygasse"
    },

    {
        question: "Wie heißt die Stadionallee nach der Brücke über den Donaukanal?",
        options: [
            "Schlachthausgasse",
            "Radetzkystraße",
            "Rasumofskygasse",
            "Taborstraße"
        ],
        answer: "Schlachthausgasse"
    },

    {
        question: "Wie heißt die Freudenauer Hafenstraße nach der Brücke über den Donaukanal?",
        options: [
            "Haidequerstraße",
            "Seitenhafenstraße",
            "Zinnergasse",
            "Zinnergasse"
        ],
        answer: "Haidequerstraße"
    },
    {
        question: "Wie heißt die Haidequerstraße nach der Brücke über den Donaukanal?",
        options: [
            "Haidequerstraße",
            "Seitenhafenstraße",
            "Zinnergasse",
            "Floridsdorfer Hauptstraße"
        ],
        answer: "Seitenhafenstraße"
    },
    {
        question: "Wie heißt die Zinnergasse nach der Brücke über den Donaukanal?",
        options: [
            "Seitenhafenstraße",
            "Haidequerstraße",
            "Wagramer Straße",
            "Floridsdorfer Hauptstraße"
        ],
        answer: "Seitenhafenstraße"
    },

    {
        question: "Wie heißt die Adalbert-Stifter-Straße nach der Brücke über den Donaukanal?",
        options: [
            "Floridsdorfer Hauptstraße",
            "Wagramer Straße",
            "Seitenhafenstraße",
            "Haidequerstraße"
        ],
        answer: "Floridsdorfer Hauptstraße"
    },

    {
        question: "Wie heißt der Döblinger Gürtel nach der Brücke über den Donaukanal?",
        options: [
            "Adalbert-Stifter-Straße",
            "Wagramer Straße",
            "Floridsdorfer Hauptstraße",
            "Seitenhafenstraße"
        ],
        answer: "Adalbert-Stifter-Straße"
    },

    {
        question: "Wie heißt die Lassallestraße nach der Brücke über den Donaukanal?",
        options: [
            "Wagramer Straße",
            "Floridsdorfer Hauptstraße",
            "Seitenhafenstraße",
            "Haidequerstraße"
        ],
        answer: "Wagramer Straße"
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