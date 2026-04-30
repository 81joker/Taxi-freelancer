const questions = [
  {
    question: "Wo befindet sich die Hofburgkapelle?",
    options: [
      "1., Hofburg (Schweizerhof)",
      "1., Stephansplatz 3",
      "9., Berggasse 19",
      "22., Wagramer Straße 5",
    ],
    answer: "1., Hofburg (Schweizerhof)",
  },

  {
    question: "Wo befindet sich die Schatzkammer?",
    options: [
      "1., Hofburg (Schweizerhof)",
      "1., Josefsplatz",
      "3., Prinz-Eugen-Straße 27",
      "6., Fritz-Grünbaum-Platz 1",
    ],
    answer: "1., Hofburg (Schweizerhof)",
  },

  {
    question: "Wo befindet sich das Kongresszentrum?",
    options: [
      "1., Hofburg (Heldenplatz)",
      "1., Stephansplatz 3",
      "22., Donauturmstraße 8",
      "9., Berggasse 19",
    ],
    answer: "1., Hofburg (Heldenplatz)",
  },

  {
    question: "Wo befindet sich die Nationalbibliothek?",
    options: [
      "1., Josefsplatz",
      "1., Stephansplatz 3",
      "4., Kreuzherrengasse 1",
      "22., Wagramer Straße 5",
    ],
    answer: "1., Josefsplatz",
  },

  {
    question: "Wo befindet sich die Spanische Hofreitschule?",
    options: [
      "1., Michaelerplatz 1",
      "1., Petersplatz 1",
      "3., Löwengasse 36",
      "13., Maxingstraße 13b",
    ],
    answer: "1., Michaelerplatz 1",
  },

  {
    question: "Wo befindet sich das Prinz Eugen Denkmal?",
    options: [
      "1., Heldenplatz",
      "1., Hoher Markt 10-11",
      "3., Prinz-Eugen-Straße 27",
      "9., Berggasse 19",
    ],
    answer: "1., Heldenplatz",
  },

  {
    question: "Wo befindet sich das Erzherzog Karl Denkmal?",
    options: [
      "1., Heldenplatz",
      "1., Josefsplatz",
      "4., Kreuzherrengasse 1",
      "22., Bruno-Kreisky-Platz 1",
    ],
    answer: "1., Heldenplatz",
  },

  {
    question: "Wo befindet sich die Kapuzinergruft?",
    options: [
      "1., Tegetthoffstraße 2/Neuer Markt",
      "1., Stephansplatz 3",
      "9., Berggasse 19",
      "22., Wagramer Straße 5",
    ],
    answer: "1., Tegetthoffstraße 2/Neuer Markt",
  },

  {
    question: "Wo befindet sich die Anker-Uhr?",
    options: [
      "1., Hoher Markt 10-11",
      "1., Petersplatz 1",
      "3., Löwengasse 36",
      "22., Donauturmstraße 8",
    ],
    answer: "1., Hoher Markt 10-11",
  },

  {
    question: "Wo befindet sich der Stephansdom?",
    options: [
      "1., Stephansplatz 3",
      "1., Josefsplatz",
      "4., Kreuzherrengasse 1",
      "22., Wagramer Straße 5",
    ],
    answer: "1., Stephansplatz 3",
  },

  {
    question: "Wo befindet sich das Riesenrad?",
    options: [
      "2., Riesenradplatz",
      "3., Prinz-Eugen-Straße 27",
      "9., Berggasse 19",
      "22., Bruno-Kreisky-Platz 1",
    ],
    answer: "2., Riesenradplatz",
  },

  {
    question: "Wo befindet sich Schloss Belvedere?",
    options: [
      "3., Prinz-Eugen-Straße 27",
      "1., Stephansplatz 3",
      "6., Fritz-Grünbaum-Platz 1",
      "22., Wagramer Straße 5",
    ],
    answer: "3., Prinz-Eugen-Straße 27",
  },

  {
    question: "Wo befindet sich das Hundertwasser-Haus?",
    options: [
      "3., Löwengasse/Kegelgasse 36",
      "1., Josefsplatz",
      "9., Berggasse 19",
      "22., Donauturmstraße 8",
    ],
    answer: "3., Löwengasse/Kegelgasse 36",
  },

  {
    question: "Wo befindet sich das Haus des Meeres?",
    options: [
      "6., Fritz-Grünbaum-Platz 1",
      "1., Stephansplatz 3",
      "3., Prinz-Eugen-Straße 27",
      "13., Maxingstraße 13b",
    ],
    answer: "6., Fritz-Grünbaum-Platz 1",
  },

  {
    question: "Wo befindet sich das Sigmund Freud Museum?",
    options: [
      "9., Berggasse 19",
      "1., Petersplatz 1",
      "4., Kreuzherrengasse 1",
      "22., Wagramer Straße 5",
    ],
    answer: "9., Berggasse 19",
  },

  {
    question: "Wo befindet sich Schloss Schönbrunn (Haupteingang)?",
    options: [
      "13., Schönbrunner Schloßstraße 47",
      "13., Maxingstraße 13b",
      "12., Hohenbergstraße",
      "3., Prinz-Eugen-Straße 27",
    ],
    answer: "13., Schönbrunner Schloßstraße 47",
  },

  {
    question: "Wo befindet sich der Tiergarten Schönbrunn?",
    options: [
      "13., Maxingstraße 13b",
      "13., Schönbrunner Schloßstraße 47",
      "12., Hohenbergstraße",
      "22., Wagramer Straße 5",
    ],
    answer: "13., Maxingstraße 13b",
  },

  {
    question: "Wo befindet sich die Gloriette (Schönbrunn)?",
    options: [
      "12., Hohenbergstraße",
      "13., Maxingstraße 13b",
      "3., Löwengasse 36",
      "1., Petersplatz 1",
    ],
    answer: "12., Hohenbergstraße",
  },

  {
    question: "Wo befindet sich das Austria Center Vienna?",
    options: [
      "22., Bruno-Kreisky-Platz 1",
      "22., Wagramer Straße 5",
      "22., Donauturmstraße 8",
      "1., Josefsplatz",
    ],
    answer: "22., Bruno-Kreisky-Platz 1",
  },

  {
    question: "Wo befindet sich der Donauturm?",
    options: [
      "22., Donauturmstraße 8",
      "22., Bruno-Kreisky-Platz 1",
      "2., Riesenradplatz",
      "3., Prinz-Eugen-Straße 27",
    ],
    answer: "22., Donauturmstraße 8",
  },

  {
    question: "Wo befindet sich die UNO-City?",
    options: [
      "22., Wagramer Straße 5",
      "22., Bruno-Kreisky-Platz 1",
      "9., Berggasse 19",
      "1., Stephansplatz 3",
    ],
    answer: "22., Wagramer Straße 5",
  },

  {
    question: "Wo befindet sich die Roßauer Kaserne?",
    options: [
      "9., Türkenstraße 22",
      "9., Berggasse 19",
      "4., Kreuzherrengasse 1",
      "1., Petersplatz 1",
    ],
    answer: "9., Türkenstraße 22",
  },

  {
    question: "Wo befindet sich die Karlskirche?",
    options: [
      "4., Kreuzherrengasse 1",
      "1., Stephansplatz 3",
      "3., Prinz-Eugen-Straße 27",
      "9., Berggasse 19",
    ],
    answer: "4., Kreuzherrengasse 1",
  },

  {
    question: "Wo befindet sich die Votivkirche?",
    options: [
      "9., Rooseveltplatz",
      "9., Berggasse 19",
      "1., Josefsplatz",
      "22., Wagramer Straße 5",
    ],
    answer: "9., Rooseveltplatz",
  },

  {
    question: "Wo befindet sich die Peterskirche?",
    options: [
      "1., Petersplatz 1",
      "1., Stephansplatz 3",
      "4., Kreuzherrengasse 1",
      "9., Berggasse 19",
    ],
    answer: "1., Petersplatz 1",
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
  shuffledOptions.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;

    btn.onclick = () => {
      answered++;

      // تعطيل كل الأزرار
      const allButtons = document.querySelectorAll("#answers button");
      allButtons.forEach((b) => (b.disabled = true));

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
        allButtons.forEach((b) => {
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
