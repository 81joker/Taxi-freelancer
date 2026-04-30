const questions = [

    // ==================== 1. REGIERUNGSGEBÄUDE ====================

    { question: "Wo ist das Parlament (Nationalrat und Bundesrat)?", options: ["Dr.-Karl-Renner-Ring 3", "Ballhausplatz 2", "Herrengasse 7", "Minoritenplatz 8"], answer: "Dr.-Karl-Renner-Ring 3" },
    { question: "Wo ist der Bundespräsident (Präsidentschaftskanzlei)?", options: ["Ballhausplatz (Hofburg)", "Ballhausplatz 2", "Herrengasse 7", "Minoritenplatz 8"], answer: "Ballhausplatz (Hofburg)" },
    { question: "Wo ist das Bundeskanzleramt?", options: ["Ballhausplatz 2", "Ballhausplatz (Hofburg)", "Herrengasse 7", "Minoritenplatz 5"], answer: "Ballhausplatz 2" },
    { question: "Wo ist das Bundesministerium für Inneres?", options: ["Herrengasse 7", "Minoritenplatz 8", "Stubenring 1", "Johannesgasse 5"], answer: "Herrengasse 7" },
    { question: "Wo ist das Bundesministerium für Europäische und Internationale Angelegenheiten?", options: ["Minoritenplatz 8", "Herrengasse 7", "Minoritenplatz 5", "Stubenring 1"], answer: "Minoritenplatz 8" },
    { question: "Wo ist das Bundesministerium für Bildung, Wissenschaft und Forschung?", options: ["Minoritenplatz 5", "Minoritenplatz 8", "Herrengasse 7", "Stubenring 1"], answer: "Minoritenplatz 5" },
    { question: "Wo ist das Bundesministerium für Digitalisierung und Wirtschaftsstandort?", options: ["Stubenring 1", "Johannesgasse 5", "Herrengasse 7", "Taborstraße 1-3"], answer: "Stubenring 1" },
    { question: "Wo ist das Bundesministerium für Arbeit?", options: ["Taborstraße 1-3", "Stubenring 1", "Johannesgasse 5", "Herrengasse 7"], answer: "Taborstraße 1-3" },
    { question: "Wo ist das Bundesministerium für Finanzen?", options: ["Johannesgasse 5", "Stubenring 1", "Herrengasse 7", "Radetzkystraße 2"], answer: "Johannesgasse 5" },
    { question: "Wo ist das Bundesministerium für Klimaschutz, Umwelt, Energie, Mobilität, Innovation und Technologie?", options: ["Radetzkystraße 2", "Johannesgasse 5", "Stubenring 1", "Museumstraße 7"], answer: "Radetzkystraße 2" },
    { question: "Wo ist das Bundesministerium für Kunst, Kultur, öffentlichen Dienst und Sport?", options: ["Radetzkystraße 2", "Stubenring 1", "Johannesgasse 5", "Museumstraße 7"], answer: "Radetzkystraße 2" },
    { question: "Wo ist das Bundesministerium für Landwirtschaft, Regionen und Tourismus?", options: ["Stubenring 1", "Johannesgasse 5", "Radetzkystraße 2", "Roßauer Lände 1"], answer: "Stubenring 1" },
    { question: "Wo ist das Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz?", options: ["Stubenring 1", "Johannesgasse 5", "Radetzkystraße 2", "Roßauer Lände 1"], answer: "Stubenring 1" },
    { question: "Wo ist das Bundesministerium für Justiz?", options: ["Museumstraße 7", "Herrengasse 7", "Johannesgasse 5", "Stubenring 1"], answer: "Museumstraße 7" },
    { question: "Wo ist das Bundesministerium für Landesverteidigung?", options: ["Roßauer Lände 1", "Stubenring 1", "Herrengasse 7", "Museumstraße 7"], answer: "Roßauer Lände 1" },
    { question: "Wo ist der Landtag und die Landesregierung Wien (Rathaus)?", options: ["Rathausplatz", "Ballhausplatz", "Herrengasse", "Schottenring"], answer: "Rathausplatz" },

    // ==================== 2. GERICHTSGEBÄUDE ====================

    { question: "Wo ist der Verfassungsgerichtshof?", options: ["Freyung 8", "Judenplatz 11", "Schmerlingplatz 10-11", "Landesgerichtsstraße 11"], answer: "Freyung 8" },
    { question: "Wo ist der Verwaltungsgerichtshof?", options: ["Judenplatz 11", "Freyung 8", "Schmerlingplatz 10-11", "Marxergasse 1a"], answer: "Judenplatz 11" },
    { question: "Wo ist der Justizpalast (Oberster Gerichtshof, Oberlandesgericht, Oberstaatsanwaltschaft)?", options: ["Schmerlingplatz 10-11", "Freyung 8", "Judenplatz 11", "Landesgerichtsstraße 11"], answer: "Schmerlingplatz 10-11" },
    { question: "Wo ist das Landesgericht für Strafsachen?", options: ["Landesgerichtsstraße 11", "Schmerlingplatz 10-11", "Wickenburggasse 18-20", "Althanstraße 39-45"], answer: "Landesgerichtsstraße 11" },
    { question: "Wo ist die Justizanstalt Wien Josefstadt?", options: ["Wickenburggasse 18-20", "Landesgerichtsstraße 11", "Hernalser Gürtel 6-12", "Marxergasse 1a"], answer: "Wickenburggasse 18-20" },
    { question: "Wo ist das Justiz-Zentrum Wien Mitte (Handelsgericht Wien)?", options: ["Marxergasse 1a", "Wickenburggasse 18-20", "Althanstraße 39-45", "Dampfschiffstraße 2"], answer: "Marxergasse 1a" },
    { question: "Wo ist das Arbeits- und Sozialgericht Wien?", options: ["Althanstraße 39-45", "Marxergasse 1a", "Landesgerichtsstraße 11", "Hernalser Gürtel 6-12"], answer: "Althanstraße 39-45" },
    { question: "Wo ist das Landesgerichtliche Gefangenenhaus II?", options: ["Hernalser Gürtel 6-12", "Wickenburggasse 18-20", "Althanstraße 39-45", "Landesgerichtsstraße 11"], answer: "Hernalser Gürtel 6-12" },
    { question: "Wo ist der Rechnungshof?", options: ["Dampfschiffstraße 2", "Marxergasse 1a", "Althanstraße 39-45", "Schottenring 7-9"], answer: "Dampfschiffstraße 2" },

    // ==================== 3. BUNDESPOLIZEIDIREKTION ====================

    { question: "Wo ist die Bundespolizeidirektion Wien – Sicherheitsdirektion?", options: ["Schottenring 7-9", "Hernalser Gürtel 6-12", "Dietrichgasse 27", "Deutschmeisterplatz 3"], answer: "Schottenring 7-9" },
    { question: "Wo ist das Fremdenpolizeiliche Büro?", options: ["Hernalser Gürtel 6-12", "Schottenring 7-9", "Dietrichgasse 27", "Wickenburggasse 18-20"], answer: "Hernalser Gürtel 6-12" },
    { question: "Wo ist das Verkehrsamt (Führerschein / Taxireferat)?", options: ["Dietrichgasse 27", "Schottenring 7-9", "Hernalser Gürtel 6-12", "Deutschmeisterplatz 3"], answer: "Dietrichgasse 27" },

    // ==================== 4. POLIZEIINSPEKTIONEN ====================

    { question: "Wo ist das Stadtpolizeikommando Innere Stadt?", options: ["Deutschmeisterplatz 3", "Juchgasse 19", "Viktor-Christ-Gasse 19", "Fuhrmannsgasse 5"], answer: "Deutschmeisterplatz 3" },
    { question: "Wo ist das Stadtpolizeikommando Landstraße?", options: ["Juchgasse 19", "Deutschmeisterplatz 3", "Viktor-Christ-Gasse 19", "Van-der-Nüll-Gasse 11"], answer: "Juchgasse 19" },
    { question: "Wo ist das Stadtpolizeikommando Margareten (Bezirke 4, 5, 6)?", options: ["Viktor-Christ-Gasse 19", "Juchgasse 19", "Fuhrmannsgasse 5", "Hohenbergstraße 1"], answer: "Viktor-Christ-Gasse 19" },
    { question: "Wo ist das Stadtpolizeikommando Josefstadt (Bezirke 7, 8, 9)?", options: ["Fuhrmannsgasse 5", "Viktor-Christ-Gasse 19", "Van-der-Nüll-Gasse 11", "Enkplatz 3"], answer: "Fuhrmannsgasse 5" },
    { question: "Wo ist das Stadtpolizeikommando Favoriten?", options: ["Van-der-Nüll-Gasse 11", "Fuhrmannsgasse 5", "Enkplatz 3", "Hohenbergstraße 1"], answer: "Van-der-Nüll-Gasse 11" },
    { question: "Wo ist das Stadtpolizeikommando Simmering?", options: ["Enkplatz 3", "Van-der-Nüll-Gasse 11", "Hohenbergstraße 1", "Tannengasse 6"], answer: "Enkplatz 3" },
    { question: "Wo ist das Stadtpolizeikommando Meidling (Bezirke 12, 13)?", options: ["Hohenbergstraße 1", "Enkplatz 3", "Tannengasse 6", "Wattgasse 15"], answer: "Hohenbergstraße 1" },
    { question: "Wo ist das Stadtpolizeikommando Fünfhaus (Bezirke 14, 15)?", options: ["Tannengasse 6", "Hohenbergstraße 1", "Wattgasse 15", "Hohe Warte 32"], answer: "Tannengasse 6" },
    { question: "Wo ist das Stadtpolizeikommando Ottakring (Bezirke 16, 17)?", options: ["Wattgasse 15", "Tannengasse 6", "Hohe Warte 32", "Pappenheimgasse 33"], answer: "Wattgasse 15" },
    { question: "Wo ist das Stadtpolizeikommando Döbling (Bezirke 18, 19)?", options: ["Hohe Warte 32", "Wattgasse 15", "Pappenheimgasse 33", "Hermann-Bahr-Straße 3"], answer: "Hohe Warte 32" },
    { question: "Wo ist das Stadtpolizeikommando Brigittenau (Bezirke 2, 20)?", options: ["Pappenheimgasse 33", "Hohe Warte 32", "Hermann-Bahr-Straße 3", "Wagramer Straße 89"], answer: "Pappenheimgasse 33" },
    { question: "Wo ist das Stadtpolizeikommando Floridsdorf?", options: ["Hermann-Bahr-Straße 3", "Pappenheimgasse 33", "Wagramer Straße 89", "Lehmanngasse 3a"], answer: "Hermann-Bahr-Straße 3" },
    { question: "Wo ist das Stadtpolizeikommando Donaustadt?", options: ["Wagramer Straße 89", "Hermann-Bahr-Straße 3", "Lehmanngasse 3a", "Pappenheimgasse 33"], answer: "Wagramer Straße 89" },
    { question: "Wo ist das Stadtpolizeikommando Liesing?", options: ["Lehmanngasse 3a", "Wagramer Straße 89", "Hermann-Bahr-Straße 3", "Hohe Warte 32"], answer: "Lehmanngasse 3a" },

    // ==================== 5. POST & VERKEHR ====================

    { question: "Wo ist das Hauptpostamt?", options: ["Fleischmarkt 19", "Althanstraße 10", "Europaplatz 3", "Halban-Kurz-Straße 11"], answer: "Fleischmarkt 19" },
    { question: "Wo ist das Postamt Franz-Josefs-Bahnhof (1090 Wien)?", options: ["Althanstraße 10", "Fleischmarkt 19", "Europaplatz 3", "Halban-Kurz-Straße 11"], answer: "Althanstraße 10" },
    { question: "Wo ist das Postamt Westbahnhof (1150 Wien)?", options: ["Europaplatz 3", "Althanstraße 10", "Fleischmarkt 19", "Halban-Kurz-Straße 11"], answer: "Europaplatz 3" },
    { question: "Wo ist das Post-Verteilerzentrum?", options: ["Halban-Kurz-Straße 11", "Europaplatz 3", "Althanstraße 10", "Fleischmarkt 19"], answer: "Halban-Kurz-Straße 11" },
    { question: "Wo ist der Hauptbahnhof Wien?", options: ["Am Hauptbahnhof 1", "Nordbergstraße", "Europaplatz / Felberstraße", "Praterstern"], answer: "Am Hauptbahnhof 1" },
    { question: "Wo ist der Franz-Josefs-Bahnhof?", options: ["Nordbergstraße", "Am Hauptbahnhof 1", "Europaplatz / Felberstraße", "Praterstern"], answer: "Nordbergstraße" },
    { question: "Wo ist der Westbahnhof?", options: ["Europaplatz / Felberstraße", "Nordbergstraße", "Am Hauptbahnhof 1", "Praterstern"], answer: "Europaplatz / Felberstraße" },
    { question: "Wo ist der Bahnhof Wien-Mitte?", options: ["Landstraßer Hauptstraße", "Gigergasse / Marxergasse", "Praterstern", "Keißlergasse"], answer: "Landstraßer Hauptstraße" },
    { question: "Wo ist der City-Air-Terminal / CAT?", options: ["Gigergasse / Marxergasse", "Landstraßer Hauptstraße", "Praterstern", "Eichenstraße"], answer: "Gigergasse / Marxergasse" },
    { question: "Wo ist der Bahnhof Wien-Nord?", options: ["Praterstern", "Nordbergstraße", "Keißlergasse", "Eichenstraße"], answer: "Praterstern" },
    { question: "Wo ist der Bahnhof Hütteldorf?", options: ["Keißlergasse", "Praterstern", "Eichenstraße", "Nordbergstraße"], answer: "Keißlergasse" },
    { question: "Wo ist der Bahnhof Meidling?", options: ["Eichenstraße", "Keißlergasse", "Praterstern", "Nordbergstraße"], answer: "Eichenstraße" },
    { question: "Wo ist der Autobusbahnhof für internationale Busse?", options: ["Erdbergstraße / U3", "Südtirolerplatz / U1", "Floridsdorf / U6", "Simmeringer Platz / U3"], answer: "Erdbergstraße / U3" },
    { question: "Wo ist der Autobusbahnhof Südtiroler Platz?", options: ["Südtirolerplatz / Wiedner Gürtel / U1", "Erdbergstraße / U3", "Floridsdorf / U6", "Dr.-Adolf-Schärf-Platz / U1"], answer: "Südtirolerplatz / Wiedner Gürtel / U1" },
    { question: "Wo ist der Autobusbahnhof Floridsdorf?", options: ["Floridsdorf / Schloßhofer Str. / U6", "Erdbergstraße / U3", "Dr.-Adolf-Schärf-Platz / U1", "Simmeringer Platz / U3"], answer: "Floridsdorf / Schloßhofer Str. / U6" },
    { question: "Wo ist der Autobusbahnhof Kagran?", options: ["Dr.-Adolf-Schärf-Platz / U1", "Floridsdorf / U6", "Simmeringer Platz / U3", "Olympiaplatz / Engerthstraße 242"], answer: "Dr.-Adolf-Schärf-Platz / U1" },
    { question: "Wo ist der Autobusbahnhof Simmering?", options: ["Simmeringer Platz / U3", "Dr.-Adolf-Schärf-Platz / U1", "Erdbergstraße / U3", "Floridsdorf / U6"], answer: "Simmeringer Platz / U3" },
    { question: "Wo ist das Vienna Busterminal Stadion Center?", options: ["Olympiaplatz / Engerthstraße 242", "Simmeringer Platz / U3", "Erdbergstraße / U3", "Dr.-Adolf-Schärf-Platz / U1"], answer: "Olympiaplatz / Engerthstraße 242" },
    { question: "Wo ist das DDSG-Schifffahrtszentrum (Wien-Reichsbrücke)?", options: ["Handelskai 265", "Franz-Josefs-Kai / Schwedenbrücke", "Seitenhafenstraße 15", "Freudenauer Hafenstraße 8-10"], answer: "Handelskai 265" },
    { question: "Wo ist die Dampfschiffstation Schwedenbrücke (Wien-Rundfahrten)?", options: ["Franz-Josefs-Kai / Schwedenbrücke", "Handelskai 265", "Seitenhafenstraße 15", "Kuchelauer Hafenstraße"], answer: "Franz-Josefs-Kai / Schwedenbrücke" },
    { question: "Wo ist der Wiener Hafen (Zollfreizone)?", options: ["Seitenhafenstraße 15", "Handelskai 265", "Freudenauer Hafenstraße 8-10", "Alberner Hafen Zufahrtsstraße"], answer: "Seitenhafenstraße 15" },
    { question: "Wo ist der Freudenauer Hafen?", options: ["Freudenauer Hafenstraße 8-10", "Seitenhafenstraße 15", "Alberner Hafen Zufahrtsstraße", "Kuchelauer Hafenstraße"], answer: "Freudenauer Hafenstraße 8-10" },
    { question: "Wo ist der Alberner Hafen?", options: ["Alberner Hafen Zufahrtsstraße", "Freudenauer Hafenstraße 8-10", "Kuchelauer Hafenstraße", "Seitenhafenstraße 15"], answer: "Alberner Hafen Zufahrtsstraße" },
    { question: "Wo ist der Kuchelauer Hafen?", options: ["Kuchelauer Hafenstraße", "Alberner Hafen Zufahrtsstraße", "Freudenauer Hafenstraße 8-10", "Handelskai 265"], answer: "Kuchelauer Hafenstraße" },
    { question: "Wo ist die KFZ-Verwahrstelle der MA 48?", options: ["Jedletzbergerstraße 1", "Trauzlgasse 1", "Seitenhafenstraße 15", "Kuchelauer Hafenstraße"], answer: "Jedletzbergerstraße 1" },
    { question: "Wo ist die Bundesanstalt Verkehr (Bundesprüfanstalt)?", options: ["Trauzlgasse 1", "Jedletzbergerstraße 1", "Kuchelauer Hafenstraße", "Seitenhafenstraße 15"], answer: "Trauzlgasse 1" },

    // ==================== 6. MASSENMEDIEN ====================

    { question: "Wo ist der ORF / Rundfunk?", options: ["Argentinierstraße 30a", "Heiligenstädter Lände 27c", "Würzburggasse 30", "Muthgasse 2"], answer: "Argentinierstraße 30a" },
    { question: "Wo ist der ORF / Rundfunk / Ö3?", options: ["Heiligenstädter Lände 27c", "Argentinierstraße 30a", "Würzburggasse 30", "Leopold-Ungar-Platz 1"], answer: "Heiligenstädter Lände 27c" },
    { question: "Wo ist der ORF / Fernsehen?", options: ["Würzburggasse 30", "Heiligenstädter Lände 27c", "Argentinierstraße 30a", "Muthgasse 2"], answer: "Würzburggasse 30" },
    { question: "Wo ist die Redaktion der Kronen-Zeitung?", options: ["Muthgasse 2", "Leopold-Ungar-Platz 1", "Würzburggasse 30", "Richard-Strauss-Straße 16"], answer: "Muthgasse 2" },
    { question: "Wo ist die Kurier-Redaktion?", options: ["Leopold-Ungar-Platz 1", "Muthgasse 2", "Tenschertstraße 7", "Laimgrubengasse 10"], answer: "Leopold-Ungar-Platz 1" },
    { question: "Wo ist das Druckzentrum Media-Print?", options: ["Richard-Strauss-Straße 16", "Tenschertstraße 7", "Leopold-Ungar-Platz 1", "Muthgasse 2"], answer: "Richard-Strauss-Straße 16" },
    { question: "Wo ist die Österreichische Staatsdruckerei?", options: ["Tenschertstraße 7", "Richard-Strauss-Straße 16", "Laimgrubengasse 10", "Leopold-Ungar-Platz 1"], answer: "Tenschertstraße 7" },
    { question: "Wo ist die APA – Austria Presseagentur (IPZ)?", options: ["Laimgrubengasse 10", "Tenschertstraße 7", "Richard-Strauss-Straße 16", "Muthgasse 2"], answer: "Laimgrubengasse 10" },

    // ==================== 7. KAMMERN ====================

    { question: "Wo ist die Arbeiterkammer Wien?", options: ["Prinz-Eugen-Straße 20-22", "Wiedner Hauptstraße 63", "Straße der Wiener Wirtschaft 1", "Laimgrubengasse 10"], answer: "Prinz-Eugen-Straße 20-22" },
    { question: "Wo ist die Wirtschaftskammer Österreich?", options: ["Wiedner Hauptstraße 63", "Prinz-Eugen-Straße 20-22", "Straße der Wiener Wirtschaft 1", "Tenschertstraße 7"], answer: "Wiedner Hauptstraße 63" },
    { question: "Wo ist die Wirtschaftskammer Wien?", options: ["Straße der Wiener Wirtschaft 1", "Wiedner Hauptstraße 63", "Prinz-Eugen-Straße 20-22", "Laimgrubengasse 10"], answer: "Straße der Wiener Wirtschaft 1" },
    { question: "Wo ist die Fachgruppe Wien für Personenbeförderungsgewerbe?", options: ["Straße der Wiener Wirtschaft 1", "Wiedner Hauptstraße 63", "Prinz-Eugen-Straße 20-22", "Richard-Strauss-Straße 16"], answer: "Straße der Wiener Wirtschaft 1" },

    // ==================== 8. MAGISTRATISCHE BEZIRKSÄMTER ====================

    { question: "Wo ist das Magistratische Bezirksamt für den 1. und 8. Bezirk?", options: ["Wipplingerstraße 8", "Karmelitergasse 9", "Karl-Borromäus-Platz 3", "Rechte Wienzeile 105"], answer: "Wipplingerstraße 8" },
    { question: "Wo ist das Magistratische Bezirksamt für den 2. Bezirk?", options: ["Karmelitergasse 9", "Wipplingerstraße 8", "Karl-Borromäus-Platz 3", "Hermanngasse 24-26"], answer: "Karmelitergasse 9" },
    { question: "Wo ist das Magistratische Bezirksamt für den 3. Bezirk?", options: ["Karl-Borromäus-Platz 3", "Karmelitergasse 9", "Rechte Wienzeile 105", "Wilhelm-Exner-Gasse 5"], answer: "Karl-Borromäus-Platz 3" },
    { question: "Wo ist das Magistratische Bezirksamt für den 4. und 5. Bezirk?", options: ["Rechte Wienzeile 105", "Hermanngasse 24-26", "Laxenburger Straße 43-45", "Enkplatz 2"], answer: "Rechte Wienzeile 105" },
    { question: "Wo ist das Magistratische Bezirksamt für den 6. und 7. Bezirk?", options: ["Hermanngasse 24-26", "Rechte Wienzeile 105", "Wilhelm-Exner-Gasse 5", "Gasgasse 8-10"], answer: "Hermanngasse 24-26" },
    { question: "Wo ist das Magistratische Bezirksamt für den 9. Bezirk?", options: ["Wilhelm-Exner-Gasse 5", "Hermanngasse 24-26", "Laxenburger Straße 43-45", "Enkplatz 2"], answer: "Wilhelm-Exner-Gasse 5" },
    { question: "Wo ist das Magistratische Bezirksamt für den 10. Bezirk?", options: ["Laxenburger Straße 43-45", "Wilhelm-Exner-Gasse 5", "Enkplatz 2", "Schönbrunner Straße 259"], answer: "Laxenburger Straße 43-45" },
    { question: "Wo ist das Magistratische Bezirksamt für den 11. Bezirk?", options: ["Enkplatz 2", "Laxenburger Straße 43-45", "Schönbrunner Straße 259", "Hietzinger Kai 1-3"], answer: "Enkplatz 2" },
    { question: "Wo ist das Magistratische Bezirksamt für den 12. Bezirk?", options: ["Schönbrunner Straße 259", "Enkplatz 2", "Hietzinger Kai 1-3", "Gasgasse 8-10"], answer: "Schönbrunner Straße 259" },
    { question: "Wo ist das Magistratische Bezirksamt für den 13. und 14. Bezirk?", options: ["Hietzinger Kai 1-3", "Schönbrunner Straße 259", "Gasgasse 8-10", "Richard-Wagner-Platz 19"], answer: "Hietzinger Kai 1-3" },
    { question: "Wo ist das Magistratische Bezirksamt für den 15. Bezirk?", options: ["Gasgasse 8-10", "Hietzinger Kai 1-3", "Richard-Wagner-Platz 19", "Elterleinplatz 14"], answer: "Gasgasse 8-10" },
    { question: "Wo ist das Magistratische Bezirksamt für den 16. Bezirk?", options: ["Richard-Wagner-Platz 19", "Gasgasse 8-10", "Elterleinplatz 14", "Martinstraße 100"], answer: "Richard-Wagner-Platz 19" },
    { question: "Wo ist das Magistratische Bezirksamt für den 17. Bezirk?", options: ["Elterleinplatz 14", "Richard-Wagner-Platz 19", "Martinstraße 100", "Pfarrwiesengasse 23c"], answer: "Elterleinplatz 14" },
    { question: "Wo ist das Magistratische Bezirksamt für den 18. Bezirk?", options: ["Martinstraße 100", "Elterleinplatz 14", "Pfarrwiesengasse 23c", "Brigittaplatz 10"], answer: "Martinstraße 100" },
    { question: "Wo ist das Magistratische Bezirksamt für den 19. Bezirk?", options: ["Pfarrwiesengasse 23c", "Martinstraße 100", "Brigittaplatz 10", "Am Spitz 1"], answer: "Pfarrwiesengasse 23c" },
    { question: "Wo ist das Magistratische Bezirksamt für den 20. Bezirk?", options: ["Brigittaplatz 10", "Pfarrwiesengasse 23c", "Am Spitz 1", "Schrödingerplatz 1"], answer: "Brigittaplatz 10" },
    { question: "Wo ist das Magistratische Bezirksamt für den 21. Bezirk?", options: ["Am Spitz 1", "Brigittaplatz 10", "Schrödingerplatz 1", "Perchtoldsdorfer Straße 2"], answer: "Am Spitz 1" },
    { question: "Wo ist das Magistratische Bezirksamt für den 22. Bezirk?", options: ["Schrödingerplatz 1", "Am Spitz 1", "Perchtoldsdorfer Straße 2", "Brigittaplatz 10"], answer: "Schrödingerplatz 1" },
    { question: "Wo ist das Magistratische Bezirksamt für den 23. Bezirk?", options: ["Perchtoldsdorfer Straße 2", "Schrödingerplatz 1", "Am Spitz 1", "Martinstraße 100"], answer: "Perchtoldsdorfer Straße 2" },
    { question: "Wo ist das Fundservice Wien?", options: ["Siebenbrunnenfeldgasse 3", "Gasgasse 8-10", "Am Spitz 1", "Brigittaplatz 10"], answer: "Siebenbrunnenfeldgasse 3" },

    // ==================== 9. HOTELS – LUXUSKLASSE ====================

    { question: "Wo ist das Hotel Bristol?", options: ["Kärntner Ring 1", "Kärntner Ring 16", "Coburgbastei 4", "Parkring 12a"], answer: "Kärntner Ring 1" },
    { question: "Wo ist das Hotel Imperial?", options: ["Kärntner Ring 16", "Kärntner Ring 1", "Schottenring 24", "Philharmonikerstraße 4"], answer: "Kärntner Ring 16" },
    { question: "Wo ist das Palais Coburg Residenz?", options: ["Coburgbastei 4", "Kärntner Ring 1", "Schottenring 24", "Parkring 12a"], answer: "Coburgbastei 4" },
    { question: "Wo ist das Palais Hansen Kempinski Vienna?", options: ["Schottenring 24", "Coburgbastei 4", "Philharmonikerstraße 4", "Parkring 12a"], answer: "Schottenring 24" },
    { question: "Wo ist das Hotel Sacher Wien?", options: ["Philharmonikerstraße 4", "Schottenring 24", "Kärntner Ring 1", "Parkring 12a"], answer: "Philharmonikerstraße 4" },
    { question: "Wo ist das Vienna Marriott Hotel?", options: ["Parkring 12a", "Philharmonikerstraße 4", "Coburgbastei 4", "Kärntner Ring 1"], answer: "Parkring 12a" },

    // ==================== 9. HOTELS – ERSTKLASSIG ====================

    { question: "Wo ist das Hotel Adagio Vienna City?", options: ["Uraniastraße 2 / Julius-Raab-Platz", "Am Heumarkt 35-37", "Parkring 12", "Stephansplatz 9"], answer: "Uraniastraße 2 / Julius-Raab-Platz" },
    { question: "Wo ist das Hotel Am Konzerthaus?", options: ["Am Heumarkt 35-37", "Parkring 12", "Stephansplatz 9", "Rechte Wienzeile 93-95"], answer: "Am Heumarkt 35-37" },
    { question: "Wo ist das Hotel Am Parkring?", options: ["Parkring 12", "Am Heumarkt 35-37", "Stephansplatz 9", "Neubaugürtel 34-36"], answer: "Parkring 12" },
    { question: "Wo ist das Hotel Am Stephansplatz?", options: ["Stephansplatz 9", "Parkring 12", "Rechte Wienzeile 93-95", "Am Heumarkt 35-37"], answer: "Stephansplatz 9" },
    { question: "Wo ist das Hotel Ananas?", options: ["Rechte Wienzeile 93-95", "Stephansplatz 9", "Neubaugürtel 34-36", "Taborstraße 8"], answer: "Rechte Wienzeile 93-95" },
    { question: "Wo ist das Arcotel Wimberger Wien?", options: ["Neubaugürtel 34-36", "Rechte Wienzeile 93-95", "Neubaugürtel 26-28", "Mariahilfer Straße 122"], answer: "Neubaugürtel 34-36" },
    { question: "Wo ist das Hotel Bosei?", options: ["Gutheil-Schoder-Gasse 7b", "Taborstraße 8", "Landstraßer Hauptstraße 120", "Neubaugürtel 34-36"], answer: "Gutheil-Schoder-Gasse 7b" },
    { question: "Wo ist das Hotel City Central?", options: ["Taborstraße 8", "Gutheil-Schoder-Gasse 7b", "Rennweg 99", "Wiedner Hauptstraße 27-29"], answer: "Taborstraße 8" },
    { question: "Wo ist das Hotel Doppio?", options: ["Rennweg 99 / Rinnböckstraße 1", "Taborstraße 8", "Landstraßer Hauptstraße 120", "Favoritenstraße 12"], answer: "Rennweg 99 / Rinnböckstraße 1" },
    { question: "Wo ist das Hotel Erzherzog Rainer?", options: ["Wiedner Hauptstraße 27-29", "Rennweg 99", "Landstraßer Hauptstraße 120", "Kirchberggasse 6-8"], answer: "Wiedner Hauptstraße 27-29" },
    { question: "Wo ist das Hotel Eurostars Embassy?", options: ["Landstraßer Hauptstraße 120", "Wiedner Hauptstraße 27-29", "Rennweg 12", "Neubaugürtel 26-28"], answer: "Landstraßer Hauptstraße 120" },
    { question: "Wo ist das Fleming's Hotel Wien-Westbahnhof?", options: ["Neubaugürtel 26-28", "Neubaugürtel 34-36", "Kirchberggasse 6-8", "Margaretenstraße 53"], answer: "Neubaugürtel 26-28" },
    { question: "Wo ist das Holiday Inn Vienna City?", options: ["Margaretenstraße 53", "Neubaugürtel 26-28", "Mariahilfer Straße 122", "Favoritenstraße 12"], answer: "Margaretenstraße 53" },
    { question: "Wo ist das InterCityHotel Wien?", options: ["Mariahilfer Straße 122 / Kaiserstraße 1-3", "Margaretenstraße 53", "Kirchberggasse 6-8", "Favoritenstraße 12"], answer: "Mariahilfer Straße 122 / Kaiserstraße 1-3" },
    { question: "Wo ist das Hotel Johann Strauss?", options: ["Favoritenstraße 12", "Mariahilfer Straße 122", "Kirchberggasse 6-8", "Rennweg 12"], answer: "Favoritenstraße 12" },
    { question: "Wo ist das K+K Hotel Maria Theresia?", options: ["Kirchberggasse 6-8", "Favoritenstraße 12", "Rennweg 12", "Linzer Straße 165"], answer: "Kirchberggasse 6-8" },
    { question: "Wo ist das Hotel Kavalier?", options: ["Linzer Straße 165", "Kirchberggasse 6-8", "Rennweg 12a", "Landstraßer Hauptstraße 28"], answer: "Linzer Straße 165" },
    { question: "Wo ist das Lindner Hotel Am Belvedere?", options: ["Rennweg 12", "Linzer Straße 165", "Rennweg 12a", "Josefsgasse 4-6"], answer: "Rennweg 12" },
    { question: "Wo ist das Mercure Grand Hotel Biedermeier Wien?", options: ["Landstraßer Hauptstraße 28", "Rennweg 12", "Josefsgasse 4-6", "Getreidemarkt 5"], answer: "Landstraßer Hauptstraße 28" },
    { question: "Wo ist das Mercure Josefshof Wien am Rathaus?", options: ["Josefsgasse 4-6", "Landstraßer Hauptstraße 28", "Getreidemarkt 5", "Hollandstraße 3"], answer: "Josefsgasse 4-6" },
    { question: "Wo ist das Mercure Secession Wien?", options: ["Getreidemarkt 5", "Josefsgasse 4-6", "Hollandstraße 3", "Felberstraße 4"], answer: "Getreidemarkt 5" },
    { question: "Wo ist das Mercure Wien City?", options: ["Hollandstraße 3", "Getreidemarkt 5", "Felberstraße 4", "Rotensterngasse 12"], answer: "Hollandstraße 3" },
    { question: "Wo ist das Mercure Wien Westbahnhof?", options: ["Felberstraße 4", "Hollandstraße 3", "Rotensterngasse 12", "Wagramer Straße 21"], answer: "Felberstraße 4" },
    { question: "Wo ist das Nestroy Wien Imlauer?", options: ["Rotensterngasse 12", "Felberstraße 4", "Wagramer Straße 21", "Mariahilfer Straße 32-34"], answer: "Rotensterngasse 12" },
    { question: "Wo ist das NH Danube City?", options: ["Wagramer Straße 21", "Rotensterngasse 12", "Mariahilfer Straße 32-34", "Aspernbrückengasse 1"], answer: "Wagramer Straße 21" },
    { question: "Wo ist das NH Wien Belvedere?", options: ["Rennweg 12a", "Rennweg 12", "Wagramer Straße 21", "Mariahilfer Straße 32-34"], answer: "Rennweg 12a" },
    { question: "Wo ist das NH Wien City?", options: ["Mariahilfer Straße 32-34", "Wagramer Straße 21", "Aspernbrückengasse 1", "Hasenauerstraße 12"], answer: "Mariahilfer Straße 32-34" },
    { question: "Wo ist das Novotel Wien City?", options: ["Aspernbrückengasse 1", "Mariahilfer Straße 32-34", "Hasenauerstraße 12", "Rooseveltplatz 15"], answer: "Aspernbrückengasse 1" },
    { question: "Wo ist das Hotel Park Villa?", options: ["Hasenauerstraße 12", "Aspernbrückengasse 1", "Rooseveltplatz 15", "Savoyenstraße 2"], answer: "Hasenauerstraße 12" },
    { question: "Wo ist das Park Inn by Radisson Uno City Vienna?", options: ["Wagramer Straße 16-18", "Wagramer Straße 21", "Rooseveltplatz 15", "Savoyenstraße 2"], answer: "Wagramer Straße 16-18" },
    { question: "Wo ist das Hotel Regina?", options: ["Rooseveltplatz 15", "Wagramer Straße 16-18", "Savoyenstraße 2", "Simmeringer Hauptstraße 55"], answer: "Rooseveltplatz 15" },
    { question: "Wo ist das Hotel Schloss Wilhelminenberg?", options: ["Savoyenstraße 2", "Rooseveltplatz 15", "Am Heumarkt 15", "Simmeringer Hauptstraße 55"], answer: "Savoyenstraße 2" },
    { question: "Wo ist das Hotel Simm's?", options: ["Simmeringer Hauptstraße 55", "Savoyenstraße 2", "Am Heumarkt 15", "Pasteurgasse 1"], answer: "Simmeringer Hauptstraße 55" },
    { question: "Wo ist das Starlight Suiten Hotel Wien Heumarkt?", options: ["Am Heumarkt 15", "Simmeringer Hauptstraße 55", "Renngasse 13", "Salzgries 12"], answer: "Am Heumarkt 15" },
    { question: "Wo ist das Starlight Suiten Hotel Wien Renngasse?", options: ["Renngasse 13", "Am Heumarkt 15", "Salzgries 12", "Taborstraße 12"], answer: "Renngasse 13" },
    { question: "Wo ist das Starlight Suiten Hotel Wien Salzgries?", options: ["Salzgries 12", "Renngasse 13", "Taborstraße 12", "Pasteurgasse 1"], answer: "Salzgries 12" },
    { question: "Wo ist das Hotel Stefanie?", options: ["Taborstraße 12", "Salzgries 12", "Pasteurgasse 1", "Hertha-Firnberg-Straße 5"], answer: "Taborstraße 12" },
    { question: "Wo ist das Strudlhof Hotel & Palais?", options: ["Pasteurgasse 1", "Taborstraße 12", "Hertha-Firnberg-Straße 5", "Baumgasse 83"], answer: "Pasteurgasse 1" },
    { question: "Wo ist das Vienna South Hilton Garden Inn?", options: ["Hertha-Firnberg-Straße 5", "Pasteurgasse 1", "Baumgasse 83", "Rooseveltplatz 15"], answer: "Hertha-Firnberg-Straße 5" },
    { question: "Wo ist das Vienna Sporthotel?", options: ["Baumgasse 83", "Hertha-Firnberg-Straße 5", "Simmeringer Hauptstraße 55", "Am Heumarkt 15"], answer: "Baumgasse 83" },

    // ==================== 9. HOTELS – MITTELKLASSE ====================

    { question: "Wo ist das Ibis Styles Wien City?", options: ["Döblinger Hauptstraße 2", "Schönbrunner Straße 92", "Mariahilfer Gürtel 22-24", "Lassallestraße 7a"], answer: "Döblinger Hauptstraße 2" },
    { question: "Wo ist das Ibis Wien City?", options: ["Schönbrunner Straße 92", "Döblinger Hauptstraße 2", "Mariahilfer Gürtel 22-24", "Lassallestraße 7a"], answer: "Schönbrunner Straße 92" },
    { question: "Wo ist das Ibis Wien Mariahilf?", options: ["Mariahilfer Gürtel 22-24", "Schönbrunner Straße 92", "Lassallestraße 7a", "Messestraße 2"], answer: "Mariahilfer Gürtel 22-24" },
    { question: "Wo ist das Ibis Wien Messe?", options: ["Lassallestraße 7a", "Mariahilfer Gürtel 22-24", "Messestraße 2", "Fleischmarkt 24"], answer: "Lassallestraße 7a" },
    { question: "Wo ist das Messe Prater Wien?", options: ["Messestraße 2", "Lassallestraße 7a", "Fleischmarkt 24", "Döblinger Hauptstraße 2"], answer: "Messestraße 2" },
    { question: "Wo ist das Hotel Post?", options: ["Fleischmarkt 24", "Messestraße 2", "Döblinger Hauptstraße 2", "Schönbrunner Straße 92"], answer: "Fleischmarkt 24" },

    // ==================== 9. HOTELS – OHNE KLASSIFIZIERUNG ====================

    { question: "Wo ist das 25hours Hotel beim MuseumsQuartier?", options: ["Lerchenfelder Straße 1-3", "Kärntner Straße 22", "Schönbrunner Schloßstraße 38-40", "Landstraßer Gürtel 5"], answer: "Lerchenfelder Straße 1-3" },
    { question: "Wo ist das Hotel Ambassador?", options: ["Kärntner Straße 22 / Neuer Markt 5", "Lerchenfelder Straße 1-3", "Wiedner Hauptstraße 12", "Landstraßer Gürtel 5"], answer: "Kärntner Straße 22 / Neuer Markt 5" },
    { question: "Wo ist das Courtyard by Marriott Wien Schönbrunn?", options: ["Schönbrunner Schloßstraße 38-40", "Landstraßer Gürtel 5", "Josefstädter Straße 10-12", "Schubertring 10-12"], answer: "Schönbrunner Schloßstraße 38-40" },
    { question: "Wo ist das Hotel Daniel Vienna?", options: ["Landstraßer Gürtel 5", "Schönbrunner Schloßstraße 38-40", "Wiedner Hauptstraße 12", "Josefstädter Straße 10-12"], answer: "Landstraßer Gürtel 5" },
    { question: "Wo ist das Hotel Das Triest?", options: ["Wiedner Hauptstraße 12", "Landstraßer Gürtel 5", "Josefstädter Straße 10-12", "Schubertring 10-12"], answer: "Wiedner Hauptstraße 12" },
    { question: "Wo ist das Flemings Deluxe Hotel Wien-City?", options: ["Josefstädter Straße 10-12", "Wiedner Hauptstraße 12", "Schubertring 10-12", "Kärntner Ring 9"], answer: "Josefstädter Straße 10-12" },
    { question: "Wo ist das Hotel Grand Ferdinand?", options: ["Schubertring 10-12", "Josefstädter Straße 10-12", "Kärntner Ring 9", "Am Stadtpark 1"], answer: "Schubertring 10-12" },
    { question: "Wo ist das Grand Hotel?", options: ["Kärntner Ring 9", "Schubertring 10-12", "Am Stadtpark 1", "Schottenring 11"], answer: "Kärntner Ring 9" },
    { question: "Wo ist das Hilton Vienna?", options: ["Am Stadtpark 1", "Kärntner Ring 9", "Schottenring 11", "Handelskai 269"], answer: "Am Stadtpark 1" },
    { question: "Wo ist das Hilton Vienna Plaza?", options: ["Schottenring 11", "Am Stadtpark 1", "Handelskai 269", "Ungargasse 60"], answer: "Schottenring 11" },
    { question: "Wo ist das Hilton Vienna Danube Waterfront?", options: ["Handelskai 269", "Schottenring 11", "Am Hof 2", "Ungargasse 60"], answer: "Handelskai 269" },
    { question: "Wo ist das Imperial Riding School Renaissance Vienna?", options: ["Ungargasse 60", "Handelskai 269", "Johannesgasse 28", "Am Hof 2"], answer: "Ungargasse 60" },
    { question: "Wo ist das Intercontinental Wien?", options: ["Johannesgasse 28", "Ungargasse 60", "Robert-Stolz-Platz 1", "Am Hof 2"], answer: "Johannesgasse 28" },
    { question: "Wo ist das Hotel LeMeridien Wien?", options: ["Robert-Stolz-Platz 1", "Johannesgasse 28", "Am Hof 2", "Donau-City-Straße 7"], answer: "Robert-Stolz-Platz 1" },
    { question: "Wo ist das Hotel Melia Vienna?", options: ["Donau-City-Straße 7", "Robert-Stolz-Platz 1", "Fleischmarkt 1a", "Am Hof 2"], answer: "Donau-City-Straße 7" },
    { question: "Wo ist das Mercure Wien Zentrum?", options: ["Fleischmarkt 1a", "Donau-City-Straße 7", "Am Hof 2", "Schubertring 5-7"], answer: "Fleischmarkt 1a" },
    { question: "Wo ist das Park Hyatt Vienna?", options: ["Am Hof 2", "Fleischmarkt 1a", "Schubertring 5-7", "Herrengasse 10"], answer: "Am Hof 2" },
    { question: "Wo ist das Renaissance Wien Hotel?", options: ["Ullmannstraße 71 / Linke Wienzeile", "Am Hof 2", "Praterstraße 1", "Schubertring 5-7"], answer: "Ullmannstraße 71 / Linke Wienzeile" },
    { question: "Wo ist das Sofitel Vienna Stephansdom?", options: ["Praterstraße 1", "Ullmannstraße 71", "Schubertring 5-7", "Herrengasse 10"], answer: "Praterstraße 1" },
    { question: "Wo ist das The Ritz Carlton?", options: ["Schubertring 5-7", "Praterstraße 1", "Herrengasse 10", "Kärntner Ring 8"], answer: "Schubertring 5-7" },
    { question: "Wo ist das Steigenberger Hotel Herrenhof?", options: ["Herrengasse 10", "Schubertring 5-7", "Kärntner Ring 8", "Lichtensteg 3"], answer: "Herrengasse 10" },
    { question: "Wo ist das Hotel The Ring?", options: ["Kärntner Ring 8", "Herrengasse 10", "Lichtensteg 3", "Schubertring 5-7"], answer: "Kärntner Ring 8" },
    { question: "Wo ist das Hotel Topazz?", options: ["Lichtensteg 3", "Kärntner Ring 8", "Herrengasse 10", "Fleischmarkt 1a"], answer: "Lichtensteg 3" },

    // ==================== 10. KAFFEEHÄUSER ====================

    { question: "Wo ist das Café Central?", options: ["Herrengasse 14 (im Palais Ferstl)", "Rathausplatz 8", "Dorotheergasse 6", "Universitätsring 4"], answer: "Herrengasse 14 (im Palais Ferstl)" },
    { question: "Wo ist das Café Einstein?", options: ["Rathausplatz 8", "Herrengasse 14", "Dorotheergasse 6", "Albertinaplatz 2"], answer: "Rathausplatz 8" },
    { question: "Wo ist das Café Hawelka?", options: ["Dorotheergasse 6", "Rathausplatz 8", "Universitätsring 4", "Operngasse 7"], answer: "Dorotheergasse 6" },
    { question: "Wo ist das Café Landtmann?", options: ["Universitätsring 4", "Albertinaplatz 2", "Dorotheergasse 6", "Operngasse 7"], answer: "Universitätsring 4" },
    { question: "Wo ist das Café Mozart?", options: ["Albertinaplatz 2", "Universitätsring 4", "Operngasse 7", "Stubenring 24"], answer: "Albertinaplatz 2" },
    { question: "Wo ist das Café Museum?", options: ["Operngasse 7", "Albertinaplatz 2", "Stubenring 24", "Kärntner Ring 17"], answer: "Operngasse 7" },
    { question: "Wo ist das Café Prückel?", options: ["Stubenring 24", "Operngasse 7", "Kärntner Ring 17", "Linke Wienzeile 22"], answer: "Stubenring 24" },
    { question: "Wo ist das Café Schwarzenberg?", options: ["Kärntner Ring 17", "Stubenring 24", "Linke Wienzeile 22", "Mariahilfer Straße 73"], answer: "Kärntner Ring 17" },
    { question: "Wo ist das Café Lusthaus?", options: ["Freudenau 254 / Aspernallee", "Kärntner Ring 17", "Linke Wienzeile 22", "Gumpendorfer Straße 11"], answer: "Freudenau 254 / Aspernallee" },
    { question: "Wo ist das Café Drechsler?", options: ["Linke Wienzeile 22", "Mariahilfer Straße 73", "Gumpendorfer Straße 11", "Josefstädter Straße 2"], answer: "Linke Wienzeile 22" },
    { question: "Wo ist das Café Ritter?", options: ["Mariahilfer Straße 73", "Linke Wienzeile 22", "Gumpendorfer Straße 11", "Josefstädter Straße 66"], answer: "Mariahilfer Straße 73" },
    { question: "Wo ist das Café Sperl?", options: ["Gumpendorfer Straße 11", "Mariahilfer Straße 73", "Josefstädter Straße 2", "Auhofstraße 2"], answer: "Gumpendorfer Straße 11" },
    { question: "Wo ist das Café Eiles?", options: ["Josefstädter Straße 2", "Gumpendorfer Straße 11", "Josefstädter Straße 66", "Auhofstraße 2"], answer: "Josefstädter Straße 2" },
    { question: "Wo ist das Café Hummel?", options: ["Josefstädter Straße 66", "Josefstädter Straße 2", "Gumpendorfer Straße 11", "Auhofstraße 2"], answer: "Josefstädter Straße 66" },
    { question: "Wo ist das Café Dommayer?", options: ["Auhofstraße 2", "Josefstädter Straße 66", "Gumpendorfer Straße 11", "Linke Wienzeile 22"], answer: "Auhofstraße 2" },

    // ==================== 11. BEZIRKSNAMEN ====================

    { question: "Wie heißt der 1. Bezirk?", options: ["Innere Stadt", "Leopoldstadt", "Landstraße", "Wieden"], answer: "Innere Stadt" },
    { question: "Wie heißt der 2. Bezirk?", options: ["Leopoldstadt", "Innere Stadt", "Landstraße", "Margareten"], answer: "Leopoldstadt" },
    { question: "Wie heißt der 3. Bezirk?", options: ["Landstraße", "Leopoldstadt", "Wieden", "Josefstadt"], answer: "Landstraße" },
    { question: "Wie heißt der 4. Bezirk?", options: ["Wieden", "Margareten", "Mariahilf", "Neubau"], answer: "Wieden" },
    { question: "Wie heißt der 5. Bezirk?", options: ["Margareten", "Wieden", "Mariahilf", "Alsergrund"], answer: "Margareten" },
    { question: "Wie heißt der 6. Bezirk?", options: ["Mariahilf", "Neubau", "Josefstadt", "Favoriten"], answer: "Mariahilf" },
    { question: "Wie heißt der 7. Bezirk?", options: ["Neubau", "Josefstadt", "Alsergrund", "Simmering"], answer: "Neubau" },
    { question: "Wie heißt der 8. Bezirk?", options: ["Josefstadt", "Alsergrund", "Favoriten", "Meidling"], answer: "Josefstadt" },
    { question: "Wie heißt der 9. Bezirk?", options: ["Alsergrund", "Favoriten", "Simmering", "Hietzing"], answer: "Alsergrund" },
    { question: "Wie heißt der 10. Bezirk?", options: ["Favoriten", "Simmering", "Meidling", "Penzing"], answer: "Favoriten" },
    { question: "Wie heißt der 11. Bezirk?", options: ["Simmering", "Meidling", "Hietzing", "Ottakring"], answer: "Simmering" },
    { question: "Wie heißt der 12. Bezirk?", options: ["Meidling", "Hietzing", "Penzing", "Hernals"], answer: "Meidling" },
    { question: "Wie heißt der 13. Bezirk?", options: ["Hietzing", "Penzing", "Rudolfsheim-Fünfhaus", "Währing"], answer: "Hietzing" },
    { question: "Wie heißt der 14. Bezirk?", options: ["Penzing", "Hietzing", "Rudolfsheim-Fünfhaus", "Döbling"], answer: "Penzing" },
    { question: "Wie heißt der 15. Bezirk?", options: ["Rudolfsheim-Fünfhaus", "Ottakring", "Hernals", "Währing"], answer: "Rudolfsheim-Fünfhaus" },
    { question: "Wie heißt der 16. Bezirk?", options: ["Ottakring", "Hernals", "Währing", "Döbling"], answer: "Ottakring" },
    { question: "Wie heißt der 17. Bezirk?", options: ["Hernals", "Währing", "Döbling", "Brigittenau"], answer: "Hernals" },
    { question: "Wie heißt der 18. Bezirk?", options: ["Währing", "Döbling", "Brigittenau", "Floridsdorf"], answer: "Währing" },
    { question: "Wie heißt der 19. Bezirk?", options: ["Döbling", "Brigittenau", "Floridsdorf", "Donaustadt"], answer: "Döbling" },
    { question: "Wie heißt der 20. Bezirk?", options: ["Brigittenau", "Floridsdorf", "Donaustadt", "Liesing"], answer: "Brigittenau" },
    { question: "Wie heißt der 21. Bezirk?", options: ["Floridsdorf", "Donaustadt", "Liesing", "Döbling"], answer: "Floridsdorf" },
    { question: "Wie heißt der 22. Bezirk?", options: ["Donaustadt", "Floridsdorf", "Liesing", "Hernals"], answer: "Donaustadt" },
    { question: "Wie heißt der 23. Bezirk?", options: ["Liesing", "Donaustadt", "Floridsdorf", "Ottakring"], answer: "Liesing" },

    // ==================== 12. FRIEDHÖFE ====================

    { question: "Wo liegt der Friedhof Aspern?", options: ["Langobardenstraße 180", "Waidhausenstraße 52", "Hartäckerstraße 65", "Alszeile 28"], answer: "Langobardenstraße 180" },
    { question: "Wo liegt der Friedhof Baumgarten?", options: ["Waidhausenstraße 52", "Langobardenstraße 180", "Hartäckerstraße 65", "Simmeringer Hauptstraße 337"], answer: "Waidhausenstraße 52" },
    { question: "Wo liegt der Friedhof Döbling?", options: ["Hartäckerstraße 65", "Waidhausenstraße 52", "Alszeile 28", "Wildgrubgasse 20"], answer: "Hartäckerstraße 65" },
    { question: "Wo liegt der Friedhof Dornbach?", options: ["Alszeile 28", "Hartäckerstraße 65", "Wildgrubgasse 20", "Leopold-Kunschak-Platz 7"], answer: "Alszeile 28" },
    { question: "Wo liegt die Feuerhalle Simmering?", options: ["Simmeringer Hauptstraße 337", "Simmeringer Hauptstraße", "Friedhofstraße 33", "Unter der Kirche 5"], answer: "Simmeringer Hauptstraße 337" },
    { question: "Wo liegt der Friedhof Grinzing?", options: ["An den Langen Lüssen 33", "Wildgrubgasse 20", "Hartäckerstraße 65", "Nottebohmstraße 51"], answer: "An den Langen Lüssen 33" },
    { question: "Wo liegt der Friedhof Großjedlersdorf?", options: ["Strebersdorfer Straße 2", "Langobardenstraße 180", "Stammersdorfer Straße 244-260", "Kolbegasse 34"], answer: "Strebersdorfer Straße 2" },
    { question: "Wo liegt der Friedhof Heiligenstadt?", options: ["Wildgrubgasse 20", "An den Langen Lüssen 33", "Nottebohmstraße 51", "Hartäckerstraße 65"], answer: "Wildgrubgasse 20" },
    { question: "Wo liegt der Friedhof Hernals?", options: ["Leopold-Kunschak-Platz 7", "Alszeile 28", "Maxingstraße 15", "Gallitzinstraße 5"], answer: "Leopold-Kunschak-Platz 7" },
    { question: "Wo liegt der Friedhof Hietzing?", options: ["Maxingstraße 15", "Sampwandnergasse 6", "Waidhausenstraße 52", "Hartäckerstraße 65"], answer: "Maxingstraße 15" },
    { question: "Wo liegt der Friedhof Hütteldorf?", options: ["Sampwandnergasse 6", "Maxingstraße 15", "Strebersdorfer Straße 2", "Gallitzinstraße 5"], answer: "Sampwandnergasse 6" },
    { question: "Wo liegt der Friedhof Inzersdorf?", options: ["Kolbegasse 34", "Friedensstraße 6-16", "Großmarktstraße", "Eibesbrunner Gasse 1a"], answer: "Kolbegasse 34" },
    { question: "Wo liegt der Islamische Friedhof?", options: ["Großmarktstraße", "Kolbegasse 34", "Friedensstraße 6-16", "Pötzleinsdorfer Höhe 2"], answer: "Großmarktstraße" },
    { question: "Wo liegt der Friedhof Mauer?", options: ["Friedensstraße 6-16", "Großmarktstraße", "Kolbegasse 34", "Friedhofstraße 33"], answer: "Friedensstraße 6-16" },
    { question: "Wo liegt der Friedhof Meidling?", options: ["Eibesbrunner Gasse 1a", "Friedensstraße 6-16", "Unter der Kirche 5", "Herviciusgasse 44"], answer: "Eibesbrunner Gasse 1a" },
    { question: "Wo liegt der Friedhof Neustift?", options: ["Pötzleinsdorfer Höhe 2", "Nottebohmstraße 51", "An den Langen Lüssen 33", "Wildgrubgasse 20"], answer: "Pötzleinsdorfer Höhe 2" },
    { question: "Wo liegt der Friedhof Oberlaa?", options: ["Friedhofstraße 33", "Friedensstraße 6-16", "Kolbegasse 34", "Eibesbrunner Gasse 1a"], answer: "Friedhofstraße 33" },
    { question: "Wo liegt der Friedhof Ottakring?", options: ["Gallitzinstraße 5", "Alszeile 28", "Maxingstraße 15", "Leopold-Kunschak-Platz 7"], answer: "Gallitzinstraße 5" },
    { question: "Wo liegt der Friedhof Sievering?", options: ["Nottebohmstraße 51", "Wildgrubgasse 20", "An den Langen Lüssen 33", "Pötzleinsdorfer Höhe 2"], answer: "Nottebohmstraße 51" },
    { question: "Wo liegt der Friedhof Simmering?", options: ["Unter der Kirche 5", "Simmeringer Hauptstraße 337", "Friedhofstraße 33", "Kolbegasse 34"], answer: "Unter der Kirche 5" },
    { question: "Wo liegt der Stammersdorfer Zentralfriedhof?", options: ["Stammersdorfer Straße 244-260", "Strebersdorfer Straße 2", "Langobardenstraße 180", "Kolbegasse 34"], answer: "Stammersdorfer Straße 244-260" },
    { question: "Wo liegt der Südwestfriedhof?", options: ["Herviciusgasse 44 / Wundtgasse 1A", "Unter der Kirche 5", "Friedhofstraße 33", "Kolbegasse 34"], answer: "Herviciusgasse 44 / Wundtgasse 1A" },
    { question: "Wo liegt der Zentralfriedhof?", options: ["Simmeringer Hauptstraße", "Simmeringer Hauptstraße 337", "Unter der Kirche 5", "Friedhofstraße 33"], answer: "Simmeringer Hauptstraße" },

    // ==================== 13. KRANKENANSTALTEN ====================

    { question: "Wo liegt das Allgemeine Krankenhaus (AKH)?", options: ["Währinger Gürtel 18 / Lazarettgasse 14", "Kundratstraße 37", "Langobardenstraße 122", "Baumgartner Höhe 1"], answer: "Währinger Gürtel 18 / Lazarettgasse 14" },
    { question: "Wo liegt das AUVA-Traumazentrum Wien Meidling?", options: ["Kundratstraße 37", "Donaueschingenstraße 13", "Stumpergasse 13-15", "Baumgasse 20A"], answer: "Kundratstraße 37" },
    { question: "Wo liegt das AUVA-Traumazentrum Wien Lorenz Böhler?", options: ["Donaueschingenstraße 13", "Kundratstraße 37", "Hans-Sachs-Gasse 10-12", "Brünner Straße 238"], answer: "Donaueschingenstraße 13" },
    { question: "Wo liegt das Krankenhaus Barmherzige Schwestern?", options: ["Stumpergasse 13-15", "Johannes-von-Gott-Platz 1", "Skodagasse 32", "Nikolsdorfergasse 32"], answer: "Stumpergasse 13-15" },
    { question: "Wo liegt das Krankenhaus Barmherzige Brüder?", options: ["Johannes-von-Gott-Platz 1", "Stumpergasse 13-15", "Baumgasse 20A", "Lazarettgasse 16-18"], answer: "Johannes-von-Gott-Platz 1" },
    { question: "Wo liegt die Privatklinik Confraternität?", options: ["Skodagasse 32", "Lazarettgasse 16-18", "Pelikangasse 15", "Sensengasse 2a"], answer: "Skodagasse 32" },
    { question: "Wo liegt die Klinik Donaustadt (vormals SMZ Ost)?", options: ["Langobardenstraße 122", "Langobardenstraße 180", "Brünner Straße 68", "Donaueschingenstraße 13"], answer: "Langobardenstraße 122" },
    { question: "Wo liegt das Evangelische Krankenhaus?", options: ["Hans-Sachs-Gasse 10-12", "Dornbacher Straße 20-30", "Heiligenstädter Straße 55", "Montleartstraße 37"], answer: "Hans-Sachs-Gasse 10-12" },
    { question: "Wo liegt das Anton-Proksch-Institut?", options: ["Gräfin-Zichy-Straße 6", "Hans-Sachs-Gasse 10-12", "Speisinger Straße 109", "Auhofstraße 189"], answer: "Gräfin-Zichy-Straße 6" },
    { question: "Wo liegt das Franziskus Spital Landstraße (vormals St. Elisabeth-Spital)?", options: ["Landstraßer Hauptstraße 4a", "Nikolsdorfergasse 32", "Juchgasse 25", "Baumgasse 20A"], answer: "Landstraßer Hauptstraße 4a" },
    { question: "Wo liegt das Franziskus Spital Margareten (vormals Hartmannspital)?", options: ["Nikolsdorfergasse 32", "Landstraßer Hauptstraße 4a", "Kundratstraße 37", "Stumpergasse 13-15"], answer: "Nikolsdorfergasse 32" },
    { question: "Wo liegt die Privatklinik Goldenes Kreuz?", options: ["Lazarettgasse 16-18", "Skodagasse 32", "Pelikangasse 15", "Löblichgasse 14"], answer: "Lazarettgasse 16-18" },
    { question: "Wo liegt das Krankenhaus Göttlicher Heiland?", options: ["Dornbacher Straße 20-30", "Hans-Sachs-Gasse 10-12", "Montleartstraße 37", "Heinrich-Collin-Straße 30"], answer: "Dornbacher Straße 20-30" },
    { question: "Wo liegt das Hanusch Krankenhaus?", options: ["Heinrich-Collin-Straße 30", "Baumgartner Höhe 1", "Auhofstraße 189", "Speisinger Straße 109"], answer: "Heinrich-Collin-Straße 30" },
    { question: "Wo liegt das Sanitätszentrum Ost (ehem. Heeresspital)?", options: ["Brünner Straße 238", "Brünner Straße 68", "Langobardenstraße 122", "Stammersdorfer Straße"], answer: "Brünner Straße 238" },
    { question: "Wo liegt das Herz-Jesu-Krankenhaus?", options: ["Baumgasse 20A", "Wolkersbergenstraße 1", "Riedelgasse 5", "Speisinger Straße 109"], answer: "Baumgasse 20A" },
    { question: "Wo liegt die Klinik Hietzing (vorm. KH Hietzing)?", options: ["Wolkersbergenstraße 1", "Auhofstraße 189", "Montleartstraße 37", "Baumgartner Höhe 1"], answer: "Wolkersbergenstraße 1" },
    { question: "Wo liegt das Neurologische Krankenhaus Rosenhügel?", options: ["Riedelgasse 5", "Speisinger Straße 109", "Wolkersbergenstraße 1", "Auhofstraße 189"], answer: "Riedelgasse 5" },
    { question: "Wo liegt das Orthopädische Spital Speising?", options: ["Speisinger Straße 109", "Riedelgasse 5", "Auhofstraße 189", "Baumgartner Höhe 1"], answer: "Speisinger Straße 109" },
    { question: "Wo liegt das Rudolfiner Haus?", options: ["Billrothstraße 78", "Heiligenstädter Straße 55", "Löblichgasse 14", "Juchgasse 25"], answer: "Billrothstraße 78" },
    { question: "Wo liegt die Klinik Landstraße (vorm. Rudolfstiftung)?", options: ["Juchgasse 25", "Landstraßer Hauptstraße 4a", "Nikolsdorfergasse 32", "Baumgasse 20A"], answer: "Juchgasse 25" },
    { question: "Wo liegt das Sanatorium Hera?", options: ["Löblichgasse 14", "Sensengasse 2a", "Pelikangasse 15", "Kollburggasse 6-10"], answer: "Löblichgasse 14" },
    { question: "Wo liegt das Sanatorium Liebhartsthal?", options: ["Kollburggasse 6-10", "Löblichgasse 14", "Heiligenstädter Straße 55", "Billrothstraße 78"], answer: "Kollburggasse 6-10" },
    { question: "Wo liegt die Privatklinik Döbling – Vienna Int. Health Center?", options: ["Heiligenstädter Straße 55", "Billrothstraße 78", "Kollburggasse 6-10", "Löblichgasse 14"], answer: "Heiligenstädter Straße 55" },
    { question: "Wo liegt die Klinik Penzing (vorm. SMZ Baumgartnerhöhe + Otto-Wagner-Spital)?", options: ["Baumgartner Höhe 1", "Auhofstraße 189", "Montleartstraße 37", "Speisinger Straße 109"], answer: "Baumgartner Höhe 1" },
    { question: "Wo liegt die Klinik Favoriten (vormals SMZ Süd – Kaiser Franz Josef Spital)?", options: ["Kundratstraße 3", "Kundratstraße 37", "Nikolsdorfergasse 32", "Baumgasse 20A"], answer: "Kundratstraße 3" },
    { question: "Wo liegt das St. Anna Kinderspital?", options: ["Kinderspitalgasse 6", "Sensengasse 2a", "Lazarettgasse 16-18", "Skodagasse 32"], answer: "Kinderspitalgasse 6" },
    { question: "Wo liegt das St. Josef-Krankenhaus?", options: ["Auhofstraße 189", "Speisinger Straße 109", "Wolkersbergenstraße 1", "Baumgartner Höhe 1"], answer: "Auhofstraße 189" },
    { question: "Wo liegt die Universitäts-Zahnklinik?", options: ["Sensengasse 2a", "Kinderspitalgasse 6", "Lazarettgasse 16-18", "Skodagasse 32"], answer: "Sensengasse 2a" },
    { question: "Wo liegt die Klinik Floridsdorf (vorm. Krankenhaus Nord)?", options: ["Brünner Straße 68", "Brünner Straße 238", "Langobardenstraße 122", "Stammersdorfer Straße"], answer: "Brünner Straße 68" },
    { question: "Wo liegt die Klinik Ottakring (vorm. Wilhelminenspital)?", options: ["Montleartstraße 37", "Dornbacher Straße 20-30", "Heinrich-Collin-Straße 30", "Baumgartner Höhe 1"], answer: "Montleartstraße 37" },
    { question: "Wo liegt die Wiener Privatklinik?", options: ["Pelikangasse 15", "Lazarettgasse 16-18", "Skodagasse 32", "Sensengasse 2a"], answer: "Pelikangasse 15" },

    // ==================== 14. PENSIONISTEN-WOHNHÄUSER ====================

    { question: "Wo ist das Kuratorium der Wiener Pensionistenwohnhäuser (Zentrale)?", options: ["Seegasse 11", "Alserstraße 39", "Währinger Gürtel 18", "Lazarettgasse 14"], answer: "Seegasse 11" },

    // ==================== 15. KULTUREINRICHTUNGEN ====================

    { question: "Wo liegt das Burgtheater?", options: ["Universitätsring 2", "Rotenturmstraße 20", "Opernring 2", "Lisztstraße 1"], answer: "Universitätsring 2" },
    { question: "Wo liegen die Kammerspiele?", options: ["Rotenturmstraße 20", "Universitätsring 2", "Seilerstätte 25", "Opernring 2"], answer: "Rotenturmstraße 20" },
    { question: "Wo liegen die Musikvereinssäle (Gesellschaft der Musikfreunde)?", options: ["Musikverein Platz 1", "Opernring 2", "Lothringerstraße 20", "Universitätsring 2"], answer: "Musikverein Platz 1" },
    { question: "Wo liegt das Ronacher Etablissement?", options: ["Seilerstätte / Himmelpfortgasse 25", "Rotenturmstraße 20", "Fleischmarkt 24", "Wallgasse 18-20"], answer: "Seilerstätte / Himmelpfortgasse 25" },
    { question: "Wo liegt die Staatsoper?", options: ["Opernring 2", "Musikverein Platz 1", "Lisztstraße 1", "Universitätsring 2"], answer: "Opernring 2" },
    { question: "Wo liegt die Wiener Kammeroper?", options: ["Fleischmarkt 24", "Opernring 2", "Rotenturmstraße 20", "Seilerstätte 25"], answer: "Fleischmarkt 24" },
    { question: "Wo liegt das Akademietheater?", options: ["Lisztstraße 1", "Lothringerstraße 20", "Opernring 2", "Universitätsring 2"], answer: "Lisztstraße 1" },
    { question: "Wo liegt das Konzerthaus?", options: ["Lothringerstraße 20", "Lisztstraße 1", "Musikverein Platz 1", "Opernring 2"], answer: "Lothringerstraße 20" },
    { question: "Wo liegt das Raimundtheater?", options: ["Wallgasse 18-20", "Linke Wienzeile 6", "Arthur-Schnitzler-Platz 1", "Währinger Straße 78"], answer: "Wallgasse 18-20" },
    { question: "Wo liegt das Theater an der Wien?", options: ["Linke Wienzeile 6", "Wallgasse 18-20", "Josefstädter Straße 26", "Roland-Rainer-Platz 1"], answer: "Linke Wienzeile 6" },
    { question: "Wo liegt das Volkstheater?", options: ["Arthur-Schnitzler-Platz 1", "Josefstädter Straße 26", "Währinger Straße 78", "Wallgasse 18-20"], answer: "Arthur-Schnitzler-Platz 1" },
    { question: "Wo liegt das Theater in der Josefstadt?", options: ["Josefstädter Straße 26", "Arthur-Schnitzler-Platz 1", "Währinger Straße 78", "Linke Wienzeile 6"], answer: "Josefstädter Straße 26" },
    { question: "Wo liegt die Volksoper?", options: ["Währinger Straße 78", "Josefstädter Straße 26", "Roland-Rainer-Platz 1", "Wallgasse 18-20"], answer: "Währinger Straße 78" },
    { question: "Wo liegt die Stadthalle?", options: ["Roland-Rainer-Platz 1 / Hütteldorfer Straße", "Währinger Straße 78", "Arthur-Schnitzler-Platz 1", "Linke Wienzeile 6"], answer: "Roland-Rainer-Platz 1 / Hütteldorfer Straße" },

    // ==================== 15a. KABARETTS ====================

    { question: "Wo liegt das Casa Nova?", options: ["Dorotheergasse 6-8", "Liliengasse 2", "Wollzeile 36", "Lenaugasse 1A"], answer: "Dorotheergasse 6-8" },
    { question: "Wo liegt die Eden Bar?", options: ["Liliengasse 2", "Dorotheergasse 6-8", "Wallensteinplatz 6", "Rosensteingasse 39"], answer: "Liliengasse 2" },
    { question: "Wo liegt die Globe Wien – Marx Halle?", options: ["Karl-Farkas-Gasse 19", "Lenaugasse 1A", "Rabengasse 3", "Steigenteschgasse 94b"], answer: "Karl-Farkas-Gasse 19" },
    { question: "Wo liegt das Kabarett Niedermair?", options: ["Lenaugasse 1A", "Karl-Farkas-Gasse 19", "Wallensteinplatz 6", "Rabengasse 3"], answer: "Lenaugasse 1A" },
    { question: "Wo liegt das Kabarett Vindobona?", options: ["Wallensteinplatz 6", "Lenaugasse 1A", "Rosensteingasse 39", "Hernalser Hauptstraße 55"], answer: "Wallensteinplatz 6" },
    { question: "Wo liegt die Kulisse?", options: ["Rosensteingasse 39", "Hernalser Hauptstraße 55", "Steigenteschgasse 94b", "Rabengasse 3"], answer: "Rosensteingasse 39" },
    { question: "Wo liegt das Metropol?", options: ["Hernalser Hauptstraße 55", "Rosensteingasse 39", "Wallensteinplatz 6", "Goldschlagstraße 169"], answer: "Hernalser Hauptstraße 55" },
    { question: "Wo liegt das Orpheum?", options: ["Steigenteschgasse 94b", "Karl-Farkas-Gasse 19", "Goldschlagstraße 169", "Mariahilfer Straße 81"], answer: "Steigenteschgasse 94b" },
    { question: "Wo liegt das Rabenhof Theater?", options: ["Rabengasse 3", "Lenaugasse 1A", "Spittelberggasse 10", "Mariahilfer Straße 81"], answer: "Rabengasse 3" },
    { question: "Wo liegt die Sargfabrik?", options: ["Goldschlagstraße 169", "Mariahilfer Straße 81", "Rabengasse 3", "Spittelberggasse 10"], answer: "Goldschlagstraße 169" },
    { question: "Wo liegt das Schutzhaus der Zukunft?", options: ["Auf der Schmelz / verlängerte Guntherstraße", "Goldschlagstraße 169", "Theresianumgasse 18", "Spittelberggasse 10"], answer: "Auf der Schmelz / verlängerte Guntherstraße" },
    { question: "Wo liegt das Simpl?", options: ["Wollzeile 36", "Liliengasse 2", "Dorotheergasse 6-8", "Mariahilfer Straße 81"], answer: "Wollzeile 36" },
    { question: "Wo liegt der Stadtsaal?", options: ["Mariahilfer Straße 81", "Wollzeile 36", "Rotenturmstraße 20", "Spittelberggasse 10"], answer: "Mariahilfer Straße 81" },
    { question: "Wo liegt das Theater Akzent?", options: ["Theresianumgasse 18", "Lisztstraße 1", "Lothringerstraße 20", "Seilerstätte 25"], answer: "Theresianumgasse 18" },
    { question: "Wo liegt das Theater am Spittelberg?", options: ["Spittelberggasse 10", "Theresianumgasse 18", "Rabengasse 3", "Lenaugasse 1A"], answer: "Spittelberggasse 10" },

    // ==================== 16. UNIVERSITÄTEN ====================

    { question: "Wo liegt die Universität Wien?", options: ["Universitätsring 1", "Welthandelsplatz 1", "Karlsplatz 13", "Gregor-Mendel-Straße 33"], answer: "Universitätsring 1" },
    { question: "Wo liegt die Hochschule für angewandte Kunst?", options: ["Oskar-Kokoschka-Platz 2", "Schillerplatz 3", "Universitätsring 1", "Karlsplatz 13"], answer: "Oskar-Kokoschka-Platz 2" },
    { question: "Wo liegt die Akademie der bildenden Künste?", options: ["Schillerplatz 3", "Oskar-Kokoschka-Platz 2", "Universitätsring 1", "Lothringerstraße 20"], answer: "Schillerplatz 3" },
    { question: "Wo liegt die Hochschule für Musik und darstellende Kunst?", options: ["Lothringerstraße 20", "Schillerplatz 3", "Karlsplatz 13", "Universitätsring 1"], answer: "Lothringerstraße 20" },
    { question: "Wo liegt Tech Gate Vienna?", options: ["Donau-City-Straße 9", "Welthandelsplatz 1", "Veterinärplatz 1", "Karlsplatz 13"], answer: "Donau-City-Straße 9" },
    { question: "Wo liegt die Technische Universität Wien?", options: ["Karlsplatz 13", "Lothringerstraße 20", "Welthandelsplatz 1", "Universitätsring 1"], answer: "Karlsplatz 13" },
    { question: "Wo liegt die Wirtschaftsuniversität Wien (WU)?", options: ["Welthandelsplatz 1", "Donau-City-Straße 9", "Karlsplatz 13", "Gregor-Mendel-Straße 33"], answer: "Welthandelsplatz 1" },
    { question: "Wo liegt die Universität für Bodenkultur (BOKU)?", options: ["Gregor-Mendel-Straße 33", "Welthandelsplatz 1", "Veterinärplatz 1", "Karlsplatz 13"], answer: "Gregor-Mendel-Straße 33" },
    { question: "Wo liegt die Veterinärmedizinische Universität?", options: ["Veterinärplatz 1", "Gregor-Mendel-Straße 33", "Welthandelsplatz 1", "Donau-City-Straße 9"], answer: "Veterinärplatz 1" },
    { question: "Wo liegt die Pädagogische Hochschule Wien?", options: ["Grenzackerstraße 18", "Veterinärplatz 1", "Karlsplatz 13", "Gregor-Mendel-Straße 33"], answer: "Grenzackerstraße 18" },

    // ==================== 17. MUSEEN ====================

    { question: "Wo liegt die Albertina?", options: ["Albertinaplatz 1", "Stubenring 5", "Burgring 5", "Burgring 7"], answer: "Albertinaplatz 1" },
    { question: "Wo liegt das Museum für Angewandte Kunst (MAK)?", options: ["Stubenring 5", "Albertinaplatz 1", "Burgring 5", "Friedrichstraße 12"], answer: "Stubenring 5" },
    { question: "Wo liegt das Kunsthistorische Museum?", options: ["Burgring 5", "Burgring 7", "Albertinaplatz 1", "Stubenring 5"], answer: "Burgring 5" },
    { question: "Wo liegt das Naturhistorische Museum?", options: ["Burgring 7", "Burgring 5", "Albertinaplatz 1", "Friedrichstraße 12"], answer: "Burgring 7" },
    { question: "Wo liegt die Secession?", options: ["Friedrichstraße 12", "Burgring 5", "Albertinaplatz 1", "Stubenring 5"], answer: "Friedrichstraße 12" },
    { question: "Wo liegt das Weltmuseum Wien?", options: ["Neue Burg (Heldenplatz)", "Albertinaplatz 1", "Burgring 5", "Museumsplatz 1"], answer: "Neue Burg (Heldenplatz)" },
    { question: "Wo liegt das Sissi-Museum Wien?", options: ["Hofburg / Michaelerkuppel", "Neue Burg", "Albertinaplatz 1", "Burgring 7"], answer: "Hofburg / Michaelerkuppel" },
    { question: "Wo liegt die Kaisergruft (Kapuzinergruft)?", options: ["Tegetthoffstraße 2 / Neuer Markt", "Albertinaplatz 1", "Burgring 5", "Museumsplatz 1"], answer: "Tegetthoffstraße 2 / Neuer Markt" },
    { question: "Wo liegt das Heeresgeschichtliche Museum?", options: ["Arsenal – Objekt 1", "Museumsplatz 1", "Burgring 7", "Karlsplatz 8"], answer: "Arsenal – Objekt 1" },
    { question: "Wo liegt das KunstHaus Wien?", options: ["Untere Weißgerberstraße 13", "Karlsplatz 8", "Albertinaplatz 1", "Burgring 5"], answer: "Untere Weißgerberstraße 13" },
    { question: "Wo liegt das Historische Museum der Stadt Wien?", options: ["Karlsplatz 8", "Untere Weißgerberstraße 13", "Museumsplatz 1", "Burgring 7"], answer: "Karlsplatz 8" },
    { question: "Wo liegt das Museumsquartier?", options: ["Museumsplatz 1", "Burgring 5", "Karlsplatz 8", "Albertinaplatz 1"], answer: "Museumsplatz 1" },
    { question: "Wo liegt das Technische Museum?", options: ["Mariahilfer Straße 212", "Museumsplatz 1", "Karlsplatz 8", "Burgring 7"], answer: "Mariahilfer Straße 212" },

    // ==================== 18. SEHENSWÜRDIGKEITEN ====================

    { question: "Wo liegt die Hofburgkapelle?", options: ["Hofburg (Schweizerhof)", "Hofburg (Heldenplatz)", "Josefsplatz", "Michaelerplatz 1"], answer: "Hofburg (Schweizerhof)" },
    { question: "Wo liegt die Schatzkammer?", options: ["Hofburg (Schweizerhof)", "Hofburg (Heldenplatz)", "Josefsplatz", "Michaelerplatz 1"], answer: "Hofburg (Schweizerhof)" },
    { question: "Wo liegt das Kongresszentrum (Hofburg)?", options: ["Hofburg (Heldenplatz)", "Hofburg (Schweizerhof)", "Josefsplatz", "Michaelerplatz 1"], answer: "Hofburg (Heldenplatz)" },
    { question: "Wo liegt die Nationalbibliothek?", options: ["Josefsplatz", "Hofburg (Heldenplatz)", "Michaelerplatz 1", "Stephansplatz 3"], answer: "Josefsplatz" },
    { question: "Wo liegt die Spanische Hofreitschule?", options: ["Michaelerplatz 1", "Josefsplatz", "Petersplatz 1", "Stephansplatz 3"], answer: "Michaelerplatz 1" },
    { question: "Wo liegt das Prinz-Eugen-Denkmal?", options: ["Heldenplatz", "Josefsplatz", "Hoher Markt 10-11", "Stephansplatz 3"], answer: "Heldenplatz" },
    { question: "Wo liegt das Erzherzog-Karl-Denkmal?", options: ["Heldenplatz", "Josefsplatz", "Hoher Markt 10-11", "Petersplatz 1"], answer: "Heldenplatz" },
    { question: "Wo liegt die Kapuzinergruft?", options: ["Tegetthoffstraße 2 / Neuer Markt", "Stephansplatz 3", "Hoher Markt 10-11", "Petersplatz 1"], answer: "Tegetthoffstraße 2 / Neuer Markt" },
    { question: "Wo liegt die Anker-Uhr?", options: ["Hoher Markt 10-11", "Stephansplatz 3", "Petersplatz 1", "Riesenradplatz"], answer: "Hoher Markt 10-11" },
    { question: "Wo liegt der Stephansdom?", options: ["Stephansplatz 3", "Hoher Markt 10-11", "Petersplatz 1", "Karlsplatz"], answer: "Stephansplatz 3" },
    { question: "Wo liegt das Riesenrad?", options: ["Riesenradplatz", "Praterstern", "Praterstraße", "Helenengasse"], answer: "Riesenradplatz" },
    { question: "Wo liegt das Schloss Belvedere?", options: ["Prinz-Eugen-Straße 27", "Rennweg 12", "Landstraßer Hauptstraße", "Schwarzenbergplatz"], answer: "Prinz-Eugen-Straße 27" },
    { question: "Wo liegt das Hundertwasser-Haus?", options: ["Löwengasse / Kegelgasse 36", "Prinz-Eugen-Straße 27", "Berggasse 19", "Mariahilfer Straße 212"], answer: "Löwengasse / Kegelgasse 36" },
    { question: "Wo liegt das Haus des Meeres?", options: ["Fritz-Grünbaum-Platz 1", "Löwengasse 36", "Berggasse 19", "Schönbrunner Schloßstraße 47"], answer: "Fritz-Grünbaum-Platz 1" },
    { question: "Wo liegt das Sigmund-Freud-Museum?", options: ["Berggasse 19", "Fritz-Grünbaum-Platz 1", "Rooseveltplatz", "Schönbrunner Schloßstraße 47"], answer: "Berggasse 19" },
    { question: "Wo ist der Haupteingang von Schloss Schönbrunn?", options: ["Schönbrunner Schloßstraße 47", "Maxingstraße 13b", "Hohenbergstraße", "Schönbrunner Schloßstraße 38-40"], answer: "Schönbrunner Schloßstraße 47" },
    { question: "Wo liegt der Tiergarten Schönbrunn?", options: ["Maxingstraße 13b", "Schönbrunner Schloßstraße 47", "Hohenbergstraße", "Speisinger Straße 109"], answer: "Maxingstraße 13b" },
    { question: "Wo liegt die Gloriette (Schönbrunn)?", options: ["Hohenbergstraße (Parkeingang)", "Maxingstraße 13b", "Schönbrunner Schloßstraße 47", "Kreuzherrengasse 1"], answer: "Hohenbergstraße (Parkeingang)" },
    { question: "Wo liegt das Austria Center Vienna?", options: ["Bruno-Kreisky-Platz 1", "Wagramer Straße 5", "Donauturmstraße 8", "Donau-City-Straße 9"], answer: "Bruno-Kreisky-Platz 1" },
    { question: "Wo liegt der Donauturm?", options: ["Donauturmstraße 8", "Bruno-Kreisky-Platz 1", "Wagramer Straße 5", "Donau-City-Straße 9"], answer: "Donauturmstraße 8" },
    { question: "Wo liegt die UNO-City?", options: ["Wagramer Straße 5", "Bruno-Kreisky-Platz 1", "Donauturmstraße 8", "Donau-City-Straße 7"], answer: "Wagramer Straße 5" },
    { question: "Wo liegt die Roßauer Kaserne?", options: ["Türkenstraße 22", "Rooseveltplatz", "Kreuzherrengasse 1", "Petersplatz 1"], answer: "Türkenstraße 22" },
    { question: "Wo liegt die Karlskirche?", options: ["Kreuzherrengasse 1", "Rooseveltplatz", "Petersplatz 1", "Stephansplatz 3"], answer: "Kreuzherrengasse 1" },
    { question: "Wo liegt die Votivkirche?", options: ["Rooseveltplatz", "Kreuzherrengasse 1", "Türkenstraße 22", "Petersplatz 1"], answer: "Rooseveltplatz" },
    { question: "Wo liegt die Peterskirche?", options: ["Petersplatz 1", "Rooseveltplatz", "Hoher Markt 10-11", "Stephansplatz 3"], answer: "Petersplatz 1" },

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
