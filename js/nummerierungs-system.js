const questions = [

{
question: "Nach welchem System sind die Wiener Plätze nummeriert?",
options: [
"Im Uhrzeigersinn, beginnend bei den dem Stadtzentrum näheren Häusern",
"Gegen den Uhrzeigersinn",
"Nach Bezirken",
"Alphabetisch"
],
answer: "Im Uhrzeigersinn, beginnend bei den dem Stadtzentrum näheren Häusern"
},

{
question: "Wo beginnen die Hausnummerierungen bei Straßen, die vom Stadtzentrum aus gesehen in Richtung stadtauswärts führen?",
options: [
"Am Beginn der Straße, der dem Stadtzentrum näher liegt",
"In der Mitte der Straße",
"Am Ende der Straße",
"Bei der größten Hausnummer"
],
answer: "Am Beginn der Straße, der dem Stadtzentrum näher liegt"
},

{
question: "Wo beginnen die Hausnummerierungen bei Straßen, die vom Stadtzentrum aus gesehen querverlaufend sind?",
options: [
"Beginnend im Uhrzeigersinn",
"Gegen den Uhrzeigersinn",
"In der Straßenmitte",
"Beim größten Haus"
],
answer: "Beginnend im Uhrzeigersinn"
},

{
question: "Sie stehen in einer Straße. Rechts von Ihnen ist eine gerade Hausnummer. Wo beginnt die Straße?",
options: [
"Hinter mir",
"Vor mir",
"Links von mir",
"Am Ende der Straße"
],
answer: "Hinter mir"
},

{
question: "Sie stehen in einer Straße. Rechts von Ihnen ist eine ungerade Hausnummer. Wo beginnt die Straße?",
options: [
"Vor mir",
"Hinter mir",
"Links von mir",
"In der Mitte der Straße"
],
answer: "Vor mir"
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