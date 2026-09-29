/* Pièges et réflexes, chapitre par chapitre.
   faux : ce qu'on écrit à tort ; juste : ce qu'il faut écrire ; pourquoi : la raison (texte, arrêt).
   reflexes : face à tel type de problème, les questions à se poser dans l'ordre. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };
OBL.pieges = OBL.pieges || {};

OBL.pieges[1] = {
  pieges: [
    { faux: "Le créancier a un droit sur les biens de son débiteur.",
      juste: "Le créancier a un **droit personnel** contre le débiteur, garanti par un **droit de gage général** sur l'ensemble de son patrimoine ([[2284]], [[2285]]).",
      pourquoi: "Le droit de gage général n'est pas un droit réel : pas de droit de suite, pas de droit de préférence ; le créancier chirographaire est en concours avec les autres créanciers." },
    { faux: "L'obligation naturelle ne produit aucun effet juridique.",
      juste: "Elle ne peut pas faire l'objet d'une **exécution forcée**, mais son paiement volontaire ne donne pas lieu à restitution ([[1302]], al. 2) et la **promesse de l'exécuter** la transforme en obligation civile ([[1100]], al. 2 ; Civ. 1re, 10 oct. 1995).",
      pourquoi: "Dire « aucun effet » efface les deux effets que le correcteur attend." },
    { faux: "Tout paiement d'une obligation naturelle est définitif.",
      juste: "Seul le paiement **volontaire** exclut la restitution ([[1302]], al. 2).",
      pourquoi: "Le mot « volontairement » est dans le texte : il faut vérifier, dans les faits, que le débiteur a payé librement et en connaissance de cause." },
    { faux: "Le Code civil distingue les obligations de donner, de faire et de ne pas faire.",
      juste: "Cette classification a été **abandonnée en 2016** ; le transfert de propriété est désormais un **effet du contrat** ([[1196]]).",
      pourquoi: "On peut la citer comme classification ancienne ou doctrinale, jamais comme droit positif." },
    { faux: "La distinction des obligations de moyens et de résultat figure dans le Code civil.",
      juste: "Elle n'est **pas codifiée** : c'est une construction doctrinale (Demogue) appliquée par la jurisprudence.",
      pourquoi: "Citer un article inexistant est une erreur lourde ; citer sa source doctrinale et jurisprudentielle est un plus." },
    { faux: "Dans une obligation de résultat, le débiteur est toujours responsable si le résultat n'est pas atteint.",
      juste: "Le créancier n'a pas à prouver de faute, mais le débiteur s'exonère en prouvant la **force majeure** ([[1218]]).",
      pourquoi: "Résultat ≠ garantie absolue : seule la preuve de la diligence est inopérante." },
    { faux: "Un fait juridique est un événement involontaire.",
      juste: "Le fait juridique peut être **volontaire** (une faute intentionnelle) : ce qui compte, c'est que ses **effets de droit** ne sont pas recherchés ([[1100-2]]), à la différence de l'acte juridique ([[1100-1]]).",
      pourquoi: "Le critère est la volonté des effets, pas la volonté du comportement." },
    { faux: "Le juge peut réévaluer une dette d'argent pour tenir compte de l'inflation.",
      juste: "**Nominalisme** : le débiteur se libère en versant le montant nominal ([[1343]]), sauf indexation convenue ou dette de valeur.",
      pourquoi: "La dette de valeur (par exemple une indemnité) est évaluée au jour où elle est liquidée : ne pas la confondre avec la dette de somme d'argent." }
  ],
  reflexes: [
    { face: "Un proche a promis, ou versé, de l'argent par devoir moral",
      etapes: [
        "Existe-t-il un **devoir de conscience** envers autrui (famille, honneur, réparation morale) ?",
        "Le débiteur a-t-il **payé** (alors : pas de restitution si paiement volontaire, [[1302]], al. 2) ou **promis** (alors : obligation civile, exécution forcée possible) ?",
        "La promesse est-elle **prouvée** ? Au-delà de 1 500 €, écrit exigé ([[1359]]), sauf commencement de preuve par écrit ([[1362]])."
      ],
      astuce: "Toujours traiter séparément ce qui a été versé et ce qui reste à verser." },
    { face: "Une prestation n'a pas donné le résultat espéré",
      etapes: [
        "Qualifier l'obligation : **moyens ou résultat** ? Indices : aléa de l'exécution, rôle actif du créancier, promesse des parties, prix.",
        "En déduire **ce que le créancier doit prouver** : une faute (moyens) ou la seule absence de résultat (résultat).",
        "Vérifier les **causes d'exonération** : force majeure ([[1218]]) dans tous les cas."
      ],
      astuce: "Le correcteur attend la justification de la qualification, pas seulement son énoncé." },
    { face: "Toute question de classification",
      etapes: [
        "Nommer la classification et son **critère**.",
        "Appliquer le critère aux faits.",
        "Dire **ce que la qualification change** (régime, preuve, sanction)."
      ],
      astuce: "Une classification sans conséquence de régime n'apporte aucun point." }
  ]
};

OBL.pieges[2] = {
  pieges: [
    { faux: "Le contrat unilatéral est un acte unilatéral.",
      juste: "Le contrat unilatéral suppose **deux volontés**, mais une seule partie s'oblige ([[1106]], al. 2) ; l'acte unilatéral est l'œuvre d'**une seule volonté** ([[1100-1]]).",
      pourquoi: "La donation est un contrat unilatéral ; le testament est un acte unilatéral." },
    { faux: "Un contrat à titre gratuit est forcément unilatéral, et un contrat synallagmatique forcément onéreux.",
      juste: "Les deux classifications sont **indépendantes** : obligations réciproques ou non ([[1106]]) ; avantage reçu en contrepartie ou non ([[1107]]).",
      pourquoi: "Le prêt à intérêt entre particuliers est unilatéral (seul l'emprunteur s'oblige) mais onéreux." },
    { faux: "Le contrat d'adhésion est un contrat entre un professionnel et un consommateur.",
      juste: "C'est le contrat qui comporte un **ensemble de clauses non négociables, déterminées à l'avance par l'une des parties** ([[1110]], al. 2).",
      pourquoi: "La qualité des parties est indifférente : deux professionnels peuvent conclure un contrat d'adhésion." },
    { faux: "Le contrat commutatif est celui où les prestations sont égales.",
      juste: "Chaque partie reçoit un avantage **regardé comme l'équivalent** de celui qu'elle procure ([[1108]]) : l'équivalence est **subjective**.",
      pourquoi: "Sinon, on réintroduit une lésion que le droit commun rejette ([[1168]])." },
    { faux: "La tacite reconduction prolonge le contrat initial.",
      juste: "Elle produit un **nouveau contrat**, de même contenu mais à **durée indéterminée** ([[1215]]) ; seule la **prorogation**, décidée avant le terme, prolonge le même contrat ([[1213]]).",
      pourquoi: "L'enjeu est concret : nouveau contrat = nouvelles règles, garanties à reconsidérer (le cautionnement ne suit pas automatiquement)." },
    { faux: "La bonne foi ne s'impose que dans l'exécution du contrat.",
      juste: "Elle s'impose dans la **négociation**, la **formation** et l'**exécution**, et elle est **d'ordre public** ([[1104]]).",
      pourquoi: "C'est l'un des apports de 2016 : l'ancien article 1134, al. 3, ne visait que l'exécution." },
    { faux: "Grâce à la liberté contractuelle, les parties peuvent écarter n'importe quelle règle.",
      juste: "La liberté contractuelle ne permet pas de déroger aux **règles d'ordre public** ([[1102]], al. 2 ; [[1162]]).",
      pourquoi: "Toujours citer la limite avec le principe." },
    { faux: "Les nouveaux articles 1100 et suivants s'appliquent à tous les contrats.",
      juste: "Ils ne s'appliquent qu'aux contrats conclus **à partir du 1er octobre 2016** (ord. 10 févr. 2016, art. 9) ; la loi de ratification du 20 avril 2018 a ses propres règles d'application dans le temps.",
      pourquoi: "Réflexe de copie : la date du contrat détermine le texte applicable." }
  ],
  reflexes: [
    { face: "Qualifier un contrat",
      etapes: [
        "Vérifier que c'est bien un **contrat** : accord de volontés destiné à produire des effets de droit ([[1101]]).",
        "Passer **toutes** les classifications des articles [[1105]] à [[1111-1]], une par une.",
        "Pour chacune, indiquer la **conséquence de régime** (règles spéciales, [[1171]] et [[1190]] pour l'adhésion, preuve, etc.).",
        "Noter la **date de conclusion** : avant ou après le 1er octobre 2016 ?"
      ],
      astuce: "Combiner les classifications : « contrat synallagmatique, à titre onéreux, commutatif, de gré à gré, à exécution successive »." },
    { face: "Un engagement « entre amis » ou « sur l'honneur »",
      etapes: [
        "Les parties ont-elles voulu se placer **sur le terrain du droit** ? Indices : enjeu financier, termes employés, écrit, contexte.",
        "Si non : acte de courtoisie ou engagement d'honneur, pas de contrat.",
        "Penser aux figures intermédiaires : convention d'assistance bénévole, lettre d'intention ([[2322]])."
      ],
      astuce: "Le juge peut requalifier un « engagement d'honneur » en véritable obligation si la volonté de s'engager ressort des faits." },
    { face: "Un contrat arrive à son terme",
      etapes: [
        "Les parties ont-elles **prorogé** avant le terme ([[1213]]) ?",
        "Sinon, ont-elles **renouvelé** ([[1214]]) ou continué à exécuter (**tacite reconduction**, [[1215]]) ?",
        "En déduire : même contrat, ou nouveau contrat à durée indéterminée, résiliable avec préavis ([[1211]])."
      ],
      astuce: "Commencer par les faits : que s'est-il passé avant et après la date du terme ?" }
  ]
};

OBL.pieges[3] = {
  pieges: [
    { faux: "L'offre peut être librement rétractée tant qu'elle n'a pas été acceptée.",
      juste: "Elle est librement rétractable tant qu'elle **n'est pas parvenue** à son destinataire ([[1115]]) ; ensuite, elle doit être maintenue pendant le **délai fixé** ou, à défaut, un **délai raisonnable** ([[1116]]).",
      pourquoi: "Trois périodes à distinguer : avant réception, pendant le délai, après le délai." },
    { faux: "Si l'offrant se rétracte pendant le délai, le contrat est quand même formé.",
      juste: "La rétractation fautive **empêche la conclusion du contrat** ; elle engage la **responsabilité extracontractuelle** de l'offrant, sans réparation de la perte des avantages attendus du contrat ([[1116]], al. 2 et 3).",
      pourquoi: "Ne pas transposer la solution de la promesse unilatérale ([[1124]]) à l'offre." },
    { faux: "Qui ne dit mot consent.",
      juste: "Le **silence ne vaut pas acceptation**, sauf s'il en résulte autrement de la loi, des usages, des relations d'affaires ou de circonstances particulières ([[1120]] ; Civ., 25 mai 1870).",
      pourquoi: "Poser le principe, puis vérifier chaque exception dans les faits." },
    { faux: "Une acceptation avec réserves forme le contrat sur les points d'accord.",
      juste: "L'acceptation non conforme à l'offre est **dépourvue d'effet**, sauf à constituer une **offre nouvelle**, c'est-à-dire une contre-offre ([[1118]], al. 3).",
      pourquoi: "Les rôles s'inversent : l'acceptant devient offrant." },
    { faux: "Le contrat conclu à distance est formé dès l'envoi de l'acceptation.",
      juste: "Il est formé dès que l'acceptation **parvient** à l'offrant ([[1121]]) : théorie de la réception.",
      pourquoi: "L'offrant n'a pas à en avoir pris connaissance effectivement." },
    { faux: "En cas de rupture fautive des pourparlers, on indemnise la perte de chance de conclure le contrat.",
      juste: "La réparation ne peut couvrir **ni la perte des avantages attendus** du contrat **ni la perte de chance** de les obtenir ([[1112]], al. 2 ; Com., 26 nov. 2003, Manoukian).",
      pourquoi: "On indemnise les frais de négociation, les études, parfois le préjudice moral." },
    { faux: "Le pacte de préférence violé entraîne la nullité de la vente au tiers.",
      juste: "Principe : **dommages et intérêts**. Nullité ou substitution seulement si le tiers connaissait **à la fois** le pacte **et** l'intention du bénéficiaire de s'en prévaloir ([[1123]], al. 2).",
      pourquoi: "La double connaissance est cumulative ; la prouver incombe au bénéficiaire." },
    { faux: "Le promettant d'une promesse unilatérale peut se rétracter avant la levée de l'option ; le bénéficiaire n'obtient que des dommages et intérêts.",
      juste: "La révocation pendant le délai d'option **n'empêche pas la formation du contrat promis** ([[1124]], al. 2) ; la jurisprudence a étendu cette solution aux promesses antérieures à 2016 (Civ. 3e, 23 juin 2021).",
      pourquoi: "La solution inverse (Consorts Cruz, 1993) est abandonnée : la citer seulement comme étape historique." },
    { faux: "Une publicité mentionnant un prix est toujours une offre.",
      juste: "Il n'y a offre que si la proposition est **précise et ferme** ([[1114]]) ; sinon, c'est une invitation à entrer en négociation.",
      pourquoi: "Vérifier les réserves : une réserve objective (stock disponible) n'empêche pas l'offre ; une réserve subjective (agrément du cocontractant) en fait une invitation à négocier." }
  ],
  reflexes: [
    { face: "Le contrat est-il formé ?",
      etapes: [
        "Y a-t-il une **offre** : précise, ferme, extériorisée ([[1114]]) ?",
        "L'offre était-elle **encore valable** : pas rétractée avant réception, pas caduque ([[1117]]) ?",
        "Y a-t-il une **acceptation** pure et simple ([[1118]]), et non un silence ([[1120]]) ?",
        "Quand et où l'acceptation est-elle **parvenue** ([[1121]]) ? Une forme était-elle exigée ?"
      ],
      astuce: "Dater chaque événement dans les faits : envoi, réception, rétractation, fin du délai." },
    { face: "Un avant-contrat n'a pas été respecté",
      etapes: [
        "Qualifier : **pacte de préférence** (priorité, pas d'engagement de vendre), **promesse unilatérale** (engagement de vendre, option du bénéficiaire) ou **promesse synallagmatique** (vaut contrat, [[1589]] pour la vente).",
        "Dater la promesse : avant ou après le 1er octobre 2016 ?",
        "Appliquer la sanction propre à chaque figure, du minimum (dommages et intérêts) au maximum (nullité, substitution, formation forcée)."
      ],
      astuce: "La qualification commande tout : elle vaut souvent la moitié des points." },
    { face: "Des négociations ont été rompues",
      etapes: [
        "La rupture est libre ([[1112]]) : chercher une **faute** (rupture brutale, tardive, sans motif, après avoir entretenu une confiance légitime).",
        "Fondement : responsabilité **extracontractuelle** ([[1240]]).",
        "Préjudice réparable : frais et pertes subis, **jamais** la perte des gains du contrat ni la perte de chance de le conclure."
      ],
      astuce: "Penser aussi au devoir de confidentialité ([[1112-2]])." }
  ]
};

OBL.pieges[4] = {
  pieges: [
    { faux: "L'erreur sur la valeur permet d'annuler le contrat.",
      juste: "L'erreur sur la valeur est **indifférente** lorsque, sans se tromper sur les qualités essentielles, le contractant a fait une **appréciation économique inexacte** ([[1136]]).",
      pourquoi: "Elle n'est prise en compte que si elle découle d'une erreur sur une qualité essentielle, ou si elle est provoquée par un dol ([[1139]])." },
    { faux: "L'erreur sur les motifs n'est jamais prise en compte.",
      juste: "Elle est indifférente, **sauf** si les parties en ont fait **expressément** un élément déterminant de leur consentement ; et l'erreur sur le motif d'une **libéralité** est une cause de nullité ([[1135]]).",
      pourquoi: "Deux exceptions à ne pas oublier." },
    { faux: "On ne peut pas invoquer une erreur sur sa propre prestation.",
      juste: "L'erreur est une cause de nullité qu'elle porte sur la prestation **de l'une ou de l'autre partie** ([[1133]], al. 2).",
      pourquoi: "C'est la solution de l'affaire Poussin : le vendeur peut se prévaloir de son erreur sur l'authenticité du tableau qu'il vend." },
    { faux: "Le silence d'une partie sur la valeur du bien est une réticence dolosive.",
      juste: "Ne constitue pas un dol le fait de **ne pas révéler son estimation de la valeur** de la prestation ([[1137]], al. 3 ; Civ. 1re, 3 mai 2000, Baldus).",
      pourquoi: "Un **mensonge** sur la valeur, en revanche, reste un dol." },
    { faux: "L'erreur provoquée par un dol doit porter sur une qualité essentielle.",
      juste: "L'erreur provoquée par un dol est **toujours excusable** et entraîne la nullité **même** si elle porte sur la valeur ou sur un simple motif ([[1139]]).",
      pourquoi: "C'est pourquoi on examine le dol avant l'erreur : ses conditions sont plus favorables à la victime." },
    { faux: "Il n'y a pas de dol d'un tiers.",
      juste: "Le dol doit en principe émaner du cocontractant, mais aussi de son **représentant, gérant d'affaires, préposé ou porte-fort**, ou d'un **tiers de connivence** ([[1138]]).",
      pourquoi: "En dehors de ces cas, la victime d'un tiers ne peut invoquer que l'erreur, si ses conditions sont réunies." },
    { faux: "Le mandant doit toujours réparer le dommage causé par le dol de son mandataire.",
      juste: "Le dol du mandataire permet d'**annuler** le contrat ([[1138]]), mais le mandant n'en répond sur le terrain de la **responsabilité** que s'il a **personnellement commis une faute** (Ch. mixte, 29 oct. 2021, n° 19-18.470).",
      pourquoi: "Distinguer l'action en nullité et l'action en dommages et intérêts." },
    { faux: "La violence doit émaner du cocontractant.",
      juste: "La violence est une cause de nullité **qu'elle ait été exercée par une partie ou par un tiers** ([[1142]]).",
      pourquoi: "C'est la grande différence avec le dol." },
    { faux: "La menace d'un procès est une violence.",
      juste: "La menace d'une voie de droit **n'est pas** une violence, **sauf** si elle est détournée de son but ou invoquée pour obtenir un **avantage manifestement excessif** ([[1141]]).",
      pourquoi: "Réclamer son dû sous menace d'assignation est légitime." },
    { faux: "L'état de dépendance économique suffit à annuler le contrat.",
      juste: "Il faut un **abus** de l'état de dépendance **à l'égard du cocontractant**, un engagement que la victime n'aurait pas souscrit sans cette contrainte, et un **avantage manifestement excessif** ([[1143]]).",
      pourquoi: "Conditions cumulatives ; « à son égard » a été ajouté en 2018." },
    { faux: "Le manquement à l'obligation d'information entraîne la nullité du contrat.",
      juste: "Il engage la **responsabilité** de celui qui devait l'information ; la nullité n'est encourue que si les conditions d'un **vice du consentement** sont réunies ([[1112-1]], al. 6).",
      pourquoi: "Deux mécanismes distincts, souvent invoqués ensemble." },
    { faux: "L'action en nullité pour vice se prescrit par cinq ans à compter du contrat.",
      juste: "Cinq ans ([[2224]]) à compter du jour où l'erreur ou le dol a été **découvert**, ou de la **cessation** de la violence ([[1144]]), dans la limite de vingt ans ([[2232]]).",
      pourquoi: "Le point de départ fait souvent toute la différence dans un cas pratique." }
  ],
  reflexes: [
    { face: "Un contractant regrette de s'être engagé",
      etapes: [
        "Examiner d'abord le **dol** ([[1137]]) : ses conditions sont les plus favorables (erreur toujours excusable, même sur la valeur).",
        "Puis l'**erreur** ([[1132]] à [[1136]]) : qualités essentielles **convenues**, excusable.",
        "Puis la **violence** ([[1140]] à [[1143]]), y compris l'abus de dépendance.",
        "Pour chaque vice : caractère **déterminant** ([[1130]]), **prescription** ([[1144]]), sanction (nullité relative, [[1131]]) et **dommages et intérêts** ([[1240]])."
      ],
      astuce: "Ne jamais s'arrêter au premier vice rejeté : proposer les fondements subsidiaires." },
    { face: "Le bien vendu est défectueux",
      etapes: [
        "Le défaut rend-il le bien **impropre à l'usage** ? Si oui, **garantie des vices cachés** ([[1641]]), qui exclut l'action en nullité pour erreur fondée sur ce même défaut (Civ. 1re, 14 mai 1996).",
        "Le bien livré n'est-il pas **conforme** à ce qui a été convenu ? Obligation de délivrance conforme.",
        "Le vendeur a-t-il **menti ou dissimulé** ? Le dol reste ouvert."
      ],
      astuce: "Le délai de la garantie des vices cachés est de deux ans à compter de la découverte : le vérifier." },
    { face: "Qui est l'auteur de la tromperie ou de la pression ?",
      etapes: [
        "Le cocontractant ou une personne visée par [[1138]] : dol possible.",
        "Un tiers sans lien : pas de dol ; erreur si ses conditions sont réunies.",
        "Pour la violence : peu importe l'auteur ([[1142]])."
      ],
      astuce: "Identifier les personnes dans les faits avant de choisir le fondement." }
  ]
};

OBL.pieges[5] = {
  pieges: [
    { faux: "Le contrat est nul pour absence de cause.",
      juste: "La cause a été **supprimée en 2016** : on raisonne avec le **but** ([[1162]]), la **contrepartie illusoire ou dérisoire** ([[1169]]) et la clause qui prive de sa substance l'**obligation essentielle** ([[1170]]).",
      pourquoi: "Pour un contrat conclu avant le 1er octobre 2016, l'ancien article 1131 s'applique : le préciser." },
    { faux: "Le but illicite n'entraîne la nullité que s'il était connu des deux parties.",
      juste: "Le contrat est nul **que ce but ait été connu ou non par toutes les parties** ([[1162]] ; Civ. 1re, 7 oct. 1998).",
      pourquoi: "Formulation exacte du texte, à citer." },
    { faux: "Un prix non déterminé rend tout contrat nul.",
      juste: "Cela dépend du contrat : la **vente** exige un prix déterminé et désigné par les parties ([[1591]]) ; dans le **contrat-cadre**, le prix peut être fixé unilatéralement si c'est convenu ([[1164]]) ; dans la **prestation de service**, le créancier peut le fixer à défaut d'accord ([[1165]]).",
      pourquoi: "Commencer par qualifier le contrat." },
    { faux: "Un prix trop bas permet d'annuler le contrat pour lésion.",
      juste: "La lésion **n'est pas une cause générale de nullité** ([[1168]]) ; elle ne joue que si la loi le prévoit (vente d'immeuble, plus des 7/12, au profit du **vendeur** seul : [[1674]]).",
      pourquoi: "L'acheteur n'a jamais l'action en rescision (art. 1683)." },
    { faux: "La contrepartie dérisoire s'apprécie au moment où le litige survient.",
      juste: "Elle s'apprécie **au moment de la formation** du contrat ([[1169]]).",
      pourquoi: "Si la contrepartie disparaît ensuite, penser à la caducité ([[1186]]) ou à l'imprévision ([[1195]])." },
    { faux: "Une clause créant un déséquilibre significatif rend le contrat nul.",
      juste: "La clause est **réputée non écrite** : le contrat subsiste sans elle ([[1171]]).",
      pourquoi: "Même sanction pour [[1170]]." },
    { faux: "L'article 1171 permet au juge de contrôler le prix.",
      juste: "L'appréciation du déséquilibre ne porte **ni sur l'objet principal ni sur l'adéquation du prix** à la prestation ([[1171]], al. 2).",
      pourquoi: "Pour le prix, les seuls outils sont la lésion (si un texte la prévoit) et la contrepartie dérisoire." },
    { faux: "L'article 1171 s'applique à tous les contrats d'adhésion.",
      juste: "Son champ est **résiduel** : il est écarté pour les contrats relevant de l'article L. 442-1 du Code de commerce (Com., 26 janv. 2022, n° 20-16.782) et, en principe, pour les contrats de consommation (L. 212-1 C. consom.).",
      pourquoi: "Les règles spéciales dérogent aux règles générales ([[1105]], al. 3)." },
    { faux: "Toute clause limitative portant sur l'obligation essentielle est réputée non écrite.",
      juste: "Seule est réputée non écrite la clause qui **prive de sa substance** l'obligation essentielle, c'est-à-dire qui en **contredit la portée** ([[1170]] ; Com., 29 juin 2010, Faurecia).",
      pourquoi: "Un plafond d'indemnisation non dérisoire reste valable." }
  ],
  reflexes: [
    { face: "Une clause du contrat est contestée",
      etapes: [
        "Porte-t-elle sur l'**obligation essentielle** ? Si oui, [[1170]], applicable à **tout** contrat.",
        "Quel est le **type de contrat** ? Consommation (L. 212-1 C. consom.), relation entre partenaires commerciaux (L. 442-1 C. com.), adhésion ([[1171]]) ou gré à gré.",
        "La clause porte-t-elle sur l'objet principal ou le prix ? Si oui, [[1171]] ne joue pas.",
        "Sanction : **réputée non écrite** ; puis appliquer le droit commun à la place de la clause."
      ],
      astuce: "Fonder d'abord sur [[1170]], puis sur [[1171]] à titre subsidiaire." },
    { face: "Le prix pose problème",
      etapes: [
        "Qualifier le contrat : vente ([[1591]]), contrat-cadre ([[1164]]), prestation de service ([[1165]]), autre ([[1163]]).",
        "Le prix est-il **déterminé ou déterminable** sans nouvel accord des parties ([[1163]], al. 3) ?",
        "Y a-t-il un **abus** dans la fixation ? Sanction : dommages et intérêts, le cas échéant résolution.",
        "Le prix est-il dérisoire ([[1169]]) ou lésionnaire (texte spécial) ?"
      ],
      astuce: "Ne jamais invoquer [[1171]] pour contester un prix." },
    { face: "Le contrat poursuit une finalité douteuse",
      etapes: [
        "Identifier la règle d'**ordre public** en cause (ordre public politique ou de protection, bonnes mœurs : art. 6 et [[1162]]).",
        "Stipulation ou but ? Le but illicite suffit, même ignoré de l'autre partie.",
        "Sanction : nullité **absolue** ([[1179]]), sauf ordre public de protection (relative)."
      ],
      astuce: "Dire quel intérêt la règle protège : c'est ce qui fixe la nature de la nullité." }
  ]
};

OBL.pieges[6] = {
  pieges: [
    { faux: "Un contrat consensuel est un contrat conclu oralement.",
      juste: "Consensuel signifie formé par le **seul échange des consentements, quel qu'en soit le mode d'expression** ([[1172]], al. 1er) : un écrit peut exister sans être exigé pour la validité.",
      pourquoi: "Oral ≠ consensuel ; écrit ≠ solennel." },
    { faux: "Au-delà de 1 500 €, un contrat non écrit est nul.",
      juste: "L'écrit de l'article [[1359]] est une **forme de preuve**, pas de validité : le contrat existe, mais se prouve difficilement (commencement de preuve par écrit, [[1362]]).",
      pourquoi: "Les formes de preuve et d'opposabilité n'affectent pas la validité ([[1173]])." },
    { faux: "Une donation est valable si elle est rédigée par écrit et signée.",
      juste: "La donation exige un **acte notarié**, à peine de nullité ([[931]]).",
      pourquoi: "Réserver le cas du don manuel (remise matérielle du bien) et de la donation indirecte ou déguisée." },
    { faux: "Le prêt est toujours un contrat réel.",
      juste: "Le prêt consenti par un **professionnel du crédit** est **consensuel** (Civ. 1re, 28 mars 2000) ; celui consenti par un **particulier** reste **réel** (Civ. 1re, 7 mars 2006).",
      pourquoi: "Conséquence : la banque qui ne verse pas les fonds manque à son obligation ; le particulier qui ne les remet pas n'a pas formé le contrat." },
    { faux: "La caution doit recopier une formule légale imposée, à peine de nullité.",
      juste: "Depuis le 1er janvier 2022, la caution personne physique appose elle-même une mention dont le **contenu** est fixé par l'article 2297, mais le **libellé est libre**.",
      pourquoi: "Citer les anciennes formules (anc. art. L. 331-1 C. consom.) comme droit positif est une erreur de date." },
    { faux: "La cession de créance n'est valable qu'après notification au débiteur.",
      juste: "Elle doit être **constatée par écrit, à peine de nullité** ([[1322]]) ; la notification au débiteur conditionne seulement son **opposabilité** au débiteur cédé.",
      pourquoi: "Validité (écrit) et opposabilité (notification) : deux fonctions distinctes de la forme." },
    { faux: "La cession de fonds de commerce est nulle si l'acte ne comporte pas les mentions obligatoires.",
      juste: "Ces mentions (anc. art. L. 141-1 C. com.) ont été **abrogées** par la loi du 19 juillet 2019 : l'écrit reste utile pour la **preuve**, l'enregistrement et la **publicité** de la cession.",
      pourquoi: "Beaucoup de supports anciens classent encore cette cession parmi les contrats solennels." },
    { faux: "Le défaut de forme solennelle entraîne toujours une nullité absolue.",
      juste: "La nature de la nullité dépend de l'**intérêt protégé** ([[1179]]) : un formalisme protecteur d'une partie est sanctionné par une **nullité relative**.",
      pourquoi: "Raisonner sur la finalité de la forme, pas sur sa seule existence." }
  ],
  reflexes: [
    { face: "Une forme n'a pas été respectée",
      etapes: [
        "Identifier la **fonction** de la forme : validité, preuve ou opposabilité ([[1172]], [[1173]]) ?",
        "Validité : nullité, dont la nature dépend de l'intérêt protégé ([[1179]]).",
        "Preuve : le contrat existe ; chercher les modes de preuve admis ([[1359]], [[1362]]).",
        "Opposabilité : contrat valable entre les parties, mais inopposable aux tiers."
      ],
      astuce: "Une phrase suffit souvent à gagner le point : « cette forme est exigée ad validitatem / ad probationem »." },
    { face: "Une somme a été promise mais pas remise",
      etapes: [
        "Qualifier : prêt, donation, promesse de prêt ?",
        "Contrat réel ou consensuel ? Qui prête (professionnel ou particulier) ?",
        "Si contrat réel non formé : la promesse de prêter ne se résout qu'en dommages et intérêts."
      ],
      astuce: "Vérifier aussi la forme de preuve au-delà de 1 500 € ([[1359]])." }
  ]
};

OBL.pieges[7] = {
  pieges: [
    { faux: "La nullité absolue est plus grave et imprescriptible.",
      juste: "La distinction repose sur l'**intérêt protégé** (général ou privé, [[1179]]), et les deux actions se prescrivent par **cinq ans** ([[2224]]), dans la limite de vingt ans ([[2232]]).",
      pourquoi: "L'imprescriptibilité et la prescription trentenaire de la nullité absolue ont disparu en 2008." },
    { faux: "Les deux parties peuvent invoquer la nullité relative.",
      juste: "Seule la **partie que la loi entend protéger** peut la demander ([[1181]]) ; la nullité absolue peut être demandée par **toute personne justifiant d'un intérêt** et par le **ministère public** ([[1180]]).",
      pourquoi: "Dans un cas pratique, vérifier la qualité du demandeur." },
    { faux: "L'exception de nullité est perpétuelle.",
      juste: "Elle l'est **seulement si le contrat n'a reçu aucune exécution** ([[1185]]).",
      pourquoi: "Si le contrat a été exécuté, même partiellement, l'exception se prescrit comme l'action." },
    { faux: "On peut confirmer un contrat atteint de nullité absolue.",
      juste: "La nullité absolue **ne peut pas être couverte** par la confirmation ([[1180]], al. 2) ; seule la nullité relative peut l'être ([[1181]], al. 2).",
      pourquoi: "La confirmation suppose la connaissance du vice et l'intention de le réparer ([[1182]])." },
    { faux: "Exécuter le contrat, c'est le confirmer.",
      juste: "L'exécution volontaire vaut confirmation **seulement en connaissance de la cause de nullité**, et, en cas de violence, **après qu'elle a cessé** ([[1182]], al. 3).",
      pourquoi: "Chercher dans les faits le moment où la victime a découvert le vice." },
    { faux: "Nullité, résolution et caducité produisent les mêmes effets et ont la même cause.",
      juste: "Nullité : vice **à la formation**. Résolution : **inexécution** (art. 1224). Caducité : disparition **après la formation** d'un élément essentiel ([[1186]]).",
      pourquoi: "Chaque notion a son moment et sa cause ; les effets (restitutions) peuvent se rapprocher." },
    { faux: "La nullité d'une clause entraîne celle de tout le contrat.",
      juste: "La nullité est **partielle** en principe ; elle n'est totale que si la clause a été un **élément déterminant** de l'engagement ([[1184]]).",
      pourquoi: "Si la loi répute la clause non écrite, le contrat est toujours maintenu (al. 2)." },
    { faux: "Les restitutions en valeur se calculent au jour du contrat.",
      juste: "Valeur **au jour de la restitution** ([[1352]]) ; pour une prestation de service, valeur **au jour où elle a été fournie** ([[1352-8]]).",
      pourquoi: "Le receveur de bonne foi ne doit les fruits qu'à compter de la **demande** ([[1352-7]])." },
    { faux: "Après une annulation, la victime ne peut rien demander de plus que les restitutions.",
      juste: "Elle peut demander **réparation** de son dommage dans les conditions du droit commun de la responsabilité **extracontractuelle** ([[1178]], al. 4).",
      pourquoi: "Le contrat étant censé n'avoir jamais existé, la responsabilité ne peut pas être contractuelle." }
  ],
  reflexes: [
    { face: "L'action en nullité est-elle recevable ?",
      etapes: [
        "**Nature** de la nullité : quel intérêt la règle violée protège-t-elle ([[1179]]) ?",
        "**Qualité** du demandeur : partie protégée ([[1181]]) ou toute personne justifiant d'un intérêt ([[1180]]) ?",
        "**Délai** : cinq ans, point de départ (découverte, cessation de la violence), butoir de vingt ans.",
        "**Obstacles** : confirmation ([[1182]]), action interrogatoire restée sans réponse ([[1183]])."
      ],
      astuce: "Si l'action est prescrite, penser à l'exception de nullité ([[1185]])." },
    { face: "Le contrat est annulé : et maintenant ?",
      etapes: [
        "Nullité totale ou partielle ([[1184]]) ?",
        "Contrats liés : caducité des contrats interdépendants ([[1186]]) ?",
        "Restitutions : en nature ou en valeur, fruits et intérêts selon la bonne ou mauvaise foi ([[1352]] à [[1352-9]]).",
        "Dommages et intérêts ([[1178]], al. 4)."
      ],
      astuce: "Présenter les restitutions partie par partie : ce que chacun rend, et à quelle date s'apprécie la valeur." }
  ]
};

OBL.pieges[8] = {
  pieges: [
    { faux: "Le juge peut interpréter toute clause du contrat.",
      juste: "Les clauses **claires et précises** ne peuvent pas être interprétées, à peine de **dénaturation** ([[1192]]).",
      pourquoi: "La dénaturation est l'un des rares cas de contrôle de la Cour de cassation sur l'interprétation." },
    { faux: "En cas de doute, le contrat s'interprète toujours contre le créancier.",
      juste: "Contrat **de gré à gré** : contre le créancier et en faveur du débiteur ; contrat **d'adhésion** : **contre celui qui l'a proposé** ([[1190]]).",
      pourquoi: "Commencer par qualifier le contrat (gré à gré ou adhésion)." },
    { faux: "La bonne foi permet au juge de modifier les obligations des parties.",
      juste: "La bonne foi sanctionne l'**usage déloyal d'une prérogative** contractuelle, mais ne permet pas de porter atteinte à la **substance** des droits et obligations (Com., 10 juill. 2007, Les Maréchaux).",
      pourquoi: "Sanction : dommages et intérêts, parfois paralysie de la prérogative ; jamais la réécriture du contrat." },
    { faux: "En cas d'imprévision, le juge peut directement réviser le contrat.",
      juste: "Étapes de [[1195]] : **renégociation** (en continuant d'exécuter) ; en cas de refus ou d'échec, **résolution** convenue ou demande **commune** d'adaptation au juge ; à défaut d'accord dans un délai raisonnable, le juge peut, **à la demande d'une partie**, réviser ou mettre fin au contrat.",
      pourquoi: "Conditions préalables : changement **imprévisible** lors de la conclusion, exécution **excessivement onéreuse**, risque non accepté ; texte **supplétif**." },
    { faux: "L'imprévision a toujours été admise en droit civil.",
      juste: "La Cour de cassation l'a refusée de 1876 (Canal de Craponne) à la réforme ; [[1195]] ne s'applique qu'aux contrats conclus depuis le **1er octobre 2016**.",
      pourquoi: "Dater le contrat avant d'invoquer [[1195]]." },
    { faux: "Un contrat à durée déterminée peut être résilié à tout moment avec un préavis.",
      juste: "Le CDD doit être **exécuté jusqu'à son terme** ([[1212]]) ; la résiliation unilatérale avec préavis raisonnable concerne le contrat à **durée indéterminée** ([[1211]]).",
      pourquoi: "Réserver la résolution pour inexécution grave (art. 1224)." },
    { faux: "La propriété est transférée au moment de la livraison ou du paiement.",
      juste: "Elle est transférée **lors de la conclusion du contrat** ([[1196]]), sauf clause contraire (réserve de propriété), nature des choses ou loi.",
      pourquoi: "Les **risques** suivent la propriété, sauf mise en demeure du débiteur de l'obligation de délivrer ([[1196]], al. 3 ; [[1344-2]])." },
    { faux: "Quand un immeuble est vendu deux fois, le premier acheteur l'emporte.",
      juste: "L'emporte celui qui a **publié le premier** son titre, **s'il est de bonne foi** ([[1198]], al. 2) ; pour un meuble corporel, celui qui a été **mis en possession** le premier, de bonne foi (al. 1er).",
      pourquoi: "La bonne foi est exigée depuis 2016 : un second acquéreur qui connaissait la première vente ne peut pas se prévaloir de sa publication." }
  ],
  reflexes: [
    { face: "Une clause est ambiguë",
      etapes: [
        "La clause est-elle **claire** ? Si oui, on l'applique ([[1192]]).",
        "Sinon : **commune intention** des parties ; à défaut, sens que lui donnerait une **personne raisonnable** ([[1188]]).",
        "Cohérence de l'acte ([[1189]]), effet utile ([[1191]]), puis règle de doute ([[1190]])."
      ],
      astuce: "Suivre l'ordre du Code montre que la méthode est maîtrisée." },
    { face: "Les circonstances économiques ont changé",
      etapes: [
        "Contrat conclu **après le 1er octobre 2016** ? Clause excluant [[1195]] ?",
        "Changement **imprévisible** lors de la conclusion ? Exécution **excessivement onéreuse** ? Risque non accepté ?",
        "Dérouler les étapes : renégociation, puis accord ou juge.",
        "Penser aux clauses d'adaptation (indexation, clause de sauvegarde)."
      ],
      astuce: "Le débiteur doit continuer à exécuter pendant la renégociation." },
    { face: "Un contractant veut sortir du contrat",
      etapes: [
        "Durée : déterminée ([[1212]]) ou indéterminée ([[1211]]) ?",
        "Clause de résiliation ? Exercée de bonne foi ([[1104]]) ?",
        "Sinon : accord des parties ([[1193]]), résolution pour inexécution (art. 1224), imprévision ([[1195]])."
      ],
      astuce: "Distinguer sortie pour l'avenir (résiliation) et anéantissement (résolution, nullité)." }
  ]
};

OBL.pieges[9] = {
  pieges: [
    { faux: "Le contrat n'a aucun effet à l'égard des tiers.",
      juste: "Il ne crée d'obligations **qu'entre les parties** ([[1199]]), mais il est **opposable aux tiers**, qui doivent respecter la situation juridique créée et peuvent s'en prévaloir, notamment pour prouver un fait ([[1200]]).",
      pourquoi: "Effet relatif et opposabilité sont les deux faces du même principe." },
    { faux: "Le tiers qui aide une partie à violer son contrat n'engage pas sa responsabilité, en vertu de l'effet relatif.",
      juste: "Le **tiers complice** engage sa responsabilité **délictuelle** : le contrat lui est opposable ([[1200]]).",
      pourquoi: "Exemple : le tiers acquéreur qui connaît le pacte de préférence." },
    { faux: "Le tiers victime d'une inexécution doit prouver une faute délictuelle distincte du manquement contractuel.",
      juste: "Le tiers peut invoquer **le manquement contractuel** dès lors qu'il lui a causé un dommage (Ass. plén., 6 oct. 2006, Boot shop ; Ass. plén., 13 janv. 2020, Bois rouge), mais il se voit opposer les **limites et conditions** du contrat (Com., 3 juill. 2024, n° 21-14.947).",
      pourquoi: "Trois arrêts à connaître ensemble, dans l'ordre." },
    { faux: "Le porte-fort engage le tiers.",
      juste: "Seul le **promettant** s'engage ([[1204]]) ; le tiers reste libre. S'il refuse, le promettant doit des **dommages et intérêts** ; s'il ratifie, l'engagement a un effet **rétroactif**.",
      pourquoi: "C'est une exception apparente à l'effet relatif, pas une vraie." },
    { faux: "Le bénéficiaire d'une stipulation pour autrui n'a de droit qu'une fois qu'il a accepté.",
      juste: "Il est investi d'un **droit direct dès la stipulation** ([[1206]]) ; l'acceptation rend seulement la stipulation **irrévocable**.",
      pourquoi: "Avant l'acceptation, le stipulant peut révoquer ([[1206]], [[1207]])." },
    { faux: "La contre-lettre est nulle.",
      juste: "Elle **produit effet entre les parties** ; elle est **inopposable aux tiers**, qui peuvent néanmoins s'en prévaloir ([[1201]]). Seules certaines contre-lettres sont frappées de nullité par la loi ([[1202]]).",
      pourquoi: "Simulation ≠ fraude : elle n'est pas illicite en soi." },
    { faux: "Par l'action oblique, le créancier récupère directement les sommes pour lui.",
      juste: "Il exerce, **au nom du débiteur**, les droits patrimoniaux que celui-ci néglige, lorsque cette carence compromet ses droits ([[1341-1]]) ; les sommes entrent dans le **patrimoine du débiteur**.",
      pourquoi: "Toute la différence avec l'action directe ([[1341-3]])." },
    { faux: "L'action paulienne annule l'acte frauduleux.",
      juste: "Elle rend l'acte **inopposable** au créancier ([[1341-2]]) ; pour un acte à titre onéreux, il faut prouver que le cocontractant **connaissait la fraude**.",
      pourquoi: "L'acte reste valable entre ses parties." },
    { faux: "Un créancier peut exercer une action directe contre le débiteur de son débiteur quand il le souhaite.",
      juste: "L'action directe n'existe que **dans les cas déterminés par la loi** ([[1341-3]]).",
      pourquoi: "Exemples : sous-traitant contre le maître de l'ouvrage, victime contre l'assureur du responsable." }
  ],
  reflexes: [
    { face: "Une personne étrangère au contrat subit un dommage",
      etapes: [
        "Est-elle vraiment **tiers** ? Ayant cause à titre particulier, membre d'une **chaîne translative** (action contractuelle : Ass. plén., 7 févr. 1986) ?",
        "Si elle est tiers : responsabilité **délictuelle** fondée sur le manquement contractuel (Boot shop, Bois rouge).",
        "Limites : clauses et conditions du contrat opposables (Com., 3 juill. 2024)."
      ],
      astuce: "Groupe de contrats **sans** transfert de propriété : action délictuelle (Besse, 1991)." },
    { face: "Un créancier n'est pas payé",
      etapes: [
        "Le débiteur **néglige** d'exercer ses droits : action oblique ([[1341-1]]).",
        "Le débiteur **s'appauvrit en fraude** de ses droits : action paulienne ([[1341-2]]).",
        "Un **texte** donne une action contre le débiteur du débiteur : action directe ([[1341-3]])."
      ],
      astuce: "Préciser à chaque fois à qui profitent les sommes recouvrées." },
    { face: "Un acte apparent cache un autre accord",
      etapes: [
        "Qualifier la **simulation** : acte ostensible et contre-lettre.",
        "Entre parties : la contre-lettre s'applique ([[1201]]).",
        "Tiers : ils peuvent choisir, se prévaloir de l'acte apparent ou de l'acte secret.",
        "Vérifier les nullités spéciales ([[1202]]) et la fraude fiscale éventuelle."
      ],
      astuce: "Ne pas conclure à la nullité par principe : la simulation n'est pas illicite en soi." }
  ]
};
