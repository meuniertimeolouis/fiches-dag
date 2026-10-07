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
      juste: "Elle n'est **pas codifiée** (seulement sous-entendue, avant 2016, par les anciens art. 1137 et 1147) : c'est une construction doctrinale (Demogue) entérinée par la jurisprudence.",
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
        "Vérifier que c'est bien un **contrat** : accord de volontés destiné à créer, modifier, transmettre ou éteindre des obligations ([[1101]]), avec la volonté de se placer sur le terrain du droit.",
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
      pourquoi: "Vérifier les réserves : une réserve objective (stock disponible) n'empêche pas l'offre ; une réserve subjective (« sous réserve de confirmation ») en fait une invitation à négocier, sauf contrat intuitu personae où l'agrément du cocontractant est implicite." }
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
      pourquoi: "En dehors de ces cas, la victime ne peut obtenir la nullité que sur le terrain de l'erreur, si ses conditions sont réunies, et peut agir en responsabilité délictuelle contre le tiers ; le dol du tiers est en outre sanctionné dans les actes unilatéraux et les donations." },
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
        "Un tiers sans lien : pas de nullité pour dol (sauf acte unilatéral ou donation) ; erreur si ses conditions sont réunies, et responsabilité délictuelle du tiers.",
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
      pourquoi: "Dans la vente d'immeuble, l'acheteur n'a pas l'action en rescision (art. 1683) ; seuls quelques textes spéciaux protègent l'acheteur (achat d'engrais : lésion de plus d'un quart)." },
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
      juste: "Consensuel signifie formé par le **seul échange des consentements, quel qu'en soit le mode d'expression** ([[1109]], al. 1er) : un écrit peut exister sans être exigé pour la validité.",
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
      astuce: "Une phrase suffit souvent à gagner le point : « cette forme est exigée ad solemnitatem / ad probationem »." },
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
      pourquoi: "Avant la loi du 17 juin 2008, la nullité absolue se prescrivait par trente ans (et non jamais) ; seule l'exception de nullité est perpétuelle, si le contrat n'a reçu aucune exécution ([[1185]])." },
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
      juste: "L'emporte celui qui a **publié le premier** son titre, **s'il est de bonne foi** ([[1198]], al. 2) ; pour un meuble corporel, celui qui a **pris possession** le premier, de bonne foi (al. 1er).",
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
      juste: "Le tiers peut invoquer **le manquement contractuel** dès lors qu'il lui a causé un dommage (Ass. plén., 6 oct. 2006, Boot shop ; Ass. plén., 13 janv. 2020, Bois rouge), mais, selon la chambre commerciale, il **peut se voir opposer** les **conditions et limites** de la responsabilité applicables entre les contractants (Com., 3 juill. 2024, n° 21-14.947), solution que l'Assemblée plénière n'a pas encore consacrée.",
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
        "Limites : selon la chambre commerciale, conditions et limites de la responsabilité contractuelle opposables au tiers (Com., 3 juill. 2024 ; Com., 17 déc. 2025), solution non tranchée par l'Assemblée plénière."
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

/* ===== chapitres 10 à 21 ===== */
/* Pièges et réflexes — Chapitre 10 : les sanctions visant à obtenir l'exécution */
OBL.pieges[10] = {
  pieges: [
    { faux: "L'article 1217 impose de respecter un ordre entre les sanctions : d'abord l'exécution forcée, ensuite la résolution.",
      juste: "[[1217]] énumère les sanctions **sans hiérarchie** ; le créancier choisit, et peut **cumuler** celles qui sont compatibles, des dommages et intérêts pouvant toujours s'y ajouter.",
      pourquoi: "Le rapport au Président de la République sur l'ordonnance de 2016 le précise : le texte ne fait qu'énumérer." },
    { faux: "La mise en demeure doit être faite par acte de commissaire de justice.",
      juste: "Une **sommation** ou tout **acte portant interpellation suffisante** convient, même une lettre, pourvu qu'elle exprime clairement l'exigence d'exécuter ([[1344]]) ; sa validité ne dépend pas de la réception effective (Civ. 1re, 20 janv. 2021, n° 19-20.680).",
      pourquoi: "La forme est libre ; la lettre recommandée n'est qu'un moyen de preuve." },
    { faux: "La mise en demeure est un préalable à toutes les sanctions de l'inexécution.",
      juste: "Elle n'est pas exigée pour l'**exception d'inexécution** ([[1219]]) ni pour les dommages et intérêts en cas d'**inexécution définitive** ([[1231]]) ; elle l'est pour l'exécution forcée ([[1221]], [[1222]]), la réduction du prix ([[1223]]) et la résolution extrajudiciaire ([[1225]], [[1226]]).",
      pourquoi: "Il faut raisonner sanction par sanction." },
    { faux: "Le locataire empêché d'exploiter son local pendant le confinement peut invoquer la force majeure pour ne pas payer ses loyers.",
      juste: "La force majeure ne profite qu'au **débiteur empêché d'exécuter** ; le **créancier** qui n'a pu profiter de la contrepartie ne peut s'en prévaloir (Civ. 1re, 25 nov. 2020, n° 19-21.060 ; Civ. 3e, 30 juin 2022, n° 21-20.190).",
      pourquoi: "Et le débiteur d'une somme d'argent ne peut jamais invoquer la force majeure : payer reste toujours possible." },
    { faux: "Pour la force majeure, l'imprévisibilité et l'irrésistibilité s'apprécient au jour de l'inexécution.",
      juste: "L'**imprévisibilité** s'apprécie au jour de la **conclusion** du contrat ; l'**irrésistibilité** au jour de l'**inexécution** ([[1218]] ; Ass. plén., 14 avr. 2006).",
      pourquoi: "Un contrat conclu en pleine épidémie ne permet pas d'invoquer l'épidémie." },
    { faux: "La force majeure met toujours fin au contrat.",
      juste: "Si l'empêchement est **temporaire**, l'obligation est seulement **suspendue**, sauf si le retard justifie la résolution ; s'il est **définitif**, le contrat est **résolu de plein droit** ([[1218]], al. 2).",
      pourquoi: "La distinction temporaire / définitif structure toute la réponse." },
    { faux: "L'exception d'inexécution permet de mettre fin au contrat.",
      juste: "Elle **suspend** seulement l'exécution : les obligations restent exigibles. Pour sortir du contrat, il faut la **résolution** ([[1224]]).",
      pourquoi: "C'est un moyen de pression, pas une sanction définitive." },
    { faux: "Les obligations de faire ne peuvent pas faire l'objet d'une exécution forcée : elles se résolvent en dommages et intérêts.",
      juste: "L'exécution forcée en nature est le **principe** pour toutes les obligations, sauf **impossibilité** ou **disproportion manifeste** pour un débiteur de bonne foi ([[1221]] ; déjà Civ. 1re, 16 janv. 2007).",
      pourquoi: "L'ancien article 1142 est abrogé ; seules les prestations strictement personnelles restent hors d'atteinte." },
    { faux: "L'impossibilité qui fait obstacle à l'exécution forcée est la force majeure.",
      juste: "L'impossibilité de [[1221]] est une notion **distincte** : le juge peut refuser l'exécution forcée sans qualifier l'événement de force majeure (Civ. 1re, 18 déc. 2024, n° 24-14.750).",
      pourquoi: "Le débiteur peut alors rester tenu de dommages et intérêts, puisqu'il n'est pas exonéré." },
    { faux: "Le créancier qui n'a pas encore payé ne peut obtenir la réduction du prix que par une notification unilatérale.",
      juste: "Il peut notifier sa décision ([[1223]], al. 1er) mais aussi saisir le juge : « la réduction du prix peut, en toute hypothèse, être demandée en justice » (Civ. 1re, 18 déc. 2024, n° 24-14.750).",
      pourquoi: "Principe général : le créancier qui peut user d'une sanction unilatérale peut demander au juge de la prononcer." }
  ],
  reflexes: [
    { face: "Le débiteur n'exécute pas et le créancier veut quand même la prestation",
      etapes: [
        "Écarter la **force majeure** ([[1218]]) : critère par critère, puis effet temporaire ou définitif.",
        "Vérifier ou conseiller la **mise en demeure** ([[1344]]).",
        "Pour faire pression sans juge : **exception d'inexécution** si l'inexécution est grave ([[1219]]).",
        "Pour obtenir la prestation : **exécution forcée** ([[1221]]) sauf impossibilité ou disproportion ; ou **exécution par un tiers** ([[1222]]).",
        "Ajouter les **dommages et intérêts** du retard ([[1217]], dernier al.)."
      ],
      astuce: "Si les faits insistent sur l'urgence, privilégier [[1222]] : pas besoin du juge pour faire exécuter par un tiers." },
    { face: "La prestation a été mal ou partiellement exécutée et le créancier veut la garder",
      etapes: [
        "Qualifier une **exécution imparfaite** que le créancier accepte.",
        "Mise en demeure préalable.",
        "Prix non payé : **notification** d'une réduction proportionnelle ; prix payé : **accord** ou **juge** ([[1223]]).",
        "Rappeler que le juge peut toujours être saisi (Civ. 1re, 18 déc. 2024)."
      ],
      astuce: "Vérifier la date du contrat : avant le 1er octobre 2018, l'ancienne rédaction de [[1223]] s'applique." },
    { face: "Le débiteur invoque un événement pour ne pas exécuter",
      etapes: [
        "Qui l'invoque ? Le créancier ne peut pas se prévaloir de la force majeure.",
        "Obligation monétaire ? Force majeure exclue.",
        "Imprévisible **à la conclusion** ? Irrésistible **à l'exécution** (mesures appropriées possibles ?) ? Hors du contrôle du débiteur ?",
        "Clause de garantie ou mise en demeure antérieure ([[1351]]) ?"
      ],
      astuce: "Un simple renchérissement relève de l'imprévision ([[1195]]), pas de la force majeure." }
  ]
};

