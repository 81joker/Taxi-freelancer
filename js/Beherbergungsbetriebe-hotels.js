const questions = [
    {
        question: "Wo ist das Hotel Bristol?",
        options: [
            "Kärntner Ring 1",
            "Kärntner Ring 16",
            "Coburgbastei 4",
            "Parkring 12a"
        ],
        answer: "Kärntner Ring 1"
    },

    {
        question: "Wo ist das Hotel Imperial?",
        options: [
            "Kärntner Ring 16",
            "Kärntner Ring 1",
            "Coburgbastei 4",
            "Schottenring 24"
        ],
        answer: "Kärntner Ring 16"
    },

    {
        question: "Wo ist das Palais Coburg Residenz?",
        options: [
            "Coburgbastei 4",
            "Kärntner Ring 1",
            "Kärntner Ring 16",
            "Schottenring 24"
        ],
        answer: "Coburgbastei 4"
    },

    {
        question: "Wo ist das Palais Hansen Kempinski Vienna?",
        options: [
            "Schottenring 24",
            "Coburgbastei 4",
            "Kärntner Ring 1",
            "Philharmonikerstraße 4"
        ],
        answer: "Schottenring 24"
    },

    {
        question: "Wo ist das Hotel Sacher Wien?",
        options: [
            "Philharmonikerstraße 4",
            "Kärntner Ring 1",
            "Schottenring 24",
            "Parkring 12a"
        ],
        answer: "Philharmonikerstraße 4"
    },

    {
        question: "Wo ist das Vienna Marriott Hotel?",
        options: [
            "Parkring 12a",
            "Philharmonikerstraße 4",
            "Kärntner Ring 1",
            "Schottenring 24"
        ],
        answer: "Parkring 12a"
    },

    {
        question: "Wo ist das Hotel City Central?",
        options: [
            "Taborsstraße 8",
            "Rennweg 99",
            "Wiedner Hauptstraße 27-29",
            "Landstraßer Hauptstraße 120"
        ],
        answer: "Taborsstraße 8"
    },

    {
        question: "Wo ist das Hotel Doppio?",
        options: [
            "Rennweg 99",
            "Taborsstraße 8",
            "Landstraßer Hauptstraße 120",
            "Neubaugürtel 34-36"
        ],
        answer: "Rennweg 99"
    },

    {
        question: "Wo ist das Hotel Erzherzog Rainer?",
        options: [
            "Wiedner Hauptstraße 27-29",
            "Rennweg 99",
            "Taborsstraße 8",
            "Landstraßer Hauptstraße 120"
        ],
        answer: "Wiedner Hauptstraße 27-29"
    },

    {
        question: "Wo ist das Eurostars Embassy Hotel?",
        options: [
            "Landstraßer Hauptstraße 120",
            "Wiedner Hauptstraße 27-29",
            "Rennweg 99",
            "Neubaugürtel 26-28"
        ],
        answer: "Landstraßer Hauptstraße 120"
    },

    {
        question: "Wo ist das Flemings Hotel Wien Westbahnhof?",
        options: [
            "Neubaugürtel 26-28",
            "Neubaugürtel 34-36",
            "Mariahilfer Straße 122",
            "Kirchberggasse 6-8"
        ],
        answer: "Neubaugürtel 26-28"
    },

    {
        question: "Wo ist das Holiday Inn Vienna City?",
        options: [
            "Margaretenstraße 53",
            "Neubaugürtel 26-28",
            "Mariahilfer Straße 122",
            "Wiedner Hauptstraße 27"
        ],
        answer: "Margaretenstraße 53"
    },

    {
        question: "Wo ist das InterCityHotel Wien?",
        options: [
            "Mariahilfer Straße 122",
            "Margaretenstraße 53",
            "Neubaugürtel 26-28",
            "Kirchberggasse 6-8"
        ],
        answer: "Mariahilfer Straße 122"
    },

    {
        question: "Wo ist das Hotel Johann Strauss?",
        options: [
            "Favoritenstraße 12",
            "Wiedner Hauptstraße 27",
            "Margaretenstraße 53",
            "Landstraßer Hauptstraße 120"
        ],
        answer: "Favoritenstraße 12"
    },

    {
        question: "Wo ist das K+K Hotel Maria Theresia?",
        options: [
            "Kirchberggasse 6-8",
            "Mariahilfer Straße 122",
            "Neubaugürtel 26-28",
            "Margaretenstraße 53"
        ],
        answer: "Kirchberggasse 6-8"
    },

    {
        question: "Wo ist das Lindner Hotel Am Belvedere?",
        options: [
            "Rennweg 12",
            "Rennweg 99",
            "Favoritenstraße 12",
            "Wiedner Hauptstraße 27"
        ],
        answer: "Rennweg 12"
    },

    {
        question: "Wo ist das Mercure Grand Hotel Biedermeier Wien?",
        options: [
            "Landstraßer Hauptstraße 28",
            "Rennweg 12",
            "Josefsgasse 4-6",
            "Getreidemarkt 5"
        ],
        answer: "Landstraßer Hauptstraße 28"
    },

    {
        question: "Wo ist das Mercure Josefshof Wien am Rathaus?",
        options: [
            "Josefsgasse 4-6",
            "Landstraßer Hauptstraße 28",
            "Getreidemarkt 5",
            "Hollandstraße 3"
        ],
        answer: "Josefsgasse 4-6"
    },

    {
        question: "Wo ist das Mercure Secession Wien?",
        options: [
            "Getreidemarkt 5",
            "Josefsgasse 4-6",
            "Hollandstraße 3",
            "Felberstraße 4"
        ],
        answer: "Getreidemarkt 5"
    },

    {
        question: "Wo ist das Mercure Wien City?",
        options: [
            "Hollandstraße 3",
            "Getreidemarkt 5",
            "Felberstraße 4",
            "Rotensterngasse 12"
        ],
        answer: "Hollandstraße 3"
    },

    {
        question: "Wo ist das Mercure Wien Westbahnhof?",
        options: [
            "Felberstraße 4",
            "Hollandstraße 3",
            "Rotensterngasse 12",
            "Wagramer Straße 21"
        ],
        answer: "Felberstraße 4"
    },

    {
        question: "Wo ist das Hotel Nestroy Wien Imlauer?",
        options: [
            "Rotensterngasse 12",
            "Felberstraße 4",
            "Wagramer Straße 21",
            "Mariahilfer Straße 32-34"
        ],
        answer: "Rotensterngasse 12"
    },

    {
        question: "Wo ist das NH Danube City?",
        options: [
            "Wagramer Straße 21",
            "Rotensterngasse 12",
            "Mariahilfer Straße 32-34",
            "Aspernbrückengasse 1"
        ],
        answer: "Wagramer Straße 21"
    },

    {
        question: "Wo ist das NH Wien City?",
        options: [
            "Mariahilfer Straße 32-34",
            "Wagramer Straße 21",
            "Aspernbrückengasse 1",
            "Hasenauerstraße 12"
        ],
        answer: "Mariahilfer Straße 32-34"
    },

    {
        question: "Wo ist das Novotel Wien City?",
        options: [
            "Aspernbrückengasse 1",
            "Mariahilfer Straße 32-34",
            "Hasenauerstraße 12",
            "Wagramer Straße 21"
        ],
        answer: "Aspernbrückengasse 1"
    },

    {
        question: "Wo ist das Park Villa?",
        options: [
            "Hasenauerstraße 12",
            "Aspernbrückengasse 1",
            "Mariahilfer Straße 32-34",
            "Wagramer Straße 21"
        ],
        answer: "Hasenauerstraße 12"
    },

    {
        question: "Wo ist das Hilton Vienna?",
        options: [
            "Am Stadtpark 1",
            "Kärntner Ring 9",
            "Schottenring 11",
            "Handelskai 269"
        ],
        answer: "Am Stadtpark 1"
    },

    {
        question: "Wo ist das Hilton Vienna Plaza?",
        options: [
            "Schottenring 11",
            "Am Stadtpark 1",
            "Kärntner Ring 9",
            "Handelskai 269"
        ],
        answer: "Schottenring 11"
    },

    {
        question: "Wo ist das Hilton Vienna Danube Waterfront?",
        options: [
            "Handelskai 269",
            "Schottenring 11",
            "Kärntner Ring 9",
            "Am Hof 2"
        ],
        answer: "Handelskai 269"
    },

    {
        question: "Wo ist das Park Hyatt Vienna?",
        options: [
            "Am Hof 2",
            "Handelskai 269",
            "Kärntner Ring 9",
            "Schubertring 5-7"
        ],
        answer: "Am Hof 2"
    },

    {
        question: "Wo ist das The Ritz Carlton?",
        options: [
            "Schubertring 5-7",
            "Am Hof 2",
            "Kärntner Ring 9",
            "Herrengasse 10"
        ],
        answer: "Schubertring 5-7"
    },

    {
        question: "Wo ist das Steigenberger Hotel Herrenhof?",
        options: [
            "Herrengasse 10",
            "Schubertring 5-7",
            "Kärntner Ring 8",
            "Lichtensteg 3"
        ],
        answer: "Herrengasse 10"
    },

    {
        question: "Wo ist das Hotel The Ring?",
        options: [
            "Kärntner Ring 8",
            "Herrengasse 10",
            "Lichtensteg 3",
            "Robert Stolz Platz 1"
        ],
        answer: "Kärntner Ring 8"
    },

    {
        question: "Wo ist das Hotel Topazz?",
        options: [
            "Lichtensteg 3",
            "Kärntner Ring 8",
            "Robert Stolz Platz 1",
            "Donau City Straße 7"
        ],
        answer: "Lichtensteg 3"
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
