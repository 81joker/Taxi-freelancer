const questions = [

    {
        question: "Wo ist die Bundespolizeidirektion Wien?",
        options: [
            "Schottenring 7-9",
            "Hernalser Gürtel 6-12",
            "Dietrichgasse 27",
            "Deutschmeisterplatz 3"
        ],
        answer: "Schottenring 7-9"
    },

    {
        question: "Wo ist das Fremdenpolizeiliche Büro?",
        options: [
            "Hernalser Gürtel 6-12",
            "Schottenring 7-9",
            "Dietrichgasse 27",
            "Deutschmeisterplatz 3"
        ],
        answer: "Hernalser Gürtel 6-12"
    },

    {
        question: "Wo ist das Verkehrsamt (Führerschein / Taxireferat)?",
        options: [
            "Dietrichgasse 27",
            "Hernalser Gürtel 6-12",
            "Schottenring 7-9",
            "Deutschmeisterplatz 3"
        ],
        answer: "Dietrichgasse 27"
    },

    {
        question: "Wo ist die Polizeiinspektion Innere Stadt?",
        options: [
            "Deutschmeisterplatz 3",
            "Juchgasse 19",
            "Viktor-Christ-Gasse 19",
            "Fuhrmannsgasse 5"
        ],
        answer: "Deutschmeisterplatz 3"
    },

    {
        question: "Wo ist die Polizeiinspektion Landstraße?",
        options: [
            "Juchgasse 19",
            "Deutschmeisterplatz 3",
            "Viktor-Christ-Gasse 19",
            "Fuhrmannsgasse 5"
        ],
        answer: "Juchgasse 19"
    },

    {
        question: "Wo ist die Polizeiinspektion Margareten (Bezirke 4,5,6)?",
        options: [
            "Viktor-Christ-Gasse 19",
            "Juchgasse 19",
            "Fuhrmannsgasse 5",
            "Van-der-Nüll-Gasse 11"
        ],
        answer: "Viktor-Christ-Gasse 19"
    },

    {
        question: "Wo ist die Polizeiinspektion Josefstadt (Bezirke 7,8,9)?",
        options: [
            "Fuhrmannsgasse 5",
            "Viktor-Christ-Gasse 19",
            "Van-der-Nüll-Gasse 11",
            "Enkplatz 3"
        ],
        answer: "Fuhrmannsgasse 5"
    },

    {
        question: "Wo ist die Polizeiinspektion Favoriten?",
        options: [
            "Van-der-Nüll-Gasse 11",
            "Fuhrmannsgasse 5",
            "Enkplatz 3",
            "Hohenbergstraße 1"
        ],
        answer: "Van-der-Nüll-Gasse 11"
    },

    {
        question: "Wo ist die Polizeiinspektion Simmering?",
        options: [
            "Enkplatz 3",
            "Van-der-Nüll-Gasse 11",
            "Hohenbergstraße 1",
            "Tannengasse 6"
        ],
        answer: "Enkplatz 3"
    },

    {
        question: "Wo ist die Polizeiinspektion Meidling?",
        options: [
            "Hohenbergstraße 1",
            "Enkplatz 3",
            "Tannengasse 6",
            "Wattgasse 15"
        ],
        answer: "Hohenbergstraße 1"
    },

    {
        question: "Wo ist die Polizeiinspektion Fünfhaus?",
        options: [
            "Tannengasse 6",
            "Hohenbergstraße 1",
            "Wattgasse 15",
            "Hohe Warte 32"
        ],
        answer: "Tannengasse 6"
    },

    {
        question: "Wo ist die Polizeiinspektion Ottakring?",
        options: [
            "Wattgasse 15",
            "Tannengasse 6",
            "Hohe Warte 32",
            "Pappenheimgasse 33"
        ],
        answer: "Wattgasse 15"
    },

    {
        question: "Wo ist die Polizeiinspektion Döbling?",
        options: [
            "Hohe Warte 32",
            "Wattgasse 15",
            "Pappenheimgasse 33",
            "Hermann Bahr Straße 3"
        ],
        answer: "Hohe Warte 32"
    },

    {
        question: "Wo ist die Polizeiinspektion Brigittenau?",
        options: [
            "Pappenheimgasse 33",
            "Hohe Warte 32",
            "Hermann Bahr Straße 3",
            "Wagramer Straße 89"
        ],
        answer: "Pappenheimgasse 33"
    },

    {
        question: "Wo ist die Polizeiinspektion Floridsdorf?",
        options: [
            "Hermann Bahr Straße 3",
            "Pappenheimgasse 33",
            "Wagramer Straße 89",
            "Lehmanngasse 3a"
        ],
        answer: "Hermann Bahr Straße 3"
    },

    {
        question: "Wo ist die Polizeiinspektion Donaustadt?",
        options: [
            "Wagramer Straße 89",
            "Hermann Bahr Straße 3",
            "Lehmanngasse 3a",
            "Pappenheimgasse 33"
        ],
        answer: "Wagramer Straße 89"
    },

    {
        question: "Wo ist die Polizeiinspektion Liesing?",
        options: [
            "Lehmanngasse 3a",
            "Wagramer Straße 89",
            "Hermann Bahr Straße 3",
            "Pappenheimgasse 33"
        ],
        answer: "Lehmanngasse 3a"
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