/* Pièges et réflexes — Chapitre 11 : la résolution et la responsabilité contractuelle */
OBL.pieges[11] = {
  pieges: [
    { faux: "La résolution doit être demandée en justice.",
      juste: "Depuis 2016, elle résulte d'une **clause résolutoire**, d'une **notification** du créancier ou d'une **décision de justice** ([[1224]]) ; le juge peut toujours être saisi ([[1227]]), mais ce n'est plus la voie obligatoire.",
      pourquoi: "L'ancien article 1184 imposait la voie judiciaire ; ce n'est plus le droit positif." },
    { faux: "Toute clause qui évoque la résolution en cas de manquement est une clause résolutoire.",
      juste: "La clause doit **préciser les engagements** dont l'inexécution entraînera la résolution ([[1225]]) et exprimer sans équivoque une résolution **de plein droit** ; sinon, elle ne fait que rappeler la résolution judiciaire.",
      pourquoi: "Les clauses « balais » et les formules du type « pourra être résolu » échouent." },
    { faux: "Pour mettre en œuvre une clause résolutoire, une mise en demeure ordinaire suffit.",
      juste: "La mise en demeure ne produit effet que si elle **mentionne expressément la clause résolutoire** ([[1225]], al. 2) ; pour la notification, elle doit annoncer que le créancier sera **en droit de résoudre** ([[1226]], al. 2).",
      pourquoi: "Chaque voie a sa mise en demeure spéciale." },
    { faux: "Le juge peut paralyser une clause résolutoire en accordant un délai de grâce au débiteur de bonne foi.",
      juste: "Il ne peut accorder de délai de grâce (sauf texte spécial) ; il peut seulement écarter la clause invoquée de **mauvaise foi par le créancier** ([[1104]] ; Civ. 1re, 31 janv. 1995). La bonne foi du débiteur est indifférente (Civ. 3e, 10 mars 1993).",
      pourquoi: "Le délai de grâce appartient à la résolution judiciaire ([[1228]])." },
    { faux: "En cas de contestation d'une résolution par notification, c'est au débiteur de prouver que son manquement n'était pas grave.",
      juste: "C'est au **créancier** de prouver la **gravité** de l'inexécution ([[1226]], al. 4), puisqu'il a rompu **à ses risques et périls**.",
      pourquoi: "Sinon, il s'expose à des dommages et intérêts et au maintien du contrat." },
    { faux: "La résolution anéantit toujours rétroactivement le contrat.",
      juste: "« La résolution met fin au contrat » ([[1229]]) : restitutions **intégrales** si les prestations n'avaient d'utilité que par l'exécution complète ; **résiliation** sans restitution pour le passé si elles ont trouvé leur utilité au fur et à mesure.",
      pourquoi: "Le critère légal est l'utilité des prestations, plus la rétroactivité." },
    { faux: "La résolution fait disparaître toutes les clauses du contrat, y compris la clause de non-concurrence.",
      juste: "Survivent les clauses relatives au **règlement des différends** et celles destinées à produire effet même en cas de résolution, comme la **confidentialité** et la **non-concurrence** ([[1230]]).",
      pourquoi: "La résolution sanctionne un contrat valable, elle n'est pas une nullité." },
    { faux: "Le débiteur d'une obligation de résultat s'exonère en prouvant qu'il n'a commis aucune faute.",
      juste: "Seule la **cause étrangère** (force majeure, fait d'un tiers ou du créancier présentant ses caractères) l'exonère ([[1231-1]]) ; la preuve de l'absence de faute ne vaut que pour l'obligation de **moyens**.",
      pourquoi: "Et le fait d'un préposé ou de la chose utilisée n'est jamais une force majeure pour le débiteur." },
    { faux: "La faute lourde permet d'obtenir réparation de tous les préjudices, même indirects.",
      juste: "Elle lève la limite du **préjudice prévisible** ([[1231-3]]), mais le préjudice doit rester une **suite immédiate et directe** de l'inexécution ([[1231-4]]).",
      pourquoi: "Prévisibilité et causalité sont deux filtres distincts." },
    { faux: "Une clause limitative portant sur l'obligation essentielle est toujours réputée non écrite (Chronopost).",
      juste: "Seule est réputée non écrite la clause qui **contredit la portée** de l'obligation essentielle, appréciée *in concreto* (Com., 29 juin 2010, Faurecia, n° 09-11.841), c'est-à-dire qui la **prive de sa substance** ([[1170]]).",
      pourquoi: "Chronopost (1996) a été affiné par Faurecia, puis codifié en 2016." }
  ],
  reflexes: [
    { face: "Le créancier veut sortir du contrat",
      etapes: [
        "Écarter la **force majeure** (si l'empêchement est définitif, résolution de plein droit : [[1218]]).",
        "Y a-t-il une **clause résolutoire** au sens strict ([[1225]]) ? Si oui : mise en demeure visant la clause.",
        "Sinon, l'inexécution est-elle **suffisamment grave** ? Notification ([[1226]]) : mise en demeure spéciale, puis notification motivée, à ses risques et périls.",
        "En cas de doute sur la gravité : **juge** ([[1227]], [[1228]]).",
        "Effets : date d'effet, restitutions ou résiliation, clauses survivantes, contrats interdépendants ([[1229]], [[1230]], [[1186]])."
      ],
      astuce: "Toujours ajouter la demande de dommages et intérêts ([[1217]], dernier al.)." },
    { face: "Le créancier demande réparation d'une inexécution",
      etapes: [
        "Contrat entre les parties ? Responsabilité **contractuelle** (non-cumul).",
        "Obligation de **moyens** ou de **résultat** ? Qui prouve quoi ?",
        "**Mise en demeure** nécessaire, sauf inexécution définitive ([[1231]]).",
        "Préjudice prouvé, **prévisible** ([[1231-3]]) et **direct** ([[1231-4]]).",
        "Exonérations : force majeure, fait du tiers, faute du créancier."
      ],
      astuce: "Chercher dans les faits un indice de faute délibérée : elle fait sauter la limite de la prévisibilité et les clauses limitatives." },
    { face: "Le contrat contient une clause sur les dommages et intérêts",
      etapes: [
        "Qualifier : clause **limitative ou exonératoire** (plafond, exclusion) ou clause **pénale** (forfait comminatoire) ? Indemnité d'immobilisation et dédit ne sont pas des clauses pénales.",
        "Clause limitative : faute lourde ou dolosive ? Obligation essentielle vidée de sa substance ([[1170]]) ? Consommateur, contrat d'adhésion ([[1171]]) ?",
        "Clause pénale : manifestement excessive ou dérisoire ? Exécution partielle ? Révision même d'office ([[1231-5]])."
      ],
      astuce: "Le juge révise une clause pénale excessive ; il ne révise pas une clause abusive : il la répute non écrite." }
  ]
};

/* Pièges et réflexes — chapitre 12 (Introduction à la responsabilité civile délictuelle) */

OBL.pieges[12] = {
  pieges: [
    { faux: "La victime peut choisir entre la responsabilité contractuelle et la responsabilité délictuelle selon ce qui l'avantage.",
      juste: "Quand les conditions de la responsabilité contractuelle sont réunies, la victime **ne peut pas opter** pour [[1240]] : c'est le principe du **non-cumul** (Civ., 11 janv. 1922).",
      pourquoi: "Le régime contractuel reflète les prévisions des parties (prévisibilité du dommage, clauses limitatives) ; l'option les ruinerait." },
    { faux: "Le non-cumul interdit à la victime de percevoir deux indemnités pour le même dommage.",
      juste: "Le non-cumul est une règle de **non-option** entre deux régimes. L'interdiction d'être indemnisé deux fois découle d'un autre principe : la **réparation intégrale** (ni perte ni profit).",
      pourquoi: "Le mot « cumul » est trompeur : dites « non-option » en copie pour montrer que vous avez compris." },
    { faux: "Dès qu'un contrat lie la victime et le responsable, la responsabilité est contractuelle.",
      juste: "Il faut encore que le dommage résulte de l'**inexécution d'une obligation née du contrat**. Un salarié blessé par son employeur hors de l'exécution du contrat de travail agit sur le terrain **délictuel**.",
      pourquoi: "Trois conditions cumulatives : contrat valable, entre les parties, dommage né de l'inexécution." },
    { faux: "La faute commise pendant les négociations ou le dol engagent la responsabilité contractuelle.",
      juste: "Avant la formation du contrat, la responsabilité est **extracontractuelle** : rupture fautive des pourparlers ([[1112]]) ; réparation du dol indépendamment de l'annulation ([[1178]], al. 4).",
      pourquoi: "La faute précède le contrat : aucune obligation contractuelle n'a été violée." },
    { faux: "Devant le tribunal correctionnel, la victime liée par un contrat à l'auteur de l'infraction obtient réparation selon les règles contractuelles.",
      juste: "Le juge pénal saisi de l'action civile applique **toujours les règles délictuelles**, même entre cocontractants (jurisprudence constante de la chambre criminelle).",
      pourquoi: "Exception majeure au non-cumul, critiquée par la doctrine civiliste." },
    { faux: "Si le prévenu est relaxé du délit de blessures involontaires, le juge civil ne peut plus retenir de faute.",
      juste: "Depuis la loi du 10 juillet 2000, l'absence de faute pénale non intentionnelle ne fait pas obstacle à une action civile fondée sur une faute d'imprudence ou de négligence (C. proc. pén., art. 4-1 ; [[1241]]).",
      pourquoi: "La règle de l'identité des fautes civile et pénale d'imprudence a été abandonnée. L'autorité du pénal sur le civil demeure pour ce que le juge pénal a nécessairement décidé." },
    { faux: "Le passager blessé dans un accident de car agit contre le transporteur sur le fondement du contrat de transport.",
      juste: "La loi du 5 juillet 1985 s'applique aux victimes « même lorsqu'elles sont transportées en vertu d'un contrat » ([[L85-1]]).",
      pourquoi: "Exception législative au non-cumul ; même logique pour les produits défectueux ([[1245]])." },
    { faux: "L'ordonnance de 2016 a réformé la responsabilité civile délictuelle.",
      juste: "Elle s'est bornée à **renuméroter** les articles (1382 devenu [[1240]], 1383 devenu [[1241]], 1384 devenu [[1242]]). La réforme d'ensemble (projets de 2016-2017, proposition sénatoriale du 29 juillet 2020) **n'a pas été adoptée**.",
      pourquoi: "Seules des retouches ponctuelles sont intervenues : [[1253]] (2024), [[1254]] (2025)." },
    { faux: "Depuis 2025, le Code civil consacre des dommages et intérêts punitifs versés à la victime.",
      juste: "L'art. [[1254]] crée une **sanction civile** de la faute lucrative, prononcée à la demande du **ministère public** (ou du Gouvernement), plafonnée et **non assurable**, dont le produit va à un **fonds** finançant les actions de groupe.",
      pourquoi: "La victime reste indemnisée à hauteur de son préjudice : la sanction civile ne l'enrichit pas." }
  ],
  reflexes: [
    { face: "Un cas pratique de responsabilité : par où commencer ?",
      etapes: [
        "Un **régime spécial** indifférent au contrat s'applique-t-il ? (accident de la circulation : [[L85-1]] ; produit défectueux : [[1245]]).",
        "Existe-t-il un **contrat valable** entre la victime et le responsable ?",
        "Le dommage résulte-t-il de l'**inexécution** d'une obligation de ce contrat ?",
        "Oui aux deux : responsabilité **contractuelle** exclusivement (non-cumul). Sinon : [[1240]] et suivants.",
        "Victime par ricochet ou tiers : délictuel, avec possibilité d'invoquer le manquement contractuel (Boot shop, 2006) et opposabilité des limites du contrat (Com., 3 juill. 2024)."
      ],
      astuce: "Une phrase suffit en copie quand la qualification est évidente ; développez seulement si elle est discutable." },
    { face: "Le dommage résulte d'une infraction pénale",
      etapes: [
        "Choix de la victime : juge civil ou action civile devant le juge pénal (C. proc. pén., art. 2 et 3).",
        "Devant le juge pénal : règles délictuelles, même entre cocontractants.",
        "Autorité de la chose jugée au pénal : la condamnation s'impose au juge civil.",
        "Relaxe pour faute non intentionnelle : une faute civile d'imprudence reste possible (C. proc. pén., art. 4-1)."
      ],
      astuce: "Rappelez que la responsabilité pénale punit, la responsabilité civile indemnise : les deux se cumulent pour un même fait." }
  ]
};

