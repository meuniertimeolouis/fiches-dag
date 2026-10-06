/* Chapitre 17 — Les conditions communes à toute responsabilité
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 17,
  intro: "Quel que soit le fait générateur (faute, fait des choses, fait d'autrui, régime spécial) et quelle que soit la nature de la responsabilité (contractuelle ou extracontractuelle), deux conditions sont toujours exigées : un **préjudice réparable** et un **lien de causalité** entre ce préjudice et le fait imputé au défendeur. Ce chapitre traite aussi de ce qui en découle : les **causes d'exonération** (force majeure, fait du tiers, faute de la victime), la **pluralité de responsables** et les règles de la **réparation** (réparation intégrale, pouvoir souverain des juges, nouvelle sanction civile de [[1254]]).",
  sections: [
    {
      titre: "L'action en responsabilité",
      contenu: [
        { p: "La réparation s'obtient soit à l'amiable, le plus souvent par une **transaction**, qui fait obstacle à toute action en justice entre les parties ayant le même objet ([[2052]]), soit en justice." },
        { h: "Qui peut agir ?" },
        { liste: [
          "La **victime** elle-même.",
          "Ses **héritiers** : le droit à réparation naît dans son patrimoine dès le dommage et se transmet à son décès, y compris pour son préjudice **moral** (Ch. mixte, 30 avr. 1976).",
          "Ses **créanciers**, par l'action oblique, mais seulement pour les préjudices **patrimoniaux** : les droits exclusivement attachés à la personne (préjudice corporel ou moral) leur échappent ([[1341-1]])."
        ] },
        { h: "Dans quel délai ?" },
        { schema: { type: "tableau", titre: "Délais de prescription de l'action en responsabilité", colonnes: ["Hypothèse", "Durée", "Point de départ", "Texte"], lignes: [
          ["Droit commun (contractuel ou extracontractuel)", "**5 ans**", "Jour où la victime a connu ou aurait dû connaître les faits, c'est-à-dire la manifestation du dommage (Civ. 1re, 11 mars 2010)", "[[2224]]"],
          ["Dommage **corporel** (victime directe ou indirecte), atteintes psychiques comprises", "**10 ans**", "**Consolidation** du dommage initial ou aggravé (atteintes psychiques comprises : Civ. 2e, 7 juill. 2022, n° 20-19.147)", "[[2226]], al. 1er"],
          ["Tortures, actes de barbarie, violences ou agressions sexuelles contre un mineur", "**20 ans**", "Idem", "[[2226]], al. 2"],
          ["Produits défectueux", "**3 ans** (et extinction à 10 ans)", "Connaissance du dommage, du défaut et du producteur", "[[1245-16]]"]
        ] } },
        { attention: "Avant la loi du 17 juin 2008, l'action contractuelle se prescrivait par trente ans et l'action délictuelle par dix ans. Ne citez plus ces délais comme droit positif." }
      ]
    },
    {
      titre: "Le préjudice réparable : ses caractères",
      contenu: [
        { def: { terme: "Dommage et préjudice", texte: "le **dommage** est le fait matériel, le siège de l'atteinte (atteinte au corps, à une chose) ; le **préjudice** en est la conséquence juridique, la lésion d'intérêts patrimoniaux ou extrapatrimoniaux (pertes de salaires, souffrances). Un même dommage corporel engendre plusieurs préjudices." } },
        { p: "Le préjudice est la **première condition** de toute responsabilité, y compris contractuelle : le créancier doit prouver un préjudice pour obtenir des dommages et intérêts (rappel : Civ. 3e, 27 juin 2024). Il n'est réparable que s'il réunit **quatre caractères cumulatifs**." },
        { schema: { type: "arbre", titre: "Le préjudice réparable", racine: { t: "Préjudice réparable", enfants: [
          { t: "Personnel", d: "subi par le demandeur lui-même ; questions : victimes par ricochet, groupements, préjudice écologique" },
          { t: "Certain", d: "actuel ou futur mais certain ; la **perte de chance** est un préjudice certain ; le préjudice éventuel ne l'est pas" },
          { t: "Direct", d: "renvoie au lien de causalité" },
          { t: "Légitime", d: "lésion d'un intérêt licite (art. 31 C. pr. civ.) ; ex. rémunérations illicites exclues" }
        ] } } },
        { h: "Un préjudice personnel" },
        { liste: [
          "**Victime par ricochet** : le fait générateur atteint une autre personne, mais son préjudice (affection, perte de revenus) lui est **propre**. À ne pas confondre avec l'action que les **héritiers** exercent au nom du défunt : les proches peuvent cumuler les deux qualités et demander réparation de deux préjudices distincts.",
          "**Syndicats** : action légale pour l'intérêt collectif de la profession (C. trav., art. L. 2132-3).",
          "**Associations** : elles défendent les intérêts individuels de leurs membres ; pour l'**intérêt collectif**, même sans habilitation légale, l'action est admise s'il entre dans leur **objet social** (Civ. 3e, 26 sept. 2007 ; Civ. 1re, 18 sept. 2008) ; l'admission de l'action pour les intérêts individuels des membres remonte à Civ., 25 nov. 1929.",
          "**Action de groupe** : créée en 2014 pour les consommateurs, elle a été unifiée et largement ouverte par la loi n° 2025-391 du 30 avril 2025, pour le compte de plusieurs personnes placées dans une situation similaire résultant d'un même manquement d'un professionnel ou d'une personne publique."
        ] },
        { h: "Un préjudice certain : la perte de chance" },
        { def: { terme: "Perte de chance", texte: "« disparition actuelle et certaine d'une éventualité favorable » (Ass. plén., 27 juin 2025). Le préjudice final (gagner le procès, réussir le concours) est incertain ; la **chance** perdue, elle, est certaine et se répare, à condition d'être réelle et sérieuse : une chance purement hypothétique ne l'est pas (Civ. 2e, 12 mai 1966, refus pour une carrière de pharmacienne à peine envisagée)." } },
        { liste: [
          "Exemples : l'avocat qui laisse passer le délai d'appel fait perdre une chance de gagner ; l'étudiant blessé perd une chance d'exercer la profession visée si son parcours la rendait **réelle et sérieuse**.",
          "Réparation **à hauteur de la chance perdue**, jamais égale à l'avantage espéré.",
          "Le juge saisi d'une demande de réparation de l'entier préjudice peut rechercher s'il existe une perte de chance, et ne peut pas refuser d'indemniser une perte de chance qu'il constate au motif qu'on ne lui a demandé que la réparation intégrale (Ass. plén., 27 juin 2025)."
        ] },
        { schema: { type: "etapes", titre: "Chiffrer une perte de chance", etapes: [
          { t: "Vérifier que la chance était réelle et sérieuse", d: "sinon, préjudice purement éventuel : rien" },
          { t: "Évaluer l'avantage espéré", d: "ex. 60 000 € de condamnation qu'aurait obtenue le client" },
          { t: "Fixer *in concreto* la probabilité perdue", d: "ex. 50 % de chances de succès en appel" },
          { t: "Multiplier", d: "60 000 € × 50 % = 30 000 € de dommages et intérêts" }
        ] } },
        { h: "Un préjudice légitime" },
        { p: "Seule la lésion d'un **intérêt licite** est réparable : une victime n'obtient la perte de ses rémunérations que si elles sont **licites** (Civ. 2e, 24 janv. 2002). Deux illustrations ont marqué l'évolution du droit." },
        { schema: { type: "frise", titre: "Concubinage et naissance : l'évolution de la légitimité", evenements: [
          { date: "27 juill. 1937", t: "Civ.", d: "refus d'indemniser le concubin : il faut la lésion d'un intérêt juridiquement protégé" },
          { date: "27 févr. 1970", t: "Ch. mixte (Dangereux)", d: "le concubin survivant est indemnisé ; seule limite : une relation **stable**, pour la certitude du préjudice" },
          { date: "17 nov. 2000", t: "Ass. plén. (Perruche)", d: "l'enfant né handicapé, dont la mère a été privée par des fautes médicales de la possibilité d'interrompre sa grossesse, est indemnisé du préjudice résultant de son handicap" },
          { date: "4 mars 2002", t: "Loi « anti-Perruche »", d: "nul ne peut se prévaloir d'un préjudice du seul fait de sa naissance (CASF, art. L. 114-5) ; les parents ne sont indemnisés que de **leur propre préjudice**, sur preuve d'une **faute caractérisée**" },
          { date: "6 oct. 2005", t: "CEDH (Draon et Maurice c/ France)", d: "l'application immédiate aux instances en cours viole le droit au respect des biens" },
          { date: "11 juin 2010", t: "Cons. const., n° 2010-2 QPC", d: "disposition transitoire censurée : la loi ne vaut que pour les enfants nés après son entrée en vigueur" }
        ] } },
        { p: "La **faute caractérisée** exigée des praticiens s'apprécie selon la jurisprudence (Civ. 1re, 16 janv. 2013). Le préjudice propre des parents ne se limite plus au préjudice moral : il peut inclure des pertes de gains professionnels et une incidence professionnelle, lorsqu'ils cessent ou modifient leur activité pour s'occuper de l'enfant handicapé (Civ. 1re, 15 oct. 2024, n° 24-16.323)." }
      ]
    },
    {
      titre: "Le préjudice écologique",
      contenu: [
        { p: "L'atteinte à l'environnement peut léser une personne (préjudice individuel classique) ou la **nature elle-même** : c'est le **préjudice écologique pur**, qui heurte le caractère personnel. Après l'affaire de l'**Erika** (Crim., 25 sept. 2012), la loi du 8 août 2016 pour la reconquête de la biodiversité l'a consacré aux articles [[1246]] à [[1252]]." },
        { def: { terme: "Préjudice écologique", texte: "« atteinte **non négligeable** aux éléments ou aux fonctions des écosystèmes ou aux bénéfices collectifs tirés par l'homme de l'environnement » ([[1247]] ; conforme à la Constitution : Cons. const., 5 févr. 2021, n° 2020-881 QPC)." } },
        { schema: { type: "tableau", titre: "Le régime des articles 1246 à 1252", colonnes: ["Question", "Réponse", "Texte"], lignes: [
          ["Qui répond ?", "Toute personne responsable d'un préjudice écologique", "[[1246]]"],
          ["Qui agit ?", "Toute personne ayant qualité et intérêt : État, Office français de la biodiversité, collectivités territoriales concernées, établissements publics, associations agréées ou créées depuis au moins cinq ans ayant pour objet la protection de la nature", "[[1248]]"],
          ["Comment répare-t-on ?", "**Par priorité en nature** ; à défaut, dommages et intérêts **affectés** à la réparation de l'environnement, versés au demandeur ou, s'il ne peut agir utilement, à l'État", "[[1249]]"],
          ["Astreinte", "Liquidée au profit du demandeur, qui l'affecte à l'environnement, ou de l'État", "[[1250]]"],
          ["Dépenses de prévention", "Préjudice réparable (éviter, empêcher l'aggravation, réduire les conséquences)", "[[1251]]"],
          ["Mesures préventives", "Le juge peut prescrire les mesures raisonnables pour prévenir ou faire cesser le dommage", "[[1252]]"],
          ["Prescription", "**10 ans** à compter de la connaissance de la manifestation du préjudice", "[[2226-1]]"]
        ] } }
      ]
    },
    {
      titre: "Les préjudices réparables",
      contenu: [
        { h: "Préjudices patrimoniaux et extrapatrimoniaux" },
        { liste: [
          "**Perte subie** (*damnum emergens*) : destruction d'une chose, frais exposés.",
          "**Gain manqué** (*lucrum cessans*) : bénéfice d'une revente perdue, clientèle détournée. Un même fait cause souvent les deux (œuvre détruite que l'on comptait revendre avec plus-value).",
          "**Préjudice extrapatrimonial (moral)** : atteinte aux sentiments ou aux droits de la personnalité (vie privée, honneur, image, droit moral de l'auteur). Longtemps discutée (« les larmes ne se monnayent pas »), sa réparation est acquise ; les dommages et intérêts y sont plus satisfactoires que compensatoires."
        ] },
        { h: "Le préjudice d'anxiété" },
        { schema: { type: "frise", titre: "Du salarié de l'amiante à toute personne exposée", evenements: [
          { date: "11 mai 2010", t: "Soc.", d: "réparation de l'inquiétude permanente des salariés exposés à l'amiante, soumis à des contrôles qui réactivent l'angoisse" },
          { date: "3 mars 2015", t: "Soc.", d: "restriction aux salariés des établissements ouvrant droit à la préretraite amiante (ACAATA)" },
          { date: "5 avr. 2019", t: "Ass. plén., n° 18-17.442", d: "revirement : tout salarié exposé à l'amiante avec un **risque élevé de pathologie grave** peut agir, sur le fondement de l'obligation de sécurité de l'employeur" },
          { date: "11 sept. 2019", t: "Soc., n° 17-24.879", d: "extension à toute **substance nocive ou toxique** ; le salarié doit prouver une anxiété personnellement subie" },
          { date: "18 févr. 2026", t: "Civ. 1re, n° 21-23.415 (Distilbène)", d: "hors du travail : l'anxiété née d'un risque élevé de pathologie grave est caractérisée par la seule **connaissance** de ce risque par la victime ; le préjudice était déjà admis pour des effets secondaires de médicaments ou substances dangereuses (Civ. 2e, 15 juin 2023 ; Civ. 1re, 18 déc. 2024, qui le rejette faute de preuve d'une exposition à un risque élevé)" }
        ] } },
        { h: "Le dommage corporel et la nomenclature Dintilhac" },
        { p: "Élaborée en 2005 par un groupe de travail présidé par J.-P. Dintilhac, la nomenclature n'a **pas de valeur normative**, mais tous les acteurs l'utilisent. Elle croise deux distinctions : préjudices **patrimoniaux / extrapatrimoniaux** et préjudices **temporaires** (avant la **consolidation**) / **permanents** (après). Le juge doit distinguer les postes pour permettre le recours poste par poste des tiers payeurs (loi du 5 juill. 1985, art. 31)." },
        { schema: { type: "tableau", titre: "Nomenclature Dintilhac : victime directe", colonnes: ["", "Avant consolidation (temporaires)", "Après consolidation (permanents)"], lignes: [
          ["**Patrimoniaux**", "Dépenses de santé actuelles ; frais divers ; pertes de gains professionnels actuels", "Dépenses de santé futures ; logement et véhicule adaptés ; assistance par tierce personne ; pertes de gains professionnels futurs ; incidence professionnelle ; préjudice scolaire, universitaire ou de formation"],
          ["**Extrapatrimoniaux**", "Déficit fonctionnel temporaire ; **souffrances endurées** ; préjudice esthétique temporaire", "Déficit fonctionnel permanent ; **préjudice d'agrément** ; préjudice esthétique permanent ; **préjudice sexuel** ; préjudice d'établissement ; préjudices permanents exceptionnels"],
          ["Hors consolidation", "Préjudices liés à des pathologies évolutives", ""]
        ] } },
        { liste: [
          "**Déficit fonctionnel** : perte de qualité de vie et troubles dans les conditions d'existence, indépendamment des revenus ; poste **extrapatrimonial**, temporaire ou permanent.",
          "**Préjudice d'agrément** : impossibilité de pratiquer **régulièrement** une activité **spécifique** sportive ou de loisirs (Civ. 2e, 28 mai 2009), à prouver (Civ. 2e, 29 mars 2018) ; il ne recouvre plus la perte générale des agréments de la vie, que l'assemblée plénière y avait incluse (Ass. plén., 19 déc. 2003) et qu'absorbe désormais le déficit fonctionnel (revirement du 28 mai 2009).",
          "**Souffrances endurées** (ancien *pretium doloris*) : souffrances physiques et morales jusqu'à la consolidation.",
          "**Préjudice esthétique** : atteinte à l'apparence (cicatrices), temporaire ou permanent.",
          "**Préjudice sexuel** : morphologique, lié à l'acte sexuel, lié à la procréation (Civ. 2e, 17 juin 2010).",
          "**Perte de gains professionnels futurs** : calculée selon l'évolution probable des revenus ; une perte **totale** suppose l'impossibilité définitive, après consolidation, d'exercer une quelconque activité rémunératrice (Civ. 2e, 10 oct. 2024, n° 23-12.612) ; l'**incidence professionnelle** couvre la dévalorisation sur le marché du travail, la pénibilité, la perte de retraite.",
          "**Préjudice d'angoisse de mort imminente** : poste **autonome** pour la victime consciente de sa mort prochaine, qui met fin à une divergence entre la 2e chambre civile (Civ. 2e, 16 sept. 2010 : refus) et la chambre criminelle (Crim., 15 oct. 2013 : admission) ; il est retenu même si la victime survit (Civ. 2e, 11 juill. 2024) (Ch. mixte, 25 mars 2022, n° 20-15.624, qui reconnaît le même jour le préjudice d'**attente et d'inquiétude** des proches, n° 20-17.072)."
        ] },
        { h: "Les victimes par ricochet" },
        { p: "L'ancienne exigence d'un **lien de droit** (parenté, alliance, obligation alimentaire) avec la victime directe est abandonnée : suffit un préjudice **personnel et certain**. En pratique, le cercle familial proche est indemnisé (conjoint ou concubin, enfants, parents, frères et sœurs) ; un tiers peut l'être s'il prouve un lien d'affection particulier (Civ. 2e, 16 avr. 1996), et un parent sans lien réel avec la victime peut ne rien obtenir." },
        { schema: { type: "tableau", titre: "Préjudices des victimes par ricochet", colonnes: ["", "Décès de la victime directe", "Survie de la victime directe"], lignes: [
          ["Patrimoniaux", "Frais d'obsèques ; **perte de revenus** des proches (part des revenus du défunt consacrée à chacun, durée prévisible) ; frais divers", "Pertes de revenus des proches (ex. arrêt de travail pour l'assister) ; frais divers"],
          ["Extrapatrimoniaux", "**Préjudice d'affection** ; préjudice d'accompagnement", "Préjudice d'affection ; préjudices extrapatrimoniaux exceptionnels (bouleversement de la vie familiale)"]
        ] } },
        { arret: { ref: "Civ. 2e, 14 déc. 2017, n° 16-26.687 ; Civ. 2e, 11 févr. 2021, n° 19-23.525", apport: "L'enfant **déjà conçu** au décès de son père (2017), ou de son grand-père (2021), peut obtenir réparation du préjudice moral que lui cause l'absence définitive du défunt (règle *infans conceptus*). En revanche, l'enfant **non encore conçu** n'a pas de préjudice en lien de causalité avec le décès (Civ. 2e, 11 mars 2021)." } },
        { attention: "Le préjudice des victimes par ricochet est soumis aux **mêmes limites** que celui de la victime directe : sa faute leur est opposable (Ass. plén., 19 juin 1981) ; en matière d'accident de la circulation, [[L85-6|art. 6 de la loi de 1985]]." }
      ]
    },
    {
      titre: "La réparation du préjudice",
      contenu: [
        { p: "Le droit à réparation naît au jour du dommage, mais le préjudice est **évalué au jour du jugement** (Civ., 15 juill. 1943), qui est déclaratif : la victime ne subit pas l'érosion monétaire." },
        { h: "Le principe de réparation intégrale" },
        { p: "Réparer « **tout le préjudice, mais rien que le préjudice** » : replacer la victime dans la situation où elle se serait trouvée sans le fait dommageable, sans perte ni profit." },
        { liste: [
          "**Tout le préjudice** : pas de réparation partielle, sauf exceptions (clause limitative en matière contractuelle ; en matière contractuelle, seul le dommage **prévisible** est dû, sauf faute lourde ou dolosive, [[1231-3]]). Le juge ne peut pas réduire l'indemnité au motif que son coût serait **disproportionné** pour le responsable (Civ. 3e, 4 avr. 2024, n° 22-21.132).",
          "**Pas d'obligation de minimiser son dommage** : « la victime n'est pas tenue de limiter son préjudice dans l'intérêt du responsable » (Civ. 2e, 19 juin 2003, deux arrêts). Solution critiquée ; le projet de réforme de 2017 prévoyait une réduction sauf dommage corporel.",
          "**Rien que le préjudice** : pas d'enrichissement de la victime, donc pas de **dommages et intérêts punitifs** ; l'indemnité ne varie pas avec la gravité de la faute.",
          "**Bien usagé** : s'il est réparable, coût de la réparation ; sinon, coût de remplacement (valeur vénale d'un bien équivalent d'occasion) ; à défaut de marché, valeur à neuf, **sans abattement pour vétusté** (Civ. 2e, 23 janv. 2003)."
        ] },
        { h: "L'exception : la sanction civile de l'article 1254" },
        { p: "Créée par la loi n° 2025-391 du 30 avril 2025 (art. 16), en vigueur depuis le 3 mai 2025, elle sanctionne la **faute lucrative** : une somme s'ajoute aux dommages et intérêts compensatoires." },
        { schema: { type: "tableau", titre: "La sanction civile ([[1254]])", colonnes: ["Élément", "Contenu"], lignes: [
          ["Auteur", "Personne reconnue responsable d'un manquement à ses obligations **légales ou contractuelles** liées à son **activité professionnelle**"],
          ["Faute", "Commise **délibérément** en vue d'obtenir un **gain ou une économie indus**"],
          ["Victimes", "Dommages causés à **plusieurs** personnes physiques ou morales placées dans une **situation similaire** (pas de sanction pour une victime unique)"],
          ["Demandeur", "Le **ministère public** (juge judiciaire) ou le **Gouvernement** (juge administratif), jamais la victime ; décision spécialement motivée"],
          ["Montant", "Proportionné à la gravité de la faute et au profit retiré ; plafond : **double** du profit pour une personne physique, **quintuple** pour une personne morale"],
          ["Bénéficiaire", "Un **fonds** finançant les actions de groupe, pas la victime"],
          ["Assurance", "Risque **non assurable**"]
        ] } },
        { h: "Le pouvoir souverain des juges du fond" },
        { liste: [
          "L'évaluation est une question de **fait**, relevant du pouvoir souverain des juges du fond (Ass. plén., 26 mars 1999) : les juges du fond n'ont pas à justifier leur méthode ni, hors dommage corporel, à détailler les chefs de préjudice.",
          "Ils choisissent le **mode de réparation** : dommages et intérêts (le plus fréquent) ou réparation **en nature** (remise en état, démolition, cessation du trouble) ; pour le préjudice écologique, la réparation en nature est **prioritaire** ([[1249]]).",
          "Contrôle de la Cour de cassation : respect de la **réparation intégrale** et appréciation ***in concreto*** (interdiction d'appliquer un barème)."
        ] }
      ]
    },
    {
      titre: "Le lien de causalité",
      contenu: [
        { p: "Le préjudice doit avoir été **causé** par le fait imputé au défendeur. En matière contractuelle, les dommages et intérêts ne comprennent que ce qui est une **suite immédiate et directe** de l'inexécution ([[1231-4]]) ; en matière délictuelle, l'exigence découle des mots « qui cause à autrui un dommage » ([[1240]])." },
        { schema: { type: "tableau", titre: "Deux théories doctrinales", colonnes: ["", "Équivalence des conditions", "Causalité adéquate"], lignes: [
          ["Idée", "Est cause **tout événement sans lequel** le dommage ne se serait pas produit (*condition sine qua non*)", "N'est cause que l'événement qui, selon le cours normal des choses, rendait le dommage **probable**"],
          ["Avantage", "Simple, favorable à la victime", "Écarte les faits trop lointains"],
          ["Limite", "Risque de remonter à l'infini", "Tri parfois arbitraire"],
          ["Exemple", "Accident de la route suivi d'une opération au cours de laquelle l'œil est lésé : l'accident est une cause (Civ. 2e, 27 janv. 2000)", "L'appel téléphonique qui fait sortir la victime n'est pas la cause de l'accident de la route"],
          ["Jurisprudence", "Préférence marquée dans les arrêts récents de la 2e chambre civile", "Préférence traditionnelle ; la Cour de cassation n'a jamais consacré l'une ou l'autre en termes de principe"]
        ] } },
        { p: "Tout événement résulte d'une multitude de causes : les prendre toutes en compte conduirait, selon la formule de G. Marty, à « la causalité de l'univers », d'où la nécessité d'un tri. La 2e chambre civile a retenu l'accident de la route à l'origine d'une opération au cours de laquelle l'œil a été lésé (Civ. 2e, 27 janv. 2000 ; dans le même sens Civ. 2e, 2 juin 2005). Quelle que soit la théorie, la jurisprudence exige un lien **certain** (le fait a été nécessaire au dommage ; en cas de doute, pas de responsabilité) et **direct**." },
        { h: "La preuve" },
        { liste: [
          "Charge : la **victime**, demanderesse.",
          "Moyens : **tous moyens**, car la causalité est un fait juridique ([[1358]]) ; les **présomptions de fait** graves, précises et concordantes sont très utilisées (produits de santé : CJUE, 21 juin 2017).",
          "Présomptions **légales** : contamination par le VIH ou l'hépatite C après transfusion ; imputabilité du dommage à l'accident de la circulation.",
          "**Causalité alternative** : quand l'auteur, membre d'un groupe identifié, est inconnu. Distilbène : la victime qui prouve son exposition à la molécule peut agir contre chaque laboratoire l'ayant fabriquée, à charge pour lui de prouver que son produit n'est pas en cause (Civ. 1re, 24 sept. 2009) ; même raisonnement pour une infection nosocomiale contractée dans l'un de plusieurs établissements (Civ. 1re, 17 juin 2010). Refus en revanche pour une compresse oubliée après deux interventions successives (Civ. 1re, 3 nov. 2016)."
        ] }
      ]
    },
    {
      titre: "Les causes d'exonération et la pluralité de responsables",
      contenu: [
        { p: "Quand plusieurs événements ont concouru au dommage, deux voies : soit une cause étrangère **rompt** le lien causal (exonération totale), soit plusieurs causes sont retenues, ce qui conduit à un **partage** (faute de la victime) ou à une **obligation *in solidum*** (coauteurs)." },
        { h: "La force majeure" },
        { def: { terme: "Force majeure", texte: "événement **imprévisible** et **irrésistible** (Ass. plén., 14 avr. 2006, deux arrêts), traditionnellement aussi **extérieur** au défendeur. En matière contractuelle : événement **échappant au contrôle du débiteur**, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées ([[1218]])." } },
        { p: "Elle exonère **totalement** : elle est la seule cause juridique du dommage. La causalité partielle admise par l'arrêt *Lamoricière* (Com., 19 juin 1951), qui laissait à la charge du gardien une fraction du dommage, est abandonnée." },
        { h: "La faute de la victime" },
        { liste: [
          "Si elle présente les caractères de la force majeure : exonération **totale**.",
          "Sinon : exonération **partielle**, par un partage fondé sur le rôle causal et la gravité respective des fautes. L'arrêt *Desmares* (Civ. 2e, 21 juill. 1982), qui refusait tout partage en matière de fait des choses, a été abandonné (Civ. 2e, 6 avr. 1987).",
          "La faute d'un **enfant en bas âge**, même privé de discernement, peut lui être opposée (Ass. plén., 9 mai 1984, *Lemaire* et *Derguini*).",
          "Régimes spéciaux : loi de 1985 ([[L85-3|art. 3]], [[L85-4|art. 4]], [[L85-5|art. 5]]) ; produits défectueux ([[1245-12]])."
        ] },
        { attention: "Ass. plén., 29 mai 2026, n° 23-20.005 : l'organisateur professionnel d'une activité sportive ou de loisir doit dispenser les consignes de sécurité nécessaires ; à défaut, il ne peut obtenir une exonération **partielle** en invoquant la **faute d'imprudence** de la victime d'un dommage corporel (responsabilité contractuelle)." },
        { h: "Le fait du tiers et l'obligation *in solidum*" },
        { p: "Le fait d'un tiers n'exonère le défendeur que s'il présente les caractères de la **force majeure** (exonération totale). Sinon, il n'a **aucun effet** à l'égard de la victime : tous les coauteurs d'un même dommage sont tenus ***in solidum***, chacun pour le tout, même s'ils sont responsables sur des fondements différents (contractuel et délictuel, pour faute et sans faute). Ex. : deux chasseurs tirent en même temps sur un promeneur." },
        { schema: { type: "tableau", titre: "L'obligation *in solidum* : dette et contribution", colonnes: ["Stade", "Règle"], lignes: [
          ["**Obligation à la dette** (victime / responsables)", "La victime réclame la **totalité** à l'un quelconque des coauteurs, ou les assigne ensemble"],
          ["**Contribution à la dette** (entre coauteurs)", "Celui qui a payé exerce un **recours subrogatoire** contre les autres"],
          ["Plusieurs fautes", "Partage selon la **gravité** respective des fautes"],
          ["Plusieurs responsables sans faute", "Partage **par parts égales** (parts viriles), sauf cas particuliers"],
          ["Un fautif et un responsable sans faute", "La charge définitive pèse **entièrement sur le fautif**"]
        ] } },
        { attention: "*In solidum* n'est pas solidarité : la solidarité ne se présume pas ([[1310]]) et suppose un texte ou une clause ; l'obligation *in solidum* est une création jurisprudentielle qui produit l'effet principal de la solidarité (paiement du tout) sans ses effets secondaires." },
        { schema: { type: "tableau", titre: "Synthèse des causes d'exonération selon le régime", colonnes: ["Cause", "Droit commun", "Loi Badinter", "Produits défectueux"], lignes: [
          ["Force majeure", "Exonération totale", "**Inopposable** ([[L85-2|art. 2]])", "Hors liste de [[1245-10]]"],
          ["Fait du tiers", "Totale s'il a les caractères de la force majeure ; sinon *in solidum*", "**Inopposable** ([[L85-2|art. 2]])", "**Aucune réduction** ([[1245-13]])"],
          ["Faute de la victime", "Totale si force majeure ; sinon partielle", "Selon la victime et le dommage ([[L85-3|art. 3]] à [[L85-5|5]])", "Réduction ou suppression ([[1245-12]])"]
        ] } }
      ]
    }
  ],
  retenir: [
    "Deux conditions communes : un préjudice réparable et un lien de causalité ; le préjudice est exigé même en matière contractuelle.",
    "Préjudice réparable : **personnel, certain, direct, légitime** ; perte de chance réparée à proportion de la chance perdue (Ass. plén., 27 juin 2025).",
    "Concubin indemnisé depuis Ch. mixte, 27 févr. 1970 ; pas de préjudice du seul fait de sa naissance (CASF, art. L. 114-5, contre Perruche).",
    "Préjudice écologique : atteinte non négligeable ([[1247]]) ; action ouverte à l'État, l'OFB, aux collectivités et associations ([[1248]]) ; réparation par priorité en nature ([[1249]]).",
    "Dommage corporel : nomenclature Dintilhac (patrimoniaux/extrapatrimoniaux, temporaires/permanents) ; préjudice d'agrément = activité spécifique régulière (Civ. 2e, 28 mai 2009) ; angoisse de mort imminente autonome (Ch. mixte, 25 mars 2022).",
    "Victimes par ricochet : pas de lien de droit exigé ; enfant conçu indemnisé (Civ. 2e, 14 déc. 2017 ; 11 févr. 2021).",
    "Réparation intégrale, évaluée au jour du jugement ; pas d'obligation de minimiser (Civ. 2e, 19 juin 2003) ; pas de dommages et intérêts punitifs, sauf sanction civile de [[1254]] (ministère public, pluralité de victimes, fonds).",
    "Causalité : équivalence des conditions ou causalité adéquate, lien certain et direct, preuve par tous moyens, présomptions (Distilbène, 2009).",
    "Force majeure : exonération totale ; faute de la victime : partielle sauf force majeure ; fait du tiers : in solidum sauf force majeure.",
    "Prescription : 5 ans ([[2224]]) ; 10 ans à compter de la consolidation pour le dommage corporel ([[2226]])."
  ],
  articles: ["1218", "1231-2", "1231-3", "1231-4", "1240", "1246", "1247", "1248", "1249", "1250", "1251", "1252", "1254", "1310", "1341-1", "1358", "2052", "2224", "2226", "2226-1", "1245-16", "L85-6"],
  regimes: ["prejudice-reparable", "causalite-exoneration", "prejudice-ecologique"],
  cas: ["ch17-echafaudage"],
  quiz: [
    { q: "Un homme décède dans un accident. Ses enfants, qui sont ses héritiers, peuvent demander réparation :", choix: ["De leur seul préjudice par ricochet", "De leur préjudice par ricochet et, en qualité d'héritiers, du préjudice subi par le défunt avant sa mort", "Du seul préjudice du défunt"], bonne: 1, expl: "Double qualité : victimes par ricochet et héritiers exerçant l'action du défunt, même pour son préjudice moral (Ch. mixte, 30 avr. 1976)." },
    { q: "Par la faute de son avocat, un client perd la possibilité de faire appel d'un jugement qui le condamnait à payer 80 000 € ; ses chances de succès en appel sont estimées à 25 %. Indemnité ?", choix: ["80 000 €", "20 000 €", "Rien : le succès de l'appel était incertain"], bonne: 1, expl: "Perte de chance réparée à hauteur de la chance perdue : 80 000 × 25 % = 20 000 €." },
    { q: "La compagne d'un homme tué dans un accident, avec qui il vivait depuis dix ans, demande réparation. Elle obtient :", choix: ["Rien, faute de lien de droit", "Son préjudice d'affection seulement", "Son préjudice d'affection et sa perte de soutien financier"], bonne: 2, expl: "Ch. mixte, 27 févr. 1970 : seule compte la stabilité de la relation, gage de la certitude du préjudice." },
    { q: "Une victime refuse de se faire opérer alors que l'intervention aurait réduit ses séquelles. Le responsable peut-il obtenir une réduction de l'indemnité ?", choix: ["Oui, pour faute de la victime", "Non : la victime n'est pas tenue de limiter son préjudice", "Oui, de moitié"], bonne: 1, expl: "Civ. 2e, 19 juin 2003." },
    { q: "Une ancienne sportive amateur, blessée, ne peut plus courir le marathon qu'elle préparait chaque année. Quel poste Dintilhac ?", choix: ["Préjudice d'agrément", "Souffrances endurées", "Incidence professionnelle"], bonne: 0, expl: "Impossibilité de pratiquer régulièrement une activité spécifique sportive ou de loisirs (Civ. 2e, 28 mai 2009)." },
    { q: "Qui peut demander la sanction civile de l'article 1254 devant le juge judiciaire ?", choix: ["La victime", "L'association de consommateurs", "Le ministère public"], bonne: 2, expl: "[[1254]], al. 1er ; le produit va à un fonds finançant les actions de groupe, et le risque n'est pas assurable." },
    { q: "Un gardien de chose poursuivi démontre qu'un tiers, par son imprudence non imprévisible, a concouru au dommage. Effet à l'égard de la victime ?", choix: ["Aucun : il est tenu in solidum pour le tout", "Exonération partielle", "Exonération totale"], bonne: 0, expl: "Le fait du tiers n'exonère que s'il présente les caractères de la force majeure ; sinon, recours en contribution entre coauteurs." },
    { q: "Une victime d'un dommage corporel est consolidée le 15 mars 2026. Jusqu'à quand peut-elle agir en droit commun ?", choix: ["15 mars 2031", "15 mars 2036", "Dix ans après l'accident"], bonne: 1, expl: "[[2226]] : dix ans à compter de la consolidation." },
    { q: "Une marée noire détruit une zone de nidification protégée. Comment se répare le préjudice écologique ?", choix: ["Par priorité en nature", "Par des dommages et intérêts librement utilisés par l'association demanderesse", "Il n'est pas réparable faute de victime personnelle"], bonne: 0, expl: "[[1249]] ; à défaut, dommages et intérêts affectés à la réparation de l'environnement." },
    { q: "Une voiture détruite n'a plus d'équivalent sur le marché de l'occasion. Indemnité ?", choix: ["Valeur vénale", "Valeur à neuf, diminuée d'un coefficient de vétusté", "Valeur à neuf, sans abattement pour vétusté"], bonne: 2, expl: "Coût de remplacement ; à défaut de marché, valeur à neuf sans vétusté (Civ. 2e, 23 janv. 2003)." }
  ]
});

OBL.regimes.push(
  {
    id: "prejudice-reparable",
    chapitre: "Conditions communes",
    titre: "Le préjudice réparable (grille par poste)",
    fondement: ["1240", "1231-2"],
    resume: "Pour chaque préjudice invoqué, vérifier qu'il est réparable, puis le rattacher à un poste et en mesurer l'étendue.",
    conditions: [
      { nom: "Personnel", question: "Le demandeur subit-il lui-même le préjudice (victime directe, par ricochet, héritier agissant au nom du défunt, groupement) ?", detail: "Victime par ricochet : préjudice propre ; pas de lien de droit exigé. Héritier : il exerce l'action du défunt. Association : intérêt collectif entrant dans son objet social.", piege: "Confondre le préjudice par ricochet et le préjudice du défunt transmis aux héritiers." },
      { nom: "Certain", question: "Le préjudice est-il actuel, ou futur mais certain ? S'agit-il de la perte d'une chance réelle et sérieuse ?", detail: "Préjudice éventuel exclu ; perte de chance réparée à proportion de la chance perdue (Ass. plén., 27 juin 2025).", preuve: "Victime, souvent par expertise.", piege: "Allouer le gain espéré en entier au lieu d'une fraction." },
      { nom: "Direct", question: "Le préjudice découle-t-il directement du fait générateur ?", detail: "Renvoie au lien de causalité ([[1231-4]] en matière contractuelle)." },
      { nom: "Légitime", question: "Le préjudice lèse-t-il un intérêt licite ?", detail: "Rémunérations illicites exclues (Civ. 2e, 24 janv. 2002) ; concubinage stable admis (Ch. mixte, 27 févr. 1970) ; pas de préjudice du seul fait de sa naissance (CASF, art. L. 114-5)." },
      { nom: "Le poste et le montant", question: "À quel poste le préjudice se rattache-t-il (perte subie, gain manqué, moral, poste Dintilhac) et combien vaut-il au jour du jugement ?", detail: "Réparation intégrale, évaluation *in concreto* au jour du jugement ; pas d'obligation de minimiser (Civ. 2e, 19 juin 2003).", piege: "Réclamer des dommages et intérêts punitifs : seule la sanction civile de [[1254]] existe, demandée par le ministère public." }
    ],
    exonerations: [],
    copie: [
      "Traiter les préjudices **un par un** : caractère, poste, évaluation.",
      "En dommage corporel, nommer les postes Dintilhac et distinguer avant et après consolidation."
    ]
  },
  {
    id: "causalite-exoneration",
    chapitre: "Conditions communes",
    titre: "Lien de causalité et causes d'exonération",
    fondement: ["1240", "1231-4", "1218"],
    resume: "Établir le lien entre le fait générateur et le préjudice, puis examiner ce qui peut le rompre ou le partager.",
    conditions: [
      { nom: "Un lien certain", question: "Le fait imputé au défendeur a-t-il été nécessaire à la réalisation du dommage ?", detail: "En cas de doute, pas de responsabilité.", preuve: "Victime, par tous moyens ; présomptions graves, précises et concordantes." },
      { nom: "Un lien direct", question: "Le dommage n'est-il pas trop éloigné du fait générateur ?", detail: "Équivalence des conditions (tendance récente, favorable à la victime) ou causalité adéquate." },
      { nom: "Une éventuelle présomption", question: "Un texte ou la jurisprudence présume-t-il le lien (transfusion, accident de la circulation, causalité alternative) ?", detail: "Distilbène : chaque laboratoire ayant produit la molécule doit prouver que son produit n'est pas en cause (Civ. 1re, 24 sept. 2009).", piege: "Oublier que la présomption n'est que simple." }
    ],
    exonerations: [
      { nom: "Force majeure", question: "L'événement était-il imprévisible et irrésistible (et extérieur) ?", detail: "Ass. plén., 14 avr. 2006 ; en matière contractuelle [[1218]].", effet: "Exonération totale ; pas de causalité partielle (abandon de Lamoricière)." },
      { nom: "Faute de la victime", question: "La victime a-t-elle commis une faute ayant concouru à son dommage ?", detail: "Faute d'un jeune enfant opposable (Ass. plén., 9 mai 1984) ; opposable aussi aux victimes par ricochet (Ass. plén., 19 juin 1981).", effet: "Partielle (partage) ; totale si elle a les caractères de la force majeure." },
      { nom: "Fait d'un tiers", question: "Un tiers a-t-il contribué au dommage ?", detail: "Sans les caractères de la force majeure, il n'a pas d'effet envers la victime.", effet: "Totale si force majeure ; sinon obligation *in solidum* et recours en contribution." }
    ],
    copie: [
      "Vérifier le régime : la loi de 1985 écarte force majeure et fait du tiers ; [[1245-13]] écarte le fait du tiers.",
      "Pour la contribution entre coauteurs : gravité des fautes ; parts égales entre responsables sans faute ; charge sur le fautif face à un responsable sans faute."
    ]
  },
  {
    id: "prejudice-ecologique",
    chapitre: "Conditions communes",
    titre: "Action en réparation du préjudice écologique",
    fondement: ["1246", "1247", "1248", "1249", "2226-1"],
    resume: "Obtenir la réparation d'une atteinte à l'environnement lui-même, indépendamment de tout préjudice individuel.",
    conditions: [
      { nom: "Un préjudice écologique", question: "Y a-t-il une atteinte non négligeable aux éléments ou fonctions des écosystèmes, ou aux bénéfices collectifs tirés de l'environnement ?", detail: "[[1247]].", piege: "Oublier le seuil : l'atteinte doit être **non négligeable**." },
      { nom: "Un responsable", question: "Le défendeur est-il responsable selon un fait générateur (faute, fait des choses, régime spécial) ?", detail: "[[1246]] : l'article ne crée pas de fait générateur autonome, il organise la réparation." },
      { nom: "Un demandeur recevable", question: "Le demandeur a-t-il qualité et intérêt (État, OFB, collectivité concernée, établissement public, association agréée ou de plus de cinq ans) ?", detail: "[[1248]]." },
      { nom: "Des délais respectés", question: "L'action est-elle engagée dans les dix ans de la connaissance de la manifestation du préjudice ?", detail: "[[2226-1]] : dix ans à compter du jour où le titulaire de l'action a connu ou aurait dû connaître la manifestation du préjudice écologique." }
    ],
    exonerations: [],
    copie: [
      "Réparation **par priorité en nature** ; à défaut, dommages et intérêts affectés à l'environnement ([[1249]]) ; dépenses de prévention réparables ([[1251]])."
    ]
  }
);

OBL.cas.push({
  id: "ch17-echafaudage",
  titre: "La planche de l'échafaudage",
  seance: "Chapitre 17",
  regimes: ["prejudice-reparable", "causalite-exoneration"],
  faits: "Le 3 juin 2025, à Lyon, une planche mal fixée tombe d'un échafaudage installé par la société Échafaudix pour ravaler une façade. Météo-France avait placé le département en vigilance orange pour des rafales de vent, qui ont atteint 70 km/h ce jour-là. La planche blesse à la main Nina, 24 ans, violoniste diplômée du conservatoire : pour gagner du temps, elle avait enjambé la barrière portant la mention « passage interdit, contournez par le trottoir d'en face ». Nina devait passer le 10 juin l'épreuve finale d'une audition pour un poste de violon dans un orchestre national : trois finalistes restaient en lice pour un seul poste. Elle n'a pas pu s'y présenter. Consolidée le 15 janvier 2026, elle garde une raideur de deux doigts qui lui interdit la carrière de soliste ou de musicienne d'orchestre, ainsi qu'une cicatrice visible ; elle ne peut plus pratiquer l'escalade, qu'elle pratiquait en club deux fois par semaine. Elle a refusé une seconde opération, aux résultats incertains, qui aurait pu améliorer sa mobilité. Mehdi, son compagnon depuis trois ans, a pris deux mois de congé sans solde pour l'assister. Échafaudix, qui ne conteste pas être gardienne de l'échafaudage, invoque la tempête, la faute de Nina et son refus de l'opération. Nina réclame aussi une somme « pour punir » l'entreprise, déjà rappelée à l'ordre par l'inspection du travail.",
  question: "Quels préjudices Nina et Mehdi peuvent-ils obtenir réparation, dans quelle mesure, et jusqu'à quand peuvent-ils agir ?",
  corrige: {
    qualification: "La responsabilité d'Échafaudix, gardienne de l'échafaudage, est engagée sur le fondement de l'article 1242, al. 1er ; la question porte sur les conditions communes : préjudices réparables de la victime directe (Nina) et d'une victime par ricochet (Mehdi), causes d'exonération invoquées (vent, faute de la victime), refus de soins, dommages et intérêts punitifs et prescription.",
    probleme: "Quels préjudices sont réparables et comment les évaluer, notamment la perte d'une chance d'obtenir un poste ? Les rafales de vent ou la faute de la victime exonèrent-elles le gardien ? Le refus d'une opération réduit-il l'indemnité ? Des dommages et intérêts punitifs peuvent-ils être alloués ?",
    majeure: "Le préjudice réparable doit être personnel, certain, direct et légitime ; la perte de chance, disparition actuelle et certaine d'une éventualité favorable, est réparée à hauteur de la chance perdue (Ass. plén., 27 juin 2025). Le dommage corporel s'évalue selon la nomenclature Dintilhac ; le préjudice d'agrément est l'impossibilité de pratiquer régulièrement une activité sportive ou de loisirs spécifique (Civ. 2e, 28 mai 2009). La victime par ricochet est indemnisée de son préjudice personnel sans qu'un lien de droit soit exigé (Ch. mixte, 27 févr. 1970). La force majeure, imprévisible et irrésistible (Ass. plén., 14 avr. 2006), exonère totalement ; la faute de la victime qui n'en a pas les caractères exonère partiellement le gardien (Civ. 2e, 6 avr. 1987) et est opposable aux victimes par ricochet (Ass. plén., 19 juin 1981). La victime n'est pas tenue de limiter son préjudice dans l'intérêt du responsable (Civ. 2e, 19 juin 2003). La réparation est intégrale mais seulement compensatoire ; la sanction civile de l'article 1254 ne peut être demandée que par le ministère public et suppose plusieurs victimes. L'action en réparation d'un dommage corporel, par la victime directe ou indirecte, se prescrit par dix ans à compter de la consolidation (art. 2226).",
    mineure: [
      { condition: "Les rafales de vent", corrige: "Annoncées par une vigilance orange, elles étaient prévisibles, et une planche correctement fixée y aurait résisté : ni imprévisibilité ni irrésistibilité. Pas de force majeure." },
      { condition: "La faute de Nina", corrige: "Enjamber une barrière d'interdiction est une faute d'imprudence qui a concouru au dommage, sans être imprévisible ni irrésistible pour le gardien. Elle entraîne une exonération partielle : le juge fixera un partage (par exemple 20 % à la charge de Nina) qui s'appliquera à l'ensemble de ses préjudices." },
      { condition: "Les préjudices corporels de Nina", corrige: "Avant consolidation : dépenses de santé actuelles, déficit fonctionnel temporaire, souffrances endurées, préjudice esthétique temporaire. Après : déficit fonctionnel permanent (raideur), préjudice esthétique permanent (cicatrice), préjudice d'agrément (escalade pratiquée régulièrement en club, désormais impossible), incidence professionnelle (perte de la carrière de musicienne)." },
      { condition: "L'audition manquée", corrige: "Le succès était incertain : Nina ne peut obtenir la totalité des revenus du poste. Mais finaliste parmi trois candidats pour un poste, elle a perdu une chance réelle et sérieuse. Le juge fixera un pourcentage in concreto (un tiers en première approche, ajusté selon son niveau) appliqué au gain manqué. Illustration : chance estimée à 30 % d'un gain manqué de 400 000 € sur la carrière = 120 000 €, puis 96 000 € après un partage de 20 %." },
      { condition: "Le refus de la seconde opération", corrige: "La victime n'a pas à minimiser son dommage dans l'intérêt du responsable (Civ. 2e, 19 juin 2003), d'autant qu'aucun traitement médical ne peut être imposé sans consentement : pas de réduction de ce chef." },
      { condition: "Le préjudice de Mehdi", corrige: "Compagnon stable depuis trois ans, il a un préjudice personnel et certain : perte de revenus des deux mois de congé sans solde et préjudice d'affection lié à la dégradation de l'état de Nina. La faute de Nina lui est opposable : même partage." },
      { condition: "La somme « pour punir »", corrige: "Le droit français ignore les dommages et intérêts punitifs. La sanction civile de l'article 1254 suppose une faute délibérément commise pour obtenir un gain ou une économie indus, plusieurs victimes dans une situation similaire et une demande du ministère public ; Nina, victime unique, ne peut l'obtenir." },
      { condition: "La prescription", corrige: "Dommage corporel : dix ans à compter de la consolidation (art. 2226), soit jusqu'au 15 janvier 2036 pour Nina comme pour Mehdi, victime indirecte." }
    ],
    conclusion: "Échafaudix ne s'exonère pas par le vent, mais la faute de Nina réduit partiellement la réparation, pour elle comme pour Mehdi. Nina obtiendra, après partage, la réparation de ses postes Dintilhac (déficit fonctionnel, souffrances, préjudices esthétique et d'agrément, incidence professionnelle) et d'une fraction de la chance perdue d'obtenir le poste, sans réduction pour son refus de l'opération ni somme punitive. Mehdi obtiendra ses pertes de revenus et son préjudice d'affection. Tous deux peuvent agir jusqu'au 15 janvier 2036."
  }
});

OBL.articles.push(
  {"num": "1218", "code": "C. civ.", "theme": "Exonération", "texte": "Il y a force majeure en matière contractuelle lorsqu'un événement échappant au contrôle du débiteur, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, empêche l'exécution de son obligation par le débiteur.\n\nSi l'empêchement est temporaire, l'exécution de l'obligation est suspendue à moins que le retard qui en résulterait ne justifie la résolution du contrat. Si l'empêchement est définitif, le contrat est résolu de plein droit et les parties sont libérées de leurs obligations dans les conditions prévues aux articles 1351 et 1351-1.", "chapitres": [17], "retenir": "Définition contractuelle de la force majeure : événement échappant au contrôle du débiteur, imprévisible à la conclusion, aux effets inévitables."},
  {"num": "1231-2", "code": "C. civ.", "theme": "Réparation", "texte": "Les dommages et intérêts dus au créancier sont, en général, de la perte qu'il a faite et du gain dont il a été privé, sauf les exceptions et modifications ci-après.", "chapitres": [17], "retenir": "Dommages et intérêts contractuels : perte subie et gain manqué."},
  {"num": "1231-3", "code": "C. civ.", "theme": "Réparation", "texte": "Le débiteur n'est tenu que des dommages et intérêts qui ont été prévus ou qui pouvaient être prévus lors de la conclusion du contrat, sauf lorsque l'inexécution est due à une faute lourde ou dolosive.", "chapitres": [17], "retenir": "En matière contractuelle, seul le dommage prévisible est dû, sauf faute lourde ou dolosive."},
  {"num": "1231-4", "code": "C. civ.", "theme": "Causalité", "texte": "Dans le cas même où l'inexécution du contrat résulte d'une faute lourde ou dolosive, les dommages et intérêts ne comprennent que ce qui est une suite immédiate et directe de l'inexécution.", "chapitres": [17], "retenir": "Seule la suite immédiate et directe de l'inexécution est réparée."},
  {"num": "1240", "code": "C. civ.", "theme": "Causalité", "texte": "Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", "chapitres": [17], "retenir": "Le dommage doit être causé par le fait de l'homme."},
  {"num": "1246", "code": "C. civ.", "theme": "Préjudice écologique", "texte": "Toute personne responsable d'un préjudice écologique est tenue de le réparer.", "chapitres": [17], "retenir": "Toute personne responsable d'un préjudice écologique est tenue de le réparer."},
  {"num": "1247", "code": "C. civ.", "theme": "Préjudice écologique", "texte": "Est réparable, dans les conditions prévues au présent titre, le préjudice écologique consistant en une atteinte non négligeable aux éléments ou aux fonctions des écosystèmes ou aux bénéfices collectifs tirés par l'homme de l'environnement.", "chapitres": [17], "retenir": "Définition : atteinte non négligeable aux écosystèmes ou aux bénéfices collectifs tirés de l'environnement."},
  {"num": "1248", "code": "C. civ.", "theme": "Préjudice écologique", "texte": "L'action en réparation du préjudice écologique est ouverte à toute personne ayant qualité et intérêt à agir, telle que l'Etat, l'Office français de la biodiversité, les collectivités territoriales et leurs groupements dont le territoire est concerné, ainsi que les établissements publics et les associations agréées ou créées depuis au moins cinq ans à la date d'introduction de l'instance qui ont pour objet la protection de la nature et la défense de l'environnement.", "chapitres": [17], "retenir": "Titulaires de l'action : État, OFB, collectivités, établissements publics, associations agréées ou de plus de cinq ans."},
  {"num": "1249", "code": "C. civ.", "theme": "Préjudice écologique", "texte": "La réparation du préjudice écologique s'effectue par priorité en nature.\n\nEn cas d'impossibilité de droit ou de fait ou d'insuffisance des mesures de réparation, le juge condamne le responsable à verser des dommages et intérêts, affectés à la réparation de l'environnement, au demandeur ou, si celui-ci ne peut prendre les mesures utiles à cette fin, à l'Etat.\n\nL'évaluation du préjudice tient compte, le cas échéant, des mesures de réparation déjà intervenues, en particulier dans le cadre de la mise en œuvre du titre VI du livre Ier du code de l'environnement.", "chapitres": [17], "retenir": "Réparation par priorité en nature ; à défaut, dommages et intérêts affectés à l'environnement."},
  {"num": "1250", "code": "C. civ.", "theme": "Préjudice écologique", "texte": "En cas d'astreinte, celle-ci est liquidée par le juge au profit du demandeur, qui l'affecte à la réparation de l'environnement ou, si le demandeur ne peut prendre les mesures utiles à cette fin, au profit de l'Etat, qui l'affecte à cette même fin.\n\nLe juge se réserve le pouvoir de la liquider.", "chapitres": [17], "retenir": "Astreinte affectée à la réparation de l'environnement."},
  {"num": "1251", "code": "C. civ.", "theme": "Préjudice écologique", "texte": "Les dépenses exposées pour prévenir la réalisation imminente d'un dommage, pour éviter son aggravation ou pour en réduire les conséquences constituent un préjudice réparable.", "chapitres": [17], "retenir": "Les dépenses de prévention constituent un préjudice réparable."},
  {"num": "1252", "code": "C. civ.", "theme": "Préjudice écologique", "texte": "Indépendamment de la réparation du préjudice écologique, le juge, saisi d'une demande en ce sens par une personne mentionnée à l'article 1248, peut prescrire les mesures raisonnables propres à prévenir ou faire cesser le dommage.", "chapitres": [17], "retenir": "Le juge peut prescrire des mesures pour prévenir ou faire cesser le dommage."},
  {"num": "1254", "code": "C. civ.", "theme": "Réparation", "texte": "Lorsqu'une personne est reconnue responsable d'un manquement aux obligations légales ou contractuelles afférentes à son activité professionnelle, le juge peut, à la demande du ministère public, devant les juridictions de l'ordre judiciaire, ou du Gouvernement, devant les juridictions de l'ordre administratif, et par une décision spécialement motivée, la condamner au paiement d'une sanction civile, dont le produit est affecté à un fonds consacré au financement des actions de groupe.\n\nLa condamnation au paiement de la sanction civile ne peut intervenir que si les conditions suivantes sont remplies :\n\n1° L'auteur du dommage a délibérément commis une faute en vue d'obtenir un gain ou une économie indu ;\n\n2° Le manquement constaté a causé un ou plusieurs dommages à plusieurs personnes physiques ou morales placées dans une situation similaire.\n\nLe montant de la sanction est proportionné à la gravité de la faute commise et au profit que l'auteur de la faute en a retiré. Si celui-ci est une personne physique, ce montant ne peut être supérieur au double du profit réalisé. Si l'auteur est une personne morale, ce montant ne peut être supérieur au quintuple du montant du profit réalisé.\n\nLorsqu'une sanction civile est susceptible d'être cumulée avec une amende administrative ou pénale infligée en raison des mêmes faits à l'auteur du manquement, le montant global des amendes prononcées ne dépasse pas le maximum légal le plus élevé.\n\nLe risque d'une condamnation à la sanction civile n'est pas assurable.", "chapitres": [17], "retenir": "Sanction civile de la faute lucrative : ministère public, pluralité de victimes, plafond double ou quintuple du profit, fonds des actions de groupe, non assurable."},
  {"num": "1310", "code": "C. civ.", "theme": "Pluralité de responsables", "texte": "La solidarité est légale ou conventionnelle ; elle ne se présume pas.", "chapitres": [17], "retenir": "La solidarité ne se présume pas : l'obligation in solidum est une création jurisprudentielle distincte."},
  {"num": "1341-1", "code": "C. civ.", "theme": "Action en responsabilité", "texte": "Lorsque la carence du débiteur dans l'exercice de ses droits et actions à caractère patrimonial compromet les droits de son créancier, celui-ci peut les exercer pour le compte de son débiteur, à l'exception de ceux qui sont exclusivement rattachés à sa personne.", "chapitres": [17], "retenir": "Action oblique exclue pour les droits attachés à la personne (préjudice corporel ou moral)."},
  {"num": "1358", "code": "C. civ.", "theme": "Causalité", "texte": "Hors les cas où la loi en dispose autrement, la preuve peut être apportée par tout moyen.", "chapitres": [17], "retenir": "Preuve des faits juridiques par tout moyen."},
  {"num": "2052", "code": "C. civ.", "theme": "Action en responsabilité", "texte": "La transaction fait obstacle à l'introduction ou à la poursuite entre les parties d'une action en justice ayant le même objet.", "chapitres": [17], "retenir": "La transaction fait obstacle à une action en justice ayant le même objet."},
  {"num": "2224", "code": "C. civ.", "theme": "Prescription", "texte": "Les actions personnelles ou mobilières se prescrivent par cinq ans à compter du jour où le titulaire d'un droit a connu ou aurait dû connaître les faits lui permettant de l'exercer.", "chapitres": [17], "retenir": "Cinq ans à compter de la connaissance des faits."},
  {"num": "2226", "code": "C. civ.", "theme": "Prescription", "texte": "L'action en responsabilité née à raison d'un événement ayant entraîné un dommage corporel, engagée par la victime directe ou indirecte des préjudices qui en résultent, se prescrit par dix ans à compter de la date de la consolidation du dommage initial ou aggravé.\n\nToutefois, en cas de préjudice causé par des tortures ou des actes de barbarie, ou par des violences ou des agressions sexuelles commises contre un mineur, l'action en responsabilité civile est prescrite par vingt ans.", "chapitres": [17], "retenir": "Dommage corporel : dix ans à compter de la consolidation ; vingt ans pour tortures, barbarie, violences sexuelles sur mineur."},
  {"num": "2226-1", "code": "C. civ.", "theme": "Préjudice écologique", "texte": "L'action en responsabilité tendant à la réparation du préjudice écologique réparable en application du chapitre III du sous-titre II du titre III du présent livre se prescrit par dix ans à compter du jour où le titulaire de l'action a connu ou aurait dû connaître la manifestation du préjudice écologique.", "chapitres": [17], "retenir": "Dix ans à compter de la connaissance de la manifestation du préjudice écologique."},
  {"num": "1245-16", "code": "C. civ.", "theme": "Prescription", "texte": "L'action en réparation fondée sur les dispositions du présent chapitre se prescrit dans un délai de trois ans à compter de la date à laquelle le demandeur a eu ou aurait dû avoir connaissance du dommage, du défaut et de l'identité du producteur.", "chapitres": [17], "retenir": "Produits défectueux : trois ans à compter de la connaissance du dommage, du défaut et du producteur."},
  {"num": "L85-6", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Victimes par ricochet", "texte": "Le préjudice subi par un tiers du fait des dommages causés à la victime directe d'un accident de la circulation est réparé en tenant compte des limitations ou exclusions applicables à l'indemnisation de ces dommages.", "chapitres": [17], "retenir": "Accident de la circulation : les limitations opposables à la victime directe le sont aux victimes par ricochet.", "aff": "6"}
);
