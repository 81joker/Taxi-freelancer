const questions = [

    {
        question: "Wo ist das Hauptpostamt (Postamt)?",
        options: [
            "Fleischmarkt 19",
            "Althanstraße 10",
            "Europaplatz 3",
            "Halban Kurz Straße 11"
        ],
        answer: "Fleischmarkt 19"
    },

    {
        question: "Wo ist das Postamt Franz-Josefs-Bahnhof (Postamt)?",
        options: [
            "Althanstraße 10",
            "Fleischmarkt 19",
            "Europaplatz 3",
            "Halban Kurz Straße 11"
        ],
        answer: "Althanstraße 10"
    },

    {
        question: "Wo ist das Postamt Westbahnhof (Postamt)?",
        options: [
            "Europaplatz 3",
            "Fleischmarkt 19",
            "Althanstraße 10",
            "Halban Kurz Straße 11"
        ],
        answer: "Europaplatz 3"
    },

    {
        question: "Wo ist das Post-Verteilerzentrum (Post)?",
        options: [
            "Halban Kurz Straße 11",
            "Europaplatz 3",
            "Althanstraße 10",
            "Fleischmarkt 19"
        ],
        answer: "Halban Kurz Straße 11"
    },

    {
        question: "Wo ist der Hauptbahnhof Wien (Bahnhof)?",
        options: [
            "Am Hauptbahnhof 1",
            "Nordbergstraße",
            "Europaplatz",
            "Landstraßer Hauptstraße"
        ],
        answer: "Am Hauptbahnhof 1"
    },

    {
        question: "Wo ist der Franz-Josefs-Bahnhof (Bahnhof)?",
        options: [
            "Nordbergstraße",
            "Europaplatz",
            "Landstraßer Hauptstraße",
            "Praterstern"
        ],
        answer: "Nordbergstraße"
    },

    {
        question: "Wo ist der Westbahnhof (Bahnhof)?",
        options: [
            "Europaplatz / Felberstraße",
            "Nordbergstraße",
            "Landstraßer Hauptstraße",
            "Praterstern"
        ],
        answer: "Europaplatz / Felberstraße"
    },

    {
        question: "Wo ist der Bahnhof Wien Mitte (Bahnhof)?",
        options: [
            "Landstraßer Hauptstraße",
            "Europaplatz",
            "Nordbergstraße",
            "Praterstern"
        ],
        answer: "Landstraßer Hauptstraße"
    },

    {
        question: "Wo ist der City-Air-Terminal CAT (Bahnhof / Flughafen Zug)?",
        options: [
            "Gigergasse / Marxergasse",
            "Landstraßer Hauptstraße",
            "Praterstern",
            "Europaplatz"
        ],
        answer: "Gigergasse / Marxergasse"
    },

    {
        question: "Wo ist der Bahnhof Wien Nord (Bahnhof)?",
        options: [
            "Praterstern",
            "Europaplatz",
            "Nordbergstraße",
            "Landstraßer Hauptstraße"
        ],
        answer: "Praterstern"
    },

    {
        question: "Wo ist der Bahnhof Hütteldorf (Bahnhof)?",
        options: [
            "Keißlergasse",
            "Praterstern",
            "Eichenstraße",
            "Europaplatz"
        ],
        answer: "Keißlergasse"
    },

    {
        question: "Wo ist der Bahnhof Meidling (Bahnhof)?",
        options: [
            "Eichenstraße",
            "Keißlergasse",
            "Europaplatz",
            "Nordbergstraße"
        ],
        answer: "Eichenstraße"
    },

    {
        question: "Wo ist der Autobusbahnhof Erdberg (Internationale Busse)?",
        options: [
            "Erdbergstraße / U3",
            "Südtirolerplatz",
            "Floridsdorf",
            "Dr. Adolf Schärf Platz"
        ],
        answer: "Erdbergstraße / U3"
    },

    {
        question: "Wo ist der Autobusbahnhof Südtiroler Platz (Busbahnhof)?",
        options: [
            "Südtirolerplatz / Wiedner Gürtel / U1",
            "Erdbergstraße",
            "Floridsdorf",
            "Simmeringer Platz"
        ],
        answer: "Südtirolerplatz / Wiedner Gürtel / U1"
    },

    {
        question: "Wo ist der Autobusbahnhof Floridsdorf (Busbahnhof)?",
        options: [
            "Floridsdorf / Schloßhofer Straße / U6",
            "Erdbergstraße",
            "Dr. Adolf Schärf Platz",
            "Simmeringer Platz"
        ],
        answer: "Floridsdorf / Schloßhofer Straße / U6"
    },

    {
        question: "Wo ist der Autobusbahnhof Kagran (Busbahnhof)?",
        options: [
            "Dr. Adolf Schärf Platz / U1",
            "Floridsdorf",
            "Erdbergstraße",
            "Simmeringer Platz"
        ],
        answer: "Dr. Adolf Schärf Platz / U1"
    },

    {
        question: "Wo ist der Autobusbahnhof Simmering (Busbahnhof)?",
        options: [
            "Simmeringer Platz / U3",
            "Floridsdorf",
            "Erdbergstraße",
            "Kagran"
        ],
        answer: "Simmeringer Platz / U3"
    },

    {
        question: "Wo ist das Vienna Busterminal Stadion Center (Busbahnhof)?",
        options: [
            "Olympiaplatz / Engerthstraße 242",
            "Simmeringer Platz",
            "Erdbergstraße",
            "Floridsdorf"
        ],
        answer: "Olympiaplatz / Engerthstraße 242"
    },

    {
        question: "Wo ist das DDSG Schifffahrtszentrum Wien Reichsbrücke (Schifffahrt)?",
        options: [
            "Handelskai 265",
            "Franz-Josefs-Kai",
            "Seitenhafenstraße 15",
            "Freudenauer Hafenstraße"
        ],
        answer: "Handelskai 265"
    },

    {
        question: "Wo ist die Dampfschiffstation Schwedenbrücke (Schifffahrt)?",
        options: [
            "Franz-Josefs-Kai / Schwedenbrücke",
            "Handelskai 265",
            "Seitenhafenstraße 15",
            "Freudenauer Hafenstraße"
        ],
        answer: "Franz-Josefs-Kai / Schwedenbrücke"
    },

    {
        question: "Wo ist der Wiener Hafen Zollfreizone (Hafen)?",
        options: [
            "Seitenhafenstraße 15",
            "Handelskai 265",
            "Freudenauer Hafenstraße",
            "Kuchelauer Hafenstraße"
        ],
        answer: "Seitenhafenstraße 15"
    },

    {
        question: "Wo ist der Freudenauer Hafen (Hafen)?",
        options: [
            "Freudenauer Hafenstraße 8-10",
            "Seitenhafenstraße 15",
            "Alberner Hafen Zufahrtsstraße",
            "Kuchelauer Hafenstraße"
        ],
        answer: "Freudenauer Hafenstraße 8-10"
    },

    {
        question: "Wo ist der Alberner Hafen (Hafen)?",
        options: [
            "Alberner Hafen Zufahrtsstraße",
            "Freudenauer Hafenstraße",
            "Kuchelauer Hafenstraße",
            "Seitenhafenstraße"
        ],
        answer: "Alberner Hafen Zufahrtsstraße"
    },

    {
        question: "Wo ist der Kuchelauer Hafen (Hafen)?",
        options: [
            "Kuchelauer Hafenstraße",
            "Freudenauer Hafenstraße",
            "Alberner Hafen Zufahrtsstraße",
            "Seitenhafenstraße"
        ],
        answer: "Kuchelauer Hafenstraße"
    },

    {
        question: "Wo ist die KFZ Verwahrstelle der MA 48 (KFZ Verkehr)?",
        options: [
            "Jedletzbergerstraße 1",
            "Trauzlgasse 1",
            "Kuchelauer Hafenstraße",
            "Seitenhafenstraße"
        ],
        answer: "Jedletzbergerstraße 1"
    },

    {
        question: "Wo ist die Bundesanstalt Verkehr Bundesprüfanstalt (Verkehrsamt)?",
        options: [
            "Trauzlgasse 1",
            "Jedletzbergerstraße 1",
            "Freudenauer Hafenstraße",
            "Kuchelauer Hafenstraße"
        ],
        answer: "Trauzlgasse 1"
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
