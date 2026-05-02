const questions = [
   {
question: "Wo liegt die Universität Wien?",
options: [
"Universitätsring 1",
"WeltHandelsplatz 1",
"Karlsplatz 13",
"Gregor Mendel Straße 33"
],
answer: "Universitätsring 1",
},

{
question: "Wo liegt die Hochschule für angewandte Kunst?",
options: [
"Oskar Kokoschka Platz 2",
"Schillerplatz 3",
"Universitätsring 1",
"Karlsplatz 13"
],
answer: "Oskar Kokoschka Platz 2",
},

{
question: "Wo liegt die Akademie der bildenden Künste?",
options: [
"Schillerplatz 3",
"Oskar Kokoschka Platz 2",
"Universitätsring 1",
"Karlsplatz 13"
],
answer: "Schillerplatz 3",
},

{
question: "Wo liegt die Hochschule für Musik und darstellende Kunst?",
options: [
"Lothringerstraße 20",
"Karlsplatz 13",
"Universitätsring 1",
"Oskar Kokoschka Platz 2"
],
answer: "Lothringerstraße 20",
},

{
question: "Wo liegt Tech Gate Vienna?",
options: [
"Donau-City-Straße 9",
"WeltHandelsplatz 1",
"Veterinärplatz 1",
"Karlsplatz 13"
],
answer: "Donau-City-Straße 9",
},

{
question: "Wo liegt die Technische Universität Wien?",
options: [
"Karlsplatz 13",
"Lothringerstraße 20",
"Universitätsring 1",
"WeltHandelsplatz 1"
],
answer: "Karlsplatz 13",
},

{
question: "Wo liegt die Wirtschaftsuniversität Wien?",
options: [
"WeltHandelsplatz 1",
"Donau-City-Straße 9",
"Karlsplatz 13",
"Universitätsring 1"
],
answer: "WeltHandelsplatz 1",
},

{
question: "Wo liegt die Universität für Bodenkultur (BOKU)?",
options: [
"Gregor Mendel Straße 33",
"WeltHandelsplatz 1",
"Veterinärplatz 1",
"Karlsplatz 13"
],
answer: "Gregor Mendel Straße 33",
},

{
question: "Wo liegt die Veterinärmedizinische Universität?",
options: [
"Veterinärplatz 1",
"Donau-City-Straße 9",
"WeltHandelsplatz 1",
"Universitätsring 1"
],
answer: "Veterinärplatz 1",
},

{
question: "Wo liegt die Pädagogische Hochschule Wien?",
options: [
"Grenzackerstraße 18",
"Karlsplatz 13",
"Gregor Mendel Straße 33",
"WeltHandelsplatz 1"
],
answer: "Grenzackerstraße 18",
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