/* Pièges et réflexes — chapitre 13 (La faute) */

OBL.pieges[13] = {
  pieges: [
    { faux: "Un enfant en bas âge ne peut pas commettre de faute, faute de discernement.",
      juste: "Depuis les arrêts **Derguini** et **Lemaire** (Ass. plén., 9 mai 1984), la faute peut être retenue **sans vérifier** si l'enfant était capable de discerner les conséquences de son acte : la faute est **objective**.",
      pourquoi: "L'imputabilité n'est plus un élément de la faute." },
    { faux: "La faute d'un enfant s'apprécie par comparaison avec un enfant du même âge.",
      juste: "La 2e chambre civile l'apprécie *in abstracto*, par rapport à une **personne raisonnable**, sans égard au jeune âge (Civ. 2e, 28 févr. 1996).",
      pourquoi: "La comparaison avec un enfant du même âge est une proposition doctrinale, non consacrée." },
    { faux: "Une personne atteinte d'un trouble mental est civilement irresponsable.",
      juste: "Elle est « obligée à réparation » ([[414-3]], issu de la loi du 3 janv. 1968), dans **tous** les cas de responsabilité (faute, fait des choses, fait d'autrui).",
      pourquoi: "L'irresponsabilité pénale (C. pén., art. 122-1) est sans incidence sur la responsabilité civile." },
    { faux: "L'art. 414-3 couvre toute perte de conscience, par exemple un malaise cardiaque.",
      juste: "Le texte vise le seul **trouble mental** et s'interprète strictement : il ne s'applique pas à un malaise cardiaque (Civ. 2e, 4 févr. 1981).",
      pourquoi: "Et ce n'est pas un régime autonome : il supprime seulement l'obstacle tenant à l'état mental." },
    { faux: "Pour agir sur [[1240]], il faut prouver l'intention de nuire ou une faute grave.",
      juste: "Un fait **volontaire** suffit pour [[1240]], une imprudence pour [[1241]] ; la **faute la plus légère** engage la responsabilité.",
      pourquoi: "L'intention ne compte que pour la preuve ou, pour la faute lucrative d'un professionnel, pour la sanction civile ([[1254]])." },
    { faux: "Une simple omission ne peut pas être une faute.",
      juste: "L'abstention est fautive quand le fait omis devait être accompli en vertu d'une **obligation légale, réglementaire, conventionnelle ou professionnelle**, même sans intention de nuire (Civ., 27 févr. 1951, **Branly**).",
      pourquoi: "La jurisprudence admet largement l'obligation d'agir, même sans texte." },
    { faux: "Apprécier la faute *in abstracto*, c'est ignorer toutes les circonstances de l'espèce.",
      juste: "On ignore les particularités **personnelles** (maladresse, étourderie) mais on tient compte des circonstances **externes** : profession et spécialité, urgence, difficulté de l'acte.",
      pourquoi: "On compare à une personne raisonnable **placée dans les mêmes circonstances**." },
    { faux: "La faute de la victime ou le fait d'un tiers exonère toujours totalement le responsable.",
      juste: "Exonération **totale** seulement s'ils présentent les caractères de la **force majeure**. Sinon : faute de la victime = **partage** ; fait du tiers = **aucune** exonération envers la victime (condamnation *in solidum*).",
      pourquoi: "Et la victime n'est pas tenue de limiter son préjudice dans l'intérêt du responsable (Civ. 2e, 19 juin 2003)." },
    { faux: "L'acceptation des risques exonère tout sportif, y compris le gardien d'une chose.",
      juste: "Elle ne peut plus être opposée à la victime qui agit contre le **gardien d'une chose** (Civ. 2e, 4 nov. 2010). En matière de faute, elle suppose une **compétition** et ne couvre que les **risques normaux**, jamais un geste contraire aux règles.",
      pourquoi: "Depuis 2012, les dommages **matériels** entre pratiquants en compétition échappent au fait des choses (C. sport, art. L. 321-3-1)." },
    { faux: "Le panneau « la direction décline toute responsabilité » exonère l'exploitant.",
      juste: "Les clauses exonératoires ou limitatives sont **nulles** en responsabilité délictuelle pour faute, car [[1240]] et [[1241]] sont **d'ordre public** (Civ. 2e, 17 févr. 1955 ; Civ. 1re, 5 juill. 2017, n° 16-13.407).",
      pourquoi: "Nuance : le tiers qui invoque un manquement contractuel peut se voir opposer les limites du contrat (Com., 3 juill. 2024)." }
  ],
  reflexes: [
    { face: "Établir une faute délictuelle",
      etapes: [
        "Vérifier que la responsabilité est **délictuelle** (pas d'inexécution d'un contrat entre les parties).",
        "Identifier le **fait** : acte positif ou abstention (obligation d'agir ? Branly).",
        "Identifier la **norme violée** : texte, règle sportive, usage professionnel, devoir général de prudence.",
        "Comparer à une **personne raisonnable** dans les mêmes circonstances externes.",
        "Écarter les objections tirées du discernement ([[414-3]] ; Derguini et Lemaire)."
      ],
      astuce: "Citez [[1240]] pour la faute volontaire, [[1241]] pour l'imprudence ; les deux ensemble si le doute existe." },
    { face: "Le défendeur cherche à s'exonérer",
      etapes: [
        "Conteste-t-il la faute ? (si elle n'est pas prouvée, la victime est déboutée).",
        "Force majeure : irrésistible, imprévisible au jour du fait, extérieure (Ass. plén., 14 avr. 2006).",
        "Fait d'un tiers : force majeure ou *in solidum*. Faute de la victime (même *infans*) : force majeure ou partage.",
        "Fait justificatif : légitime défense, état de nécessité, ordre de la loi ; acceptation des risques (compétition, risques normaux) ; consentement (biens seulement).",
        "Clause exonératoire : nulle en responsabilité pour faute."
      ],
      astuce: "Distinguez bien la cause étrangère (rupture du lien causal) du fait justificatif (disparition de l'illicéité)." },
    { face: "L'auteur ou la victime est un jeune enfant",
      etapes: [
        "Enfant auteur : sa faute objective peut être retenue ; mais agir surtout contre les **parents** ([[1242]], al. 4, v. chapitre 14).",
        "Enfant victime : sa faute peut réduire son indemnisation (Derguini) ; appréciée comme celle d'une personne raisonnable.",
        "Accident impliquant un véhicule terrestre à moteur : loi Badinter, victime de moins de 16 ans indemnisée de son dommage corporel dans tous les cas ([[L85-3]])."
      ],
      astuce: "Signalez que la solution est critiquée et que les projets de réforme voudraient la supprimer." }
  ]
};

/* Pièges et réflexes — chapitre 14 (fait des choses). */

OBL.pieges[14] = {
  pieges: [
    { faux: "L'art. 1242, al. 1er institue une présomption de faute du gardien.",
      juste: "C'est une **responsabilité de plein droit** : le gardien ne s'exonère ni en prouvant son absence de faute ni en montrant que la cause du dommage est inconnue, mais seulement par la **cause étrangère** (Ch. réunies, 13 févr. 1930, Jand'heur).",
      pourquoi: "Une présomption de faute pourrait être renversée par la preuve de la diligence : c'est précisément ce que Jand'heur interdit." },
    { faux: "Dès que la victime a touché la chose, son rôle actif est présumé.",
      juste: "La présomption ne joue que pour une chose **en mouvement** entrée en contact avec la victime. Pour une chose **inerte**, la victime doit prouver son **anormalité** (position, état ou fonctionnement anormal) (Civ. 2e, 24 févr. 2005).",
      pourquoi: "La jurisprudence qui présumait le rôle actif des choses inertes heurtées (1998-2003) a été abandonnée." },
    { faux: "Le propriétaire est toujours le gardien de la chose.",
      juste: "Le propriétaire est seulement **présumé** gardien ; la garde est un pouvoir de fait d'**usage, de direction et de contrôle** (Ch. réunies, 2 déc. 1941, Franck). Il peut prouver un transfert de garde (vol, location, prêt avec toute possibilité de prévenir le dommage).",
      pourquoi: "Conception matérielle de la garde, et non juridique." },
    { faux: "Le salarié qui utilise l'outil de son employeur en est le gardien.",
      juste: "Le **préposé n'est jamais gardien** : il n'a pas de pouvoir indépendant sur la chose. Le gardien est le **commettant**.",
      pourquoi: "Garde et subordination sont incompatibles ; la victime agit contre l'employeur ([[1242]], al. 1er, ou al. 5)." },
    { faux: "Un jeune enfant ne peut pas être gardien, faute de discernement.",
      juste: "L'*infans* peut être gardien (Ass. plén., 9 mai 1984, Gabillet).",
      pourquoi: "La garde ne suppose pas le discernement ; c'est l'un des arrêts d'Assemblée plénière du 9 mai 1984 qui objectivent la responsabilité des enfants." },
    { faux: "Le vice interne de la chose est un cas de force majeure pour le gardien.",
      juste: "La force majeure doit être **extérieure au gardien et à la chose** : un vice de la chose n'exonère jamais le gardien, qui peut seulement se retourner contre le fabricant.",
      pourquoi: "Depuis Teffaine et Jand'heur, le gardien répond même du vice qu'il ne pouvait pas déceler." },
    { faux: "La faute de la victime n'exonère le gardien que si elle présente les caractères de la force majeure.",
      juste: "Faute ayant les caractères de la force majeure : exonération **totale**. Simple faute : exonération **partielle** (Civ. 2e, 6 avr. 1987, qui abandonne Desmares du 21 juill. 1982).",
      pourquoi: "Desmares (le « tout ou rien ») n'est plus le droit positif depuis 1987." },
    { faux: "Le sportif victime d'une chose a accepté les risques : le gardien est exonéré.",
      juste: "L'acceptation des risques ne joue plus en matière de fait des choses (Civ. 2e, 4 nov. 2010, n° 09-65.947). La loi du 12 mars 2012 exclut seulement les dommages **matériels** entre pratiquants (C. sport, art. L. 321-3-1).",
      pourquoi: "Les dommages corporels entre sportifs relèvent toujours de [[1242]], al. 1er." },
    { faux: "Le propriétaire d'un bâtiment échappe à l'art. 1244 si le défaut d'entretien est imputable à son locataire.",
      juste: "Le **propriétaire** répond seul envers la victime ([[1244]]), puis exerce un **recours** contre le locataire ou le constructeur fautif.",
      pourquoi: "Le texte désigne le propriétaire, pas le gardien." },
    { faux: "Le détenteur d'un immeuble où un incendie a pris naissance répond de plein droit du dommage causé aux voisins.",
      juste: "Envers les **tiers**, la victime doit prouver la **faute** du détenteur ou des personnes dont il répond ([[1242]], al. 2). Entre bailleur et locataire, ce sont [[1733]] et [[1734]] qui s'appliquent.",
      pourquoi: "Exception voulue par la loi du 7 novembre 1922 au principe général." }
  ],
  reflexes: [
    { face: "Une chose a causé un dommage",
      etapes: [
        "Écarter les **régimes spéciaux** : véhicule terrestre à moteur (loi du 5 juillet 1985), produit défectueux ([[1245]] s.), animal ([[1243]]), ruine d'un bâtiment ([[1244]]), incendie ([[1242]], al. 2).",
        "**Chose** au sens de [[1242]], al. 1er ? (pas le corps humain, pas une chose sans maître).",
        "**Fait de la chose** : mouvement + contact = présomption ; sinon, prouver l'anormalité.",
        "**Gardien** : propriétaire présumé ; transfert de garde ? structure / comportement ? garde commune ?",
        "**Exonérations** : force majeure, fait du tiers, faute de la victime ; jamais l'absence de faute."
      ],
      astuce: "Si aucun régime ne s'applique, basculer sur la faute prouvée ([[1240]], [[1241]])." },
    { face: "Une chose inerte a été heurtée (vitre, escalier, poteau)",
      etapes: [
        "Pas de présomption : chercher dans les faits un élément d'**anormalité** (vitre qui se brise au moindre choc, obstacle mal signalé, sol glissant).",
        "Si l'anormalité est établie, même un rôle **partiel** suffit (Civ. 2e, 30 nov. 2023).",
        "Examiner la **faute de la victime** (inattention, ivresse) : exonération partielle ; si elle est à l'origine exclusive du dommage, elle fait obstacle à l'examen de la responsabilité du gardien (Civ. 2e, 7 avr. 2022, portée incertaine)."
      ],
      astuce: "Le mot « légèrement » dans l'énoncé (choc léger) est un indice d'anormalité de la chose." },
    { face: "Le propriétaire soutient qu'il n'était plus gardien",
      etapes: [
        "Rappeler la **présomption** de garde du propriétaire et la charge de la preuve qui pèse sur lui.",
        "Transfert **involontaire** (vol, détournement) : le propriétaire perd la garde (Franck).",
        "Transfert **volontaire** : le tiers a-t-il reçu toute possibilité de prévenir le dommage (durée, complexité de la chose, instructions) ?",
        "Chose dangereuse à dynamisme propre : envisager la garde de la **structure** du fabricant."
      ],
      astuce: "Conclure en désignant le gardien retenu : la victime garde toujours une action, contre le vrai gardien." }
  ]
};

