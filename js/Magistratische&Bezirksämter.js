const questions = [

    {
        question: "Wo ist das Magistratische Bezirksamt für den 1. und 8. Bezirk?",
        options: [
            "1. Wipplingerstraße 8",
            "2. Karmelitergasse 9",
            "3. Karl-Borromäus-Platz 3",
            "5. Rechte Wienzeile 105"
        ],
        answer: "1. Wipplingerstraße 8"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 2. Bezirk?",
        options: [
            "2. Karmelitergasse 9",
            "1. Wipplingerstraße 8",
            "3. Karl-Borromäus-Platz 3",
            "5. Rechte Wienzeile 105"
        ],
        answer: "2. Karmelitergasse 9"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 3. Bezirk?",
        options: [
            "3. Karl-Borromäus-Platz 3",
            "2. Karmelitergasse 9",
            "1. Wipplingerstraße 8",
            "5. Rechte Wienzeile 105"
        ],
        answer: "3. Karl-Borromäus-Platz 3"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 4. und 5. Bezirk?",
        options: [
            "5. Rechte Wienzeile 105",
            "7. Hermanngasse 24-26",
            "9. Wilhelm Exner-Gasse 5",
            "10. Laxenburger Straße 43-45"
        ],
        answer: "5. Rechte Wienzeile 105"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 6. und 7. Bezirk?",
        options: [
            "7. Hermanngasse 24-26",
            "9. Wilhelm Exner-Gasse 5",
            "10. Laxenburger Straße 43-45",
            "11. Enkplatz 2"
        ],
        answer: "7. Hermanngasse 24-26"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 9. Bezirk?",
        options: [
            "9. Wilhelm Exner-Gasse 5",
            "7. Hermanngasse 24-26",
            "10. Laxenburger Straße 43-45",
            "11. Enkplatz 2"
        ],
        answer: "9. Wilhelm Exner-Gasse 5"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 10. Bezirk?",
        options: [
            "10. Laxenburger Straße 43-45",
            "9. Wilhelm Exner-Gasse 5",
            "7. Hermanngasse 24-26",
            "11. Enkplatz 2"
        ],
        answer: "10. Laxenburger Straße 43-45"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 11. Bezirk?",
        options: [
            "11. Enkplatz 2",
            "10. Laxenburger Straße 43-45",
            "9. Wilhelm Exner-Gasse 5",
            "7. Hermanngasse 24-26"
        ],
        answer: "11. Enkplatz 2"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 12. Bezirk?",
        options: [
            "12. Schönbrunner Straße 259",
            "11. Enkplatz 2",
            "7. Hermanngasse 24-26",
            "10. Laxenburger Straße 43-45"
        ],
        answer: "12. Schönbrunner Straße 259"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 13. und 14. Bezirk?",
        options: [
            "13. Hietzinger Kai 1-3",
            "12. Schönbrunner Straße 259",
            "15. Gasgasse 8-10",
            "16. Richard-Wagner-Platz 19"
        ],
        answer: "13. Hietzinger Kai 1-3"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 15. Bezirk?",
        options: [
            "15. Gasgasse 8-10",
            "13. Hietzinger Kai 1-3",
            "16. Richard-Wagner-Platz 19",
            "17. Elterleinplatz 14"
        ],
        answer: "15. Gasgasse 8-10"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 16. Bezirk?",
        options: [
            "16. Richard-Wagner-Platz 19",
            "15. Gasgasse 8-10",
            "17. Elterleinplatz 14",
            "18. Martinstraße 100"
        ],
        answer: "16. Richard-Wagner-Platz 19"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 17. Bezirk?",
        options: [
            "17. Elterleinplatz 14",
            "16. Richard-Wagner-Platz 19",
            "18. Martinstraße 100",
            "19. Pfarrwiesengasse 23c"
        ],
        answer: "17. Elterleinplatz 14"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 18. Bezirk?",
        options: [
            "18. Martinstraße 100",
            "17. Elterleinplatz 14",
            "19. Pfarrwiesengasse 23c",
            "20. Brigittaplatz 10"
        ],
        answer: "18. Martinstraße 100"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 19. Bezirk?",
        options: [
            "19. Pfarrwiesengasse 23c",
            "18. Martinstraße 100",
            "20. Brigittaplatz 10",
            "21. Am Spitz 1"
        ],
        answer: "19. Pfarrwiesengasse 23c"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 20. Bezirk?",
        options: [
            "20. Brigittaplatz 10",
            "19. Pfarrwiesengasse 23c",
            "21. Am Spitz 1",
            "22. Schrödingerplatz 1"
        ],
        answer: "20. Brigittaplatz 10"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 21. Bezirk?",
        options: [
            "21. Am Spitz 1",
            "20. Brigittaplatz 10",
            "22. Schrödingerplatz 1",
            "23. Perchtoldsdorfer Straße 2"
        ],
        answer: "21. Am Spitz 1"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 22. Bezirk?",
        options: [
            "22. Schrödingerplatz 1",
            "21. Am Spitz 1",
            "20. Brigittaplatz 10",
            "23. Perchtoldsdorfer Straße 2"
        ],
        answer: "22. Schrödingerplatz 1"
    },

    {
        question: "Wo ist das Magistratische Bezirksamt für den 23. Bezirk?",
        options: [
            "23. Perchtoldsdorfer Straße 2",
            "22. Schrödingerplatz 1",
            "21. Am Spitz 1",
            "20. Brigittaplatz 10"
        ],
        answer: "23. Perchtoldsdorfer Straße 2"
    },

    {
        question: "Wo ist das Fundservice Wien?",
        options: [
            "5. Siebenbrunnenfeldgasse 3",
            "15. Gasgasse 8-10",
            "20. Brigittaplatz 10",
            "21. Am Spitz 1"
        ],
        answer: "5. Siebenbrunnenfeldgasse 3"
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
