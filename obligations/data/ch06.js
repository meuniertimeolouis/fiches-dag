/* Chapitre 6 — Les formes contractuelles
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 6,
  intro: "Principe : **le consensualisme** — « Les contrats sont par principe consensuels » ([[1172]], al. 1er). Par exception, certains contrats exigent une **forme** pour être valables : un écrit (contrats **solennels**) ou la remise d'une chose (contrats **réels**). Toute la difficulté est de ne pas confondre la forme exigée pour la **validité** avec celle exigée pour la **preuve** ou l'**opposabilité** ([[1173]]).",
  sections: [
    {
      titre: "Trois fonctions de la forme",
      contenu: [
        { schema: { type: "tableau", titre: "Validité, preuve, opposabilité", colonnes: ["", "Forme de validité (ad solemnitatem)", "Forme de preuve (ad probationem)", "Forme de publicité"], lignes: [
          ["But", "Protéger le consentement", "Préconstituer la preuve", "Informer les tiers"],
          ["Exemple", "Donation notariée ([[931]])", "Écrit au-delà de 1 500 € ([[1359]])", "Publicité foncière d'une vente immobilière"],
          ["Si la forme manque", "Contrat **nul** (sauf régularisation) : [[1172]], al. 2", "Contrat valable mais difficile à prouver ; autres modes de preuve parfois possibles", "Contrat valable entre les parties mais **inopposable** aux tiers"],
          ["Texte clé", "[[1172]]", "[[1173]]", "[[1173]]"]
        ] } },
        { attention: "Un contrat écrit n'est pas forcément solennel. Sur une copie, demandez-vous toujours : l'écrit est-il exigé **à peine de nullité** ? Si le texte ne le dit pas, c'est en principe une exigence de preuve." },
        { p: "Les effets sont radicalement différents : l'écrit exigé *ad probationem* ([[1359]], au-delà de 1 500 euros) laisse le contrat valable et sa preuve peut parfois se faire par d'autres moyens ; l'écrit *ad solemnitatem* est, lui, le plus souvent **sans remède** en cas d'absence. Les formes de publicité visent à informer les tiers (enregistrement fiscal, publicité foncière de tout transfert de droit immobilier) : leur défaut affecte en principe l'**opposabilité**, non la validité ([[1173]])." },
        { p: "**Formalisme conventionnel** : si les parties ont fait d'une formalité (par exemple la signature d'un compromis chez le notaire) la condition de leur engagement, leur consentement peut être jugé subordonné à cette formalité et le contrat non formé ; si elle n'est qu'accessoire (par exemple probatoire), l'accord oral ou par courriels suffit à former le contrat (ex. vente consensuelle d'un terrain, art. 1582 et 1583). C'est une question de volonté des parties, à apprécier d'après les faits." }
      ]
    },
    {
      titre: "Consensualisme et renaissance du formalisme",
      contenu: [
        { p: "Le droit romain classique était formaliste. Le consensualisme s'impose sous l'influence des canonistes (respect de la parole donnée) : « on lie les bœufs par les cornes et les hommes par la parole » (Loysel). Il n'est admis comme principe qu'à partir du XVIe siècle. Le Code de 1804 le retient implicitement, convaincu de ses avantages (simplicité, rapidité, économie, cohérence avec l'autonomie de la volonté) ; la réforme de 2016 l'écrit ([[1172]]). La jurisprudence l'affirmait déjà (Civ. 3e, 27 nov. 1990, pour la vente)." },
        { p: "Depuis le milieu du XXe siècle, le **formalisme renaît** comme outil de **protection** : l'écrit fait prendre conscience de l'engagement et permet d'imposer des **mentions obligatoires** (crédit à la consommation, assurance : exclusions en caractères très apparents). Critique : la nullité est encourue dès qu'une mention manque, même si le profane a compris ; le formalisme devient parfois un outil de régulation des professionnels, ce qui explique la rigueur de certaines sanctions. Le **formalisme informatif** suppose que l'acte soit lu et compris, ce qui est incertain pour les contrats complexes, et les sanctions sont hétérogènes. Exemples : exclusions de garantie en caractères très apparents (C. assur., art. L. 112-4) ; mentions du contrat de crédit (C. consom., art. L. 312-12)." },
        { schema: { type: "frise", titre: "Le cautionnement : de la preuve à la validité", evenements: [
          { date: "1804, puis 1980", t: "Mention manuscrite = règle de preuve", d: "ancien art. 1326 : somme en toutes lettres (1804), puis en lettres et en chiffres (loi du 12 juill. 1980)" },
          { date: "1983-1987", t: "Civ. 1re : règle de validité", d: "la mention protège la caution : son absence entraîne la nullité (Civ. 1re, 19 avr. 1983, puis 30 juin 1987)" },
          { date: "15 nov. 1989", t: "Civ. 1re : retour à la preuve", d: "critique : le juge n'a pas le pouvoir de créer un contrat solennel et la nullité automatique le privait d'apprécier la réelle conscience de la caution ; la mention redevient une règle de preuve" },
          { date: "Ord. 15 sept. 2021", t: "Art. 2297 C. civ.", d: "la caution personne physique **appose elle-même** la mention qu'elle s'engage à payer ce que doit le débiteur, dans la limite d'un montant en principal et accessoires en toutes lettres et en chiffres, **à peine de nullité** ; le mot « manuscrite » disparaît (mention électronique possible) et le libellé est libre" }
        ] } }
      ]
    },
    {
      titre: "Les contrats solennels",
      contenu: [
        { def: { terme: "Contrat solennel", texte: "contrat dont la **validité** est subordonnée à des formes déterminées par la loi ([[1109]], al. 2 ; [[1172]], al. 2)." } },
        { schema: { type: "arbre", titre: "Deux degrés de solennité", racine: { t: "Contrat solennel", enfants: [
          { t: "Acte notarié", d: "actes graves : donation ([[931]]), contrat de mariage ([[1394]]), hypothèque (art. 2409), subrogation consentie par le débiteur sans le concours du créancier ([[1346-2]], al. 2), vente d'immeuble à construire, location-accession. Le notaire, tenu d'un devoir d'information et de conseil, éclaire les parties" },
          { t: "Écrit sous signature privée", d: "cession de créance ([[1322]]), cession de contrat ([[1216]], al. 3), cession de parts sociales, courtage matrimonial, prêt à la consommation, gage (art. 2336), cautionnement d'une personne physique (art. 2297)" }
        ] } } },
        { p: "Souplesse pour la donation : la jurisprudence admet la **donation déguisée** et le **don manuel** (remise de la chose), qui échappent à l'acte notarié (la jurisprudence interprète strictement les textes imposant la solennité, mais est souple ici). Le droit électronique pose un principe d'**équivalence** des formalités électroniques ([[1174]] s.)." },
        { h: "Régime" },
        { liste: [
          "Défaut de forme : **nullité**, « sauf possible régularisation » ([[1172]], al. 2) ; sa nature (relative ou absolue) dépend du texte ou de l'intérêt protégé. Certains textes prévoient une autre sanction (déchéance du droit aux intérêts en matière de crédit).",
          "**Parallélisme des formes** : la promesse d'un contrat solennel doit respecter la même forme (promesse de donation par acte notarié). La promesse d'hypothèque sous seing privé est admise (solution acquise depuis le XIXe siècle ; Civ. 1re, 21 mars 2006), mais elle ne crée qu'une obligation de faire qui se résout en dommages et intérêts : le juge ne peut ordonner l'inscription forcée. L'exception au parallélisme n'est donc qu'**apparente**.",
          "**Forme électronique** : équivalente à l'écrit papier ([[1174]]), sauf pour les actes sous signature privée du droit de la famille et des successions ([[1175]]). La mention manuscrite peut être apposée électroniquement si le procédé garantit qu'elle émane de celui qui s'oblige."
        ] }
      ]
    },
    {
      titre: "Les contrats réels",
      contenu: [
        { def: { terme: "Contrat réel", texte: "contrat dont la **formation** est subordonnée à la **remise d'une chose** ([[1109]], al. 3 ; [[1172]], al. 3)." } },
        { p: "Hérités du droit romain : prêt à usage ([[1875]]), prêt de consommation ([[1892]]), dépôt ([[1919]]) et, avant 2006, gage. Dans ces contrats, la remise paraissait nécessaire à l'existence même de la convention (le dépositaire ne peut garder une chose qu'il n'a pas). La doctrine y voit un archaïsme : la remise pourrait être une simple obligation d'exécution, ce qui rendrait ces contrats consensuels et synallagmatiques. Longtemps insensible, la jurisprudence a maintenu la catégorie (Civ. 1re, 20 juill. 1981 pour le prêt) et y a même ajouté le don manuel. Elle subsiste ([[1172]], al. 3) : l'avant-projet de réforme des contrats spéciaux conserve le caractère réel du prêt à usage désintéressé, du prêt de consommation gratuit et du dépôt." },
        { schema: { type: "tableau", titre: "Une catégorie en recul", colonnes: ["Contrat", "Qualification actuelle", "Source"], lignes: [
          ["Prêt consenti par un **professionnel du crédit**", "**Consensuel** : la remise des fonds est une obligation du prêteur", "Civ. 1re, 28 mars 2000"],
          ["Prêt consenti par un **particulier**", "**Réel**", "Civ. 1re, 7 mars 2006"],
          ["Gage", "Plus réel mais **solennel** (écrit exigé ; gage sans dépossession possible)", "Ord. 23 mars 2006, art. 2336"],
          ["Don manuel", "Réel (la remise remplace l'acte notarié)", "Jurisprudence"],
          ["Dépôt, prêt à usage", "Traditionnellement réels ; la position de la jurisprudence reste à définir", "[[1919]], [[1875]]"]
        ] } },
        { p: "Régime : sans remise, le contrat n'est pas valablement formé : **pas de contrat** et pas d'exécution forcée de la remise. La **promesse** de contrat réel, que les tribunaux admettent malgré l'économie du contrat réel, est valable mais ne vaut pas contrat : elle ne se résout qu'en dommages et intérêts, comme la promesse de contrat solennel. Pour le prêt entre particuliers, il faut aussi se demander si l'accord peut être prouvé ([[1359]] : preuve libre sous 1 500 euros)." }
      ]
    }
  ],
  retenir: [
    "Consensualisme de principe ([[1172]], al. 1er) ; exceptions : contrats solennels (al. 2) et réels (al. 3).",
    "Forme de validité ≠ forme de preuve ou d'opposabilité, qui n'affectent pas la validité ([[1173]]).",
    "Solennel notarié : donation ([[931]]), contrat de mariage ([[1394]]), hypothèque ; solennel simple : cession de créance ([[1322]]), de contrat ([[1216]]), cautionnement d'une personne physique (art. 2297).",
    "Défaut de forme : nullité, sauf régularisation ; parallélisme des formes pour la promesse.",
    "Contrats réels en recul : prêt d'un professionnel consensuel (2000), prêt d'un particulier réel (2006), gage devenu solennel (2006)."
  ],
  articles: ["931", "1109", "1172", "1173", "1174", "1175", "1216", "1322", "1346-2", "1359", "1369", "1394", "1875", "1892", "1919"],
  regimes: [],
  cas: ["ch6-cession-oral"],
  quiz: [
    { q: "Selon l'article 1172, les contrats sont par principe :", choix: ["Solennels", "Consensuels", "Réels"], bonne: 1, expl: "[[1172]], al. 1er." },
    { q: "Une vente de voiture à 8 000 € conclue oralement est :", choix: ["Nulle faute d'écrit", "Valable, mais sa preuve exige en principe un écrit", "Inopposable aux parties"], bonne: 1, expl: "L'écrit de [[1359]] est une règle de preuve : [[1173]]." },
    { q: "Une donation d'appartement faite par acte sous seing privé :", choix: ["Est valable", "Est nulle faute d'acte notarié", "Vaut don manuel"], bonne: 1, expl: "[[931]]. Le don manuel ne concerne que les meubles remis de la main à la main." },
    { q: "Une cession de créance conclue oralement :", choix: ["Est valable mais inopposable", "Est nulle", "Doit seulement être notifiée au débiteur"], bonne: 1, expl: "[[1322]] : écrit à peine de nullité." },
    { q: "Le prêt consenti par une banque est :", choix: ["Un contrat réel", "Un contrat consensuel", "Un contrat solennel notarié"], bonne: 1, expl: "Civ. 1re, 28 mars 2000 : le prêt consenti par un professionnel du crédit n'est pas un contrat réel." },
    { q: "Paul promet de prêter 300 € à son ami mais ne les remet jamais. L'ami peut-il exiger la remise ?", choix: ["Oui, par exécution forcée", "Non : le prêt entre particuliers est réel ; la promesse ne se résout qu'en dommages et intérêts", "Oui, s'il y a un écrit"], bonne: 1, expl: "Civ. 1re, 7 mars 2006 ; la promesse de contrat réel ne vaut pas contrat." },
    { q: "Le défaut de publicité foncière d'une vente immobilière entraîne :", choix: ["La nullité de la vente", "Son inopposabilité aux tiers", "Sa requalification en promesse"], bonne: 1, expl: "[[1173]] : forme d'opposabilité." },
    { q: "Un contrat solennel peut-il être conclu par voie électronique ?", choix: ["Jamais", "Oui, dans les conditions des articles 1366 et 1367 (et 1369 pour l'acte authentique), sauf exceptions du droit de la famille", "Seulement entre professionnels"], bonne: 1, expl: "[[1174]], [[1175]]." }
  ]
});

OBL.cas.push({
  id: "ch6-cession-oral",
  titre: "Le carnet d'adresses et la créance",
  seance: "Chapitre 6",
  regimes: [],
  faits: "Lucas, auto-entrepreneur, détient une créance de 4 000 euros contre un client. Pressé par le besoin, il la cède oralement à son ami Samir pour 3 000 euros, que Samir lui verse par virement. Le même jour, Lucas promet par SMS à sa sœur de lui donner son vieux scooter, qu'il lui remet le lendemain ; il lui promet aussi, oralement, de lui donner « un jour » son studio.",
  question: "La cession de créance est-elle valable ? La sœur de Lucas peut-elle garder le scooter et exiger le studio ?",
  corrige: {
    qualification: "Une cession de créance conclue verbalement, dont le prix a été payé ; une donation d'un meuble (scooter) réalisée par remise de la main à la main ; une promesse verbale de donation d'un immeuble.",
    probleme: "La cession de créance et la donation sont-elles soumises à une forme de validité, et quelle est la sanction de son absence ?",
    majeure: "Les contrats sont par principe consensuels, mais la validité des contrats solennels est subordonnée à des formes déterminées par la loi, à défaut desquelles le contrat est nul (art. 1172). La cession de créance doit être constatée par écrit à peine de nullité (art. 1322). La donation doit être passée devant notaire sous peine de nullité (art. 931), mais la jurisprudence admet le don manuel, réalisé par la remise d'un meuble. La promesse d'un contrat solennel est soumise à la même forme que le contrat promis.",
    mineure: [
      { condition: "La cession de créance", corrige: "Elle a été conclue oralement : l'écrit exigé par l'article 1322 à peine de nullité fait défaut. La cession est nulle, même si le prix a été payé. Samir pourra obtenir la restitution des 3 000 euros ; les parties peuvent refaire la cession par écrit." },
      { condition: "Le scooter", corrige: "La donation d'un meuble réalisée par la remise matérielle de la chose est un don manuel, valable sans acte notarié. La sœur peut garder le scooter." },
      { condition: "Le studio", corrige: "La donation d'un immeuble exige un acte notarié (art. 931), et la promesse de donation est soumise à la même forme. La promesse verbale est nulle : la sœur ne peut rien exiger." }
    ],
    conclusion: "La cession de créance est nulle faute d'écrit (art. 1322) ; le don manuel du scooter est valable ; la promesse verbale de donner le studio est sans effet faute d'acte notarié."
  }
});

OBL.articles.push(
  {"num": "931", "code": "C. civ.", "theme": "Solennité", "texte": "Tous actes portant donation entre vifs seront passés devant notaires dans la forme ordinaire des contrats ; et il en restera minute, sous peine de nullité.", "chapitres": [6], "retenir": "Donation entre vifs devant notaire, sous peine de nullité."},
  {"num": "1109", "code": "C. civ.", "theme": "Classifications", "texte": "Le contrat est consensuel lorsqu'il se forme par le seul échange des consentements quel qu'en soit le mode d'expression.\n\nLe contrat est solennel lorsque sa validité est subordonnée à des formes déterminées par la loi.\n\nLe contrat est réel lorsque sa formation est subordonnée à la remise d'une chose.", "chapitres": [6], "retenir": "Consensuel / solennel / réel."},
  {"num": "1172", "code": "C. civ.", "theme": "Consensualisme", "texte": "Les contrats sont par principe consensuels.\n\nPar exception, la validité des contrats solennels est subordonnée à l'observation de formes déterminées par la loi à défaut de laquelle le contrat est nul, sauf possible régularisation.\n\nEn outre, la loi subordonne la formation de certains contrats à la remise d'une chose.", "chapitres": [6], "retenir": "Principe du consensualisme ; nullité du contrat solennel sans forme, sauf régularisation ; contrats réels."},
  {"num": "1173", "code": "C. civ.", "theme": "Consensualisme", "texte": "Les formes exigées aux fins de preuve ou d'opposabilité sont sans effet sur la validité des contrats.", "chapitres": [6], "retenir": "Les formes de preuve ou d'opposabilité n'affectent pas la validité."},
  {"num": "1174", "code": "C. civ.", "theme": "Forme électronique", "texte": "Lorsqu'un écrit est exigé pour la validité d'un contrat, il peut être établi et conservé sous forme électronique dans les conditions prévues aux articles 1366 et 1367 et, lorsqu'un acte authentique est requis, au deuxième alinéa de l'article 1369.\n\nLorsqu'est exigée une mention écrite de la main même de celui qui s'oblige, ce dernier peut l'apposer sous forme électronique si les conditions de cette apposition sont de nature à garantir qu'elle ne peut être effectuée que par lui-même.", "chapitres": [6], "retenir": "Écrit de validité sous forme électronique ; mention manuscrite électronique possible."},
  {"num": "1175", "code": "C. civ.", "theme": "Forme électronique", "texte": "Il est fait exception aux dispositions de l'article précédent pour les actes sous signature privée relatifs au droit de la famille et des successions, sauf les conventions sous signature privée contresignées par avocats en présence des parties et déposées au rang des minutes d'un notaire selon les modalités prévues aux articles 229-1 à 229-4 ou à l'article 298.", "chapitres": [6], "retenir": "Exception : actes sous signature privée du droit de la famille et des successions."},
  {"num": "1216", "code": "C. civ.", "theme": "Solennité", "texte": "Un contractant, le cédant, peut céder sa qualité de partie au contrat à un tiers, le cessionnaire, avec l'accord de son cocontractant, le cédé.\n\nCet accord peut être donné par avance, notamment dans le contrat conclu entre les futurs cédant et cédé, auquel cas la cession produit effet à l'égard du cédé lorsque le contrat conclu entre le cédant et le cessionnaire lui est notifié ou lorsqu'il en prend acte.\n\nLa cession doit être constatée par écrit, à peine de nullité.", "chapitres": [6], "retenir": "Cession de contrat : écrit à peine de nullité (al. 3)."},
  {"num": "1322", "code": "C. civ.", "theme": "Solennité", "texte": "La cession de créance doit être constatée par écrit, à peine de nullité.", "chapitres": [6], "retenir": "Cession de créance : écrit à peine de nullité."},
  {"num": "1346-2", "code": "C. civ.", "theme": "Solennité", "texte": "La subrogation a lieu également lorsque le débiteur, empruntant une somme à l'effet de payer sa dette, subroge le prêteur dans les droits du créancier avec le concours de celui-ci. En ce cas, la subrogation doit être expresse et la quittance donnée par le créancier doit indiquer l'origine des fonds.\n\nLa subrogation peut être consentie sans le concours du créancier, mais à la condition que la dette soit échue ou que le terme soit en faveur du débiteur. Il faut alors que l'acte d'emprunt et la quittance soient passés devant notaire, que dans l'acte d'emprunt il soit déclaré que la somme a été empruntée pour faire le paiement, et que dans la quittance il soit déclaré que le paiement a été fait des sommes versées à cet effet par le nouveau créancier.", "chapitres": [6], "retenir": "Subrogation consentie par le débiteur sans le concours du créancier : acte d'emprunt et quittance notariés (al. 2)."},
  {"num": "1359", "code": "C. civ.", "theme": "Preuve", "texte": "L'acte juridique portant sur une somme ou une valeur excédant un montant fixé par décret doit être prouvé par écrit sous signature privée ou authentique.\n\nIl ne peut être prouvé outre ou contre un écrit établissant un acte juridique, même si la somme ou la valeur n'excède pas ce montant, que par un autre écrit sous signature privée ou authentique.\n\nCelui dont la créance excède le seuil mentionné au premier alinéa ne peut pas être dispensé de la preuve par écrit en restreignant sa demande.\n\nIl en est de même de celui dont la demande, même inférieure à ce montant, porte sur le solde ou sur une partie d'une créance supérieure à ce montant.", "chapitres": [6], "retenir": "Écrit exigé pour prouver un acte au-delà de 1 500 € : règle de preuve, pas de validité."},
  {"num": "1369", "code": "C. civ.", "theme": "Solennité", "texte": "L'acte authentique est celui qui a été reçu, avec les solennités requises, par un officier public ayant compétence et qualité pour instrumenter.\n\nIl peut être dressé sur support électronique s'il est établi et conservé dans des conditions fixées par décret en Conseil d'État.\n\nLorsqu'il est reçu par un notaire, il est dispensé de toute mention manuscrite exigée par la loi.", "chapitres": [6], "retenir": "Définition de l'acte authentique ; dispense de mention manuscrite devant notaire."},
  {"num": "1394", "code": "C. civ.", "theme": "Solennité", "texte": "Toutes les conventions matrimoniales seront rédigées par acte devant notaire, en la présence et avec le consentement simultanés de toutes les personnes qui y sont parties ou de leurs mandataires.\n\nAu moment de la signature du contrat, le notaire délivre aux parties un certificat sur papier libre et sans frais, énonçant ses nom et lieu de résidence, les noms, prénoms, qualités et demeures des futurs époux, ainsi que la date du contrat. Ce certificat indique qu'il doit être remis à l'officier de l'état civil avant la célébration du mariage.\n\nSi l'acte de mariage mentionne qu'il n'a pas été fait de contrat, les époux seront, à l'égard des tiers, réputés mariés sous le régime de droit commun, à moins que, dans les actes passés avec ces tiers, ils n'aient déclaré avoir fait un contrat de mariage.", "chapitres": [6], "retenir": "Contrat de mariage par acte notarié."},
  {"num": "1875", "code": "C. civ.", "theme": "Contrat réel", "texte": "Le prêt à usage est un contrat par lequel l'une des parties livre une chose à l'autre pour s'en servir, à la charge par le preneur de la rendre après s'en être servi.", "chapitres": [6], "retenir": "Prêt à usage : la chose est livrée pour s'en servir puis la rendre."},
  {"num": "1892", "code": "C. civ.", "theme": "Contrat réel", "texte": "Le prêt de consommation est un contrat par lequel l'une des parties livre à l'autre une certaine quantité de choses qui se consomment par l'usage, à la charge par cette dernière de lui en rendre autant de même espèce et qualité.", "chapitres": [6], "retenir": "Prêt de consommation."},
  {"num": "1919", "code": "C. civ.", "theme": "Contrat réel", "texte": "Il n'est parfait que par la remise réelle ou fictive de la chose déposée.\n\nLa remise fictive suffit quand le dépositaire se trouve déjà nanti, à quelque autre titre, de la chose que l'on consent à lui laisser à titre de dépôt.", "chapitres": [6], "retenir": "Dépôt parfait par la remise réelle ou fictive."}
);
