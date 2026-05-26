const questions = [
    {
        question: "Wo liegt das Allgemeine Krankenhaus (AKH)?",
        options: [
            "Bezirke 9. Währinger Gürtel 18",
            "Bezirke 12. Kundratstraße 37",
            "Bezirke 22. Langobardenstraße 122",
            "Bezirke 21. Brünner Straße 68"
        ],
        answer: "Bezirke 9. Währinger Gürtel 18",
    },

    {
        question: "Wo liegt das AUVA-Traumazentrum Wien Meidling?",
        options: [
            "Bezirke 12. Kundratstraße 37",
            "Bezirke 20. Donauschingenstraße 13",
            "Bezirke 5. Nikolsdorfergasse 32",
            "Bezirke 3. Baumgasse 20A"
        ],
        answer: "Bezirke 12. Kundratstraße 37",
    },

    {
        question: "Wo liegt das AUVA-Traumazentrum Wien Lorenz Böhler?",
        options: [
            "Bezirke 20. Donauschingenstraße 13",
            "Bezirke 12. Kundratstraße 37",
            "Bezirke 18. Hans-Sachs-Gasse 10-12",
            "Bezirke 21. Brünner Straße 238"
        ],
        answer: "Bezirke 20. Donauschingenstraße 13",
    },

    {
        question: "Wo liegt das Krankenhaus Barmherzige Schwestern?",
        options: [
            "Bezirke 6. Stumpergasse 13-15",
            "Bezirke 8. Skodagasse 32",
            "Bezirke 5. Nikolsdorfergasse 32",
            "Bezirke 9. Pelikangasse 15"
        ],
        answer: "Bezirke 6. Stumpergasse 13-15",
    },

    {
        question: "Wo liegt das Krankenhaus Barmherzige Brüder?",
        options: [
            "Bezirke 2. Johannes von Gott-Platz 1",
            "Bezirke 6. Stumpergasse 13-15",
            "Bezirke 18. Hans-Sachs-Gasse 10-12",
            "Bezirke 3. Baumgasse 20A"
        ],
        answer: "Bezirke 2. Johannes von Gott-Platz 1",
    },

    {
        question: "Wo liegt die Privatklinik Confraternität?",
        options: [
            "Bezirke 8. Skodagasse 32",
            "Bezirke 9. Lazarettgasse 16-18",
            "Bezirke 9. Pelikanngasse 15",
            "Bezirke 9. Sensengasse 2a"
        ],
        answer: "Bezirke 8. Skodagasse 32",
    },

    {
        question: "Wo liegt die Klinik Donaustadt (vormals SMZ Ost)?",
        options: [
            "Bezirke 22. Langobardenstraße 122",
            "Bezirke 9. Lazarettgasse 16-18",
            "Bezirke 21. Brünner Straße 238",
            "Bezirke 20. Donauschingenstraße 13"
        ],
        answer: "Bezirke 22. Langobardenstraße 122",
    },

    {
        question: "Wo liegt das Evangelische Krankenhaus?",
        options: [
            "Bezirke 18. Hans-Sachs-Gasse 10-12",
            "Bezirke 17. Dornbacher Straße 20-30",
            "Bezirke 19. Heiligenstädter Straße 55",
            "Bezirke 16. Montleartstraße 37"
        ],
        answer: "Bezirke 18. Hans-Sachs-Gasse 10-12",
    },

    {
        question: "Wo liegt das Anton-Proksch-Institut?",
        options: [
            "Bezirke 23. Gräfin Zichy Straße 6",
            "Bezirke 18. Hans-Sachs-Gasse 10-12",
            "Bezirke 13. Speisinger Straße 109",
            "Bezirke 13. Auhofstraße 189"
        ],
        answer: "Bezirke 23. Gräfin Zichy Straße 6",
    },

    {
        question: "Wo liegt das Franziskus Spital Landstraße?",
        options: [
            "Bezirke 3. Landstraßer Hauptstraße 4a",
            "Bezirke 3. Baumgasse 20A",
            "Bezirke 3. Juchgasse 25",
            "Bezirke 19. Billrothstraße 78"
        ],
        answer: "Bezirke 3. Landstraßer Hauptstraße 4a",
    },

    {
        question: "Wo liegt das Franziskus Spital Margareten?",
        options: [
            "Bezirke 5. Nikolsdorfergasse 32",
            "Bezirke 6. Stumpergasse 13-15",
            "Bezirke 12. Kundratstraße 37",
            "Bezirke 8. Skodagasse 32"
        ],
        answer: "Bezirke 5. Nikolsdorfergasse 32",
    },

    {
        question: "Wo liegt die Privatklinik Goldenes Kreuz?",
        options: [
            "Bezirke 9. Lazarettgasse 16-18",
            "Bezirke 9. Währinger Gürtel 18",
            "Bezirke 9. Pelikangasse 15",
            "Bezirke 9. Löblichgasse 14"
        ],
        answer: "Bezirke 9. Lazarettgasse 16-18",
    },

    {
        question: "Wo liegt das Krankenhaus Göttlicher Heiland?",
        options: [
            "Bezirke 17. Dornbacher Straße 20-30",
            "Bezirke 18. Hans-Sachs-Gasse 10-12",
            "Bezirke 17. Alszeile 28",
            "Bezirke 16. Montleartstraße 37"
        ],
        answer: "Bezirke 17. Dornbacher Straße 20-30",
    },

    {
        question: "Wo liegt das Hanusch Krankenhaus?",
        options: [
            "Bezirke 14. Heinrich-Collin Straße 30",
            "Bezirke 14. Baumgartner Höhe 1",
            "Bezirke 13. Auhofstraße 189",
            "Bezirke 13. Speisinger Straße 109"
        ],
        answer: "Bezirke 14. Heinrich-Collin Straße 30",
    },

    {
        question: "Wo liegt das Sanitätszentrum Ost (ehem. Heeresspital)?",
        options: [
            "Bezirke 21. Brünner Straße 238",
            "Bezirke 21. Brünner Gasse 68",
            "Bezirke 22. Langobardenstraße 122",
            "Bezirke 21. Strebersdorfer Straße 2"
        ],
        answer: "Bezirke 21. Brünner Straße 238",
    },

    {
        question: "Wo liegt das Herz-Jesu-Krankenhaus?",
        options: [
            "Bezirke 3. Baumgasse 20A",
            "Bezirke 13. Wolkersbergenstraße 1",
            "Bezirke 13. Riedelgasse 5",
            "Bezirke 13. Speisinger Straße 109"
        ],
        answer: "Bezirke 3. Baumgasse 20A",
    },

    {
        question: "Wo liegt die Klinik Hietzing?",
        options: [
            "Bezirke 13. Wolkersbergenstraße 1",
            "Bezirke 13. Auhofstraße 189",
            "Bezirke 19. Heiligenstädter Straße 55",
            "Bezirke 16. Montleartstraße 37"
        ],
        answer: "Bezirke 13. Wolkersbergenstraße 1",
    },

    {
        question: "Wo liegt das Neurologische Krankenhaus Rosenhügel?",
        options: [
            "Bezirke 13. Riedelgasse 5",
            "Bezirke 13. Speisinger Straße 109",
            "Bezirke 13. Auhofstraße 189",
            "Bezirke 14. Baumgartner Höhe 1"
        ],
        answer: "Bezirke 13. Riedelgasse 5",
    },

    {
        question: "Wo liegt das Orthopädische Spital Speising?",
        options: [
            "Bezirke 13. Speisinger Straße 109",
            "Bezirke 13. Riedelgasse 5",
            "Bezirke 13. Wolkersbergenstraße 1",
            "Bezirke 13. Auhofstraße 189"
        ],
        answer: "Bezirke 13. Speisinger Straße 109",
    },

    {
        question: "Wo liegt das Rudolfiner Haus?",
        options: [
            "Bezirke 19. Billrothstraße 78",
            "Bezirke 19. Heiligenstädter Straße 55",
            "Bezirke 21. Brünner Straße 68",
            "Bezirke 9. Löblichgasse 14"
        ],
        answer: "Bezirke 19. Billrothstraße 78",
    },

    {
        question: "Wo liegt die Klinik Landstraße (vorm. Rudolfstiftung)?",
        options: [
            "Bezirke 3. Juchgasse 25",
            "Bezirke 3. Landstraßer Hauptstraße 4a",
            "Bezirke 5. Nikolsdorfergasse 32",
            "Bezirke 12. Kundratstraße 37"
        ],
        answer: "Bezirke 3. Juchgasse 25",
    },

    {
        question: "Wo liegt das Sanatorium Hera?",
        options: [
            "Bezirke 9. Löblichgasse 14",
            "Bezirke 9. Sensengasse 2a",
            "Bezirke 9. Pelikangasse 15",
            "Bezirke 3. Juchgasse 25"
        ],
        answer: "Bezirke 9. Löblichgasse 14",
    },

    {
        question: "Wo liegt das Sanatorium Liebhartsthal?",
        options: [
            "Bezirke 16. Kollburggasse 6-10",
            "Bezirke 16. Montleartstraße 37",
            "Bezirke 19. Heiligenstädter Straße 55",
            "Bezirke 19. Billrothstraße 78"
        ],
        answer: "Bezirke 16. Kollburggasse 6-10",
    },

    {
        question: "Wo liegt die Privatklinik Döbling?",
        options: [
            "Bezirke 19. Heiligenstädter Straße 55",
            "Bezirke 19. Billrothstraße 78",
            "Bezirke 16. Kollburggasse 6-10",
            "Bezirke 9. Löblichgasse 14"
        ],
        answer: "Bezirke 19. Heiligenstädter Straße 55",
    },

    {
        question: "Wo liegt die Klinik Penzing?",
        options: [
            "Bezirke 14. Baumgartner Höhe 1",
            "Bezirke 13. Auhofstraße 189",
            "Bezirke 16. Montleartstraße 37",
            "Bezirke 13. Speisinger Straße 109"
        ],
        answer: "Bezirke 14. Baumgartner Höhe 1",
    },

    {
        question: "Wo liegt die Klinik Favoriten?",
        options: [
            "Bezirke 10. Kundratstraße 3",
            "Bezirke 20. Donauschingenstraße 13",
            "Bezirke 5. Nikolsdorfergasse 32",
            "Bezirke 3. Baumgasse 20A"
        ],
        answer: "Bezirke 10. Kundratstraße 3",
    },

    {
        question: "Wo liegt das St. Anna Kinderspital?",
        options: [
            "Bezirke 9. Kinderspitalgasse 6",
            "Bezirke 9. Sensengasse 2a",
            "Bezirke 9. Lazarettgasse 16-18",
            "Bezirke 8. Skodagasse 32"
        ],
        answer: "Bezirke 9. Kinderspitalgasse 6",
    },

    {
        question: "Wo liegt das St. Josef-Krankenhaus?",
        options: [
            "Bezirke 13. Auhofstraße 189",
            "Bezirke 13. Speisinger Straße 109",
            "Bezirke 13. Wolkersbergenstraße 1",
            "Bezirke 16. Montleartstraße 37"
        ],
        answer: "Bezirke 13. Auhofstraße 189",
    },

    {
        question: "Wo liegt die Universitäts-Zahnklinik?",
        options: [
            "Bezirke 9. Sensengasse 2a",
            "Bezirke 9. Kinderspitalgasse 6",
            "Bezirke 9. Lazarettgasse 16-18",
            "Bezirke 8. Skodagasse 32"
        ],
        answer: "Bezirke 9. Sensengasse 2a",
    },

    {
        question: "Wo liegt die Klinik Floridsdorf?",
        options: [
            "Bezirke 21. Brünner Straße 68",
            "Bezirke 21. Brünner Gasse 22",
            "Bezirke 22. Langobardenstraße 122",
            "Bezirke 22. Langobardenstraße 180"
        ],
        answer: "Bezirke 21. Brünner Straße 68",
    },

    {
        question: "Wo liegt die Klinik Ottakring?",
        options: [
            "Bezirke 16. Montleartstraße 37",
            "Bezirke 17. Dornbacher Straße 20-30",
            "Bezirke 18. Hans-Sachs-Gasse 10-12",
            "Bezirke 14. Heinrich-Collin Straße 30"
        ],
        answer: "Bezirke 16. Montleartstraße 37",
    },

    {
        question: "Wo liegt die Wiener Privatklinik?",
        options: [
            "Bezirke 9. Pelikanngasse 15",
            "Bezirke 9. Lazarettgasse 16-18",
            "Bezirke 8. Skodagasse 32",
            "Bezirke 9. Sensengasse 2a"
        ],
        answer: "Bezirke 9. Pelikanngasse 15",
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
