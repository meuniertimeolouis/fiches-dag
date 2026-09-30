/* Chapitre 10 — L'inexécution du contrat : les sanctions visant à obtenir l'exécution
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 10,
  intro: "Depuis 2016, [[1217]] dresse la liste des sanctions ouvertes au créancier victime d'une inexécution : **exception d'inexécution**, **exécution forcée en nature**, **réduction du prix**, **résolution**, **réparation**. Aucune hiérarchie entre elles ; celles qui sont compatibles se cumulent, et des dommages et intérêts peuvent toujours s'y ajouter. Ce chapitre traite du préalable (la **mise en demeure**), de l'obstacle (la **force majeure**) et des trois sanctions qui tendent à **obtenir l'exécution** ou à maintenir le contrat. La résolution et la responsabilité contractuelle relèvent du chapitre 11.",
  sections: [
    {
      titre: "Le cadre : l'article 1217 et la mise en demeure",
      contenu: [
        { schema: { type: "arbre", titre: "Les sanctions de l'inexécution ([[1217]])", racine: { t: "Inexécution (totale ou imparfaite)", d: "hors force majeure ([[1218]])", enfants: [
          { t: "Obtenir l'exécution ou maintenir le contrat (chapitre 10)", enfants: [
            { t: "Exception d'inexécution", d: "suspendre sa propre prestation ([[1219]], [[1220]])" },
            { t: "Exécution forcée en nature", d: "par le débiteur ([[1221]]) ou par un tiers ([[1222]])" },
            { t: "Réduction du prix", d: "exécution imparfaite acceptée ([[1223]])" }
          ] },
          { t: "Sortir du contrat ou être indemnisé (chapitre 11)", enfants: [
            { t: "Résolution", d: "clause, notification ou juge ([[1224]])" },
            { t: "Réparation", d: "responsabilité contractuelle ([[1231-1]])" }
          ] }
        ] } } },
        { p: "**Cumul** : « les sanctions qui ne sont pas incompatibles peuvent être cumulées ; des dommages et intérêts peuvent toujours s'y ajouter » ([[1217]], dernier al.). On ne peut pas demander à la fois l'exécution forcée et la résolution d'une même obligation ; on peut réclamer l'exécution forcée **et** des dommages et intérêts pour le retard." },
        { arret: { ref: "Civ. 1re, 18 déc. 2024, n° 24-14.750", apport: "« Un créancier qui peut faire usage d'une sanction unilatérale doit pouvoir demander au juge de prononcer cette sanction. » Toute sanction que le créancier peut mettre en œuvre seul (réduction du prix, exception d'inexécution, résolution par notification) peut donc aussi être demandée en justice." } },
        { h: "La mise en demeure" },
        { def: { terme: "Mise en demeure", texte: "acte par lequel le créancier **interpelle solennellement** le débiteur pour qu'il exécute. Elle constate officiellement le retard et ouvre la voie à la plupart des sanctions ([[1344]] s.)." } },
        { liste: [
          "**Forme libre** : sommation par commissaire de justice, ou tout acte portant **interpellation suffisante** ; une simple lettre peut suffire si elle exprime clairement l'exigence d'exécuter ([[1344]]). En pratique : lettre recommandée avec accusé de réception, pour la preuve.",
          "L'envoi compte : le **défaut de réception effective** par le débiteur n'affecte pas la validité de la mise en demeure (Civ. 1re, 20 janv. 2021, n° 19-20.680).",
          "**Dispense conventionnelle** : le contrat peut prévoir que la **seule exigibilité** de l'obligation vaut mise en demeure ([[1344]]).",
          "**Dispense de fait** : inutile lorsque l'inexécution est **définitive** (obligation de ne pas faire violée, prestation qui n'a plus d'intérêt passé une date, dommage déjà réalisé) : Ch. mixte, 6 juill. 2007 ; aujourd'hui [[1231]].",
          "**Effets** : point de départ des **intérêts moratoires** au taux légal, sans preuve d'un préjudice ([[1344-1]]) ; **transfert des risques** de la chose sur le débiteur d'une obligation de délivrer ([[1344-2]])."
        ] },
        { schema: { type: "tableau", titre: "Mise en demeure : exigée ou non selon la sanction", colonnes: ["Sanction", "Mise en demeure préalable ?", "Texte"], lignes: [
          ["Exception d'inexécution", "**Non**", "[[1219]]"],
          ["Exception pour risque d'inexécution", "Non, mais **notification** de la suspension dans les meilleurs délais", "[[1220]]"],
          ["Exécution forcée par le débiteur ou par un tiers", "**Oui**", "[[1221]], [[1222]]"],
          ["Réduction du prix (prix non payé)", "**Oui**, puis notification de la décision", "[[1223]]"],
          ["Clause résolutoire", "Oui, sauf stipulation contraire ; elle doit **viser la clause**", "[[1225]]"],
          ["Résolution par notification", "Oui, sauf urgence ; elle doit **annoncer la résolution**", "[[1226]]"],
          ["Dommages et intérêts", "Oui, **sauf inexécution définitive**", "[[1231]]"],
          ["Clause pénale", "Oui, sauf inexécution définitive", "[[1231-5]]"]
        ] } }
      ]
    },
    {
      titre: "La force majeure",
      contenu: [
        { p: "Avant de choisir une sanction, vérifier que l'inexécution n'est pas due à un cas de force majeure : si c'est le cas, le débiteur est libéré ou son obligation suspendue, et les sanctions de [[1217]] ne jouent pas contre lui." },
        { def: { terme: "Force majeure contractuelle ([[1218]], al. 1er)", texte: "événement **échappant au contrôle du débiteur**, qui **ne pouvait être raisonnablement prévu** lors de la conclusion du contrat et dont les **effets ne peuvent être évités par des mesures appropriées**, qui **empêche** l'exécution. On retrouve le triptyque classique : extériorité, imprévisibilité, irrésistibilité." } },
        { schema: { type: "tableau", titre: "Les trois caractères, relus par l'article 1218", colonnes: ["Caractère", "Formule de [[1218]]", "Appréciation", "Illustrations"], lignes: [
          ["**Irrésistibilité**", "effets qui ne peuvent être évités par des mesures appropriées", "In abstracto, au jour de l'**inexécution**. L'exécution doit être empêchée, pas seulement rendue plus coûteuse", "Jamais pour le débiteur d'une **somme d'argent** (Com., 16 sept. 2014, n° 13-20.306) ; pas si l'on pouvait s'approvisionner ailleurs"],
          ["**Imprévisibilité**", "ne pouvait être raisonnablement prévu", "Au jour de la **conclusion** du contrat, par référence à une personne raisonnable", "Épidémie de covid-19 : invocable pour un contrat conclu avant son apparition, pas pour un contrat conclu après mars 2020"],
          ["**Extériorité**", "échappant au contrôle du débiteur", "Critère recentré sur l'absence de maîtrise, plutôt que sur l'extériorité absolue", "Maladie imprévisible et irrésistible du débiteur (Ass. plén., 14 avr. 2006) ; grève : distinction classique cause externe / cause interne, brouillée par certains arrêts"]
        ] } },
        { schema: { type: "frise", titre: "L'imprévisibilité est-elle nécessaire ?", evenements: [
          { date: "Tradition", t: "Cumul exigé", d: "un événement prévisible n'est jamais un cas de force majeure (ex. : vol à main armée pour un transporteur de fonds)" },
          { date: "1994-2002", t: "Assouplissement par la 1re chambre civile", d: "Civ. 1re, 9 mars 1994 : l'irrésistibilité suffit si la prévision ne permettait pas d'empêcher les effets et que le débiteur a pris toutes les mesures requises ; Civ. 1re, 6 nov. 2002 : « la seule irrésistibilité » suffit" },
          { date: "14 avr. 2006", t: "Ass. plén. (deux arrêts)", d: "retour à la conception classique : événement imprévisible lors de la conclusion du contrat et irrésistible dans son exécution ; ralliement de la 1re chambre civile (Civ. 1re, 30 oct. 2008)" },
          { date: "2016", t: "Article 1218", d: "consacre imprévisibilité, irrésistibilité et absence de contrôle ; la référence aux « mesures appropriées » pourrait assouplir l'appréciation de l'irrésistibilité" }
        ] } },
        { attention: "Seul le **débiteur** peut invoquer la force majeure. Le **créancier** qui n'a pas pu profiter de la contrepartie (curiste hospitalisé, commerçant dont le local a été fermé pendant la crise sanitaire) ne peut obtenir ni la résolution ni la suspension de son obligation sur ce fondement (Civ. 1re, 25 nov. 2020, n° 19-21.060 ; Civ. 3e, 30 juin 2022, n° 21-20.190 : pas de suspension des loyers)." },
        { h: "Les effets ([[1218]], al. 2)" },
        { liste: [
          "**Empêchement temporaire** : l'exécution est **suspendue** ; aucune sanction ne peut être exercée pendant l'événement, puis le débiteur doit s'exécuter. Exception : si le retard justifie la résolution (fleurs d'un mariage qu'une tempête empêche de livrer à la date).",
          "**Empêchement définitif** : le contrat est **résolu de plein droit**, sans juge, et les parties sont libérées dans les conditions de [[1351]] et [[1351-1]] ; les prestations déjà exécutées donnent lieu à **restitution**.",
          "Libération seulement **à due concurrence** de l'impossibilité ([[1351]]).",
          "**Pas de libération** si le débiteur a **accepté de supporter** la force majeure (clause de garantie) ou s'il avait été **préalablement mis en demeure** ([[1351]]) ; le débiteur mis en demeure est toutefois libéré s'il prouve que la chose aurait péri de la même façon si l'obligation avait été exécutée ([[1351-1]])."
        ] },
        { p: "Une incertitude subsiste : la chambre commerciale a admis une résolution **judiciaire** dans une hypothèse qui relevait en substance de la force majeure (Com., 18 janv. 2023, n° 21-16.812), alors que [[1218]] prévoit une résolution de plein droit." }
      ]
    },
    {
      titre: "L'exception d'inexécution",
      contenu: [
        { def: { terme: "Exception d'inexécution (*exceptio non adimpleti contractus*)", texte: "moyen de défense permettant à une partie de **refuser d'exécuter** sa propre obligation, même exigible, tant que l'autre n'exécute pas la sienne ([[1219]]). Admise d'abord pour la vente ([[1612]]) puis généralisée par la jurisprudence, elle est codifiée depuis 2016." } },
        { h: "L'exception de droit commun ([[1219]])" },
        { liste: [
          "**Des obligations interdépendantes** : condition non écrite mais inhérente au mécanisme. Elle fait défaut si le créancier a accordé un **terme** ou si l'obligation est conditionnelle : le vendeur qui a consenti un délai de paiement ne peut pas refuser de livrer ([[1612]]).",
          "**Une inexécution suffisamment grave** : la jurisprudence antérieure raisonnait en termes de **bonne foi** et de **proportionnalité** ; les solutions sont reconduites. Le locataire ne peut suspendre le paiement des loyers que si le défaut de réparation rend les lieux **impropres à l'usage** (Civ. 3e, 18 sept. 2025, n° 23-24.005, dans la continuité d'une jurisprudence ancienne).",
          "**Aucune formalité** : ni juge, ni mise en demeure préalable. C'est une voie de justice privée, exercée aux risques de celui qui l'invoque si l'inexécution n'était pas assez grave."
        ] },
        { h: "L'exception pour risque d'inexécution ([[1220]])" },
        { p: "Innovation de 2016 : une partie peut suspendre **par anticipation** l'exécution de son obligation « dès lors qu'il est manifeste que son cocontractant ne s'exécutera pas à l'échéance » et que les conséquences de cette inexécution sont suffisamment graves **pour elle**. La suspension doit être **notifiée dans les meilleurs délais**." },
        { schema: { type: "tableau", titre: "Exception de droit commun ou exception préventive", colonnes: ["", "[[1219]]", "[[1220]]"], lignes: [
          ["Moment", "Inexécution **déjà constatée**", "Inexécution **future** mais manifeste"],
          ["Ce que fait le créancier", "Refuse d'exécuter son obligation exigible", "Suspend l'exécution de son obligation"],
          ["Gravité", "Inexécution suffisamment grave", "Conséquences suffisamment graves **pour le créancier**"],
          ["Formalité", "Aucune", "**Notification** dans les meilleurs délais"],
          ["Risque", "Condamnation si l'exception était injustifiée", "Idem, et la preuve du caractère « manifeste » est délicate"]
        ] } },
        { h: "Les effets" },
        { p: "L'exception **suspend** sans éteindre : les obligations restent dues. Si le débiteur s'exécute, le contrat reprend son cours ; sinon, le créancier doit passer à une autre sanction (exécution forcée, résolution). C'est un **moyen de pression temporaire**, jamais une sortie du contrat." }
      ]
    },
    {
      titre: "L'exécution forcée en nature",
      contenu: [
        { def: { terme: "Exécution forcée en nature", texte: "mise en œuvre d'un moyen de contrainte pour obtenir **la prestation promise elle-même**. Elle ne peut porter **que sur l'obligation prévue au contrat** : elle se distingue de la réparation en nature, qui peut prendre une autre forme (Civ. 1re, 18 déc. 2024, n° 24-14.750 : pas d'injonction de livrer de l'eau en bouteille à la place de l'eau du robinet)." } },
        { h: "Par le débiteur ([[1221]])" },
        { p: "Principe : après **mise en demeure**, le créancier peut poursuivre l'exécution en nature, **quelle que soit la gravité** de l'inexécution. Pour les **sommes d'argent**, c'est le mode normal (saisies). Deux exceptions seulement." },
        { schema: { type: "etapes", titre: "L'exécution forcée en nature, pas à pas", etapes: [
          { t: "1. Inexécution", d: "totale ou partielle, sans exigence de gravité ; pas de force majeure" },
          { t: "2. Mise en demeure", d: "préalable obligatoire ([[1221]], [[1222]])" },
          { t: "3. Obligation prévue au contrat", d: "on ne peut exiger qu'elle, pas un équivalent (Civ. 1re, 18 déc. 2024)" },
          { t: "4. Pas d'impossibilité", d: "matérielle, juridique ou morale (liberté du débiteur)" },
          { t: "5. Pas de disproportion manifeste", d: "entre le coût pour le débiteur **de bonne foi** et l'intérêt pour le créancier" },
          { t: "6. Moyens", d: "injonction du juge, souvent sous **astreinte** ; ou exécution par un tiers ([[1222]])" }
        ] } },
        { h: "Première exception : l'impossibilité" },
        { liste: [
          "L'impossibilité de [[1221]] **n'est pas la force majeure** : il suffit de constater que l'exécution ne peut pas être ordonnée (restrictions d'eau imposées par le préfet au distributeur : Civ. 1re, 18 déc. 2024).",
          "**Obligations de ne pas faire** : la violation d'une clause de non-concurrence est souvent définitive ; seuls les dommages et intérêts restent. En revanche, la construction édifiée en violation d'une obligation de ne pas construire peut être démolie.",
          "**Obligations de faire** : l'ancien article 1142 (« toute obligation de faire ou de ne pas faire se résout en dommages et intérêts ») a été vidé de sa portée. Il n'excluait plus que les prestations **strictement personnelles** mettant en jeu la liberté du débiteur (le peintre qui refuse de livrer un portrait : Civ., 14 mars 1900, Whistler). Puis : « la partie envers laquelle un engagement contractuel n'a point été exécuté a la faculté de forcer l'autre à l'exécution de la convention lorsque celle-ci est possible » (Civ. 1re, 16 janv. 2007). [[1221]] consacre ce principe."
        ] },
        { h: "Seconde exception : la disproportion manifeste" },
        { p: "Nouveauté de 2016, d'inspiration européenne et critiquée comme une atteinte à la force obligatoire. Deux conditions : une disproportion **manifeste** entre le coût pour le débiteur et l'intérêt pour le créancier ; un débiteur **de bonne foi** (ajout de la loi du 20 avril 2018, interprétatif, donc applicable aux contrats conclus depuis le 1er octobre 2016). Le débiteur qui n'exécute pas délibérément en pariant sur le coût d'une démolition ne peut pas s'en prévaloir." },
        { arret: { ref: "Civ. 3e, 13 juill. 2022, n° 21-16.407", apport: "Application anticipée de l'exigence de proportionnalité à un contrat antérieur à 2016 : la démolition d'un immeuble construit en violation du cahier des charges d'un lotissement est refusée lorsqu'elle serait disproportionnée au regard du préjudice ; le créancier obtient des dommages et intérêts." } },
        { arret: { ref: "Civ. 3e, 6 juill. 2023, n° 22-10.884", apport: "Le juge saisi d'une demande de démolition-reconstruction pour non-conformités doit rechercher, si on le lui demande, s'il existe une disproportion manifeste, que la demande soit présentée comme une exécution forcée ou comme une réparation égale au coût de la démolition-reconstruction." } },
        { h: "L'astreinte" },
        { p: "Moyen de pression indirect : le juge condamne le débiteur à payer une somme par jour de retard tant qu'il n'exécute pas. Tout juge peut l'ordonner, **même d'office** ([[L131-1]]). Elle est **indépendante des dommages et intérêts**, provisoire sauf précision contraire ([[L131-2]]) ; lors de la liquidation, l'astreinte provisoire tient compte du comportement du débiteur, et toute astreinte est supprimée si l'inexécution provient d'une **cause étrangère** ([[L131-4]]). Elle permet de contraindre sans porter atteinte physique à la liberté du débiteur." },
        { h: "Par un tiers ([[1222]])" },
        { liste: [
          "**Faire exécuter** l'obligation par un tiers : faculté **unilatérale**, sans autorisation du juge (contrairement à l'ancien droit), après **mise en demeure**, dans un **délai** et à un **coût raisonnables**. Le créancier réclame ensuite au débiteur le **remboursement** des sommes engagées.",
          "**Détruire** ce qui a été fait en violation de l'obligation : suppose l'**autorisation préalable du juge** (démolition d'un mur construit malgré une servitude conventionnelle de ne pas bâtir).",
          "Le créancier peut aussi demander **en justice** que le débiteur **avance** les sommes nécessaires ([[1222]], al. 2).",
          "Le « coût raisonnable » de [[1222]] n'est pas la « disproportion manifeste » de [[1221]] : on contrôle seulement que la dépense reste mesurée."
        ] }
      ]
    },
    {
      titre: "La réduction du prix",
      contenu: [
        { def: { terme: "Réduction du prix ([[1223]])", texte: "sanction de l'**exécution imparfaite** : le créancier conserve la prestation défectueuse ou incomplète et paie un prix **proportionnellement réduit**. Sorte de « résolution partielle unilatérale ». Seuls quelques textes spéciaux la prévoyaient avant 2016 (vente : action estimatoire)." } },
        { h: "Conditions" },
        { liste: [
          "Une **exécution imparfaite** (travaux faits à moitié ou mal faits). En cas d'inexécution totale, on se tourne vers les autres sanctions.",
          "Un créancier qui **accepte** cette exécution imparfaite : condition implicite, puisqu'il choisit de conserver la prestation.",
          "Une **mise en demeure** préalable."
        ] },
        { schema: { type: "tableau", titre: "Deux régimes selon que le prix a été payé ou non (contrats conclus depuis le 1er octobre 2018)", colonnes: ["", "Prix non encore payé (en tout ou partie)", "Prix déjà payé"], lignes: [
          ["Texte", "[[1223]], al. 1er", "[[1223]], al. 2"],
          ["Procédure", "Mise en demeure, puis **notification** au débiteur, dans les meilleurs délais, de la décision de réduire le prix", "**Accord** des parties ou, à défaut, **demande au juge**"],
          ["Montant", "Réduction **proportionnelle** à l'imperfection", "Fixé par accord ou par le juge"],
          ["Rôle du débiteur", "Son accord n'est pas une condition ; s'il accepte, il doit le faire **par écrit** et ne pourra plus contester", "Peut refuser : le juge tranche"],
          ["Juge", "Peut **toujours** être saisi (Civ. 1re, 18 déc. 2024)", "Saisi à défaut d'accord"]
        ] } },
        { attention: "Droit transitoire : pour les contrats conclus entre le 1er octobre 2016 et le 30 septembre 2018, l'ancienne rédaction s'applique (le créancier « sollicite » la réduction s'il a payé, « notifie » sa décision s'il n'a pas payé), avec les incertitudes qu'elle comportait sur le rôle du juge." },
        { arret: { ref: "Civ. 1re, 18 déc. 2024, n° 24-14.750 (sécheresse à Mayotte)", apport: "Cassation de l'arrêt qui refusait d'examiner une demande de réduction du prix au motif que le prix n'était pas encore payé : « la réduction du prix peut, en toute hypothèse, être demandée en justice »." } }
      ]
    }
  ],
  retenir: [
    "[[1217]] : cinq sanctions, sans hiérarchie, cumulables si compatibles ; des dommages et intérêts peuvent toujours s'y ajouter.",
    "Mise en demeure ([[1344]]) : forme libre, interpellation suffisante ; exigée pour l'exécution forcée, la réduction du prix, la résolution extrajudiciaire et les dommages et intérêts (sauf inexécution définitive) ; pas pour l'exception d'inexécution.",
    "Force majeure ([[1218]]) : absence de contrôle, imprévisibilité à la conclusion, irrésistibilité ; suspension si temporaire, résolution de plein droit si définitive ; jamais invocable par le créancier (Civ. 1re, 25 nov. 2020), ni par le débiteur d'une somme d'argent.",
    "Exception d'inexécution ([[1219]]) : obligations interdépendantes, inexécution suffisamment grave, sans formalité ; exception préventive ([[1220]]) : inexécution manifeste à venir, notification.",
    "Exécution forcée ([[1221]]) : principe, après mise en demeure, sauf impossibilité (≠ force majeure) ou disproportion manifeste pour un débiteur de bonne foi ; seulement sur l'obligation prévue au contrat (Civ. 1re, 18 déc. 2024).",
    "Exécution par un tiers ([[1222]]) : faire exécuter sans juge, détruire avec autorisation du juge, remboursement ou avance des frais.",
    "Réduction du prix ([[1223]]) : exécution imparfaite ; notification si le prix n'est pas payé, accord ou juge s'il l'est ; le juge peut toujours être saisi."
  ],
  articles: ["1217", "1218", "1219", "1220", "1221", "1222", "1223", "1344", "1344-1", "1344-2", "1351", "1351-1", "1612", "L131-1", "L131-2", "L131-4"],
  regimes: ["force-majeure-contrat", "exception-inexecution", "execution-forcee-nature"],
  cas: ["ch10-verriere"],
  quiz: [
    { q: "Pour opposer l'exception d'inexécution, le créancier doit :", choix: ["Mettre préalablement le débiteur en demeure", "Justifier d'une inexécution suffisamment grave d'une obligation interdépendante", "Obtenir l'autorisation du juge"], bonne: 1, expl: "[[1219]] : aucune formalité, mais une inexécution suffisamment grave ; l'interdépendance est inhérente au mécanisme." },
    { q: "Un restaurateur n'a pas pu exploiter son fonds pendant une fermeture administrative. Peut-il invoquer la force majeure pour suspendre le paiement de ses loyers ?", choix: ["Non : le créancier qui n'a pu profiter de la contrepartie ne peut pas invoquer la force majeure", "Oui, si la fermeture était imprévisible", "Oui, la force majeure profite aux deux parties"], bonne: 0, expl: "Civ. 1re, 25 nov. 2020, n° 19-21.060 ; Civ. 3e, 30 juin 2022, n° 21-20.190." },
    { q: "Une tempête empêche pendant trois jours un transporteur de livrer ; la livraison garde son intérêt pour le client. Conséquence ?", choix: ["Le contrat est résolu de plein droit", "Le transporteur doit des dommages et intérêts", "L'obligation est suspendue, puis doit être exécutée"], bonne: 2, expl: "[[1218]], al. 2 : empêchement temporaire, suspension, sauf si le retard justifie la résolution." },
    { q: "Le débiteur d'une somme d'argent peut-il s'exonérer par la force majeure ?", choix: ["Oui, en cas de crise économique", "Non, l'exécution d'une obligation monétaire reste toujours possible", "Oui, s'il prouve sa bonne foi"], bonne: 1, expl: "Com., 16 sept. 2014, n° 13-20.306 : le débiteur d'une obligation de payer une somme d'argent ne peut s'exonérer en invoquant la force majeure." },
    { q: "Un constructeur a volontairement réduit la hauteur des plafonds pour économiser. La démolition coûterait vingt fois le préjudice du maître de l'ouvrage. L'exception de disproportion joue-t-elle ?", choix: ["Oui, dès que la disproportion est manifeste", "Oui, mais seulement si le créancier y consent", "Non, le débiteur n'est pas de bonne foi"], bonne: 2, expl: "[[1221]] exige un débiteur « de bonne foi » (loi du 20 avril 2018)." },
    { q: "Le créancier veut faire terminer par une autre entreprise le chantier abandonné. Il doit :", choix: ["Mettre le débiteur en demeure, puis agir dans un délai et à un coût raisonnables", "Obtenir l'autorisation préalable du juge", "Résoudre d'abord le contrat"], bonne: 0, expl: "[[1222]] : seule la destruction exige l'autorisation du juge." },
    { q: "Un distributeur d'eau ne peut plus fournir l'eau au robinet. L'abonné peut-il obtenir, au titre de l'exécution forcée, la livraison d'eau en bouteille ?", choix: ["Oui, c'est une exécution par équivalent", "Non, l'exécution forcée ne porte que sur l'obligation prévue au contrat", "Oui, si l'impossibilité ne résulte pas d'une force majeure"], bonne: 1, expl: "Civ. 1re, 18 déc. 2024, n° 24-14.750." },
    { q: "Le client n'a pas encore payé des travaux mal exécutés. Peut-il demander au juge une réduction du prix ?", choix: ["Non, il doit d'abord payer", "Non, il doit seulement notifier sa décision", "Oui, la réduction du prix peut en toute hypothèse être demandée en justice"], bonne: 2, expl: "Civ. 1re, 18 déc. 2024 : le juge peut être saisi même si le prix n'est pas payé." },
    { q: "La mise en demeure adressée par lettre recommandée n'a pas été retirée par le débiteur. Elle est :", choix: ["Valable", "Nulle faute de réception", "Valable seulement si elle a été délivrée par commissaire de justice"], bonne: 0, expl: "Civ. 1re, 20 janv. 2021, n° 19-20.680 ; [[1344]] : forme libre." },
    { q: "Le débiteur a accepté par écrit la réduction du prix notifiée par le créancier. Peut-il la contester ensuite devant le juge ?", choix: ["Oui, dans un délai de deux mois", "Non, son acceptation écrite fait obstacle à une contestation ultérieure", "Oui, si la réduction n'est pas proportionnelle"], bonne: 1, expl: "[[1223]], al. 1er : l'acceptation doit être écrite ; elle vaut accord et ferme la contestation." }
  ]
});

OBL.regimes.push({
  id: "force-majeure-contrat",
  chapitre: "Inexécution du contrat",
  titre: "La force majeure contractuelle",
  fondement: ["1218", "1351", "1351-1"],
  resume: "Vérifier si l'événement invoqué par le débiteur le libère (empêchement définitif) ou suspend son obligation (empêchement temporaire), ce qui écarte les sanctions de l'inexécution.",
  conditions: [
    { nom: "Un empêchement d'exécuter", question: "L'événement rend-il l'exécution impossible, et pas seulement plus coûteuse ou plus difficile ?", detail: "L'irrésistibilité s'apprécie au jour de l'inexécution : les effets ne pouvaient-ils être évités par des mesures appropriées (remplacer un salarié, s'approvisionner ailleurs) ?", preuve: "Charge du débiteur qui invoque la force majeure.", piege: "Le débiteur d'une somme d'argent ne peut jamais invoquer la force majeure (Com., 16 sept. 2014)." },
    { nom: "Un événement échappant au contrôle du débiteur", question: "Le débiteur avait-il la maîtrise de l'événement ?", detail: "Critère d'absence de maîtrise plutôt que d'extériorité absolue : la maladie du débiteur peut convenir (Ass. plén., 14 avr. 2006) ; le fait d'un préposé, d'un sous-traitant ou le vice de la chose utilisée ne conviennent pas.", piege: "Une désorganisation interne (absences de personnel non remplacées) n'échappe pas au contrôle de l'entreprise." },
    { nom: "Un événement imprévisible à la conclusion", question: "Une personne raisonnable pouvait-elle prévoir l'événement au jour de la conclusion du contrat ?", detail: "Date d'appréciation : la conclusion, pas l'inexécution. Un contrat conclu en pleine épidémie ne permet pas d'invoquer l'épidémie.", piege: "Confondre les dates d'appréciation de l'imprévisibilité (conclusion) et de l'irrésistibilité (inexécution)." },
    { nom: "La nature de l'empêchement", question: "L'empêchement est-il temporaire ou définitif ?", detail: "Temporaire : suspension, sauf si le retard justifie la résolution. Définitif : résolution de plein droit et libération des parties ([[1218]], al. 2), restitutions des prestations exécutées." }
  ],
  exonerations: [
    { nom: "Clause de garantie", question: "Le débiteur a-t-il accepté de prendre la force majeure à sa charge ?", detail: "[[1351]] réserve l'hypothèse où le débiteur « a convenu de s'en charger » ; clause valable.", effet: "Le débiteur reste tenu malgré l'événement." },
    { nom: "Mise en demeure préalable", question: "Le débiteur avait-il déjà été mis en demeure avant l'événement ?", detail: "Le débiteur en retard supporte les risques ([[1344-2]], [[1351]]), sauf à prouver que la chose aurait péri de la même manière si l'obligation avait été exécutée ([[1351-1]]).", effet: "Pas de libération, sauf preuve de [[1351-1]] (le débiteur cède alors ses droits et actions sur la chose)." },
    { nom: "Qualité de créancier", question: "Celui qui invoque la force majeure est-il en réalité le créancier privé de la contrepartie ?", detail: "Civ. 1re, 25 nov. 2020 ; Civ. 3e, 30 juin 2022 : il ne peut obtenir ni résolution ni suspension sur ce fondement.", effet: "Moyen inopérant." }
  ],
  copie: [
    "Toujours commencer par la force majeure : si elle est retenue, les sanctions de [[1217]] ne jouent pas contre le débiteur.",
    "Citer [[1218]] en entier, puis examiner chaque critère avec les faits ; conclure sur l'effet (suspension ou résolution de plein droit)."
  ]
});

OBL.regimes.push({
  id: "exception-inexecution",
  chapitre: "Inexécution du contrat",
  titre: "L'exception d'inexécution (et l'exception pour risque d'inexécution)",
  fondement: ["1219", "1220"],
  resume: "Permettre à une partie de refuser ou de suspendre sa propre prestation tant que l'autre n'exécute pas la sienne, sans passer par le juge.",
  conditions: [
    { nom: "Des obligations interdépendantes", question: "Les deux obligations sont-elles la contrepartie l'une de l'autre et doivent-elles s'exécuter trait pour trait ?", detail: "Typiquement dans un contrat synallagmatique. Pas d'exception si le créancier a accordé un terme au débiteur (vente à crédit : [[1612]]) ou si l'obligation est conditionnelle.", piege: "Refuser de payer le prix alors qu'on avait soi-même accepté de payer d'avance." },
    { nom: "Une inexécution par l'autre partie", question: "L'autre partie n'a-t-elle pas exécuté son obligation (ou est-il manifeste qu'elle ne l'exécutera pas à l'échéance, pour [[1220]]) ?", detail: "[[1219]] : inexécution constatée. [[1220]] : risque manifeste d'inexécution future.", preuve: "Charge de celui qui invoque l'exception." },
    { nom: "Une gravité suffisante", question: "L'inexécution est-elle suffisamment grave au regard de l'obligation qu'on refuse d'exécuter ?", detail: "Exigence de proportionnalité et de bonne foi. Le locataire ne peut suspendre les loyers que si les lieux sont inutilisables, pas pour un simple défaut d'entretien.", piege: "Suspendre une obligation principale pour un manquement à une obligation accessoire." },
    { nom: "Les formalités", question: "Faut-il une mise en demeure ou une notification ?", detail: "[[1219]] : aucune formalité, ni juge ni mise en demeure. [[1220]] : notification de la suspension dans les meilleurs délais.", piege: "Ne pas oublier la notification pour l'exception préventive." }
  ],
  exonerations: [],
  copie: [
    "Rappeler que l'exception suspend sans éteindre : si le blocage dure, envisager exécution forcée ou résolution.",
    "Préciser que celui qui l'invoque à tort engage sa responsabilité (c'est lui qui devient défaillant)."
  ]
});

OBL.regimes.push({
  id: "execution-forcee-nature",
  chapitre: "Inexécution du contrat",
  titre: "L'exécution forcée en nature",
  fondement: ["1221", "1222", "L131-1"],
  resume: "Obtenir la prestation promise elle-même, par la contrainte exercée sur le débiteur ou par l'intervention d'un tiers aux frais du débiteur.",
  conditions: [
    { nom: "Une inexécution", question: "Le débiteur n'a-t-il pas exécuté, ou mal exécuté, son obligation, en dehors de toute force majeure ?", detail: "Aucune exigence de gravité, à la différence de l'exception d'inexécution et de la résolution." },
    { nom: "Une mise en demeure", question: "Le créancier a-t-il mis le débiteur en demeure ?", detail: "Préalable exigé par [[1221]] comme par [[1222]] ; forme libre ([[1344]]).", preuve: "Conserver l'accusé de réception." },
    { nom: "L'obligation prévue au contrat", question: "Le créancier demande-t-il bien l'exécution de la prestation convenue, et non un équivalent ?", detail: "Civ. 1re, 18 déc. 2024, n° 24-14.750 : l'exécution forcée, distincte de la réparation en nature, ne peut porter que sur l'obligation prévue au contrat.", piege: "Demander une prestation de remplacement au titre de l'exécution forcée : c'est une réparation en nature." },
    { nom: "Pour l'exécution par un tiers ([[1222]])", question: "Le créancier agit-il dans un délai et à un coût raisonnables ? Veut-il détruire ce qui a été fait ?", detail: "Faire exécuter : sans juge, puis remboursement. Détruire : autorisation préalable du juge. Avance des frais : demande en justice." }
  ],
  exonerations: [
    { nom: "Impossibilité", question: "L'exécution est-elle matériellement, juridiquement ou moralement impossible ?", detail: "Distincte de la force majeure (Civ. 1re, 18 déc. 2024). Prestation strictement personnelle mettant en jeu la liberté du débiteur ; inexécution définitive d'une obligation de ne pas faire.", effet: "Pas d'exécution forcée : le créancier se tourne vers les dommages et intérêts ou la résolution." },
    { nom: "Disproportion manifeste", question: "Le coût de l'exécution pour le débiteur est-il manifestement disproportionné par rapport à l'intérêt du créancier, et le débiteur est-il de bonne foi ?", detail: "Deux conditions cumulatives ([[1221]]). Étendue à la demande de dommages et intérêts égale au coût d'une démolition-reconstruction (Civ. 3e, 6 juill. 2023, n° 22-10.884).", effet: "Exécution forcée refusée ; allocation de dommages et intérêts." }
  ],
  copie: [
    "Si le créancier veut l'exécution « au plus vite », penser à [[1222]] : faire exécuter par un tiers aux frais du débiteur, sans juge.",
    "Proposer l'astreinte ([[L131-1]]) pour rendre l'injonction efficace."
  ]
});

OBL.cas.push({
  id: "ch10-verriere",
  titre: "La verrière qui n'arrive pas",
  seance: "Chapitre 10",
  regimes: ["force-majeure-contrat", "exception-inexecution", "execution-forcee-nature"],
  faits: "Le 3 février 2026, Mme Rivière conclut avec la société Atelier Vernet un contrat de rénovation de sa cuisine : pose d'un carrelage et d'une verrière d'atelier, pour 18 000 euros. Le prix est payable en trois fois : 40 % au démarrage du chantier, 30 % le 15 avril 2026, le solde à la réception. Les travaux doivent être achevés le 30 avril 2026. Mme Rivière paie la première échéance le 2 mars. Le carrelage est posé fin mars, mais une partie des carreaux est posée de travers, ce que l'expert amiable chiffre à 10 % de la valeur du poste. Du 8 au 10 avril, une tempête empêche tout accès au chantier. Ensuite, l'entreprise ne revient plus : elle explique que son fournisseur habituel de profilés en acier a cessé de les fabriquer et que ce cas de force majeure la dispense de poser la verrière. Des profilés équivalents sont disponibles chez d'autres fournisseurs, à un prix supérieur de 15 %. Mme Rivière, qui n'a pas payé l'échéance du 15 avril, veut obtenir au plus vite l'installation de la verrière, sans attendre l'issue d'un procès, et ne pas payer le carrelage au prix convenu.",
  question: "Nous sommes le 4 mai 2026. Que peut faire Mme Rivière ?",
  corrige: {
    qualification: "Contrat d'entreprise (synallagmatique, à exécution échelonnée) : obligations de faire de l'entrepreneur (carrelage, verrière), obligation de payer du maître de l'ouvrage. Inexécution totale (verrière) et exécution imparfaite (carrelage).",
    probleme: "L'entrepreneur peut-il invoquer la force majeure ? Mme Rivière peut-elle suspendre son paiement, faire poser la verrière par un tiers aux frais de l'entreprise et obtenir une réduction du prix du carrelage ?",
    majeure: "La force majeure suppose un événement échappant au contrôle du débiteur, raisonnablement imprévisible lors de la conclusion et dont les effets ne peuvent être évités par des mesures appropriées ; temporaire, elle suspend l'obligation ; définitive, elle résout le contrat de plein droit (art. 1218). Une partie peut refuser d'exécuter son obligation exigible si l'autre n'exécute pas la sienne et si cette inexécution est suffisamment grave (art. 1219), sans mise en demeure. Après mise en demeure, le créancier peut, dans un délai et à un coût raisonnables, faire exécuter lui-même l'obligation et en demander le remboursement au débiteur, ou demander en justice que le débiteur avance les sommes (art. 1222) ; il peut aussi poursuivre l'exécution en nature, sauf impossibilité ou disproportion manifeste (art. 1221). En cas d'exécution imparfaite, le créancier qui n'a pas encore payé tout ou partie du prix peut, après mise en demeure, notifier sa décision de réduire proportionnellement le prix (art. 1223, al. 1er) ; la réduction peut toujours être demandée au juge (Civ. 1re, 18 déc. 2024, n° 24-14.750). Les sanctions compatibles se cumulent et des dommages et intérêts peuvent s'y ajouter (art. 1217).",
    mineure: [
      { condition: "La force majeure", corrige: "La tempête du 8 au 10 avril échappe au contrôle de l'entreprise et l'a empêchée d'accéder au chantier ; mais l'empêchement n'a été que temporaire : il a seulement suspendu l'exécution pendant trois jours (art. 1218, al. 2) et ne justifie pas l'abandon du chantier. La cessation de fabrication chez un fournisseur n'est pas irrésistible : des profilés équivalents existent ailleurs ; un surcoût de 15 % rend l'exécution plus onéreuse, pas impossible. La force majeure est écartée : l'inexécution est imputable à l'entreprise." },
      { condition: "L'échéance du 15 avril (exception d'inexécution)", corrige: "Les obligations sont interdépendantes : l'échéancier suit l'avancement du chantier et aucun terme n'a été accordé à l'entreprise pour la verrière au-delà du 30 avril. L'entreprise a abandonné le chantier et refuse de poser la verrière, ce qui est une inexécution suffisamment grave. Mme Rivière peut refuser de payer l'échéance de 5 400 euros (30 % de 18 000 euros) sans mise en demeure (art. 1219). L'exception ne fait que suspendre sa dette : elle restera due si l'entreprise s'exécute." },
      { condition: "La verrière (exécution forcée)", corrige: "Mme Rivière veut une exécution rapide sans procès : l'article 1222 est adapté. Elle doit d'abord mettre l'entreprise en demeure, par exemple par lettre recommandée, de poser la verrière dans un délai précis. Faute d'exécution, elle peut la faire poser par une autre entreprise, dans un délai et à un coût raisonnables (un devis au prix du marché), puis réclamer le remboursement à Atelier Vernet, ou demander en justice que celle-ci avance les sommes. À défaut, elle pourrait demander au juge d'ordonner l'exécution sous astreinte (art. 1221 ; C. proc. civ. exéc., art. L. 131-1) : l'exécution n'est ni impossible ni d'un coût manifestement disproportionné." },
      { condition: "Le carrelage (réduction du prix)", corrige: "L'exécution est imparfaite et Mme Rivière accepte de conserver le carrelage. Elle n'a pas encore payé tout le prix : après mise en demeure, elle peut notifier dans les meilleurs délais sa décision de réduire le prix de manière proportionnelle, par exemple de 10 % de la valeur du poste carrelage selon l'expertise (art. 1223, al. 1er). Si l'entreprise accepte, elle doit le faire par écrit ; si elle conteste, le juge pourra être saisi, y compris par Mme Rivière elle-même (Civ. 1re, 18 déc. 2024)." },
      { condition: "Le cumul", corrige: "Ces sanctions portent sur des obligations différentes et sont compatibles : exception d'inexécution sur l'échéance, exécution par un tiers pour la verrière, réduction du prix pour le carrelage. Mme Rivière peut y ajouter des dommages et intérêts pour le retard (art. 1217, dernier al.), en veillant à ne pas être indemnisée deux fois du même préjudice." }
    ],
    conclusion: "La force majeure ne libère pas l'entreprise. Mme Rivière peut suspendre le paiement de l'échéance du 15 avril, faire poser la verrière par un tiers après une mise en demeure restée sans effet en réclamant le remboursement (ou l'avance judiciaire) des frais, et réduire proportionnellement le prix du carrelage par notification, sous le contrôle éventuel du juge."
  }
});

OBL.articles.push(
  {"num": "1217", "code": "C. civ.", "theme": "Sanctions de l'inexécution", "texte": "La partie envers laquelle l'engagement n'a pas été exécuté, ou l'a été imparfaitement, peut :\n\n- refuser d'exécuter ou suspendre l'exécution de sa propre obligation ;\n\n- poursuivre l'exécution forcée en nature de l'obligation ;\n\n- obtenir une réduction du prix ;\n\n- provoquer la résolution du contrat ;\n\n- demander réparation des conséquences de l'inexécution.\n\nLes sanctions qui ne sont pas incompatibles peuvent être cumulées ; des dommages et intérêts peuvent toujours s'y ajouter.", "chapitres": [10], "retenir": "Cinq sanctions sans hiérarchie ; cumul des sanctions compatibles ; dommages et intérêts toujours possibles."},
  {"num": "1218", "code": "C. civ.", "theme": "Force majeure", "texte": "Il y a force majeure en matière contractuelle lorsqu'un événement échappant au contrôle du débiteur, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, empêche l'exécution de son obligation par le débiteur.\n\nSi l'empêchement est temporaire, l'exécution de l'obligation est suspendue à moins que le retard qui en résulterait ne justifie la résolution du contrat. Si l'empêchement est définitif, le contrat est résolu de plein droit et les parties sont libérées de leurs obligations dans les conditions prévues aux articles 1351 et 1351-1.", "chapitres": [10], "retenir": "Événement échappant au contrôle, imprévisible à la conclusion, aux effets inévitables ; suspension si temporaire, résolution de plein droit si définitif."},
  {"num": "1219", "code": "C. civ.", "theme": "Exception d'inexécution", "texte": "Une partie peut refuser d'exécuter son obligation, alors même que celle-ci est exigible, si l'autre n'exécute pas la sienne et si cette inexécution est suffisamment grave.", "chapitres": [10], "retenir": "Refus d'exécuter une obligation exigible si l'inexécution de l'autre est suffisamment grave."},
  {"num": "1220", "code": "C. civ.", "theme": "Exception d'inexécution", "texte": "Une partie peut suspendre l'exécution de son obligation dès lors qu'il est manifeste que son cocontractant ne s'exécutera pas à l'échéance et que les conséquences de cette inexécution sont suffisamment graves pour elle. Cette suspension doit être notifiée dans les meilleurs délais.", "chapitres": [10], "retenir": "Suspension par anticipation si l'inexécution future est manifeste et grave ; notification dans les meilleurs délais."},
  {"num": "1221", "code": "C. civ.", "theme": "Exécution forcée", "texte": "Le créancier d'une obligation peut, après mise en demeure, en poursuivre l'exécution en nature sauf si cette exécution est impossible ou s'il existe une disproportion manifeste entre son coût pour le débiteur de bonne foi et son intérêt pour le créancier.", "chapitres": [10], "retenir": "Après mise en demeure, sauf impossibilité ou disproportion manifeste pour le débiteur de bonne foi."},
  {"num": "1222", "code": "C. civ.", "theme": "Exécution forcée", "texte": "Après mise en demeure, le créancier peut aussi, dans un délai et à un coût raisonnables, faire exécuter lui-même l'obligation ou, sur autorisation préalable du juge, détruire ce qui a été fait en violation de celle-ci. Il peut demander au débiteur le remboursement des sommes engagées à cette fin.\n\nIl peut aussi demander en justice que le débiteur avance les sommes nécessaires à cette exécution ou à cette destruction.", "chapitres": [10], "retenir": "Faire exécuter par un tiers (sans juge) ou détruire (avec autorisation du juge) ; remboursement ou avance des frais."},
  {"num": "1223", "code": "C. civ.", "theme": "Réduction du prix", "texte": "En cas d'exécution imparfaite de la prestation, le créancier peut, après mise en demeure et s'il n'a pas encore payé tout ou partie de la prestation, notifier dans les meilleurs délais au débiteur sa décision d'en réduire de manière proportionnelle le prix. L'acceptation par le débiteur de la décision de réduction de prix du créancier doit être rédigée par écrit.\n\nSi le créancier a déjà payé, à défaut d'accord entre les parties, il peut demander au juge la réduction de prix.", "chapitres": [10], "retenir": "Notification si le prix n'est pas payé ; accord ou juge s'il l'est ; acceptation écrite du débiteur."},
  {"num": "1344", "code": "C. civ.", "theme": "Mise en demeure", "texte": "Le débiteur est mis en demeure de payer soit par une sommation ou un acte portant interpellation suffisante, soit, si le contrat le prévoit, par la seule exigibilité de l'obligation.", "chapitres": [10], "retenir": "Sommation ou acte portant interpellation suffisante ; ou seule exigibilité si le contrat le prévoit."},
  {"num": "1344-1", "code": "C. civ.", "theme": "Mise en demeure", "texte": "La mise en demeure de payer une obligation de somme d'argent fait courir l'intérêt moratoire, au taux légal, sans que le créancier soit tenu de justifier d'un préjudice.", "chapitres": [10], "retenir": "Fait courir l'intérêt moratoire au taux légal sans preuve d'un préjudice."},
  {"num": "1344-2", "code": "C. civ.", "theme": "Mise en demeure", "texte": "La mise en demeure de délivrer une chose met les risques à la charge du débiteur, s'ils n'y sont déjà.", "chapitres": [10], "retenir": "Met les risques de la chose à délivrer à la charge du débiteur."},
  {"num": "1351", "code": "C. civ.", "theme": "Force majeure", "texte": "L'impossibilité d'exécuter la prestation libère le débiteur à due concurrence lorsqu'elle procède d'un cas de force majeure et qu'elle est définitive, à moins qu'il n'ait convenu de s'en charger ou qu'il ait été préalablement mis en demeure.", "chapitres": [10], "retenir": "Libération à due concurrence si l'impossibilité est définitive, sauf clause de garantie ou mise en demeure préalable."},
  {"num": "1351-1", "code": "C. civ.", "theme": "Force majeure", "texte": "Lorsque l'impossibilité d'exécuter résulte de la perte de la chose due, le débiteur mis en demeure est néanmoins libéré s'il prouve que la perte se serait pareillement produite si l'obligation avait été exécutée.\n\nIl est cependant tenu de céder à son créancier les droits et actions attachés à la chose.", "chapitres": [10], "retenir": "Le débiteur mis en demeure est libéré s'il prouve que la chose aurait péri de toute façon."},
  {"num": "1612", "code": "C. civ.", "theme": "Exception d'inexécution", "texte": "Le vendeur n'est pas tenu de délivrer la chose, si l'acheteur n'en paye pas le prix, et que le vendeur ne lui ait pas accordé un délai pour le paiement.", "chapitres": [10], "retenir": "Le vendeur peut retenir la chose tant que le prix n'est pas payé, sauf délai de paiement accordé."},
  {"num": "L131-1", "code": "C. proc. civ. exéc.", "theme": "Astreinte", "texte": "Tout juge peut, même d'office, ordonner une astreinte pour assurer l'exécution de sa décision.\n\nLe juge de l'exécution peut assortir d'une astreinte une décision rendue par un autre juge si les circonstances en font apparaître la nécessité.", "chapitres": [10], "retenir": "Tout juge peut, même d'office, ordonner une astreinte.", "aff": "L. 131-1"},
  {"num": "L131-2", "code": "C. proc. civ. exéc.", "theme": "Astreinte", "texte": "L'astreinte est indépendante des dommages-intérêts.\n\nL'astreinte est provisoire ou définitive. L'astreinte est considérée comme provisoire, à moins que le juge n'ait précisé son caractère définitif.\n\nUne astreinte définitive ne peut être ordonnée qu'après le prononcé d'une astreinte provisoire et pour une durée que le juge détermine. Si l'une de ces conditions n'a pas été respectée, l'astreinte est liquidée comme une astreinte provisoire.", "chapitres": [10], "retenir": "Indépendante des dommages-intérêts ; provisoire sauf précision contraire.", "aff": "L. 131-2"},
  {"num": "L131-4", "code": "C. proc. civ. exéc.", "theme": "Astreinte", "texte": "Le montant de l'astreinte provisoire est liquidé en tenant compte du comportement de celui à qui l'injonction a été adressée et des difficultés qu'il a rencontrées pour l'exécuter.\n\nLe taux de l'astreinte définitive ne peut jamais être modifié lors de sa liquidation.\n\nL'astreinte provisoire ou définitive est supprimée en tout ou partie s'il est établi que l'inexécution ou le retard dans l'exécution de l'injonction du juge provient, en tout ou partie, d'une cause étrangère.", "chapitres": [10], "retenir": "Liquidation selon le comportement du débiteur ; suppression en cas de cause étrangère.", "aff": "L. 131-4"}
);
