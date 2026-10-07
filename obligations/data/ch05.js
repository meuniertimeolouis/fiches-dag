/* Chapitre 5 — Le contenu du contrat
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 5,
  intro: "Troisième condition de validité : un **contenu licite et certain** ([[1128]]). La réforme a supprimé la **cause** et reformulé l'**objet** : on parle désormais de « contenu », de « prestation » et de « but ». Le contenu doit être **licite** ([[1162]]), **déterminé** ([[1163]] à [[1167]]) et présenter un **minimum d'équilibre** ([[1168]] à [[1171]]).",
  sections: [
    {
      titre: "De l'objet et de la cause au « contenu »",
      contenu: [
        { schema: { type: "tableau", titre: "Ce que sont devenues les notions anciennes", colonnes: ["Avant 2016", "Question posée", "Depuis 2016"], lignes: [
          ["Objet de l'obligation (anc. art. 1126 s.)", "Qu'est-ce qui est dû ?", "« Prestation », qui doit être possible, déterminée ou déterminable ([[1163]])"],
          ["Cause subjective, ou motif déterminant (anc. art. 1133)", "Pourquoi a-t-on contracté ?", "Le « **but** » du contrat, contrôlé au regard de l'ordre public ([[1162]])"],
          ["Cause objective, ou contrepartie (anc. art. 1131)", "Y a-t-il une contrepartie ?", "Contrepartie **illusoire ou dérisoire** ([[1169]]) ; clause privant de sa substance l'**obligation essentielle** ([[1170]])"]
        ] } },
        { attention: "Sur une copie portant sur un contrat conclu depuis le 1er octobre 2016, ne fondez **jamais** une solution sur la « cause » : dites « but » ([[1162]]) ou « contrepartie » ([[1169]]). La cause reste à connaître pour l'histoire et pour les contrats antérieurs (ex. Chronopost)." },
        { p: "Histoire utile pour une dissertation : la cause vient du droit canonique ; Domat puis Pothier en font une théorie ; Planiol la juge « fausse et inutile » ; Capitant la réhabilite (*De la cause des obligations*, 1923). La jurisprudence distinguait cause objective et subjective (Civ. 1re, 12 juill. 1989). L'avant-projet Catala restait fidèle à la cause classique ; l'avant-projet Terré l'abandonnait au profit d'une approche fonctionnelle (contrôle de la licéité et de l'équilibre), ce que l'ordonnance a suivi. Le droit comparé relativise la notion, inconnue de la plupart des pays européens." },
        { p: "**Vocabulaire** : l'objet est ce à quoi est tenu le débiteur (« qu'est-ce qui est dû ? ») ; la cause était la raison d'être de l'engagement (« pourquoi est-ce dû ? »). Seule l'expression « objet de l'obligation » était exacte ; « objet du contrat » n'était qu'un raccourci. Le mot « contenu » n'est pas défini par l'ordonnance, et [[1128]] semble fusionner objet et cause alors que les art. 1162 s. emploient tour à tour « prestation », « objet » et « but » : la notion manque d'homogénéité." }
      ]
    },
    {
      titre: "La licéité du contenu",
      contenu: [
        { p: "« Le contrat ne peut déroger à l'ordre public ni par ses **stipulations**, ni par son **but**, que ce dernier ait été connu ou non par toutes les parties » ([[1162]]). Voir aussi l'article 6 du Code civil (ordre public et bonnes mœurs). L'ordre public est la norme impérative dont on ne peut s'écarter ni par son comportement ni par ses conventions ; le contrat qui y déroge est frappé de **nullité absolue**. Avant 2016, la conformité à l'ordre public était rattachée à l'objet : le changement de rattachement ne devrait guère modifier les solutions. La violation d'une règle **déontologique** peut aussi rendre le contrat illicite (Civ. 1re, 6 avr. 2022, n° 21-12.045)." },
        { h: "1. Les stipulations" },
        { schema: { type: "arbre", titre: "Les visages de l'ordre public", racine: { t: "Ordre public", d: "légal ou « virtuel », défini par le juge (Civ., 4 déc. 1929)", enfants: [
          { t: "Classique (politique)", d: "valeurs essentielles relatives à l'État et à la famille" },
          { t: "Économique", enfants: [
            { t: "De direction", d: "régulation : prix, concurrence" },
            { t: "De protection", d: "consommateur, salarié, assuré" }
          ] }
        ] } } },
        { p: "Les **bonnes mœurs**, morale collective surtout tournée vers la sphère sexuelle, ont disparu de [[1162]] mais restent à l'article 6 ; elles sont en net recul et ne couvrent plus que des interdits restreints (inceste, bigamie, qui relèvent aussi de l'ordre public). Le courtage matrimonial conclu par un homme encore marié n'a pas été jugé immoral (Civ. 1re, 4 nov. 2011)." },
        { p: "**Choses hors commerce** : l'ancien art. 1128 (« il n'y a que les choses qui sont dans le commerce… ») n'a pas été repris, la prohibition de l'ordre public suffisant. Il avait fondé la nullité des conventions de **mère porteuse** (Ass. plén., 31 mai 1991) ; le corps humain est aujourd'hui plutôt **hors du marché** : il ne peut faire l'objet de droits patrimoniaux (art. 16-1, al. 3). La **clientèle civile**, longtemps hors commerce, peut être cédée à condition que la liberté de choix du patient soit préservée (Civ. 1re, 7 nov. 2000)." },
        { h: "2. Le but" },
        { p: "Le but reprend la cause subjective : le **motif déterminant** qui a poussé à contracter. Il permet d'annuler un contrat au contenu neutre mais au but illicite (louer un local pour y organiser un trafic de drogue : le bail a pour seul objet la mise à disposition d'un local). Seul compte le **but principal**, le motif impulsif et déterminant, que le juge doit isoler parmi les mobiles ; l'exercice est artificiel et les juges ont parfois inversé le raisonnement en érigeant le but illicite en motif déterminant." },
        { schema: { type: "frise", titre: "Faut-il que le but illicite soit connu des deux parties ?", evenements: [
          { date: "Jusqu'en 1998", t: "Oui, dans les contrats à titre onéreux", d: "pour protéger le cocontractant de bonne foi" },
          { date: "7 oct. 1998", t: "Civ. 1re : revirement", d: "un contrat peut être annulé pour cause illicite même si l'une des parties ignorait le motif illicite" },
          { date: "1er oct. 2016", t: "[[1162]]", d: "« que ce dernier ait été connu ou non par toutes les parties »" }
        ] } },
        { arret: { ref: "Civ. 1re, 3 févr. 1999 ; Ass. plén., 29 oct. 2004", apport: "N'est pas contraire aux bonnes mœurs la libéralité consentie pour maintenir une relation adultère : fin de l'annulation des libéralités entre concubins pour cause immorale. Le critère ancien (gratifier pour établir ou maintenir la relation = immoral ; assurer l'avenir du concubin = licite) était désuet et arbitraire, car il fallait désigner le mobile déterminant du donateur." } }
      ]
    },
    {
      titre: "La détermination de la prestation",
      contenu: [
        { schema: { type: "etapes", titre: "Les exigences de l'article 1163", etapes: [
          { t: "Présente ou future", d: "une chose future suffit (récolte, maison à construire)" },
          { t: "Possible", d: "« à l'impossible nul n'est tenu » : nullité si l'impossibilité est absolue ; si elle tient à la seule inaptitude du débiteur, seule sa responsabilité peut être engagée" },
          { t: "Déterminée ou déterminable", d: "déductible du contrat, des usages ou des relations antérieures, **sans nouvel accord** des parties" }
        ] } },
        { p: "Chose future : si les parties ont accepté un **aléa** (achat du « coup de filet »), rien n'est dû si la chose ne vient pas à exister. Si les parties tenaient son existence pour acquise, d'autres sanctions sont envisageables selon la cause de l'inexécution (caducité, responsabilité, risques). Il suffit que la prestation existe au plus tard à l'exécution. Le pacte sur succession future, interdit par l'ancien art. 1130, al. 2, relève aujourd'hui de l'art. 722 et plus du droit commun des contrats. **Qualité** non précisée : le débiteur doit une qualité conforme aux **attentes légitimes** des parties, compte tenu de la nature de la prestation, des usages et du montant de la contrepartie ([[1166]]) — et non plus la « qualité moyenne » de l'ancien art. 1246. Indice disparu : remplacé par l'indice le plus proche ([[1167]]). Selon la nature de la prestation : **corps certain**, il suffit qu'il soit individualisé ; **chose de genre**, l'espèce et la quantité doivent être déterminées ou déterminables sans nouvel accord ni arbitraire d'une partie ; **prestation de service**, l'engagement de « faire un geste » est nul pour indétermination (Com., 28 févr. 1983)." },
        { h: "Le prix" },
        { schema: { type: "tableau", titre: "Qui fixe le prix ?", colonnes: ["Contrat", "Règle", "Sanction de l'abus"], lignes: [
          ["Droit commun", "Prix déterminé ou déterminable à la conclusion ([[1163]], contrats conclus depuis le 1er octobre 2016, sauf règles spéciales, ex. pour un expert-comptable : Com., 20 sept. 2023, n° 21-25.386 ; lecture discutée en doctrine)", "Nullité"],
          ["Vente", "Prix déterminé et désigné par les parties ([[1591]]) ; l'exigence ne vise que le prix, non ses modalités de paiement (Civ. 3e, 7 juin 2018, n° 17-17.779)", "Nullité de la vente"],
          ["Contrat-cadre ([[1164]]) : accord fixant les caractéristiques générales des relations futures, que précisent des contrats d'application ([[1111]])", "Fixation unilatérale **si elle a été convenue**, à charge de **motiver** le montant en cas de contestation", "Dommages et intérêts, le cas échéant résolution ; pas de révision du prix par le juge"],
          ["Prestation de service ([[1165]])", "À défaut d'accord avant l'exécution, le **créancier** fixe le prix et doit le motiver en cas de contestation (avant 2016, le juge le fixait à défaut d'accord)", "Dommages et intérêts, le cas échéant résolution"]
        ] } },
        { arret: { ref: "Ass. plén., 1er déc. 1995 (quatre arrêts)", apport: "Fin de la « chasse à l'indétermination du prix » dans les contrats-cadres de distribution : la référence aux tarifs du fournisseur n'affecte pas la validité du contrat ; l'abus dans la fixation du prix ne donne lieu qu'à résiliation ou indemnisation. Solution reprise par [[1164]]. Le projet de 2015 prévoyait un pouvoir de révision du prix par le juge ; il n'a pas été retenu. Étapes : Com., 11 oct. 1978 (nullité du contrat-cadre pour indétermination, ancien art. 1129) ; Civ. 1re, 22 janv. 1991 (limitation aux obligations de donner) ; Civ. 1re, 29 nov. 1994 (Alcatel) ; Ass. plén., 1er déc. 1995." } }
      ]
    },
    {
      titre: "L'équilibre du contrat",
      contenu: [
        { p: "Principe : **pas de contrôle général du juste prix** : « le défaut d'équivalence des prestations n'est pas une cause de nullité du contrat, à moins que la loi n'en dispose autrement » ([[1168]]). Trois séries d'exceptions." },
        { h: "1. La lésion" },
        { def: { terme: "Lésion", texte: "déséquilibre entre les prestations **au moment de la formation** du contrat. Vice **objectif** : il suffit de prouver le déséquilibre chiffré, sans vice du consentement (Req., 28 déc. 1932). Sanction : la **rescision**, c'est-à-dire la nullité (le législateur préfère ce dernier terme depuis 2016) ; la lésion s'apprécie à la formation, la preuve incombe au demandeur, et elle suppose un contrat onéreux et commutatif. Les textes sont interprétés strictement, pour éviter une dérive vers un contrôle du juste prix." } },
        { liste: [
          "Seulement dans les cas prévus par la loi, jamais dans les contrats **aléatoires** (« l'aléa chasse la lésion »).",
          "Vente d'immeuble : lésion de **plus des sept douzièmes** subie par le **vendeur** ([[1674]]), prouvée par trois experts (art. 1678) ; l'acheteur peut éviter la rescision en payant le supplément du juste prix, moins un dixième du prix total ([[1681]]).",
          "Mineur (actes courants, [[1149]]) et majeur incapable (art. 1151) : annulation pour simple lésion.",
          "Hors Code civil : achat d'engrais (lésion de plus d'un quart au détriment de l'acheteur). Les honoraires excessifs des mandataires et professions libérales peuvent être réduits par le juge, sans texte (Civ., 29 janv. 1867 ; Civ. 1re, 3 mars 1998) : la survie de cette jurisprudence est douteuse depuis 2016.",
          "Partage : action en complément de part au-delà d'un quart (art. 889) ; cession de droits d'auteur : plus des sept douzièmes (CPI, art. L. 131-5)."
        ] },
        { h: "2. Les clauses créant un déséquilibre significatif" },
        { schema: { type: "tableau", titre: "Trois textes, trois domaines", colonnes: ["", "C. consom., art. L. 212-1", "C. com., art. L. 442-1", "C. civ., [[1171]]"], lignes: [
          ["Qui est protégé ?", "Consommateur ou non-professionnel face à un professionnel", "Partenaire commercial soumis par une entreprise", "Toute partie à un **contrat d'adhésion**"],
          ["Quelles clauses ?", "Toute clause, même négociée", "Clauses créant un déséquilibre dans une relation commerciale", "Clause **non négociable**, déterminée à l'avance par une partie"],
          ["Exclusions", "Ni l'objet principal ni l'adéquation du prix, si la clause est claire", "—", "Ni l'objet principal ni l'adéquation du prix à la prestation"],
          ["Sanction", "Réputée non écrite ; listes « noire » (présomption irréfragable) et « grise » (présomption simple) aux art. R. 212-1 et R. 212-2 ; relevé d'office par le juge (C. consom., art. R. 632-1, al. 2 ; L. 241-1 pour le réputé non écrit ; action imprescriptible selon la CJUE, 21 juin 2021, C-609/19)", "Responsabilité de l'auteur", "Réputée non écrite"]
        ] } },
        { attention: "[[1171]] a un champ **résiduel** : il ne s'applique pas aux contrats relevant de l'art. L. 442-1 du Code de commerce (anc. L. 442-6, I, 2° : Com., 26 janv. 2022, n° 20-16.782), même s'il peut jouer entre commerçants hors de ce texte ni, en principe, aux contrats de consommation régis par L. 212-1 (les règles spéciales dérogent aux générales, [[1105]], al. 3)." },
        { p: "**Précisions sur [[1171]]** : issu de l'ordonnance de 2016, qui l'avait limité aux contrats d'adhésion (le projet de 2015 visait tous les contrats) ; la loi du 20 avril 2018 a ajouté la condition d'une clause « non négociable, déterminée à l'avance par l'une des parties », pour s'aligner sur la définition du contrat d'adhésion ([[1110]], al. 2). Cette nouvelle rédaction ne vaut que pour les contrats conclus à partir du **1er octobre 2018** ; entre le 1er octobre 2016 et le 30 septembre 2018, toute clause d'un contrat d'adhésion créant un déséquilibre significatif peut être sanctionnée. Le demandeur doit désormais prouver que la clause n'était pas négociable. Le juge n'écarte que la partie de la clause qui crée le déséquilibre (« frappe chirurgicale »). L'absence de réciprocité d'une clause résolutoire ne suffit pas si elle se justifie par la nature des obligations (Com., 26 janv. 2022). Droit de la consommation : clauses « noires » irréfragablement présumées abusives (Civ. 1re, 11 déc. 2019, n° 18-21.164) ; le juge peut aussi déclarer une clause abusive hors décret (Civ. 1re, 14 mai 1991)." },
        { h: "3. L'absence de contrepartie" },
        { p: "**Contrepartie illusoire ou dérisoire** ([[1169]]) : un contrat à titre onéreux est **nul** si, **à sa formation**, la contrepartie convenue au profit de celui qui s'engage est illusoire ou dérisoire (vente pour un euro symbolique d'un bien de valeur, sans autre contrepartie). Il faut une absence quasi totale : un prix simplement faible ne suffit pas ([[1168]] ; Civ. 1re, 4 juill. 1995 ; 11 déc. 2008). Accepter l'annulation d'une absence seulement partielle contournerait les règles de la lésion. L'article remplace la cause objective, qui avait parfois servi à des dérives (Civ. 1re, 3 juill. 1996 ; Com., 27 mars 2007). Application récente : Com., 23 oct. 2024, n° 23-11.749." },
        { p: "**Clause privant de sa substance l'obligation essentielle** ([[1170]]) : elle est **réputée non écrite** (le reste du contrat subsiste). Deux conditions rigoureuses : la clause doit porter sur l'obligation essentielle **et** la priver de sa substance (la contredire ou la vider de sens : Civ. 2e, 24 sept. 2020, n° 19-15.375 ; formule plus stricte, « neutraliser le caractère contraignant » de l'obligation : Com., 26 avr. 2017). Certains auteurs s'interrogent sur l'utilité de [[1170]] depuis [[1171]] et en demandent une interprétation stricte." },
        { schema: { type: "frise", titre: "De Chronopost à l'article 1170", evenements: [
          { date: "22 oct. 1996", t: "Com., Chronopost", d: "La clause limitant la réparation au prix du transport, dans un contrat de livraison rapide, contredit la portée de l'engagement pris : réputée non écrite (fondement : cause, anc. art. 1131)." },
          { date: "29 juin 2010", t: "Com., Faurecia", d: "Seule est réputée non écrite la clause limitative qui contredit la portée de l'**obligation essentielle** ; il faut examiner si le plafond d'indemnisation est dérisoire." },
          { date: "1er oct. 2016", t: "[[1170]]", d: "Consécration générale : toute clause qui prive de sa substance l'obligation essentielle du débiteur est réputée non écrite." }
        ] } }
      ]
    }
  ],
  retenir: [
    "Contenu licite et certain ([[1128]]) : la cause a disparu ; restent la prestation ([[1163]]), le but ([[1162]]) et la contrepartie ([[1169]], [[1170]]).",
    "But illicite : nullité même s'il n'était pas connu de toutes les parties ([[1162]] ; Civ. 1re, 7 oct. 1998).",
    "Prestation présente ou future, possible, déterminée ou déterminable sans nouvel accord ([[1163]]) ; qualité conforme aux attentes légitimes ([[1166]]).",
    "Prix : fixation unilatérale possible dans le contrat-cadre si elle est convenue ([[1164]]) et dans la prestation de service à défaut d'accord ([[1165]]) ; motivation exigée en cas de contestation ; abus sanctionné par dommages et intérêts, le cas échéant résolution.",
    "Pas de lésion sauf texte ([[1168]]) : vente d'immeuble, plus de 7/12 au détriment du vendeur ([[1674]]).",
    "Contrat d'adhésion : clause non négociable créant un déséquilibre significatif réputée non écrite ([[1171]]), sauf objet principal et prix.",
    "Contrepartie illusoire ou dérisoire : nullité du contrat ([[1169]]) ; clause vidant l'obligation essentielle : réputée non écrite ([[1170]], Chronopost, Faurecia)."
  ],
  articles: ["1128", "1149", "1105", "1162", "1163", "1164", "1165", "1166", "1167", "1168", "1169", "1170", "1171", "1591", "1674", "1681"],
  regimes: ["clause-obligation-essentielle"],
  cas: ["ch5-livraison-express"],
  quiz: [
    { q: "Pour un contrat conclu en 2024, sur quel texte annuler un bail consenti pour installer un laboratoire clandestin de drogue, si le bailleur l'ignorait ?", choix: ["L'absence de cause (anc. art. 1131)", "L'article 1162 : but contraire à l'ordre public, même inconnu d'une partie", "Impossible : le bailleur était de bonne foi"], bonne: 1, expl: "[[1162]] in fine, qui reprend Civ. 1re, 7 oct. 1998." },
    { q: "Une prestation est déterminable lorsque :", choix: ["Les parties se mettront d'accord plus tard", "Elle peut être déduite du contrat, des usages ou des relations antérieures, sans nouvel accord", "Le juge peut la fixer"], bonne: 1, expl: "[[1163]], al. 3." },
    { q: "Dans un contrat-cadre de distribution, le fournisseur fixe seul ses prix, comme convenu, puis pratique un prix abusif. Sanction ?", choix: ["Nullité du contrat-cadre pour indétermination du prix", "Dommages et intérêts et, le cas échéant, résolution", "Révision du prix par le juge"], bonne: 1, expl: "[[1164]], al. 2 ; Ass. plén., 1er déc. 1995." },
    { q: "Un plombier intervient en urgence sans devis ; aucun accord sur le prix avant l'intervention. Qui fixe le prix ?", choix: ["Le juge", "Le plombier (créancier), à charge de motiver le montant en cas de contestation", "Le client"], bonne: 1, expl: "[[1165]]. En cas d'abus : dommages et intérêts, voire résolution." },
    { q: "Un particulier vend son appartement 60 000 € ; il en valait 200 000 €. Peut-il agir ?", choix: ["Non, la lésion n'existe pas en droit français", "Oui, rescision pour lésion de plus des sept douzièmes", "Oui, nullité pour contrepartie dérisoire seulement"], bonne: 1, expl: "7/12 de 200 000 € ≈ 116 667 € ; il a été lésé de 140 000 €, plus que 7/12 : [[1674]]. L'acheteur peut garder le bien en payant le supplément ([[1681]])." },
    { q: "Et si c'est l'acheteur d'un immeuble qui a payé beaucoup trop cher ?", choix: ["Rescision pour lésion", "Pas de lésion : seul le vendeur est protégé", "Nullité pour erreur sur la valeur"], bonne: 1, expl: "[[1674]] ne protège que le vendeur ; l'erreur sur la valeur est indifférente ([[1136]])." },
    { q: "L'article 1171 ne permet pas de contrôler :", choix: ["Une clause attributive de compétence", "L'adéquation du prix à la prestation", "Une clause de résiliation unilatérale"], bonne: 1, expl: "[[1171]], al. 2 : ni l'objet principal ni l'adéquation du prix." },
    { q: "Une vente d'un immeuble pour 1 € symbolique, sans autre contrepartie. Sanction ?", choix: ["Aucune", "Nullité pour contrepartie dérisoire", "Rescision pour lésion seulement"], bonne: 1, expl: "[[1169]] (on peut aussi discuter une donation déguisée)." },
    { q: "Une clause limitant l'indemnisation du retard au remboursement du prix, dans un contrat dont l'essentiel est la rapidité de livraison :", choix: ["Toujours valable", "Réputée non écrite si elle prive de sa substance l'obligation essentielle", "Entraîne la nullité de tout le contrat"], bonne: 1, expl: "[[1170]] ; Chronopost (1996), Faurecia (2010) : il faut vérifier que le plafond est dérisoire." },
    { q: "Depuis 2016, la cause :", choix: ["Est toujours une condition de validité", "A disparu du Code civil, ses fonctions étant reprises par le but, la contrepartie et l'obligation essentielle", "A été remplacée par la lésion"], bonne: 1, expl: "[[1128]] vise un « contenu licite et certain »." }
  ]
});

OBL.regimes.push({
  id: "clause-obligation-essentielle",
  chapitre: "Validité du contrat",
  titre: "Clause privant de sa substance l'obligation essentielle",
  fondement: ["1170"],
  resume: "Faire réputer non écrite une clause (limitative de responsabilité, par exemple) qui vide de son sens l'engagement principal du débiteur.",
  conditions: [
    { nom: "Une obligation essentielle", question: "L'obligation touchée par la clause est-elle l'obligation essentielle du débiteur (celle qui fait l'intérêt du contrat) ?", detail: "Ex. la rapidité pour un transporteur express (Chronopost), la livraison d'un logiciel dans un délai pour un intégrateur (Faurecia).", piege: "Une obligation accessoire ne suffit pas." },
    { nom: "Une clause qui la prive de sa substance", question: "La clause contredit-elle la portée de cet engagement, par exemple par un plafond d'indemnisation dérisoire ?", detail: "Faurecia (Com., 29 juin 2010) : seule la clause qui contredit la portée de l'obligation essentielle est écartée ; un plafond non dérisoire reste valable.", piege: "Ne pas conclure automatiquement que toute clause limitative est nulle." }
  ],
  exonerations: [],
  copie: [
    "Sanction : clause réputée non écrite (le contrat subsiste), pas nullité du contrat.",
    "Pour un contrat antérieur au 1er octobre 2016 : fondement de l'ancienne cause (anc. art. 1131), jurisprudence Chronopost."
  ]
});

OBL.cas.push({
  id: "ch5-livraison-express",
  titre: "La livraison express",
  seance: "Chapitre 5",
  regimes: ["clause-obligation-essentielle"],
  faits: "Le cabinet d'architectes Arcade doit remettre un dossier de candidature à un concours avant le 12 mars à midi. Le 11 mars, il confie le dossier à la société RapidPli, qui promet sur son site une « livraison garantie avant 10 h le lendemain » et facture 45 euros, soit trois fois le prix d'un envoi ordinaire. Sur le bordereau, Arcade indique que le pli contient une candidature à un concours qui doit parvenir avant le 12 mars à midi. Le contrat, rédigé à l'avance par RapidPli et non négociable, contient une clause selon laquelle « en cas de retard, la responsabilité du transporteur est limitée au remboursement du prix du transport ». Le pli arrive le 13 mars : Arcade est éliminée du concours.",
  question: "Arcade peut-elle échapper à la clause et obtenir réparation de son préjudice ?",
  corrige: {
    qualification: "Un contrat de transport express conclu entre deux professionnels, sur la base de conditions non négociables rédigées par le transporteur : contrat d'adhésion. L'obligation de livrer rapidement a été manquée ; une clause limite l'indemnisation au prix du transport.",
    probleme: "Une clause limitative de responsabilité qui réduit l'indemnisation du retard au prix du transport, dans un contrat dont l'objet est une livraison rapide garantie, peut-elle être écartée ?",
    majeure: "Selon l'article 1170 du Code civil, toute clause qui prive de sa substance l'obligation essentielle du débiteur est réputée non écrite (solution issue de Com., 22 oct. 1996, Chronopost, et Com., 29 juin 2010, Faurecia, qui n'écarte la clause que si elle contredit la portée de l'obligation essentielle). Par ailleurs, dans un contrat d'adhésion, la clause non négociable, déterminée à l'avance par une partie, qui crée un déséquilibre significatif entre les droits et obligations des parties est réputée non écrite (art. 1171), sans que ce contrôle puisse porter sur l'objet principal ni sur le prix. L'article 1171 a toutefois un champ résiduel : il est écarté lorsque le contrat relève de l'article L. 442-1 du Code de commerce (Com., 26 janv. 2022, n° 20-16.782). L'article 1170, lui, s'applique à tout contrat.",
    mineure: [
      { condition: "Obligation essentielle", corrige: "RapidPli s'est engagée à une livraison « garantie avant 10 h le lendemain », et fait payer ce service trois fois plus cher qu'un envoi ordinaire : la rapidité est l'obligation essentielle du contrat." },
      { condition: "Clause qui la prive de sa substance", corrige: "Limiter l'indemnisation du retard au remboursement du prix revient à dire que RapidPli ne s'engage à rien en cas de retard : le transporteur peut manquer à son engagement essentiel sans autre conséquence que la restitution de 45 euros. La clause contredit la portée de l'obligation essentielle : elle est réputée non écrite (art. 1170)." },
      { condition: "Argument subsidiaire : article 1171", corrige: "Le contrat est d'adhésion et la clause, non négociable, crée un déséquilibre significatif ; elle ne porte ni sur l'objet principal ni sur le prix. Elle pourrait donc aussi être réputée non écrite sur ce fondement, à condition que le contrat n'entre pas dans le champ de l'article L. 442-1 du Code de commerce (relation entre partenaires commerciaux), auquel cas seul ce texte, qui ouvre droit à réparation, s'appliquerait. D'où l'intérêt de fonder d'abord la demande sur l'article 1170." },
      { condition: "Conséquence", corrige: "La clause écartée, la responsabilité contractuelle de RapidPli s'apprécie selon le droit commun (art. 1231-1 et s.) : Arcade devra prouver son préjudice, par exemple la perte de chance de remporter le concours. Ce préjudice doit avoir été prévisible lors de la conclusion du contrat, sauf faute lourde ou dolosive (art. 1231-3) : c'est le cas, puisque le bordereau mentionnait le concours et l'heure limite ; sans cette mention, la perte de chance aurait pu être jugée imprévisible pour un transporteur qui ignore le contenu du pli. La faute lourde, elle, ne se déduit pas du seul manquement à l'obligation essentielle (Ch. mixte, 22 avr. 2005 ; Com., 29 juin 2010, Faurecia)." }
    ],
    conclusion: "La clause limitative est réputée non écrite, car elle prive de sa substance l'obligation essentielle de livraison rapide (art. 1170). Arcade peut obtenir réparation selon le droit commun de la responsabilité contractuelle, notamment de la perte de chance de gagner le concours."
  }
});

OBL.articles.push(
  {"num": "1128", "code": "C. civ.", "theme": "Conditions de validité", "texte": "Sont nécessaires à la validité d'un contrat :\n\n1° Le consentement des parties ;\n\n2° Leur capacité de contracter ;\n\n3° Un contenu licite et certain.", "chapitres": [5], "retenir": "Consentement, capacité, contenu licite et certain."},
  {"num": "1105", "code": "C. civ.", "theme": "Articulation des textes", "texte": "Les contrats, qu'ils aient ou non une dénomination propre, sont soumis à des règles générales, qui sont l'objet du présent sous-titre.\n\nLes règles particulières à certains contrats sont établies dans les dispositions propres à chacun d'eux.\n\nLes règles générales s'appliquent sous réserve de ces règles particulières.", "chapitres": [5], "retenir": "Les règles générales s'appliquent sous réserve des règles particulières."},
  {"num": "1149", "code": "C. civ.", "theme": "Lésion", "texte": "Les actes courants accomplis par le mineur peuvent être annulés pour simple lésion. Toutefois, la nullité n'est pas encourue lorsque la lésion résulte d'un événement imprévisible.\n\nLa simple déclaration de majorité faite par le mineur ne fait pas obstacle à l'annulation.\n\nLe mineur ne peut se soustraire aux engagements qu'il a pris dans l'exercice de sa profession.", "chapitres": [5], "retenir": "Actes courants du mineur annulables pour simple lésion."},
  {"num": "1162", "code": "C. civ.", "theme": "Licéité", "texte": "Le contrat ne peut déroger à l'ordre public ni par ses stipulations, ni par son but, que ce dernier ait été connu ou non par toutes les parties.", "chapitres": [5], "retenir": "Ni les stipulations ni le but ne peuvent déroger à l'ordre public, même si le but n'était pas connu de tous."},
  {"num": "1163", "code": "C. civ.", "theme": "Détermination", "texte": "L'obligation a pour objet une prestation présente ou future.\n\nCelle-ci doit être possible et déterminée ou déterminable.\n\nLa prestation est déterminable lorsqu'elle peut être déduite du contrat ou par référence aux usages ou aux relations antérieures des parties, sans qu'un nouvel accord des parties soit nécessaire.", "chapitres": [5], "retenir": "Prestation présente ou future, possible, déterminée ou déterminable sans nouvel accord."},
  {"num": "1164", "code": "C. civ.", "theme": "Prix", "texte": "Dans les contrats cadre, il peut être convenu que le prix sera fixé unilatéralement par l'une des parties, à charge pour elle d'en motiver le montant en cas de contestation.\n\nEn cas d'abus dans la fixation du prix, le juge peut être saisi d'une demande tendant à obtenir des dommages et intérêts et le cas échéant la résolution du contrat.", "chapitres": [5], "retenir": "Contrat-cadre : fixation unilatérale si convenue, motivée en cas de contestation ; abus → dommages et intérêts, le cas échéant résolution."},
  {"num": "1165", "code": "C. civ.", "theme": "Prix", "texte": "Dans les contrats de prestation de service, à défaut d'accord des parties avant leur exécution, le prix peut être fixé par le créancier, à charge pour lui d'en motiver le montant en cas de contestation.\n\nEn cas d'abus dans la fixation du prix, le juge peut être saisi d'une demande tendant à obtenir des dommages et intérêts et, le cas échéant, la résolution du contrat.", "chapitres": [5], "retenir": "Prestation de service : fixation par le créancier à défaut d'accord avant l'exécution."},
  {"num": "1166", "code": "C. civ.", "theme": "Détermination", "texte": "Lorsque la qualité de la prestation n'est pas déterminée ou déterminable en vertu du contrat, le débiteur doit offrir une prestation de qualité conforme aux attentes légitimes des parties en considération de sa nature, des usages et du montant de la contrepartie.", "chapitres": [5], "retenir": "Qualité conforme aux attentes légitimes des parties."},
  {"num": "1167", "code": "C. civ.", "theme": "Prix", "texte": "Lorsque le prix ou tout autre élément du contrat doit être déterminé par référence à un indice qui n'existe pas ou a cessé d'exister ou d'être accessible, celui-ci est remplacé par l'indice qui s'en rapproche le plus.", "chapitres": [5], "retenir": "Indice disparu remplacé par l'indice le plus proche."},
  {"num": "1168", "code": "C. civ.", "theme": "Équilibre", "texte": "Dans les contrats synallagmatiques, le défaut d'équivalence des prestations n'est pas une cause de nullité du contrat, à moins que la loi n'en dispose autrement.", "chapitres": [5], "retenir": "Le défaut d'équivalence n'est pas une cause de nullité, sauf texte."},
  {"num": "1169", "code": "C. civ.", "theme": "Équilibre", "texte": "Un contrat à titre onéreux est nul lorsque, au moment de sa formation, la contrepartie convenue au profit de celui qui s'engage est illusoire ou dérisoire.", "chapitres": [5], "retenir": "Contrepartie illusoire ou dérisoire à la formation : nullité du contrat à titre onéreux."},
  {"num": "1170", "code": "C. civ.", "theme": "Équilibre", "texte": "Toute clause qui prive de sa substance l'obligation essentielle du débiteur est réputée non écrite.", "chapitres": [5], "retenir": "Clause privant de sa substance l'obligation essentielle : réputée non écrite."},
  {"num": "1171", "code": "C. civ.", "theme": "Équilibre", "texte": "Dans un contrat d'adhésion, toute clause non négociable, déterminée à l'avance par l'une des parties, qui crée un déséquilibre significatif entre les droits et obligations des parties au contrat est réputée non écrite.\n\nL'appréciation du déséquilibre significatif ne porte ni sur l'objet principal du contrat ni sur l'adéquation du prix à la prestation.", "chapitres": [5], "retenir": "Contrat d'adhésion : clause non négociable créant un déséquilibre significatif réputée non écrite."},
  {"num": "1591", "code": "C. civ.", "theme": "Prix", "texte": "Le prix de la vente doit être déterminé et désigné par les parties.", "chapitres": [5], "retenir": "Vente : prix déterminé et désigné par les parties."},
  {"num": "1674", "code": "C. civ.", "theme": "Lésion", "texte": "Si le vendeur a été lésé de plus de sept douzièmes dans le prix d'un immeuble, il a le droit de demander la rescision de la vente, quand même il aurait expressément renoncé dans le contrat à la faculté de demander cette rescision, et qu'il aurait déclaré donner la plus-value.", "chapitres": [5], "retenir": "Vente d'immeuble : lésion de plus des 7/12 au détriment du vendeur."},
  {"num": "1681", "code": "C. civ.", "theme": "Lésion", "texte": "Dans le cas où l'action en rescision est admise, l'acquéreur a le choix ou de rendre la chose en retirant le prix qu'il en a payé, ou de garder le fonds en payant le supplément du juste prix, sous la déduction du dixième du prix total.\n\nLe tiers possesseur a le même droit, sauf sa garantie contre son vendeur.", "chapitres": [5], "retenir": "L'acquéreur peut garder le bien en payant le supplément du juste prix, moins un dixième du prix total."}
);
