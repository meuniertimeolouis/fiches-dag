/* Chapitre 9 — Les effets du contrat à l'égard des tiers
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 9,
  intro: "Deux principes à ne jamais confondre. **L'effet relatif** : le contrat ne crée d'obligations qu'entre les parties ([[1199]]). **L'opposabilité** : les tiers doivent respecter la situation juridique créée par le contrat et peuvent s'en prévaloir ([[1200]]). Entre les deux, des exceptions (porte-fort, stipulation pour autrui), des tiers « intermédiaires » (ayants cause, créanciers) et un cas pratique classique : la **simulation**.",
  sections: [
    {
      titre: "L'effet relatif",
      contenu: [
        { p: "« Le contrat ne crée d'obligations qu'entre les parties. Les tiers ne peuvent ni demander l'exécution du contrat ni se voir contraints de l'exécuter » ([[1199]]). Le principe a une limite : il faut savoir **qui est tiers**." },
        { schema: { type: "arbre", titre: "Du plus proche au plus lointain", racine: { t: "Qui est touché par le contrat ?", enfants: [
          { t: "Parties", d: "ceux qui ont consenti (ou leur représentant)" },
          { t: "Ayants cause universels", d: "héritiers : ils recueillent les droits et obligations du défunt, sauf contrats *intuitu personae*" },
          { t: "Ayants cause à titre particulier", d: "l'acquéreur d'un bien reçoit les droits et actions attachés à la chose (action en garantie contre le vendeur initial)" },
          { t: "Créanciers chirographaires", d: "action oblique ([[1341-1]]), paulienne ([[1341-2]]), directe ([[1341-3]])" },
          { t: "Tiers absolus (*penitus extranei*)", d: "ni droits ni obligations ; mais le contrat leur est opposable ([[1200]])" }
        ] } } },
        { h: "Ayants cause à titre particulier et chaînes de contrats" },
        { p: "Le sous-acquéreur dispose contre le fabricant ou le vendeur initial d'une **action directe, nécessairement contractuelle**, en garantie, car l'action est un accessoire de la chose transmise (Ass. plén., 7 févr. 1986). En revanche, pas d'action contractuelle dans les **groupes de contrats sans transfert de propriété** : le maître de l'ouvrage agit contre le sous-traitant sur le terrain **délictuel** (Ass. plén., 12 juill. 1991, Besse)." },
        { h: "Les actions du créancier" },
        { schema: { type: "tableau", titre: "Trois actions pour atteindre le patrimoine du débiteur", colonnes: ["Action", "Idée", "Conditions", "Effet"], lignes: [
          ["**Oblique** ([[1341-1]])", "Exercer les droits que le débiteur néglige", "Carence du débiteur compromettant les droits du créancier ; droits patrimoniaux non attachés à la personne", "Profite au patrimoine du débiteur (donc à tous ses créanciers)"],
          ["**Paulienne** ([[1341-2]])", "Faire tomber un acte frauduleux du débiteur", "Fraude du débiteur ; complicité du tiers si l'acte est à titre onéreux", "Acte **inopposable** au seul créancier qui agit"],
          ["**Directe** ([[1341-3]])", "Agir contre le débiteur de son débiteur", "Seulement dans les cas prévus par la loi (sous-traitant, bailleur contre sous-locataire, victime contre l'assureur)", "Paiement direct au créancier"]
        ] } }
      ]
    },
    {
      titre: "Les exceptions : porte-fort et stipulation pour autrui",
      contenu: [
        { p: "Principe : « On ne peut s'engager en son propre nom que pour soi-même » ([[1203]])." },
        { schema: { type: "tableau", titre: "Deux techniques voisines", colonnes: ["", "Promesse de porte-fort", "Stipulation pour autrui"], lignes: [
          ["Textes", "[[1204]]", "[[1205]] à [[1209]]"],
          ["Mécanisme", "Je promets **le fait d'un tiers** (qu'il ratifiera ou exécutera)", "Le **stipulant** fait promettre au **promettant** une prestation au profit d'un **bénéficiaire** tiers"],
          ["Le tiers est-il obligé ?", "**Non**, tant qu'il n'a pas ratifié", "Il n'est pas obligé : il **reçoit un droit**"],
          ["Si le tiers refuse", "Le porte-fort doit des **dommages et intérêts**", "La stipulation peut être révoquée ou profiter au stipulant"],
          ["Si le tiers accepte", "Le porte-fort est libéré ; la ratification rétroagit au jour du porte-fort", "Droit direct du bénéficiaire contre le promettant **dès la stipulation** ([[1206]])"],
          ["Exemple", "Un indivisaire vend le bien en se portant fort des autres", "Assurance-vie ; transporteur et proches de la victime (Civ., 6 déc. 1932)"]
        ] } },
        { h: "Le régime de la stipulation pour autrui" },
        { liste: [
          "Bénéficiaire : même une **personne future**, mais précisément désignée ou déterminable lors de l'exécution ([[1205]]).",
          "Droit **direct** contre le promettant, né **dès la stipulation**, sans passer par le patrimoine du stipulant ([[1206]], al. 1er ; Civ., 12 juill. 1956).",
          "Révocable librement par le stipulant tant que le bénéficiaire n'a pas **accepté** ; irrévocable dès que l'acceptation parvient au stipulant ou au promettant ([[1206]]). Après le décès du stipulant, ses héritiers ne peuvent révoquer qu'après une mise en demeure d'accepter restée trois mois sans réponse ([[1207]]).",
          "Acceptation expresse ou tacite, possible même après le décès du stipulant ou du promettant ([[1208]]).",
          "Le stipulant peut lui-même exiger l'exécution au profit du bénéficiaire ([[1209]])."
        ] }
      ]
    },
    {
      titre: "L'opposabilité",
      contenu: [
        { p: "Le contrat est un **fait** social que les tiers doivent respecter et dont ils peuvent se servir ([[1200]])." },
        { liste: [
          "**Opposabilité aux tiers** : le tiers qui aide sciemment une partie à violer le contrat commet une faute délictuelle (**tierce complicité** : l'employeur qui embauche un salarié en connaissance de sa clause de non-concurrence). Idem pour le tiers qui acquiert en connaissance d'un pacte de préférence ([[1123]]).",
          "**Invocation par les tiers** : un tiers peut invoquer le contrat comme un fait, notamment pour prouver (ex. la valeur d'un bien)."
        ] },
        { h: "Le tiers victime d'un manquement contractuel" },
        { schema: { type: "frise", titre: "L'inexécution d'un contrat peut-elle fonder l'action d'un tiers ?", evenements: [
          { date: "Avant 2006", t: "Jurisprudence divisée", d: "exigence d'une faute « détachable » du contrat (Com.) / simple inexécution suffisante (Civ. 1re, 18 juill. 2000)" },
          { date: "6 oct. 2006", t: "Ass. plén., Boot shop (n° 05-13.255)", d: "« le tiers à un contrat peut invoquer, sur le fondement de la responsabilité délictuelle, un manquement contractuel dès lors que ce manquement lui a causé un dommage »" },
          { date: "13 janv. 2020", t: "Ass. plén., Sucrerie de Bois rouge (n° 17-19.963)", d: "confirmation, avec une motivation enrichie : ne pas entraver l'indemnisation des tiers" },
          { date: "3 juill. 2024", t: "Com., n° 21-14.947", d: "le tiers peut se voir opposer les **conditions et limites de responsabilité** applicables entre les contractants (clause limitative, par exemple) : il ne doit pas être mieux traité que le créancier" }
        ] } },
        { attention: "Sur une copie, citez Boot shop et Sucrerie de Bois rouge, puis la limite posée par la chambre commerciale en 2024 (confirmée par Com., 17 déc. 2025, n° 24-20.154)." }
      ]
    },
    {
      titre: "La simulation",
      contenu: [
        { def: { terme: "Simulation", texte: "les parties concluent un **acte apparent** qui dissimule un **acte occulte**, ou **contre-lettre**, qui exprime leur véritable volonté ([[1201]]). Ex. : vente déclarée pour un prix inférieur au prix réel ; donation déguisée en vente ; prête-nom." } },
        { schema: { type: "tableau", titre: "Les effets de la simulation ([[1201]])", colonnes: ["Entre qui ?", "Acte qui l'emporte", "Explication"], lignes: [
          ["Les parties", "La **contre-lettre**", "C'est leur volonté réelle ; la simulation n'est pas en elle-même une cause de nullité"],
          ["Les tiers qui se fient à l'apparence", "L'**acte apparent**, qui leur est opposable", "La contre-lettre ne leur est **pas opposable**"],
          ["Les tiers qui ont intérêt à la réalité", "Ils peuvent **se prévaloir** de la contre-lettre", "Action en déclaration de simulation, preuve par tout moyen"],
          ["Conflit entre tiers", "Celui qui invoque l'**acte apparent** l'emporte", "Protection de la sécurité juridique"]
        ] } },
        { attention: "Exceptions : sont **nuls** la contre-lettre augmentant le prix de cession d'un office ministériel et tout acte dissimulant une partie du prix d'une vente d'immeuble, de fonds de commerce ou de clientèle ([[1202]]) : but de lutte contre la fraude fiscale." }
      ]
    }
  ],
  retenir: [
    "Effet relatif ([[1199]]) ≠ opposabilité ([[1200]]).",
    "Ayant cause à titre particulier : action contractuelle directe en garantie (Ass. plén., 7 févr. 1986) ; groupe de contrats sans transfert de propriété : action délictuelle (Besse, 1991).",
    "Créanciers : action oblique, paulienne, directe ([[1341-1]] à [[1341-3]]).",
    "Porte-fort ([[1204]]) : promettre le fait d'un tiers ; stipulation pour autrui ([[1205]] s.) : droit direct du bénéficiaire dès la stipulation, révocable jusqu'à l'acceptation.",
    "Tiers victime d'un manquement contractuel : responsabilité délictuelle (Boot shop 2006, Bois rouge 2020), avec les limites contractuelles (Com., 3 juill. 2024).",
    "Simulation : contre-lettre entre les parties ; inopposable aux tiers, qui peuvent s'en prévaloir ([[1201]]) ; nullités de [[1202]]."
  ],
  articles: ["1123", "1199", "1200", "1201", "1202", "1203", "1204", "1205", "1206", "1207", "1208", "1209", "1341-1", "1341-2", "1341-3"],
  regimes: ["tiers-victime"],
  cas: ["ch9-assurance-vie"],
  quiz: [
    { q: "Le contrat conclu entre A et B oblige-t-il C à l'exécuter ?", choix: ["Oui, s'il en a connaissance", "Non : effet relatif", "Oui, s'il en tire profit"], bonne: 1, expl: "[[1199]]. Mais C doit respecter la situation créée ([[1200]])." },
    { q: "Paul promet à un acheteur que son frère, coïndivisaire, signera la vente. Le frère refuse. Paul :", choix: ["N'est tenu à rien", "Doit des dommages et intérêts", "Oblige son frère à signer"], bonne: 1, expl: "Promesse de porte-fort : [[1204]], al. 2." },
    { q: "Le bénéficiaire d'une stipulation pour autrui acquiert son droit contre le promettant :", choix: ["Au jour de son acceptation", "Dès la stipulation", "Au décès du stipulant"], bonne: 1, expl: "[[1206]], al. 1er : l'acceptation rend seulement la stipulation irrévocable." },
    { q: "Un débiteur néglige de réclamer une somme qui lui est due, ce qui compromet les droits de son créancier. Celui-ci peut :", choix: ["Exercer l'action paulienne", "Exercer l'action oblique pour le compte du débiteur", "Agir directement sans condition"], bonne: 1, expl: "[[1341-1]]." },
    { q: "Pour faire tomber une vente consentie par son débiteur en fraude de ses droits, à titre onéreux, le créancier doit prouver :", choix: ["La seule fraude du débiteur", "La fraude du débiteur et la connaissance de la fraude par l'acquéreur", "Rien"], bonne: 1, expl: "Action paulienne : [[1341-2]] ; l'acte devient inopposable au créancier." },
    { q: "Le locataire d'un local commercial se blesse à cause d'un défaut d'entretien imputable à l'entreprise chargée par le bailleur de l'entretien. Le locataire, tiers au contrat d'entretien :", choix: ["Ne peut rien réclamer à l'entreprise", "Peut invoquer le manquement contractuel sur le fondement délictuel", "Peut agir sur le fondement contractuel"], bonne: 1, expl: "Ass. plén., 6 oct. 2006 (Boot shop) et 13 janv. 2020." },
    { q: "Une vente d'immeuble est déclarée 200 000 €, une contre-lettre prévoit 250 000 €. Cette contre-lettre :", choix: ["Produit effet entre les parties", "Est nulle", "Est opposable aux tiers"], bonne: 1, expl: "[[1202]], al. 2 : nullité de l'acte dissimulant une partie du prix d'une vente d'immeuble." },
    { q: "En principe, la contre-lettre :", choix: ["Est nulle", "Produit effet entre les parties, n'est pas opposable aux tiers, qui peuvent s'en prévaloir", "Est opposable à tous"], bonne: 1, expl: "[[1201]]." },
    { q: "Le maître de l'ouvrage agit contre le sous-traitant de l'entrepreneur. Fondement ?", choix: ["Contractuel", "Délictuel", "Quasi-contractuel"], bonne: 1, expl: "Ass. plén., 12 juill. 1991 (Besse) : pas de lien contractuel." }
  ]
});

OBL.regimes.push({
  id: "tiers-victime",
  chapitre: "Effets du contrat",
  titre: "Action du tiers victime d'un manquement contractuel",
  fondement: ["1199", "1200", "1240"],
  resume: "Permettre à un tiers, lésé par l'inexécution d'un contrat auquel il n'est pas partie, d'obtenir réparation.",
  conditions: [
    { nom: "La qualité de tiers", question: "La victime est-elle tiers au contrat (ni partie, ni ayant cause bénéficiant d'une action contractuelle) ?", detail: "Si elle dispose d'une action contractuelle (sous-acquéreur dans une chaîne translative), elle doit l'exercer : pas de choix.", piege: "Oublier l'action directe contractuelle du sous-acquéreur." },
    { nom: "Un manquement contractuel", question: "Une partie a-t-elle manqué à une obligation du contrat ?", detail: "Il n'est plus nécessaire de prouver une faute détachable du contrat : le manquement suffit (Boot shop, 2006 ; Bois rouge, 2020)." },
    { nom: "Un dommage causé au tiers", question: "Ce manquement a-t-il causé un dommage au tiers ?", detail: "Lien de causalité à prouver, comme en responsabilité délictuelle ([[1240]])." }
  ],
  exonerations: [
    { nom: "Les conditions et limites du contrat", question: "Le contrat contient-il des clauses limitant ou encadrant la responsabilité du débiteur ?", detail: "Com., 3 juill. 2024, n° 21-14.947 : le tiers peut se les voir opposer, pour ne pas être mieux traité que le créancier.", effet: "Réparation limitée comme elle l'aurait été pour le créancier." }
  ],
  copie: [
    "Fondement : responsabilité délictuelle (le tiers n'a pas d'action contractuelle) ; citer [[1240]] et les deux arrêts d'assemblée plénière."
  ]
});

OBL.cas.push({
  id: "ch9-assurance-vie",
  titre: "L'assurance-vie et la contre-lettre",
  seance: "Chapitre 9",
  regimes: [],
  faits: "En 2019, Bernard souscrit une assurance-vie et désigne comme bénéficiaire sa nièce Chloé, sans l'en informer. En 2023, il vend sa maison à son voisin : l'acte notarié indique 180 000 euros, mais les parties ont signé le même jour une contre-lettre prévoyant 40 000 euros supplémentaires en espèces. Bernard décède en 2026. Ses héritiers veulent révoquer la désignation de Chloé, qui vient d'apprendre son existence, et réclamer au voisin les 40 000 euros.",
  question: "Les héritiers peuvent-ils révoquer la stipulation au profit de Chloé ? Peuvent-ils réclamer les 40 000 euros ?",
  corrige: {
    qualification: "Une assurance-vie : stipulation pour autrui entre Bernard (stipulant) et l'assureur (promettant) au profit de Chloé (bénéficiaire), qui n'a pas encore accepté. Une vente d'immeuble accompagnée d'une contre-lettre dissimulant une partie du prix.",
    probleme: "Les héritiers du stipulant peuvent-ils révoquer une stipulation pour autrui non encore acceptée ? Une contre-lettre dissimulant une partie du prix d'une vente d'immeuble produit-elle effet entre les parties ?",
    majeure: "La stipulation pour autrui confère au bénéficiaire un droit direct contre le promettant dès la stipulation ; le stipulant peut la révoquer tant qu'elle n'a pas été acceptée ; elle devient irrévocable quand l'acceptation parvient au stipulant ou au promettant (art. 1206). Après le décès du stipulant, ses héritiers ne peuvent la révoquer qu'à l'expiration d'un délai de trois mois après avoir mis le bénéficiaire en demeure d'accepter (art. 1207). L'acceptation peut intervenir même après le décès du stipulant (art. 1208). En principe, la contre-lettre produit effet entre les parties (art. 1201) ; mais est nul tout contrat ayant pour but de dissimuler une partie du prix d'une vente d'immeuble (art. 1202, al. 2). (En matière d'assurance-vie, la règle spéciale de l'article L. 132-9 du Code des assurances s'applique en priorité : même délai de trois mois, mais la mise en demeure doit être faite par acte extrajudiciaire et la révocation n'est possible qu'après l'exigibilité de la somme assurée.)",
    mineure: [
      { condition: "La révocation", corrige: "Chloé n'a pas encore accepté. Les héritiers ne peuvent pas révoquer immédiatement : ils doivent d'abord la mettre en demeure d'accepter, par acte extrajudiciaire, et attendre trois mois (art. 1207 ; C. assur., art. L. 132-9). Chloé, qui vient d'apprendre sa désignation, peut accepter dans ce délai, même après le décès de Bernard (art. 1208) : la stipulation deviendra alors irrévocable." },
      { condition: "Les 40 000 euros", corrige: "La contre-lettre a pour but de dissimuler une partie du prix d'une vente d'immeuble : elle est nulle (art. 1202, al. 2). Les héritiers ne peuvent pas réclamer les 40 000 euros sur son fondement (et la dissimulation expose les parties à des redressements fiscaux)." }
    ],
    conclusion: "Les héritiers ne peuvent révoquer la désignation de Chloé qu'après une mise en demeure d'accepter restée sans réponse pendant trois mois ; si Chloé accepte avant, son droit est définitif. La contre-lettre étant nulle, ils ne peuvent pas réclamer les 40 000 euros dissimulés."
  }
});

OBL.articles.push(
  {"num": "1123", "code": "C. civ.", "theme": "Opposabilité", "texte": "Le pacte de préférence est le contrat par lequel une partie s'engage à proposer prioritairement à son bénéficiaire de traiter avec lui pour le cas où elle déciderait de contracter.\n\nLorsqu'un contrat est conclu avec un tiers en violation d'un pacte de préférence, le bénéficiaire peut obtenir la réparation du préjudice subi. Lorsque le tiers connaissait l'existence du pacte et l'intention du bénéficiaire de s'en prévaloir, ce dernier peut également agir en nullité ou demander au juge de le substituer au tiers dans le contrat conclu.\n\nLe tiers peut demander par écrit au bénéficiaire de confirmer dans un délai qu'il fixe et qui doit être raisonnable, l'existence d'un pacte de préférence et s'il entend s'en prévaloir.\n\nL'écrit mentionne qu'à défaut de réponse dans ce délai, le bénéficiaire du pacte ne pourra plus solliciter sa substitution au contrat conclu avec le tiers ou la nullité du contrat.", "chapitres": [9], "retenir": "Le tiers qui acquiert en connaissance du pacte et de l'intention du bénéficiaire s'expose à la nullité ou à la substitution."},
  {"num": "1199", "code": "C. civ.", "theme": "Effet relatif", "texte": "Le contrat ne crée d'obligations qu'entre les parties.\n\nLes tiers ne peuvent ni demander l'exécution du contrat ni se voir contraints de l'exécuter, sous réserve des dispositions de la présente section et de celles du chapitre III du titre IV.", "chapitres": [9], "retenir": "Le contrat ne crée d'obligations qu'entre les parties."},
  {"num": "1200", "code": "C. civ.", "theme": "Opposabilité", "texte": "Les tiers doivent respecter la situation juridique créée par le contrat.\n\nIls peuvent s'en prévaloir notamment pour apporter la preuve d'un fait.", "chapitres": [9], "retenir": "Les tiers doivent respecter la situation créée et peuvent s'en prévaloir."},
  {"num": "1201", "code": "C. civ.", "theme": "Simulation", "texte": "Lorsque les parties ont conclu un contrat apparent qui dissimule un contrat occulte, ce dernier, appelé aussi contre-lettre, produit effet entre les parties. Il n'est pas opposable aux tiers, qui peuvent néanmoins s'en prévaloir.", "chapitres": [9], "retenir": "Contre-lettre : effet entre les parties ; inopposable aux tiers qui peuvent s'en prévaloir."},
  {"num": "1202", "code": "C. civ.", "theme": "Simulation", "texte": "Est nulle toute contre-lettre ayant pour objet une augmentation du prix stipulé dans le traité de cession d'un office ministériel.\n\nEst également nul tout contrat ayant pour but de dissimuler une partie du prix, lorsqu'elle porte sur une vente d'immeubles, une cession de fonds de commerce ou de clientèle, une cession d'un droit à un bail, ou le bénéfice d'une promesse de bail portant sur tout ou partie d'un immeuble et tout ou partie de la soulte d'un échange ou d'un partage comprenant des biens immeubles, un fonds de commerce ou une clientèle.", "chapitres": [9], "retenir": "Nullité des contre-lettres sur le prix d'offices ministériels, d'immeubles, de fonds de commerce."},
  {"num": "1203", "code": "C. civ.", "theme": "Effet relatif", "texte": "On ne peut s'engager en son propre nom que pour soi-même.", "chapitres": [9], "retenir": "On ne peut s'engager en son propre nom que pour soi-même."},
  {"num": "1204", "code": "C. civ.", "theme": "Porte-fort", "texte": "On peut se porter fort en promettant le fait d'un tiers.\n\nLe promettant est libéré de toute obligation si le tiers accomplit le fait promis. Dans le cas contraire, il peut être condamné à des dommages et intérêts.\n\nLorsque le porte-fort a pour objet la ratification d'un engagement, celui-ci est rétroactivement validé à la date à laquelle le porte-fort a été souscrit.", "chapitres": [9], "retenir": "Promettre le fait d'un tiers ; dommages et intérêts si le tiers refuse ; ratification rétroactive."},
  {"num": "1205", "code": "C. civ.", "theme": "Stipulation pour autrui", "texte": "On peut stipuler pour autrui.\n\nL'un des contractants, le stipulant, peut faire promettre à l'autre, le promettant, d'accomplir une prestation au profit d'un tiers, le bénéficiaire. Ce dernier peut être une personne future mais doit être précisément désigné ou pouvoir être déterminé lors de l'exécution de la promesse.", "chapitres": [9], "retenir": "Stipulant, promettant, bénéficiaire (même futur, déterminable)."},
  {"num": "1206", "code": "C. civ.", "theme": "Stipulation pour autrui", "texte": "Le bénéficiaire est investi d'un droit direct à la prestation contre le promettant dès la stipulation.\n\nNéanmoins le stipulant peut librement révoquer la stipulation tant que le bénéficiaire ne l'a pas acceptée.\n\nLa stipulation devient irrévocable au moment où l'acceptation parvient au stipulant ou au promettant.", "chapitres": [9], "retenir": "Droit direct dès la stipulation ; révocable jusqu'à l'acceptation."},
  {"num": "1207", "code": "C. civ.", "theme": "Stipulation pour autrui", "texte": "La révocation ne peut émaner que du stipulant ou, après son décès, de ses héritiers. Ces derniers ne peuvent y procéder qu'à l'expiration d'un délai de trois mois à compter du jour où ils ont mis le bénéficiaire en demeure de l'accepter.\n\nSi elle n'est pas assortie de la désignation d'un nouveau bénéficiaire, la révocation profite, selon le cas, au stipulant ou à ses héritiers.\n\nLa révocation produit effet dès lors que le tiers bénéficiaire ou le promettant en a eu connaissance.\n\nLorsqu'elle est faite par testament, elle prend effet au moment du décès.\n\nLe tiers initialement désigné est censé n'avoir jamais bénéficié de la stipulation faite à son profit.", "chapitres": [9], "retenir": "Révocation par le stipulant ou ses héritiers (après mise en demeure de trois mois)."},
  {"num": "1208", "code": "C. civ.", "theme": "Stipulation pour autrui", "texte": "L'acceptation peut émaner du bénéficiaire ou, après son décès, de ses héritiers. Elle peut être expresse ou tacite. Elle peut intervenir même après le décès du stipulant ou du promettant.", "chapitres": [9], "retenir": "Acceptation expresse ou tacite, même après décès."},
  {"num": "1209", "code": "C. civ.", "theme": "Stipulation pour autrui", "texte": "Le stipulant peut lui-même exiger du promettant l'exécution de son engagement envers le bénéficiaire.", "chapitres": [9], "retenir": "Le stipulant peut exiger l'exécution au profit du bénéficiaire."},
  {"num": "1341-1", "code": "C. civ.", "theme": "Actions du créancier", "texte": "Lorsque la carence du débiteur dans l'exercice de ses droits et actions à caractère patrimonial compromet les droits de son créancier, celui-ci peut les exercer pour le compte de son débiteur, à l'exception de ceux qui sont exclusivement rattachés à sa personne.", "chapitres": [9], "retenir": "Action oblique."},
  {"num": "1341-2", "code": "C. civ.", "theme": "Actions du créancier", "texte": "Le créancier peut aussi agir en son nom personnel pour faire déclarer inopposables à son égard les actes faits par son débiteur en fraude de ses droits, à charge d'établir, s'il s'agit d'un acte à titre onéreux, que le tiers cocontractant avait connaissance de la fraude.", "chapitres": [9], "retenir": "Action paulienne : inopposabilité des actes frauduleux."},
  {"num": "1341-3", "code": "C. civ.", "theme": "Actions du créancier", "texte": "Dans les cas déterminés par la loi, le créancier peut agir directement en paiement de sa créance contre un débiteur de son débiteur.", "chapitres": [9], "retenir": "Action directe dans les cas prévus par la loi."}
);
