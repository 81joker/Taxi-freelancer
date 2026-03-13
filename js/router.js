const params = new URLSearchParams(window.location.search);
const quiz = params.get("quiz") || "kultur";

const routes = {
    parlament: "js/parlament.js",

    kabaretts: "js/kabaretts-volksbühnen.js",

    kultur: "js/kulturreinrichtungen.js",

    kranken: "js/krankenanstalten.js",

    friedhofe: "js/friedhöfe.js",

    bezirke: "js/Bezirksnamen&Heurigenorte.js",

    kaffee: "js/kaffeehäuser.js",

    hotels: "js/Beherbergungsbetriebe-hotels.js",

    magistrat: "js/Magistratische&Bezirksämter.js",

    medien: "js/massenmedien&kammern.js",

    post: "js/Postgebäude&Verkehr.js",

    polizei: "js/polizeiinspektion.js",

    universitäten: "js/universitäten.js",

    museen: "js/museen.js",

    sehenswürdigkeiten: "js/Sehenswürdigkeiten.js",

    sehenswürdigkeiten02: "js/Sehenswürdigkeiten02.js",

    donaukanalQuestions: "js/donaukanalQuestions.js",

    nummerierung: "js/nummerierungs-system.js",

    strassengeographie: "js/strassengeographie.js",
};

const script = document.createElement("script");

script.src = routes[quiz];

document.body.appendChild(script);