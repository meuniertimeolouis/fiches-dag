/* Chapitre 7 — Les sanctions des conditions de formation : la théorie des nullités
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 7,
  intro: "Quand une condition de validité manque, le contrat est **nul** ([[1178]]). La réforme de 2016 a codifié la théorie des nullités (art. 1178 à 1187) : distinction **nullité relative / absolue** selon l'intérêt protégé, titulaires de l'action, prescription, confirmation, nullité partielle, caducité des contrats interdépendants, et **restitutions** (art. 1352 à 1352-9).",
  sections: [
    {
      titre: "La nullité et les notions voisines",
      contenu: [
        { def: { terme: "Nullité", texte: "sanction, prononcée par le juge (ou constatée d'un commun accord par les parties), qui fait disparaître **rétroactivement** le contrat qui ne remplissait pas ses conditions de validité ([[1178]])." } },
        { schema: { type: "tableau", titre: "Ne pas confondre", colonnes: ["Sanction", "Quand ?", "Effet"], lignes: [
          ["**Nullité**", "Vice **à la formation**", "Disparition rétroactive ; restitutions ([[1178]])"],
          ["**Réputé non écrit**", "Clause visée par un texte ([[1170]], [[1171]])", "Seule la clause disparaît, de plein droit, sans examen de son caractère déterminant ; action non soumise à la prescription"],
          ["**Caducité**", "Disparition **après** la formation d'un élément essentiel ([[1186]])", "Fin du contrat ; restitutions possibles ([[1187]])"],
          ["**Inopposabilité**", "Formalité de publicité omise", "Contrat valable entre les parties, sans effet à l'égard des tiers"],
          ["**Résolution**", "Inexécution d'un contrat valable", "Fin du contrat (voir chapitre 11)"],
          ["« Inexistence »", "Vice très grave (absence totale de consentement)", "Notion doctrinale sans régime propre : la jurisprudence applique la nullité, et même une nullité **relative** (Com., 23 oct. 2019, n° 18-11.425)"]
        ] } },
        { p: "Le juge peut relever d'office une nullité **absolue** (sans y être obligé) ; une nullité relative ne peut en principe être invoquée que par la partie protégée, sauf en droit de la consommation, où le juge peut relever d'office les dispositions du code (C. consom., art. R. 632-1). Les nullités sont **virtuelles** : pas besoin qu'un texte prévoie expressément la nullité (« pas de nullité sans texte » ne vaut qu'exceptionnellement, en droit des sociétés par exemple)." },
        { p: "**Nullité judiciaire ou consensuelle.** En principe, l'« inexistence » étant écartée, une action en justice est nécessaire : la nullité est prononcée par le juge ([[1178]], al. 1er). Pour les contrats conclus depuis le 1er octobre 2016, les parties peuvent toutefois la **constater d'un commun accord**, ce qui suppose sans doute qu'elles s'entendent aussi sur ses effets. Le juge a la **faculté** (non l'obligation) de la soulever d'office, en respectant le contradictoire (art. 12 CPC) ; pour le réputé non écrit, il doit au contraire écarter la clause sans marge d'appréciation." },
        { p: "La nullité est en outre **de droit** : le juge qui constate le défaut d'une condition de validité ne peut refuser de l'annuler par opportunité. La nullité facultative reste exceptionnelle (art. 464 C. civ. : actes passés avant l'ouverture d'une mesure de protection, annulables ou réductibles si l'intéressé a subi un préjudice ou présentait une inaptitude connue à défendre ses intérêts)." }
      ]
    },
    {
      titre: "Nullité relative ou absolue",
      contenu: [
        { p: "Critère ancien : la **gravité** du vice (contrat « malade » ou « mort-né »). Critère moderne, issu de Japiot et Gaudemet et codifié : **l'intérêt protégé par la règle violée** ([[1179]])." },
        { schema: { type: "arbre", titre: "Qualifier la nullité ([[1179]])", racine: { t: "Quel intérêt protège la règle violée ?", enfants: [
          { lien: "le seul intérêt privé", t: "Nullité relative", d: "vices du consentement ([[1131]]), incapacité, insanité d'esprit, lésion, ordre public de protection, forme de protection, indétermination ou vileté du prix (Com., 22 mars 2016, n° 14-14.218), défaut d'objet (Civ. 3e, 24 janv. 2019, n° 17-25.793), absence de consentement selon la jurisprudence récente (Com., 23 oct. 2019, n° 18-11.425), forme exigée dans un but de protection (droit de la consommation)" },
          { lien: "l'intérêt général", t: "Nullité absolue", d: "contenu ou but illicite ([[1162]]), ordre public de direction, forme exigée hors but de protection, absence de consentement dans la lecture classique (aujourd'hui concurrencée par la solution relative)" }
        ] } } },
        { schema: { type: "tableau", titre: "Ce que change la distinction", colonnes: ["", "Nullité relative", "Nullité absolue"], lignes: [
          ["Qui peut agir ?", "Seulement la partie **protégée** ([[1181]]) ; ses héritiers ; ses créanciers par l'action oblique", "**Toute personne justifiant d'un intérêt** et le **ministère public** ([[1180]])"],
          ["Confirmation ?", "**Possible** ([[1181]], al. 2)", "**Impossible** ([[1180]], al. 2) ; seule une réfection pour l'avenir"],
          ["Prescription de l'action", "**5 ans** ([[2224]]) à compter de la connaissance du vice ; découverte de l'erreur ou du dol, cessation de la violence ([[1144]])", "**5 ans** aussi depuis la loi du 17 juin 2008 (auparavant 30 ans)"],
          ["Délai butoir", "20 ans à compter de la naissance du droit ([[2232]])", "20 ans ([[2232]])"]
        ] } },
        { attention: "Depuis 2008, **les deux nullités se prescrivent par cinq ans**. Écrire « la nullité absolue se prescrit par trente ans » est une erreur classique. Exceptions : délai préfix de deux ans pour la rescision pour lésion d'une vente d'immeuble ([[1676]]) ; la demande tendant à faire réputer une clause non écrite n'est pas soumise à la prescription (Civ. 1re, 13 mars 2019, n° 17-23.169)." },
        { h: "Titulaires de l'action : précisions" },
        { liste: [
          "**Nullité relative** : la partie protégée ou son représentant ; ses **ayants cause à titre universel** (héritiers, qui agissent ou poursuivent l'action) ; ses **ayants cause à titre particulier** (le sous-acquéreur reçoit l'action avec le bien) ; ses **créanciers**, non en leur nom propre mais par l'action oblique ([[1341-1]]). Le cocontractant, lui, ne peut pas agir : l'auteur du dol ne peut s'en prévaloir.",
          "**Nullité absolue** : **les deux contractants**, y compris celui qui est à l'origine du vice, leurs ayants cause, le **ministère public** (art. 423 CPC, consacré par [[1180]], utilisé surtout pour l'ordre public de direction) et les **tiers absolus** (*penitus extranei*) qui justifient d'un intérêt patrimonial. Le droit des créanciers d'agir en leur nom propre, et non par la seule action oblique, divise la doctrine."
        ] },
        { h: "Point de départ de la prescription" },
        { p: "Droit commun : le jour où le titulaire a connu ou aurait dû connaître les faits permettant d'agir ([[2224]]). Pour la nullité absolue, la solution antérieure à 2008 partait de la conclusion du contrat ; aujourd'hui, il faut en principe tenir compte de la connaissance effective de la cause de nullité par chaque titulaire, d'où des points de départ pouvant différer, mais toujours enfermés dans le délai butoir de vingt ans ([[2232]]). [[1144]] ne vaut que pour les vices du consentement : on n'en déduit pas que toute nullité relative ne court qu'à la cessation du vice ; la suspension pour impossibilité d'agir (trouble mental, par exemple) reste possible." }
      ]
    },
    {
      titre: "Exercer ou éteindre l'action",
      contenu: [
        { h: "1. Action et exception" },
        { p: "Par **voie d'action**, la nullité est demandée à titre principal et se prescrit. Par **voie d'exception** (comme moyen de défense contre une demande d'exécution), elle est **imprescriptible**, mais seulement si le contrat **n'a reçu aucune exécution** ([[1185]]), que la nullité soit relative ou absolue. Adage : *quae temporalia sunt ad agendum perpetua sunt ad excipiendum*. La règle, d'abord jurisprudentielle, empêche une partie d'attendre l'expiration du délai pour exiger l'exécution ; elle ne joue pas pour les délais **préfix**." },
        { h: "2. La confirmation" },
        { def: { terme: "Confirmation", texte: "acte par lequel celui qui pourrait se prévaloir de la nullité **y renonce** ([[1182]]). Réservée à la nullité **relative**." } },
        { liste: [
          "**Conditions** : acte unilatéral du seul titulaire de l'action, accompli **après** la conclusion, en **connaissance du vice** et avec l'**intention de le réparer** (solution ancienne : Civ., 16 mars 1948). La volonté tacite ne doit pas être équivoque.",
          "**Expresse** : l'acte mentionne l'objet de l'obligation et le vice ; possible seulement **après** la conclusion du contrat.",
          "**Tacite** : exécution volontaire **en connaissance de la cause de nullité** ([[1182]], al. 3). La simple reproduction des articles du Code de la consommation dans un contrat hors établissement ne suffit pas à prouver cette connaissance, sauf circonstances révélant une connaissance effective, par exemple l'envoi par le professionnel d'une demande de confirmation ([[1183]]) ; solution étendue aux contrats antérieurs comme postérieurs à l'ordonnance (Civ. 1re, 24 janv. 2024, n° 22-16.115, revirement).",
          "En cas de **violence** : seulement après qu'elle a cessé.",
          "Effet : renonciation aux moyens de nullité, **sans préjudice des droits des tiers** ; si plusieurs personnes peuvent agir, la renonciation de l'une ne prive pas les autres ([[1181]], al. 3). La confirmation était traditionnellement **rétroactive** (le contrat est purgé dès l'origine), ce que [[1182]] n'énonce plus expressément.",
          "Nullité **absolue** : pas de confirmation, mais les parties peuvent **refaire** le contrat (nouvel accord, effets pour l'avenir seulement), possibilité que les textes de 2016 ne mentionnent pas mais que permet la liberté contractuelle."
        ] },
        { h: "3. L'action interrogatoire" },
        { p: "Une partie peut demander **par écrit** à celle qui pourrait invoquer la nullité de **confirmer** le contrat ou d'**agir dans les six mois**, à peine de forclusion ; la cause de nullité doit avoir **cessé** ; sans action dans le délai, le contrat est **réputé confirmé** ([[1183]]). Applicable dès le 1er octobre 2016, même aux contrats antérieurs." }
      ]
    },
    {
      titre: "Les effets de l'annulation",
      contenu: [
        { h: "1. Étendue : nullité partielle" },
        { p: "Quand seule une clause est viciée, **seule la clause** est annulée, **sauf** si elle a été un **élément déterminant** de l'engagement des parties ou de l'une d'elles ([[1184]], al. 1er). Le contrat est toujours maintenu si la loi répute la clause non écrite, ou si le but de la règle violée l'exige (clause illicite d'un contrat de travail : l'annulation totale nuirait au salarié protégé). Pour le **réputé non écrit**, seule la clause, voire la seule partie illicite de la clause si elle est divisible, est supprimée (Com., 26 janv. 2022, n° 20-16.782, sur [[1171]]). Avant 2016, la jurisprudence appliquait déjà le critère de la clause déterminante, pour concilier l'art. 900 (nullité partielle des libéralités) et l'ancien art. 1172 (nullité totale)." },
        { h: "2. Contrats interdépendants" },
        { p: "Quand plusieurs contrats sont nécessaires à une même opération et que l'un disparaît, sont **caducs** les contrats dont l'exécution devient impossible et ceux pour lesquels le contrat disparu était une condition déterminante du consentement, à condition que le cocontractant **connaissait l'opération d'ensemble** ([[1186]], al. 2 et 3). Auparavant, Ch. mixte, 17 mai 2013 : les contrats concomitants ou successifs d'une opération incluant une location financière sont interdépendants." },
        { liste: [
          "Conditions de [[1186]], al. 2 et 3 : contrats **nécessaires à une même opération** ; **interdépendance** objective (exécution rendue impossible par la disparition) ou subjective (le contrat disparu était une condition déterminante du consentement d'une partie) ; **connaissance** de l'opération d'ensemble, lors de son consentement, par le contractant à qui la caducité est opposée.",
          "Location financière : toute clause incompatible avec l'interdépendance est réputée non écrite (Com., 10 janv. 2024, n° 22-20.466, au visa de [[1186]]) ; ailleurs, les clauses contraires sont sans doute admises (point discuté).",
          "Prêt et sûreté : l'annulation du prêt n'entraîne pas celle de la sûreté, qui garantit les restitutions (Com., 17 nov. 1982) ; solution consacrée par [[1352-9]]."
        ] },
        { h: "3. Rétroactivité et restitutions" },
        { p: "Le contrat annulé est **censé n'avoir jamais existé** ([[1178]], al. 2) : chacun rend ce qu'il a reçu, selon les règles communes des restitutions ([[1352]] à [[1352-9]])." },
        { schema: { type: "tableau", titre: "Les restitutions (art. 1352 à 1352-9)", colonnes: ["Ce qui a été reçu", "Comment le rendre", "Texte"], lignes: [
          ["Une chose", "En nature ; si impossible, en valeur estimée **au jour de la restitution**", "[[1352]]"],
          ["Dégradations", "Le restituant en répond, sauf s'il est de bonne foi et sans faute", "[[1352-1]]"],
          ["Chose revendue", "De bonne foi : le prix de revente ; de mauvaise foi : la valeur si elle est supérieure", "[[1352-2]]"],
          ["Fruits et jouissance", "Inclus, quelle que soit la bonne foi ; jouissance évaluée au jour où le juge statue ; fruits non retrouvés en nature : valeur à la date du remboursement", "[[1352-3]]"],
          ["Somme d'argent", "Avec intérêts au taux légal et taxes acquittées", "[[1352-6]]"],
          ["Intérêts, fruits : depuis quand ?", "De mauvaise foi : depuis le paiement ; de bonne foi : depuis la demande", "[[1352-7]]"],
          ["Prestation de service", "En valeur, appréciée **à la date où elle a été fournie**", "[[1352-8]]"],
          ["Dépenses du restituant", "Remboursées : nécessaires, et utiles dans la limite de la plus-value", "[[1352-5]]"],
          ["Mineur non émancipé, majeur protégé", "Restitutions réduites à hauteur du profit retiré (rédaction issue de la loi du 20 avril 2018)", "[[1352-4]]"],
          ["Sûretés", "Reportées sur l'obligation de restituer", "[[1352-9]]"]
        ] } },
        { liste: [
          "Sans aucune exécution, il n'y a rien à restituer : les parties sont simplement libérées. Sinon, chacune rend ce qu'elle a reçu (Carbonnier : un **contrat synallagmatique renversé**). Les restitutions sont **de plein droit** : le juge peut les ordonner sans demande (Civ. 1re, 24 janv. 2024, n° 21-20.693).",
          "La mauvaise foi d'une partie ne la prive pas de sa créance de restitution ; elle joue sur le point de départ des intérêts, fruits et jouissance (Civ. 3e, 5 déc. 2024, n° 23-16.270).",
          "Jouissance : [[1352-3]] met à la charge du restituant la valeur de la jouissance, ce qui écarte la solution de la Ch. mixte du 9 juill. 2004 (aucune indemnité pour la seule occupation, du fait de la rétroactivité). La plus-value profite au propriétaire, y compris en cas de restitution en valeur (estimation au jour de la restitution).",
          "Contrats à exécution successive (travail, bail) : restitution **en valeur** seulement, d'après la prestation réellement fournie et non le prix convenu ([[1352-8]]).",
          "*Nemo auditur propriam turpitudinem allegans* : avant 2016, le contractant animé d'une intention immorale pouvait être privé de restitution (contrats à titre onéreux, immoralité seulement, jamais pour la simple violation de l'ordre public), sans que cela l'empêche de demander l'annulation. L'ordonnance ne reprend pas la règle, d'origine prétorienne, qui pourrait subsister de façon résiduelle."
        ] },
        { p: "À l'égard des **tiers**, l'annulation leur est opposable (le locataire d'un immeuble dont la vente est annulée doit en tenir compte) et, surtout, la rétroactivité fait tomber les droits consentis sur la chose (*nemo plus juris* : on ne transmet pas plus de droits qu'on n'en a), sauf mécanismes protecteurs : maintien des **actes d'administration**, possession de bonne foi d'un meuble (art. 2276), prescription acquisitive immobilière (art. 2273 s.), à condition que le délai soit écoulé. Les textes sur la nullité ne prennent pas parti sur ces correctifs, d'origine jurisprudentielle." },
        { h: "4. La responsabilité" },
        { p: "Indépendamment de l'annulation, la partie lésée peut demander réparation selon la **responsabilité extracontractuelle** ([[1178]], al. 4) : le contrat ayant disparu, la responsabilité ne peut être contractuelle (ex. dommages et intérêts contre l'auteur d'un dol)." }
      ]
    }
  ],
  retenir: [
    "Nullité prononcée par le juge ou constatée d'un commun accord ; contrat censé n'avoir jamais existé ; restitutions ; responsabilité extracontractuelle ([[1178]]).",
    "Relative (intérêt privé) / absolue (intérêt général) : [[1179]]. Relative : partie protégée, confirmation possible ([[1181]]). Absolue : toute personne justifiant d'un intérêt et ministère public, pas de confirmation ([[1180]]).",
    "Prescription de cinq ans pour les deux ([[2224]]), délai butoir de vingt ans ([[2232]]) ; exception de nullité perpétuelle si le contrat n'a pas été exécuté ([[1185]]).",
    "Confirmation expresse ou tacite en connaissance du vice ([[1182]]) ; action interrogatoire de six mois ([[1183]]).",
    "Nullité partielle de principe, totale si la clause était déterminante ([[1184]]) ; caducité des contrats interdépendants ([[1186]]).",
    "Restitutions : en nature ou en valeur au jour de la restitution ([[1352]]) ; prestation de service en valeur au jour où elle a été fournie ([[1352-8]])."
  ],
  articles: ["1178", "1179", "1180", "1181", "1182", "1183", "1184", "1185", "1186", "1187", "1352", "1352-1", "1352-2", "1352-3", "1352-4", "1352-5", "1352-6", "1352-7", "1352-8", "1352-9", "1676", "2224", "2232"],
  regimes: ["action-nullite"],
  cas: ["ch7-voiture-dol"],
  quiz: [
    { q: "Selon l'article 1179, une nullité est absolue lorsque la règle violée :", choix: ["Est particulièrement grave", "A pour objet la sauvegarde de l'intérêt général", "Figure dans le Code civil"], bonne: 1, expl: "Critère de l'intérêt protégé, et non plus de la gravité." },
    { q: "Délai de prescription de l'action en nullité absolue depuis 2008 :", choix: ["30 ans", "5 ans", "2 ans"], bonne: 1, expl: "[[2224]] : même délai que la nullité relative." },
    { q: "Qui peut demander la nullité pour dol ?", choix: ["Les deux parties", "Seulement la victime du dol (et ses ayants cause)", "Toute personne intéressée et le ministère public"], bonne: 1, expl: "Nullité relative : [[1181]], al. 1er." },
    { q: "Un contrat au but illicite peut-il être confirmé ?", choix: ["Oui, par un acte exprès", "Non : nullité absolue", "Oui, par exécution volontaire"], bonne: 1, expl: "[[1180]], al. 2." },
    { q: "Dix ans après un prêt jamais exécuté, le prêteur en réclame l'exécution ; l'emprunteur invoque la nullité pour dol. Est-ce trop tard ?", choix: ["Oui, l'action est prescrite", "Non : l'exception de nullité ne se prescrit pas si le contrat n'a reçu aucune exécution", "Non, car le dol est imprescriptible"], bonne: 1, expl: "[[1185]]." },
    { q: "L'action interrogatoire de l'article 1183 laisse à celui qui peut invoquer la nullité :", choix: ["Deux mois", "Six mois pour agir, sinon le contrat est réputé confirmé", "Un délai raisonnable"], bonne: 1, expl: "[[1183]] ; la cause de nullité doit avoir cessé." },
    { q: "Une clause illicite, non déterminante du consentement des parties, figure dans un contrat. Sanction ?", choix: ["Nullité de tout le contrat", "Nullité de la seule clause", "Aucune"], bonne: 1, expl: "[[1184]], al. 1er." },
    { q: "Après annulation d'un contrat de prestation de service exécuté, comment le service est-il restitué ?", choix: ["Il ne l'est pas", "En valeur, appréciée à la date où il a été fourni", "En valeur au jour du jugement"], bonne: 1, expl: "[[1352-8]]." },
    { q: "Après annulation, sur quel fondement demander des dommages et intérêts ?", choix: ["Responsabilité contractuelle", "Responsabilité extracontractuelle", "Enrichissement injustifié"], bonne: 1, expl: "[[1178]], al. 4 : le contrat est censé n'avoir jamais existé." },
    { q: "Un contrat de location financière disparaît ; le contrat de prestation de services lié à la même opération :", choix: ["Subsiste toujours", "Devient caduc si le cocontractant connaissait l'opération d'ensemble", "Est nul"], bonne: 1, expl: "[[1186]], al. 2 et 3." }
  ]
});

OBL.regimes.push({
  id: "action-nullite",
  chapitre: "Validité du contrat",
  titre: "Action en nullité : recevabilité",
  fondement: ["1179", "1180", "1181", "1185", "2224"],
  resume: "Vérifier, une fois la cause de nullité identifiée, que l'action peut encore être exercée par la personne qui agit.",
  conditions: [
    { nom: "Une cause de nullité", question: "Une condition de validité (consentement, capacité, contenu licite et certain, forme) fait-elle défaut à la formation du contrat ?", detail: "[[1128]], [[1178]]. Si le vice apparaît après la formation, on parle de caducité ([[1186]]).", piege: "Ne pas confondre avec l'inexécution, qui mène à la résolution." },
    { nom: "Qualification de la nullité", question: "La règle violée protège-t-elle seulement un intérêt privé (relative) ou l'intérêt général (absolue) ?", detail: "[[1179]]." },
    { nom: "Qualité pour agir", question: "Celui qui agit peut-il invoquer cette nullité ?", detail: "Relative : la partie protégée, ses héritiers, ses créanciers par l'action oblique ([[1181]]). Absolue : toute personne justifiant d'un intérêt et le ministère public ([[1180]]).", piege: "L'auteur d'un dol ne peut pas demander la nullité pour dol." },
    { nom: "Action non prescrite", question: "L'action est-elle exercée dans les cinq ans de la connaissance du vice (découverte de l'erreur ou du dol, fin de la violence) et dans le délai butoir de vingt ans ?", detail: "[[2224]], [[1144]], [[2232]]. Par voie d'exception, pas de prescription si le contrat n'a jamais été exécuté ([[1185]]).", piege: "Rescision pour lésion d'un immeuble : deux ans à compter de la vente ([[1676]])." }
  ],
  exonerations: [
    { nom: "La confirmation", question: "Le titulaire de l'action a-t-il confirmé le contrat (acte exprès, ou exécution volontaire en connaissance du vice) ?", detail: "Seulement pour une nullité relative ([[1182]]).", effet: "Il ne peut plus agir." },
    { nom: "L'action interrogatoire", question: "A-t-il laissé passer six mois après une mise en demeure écrite conforme à l'article 1183 ?", detail: "[[1183]].", effet: "Contrat réputé confirmé." }
  ],
  copie: [
    "Toujours qualifier la nullité avant de répondre à « qui peut agir ? » et « peut-on confirmer ? ».",
    "Terminer par les effets : restitutions ([[1352]] s.) et, le cas échéant, dommages et intérêts ([[1178]], al. 4)."
  ]
});

OBL.cas.push({
  id: "ch7-voiture-dol",
  titre: "La voiture et le dol découvert tard",
  seance: "Chapitre 7",
  regimes: ["action-nullite", "dol"],
  faits: "En janvier 2020, Élise achète à un garagiste une voiture d'occasion 12 000 euros. Le garagiste lui a affirmé que le véhicule n'avait jamais été accidenté. En mars 2021, Élise découvre par hasard, lors d'une révision, que la voiture avait été gravement accidentée et réparée : le garagiste le savait. Élise continue à rouler avec la voiture jusqu'en juin 2026, puis assigne le garagiste en nullité de la vente et en dommages et intérêts. Le garagiste soutient que l'action est prescrite et qu'Élise a, en tout état de cause, confirmé la vente en continuant à utiliser la voiture.",
  question: "L'action d'Élise est-elle recevable ? Si la vente est annulée, que devront se restituer les parties ?",
  corrige: {
    qualification: "Une vente conclue sous l'effet d'un mensonge du vendeur professionnel sur un élément déterminant (passé accidenté) : dol. La victime découvre le dol en mars 2021 et agit en juin 2026, après avoir continué à utiliser le véhicule.",
    probleme: "L'action en nullité pour dol, exercée plus de cinq ans après la découverte du dol, est-elle recevable, et l'usage continu de la chose vaut-il confirmation ?",
    majeure: "Le dol est une cause de nullité relative (art. 1131). L'action se prescrit par cinq ans (art. 2224) à compter du jour où le dol a été découvert (art. 1144). La confirmation, réservée à la nullité relative, peut résulter de l'exécution volontaire du contrat en connaissance de la cause de nullité (art. 1182, al. 3). Après annulation, le contrat est censé n'avoir jamais existé et les prestations sont restituées (art. 1178 et 1352 s.) ; la restitution d'une somme d'argent inclut les intérêts au taux légal (art. 1352-6), celle d'une chose inclut la valeur de la jouissance (art. 1352-3), et celui qui a reçu de mauvaise foi doit les intérêts depuis le paiement (art. 1352-7). La responsabilité de l'auteur du dol est extracontractuelle (art. 1178, al. 4).",
    mineure: [
      { condition: "Nature de la nullité", corrige: "Le dol vicie le consentement d'Élise : nullité relative, qu'elle seule peut invoquer (art. 1181)." },
      { condition: "Prescription", corrige: "Le délai de cinq ans a couru à compter de la découverte du dol, en mars 2021 (art. 1144). Il a expiré en mars 2026. L'assignation de juin 2026 est tardive : l'action en nullité est prescrite. (L'exception de nullité ne lui servirait à rien : le contrat a été exécuté, art. 1185.)" },
      { condition: "Confirmation", corrige: "Même si l'action n'était pas prescrite, continuer à utiliser la voiture pendant cinq ans après avoir découvert le vice pourrait être analysé comme une exécution volontaire en connaissance de la cause de nullité, donc une confirmation tacite (art. 1182, al. 3). Le juge vérifierait que cette attitude traduit sans équivoque la volonté de renoncer à la nullité." },
      { condition: "Les restitutions (si l'action avait été recevable)", corrige: "Élise rendrait la voiture et devrait la valeur de sa jouissance (art. 1352-3) ; elle répondrait des dégradations, sauf bonne foi et absence de faute (art. 1352-1). Le garagiste rendrait les 12 000 euros avec les intérêts au taux légal ; de mauvaise foi, il les devrait depuis le paiement (art. 1352-6 et 1352-7)." },
      { condition: "Les dommages et intérêts", corrige: "L'action en responsabilité extracontractuelle pour dol se prescrit aussi par cinq ans à compter du jour où Élise a connu les faits (art. 2224), soit mars 2021 : elle est également prescrite." }
    ],
    conclusion: "L'action d'Élise est irrecevable : découvert en mars 2021, le dol ne pouvait plus fonder une action en nullité ni en responsabilité après mars 2026. Elle aurait dû agir dans les cinq ans ; dans ce délai, elle aurait obtenu la restitution du prix avec intérêts depuis le paiement, contre la restitution de la voiture et la valeur de sa jouissance."
  }
});

OBL.articles.push(
  {"num": "1178", "code": "C. civ.", "theme": "Nullité", "texte": "Un contrat qui ne remplit pas les conditions requises pour sa validité est nul. La nullité doit être prononcée par le juge, à moins que les parties ne la constatent d'un commun accord.\n\nLe contrat annulé est censé n'avoir jamais existé.\n\nLes prestations exécutées donnent lieu à restitution dans les conditions prévues aux articles 1352 à 1352-9.\n\nIndépendamment de l'annulation du contrat, la partie lésée peut demander réparation du dommage subi dans les conditions du droit commun de la responsabilité extracontractuelle.", "chapitres": [7], "retenir": "Nullité judiciaire ou consensuelle ; rétroactivité ; restitutions ; responsabilité extracontractuelle."},
  {"num": "1179", "code": "C. civ.", "theme": "Nullité", "texte": "La nullité est absolue lorsque la règle violée a pour objet la sauvegarde de l'intérêt général.\n\nElle est relative lorsque la règle violée a pour seul objet la sauvegarde d'un intérêt privé.", "chapitres": [7], "retenir": "Absolue : intérêt général ; relative : seul intérêt privé."},
  {"num": "1180", "code": "C. civ.", "theme": "Nullité", "texte": "La nullité absolue peut être demandée par toute personne justifiant d'un intérêt, ainsi que par le ministère public.\n\nElle ne peut être couverte par la confirmation du contrat.", "chapitres": [7], "retenir": "Nullité absolue : toute personne justifiant d'un intérêt et ministère public ; pas de confirmation."},
  {"num": "1181", "code": "C. civ.", "theme": "Nullité", "texte": "La nullité relative ne peut être demandée que par la partie que la loi entend protéger.\n\nElle peut être couverte par la confirmation.\n\nSi l'action en nullité relative a plusieurs titulaires, la renonciation de l'un n'empêche pas les autres d'agir.", "chapitres": [7], "retenir": "Nullité relative : partie protégée ; confirmation possible ; pluralité de titulaires."},
  {"num": "1182", "code": "C. civ.", "theme": "Confirmation", "texte": "La confirmation est l'acte par lequel celui qui pourrait se prévaloir de la nullité y renonce. Cet acte mentionne l'objet de l'obligation et le vice affectant le contrat.\n\nLa confirmation ne peut intervenir qu'après la conclusion du contrat.\n\nL'exécution volontaire du contrat, en connaissance de la cause de nullité, vaut confirmation. En cas de violence, la confirmation ne peut intervenir qu'après que la violence a cessé.\n\nLa confirmation emporte renonciation aux moyens et exceptions qui pouvaient être opposés, sans préjudice néanmoins des droits des tiers.", "chapitres": [7], "retenir": "Définition ; après la conclusion ; exécution volontaire en connaissance du vice ; droits des tiers réservés."},
  {"num": "1183", "code": "C. civ.", "theme": "Confirmation", "texte": "Une partie peut demander par écrit à celle qui pourrait se prévaloir de la nullité soit de confirmer le contrat soit d'agir en nullité dans un délai de six mois à peine de forclusion. La cause de la nullité doit avoir cessé.\n\nL'écrit mentionne expressément qu'à défaut d'action en nullité exercée avant l'expiration du délai de six mois, le contrat sera réputé confirmé.", "chapitres": [7], "retenir": "Action interrogatoire : six mois, sinon contrat réputé confirmé."},
  {"num": "1184", "code": "C. civ.", "theme": "Nullité partielle", "texte": "Lorsque la cause de nullité n'affecte qu'une ou plusieurs clauses du contrat, elle n'emporte nullité de l'acte tout entier que si cette ou ces clauses ont constitué un élément déterminant de l'engagement des parties ou de l'une d'elles.\n\nLe contrat est maintenu lorsque la loi répute la clause non écrite, ou lorsque les fins de la règle méconnue exigent son maintien.", "chapitres": [7], "retenir": "Nullité de la clause, sauf si elle était déterminante ; maintien si réputée non écrite ou si la règle l'exige."},
  {"num": "1185", "code": "C. civ.", "theme": "Exception de nullité", "texte": "L'exception de nullité ne se prescrit pas si elle se rapporte à un contrat qui n'a reçu aucune exécution.", "chapitres": [7], "retenir": "Imprescriptible si le contrat n'a reçu aucune exécution."},
  {"num": "1186", "code": "C. civ.", "theme": "Caducité", "texte": "Un contrat valablement formé devient caduc si l'un de ses éléments essentiels disparaît.\n\nLorsque l'exécution de plusieurs contrats est nécessaire à la réalisation d'une même opération et que l'un d'eux disparaît, sont caducs les contrats dont l'exécution est rendue impossible par cette disparition et ceux pour lesquels l'exécution du contrat disparu était une condition déterminante du consentement d'une partie.\n\nLa caducité n'intervient toutefois que si le contractant contre lequel elle est invoquée connaissait l'existence de l'opération d'ensemble lorsqu'il a donné son consentement.", "chapitres": [7], "retenir": "Disparition d'un élément essentiel ; contrats interdépendants, si l'opération d'ensemble était connue."},
  {"num": "1187", "code": "C. civ.", "theme": "Caducité", "texte": "La caducité met fin au contrat.\n\nElle peut donner lieu à restitution dans les conditions prévues aux articles 1352 à 1352-9.", "chapitres": [7], "retenir": "Met fin au contrat ; restitutions possibles."},
  {"num": "1352", "code": "C. civ.", "theme": "Restitutions", "texte": "La restitution d'une chose autre que d'une somme d'argent a lieu en nature ou, lorsque cela est impossible, en valeur, estimée au jour de la restitution.", "chapitres": [7], "retenir": "En nature ou en valeur au jour de la restitution."},
  {"num": "1352-1", "code": "C. civ.", "theme": "Restitutions", "texte": "Celui qui restitue la chose répond des dégradations et détériorations qui en ont diminué la valeur, à moins qu'il ne soit de bonne foi et que celles-ci ne soient pas dues à sa faute.", "chapitres": [7], "retenir": "Dégradations à la charge du restituant, sauf bonne foi et absence de faute."},
  {"num": "1352-2", "code": "C. civ.", "theme": "Restitutions", "texte": "Celui qui l'ayant reçue de bonne foi a vendu la chose ne doit restituer que le prix de la vente.\n\nS'il l'a reçue de mauvaise foi, il en doit la valeur au jour de la restitution lorsqu'elle est supérieure au prix.", "chapitres": [7], "retenir": "Chose revendue : prix ou valeur selon la bonne ou mauvaise foi."},
  {"num": "1352-3", "code": "C. civ.", "theme": "Restitutions", "texte": "La restitution inclut les fruits et la valeur de la jouissance que la chose a procurée.\n\nLa valeur de la jouissance est évaluée par le juge au jour où il se prononce.\n\nSauf stipulation contraire, la restitution des fruits, s'ils ne se retrouvent pas en nature, a lieu selon une valeur estimée à la date du remboursement, suivant l'état de la chose au jour du paiement de l'obligation.", "chapitres": [7], "retenir": "Fruits et valeur de la jouissance."},
  {"num": "1352-4", "code": "C. civ.", "theme": "Restitutions", "texte": "Les restitutions dues par un mineur non émancipé ou par un majeur protégé sont réduites à hauteur du profit qu'il a retiré de l'acte annulé.", "chapitres": [7], "retenir": "Mineur ou majeur protégé : dans la limite du profit retiré."},
  {"num": "1352-5", "code": "C. civ.", "theme": "Restitutions", "texte": "Pour fixer le montant des restitutions, il est tenu compte à celui qui doit restituer des dépenses nécessaires à la conservation de la chose et de celles qui en ont augmenté la valeur, dans la limite de la plus-value estimée au jour de la restitution.", "chapitres": [7], "retenir": "Dépenses nécessaires et utiles remboursées."},
  {"num": "1352-6", "code": "C. civ.", "theme": "Restitutions", "texte": "La restitution d'une somme d'argent inclut les intérêts au taux légal et les taxes acquittées entre les mains de celui qui l'a reçue.", "chapitres": [7], "retenir": "Somme d'argent : intérêts au taux légal et taxes."},
  {"num": "1352-7", "code": "C. civ.", "theme": "Restitutions", "texte": "Celui qui a reçu de mauvaise foi doit les intérêts, les fruits qu'il a perçus ou la valeur de la jouissance à compter du paiement. Celui qui a reçu de bonne foi ne les doit qu'à compter du jour de la demande.", "chapitres": [7], "retenir": "Mauvaise foi : depuis le paiement ; bonne foi : depuis la demande."},
  {"num": "1352-8", "code": "C. civ.", "theme": "Restitutions", "texte": "La restitution d'une prestation de service a lieu en valeur. Celle-ci est appréciée à la date à laquelle elle a été fournie.", "chapitres": [7], "retenir": "Prestation de service : en valeur au jour où elle a été fournie."},
  {"num": "1352-9", "code": "C. civ.", "theme": "Restitutions", "texte": "Les sûretés constituées pour le paiement de l'obligation sont reportées de plein droit sur l'obligation de restituer sans toutefois que la caution soit privée du bénéfice du terme.", "chapitres": [7], "retenir": "Sûretés reportées sur l'obligation de restituer."},
  {"num": "1676", "code": "C. civ.", "theme": "Prescription", "texte": "La demande n'est plus recevable après l'expiration de deux années, à compter du jour de la vente.\n\nCe délai court et n'est pas suspendu pendant la durée du temps stipulé pour le pacte du rachat.", "chapitres": [7], "retenir": "Rescision pour lésion d'un immeuble : deux ans à compter de la vente."},
  {"num": "2224", "code": "C. civ.", "theme": "Prescription", "texte": "Les actions personnelles ou mobilières se prescrivent par cinq ans à compter du jour où le titulaire d'un droit a connu ou aurait dû connaître les faits lui permettant de l'exercer.", "chapitres": [7], "retenir": "Cinq ans à compter de la connaissance des faits."},
  {"num": "2232", "code": "C. civ.", "theme": "Prescription", "texte": "Le report du point de départ, la suspension ou l'interruption de la prescription ne peut avoir pour effet de porter le délai de la prescription extinctive au-delà de vingt ans à compter du jour de la naissance du droit.\n\nLe premier alinéa n'est pas applicable dans les cas mentionnés aux articles 2226, 2226-1, 2227, 2233 et 2236, au premier alinéa de l'article 2241 et à l'article 2244. Il ne s'applique pas non plus aux actions relatives à l'état des personnes.", "chapitres": [7], "retenir": "Délai butoir de vingt ans à compter de la naissance du droit."}
);
