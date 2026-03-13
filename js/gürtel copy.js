

const questions = [

    {
        question: "Welche Straße liegt am Landstraßer Gürtel?",
        options: [
            "Landstraßer Hauptstraße",
            "Mariahilfer Straße",
            "Prager Straße",
            "Währinger Straße"
        ],
        answer: "Landstraßer Hauptstraße"
    },

    {
        question: "Welche Straße liegt am Wiedner Gürtel?",
        options: [
            "Favoritenstraße",
            "Operngasse",
            "Babenbergerstraße",
            "Liechtensteinstraße"
        ],
        answer: "Favoritenstraße"
    },

    {
        question: "Welche Straße liegt am Margaretengürtel?",
        options: [
            "Wiedner Hauptstraße",
            "Praterstraße",
            "Grillparzerstraße",
            "Schottengasse"
        ],
        answer: "Wiedner Hauptstraße"
    },

    {
        question: "Welche Straße liegt am Gumpendorfer Gürtel?",
        options: [
            "Gumpendorfer Straße",
            "Praterstraße",
            "Favoritenstraße",
            "Währinger Straße"
        ],
        answer: "Gumpendorfer Straße"
    },

    {
        question: "Welche Straße liegt am Mariahilfer Gürtel?",
        options: [
            "Mariahilfer Straße",
            "Lassallestraße",
            "Prager Straße",
            "Operngasse"
        ],
        answer: "Mariahilfer Straße"
    },

    {
        question: "Welche Straße liegt am Neubaugürtel?",
        options: [
            "Westbahnstraße",
            "Praterstraße",
            "Favoritenstraße",
            "Währinger Straße"
        ],
        answer: "Westbahnstraße"
    },

    {
        question: "Welche Straße liegt am Lerchenfelder Gürtel?",
        options: [
            "Lerchenfelder Straße",
            "Operngasse",
            "Johannesgasse",
            "Liechtensteinstraße"
        ],
        answer: "Lerchenfelder Straße"
    },

    {
        question: "Welche Straße liegt am Hernalser Gürtel?",
        options: [
            "Alserstraße",
            "Praterstraße",
            "Währinger Straße",
            "Babenbergerstraße"
        ],
        answer: "Alserstraße"
    },

    {
        question: "Welche Straße liegt am Währinger Gürtel?",
        options: [
            "Währinger Straße",
            "Prager Straße",
            "Lassallestraße",
            "Favoritenstraße"
        ],
        answer: "Währinger Straße"
    },

    {
        question: "Welche Straße liegt am Döblinger Gürtel?",
        options: [
            "Döblinger Hauptstraße",
            "Prager Straße",
            "Operngasse",
            "Währinger Straße"
        ],
        answer: "Döblinger Hauptstraße"
    },

    {
        question: "Welche Straße liegt am Hernalser Gürtel (äußerer Gürtel)?",
        options: [
            "Ottakringer Straße",
            "Praterstraße",
            "Favoritenstraße",
            "Liechtensteinstraße"
        ],
        answer: "Ottakringer Straße"
    },

    {
        question: "Welche Straße liegt am Neubaugürtel (äußerer Gürtel)?",
        options: [
            "Hütteldorferstraße",
            "Operngasse",
            "Lassallestraße",
            "Praterstraße"
        ],
        answer: "Hütteldorferstraße"
    },

    {
        question: "Welche Straße liegt am Wiedner Gürtel (äußerer Gürtel)?",
        options: [
            "Laxenburger Straße",
            "Praterstraße",
            "Liechtensteinstraße",
            "Grillparzerstraße"
        ],
        answer: "Laxenburger Straße"
    },

    {
        question: "Welche Autobahn ist die Donauuferautobahn?",
        options: [
            "A22",
            "A1",
            "A2",
            "A4"
        ],
        answer: "A22"
    },

    {
        question: "Welche Autobahn ist die Südosttangente?",
        options: [
            "A23",
            "A1",
            "A21",
            "A22"
        ],
        answer: "A23"
    },

    {
        question: "Welche Autobahn ist die Südautobahn?",
        options: [
            "A2",
            "A1",
            "A4",
            "A22"
        ],
        answer: "A2"
    },

    {
        question: "Welche Autobahn ist die Westautobahn?",
        options: [
            "A1",
            "A2",
            "A23",
            "A22"
        ],
        answer: "A1"
    },

    {
        question: "Welche Schnellstraße ist der Wiener Außenring?",
        options: [
            "S1",
            "S2",
            "A23",
            "A21"
        ],
        answer: "S1"
    },

    {
        question: "Welche Schnellstraße ist die Wiener Nordrand Schnellstraße?",
        options: [
            "S2",
            "S1",
            "A23",
            "A4"
        ],
        answer: "S2"
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