/* Pièges et réflexes — chapitre 15 (fait d'autrui). */

OBL.pieges[15] = {
  pieges: [
    { faux: "Les parents ne sont responsables que s'ils habitent avec l'enfant.",
      juste: "Depuis la **loi du 23 juin 2025**, [[1242]], al. 4 n'exige plus la cohabitation : il suffit que les parents **exercent l'autorité parentale**, sauf si l'enfant a été **confié à un tiers par une décision administrative ou judiciaire**. Pour des faits antérieurs, même solution depuis Ass. plén., 28 juin 2024, n° 22-84.760.",
      pourquoi: "La cohabitation était déjà réduite à une conséquence de l'exercice conjoint de l'autorité parentale ; la loi l'a supprimée du texte." },
    { faux: "Les parents s'exonèrent en prouvant qu'ils n'ont pu empêcher le fait de l'enfant ([[1242]], al. 7).",
      juste: "Depuis Civ. 2e, 19 févr. 1997, Bertrand, seules la **force majeure** ou la **faute de la victime** les exonèrent ; la loi de 2025 précise d'ailleurs que leur responsabilité est **de plein droit**.",
      pourquoi: "L'al. 7 figure toujours dans le Code mais n'a plus d'effet pour les parents : piège de lecture classique." },
    { faux: "La responsabilité des parents suppose une faute de l'enfant.",
      juste: "Un **fait causal**, même non fautif, du mineur suffit (Ass. plén., 9 mai 1984, Fullenwarth ; Civ. 2e, 10 mai 2001, Levert ; Ass. plén., 13 déc. 2002).",
      pourquoi: "La victime prouve seulement que le fait de l'enfant est la cause directe du dommage." },
    { faux: "Les grands-parents qui gardent leur petit-fils pendant les vacances répondent de ses actes.",
      juste: "Ils ne sont pas visés par [[1242]], al. 4 (ils n'exercent pas l'autorité parentale) et la jurisprudence refuse d'appliquer Blieck aux **membres de la famille** : les **parents** restent responsables. Contre les grands-parents, il faut prouver leur **faute** ([[1240]]).",
      pourquoi: "L'enfant n'est pas confié par une décision administrative ou judiciaire." },
    { faux: "Le salarié qui cause un dommage par sa faute en répond toujours personnellement envers la victime.",
      juste: "Le préposé qui agit **sans excéder les limites de sa mission** bénéficie d'une **immunité** (Ass. plén., 25 févr. 2000, Costedoat) : seul le commettant répond ([[1242]], al. 5).",
      pourquoi: "Exceptions : infraction pénale intentionnelle ayant donné lieu à condamnation (Ass. plén., 14 déc. 2001, Cousin), faute intentionnelle." },
    { faux: "L'employeur n'est pas responsable si son salarié a agi dans son intérêt personnel : c'est un abus de fonctions.",
      juste: "L'abus de fonctions suppose **trois conditions cumulatives** : acte **hors des fonctions**, **sans autorisation**, **à des fins étrangères** aux attributions (Ass. plén., 19 mai 1988). Un acte commis sur le lieu, pendant le temps ou avec les moyens du travail n'est pas hors des fonctions.",
      pourquoi: "Les fins personnelles ne sont que l'une des trois conditions ; la première fait presque toujours défaut." },
    { faux: "Le commettant condamné peut toujours se retourner contre son préposé.",
      juste: "Pas de recours contre le préposé qui bénéficie de l'immunité Costedoat ; le recours reste possible contre l'**assureur** de responsabilité du préposé (Civ. 1re, 12 juill. 2007), ou contre le préposé qui a perdu son immunité.",
      pourquoi: "Depuis 2000, le commettant est le garant définitif des fautes commises dans la mission." },
    { faux: "L'instituteur est responsable de plein droit des dommages causés par ses élèves.",
      juste: "La victime doit **prouver la faute** de l'enseignant ([[1242]], al. 8) ; dans l'enseignement public ou privé sous contrat, l'**État** est substitué à l'enseignant (loi du 5 avril 1937), devant le tribunal judiciaire, dans les trois ans.",
      pourquoi: "C'est le seul régime du fait d'autrui fondé sur la faute prouvée." },
    { faux: "Depuis Blieck, chacun répond de plein droit de toute personne dont il a la garde.",
      juste: "[[1242]], al. 1er ne vise que celui qui **organise et contrôle à titre permanent le mode de vie** d'autrui, en vertu d'une **décision judiciaire ou administrative** (pas d'un contrat : Civ. 1re, 15 déc. 2011), ou qui **organise et dirige l'activité** d'autrui (clubs sportifs, sous condition d'une violation des règles du jeu : Ass. plén., 29 juin 2007).",
      pourquoi: "Blieck n'a pas posé un principe général absolu ; le domaine est découpé au cas par cas." }
  ],
  reflexes: [
    { face: "Un mineur a causé un dommage",
      etapes: [
        "Date des faits : nouveau [[1242]], al. 4 (loi du 23 juin 2025) ou, avant, Ass. plén., 28 juin 2024.",
        "Mineur non émancipé ? Qui **exerce l'autorité parentale** (conjointe ou unilatérale) ?",
        "Enfant **confié à un tiers par décision administrative ou judiciaire** ? Si oui : parents hors de cause, voir l'organisme gardien ([[1242]], al. 1er, Blieck).",
        "**Fait causal** du mineur ; exonération seulement par force majeure ou faute de la victime (Bertrand).",
        "Autres actions : contre l'enfant ([[1240]]), contre l'État si faute de l'enseignant pendant le temps scolaire, contre les parents d'éventuels coauteurs (*in solidum*)."
      ],
      astuce: "Résidence habituelle, séjour chez l'autre parent, colonie, école : autant de leurres dans l'énoncé." },
    { face: "Un salarié a causé un dommage",
      etapes: [
        "**Lien de préposition** (ordres et instructions) ?",
        "**Faute** du préposé ?",
        "**Dans les fonctions** ? Tester l'abus de fonctions (trois conditions cumulatives) et la bonne foi de la victime.",
        "Action contre le **préposé** : immunité (Costedoat) sauf infraction pénale intentionnelle (Cousin) ou faute intentionnelle.",
        "Recours du commettant : contre le préposé non immunisé ou contre son assureur."
      ],
      astuce: "Si le salarié utilisait une chose de l'entreprise, ajouter [[1242]], al. 1er contre l'employeur, seul gardien." },
    { face: "Une personne handicapée, un mineur placé ou un sportif a causé un dommage",
      etapes: [
        "Aucun régime spécial (parents, commettant) ne s'applique-t-il ?",
        "Le défendeur organise-t-il et contrôle-t-il **à titre permanent** le mode de vie de l'auteur, sur **décision judiciaire ou administrative** ? Ou dirige-t-il son **activité** sportive ?",
        "Sportif : prouver une **violation des règles du jeu**, même par un joueur non identifié.",
        "Responsabilité de plein droit : exonération par la seule cause étrangère (Crim., 26 mars 1997)."
      ],
      astuce: "Maison de retraite, internat, centre de loisirs sous contrat : pas de Blieck ; chercher une faute (contractuelle si la victime est cocontractante)." }
  ]
};

/* Pièges et réflexes — chapitre 16 (régimes spéciaux de responsabilité). */

