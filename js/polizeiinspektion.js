const questions = [

    {
        question: "Wo ist die Bundespolizeidirektion Wien?",
        options: [
            "Bezirke 1. Schottenring 7-9",
            "Bezirke 8. Hernalser Gürtel 6-12",
            "Bezirke 3. Dietrichgasse 27",
            "Bezirke 1. Deutschmeisterplatz 3"
        ],
        answer: "Bezirke 1. Schottenring 7-9"
    },

    {
        question: "Wo ist das Fremdenpolizeiliche Büro?",
        options: [
            "Bezirke 8. Hernalser Gürtel 6-12",
            "Bezirke 1. Schottenring 7-9",
            "Bezirke 3. Dietrichgasse 27",
            "Bezirke 1. Deutschmeisterplatz 3"
        ],
        answer: "Bezirke 8. Hernalser Gürtel 6-12"
    },

    {
        question: "Wo ist das Verkehrsamt (Führerschein / Taxireferat)?",
        options: [
            "Bezirke 3. Dietrichgasse 27",
            "Bezirke 8. Hernalser Gürtel 6-12",
            "Bezirke 1. Schottenring 7-9",
            "Bezirke 1. Deutschmeisterplatz 3"
        ],
        answer: "Bezirke 3. Dietrichgasse 27"
    },

    {
        question: "Wo ist die Polizeiinspektion Innere Stadt?",
        options: [
            "Bezirke 1. Deutschmeisterplatz 3",
            "Bezirke 3. Juchgasse 19",
            "Bezirke 5. Viktor-Christ-Gasse 19",
            "Bezirke 8. Fuhrmannsgasse 5"
        ],
        answer: "Bezirke 1. Deutschmeisterplatz 3"
    },

    {
        question: "Wo ist die Polizeiinspektion Landstraße?",
        options: [
            "Bezirke 3. Juchgasse 19",
            "Bezirke 1. Deutschmeisterplatz 3",
            "Bezirke 5. Viktor-Christ-Gasse 19",
            "Bezirke 8. Fuhrmannsgasse 5"
        ],
        answer: "Bezirke 3. Juchgasse 19"
    },

    {
        question: "Wo ist die Polizeiinspektion Margareten (Bezirke 4,5,6)?",
        options: [
            "Bezirke 5. Viktor-Christ-Gasse 19",
            "Bezirke 3. Juchgasse 19",
            "Bezirke 8. Fuhrmannsgasse 5",
            "Bezirke 10. Van-der-Nüll-Gasse 11"
        ],
        answer: "Bezirke 5. Viktor-Christ-Gasse 19"
    },

    {
        question: "Wo ist die Polizeiinspektion Josefstadt (Bezirke 7,8,9)?",
        options: [
            "Bezirke 8. Fuhrmannsgasse 5",
            "Bezirke 5. Viktor-Christ-Gasse 19",
            "Bezirke 10. Van-der-Nüll-Gasse 11",
            "Bezirke 11. Enkplatz 3"
        ],
        answer: "Bezirke 8. Fuhrmannsgasse 5"
    },

    {
        question: "Wo ist die Polizeiinspektion Favoriten?",
        options: [
            "Bezirke 10. Van-der-Nüll-Gasse 11",
            "Bezirke 8. Fuhrmannsgasse 5",
            "Bezirke 11. Enkplatz 3",
            "Bezirke 12. Hohenbergstraße 1"
        ],
        answer: "Bezirke 10. Van-der-Nüll-Gasse 11"
    },

    {
        question: "Wo ist die Polizeiinspektion Simmering?",
        options: [
            "Bezirke 11. Enkplatz 3",
            "Bezirke 10. Van-der-Nüll-Gasse 11",
            "Bezirke 12. Hohenbergstraße 1",
            "Bezirke 15. Tannengasse 6"
        ],
        answer: "Bezirke 11. Enkplatz 3"
    },

    {
        question: "Wo ist die Polizeiinspektion Meidling f.d. Bezirke 12 und 13?",
        options: [
            "Bezirke 12. Hohenbergstraße 1",
            "Bezirke 11. Enkplatz 3",
            "Bezirke 15. Tannengasse 6",
            "Bezirke 16. Wattgasse 15"
        ],
        answer: "Bezirke 12. Hohenbergstraße 1"
    },

    {
        question: "Wo ist die Polizeiinspektion Fünfhaus f.d. Bezirke 14 und 15?",
        options: [
            "Bezirke 15. Tannengasse 6",
            "Bezirke 12. Hohenbergstraße 1",
            "Bezirke 16. Wattgasse 15",
            "Bezirke 19. Hohe Warte 32"
        ],
        answer: "Bezirke 15. Tannengasse 6"
    },

    {
        question: "Wo ist die Polizeiinspektion Ottakring f.d. Bezirke 16 und 17 ?",
        options: [
            "Bezirke 16. Wattgasse 15",
            "Bezirke 15. Tannengasse 6",
            "Bezirke 19. Hohe Warte 32",
            "Bezirke 20. Pappenheimgasse 33"
        ],
        answer: "Bezirke 16. Wattgasse 15"
    },

    {
        question: "Wo ist die Polizeiinspektion Döbling f.d. Bezirke 18 und 19 ?",
        options: [
            "Bezirke 19. Hohe Warte 32",
            "Bezirke 16. Wattgasse 15",
            "Bezirke 20. Pappenheimgasse 33",
            "Bezirke 21. Hermann Bahr Straße 3"
        ],
        answer: "Bezirke 19. Hohe Warte 32"
    },

    {
        question: "Wo ist die Polizeiinspektion Brigittenau f.d. Bezirke 2 und 20 ?",
        options: [
            "Bezirke 20. Pappenheimgasse 33",
            "Bezirke 19. Hohe Warte 32",
            "Bezirke 21. Hermann Bahr Straße 3",
            "Bezirke 22. Wagramer Straße 89"
        ],
        answer: "Bezirke 20. Pappenheimgasse 33"
    },

    {
        question: "Wo ist die Polizeiinspektion Floridsdorf?",
        options: [
            "Bezirke 21. Hermann Bahr Straße 3",
            "Bezirke 20. Pappenheimgasse 33",
            "Bezirke 22. Wagramer Straße 89",
            "Bezirke 23. Lehmanngasse 3a"
        ],
        answer: "Bezirke 21. Hermann Bahr Straße 3"
    },

    {
        question: "Wo ist die Polizeiinspektion Donaustadt?",
        options: [
            "Bezirke 22. Wagramer Straße 89",
            "Bezirke 21. Hermann Bahr Straße 3",
            "Bezirke 23. Lehmanngasse 3a",
            "Bezirke 20. Pappenheimgasse 33"
        ],
        answer: "Bezirke 22. Wagramer Straße 89"
    },

    {
        question: "Wo ist die Polizeiinspektion Liesing?",
        options: [
            "Bezirke 23. Lehmanngasse 3a",
            "Bezirke 22. Wagramer Straße 89",
            "Bezirke 21. Hermann Bahr Straße 3",
            "Bezirke 20. Pappenheimgasse 33"
        ],
        answer: "Bezirke 23. Lehmanngasse 3a"
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
