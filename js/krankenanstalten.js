const questions = [
    {
        question: "Wo liegt das Allgemeine Krankenhaus (AKH)?",
        options: [
            "Währinger Gürtel 18",
            "Kundratstraße 37",
            "Langobardenstraße 122",
            "Brünner Straße 68"
        ],
        answer: "Währinger Gürtel 18",
    },

    {
        question: "Wo liegt das AUVA-Traumazentrum Wien Meidling?",
        options: [
            "Kundratstraße 37",
            "Donauschingenstraße 13",
            "Nikolsdorfergasse 32",
            "Baumgasse 20A"
        ],
        answer: "Kundratstraße 37",
    },

    {
        question: "Wo liegt das AUVA-Traumazentrum Wien Lorenz Böhler?",
        options: [
            "Donauschingenstraße 13",
            "Kundratstraße 37",
            "Hans-Sachs-Gasse 10-12",
            "Brünner Straße 238"
        ],
        answer: "Donauschingenstraße 13",
    },

    {
        question: "Wo liegt das Krankenhaus Barmherzige Schwestern?",
        options: [
            "Stumpergasse 13-15",
            "Skodagasse 32",
            "Nikolsdorfergasse 32",
            "Pelikangasse 15"
        ],
        answer: "Stumpergasse 13-15",
    },

    {
        question: "Wo liegt das Krankenhaus Barmherzige Brüder?",
        options: [
            "Johannes von Gott-Platz 1",
            "Stumpergasse 13-15",
            "Hans-Sachs-Gasse 10-12",
            "Baumgasse 20A"
        ],
        answer: "Johannes von Gott-Platz 1",
    },

    {
        question: "Wo liegt die Privatklinik Confraternität?",
        options: [
            "Skodagasse 32",
            "Lazarettgasse 16-18",
            "Pelikanngasse 15",
            "Sensengasse 2a"
        ],
        answer: "Skodagasse 32",
    },

    {
        question: "Wo liegt die Klinik Donaustadt (vormals SMZ Ost)?",
        options: [
            "Langobardenstraße 122",
            "Langobardenstraße 180",
            "Brünner Straße 238",
            "Donauschingenstraße 13"
        ],
        answer: "Langobardenstraße 122",
    },

    {
        question: "Wo liegt das Evangelische Krankenhaus?",
        options: [
            "Hans-Sachs-Gasse 10-12",
            "Dornbacher Straße 20-30",
            "Heiligenstädter Straße 55",
            "Montleartstraße 37"
        ],
        answer: "Hans-Sachs-Gasse 10-12",
    },

    {
        question: "Wo liegt das Anton-Proksch-Institut?",
        options: [
            "Gräfin Zichy Straße 6",
            "Hans-Sachs-Gasse 10-12",
            "Speisinger Straße 109",
            "Auhofstraße 189"
        ],
        answer: "Gräfin Zichy Straße 6",
    },

    {
        question: "Wo liegt das Franziskus Spital Landstraße?",
        options: [
            "Landstraßer Hauptstraße 4a",
            "Baumgasse 20A",
            "Juchgasse 25",
            "Billrothstraße 78"
        ],
        answer: "Landstraßer Hauptstraße 4a",
    },

    {
        question: "Wo liegt das Franziskus Spital Margareten?",
        options: [
            "Nikolsdorfergasse 32",
            "Stumpergasse 13-15",
            "Kundratstraße 37",
            "Skodagasse 32"
        ],
        answer: "Nikolsdorfergasse 32",
    },

    {
        question: "Wo liegt die Privatklinik Goldenes Kreuz?",
        options: [
            "Lazarettgasse 16-18",
            "Währinger Gürtel 18",
            "Pelikangasse 15",
            "Löblichgasse 14"
        ],
        answer: "Lazarettgasse 16-18",
    },

    {
        question: "Wo liegt das Krankenhaus Göttlicher Heiland?",
        options: [
            "Dornbacher Straße 20-30",
            "Hans-Sachs-Gasse 10-12",
            "Alszeile 28",
            "Montleartstraße 37"
        ],
        answer: "Dornbacher Straße 20-30",
    },

    {
        question: "Wo liegt das Hanusch Krankenhaus?",
        options: [
            "Heinrich-Collin Straße 30",
            "Baumgartner Höhe 1",
            "Auhofstraße 189",
            "Speisinger Straße 109"
        ],
        answer: "Heinrich-Collin Straße 30",
    },

    {
        question: "Wo liegt das Sanitätszentrum Ost (ehem. Heeresspital)?",
        options: [
            "Brünner Straße 238",
            "Brünner Straße 68",
            "Langobardenstraße 122",
            "Strebersdorfer Straße 2"
        ],
        answer: "Brünner Straße 238",
    },

    {
        question: "Wo liegt das Herz-Jesu-Krankenhaus?",
        options: [
            "Baumgasse 20A",
            "Wolkersbergenstraße 1",
            "Riedelgasse 5",
            "Speisinger Straße 109"
        ],
        answer: "Baumgasse 20A",
    },

    {
        question: "Wo liegt die Klinik Hietzing?",
        options: [
            "Wolkersbergenstraße 1",
            "Auhofstraße 189",
            "Heiligenstädter Straße 55",
            "Montleartstraße 37"
        ],
        answer: "Wolkersbergenstraße 1",
    },

    {
        question: "Wo liegt das Neurologische Krankenhaus Rosenhügel?",
        options: [
            "Riedelgasse 5",
            "Speisinger Straße 109",
            "Auhofstraße 189",
            "Baumgartner Höhe 1"
        ],
        answer: "Riedelgasse 5",
    },

    {
        question: "Wo liegt das Orthopädische Spital Speising?",
        options: [
            "Speisinger Straße 109",
            "Riedelgasse 5",
            "Wolkersbergenstraße 1",
            "Auhofstraße 189"
        ],
        answer: "Speisinger Straße 109",
    },

    {
        question: "Wo liegt das Rudolfiner Haus?",
        options: [
            "Billrothstraße 78",
            "Heiligenstädter Straße 55",
            "Brünner Straße 68",
            "Löblichgasse 14"
        ],
        answer: "Billrothstraße 78",
    },

    {
        question: "Wo liegt die Klinik Landstraße (vorm. Rudolfstiftung)?",
        options: [
            "Juchgasse 25",
            "Landstraßer Hauptstraße 4a",
            "Nikolsdorfergasse 32",
            "Kundratstraße 37"
        ],
        answer: "Juchgasse 25",
    },

    {
        question: "Wo liegt das Sanatorium Hera?",
        options: [
            "Löblichgasse 14",
            "Sensengasse 2a",
            "Pelikangasse 15",
            "Juchgasse 25"
        ],
        answer: "Löblichgasse 14",
    },

    {
        question: "Wo liegt das Sanatorium Liebhartsthal?",
        options: [
            "Kollburggasse 6-10",
            "Montleartstraße 37",
            "Heiligenstädter Straße 55",
            "Billrothstraße 78"
        ],
        answer: "Kollburggasse 6-10",
    },

    {
        question: "Wo liegt die Privatklinik Döbling?",
        options: [
            "Heiligenstädter Straße 55",
            "Billrothstraße 78",
            "Kollburggasse 6-10",
            "Löblichgasse 14"
        ],
        answer: "Heiligenstädter Straße 55",
    },

    {
        question: "Wo liegt die Klinik Penzing?",
        options: [
            "Baumgartner Höhe 1",
            "Auhofstraße 189",
            "Montleartstraße 37",
            "Speisinger Straße 109"
        ],
        answer: "Baumgartner Höhe 1",
    },

    {
        question: "Wo liegt die Klinik Favoriten?",
        options: [
            "Kundratstraße 3",
            "Kundratstraße 37",
            "Nikolsdorfergasse 32",
            "Baumgasse 20A"
        ],
        answer: "Kundratstraße 3",
    },

    {
        question: "Wo liegt das St. Anna Kinderspital?",
        options: [
            "Kinderspitalgasse 6",
            "Sensengasse 2a",
            "Lazarettgasse 16-18",
            "Skodagasse 32"
        ],
        answer: "Kinderspitalgasse 6",
    },

    {
        question: "Wo liegt das St. Josef-Krankenhaus?",
        options: [
            "Auhofstraße 189",
            "Speisinger Straße 109",
            "Wolkersbergenstraße 1",
            "Montleartstraße 37"
        ],
        answer: "Auhofstraße 189",
    },

    {
        question: "Wo liegt die Universitäts-Zahnklinik?",
        options: [
            "Sensengasse 2a",
            "Kinderspitalgasse 6",
            "Lazarettgasse 16-18",
            "Skodagasse 32"
        ],
        answer: "Sensengasse 2a",
    },

    {
        question: "Wo liegt die Klinik Floridsdorf?",
        options: [
            "Brünner Straße 68",
            "Brünner Straße 238",
            "Langobardenstraße 122",
            "Langobardenstraße 180"
        ],
        answer: "Brünner Straße 68",
    },

    {
        question: "Wo liegt die Klinik Ottakring?",
        options: [
            "Montleartstraße 37",
            "Dornbacher Straße 20-30",
            "Hans-Sachs-Gasse 10-12",
            "Heinrich-Collin Straße 30"
        ],
        answer: "Montleartstraße 37",
    },

    {
        question: "Wo liegt die Wiener Privatklinik?",
        options: [
            "Pelikanngasse 15",
            "Lazarettgasse 16-18",
            "Skodagasse 32",
            "Sensengasse 2a"
        ],
        answer: "Pelikanngasse 15",
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