OBL.pieges[16] = {
  pieges: [
    { faux: "Pour appliquer la loi Badinter, il faut prouver que le véhicule a causé l'accident.",
      juste: "Il suffit que le VTAM soit **impliqué**, c'est-à-dire qu'il ait joué un **rôle quelconque** dans l'accident ([[L85-1|art. 1er de la loi de 1985]]) ; tout véhicule heurté, **à l'arrêt ou en mouvement**, est impliqué (Civ. 2e, 23 mars 1994).",
      pourquoi: "Le législateur a choisi l'implication précisément pour écarter la causalité." },
    { faux: "Le conducteur s'exonère en prouvant la force majeure ou le fait d'un tiers.",
      juste: "Ni la **force majeure** ni le **fait d'un tiers** ne sont opposables aux victimes, **conducteurs compris** ([[L85-2|art. 2 de la loi de 1985]]).",
      pourquoi: "Seule la faute de la victime peut réduire ou exclure l'indemnisation." },
    { faux: "Le piéton qui traverse hors du passage ou au feu rouge perd tout ou partie de son indemnisation.",
      juste: "Pour ses atteintes corporelles, on ne peut lui opposer que sa **faute inexcusable**, **cause exclusive de l'accident**, ou la **recherche volontaire** du dommage ([[L85-3|art. 3 de la loi de 1985]]) ; s'il a moins de 16 ans, plus de 70 ans ou une invalidité d'au moins 80 %, **seule** la recherche volontaire compte.",
      pourquoi: "Faute inexcusable = faute volontaire, d'une exceptionnelle gravité, exposant sans raison valable à un danger dont on aurait dû avoir conscience (Civ. 2e, 20 juill. 1987 ; Ass. plén., 10 nov. 1995) : une infraction au Code de la route n'y suffit pas." },
    { faux: "Le passager qui n'avait pas bouclé sa ceinture voit son indemnisation réduite.",
      juste: "Pour un **non-conducteur**, la faute doit être la cause exclusive de l'**accident** : l'absence de ceinture n'a pas causé l'accident, elle est **inopposable**. Pour le **conducteur**, en revanche, la même faute est opposable si elle a contribué à son **préjudice** ([[L85-4|art. 4 de la loi de 1985]]).",
      pourquoi: "Accident (non-conducteur) ou préjudice (conducteur) : le mot change tout." },
    { faux: "La faute du conducteur victime ne peut exclure son indemnisation que si elle est la cause exclusive de l'accident ou présente les caractères de la force majeure.",
      juste: "Toute faute du conducteur ayant **contribué à son préjudice** peut **limiter ou exclure** son indemnisation, appréciée en **faisant abstraction du comportement des autres** conducteurs (Ch. mixte, 28 mars 1997 ; Civ. 2e, 13 oct. 2005) ; l'exclusion n'exige pas la force majeure.",
      pourquoi: "Mais pas de faute « de comportement » sans rôle causal : l'ivresse ne compte que si elle a joué un rôle (Ass. plén., 6 avr. 2007), de même que l'absence de permis (Crim., 27 nov. 2007)." },
    { faux: "Le conducteur blessé par la faute d'un piéton peut agir contre lui sur la loi Badinter.",
      juste: "La loi ne vise que le **conducteur ou le gardien d'un VTAM** ([[L85-2|art. 2 de la loi de 1985]]) : contre un piéton ou un cycliste, action de **droit commun** ([[1240]], [[1242]]).",
      pourquoi: "Le régime spécial protège les victimes contre les véhicules, pas l'inverse." },
    { faux: "Le vendeur d'un produit défectueux est responsable avec le producteur, au choix de la victime.",
      juste: "Le fournisseur n'est responsable que **si le producteur ne peut être identifié**, et il se libère en désignant son fournisseur ou le producteur **dans les trois mois** de la demande ([[1245-6]]).",
      pourquoi: "La version plus large du texte a valu à la France deux condamnations (CJCE, 25 avr. 2002 ; 14 mars 2006)." },
    { faux: "Le producteur s'exonère en prouvant que son produit respectait les normes et bénéficiait d'une autorisation de mise sur le marché.",
      juste: "Le respect des règles de l'art, des normes ou d'une **autorisation administrative** n'exclut pas la responsabilité ([[1245-9]]) ; seules les causes **limitatives** de [[1245-10]] exonèrent, et le fait d'un tiers ne réduit rien ([[1245-13]]).",
      pourquoi: "Seule la conformité à des règles **impératives** qui imposaient le défaut exonère ([[1245-10]], 5°)." },
    { faux: "La victime d'un produit défectueux a dix ans pour agir à compter de son dommage.",
      juste: "Deux délais : **prescription de trois ans** à compter de la connaissance du dommage, du défaut et du producteur ([[1245-16]]) ; **extinction dix ans après la mise en circulation** du produit ([[1245-15]]). Au-delà, seule une **faute distincte du défaut** (maintien en circulation, défaut de vigilance) permet d'agir sur le droit commun (Civ. 1re, 15 nov. 2023, Mediator).",
      pourquoi: "Le délai de dix ans de [[2226]] est celui du droit commun du dommage corporel, pas celui du régime spécial." },
    { faux: "La responsabilité pour trouble anormal de voisinage suppose une faute ou une activité illicite.",
      juste: "C'est une responsabilité **de plein droit** ([[1253]], al. 1er) : il suffit d'un trouble **excédant les inconvénients normaux** de voisinage, même causé par une activité autorisée. Seules la **préoccupation** (al. 2) et la cause étrangère l'écartent.",
      pourquoi: "Codification par la loi du 15 avril 2024 du principe de Civ. 2e, 19 nov. 1986." }
  ],
  reflexes: [
    { face: "Un accident implique un véhicule à moteur",
      etapes: [
        "Qualifier : accident de la circulation, **VTAM**, **implication** (contact ou rôle prouvé), imputabilité ([[L85-1|art. 1er]]).",
        "Identifier le défendeur : **conducteur ou gardien** d'un VTAM impliqué ; si la victime agit contre un piéton ou un cycliste, droit commun.",
        "Qualifier la victime : conducteur ou non ; si non-conducteur, âge et taux d'incapacité.",
        "Distinguer **atteintes à la personne** ([[L85-3|art. 3]], [[L85-4|art. 4]]) et **dommages aux biens** ([[L85-5|art. 5]]) ; écarter force majeure et fait du tiers ([[L85-2|art. 2]]).",
        "Victimes par ricochet : mêmes limitations ([[L85-6|art. 6]])."
      ],
      astuce: "Un tableau victime par victime, dommage par dommage, évite les oublis." },
    { face: "Un produit a causé un dommage",
      etapes: [
        "Vérifier le champ : produit meuble, producteur ou assimilé, mise en circulation, dommage réparable ([[1245]] à [[1245-5]]).",
        "Caractériser le **défaut de sécurité** ([[1245-3]]) et le lien de causalité, au besoin par présomptions ([[1245-8]]).",
        "Calculer les **délais** : 3 ans ([[1245-16]]) et 10 ans ([[1245-15]]).",
        "Examiner les exonérations limitatives ([[1245-10]] à [[1245-13]]).",
        "Si le régime est fermé (délai, bien professionnel, défendeur utilisateur) : faute distincte, vices cachés, régime propre de l'utilisateur."
      ],
      astuce: "Le régime est exclusif pour les actions fondées sur le défaut : le juge doit le relever d'office (Ch. mixte, 7 juill. 2017)." },
    { face: "Un voisin se plaint de nuisances",
      etapes: [
        "Trouble et **anormalité** (intensité, heure, lieu, personne raisonnable).",
        "Responsable de la liste de [[1253]], al. 1er (propriétaire, occupant, maître d'ouvrage…).",
        "**Préoccupation** : activité antérieure, conforme, sans aggravation ([[1253]], al. 2 ; activités agricoles : C. rur., art. L. 311-1-1)."
      ],
      astuce: "Ne cherchez pas de faute : si vous en trouvez une, [[1240]] reste un fondement alternatif." }
  ]
};

/* Pièges et réflexes — chapitre 17 (conditions communes à toute responsabilité). */

