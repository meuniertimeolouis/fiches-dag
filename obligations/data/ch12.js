/* Chapitre 12 — Introduction au droit de la responsabilité civile délictuelle
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 12,
  intro: "Le **délit**, fait matériel illicite, est une source d'obligations : il oblige son auteur à réparer le dommage causé à la victime ([[1240]] et s., anc. art. 1382 s.). Avant d'étudier les faits générateurs, il faut **situer** cette responsabilité : face à la responsabilité **pénale** (fonctions opposées, procédures liées), face à la responsabilité **contractuelle** (principe du **non-cumul**), et dans son **histoire** : un Code de 1804 fondé sur la faute, une jurisprudence qui a créé des responsabilités sans faute, une réforme d'ensemble toujours en attente.",
  sections: [
    {
      titre: "Responsabilité civile et responsabilité pénale",
      contenu: [
        { p: "Un même fait (un coup volontaire, un accident de la route) peut engager à la fois la **responsabilité pénale** de son auteur et sa **responsabilité civile**. La responsabilité **morale**, qui a longtemps inspiré le droit civil, n'est pas juridique : elle s'en est aujourd'hui complètement détachée." },
        { schema: { type: "tableau", titre: "Deux responsabilités, deux logiques", colonnes: ["", "Responsabilité pénale", "Responsabilité civile"], lignes: [
          ["Fonction principale", "**Punir** le coupable et corriger son comportement", "**Indemniser** la victime"],
          ["Fonctions secondaires", "Protection de la société, dissuasion", "**Sanction** (la dette pèse sur le patrimoine du responsable) et **prévention** (inciter à la vigilance)"],
          ["Ce qui est prononcé", "Une peine (amende, emprisonnement)", "Des dommages et intérêts ou une réparation en nature"],
          ["Qui agit ?", "Le ministère public (action publique)", "La victime (action en réparation)"],
          ["Mesure", "Gravité de la faute et personnalité de l'auteur", "Importance du **préjudice**, quelle que soit la gravité de la faute"]
        ] } },
        { attention: "Une nuance récente : la loi du 30 avril 2025 a créé l'art. [[1254]], qui permet au juge, **à la demande du ministère public** (ou du Gouvernement devant le juge administratif), de condamner un professionnel auteur d'une **faute lucrative** (faute délibérée commise pour obtenir un gain ou une économie indus, ayant causé des dommages à plusieurs personnes placées dans une situation similaire) à une **sanction civile**. Son produit est versé à un **fonds** finançant les actions de groupe, et non à la victime ; elle est plafonnée (double du profit pour une personne physique, quintuple pour une personne morale) et **non assurable**. C'est un renforcement de la fonction de sanction, pas une indemnisation." },
        { h: "Les points de rapprochement" },
        { liste: [
          "**L'action civile** : la victime d'une infraction peut demander réparation soit au juge civil, soit au juge pénal, en même temps que l'action publique (C. proc. pén., art. 3). Condition : avoir **personnellement** souffert d'un dommage **directement** causé par l'infraction (C. proc. pén., art. 2).",
          "**L'autorité de la chose jugée au pénal sur le civil** : ce que le juge pénal a nécessairement et certainement décidé (existence des faits, culpabilité) s'impose au juge civil. Condamné pour coups volontaires, l'auteur ne peut plus contester sa faute devant le juge civil.",
          "**La fin de l'identité des fautes d'imprudence** : jusqu'en 2000, une relaxe pour blessures involontaires interdisait de retenir une faute civile d'imprudence. Depuis la loi du 10 juillet 2000, l'absence de faute pénale non intentionnelle ne fait pas obstacle à une action civile fondée sur la faute d'imprudence ou de négligence (C. proc. pén., art. 4-1 ; [[1241]])."
        ] }
      ]
    },
    {
      titre: "Responsabilité contractuelle et responsabilité délictuelle",
      contenu: [
        { p: "Le Code civil organise **deux ordres** de responsabilité. La responsabilité **contractuelle** répare le dommage causé par l'inexécution d'un contrat ([[1231-1]] et s.). La responsabilité **délictuelle** (ou extracontractuelle) s'applique quand aucun lien contractuel n'unit la victime et le responsable, ou quand l'obligation violée a une **source légale** ([[1240]] et s. ; [[1100-2]] ; Civ. 3e, 16 mars 2005). La responsabilité délictuelle est ainsi fondée sur la violation d'un devoir de conduite, la responsabilité contractuelle sur celle d'une obligation née du contrat." },
        { def: { terme: "Conditions de la responsabilité contractuelle", texte: "1) un **contrat valable** ; 2) conclu **entre le responsable et la victime** ; 3) un dommage causé par l'**inexécution d'une obligation née de ce contrat**. Si l'une manque, on bascule sur le terrain **délictuel**." } },
        { schema: { type: "arbre", titre: "Quel fondement pour l'action en réparation ?", racine: { t: "Un dommage est survenu", enfants: [
          { t: "Un régime spécial indifférent au contrat s'applique-t-il ?", d: "accident de la circulation ([[L85-1]]), produit défectueux ([[1245]]), accident médical (CSP, art. L. 1142-1 s.) : on applique ce régime, contrat ou pas" },
          { t: "Pas de contrat valable entre la victime et le responsable", d: "responsabilité **délictuelle** : tiers, pourparlers ([[1112]]), dol sanctionné par des dommages et intérêts ([[1178]], al. 4), contrat annulé", enfants: [
            { t: "Tiers victime d'un manquement contractuel", d: "délictuel, mais il peut invoquer le manquement (Ass. plén., 6 oct. 2006, Boot shop), en se voyant opposer les limites du contrat (Com., 3 juill. 2024)" }
          ] },
          { t: "Un contrat existe, mais le dommage est étranger à son exécution", d: "responsabilité **délictuelle** (le salarié qui trébuche sur le panier de son employeur au supermarché)" },
          { t: "Un contrat existe et le dommage naît de son inexécution", d: "responsabilité **contractuelle** exclusivement : non-cumul" }
        ] } } },
        { h: "Des cas de qualification délicate" },
        { liste: [
          "**Client blessé dans un magasin à entrée libre** : pas d'obligation de sécurité de résultat : la victime agit sur le terrain **délictuel**, notamment le fait des choses, en prouvant l'anormalité de la chose inerte (Civ. 1re, 9 sept. 2020, n° 19-11.882 ; Civ. 1re, 24 nov. 2021, n° 21-11.098). De même, l'exploitant d'un parking répond délictuellement de la chute d'un usager non contractant (Civ. 2e, 21 déc. 2023, n° 21-22.239).",
          "**Aide bénévole** (coup de main pour un déménagement) : la jurisprudence y voit souvent une **convention d'assistance bénévole**, donc une responsabilité contractuelle.",
          "**Service de pure complaisance** (un inconnu qui prend une photo avec votre téléphone) : pas de véritable contrat, responsabilité délictuelle.",
          "**Victime par ricochet** d'un manquement contractuel (le parent d'un élève blessé pendant un cours de ski) : elle est **tiers** au contrat, donc sur le terrain délictuel pour ses **propres** préjudices."
        ] },
        { h: "Le principe du non-cumul" },
        { def: { terme: "Non-cumul (ou non-option)", texte: "règle jurisprudentielle, plus exactement principe de **non-choix** des responsabilités (Civ., 11 janv. 1922) : quand les conditions de la responsabilité contractuelle sont réunies, la victime **ne peut pas choisir** le terrain délictuel, même s'il lui est plus favorable, et le juge doit appliquer le seul régime contractuel. Inversement, sans contrat, la responsabilité ne peut être que délictuelle." } },
        { p: "Justification : la **volonté des parties** fixe en grande partie l'étendue de la réparation en matière contractuelle (clauses limitatives, prévisibilité) ; permettre à la victime de passer sur le terrain délictuel ruinerait ces prévisions. En matière délictuelle, la source et la mesure de l'obligation sont dans la **loi**." },
        { schema: { type: "tableau", titre: "Pourquoi la qualification compte : différences de régime", colonnes: ["Question", "Contractuel", "Délictuel"], lignes: [
          ["Dommage réparable", "Seulement le dommage **prévisible** lors de la conclusion, sauf faute lourde ou dolosive ([[1231-3]])", "**Tout** le dommage (réparation intégrale)"],
          ["Mise en demeure", "En principe préalable aux dommages et intérêts ([[1231]])", "Inutile"],
          ["Clauses limitatives ou exonératoires", "Valables en principe (limites : [[1170]], faute lourde ou dolosive, droit de la consommation)", "**Nulles** en matière de responsabilité pour faute (v. chapitre 13)"],
          ["Pluralité de responsables", "La solidarité ne se présume pas ([[1310]])", "Condamnation *in solidum* des coauteurs"],
          ["Prescription", "5 ans ([[2224]]) ; 10 ans en cas de dommage corporel ([[2226]])", "Mêmes délais : la distinction a peu d'enjeu ici"]
        ] } },
        { h: "Les atteintes au non-cumul" },
        { liste: [
          "**Refus de censurer l'erreur de qualification** : la Cour de cassation ne casse pas quand le régime contractuel ou délictuel aboutit exactement au même résultat pratique (Civ. 1re, 4 janv. 1995).",
          "**Le juge pénal** : saisi d'une action civile, il applique toujours les règles **délictuelles**, même si l'auteur et la victime sont liés par un contrat (Crim., 15 juin 1923, solution constante, sans justification textuelle). La doctrine civiliste critique ce particularisme.",
          "**Les lois spéciales** : le législateur applique un régime unique aux contractants et aux tiers. Loi Badinter du 5 juillet 1985 (victimes « même lorsqu'elles sont transportées en vertu d'un contrat », [[L85-1]]) ; produits défectueux (producteur responsable « qu'il soit ou non lié par un contrat avec la victime », [[1245]]) ; accidents médicaux."
        ] },
        { attention: "La proposition de loi sénatoriale du 29 juillet 2020 conservait le non-cumul mais prévoyait deux exceptions : un **droit d'option** pour la victime d'un **dommage corporel** (art. 1233, al. 2, proposé) et une action **contractuelle** du tiers ayant un intérêt légitime à la bonne exécution du contrat et dépourvu d'autre action, avec opposabilité des conditions et limites du contrat (art. 1234, al. 2, proposé). Ce texte n'a pas été adopté : ce n'est **pas** du droit positif." }
      ]
    },
    {
      titre: "L'évolution du droit de la responsabilité délictuelle",
      contenu: [
        { h: "Jusqu'aux années 1880 : une responsabilité morale fondée sur la faute" },
        { p: "Le Code de 1804 consacrait **cinq articles** à la matière (art. 1382 à 1386 anc.). Deux idées, héritées de **Domat** : un **principe général** de responsabilité du fait personnel, conçu comme une règle de droit naturel ; un lien fort avec la **morale**, d'où une responsabilité fondée sur la **faute**, qui sanctionne autant qu'elle répare." },
        { h: "Après 1880 : l'essor des responsabilités sans faute" },
        { p: "La révolution industrielle multiplie les accidents (machines, transports) dont les victimes ne peuvent pas prouver de faute. La jurisprudence réinterprète alors les textes : **responsabilités sans faute** (fait des choses), **promotion** de la responsabilité du fait d'autrui, puis **objectivation** de la faute elle-même. À partir des années 1980, le **législateur** prend le relais par des régimes spéciaux d'indemnisation. Ce mouvement a été rendu possible par l'**assurance de responsabilité**, qui garantit la solvabilité du responsable et a encouragé la hausse des indemnités. Lecture classique du mouvement : on passe d'une « dette de responsabilité » centrée sur le responsable à une « créance d'indemnisation » centrée sur la victime (Lambert-Faivre, RTD civ. 1987), l'arrêt Teffaine marquant le début de cette objectivation." },
        { schema: { type: "frise", titre: "Les grandes étapes", evenements: [
          { date: "1804", t: "Code civil", d: "art. 1382 à 1386 : responsabilité fondée sur la faute" },
          { date: "16 juin 1896", t: "Civ., Teffaine", d: "découverte d'une responsabilité du fait des choses dans l'art. 1384, al. 1er (auj. [[1242]], al. 1er)" },
          { date: "13 févr. 1930", t: "Ch. réunies, Jand'heur", d: "présomption de responsabilité du gardien, qui ne s'exonère pas en prouvant son absence de faute" },
          { date: "3 janv. 1968", t: "Loi sur les incapables majeurs", d: "l'auteur d'un dommage sous l'empire d'un trouble mental doit réparation (auj. [[414-3]])" },
          { date: "9 mai 1984", t: "Ass. plén., Derguini et Lemaire", d: "faute objective : le discernement n'est plus exigé" },
          { date: "5 juill. 1985", t: "Loi Badinter", d: "indemnisation des victimes d'accidents de la circulation" },
          { date: "29 mars 1991", t: "Ass. plén., Blieck", d: "responsabilité du fait d'autrui admise sur l'art. 1384, al. 1er, hors des cas énumérés par le Code (association chargée d'organiser et de contrôler le mode de vie d'une personne handicapée)" },
          { date: "10 févr. 2016", t: "Ordonnance de réforme", d: "simple **renumérotation** : 1382 devient [[1240]], 1383 devient [[1241]], 1384 devient [[1242]]" },
          { date: "15 avr. 2024", t: "Loi sur les troubles anormaux de voisinage", d: "codification à l'art. [[1253]]" },
          { date: "30 avr. 2025", t: "Loi créant la sanction civile", d: "sanction de la faute lucrative (art. [[1254]])" }
        ] } },
        { h: "Les fondements de la responsabilité : le débat doctrinal" },
        { schema: { type: "tableau", titre: "Pourquoi répondre d'un dommage sans faute ?", colonnes: ["Théorie", "Auteurs", "Idée", "Critiques / postérité"], lignes: [
          ["**Faute**", "Code de 1804, Domat", "On répare parce qu'on a mal agi", "Laisse sans indemnisation les victimes d'accidents anonymes"],
          ["**Risque**", "Saleilles, Josserand (fin du XIXe s.)", "Celui qui crée un risque pour autrui, ou en tire profit, en assume les dommages, même sans faute", "Planiol : elle condamnerait à l'immobilité et serait inéquitable. Mais elle imprègne le fait des choses et la responsabilité du commettant"],
          ["**Garantie**", "Starck (thèse, 1947)", "Se placer du côté de la **victime** : certains droits (intégrité physique, biens) doivent être garantis ; la faute reste exigée pour les dommages purement économiques ou moraux", "Imprécise ; ne dit pas qui paie. Influence sur la loi Badinter (régime distinct selon le type de dommage)"],
          ["**Renouveau des fonctions**", "Doctrine contemporaine", "Rendre à la responsabilité un rôle de **peine privée** (faute lucrative) et de **prévention** (précaution, environnement)", "La prévention heurte l'exigence d'un préjudice certain ; le droit pénal (mise en danger d'autrui) semble mieux armé. Consécration partielle : art. [[1254]]"]
        ] } }
      ]
    },
    {
      titre: "Les perspectives de réforme",
      contenu: [
        { p: "Le décalage est flagrant : les articles de base n'ont presque pas bougé depuis 1804, alors que l'essentiel du droit positif est **jurisprudentiel**. Une réforme doit rendre la matière **lisible** en codifiant le droit vivant, et trancher quelques questions de fond." },
        { schema: { type: "etapes", titre: "Une réforme annoncée, jamais aboutie", etapes: [
          { t: "Avant-projet Catala (2005)", d: "volet responsabilité civile de la réforme du droit des obligations" },
          { t: "Rapport du Sénat (2009)", d: "groupe de travail de la commission des lois : « évolutions nécessaires »" },
          { t: "Projet Terré (2011)", d: "« Pour une réforme du droit de la responsabilité civile », plus audacieux" },
          { t: "Ordonnance du 10 février 2016", d: "réforme les contrats, le régime général et la preuve ; pour la responsabilité délictuelle, simple renumérotation" },
          { t: "Projets de la Chancellerie (avril 2016, mars 2017)", d: "enlisés dans les arbitrages ministériels" },
          { t: "Proposition de loi sénatoriale (29 juillet 2020)", d: "ambition réduite aux « axes les plus consensuels » ; restée sans suite" }
        ] } },
        { liste: [
          "Pistes récurrentes : **exceptions au non-cumul** (dommage corporel), **statut protecteur du dommage corporel**, **amende civile** ou dommages et intérêts punitifs, validité encadrée des clauses limitatives en matière délictuelle.",
          "Au 29 septembre 2026, la réforme d'ensemble n'est **pas adoptée** ; seules des retouches ponctuelles ont été faites ([[1253]] en 2024, [[1254]] en 2025).",
          "La directive (UE) 2024/2853 sur les produits défectueux doit être transposée au plus tard le 9 décembre 2026 : le Code civil ([[1245]] et s.) n'est pas encore modifié."
        ] },
        { attention: "En copie, citez un article de projet comme une **proposition**, jamais comme du droit en vigueur (« la proposition sénatoriale de 2020 prévoyait… »)." }
      ]
    }
  ],
  retenir: [
    "Délit = fait matériel illicite source d'une obligation de réparer ([[1240]] s., anc. 1382 s.).",
    "Responsabilité pénale : punir ; responsabilité civile : indemniser (sanction et prévention secondaires, renforcées par la sanction civile de [[1254]]).",
    "Action civile devant le juge pénal (C. proc. pén., art. 2 et 3) ; autorité du pénal sur le civil ; depuis la loi du 10 juillet 2000, relaxe pour faute non intentionnelle ≠ absence de faute civile (C. proc. pén., art. 4-1).",
    "Contractuelle si : contrat valable + entre responsable et victime + dommage né de l'inexécution. Sinon délictuelle.",
    "Non-cumul = non-option (Civ., 11 janv. 1922) ; exceptions : juge pénal, lois spéciales ([[L85-1]], [[1245]]).",
    "Évolution : faute (1804) → risque, fait des choses (Teffaine 1896, Jand'heur 1930) → faute objective (1984) → lois d'indemnisation (1985).",
    "Réforme : Catala, Terré, projets 2016-2017, proposition sénatoriale 2020, aucune adoptée."
  ],
  articles: ["414-3", "1100-2", "1112", "1170", "1178", "1231", "1231-1", "1231-3", "1240", "1241", "1242", "1245", "1253", "1254", "1310", "2224", "2226", "L85-1"],
  regimes: ["nature-responsabilite"],
  cas: ["ch12-salle-escalade"],
  quiz: [
    { q: "Quelle est la fonction principale de la responsabilité civile ?", choix: ["Punir l'auteur du dommage", "Indemniser la victime", "Prévenir les risques"], bonne: 1, expl: "Sanction et prévention existent, mais restent secondaires par rapport à l'indemnisation." },
    { q: "Le principe du non-cumul signifie que :", choix: ["La victime ne peut pas choisir le terrain délictuel quand les conditions de la responsabilité contractuelle sont réunies", "La victime ne peut pas percevoir deux indemnités", "Le juge ne peut pas condamner deux responsables"], bonne: 0, expl: "C'est une règle de **non-option** (Civ., 11 janv. 1922)." },
    { q: "Un salarié se blesse, un dimanche, en trébuchant sur le chariot de son employeur au supermarché. Fondement de son action contre l'employeur ?", choix: ["Contractuel, car ils sont liés par un contrat de travail", "Délictuel, car le dommage est étranger à l'exécution du contrat", "Aucun, faute de texte"], bonne: 1, expl: "La responsabilité contractuelle suppose un dommage né de l'inexécution d'une obligation du contrat." },
    { q: "Un passager blessé dans un accident de car, transporté en vertu d'un contrat, agit contre le transporteur sur le fondement :", choix: ["De la responsabilité contractuelle", "De [[1240]]", "De la loi du 5 juillet 1985"], bonne: 2, expl: "[[L85-1]] : la loi s'applique même aux victimes transportées en vertu d'un contrat. Exception légale au non-cumul." },
    { q: "Constitué partie civile devant le tribunal correctionnel contre son cocontractant, la victime verra sa demande jugée selon :", choix: ["Les règles délictuelles", "Les règles contractuelles", "Les règles de son choix"], bonne: 0, expl: "Jurisprudence constante de la chambre criminelle, critiquée par la doctrine." },
    { q: "Un conducteur est relaxé du délit de blessures involontaires faute de faute pénale non intentionnelle. Le juge civil :", choix: ["Est lié : aucune faute ne peut être retenue", "Peut retenir une faute civile d'imprudence", "Doit surseoir à statuer indéfiniment"], bonne: 1, expl: "C. proc. pén., art. 4-1 (loi du 10 juill. 2000) : fin de l'identité des fautes civile et pénale d'imprudence." },
    { q: "Selon Starck (1947), la responsabilité se fonde sur :", choix: ["Le risque créé par l'activité", "La faute du responsable", "La garantie des droits essentiels de la victime"], bonne: 2, expl: "Théorie de la garantie : raisonner du côté de la victime." },
    { q: "La sanction civile de l'art. [[1254]] (loi du 30 avril 2025) :", choix: ["Est versée à la victime en plus de son indemnité", "Est versée à un fonds de financement des actions de groupe", "Est couverte par l'assurance de responsabilité"], bonne: 1, expl: "Prononcée à la demande du ministère public (ou du Gouvernement), plafonnée, non assurable." },
    { q: "L'ordonnance du 10 février 2016 a, pour la responsabilité délictuelle :", choix: ["Renuméroté les articles sans les modifier sur le fond", "Consacré le droit d'option en cas de dommage corporel", "Validé les clauses limitatives de responsabilité délictuelle"], bonne: 0, expl: "1382 devient [[1240]], 1383 devient [[1241]], etc. Le fond reste inchangé." }
  ]
});

OBL.regimes.push({
  id: "nature-responsabilite",
  chapitre: "Introduction à la responsabilité délictuelle",
  titre: "Qualifier la responsabilité : contractuelle ou délictuelle ?",
  fondement: ["1231-1", "1240", "L85-1", "1245"],
  resume: "Grille à appliquer avant toute autre analyse dans un cas pratique de responsabilité : elle détermine les textes applicables et interdit à la victime de choisir (non-cumul).",
  conditions: [
    { nom: "Un régime spécial indifférent au contrat", question: "Le dommage relève-t-il d'un régime légal qui s'applique aux contractants comme aux tiers ?", detail: "Accident de la circulation impliquant un véhicule terrestre à moteur ([[L85-1]]), produit défectueux ([[1245]]), accident médical (CSP, art. L. 1142-1 s.). Si oui, la question contractuel/délictuel perd son intérêt.", piege: "Faire jouer le contrat de transport contre la loi Badinter." },
    { nom: "Un contrat valable", question: "Existe-t-il un contrat valablement formé ?", detail: "Pas de contrat pendant les **pourparlers** ([[1112]]) ; après annulation, le contrat est censé n'avoir jamais existé et la réparation relève du droit commun extracontractuel ([[1178]], al. 4). Un simple service de complaisance n'est pas un contrat ; l'aide bénévole peut en revanche être une convention d'assistance.", piege: "Qualifier de contractuelle la faute commise pendant la formation du contrat (dol, rupture des pourparlers)." },
    { nom: "Entre le responsable et la victime", question: "La victime est-elle elle-même partie au contrat conclu avec le responsable ?", detail: "Le tiers (victime par ricochet, tiers lésé par une inexécution) agit sur le terrain **délictuel**, mais peut invoquer le manquement contractuel (Ass. plén., 6 oct. 2006) et se voir opposer les limites du contrat (Com., 3 juill. 2024, n° 21-14.947). Exception : les chaînes de contrats translatives de propriété (action contractuelle).", preuve: "La victime prouve le contrat et sa qualité de partie." },
    { nom: "Un dommage né de l'inexécution", question: "Le dommage résulte-t-il de l'inexécution d'une obligation née de ce contrat ?", detail: "Si le dommage survient à l'occasion d'une relation contractuelle mais hors de son exécution (salarié blessé au supermarché), ou si l'obligation violée est d'origine légale, la responsabilité est délictuelle.", piege: "Conclure « contractuel » dès qu'un contrat existe entre les parties." }
  ],
  exonerations: [],
  copie: [
    "Toujours commencer par la qualification : « Il convient de déterminer la nature de la responsabilité applicable. »",
    "Si les trois conditions sont réunies : responsabilité contractuelle exclusivement, en vertu du principe de non-cumul (Civ., 11 janv. 1922). Sinon : [[1240]] et suivants.",
    "Devant le juge pénal : règles délictuelles, même entre cocontractants."
  ]
});

OBL.cas.push({
  id: "ch12-salle-escalade",
  titre: "Chute à la salle d'escalade",
  seance: "Chapitre 12",
  regimes: ["nature-responsabilite"],
  faits: "Hugo, 24 ans, est abonné depuis janvier 2026 à la salle d'escalade « Vertical 42 », exploitée par une SARL. Le 14 mars 2026, lors d'un cours collectif compris dans son abonnement, le moniteur salarié de la salle assure mal la corde : Hugo chute de six mètres et se fracture le bassin. Le même soir, Inès, sa compagne, venue le chercher, glisse sur le sol fraîchement lavé du hall d'accueil, ouvert à tous et non signalé, et se foule la cheville. La mère d'Hugo, bouleversée, souhaite obtenir réparation de son préjudice d'affection. Le parquet poursuit le moniteur pour blessures involontaires. Hugo, qui estime le régime délictuel « plus avantageux », voudrait agir contre la SARL sur le fondement de l'article 1240 du Code civil. Il se demande aussi ce qui se passera si le moniteur est relaxé.",
  question: "Sur quel fondement chacune des victimes doit-elle agir ? Hugo peut-il choisir le terrain délictuel ? Une relaxe du moniteur empêcherait-elle toute indemnisation ?",
  corrige: {
    qualification: "Trois victimes : Hugo, cocontractant de la SARL, blessé pendant l'exécution du contrat ; Inès, sans contrat, blessée dans une partie du local ouverte au public ; la mère d'Hugo, victime par ricochet, tiers au contrat. Une procédure pénale pour blessures involontaires est engagée contre le préposé.",
    probleme: "Selon quels critères détermine-t-on la nature, contractuelle ou délictuelle, de la responsabilité, et la victime peut-elle opter entre les deux ? Quelle est l'incidence d'une relaxe pénale sur l'action civile ?",
    majeure: "La responsabilité est contractuelle lorsqu'un contrat valable unit le responsable et la victime et que le dommage résulte de l'inexécution d'une obligation née de ce contrat (art. 1231-1). À défaut, elle est délictuelle (art. 1240 et s.). En vertu du principe du non-cumul (Civ., 11 janv. 1922), la victime ne peut pas choisir le régime délictuel quand les conditions de la responsabilité contractuelle sont réunies. Le tiers au contrat agit sur le terrain délictuel ; il peut invoquer un manquement contractuel dès lors qu'il lui a causé un dommage (Ass. plén., 6 oct. 2006 ; 13 janv. 2020), mais peut se voir opposer les conditions et limites du contrat (Com., 3 juill. 2024). La victime qui exerce l'action civile devant le juge pénal voit sa demande jugée selon les règles délictuelles (jurisprudence constante de la chambre criminelle). Enfin, l'absence de faute pénale non intentionnelle ne fait pas obstacle à une action civile fondée sur une faute d'imprudence ou de négligence (C. proc. pén., art. 4-1, issu de la loi du 10 juillet 2000).",
    mineure: [
      { condition: "Hugo contre la SARL", corrige: "Un contrat d'abonnement valable unit Hugo et la SARL ; le cours était compris dans ce contrat ; le dommage résulte d'un manquement à l'obligation de sécurité qui en découle. Les trois conditions de la responsabilité contractuelle sont réunies. Hugo ne peut donc pas fonder son action contre la SARL sur l'article 1240 : le principe du non-cumul le lui interdit, même si le régime délictuel lui paraît plus favorable." },
      { condition: "Inès contre la SARL", corrige: "Inès n'a conclu aucun contrat avec la SARL ; elle est entrée dans un hall ouvert à tous pour chercher son compagnon. Comme la cliente d'un magasin à entrée libre (Civ. 1re, 9 sept. 2020), elle agit sur le terrain délictuel (faute de l'exploitant, art. 1240 et 1241, ou fait des choses, art. 1242, al. 1er, v. chapitre 14)." },
      { condition: "La mère d'Hugo", corrige: "Elle est tiers au contrat d'abonnement : elle agit sur le terrain délictuel pour son propre préjudice d'affection. Elle peut invoquer le manquement contractuel de la SARL comme fait générateur (Boot shop, Bois rouge), en se voyant éventuellement opposer les limites prévues au contrat (Com., 3 juill. 2024)." },
      { condition: "La voie pénale et la relaxe", corrige: "Si Hugo se constitue partie civile devant le tribunal correctionnel, sa demande contre le prévenu sera jugée selon les règles délictuelles, exception au non-cumul propre au juge pénal. Si le moniteur est relaxé faute de faute pénale non intentionnelle, le juge civil reste libre de retenir une faute civile d'imprudence (C. proc. pén., art. 4-1) : la relaxe ne ferme pas la voie de l'indemnisation." }
    ],
    conclusion: "Hugo doit agir contre la SARL sur le terrain contractuel et ne peut invoquer l'article 1240 (non-cumul). Inès et la mère d'Hugo, tiers au contrat, agissent sur le terrain délictuel, la seconde pouvant se prévaloir du manquement contractuel. Une relaxe du moniteur pour blessures involontaires n'empêcherait pas le juge civil de retenir une faute civile."
  }
});

OBL.articles.push(
  {"num": "414-3", "code": "C. civ.", "theme": "Évolution", "texte": "Celui qui a causé un dommage à autrui alors qu'il était sous l'empire d'un trouble mental n'en est pas moins obligé à réparation.", "chapitres": [12], "retenir": "L'auteur d'un dommage sous l'empire d'un trouble mental doit réparation (loi du 3 janv. 1968)."},
  {"num": "1100-2", "code": "C. civ.", "theme": "Sources des obligations", "texte": "Les faits juridiques sont des agissements ou des événements auxquels la loi attache des effets de droit.\n\nLes obligations qui naissent d'un fait juridique sont régies, selon le cas, par le sous-titre relatif à la responsabilité extracontractuelle ou le sous-titre relatif aux autres sources d'obligations.", "chapitres": [12], "retenir": "Les obligations nées d'un fait juridique relèvent de la responsabilité extracontractuelle ou des quasi-contrats."},
  {"num": "1112", "code": "C. civ.", "theme": "Qualification", "texte": "L'initiative, le déroulement et la rupture des négociations précontractuelles sont libres. Ils doivent impérativement satisfaire aux exigences de la bonne foi.\n\nEn cas de faute commise dans les négociations, la réparation du préjudice qui en résulte ne peut avoir pour objet de compenser ni la perte des avantages attendus du contrat non conclu, ni la perte de chance d'obtenir ces avantages.", "chapitres": [12], "retenir": "La faute dans les négociations engage une responsabilité extracontractuelle."},
  {"num": "1170", "code": "C. civ.", "theme": "Différences de régime", "texte": "Toute clause qui prive de sa substance l'obligation essentielle du débiteur est réputée non écrite.", "chapitres": [12], "retenir": "Clause privant de sa substance l'obligation essentielle réputée non écrite (limite propre au contrat)."},
  {"num": "1178", "code": "C. civ.", "theme": "Qualification", "texte": "Un contrat qui ne remplit pas les conditions requises pour sa validité est nul. La nullité doit être prononcée par le juge, à moins que les parties ne la constatent d'un commun accord.\n\nLe contrat annulé est censé n'avoir jamais existé.\n\nLes prestations exécutées donnent lieu à restitution dans les conditions prévues aux articles 1352 à 1352-9.\n\nIndépendamment de l'annulation du contrat, la partie lésée peut demander réparation du dommage subi dans les conditions du droit commun de la responsabilité extracontractuelle.", "chapitres": [12], "retenir": "Indépendamment de l'annulation, réparation selon le droit commun extracontractuel."},
  {"num": "1231", "code": "C. civ.", "theme": "Différences de régime", "texte": "A moins que l'inexécution soit définitive, les dommages et intérêts ne sont dus que si le débiteur a préalablement été mis en demeure de s'exécuter dans un délai raisonnable.", "chapitres": [12], "retenir": "Mise en demeure préalable en matière contractuelle, sauf inexécution définitive."},
  {"num": "1231-1", "code": "C. civ.", "theme": "Responsabilité contractuelle", "texte": "Le débiteur est condamné, s'il y a lieu, au paiement de dommages et intérêts soit à raison de l'inexécution de l'obligation, soit à raison du retard dans l'exécution, s'il ne justifie pas que l'exécution a été empêchée par la force majeure.", "chapitres": [12], "retenir": "Dommages et intérêts pour inexécution ou retard, sauf force majeure."},
  {"num": "1231-3", "code": "C. civ.", "theme": "Différences de régime", "texte": "Le débiteur n'est tenu que des dommages et intérêts qui ont été prévus ou qui pouvaient être prévus lors de la conclusion du contrat, sauf lorsque l'inexécution est due à une faute lourde ou dolosive.", "chapitres": [12], "retenir": "Seul le dommage prévisible est réparé en matière contractuelle, sauf faute lourde ou dolosive."},
  {"num": "1240", "code": "C. civ.", "theme": "Responsabilité délictuelle", "texte": "Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", "chapitres": [12], "retenir": "Principe général de responsabilité pour faute (anc. art. 1382)."},
  {"num": "1241", "code": "C. civ.", "theme": "Responsabilité délictuelle", "texte": "Chacun est responsable du dommage qu'il a causé non seulement par son fait, mais encore par sa négligence ou par son imprudence.", "chapitres": [12], "retenir": "Faute d'imprudence ou de négligence (anc. art. 1383)."},
  {"num": "1242", "code": "C. civ.", "theme": "Évolution", "texte": "On est responsable non seulement du dommage que l'on cause par son propre fait, mais encore de celui qui est causé par le fait des personnes dont on doit répondre, ou des choses que l'on a sous sa garde.\n\nToutefois, celui qui détient, à un titre quelconque, tout ou partie de l'immeuble ou des biens mobiliers dans lesquels un incendie a pris naissance ne sera responsable, vis-à-vis des tiers, des dommages causés par cet incendie que s'il est prouvé qu'il doit être attribué à sa faute ou à la faute des personnes dont il est responsable.\n\nCette disposition ne s'applique pas aux rapports entre propriétaires et locataires, qui demeurent régis par les articles 1733 et 1734 du code civil.\n\nLes parents, en tant qu'ils exercent l'autorité parentale, sont, de plein droit, solidairement responsables du dommage causé par leurs enfants mineurs, sauf lorsque que ceux-ci ont été confiés à un tiers par une décision administrative ou judiciaire.\n\nLes maîtres et les commettants, du dommage causé par leurs domestiques et préposés dans les fonctions auxquelles ils les ont employés ;\n\nLes instituteurs et les artisans, du dommage causé par leurs élèves et apprentis pendant le temps qu'ils sont sous leur surveillance.\n\nLa responsabilité ci-dessus a lieu, à moins que les parents et les artisans ne prouvent qu'ils n'ont pu empêcher le fait qui donne lieu à cette responsabilité.\n\nEn ce qui concerne les instituteurs, les fautes, imprudences ou négligences invoquées contre eux comme ayant causé le fait dommageable, devront être prouvées, conformément au droit commun, par le demandeur, à l'instance.", "chapitres": [12], "retenir": "Siège de la responsabilité du fait des choses et du fait d'autrui (anc. art. 1384)."},
  {"num": "1245", "code": "C. civ.", "theme": "Exception au non-cumul", "texte": "Le producteur est responsable du dommage causé par un défaut de son produit, qu'il soit ou non lié par un contrat avec la victime.", "chapitres": [12], "retenir": "Le producteur répond du défaut de son produit, qu'il soit ou non lié par contrat à la victime."},
  {"num": "1253", "code": "C. civ.", "theme": "Évolution législative", "texte": "Le propriétaire, le locataire, l'occupant sans titre, le bénéficiaire d'un titre ayant pour objet principal de l'autoriser à occuper ou à exploiter un fonds, le maître d'ouvrage ou celui qui en exerce les pouvoirs qui est à l'origine d'un trouble excédant les inconvénients normaux de voisinage est responsable de plein droit du dommage qui en résulte.\n\nSous réserve de l'article L. 311-1-1 du code rural et de la pêche maritime, cette responsabilité n'est pas engagée lorsque le trouble anormal provient d'activités, quelle qu'en soit la nature, existant antérieurement à l'acte transférant la propriété ou octroyant la jouissance du bien ou, à défaut d'acte, à la date d'entrée en possession du bien par la personne lésée. Ces activités doivent être conformes aux lois et aux règlements et s'être poursuivies dans les mêmes conditions ou dans des conditions nouvelles qui ne sont pas à l'origine d'une aggravation du trouble anormal.", "chapitres": [12], "retenir": "Troubles anormaux de voisinage codifiés par la loi du 15 avril 2024."},
  {"num": "1254", "code": "C. civ.", "theme": "Fonctions de la responsabilité", "texte": "Lorsqu'une personne est reconnue responsable d'un manquement aux obligations légales ou contractuelles afférentes à son activité professionnelle, le juge peut, à la demande du ministère public, devant les juridictions de l'ordre judiciaire, ou du Gouvernement, devant les juridictions de l'ordre administratif, et par une décision spécialement motivée, la condamner au paiement d'une sanction civile, dont le produit est affecté à un fonds consacré au financement des actions de groupe.\n\nLa condamnation au paiement de la sanction civile ne peut intervenir que si les conditions suivantes sont remplies :\n\n1° L'auteur du dommage a délibérément commis une faute en vue d'obtenir un gain ou une économie indu ;\n\n2° Le manquement constaté a causé un ou plusieurs dommages à plusieurs personnes physiques ou morales placées dans une situation similaire.\n\nLe montant de la sanction est proportionné à la gravité de la faute commise et au profit que l'auteur de la faute en a retiré. Si celui-ci est une personne physique, ce montant ne peut être supérieur au double du profit réalisé. Si l'auteur est une personne morale, ce montant ne peut être supérieur au quintuple du montant du profit réalisé.\n\nLorsqu'une sanction civile est susceptible d'être cumulée avec une amende administrative ou pénale infligée en raison des mêmes faits à l'auteur du manquement, le montant global des amendes prononcées ne dépasse pas le maximum légal le plus élevé.\n\nLe risque d'une condamnation à la sanction civile n'est pas assurable.", "chapitres": [12], "retenir": "Sanction civile de la faute lucrative, versée à un fonds, non assurable (loi du 30 avril 2025)."},
  {"num": "1310", "code": "C. civ.", "theme": "Différences de régime", "texte": "La solidarité est légale ou conventionnelle ; elle ne se présume pas.", "chapitres": [12], "retenir": "La solidarité ne se présume pas (contre l'in solidum délictuel)."},
  {"num": "2224", "code": "C. civ.", "theme": "Prescription", "texte": "Les actions personnelles ou mobilières se prescrivent par cinq ans à compter du jour où le titulaire d'un droit a connu ou aurait dû connaître les faits lui permettant de l'exercer.", "chapitres": [12], "retenir": "Prescription de droit commun de cinq ans."},
  {"num": "2226", "code": "C. civ.", "theme": "Prescription", "texte": "L'action en responsabilité née à raison d'un événement ayant entraîné un dommage corporel, engagée par la victime directe ou indirecte des préjudices qui en résultent, se prescrit par dix ans à compter de la date de la consolidation du dommage initial ou aggravé.\n\nToutefois, en cas de préjudice causé par des tortures ou des actes de barbarie, ou par des violences ou des agressions sexuelles commises contre un mineur, l'action en responsabilité civile est prescrite par vingt ans.", "chapitres": [12], "retenir": "Dix ans à compter de la consolidation en cas de dommage corporel, quelle que soit la nature de la responsabilité."},
  {"num": "L85-1", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Exception au non-cumul", "texte": "Les dispositions du présent chapitre s'appliquent, même lorsqu'elles sont transportées en vertu d'un contrat, aux victimes d'un accident de la circulation dans lequel est impliqué un véhicule terrestre à moteur ainsi que ses remorques ou semi-remorques, à l'exception des chemins de fer et des tramways circulant sur des voies qui leur sont propres.", "chapitres": [12], "retenir": "La loi s'applique même aux victimes transportées en vertu d'un contrat.", "aff": "1"}
);
