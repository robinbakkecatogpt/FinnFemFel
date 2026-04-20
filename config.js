/*
 * ===================================================
 *  KONFIGURATION - Redigera grupperna här!
 * ===================================================
 *
 *  För varje grupp/fel, fyll i:
 *    name        - Gruppnamn
 *    icon        - Emoji-ikon som visas i modalen
 *    description - Beskrivning (HTML tillåtet)
 *    photo       - Valfri grupbild (lägg i photos-mappen)
 *    x, y        - Position för klickzonen (i % av bildens bredd/höjd)
 *    width, height - Storlek på klickzonen (i % av bildens bredd/höjd)
 *    type        - "group" eller "quiz" (quiz visar rankingen)
 *
 *  TIPS: Använd "Visa hjälplinjer"-knappen i spelet för att se
 *        ett rutnät som hjälper dig placera klickzonerna!
 */

const CONFIG = {

    // Titel som visas högst upp
    title: "Finn 5 Fel — Control & Analys",

    // Underrubrik
    subtitle: "Klicka på de 5 skillnaderna i högerbilden!",

    // Välkomsttext (visas via "Om oss"-knappen)
    intro: {
        heading: "Välkommen till Control & Analys!",
        text: `Vi är avdelningen för Control & Analys på Agria Djurförsäkring. Här jobbar vi med allt från aktuariella beräkningar och prissättning till dataanalys, controlling och finansiell uppföljning.

Vi är 15 personer med bred kompetens som tillsammans säkerställer att Agria kan erbjuda rätt försäkringsskydd till rätt pris.

Lär känna oss genom att spela Finn 5 Fel!`
    },

    // Utvecklarläge: visa hjälplinjer- och klickzons-knappar (true/false)
    devMode: true,

    // Bilder (byt ut mot era riktiga bilder)
    originalImage: "Original.png",
    errorsImage: "Fel.png",

    // De 5 felen i bilden
    people: [
        {
            name: "Aktuarierna",
            icon: "📊",
            type: "group",
            description: `Våra aktuarier är hjärtat i vår riskbedömning. De beräknar premier, analyserar skadedata och säkerställer att Agria har rätt prissättning och reservering.`,
            members: [
                { name: "Jarl Sigurdsson", role: "Aktuarie", photo: "photos/jarl.jpg",
                  bio: "Arbetar som prissättningsaktuarie på Agria sedan januari 2022. Är för närvarande föräldraledig och tar hand om sina två killar fram till mitten av september" },
                { name: "Robin Bakke Cato", role: "Aktuarie", photo: "photos/robin.jpg",
                  bio: "Jag började på Agria i julas och jobbar med reservsättning. ⚔️ Utanför jobbet är jag intresserad av vikingar och nordisk mytologi. Extra intressant är att mycket i tv-serien Vikings faktiskt bygger på personer, händelser och berättelser från historien!" },
                { name: "Anna Backman", role: "Aktuarie", photo: "photos/anna.jpg",
                  bio: "Arbetar med prissättning av katt- och hundförsäkringar i Finland och tar fram datadrivna analyser kring lönsamhet, kundbeteende och tillväxt. 🎿 Tävlade i skidskytte som yngre och var uttagen till ungdoms-SM!" },
                { name: "Magnus Rosqvist Johansson", role: "Aktuarie", photo: "photos/magnus.jpg",
                  bio: "Arbetar med prissättning med fokus på Tyskland och Danmark, och jobbar även med den nya prismotorn." },
                { name: "Stephanie Bergström", role: "Aktuarie", photo: "photos/stephanie.jpg",
                  bio: "Prissättningsaktuarie som ansvarar för prissättning och lönsamhetsanalyser för Sverige och Norge. Tar fram analyser och modeller som hjälper affären sätta rätt pris för rätt segment. 🥋 Har precis börjat med karate, oväntat kul och mycket skratt!" },
                { name: "Veronicka Hjorter", role: "Functional Lead Pricing & Reserving", photo: "photos/veronicka.JPG",
                  bio: "Har arbetat på Agria sedan 2020 och samordnar arbetet inom prissättning och reservsättning. ⛰️ Dras mot högre höjder och i sommar ser jag fram emot att rulla nedför bergen i Dolomiterna!" }
            ],
            photo: "",
            x: 10, y: 35, width: 10, height: 10
        },
        {
            name: "Data & Analys",
            icon: "💡",
            type: "group",
            description: `Data & Analys-teamet förser hela organisationen med insikter och beslutsstöd. De bygger dashboards, analyserar trender och driver datadrivna beslut.`,
            members: [
                { name: "Stina Backerholm", role: "Dataanalytiker", photo: "photos/stina.jpg",
                  bio: "Jobbar som dataanalytiker med att ta ut data, bygga rapporter i SAS VA och göra analyser. 🧁 Bakar mycket och odlar grönsaker på balkongen." },
                { name: "Thomas Johansson", role: "Dataanalytiker", photo: "photos/thomas.jpg",
                  bio: "Extraherar och tillhandahåller data via GIPS-beställningar, automatiserar datauttag och driver robotisering (RPA) av månadsprocesser. Dokumenterar och granskar rapporter i SAS. 🏒 Gillar Leksand och streaming." },
                { name: "Fredrik Käll", role: "Dataanalytiker", photo: "photos/fredrik.jpg",
                  bio: "✏️ Lägg till text" },
                { name: "Malin Varenius", role: "Functional Lead Data & Analysis", photo: "photos/malin.jpg",
                  bio: "Functional Lead för Data & Analys — ser till att verksamhet, aktuarier och analytiker har tillförlitligt data till analyser och uppföljning. 🏃‍♀️ Har betat av halvmaraton i både Ibiza och Pula det senaste året!" }
            ],
            photo: "",
            x: 17, y: 78, width: 8, height: 8
        },
        {
            name: "Controllers",
            icon: "📋",
            type: "group",
            description: `Våra controllers ansvarar för finansiell uppföljning, budgetering och rapportering. De håller koll på siffrorna och ser till att allt stämmer.`,
            members: [
                { name: "Camilla Jansson", role: "Controller", photo: "photos/camilla.jpg",
                  bio: "✏️ Lägg till text" },
                { name: "Jonas Bjerre", role: "Business Controller", photo: "photos/jonas.jpg",
                  bio: "Arbetar som Business Controller. 🎵 På fritiden sjunger jag i kör och var med som fiskare i Franz von Suppés opera Bellman på Södra Teatern." },
                { name: "Daniel Gärde", role: "Controller", photo: "photos/daniel.jpg",
                  bio: "✏️ Lägg till text" }
            ],
            photo: "",
            x: 87, y: 30, width: 10, height: 5
        },
        {
            name: "Ledningsgruppen",
            icon: "🎯",
            type: "group",
            description: `Ledningsgruppen sätter riktningen för avdelningen och ser till att vi levererar värde till hela Agria.`,
            members: [
                { name: "Ulrika Nordin", role: "Head of Control & Analysis", photo: "photos/ulrika.jpg",
                  bio: "Leder gruppen Control & Analys och har jobbat på Agria sedan februari 2021. 🐱 Katter är absoluta favoritdjuret!" },
                { name: "Erik Landén", role: "CFO", photo: "photos/erik.jpg",
                  bio: "CFO på Agria som leder CFO-avdelningen, har jobbat här sedan 2023. 🥞 Specialkompetens: steka pannkakor – över 1 000 stycken per år!" }
            ],
            photo: "",
            x: 62, y: 50, width: 7, height: 7
        },
        {
            name: "Fun Fact",
            icon: "🌍",
            type: "quiz",
            description: "QUIZ_RANKING",
            photo: "",
            x: 80, y: 53, width: 7, height: 7
        }
    ]
};