OBL.pieges[17] = {
  pieges: [
    { faux: "Dommage et préjudice sont synonymes.",
      juste: "Le **dommage** est l'atteinte matérielle (au corps, à un bien) ; le **préjudice** en est la conséquence juridique réparable (pertes de revenus, souffrances, perte d'agrément). Un seul dommage corporel ouvre plusieurs postes de préjudice.",
      pourquoi: "La distinction structure la nomenclature Dintilhac et l'évaluation poste par poste." },
    { faux: "La victime d'une perte de chance obtient le gain qu'elle aurait retiré de la chance réalisée.",
      juste: "La perte de chance est réparée **à hauteur de la chance perdue** : probabilité × avantage espéré. Elle suppose une chance **réelle et sérieuse** ; le juge saisi de l'entier préjudice peut rechercher une perte de chance (Ass. plén., 27 juin 2025).",
      pourquoi: "Allouer le gain entier, c'est réparer un préjudice incertain." },
    { faux: "Le concubin survivant ne peut rien obtenir, faute de lien de droit avec le défunt.",
      juste: "Depuis Ch. mixte, 27 févr. 1970, le concubin est indemnisé de son préjudice d'affection et de sa perte de soutien financier ; seule compte la **stabilité** de la relation. Aucun lien de droit n'est exigé des victimes par ricochet.",
      pourquoi: "L'exigence d'un intérêt juridiquement protégé (Civ., 27 juill. 1937) est abandonnée." },
    { faux: "Depuis l'arrêt Perruche, l'enfant né handicapé à la suite d'une erreur de diagnostic prénatal est indemnisé de son handicap.",
      juste: "La loi du 4 mars 2002 (CASF, art. L. 114-5) interdit de se prévaloir d'un préjudice **du seul fait de sa naissance** ; les parents ne sont indemnisés que de **leur propre préjudice**, en cas de **faute caractérisée**, pour les enfants nés après l'entrée en vigueur de la loi (Cons. const., 11 juin 2010, n° 2010-2 QPC).",
      pourquoi: "L'arrêt Perruche (Ass. plén., 17 nov. 2000) a été brisé par le législateur." },
    { faux: "La victime qui refuse des soins ou ne limite pas son dommage voit son indemnisation réduite.",
      juste: "« La victime n'est pas tenue de limiter son préjudice dans l'intérêt du responsable » (Civ. 2e, 19 juin 2003) : aucune réduction.",
      pourquoi: "Le projet de réforme de 2017 prévoyait une obligation de minimiser, hors dommage corporel ; elle n'est pas en vigueur." },
    { faux: "Le juge peut augmenter les dommages et intérêts quand la faute est grave, ou les réduire quand elle est légère.",
      juste: "Réparation **intégrale** : tout le préjudice, rien que le préjudice, quelle que soit la gravité de la faute ; pas de dommages et intérêts **punitifs**. Seule exception : la **sanction civile** de [[1254]], demandée par le **ministère public**, pour une faute lucrative ayant causé des dommages à **plusieurs** victimes, versée à un **fonds**.",
      pourquoi: "La sanction civile ne profite jamais à la victime et n'est pas assurable." },
    { faux: "Le fait d'un tiers permet au défendeur de ne payer que sa part.",
      juste: "Sauf s'il présente les caractères de la **force majeure** (exonération totale), le fait du tiers est **sans effet** à l'égard de la victime : les coauteurs sont tenus ***in solidum***, chacun pour le tout ; le partage se fait ensuite, au stade de la **contribution**.",
      pourquoi: "Ne pas confondre obligation à la dette et contribution à la dette." },
    { faux: "La force majeure peut n'exonérer que partiellement le défendeur.",
      juste: "La force majeure exonère **totalement** : la causalité partielle de l'arrêt *Lamoricière* (Com., 19 juin 1951) est abandonnée. C'est la **faute de la victime** qui, sans les caractères de la force majeure, exonère partiellement.",
      pourquoi: "Imprévisible et irrésistible (Ass. plén., 14 avr. 2006) : si elle est retenue, elle est la seule cause du dommage." },
    { faux: "Le préjudice d'agrément répare toutes les pertes de qualité de vie consécutives au handicap.",
      juste: "C'est l'impossibilité de pratiquer **régulièrement** une activité **spécifique**, sportive ou de loisirs (Civ. 2e, 28 mai 2009), que la victime doit prouver ; la perte générale de qualité de vie relève du **déficit fonctionnel**.",
      pourquoi: "Sinon, double indemnisation du même préjudice." },
    { faux: "L'action en réparation d'un dommage corporel se prescrit par cinq ans à compter de l'accident.",
      juste: "**Dix ans à compter de la consolidation** du dommage initial ou aggravé, pour la victime directe comme indirecte ([[2226]]) ; vingt ans en cas de tortures, actes de barbarie ou violences sexuelles sur mineur. Le délai de cinq ans de [[2224]] est le droit commun des autres dommages.",
      pourquoi: "Le point de départ (consolidation) compte autant que la durée." }
  ],
  reflexes: [
    { face: "Évaluer les préjudices d'une victime",
      etapes: [
        "Lister les victimes : directe, par ricochet (proches), héritiers agissant au nom du défunt.",
        "Pour chaque préjudice : **personnel, certain, direct, légitime** ; si l'avantage était incertain, raisonner en **perte de chance**.",
        "Dommage corporel : postes **Dintilhac**, avant et après consolidation, patrimoniaux et extrapatrimoniaux.",
        "Évaluer au jour du jugement ; pas d'obligation de minimiser ; pas de dommages et intérêts punitifs ([[1254]] mis à part).",
        "Vérifier la prescription ([[2224]], [[2226]])."
      ],
      astuce: "Un tableau victime par poste rend la copie lisible et évite les doubles emplois (agrément et déficit fonctionnel)." },
    { face: "Le défendeur invoque une cause étrangère",
      etapes: [
        "Identifier le régime : droit commun, loi de 1985 (force majeure et fait du tiers inopposables), produits défectueux (fait du tiers inopposable, [[1245-13]]).",
        "Force majeure : imprévisible et irrésistible (et extérieure) ; si oui, exonération **totale**.",
        "Faute de la victime : totale si force majeure, sinon partielle ; opposable aux victimes par ricochet.",
        "Fait du tiers sans force majeure : *in solidum*, puis contribution."
      ],
      astuce: "Un événement annoncé (alerte météo) n'est pas imprévisible." },
    { face: "Plusieurs personnes ont concouru au dommage",
      etapes: [
        "Obligation à la dette : chaque coauteur est tenu **pour le tout** envers la victime (*in solidum*).",
        "Contribution : fautes → selon leur gravité ; responsables sans faute → parts égales ; un fautif et un responsable sans faute → tout sur le fautif.",
        "Celui qui a payé exerce un recours subrogatoire."
      ],
      astuce: "*In solidum* n'est pas solidarité : pas besoin de texte, mais pas d'effets secondaires de la solidarité ([[1310]])." }
  ]
};

/* Pièges et réflexes — Chapitre 18, Les quasi-contrats */

OBL.pieges[18] = {
  pieges: [
    { faux: "Le quasi-contrat est un contrat tacite : les parties sont censées avoir consenti.",
      juste: "Le quasi-contrat est un **fait juridique** licite et volontaire, qui oblige **sans aucun accord de volontés** ([[1300]]).",
      pourquoi: "Dès qu'il y a accord (même tacite), on sort du quasi-contrat : un gérant d'affaires dont l'intervention a été demandée est un mandataire." },
    { faux: "Le gérant d'affaires a droit à une rémunération pour le service rendu.",
      juste: "Le maître rembourse les **dépenses**, indemnise les **dommages** et exécute les **engagements** pris dans son intérêt ([[1301-2]]), mais ne doit **aucune rémunération**.",
      pourquoi: "La gestion d'affaires est désintéressée ; seule la ratification, qui vaut mandat ([[1301-3]]), change le régime." },
    { faux: "Celui qui agit aussi dans son propre intérêt ne peut pas être gérant d'affaires.",
      juste: "L'intérêt personnel du gérant **n'exclut pas** la gestion d'affaires ; la charge se répartit alors **à proportion des intérêts** de chacun ([[1301-4]]).",
      pourquoi: "Solution jurisprudentielle codifiée en 2016." },
    { faux: "Une gestion inutile ne donne droit à rien.",
      juste: "Elle ne donne rien au titre de la gestion d'affaires, mais si le maître **en a profité**, le gérant est indemnisé **selon les règles de l'enrichissement injustifié** ([[1301-5]]).",
      pourquoi: "Passerelle expresse entre les deux quasi-contrats." },
    { faux: "Pour obtenir la restitution de l'indu, le solvens doit toujours prouver qu'il a payé par erreur.",
      juste: "La preuve de l'erreur (ou de la contrainte) n'est exigée que pour celui qui a payé **la dette d'autrui** ([[1302-2]]). Pour l'indu objectif et le paiement à un faux créancier, l'absence de dette suffit ([[1302-1]] ; Ass. plén., 2 avr. 1993).",
      pourquoi: "C'est l'erreur la plus fréquente en copie sur l'indu." },
    { faux: "La faute du solvens le prive de son action en restitution.",
      juste: "La faute ne ferme pas l'action : la restitution **peut être réduite** si le paiement procède d'une faute ([[1302-3]], al. 2).",
      pourquoi: "Déjà Civ. 1re, 17 févr. 2010 ; la réforme fait jouer la faute sur le montant, pas sur la recevabilité." },
    { faux: "Le débiteur qui a payé une dette prescrite peut en obtenir la restitution.",
      juste: "Le paiement d'une dette prescrite ne peut être répété **au seul motif** que le délai de prescription était expiré ([[2249]]) ; de même pour une obligation naturelle volontairement acquittée ([[1302]], al. 2).",
      pourquoi: "Dans les deux cas, le paiement a une cause : il n'y a pas d'indu." },
    { faux: "L'accipiens de bonne foi doit les intérêts depuis le jour du paiement.",
      juste: "Il ne doit les intérêts, les fruits et la valeur de la jouissance **qu'à compter de la demande** ; l'accipiens de mauvaise foi les doit **à compter du paiement** ([[1352-7]]). La bonne foi est présumée ([[2274]]).",
      pourquoi: "L'étendue de la restitution suit le droit commun des restitutions ([[1302-3]], al. 1er)." },
    { faux: "L'appauvri obtient une indemnité égale à son appauvrissement.",
      juste: "L'indemnité est égale à la **moindre** des deux valeurs, enrichissement et appauvrissement ([[1303]]), évaluées au jour du jugement ; la **plus forte** si l'enrichi est de mauvaise foi ([[1303-4]]).",
      pourquoi: "L'action ne doit pas devenir à son tour source d'enrichissement injustifié." },
    { faux: "Faute de preuve écrite du prêt, le prêteur peut agir sur le fondement de l'enrichissement injustifié.",
      juste: "Non : l'action est **subsidiaire** et fermée lorsque l'autre action se heurte à un **obstacle de droit** ([[1303-3]]), dont la carence probatoire (Civ. 1re, 2 avr. 2009 ; Civ. 1re, 10 janv. 2024).",
      pourquoi: "L'enrichissement injustifié ne sert pas à contourner les règles de preuve ou de prescription." }
  ],
  reflexes: [
    { face: "Quelqu'un s'est occupé des affaires d'autrui et réclame de l'argent",
      etapes: [
        "Y avait-il un **accord** (même tacite) ? Si oui : mandat. Une **ratification** après coup vaut aussi mandat ([[1301-3]]).",
        "Sinon, vérifier chaque terme de [[1301]] : sans y être tenu, sciemment (intérêt personnel admis, [[1301-4]]), utilement, à l'insu ou sans opposition du maître.",
        "Effets ([[1301-2]]) : dépenses avec intérêts du jour du paiement, dommages du gérant, engagements envers les tiers ; pas de rémunération.",
        "Acte inutile mais profitable : basculer sur l'enrichissement injustifié ([[1301-5]])."
      ],
      astuce: "Séparez chaque dépense : une même intervention peut contenir un acte utile (gestion d'affaires) et un acte superflu (enrichissement injustifié)." },
    { face: "Une somme a été versée alors qu'elle n'était pas due",
      etapes: [
        "La dette existait-elle ? Écarter obligation naturelle ([[1302]], al. 2), dette prescrite ([[2249]]), paiement anticipé ([[1305-2]]).",
        "Qualifier l'indu : objectif, subjectif actif ([[1302-1]] : pas de preuve d'erreur) ou dette d'autrui ([[1302-2]] : erreur ou contrainte).",
        "Faute du solvens : réduction possible ([[1302-3]], al. 2).",
        "Mesure : [[1352]] s. ; bonne foi présumée, intérêts à compter de la demande ; mauvaise foi, à compter du paiement ([[1352-7]])."
      ],
      astuce: "Calculez toujours le point de départ des intérêts avec une date précise." },
    { face: "Un patrimoine s'est enrichi au détriment d'un autre, sans autre fondement apparent",
      etapes: [
        "Subsidiarité d'abord : contrat, responsabilité, gestion d'affaires, indu ? Obstacle de droit (prescription, preuve) ? Si oui, irrecevable ([[1303-3]]).",
        "Enrichissement, appauvrissement, corrélation (même indirecte : Boudier).",
        "Justification ? Obligation de l'appauvri, intention libérale ([[1303-1]]), devoir moral (sauf dépassement), profit personnel ([[1303-2]], al. 1er).",
        "Indemnité : moindre des deux valeurs ; la plus forte si l'enrichi est de mauvaise foi ; modération si faute de l'appauvri."
      ],
      astuce: "Dans un cas pratique, l'enrichissement injustifié se traite en dernier : c'est une voie de secours." }
  ]
};

