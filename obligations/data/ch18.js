/* Chapitre 18 — Les quasi-contrats
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [, "1984"], cas: [] };

OBL.chapitres.push({
  num: 18,
  intro: "Troisième source d'obligations à côté du contrat et du délit : le **quasi-contrat**, « fait purement volontaire » dont naît un engagement de celui qui en profite sans y avoir droit, et parfois de son auteur ([[1300]]). Le Code en règle trois : la **gestion d'affaires** ([[1301]] à [[1301-5]]), le **paiement de l'indu** ([[1302]] à [[1302-3]]) et l'**enrichissement injustifié** ([[1303]] à [[1303-4]]). Un fil rouge : **rétablir un équilibre patrimonial** rompu sans cause, sans accord de volonté et sans faute.",
  sections: [
    {
      titre: "La notion de quasi-contrat",
      contenu: [
        { def: { terme: "Quasi-contrat", texte: "**fait licite et volontaire** qui engage celui qui en profite sans y avoir droit et, parfois, son auteur envers autrui ([[1300]], al. 1er). L'obligation naît d'un **fait juridique**, non d'un accord de volontés : c'est la différence avec le contrat. Le fait est **licite** : c'est la différence avec le délit." } },
        { schema: { type: "arbre", titre: "Les quasi-contrats du Code civil ([[1300]], al. 2)", racine: { t: "Quasi-contrats", d: "liste non fermée", enfants: [
          { t: "Gestion d'affaires", d: "le gérant s'occupe utilement de l'affaire d'autrui, sans mandat ([[1301]])" },
          { t: "Paiement de l'indu", d: "le *solvens* paie ce qui n'est pas dû ; l'*accipiens* doit restituer ([[1302]])" },
          { t: "Enrichissement injustifié", d: "l'enrichi indemnise l'appauvri, à titre subsidiaire ([[1303]])" },
          { lien: "et", t: "Quasi-contrats innommés", d: "ex. loteries publicitaires (Ch. mixte, 6 sept. 2002)" }
        ] } } },
        { p: "L'alinéa 2 vise les quasi-contrats « régis par le présent sous-titre » : la formule laisse la catégorie **ouverte**. La jurisprudence l'avait déjà élargie : l'organisateur d'une **loterie publicitaire** qui annonce un gain à une personne dénommée sans mettre en évidence l'existence d'un aléa s'oblige, par ce fait purement volontaire, à le délivrer (Ch. mixte, 6 sept. 2002, n° 98-22.981)." },
        { attention: "Solution critiquée : le « gagnant » déçu n'est pas appauvri et le fait de l'organisateur n'a rien de licite. On y voit une sanction de la tromperie plus qu'un vrai quasi-contrat. En copie, présentez-la comme une **conception extensive** de la notion." },
        { h: "Application dans le temps de la réforme de 2016" },
        { p: "L'ordonnance ne comporte pas de disposition transitoire propre aux quasi-contrats. La Cour de cassation applique l'article 2 du Code civil : les **conditions d'existence** relèvent de la loi en vigueur au jour du **fait** qui en est la source ; la **détermination et le calcul de l'indemnité** relèvent immédiatement de la loi nouvelle (Civ. 1re, 3 mars 2021, à propos de l'enrichissement injustifié)." }
      ]
    },
    {
      titre: "La gestion d'affaires : les conditions",
      contenu: [
        { def: { terme: "Gestion d'affaires", texte: "situation de celui (le **gérant**) qui, **sans y être tenu**, gère **sciemment et utilement** l'affaire d'autrui (le **maître de l'affaire**, ou géré), **à l'insu ou sans opposition** de celui-ci ([[1301]]). Exemple type : le voisin qui fait réparer en urgence la toiture d'un propriétaire absent." } },
        { schema: { type: "arbre", titre: "Les conditions de la gestion d'affaires ([[1301]])", racine: { t: "Gestion d'affaires", enfants: [
          { t: "Quant au maître", d: "ni accord (sinon mandat), ni opposition (sinon immixtion fautive)", enfants: [
            { t: "Hors d'état d'agir ?", d: "exigence jurisprudentielle (Com., 12 janv. 1999)" }
          ] },
          { t: "Quant au gérant", d: "intention de gérer l'affaire d'autrui, sans obligation préexistante", enfants: [
            { t: "« Sciemment »", d: "volonté d'agir pour autrui ; un intérêt personnel concurrent est admis ([[1301-4]])" },
            { t: "« Sans y être tenu »", d: "pas d'obligation légale ou contractuelle d'agir" }
          ] },
          { t: "Quant à l'acte", d: "acte matériel ou juridique, même de disposition", enfants: [
            { t: "« Utilement »", d: "acte nécessaire et opportun, apprécié au moment où il est accompli" }
          ] }
        ] } } },
        { h: "Les conditions relatives au maître de l'affaire" },
        { liste: [
          "**Pas d'accord** : si le maître a demandé ou accepté l'intervention, il y a **mandat** ([[1984]]), c'est-à-dire un contrat. Le voisin prié de surveiller la maison est un mandataire, non un gérant.",
          "**Pas d'opposition** : la gestion d'affaires ne légitime pas l'intrusion dans les affaires d'autrui contre sa volonté.",
          "La jurisprudence exige en outre que le maître soit **hors d'état d'agir** lui-même : pas de gestion d'affaires pour la banque qui vend de sa propre initiative les titres d'un client joignable (Com., 12 janv. 1999). L'exigence rejoint la condition d'utilité et l'obligation de gérer « jusqu'à ce que le maître [...] soit en mesure d'y pourvoir » ([[1301-1]])."
        ] },
        { h: "Les conditions relatives au gérant" },
        { liste: [
          "**Intention de gérer l'affaire d'autrui** : le gérant agit dans l'intérêt du maître (Civ., 25 juin 1919). Cet intérêt n'a pas à être **exclusif** : l'intérêt personnel du gérant n'exclut pas la gestion d'affaires ([[1301-4]], al. 1er). L'acte peut aussi être inspiré par l'intérêt général : celui qui poursuit des voleurs et récupère la recette d'un magasin gère l'affaire de ce dernier (Civ. 1re, 26 janv. 1988).",
          "**Absence d'obligation préexistante** (« sans y être tenu ») : celui qui agit en exécution d'une obligation **légale** ou **contractuelle** n'est pas gérant d'affaires. La spontanéité est de l'essence du quasi-contrat."
        ] },
        { h: "Les conditions relatives à l'acte de gestion" },
        { p: "La **nature** de l'acte est indifférente : [[1301]] vise « les actes juridiques et matériels ». Actes conservatoires et d'administration en pratique, mais aussi, exceptionnellement, **actes de disposition** (jurisprudence ancienne constante)." },
        { p: "L'**utilité** figure depuis 2016 dans la définition de [[1301]]. Elle suppose un acte **nécessaire et opportun**, apprécié **au jour où il est accompli** (et non au regard du résultat final), avec une sévérité mesurée puisque le gérant est bénévole. Son enjeu est surtout l'indemnisation : seul le maître dont l'affaire a été « **utilement gérée** » est tenu envers le gérant ([[1301-2]])." },
        { attention: "Acte inutile ou conditions non réunies : le gérant n'a pas d'action au titre de la gestion d'affaires, mais si le maître **en a profité**, il doit l'indemniser **selon les règles de l'enrichissement injustifié** ([[1301-5]]). C'est la passerelle entre les deux quasi-contrats." }
      ]
    },
    {
      titre: "La gestion d'affaires : les effets",
      contenu: [
        { p: "Premier réflexe : la **ratification**. Si le maître ratifie la gestion, elle **vaut mandat** ([[1301-3]]) : les règles du mandat s'appliquent seules. À défaut, la gestion d'affaires produit ses effets propres, qui en font un quasi-contrat **synallagmatique** : obligations réciproques du gérant et du maître." },
        { schema: { type: "tableau", titre: "Les obligations réciproques", colonnes: ["", "Le gérant", "Le maître de l'affaire"], lignes: [
          ["Principe", "Toutes les obligations d'un **mandataire** ([[1301]])", "Tenu seulement si l'affaire a été **utilement gérée** ([[1301-2]])"],
          ["Contenu", "Soins d'une **personne raisonnable** ; **poursuivre** la gestion jusqu'à ce que le maître ou son successeur puisse y pourvoir ([[1301-1]], al. 1er) ; rendre compte", "Remplir les **engagements** contractés dans son intérêt ; **rembourser les dépenses** ; **indemniser les dommages** subis par le gérant du fait de la gestion ([[1301-2]], al. 1er et 2)"],
          ["Intérêts", "—", "Les sommes avancées portent intérêt **du jour du paiement** ([[1301-2]], al. 3)"],
          ["Faute", "Responsable de ses fautes ; le juge peut **modérer** l'indemnité due au maître selon les circonstances (urgence, bénévolat) ([[1301-1]], al. 2)", "—"],
          ["Rémunération", "—", "**Aucune** : la gestion est désintéressée (jurisprudence constante)"]
        ] } },
        { p: "Gestion **intéressée** : lorsque le gérant avait aussi un intérêt personnel, la charge des engagements, des dépenses et des dommages se **répartit à proportion des intérêts de chacun** dans l'affaire commune ([[1301-4]], al. 2)." },
        { h: "Les effets à l'égard des tiers" },
        { p: "Quand le gérant conclut des contrats avec des tiers (achat de matériaux, appel à un artisan), qui est engagé envers ceux-ci ?" },
        { liste: [
          "**Avant 2016** : si le gérant avait agi **au nom du maître**, représentation parfaite, seul le maître était obligé ; s'il avait agi **en son nom propre**, il était seul tenu envers le tiers, sauf à se faire rembourser par le maître.",
          "**Depuis 2016** : le maître doit remplir les engagements contractés « **dans son intérêt** » par le gérant ([[1301-2]], al. 1er). Le critère n'est plus le nom sous lequel le gérant a contracté mais l'intérêt du maître, pourvu que la gestion ait été **utile**."
        ] },
        { attention: "Le gérant n'est jamais rémunéré, mais il est **indemnisé de ses dommages** (blessure subie en intervenant, par exemple) : ne confondez pas rémunération et indemnisation." }
      ]
    },
    {
      titre: "Le paiement de l'indu : les conditions",
      contenu: [
        { def: { terme: "Paiement de l'indu", texte: "une personne (le *solvens*) exécute au profit d'une autre (l'*accipiens*) une prestation qui ne lui était pas due. « Tout paiement suppose une dette ; ce qui a été reçu sans être dû est sujet à **restitution** » ([[1302]], al. 1er). Paiement s'entend au sens large : remise d'une somme d'argent, d'une chose ou exécution d'une prestation." } },
        { h: "La condition essentielle : l'absence de dette" },
        { schema: { type: "tableau", titre: "Les trois figures de l'indu", colonnes: ["", "Indu objectif", "Indu subjectif « actif »", "Indu subjectif « passif »"], lignes: [
          ["Hypothèse", "La dette **n'existe pas** (ou pas pour ce montant) : dette imaginaire, annulée, trop-perçu", "Un vrai débiteur paie un **faux créancier** (erreur sur l'héritier du créancier, par ex.)", "Un **faux débiteur** paie le vrai créancier : il acquitte la **dette d'autrui**"],
          ["Texte", "[[1302-1]]", "[[1302-1]]", "[[1302-2]]"],
          ["Preuve de l'erreur", "**Non** (Ass. plén., 2 avr. 1993)", "**Non** : l'accipiens a reçu ce qui ne lui était pas dû", "**Oui** : erreur **ou contrainte**"],
          ["Contre qui agir ?", "L'accipiens", "L'accipiens", "Le créancier payé ; ou celui dont la dette a été acquittée par erreur ([[1302-2]], al. 2)"]
        ] } },
        { p: "Ne sont **pas** indus : le paiement volontaire d'une **obligation naturelle** ([[1302]], al. 2) ; le paiement d'une **dette prescrite** ([[2249]]), car la prescription n'empêche pas le paiement de trouver une cause ; le paiement **anticipé** d'une dette à terme, car la dette existe déjà ([[1305-2]]). En revanche, ce qui a été payé alors qu'une **condition suspensive** était pendante peut être répété ([[1304-5]], al. 2)." },
        { h: "L'erreur du solvens" },
        { liste: [
          "**Jurisprudence classique** : la preuve de l'erreur était toujours exigée, car un paiement sans dette pouvait aussi s'expliquer par une intention libérale.",
          "**Revirement** : pour l'indu objectif, la restitution est due « sans être tenu à aucune autre preuve » que l'absence de dette (Ass. plén., 2 avr. 1993, Jeumont-Schneider, à propos de cotisations sociales).",
          "**Depuis 2016** : l'accipiens doit restituer ce qu'il a reçu « **par erreur ou sciemment** » ([[1302-1]]). L'erreur du solvens n'est exigée que pour l'**indu subjectif passif** ([[1302-2]], al. 1er), qui admet aussi la **contrainte**."
        ] },
        { attention: "Limite propre à l'indu subjectif passif : l'action contre le créancier **cesse** si, par suite du paiement, il a **détruit son titre** ou **abandonné ses sûretés** ([[1302-2]], al. 1er). Le solvens se retourne alors contre le vrai débiteur (al. 2)." },
        { h: "La faute du solvens" },
        { p: "Le solvens négligent (qui paie sans vérifier l'existence ou le montant de la dette) conserve son action. Avant 2016, l'absence de faute n'était pas une condition de la répétition, sauf à déduire des dommages et intérêts au profit de l'accipiens lésé (Civ. 1re, 17 févr. 2010). Depuis 2016, la faute ne ferme pas l'action : la restitution « **peut être réduite** si le paiement procède d'une faute » ([[1302-3]], al. 2), directement, sans passer par la responsabilité civile." }
      ]
    },
    {
      titre: "Le paiement de l'indu : les restitutions",
      contenu: [
        { p: "Depuis 2016, la restitution de l'indu obéit au **droit commun des restitutions** ([[1352]] à [[1352-9]], sur renvoi de [[1302-3]], al. 1er), le même que pour la nullité ou la résolution. Son étendue dépend de la **bonne ou mauvaise foi** de l'accipiens. La bonne foi est **présumée** : c'est au solvens de prouver la mauvaise foi ([[2274]])." },
        { schema: { type: "tableau", titre: "Ce que doit restituer l'accipiens", colonnes: ["Objet reçu", "Accipiens de bonne foi", "Accipiens de mauvaise foi"], lignes: [
          ["Somme d'argent", "Le capital ; intérêts au taux légal **à compter de la demande** ([[1352-6]], [[1352-7]])", "Le capital ; intérêts au taux légal **à compter du paiement** ([[1352-7]])"],
          ["Chose", "En nature ou, si c'est impossible, en valeur au jour de la restitution ([[1352]]) ; fruits et jouissance **à compter de la demande** ([[1352-3]], [[1352-7]])", "Idem, mais fruits et jouissance **à compter du paiement** ([[1352-7]])"],
          ["Dégradations", "Non responsable, sauf **faute** de sa part ([[1352-1]])", "Responsable des dégradations ([[1352-1]])"],
          ["Chose revendue", "Le **prix de vente** seulement ([[1352-2]], al. 1er)", "La **valeur au jour de la restitution** si elle dépasse le prix ([[1352-2]], al. 2)"]
        ] } },
        { liste: [
          "L'accipiens se voit tenir compte des **dépenses nécessaires** à la conservation de la chose et de celles qui en ont augmenté la valeur, dans la limite de la plus-value ([[1352-5]]).",
          "Les **sûretés** garantissant l'obligation sont reportées sur l'obligation de restituer ([[1352-9]]).",
          "Mauvaise foi : elle s'apprécie **au moment de la réception** (l'accipiens savait qu'il recevait l'indu)."
        ] },
        { attention: "Avant 2016, l'accipiens de bonne foi n'était pas garant de la perte fortuite de la chose (art. 1379 anc.). Les textes actuels prévoient une restitution **en valeur** lorsque la restitution en nature est impossible ([[1352]]) et n'exonèrent le restituant de bonne foi que des **dégradations** non fautives ([[1352-1]]) : la portée de l'ancienne règle sous l'empire des nouveaux textes est discutée." }
      ]
    },
    {
      titre: "L'enrichissement injustifié : origine et conditions",
      contenu: [
        { p: "Inconnu du Code de 1804, l'enrichissement **sans cause** est une création **prétorienne**, fondée sur l'équité : nul ne doit s'enrichir injustement aux dépens d'autrui. L'ordonnance de 2016 l'a codifié sous le nom d'**enrichissement injustifié** ([[1303]] à [[1303-4]]). L'action de l'appauvri s'appelait l'action *de in rem verso*." },
        { schema: { type: "frise", titre: "De l'arrêt Boudier au Code civil", evenements: [
          { date: "15 juin 1892", t: "Req., Boudier", d: "un marchand d'engrais impayé par le fermier agit contre le propriétaire qui a profité des récoltes : l'action *de in rem verso* n'est soumise à « aucune condition déterminée »" },
          { date: "2 mars 1915", t: "Civ., Briauhant", d: "pour éviter les excès : l'action est **subsidiaire**, fermée à qui dispose d'une autre action" },
          { date: "12 juill. 1994", t: "Civ. 1re", d: "l'enfant qui a soigné ses parents au-delà des exigences de la **piété filiale** peut être indemnisé" },
          { date: "1er oct. 2016", t: "Ordonnance du 10 févr. 2016", d: "codification : [[1303]] à [[1303-4]]" },
          { date: "10 janv. 2024", t: "Civ. 1re", d: "l'action ne peut pallier la **carence probatoire** d'un prêteur qui ne prouve pas le prêt" },
          { date: "30 avr. 2025", t: "Civ. 1re", d: "confirmation de la solution de 1994 pour l'aide apportée par un enfant à ses parents" }
        ] } },
        { h: "Première condition : un enrichissement et un appauvrissement corrélatifs" },
        { liste: [
          "**Appauvrissement**, entendu largement : dépense, prestation fournie en nature (travail non rémunéré), gain manqué.",
          "**Enrichissement**, entendu largement : plus-value, mais aussi **dépense évitée** (la famille d'un blessé hébergé et soigné par un tiers a fait l'économie des frais).",
          "**Corrélation** : l'un doit être la conséquence de l'autre. Le lien peut être **indirect**, l'enrichissement transitant par le patrimoine d'un tiers (arrêt Boudier). Charge de la preuve : l'appauvri."
        ] },
        { h: "Seconde condition : l'absence de justification" },
        { def: { terme: "Enrichissement injustifié", texte: "enrichissement qui ne procède **ni de l'accomplissement d'une obligation par l'appauvri ni de son intention libérale** ([[1303-1]]). Un contrat, la loi, une libéralité, une décision de justice justifient le transfert de valeur." } },
        { liste: [
          "**Devoir moral, obligation naturelle, amitié** : ils justifient l'appauvrissement. **Exception** : l'aide excédant **notablement** les exigences de la piété filiale ouvre droit à indemnité (Civ. 1re, 12 juill. 1994 ; Civ. 1re, 30 avr. 2025).",
          "**Profit personnel** : pas d'indemnisation si l'appauvrissement procède d'un acte accompli par l'appauvri **en vue d'un profit personnel** ([[1303-2]], al. 1er).",
          "**Faute de l'appauvri** : elle n'exclut plus l'action (avant 2016, la jurisprudence l'écartait en cas de faute caractérisée) ; le juge peut seulement **modérer** l'indemnisation ([[1303-2]], al. 2)."
        ] }
      ]
    },
    {
      titre: "L'enrichissement injustifié : subsidiarité et indemnité",
      contenu: [
        { h: "La subsidiarité" },
        { p: "Principe posé en 1915 et codifié : « L'appauvri n'a pas d'action sur ce fondement lorsqu'une **autre action lui est ouverte** ou se heurte à un **obstacle de droit**, tel que la prescription » ([[1303-3]]). L'enrichissement injustifié ne doit pas servir à contourner les règles du contrat, de la responsabilité, de la preuve ou de la prescription. [[1303]] l'exprime aussi : il s'applique « **en dehors des cas** de gestion d'affaires et de paiement de l'indu »." },
        { schema: { type: "etapes", titre: "Tester la subsidiarité dans une copie", etapes: [
          { t: "1. Une autre action existe-t-elle en théorie ?", d: "contrat, responsabilité, gestion d'affaires, indu, action spéciale prévue par la loi" },
          { t: "2. Est-elle fermée par un obstacle de droit ?", d: "prescription, forclusion, autorité de la chose jugée, défaut de preuve : l'action *de in rem verso* est **irrecevable** ([[1303-3]])" },
          { t: "3. Ou ses conditions ne sont-elles simplement pas réunies en l'espèce ?", d: "la jurisprudence admet alors l'enrichissement injustifié (épouse d'agriculteur privée de salaire différé : Civ. 1re, 14 mars 1995)" },
          { t: "4. Conclure", d: "une action « ouverte » ferme la voie ; une action inexistante en l'espèce la laisse ouverte" }
        ] } },
        { attention: "Carence probatoire = obstacle de droit. Le prêteur qui ne peut prouver le prêt (faute d'écrit, [[1359]]) ne peut pas se rabattre sur l'enrichissement injustifié (Civ. 1re, 2 avr. 2009 ; Civ. 1re, 10 janv. 2024)." },
        { h: "L'indemnité" },
        { liste: [
          "**Principe** : l'indemnité est égale à la **moindre** des deux valeurs, enrichissement ou appauvrissement ([[1303]]). Enrichissement de 50 000 euros, appauvrissement de 40 000 : l'indemnité est de 40 000 euros. L'action ne doit pas enrichir à son tour l'appauvri.",
          "**Évaluation** : l'appauvrissement est **constaté au jour de la dépense**, l'enrichissement **tel qu'il subsiste au jour de la demande** ; les deux sont **évalués au jour du jugement** ([[1303-4]]).",
          "**Exception** : en cas de **mauvaise foi de l'enrichi**, l'indemnité est égale à la **plus forte** des deux valeurs ([[1303-4]]).",
          "**Modération** possible en cas de faute de l'appauvri ([[1303-2]], al. 2)."
        ] },
        { schema: { type: "tableau", titre: "Synthèse des trois quasi-contrats", colonnes: ["", "Gestion d'affaires", "Paiement de l'indu", "Enrichissement injustifié"], lignes: [
          ["Fait générateur", "Gestion utile de l'affaire d'autrui, sans mandat", "Paiement sans dette", "Transfert de valeur sans justification"],
          ["Qui agit ?", "Le gérant (et le maître contre le gérant fautif)", "Le *solvens*", "L'appauvri"],
          ["Condition clé", "Utilité ; intention de gérer pour autrui", "Absence de dette ; erreur seulement si l'on a payé la dette d'autrui", "Absence de justification ; subsidiarité"],
          ["Mesure", "Toutes les dépenses et dommages, pas de rémunération", "Restitution ([[1352]] s.) selon la bonne ou mauvaise foi", "Moindre des deux valeurs ; la plus forte si l'enrichi est de mauvaise foi"],
          ["Incidence de la faute du demandeur", "Modération de l'indemnité due au maître ([[1301-1]])", "Réduction de la restitution ([[1302-3]])", "Modération de l'indemnité ([[1303-2]])"]
        ] } }
      ]
    }
  ],
  retenir: [
    "Quasi-contrat : fait licite et volontaire créant une obligation sans accord de volontés ([[1300]]) ; liste ouverte (loteries publicitaires : Ch. mixte, 6 sept. 2002).",
    "Gestion d'affaires : sans y être tenu, sciemment, utilement, à l'insu ou sans opposition du maître ([[1301]]) ; ratification = mandat ([[1301-3]]).",
    "Le maître d'une affaire utilement gérée rembourse les dépenses (avec intérêts du jour du paiement), indemnise les dommages, exécute les engagements pris dans son intérêt ; jamais de rémunération ([[1301-2]]).",
    "Gestion inutile mais profitable : indemnisation selon l'enrichissement injustifié ([[1301-5]]).",
    "Indu : pas d'erreur à prouver, sauf pour qui a payé la dette d'autrui ([[1302-1]], [[1302-2]] ; Ass. plén., 2 avr. 1993) ; la faute du solvens réduit seulement la restitution ([[1302-3]]).",
    "Restitutions selon [[1352]] s. : bonne foi présumée (intérêts et fruits à compter de la demande), mauvaise foi (à compter du paiement).",
    "Enrichissement injustifié : corrélation + absence de justification ([[1303-1]]) + subsidiarité ([[1303-3]]) ; indemnité = moindre des deux valeurs, la plus forte si l'enrichi est de mauvaise foi ([[1303]], [[1303-4]])."
  ],
  articles: ["1300", "1301", "1301-1", "1301-2", "1301-3", "1301-4", "1301-5", "1302", "1302-1", "1302-2", "1302-3", "1303", "1303-1", "1303-2", "1303-3", "1303-4", "1352", "1352-1", "1352-2", "1352-7", "2249", "2274"],
  regimes: ["gestion-affaires", "indu-restitution", "enrichissement-injustifie"],
  cas: ["ch18-degat-des-eaux"],
  quiz: [
    { q: "Un voisin, prié par le propriétaire parti en voyage de surveiller sa maison, fait réparer une fuite. Sa situation relève :", choix: ["De la gestion d'affaires", "Du mandat", "De l'enrichissement injustifié"], bonne: 1, expl: "Le maître a donné son accord : il y a contrat de mandat ([[1984]]). La gestion d'affaires suppose que le gérant agisse à l'insu ou sans opposition du maître, sans accord ([[1301]])." },
    { q: "Le gérant d'affaires peut-il réclamer une rémunération pour le temps passé ?", choix: ["Non, seulement le remboursement de ses dépenses et l'indemnisation de ses dommages", "Oui, au tarif d'un professionnel", "Oui, si la gestion a été utile"], bonne: 0, expl: "[[1301-2]] : remboursement des dépenses, indemnisation des dommages, jamais de rémunération, la gestion étant désintéressée." },
    { q: "Le gérant avait lui-même intérêt à l'acte (la fuite du voisin inondait aussi son appartement) :", choix: ["La gestion d'affaires est exclue", "La gestion d'affaires est admise, la charge étant répartie à proportion des intérêts de chacun", "Le maître supporte toute la charge"], bonne: 1, expl: "[[1301-4]] : l'intérêt personnel n'exclut pas la gestion d'affaires ; répartition proportionnelle." },
    { q: "Le solvens a payé une dette inexistante. Pour obtenir restitution, il doit prouver :", choix: ["Son erreur", "Son erreur et l'absence de faute", "L'absence de dette seulement"], bonne: 2, expl: "Indu objectif : [[1302-1]] ; Ass. plén., 2 avr. 1993. L'erreur n'est exigée que si l'on a payé la dette d'autrui ([[1302-2]])." },
    { q: "Paul, se croyant débiteur, a payé à la banque la dette de son frère. Il agit contre la banque. Il doit prouver :", choix: ["Qu'il a payé par erreur ou sous la contrainte", "Rien de plus que l'absence de dette personnelle", "La mauvaise foi de la banque"], bonne: 0, expl: "Indu subjectif passif : [[1302-2]], al. 1er. Il peut aussi agir contre son frère, dont la dette a été acquittée (al. 2)." },
    { q: "Le solvens a payé par négligence, sans vérifier sa dette. Conséquence ?", choix: ["Son action est irrecevable", "La restitution peut être réduite", "Il doit des dommages et intérêts forfaitaires"], bonne: 1, expl: "[[1302-3]], al. 2 : la faute ne ferme pas l'action, elle permet de réduire la restitution." },
    { q: "Un accipiens de bonne foi a reçu 3 000 euros indus. Il doit :", choix: ["3 000 euros avec intérêts depuis le paiement", "3 000 euros avec intérêts à compter de la demande", "Seulement ce qui reste sur son compte"], bonne: 1, expl: "[[1352-6]] et [[1352-7]] : la bonne foi, présumée ([[2274]]), reporte le point de départ des intérêts au jour de la demande." },
    { q: "Enrichissement de 12 000 euros, appauvrissement de 8 000 euros, enrichi de bonne foi. Indemnité ?", choix: ["12 000 euros", "10 000 euros", "8 000 euros"], bonne: 2, expl: "[[1303]] : la moindre des deux valeurs. Si l'enrichi était de mauvaise foi : 12 000 euros ([[1303-4]])." },
    { q: "Un prêteur ne peut prouver le prêt faute d'écrit. Peut-il agir sur le fondement de l'enrichissement injustifié ?", choix: ["Non : subsidiarité, l'action ne peut pallier une carence probatoire", "Oui, puisque l'emprunteur s'est enrichi", "Oui, si le montant est inférieur à 1 500 euros"], bonne: 0, expl: "[[1303-3]] ; Civ. 1re, 2 avr. 2009 ; Civ. 1re, 10 janv. 2024." },
    { q: "Une fille a hébergé et soigné sa mère pendant huit ans, bien au-delà de ce qu'impose la piété filiale. Elle peut agir contre la succession :", choix: ["Jamais : le devoir moral justifie tout appauvrissement", "Sur le fondement de l'enrichissement injustifié", "Sur le fondement de la gestion d'affaires uniquement"], bonne: 1, expl: "Civ. 1re, 12 juill. 1994, confirmé en 2025 : l'aide excédant les exigences de la piété filiale n'est plus justifiée par le devoir moral ([[1303-1]])." }
  ]
});

OBL.regimes.push(
  {
    id: "gestion-affaires",
    chapitre: "Quasi-contrats",
    titre: "La gestion d'affaires",
    fondement: ["1301", "1301-1", "1301-2", "1301-3", "1301-4", "1301-5"],
    resume: "Déterminer si celui qui s'est occupé de l'affaire d'autrui sans mandat peut obtenir du maître le remboursement de ses dépenses, l'indemnisation de ses dommages et l'exécution des engagements pris envers des tiers.",
    conditions: [
      { nom: "Absence d'accord et d'opposition du maître", question: "Le maître a-t-il ignoré l'intervention, ou du moins ne s'y est-il pas opposé, sans l'avoir demandée ?", detail: "Accord préalable : mandat. Opposition : pas de gestion d'affaires. La jurisprudence exige aussi que le maître soit hors d'état d'agir (Com., 12 janv. 1999).", preuve: "Au gérant, par tout moyen (fait juridique).", piege: "Si le maître ratifie ensuite, la gestion vaut mandat ([[1301-3]]) : appliquer alors le mandat." },
      { nom: "Intention de gérer l'affaire d'autrui", question: "Le gérant a-t-il agi sciemment pour le compte du maître ?", detail: "Un intérêt personnel concurrent n'exclut pas la qualification ([[1301-4]], al. 1er) mais entraîne une répartition de la charge à proportion des intérêts de chacun (al. 2).", piege: "Celui qui croit gérer sa propre affaire n'est pas gérant d'affaires : penser à l'enrichissement injustifié." },
      { nom: "Absence d'obligation préexistante", question: "Le gérant est-il intervenu « sans y être tenu » ?", detail: "Une obligation légale ou contractuelle d'agir exclut la gestion d'affaires : on applique alors le régime de cette obligation." },
      { nom: "Un acte de gestion", question: "Le gérant a-t-il accompli un acte matériel ou juridique pour le maître ?", detail: "Tout acte, même de disposition ; en pratique, actes conservatoires et d'administration." },
      { nom: "L'utilité de la gestion", question: "L'acte était-il nécessaire et opportun au moment où il a été accompli ?", detail: "Appréciée au jour de l'acte, pas au regard du résultat. Condition des obligations du maître ([[1301-2]] : l'affaire « utilement gérée »).", piege: "Acte inutile mais profitable : pas de gestion d'affaires, mais indemnisation selon l'enrichissement injustifié ([[1301-5]])." }
    ],
    exonerations: [
      { nom: "La faute du gérant", question: "Le gérant a-t-il manqué aux soins d'une personne raisonnable ou abandonné la gestion prématurément ?", detail: "Il répond de ses fautes envers le maître ([[1301-1]], al. 1er), mais le juge peut modérer l'indemnité selon les circonstances : urgence, bénévolat (al. 2).", effet: "Dommages et intérêts dus au maître, éventuellement modérés, qui se compensent avec ce que le maître doit au gérant." },
      { nom: "L'inutilité de la gestion", question: "L'acte était-il inutile ou inopportun ?", detail: "Le maître n'est alors pas tenu au titre de [[1301-2]].", effet: "Le gérant n'obtient que la valeur du profit éventuellement retiré par le maître ([[1301-5]], [[1303]])." }
    ],
    copie: [
      "Qualifier d'abord (mandat ? gestion d'affaires ?), puis vérifier chaque mot de [[1301]] : sans y être tenu, sciemment, utilement, à l'insu ou sans opposition.",
      "Effets : distinguer les dépenses (avec intérêts du jour du paiement), les dommages du gérant, les engagements envers les tiers ; conclure sur l'absence de rémunération."
    ]
  },
  {
    id: "indu-restitution",
    chapitre: "Quasi-contrats",
    titre: "L'action en restitution de l'indu",
    fondement: ["1302", "1302-1", "1302-2", "1302-3", "1352", "1352-7"],
    resume: "Permettre au solvens de récupérer ce qu'il a payé sans le devoir, et mesurer l'étendue de la restitution selon la bonne ou la mauvaise foi de l'accipiens.",
    conditions: [
      { nom: "Un paiement", question: "Le solvens a-t-il exécuté une prestation (somme d'argent, chose, service) au profit de l'accipiens ?", detail: "Paiement au sens juridique : exécution volontaire d'une prestation." },
      { nom: "L'absence de dette", question: "La dette existait-elle, pour ce montant, entre ces deux personnes ?", detail: "Indu objectif (dette inexistante, annulée, trop-perçu) ; indu subjectif actif (faux créancier) ; indu subjectif passif (dette d'autrui).", preuve: "Au solvens ([[1353]]).", piege: "Pas d'indu : obligation naturelle volontairement acquittée ([[1302]], al. 2), dette prescrite ([[2249]]), paiement anticipé d'une dette à terme ([[1305-2]])." },
      { nom: "L'erreur ou la contrainte, pour la seule dette d'autrui", question: "Le solvens a-t-il payé la dette d'autrui ? Si oui, l'a-t-il fait par erreur ou sous la contrainte ?", detail: "Indu objectif et subjectif actif : aucune preuve d'erreur ([[1302-1]] ; Ass. plén., 2 avr. 1993). Indu subjectif passif : erreur ou contrainte exigée ([[1302-2]]).", piege: "Exiger la preuve de l'erreur pour un indu objectif : erreur classique en copie." }
    ],
    exonerations: [
      { nom: "Destruction du titre ou abandon des sûretés", question: "En cas de paiement de la dette d'autrui, le créancier a-t-il, par suite du paiement, détruit son titre ou abandonné ses sûretés ?", detail: "[[1302-2]], al. 1er, seconde phrase.", effet: "Plus d'action contre le créancier ; le solvens agit contre le véritable débiteur ([[1302-2]], al. 2)." },
      { nom: "La faute du solvens", question: "Le paiement procède-t-il d'une négligence du solvens ?", detail: "[[1302-3]], al. 2 ; déjà Civ. 1re, 17 févr. 2010.", effet: "Réduction de la restitution, jamais irrecevabilité." },
      { nom: "La bonne foi de l'accipiens", question: "L'accipiens ignorait-il, en recevant, le caractère indu du paiement ?", detail: "Bonne foi présumée ([[2274]]). Elle limite les accessoires : intérêts, fruits et jouissance dus à compter de la demande seulement ([[1352-7]]) ; si la chose a été revendue, seul le prix est dû ([[1352-2]]).", effet: "Restitution du principal, accessoires réduits." }
    ],
    copie: [
      "Toujours qualifier le type d'indu avant de parler de l'erreur.",
      "Pour l'étendue de la restitution, renvoyer à [[1352]] s. via [[1302-3]] et discuter la bonne ou mauvaise foi au jour de la réception."
    ]
  },
  {
    id: "enrichissement-injustifie",
    chapitre: "Quasi-contrats",
    titre: "L'enrichissement injustifié",
    fondement: ["1303", "1303-1", "1303-2", "1303-3", "1303-4"],
    resume: "Permettre à l'appauvri d'obtenir de l'enrichi une indemnité lorsqu'un transfert de valeur entre leurs patrimoines n'a aucune justification et qu'aucune autre action n'est ouverte.",
    conditions: [
      { nom: "Un enrichissement", question: "Le défendeur a-t-il reçu une plus-value ou évité une dépense ?", detail: "Entendu largement ; évalué tel qu'il subsiste au jour de la demande ([[1303-4]])." },
      { nom: "Un appauvrissement corrélatif", question: "Le demandeur a-t-il subi une perte (dépense, travail non rémunéré, gain manqué) qui est la cause de cet enrichissement ?", detail: "Lien même indirect, par le patrimoine d'un tiers (Req., 15 juin 1892, Boudier).", preuve: "À l'appauvri." },
      { nom: "L'absence de justification", question: "L'enrichissement procède-t-il de l'exécution d'une obligation de l'appauvri ou de son intention libérale ?", detail: "Si oui, il est justifié ([[1303-1]]). Devoir moral : justification, sauf dépassement notable (Civ. 1re, 12 juill. 1994).", piege: "Oublier [[1303-2]], al. 1er : pas d'indemnisation si l'appauvri a agi en vue d'un profit personnel." },
      { nom: "La subsidiarité", question: "L'appauvri dispose-t-il d'une autre action, ou celle-ci se heurte-t-elle à un obstacle de droit ?", detail: "Dans les deux cas, irrecevabilité ([[1303-3]] ; Civ., 2 mars 1915). Obstacle de droit : prescription, défaut de preuve (Civ. 1re, 10 janv. 2024).", piege: "Une action dont les conditions de fond ne sont pas réunies en l'espèce n'est pas « ouverte » : l'enrichissement injustifié reste possible (Civ. 1re, 14 mars 1995)." }
    ],
    exonerations: [
      { nom: "La faute de l'appauvri", question: "L'appauvrissement procède-t-il d'une faute de l'appauvri ?", detail: "[[1303-2]], al. 2.", effet: "Le juge peut modérer l'indemnité." },
      { nom: "La mesure de l'indemnité", question: "Quelle est la moindre des deux valeurs ? L'enrichi est-il de mauvaise foi ?", detail: "[[1303]] et [[1303-4]] : évaluation au jour du jugement.", effet: "Moindre des deux valeurs ; la plus forte en cas de mauvaise foi de l'enrichi." }
    ],
    copie: [
      "Examiner l'enrichissement injustifié en dernier, après avoir écarté contrat, responsabilité, gestion d'affaires et indu : c'est la subsidiarité.",
      "Chiffrer l'indemnité : deux valeurs, la moindre (ou la plus forte si mauvaise foi)."
    ]
  }
);

OBL.cas.push({
  id: "ch18-degat-des-eaux",
  titre: "Le dégât des eaux et le double virement",
  seance: "Chapitre 18",
  regimes: ["gestion-affaires", "indu-restitution", "enrichissement-injustifie"],
  faits: "Le 14 février 2026, Clémence, étudiante, constate que de l'eau ruisselle de son plafond. La fuite provient du chauffe-eau de son voisin du dessus, M. Roux, parti trois mois pour une mission humanitaire dans une zone sans réseau. Avec l'aide de la gardienne, qui détient un double des clés, Clémence entre chez lui, coupe l'eau et fait venir un plombier ; celui-ci remplace le raccord défectueux et établit une facture de 600 euros au nom de M. Roux, que Clémence règle le jour même pour obtenir son intervention. Elle se coupe la main en déplaçant le chauffe-eau (150 euros de frais restés à sa charge). Tant qu'elle y est, elle remplace le vieux robinet de cuisine de M. Roux par un modèle neuf acheté 180 euros ; un expert estime que ce remplacement, qui n'avait aucun lien avec la fuite, a augmenté de 100 euros la valeur de l'appartement. À son retour, le 10 mai 2026, M. Roux refuse de payer quoi que ce soit, et Clémence lui réclame en outre 200 euros pour ses quatre heures de travail. Par ailleurs, le 3 mars 2025, en fin de bail, l'agence qui gérait son ancien studio lui a restitué son dépôt de garantie de 800 euros par deux virements identiques le même jour, à la suite d'une erreur de manipulation. Clémence, qui avait vu les deux virements sur son application bancaire, n'a rien dit. Le 10 septembre 2026, l'agence lui réclame 800 euros avec intérêts depuis le 3 mars 2025.",
  question: "Quelles sommes Clémence peut-elle obtenir de M. Roux ? Que doit-elle à l'agence ?",
  corrige: {
    qualification: "Intervention spontanée dans l'affaire d'un voisin absent : gestion d'affaires (art. 1301), avec un intérêt personnel de la gérante. Remplacement du robinet sans lien avec l'urgence : acte ne répondant pas aux conditions de la gestion d'affaires, relevant de l'enrichissement injustifié (art. 1301-5). Second virement du dépôt de garantie : paiement d'une dette inexistante, indu objectif (art. 1302-1).",
    probleme: "Une personne qui intervient sans mandat, en partie dans son propre intérêt, pour faire cesser un dommage chez un voisin absent peut-elle obtenir de lui le remboursement de ses dépenses, l'indemnisation de sa blessure et une rémunération ? Celui qui a reçu sciemment un paiement en double doit-il le restituer, et avec quels intérêts ?",
    majeure: "Celui qui, sans y être tenu, gère sciemment et utilement l'affaire d'autrui, à l'insu ou sans opposition du maître, est soumis aux obligations d'un mandataire (art. 1301) ; le maître dont l'affaire a été utilement gérée doit remplir les engagements contractés dans son intérêt, rembourser les dépenses faites dans son intérêt et indemniser le gérant des dommages subis en raison de la gestion ; les sommes avancées portent intérêt du jour du paiement (art. 1301-2). L'intérêt personnel du gérant n'exclut pas la gestion d'affaires, la charge se répartissant alors à proportion des intérêts de chacun (art. 1301-4). La gestion d'affaires, désintéressée, n'ouvre droit à aucune rémunération. Si l'action ne répond pas aux conditions de la gestion d'affaires mais profite au maître, celui-ci indemnise le gérant selon les règles de l'enrichissement injustifié (art. 1301-5), soit la moindre des deux valeurs de l'enrichissement et de l'appauvrissement (art. 1303), évaluées au jour du jugement, la plus forte en cas de mauvaise foi de l'enrichi (art. 1303-4). Tout paiement suppose une dette ; celui qui reçoit par erreur ou sciemment ce qui ne lui est pas dû doit le restituer (art. 1302 et 1302-1), sans que le solvens ait à prouver son erreur (Ass. plén., 2 avr. 1993). La restitution suit les articles 1352 à 1352-9 et peut être réduite si le paiement procède d'une faute (art. 1302-3). La restitution d'une somme d'argent inclut les intérêts au taux légal (art. 1352-6), dus à compter du paiement par celui qui a reçu de mauvaise foi, à compter de la demande par celui qui a reçu de bonne foi (art. 1352-7) ; la bonne foi est présumée (art. 2274).",
    mineure: [
      { condition: "Les conditions de la gestion d'affaires", corrige: "M. Roux n'a rien demandé (pas de mandat) et ne s'est pas opposé à l'intervention, qu'il ignorait ; injoignable, il était hors d'état d'agir. Clémence n'était tenue d'aucune obligation d'intervenir. Elle a agi sciemment pour le compte de son voisin, même si elle y avait aussi intérêt, puisque la fuite endommageait son propre plafond : cet intérêt personnel n'exclut pas la qualification (art. 1301-4, al. 1er). Couper l'eau et faire réparer le raccord étaient des actes nécessaires et urgents : la gestion est utile, appréciée au 14 février 2026. La gestion d'affaires est caractérisée pour ces actes." },
      { condition: "Le plombier et les 600 euros", corrige: "La facture du plombier correspond à un engagement contracté dans l'intérêt de M. Roux ; Clémence l'a réglée : c'est une dépense faite dans l'intérêt du maître, qu'il doit rembourser, avec intérêts au taux légal du jour du paiement, le 14 février 2026 (art. 1301-2, al. 2 et 3). Toutefois, l'intervention servait aussi à protéger l'appartement de Clémence : le juge pourra répartir la charge à proportion des intérêts de chacun (art. 1301-4, al. 2). La réparation portant sur l'installation de M. Roux et profitant d'abord à son logement, sa part sera prépondérante." },
      { condition: "La blessure et les 200 euros de « salaire »", corrige: "Les 150 euros de frais médicaux sont un dommage subi en raison de la gestion : M. Roux doit l'indemniser (art. 1301-2, al. 2), sous la même réserve de répartition (art. 1301-4, al. 2). En revanche, les 200 euros réclamés pour son temps sont une rémunération : la gestion d'affaires est désintéressée, aucune rémunération n'est due." },
      { condition: "Le robinet", corrige: "Le remplacement du robinet n'avait aucun lien avec la fuite : il n'était ni nécessaire ni urgent, la condition d'utilité fait défaut. M. Roux en a pourtant profité : l'article 1301-5 renvoie à l'enrichissement injustifié. Appauvrissement de Clémence : 180 euros ; enrichissement de M. Roux : 100 euros ; l'enrichissement ne procède ni d'une obligation de Clémence ni d'une intention libérale, puisqu'elle entend être remboursée (art. 1303-1). Rien n'établit la mauvaise foi de M. Roux, qui n'a rien demandé. L'indemnité est égale à la moindre des deux valeurs, évaluées au jour du jugement : 100 euros (art. 1303 et 1303-4)." },
      { condition: "Le double virement : le principe de la restitution", corrige: "Le second virement de 800 euros ne correspond à aucune dette : l'agence ne devait restituer le dépôt qu'une fois. Il s'agit d'un indu objectif. L'agence n'a pas à prouver son erreur (art. 1302-1). Sa négligence ne ferme pas l'action ; elle permet seulement au juge de réduire la restitution (art. 1302-3, al. 2), ce qui paraît peu justifié ici puisque Clémence, informée dès le premier jour, n'a subi aucun préjudice. L'action, engagée en septembre 2026, n'est pas prescrite (cinq ans : art. 2224)." },
      { condition: "Le double virement : les intérêts", corrige: "La bonne foi est présumée, mais l'agence peut prouver que Clémence a vu les deux virements le jour même et s'est tue : elle savait, en recevant, que la seconde somme n'était pas due. Accipiens de mauvaise foi, elle doit les intérêts au taux légal à compter du paiement, soit du 3 mars 2025 (art. 1352-6 et 1352-7). Si cette preuve n'était pas rapportée, les intérêts ne courraient qu'à compter de la demande du 10 septembre 2026." }
    ],
    conclusion: "Au titre de la gestion d'affaires, M. Roux doit rembourser la facture de 600 euros, avec intérêts depuis le 14 février 2026, et indemniser les 150 euros de frais médicaux, le juge pouvant laisser une part de ces sommes à la charge de Clémence en raison de son intérêt personnel. Il ne doit aucune rémunération. Pour le robinet, il doit 100 euros sur le fondement de l'enrichissement injustifié. Clémence doit restituer 800 euros à l'agence, avec intérêts au taux légal depuis le 3 mars 2025 si sa mauvaise foi est prouvée, depuis le 10 septembre 2026 à défaut."
  }
});

OBL.articles.push(
  {"num": "1300", "code": "C. civ.", "theme": "Notion de quasi-contrat", "texte": "Les quasi-contrats sont des faits purement volontaires dont il résulte un engagement de celui qui en profite sans y avoir droit, et parfois un engagement de leur auteur envers autrui.\n\nLes quasi-contrats régis par le présent sous-titre sont la gestion d'affaire, le paiement de l'indu et l'enrichissement injustifié.", "chapitres": [18], "retenir": "Fait purement volontaire obligeant celui qui en profite sans droit ; trois quasi-contrats nommés, liste ouverte."},
  {"num": "1301", "code": "C. civ.", "theme": "Gestion d'affaires", "texte": "Celui qui, sans y être tenu, gère sciemment et utilement l'affaire d'autrui, à l'insu ou sans opposition du maître de cette affaire, est soumis, dans l'accomplissement des actes juridiques et matériels de sa gestion, à toutes les obligations d'un mandataire.", "chapitres": [18], "retenir": "Sans y être tenu, sciemment et utilement, à l'insu ou sans opposition du maître : obligations d'un mandataire."},
  {"num": "1301-1", "code": "C. civ.", "theme": "Gestion d'affaires", "texte": "Il est tenu d'apporter à la gestion de l'affaire tous les soins d'une personne raisonnable ; il doit poursuivre la gestion jusqu'à ce que le maître de l'affaire ou son successeur soit en mesure d'y pourvoir.\n\nLe juge peut, selon les circonstances, modérer l'indemnité due au maître de l'affaire en raison des fautes ou de la négligence du gérant.", "chapitres": [18], "retenir": "Soins d'une personne raisonnable ; poursuivre la gestion ; indemnité due au maître modérable."},
  {"num": "1301-2", "code": "C. civ.", "theme": "Gestion d'affaires", "texte": "Celui dont l'affaire a été utilement gérée doit remplir les engagements contractés dans son intérêt par le gérant.\n\nIl rembourse au gérant les dépenses faites dans son intérêt et l'indemnise des dommages qu'il a subis en raison de sa gestion.\n\nLes sommes avancées par le gérant portent intérêt du jour du paiement.", "chapitres": [18], "retenir": "Le maître d'une affaire utilement gérée exécute les engagements, rembourse les dépenses (intérêts du jour du paiement) et indemnise les dommages."},
  {"num": "1301-3", "code": "C. civ.", "theme": "Gestion d'affaires", "texte": "La ratification de la gestion par le maître vaut mandat.", "chapitres": [18], "retenir": "La ratification vaut mandat."},
  {"num": "1301-4", "code": "C. civ.", "theme": "Gestion d'affaires", "texte": "L'intérêt personnel du gérant à se charger de l'affaire d'autrui n'exclut pas l'application des règles de la gestion d'affaires.\n\nDans ce cas, la charge des engagements, des dépenses et des dommages se répartit à proportion des intérêts de chacun dans l'affaire commune.", "chapitres": [18], "retenir": "Intérêt personnel du gérant admis ; charge répartie à proportion des intérêts."},
  {"num": "1301-5", "code": "C. civ.", "theme": "Gestion d'affaires", "texte": "Si l'action du gérant ne répond pas aux conditions de la gestion d'affaires mais profite néanmoins au maître de cette affaire, celui-ci doit indemniser le gérant selon les règles de l'enrichissement injustifié.", "chapitres": [18], "retenir": "Gestion irrégulière mais profitable : indemnisation selon l'enrichissement injustifié."},
  {"num": "1302", "code": "C. civ.", "theme": "Paiement de l'indu", "texte": "Tout paiement suppose une dette ; ce qui a été reçu sans être dû est sujet à restitution.\n\nLa restitution n'est pas admise à l'égard des obligations naturelles qui ont été volontairement acquittées.", "chapitres": [18], "retenir": "Tout paiement suppose une dette ; pas de restitution d'une obligation naturelle volontairement acquittée."},
  {"num": "1302-1", "code": "C. civ.", "theme": "Paiement de l'indu", "texte": "Celui qui reçoit par erreur ou sciemment ce qui ne lui est pas dû doit le restituer à celui de qui il l'a indûment reçu.", "chapitres": [18], "retenir": "Restitution de ce qui est reçu par erreur ou sciemment sans être dû : pas de preuve d'erreur."},
  {"num": "1302-2", "code": "C. civ.", "theme": "Paiement de l'indu", "texte": "Celui qui par erreur ou sous la contrainte a acquitté la dette d'autrui peut agir en restitution contre le créancier. Néanmoins ce droit cesse dans le cas où le créancier, par suite du paiement, a détruit son titre ou abandonné les sûretés qui garantissaient sa créance.\n\nLa restitution peut aussi être demandée à celui dont la dette a été acquittée par erreur.", "chapitres": [18], "retenir": "Dette d'autrui payée par erreur ou sous la contrainte : action contre le créancier, sauf titre détruit ou sûretés abandonnées ; ou contre le débiteur."},
  {"num": "1302-3", "code": "C. civ.", "theme": "Paiement de l'indu", "texte": "La restitution est soumise aux règles fixées aux articles 1352 à 1352-9.\n\nElle peut être réduite si le paiement procède d'une faute.", "chapitres": [18], "retenir": "Restitution selon les art. 1352 à 1352-9 ; réduction possible en cas de faute du solvens."},
  {"num": "1303", "code": "C. civ.", "theme": "Enrichissement injustifié", "texte": "En dehors des cas de gestion d'affaires et de paiement de l'indu, celui qui bénéficie d'un enrichissement injustifié au détriment d'autrui doit, à celui qui s'en trouve appauvri, une indemnité égale à la moindre des deux valeurs de l'enrichissement et de l'appauvrissement.", "chapitres": [18], "retenir": "Indemnité égale à la moindre des deux valeurs, hors gestion d'affaires et indu."},
  {"num": "1303-1", "code": "C. civ.", "theme": "Enrichissement injustifié", "texte": "L'enrichissement est injustifié lorsqu'il ne procède ni de l'accomplissement d'une obligation par l'appauvri ni de son intention libérale.", "chapitres": [18], "retenir": "Injustifié : ni exécution d'une obligation de l'appauvri, ni intention libérale."},
  {"num": "1303-2", "code": "C. civ.", "theme": "Enrichissement injustifié", "texte": "Il n'y a pas lieu à indemnisation si l'appauvrissement procède d'un acte accompli par l'appauvri en vue d'un profit personnel.\n\nL'indemnisation peut être modérée par le juge si l'appauvrissement procède d'une faute de l'appauvri.", "chapitres": [18], "retenir": "Pas d'indemnité si l'appauvri a agi en vue d'un profit personnel ; modération en cas de faute."},
  {"num": "1303-3", "code": "C. civ.", "theme": "Enrichissement injustifié", "texte": "L'appauvri n'a pas d'action sur ce fondement lorsqu'une autre action lui est ouverte ou se heurte à un obstacle de droit, tel que la prescription.", "chapitres": [18], "retenir": "Subsidiarité : pas d'action si une autre est ouverte ou se heurte à un obstacle de droit."},
  {"num": "1303-4", "code": "C. civ.", "theme": "Enrichissement injustifié", "texte": "L'appauvrissement constaté au jour de la dépense, et l'enrichissement tel qu'il subsiste au jour de la demande, sont évalués au jour du jugement. En cas de mauvaise foi de l'enrichi, l'indemnité due est égale à la plus forte de ces deux valeurs.", "chapitres": [18], "retenir": "Évaluation au jour du jugement ; la plus forte des deux valeurs si l'enrichi est de mauvaise foi."},
  {"num": "1352", "code": "C. civ.", "theme": "Restitutions", "texte": "La restitution d'une chose autre que d'une somme d'argent a lieu en nature ou, lorsque cela est impossible, en valeur, estimée au jour de la restitution.", "chapitres": [18], "retenir": "Restitution en nature ou, à défaut, en valeur estimée au jour de la restitution."},
  {"num": "1352-1", "code": "C. civ.", "theme": "Restitutions", "texte": "Celui qui restitue la chose répond des dégradations et détériorations qui en ont diminué la valeur, à moins qu'il ne soit de bonne foi et que celles-ci ne soient pas dues à sa faute.", "chapitres": [18], "retenir": "Le restituant répond des dégradations, sauf bonne foi et absence de faute."},
  {"num": "1352-2", "code": "C. civ.", "theme": "Restitutions", "texte": "Celui qui l'ayant reçue de bonne foi a vendu la chose ne doit restituer que le prix de la vente.\n\nS'il l'a reçue de mauvaise foi, il en doit la valeur au jour de la restitution lorsqu'elle est supérieure au prix.", "chapitres": [18], "retenir": "Chose revendue : le prix si bonne foi ; la valeur au jour de la restitution si elle est supérieure, en cas de mauvaise foi."},
  {"num": "1352-7", "code": "C. civ.", "theme": "Restitutions", "texte": "Celui qui a reçu de mauvaise foi doit les intérêts, les fruits qu'il a perçus ou la valeur de la jouissance à compter du paiement. Celui qui a reçu de bonne foi ne les doit qu'à compter du jour de la demande.", "chapitres": [18], "retenir": "Intérêts, fruits, jouissance : dès le paiement si mauvaise foi, dès la demande si bonne foi."},
  {"num": "2249", "code": "C. civ.", "theme": "Paiement de l'indu", "texte": "Le paiement effectué pour éteindre une dette ne peut être répété au seul motif que le délai de prescription était expiré.", "chapitres": [18], "retenir": "Le paiement d'une dette prescrite ne peut être répété pour ce seul motif."},
  {"num": "2274", "code": "C. civ.", "theme": "Bonne foi", "texte": "La bonne foi est toujours présumée, et c'est à celui qui allègue la mauvaise foi à la prouver.", "chapitres": [18], "retenir": "La bonne foi est présumée ; la mauvaise foi doit être prouvée."},
  {"num": "1984", "code": "C. civ.", "theme": "Mandat", "texte": "Le mandat ou procuration est un acte par lequel une personne donne à une autre le pouvoir de faire quelque chose pour le mandant et en son nom.\n\nLe contrat ne se forme que par l'acceptation du mandataire.", "chapitres": [18], "retenir": "Définition du mandat."}
);
