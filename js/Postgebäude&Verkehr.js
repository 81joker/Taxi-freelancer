const questions = [

    {
        question: "Wo ist das Hauptpostamt (Postamt)?",
        options: [
            "Bezirke 1. Fleischmarkt 19",
            "Bezirke 9. Althanstraße 10",
            "Bezirke 15. Europaplatz 3",
            "Bezirke 23. Halban Kurz Straße 11"
        ],
        answer: "Bezirke 1. Fleischmarkt 19"
    },

    {
        question: "Wo ist das Postamt Franz-Josefs-Bahnhof (Postamt)?",
        options: [
            "Bezirke 9. Althanstraße 10",
            "Bezirke 1. Fleischmarkt 19",
            "Bezirke 15. Europaplatz 3",
            "Bezirke 23. Halban Kurz Straße 11"
        ],
        answer: "Bezirke 9. Althanstraße 10"
    },

    {
        question: "Wo ist das Postamt Westbahnhof (Postamt)?",
        options: [
            "Bezirke 15. Europaplatz 3",
            "Bezirke 1. Fleischmarkt 19",
            "Bezirke 9. Althanstraße 10",
            "Bezirke 23. Halban Kurz Straße 11"
        ],
        answer: "Bezirke 15. Europaplatz 3"
    },

    {
        question: "Wo ist das Post-Verteilerzentrum (Post)?",
        options: [
            "Bezirke 23. Halban Kurz Straße 11",
            "Bezirke 15. Europaplatz 3",
            "Bezirke 9. Althanstraße 10",
            "Bezirke 1. Fleischmarkt 19"
        ],
        answer: "Bezirke 23. Halban Kurz Straße 11"
    },

    {
        question: "Wo ist der Hauptbahnhof Wien (Bahnhof)?",
        options: [
            "Bezirke 10. Am Hauptbahnhof 1",
            "Bezirke 9. Nordbergstraße",
            "Bezirke 15. Europaplatz",
            "Bezirke 3. Landstraßer Hauptstraße"
        ],
        answer: "Bezirke 10. Am Hauptbahnhof 1"
    },

    {
        question: "Wo ist der Franz-Josefs-Bahnhof (Bahnhof)?",
        options: [
            "Bezirke 9. Nordbergstraße",
            "Bezirke 15. Europaplatz",
            "Bezirke 3. Landstraßer Hauptstraße",
            "Bezirke 2. Praterstern"
        ],
        answer: "Bezirke 9. Nordbergstraße"
    },

    {
        question: "Wo ist der Westbahnhof (Bahnhof)?",
        options: [
            "Bezirke 15. Europaplatz / Felberstraße",
            "Bezirke 9. Nordbergstraße",
            "Bezirke 3. Landstraßer Hauptstraße",
            "Bezirke 2. Praterstern"
        ],
        answer: "Bezirke 15. Europaplatz / Felberstraße"
    },

    {
        question: "Wo ist der Bahnhof Wien Mitte (Bahnhof)?",
        options: [
            "Bezirke 3. Landstraßer Hauptstraße",
            "Bezirke 15. Europaplatz",
            "Bezirke 9. Nordbergstraße",
            "Bezirke 2. Praterstern"
        ],
        answer: "Bezirke 3. Landstraßer Hauptstraße"
    },

    {
        question: "Wo ist der City-Air-Terminal CAT (Bahnhof / Flughafen Zug)?",
        options: [
            "Bezirke 3. Gigergasse / Marxergasse",
            "Bezirke 3. Landstraßer Hauptstraße",
            "Bezirke 2. Praterstern",
            "Bezirke 15. Europaplatz"
        ],
        answer: "Bezirke 3. Gigergasse / Marxergasse"
    },

    {
        question: "Wo ist der Bahnhof Wien Nord (Bahnhof)?",
        options: [
            "Bezirke 2. Praterstern",
            "Bezirke 15. Europaplatz",
            "Bezirke 9. Nordbergstraße",
            "Bezirke 3. Landstraßer Hauptstraße"
        ],
        answer: "Bezirke 2. Praterstern"
    },

    {
        question: "Wo ist der Bahnhof Hütteldorf (Bahnhof)?",
        options: [
            "Bezirke 14. Keißlergasse",
            "Bezirke 2. Praterstern",
            "Bezirke 12. Eichenstraße",
            "Bezirke 15. Europaplatz"
        ],
        answer: "Bezirke 14. Keißlergasse"
    },

    {
        question: "Wo ist der Bahnhof Meidling (Bahnhof)?",
        options: [
            "Bezirke 12. Eichenstraße",
            "Bezirke 14. Keißlergasse",
            "Bezirke 15. Europaplatz",
            "Bezirke 9. Nordbergstraße"
        ],
        answer: "Bezirke 12. Eichenstraße"
    },

    {
        question: "Wo ist der Autobusbahnhof Erdberg (Internationale Busse)?",
        options: [
            "Bezirke 3. Erdbergstraße / U3",
            "Bezirke 4. Südtirolerplatz",
            "Bezirke 21. Floridsdorf",
            "Bezirke 22. Dr. Adolf Schärf Platz"
        ],
        answer: "Bezirke 3. Erdbergstraße / U3"
    },

    {
        question: "Wo ist der Autobusbahnhof Südtiroler Platz (Busbahnhof)?",
        options: [
            "Bezirke 4. Südtirolerplatz / Wiedner Gürtel / U1",
            "Bezirke 3. Erdbergstraße",
            "Bezirke 21. Floridsdorf",
            "Bezirke 11. Simmeringer Platz"
        ],
        answer: "Bezirke 4. Südtirolerplatz / Wiedner Gürtel / U1"
    },

    {
        question: "Wo ist der Autobusbahnhof Floridsdorf (Busbahnhof)?",
        options: [
            "Bezirke 21. Floridsdorf / Schloßhofer Straße / U6",
            "Bezirke 3. Erdbergstraße",
            "Bezirke 22. Dr. Adolf Schärf Platz",
            "Bezirke 11. Simmeringer Platz"
        ],
        answer: "Bezirke 21. Floridsdorf / Schloßhofer Straße / U6"
    },

    {
        question: "Wo ist der Autobusbahnhof Kagran (Busbahnhof)?",
        options: [
            "Bezirke 22. Dr. Adolf Schärf Platz / U1",
            "Bezirke 21. Floridsdorf",
            "Bezirke 3. Erdbergstraße",
            "Bezirke 11. Simmeringer Platz"
        ],
        answer: "Bezirke 22. Dr. Adolf Schärf Platz / U1"
    },

    {
        question: "Wo ist der Autobusbahnhof Simmering (Busbahnhof)?",
        options: [
            "Bezirke 11. Simmeringer Platz / U3",
            "Bezirke 21. Floridsdorf",
            "Bezirke 3. Erdbergstraße",
            "Bezirke 22. Kagran"
        ],
        answer: "Bezirke 11. Simmeringer Platz / U3"
    },

    {
        question: "Wo ist das Vienna Busterminal Stadion Center (Busbahnhof)?",
        options: [
            "Bezirke 2. Olympiaplatz / Engerthstraße 242",
            "Bezirke 11. Simmeringer Platz",
            "Bezirke 3. Erdbergstraße",
            "Bezirke 21. Floridsdorf"
        ],
        answer: "Bezirke 2. Olympiaplatz / Engerthstraße 242"
    },

    {
        question: "Wo ist das DDSG Schifffahrtszentrum Wien Reichsbrücke (Schifffahrt)?",
        options: [
            "Bezirke 22. Handelskai 265",
            "Bezirke 1. Franz-Josefs-Kai",
            "Bezirke 11. Seitenhafenstraße 15",
            "Bezirke 2. Freudenauer Hafenstraße"
        ],
        answer: "Bezirke 22. Handelskai 265"
    },

    {
        question: "Wo ist die Dampfschiffstation Schwedenbrücke (Schifffahrt)?",
        options: [
            "Bezirke 1. Franz-Josefs-Kai / Schwedenbrücke",
            "Bezirke 22. Handelskai 265",
            "Bezirke 11. Seitenhafenstraße 15",
            "Bezirke 2. Freudenauer Hafenstraße"
        ],
        answer: "Bezirke 1. Franz-Josefs-Kai / Schwedenbrücke"
    },

    {
        question: "Wo ist der Wiener Hafen Zollfreizone (Hafen)?",
        options: [
            "Bezirke 11. Seitenhafenstraße 15",
            "Bezirke 22. Handelskai 265",
            "Bezirke 2. Freudenauer Hafenstraße",
            "Bezirke 19. Kuchelauer Hafenstraße"
        ],
        answer: "Bezirke 11. Seitenhafenstraße 15"
    },

    {
        question: "Wo ist der Freudenauer Hafen (Hafen)?",
        options: [
            "Bezirke 2. Freudenauer Hafenstraße 8-10",
            "Bezirke 11. Seitenhafenstraße 15",
            "Bezirke 11. Alberner Hafen Zufahrtsstraße",
            "Bezirke 19. Kuchelauer Hafenstraße"
        ],
        answer: "Bezirke 2. Freudenauer Hafenstraße 8-10"
    },

    {
        question: "Wo ist der Alberner Hafen (Hafen)?",
        options: [
            "Bezirke 11. Alberner Hafen Zufahrtsstraße",
            "Bezirke 2. Freudenauer Hafenstraße",
            "Bezirke 19. Kuchelauer Hafenstraße",
            "Bezirke 11. Seitenhafenstraße"
        ],
        answer: "Bezirke 11. Alberner Hafen Zufahrtsstraße"
    },

    {
        question: "Wo ist der Kuchelauer Hafen (Hafen)?",
        options: [
            "Bezirke 19. Kuchelauer Hafenstraße",
            "Bezirke 2. Freudenauer Hafenstraße",
            "Bezirke 11. Alberner Hafen Zufahrtsstraße",
            "Bezirke 11. Seitenhafenstraße"
        ],
        answer: "Bezirke 19. Kuchelauer Hafenstraße"
    },

    {
        question: "Wo ist die KFZ Verwahrstelle der MA 48 (KFZ Verkehr)?",
        options: [
            "Bezirke 21. Jedletzbergerstraße 1",
            "Bezirke 21. Trauzlgasse 1",
            "Bezirke 19. Kuchelauer Hafenstraße",
            "Bezirke 11. Seitenhafenstraße"
        ],
        answer: "Bezirke 21. Jedletzbergerstraße 1"
    },

    {
        question: "Wo ist die Bundesanstalt Verkehr Bundesprüfanstalt (Verkehrsamt)?",
        options: [
            "Bezirke 21. Trauzlgasse 1",
            "Bezirke 21. Jedletzbergerstraße 1",
            "Bezirke 2. Freudenauer Hafenstraße",
            "Bezirke 19. Kuchelauer Hafenstraße"
        ],
        answer: "Bezirke 21. Trauzlgasse 1"
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