/* Pièges et réflexes — Chapitre 19, Les modalités des obligations */

OBL.pieges[19] = {
  pieges: [
    { faux: "La clause « je paierai quand j'aurai vendu ma maison » est un terme, puisque les parties considèrent la vente comme acquise.",
      juste: "L'événement est **objectivement incertain** dans sa réalisation : c'est une **condition** (Civ. 1re, 13 avr. 1999). Le terme suppose un événement **certain**, seule sa date pouvant être incertaine ([[1305]]).",
      pourquoi: "Critère objectif : la volonté des parties ne transforme pas un événement incertain en événement certain. [[1305]] paraît consacrer cette lecture, même si la jurisprudence a parfois hésité (Com. 12 oct. 2004 ; Civ. 3e, 7 janv. 2016)." },
    { faux: "L'accomplissement de la condition suspensive rétroagit au jour du contrat.",
      juste: "Depuis 2016, l'obligation devient pure et simple **à compter de l'accomplissement** ; la rétroactivité n'existe que si les parties l'ont **stipulée** ([[1304-6]]).",
      pourquoi: "La rétroactivité de l'ancien article 1179 ne vaut plus que pour les contrats conclus avant le 1er octobre 2016." },
    { faux: "La condition résolutoire n'a pas d'effet rétroactif, comme la condition suspensive.",
      juste: "Son accomplissement **éteint rétroactivement** l'obligation, sans remettre en cause les actes conservatoires et d'administration ; pas de rétroactivité si la convention l'exclut ou si les prestations ont trouvé leur utilité au fur et à mesure ([[1304-7]]).",
      pourquoi: "Asymétrie voulue par la réforme : suspensive sans rétroactivité, résolutoire avec." },
    { faux: "L'acquéreur qui n'a pas obtenu son prêt est toujours libéré de la promesse.",
      juste: "Seulement s'il a sollicité un prêt **conforme aux caractéristiques** de la promesse ; sinon, il a empêché l'accomplissement et la condition est **réputée accomplie** ([[1304-3]], al. 1er ; Civ. 3e, 30 janv. 2008).",
      pourquoi: "C'est l'acquéreur qui doit prouver la conformité de sa demande." },
    { faux: "Toute condition qui dépend de la volonté d'une partie est nulle.",
      juste: "Seule est nulle l'obligation sous une condition dont la réalisation dépend de la **seule volonté du débiteur** ; la nullité ne peut plus être invoquée si l'obligation a été **exécutée en connaissance de cause** ([[1304-2]]).",
      pourquoi: "Une condition dépendant aussi d'un tiers ou de circonstances extérieures (obtention d'un prêt) est valable." },
    { faux: "Le débiteur qui a payé avant l'échéance du terme peut demander la restitution.",
      juste: "Ce qui a été **payé d'avance ne peut être répété** ([[1305-2]]) : la dette existait. En revanche, ce qui a été payé sous **condition suspensive pendante** peut être répété ([[1304-5]], al. 2).",
      pourquoi: "Le terme touche l'exigibilité, la condition l'efficacité de l'obligation." },
    { faux: "La déchéance du terme encourue par le débiteur principal permet de poursuivre immédiatement la caution et les codébiteurs solidaires pour le tout.",
      juste: "La déchéance du terme est **inopposable** aux coobligés, même solidaires, et aux cautions ([[1305-5]]).",
      pourquoi: "La déchéance sanctionne un comportement personnel du débiteur." },
    { faux: "Plusieurs débiteurs d'une même dette sont tenus solidairement.",
      juste: "Le principe est la **division** ([[1309]]) : la solidarité **ne se présume pas** ; elle doit résulter de la loi ou d'une clause ([[1310]]), sauf présomption entre commerçants pour une dette commerciale.",
      pourquoi: "Faute de solidarité, penser à l'indivisibilité ou, entre coresponsables d'un même dommage, à l'obligation *in solidum*." },
    { faux: "Le débiteur solidaire poursuivi ne peut invoquer aucune exception propre à un autre codébiteur.",
      juste: "Il ne peut invoquer les exceptions personnelles aux autres (un terme accordé à l'un), **sauf** celles qui éteignent la **part divise** d'un codébiteur, notamment la **compensation** et la **remise de dette** : il fait alors déduire cette part ([[1315]], [[1347-6]], [[1350-1]]).",
      pourquoi: "Sans cette déduction, il paierait puis exercerait un recours qui viderait de son sens l'avantage accordé à l'autre." },
    { faux: "Le codébiteur qui a payé toute la dette peut la réclamer en entier à l'un quelconque des autres.",
      juste: "Il n'a de recours contre chacun qu'**à proportion de sa part** ; l'insolvabilité d'un codébiteur se répartit entre tous les solvables, **y compris lui-même** ([[1317]]).",
      pourquoi: "La solidarité joue entre créancier et débiteurs (obligation à la dette), pas entre codébiteurs (contribution)." }
  ],
  reflexes: [
    { face: "Une clause fait dépendre une obligation d'un événement à venir",
      etapes: [
        "L'événement est-il certain (terme, [[1305]]) ou incertain (condition, [[1304]]) ? Critère objectif.",
        "Condition : licite ([[1304-1]]) ? Dépend-elle de la seule volonté du débiteur ([[1304-2]]) ?",
        "Suspensive ou résolutoire ? Pendante, accomplie, défaillie ? Une partie a-t-elle empêché ou provoqué l'événement ([[1304-3]]) ? A-t-on renoncé ([[1304-4]]) ?",
        "Effets dans le temps : [[1304-6]] (suspensive, pas de rétroactivité sauf clause) ; [[1304-7]] (résolutoire, rétroactivité de principe)."
      ],
      astuce: "Vérifiez la date du contrat : avant le 1er octobre 2016, anciens articles 1168 et suivants." },
    { face: "Un créancier poursuit l'un de plusieurs débiteurs pour le tout",
      etapes: [
        "Source de la pluralité : division de principe ([[1309]]), solidarité légale ou conventionnelle ([[1310]]), indivisibilité ([[1320]]), in solidum (coresponsables).",
        "Obligation à la dette : chacun doit tout ([[1313]]) ; recenser les exceptions communes, personnelles, et celles qui éteignent une part divise ([[1315]]).",
        "Effets secondaires : intérêts ([[1314]]), prescription ([[2245]]), mais déchéance du terme inopposable ([[1305-5]]).",
        "Contribution : parts égales sauf clause ou [[1318]] ; recours à proportion ; insolvabilité répartie ([[1317]])."
      ],
      astuce: "Tenez un tableau chiffré : ce que paie le poursuivi, ce qu'il récupère, ce que supporte finalement chacun." },
    { face: "Une obligation porte sur plusieurs prestations et l'une devient impossible",
      etapes: [
        "Qualifier : cumulative ([[1306]]), alternative ([[1307]]) ou facultative ([[1308]]) ? Une ou plusieurs prestations sont-elles dues ?",
        "Alternative : le choix a-t-il été exercé ([[1307-1]]) ? L'impossibilité procède-t-elle de la force majeure ([[1307-2]] à [[1307-5]]) ?",
        "Facultative : la prestation initialement convenue est-elle devenue impossible par force majeure ? Si oui, l'obligation est éteinte ([[1308]], al. 2)."
      ],
      astuce: "Alternative : « ou » dans l'objet dû ; facultative : une seule chose due, l'autre n'est qu'une faculté de paiement." }
  ]
};

/* Pièges et réflexes — Chapitre 20 : la transmission des obligations. */

OBL.pieges[20] = {
  pieges: [
    { faux: "La cession de créance suppose l'accord du débiteur cédé.",
      juste: "Elle se forme entre **cédant et cessionnaire** ; le consentement du débiteur n'est requis que si la créance a été **stipulée incessible** ([[1321]], al. 4). Le débiteur intervient au stade de l'**opposabilité** : notification ou prise d'acte ([[1324]]).",
      pourquoi: "Validité et opposabilité sont deux questions distinctes." },
    { faux: "Depuis 2016, la cession de créance doit toujours être signifiée par huissier au débiteur.",
      juste: "La signification de l'ancien article 1690 a disparu : il suffit d'une **notification**, sans forme imposée, ou d'une **prise d'acte** par le débiteur ([[1324]], al. 1er). Aux autres tiers, la cession est opposable dès la **date de l'acte** ([[1323]]).",
      pourquoi: "L'article 1690 ne vaut plus que pour les cessions conclues avant le 1er octobre 2016." },
    { faux: "Le cessionnaire ne peut réclamer au débiteur que le prix qu'il a payé au cédant.",
      juste: "Il acquiert la créance elle-même et en réclame la **valeur nominale**. C'est le **subrogé** qui est limité à ce qu'il a payé ([[1346-4]]).",
      pourquoi: "La cession peut être spéculative, la subrogation ne l'est pas." },
    { faux: "Le débiteur cédé peut opposer au cessionnaire toutes les exceptions qu'il avait contre le cédant.",
      juste: "Il oppose les exceptions **inhérentes à la dette** (nullité, exception d'inexécution, résolution, compensation de dettes connexes), même nées après la notification (Com., 12 janv. 2010), mais les exceptions **nées de ses rapports avec le cédant** (terme, remise, compensation de dettes non connexes) seulement si elles sont nées **avant** que la cession lui soit devenue opposable ([[1324]], al. 2).",
      pourquoi: "Et la prise d'acte sans réserve lui fait perdre la compensation ([[1347-5]])." },
    { faux: "Le cédant d'une créance garantit que le débiteur paiera.",
      juste: "Le cédant à titre onéreux garantit l'**existence** de la créance et de ses accessoires ; il ne garantit la **solvabilité** du débiteur que s'il s'y est engagé, dans la limite du prix retiré, et seulement la solvabilité **actuelle** sauf stipulation expresse ([[1326]]).",
      pourquoi: "Le cessionnaire achète un risque de non-recouvrement." },
    { faux: "Dès que le créancier accepte la cession de dette, le débiteur originaire est libéré.",
      juste: "Le débiteur originaire n'est libéré que si le créancier y **consent expressément** ; à défaut, et sauf clause contraire, il reste tenu **solidairement** avec le cessionnaire ([[1327-2]]).",
      pourquoi: "Même logique pour la cession de contrat ([[1216-1]])." },
    { faux: "Sans le consentement du cédé, la cession de contrat est nulle.",
      juste: "L'accord du cédé, qui peut être donné sans forme mais doit être non équivoque, est une condition d'**opposabilité** : son défaut rend la cession **inopposable** au cédé, non nulle (Com., 24 avr. 2024). Seul le défaut d'**écrit** entraîne la nullité ([[1216]], al. 3).",
      pourquoi: "La solution des arrêts du 6 mai 1997 (consentement, condition de validité) est dépassée." },
    { faux: "Pour être subrogé de plein droit, il faut être tenu à la dette avec d'autres ou pour d'autres.",
      juste: "Depuis 2016, il suffit d'avoir un **intérêt légitime** à payer et que le paiement libère **celui sur qui doit peser la charge définitive** de la dette ([[1346]]). L'énumération de l'ancien article 1251 a disparu.",
      pourquoi: "La subrogation légale est généralisée." },
    { faux: "Le subrogé et le créancier partiellement payé se partagent à égalité le patrimoine insuffisant du débiteur.",
      juste: "Le créancier payé en partie exerce ses droits pour le solde **par préférence** au subrogé ([[1346-3]]) : *nemo contra se subrogasse censetur*.",
      pourquoi: "Règle supplétive, souvent écartée dans les subrogations conventionnelles." },
    { faux: "La subrogation est opposable au débiteur dès le paiement.",
      juste: "Elle est opposable aux **tiers** dès le paiement, mais au **débiteur** seulement après **notification** ou **prise d'acte** ; le débiteur peut toutefois l'invoquer dès qu'il la connaît ([[1346-5]]).",
      pourquoi: "Alignement sur la cession de créance depuis 2016." }
  ],
  reflexes: [
    { face: "Une créance change de titulaire",
      etapes: [
        "Qualifier : le créancier a-t-il **cédé** sa créance (contrat de cession) ou un tiers a-t-il **payé** la dette (subrogation) ?",
        "Cession : écrit ([[1322]]) ? créance cessible ([[1321]]) ? opposable au débiteur (notification ou prise d'acte, [[1324]]) ?",
        "Montant : nominal pour le cessionnaire ; montant payé pour le subrogé ([[1346-4]]).",
        "Moyens de défense du débiteur : exceptions inhérentes (toujours) ; exceptions nées des rapports avec le cédant ou le subrogeant (si antérieures à l'opposabilité)."
      ],
      astuce: "Dresser une frise : date de l'acte ou du paiement, date de la notification, date de naissance de chaque exception." },
    { face: "Un tiers reprend la dette ou le contrat d'une partie",
      etapes: [
        "Cession de dette ([[1327]]) ou de contrat ([[1216]]) : écrit ?",
        "Accord du créancier ou du cédé : existe-t-il ? donné par avance (alors notification ou prise d'acte) ?",
        "Libération expresse du débiteur originaire ou du cédant ? Sinon, **solidarité** ([[1327-2]], [[1216-1]]).",
        "Sûretés : maintenues sans libération ; avec libération, seulement avec l'accord des garants ([[1328-1]], [[1216-3]])."
      ],
      astuce: "Si l'énoncé ne dit pas si le créancier a libéré le débiteur, traiter les deux hypothèses." },
    { face: "Quelqu'un a payé la dette d'autrui et veut être remboursé",
      etapes: [
        "Subrogation légale : intérêt légitime et libération du débiteur définitif ([[1346]]) ? Sinon, quittance subrogative expresse et concomitante ([[1346-1]]) ?",
        "Recours limité au paiement, déduction faite de sa propre part s'il était codébiteur.",
        "Créancier payé en partie encore en lice ? Il passe en premier ([[1346-3]]).",
        "Compléter par les actions personnelles (gestion d'affaires, enrichissement injustifié) pour les frais non couverts."
      ],
      astuce: "Terminer par un calcul chiffré : qui reçoit quoi sur l'actif disponible." }
  ]
};

