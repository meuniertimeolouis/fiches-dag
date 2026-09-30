/* Chapitre 20 — Le régime général de l'obligation : la transmission des obligations
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 20,
  intro: "Une créance est un **bien** : elle doit pouvoir circuler d'un patrimoine à l'autre. L'ordonnance du 10 février 2016 a regroupé et simplifié les techniques de circulation. Deux voies : la **cession du rapport d'obligation**, qui transmet directement la créance ([[1321]] s.), la dette ([[1327]] s.) ou le contrat entier ([[1216]] s.) ; la **subrogation personnelle** ([[1346]] s.), qui transmet la créance à celui qui a payé la dette d'autrui. Droit transitoire : le manuel applique les textes nouveaux aux opérations **conclues depuis le 1er octobre 2016**, même si la créance transmise est née d'un contrat plus ancien (solution discutée, faute de jurisprudence tranchée).",
  sections: [
    {
      titre: "Vue d'ensemble : quatre techniques de transmission",
      contenu: [
        { p: "Toutes ces opérations mettent en scène **trois personnes**. Le réflexe de copie : dessiner le schéma, nommer chaque partie et sa qualité (cédant, cessionnaire, cédé ; subrogeant, subrogé ou *solvens*, débiteur), puis se demander **qui doit consentir** et **à partir de quand l'opération est opposable au tiers intéressé**." },
        { schema: { type: "tableau", titre: "Tableau de synthèse des opérations translatives", colonnes: ["", "Cession de créance", "Cession de dette", "Cession de contrat", "Subrogation personnelle"], lignes: [
          ["Textes", "[[1321]] à [[1326]]", "[[1327]] à [[1328-1]]", "[[1216]] à [[1216-3]]", "[[1346]] à [[1346-5]]"],
          ["Ce qui est transmis", "Le côté actif (la créance)", "Le côté passif (la dette)", "La qualité de partie (créances et dettes)", "La créance payée par le *solvens*"],
          ["Qui conclut l'acte ?", "Cédant et cessionnaire", "Débiteur cédant et cessionnaire", "Cédant et cessionnaire", "Loi (légale) ou accord créancier/*solvens* ou débiteur/prêteur (conventionnelle)"],
          ["Rôle du tiers", "Consentement du débiteur **non requis** (sauf créance stipulée incessible)", "**Accord du créancier** exigé", "**Accord du cédé** exigé (mais son défaut rend la cession inopposable, pas nulle)", "Débiteur étranger à l'opération"],
          ["Forme", "Écrit **à peine de nullité** ([[1322]])", "Écrit à peine de nullité depuis le 1er oct. 2018 ([[1327]], al. 2)", "Écrit à peine de nullité ([[1216]], al. 3)", "Subrogation conventionnelle **expresse** ; formes notariées pour certains cas ([[1346-2]])"],
          ["Opposabilité au débiteur / cédé", "Notification ou prise d'acte ([[1324]])", "Notification ou prise d'acte si l'accord a été donné par avance ([[1327-1]])", "Idem si l'accord a été donné par avance ([[1216]], al. 2)", "Notification ou prise d'acte ([[1346-5]])"],
          ["Opposabilité aux autres tiers", "Date de l'acte ([[1323]])", "—", "—", "Date du paiement ([[1346-5]])"],
          ["Mesure du recours", "**Valeur nominale** de la créance, quel que soit le prix payé", "—", "—", "**Dans la limite de ce qui a été payé** ([[1346-4]])"]
        ] } },
        { attention: "La **novation** et la **délégation** permettent aussi de changer de créancier ou de débiteur, mais le manuel les étudie parmi les modes d'extinction de l'obligation (chapitre suivant) : elles **éteignent** l'obligation ancienne ou **ajoutent** un débiteur, alors que les cessions et la subrogation font circuler **la même** obligation." }
      ]
    },
    {
      titre: "La cession de créance : conditions",
      contenu: [
        { def: { terme: "Cession de créance", texte: "contrat par lequel le **créancier cédant** transmet, à titre onéreux ou gratuit, tout ou partie de sa créance contre le **débiteur cédé** à un tiers, le **cessionnaire** ([[1321]], al. 1er). Le Code de 1804 la traitait comme une vente de créance (anc. art. 1689 s.) ; elle est aujourd'hui une opération sur obligations autonome." } },
        { h: "Les conditions de validité" },
        { liste: [
          "**Un contrat de droit commun** entre cédant et cessionnaire : consentement, capacité, contenu licite et certain ([[1128]]). À titre onéreux, le prix est en général **inférieur au nominal** : le cessionnaire spécule sur le recouvrement. À titre gratuit, c'est une donation.",
          "**Un objet très large** : une ou plusieurs créances, **présentes ou futures**, **déterminées ou déterminables** ([[1321]], al. 2), non encore exigibles, de somme d'argent ou non.",
          "**Des limites** : certaines créances sont incessibles par la loi (créances alimentaires, fraction insaisissable des salaires : C. trav., art. L. 3252-2 s.). Si l'incessibilité est seulement **stipulée**, la cession reste possible **avec le consentement du débiteur** ([[1321]], al. 4) : c'est le seul cas où il doit consentir.",
          "**Un écrit à peine de nullité** ([[1322]]) pour les cessions conclues depuis le 1er octobre 2016. Auparavant, la cession était consensuelle. L'écrit compense l'allègement des formalités d'opposabilité ; lui donner **date certaine** reste prudent, car la date de l'acte règle les conflits."
        ] },
        { attention: "Le débiteur cédé **n'est pas partie** au contrat de cession. Écrire qu'il doit « accepter » la cession est faux, sauf créance stipulée incessible ([[1321]], al. 4). Son rôle se joue au stade de l'**opposabilité**." },
        { h: "Les conditions d'opposabilité" },
        { schema: { type: "frise", titre: "De la signification de l'article 1690 à la notification de l'article 1324", evenements: [
          { date: "1804 – 30 sept. 2016", t: "Anc. art. 1690", d: "le cessionnaire n'est saisi à l'égard des tiers que par une **signification** par huissier au débiteur ou par l'**acceptation** du débiteur dans un **acte authentique** : formalisme lourd et coûteux" },
          { date: "1981", t: "Cession « Dailly »", d: "cession simplifiée des créances professionnelles par bordereau remis à un établissement de crédit (C. mon. fin., art. L. 313-23 s.) ; les titres négociables circulent aussi selon des formes propres" },
          { date: "Depuis le 1er oct. 2016", t: "Tiers : date de l'acte", d: "la cession est opposable aux tiers **dès la date de l'acte** ; en cas de contestation, le cessionnaire prouve cette date **par tout moyen** ([[1323]])" },
          { date: "Depuis le 1er oct. 2016", t: "Débiteur : notification ou prise d'acte", d: "s'il n'y a pas déjà consenti, la cession ne lui est opposable que si elle lui a été **notifiée** ou s'il en a **pris acte** ([[1324]], al. 1er) ; aucune forme n'est imposée (une lettre recommandée suffit)" }
        ] } },
        { p: "**Conflit entre cessionnaires successifs** de la même créance : le **premier en date** l'emporte ; il a un recours contre celui que le débiteur aurait payé ([[1325]])." },
        { p: "La cession de créance peut aussi servir de **sûreté** (cession de créance à titre de garantie, art. 2373 s., issus de l'ordonnance du 15 septembre 2021) : question relevant du droit des sûretés." }
      ]
    },
    {
      titre: "La cession de créance : effets",
      contenu: [
        { h: "Entre cédant et cessionnaire" },
        { liste: [
          "**Transfert à la date de l'acte**, pour une créance présente comme future ([[1323]], al. 1er).",
          "**La créance même est transmise**, pour sa valeur nominale : cédée 8 000 € alors qu'elle vaut 10 000 €, elle permet au cessionnaire de réclamer **10 000 €** au débiteur. C'est la grande différence avec la subrogation.",
          "**Avec ses accessoires** ([[1321]], al. 3) : sûretés, actions en justice, titre exécutoire. Mais une **dette** née du même contrat n'est pas un accessoire de la créance : le cessionnaire n'en devient pas débiteur.",
          "**Avec ses vices** : ce qui fonde l'opposabilité des exceptions au cessionnaire (*nemo plus juris ad alium transferre potest quam ipse habet*)."
        ] },
        { h: "La garantie due par le cédant ([[1326]])" },
        { schema: { type: "tableau", titre: "Ce que garantit le cédant à titre onéreux", colonnes: ["Objet", "Principe", "Exception ou aménagement"], lignes: [
          ["**Existence** de la créance et de ses accessoires", "Garantie de plein droit (au jour de la cession) : restitution du prix et, le cas échéant, dommages et intérêts", "Pas de garantie si le cessionnaire a acquis **à ses risques et périls** ou **connaissait le caractère incertain** de la créance"],
          ["**Solvabilité** du débiteur", "**Non garantie** : la cession est une opération spéculative", "Garantie seulement si le cédant s'y est **engagé**, et dans la limite du **prix retiré** de la cession"],
          ["Solvabilité **à l'échéance**", "La garantie de solvabilité ne vise que la solvabilité **actuelle**", "Étendue à la solvabilité future seulement si le cédant l'a **expressément** spécifié"]
        ] } },
        { p: "Les clauses réduisant la garantie légale ne sont plus visées par le Code ; elles semblent admises au nom de la liberté contractuelle, [[1326]] n'étant pas déclaré d'ordre public. Le droit ancien interdisait d'écarter la garantie du fait personnel du cédant ; la solution devrait survivre." },
        { h: "À l'égard du débiteur cédé" },
        { schema: { type: "etapes", titre: "La situation du débiteur cédé, étape par étape", etapes: [
          { t: "Avant que la cession lui soit opposable", d: "Il peut valablement **payer le cédant** : ce paiement le libère. Le cessionnaire, déjà créancier entre les parties, peut toutefois accomplir des actes **conservatoires**." },
          { t: "Notification ou prise d'acte", d: "La cession devient opposable au débiteur ([[1324]], al. 1er). Il doit désormais payer le **cessionnaire** : s'il paie le cédant, il paie mal et risque de payer deux fois." },
          { t: "Exceptions **inhérentes à la dette**", d: "Nullité, exception d'inexécution, résolution, compensation de dettes **connexes** : opposables au cessionnaire **quelle que soit leur date** ([[1324]], al. 2)." },
          { t: "Exceptions **nées des rapports avec le cédant**", d: "Terme accordé, remise de dette, compensation de dettes **non connexes** : opposables seulement si elles sont nées **avant** que la cession lui soit devenue opposable ([[1324]], al. 2). Le droit antérieur retenait une solution voisine : exceptions dont la **cause** était antérieure." },
          { t: "Frais", d: "Le débiteur n'avance pas les frais supplémentaires causés par la cession ; cédant et cessionnaire en sont tenus solidairement, la charge finale pesant sur le cessionnaire sauf clause contraire ([[1324]], al. 3)." }
        ] } },
        { attention: "Si le débiteur a **pris acte sans réserve** de la cession, il ne peut plus opposer au cessionnaire la compensation qu'il aurait pu opposer au cédant ([[1347-5]]). Conseil au débiteur : émettre des réserves en prenant acte." },
        { p: "Restent inopposables les moyens **strictement personnels au cédant**, qui ne tiennent pas à la dette elle-même. Et la règle d'opposabilité des exceptions a une limite procédurale : le cessionnaire n'a pas qualité pour défendre seul, en l'absence du cédant, à une demande de **résolution du contrat** dont la créance est issue." }
      ]
    },
    {
      titre: "La cession de dette",
      contenu: [
        { def: { terme: "Cession de dette", texte: "opération par laquelle un **débiteur cédant** transmet sa dette à un tiers **cessionnaire**, **avec l'accord du créancier** ([[1327]], al. 1er). Inconnue du Code de 1804 à titre autonome, admise progressivement par la jurisprudence, elle est consacrée par l'ordonnance de 2016 et retouchée par la loi de ratification du 20 avril 2018." } },
        { h: "Les conditions" },
        { liste: [
          "**Un contrat** entre le débiteur cédant et le cessionnaire.",
          "**L'accord du créancier cédé** ([[1327]]), qui peut être donné **par avance**, par exemple dans le contrat d'origine ([[1327-1]]). Sa nature est discutée : véritable consentement faisant du créancier une partie (opération tripartite) ou simple **autorisation**, condition d'opposabilité. Le parallèle avec la cession de contrat, où la Cour de cassation a retenu la seconde analyse (Com., 24 avr. 2024), plaide pour l'autorisation ; la question n'est pas tranchée pour la cession de dette.",
          "**Un écrit à peine de nullité** ([[1327]], al. 2), ajouté par la loi du 20 avril 2018 (disposition non interprétative) : exigé pour les cessions conclues **depuis le 1er octobre 2018** ; celles conclues entre le 1er octobre 2016 et le 30 septembre 2018 n'y sont pas soumises.",
          "**Opposabilité** : si le créancier a donné son accord par avance et n'est pas intervenu à l'acte, la cession ne lui est opposable, et il ne peut s'en prévaloir, que du jour où elle lui a été **notifiée** ou dès qu'il en a **pris acte** ([[1327-1]])."
        ] },
        { h: "Les effets : tout dépend de la décharge du débiteur originaire" },
        { schema: { type: "tableau", titre: "Cession de dette libératoire ou non ([[1327-2]] à [[1328-1]])", colonnes: ["", "Cession **libératoire** (« parfaite »)", "Cession **non libératoire** (« imparfaite »), droit commun"], lignes: [
          ["Condition", "Le créancier consent **expressément** à libérer le débiteur originaire", "À défaut de consentement exprès, et sauf clause contraire"],
          ["Débiteur originaire", "**Libéré pour l'avenir**", "Tenu **solidairement** avec le cessionnaire : c'est une **adjonction** de débiteur plutôt qu'une substitution"],
          ["Exceptions opposables au créancier", "Le débiteur substitué oppose les exceptions **inhérentes à la dette** et celles qui lui sont **personnelles** ([[1328]])", "Chacun des deux débiteurs oppose les exceptions inhérentes à la dette et celles qui lui sont personnelles ([[1328]])"],
          ["Sûretés", "Celles consenties par le débiteur originaire ou par des tiers ne subsistent **qu'avec leur accord** ([[1328-1]])", "**Subsistent** de plein droit ([[1328-1]])"],
          ["Codébiteurs solidaires du cédant", "Restent tenus, **déduction faite de sa part** ([[1328-1]], al. 2)", "Restent tenus"]
        ] } },
        { attention: "Sans décharge **expresse**, pas de libération : le silence du créancier, ou son simple accord à l'opération, ne libère pas le débiteur originaire ([[1327-2]]). En cas pratique, si l'énoncé ne précise pas, raisonner sur les **deux hypothèses**." }
      ]
    },
    {
      titre: "La cession de contrat",
      contenu: [
        { def: { terme: "Cession de contrat", texte: "opération par laquelle un contractant, le **cédant**, cède sa **qualité de partie** à un tiers, le **cessionnaire**, avec l'accord de son cocontractant, le **cédé** ([[1216]], al. 1er). Le cessionnaire recueille ensemble créances et dettes du contrat en cours. Elle figure parmi les **effets du contrat** (art. 1216 s.), non parmi les opérations sur obligations : elle sert à maintenir le contrat." } },
        { p: "Des **cessions légales** existent depuis longtemps, opérées de plein droit avec un bien : bail transmis à l'acquéreur de l'immeuble loué ([[1743]]), contrats de travail transmis au repreneur de l'entreprise (C. trav., art. L. 1224-1), assurance transmise avec la chose assurée (C. assur., art. L. 121-10). La jurisprudence avait admis, avant 2016, une cession **conventionnelle** hors de ces cas (Civ. 1re, 14 déc. 1982)." },
        { h: "Conditions de fond" },
        { liste: [
          "**Un contrat cessible** : en cours d'exécution (à exécution successive ou non encore exécuté), sinon la cession n'a plus d'objet ; non assorti d'une **clause d'incessibilité**.",
          "**Contrat *intuitu personae*** : longtemps réputé incessible, il peut être cédé **avec l'accord du cédé** (Com., 7 janv. 1992, n° 90-14.831) ; [[1216]] ne pose aucune restriction.",
          "**L'accord du cédé** : avant la réforme, son consentement était une **condition de validité** (Com., 6 mai 1997, deux arrêts). Depuis, la chambre commerciale a jugé que cet accord **peut être donné sans forme**, pourvu qu'il soit **non équivoque**, et **prouvé par tout moyen** ; surtout, **son défaut n'emporte pas la nullité de la cession mais son inopposabilité au cédé** (Com., 24 avr. 2024). L'accord est donc une **autorisation**, pas un consentement faisant du cédé une partie à la cession.",
          "**Accord donné par avance** (clause de cessibilité dans le contrat cédé) : la cession produit effet à l'égard du cédé lorsque l'acte de cession lui est **notifié** ou lorsqu'il en **prend acte** ([[1216]], al. 2)."
        ] },
        { h: "Conditions de forme" },
        { p: "La cession doit être **constatée par écrit, à peine de nullité** ([[1216]], al. 3), pour les cessions conclues depuis le 1er octobre 2016 (auparavant : contrat consensuel). L'écrit concerne l'acte de cession, pas l'accord du cédé. Avant la réforme, on exigeait en outre les formalités de l'ancien article 1690 ; elles ont perdu leur intérêt dès lors que l'accord du cédé est requis." },
        { schema: { type: "arbre", titre: "Le cédé a-t-il donné son accord ?", racine: { t: "Cession de contrat constatée par écrit", d: "[[1216]]", enfants: [
          { t: "Accord au moment de la cession", d: "cession opposable au cédé", enfants: [
            { t: "Libération **expresse** du cédant", d: "cession « parfaite » : le cédant est libéré pour l'avenir ([[1216-1]], al. 1er)" },
            { t: "Pas de libération expresse", d: "cession « imparfaite » : le cédant reste tenu **solidairement**, sauf clause contraire ([[1216-1]], al. 2)" }
          ] },
          { t: "Accord donné par avance", d: "opposable au cédé à compter de la **notification** ou de la **prise d'acte** ([[1216]], al. 2)" },
          { t: "Aucun accord", d: "cession **valable** entre cédant et cessionnaire, mais **inopposable** au cédé (Com., 24 avr. 2024) : ses rapports avec le cédant restent inchangés" }
        ] } } },
        { h: "Effets" },
        { liste: [
          "**Exceptions** : le cessionnaire peut opposer au cédé les exceptions **inhérentes à la dette** (nullité, exception d'inexécution, résolution, compensation de dettes connexes), pas celles **personnelles au cédant** ; le cédé peut opposer au cessionnaire **toutes** les exceptions qu'il aurait pu opposer au cédant ([[1216-2]]).",
          "**Sûretés** : elles subsistent si le cédant n'est pas libéré ; s'il l'est, celles consenties par le cédant ou par des tiers ne subsistent **qu'avec leur accord** ([[1216-3]], al. 1er).",
          "**Codébiteurs solidaires** du cédant libéré : tenus déduction faite de sa part ([[1216-3]], al. 2)."
        ] },
        { attention: "Ne pas confondre les **deux accords** du cédé : l'**accord à la cession** ([[1216]], al. 1er), qui la lui rend opposable, et le **consentement exprès à la libération** du cédant ([[1216-1]]), sans lequel le cédant reste tenu solidairement." }
      ]
    },
    {
      titre: "La subrogation personnelle : sources",
      contenu: [
        { def: { terme: "Subrogation personnelle", texte: "substitution d'une personne à une autre dans un rapport d'obligation : celui qui paie la dette d'autrui (le **subrogé** ou *solvens*) est investi de la créance du créancier payé (le **subrogeant**) contre le débiteur. La subrogation **réelle** (un bien remplace un autre) relève du droit des biens. Le Code la range parmi les règles du **paiement** ([[1342]], al. 3), mais elle fonctionne comme un mode de **circulation** de la créance." } },
        { p: "Celui qui paie la dette d'autrui dispose souvent d'une **action personnelle** (mandat, gestion d'affaires, enrichissement injustifié). La subrogation lui offre mieux : la **créance même**, avec ses sûretés. Exemple type : le codébiteur solidaire qui paie toute la dette se retourne, par subrogation, contre ses coobligés pour leur part." },
        { h: "La subrogation légale ([[1346]])" },
        { p: "L'ancien article 1251 énumérait **cinq cas** limitatifs (créancier payant un créancier préférable, acquéreur d'immeuble payant les créanciers hypothécaires, personne tenue avec d'autres ou pour d'autres, héritier acceptant à concurrence de l'actif net, paiement des frais funéraires). L'ordonnance de 2016 **généralise** : la subrogation a lieu **par le seul effet de la loi** au profit de celui qui :" },
        { liste: [
          "**paie** la dette ;",
          "**y a un intérêt légitime** : notion ouverte, qui écarte le paiement malveillant (le rapport au Président de la République cite le paiement fait par un concurrent pour nuire) ;",
          "et dont le paiement **libère envers le créancier celui sur qui doit peser la charge définitive** de tout ou partie de la dette."
        ] },
        { p: "Le *solvens* n'a donc plus à être tenu, même pour partie, à la dette. Il ne doit simplement pas être lui-même le **débiteur définitif** de ce qu'il paie : le codébiteur solidaire n'est subrogé que pour ce qui excède sa propre part ([[1317]])." },
        { h: "La subrogation conventionnelle consentie par le créancier ([[1346-1]])" },
        { liste: [
          "**Expresse** : l'intention de transmettre la créance doit être certaine, puisque la subrogation déroge à l'effet extinctif du paiement ; le mot « subrogation » n'est pas indispensable.",
          "**Concomitante au paiement** : une subrogation postérieure est impossible (la créance est déjà éteinte). Exception : le subrogeant peut avoir manifesté, **dans un acte antérieur**, la volonté que son cocontractant lui soit subrogé **lors du paiement** (subrogation anticipée, admise par Com., 29 janv. 1991) ; elle produit effet au jour du paiement. La concomitance se prouve **par tous moyens** ; une quittance subrogative à date certaine reste prudente.",
          "**Paiement de la dette d'autrui** : celui qui paie sa propre dette ne peut en principe être subrogé ; mais celui qui s'acquitte d'une dette qui lui est personnelle peut bénéficier d'une subrogation conventionnelle s'il a libéré, par son paiement, **celui sur qui doit peser la charge définitive** de la dette (Civ. 1re, 22 juill. 1987).",
          "Aucune autre condition de forme. Application courante : l'**affacturage** (le *factor* paie les créances d'un fournisseur et est subrogé contre ses clients)."
        ] },
        { h: "La subrogation conventionnelle consentie par le débiteur ([[1346-2]])" },
        { p: "Le débiteur **emprunte** pour payer sa dette et subroge le **prêteur** dans les droits du créancier (subrogation *ex parte debitoris*). Deux régimes :" },
        { schema: { type: "tableau", titre: "Subrogation consentie par le débiteur", colonnes: ["", "Avec le concours du créancier (al. 1er)", "Sans le concours du créancier (al. 2)"], lignes: [
          ["Conditions de fond", "Subrogation **expresse**", "Dette **échue** ou terme stipulé **en faveur du débiteur**"],
          ["Forme", "La quittance du créancier doit **indiquer l'origine des fonds**", "Acte d'emprunt **et** quittance **devant notaire** ; l'emprunt déclare que la somme est destinée au paiement ; la quittance déclare que le paiement a été fait avec ces fonds"],
          ["Pourquoi ?", "Le créancier participe à l'opération", "Le créancier est évincé sans son accord (« expropriation des créances pour cause d'utilité privée », selon Carbonnier) : le formalisme protège les tiers contre la fraude"]
        ] } }
      ]
    },
    {
      titre: "La subrogation personnelle : effets",
      contenu: [
        { p: "Les effets sont les mêmes quelle que soit la source. La subrogation a un **double effet** : **extinctif** à l'égard du créancier payé, **translatif** au profit du *solvens*. Le débiteur, lui, n'est pas libéré : il change seulement de créancier." },
        { h: "Opposabilité ([[1346-5]])" },
        { liste: [
          "**Aux tiers** : dès le **paiement** (solution inchangée).",
          "**Au débiteur** : seulement si la subrogation lui a été **notifiée** ou s'il en a **pris acte** (nouveauté de 2016, alignée sur la cession de créance). Le débiteur peut, lui, **invoquer** la subrogation dès qu'il en a connaissance."
        ] },
        { h: "Ce qui est transmis ([[1346-4]])" },
        { liste: [
          "**La créance elle-même**, avec sa nature (civile ou commerciale, à terme ou conditionnelle) et **ses accessoires** : sûretés (cautionnement, hypothèque, gage), actions en justice (nullité, résolution, garantie).",
          "**Sauf les droits exclusivement attachés à la personne du créancier** (par exemple des prérogatives de puissance publique).",
          "**Intérêts** : le subrogé n'a droit qu'à l'**intérêt légal à compter d'une mise en demeure**, sauf nouvel intérêt convenu avec le débiteur ; ces intérêts sont garantis par les sûretés, dans la limite des engagements initiaux des tiers garants ([[1346-4]], al. 2).",
          "**Avec ses vices** : le débiteur oppose au subrogé les exceptions **inhérentes à la dette** (nullité, exception d'inexécution, résolution, compensation de dettes connexes, clause limitative, prescription calculée selon la nature d'origine de la créance) et celles **nées de ses rapports avec le subrogeant avant** que la subrogation lui soit devenue opposable (terme, remise de dette, compensation de dettes non connexes) ([[1346-5]], al. 3)."
        ] },
        { h: "Les deux limites de la transmission" },
        { schema: { type: "etapes", titre: "Calculer le recours subrogatoire", etapes: [
          { t: "1. À hauteur du paiement", d: "La subrogation n'est pas spéculative : le subrogé n'agit que **dans la limite de ce qu'il a payé** ([[1346-4]] ; déjà Civ. 1re, 29 oct. 2002), même si le créancier lui a remis une quittance pour le tout. Il paie 6 000 € sur une créance de 10 000 € : recours limité à **6 000 €**." },
          { t: "2. Sans nuire au créancier partiellement payé", d: "*Nemo contra se subrogasse censetur* : le créancier payé en partie exerce ses droits pour le solde **par préférence** au subrogé ([[1346-3]])." },
          { t: "Exemple chiffré", d: "Créance de 100 000 € ; un tiers en paie 50 000 €. Le débiteur ne dispose que de 80 000 €. Le créancier prend d'abord ses **50 000 €** restants ; le subrogé n'obtient que **30 000 €**." },
          { t: "3. Aménagement", d: "La règle de [[1346-3]] n'est pas d'ordre public : les parties l'écartent souvent dans la subrogation conventionnelle. Celle de [[1346-4]] (limite du paiement) est, elle, impérative." }
        ] } },
        { p: "Illustration légale de la priorité du créancier : en matière de dommage corporel, la **victime** partiellement indemnisée par un tiers payeur (sécurité sociale, assureur) exerce ses droits contre le responsable **par préférence** au tiers payeur subrogé (art. 31 de la loi du 5 juillet 1985, réd. loi du 21 déc. 2006)." },
        { schema: { type: "tableau", titre: "Cession de créance ou subrogation : les différences qui tombent en copie", colonnes: ["", "Cession de créance", "Subrogation personnelle"], lignes: [
          ["Initiative", "Le créancier vend ou donne sa créance", "Un tiers **paie** la dette"],
          ["Nature", "Opération **spéculative** possible", "Opération de **paiement**, non spéculative"],
          ["Montant réclamable", "Valeur **nominale**", "**Ce qui a été payé**"],
          ["Forme", "Écrit à peine de nullité", "Légale : aucune ; conventionnelle : expresse et concomitante (formes notariées dans un cas de [[1346-2]])"],
          ["Opposabilité aux tiers", "Date de l'**acte**", "Date du **paiement**"],
          ["Opposabilité au débiteur", "Notification ou prise d'acte", "Notification ou prise d'acte"],
          ["Conflit avec le créancier d'origine", "Sans objet si toute la créance est cédée", "Priorité au créancier partiellement payé ([[1346-3]])"]
        ] } }
      ]
    }
  ],
  retenir: [
    "Cession de créance : contrat cédant/cessionnaire, **écrit à peine de nullité** ([[1322]]) ; consentement du débiteur inutile sauf créance stipulée incessible ([[1321]]).",
    "Opposabilité : aux tiers dès l'acte ([[1323]]) ; au débiteur après **notification ou prise d'acte** ([[1324]]) ; premier cessionnaire en date préféré ([[1325]]).",
    "Le cessionnaire réclame le **nominal** ; le cédant garantit l'**existence** de la créance, pas la **solvabilité** du débiteur, sauf engagement ([[1326]]).",
    "Exceptions : **inhérentes à la dette** toujours opposables ; **nées des rapports avec le cédant** seulement si antérieures à l'opposabilité ([[1324]], al. 2).",
    "Cession de dette : **accord du créancier**, écrit depuis le 1er oct. 2018 ; libération du débiteur originaire seulement si le créancier y **consent expressément**, sinon **solidarité** ([[1327-2]]).",
    "Cession de contrat : écrit à peine de nullité ; l'accord du cédé, sans forme mais non équivoque, conditionne l'**opposabilité**, non la validité (Com., 24 avr. 2024) ; libération du cédant seulement sur consentement exprès ([[1216-1]]).",
    "Subrogation légale : paiement par celui qui a un **intérêt légitime** et libère le **débiteur définitif** ([[1346]]) ; conventionnelle : **expresse** et **concomitante** ([[1346-1]]), ou consentie par le débiteur emprunteur ([[1346-2]]).",
    "Subrogation : recours **à hauteur du paiement** ([[1346-4]]) ; le créancier partiellement payé est **préféré** ([[1346-3]]) ; opposable au débiteur après notification ou prise d'acte, aux tiers dès le paiement ([[1346-5]])."
  ],
  articles: ["1216", "1216-1", "1216-2", "1216-3", "1321", "1322", "1323", "1324", "1325", "1326", "1327", "1327-1", "1327-2", "1328", "1328-1", "1346", "1346-1", "1346-2", "1346-3", "1346-4", "1346-5", "1743"],
  regimes: ["cession-creance", "cession-contrat", "subrogation-personnelle"],
  cas: ["ch20-menuiserie"],
  quiz: [
    { q: "La cession de créance se forme par l'accord :", choix: ["Du cédant et du débiteur cédé", "Du cédant et du cessionnaire", "Des trois intéressés"], bonne: 1, expl: "[[1321]] : le consentement du débiteur n'est pas requis, sauf créance stipulée incessible." },
    { q: "Une créance de 10 000 € est cédée pour 7 000 €. Le cessionnaire peut réclamer au débiteur :", choix: ["7 000 €", "8 500 €", "10 000 €"], bonne: 2, expl: "La cession transmet la créance elle-même, pour sa valeur nominale. En revanche, le subrogé est limité à ce qu'il a payé ([[1346-4]])." },
    { q: "Une cession de créance conclue en 2025 par simple accord verbal est :", choix: ["Nulle", "Valable mais inopposable au débiteur", "Valable et opposable aux tiers"], bonne: 0, expl: "[[1322]] : écrit exigé à peine de nullité." },
    { q: "Avant toute notification, le débiteur cédé paie le cédant. Il est :", choix: ["Libéré", "Tenu de payer une seconde fois le cessionnaire", "Libéré pour moitié"], bonne: 0, expl: "La cession ne lui est pas encore opposable ([[1324]], al. 1er) : il a bien payé." },
    { q: "Après notification de la cession, le cédant consent au débiteur une remise de dette. Le débiteur peut-il l'opposer au cessionnaire ?", choix: ["Oui, toute exception est opposable", "Non : exception née des rapports avec le cédant après l'opposabilité", "Oui, si la remise est écrite"], bonne: 1, expl: "[[1324]], al. 2 : seules les exceptions nées avant que la cession soit devenue opposable. Le cédant n'est d'ailleurs plus créancier." },
    { q: "Un créancier accepte qu'un tiers reprenne la dette de son débiteur, sans rien dire de plus. Le débiteur originaire :", choix: ["Est libéré", "Reste tenu solidairement", "Reste tenu à titre subsidiaire"], bonne: 1, expl: "[[1327-2]] : seule une libération **expresse** le décharge." },
    { q: "Le cocontractant n'a jamais donné son accord à la cession du contrat. La cession est :", choix: ["Nulle", "Valable mais inopposable au cédé", "Valable et opposable au cédé"], bonne: 1, expl: "Com., 24 avr. 2024 : le défaut d'accord du cédé emporte inopposabilité, non nullité." },
    { q: "Un ami paie 5 000 € sur une dette de 12 000 € et est subrogé. Le débiteur n'a plus que 8 000 €. Le créancier réclame son solde de 7 000 €. L'ami obtiendra :", choix: ["1 000 €", "5 000 €", "Une part proportionnelle"], bonne: 0, expl: "[[1346-3]] : le créancier partiellement payé passe en premier (7 000 €) ; il reste 1 000 € pour le subrogé." },
    { q: "La subrogation conventionnelle consentie par le créancier doit être :", choix: ["Notariée", "Acceptée par le débiteur", "Expresse et consentie en même temps que le paiement (sauf acte antérieur)"], bonne: 2, expl: "[[1346-1]], al. 2 et 3." },
    { q: "La subrogation est opposable au débiteur :", choix: ["Dès le paiement", "Dès qu'il l'accepte par acte authentique", "Dès qu'elle lui est notifiée ou qu'il en a pris acte"], bonne: 2, expl: "[[1346-5]], al. 1er ; aux tiers, elle est opposable dès le paiement." }
  ]
});

OBL.regimes.push(
  {
    id: "cession-creance",
    chapitre: "Transmission des obligations",
    titre: "Cession de créance : validité, opposabilité, exceptions",
    fondement: ["1321", "1322", "1323", "1324", "1326"],
    resume: "Vérifier qu'une cession de créance est valable, déterminer à partir de quand le débiteur doit payer le cessionnaire et ce qu'il peut lui opposer.",
    conditions: [
      { nom: "Un contrat de cession valable", question: "Cédant et cessionnaire ont-ils conclu un contrat valable portant sur une créance cessible ?", detail: "Conditions de droit commun ([[1128]]). Créance présente ou future, déterminée ou déterminable ([[1321]], al. 2). Incessibilité légale (aliments, fraction insaisissable des salaires) : cession impossible ; incessibilité stipulée : consentement du débiteur requis ([[1321]], al. 4).", piege: "Exiger le consentement du débiteur alors que la créance n'est pas stipulée incessible." },
      { nom: "Un écrit", question: "La cession, conclue depuis le 1er octobre 2016, est-elle constatée par écrit ?", detail: "Écrit exigé à peine de nullité ([[1322]]). Avant cette date, contrat consensuel.", preuve: "Le cessionnaire prouve la date de l'acte par tout moyen en cas de contestation par un tiers ([[1323]], al. 2)." },
      { nom: "L'opposabilité au débiteur", question: "La cession a-t-elle été notifiée au débiteur, ou en a-t-il pris acte, ou y a-t-il consenti ?", detail: "[[1324]], al. 1er. Avant, le paiement fait au cédant libère le débiteur. Aux autres tiers, la cession est opposable dès la date de l'acte ([[1323]]) ; entre cessionnaires successifs, le premier en date l'emporte ([[1325]]).", piege: "Exiger la signification par huissier de l'ancien article 1690 pour une cession postérieure au 1er octobre 2016." },
      { nom: "Le montant exigible", question: "Que peut réclamer le cessionnaire ?", detail: "La créance transmise avec ses accessoires ([[1321]], al. 3), pour sa **valeur nominale**, quel que soit le prix payé au cédant.", piege: "Limiter le cessionnaire au prix de cession : c'est la règle de la subrogation, pas de la cession." }
    ],
    exonerations: [
      { nom: "Exceptions inhérentes à la dette", question: "Le débiteur invoque-t-il la nullité, l'exception d'inexécution, la résolution ou la compensation de dettes connexes ?", detail: "Opposables au cessionnaire quelle que soit leur date ([[1324]], al. 2).", effet: "Le débiteur peut refuser de payer ou réduire son paiement comme il l'aurait fait face au cédant." },
      { nom: "Exceptions nées des rapports avec le cédant", question: "Terme, remise de dette, compensation de dettes non connexes : sont-ils nés avant que la cession soit devenue opposable au débiteur ?", detail: "Opposables seulement s'ils sont antérieurs à la notification ou à la prise d'acte ([[1324]], al. 2). Attention : le débiteur qui a pris acte **sans réserve** perd la compensation qu'il aurait pu opposer au cédant ([[1347-5]]).", effet: "Opposables si antérieures ; inopposables si postérieures." },
      { nom: "Garantie du cédant (rapport cédant/cessionnaire)", question: "La créance n'existait pas ou le débiteur est insolvable ?", detail: "Le cédant à titre onéreux garantit l'existence de la créance et de ses accessoires, sauf acquisition aux risques et périls ou connaissance de l'incertitude ; il ne garantit la solvabilité que s'il s'y est engagé, dans la limite du prix retiré ([[1326]]).", effet: "Recours du cessionnaire contre le cédant : restitution du prix, voire dommages et intérêts." }
    ],
    copie: [
      "Toujours poser les rôles : cédant, cessionnaire, débiteur cédé.",
      "Dater la cession (avant ou après le 1er octobre 2016) pour choisir entre l'ancien article 1690 et les articles 1322 à 1324.",
      "Classer chaque moyen de défense : inhérent à la dette ou né des rapports avec le cédant, puis dater par rapport à la notification."
    ]
  },
  {
    id: "cession-contrat",
    chapitre: "Transmission des obligations",
    titre: "Cession de contrat : conditions et sort du cédant",
    fondement: ["1216", "1216-1", "1216-2", "1216-3"],
    resume: "Déterminer si la cession de la qualité de partie est valable, si elle est opposable au cocontractant cédé et si le cédant est libéré.",
    conditions: [
      { nom: "Un contrat cessible", question: "Le contrat est-il en cours d'exécution et dépourvu de clause d'incessibilité ?", detail: "Un contrat entièrement exécuté n'a plus rien à céder. Un contrat *intuitu personae* est cessible avec l'accord du cédé.", piege: "Déclarer par principe incessible un contrat *intuitu personae*." },
      { nom: "Un écrit", question: "L'acte de cession entre cédant et cessionnaire est-il écrit ?", detail: "Écrit à peine de nullité ([[1216]], al. 3), pour les cessions conclues depuis le 1er octobre 2016." },
      { nom: "L'accord du cédé", question: "Le cédé a-t-il donné son accord, au moment de la cession ou par avance ?", detail: "Accord sans forme, pourvu qu'il soit non équivoque, prouvé par tout moyen ; à défaut, la cession est **inopposable** au cédé, pas nulle (Com., 24 avr. 2024). Accord anticipé : effet à l'égard du cédé à compter de la notification ou de la prise d'acte ([[1216]], al. 2).", preuve: "Par tout moyen : paiement du loyer au cessionnaire, correspondance, exécution sans réserve.", piege: "Conclure à la nullité de la cession faute d'accord du cédé (solution des arrêts de 1997, abandonnée)." },
      { nom: "La libération du cédant", question: "Le cédé a-t-il **expressément** consenti à libérer le cédant ?", detail: "Oui : cédant libéré pour l'avenir. Non : cédant tenu solidairement à l'exécution du contrat, sauf clause contraire ([[1216-1]]).", piege: "Confondre l'accord à la cession et le consentement à la libération." }
    ],
    exonerations: [
      { nom: "Exceptions opposables par le cessionnaire", question: "Le cessionnaire invoque-t-il une exception contre le cédé ?", detail: "Il peut opposer les exceptions inhérentes à la dette, pas celles personnelles au cédant ([[1216-2]], al. 1er).", effet: "Le cessionnaire peut refuser d'exécuter comme l'aurait fait le cédant, sur les défauts de la dette elle-même." },
      { nom: "Exceptions opposables par le cédé", question: "Le cédé invoque-t-il une exception contre le cessionnaire ?", detail: "Il peut opposer toutes celles qu'il aurait pu opposer au cédant ([[1216-2]], al. 2).", effet: "Le cessionnaire subit les défauts du contrat cédé." },
      { nom: "Sort des sûretés", question: "Le cédant a-t-il été libéré ?", detail: "Non libéré : les sûretés subsistent. Libéré : celles consenties par le cédant ou par des tiers ne subsistent qu'avec leur accord ([[1216-3]]).", effet: "Perte des garanties si le cédé libère le cédant sans obtenir l'accord des garants." }
    ],
    copie: [
      "Distinguer trois questions : validité (écrit), opposabilité (accord du cédé), libération (consentement exprès).",
      "Citer le revirement de fait : Com., 6 mai 1997 (consentement, condition de validité) puis Com., 24 avr. 2024 (accord, condition d'opposabilité)."
    ]
  },
  {
    id: "subrogation-personnelle",
    chapitre: "Transmission des obligations",
    titre: "Subrogation personnelle : existence et recours du solvens",
    fondement: ["1346", "1346-1", "1346-3", "1346-4", "1346-5"],
    resume: "Établir que celui qui a payé la dette d'autrui est subrogé dans les droits du créancier, puis mesurer son recours contre le débiteur.",
    conditions: [
      { nom: "Un paiement", question: "Le tiers a-t-il effectivement payé tout ou partie de la dette ?", detail: "Pas de subrogation sans paiement ([[1342]], al. 3). Une simple promesse de payer relève d'une autre qualification (cession de dette, délégation).", piege: "Parler de subrogation alors que personne n'a encore payé." },
      { nom: "Une source légale ou conventionnelle", question: "Le *solvens* a-t-il un intérêt légitime et son paiement libère-t-il le débiteur définitif (subrogation légale) ? À défaut, une subrogation expresse et concomitante a-t-elle été consentie ?", detail: "Légale : [[1346]]. Conventionnelle *ex parte creditoris* : expresse, concomitante au paiement sauf acte antérieur ([[1346-1]]). *Ex parte debitoris* : [[1346-2]].", preuve: "La concomitance se prouve par tous moyens ([[1346-1]], al. 3).", piege: "Oublier que le *solvens* ne doit pas être le débiteur définitif de ce qu'il paie : le codébiteur n'est subrogé que pour les parts des autres." },
      { nom: "L'opposabilité au débiteur", question: "La subrogation a-t-elle été notifiée au débiteur, ou en a-t-il pris acte ?", detail: "[[1346-5]], al. 1er. Aux tiers, elle est opposable dès le paiement." },
      { nom: "Le montant du recours", question: "Combien le subrogé a-t-il payé ?", detail: "Recours dans la limite du paiement, avec les accessoires, sauf droits exclusivement attachés à la personne du créancier ; intérêts au taux légal à compter d'une mise en demeure, sauf accord ([[1346-4]]).", piege: "Accorder le nominal de la créance, ou les frais exposés (ceux-ci relèvent d'une action personnelle)." }
    ],
    exonerations: [
      { nom: "Exceptions du débiteur", question: "Le débiteur invoque-t-il une exception inhérente à la dette ou née de ses rapports avec le subrogeant avant l'opposabilité ?", detail: "[[1346-5]], al. 3 : mêmes règles que pour la cession de créance.", effet: "Le subrogé subit les défauts de la créance transmise." },
      { nom: "Priorité du créancier partiellement payé", question: "Le créancier n'a-t-il été payé qu'en partie, et le patrimoine du débiteur est-il insuffisant ?", detail: "Le créancier exerce ses droits pour le solde par préférence au subrogé ([[1346-3]]), sauf convention contraire.", effet: "Le subrogé n'est payé qu'après le créancier." }
    ],
    copie: [
      "Toujours comparer avec les recours personnels (gestion d'affaires, enrichissement injustifié) : la subrogation donne les sûretés, mais limite le recours au montant payé.",
      "Chiffrer le résultat final : part du créancier, puis part du subrogé."
    ]
  }
);

OBL.cas.push({
  id: "ch20-menuiserie",
  titre: "La créance de la menuiserie et le paiement de la fille",
  seance: "Chapitre 20",
  regimes: ["cession-creance", "subrogation-personnelle"],
  faits: "En mars 2025, la SARL Atelier du Forez, menuiserie à Saint-Étienne, pose de nouvelles portes chez M. Dumas, pour un prix de 12 000 euros payable le 30 juin 2025. Le 2 mai 2025, par acte sous signature privée, elle cède cette créance à la société Finacred pour 10 500 euros. Le 12 mai 2025, par courriel, l'Atelier accorde à M. Dumas un délai de paiement jusqu'au 31 décembre 2025. Le 20 mai 2025, M. Dumas reçoit une lettre recommandée de Finacred l'informant de la cession. En juillet 2025, Finacred lui réclame 12 000 euros. M. Dumas refuse : il n'a jamais accepté la cession ; Finacred n'a payé que 10 500 euros ; il bénéficie d'un délai ; enfin, deux portes ferment mal. L'Atelier reprend ces deux portes en septembre 2025. En janvier 2026, M. Dumas, en difficulté, n'a toujours pas payé. Le 10 février 2026, sa fille Léa verse 6 000 euros à Finacred « pour le compte de son père », contre un simple reçu. En avril 2026, Finacred et Léa réclament chacune leur dû à M. Dumas, dont les biens saisissables ne valent que 7 000 euros.",
  question: "1) Finacred pouvait-elle exiger 12 000 euros en juillet 2025 ? 2) Léa peut-elle se retourner contre son père, pour quel montant, et comment se règle son conflit avec Finacred ?",
  corrige: {
    qualification: "Une cession de créance entre l'Atelier (cédant) et Finacred (cessionnaire), M. Dumas étant le débiteur cédé. Puis un paiement partiel de la dette d'autrui par un tiers (Léa), susceptible d'emporter subrogation personnelle.",
    probleme: "Une cession de créance est-elle opposable au débiteur qui n'y a pas consenti, pour quel montant, et sous réserve de quelles exceptions ? Le tiers qui paie partiellement la dette d'autrui est-il subrogé, et peut-il concourir avec le créancier partiellement payé sur le patrimoine insuffisant du débiteur ?",
    majeure: "La cession de créance est un contrat entre cédant et cessionnaire ; le consentement du débiteur n'est pas requis, sauf créance stipulée incessible (art. 1321). Elle doit être constatée par écrit à peine de nullité (art. 1322) ; elle est opposable aux tiers à sa date (art. 1323) et au débiteur à compter de sa notification ou de sa prise d'acte (art. 1324, al. 1er). La créance est transmise avec ses accessoires (art. 1321, al. 3), pour sa valeur nominale. Le débiteur peut opposer au cessionnaire les exceptions inhérentes à la dette, dont l'exception d'inexécution, ainsi que les exceptions nées de ses rapports avec le cédant avant que la cession lui soit devenue opposable, dont l'octroi d'un terme (art. 1324, al. 2) ; l'exception d'inexécution suppose une inexécution suffisamment grave (art. 1219). La subrogation a lieu par le seul effet de la loi au profit de celui qui, y ayant un intérêt légitime, paie dès lors que son paiement libère envers le créancier celui sur qui doit peser la charge définitive de la dette (art. 1346). Elle transmet la créance dans la limite de ce qui a été payé (art. 1346-4) ; elle est opposable au débiteur après notification ou prise d'acte (art. 1346-5) ; elle ne peut nuire au créancier payé en partie, qui exerce ses droits pour le solde par préférence (art. 1346-3).",
    mineure: [
      { condition: "Validité et opposabilité de la cession", corrige: "La cession, conclue le 2 mai 2025 par acte sous signature privée, respecte l'exigence d'écrit (art. 1322). Rien n'indique que la créance ait été stipulée incessible : le consentement de M. Dumas n'était pas nécessaire (art. 1321, al. 4), son premier argument est inopérant. La cession lui est opposable depuis la réception de la lettre recommandée, le 20 mai 2025 (art. 1324, al. 1er)." },
      { condition: "Le montant", corrige: "Finacred a acquis la créance elle-même : elle peut en réclamer la valeur nominale, 12 000 euros, peu important le prix de 10 500 euros payé au cédant. Le deuxième argument est inopérant." },
      { condition: "Le délai de paiement", corrige: "Le terme accordé le 12 mai 2025 est une exception née des rapports entre M. Dumas et le cédant, antérieure au 20 mai 2025, date à laquelle la cession lui est devenue opposable : il peut l'opposer à Finacred (art. 1324, al. 2). La dette n'était donc pas exigible en juillet 2025, mais seulement le 31 décembre 2025." },
      { condition: "Les portes défectueuses", corrige: "L'exception d'inexécution est inhérente à la dette : elle est opposable au cessionnaire quelle que soit sa date (art. 1324, al. 2). M. Dumas pouvait donc retenir tout ou partie du prix tant que les portes n'étaient pas reprises, à condition que l'inexécution soit suffisamment grave (art. 1219) ; à défaut, il aurait pu recourir à la réduction du prix (art. 1223). La reprise des portes en septembre 2025 a fait disparaître ce moyen." },
      { condition: "La subrogation de Léa", corrige: "Léa n'est pas tenue à la dette ; elle a payé 6 000 euros pour éviter des poursuites contre son père, ce qui caractérise un intérêt légitime ; son paiement libère partiellement envers Finacred le débiteur définitif, M. Dumas. Elle est donc subrogée de plein droit (art. 1346), sans qu'il soit besoin d'une quittance subrogative expresse, dont les conditions (art. 1346-1) ne sont d'ailleurs pas réunies avec un simple reçu. Son recours est limité à 6 000 euros (art. 1346-4), plus l'intérêt légal à compter d'une mise en demeure. Pour que la subrogation soit opposable à son père, elle doit la lui notifier (art. 1346-5). Elle dispose aussi, au besoin, d'un recours personnel (gestion d'affaires, enrichissement injustifié)." },
      { condition: "Le conflit avec Finacred", corrige: "Finacred reste créancière du solde : 12 000 − 6 000 = 6 000 euros. Le patrimoine saisissable de M. Dumas (7 000 euros) ne suffit pas à désintéresser les deux créanciers (12 000 euros au total). La subrogation ne pouvant nuire au créancier payé en partie, Finacred est payée par préférence de ses 6 000 euros (art. 1346-3) ; Léa ne recevra que le reliquat de 1 000 euros, et restera créancière de 5 000 euros." }
    ],
    conclusion: "En juillet 2025, Finacred ne pouvait rien exiger : la cession était valable et opposable à M. Dumas, pour 12 000 euros, mais le terme accordé avant la notification lui était opposable jusqu'au 31 décembre 2025, de même que l'exception d'inexécution tant que les portes n'étaient pas reprises. Léa est subrogée de plein droit à hauteur de 6 000 euros ; sur les 7 000 euros disponibles, Finacred sera payée en priorité de son solde de 6 000 euros, et Léa ne recevra que 1 000 euros."
  }
});

OBL.articles.push(
  {"num": "1216", "code": "C. civ.", "theme": "Cession de contrat", "texte": "Un contractant, le cédant, peut céder sa qualité de partie au contrat à un tiers, le cessionnaire, avec l'accord de son cocontractant, le cédé.\n\nCet accord peut être donné par avance, notamment dans le contrat conclu entre les futurs cédant et cédé, auquel cas la cession produit effet à l'égard du cédé lorsque le contrat conclu entre le cédant et le cessionnaire lui est notifié ou lorsqu'il en prend acte.\n\nLa cession doit être constatée par écrit, à peine de nullité.", "chapitres": [20], "retenir": "Cession de la qualité de partie avec l'accord du cédé (même donné par avance : effet dès notification ou prise d'acte) ; écrit à peine de nullité."},
  {"num": "1216-1", "code": "C. civ.", "theme": "Cession de contrat", "texte": "Si le cédé y a expressément consenti, la cession de contrat libère le cédant pour l'avenir.\n\nA défaut, et sauf clause contraire, le cédant est tenu solidairement à l'exécution du contrat.", "chapitres": [20], "retenir": "Cédant libéré pour l'avenir seulement si le cédé y consent expressément ; sinon, tenu solidairement."},
  {"num": "1216-2", "code": "C. civ.", "theme": "Cession de contrat", "texte": "Le cessionnaire peut opposer au cédé les exceptions inhérentes à la dette, telles que la nullité, l'exception d'inexécution, la résolution ou la compensation de dettes connexes. Il ne peut lui opposer les exceptions personnelles au cédant.\n\nLe cédé peut opposer au cessionnaire toutes les exceptions qu'il aurait pu opposer au cédant.", "chapitres": [20], "retenir": "Le cessionnaire oppose les exceptions inhérentes à la dette ; le cédé oppose au cessionnaire toutes celles qu'il avait contre le cédant."},
  {"num": "1216-3", "code": "C. civ.", "theme": "Cession de contrat", "texte": "Si le cédant n'est pas libéré par le cédé, les sûretés qui ont pu être consenties subsistent. Dans le cas contraire, les sûretés consenties par le cédant ou par des tiers ne subsistent qu'avec leur accord.\n\nSi le cédant est libéré, ses codébiteurs solidaires restent tenus déduction faite de sa part dans la dette.", "chapitres": [20], "retenir": "Sûretés maintenues si le cédant n'est pas libéré ; sinon, seulement avec l'accord des garants."},
  {"num": "1321", "code": "C. civ.", "theme": "Cession de créance", "texte": "La cession de créance est un contrat par lequel le créancier cédant transmet, à titre onéreux ou gratuit, tout ou partie de sa créance contre le débiteur cédé à un tiers appelé le cessionnaire.\n\nElle peut porter sur une ou plusieurs créances présentes ou futures, déterminées ou déterminables.\n\nElle s'étend aux accessoires de la créance.\n\nLe consentement du débiteur n'est pas requis, à moins que la créance ait été stipulée incessible.", "chapitres": [20], "retenir": "Contrat cédant/cessionnaire ; créances présentes ou futures ; accessoires transmis ; consentement du débiteur inutile sauf incessibilité stipulée."},
  {"num": "1322", "code": "C. civ.", "theme": "Cession de créance", "texte": "La cession de créance doit être constatée par écrit, à peine de nullité.", "chapitres": [20], "retenir": "Écrit à peine de nullité."},
  {"num": "1323", "code": "C. civ.", "theme": "Cession de créance", "texte": "Entre les parties, le transfert de la créance, présente ou future, s'opère à la date de l'acte.\n\nIl est opposable aux tiers dès ce moment. En cas de contestation, la preuve de la date de la cession incombe au cessionnaire, qui peut la rapporter par tout moyen.", "chapitres": [20], "retenir": "Transfert à la date de l'acte entre les parties ; opposable aux tiers dès ce moment ; date prouvée par tout moyen."},
  {"num": "1324", "code": "C. civ.", "theme": "Cession de créance", "texte": "La cession n'est opposable au débiteur, s'il n'y a déjà consenti, que si elle lui a été notifiée ou s'il en a pris acte.\n\nLe débiteur peut opposer au cessionnaire les exceptions inhérentes à la dette, telles que la nullité, l'exception d'inexécution, la résolution ou la compensation des dettes connexes. Il peut également opposer les exceptions nées de ses rapports avec le cédant avant que la cession lui soit devenue opposable, telles que l'octroi d'un terme, la remise de dette ou la compensation de dettes non connexes.\n\nLe cédant et le cessionnaire sont solidairement tenus de tous les frais supplémentaires occasionnés par la cession dont le débiteur n'a pas à faire l'avance. Sauf clause contraire, la charge de ces frais incombe au cessionnaire.", "chapitres": [20], "retenir": "Opposable au débiteur après notification ou prise d'acte ; exceptions inhérentes à la dette et exceptions nées avant l'opposabilité."},
  {"num": "1325", "code": "C. civ.", "theme": "Cession de créance", "texte": "Le concours entre cessionnaires successifs d'une créance se résout en faveur du premier en date ; il dispose d'un recours contre celui auquel le débiteur aurait fait un paiement.", "chapitres": [20], "retenir": "Entre cessionnaires successifs, le premier en date l'emporte."},
  {"num": "1326", "code": "C. civ.", "theme": "Cession de créance", "texte": "Celui qui cède une créance à titre onéreux garantit l'existence de la créance et de ses accessoires, à moins que le cessionnaire l'ait acquise à ses risques et périls ou qu'il ait connu le caractère incertain de la créance.\n\nIl ne répond de la solvabilité du débiteur que lorsqu'il s'y est engagé, et jusqu'à concurrence du prix qu'il a pu retirer de la cession de sa créance.\n\nLorsque le cédant a garanti la solvabilité du débiteur, cette garantie ne s'entend que de la solvabilité actuelle ; elle peut toutefois s'étendre à la solvabilité à l'échéance, mais à la condition que le cédant l'ait expressément spécifié.", "chapitres": [20], "retenir": "Garantie de l'existence de la créance ; solvabilité du débiteur garantie seulement si le cédant s'y est engagé, dans la limite du prix."},
  {"num": "1327", "code": "C. civ.", "theme": "Cession de dette", "texte": "Un débiteur peut, avec l'accord du créancier, céder sa dette.\n\nLa cession doit être constatée par écrit, à peine de nullité.", "chapitres": [20], "retenir": "Cession avec l'accord du créancier ; écrit à peine de nullité (depuis le 1er oct. 2018)."},
  {"num": "1327-1", "code": "C. civ.", "theme": "Cession de dette", "texte": "Le créancier, s'il a par avance donné son accord à la cession et n'y est pas intervenu, ne peut se la voir opposer ou s'en prévaloir que du jour où elle lui a été notifiée ou dès qu'il en a pris acte.", "chapitres": [20], "retenir": "Accord anticipé : opposable au créancier dès notification ou prise d'acte."},
  {"num": "1327-2", "code": "C. civ.", "theme": "Cession de dette", "texte": "Si le créancier y consent expressément, le débiteur originaire est libéré pour l'avenir. A défaut, et sauf clause contraire, il est tenu solidairement au paiement de la dette.", "chapitres": [20], "retenir": "Débiteur originaire libéré seulement sur consentement exprès du créancier ; sinon, solidarité."},
  {"num": "1328", "code": "C. civ.", "theme": "Cession de dette", "texte": "Le débiteur substitué, et le débiteur originaire s'il reste tenu, peuvent opposer au créancier les exceptions inhérentes à la dette, telles que la nullité, l'exception d'inexécution, la résolution ou la compensation de dettes connexes. Chacun peut aussi opposer les exceptions qui lui sont personnelles.", "chapitres": [20], "retenir": "Exceptions inhérentes à la dette et exceptions personnelles opposables au créancier."},
  {"num": "1328-1", "code": "C. civ.", "theme": "Cession de dette", "texte": "Lorsque le débiteur originaire n'est pas déchargé par le créancier, les sûretés subsistent. Dans le cas contraire, les sûretés consenties par le débiteur originaire ou par des tiers ne subsistent qu'avec leur accord.\n\nSi le cédant est déchargé, ses codébiteurs solidaires restent tenus déduction faite de sa part dans la dette.", "chapitres": [20], "retenir": "Sûretés maintenues sans décharge ; avec décharge, seulement avec l'accord des garants."},
  {"num": "1346", "code": "C. civ.", "theme": "Subrogation légale", "texte": "La subrogation a lieu par le seul effet de la loi au profit de celui qui, y ayant un intérêt légitime, paie dès lors que son paiement libère envers le créancier celui sur qui doit peser la charge définitive de tout ou partie de la dette.", "chapitres": [20], "retenir": "Au profit de celui qui, ayant un intérêt légitime, paie et libère le débiteur définitif."},
  {"num": "1346-1", "code": "C. civ.", "theme": "Subrogation conventionnelle", "texte": "La subrogation conventionnelle s'opère à l'initiative du créancier lorsque celui-ci, recevant son paiement d'une tierce personne, la subroge dans ses droits contre le débiteur.\n\nCette subrogation doit être expresse.\n\nElle doit être consentie en même temps que le paiement, à moins que, dans un acte antérieur, le subrogeant n'ait manifesté la volonté que son cocontractant lui soit subrogé lors du paiement. La concomitance de la subrogation et du paiement peut être prouvée par tous moyens.", "chapitres": [20], "retenir": "Consentie par le créancier : expresse et concomitante au paiement (sauf acte antérieur)."},
  {"num": "1346-2", "code": "C. civ.", "theme": "Subrogation conventionnelle", "texte": "La subrogation a lieu également lorsque le débiteur, empruntant une somme à l'effet de payer sa dette, subroge le prêteur dans les droits du créancier avec le concours de celui-ci. En ce cas, la subrogation doit être expresse et la quittance donnée par le créancier doit indiquer l'origine des fonds.\n\nLa subrogation peut être consentie sans le concours du créancier, mais à la condition que la dette soit échue ou que le terme soit en faveur du débiteur. Il faut alors que l'acte d'emprunt et la quittance soient passés devant notaire, que dans l'acte d'emprunt il soit déclaré que la somme a été empruntée pour faire le paiement, et que dans la quittance il soit déclaré que le paiement a été fait des sommes versées à cet effet par le nouveau créancier.", "chapitres": [20], "retenir": "Consentie par le débiteur qui emprunte pour payer : avec le concours du créancier ou, sans lui, par actes notariés."},
  {"num": "1346-3", "code": "C. civ.", "theme": "Effets de la subrogation", "texte": "La subrogation ne peut nuire au créancier lorsqu'il n'a été payé qu'en partie ; en ce cas, il peut exercer ses droits, pour ce qui lui reste dû, par préférence à celui dont il n'a reçu qu'un paiement partiel.", "chapitres": [20], "retenir": "Ne peut nuire au créancier payé en partie, préféré pour le solde."},
  {"num": "1346-4", "code": "C. civ.", "theme": "Effets de la subrogation", "texte": "La subrogation transmet à son bénéficiaire, dans la limite de ce qu'il a payé, la créance et ses accessoires, à l'exception des droits exclusivement attachés à la personne du créancier.\n\nToutefois, le subrogé n'a droit qu'à l'intérêt légal à compter d'une mise en demeure, s'il n'a convenu avec le débiteur d'un nouvel intérêt. Ces intérêts sont garantis par les sûretés attachées à la créance, dans les limites, lorsqu'elles ont été constituées par des tiers, de leurs engagements initiaux s'ils ne consentent à s'obliger au-delà.", "chapitres": [20], "retenir": "Transmission de la créance et de ses accessoires dans la limite du paiement ; intérêt légal après mise en demeure."},
  {"num": "1346-5", "code": "C. civ.", "theme": "Effets de la subrogation", "texte": "Le débiteur peut invoquer la subrogation dès qu'il en a connaissance mais elle ne peut lui être opposée que si elle lui a été notifiée ou s'il en a pris acte.\n\nLa subrogation est opposable aux tiers dès le paiement.\n\nLe débiteur peut opposer au créancier subrogé les exceptions inhérentes à la dette, telles que la nullité, l'exception d'inexécution, la résolution ou la compensation de dettes connexes. Il peut également lui opposer les exceptions nées de ses rapports avec le subrogeant avant que la subrogation lui soit devenue opposable, telles que l'octroi d'un terme, la remise de dette ou la compensation de dettes non connexes.", "chapitres": [20], "retenir": "Opposable au débiteur après notification ou prise d'acte, aux tiers dès le paiement ; régime des exceptions."},
  {"num": "1743", "code": "C. civ.", "theme": "Bail", "texte": "Si le bailleur vend la chose louée, l'acquéreur ne peut expulser le fermier, le métayer ou le locataire qui a un bail authentique ou dont la date est certaine.\n\nIl peut, toutefois, expulser le locataire de biens non ruraux s'il s'est réservé ce droit par le contrat de bail.", "chapitres": [20], "retenir": "La vente du bien loué ne permet pas à l'acquéreur d'expulser le locataire ayant un bail authentique ou à date certaine."}
);
