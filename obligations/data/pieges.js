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

