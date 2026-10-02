/* Chapitre 11 — L'inexécution du contrat : les autres sanctions
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 11,
  intro: "Deux sanctions de [[1217]] ne visent pas à obtenir la prestation : la **résolution**, qui met fin au contrat inexécuté et peut donner lieu à des restitutions, et la **responsabilité contractuelle**, qui indemnise le préjudice causé par l'inexécution. La première s'obtient par trois voies (clause résolutoire, notification, juge : [[1224]]) ; la seconde suppose une inexécution, un préjudice prévisible et un lien de causalité, et peut être aménagée par des clauses (limitatives, pénales) strictement encadrées. La mise en demeure et la notion de force majeure ont été étudiées au chapitre 10 : on n'en reprend ici que les règles propres à ces deux sanctions.",
  sections: [
    {
      titre: "La résolution : trois voies",
      contenu: [
        { def: { terme: "Résolution", texte: "sanction de l'inexécution qui **met fin au contrat** ([[1229]]) et donne lieu, selon les cas, à des **restitutions**. Elle « résulte soit de l'application d'une clause résolutoire soit, en cas d'inexécution suffisamment grave, d'une notification du créancier au débiteur ou d'une décision de justice » ([[1224]]). S'y ajoute la résolution de plein droit en cas de force majeure définitive ([[1218]])." } },
        { p: "Depuis 2016, la résolution judiciaire n'est plus la voie de principe : les trois modes sont placés sur le même plan. Le créancier choisit entre résolution et exécution forcée, mais ne peut obtenir les deux pour la même obligation ; il peut en revanche toujours demander en plus des dommages et intérêts ([[1217]])." },
        { schema: { type: "tableau", titre: "Les trois modes de résolution", colonnes: ["", "Clause résolutoire ([[1225]])", "Notification ([[1226]])", "Juge ([[1227]], [[1228]])"], lignes: [
          ["Gravité de l'inexécution", "**Non exigée** : la clause désigne les engagements visés", "**Suffisamment grave** ([[1224]])", "**Suffisamment grave** ([[1224]])"],
          ["Mise en demeure", "Oui, **mentionnant expressément la clause**, sauf stipulation contraire", "Oui, **annonçant la résolution**, dans un délai raisonnable, sauf urgence", "Non exigée : l'assignation suffit"],
          ["Autre formalité", "Aucune", "**Notification motivée** de la résolution", "Action en justice"],
          ["Rôle du juge", "Contrôle *a posteriori* : qualification, conditions, bonne foi du créancier ; **pas de délai de grâce**", "Contrôle *a posteriori* si le débiteur conteste ; le créancier prouve la gravité", "Pouvoir souverain : résolution, exécution avec délai, ou dommages et intérêts seulement"],
          ["Prise d'effet ([[1229]], al. 2)", "Selon la clause", "Réception de la notification par le débiteur", "Date fixée par le juge ou, à défaut, jour de l'assignation"],
          ["Risque", "Faible si la clause est claire", "Exercée « à ses **risques et périls** »", "Délai du procès"]
        ] } }
      ]
    },
    {
      titre: "La clause résolutoire",
      contenu: [
        { def: { terme: "Clause résolutoire", texte: "stipulation qui « précise les engagements dont l'inexécution entraînera la résolution du contrat » ([[1225]], al. 1er) et permet au créancier de résoudre **de plein droit**, sans juge, quelle que soit la gravité du manquement." } },
        { liste: [
          "**Interprétation stricte** : la clause doit exprimer sans équivoque la volonté de résoudre **de plein droit** ; à défaut, elle ne fait que rappeler la possibilité d'une résolution judiciaire (Civ. 1re, 15 juin 1994 ; Civ. 3e, 12 oct. 1994).",
          "Le principe de la mise en demeure préalable était déjà posé avant 2016 (Civ. 3e, 23 mars 2017, n° 16-13.060, le rappelle). Elle doit **désigner les obligations** visées : les clauses « balais » (« tout manquement à l'une quelconque des obligations ») ne répondent pas à [[1225]].",
          "Licite par principe, sauf textes spéciaux (assurance, certains baux) et contrôle des clauses abusives ([[1171]] ; droit de la consommation).",
          "**Mise en demeure infructueuse** préalable, qui **mentionne expressément la clause**, sauf stipulation dispensant de mise en demeure ([[1225]], al. 2)."
        ] },
        { h: "Les pouvoirs du juge" },
        { liste: [
          "Il vérifie la **qualification** de la clause et la réunion de ses **conditions**.",
          "Il peut en écarter le jeu si le **créancier** l'invoque de **mauvaise foi** (Civ. 1re, 31 janv. 1995) : aujourd'hui fondement de [[1104]]. Ex. : sommation délivrée pendant les congés du débiteur, que le créancier savait absent, ou bailleur qui refuse de délivrer les quittances de loyer et prive le locataire des aides au logement. Autres arrêts : Civ. 1re, 16 févr. 1999 et 10 nov. 2010 ; Civ. 3e, 8 sept. 2016, n° 13-28.063.",
          "La **bonne foi du débiteur** est en revanche indifférente (Civ. 3e, 10 mars 1993) : sinon, on ajouterait une condition à la clause.",
          "Il ne peut pas accorder de **délai de grâce** (solution acquise de longue date : Civ. 3e, 4 juin 1986 ; exceptions par textes spéciaux, notamment en matière de baux), ni modifier une clause qu'il jugerait déséquilibrée (la sanction passe par [[1171]] ou par la bonne foi, pas par la révision)."
        ] },
        { h: "Clause résolutoire et résolution judiciaire" },
        { p: "« La résolution peut, en toute hypothèse, être demandée en justice » ([[1227]]) : la clause est **facultative** pour le créancier, qui peut préférer le juge (pour obtenir en même temps des dommages et intérêts, ou faire trancher une contestation). Cette solution est ancienne (Com., 7 mars 1984). Une clause de **renonciation anticipée** à la résolution judiciaire est valable si elle est expresse et révèle la compréhension de sa portée par celui qui renonce (Civ. 3e, 3 nov. 2011). Le rapport sur l'ordonnance n'entend pas remettre en cause cette jurisprudence : le juge vérifie au cas par cas que la renonciation ne porte pas atteinte à la substance du droit d'agir ni à celui d'obtenir l'exécution par les autres sanctions de [[1217]]. L'intérêt de la voie judiciaire malgré la clause : cumuler résolution et dommages et intérêts, et soumettre l'appréciation de l'inexécution au juge." }
      ]
    },
    {
      titre: "La résolution par notification",
      contenu: [
        { p: "Avant 2016, la jurisprudence admettait déjà que « la gravité du comportement d'une partie à un contrat peut justifier que l'autre partie y mette fin de façon unilatérale à ses risques et périls » (Civ. 1re, 13 oct. 1998, Tocqueville, n° 96-21.485 : clinique rompant avec un anesthésiste ; Civ. 1re, 20 févr. 2001 ; Com., 10 févr. 2009). [[1226]] consacre et encadre cette faculté, pour les contrats à durée déterminée comme indéterminée. Certains textes spéciaux la prévoyaient déjà (faute grave en droit du travail), mais la chambre sociale a estimé, dans un avis du 3 avr. 2019, que [[1226]] ne s'applique pas aux modes de rupture du contrat de travail. Le critère a glissé du « comportement » grave (arrêts de 1998 et 2001) vers le « manquement » grave, plus objectif ; les deux approches coexistent encore." },
        { schema: { type: "etapes", titre: "La procédure de l'article 1226", etapes: [
          { t: "1. Une inexécution suffisamment grave", d: "même exigence que pour la résolution judiciaire ; la jurisprudence retient un manquement grave ou un comportement grave (Com., 18 oct. 2023, n° 20-21.579)" },
          { t: "2. Une mise en demeure spéciale", d: "sommer le débiteur de s'exécuter dans un délai raisonnable en mentionnant expressément qu'à défaut le créancier sera en droit de résoudre ; dispense en cas d'urgence, ou lorsqu'il résulte des circonstances qu'elle est vaine (Com., 18 oct. 2023)" },
          { t: "3. La persistance de l'inexécution", d: "à l'expiration du délai" },
          { t: "4. La notification motivée", d: "le créancier notifie la résolution **et les raisons qui la motivent** ; effet à la réception par le débiteur ([[1229]])" },
          { t: "5. Le contrôle éventuel du juge", d: "le débiteur peut à tout moment contester ; le **créancier** doit alors **prouver la gravité** de l'inexécution ([[1226]], al. 4)" }
        ] } },
        { attention: "« À ses risques et périls » : si la rupture est jugée injustifiée, le créancier peut être condamné à des dommages et intérêts, et le juge peut refuser d'en tirer effet, le contrat continuant alors à produire ses effets." },
        { p: "Articulation avec une clause résolutoire : la chambre commerciale admet la résolution unilatérale même si le contrat contient une clause résolutoire dont les modalités n'ont pas été respectées (Com., 10 févr. 2009) ; la troisième chambre civile a paru plus réservée (Civ. 3e, 9 oct. 2013), avant une inflexion possible (Civ. 3e, 8 févr. 2018, n° 16-24.641). La solution est confirmée en chambre commerciale (Com., 1er oct. 2013, n° 12-20.830). Les textes de 2016 sont muets sur ce point. Si la rupture est infondée, le juge peut l'écarter : le contrat continue (Com., 18 nov. 2008)." }
      ]
    },
    {
      titre: "La résolution judiciaire",
      contenu: [
        { h: "Domaine" },
        { p: "Terrain d'élection : les **contrats synallagmatiques**. Quelques contrats synallagmatiques y échappent (assurance, où joue la déchéance ; rente viagère, art. 1978 ; cession d'office ministériel, la résolution rétroactive remettant en cause la nomination de l'officier et les actes passés) ; à l'inverse, certains contrats unilatéraux comme le prêt à intérêt (art. 1912) peuvent être résolus, ses obligations étant très proches de l'interdépendance (le prêt d'un professionnel du crédit est d'ailleurs consensuel depuis Civ. 1re, 27 mai 2000). [[1224]] ne mentionne plus la limite aux contrats synallagmatiques." },
        { h: "Conditions de fond" },
        { liste: [
          "**L'inexécution d'une obligation contractuelle**, même tacite (obligation d'information du vendeur : Civ. 1re, 28 mai 2009) ; la violation d'une obligation purement légale ne suffit pas, en principe. La **faute n'est pas exigée** : le constat du manquement suffit (Com., 18 janv. 2023, n° 21-16.812, sous le visa de [[1217]]).",
          "**Une inexécution suffisamment grave** ([[1224]]), appréciée souverainement : carence caractérisée, ou manquement à une obligation **déterminante** de la conclusion du contrat (Com., 2 juill. 1996). Le juge se demande si le lien contractuel peut encore être utile.",
          "**Dieselgate** : la livraison d'un véhicule équipé d'un dispositif d'invalidation interdit par le droit de l'Union caractérise un manquement grave à l'obligation de délivrance conforme justifiant la résolution, sans que les juges du fond puissent la refuser au motif d'un rappel proposé ou d'un long usage du véhicule (Civ. 1re, 24 sept. 2025, n° 23-23.869). La Cour crée ainsi un manquement-type emportant résolution (Genicon) : la gravité se déduit de la nature de l'obligation violée, avec une fonction quasi pénale.",
          "**Torts réciproques** : le juge peut prononcer la résolution **aux torts partagés** ; les restitutions sont dues selon le droit commun, les fautes respectives jouant sur les dommages et intérêts (Com., 15 mai 2024, n° 23-13.990).",
          "**Force majeure** : sous l'empire de l'ancien article 1184, la résolution devait être demandée au juge même en cas de force majeure (Civ., 14 avr. 1891). [[1218]] prévoit désormais une résolution de plein droit si l'empêchement est définitif (voir chapitre 10)."
        ] },
        { h: "Mise en œuvre et pouvoirs du juge" },
        { liste: [
          "Seul le **créancier** de l'obligation inexécutée peut agir (Civ., 4 mai 1920) ; le débiteur défaillant peut éviter la résolution en **offrant d'exécuter**, à tout moment, même pour la première fois en appel.",
          "Le juge apprécie la situation **au jour où il statue**, en tenant compte des éléments postérieurs à l'assignation (commencement d'exécution).",
          "Selon [[1228]], il peut **constater ou prononcer** la résolution, **ordonner l'exécution** en accordant éventuellement un **délai** au débiteur, ou allouer **seulement des dommages et intérêts**.",
          "Il ne peut pas à la fois résoudre le contrat et condamner le débiteur à l'exécuter : les deux sanctions sont incompatibles (Civ. 1re, 17 févr. 1982)."
        ] }
      ]
    },
    {
      titre: "Les effets de la résolution",
      contenu: [
        { p: "« La résolution met fin au contrat » ([[1229]], al. 1er) : l'ordonnance a **abandonné la référence à la rétroactivité**. Les restitutions éventuelles ont un fondement légal et suivent le droit commun des restitutions ([[1352]] à [[1352-9]]), y compris en cas de torts réciproques." },
        { schema: { type: "tableau", titre: "Quelles restitutions ? Le critère de l'utilité ([[1229]], al. 3)", colonnes: ["", "Utilité globale", "Utilité au fur et à mesure"], lignes: [
          ["Hypothèse", "Les prestations ne trouvaient leur utilité que par l'**exécution complète** du contrat", "Les prestations ont trouvé leur utilité **au fur et à mesure** de l'exécution réciproque"],
          ["Exemples", "Vente ; construction d'un ouvrage inachevé", "Bail, contrat d'entretien ou d'abonnement exécuté correctement pendant un temps"],
          ["Restitutions", "**Intégrales** : chacun rend tout ce qu'il a reçu", "**Aucune** pour la période antérieure à la dernière prestation n'ayant pas reçu sa contrepartie"],
          ["Nom", "Résolution", "**Résiliation**"],
          ["Droit antérieur", "Anéantissement rétroactif si inexécution dès l'origine (Civ. 3e, 30 avr. 2003)", "Résiliation pour l'avenir à partir de l'inexécution (même arrêt)"]
        ] } },
        { h: "Les clauses qui survivent ([[1230]])" },
        { p: "La résolution n'affecte ni les clauses relatives au **règlement des différends** (clause compromissoire, attributive de juridiction), ni celles **destinées à produire effet même en cas de résolution**, comme les clauses de **confidentialité** et de **non-concurrence** (innovation sur ce dernier point, la jurisprudence contraire datant de Civ. 1re, 6 mars 1996, n° 93-21.728 ; solution proche des principes européens du droit des contrats). Pour des contrats antérieurs à 2016, la chambre commerciale a admis le maintien d'une clause limitative de réparation malgré la résolution (Com., 7 févr. 2018, n° 16-20.352) ; la clause pénale produit elle aussi effet." },
        { h: "Les contrats interdépendants" },
        { p: "La disparition d'un contrat par résolution peut entraîner la **caducité** des contrats interdépendants ([[1186]], al. 2 et 3 ; effets : [[1187]]). La résolution par notification suffit et est opposable à celui contre qui la caducité est invoquée, sans qu'il soit nécessaire d'attraire le cocontractant du contrat résolu (Com., 5 févr. 2025, n° 23-23.358)." }
      ]
    },
    {
      titre: "La responsabilité contractuelle : l'inexécution",
      contenu: [
        { def: { terme: "Responsabilité contractuelle", texte: "obligation pour le débiteur de **réparer le préjudice** causé au créancier par l'inexécution ou le retard ([[1231-1]]). Conçue en 1804 comme une exécution par équivalent, elle fonctionne aujourd'hui comme une véritable technique de responsabilité. L'ordonnance de 2016 a repris les textes à droit constant ([[1231]] à [[1231-7]])." } },
        { p: "**Préalable** : un contrat entre le responsable et la victime, et un dommage résultant de l'inexécution d'une obligation de ce contrat. La victime ne peut alors pas choisir le terrain délictuel (règle du **non-cumul**, étudiée avec la responsabilité extracontractuelle). **Mise en demeure** : les dommages et intérêts ne sont dus qu'après mise en demeure dans un délai raisonnable, sauf inexécution **définitive** ([[1231]])." },
        { h: "Obligation de moyens et obligation de résultat" },
        { p: "Proposée par Demogue pour concilier l'ancien article 1137 (soins d'un bon père de famille, aujourd'hui d'une « personne raisonnable ») et l'ancien article 1147 (condamnation sauf cause étrangère, aujourd'hui [[1231-1]]), la distinction gouverne la **preuve** de l'inexécution fautive." },
        { schema: { type: "tableau", titre: "Moyens ou résultat : ce qui change", colonnes: ["", "Obligation de moyens", "Obligation de résultat", "Régime intermédiaire"], lignes: [
          ["Engagement", "Mettre en œuvre tous les moyens pour atteindre un but", "Atteindre le résultat promis", "Faute présumée"],
          ["Preuve pour le créancier", "Prouver la **faute** (comportement non conforme à celui d'un professionnel raisonnable, apprécié *in abstracto*)", "Prouver que le **résultat n'est pas atteint**", "Prouver le dommage survenu après l'intervention"],
          ["Exonération du débiteur", "Absence de faute ou cause étrangère", "**Seulement la cause étrangère**", "Preuve de l'absence de faute"],
          ["Exemples", "Médecin (soins : Civ., 20 mai 1936, Mercier), avocat, enseignant, voyageur jouant un rôle actif (embarquement d'un télésiège)", "Livrer une chose, ne pas faire, transporteur de personnes pendant le trajet (télésiège en marche : Civ. 1re, 11 mars 1986)", "Garagiste : faute et lien causal présumés si les désordres surviennent ou persistent après son intervention (Civ. 1re, 11 mai 2022, n° 20-19.732 ; Civ. 1re, 25 juin 2025, n° 23-22.515) ; employeur exposant le salarié à une substance nocive (Soc., 25 nov. 2015, n° 14-24.444 ; Ass. plén., 5 avr. 2019, n° 18-17.442) ; bail ([[1732]])"]
        ] } },
        { liste: [
          "**Critères** : d'abord la **volonté des parties** ; subsidiairement l'**aléa** (le débiteur maîtrisait-il seul l'exécution ? Civ. 3e, 5 nov. 2020, n° 19-10.857 : entretien de la porte d'accès d'un parking) et, pour la sécurité, le **rôle actif ou passif** du créancier.",
          "**Opportunité** : le souci d'indemniser les atteintes corporelles pousse vers l'obligation de résultat (centres de transfusion sanguine et sang contaminé : Civ. 1re, 12 avr. 1995), avant l'intervention d'une loi d'indemnisation spéciale (CSP, art. L. 3122-1 s.).",
          "**Transport ferroviaire** : obligation de sécurité de résultat du moment où le voyageur commence à monter dans le train jusqu'à ce qu'il achève d'en descendre (Civ. 2e, 7 mars 1989) ; l'accident de quai relève du droit délictuel.",
          "**Responsabilité médicale** : depuis la loi du 4 mars 2002, elle est **légale** et fondée sur la faute (CSP, art. L. 1142-1) ; l'ancienne obligation de sécurité de résultat en matière d'infections nosocomiales (Civ. 1re, 29 juin 1999) est relayée par la loi pour les établissements de santé. Par un arrêt de principe (Civ. 1re, 14 oct. 2010), la Cour de cassation en a déduit que la responsabilité médicale est devenue légale, de sorte que la question est moins celle de moyens ou de résultat que celle de la faute ou de l'absence de faute ; le droit à indemnisation d'un accident médical non fautif relève de la solidarité nationale. Des solutions dérogatoires existaient pour le matériel défectueux (Civ. 1re, 9 nov. 1999 ; 7 nov. 2000)."
        ] },
        { h: "La gravité de la faute" },
        { p: "Une faute simple suffit à engager la responsabilité, sauf texte spécial exigeant une faute qualifiée (CASF, art. L. 114-5 : faute caractérisée du médecin pour le préjudice moral des parents d'un enfant né handicapé). Mais prouver une faute **lourde** ou **dolosive** écarte la limitation au préjudice prévisible ([[1231-3]]) et les clauses limitatives." },
        { liste: [
          "**Faute dolosive** : inexécution **délibérée**, sans qu'il soit besoin d'une intention de nuire (Civ. 1re, 4 févr. 1969). Rien à voir avec le dol vice du consentement (confusion que l'ordonnance de 2016 a voulu éviter en abandonnant le mot « dol » dans [[1231-3]]) ; voir aussi Com., 4 mars 2008.",
          "**Faute lourde** : négligence d'une **extrême gravité**, confinant au dol et dénotant l'inaptitude du débiteur à accomplir sa mission ; elle est assimilée au dol (Req., 24 oct. 1932). Elle ne se déduit plus du seul manquement à une obligation essentielle (Ch. mixte, 22 avr. 2005 ; Com., 13 juin 2006), conception que la 1re chambre civile avait retenue en 1984 ; illustration récente : Com., 10 mars 2009.",
          "À distinguer de la faute lucrative de [[1254]] (loi du 30 avr. 2025) : **sanction civile** prononcée à la demande du ministère public ou du Gouvernement contre un professionnel qui a délibérément commis une faute en vue d'un gain ou d'une économie indus ayant causé des dommages à plusieurs personnes ; son produit alimente un fonds de financement des actions de groupe (étudiée avec la réparation)."
        ] }
      ]
    },
    {
      titre: "La responsabilité contractuelle : exonération, préjudice, causalité",
      contenu: [
        { schema: { type: "arbre", titre: "Comment le débiteur échappe-t-il à sa responsabilité ?", racine: { t: "Causes d'exonération", enfants: [
          { t: "Absence de faute", d: "seulement pour une obligation de moyens (en réalité, la condition de la responsabilité manque)" },
          { t: "Force majeure ([[1231-1]], [[1218]])", d: "exonération totale", enfants: [
            { t: "Fait de la chose utilisée", d: "jamais exonératoire : le vice de la chose n'échappe pas au contrôle du débiteur" },
            { t: "Fait d'un préposé ou d'un substitut", d: "jamais exonératoire : le débiteur répond de ceux qu'il emploie (Civ. 1re, 18 janv. 1989 : incendie volontaire par le gardien)" }
          ] },
          { t: "Fait d'un tiers", d: "exonération totale s'il présente les caractères de la force majeure et que le tiers est étranger à la sphère du débiteur ; sinon, le débiteur et le tiers sont tenus *in solidum* ; le tiers ne doit pas relever de la sphère du débiteur (Civ. 1re, 23 juin 2011 : agression d'un voyageur par un autre dans un train)" },
          { t: "Fait du créancier", d: "force majeure : exonération totale ; faute non irrésistible : exonération **partielle** selon la gravité des fautes (Civ. 1re, 31 janv. 1973)" }
        ] } } },
        { schema: { type: "frise", titre: "La faute du voyageur face au transporteur ferroviaire", evenements: [
          { date: "Avant 2008", t: "Droit commun", d: "la faute de la victime exonère partiellement" },
          { date: "13 mars 2008", t: "Civ. 1re", d: "le transporteur ne peut s'exonérer partiellement ; la faute de la victime n'exonère totalement que si elle présente les caractères de la force majeure" },
          { date: "11 déc. 2019", t: "Civ. 1re, n° 18-13.840", d: "application prioritaire du règlement (CE) n° 1371/2007 : la faute du voyageur exonère de nouveau le transporteur, partiellement si elle n'est pas irrésistible ; le droit interne n'intervient que pour une plus grande indemnisation (au seul stade de l'évaluation du dommage)" }
        ] } },
        { h: "Le préjudice" },
        { p: "Il doit être **prouvé** par le créancier : l'inexécution, même fautive, ne suffit pas (Civ. 2e, 11 sept. 2009 ; Civ. 1re, 22 nov. 2017, n° 16-27.551). Tout préjudice est réparable : **perte subie** et **gain manqué** ([[1231-2]]), préjudice **moral**, préjudice corporel (les caractères du préjudice sont étudiés avec la responsabilité en général)." },
        { h: "Le préjudice prévisible ([[1231-3]])" },
        { liste: [
          "**Principe** : le débiteur n'est tenu que des dommages et intérêts **prévus ou prévisibles lors de la conclusion** du contrat (rappel : Com., 11 mars 2020, n° 18-22.472). La prévisibilité porte sur la nature du dommage mais aussi sur son montant. Ex. : le garagiste ne doit que la valeur du véhicule volé, pas celle de l'objet précieux laissé dans le coffre à son insu.",
          "**Exception** : faute **lourde ou dolosive** : réparation intégrale, même de l'imprévisible.",
          "**Appréciation casuistique** : dommage corporel toujours prévisible ; présence de bijoux de grande valeur dans les bagages prévisible pour un transporteur (Civ. 1re, 3 juin 1998) ; en revanche, le coût d'un voyage manqué à cause du retard du train conduisant à l'aéroport a été jugé imprévisible pour la SNCF (Civ. 1re, 28 avr. 2011 ; dans le même sens, Civ. 1re, 14 janv. 2016, n° 14-28.277)."
        ] },
        { h: "Le lien de causalité ([[1231-4]])" },
        { p: "Même en cas de faute lourde ou dolosive, les dommages et intérêts ne comprennent que ce qui est une **suite immédiate et directe** de l'inexécution. La faute lourde lève la limite de la prévisibilité, **jamais** celle de la causalité." }
      ]
    },
    {
      titre: "La réparation et ses aménagements conventionnels",
      contenu: [
        { h: "La réparation" },
        { liste: [
          "**Dommages et intérêts compensatoires** : évalués souverainement par les juges du fond selon le principe de **réparation intégrale** (ni perte ni profit pour la victime). Limite : une réparation égale au coût d'une démolition-reconstruction peut être refusée pour disproportion manifeste (Civ. 3e, 6 juill. 2023, n° 22-10.884 ; voir chapitre 10).",
          "**Réparation en nature** (remise en état, mise en conformité) : admise, au choix des juges du fond ; à distinguer de l'exécution forcée, qui ne porte que sur la prestation promise.",
          "**Obligations de somme d'argent** : **intérêts moratoires** au taux légal (fixé chaque semestre, avec un taux plus élevé lorsque le créancier est une personne physique n'agissant pas pour des besoins professionnels), à compter de la **mise en demeure**, **sans preuve d'une perte** ([[1231-6]], [[1344-1]]). Dommages et intérêts distincts seulement si le débiteur, de **mauvaise foi**, a causé un préjudice indépendant du retard.",
          "**Anatocisme** : les intérêts échus, dus au moins pour une **année entière**, ne produisent eux-mêmes intérêt que si le contrat le prévoit ou si le juge le précise ([[1343-2]]).",
          "Toute condamnation à une indemnité emporte intérêts au taux légal, en principe à compter du jugement ([[1231-7]])."
        ] },
        { h: "Les clauses qui allègent la responsabilité" },
        { p: "Clauses **alourdissantes** (obligation de résultat au lieu de moyens, clause de garantie de la force majeure) : sans difficulté. Clauses **allégeantes** : **exonératoires** (aucune responsabilité), **limitatives** (plafond d'indemnisation) ou limitatives d'obligation (résultat ramené à moyens). Valables par principe au nom de la liberté contractuelle, elles sont écartées dans trois séries d'hypothèses." },
        { liste: [
          "**Faute lourde ou dolosive** du débiteur (Civ. 1re, 4 févr. 1969), même pour une limitation légale (Ass. plén., 30 juin 1998 : La Poste).",
          "**Clause qui prive de sa substance l'obligation essentielle** : réputée non écrite ([[1170]]).",
          "**Textes spéciaux** : clause « noire » dans les contrats entre professionnel et consommateur (C. consom., art. R. 212-1, 6°) ; clause abusive dans un contrat d'adhésion ([[1171]]) ; hôtelier ([[1953]]) ; produits défectueux ([[1245-14]])."
        ] },
        { schema: { type: "frise", titre: "Clause limitative et obligation essentielle", evenements: [
          { date: "1984", t: "Détour par la faute lourde", d: "le manquement à une obligation essentielle est qualifié de faute lourde, qui neutralise la clause (Civ. 1re, 18 janv. 1984) ; abandonné depuis Ch. mixte, 22 avr. 2005" },
          { date: "23 févr. 1994", t: "Civ. 1re", d: "la clause limitative est écartée directement parce qu'elle porte sur l'obligation essentielle et contredit la portée de l'engagement" },
          { date: "22 oct. 1996", t: "Chronopost (Com., n° 93-18.632)", d: "clause limitative réputée non écrite, sur le fondement de la cause, parce qu'elle contredisait la portée de l'engagement de livrer dans le délai" },
          { date: "29 juin 2010", t: "Faurecia (Com., n° 09-11.841)", d: "« seule est réputée non écrite la clause limitative de réparation qui contredit la portée de l'obligation essentielle souscrite par le débiteur » : contrôle *in concreto*, selon l'économie du contrat" },
          { date: "2016", t: "[[1170]]", d: "toute clause qui prive de sa substance l'obligation essentielle du débiteur est réputée non écrite" }
        ] } },
        { h: "La clause pénale ([[1231-5]])" },
        { def: { terme: "Clause pénale", texte: "clause par laquelle les parties fixent **à l'avance et forfaitairement** l'indemnité due en cas d'inexécution. Le juge ne peut allouer ni plus ni moins ([[1231-5]], al. 1er), sauf à exercer son **pouvoir modérateur** (institué par la loi du 9 juillet 1975)." } },
        { liste: [
          "**Qualification** (trois critères cumulatifs) : une évaluation **conventionnelle** (pas une somme fixée par la loi) ; à titre de **dommages et intérêts** ; sanctionnant l'inexécution, donc à caractère **comminatoire**. Le créancier n'a pas à prouver son préjudice pour l'invoquer (Civ. 3e, 20 déc. 2006). Elle doit assurer l'exécution par son caractère comminatoire et une somme forfaitaire déterminable (Com., 4 mai 2017, n° 15-19.141 ; Com., 6 déc. 2017, n° 16-12.804 ; Com., 5 déc. 2018, n° 17-22.346). Une somme fixée par la loi ou le règlement n'est pas une clause pénale (Civ. 2e, 31 mars 2022, n° 20-23.284) ; contra pour une clause des statuts d'une coopérative (Civ. 3e, 18 déc. 2025, n° 24-19.042).",
          "**Ne sont pas des clauses pénales** : l'indemnité d'immobilisation d'une promesse unilatérale de vente (Civ. 3e, 5 déc. 1984 ; Civ. 3e, 16 janv. 2025, n° 23-23.378), qui indemnise l'immobilisation du bien ; la **faculté de dédit** (Civ. 3e, 9 janv. 1991 ; Com., 18 janv. 2011), qui est le prix d'un droit de se retirer.",
          "**Révision** : le juge peut, **même d'office**, **modérer ou augmenter** la pénalité **manifestement excessive ou dérisoire** ([[1231-5]], al. 2), en l'appréciant au jour où il statue ; en cas d'exécution partielle, il peut la diminuer à proportion de l'intérêt procuré au créancier (al. 3). Ces règles sont d'ordre public (al. 4).",
          "**Limites** : en modérant, le juge ne peut descendre sous le montant du préjudice réellement subi ; il ne peut supprimer la pénalité que s'il constate l'absence de tout préjudice (Com., 16 juill. 1991 ; Com., 8 avr. 2015). Une simple disproportion ne suffit pas : l'excès doit être manifeste.",
          "**Mise en demeure** : la pénalité n'est encourue qu'après mise en demeure, sauf inexécution définitive ([[1231-5]], al. 5)."
        ] }
      ]
    }
  ],
  retenir: [
    "Résolution : clause résolutoire ([[1225]]), notification ([[1226]]) ou juge ([[1227]], [[1228]]) ; gravité exigée sauf clause résolutoire ; « en toute hypothèse », le juge peut être saisi.",
    "Clause résolutoire : interprétation stricte, engagements désignés, mise en demeure visant la clause ; pas de délai de grâce ; mauvaise foi du créancier sanctionnée ([[1104]]).",
    "Notification : mise en demeure annonçant la résolution (sauf urgence ou mise en demeure vaine), notification motivée, risques et périls ; en cas de contestation, le créancier prouve la gravité.",
    "Effets ([[1229]]) : fin du contrat ; restitutions intégrales si utilité globale, résiliation sans restitution pour le passé si utilité au fur et à mesure ; clauses de différends, de confidentialité et de non-concurrence maintenues ([[1230]]) ; caducité des contrats interdépendants ([[1186]]).",
    "Responsabilité contractuelle ([[1231-1]]) : moyens (faute à prouver) ou résultat (seule la cause étrangère exonère) ; mise en demeure sauf inexécution définitive ([[1231]]).",
    "Préjudice prévisible à la conclusion ([[1231-3]]) sauf faute lourde ou dolosive ; toujours direct ([[1231-4]]).",
    "Clauses limitatives : écartées en cas de faute lourde ou dolosive, si elles vident l'obligation essentielle ([[1170]] ; Chronopost, Faurecia), ou par des textes spéciaux ; clause pénale révisable même d'office si manifestement excessive ou dérisoire ([[1231-5]])."
  ],
  articles: ["1104", "1170", "1171", "1186", "1187", "1224", "1225", "1226", "1227", "1228", "1229", "1230", "1231", "1231-1", "1231-2", "1231-3", "1231-4", "1231-5", "1231-6", "1231-7", "1343-2", "1953", "1245-14", "1732"],
  regimes: ["resolution-clause", "resolution-notification", "responsabilite-contractuelle"],
  cas: ["ch11-four-boulangerie"],
  quiz: [
    { q: "La clause « tout manquement de l'une des parties à ses obligations pourra entraîner la résolution du contrat » est-elle une clause résolutoire ?", choix: ["Oui, elle vise tous les engagements", "Non : elle ne désigne pas les engagements visés et ne prévoit pas une résolution de plein droit", "Oui, si le créancier est de bonne foi"], bonne: 1, expl: "[[1225]], al. 1er, et interprétation stricte de la jurisprudence : simple rappel de la résolution judiciaire." },
    { q: "Le juge saisi du jeu d'une clause résolutoire peut-il accorder un délai de grâce au débiteur de bonne foi ?", choix: ["Oui, comme en matière de résolution judiciaire", "Oui, si le débiteur offre d'exécuter", "Non, sauf texte spécial"], bonne: 2, expl: "Le juge vérifie les conditions et peut écarter la clause invoquée de mauvaise foi par le créancier, mais la bonne foi du débiteur est indifférente (Civ. 3e, 10 mars 1993)." },
    { q: "Le débiteur conteste en justice la résolution qui lui a été notifiée. Qui doit prouver la gravité de l'inexécution ?", choix: ["Le créancier", "Le débiteur", "Le juge l'apprécie d'office sans charge de la preuve"], bonne: 0, expl: "[[1226]], al. 4." },
    { q: "Un contrat d'entretien mensuel a été correctement exécuté pendant un an, puis plus du tout. Sa résolution entraîne :", choix: ["La restitution de toutes les prestations depuis l'origine", "Aucune restitution pour la période antérieure à la dernière prestation n'ayant pas reçu sa contrepartie : c'est une résiliation", "La nullité du contrat"], bonne: 1, expl: "[[1229]], al. 3." },
    { q: "Après la résolution d'un contrat de distribution, la clause de non-concurrence qu'il contenait :", choix: ["Disparaît avec le contrat", "Ne survit que si le juge le décide", "Continue à produire effet"], bonne: 2, expl: "[[1230]] : clauses destinées à produire effet même en cas de résolution." },
    { q: "Le débiteur d'une obligation de résultat peut s'exonérer en prouvant :", choix: ["Une cause étrangère présentant les caractères de la force majeure", "Qu'il n'a commis aucune faute", "Qu'il a agi avec diligence"], bonne: 0, expl: "[[1231-1]] : la faute est acquise par la seule non-obtention du résultat." },
    { q: "Un transporteur égare par négligence un colis contenant des bijoux dont il ignorait la présence. Doit-il leur valeur ?", choix: ["Oui, la réparation est intégrale", "Non, en principe seul le préjudice prévisible à la conclusion est réparable, sauf faute lourde ou dolosive", "Non, la perte d'un colis n'est jamais indemnisable"], bonne: 1, expl: "[[1231-3]]." },
    { q: "Une clause limitative de responsabilité porte sur l'obligation essentielle du contrat. Elle est :", choix: ["Toujours réputée non écrite", "Toujours valable", "Réputée non écrite seulement si elle prive de sa substance cette obligation"], bonne: 2, expl: "Com., 29 juin 2010, Faurecia ; [[1170]]." },
    { q: "Le juge peut-il réduire d'office une clause pénale ?", choix: ["Oui, si elle est manifestement excessive", "Non, il doit être saisi d'une demande du débiteur", "Oui, dès qu'elle dépasse le préjudice réel"], bonne: 0, expl: "[[1231-5]], al. 2 : « même d'office », mais seulement en cas d'excès manifeste." },
    { q: "Le débiteur a sciemment refusé d'exécuter pour servir un client plus rentable, sans vouloir nuire au créancier. Sa faute est :", choix: ["Simple, faute d'intention de nuire", "Dolosive : l'inexécution délibérée suffit", "Lourde par nature"], bonne: 1, expl: "Civ. 1re, 4 févr. 1969 : la faute dolosive n'exige pas l'intention de nuire." }
  ]
});

OBL.regimes.push({
  id: "resolution-clause",
  chapitre: "Inexécution du contrat",
  titre: "La résolution par l'effet d'une clause résolutoire",
  fondement: ["1224", "1225", "1227"],
  resume: "Vérifier si le créancier peut mettre fin au contrat de plein droit, sans juge, en invoquant une clause résolutoire.",
  conditions: [
    { nom: "Une véritable clause résolutoire", question: "La clause désigne-t-elle précisément les engagements dont l'inexécution entraînera la résolution et exprime-t-elle sans équivoque une résolution de plein droit ?", detail: "[[1225]], al. 1er ; interprétation stricte (Civ. 1re, 15 juin 1994).", piege: "Clause « balai » visant tout manquement, ou clause se bornant à évoquer la résolution : pas de clause résolutoire, il reste la notification ou le juge." },
    { nom: "L'inexécution d'un engagement visé", question: "Le débiteur a-t-il manqué à l'un des engagements désignés par la clause ?", detail: "Aucune exigence de gravité : c'est tout l'intérêt de la clause." },
    { nom: "Une mise en demeure infructueuse visant la clause", question: "Le débiteur a-t-il été mis en demeure, par un acte mentionnant expressément la clause, et n'a-t-il pas exécuté dans le délai ?", detail: "[[1225]], al. 2 : sauf stipulation prévoyant que la résolution résultera du seul fait de l'inexécution.", preuve: "Produire l'acte de mise en demeure.", piege: "Une mise en demeure qui ne mentionne pas la clause ne produit pas effet." },
    { nom: "La bonne foi du créancier", question: "Le créancier invoque-t-il la clause loyalement ?", detail: "Le juge peut en écarter le jeu en cas de mauvaise foi du créancier ([[1104]] ; Civ. 1re, 31 janv. 1995). La bonne foi du débiteur est indifférente (Civ. 3e, 10 mars 1993).", piege: "Invoquer la bonne foi du débiteur pour écarter la clause." }
  ],
  exonerations: [
    { nom: "Force majeure", question: "L'inexécution résulte-t-elle d'un événement de force majeure ?", detail: "Voir chapitre 10 : suspension si l'empêchement est temporaire, résolution de plein droit s'il est définitif ([[1218]]).", effet: "La clause ne peut pas jouer contre le débiteur empêché." },
    { nom: "Textes spéciaux", question: "Le contrat relève-t-il d'un régime spécial (baux, assurance, consommation) ?", detail: "Certains textes interdisent la clause ou permettent au juge d'en suspendre les effets en accordant des délais.", effet: "Clause inapplicable ou effets suspendus." }
  ],
  copie: [
    "Si la clause échoue, ne pas conclure à l'impossibilité de résoudre : passer à [[1226]] (notification) puis à [[1227]] (juge).",
    "Préciser la date d'effet : celle prévue par la clause ([[1229]], al. 2)."
  ]
});

OBL.regimes.push({
  id: "resolution-notification",
  chapitre: "Inexécution du contrat",
  titre: "La résolution unilatérale par notification",
  fondement: ["1224", "1226", "1229"],
  resume: "Permettre au créancier de mettre fin seul au contrat en cas d'inexécution suffisamment grave, à ses risques et périls, sous le contrôle a posteriori du juge.",
  conditions: [
    { nom: "Une inexécution suffisamment grave", question: "Le manquement (ou le comportement) du débiteur est-il assez grave pour justifier la rupture ?", detail: "Même exigence que pour la résolution judiciaire ([[1224]]). Manquement à une obligation essentielle, manquements répétés, comportement grave (Civ. 1re, 13 oct. 1998, Tocqueville ; Com., 18 oct. 2023, n° 20-21.579).", preuve: "En cas de contestation, c'est au créancier de prouver la gravité ([[1226]], al. 4).", piege: "Un manquement ponctuel et mineur ne suffit pas : la rupture serait fautive." },
    { nom: "Une mise en demeure spéciale", question: "Le débiteur a-t-il été sommé de s'exécuter dans un délai raisonnable, avec la mention expresse qu'à défaut le créancier sera en droit de résoudre le contrat ?", detail: "[[1226]], al. 1er et 2. Dispense en cas d'urgence, ou lorsqu'il résulte des circonstances que la mise en demeure est vaine (Com., 18 oct. 2023).", piege: "Une mise en demeure ordinaire, sans annonce de la résolution, ne suffit pas." },
    { nom: "La persistance de l'inexécution", question: "Le débiteur n'a-t-il toujours pas exécuté à l'expiration du délai ?", detail: "S'il s'exécute dans le délai, la résolution n'est plus possible." },
    { nom: "Une notification motivée", question: "Le créancier a-t-il notifié la résolution et les raisons qui la motivent ?", detail: "[[1226]], al. 3. La résolution prend effet à la date de réception de la notification ([[1229]], al. 2)." }
  ],
  exonerations: [
    { nom: "Contestation judiciaire", question: "Le juge, saisi par le débiteur, estime-t-il l'inexécution insuffisamment grave ou la procédure irrégulière ?", detail: "La rupture est faite « aux risques et périls » du créancier ([[1226]]).", effet: "Dommages et intérêts contre le créancier ; le contrat peut être jugé toujours en vigueur." }
  ],
  copie: [
    "Exposer la procédure en quatre temps (gravité, mise en demeure spéciale, persistance, notification motivée), puis le risque.",
    "Conseiller de saisir le juge si la gravité est discutable : la résolution peut en toute hypothèse être demandée en justice ([[1227]])."
  ]
});

OBL.regimes.push({
  id: "responsabilite-contractuelle",
  chapitre: "Inexécution du contrat",
  titre: "La responsabilité contractuelle",
  fondement: ["1231", "1231-1", "1231-2", "1231-3", "1231-4"],
  resume: "Obtenir des dommages et intérêts réparant le préjudice causé par l'inexécution ou le retard d'exécution d'une obligation contractuelle.",
  conditions: [
    { nom: "Un contrat et une obligation contractuelle", question: "Le dommage résulte-t-il de l'inexécution d'une obligation née d'un contrat liant le responsable et la victime ?", detail: "Si oui, la responsabilité est nécessairement contractuelle (non-cumul).", piege: "Le manquement à l'obligation précontractuelle d'information relève du terrain délictuel." },
    { nom: "Une inexécution imputable", question: "L'obligation est-elle de moyens (faute à prouver) ou de résultat (non-obtention du résultat suffisante) ?", detail: "Qualification selon la volonté des parties, puis l'aléa et le rôle du créancier. Faute appréciée *in abstracto*.", preuve: "Moyens : le créancier prouve la faute. Résultat : il prouve que le résultat n'est pas atteint.", piege: "Oublier de qualifier l'obligation avant de parler de preuve." },
    { nom: "Une mise en demeure", question: "Le débiteur a-t-il été mis en demeure de s'exécuter dans un délai raisonnable ?", detail: "Exigée sauf inexécution définitive ([[1231]])." },
    { nom: "Un préjudice prévisible", question: "Le préjudice (perte subie, gain manqué, moral) est-il prouvé et était-il prévisible lors de la conclusion ?", detail: "[[1231-2]] et [[1231-3]]. L'imprévisible est réparable en cas de faute lourde (exceptionnelle gravité) ou dolosive (inexécution délibérée).", piege: "Oublier l'exception de la faute lourde ou dolosive." },
    { nom: "Un lien de causalité direct", question: "Le préjudice est-il une suite immédiate et directe de l'inexécution ?", detail: "[[1231-4]] : exigence maintenue même en cas de faute lourde ou dolosive." }
  ],
  exonerations: [
    { nom: "Absence de faute", question: "L'obligation est-elle de moyens et le débiteur prouve-t-il qu'il a été diligent ?", detail: "Sans effet pour une obligation de résultat.", effet: "Pas de responsabilité." },
    { nom: "Force majeure", question: "L'inexécution provient-elle d'un événement réunissant les caractères de [[1218]] ?", detail: "Jamais le fait de la chose utilisée ni celui d'un préposé ou d'un substitut.", effet: "Exonération totale." },
    { nom: "Fait d'un tiers ou du créancier", question: "Un tiers ou le créancier lui-même a-t-il contribué à l'inexécution ?", detail: "Force majeure : exonération totale. Sinon : fait du tiers sans effet à l'égard du créancier (obligation *in solidum*) ; faute du créancier : exonération partielle.", effet: "Totale ou partielle." },
    { nom: "Clause limitative ou exonératoire", question: "Le contrat plafonne-t-il ou exclut-il la réparation, et la clause est-elle efficace ?", detail: "Écartée si faute lourde ou dolosive, si elle prive de sa substance l'obligation essentielle ([[1170]]), dans un contrat de consommation ou si elle est abusive dans un contrat d'adhésion ([[1171]]).", effet: "Réparation plafonnée ou exclue si la clause est efficace." }
  ],
  copie: [
    "Ordre de la copie : qualification (contrat), inexécution (moyens / résultat), préjudice et prévisibilité, causalité, exonérations, clauses.",
    "Si une clause limitative est invoquée : faute lourde ou dolosive d'abord, puis [[1170]], puis textes spéciaux."
  ]
});

OBL.cas.push({
  id: "ch11-four-boulangerie",
  titre: "Le four en panne",
  seance: "Chapitre 11",
  regimes: ["resolution-clause", "resolution-notification", "responsabilite-contractuelle"],
  faits: "Le 6 janvier 2025, la SARL Fournil Saint-Roch, boulangerie, conclut avec la société Thermifour un contrat de maintenance de son four professionnel pour deux ans, moyennant 450 euros par mois payables d'avance. Thermifour s'engage « à intervenir dans les 24 heures suivant tout signalement de panne ». Le contrat stipule : « En cas de manquement de l'une des parties à ses obligations, le contrat pourra être résolu » et « La responsabilité de Thermifour est limitée, tous préjudices confondus, à 500 euros par sinistre ». Le four tombe en panne le 3 mars 2026 : le technicien n'intervient que le 9 mars. Nouvelle panne le 14 avril 2026 : intervention le 20 avril. Par courriel, le directeur de Thermifour reconnaît avoir « donné la priorité à nos clients industriels, plus rémunérateurs ». Pendant ces deux périodes, la boulangerie a perdu une marge de 6 000 euros et a dû annuler une commande de pièces montées pour un mariage (marge perdue : 800 euros). La gérante veut cesser toute relation avec Thermifour, qui a été payée jusqu'au 30 avril, et être indemnisée intégralement.",
  question: "Nous sommes le 5 mai 2026. Conseillez la SARL Fournil Saint-Roch.",
  corrige: {
    qualification: "Contrat de prestation de service à exécution successive (maintenance), synallagmatique. Manquements répétés à l'obligation d'intervenir dans les 24 heures ; clause de résolution et clause limitative de responsabilité.",
    probleme: "La boulangerie peut-elle mettre fin au contrat et selon quelle voie, avec quels effets ? Peut-elle obtenir la réparation intégrale de son préjudice malgré la clause limitative ?",
    majeure: "La résolution résulte d'une clause résolutoire, ou, en cas d'inexécution suffisamment grave, d'une notification ou d'une décision de justice (art. 1224). La clause résolutoire doit préciser les engagements dont l'inexécution entraînera la résolution (art. 1225), et la jurisprudence exige qu'elle prévoie clairement une résolution de plein droit. La résolution par notification suppose une mise en demeure de s'exécuter dans un délai raisonnable, mentionnant expressément le droit de résoudre, sauf urgence, puis une notification motivée ; elle est faite aux risques et périls du créancier, qui doit prouver la gravité en cas de contestation (art. 1226). Lorsque les prestations ont trouvé leur utilité au fur et à mesure, il n'y a pas de restitution pour la période antérieure à la dernière prestation n'ayant pas reçu sa contrepartie : c'est une résiliation (art. 1229). Le débiteur est condamné à des dommages et intérêts en raison de l'inexécution ou du retard, sauf force majeure (art. 1231-1), après mise en demeure sauf inexécution définitive (art. 1231) ; il ne doit que le préjudice prévisible lors de la conclusion, sauf faute lourde ou dolosive (art. 1231-3), et seulement ce qui est une suite immédiate et directe de l'inexécution (art. 1231-4). La faute dolosive est l'inexécution délibérée, sans qu'une intention de nuire soit nécessaire (Civ. 1re, 4 févr. 1969) ; elle prive d'effet la clause limitative. Est réputée non écrite la clause qui prive de sa substance l'obligation essentielle du débiteur (art. 1170 ; Com., 29 juin 2010, Faurecia).",
    mineure: [
      { condition: "La clause « pourra être résolu »", corrige: "Elle vise « un manquement » quelconque, sans désigner d'engagement précis, et ne prévoit pas une résolution de plein droit (« pourra ») : ce n'est pas une clause résolutoire au sens de l'article 1225. Elle ne permet pas de résoudre sans juge." },
      { condition: "La résolution par notification", corrige: "L'obligation d'intervenir sous 24 heures est l'obligation essentielle d'un contrat de maintenance d'un four de boulangerie ; deux retards de six jours en six semaines, reconnus comme délibérés, constituent une inexécution suffisamment grave. La SARL doit mettre Thermifour en demeure de respecter le délai contractuel, dans un délai raisonnable, en précisant qu'à défaut elle sera en droit de résoudre le contrat ; si le manquement se reproduit ou persiste, elle notifie la résolution et ses motifs, qui prend effet à la réception (art. 1226 et 1229). On pourrait soutenir qu'une mise en demeure est vaine au vu du courriel de Thermifour (Com., 18 oct. 2023), mais la prudence commande de l'envoyer. Si la gravité paraît discutable, la SARL peut saisir le juge (art. 1227), qui pourra prononcer la résolution et allouer des dommages et intérêts (art. 1228)." },
      { condition: "Les effets de la résolution", corrige: "Les prestations de maintenance ont trouvé leur utilité mois après mois : il s'agit d'une résiliation (art. 1229, al. 3). Pas de restitution pour la période antérieure à la dernière prestation n'ayant pas reçu sa contrepartie ; la SARL pourra discuter la restitution des redevances payées pour les périodes où Thermifour n'a pas fourni la prestation promise, et ne devra plus rien pour l'avenir." },
      { condition: "La responsabilité : inexécution et mise en demeure", corrige: "L'obligation d'intervenir dans un délai fixé est une obligation de résultat : son inexécution suffit. Aucune force majeure : le manque de disponibilité résulte d'un choix de Thermifour, qui n'échappe pas à son contrôle. Pour les deux pannes, le délai de 24 heures est dépassé et le préjudice est réalisé : l'inexécution est définitive, la mise en demeure n'est pas nécessaire (art. 1231)." },
      { condition: "La clause limitative", corrige: "Thermifour a délibérément fait passer d'autres clients avant la boulangerie : c'est une faute dolosive (inexécution délibérée, sans intention de nuire requise), qui écarte la clause limitative. Subsidiairement, un plafond de 500 euros par sinistre, à peine plus d'une mensualité, pour un contrat dont l'objet même est de limiter les pertes d'exploitation dues aux pannes, prive de sa substance l'obligation essentielle : la clause serait réputée non écrite (art. 1170)." },
      { condition: "Le préjudice réparable", corrige: "La marge perdue pendant l'arrêt du four (6 000 euros) est une perte prévisible pour un prestataire qui entretient le four d'une boulangerie, et une suite directe du retard. La marge perdue sur la commande annulée (800 euros) est aussi une suite directe ; même si on la jugeait imprévisible, la faute dolosive lève la limite de la prévisibilité (art. 1231-3), la causalité directe restant exigée (art. 1231-4). Les sommes devront être justifiées (comptabilité, bon de commande annulé)." }
    ],
    conclusion: "La clause invoquée n'étant pas résolutoire, la SARL peut résilier le contrat par notification après une mise en demeure annonçant la résolution, à ses risques et périls, ou demander la résolution au juge. Elle peut en outre obtenir environ 6 800 euros de dommages et intérêts, la clause limitative étant écartée par la faute dolosive de Thermifour (et, à défaut, par l'article 1170)."
  }
});

OBL.articles.push(
  {"num": "1104", "code": "C. civ.", "theme": "Bonne foi", "texte": "Les contrats doivent être négociés, formés et exécutés de bonne foi.\n\nCette disposition est d'ordre public.", "chapitres": [11], "retenir": "Fonde le refus d'appliquer une clause résolutoire invoquée de mauvaise foi par le créancier."},
  {"num": "1170", "code": "C. civ.", "theme": "Clauses limitatives", "texte": "Toute clause qui prive de sa substance l'obligation essentielle du débiteur est réputée non écrite.", "chapitres": [11], "retenir": "Clause privant de sa substance l'obligation essentielle : réputée non écrite (Chronopost, Faurecia)."},
  {"num": "1171", "code": "C. civ.", "theme": "Clauses limitatives", "texte": "Dans un contrat d'adhésion, toute clause non négociable, déterminée à l'avance par l'une des parties, qui crée un déséquilibre significatif entre les droits et obligations des parties au contrat est réputée non écrite.\n\nL'appréciation du déséquilibre significatif ne porte ni sur l'objet principal du contrat ni sur l'adéquation du prix à la prestation.", "chapitres": [11], "retenir": "Clause non négociable créant un déséquilibre significatif dans un contrat d'adhésion : réputée non écrite."},
  {"num": "1186", "code": "C. civ.", "theme": "Effets de la résolution", "texte": "Un contrat valablement formé devient caduc si l'un de ses éléments essentiels disparaît.\n\nLorsque l'exécution de plusieurs contrats est nécessaire à la réalisation d'une même opération et que l'un d'eux disparaît, sont caducs les contrats dont l'exécution est rendue impossible par cette disparition et ceux pour lesquels l'exécution du contrat disparu était une condition déterminante du consentement d'une partie.\n\nLa caducité n'intervient toutefois que si le contractant contre lequel elle est invoquée connaissait l'existence de l'opération d'ensemble lorsqu'il a donné son consentement.", "chapitres": [11], "retenir": "Caducité des contrats interdépendants lorsque l'un d'eux disparaît."},
  {"num": "1187", "code": "C. civ.", "theme": "Effets de la résolution", "texte": "La caducité met fin au contrat.\n\nElle peut donner lieu à restitution dans les conditions prévues aux articles 1352 à 1352-9.", "chapitres": [11], "retenir": "La caducité met fin au contrat ; restitutions selon les art. 1352 à 1352-9."},
  {"num": "1224", "code": "C. civ.", "theme": "Résolution", "texte": "La résolution résulte soit de l'application d'une clause résolutoire soit, en cas d'inexécution suffisamment grave, d'une notification du créancier au débiteur ou d'une décision de justice.", "chapitres": [11], "retenir": "Clause résolutoire, ou inexécution suffisamment grave : notification ou décision de justice."},
  {"num": "1225", "code": "C. civ.", "theme": "Clause résolutoire", "texte": "La clause résolutoire précise les engagements dont l'inexécution entraînera la résolution du contrat.\n\nLa résolution est subordonnée à une mise en demeure infructueuse, s'il n'a pas été convenu que celle-ci résulterait du seul fait de l'inexécution. La mise en demeure ne produit effet que si elle mentionne expressément la clause résolutoire.", "chapitres": [11], "retenir": "Engagements précisés ; mise en demeure infructueuse mentionnant expressément la clause, sauf stipulation contraire."},
  {"num": "1226", "code": "C. civ.", "theme": "Résolution par notification", "texte": "Le créancier peut, à ses risques et périls, résoudre le contrat par voie de notification. Sauf urgence, il doit préalablement mettre en demeure le débiteur défaillant de satisfaire à son engagement dans un délai raisonnable.\n\nLa mise en demeure mentionne expressément qu'à défaut pour le débiteur de satisfaire à son obligation, le créancier sera en droit de résoudre le contrat.\n\nLorsque l'inexécution persiste, le créancier notifie au débiteur la résolution du contrat et les raisons qui la motivent.\n\nLe débiteur peut à tout moment saisir le juge pour contester la résolution. Le créancier doit alors prouver la gravité de l'inexécution.", "chapitres": [11], "retenir": "Risques et périls ; mise en demeure annonçant la résolution (sauf urgence) ; notification motivée ; le créancier prouve la gravité."},
  {"num": "1227", "code": "C. civ.", "theme": "Résolution judiciaire", "texte": "La résolution peut, en toute hypothèse, être demandée en justice.", "chapitres": [11], "retenir": "La résolution peut, en toute hypothèse, être demandée en justice."},
  {"num": "1228", "code": "C. civ.", "theme": "Résolution judiciaire", "texte": "Le juge peut, selon les circonstances, constater ou prononcer la résolution ou ordonner l'exécution du contrat, en accordant éventuellement un délai au débiteur, ou allouer seulement des dommages et intérêts.", "chapitres": [11], "retenir": "Constater ou prononcer la résolution, ordonner l'exécution avec délai, ou allouer seulement des dommages et intérêts."},
  {"num": "1229", "code": "C. civ.", "theme": "Effets de la résolution", "texte": "La résolution met fin au contrat.\n\nLa résolution prend effet, selon les cas, soit dans les conditions prévues par la clause résolutoire, soit à la date de la réception par le débiteur de la notification faite par le créancier, soit à la date fixée par le juge ou, à défaut, au jour de l'assignation en justice.\n\nLorsque les prestations échangées ne pouvaient trouver leur utilité que par l'exécution complète du contrat résolu, les parties doivent restituer l'intégralité de ce qu'elles se sont procuré l'une à l'autre. Lorsque les prestations échangées ont trouvé leur utilité au fur et à mesure de l'exécution réciproque du contrat, il n'y a pas lieu à restitution pour la période antérieure à la dernière prestation n'ayant pas reçu sa contrepartie ; dans ce cas, la résolution est qualifiée de résiliation.\n\nLes restitutions ont lieu dans les conditions prévues aux articles 1352 à 1352-9.", "chapitres": [11], "retenir": "Fin du contrat ; date d'effet selon le mode ; restitutions intégrales ou résiliation selon l'utilité des prestations."},
  {"num": "1230", "code": "C. civ.", "theme": "Effets de la résolution", "texte": "La résolution n'affecte ni les clauses relatives au règlement des différends, ni celles destinées à produire effet même en cas de résolution, telles les clauses de confidentialité et de non-concurrence.", "chapitres": [11], "retenir": "Survie des clauses de règlement des différends, de confidentialité et de non-concurrence."},
  {"num": "1231", "code": "C. civ.", "theme": "Responsabilité contractuelle", "texte": "A moins que l'inexécution soit définitive, les dommages et intérêts ne sont dus que si le débiteur a préalablement été mis en demeure de s'exécuter dans un délai raisonnable.", "chapitres": [11], "retenir": "Mise en demeure préalable dans un délai raisonnable, sauf inexécution définitive."},
  {"num": "1231-1", "code": "C. civ.", "theme": "Responsabilité contractuelle", "texte": "Le débiteur est condamné, s'il y a lieu, au paiement de dommages et intérêts soit à raison de l'inexécution de l'obligation, soit à raison du retard dans l'exécution, s'il ne justifie pas que l'exécution a été empêchée par la force majeure.", "chapitres": [11], "retenir": "Dommages et intérêts pour inexécution ou retard, sauf force majeure."},
  {"num": "1231-2", "code": "C. civ.", "theme": "Préjudice", "texte": "Les dommages et intérêts dus au créancier sont, en général, de la perte qu'il a faite et du gain dont il a été privé, sauf les exceptions et modifications ci-après.", "chapitres": [11], "retenir": "Perte subie et gain manqué."},
  {"num": "1231-3", "code": "C. civ.", "theme": "Préjudice", "texte": "Le débiteur n'est tenu que des dommages et intérêts qui ont été prévus ou qui pouvaient être prévus lors de la conclusion du contrat, sauf lorsque l'inexécution est due à une faute lourde ou dolosive.", "chapitres": [11], "retenir": "Seul le préjudice prévisible à la conclusion, sauf faute lourde ou dolosive."},
  {"num": "1231-4", "code": "C. civ.", "theme": "Causalité", "texte": "Dans le cas même où l'inexécution du contrat résulte d'une faute lourde ou dolosive, les dommages et intérêts ne comprennent que ce qui est une suite immédiate et directe de l'inexécution.", "chapitres": [11], "retenir": "Suite immédiate et directe de l'inexécution, même en cas de faute lourde ou dolosive."},
  {"num": "1231-5", "code": "C. civ.", "theme": "Clause pénale", "texte": "Lorsque le contrat stipule que celui qui manquera de l'exécuter paiera une certaine somme à titre de dommages et intérêts, il ne peut être alloué à l'autre partie une somme plus forte ni moindre.\n\nNéanmoins, le juge peut, même d'office, modérer ou augmenter la pénalité ainsi convenue si elle est manifestement excessive ou dérisoire.\n\nLorsque l'engagement a été exécuté en partie, la pénalité convenue peut être diminuée par le juge, même d'office, à proportion de l'intérêt que l'exécution partielle a procuré au créancier, sans préjudice de l'application de l'alinéa précédent.\n\nToute stipulation contraire aux deux alinéas précédents est réputée non écrite.\n\nSauf inexécution définitive, la pénalité n'est encourue que lorsque le débiteur est mis en demeure.", "chapitres": [11], "retenir": "Forfait ; modération ou augmentation, même d'office, si manifestement excessive ou dérisoire ; mise en demeure sauf inexécution définitive."},
  {"num": "1231-6", "code": "C. civ.", "theme": "Obligations de somme d'argent", "texte": "Les dommages et intérêts dus à raison du retard dans le paiement d'une obligation de somme d'argent consistent dans l'intérêt au taux légal, à compter de la mise en demeure.\n\nCes dommages et intérêts sont dus sans que le créancier soit tenu de justifier d'aucune perte.\n\nLe créancier auquel son débiteur en retard a causé, par sa mauvaise foi, un préjudice indépendant de ce retard, peut obtenir des dommages et intérêts distincts de l'intérêt moratoire.", "chapitres": [11], "retenir": "Intérêt au taux légal dès la mise en demeure, sans preuve d'une perte ; dommages et intérêts distincts si mauvaise foi."},
  {"num": "1231-7", "code": "C. civ.", "theme": "Obligations de somme d'argent", "texte": "En toute matière, la condamnation à une indemnité emporte intérêts au taux légal même en l'absence de demande ou de disposition spéciale du jugement. Sauf disposition contraire de la loi, ces intérêts courent à compter du prononcé du jugement à moins que le juge n'en décide autrement.\n\nEn cas de confirmation pure et simple par le juge d'appel d'une décision allouant une indemnité en réparation d'un dommage, celle-ci porte de plein droit intérêt au taux légal à compter du jugement de première instance. Dans les autres cas, l'indemnité allouée en appel porte intérêt à compter de la décision d'appel. Le juge d'appel peut toujours déroger aux dispositions du présent alinéa.", "chapitres": [11], "retenir": "Toute condamnation à indemnité emporte intérêts au taux légal, en principe à compter du jugement."},
  {"num": "1343-2", "code": "C. civ.", "theme": "Anatocisme", "texte": "Les intérêts échus, dus au moins pour une année entière, produisent intérêt si le contrat l'a prévu ou si une décision de justice le précise.", "chapitres": [11], "retenir": "Capitalisation des intérêts dus pour une année entière, si le contrat ou le juge le prévoit."},
  {"num": "1953", "code": "C. civ.", "theme": "Clauses limitatives", "texte": "Ils sont responsables du vol ou du dommage de ces effets, soit que le vol ait été commis ou que le dommage ait été causé par leurs préposés, ou par des tiers allant et venant dans l'hôtel.\n\nCette responsabilité est illimitée, nonobstant toute clause contraire, au cas de vol ou de détérioration des objets de toute nature déposés entre leurs mains ou qu'ils ont refusé de recevoir sans motif légitime.\n\nDans tous les autres cas, les dommages-intérêts dus au voyageur sont, à l'exclusion de toute limitation conventionnelle inférieure, limités à l'équivalent de cent fois le prix de location du logement par journée, sauf lorsque le voyageur démontre que le préjudice qu'il a subi résulte d'une faute de celui qui l'héberge ou des personnes dont ce dernier doit répondre.", "chapitres": [11], "retenir": "Responsabilité de l'hôtelier ; limitations légales, illimitée malgré toute clause dans certains cas."},
  {"num": "1245-14", "code": "C. civ.", "theme": "Clauses limitatives", "texte": "Les clauses qui visent à écarter ou à limiter la responsabilité du fait des produits défectueux sont interdites et réputées non écrites.\n\nToutefois, pour les dommages causés aux biens qui ne sont pas utilisés par la victime principalement pour son usage ou sa consommation privée, les clauses stipulées entre professionnels sont valables.", "chapitres": [11], "retenir": "Clauses écartant ou limitant la responsabilité du fait des produits défectueux interdites (sauf biens à usage professionnel entre professionnels)."},
  {"num": "1732", "code": "C. civ.", "theme": "Bail", "texte": "Il répond des dégradations ou des pertes qui arrivent pendant sa jouissance, à moins qu'il ne prouve qu'elles ont eu lieu sans sa faute.", "chapitres": [11], "retenir": "Le preneur répond des dégradations survenues pendant sa jouissance, sauf preuve de leur absence de faute."}
);
