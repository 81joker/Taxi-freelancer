const questions = [
    { question: "Wo ist das Hotel Bristol?", options: ["Schottenring 24", "Kärntner Ring 1", "Kärntner Ring 16", "Hafnersteig 7"], answer: "Kärntner Ring 1" },
    { question: "Wo ist das Palais Hansen Kempinski?", options: ["Schottenring 24", "Kärntner Ring 16", "Philharmonikerstraße 4", "Kirchengasse 41"], answer: "Schottenring 24" },
    { question: "Wo ist das Hotel Imperial?", options: ["Coburgbastei 4", "Parkring 12", "Kärntner Ring 16", "Riemergasse 8"], answer: "Kärntner Ring 16" },
    { question: "Wo ist das Alma Boutique-Hotel?", options: ["Hafnersteig 7", "Hintschiggasse 1", "Wagramer Straße 83-85", "Wildpretmarkt 5"], answer: "Hafnersteig 7" },
    { question: "Wo ist das Hotel Sacher Wien?", options: ["Viriotgasse 5", "Neubaugürtel 34-36", "Philharmonikerstraße 4", "Währinger Straße 33"], answer: "Philharmonikerstraße 4" },
    { question: "Wo ist das Altstadt Vienna?", options: ["Rechte Wienzeile 93-95", "Kirchengasse 41", "Rennweg 16", "Webgasse 26"], answer: "Kirchengasse 41" },
    { question: "Wo ist das Palais Coburg?", options: ["Coburgbastei 4", "Savoyenstraße 2", "Kärntner Straße 18", "Hietzinger Hauptstraße 10-14"], answer: "Coburgbastei 4" },
    { question: "Wo ist das Am Parkring?", options: ["Hietzinger Hauptstraße 16", "Sonnwendgasse 8", "Parkring 12", "Lange Gasse 61"], answer: "Parkring 12" },
    { question: "Wo ist das Appartement-Hotel an der Riemergasse?", options: ["Stephansplatz 9", "Messestraße 2", "Riemergasse 8", "Mariahilfer Straße 15"], answer: "Riemergasse 8" },
    { question: "Wo ist das Arion Cityhotel Vienna?", options: ["Papagenogasse 6", "Hintschiggasse 1", "Schwedenplatz 3-4", "Landstraßer Hauptstraße 153-155"], answer: "Hintschiggasse 1" },
    { question: "Wo ist das ARCOTEL Donauzentrum?", options: ["Wagramer Straße 83-85", "Hietzinger Hauptstraße 134", "Trabrennstraße 4", "Rennweg 99"], answer: "Wagramer Straße 83-85" },
    { question: "Wo ist das Arthotel ANA Amadeus?", options: ["Opernring 11", "Wildpretmarkt 5", "Filmteichstraße 5", "Tiefer Graben 14-20"], answer: "Wildpretmarkt 5" },
    { question: "Wo ist das ARCOTEL Kaiserwasser?", options: ["Wiedner Hauptstraße 27-29", "Kleine Stadtgutgasse 4", "Wagramer Straße 8", "Landstraßer Hauptstraße 120"], answer: "Wagramer Straße 8" },
    { question: "Wo ist das Arthotel ANA Gala Vienna?", options: ["Neubaugürtel 26-28", "Viriotgasse 5", "Am Heumarkt 15", "Johann-Staud-Straße 32"], answer: "Viriotgasse 5" },
    { question: "Wo ist das ARCOTEL Wimberger?", options: ["Neubaugürtel 34-36", "Handelskai 269", "Dorotheergasse 3", "Margaretenstraße 53"], answer: "Neubaugürtel 34-36" },
    { question: "Wo ist das Atlanta?", options: ["Praterstraße 44-46", "Uraniastraße 2", "Währinger Straße 33", "Am Heumarkt 35-37"], answer: "Währinger Straße 33" },
    { question: "Wo ist das Austria Trend Hotel Ananas?", options: ["Rechte Wienzeile 93-95", "Hernalser Hauptstraße 187", "Boltzmanngasse 8", "Frankenberggasse 10"], answer: "Rechte Wienzeile 93-95" },
    { question: "Wo ist das Austria Trend Hotel Savoyen?", options: ["Favoritenstraße 12", "Weihburggasse 3", "Rennweg 16", "Josefsgasse 4-8"], answer: "Rennweg 16" },
    { question: "Wo ist das Austria Trend Hotel Anatol?", options: ["Schulerstraße 10", "Aspernbrückengasse 1", "Webgasse 26", "Rathausstraße 17"], answer: "Webgasse 26" },
    { question: "Wo ist das Austria Trend Schloss Wilhelminenberg?", options: ["Savoyenstraße 2", "Hasenauerstraße 12", "Rooseveltplatz 15", "Wiedner Gürtel 14"], answer: "Savoyenstraße 2" },
    { question: "Wo ist das Austria Trend Hotel Europa?", options: ["Singerstraße 3", "Lange Gasse 13", "Kärntner Straße 18", "Neustift am Walde 97-99"], answer: "Kärntner Straße 18" },
    { question: "Wo ist das Austria Trend Parkhotel Schönbrunn?", options: ["Getreidemarkt 5", "Petersplatz 9", "Hietzinger Hauptstraße 10-14", "Simmeringer Hauptstraße 55"], answer: "Hietzinger Hauptstraße 10-14" },
    { question: "Wo ist das Austria Trend Hotel Maximilian?", options: ["Rotensterngasse 10-12", "Taborstraße 12", "Hietzinger Hauptstraße 16", "Mariahilfer Straße 122"], answer: "Hietzinger Hauptstraße 16" },
    { question: "Wo ist das AZIMUT Hotel Vienna?", options: ["Große Stadtgutgasse 31", "Mautner-Markhof-Gasse 50-54", "Sonnwendgasse 8", "Kirchberggasse 6-8"], answer: "Sonnwendgasse 8" },
    { question: "Wo ist das Baronesse Boutique Hotel?", options: ["Sieveringer Straße 4", "Rudolfsplatz 11", "Lange Gasse 61", "Landstraßer Hauptstraße 28"], answer: "Lange Gasse 61" },
    { question: "Wo ist das Hotel Am Stephansplatz?", options: ["Stephansplatz 9", "Schützengasse 19", "Wallgasse 23", "Rennweg 12"], answer: "Stephansplatz 9" },
    { question: "Wo ist das Bassena Wien Messe?", options: ["Desider-Friedmann-Platz 2", "Hollandstraße 3", "Messestraße 2", "Wagramer Straße 21"], answer: "Messestraße 2" },
    { question: "Wo ist das Boutique Hotel Das Tyrol?", options: ["Felberstraße 4", "Mariahilfer Straße 15", "Rennweg 12a", "Fleischmarkt 1a"], answer: "Mariahilfer Straße 15" },
    { question: "Wo ist das Beethoven Wien?", options: ["Papagenogasse 6", "Mariahilfer Straße 32-34", "Mariahilfer Straße 78", "Canettistraße 6"], answer: "Papagenogasse 6" },
    { question: "Wo ist das Capricorno?", options: ["Schwedenplatz 3-4", "Habsburgergasse 5", "Schönbrunner Straße 41", "Schlossallee 8"], answer: "Schwedenplatz 3-4" },
    { question: "Wo ist das Best Western Plus Amedia?", options: ["Landstraßer Hauptstraße 153-155", "Annagasse 16", "Gudrunstraße 184", "Hernalser Hauptstraße 105"], answer: "Landstraßer Hauptstraße 153-155" },
    { question: "Wo ist das Club Hotel Cortina?", options: ["Linke Wienzeile 71", "Wagramer Straße 51", "Wiedner Hauptstraße 44", "Hietzinger Hauptstraße 134"], answer: "Hietzinger Hauptstraße 134" },
    { question: "Wo ist das Courtyard by Marriott Prater?", options: ["Trabrennstraße 4", "Harmoniegasse 5-7", "Josefstädter Straße 22", "Baumgasse 83"], answer: "Trabrennstraße 4" },
    { question: "Wo ist das Doppio Austria Trend?", options: ["Schottenring 11", "Johannesgasse 28", "Rennweg 99", "Robert-Stolz-Platz 1"], answer: "Rennweg 99" },
    { question: "Wo ist das Das Opernring Hotel?", options: ["Opernring 11", "Herrengasse 10", "Herrengasse 12", "Kärntner Straße 22"], answer: "Opernring 11" },
    { question: "Wo ist die Eitljörg Panoramaschenke?", options: ["Filmteichstraße 5", "Am Stadtpark 1", "Stephansplatz 12", "Schottenring 3"], answer: "Filmteichstraße 5" },
    { question: "Wo ist das Das Tigra?", options: ["Schubertring 5-7", "Kärntner Ring 8", "Tiefer Graben 14-20", "Wiedner Hauptstraße 27-29"], answer: "Tiefer Graben 14-20" },
    { question: "Wo ist das Erzherzog Rainer?", options: ["Wiedner Hauptstraße 27-29", "Kleine Stadtgutgasse 4", "Landstraßer Hauptstraße 120", "Neubaugürtel 26-28"], answer: "Wiedner Hauptstraße 27-29" },
    { question: "Wo ist der Wilhelmshof?", options: ["Kleine Stadtgutgasse 4", "Am Heumarkt 15", "Johann-Staud-Straße 32", "Handelskai 269"], answer: "Kleine Stadtgutgasse 4" },
    { question: "Wo ist das Eurostars Embassy?", options: ["Dorotheergasse 3", "Margaretenstraße 53", "Landstraßer Hauptstraße 120", "Praterstraße 44-46"], answer: "Landstraßer Hauptstraße 120" },
    { question: "Wo ist das Fleming's Conference Hotel?", options: ["Neubaugürtel 26-28", "Uraniastraße 2", "Am Heumarkt 35-37", "Hernalser Hauptstraße 187"], answer: "Neubaugürtel 26-28" },
    { question: "Wo sind die Hilight Suites?", options: ["Am Heumarkt 15", "Boltzmanngasse 8", "Frankenberggasse 10", "Favoritenstraße 12"], answer: "Am Heumarkt 15" },
    { question: "Wo ist das Gallitzinberg?", options: ["Weihburggasse 3", "Josefsgasse 4-8", "Johann-Staud-Straße 32", "Schulerstraße 10"], answer: "Johann-Staud-Straße 32" },
    { question: "Wo ist das Hilton Vienna Danube Waterfront?", options: ["Handelskai 269", "Aspernbrückengasse 1", "Rathausstraße 17", "Hasenauerstraße 12"], answer: "Handelskai 269" },
    { question: "Wo ist das Graben Hotel?", options: ["Dorotheergasse 3", "Rooseveltplatz 15", "Wiedner Gürtel 14", "Singerstraße 3"], answer: "Dorotheergasse 3" },
    { question: "Wo ist das Holiday Inn Vienna City?", options: ["Lange Gasse 13", "Neustift am Walde 97-99", "Margaretenstraße 53", "Getreidemarkt 5"], answer: "Margaretenstraße 53" },
    { question: "Wo ist das Henriette Stadthotel?", options: ["Petersplatz 9", "Simmeringer Hauptstraße 55", "Praterstraße 44-46", "Rotensterngasse 10-12"], answer: "Praterstraße 44-46" },
    { question: "Wo ist das Hotel Adagio Vienna City?", options: ["Uraniastraße 2", "Taborstraße 12", "Mariahilfer Straße 122", "Große Stadtgutgasse 31"], answer: "Uraniastraße 2" },
    { question: "Wo ist das Hotel Am Konzerthaus?", options: ["Mautner-Markhof-Gasse 50-54", "Kirchberggasse 6-8", "Am Heumarkt 35-37", "Sieveringer Straße 4"], answer: "Am Heumarkt 35-37" },
    { question: "Wo ist das Hotel Jäger?", options: ["Hernalser Hauptstraße 187", "Rudolfsplatz 11", "Landstraßer Hauptstraße 28", "Schützengasse 19"], answer: "Hernalser Hauptstraße 187" },
    { question: "Wo ist das Hotel Boltzmann?", options: ["Wallgasse 23", "Rennweg 12", "Boltzmanngasse 8", "Desider-Friedmann-Platz 2"], answer: "Boltzmanngasse 8" },
    { question: "Wo ist das Hotel Kaiserhof?", options: ["Hollandstraße 3", "Wagramer Straße 21", "Frankenberggasse 10", "Felberstraße 4"], answer: "Frankenberggasse 10" },
    { question: "Wo ist das Hotel Johann Strauss?", options: ["Favoritenstraße 12", "Rennweg 12a", "Fleischmarkt 1a", "Mariahilfer Straße 32-34"], answer: "Favoritenstraße 12" },
    { question: "Wo ist das Hotel Kaiserin Elisabeth?", options: ["Weihburggasse 3", "Mariahilfer Straße 78", "Canettistraße 6", "Habsburgergasse 5"], answer: "Weihburggasse 3" },
    { question: "Wo ist das Hotel Josefshof?", options: ["Josefsgasse 4-8", "Schönbrunner Straße 41", "Schlossallee 8", "Annagasse 16"], answer: "Josefsgasse 4-8" },
    { question: "Wo ist das Hotel König von Ungarn?", options: ["Schulerstraße 10", "Gudrunstraße 184", "Hernalser Hauptstraße 105", "Linke Wienzeile 71"], answer: "Schulerstraße 10" },
    { question: "Wo ist das Hotel Novotel Wien City?", options: ["Wagramer Straße 51", "Wiedner Hauptstraße 44", "Aspernbrückengasse 1", "Harmoniegasse 5-7"], answer: "Aspernbrückengasse 1" },
    { question: "Wo ist das Hotel Rathauspark?", options: ["Josefstädter Straße 22", "Baumgasse 83", "Rathausstraße 17", "Schottenring 11"], answer: "Rathausstraße 17" },
    { question: "Wo ist das Hotel Park-Villa?", options: ["Hasenauerstraße 12", "Johannesgasse 28", "Robert-Stolz-Platz 1", "Herrengasse 10"], answer: "Hasenauerstraße 12" },
    { question: "Wo ist das Hotel Regina?", options: ["Rooseveltplatz 15", "Herrengasse 12", "Kärntner Straße 22", "Am Stadtpark 1"], answer: "Rooseveltplatz 15" },
    { question: "Wo ist das Hotel Prinz Eugen?", options: ["Wiedner Gürtel 14", "Stephansplatz 12", "Schottenring 3", "Schubertring 5-7"], answer: "Wiedner Gürtel 14" },
    { question: "Wo ist das Hotel Royal?", options: ["Singerstraße 3", "Kärntner Ring 8", "Kärntner Ring 1", "Schottenring 24"], answer: "Singerstraße 3" },
    { question: "Wo ist das Hotel Rathaus Wein & Design?", options: ["Lange Gasse 13", "Kärntner Ring 16", "Hafnersteig 7", "Philharmonikerstraße 4"], answer: "Lange Gasse 13" },
    { question: "Wo ist das Hotel Schild?", options: ["Kirchengasse 41", "Coburgbastei 4", "Neustift am Walde 97-99", "Parkring 12"], answer: "Neustift am Walde 97-99" },
    { question: "Wo ist das Hotel Secession?", options: ["Getreidemarkt 5", "Riemergasse 8", "Hintschiggasse 1", "Wagramer Straße 83-85"], answer: "Getreidemarkt 5" },
    { question: "Wo ist das Hotel Wandl?", options: ["Petersplatz 9", "Wildpretmarkt 5", "Wagramer Straße 8", "Viriotgasse 5"], answer: "Petersplatz 9" },
    { question: "Wo ist das Hotel Simm's?", options: ["Simmeringer Hauptstraße 55", "Neubaugürtel 34-36", "Währinger Straße 33", "Rechte Wienzeile 93-95"], answer: "Simmeringer Hauptstraße 55" },
    { question: "Wo ist das Imlauer Hotel Wien?", options: ["Rotensterngasse 10-12", "Rennweg 16", "Webgasse 26", "Savoyenstraße 2"], answer: "Rotensterngasse 10-12" },
    { question: "Wo ist das Hotel Stefanie?", options: ["Taborstraße 12", "Kärntner Straße 18", "Hietzinger Hauptstraße 10-14", "Hietzinger Hauptstraße 16"], answer: "Taborstraße 12" },
    { question: "Wo ist das IntercityHotel Wien?", options: ["Mariahilfer Straße 122", "Sonnwendgasse 8", "Lange Gasse 61", "Stephansplatz 9"], answer: "Mariahilfer Straße 122" },
    { question: "Wo ist das Hotel Vienna?", options: ["Große Stadtgutgasse 31", "Messestraße 2", "Mariahilfer Straße 15", "Papagenogasse 6"], answer: "Große Stadtgutgasse 31" },
    { question: "Wo ist das JUFA Hotel Wien City?", options: ["Schwedenplatz 3-4", "Landstraßer Hauptstraße 153-155", "Mautner-Markhof-Gasse 50-54", "Hietzinger Hauptstraße 134"], answer: "Mautner-Markhof-Gasse 50-54" },
    { question: "Wo ist das K+K Hotel Maria Theresia?", options: ["Kirchberggasse 6-8", "Trabrennstraße 4", "Rennweg 99", "Opernring 11"], answer: "Kirchberggasse 6-8" },
    { question: "Wo ist das Livinghotel Kaiser Franz Joseph?", options: ["Sieveringer Straße 4", "Filmteichstraße 5", "Tiefer Graben 14-20", "Wiedner Hauptstraße 27-29"], answer: "Sieveringer Straße 4" },
    { question: "Wo ist das K+K Palais Hotel?", options: ["Rudolfsplatz 11", "Kleine Stadtgutgasse 4", "Landstraßer Hauptstraße 120", "Neubaugürtel 26-28"], answer: "Rudolfsplatz 11" },
    { question: "Wo ist das Mercure Grand Hotel Biedermeier?", options: ["Landstraßer Hauptstraße 28", "Am Heumarkt 15", "Johann-Staud-Straße 32", "Handelskai 269"], answer: "Landstraßer Hauptstraße 28" },
    { question: "Wo ist das La Scala Apartment Hotel?", options: ["Schützengasse 19", "Dorotheergasse 3", "Margaretenstraße 53", "Praterstraße 44-46"], answer: "Schützengasse 19" },
    { question: "Wo ist das Mercure Raphael Hotel?", options: ["Wallgasse 23", "Uraniastraße 2", "Am Heumarkt 35-37", "Hernalser Hauptstraße 187"], answer: "Wallgasse 23" },
    { question: "Wo ist das Lindner Hotel Am Belvedere?", options: ["Rennweg 12", "Boltzmanngasse 8", "Frankenberggasse 10", "Favoritenstraße 12"], answer: "Rennweg 12" },
    { question: "Wo ist das Mercure Vienna First?", options: ["Desider-Friedmann-Platz 2", "Weihburggasse 3", "Josefsgasse 4-8", "Schulerstraße 10"], answer: "Desider-Friedmann-Platz 2" },
    { question: "Wo ist das Mercure Wien City?", options: ["Hollandstraße 3", "Aspernbrückengasse 1", "Rathausstraße 17", "Hasenauerstraße 12"], answer: "Hollandstraße 3" },
    { question: "Wo ist das NH Danube City?", options: ["Wagramer Straße 21", "Rooseveltplatz 15", "Wiedner Gürtel 14", "Singerstraße 3"], answer: "Wagramer Straße 21" },
    { question: "Wo ist das Mercure Wien Westbahnhof?", options: ["Felberstraße 4", "Lange Gasse 13", "Neustift am Walde 97-99", "Getreidemarkt 5"], answer: "Felberstraße 4" },
    { question: "Wo ist das NH Wien Belvedere?", options: ["Rennweg 12a", "Petersplatz 9", "Simmeringer Hauptstraße 55", "Rotensterngasse 10-12"], answer: "Rennweg 12a" },
    { question: "Wo ist das Mercure Wien Zentrum?", options: ["Fleischmarkt 1a", "Taborstraße 12", "Mariahilfer Straße 122", "Große Stadtgutgasse 31"], answer: "Fleischmarkt 1a" },
    { question: "Wo ist das NH Wien City?", options: ["Mariahilfer Straße 32-34", "Mautner-Markhof-Gasse 50-54", "Kirchberggasse 6-8", "Sieveringer Straße 4"], answer: "Mariahilfer Straße 32-34" },
    { question: "Wo ist das NH Collection Wien Zentrum?", options: ["Mariahilfer Straße 78", "Rudolfsplatz 11", "Landstraßer Hauptstraße 28", "Schützengasse 19"], answer: "Mariahilfer Straße 78" },
    { question: "Wo ist das Novotel Wien Hauptbahnhof?", options: ["Canettistraße 6", "Wallgasse 23", "Rennweg 12", "Desider-Friedmann-Platz 2"], answer: "Canettistraße 6" },
    { question: "Wo ist das Pertschy Palais Hotel?", options: ["Habsburgergasse 5", "Hollandstraße 3", "Wagramer Straße 21", "Felberstraße 4"], answer: "Habsburgergasse 5" },
    { question: "Wo ist das Safestay Vienna?", options: ["Schönbrunner Straße 41", "Rennweg 12a", "Fleischmarkt 1a", "Mariahilfer Straße 32-34"], answer: "Schönbrunner Straße 41" },
    { question: "Wo ist das Radisson Blu Park Royal Palace?", options: ["Schlossallee 8", "Mariahilfer Straße 78", "Canettistraße 6", "Habsburgergasse 5"], answer: "Schlossallee 8" },
    { question: "Wo ist das Schlosshotel Römischer Kaiser?", options: ["Annagasse 16", "Schönbrunner Straße 41", "Schlossallee 8", "Gudrunstraße 184"], answer: "Annagasse 16" },
    { question: "Wo ist das Rainers Hotel Vienna?", options: ["Gudrunstraße 184", "Hernalser Hauptstraße 105", "Linke Wienzeile 71", "Wagramer Straße 51"], answer: "Gudrunstraße 184" },
    { question: "Wo ist das Senator Hotel Vienna?", options: ["Hernalser Hauptstraße 105", "Wiedner Hauptstraße 44", "Harmoniegasse 5-7", "Josefstädter Straße 22"], answer: "Hernalser Hauptstraße 105" },
    { question: "Wo ist das Renaissance Wien Hotel?", options: ["Linke Wienzeile 71", "Baumgasse 83", "Schottenring 11", "Johannesgasse 28"], answer: "Linke Wienzeile 71" },
    { question: "Wo ist das Strandhotel Alte Donau?", options: ["Wagramer Straße 51", "Robert-Stolz-Platz 1", "Herrengasse 10", "Herrengasse 12"], answer: "Wagramer Straße 51" },
    { question: "Wo ist das Suite-Hotel 900m zur Oper?", options: ["Wiedner Hauptstraße 44", "Kärntner Straße 22", "Am Stadtpark 1", "Stephansplatz 12"], answer: "Wiedner Hauptstraße 44" },
    { question: "Wo ist The Harmonie Vienna?", options: ["Harmoniegasse 5-7", "Schottenring 3", "Schubertring 5-7", "Kärntner Ring 8"], answer: "Harmoniegasse 5-7" },
    { question: "Wo ist das Theaterhotel Wien?", options: ["Josefstädter Straße 22", "Baumgasse 83", "Schottenring 11", "Johannesgasse 28"], answer: "Josefstädter Straße 22" },
    { question: "Wo ist das Vienna Sporthotel?", options: ["Baumgasse 83", "Robert-Stolz-Platz 1", "Herrengasse 10", "Herrengasse 12"], answer: "Baumgasse 83" },
    { question: "Wo ist das Hilton Vienna Plaza?", options: ["Schottenring 11", "Kärntner Straße 22", "Am Stadtpark 1", "Stephansplatz 12"], answer: "Schottenring 11" },
    { question: "Wo ist das InterContinental Wien?", options: ["Johannesgasse 28", "Schottenring 3", "Schubertring 5-7", "Kärntner Ring 8"], answer: "Johannesgasse 28" },
    { question: "Wo ist das Le Meridien Wien?", options: ["Robert-Stolz-Platz 1", "Herrengasse 10", "Herrengasse 12", "Kärntner Straße 22"], answer: "Robert-Stolz-Platz 1" },
    { question: "Wo ist das Steigenberger Hotel Herrenhof?", options: ["Herrengasse 10", "Am Stadtpark 1", "Stephansplatz 12", "Schottenring 3"], answer: "Herrengasse 10" },
    { question: "Wo ist das Radisson Blu Style Hotel?", options: ["Herrengasse 12", "Schubertring 5-7", "Kärntner Ring 8", "Kärntner Ring 1"], answer: "Herrengasse 12" },
    { question: "Wo ist das Hotel Ambassador?", options: ["Kärntner Straße 22", "Schottenring 24", "Kärntner Ring 16", "Hafnersteig 7"], answer: "Kärntner Straße 22" },
    { question: "Wo ist das Hilton Vienna Park?", options: ["Am Stadtpark 1", "Philharmonikerstraße 4", "Kirchengasse 41", "Coburgbastei 4"], answer: "Am Stadtpark 1" },
    { question: "Wo ist das DO & CO Hotel Vienna?", options: ["Stephansplatz 12", "Parkring 12", "Riemergasse 8", "Hintschiggasse 1"], answer: "Stephansplatz 12" },
    { question: "Wo ist das Hotel de France?", options: ["Schottenring 3", "Wagramer Straße 83-85", "Wildpretmarkt 5", "Viriotgasse 5"], answer: "Schottenring 3" },
    { question: "Wo ist The Ritz-Carlton Vienna?", options: ["Schubertring 5-7", "Neubaugürtel 34-36", "Währinger Straße 33", "Rechte Wienzeile 93-95"], answer: "Schubertring 5-7" },
    { question: "Wo ist das Relais & Châteaux Hotel The Ring?", options: ["Kärntner Ring 8", "Rennweg 16", "Webgasse 26", "Savoyenstraße 2"], answer: "Kärntner Ring 8" }
];



// عدد الأسئلة الكلي
const totalQuestions = questions.length;

// نسخ الأسئلة حتى لا تتكرر
let remainingQuestions = [...questions];
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

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const currentQuestion = remainingQuestions.splice(randomIndex, 1)[0];

    questionEl.textContent = `(${answered + 1} / ${totalQuestions}) ${currentQuestion.question}`;

    currentQuestion.options.forEach(option => {
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