/* Pièges et réflexes — Chapitre 21 : les modes d'extinction de l'obligation. */

OBL.pieges[21] = {
  pieges: [
    { faux: "Le paiement au-delà de 1 500 euros doit être prouvé par écrit, car c'est un acte juridique.",
      juste: "« Le paiement se prouve par tout moyen » ([[1342-8]]), solution déjà admise par la Cour de cassation qui y voyait un **fait juridique** (Civ. 1re, 16 sept. 2010). La charge pèse sur celui qui se prétend libéré ([[1353]], al. 2).",
      pourquoi: "La quittance reste la preuve la plus sûre, mais elle n'est plus exigée." },
    { faux: "La remise du titre original au débiteur fait présumer de façon irréfragable qu'il a payé.",
      juste: "Depuis 2016, la remise volontaire de l'original sous signature privée ou de la copie exécutoire vaut **présomption simple de libération** ([[1342-9]]) ; la cause (paiement ou remise de dette) reste à prouver.",
      pourquoi: "La présomption irréfragable de l'ancien droit ne vaut que pour les remises antérieures au 1er octobre 2016." },
    { faux: "Le débiteur de plusieurs dettes impute librement son paiement, même partiel, et à défaut c'est le créancier qui choisit.",
      juste: "Le débiteur choisit **en payant**, mais doit acquitter **intégralement** la dette choisie sauf accord du créancier, et les intérêts passent avant le capital ([[1342-10]], [[1343-1]]). À défaut, la **loi** impute : dettes échues, puis celle que le débiteur avait le plus d'intérêt à acquitter, puis la plus ancienne, puis proportionnellement.",
      pourquoi: "Le droit d'imputation du créancier (anc. art. 1255) a disparu." },
    { faux: "Un rééchelonnement ou une baisse de taux, présentés comme une « novation », éteignent la dette et ses sûretés.",
      juste: "La novation exige un **élément nouveau** réel (objet, cause, débiteur ou créancier) **et** une volonté claire de nover ([[1329]], [[1330]]). Changer le montant, les délais, le taux ou les modalités de remboursement ne suffit pas, quels que soient les mots employés.",
      pourquoi: "Retenir la novation, c'est faire disparaître les sûretés ([[1334]]) : le juge est prudent." },
    { faux: "Dès que le créancier accepte le délégué comme débiteur, le délégant est libéré.",
      juste: "La délégation n'est **novatoire** que si la volonté du délégataire de **décharger** le délégant résulte **expressément** de l'acte ([[1337]]) ; sinon, le délégataire gagne un **second débiteur** ([[1338]]).",
      pourquoi: "Accepter un débiteur n'est pas renoncer à l'autre." },
    { faux: "Le délégué peut refuser de payer le délégataire en invoquant la nullité de sa dette envers le délégant.",
      juste: "Sauf stipulation contraire, il ne peut opposer au délégataire **aucune exception** tirée de ses rapports avec le délégant ou des rapports délégant/délégataire ([[1336]], al. 2). Exception : la délégation **incertaine**, où il s'engage à payer « ce que doit le délégant » (Civ. 1re, 17 mars 1992).",
      pourquoi: "Son engagement envers le délégataire est nouveau et autonome." },
    { faux: "Dans une délégation, le délégant peut réclamer sa créance au délégué tant que celui-ci n'a pas payé le délégataire.",
      juste: "Jusqu'à l'exécution du délégué, la créance du délégant est **neutralisée** : il ne peut en exiger ou en recevoir le paiement que pour ce qui excède l'engagement du délégué ; cession et saisie subissent la même limite ([[1339]]). En délégation parfaite, le délégué est même libéré envers lui à concurrence de son engagement ([[1339]], al. 4).",
      pourquoi: "Sinon le délégué risquerait de payer deux fois." },
    { faux: "La compensation légale joue automatiquement, même à l'insu des parties.",
      juste: "Elle s'opère à la date où ses conditions sont réunies, **sous réserve d'être invoquée** ([[1347]], al. 2).",
      pourquoi: "La formule de l'ancien article 1290 a été abandonnée." },
    { faux: "Grâce à la connexité, le juge peut compenser n'importe quelles dettes nées d'une même relation.",
      juste: "La connexité dispense seulement de la **liquidité** et de l'**exigibilité** ([[1348-1]]) ; **réciprocité**, **certitude** et **fongibilité** restent exigées.",
      pourquoi: "C'est une condition « joker », pas une dispense générale." },
    { faux: "Une lettre recommandée de mise en demeure interrompt la prescription.",
      juste: "Les causes d'interruption sont **limitatives** : reconnaissance du débiteur ([[2240]]), demande en justice ([[2241]]), mesure conservatoire ou acte d'exécution forcée ([[2244]]), sauf cause ajoutée par convention ([[2254]]) ou texte spécial. La médiation et la conciliation **suspendent** la prescription, elles ne l'interrompent pas ([[2238]]).",
      pourquoi: "Interruption : nouveau délai complet ([[2231]]) ; suspension : simple arrêt ([[2230]])." }
  ],
  reflexes: [
    { face: "Un débiteur soutient qu'il ne doit plus rien",
      etapes: [
        "A-t-il **payé** ? Qui a payé, à qui, quoi, en entier ([[1342]] à [[1342-5]]) ? Preuve par tout moyen ([[1342-8]]) ; imputation si plusieurs dettes ([[1342-10]]).",
        "Le créancier a-t-il été satisfait **autrement** : novation ([[1329]]), délégation parfaite ([[1337]]), compensation invoquée ([[1347]]), confusion ([[1349]]) ?",
        "A-t-il été libéré **sans satisfaction** du créancier : remise de dette ([[1350]]), force majeure définitive ([[1351]]), prescription invoquée ([[2219]], [[2247]]) ?",
        "Vérifier les effets à l'égard des codébiteurs et des cautions ([[1335]], [[1349-1]], [[1350-1]], [[1350-2]])."
      ],
      astuce: "Écarter d'abord les qualifications voisines : simple indication de paiement ([[1340]]), aménagement de la dette sans novation." },
    { face: "Deux personnes se doivent mutuellement de l'argent",
      etapes: [
        "Réciprocité en la même qualité, fongibilité, certitude, liquidité, exigibilité ([[1347-1]]).",
        "Obstacles : créance insaisissable ou restitution ([[1347-2]]), droits des tiers ([[1347-7]]), cession acceptée sans réserve ([[1347-5]]).",
        "Si une condition manque : dettes connexes ([[1348-1]]), compensation judiciaire ([[1348]]) ou conventionnelle ([[1348-2]]).",
        "Date d'effet, puis calcul du solde qui subsiste."
      ],
      astuce: "Rappeler que la compensation doit être invoquée : c'est ce qui permet d'écarter un commandement ou une mise en demeure portant sur une dette éteinte." },
    { face: "Une créance est-elle prescrite ?",
      etapes: [
        "Délai : droit commun de cinq ans ([[2224]]) ou délai spécial (dommage corporel, consommateur, assurance, construction…).",
        "Point de départ : connaissance des faits ; échéance du terme ou réalisation de la condition ([[2233]]).",
        "Suspensions ([[2234]] à [[2239]]) et interruptions ([[2240]] à [[2244]]), puis délai butoir de vingt ans ([[2232]]).",
        "Renonciation éventuelle ([[2250]], [[2251]]) ; la prescription doit être invoquée par le débiteur ([[2247]])."
      ],
      astuce: "Faire une frise datée et donner la date exacte d'expiration : c'est ce que le correcteur attend." }
  ]
};

