/* Chapitre 1 — Présentation générale des obligations
   Fiche rédigée à partir du manuel (reformulée), textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 1,
  intro: "L'obligation est le lien de droit entre deux personnes par lequel l'une, le **créancier**, peut exiger de l'autre, le **débiteur**, une prestation ou une abstention. Le chapitre pose deux questions : qu'est-ce qu'une obligation (dette + contrainte, et l'exception de l'obligation naturelle) et comment les classer (par la source, par l'objet, par l'intensité).",
  sections: [
    {
      titre: "La notion d'obligation",
      contenu: [
        { def: { terme: "Obligation", texte: "lien de droit entre deux personnes en vertu duquel l'une (le créancier) peut exiger de l'autre (le débiteur) une prestation ou une abstention. C'est un **droit personnel**, par opposition au droit réel qui porte directement sur une chose." } },
        { p: "Elle se lit dans les deux sens : côté créancier, c'est une **créance** (élément actif du patrimoine) ; côté débiteur, c'est une **dette** (élément passif). Dans un sens étroit, « obligation » désigne parfois la seule dette." },
        { schema: { type: "arbre", titre: "Le schéma classique de l'obligation (analyse romano-germanique)", racine: { t: "Obligation", d: "lien créancier ↔ débiteur", enfants: [
          { t: "Dette (debitum)", d: "ce qui est dû, indépendamment de toute contrainte" },
          { t: "Pouvoir de contrainte (obligatio)", d: "moyens étatiques d'obtenir l'exécution" }
        ] } } },
        { h: "1. La dette (debitum)" },
        { p: "C'est le cœur du lien : ce que le débiteur doit au créancier. Longtemps conçue comme un lien strictement personnel, donc intransmissible, elle est aujourd'hui aussi regardée comme une **valeur patrimoniale** : la créance est un bien qui circule. La Cour européenne des droits de l'homme la protège d'ailleurs comme un « bien » au sens de l'article 1er du Protocole n° 1, et la réforme de 2016 a organisé la cession de créance, de dette et de contrat." },
        { h: "2. Le pouvoir de contrainte (obligatio)" },
        { p: "Une dette ne devient une obligation juridique que si le créancier dispose d'un moyen de contrainte étatique pour en obtenir l'exécution. Historiquement exercée sur la **personne** du débiteur, la contrainte s'exerce aujourd'hui sur son **patrimoine** (saisies, astreintes)." },
        { p: "Tout créancier bénéficie d'un **droit de gage général** sur l'ensemble des biens de son débiteur ([[2284]], [[2285]]). Mais le créancier ordinaire, dit **chirographaire**, n'a ni droit de suite ni droit de préférence : il vient en concours avec les autres créanciers. D'où l'intérêt de prendre une **sûreté** : réelle (hypothèque, gage…) ou personnelle (cautionnement…)." },
        { attention: "La contrainte par corps (emprisonnement pour dettes) a disparu en matière civile. Il n'en subsiste qu'une forme résiduelle en matière pénale, au profit du Trésor public (contrainte judiciaire, C. pr. pén., art. 749 s.)." }
      ]
    },
    {
      titre: "L'obligation naturelle",
      contenu: [
        { def: { terme: "Obligation naturelle", texte: "obligation juridique **dépourvue de pouvoir de contrainte** : elle comporte une dette mais pas d'exécution forcée. Le Code civil y fait référence à l'[[1302|article 1302, alinéa 2]] et, depuis 2016, à l'[[1100|article 1100, alinéa 2]]." } },
        { attention: "Ne pas confondre l'obligation **naturelle** (sans contrainte) et l'obligation **en nature** (qui porte sur autre chose qu'une somme d'argent). Confusion fréquente et sanctionnée sur une copie." },
        { h: "Deux conceptions doctrinales" },
        { schema: { type: "tableau", titre: "Les deux lectures de l'obligation naturelle", colonnes: ["", "Obligation civile imparfaite", "Devoir moral monté à la vie juridique"], lignes: [
          ["Auteurs", "Aubry et Rau (XIXe s.)", "Ripert (début XXe s.)"],
          ["Idée", "Une obligation civile a perdu sa force contraignante (vice de formation ou événement postérieur) mais survit comme obligation naturelle.", "Un simple devoir de conscience devient juridique lorsque le débiteur reconnaît le devoir et s'engage à l'exécuter."],
          ["Exemple type", "La dette **prescrite** : on ne peut plus en forcer le paiement, mais le paiement spontané reste valable ([[2249]]).", "L'aide entre **frères et sœurs** : aucune obligation alimentaire légale entre eux, mais un devoir moral."],
          ["Consécration", "Solution constante pour la dette prescrite", "Consacrée par la réforme de 2016 : [[1100]], al. 2"],
          ["Limite", "N'explique pas les devoirs purement moraux", "Ne permet pas de définir le domaine a priori : le juge la constate après coup"]
        ] } },
        { h: "Le régime de l'obligation naturelle" },
        { schema: { type: "arbre", titre: "Que se passe-t-il selon le comportement du débiteur ?", racine: { t: "Obligation naturelle", enfants: [
          { lien: "le débiteur ne fait rien", t: "Pas d'exécution forcée", d: "le créancier ne peut pas agir en justice" },
          { lien: "il exécute volontairement", t: "Pas de restitution", d: "il ne peut pas se faire rembourser : [[1302]], al. 2" },
          { lien: "il promet d'exécuter", t: "Obligation civile", d: "la promesse la transforme : exécution forcée possible" }
        ] } } },
        { arret: { ref: "Cass. civ. 1re, 10 oct. 1995, n° 93-20.300", apport: "L'engagement unilatéral pris en connaissance de cause d'exécuter une obligation naturelle transforme celle-ci en **obligation civile** : le créancier peut alors en exiger l'exécution en justice." } },
        { arret: { ref: "Req. 17 janv. 1938", apport: "Le paiement spontané d'une dette **prescrite** est valable et ne peut être répété. La décision ne vise pas expressément l'obligation naturelle, mais elle est l'application classique de la conception d'Aubry et Rau. Même solution aujourd'hui, de façon textuelle : [[2249]]." } },
        { arret: { ref: "Req. 7 mars 1911", apport: "Exemple type de la thèse de Ripert : entre frères et sœurs, il n'existe pas d'obligation alimentaire légale, mais un devoir moral. Celui qui s'engage à l'exécuter se lie juridiquement (voir aussi, pour des illustrations plus récentes, Civ. 1re, 4 janv. 2005 ; 23 mai 2006 ; 17 oct. 2012 ; 11 oct. 2017, n° 16-24.533)." } },
        { p: "Cas voisin de la dette prescrite : celui d'un débiteur placé dans une procédure de rétablissement personnel (Civ. 2e, 22 mars 2018, n° 17-14.024)." },
        { p: "La vraie difficulté pratique est donc de **caractériser** l'obligation naturelle préexistante : c'est elle qui justifie que le paiement ou la promesse ne soient pas une libéralité ou un paiement de l'indu." }
      ]
    },
    {
      titre: "Classification par la source",
      contenu: [
        { p: "Avant 2016, l'ancien article 1370 distinguait quatre sources : le contrat, le quasi-contrat, le délit et quasi-délit, et la loi. La réforme a reformulé ce classement à l'[[1100|article 1100, alinéa 1er]] : les obligations naissent d'**actes juridiques**, de **faits juridiques** ou de l'**autorité seule de la loi**." },
        { schema: { type: "arbre", titre: "Les sources des obligations (art. 1100 s.)", racine: { t: "Sources des obligations", d: "[[1100]], al. 1er", enfants: [
          { t: "Actes juridiques", d: "manifestations de volonté destinées à produire des effets de droit ([[1100-1]])", enfants: [
            { t: "Contrat", d: "conventionnel" },
            { t: "Acte unilatéral", d: "ex. testament, reconnaissance" }
          ] },
          { t: "Faits juridiques", d: "agissements ou événements auxquels la loi attache des effets ([[1100-2]])", enfants: [
            { t: "Responsabilité délictuelle", d: "[[1240]] s." },
            { t: "Quasi-contrats", d: "gestion d'affaires, indu, enrichissement injustifié" }
          ] },
          { t: "Loi seule", d: "ex. obligation alimentaire" }
        ] } } },
        { h: "La critique" },
        { p: "Placer la loi au même rang que l'acte et le fait est discutable : la loi est la source de **toutes** les obligations, puisque c'est elle qui donne force obligatoire à la volonté. La distinction pertinente oppose plutôt les obligations **voulues** (acte juridique) aux obligations **subies** (fait juridique). Le nouvel article 1100 ne fait apparaître cette summa divisio qu'imparfaitement." }
      ]
    },
    {
      titre: "Classification par l'objet",
      contenu: [
        { h: "1. Donner, faire, ne pas faire : une distinction abandonnée" },
        { p: "Les anciens articles 1101 et 1126 opposaient l'obligation de **donner** (transférer la propriété), de **faire** (prestation positive : soigner, travailler, mettre un local à disposition) et de **ne pas faire** (abstention : non-concurrence, non-construction). Son intérêt tenait surtout à la sanction de l'inexécution (ancien art. 1142)." },
        { p: "L'ordonnance du 10 février 2016 ne l'a pas reprise. La critique visait l'obligation de donner : en droit français, la propriété se transfère **par le seul échange des consentements**, sans que le débiteur ait quoi que ce soit à faire. Le transfert est désormais traité comme un **effet translatif** du contrat : il s'opère lors de la conclusion du contrat ([[1196]])." },
        { attention: "Après 2016, parler d'« obligation de donner » est un anachronisme sur une copie. Dites : effet translatif du contrat (art. 1196). La distinction faire / ne pas faire garde en revanche un intérêt didactique, notamment en responsabilité contractuelle." },
        { h: "2. Obligations pécuniaires et obligations en nature" },
        { p: "C'est aujourd'hui la distinction la plus utile en pratique. L'obligation **pécuniaire** porte sur une somme d'argent ; l'obligation **en nature** porte sur toute autre prestation (faire, ne pas faire, livrer autre chose que de l'argent)." },
        { schema: { type: "tableau", titre: "Pourquoi distinguer ?", colonnes: ["", "Obligation pécuniaire", "Obligation en nature"], lignes: [
          ["Objet", "Une somme d'argent", "Toute autre prestation"],
          ["Paiement", "Règles propres : **nominalisme** (le débiteur paie le montant nominal), sauf indexation ([[1343]])", "Règles générales du paiement"],
          ["Exécution forcée", "En principe toujours possible (la monnaie est parfaitement fongible), sous réserve des délais de grâce ([[1343-5]]), du surendettement et des procédures collectives", "Plus délicate, parfois impossible"],
          ["Retard", "Intérêts au taux légal dès la mise en demeure, sans preuve d'une perte ([[1231-6]])", "Dommages et intérêts prouvés selon le droit commun"]
        ] } }
      ]
    },
    {
      titre: "Classification par l'intensité : moyens ou résultat",
      contenu: [
        { p: "Proposée par **Demogue** et reprise par la jurisprudence, cette distinction n'est pas écrite dans le Code civil ; la réforme de 2016 ne l'a pas consacrée. Elle reste pleinement appliquée en droit positif, la réforme d'ensemble de la responsabilité civile n'ayant toujours pas abouti." },
        { schema: { type: "tableau", titre: "Obligation de moyens / obligation de résultat", colonnes: ["", "Obligation de moyens", "Obligation de résultat"], lignes: [
          ["Promesse", "Mettre en œuvre tous les moyens disponibles pour atteindre un but, sans le garantir", "Atteindre un résultat déterminé"],
          ["Exemples", "Le médecin (soigner, pas guérir) ; l'avocat (défendre, pas gagner)", "Le vendeur qui doit livrer une chose de genre ; le transporteur de personnes (sécurité)"],
          ["Preuve de l'inexécution", "Le créancier doit prouver une **faute** du débiteur (manque de diligence)", "Il suffit de constater que le résultat **n'est pas atteint**"],
          ["Exonération du débiteur", "Il prouve qu'il a été diligent", "Seulement en prouvant la **force majeure** ([[1218]], [[1231-1]])"]
        ] } },
        { p: "L'intérêt de la distinction se révèle donc surtout au stade de la **responsabilité contractuelle** : elle répartit la charge de la preuve (voir le chapitre sur l'inexécution du contrat)." }
      ]
    }
  ],
  retenir: [
    "Obligation = dette (debitum) + pouvoir de contrainte (obligatio). La contrainte porte sur le patrimoine : droit de gage général ([[2284]], [[2285]]).",
    "Obligation naturelle = dette sans contrainte : pas d'exécution forcée, pas de restitution après paiement volontaire ([[1302]], al. 2), transformation en obligation civile par la promesse d'exécuter (Civ. 1re, 10 oct. 1995).",
    "Sources : actes juridiques, faits juridiques, loi ([[1100]]) ; la vraie opposition est acte (voulu) / fait (subi).",
    "Donner / faire / ne pas faire : abandonnée en 2016 ; le transfert de propriété est un effet du contrat ([[1196]]).",
    "Pécuniaire / en nature : régime propre de la dette d'argent (nominalisme [[1343]], intérêts moratoires [[1231-6]]).",
    "Moyens / résultat : non codifiée mais appliquée ; elle détermine ce que le créancier doit prouver."
  ],
  articles: ["1100", "1100-1", "1100-2", "1196", "1218", "1222", "1231-1", "1231-6", "1302", "1343", "1343-5", "1359", "1361", "1362", "1376", "2249", "2284", "2285"],
  regimes: [],
  cas: ["ch1-promesse-soeur"],
  quiz: [
    { q: "L'obligation est :", choix: ["Un droit réel", "Un droit personnel", "Un droit extrapatrimonial"], bonne: 1, expl: "Elle unit deux personnes (créancier et débiteur) ; le droit réel porte directement sur une chose." },
    { q: "Aujourd'hui, la créance :", choix: ["Est un lien purement personnel, intransmissible", "Est aussi un bien, qui peut être cédé", "Peut être exécutée par la contrainte par corps"], bonne: 1, expl: "Elle a une valeur patrimoniale : la réforme de 2016 organise la cession de créance, de dette et de contrat, et la CEDH la protège comme un bien." },
    { q: "L'obligation naturelle :", choix: ["Peut être exécutée de force mais ne donne pas lieu à restitution", "Ne peut pas être exécutée de force et ne donne pas lieu à restitution si elle est exécutée volontairement", "Donne lieu à restitution en cas d'exécution volontaire"], bonne: 1, expl: "Pas de contrainte, mais le paiement volontaire est définitif : [[1302]], al. 2." },
    { q: "Un débiteur promet par écrit, en connaissance de cause, d'exécuter une obligation naturelle. Conséquence ?", choix: ["Rien : l'obligation reste naturelle", "L'obligation devient civile et son exécution peut être exigée en justice", "La promesse est nulle faute de cause"], bonne: 1, expl: "Base légale actuelle : [[1100]], al. 2 (promesse d'exécution d'un devoir de conscience). La solution vient de Cass. civ. 1re, 10 oct. 1995, n° 93-20.300, que la réforme a consacrée." },
    { q: "Selon l'article 1100, alinéa 1er, les obligations naissent :", choix: ["Du contrat, du quasi-contrat, du délit et de la loi", "D'actes juridiques, de faits juridiques ou de l'autorité seule de la loi", "De la seule volonté des parties"], bonne: 1, expl: "La première réponse correspond à l'ancien article 1370, abrogé." },
    { q: "La distinction des obligations de donner, faire et ne pas faire :", choix: ["A été maintenue par l'ordonnance de 2016", "N'a pas été reprise par l'ordonnance de 2016", "N'a jamais existé en droit français"], bonne: 1, expl: "Seule l'obligation de donner disparaît vraiment : le transfert de propriété relève de l'effet translatif du contrat ([[1196]]). Faire et ne pas faire restent visibles dans les textes, par exemple [[1222]] (faire exécuter soi-même ou détruire ce qui a été fait)." },
    { q: "Les obligations « en nature » regroupent :", choix: ["Les seules obligations de faire et de ne pas faire", "Les obligations de faire, de ne pas faire et de livrer autre chose qu'une somme d'argent", "Les obligations naturelles"], bonne: 1, expl: "Tout ce qui n'est pas une somme d'argent. Rien à voir avec l'obligation naturelle." },
    { q: "Un débiteur paie avec six mois de retard une somme d'argent. Le créancier veut les intérêts de retard. Que doit-il prouver ?", choix: ["Son préjudice exact", "Rien : les intérêts au taux légal courent dès la mise en demeure sans justification d'une perte", "La mauvaise foi du débiteur"], bonne: 1, expl: "[[1231-6]], al. 1er et 2. La mauvaise foi ne sert qu'à obtenir des dommages et intérêts supplémentaires (al. 3)." },
    { q: "Le patient d'un chirurgien estime que l'opération n'a pas réussi. Obligation de moyens : que doit-il prouver ?", choix: ["Seulement l'échec de l'opération", "Une faute du chirurgien (un manque de diligence)", "Une cause étrangère"], bonne: 1, expl: "En obligation de moyens, l'absence de résultat ne suffit pas : il faut prouver la faute (C. santé publ., art. L. 1142-1, I). Les infections nosocomiales relèvent d'un régime spécial, sans faute pour les établissements de santé." },
    { q: "Qualifiez l'obligation de l'auteur d'une agression de réparer le dommage de la victime.", choix: ["Contractuelle, en nature, de moyens", "Née d'un fait juridique (délit), pécuniaire", "Naturelle"], bonne: 1, expl: "Elle naît d'un fait juridique (responsabilité extracontractuelle) et se traduit par des dommages et intérêts : obligation de somme d'argent." }
  ]
});

OBL.cas.push({
  id: "ch1-promesse-soeur",
  titre: "La promesse faite à une sœur",
  seance: "Chapitre 1",
  regimes: [],
  faits: "Leur grand-mère a fait donation à Hugo seul d'un appartement ; sa sœur Léa n'a rien reçu. Hugo lui écrit : « Je sais que ce n'est pas juste. À partir de janvier, je te verserai 300 euros par mois pendant cinq ans. » Il verse la somme pendant huit mois, puis cesse tout paiement. Léa lui réclame les versements suivants. Hugo répond qu'aucune loi ne l'oblige à entretenir sa sœur majeure et qu'il demandera même le remboursement des 2 400 euros déjà versés.",
  question: "Léa peut-elle obtenir la suite des versements ? Hugo peut-il récupérer ce qu'il a payé ?",
  corrige: {
    qualification: "Hugo et Léa sont frère et sœur, majeurs. Aucune obligation alimentaire légale n'existe entre frères et sœurs. Hugo a pris, par écrit et spontanément, l'engagement de verser une somme d'argent pour réparer ce qu'il ressent comme une injustice : c'est l'exécution d'un devoir de conscience. Il a exécuté en partie, puis refuse de poursuivre et envisage de réclamer les sommes versées.",
    probleme: "L'engagement volontaire d'exécuter un devoir de conscience crée-t-il une obligation susceptible d'exécution forcée, et les sommes versées en exécution de ce devoir peuvent-elles être restituées ?",
    majeure: "Selon l'article 1100, alinéa 2, du Code civil, les obligations « peuvent naître de l'exécution volontaire ou de la promesse d'exécution d'un devoir de conscience envers autrui ». L'obligation naturelle ne peut pas faire l'objet d'une exécution forcée ; mais l'engagement unilatéral pris en connaissance de cause de l'exécuter la transforme en obligation civile (Cass. civ. 1re, 10 oct. 1995, n° 93-20.300). En outre, selon l'article 1302, alinéa 2, la restitution n'est pas admise à l'égard des obligations naturelles volontairement acquittées. Côté preuve, l'acte juridique portant sur plus de 1 500 euros se prouve par écrit (art. 1359) ; l'acte sous signature privée par lequel une seule partie s'engage à payer une somme d'argent doit comporter sa signature et la mention, écrite par lui-même, de la somme en lettres et en chiffres (art. 1376) ; à défaut, il peut valoir commencement de preuve par écrit (art. 1362), à corroborer par un autre moyen de preuve (art. 1361).",
    mineure: [
      { condition: "Existence d'un devoir de conscience", corrige: "Hugo reconnaît lui-même que la situation est injuste : il existe un devoir moral envers sa sœur, qui ne résulte d'aucune obligation légale (pas d'obligation alimentaire entre frères et sœurs)." },
      { condition: "Promesse d'exécution en connaissance de cause", corrige: "Hugo s'est engagé par écrit, de façon précise (300 € par mois, pendant cinq ans, à partir de janvier), après réflexion. Il y a bien une promesse d'exécuter ce devoir : l'obligation naturelle s'est transformée en obligation civile. Léa peut donc agir en justice pour obtenir les versements restants." },
      { condition: "Preuve de l'engagement", corrige: "L'engagement porte sur 18 000 euros (300 € × 60 mois) : il doit être prouvé par écrit (art. 1359). La lettre d'Hugo est un engagement unilatéral de payer une somme d'argent : pour faire pleinement preuve, elle doit être signée et mentionner, de sa main, la somme en lettres et en chiffres (art. 1376). Si ce n'est pas le cas, elle vaut au moins commencement de preuve par écrit (art. 1362), que corroborent les huit versements déjà effectués (art. 1361)." },
      { condition: "Qualification : pas une libéralité", corrige: "Hugo pourrait soutenir qu'il s'agit d'une donation, nulle faute d'acte notarié. Mais celui qui exécute un devoir de conscience n'agit pas dans une intention libérale : il s'acquitte d'une obligation naturelle, ce qui exclut la qualification de donation et ses exigences de forme." },
      { condition: "Restitution des sommes versées", corrige: "Les 2 400 euros ont été versés volontairement, en exécution de ce devoir. Hugo ne peut pas en obtenir la restitution (art. 1302, al. 2) : ce paiement n'est pas un paiement de l'indu." }
    ],
    conclusion: "Léa peut exiger en justice le paiement des mensualités restantes, puisque la promesse d'Hugo a transformé son devoir de conscience en obligation civile. Hugo ne peut pas récupérer les 2 400 euros déjà payés."
  }
});

OBL.articles.push(
  {"num": "1100", "code": "C. civ.", "theme": "Sources des obligations", "texte": "Les obligations naissent d'actes juridiques, de faits juridiques ou de l'autorité seule de la loi.\n\nElles peuvent naître de l'exécution volontaire ou de la promesse d'exécution d'un devoir de conscience envers autrui.", "chapitres": [1], "retenir": "Al. 1 : les trois sources. Al. 2 : consécration de l'obligation naturelle (devoir de conscience)."},
  {"num": "1100-1", "code": "C. civ.", "theme": "Sources des obligations", "texte": "Les actes juridiques sont des manifestations de volonté destinées à produire des effets de droit. Ils peuvent être conventionnels ou unilatéraux.\n\nIls obéissent, en tant que de raison, pour leur validité et leurs effets, aux règles qui gouvernent les contrats.", "chapitres": [1], "retenir": "Définition de l'acte juridique ; il peut être conventionnel ou unilatéral."},
  {"num": "1100-2", "code": "C. civ.", "theme": "Sources des obligations", "texte": "Les faits juridiques sont des agissements ou des événements auxquels la loi attache des effets de droit.\n\nLes obligations qui naissent d'un fait juridique sont régies, selon le cas, par le sous-titre relatif à la responsabilité extracontractuelle ou le sous-titre relatif aux autres sources d'obligations.", "chapitres": [1], "retenir": "Définition du fait juridique ; renvoie à la responsabilité extracontractuelle et aux quasi-contrats."},
  {"num": "1196", "code": "C. civ.", "theme": "Effet translatif", "texte": "Dans les contrats ayant pour objet l'aliénation de la propriété ou la cession d'un autre droit, le transfert s'opère lors de la conclusion du contrat.\n\nCe transfert peut être différé par la volonté des parties, la nature des choses ou par l'effet de la loi.\n\nLe transfert de propriété emporte transfert des risques de la chose. Toutefois le débiteur de l'obligation de délivrer en retrouve la charge à compter de sa mise en demeure, conformément à l'article 1344-2 et sous réserve des règles prévues à l'article 1351-1.", "chapitres": [1], "retenir": "Transfert de propriété dès la conclusion du contrat : il remplace l'ancienne « obligation de donner »."},
  {"num": "1231-6", "code": "C. civ.", "theme": "Obligation pécuniaire", "texte": "Les dommages et intérêts dus à raison du retard dans le paiement d'une obligation de somme d'argent consistent dans l'intérêt au taux légal, à compter de la mise en demeure.\n\nCes dommages et intérêts sont dus sans que le créancier soit tenu de justifier d'aucune perte.\n\nLe créancier auquel son débiteur en retard a causé, par sa mauvaise foi, un préjudice indépendant de ce retard, peut obtenir des dommages et intérêts distincts de l'intérêt moratoire.", "chapitres": [1], "retenir": "Intérêts moratoires au taux légal dès la mise en demeure, sans preuve d'une perte."},
  {"num": "1218", "code": "C. civ.", "theme": "Moyens / résultat", "texte": "Il y a force majeure en matière contractuelle lorsqu'un événement échappant au contrôle du débiteur, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, empêche l'exécution de son obligation par le débiteur.\n\nSi l'empêchement est temporaire, l'exécution de l'obligation est suspendue à moins que le retard qui en résulterait ne justifie la résolution du contrat. Si l'empêchement est définitif, le contrat est résolu de plein droit et les parties sont libérées de leurs obligations dans les conditions prévues aux articles 1351 et 1351-1.", "chapitres": [1], "retenir": "Définition de la force majeure contractuelle : seule cause d'exonération du débiteur d'une obligation de résultat."},
  {"num": "1222", "code": "C. civ.", "theme": "Faire / ne pas faire", "texte": "Après mise en demeure, le créancier peut aussi, dans un délai et à un coût raisonnables, faire exécuter lui-même l'obligation ou, sur autorisation préalable du juge, détruire ce qui a été fait en violation de celle-ci. Il peut demander au débiteur le remboursement des sommes engagées à cette fin.\n\nIl peut aussi demander en justice que le débiteur avance les sommes nécessaires à cette exécution ou à cette destruction.", "chapitres": [1], "retenir": "Faire exécuter soi-même ou détruire ce qui a été fait : trace de la distinction faire / ne pas faire."},
  {"num": "1231-1", "code": "C. civ.", "theme": "Moyens / résultat", "texte": "Le débiteur est condamné, s'il y a lieu, au paiement de dommages et intérêts soit à raison de l'inexécution de l'obligation, soit à raison du retard dans l'exécution, s'il ne justifie pas que l'exécution a été empêchée par la force majeure.", "chapitres": [1], "retenir": "Le débiteur est condamné sauf force majeure."},
  {"num": "1343-5", "code": "C. civ.", "theme": "Obligation pécuniaire", "texte": "Le juge peut, compte tenu de la situation du débiteur et en considération des besoins du créancier, reporter ou échelonner, dans la limite de deux années, le paiement des sommes dues.\n\nPar décision spéciale et motivée, il peut ordonner que les sommes correspondant aux échéances reportées porteront intérêt à un taux réduit au moins égal au taux légal, ou que les paiements s'imputeront d'abord sur le capital.\n\nIl peut subordonner ces mesures à l'accomplissement par le débiteur d'actes propres à faciliter ou à garantir le paiement de la dette.\n\nLa décision du juge suspend les procédures d'exécution qui auraient été engagées par le créancier. Les majorations d'intérêts ou les pénalités prévues en cas de retard ne sont pas encourues pendant le délai fixé par le juge.\n\nToute stipulation contraire est réputée non écrite.\n\nLes dispositions du présent article ne sont pas applicables aux dettes d'aliment.", "chapitres": [1], "retenir": "Délai de grâce : report ou échelonnement dans la limite de deux ans."},
  {"num": "1359", "code": "C. civ.", "theme": "Preuve", "texte": "L'acte juridique portant sur une somme ou une valeur excédant un montant fixé par décret doit être prouvé par écrit sous signature privée ou authentique.\n\nIl ne peut être prouvé outre ou contre un écrit établissant un acte juridique, même si la somme ou la valeur n'excède pas ce montant, que par un autre écrit sous signature privée ou authentique.\n\nCelui dont la créance excède le seuil mentionné au premier alinéa ne peut pas être dispensé de la preuve par écrit en restreignant sa demande.\n\nIl en est de même de celui dont la demande, même inférieure à ce montant, porte sur le solde ou sur une partie d'une créance supérieure à ce montant.", "chapitres": [1], "retenir": "Acte juridique au-delà du seuil (1 500 €) : preuve par écrit."},
  {"num": "1361", "code": "C. civ.", "theme": "Preuve", "texte": "Il peut être suppléé à l'écrit par l'aveu judiciaire, le serment décisoire ou un commencement de preuve par écrit corroboré par un autre moyen de preuve.", "chapitres": [1], "retenir": "Suppléer l'écrit : aveu judiciaire, serment décisoire, commencement de preuve par écrit corroboré."},
  {"num": "1362", "code": "C. civ.", "theme": "Preuve", "texte": "Constitue un commencement de preuve par écrit tout écrit qui, émanant de celui qui conteste un acte ou de celui qu'il représente, rend vraisemblable ce qui est allégué.\n\nPeuvent être considérés par le juge comme équivalant à un commencement de preuve par écrit les déclarations faites par une partie lors de sa comparution personnelle, son refus de répondre ou son absence à la comparution.\n\nLa mention d'un écrit authentique ou sous signature privée sur un registre public vaut commencement de preuve par écrit.", "chapitres": [1], "retenir": "Définition du commencement de preuve par écrit."},
  {"num": "1376", "code": "C. civ.", "theme": "Preuve", "texte": "L'acte sous signature privée par lequel une seule partie s'engage envers une autre à lui payer une somme d'argent ou à lui livrer un bien fongible ne fait preuve que s'il comporte la signature de celui qui souscrit cet engagement ainsi que la mention, écrite par lui-même, de la somme ou de la quantité en toutes lettres et en chiffres. En cas de différence, l'acte sous signature privée vaut preuve pour la somme écrite en toutes lettres.", "chapitres": [1], "retenir": "Engagement unilatéral de payer : signature + mention manuscrite de la somme en lettres et en chiffres."},
  {"num": "1302", "code": "C. civ.", "theme": "Obligation naturelle", "texte": "Tout paiement suppose une dette ; ce qui a été reçu sans être dû est sujet à restitution.\n\nLa restitution n'est pas admise à l'égard des obligations naturelles qui ont été volontairement acquittées.", "chapitres": [1], "retenir": "Al. 2 : pas de restitution d'une obligation naturelle volontairement acquittée."},
  {"num": "1343", "code": "C. civ.", "theme": "Obligation pécuniaire", "texte": "Le débiteur d'une obligation de somme d'argent se libère par le versement de son montant nominal.\n\nLe montant de la somme due peut varier par le jeu de l'indexation.\n\nLe débiteur d'une dette de valeur se libère par le versement de la somme d'argent résultant de sa liquidation.", "chapitres": [1], "retenir": "Nominalisme monétaire ; indexation possible ; dette de valeur."},
  {"num": "2249", "code": "C. civ.", "theme": "Obligation naturelle", "texte": "Le paiement effectué pour éteindre une dette ne peut être répété au seul motif que le délai de prescription était expiré.", "chapitres": [1], "retenir": "Le paiement d'une dette prescrite ne peut pas être répété."},
  {"num": "2284", "code": "C. civ.", "theme": "Contrainte", "texte": "Quiconque s'est obligé personnellement, est tenu de remplir son engagement sur tous ses biens mobiliers et immobiliers, présents et à venir.", "chapitres": [1], "retenir": "Droit de gage général : tous les biens du débiteur répondent de ses dettes."},
  {"num": "2285", "code": "C. civ.", "theme": "Contrainte", "texte": "Les biens du débiteur sont le gage commun de ses créanciers ; et le prix s'en distribue entre eux par contribution, à moins qu'il n'y ait entre les créanciers des causes légitimes de préférence.", "chapitres": [1], "retenir": "Les biens du débiteur sont le gage commun de ses créanciers, payés au marc l'euro sauf cause de préférence."}
);
