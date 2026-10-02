/* Formule logique de chaque régime : « Pour que… il faut la réunion des conditions suivantes : C1 + C2 + … → si elles sont réunies, alors… ; sinon… ».
   Lu par reviser/app.js (formuleHtml). Les conditions sont reprises de OBL.regimes (seules les conditions cumulatives, selon logique.js),
   sauf si `conds` les remplace. pour = fin de la phrase « Pour que … » ; alors / sinon = conséquences ; reserve = exceptions et exonérations ;
   plus = conditions supplémentaires (niveau 2) et leur conséquence. Les renvois [[n]] ouvrent l'article du Code civil. */
(function () {
  var F = window.OBL_FORMULES = {};

  F["pourparlers"] = {
    pour: "la rupture de pourparlers engage la responsabilité de son auteur",
    alors: "l'auteur de la rupture répare les frais exposés et les pertes subies, à l'exclusion de la perte des avantages attendus du contrat non conclu et de la perte de chance de les obtenir ([[1112]], al. 2).",
    sinon: "la liberté de rompre les pourparlers prévaut ([[1112]], al. 1er) : aucune réparation n'est due."
  };
  F["pacte-preference"] = {
    pour: "la violation d'un pacte de préférence soit sanctionnée",
    alors: "le bénéficiaire obtient la réparation du préjudice subi ([[1123]], al. 2).",
    plusLabel: "Pour obtenir en outre la nullité du contrat conclu avec le tiers ou sa propre substitution au tiers, il faut ajouter :",
    plusAlors: "le bénéficiaire peut agir en nullité ou demander au juge de le substituer au tiers dans le contrat conclu ([[1123]], al. 2).",
    sinon: "sans pacte valable ou sans contrat conclu avec un tiers, aucune sanction ; si le tiers ignorait le pacte ou l'intention du bénéficiaire de s'en prévaloir, la nullité et la substitution sont exclues, la réparation demeurant possible."
  };
  F["promesse-unilaterale"] = {
    pour: "le bénéficiaire obtienne la formation du contrat promis malgré la rétractation du promettant",
    alors: "le contrat promis est formé : la rétractation du promettant pendant le délai d'option est sans effet et le bénéficiaire peut en obtenir l'exécution forcée ([[1124]], al. 2).",
    sinon: "sans promesse valable ou sans levée de l'option dans le délai, la promesse est caduque : le contrat promis n'est pas formé.",
    reserve: "une stipulation contraire des parties (sanction limitée à des dommages et intérêts) ; le contrat conclu avec un tiers qui ignorait la promesse n'est pas nul ([[1124]], al. 3)."
  };
  F["erreur"] = {
    pour: "le contrat soit annulé pour erreur",
    alors: "le contrat est nul de nullité relative ([[1131]]), avec effet rétroactif ([[1178]], al. 2).",
    sinon: "l'erreur est sans effet sur la validité : le contrat demeure et doit être exécuté.",
    reserve: "l'acceptation d'un aléa ([[1133]], al. 3), l'existence d'un vice caché (seule la garantie des vices cachés s'applique) ; l'action en nullité se prescrit par cinq ans ([[1144]], [[2224]])."
  };
  F["dol"] = {
    pour: "le contrat soit annulé pour dol",
    alors: "le contrat est nul de nullité relative ([[1131]]) et la victime peut, en outre, demander réparation de son dommage ([[1178]], al. 4).",
    sinon: "le contrat demeure valable ; le manquement non intentionnel au devoir d'information n'ouvre droit qu'à des dommages et intérêts ([[1112-1]]).",
    reserve: "la prescription de l'action en nullité (cinq ans, [[1144]], [[2224]])."
  };
  F["violence-dependance"] = {
    pour: "le contrat soit annulé pour violence",
    alors: "le contrat est nul de nullité relative ([[1131]]), même si la violence émane d'un tiers ([[1142]]).",
    sinon: "le contrat demeure valable ; la menace d'une voie de droit n'est pas une violence ([[1141]]), sauf détournement ou avantage manifestement excessif.",
    reserve: "la prescription de l'action en nullité ([[1144]])."
  };
  F["clause-obligation-essentielle"] = {
    pour: "une clause soit réputée non écrite pour avoir privé de sa substance l'obligation essentielle",
    alors: "la clause est réputée non écrite ([[1170]]) : le contrat subsiste, privé de cette clause.",
    sinon: "la clause est valable et reçoit application (un plafond non dérisoire ne vide pas l'obligation de sa substance : Com., 29 juin 2010, Faurecia), sous réserve du contrôle des clauses abusives ([[1171]]) et de la faute lourde ou dolosive."
  };
  F["action-nullite"] = {
    pour: "l'action en nullité soit recevable et permette d'anéantir le contrat",
    alors: "le juge prononce la nullité ([[1178]], al. 1er) : le contrat est censé n'avoir jamais existé et les prestations s'effacent par des restitutions ([[1178]], al. 2).",
    sinon: "l'action est irrecevable (défaut de qualité) ou prescrite : le contrat est consolidé ; seule demeure l'exception de nullité, tant que le contrat n'a pas été exécuté ([[1185]]).",
    reserve: "la confirmation, pour la seule nullité relative ([[1182]]) ; l'action interrogatoire ([[1183]])."
  };
  F["imprevision"] = {
    pour: "le contrat puisse être renégocié, révisé ou supprimé pour imprévision",
    alors: "la partie peut demander la renégociation ; en cas de refus ou d'échec, les parties peuvent convenir de la résolution ou demander ensemble au juge d'adapter le contrat ; à défaut d'accord dans un délai raisonnable, le juge peut, à la demande d'une partie, le réviser ou y mettre fin ([[1195]]).",
    sinon: "le contrat s'exécute tel quel (force obligatoire, [[1103]]) ; le débiteur doit poursuivre l'exécution pendant la renégociation ([[1195]], al. 1er)."
  };
  F["tiers-victime"] = {
    pour: "un tiers puisse obtenir réparation d'un manquement contractuel",
    alors: "le tiers engage la responsabilité délictuelle du contractant ([[1240]]) en invoquant le seul manquement contractuel, sans prouver de faute détachable du contrat (Ass. plén., 6 oct. 2006, Boot shop ; Ass. plén., 13 janv. 2020, Bois rouge).",
    sinon: "l'action est rejetée ; le tiers qui dispose d'une action contractuelle (sous-acquéreur) doit l'exercer, sans pouvoir opter.",
    reserve: "les conditions et limites du contrat peuvent être opposées au tiers (Com., 3 juill. 2024, n° 21-14.947)."
  };
  F["force-majeure-contrat"] = {
    pour: "l'événement invoqué libère le débiteur ou suspende son obligation",
    alors: "si l'empêchement est temporaire, l'exécution est suspendue, sauf si le retard justifie la résolution ; s'il est définitif, le contrat est résolu de plein droit et les parties sont libérées ([[1218]], al. 2 ; [[1351]], [[1351-1]]).",
    sinon: "le débiteur reste tenu : l'inexécution est sanctionnée ([[1217]]).",
    reserve: "la clause par laquelle le débiteur a convenu de se charger de l'événement ([[1351]]) ; le débiteur déjà mis en demeure supporte les risques ([[1344-2]]). Le créancier ne peut, lui, invoquer la force majeure pour obtenir ni suspension ni résolution."
  };
  F["exception-inexecution"] = {
    pour: "une partie puisse suspendre sa propre prestation sans passer par le juge",
    alors: "elle refuse d'exécuter, alors même que son obligation est exigible, tant que l'autre n'exécute pas la sienne ([[1219]]) ; en cas de risque manifeste d'inexécution, elle suspend son exécution après notification ([[1220]]).",
    sinon: "son refus constitue lui-même une inexécution fautive, qui engage sa responsabilité contractuelle."
  };
  F["execution-forcee-nature"] = {
    pour: "le créancier puisse contraindre le débiteur à exécuter en nature",
    alors: "le créancier obtient la prestation promise elle-même, par la contrainte exercée sur le débiteur (astreinte, art. L. 131-1 du Code des procédures civiles d'exécution) ou par l'intervention d'un tiers aux frais du débiteur ([[1222]]).",
    sinon: "l'exécution forcée est refusée : le créancier se tourne vers les autres sanctions de l'inexécution ([[1217]]) : exception d'inexécution, réduction du prix, résolution, dommages et intérêts.",
    reserve: "l'impossibilité de l'exécution ; la disproportion manifeste entre son coût pour le débiteur de bonne foi et son intérêt pour le créancier ([[1221]])."
  };
  F["resolution-clause"] = {
    pour: "le contrat soit résolu de plein droit par l'effet d'une clause résolutoire",
    alors: "le contrat est résolu sans intervention du juge ([[1225]]), dans les conditions prévues par la clause ([[1229]], al. 2).",
    sinon: "la résolution n'est pas acquise : le créancier recourt à la notification ([[1226]]) ou au juge ([[1227]]).",
    reserve: "la force majeure du débiteur ; les textes spéciaux qui interdisent la clause ou permettent au juge de suspendre ses effets."
  };
  F["resolution-notification"] = {
    pour: "le créancier puisse résoudre seul le contrat par notification",
    alors: "le contrat est résolu à la date de réception de la notification par le débiteur ([[1229]], al. 2).",
    sinon: "la rupture est faite aux risques et périls du créancier ([[1226]]) : si le juge estime l'inexécution insuffisamment grave, le contrat peut être jugé toujours en vigueur et le créancier engage sa responsabilité."
  };
  F["responsabilite-contractuelle"] = {
    pour: "le débiteur soit condamné à des dommages et intérêts pour inexécution",
    alors: "il répare la perte éprouvée et le gain manqué ([[1231-2]]), dans la limite du préjudice prévisible lors de la conclusion, sauf faute lourde ou dolosive ([[1231-3]]), et du préjudice direct ([[1231-4]]).",
    sinon: "aucune condamnation : le débiteur est exonéré ou la responsabilité contractuelle est écartée.",
    reserve: "l'absence de faute (pour une obligation de moyens seulement) ; la force majeure ([[1231-1]], [[1218]]) ; le fait du créancier ou d'un tiers ; une clause limitative ou exonératoire valable (écartée en cas de faute lourde ou dolosive, ou si elle prive de sa substance l'obligation essentielle, [[1170]])."
  };
  F["nature-responsabilite"] = {
    pour: "la responsabilité contractuelle soit seule applicable",
    conds: [
      "Absence de régime spécial indifférent au contrat (loi du 5 juillet 1985, produits défectueux, accident médical)",
      "Un contrat valable",
      "Entre le responsable et la victime",
      "Un dommage né de l'inexécution d'une obligation contractuelle"
    ],
    alors: "la victime agit sur les articles [[1231]] et suivants, à l'exclusion de la responsabilité délictuelle (non-cumul : elle ne peut pas choisir).",
    sinon: "la victime agit sur le terrain délictuel ([[1240]] et suivants) ou sur le régime spécial qui s'impose (loi du 5 juillet 1985, [[1245]] et suivants)."
  };
  F["faute-1240"] = {
    pour: "la responsabilité du fait personnel soit engagée",
    alors: "l'auteur répare intégralement le dommage ([[1240]], [[1241]]), quel que soit son discernement ([[414-3]]).",
    sinon: "aucune responsabilité sur ce fondement : l'action est rejetée.",
    reserve: "la force majeure (exonération totale) ; le fait d'un tiers ou de la victime (exonération partielle, totale s'ils présentent les caractères de la force majeure) ; le fait justificatif pénal ; le consentement de la victime pour les seuls dommages aux biens."
  };
  F["faute-sportive"] = {
    pour: "un sportif blessé par un autre obtienne réparation",
    alors: "le sportif fautif répare le dommage ([[1240]]) ; l'acceptation des risques n'y fait pas obstacle face à un geste contraire aux règles du jeu.",
    sinon: "le geste conforme aux règles n'est pas fautif : aucune réparation, le dommage relevant d'un risque normalement accepté."
  };
  F["choses-1242-al1"] = {
    pour: "le gardien d'une chose soit responsable de plein droit",
    alors: "le gardien répond du dommage causé par la chose ([[1242]], al. 1er) ; la preuve de son absence de faute est sans effet.",
    sinon: "pas de responsabilité du fait des choses : la victime se tourne vers un régime spécial ou vers l'article [[1240]].",
    reserve: "la force majeure ou le fait de la victime, cause exclusive (exonération totale) ; la faute de la victime (exonération partielle) ; le fait d'un tiers n'exonère que s'il a les caractères de la force majeure."
  };
  F["choses-animaux"] = {
    pour: "le propriétaire ou l'utilisateur d'un animal soit responsable",
    alors: "il répond de plein droit du dommage causé par l'animal, même égaré ou échappé ([[1243]]).",
    sinon: "pas de responsabilité sur ce fondement (par exemple pour un animal sauvage en liberté).",
    reserve: "la cause étrangère : force majeure (exonération totale) ou faute de la victime (exonération partielle)."
  };
  F["choses-ruine"] = {
    pour: "le propriétaire d'un bâtiment soit responsable de sa ruine",
    alors: "le propriétaire répond du dommage causé par la ruine ([[1244]]), même si le défaut est imputable à un locataire ou à un constructeur (recours ensuite).",
    sinon: "pas de responsabilité sur ce fondement : si le dommage n'est pas dû à une ruine, on revient à l'article [[1242]], al. 1er.",
    reserve: "la force majeure (exonération totale) ; la faute de la victime (exonération partielle)."
  };
  F["autrui-parents"] = {
    pour: "les parents répondent du dommage causé par leur enfant mineur",
    alors: "les parents sont responsables de plein droit et solidairement du dommage causé par leur enfant mineur ([[1242]], al. 4).",
    sinon: "la responsabilité des parents n'est pas engagée : la victime agit contre le tiers à qui l'enfant a été confié par décision ([[1242]], al. 1er, Blieck) ou contre l'enfant ([[1240]]).",
    reserve: "la force majeure (exonération totale) ; la faute de la victime ou le fait d'un tiers (exonération partielle). L'absence de faute des parents n'exonère pas (Civ. 2e, 19 févr. 1997, Bertrand)."
  };
  F["autrui-commettant"] = {
    pour: "le commettant réponde du dommage causé par son préposé",
    alors: "le commettant est responsable de plein droit ([[1242]], al. 5) ; le préposé qui a agi dans les limites de sa mission n'est pas personnellement responsable envers la victime (Ass. plén., 25 févr. 2000, Costedoat).",
    sinon: "le commettant n'est pas responsable : le préposé a commis un abus de fonctions (hors fonctions, sans autorisation, à des fins étrangères à ses attributions : Ass. plén., 19 mai 1988).",
    reserve: "la force majeure (exonération totale) ; la faute de la victime ou le fait d'un tiers (droit commun). L'absence de faute du commettant n'exonère pas."
  };
  F["autrui-blieck"] = {
    pour: "une personne réponde du dommage causé par celui dont elle organise et contrôle l'activité ou le mode de vie",
    alors: "elle est responsable de plein droit du dommage ([[1242]], al. 1er ; Ass. plén., 29 mars 1991, Blieck).",
    sinon: "pas de responsabilité du fait d'autrui sur ce fondement : la victime agit contre l'auteur ([[1240]]) ou sur le régime spécial applicable.",
    reserve: "la cause étrangère (droit commun). L'absence de faute est inopérante."
  };
  F["badinter-indemnisation"] = {
    pour: "la victime soit indemnisée sur le fondement de la loi du 5 juillet 1985",
    alors: "elle est indemnisée par le conducteur ou le gardien du véhicule impliqué, dans la mesure que fixent sa qualité et la nature de son dommage (loi du 5 juill. 1985, art. 3 à 6).",
    sinon: "la loi ne s'applique pas : la victime agit sur le droit commun ([[1240]] et suivants), notamment contre un piéton ou un cycliste.",
    reserve: "la force majeure et le fait du tiers sont inopposables à la victime (art. 2) ; sa faute limite ou exclut l'indemnisation selon sa qualité (art. 3 à 5)."
  };
  F["produits-defectueux"] = {
    pour: "le producteur soit responsable du défaut de son produit",
    alors: "il répond de plein droit du dommage causé par le défaut de sécurité du produit, qu'il soit ou non lié par un contrat avec la victime ([[1245]]).",
    sinon: "pas de responsabilité sur ce fondement ; la victime conserve ses autres actions : responsabilité contractuelle ou extracontractuelle, régime spécial ([[1245-17]]).",
    reserve: "les causes de l'article [[1245-10]], dont le risque de développement ; la faute de la victime réduit ou supprime l'indemnité ([[1245-12]]) ; le fait d'un tiers est sans effet envers la victime ([[1245-13]])."
  };
  F["troubles-voisinage"] = {
    pour: "le responsable d'un trouble de voisinage soit tenu de le réparer",
    alors: "il répond de plein droit du dommage qui résulte du trouble, sans qu'aucune faute ne soit à prouver ([[1253]], al. 1er).",
    sinon: "pas de réparation sur ce fondement : le trouble n'excède pas les inconvénients normaux du voisinage ou le défendeur n'est pas visé par le texte.",
    reserve: "la préoccupation ([[1253]], al. 2) ; la cause étrangère."
  };
  F["prejudice-reparable"] = {
    pour: "un préjudice soit réparable",
    alors: "il est rattaché à un poste de préjudice et réparé intégralement, évalué in concreto au jour du jugement.",
    sinon: "le préjudice n'est pas indemnisé (éventuel, indirect, illégitime ou subi par une autre personne que le demandeur)."
  };
  F["causalite-exoneration"] = {
    pour: "le fait générateur soit tenu pour la cause du dommage",
    alors: "la responsabilité du défendeur est engagée, sauf s'il établit une cause d'exonération.",
    sinon: "pas de responsabilité : en cas de doute, le lien de causalité n'est pas établi.",
    reserve: "la force majeure (exonération totale, [[1218]]) ; la faute de la victime (partage, ou exonération totale si elle présente les caractères de la force majeure) ; le fait d'un tiers (sans effet envers la victime, sauf force majeure). Une présomption de causalité peut faciliter la preuve (Civ. 1re, 24 sept. 2009, Distilbène)."
  };
  F["prejudice-ecologique"] = {
    pour: "l'action en réparation du préjudice écologique prospère",
    alors: "le responsable répare par priorité en nature ; en cas d'impossibilité ou d'insuffisance, il verse des dommages et intérêts affectés à la réparation de l'environnement ([[1249]]).",
    sinon: "l'action est rejetée : demandeur non visé par l'article [[1248]], ou action prescrite (dix ans, [[2226-1]])."
  };
  F["gestion-affaires"] = {
    pour: "le gérant obtienne du maître le remboursement de ses dépenses et l'exécution de ses engagements",
    alors: "le maître remplit les engagements contractés dans son intérêt par le gérant, rembourse les dépenses utiles et l'indemnise des dommages subis ([[1301-2]]).",
    sinon: "la gestion d'affaires est écartée (mandat, obligation préexistante ou opposition du maître) ; si l'action du gérant ne répond pas aux conditions de la gestion d'affaires mais profite au maître, le gérant est indemnisé selon les règles de l'enrichissement injustifié ([[1301-5]], [[1303]]).",
    reserve: "la faute du gérant : il répond de ses fautes envers le maître et le juge peut modérer l'indemnité ([[1301-1]])."
  };
  F["indu-restitution"] = {
    pour: "le solvens puisse obtenir la restitution de ce qu'il a payé",
    alors: "l'accipiens restitue ([[1302]], al. 1er) ; les intérêts et les fruits sont dus depuis le paiement s'il est de mauvaise foi, depuis la demande s'il est de bonne foi ([[1352-7]]).",
    sinon: "aucune restitution : le paiement avait une cause, ou, pour la dette d'autrui, le solvens n'établit ni erreur ni contrainte ([[1302-2]]).",
    reserve: "la destruction du titre ou l'abandon des sûretés par le créancier ([[1302-2]]) ; la faute du solvens réduit la restitution sans jamais la supprimer ([[1302-3]], al. 2)."
  };
  F["enrichissement-injustifie"] = {
    pour: "l'appauvri obtienne une indemnité de l'enrichi",
    alors: "l'enrichi lui doit une indemnité égale à la moindre des deux valeurs, de l'enrichissement et de l'appauvrissement ([[1303]], [[1303-4]]).",
    sinon: "l'action est rejetée : l'enrichissement est justifié ([[1303-1]]) ou une autre action est ouverte ([[1303-3]], subsidiarité).",
    reserve: "la faute de l'appauvri : le juge peut modérer l'indemnité ([[1303-2]], al. 2)."
  };
  F["condition-suspensive"] = {
    pour: "l'obligation sous condition suspensive devienne pure et simple",
    conds: [
      "Une condition au sens de l'article 1304 : un événement futur et incertain",
      "Une condition valable : licite et non purement potestative",
      "Un comportement loyal des parties pendant la condition",
      "La réalisation de la condition"
    ],
    alors: "l'obligation devient pure et simple à compter de l'accomplissement de la condition, sans rétroactivité sauf clause ([[1304-6]]).",
    sinon: "en cas de défaillance, l'obligation est réputée n'avoir jamais existé ([[1304-6]], al. 3) et les sommes versées sont restituées ; une condition purement potestative rend l'obligation nulle ([[1304-2]])."
  };
  F["terme-decheance"] = {
    pour: "le créancier puisse exiger immédiatement le paiement d'une dette à terme",
    conds: [
      "Un terme existant ([[1305]])",
      "L'arrivée de l'échéance ou une cause de déchéance du terme (notamment [[1305-4]])",
      "Un débiteur poursuivi que la déchéance atteint (elle est inopposable aux coobligés et aux cautions, [[1305-5]])"
    ],
    alors: "la dette est exigible : le créancier peut en poursuivre le paiement.",
    sinon: "avant l'échéance, rien ne peut être exigé ([[1305-2]]) : seuls des actes conservatoires sont possibles.",
    reserve: "le délai de grâce : le juge peut reporter ou échelonner le paiement dans la limite de deux années ([[1343-5]])."
  };
  F["solidarite-passive"] = {
    pour: "des codébiteurs soient tenus solidairement",
    conds: [
      "Une source de solidarité : la loi, la convention, ou la dette commerciale entre commerçants ([[1310]])"
    ],
    alors: "le créancier peut exiger de l'un quelconque le paiement de la totalité ([[1313]]) ; celui qui paie se retourne contre les autres à proportion de la part de chacun ([[1317]]).",
    sinon: "la dette se divise de plein droit entre les codébiteurs ([[1309]]) : chacun n'est tenu que de sa part.",
    reserve: "la remise de dette à un codébiteur libère les autres à concurrence de sa part ([[1350-1]]) ; la remise de solidarité ([[1316]])."
  };
  F["cession-creance"] = {
    pour: "la cession de créance soit valable et produise ses effets",
    alors: "la créance est transmise au cessionnaire avec ses accessoires, pour sa valeur nominale ([[1321]]) ; le débiteur doit lui payer dès que la cession lui est opposable, par notification ou prise d'acte ([[1324]]).",
    sinon: "la cession est nulle à défaut d'écrit ([[1322]]) ; tant qu'elle n'est pas opposable au débiteur, le paiement fait au cédant le libère ([[1324]]).",
    reserve: "le débiteur peut opposer au cessionnaire les exceptions inhérentes à la dette, et celles nées de ses rapports avec le cédant si elles sont antérieures à l'opposabilité ([[1324]], al. 2)."
  };
  F["cession-contrat"] = {
    pour: "la cession de contrat soit valable",
    alors: "le cessionnaire devient partie au contrat ([[1216]]) ; le cédant n'est libéré pour l'avenir que si le cédé a expressément consenti à la cession ; à défaut, et sauf clause contraire, il reste tenu solidairement à l'exécution du contrat ([[1216-1]]).",
    sinon: "la cession est nulle à défaut d'écrit ([[1216]], al. 3) ; sans accord du cédé, elle lui est seulement inopposable (Com., 24 avr. 2024).",
    reserve: "le cédé peut opposer au cessionnaire toutes les exceptions opposables au cédant ; le cessionnaire n'oppose que les exceptions inhérentes à la dette ([[1216-2]])."
  };
  F["subrogation-personnelle"] = {
    pour: "le solvens soit subrogé dans les droits du créancier",
    alors: "il exerce la créance et ses accessoires dans la limite de ce qu'il a payé ([[1346-4]]), contre le débiteur dès que la subrogation lui est opposable ([[1346-5]]).",
    sinon: "pas de subrogation : le seul paiement ne suffit pas, il faut une source légale ou conventionnelle ; le solvens ne dispose pas de l'action du créancier.",
    reserve: "les exceptions du débiteur, opposables comme en cession de créance ([[1346-5]], al. 3) ; la priorité du créancier partiellement payé ([[1346-3]])."
  };
  F["delegation"] = {
    pour: "l'opération soit une délégation",
    conds: [
      "Un engagement du délégué envers le délégataire, avec le consentement du délégant, du délégué et du délégataire ([[1336]])"
    ],
    alors: "si le délégant est expressément déchargé, la délégation est parfaite : novation par changement de débiteur ([[1337]]) ; sinon elle est imparfaite et le délégataire a deux débiteurs ([[1338]]). Le délégué n'oppose pas au délégataire les exceptions qu'il a contre le délégant ([[1336]], al. 2).",
    sinon: "il y a simple indication de paiement ([[1340]]) : ni délégation ni novation.",
    reserve: "le délégant demeure tenu malgré la décharge, dans le cas de l'article [[1337]], al. 2."
  };
  F["compensation-legale"] = {
    pour: "deux dettes réciproques s'éteignent par compensation légale",
    alors: "les dettes s'éteignent à concurrence de la plus faible, à la date où les conditions sont réunies ([[1347]], al. 2).",
    sinon: "pas de compensation légale : voir la compensation judiciaire ([[1348]]) ou la compensation des dettes connexes ([[1348-1]]).",
    reserve: "les créances non compensables ([[1347-2]]) ; les droits acquis des tiers ([[1347-7]])."
  };
  F["prescription-extinctive"] = {
    pour: "l'action puisse encore être exercée",
    conds: [
      "Un délai applicable : en principe cinq ans ([[2224]])",
      "Un point de départ identifié : le jour où le titulaire a connu ou aurait dû connaître les faits ([[2224]])",
      "Un délai non expiré, compte tenu des suspensions ([[2230]]) et des interruptions ([[2240]], [[2241]], [[2244]])",
      "Un délai butoir de vingt ans non dépassé ([[2232]])"
    ],
    alors: "l'action est recevable : le juge examine le fond.",
    sinon: "l'action est prescrite, donc irrecevable, dès lors que le défendeur invoque la prescription : le juge ne peut la relever d'office ([[2247]]).",
    reserve: "la renonciation à une prescription acquise ([[2250]])."
  };
})();
