/* Chapitre 19 — Le régime général de l'obligation : les modalités des obligations
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 19,
  intro: "Sans stipulation particulière, l'obligation est **pure et simple** : elle existe tout de suite et le créancier peut en exiger immédiatement l'exécution. Les parties (parfois la loi ou le juge) peuvent l'affecter de **modalités** ([[1304]] à [[1320]]) : dans le **temps** (condition, terme), dans son **objet** (obligations cumulatives, alternatives, facultatives) ou dans ses **sujets** (division, solidarité, indivisibilité). La jurisprudence y ajoute l'obligation *in solidum*.",
  sections: [
    {
      titre: "La condition : notion et validité",
      contenu: [
        { def: { terme: "Condition", texte: "événement **futur et incertain** dont dépend l'obligation ([[1304]], al. 1er). Elle est **suspensive** lorsque son accomplissement rend l'obligation pure et simple (al. 2), **résolutoire** lorsque son accomplissement entraîne l'anéantissement de l'obligation (al. 3)." } },
        { liste: [
          "**Suspensive** : vente d'un appartement « si l'acquéreur obtient son prêt ». Tant que le prêt n'est pas obtenu, l'obligation n'est pas encore efficace.",
          "**Résolutoire** : vente conclue et exécutée, mais anéantie « si l'acheteur n'est pas muté à Lyon dans l'année »."
        ] },
        { h: "Condition ou terme ? Le critère de la certitude" },
        { p: "Le terme repose sur un événement **certain**, même si sa date est inconnue ([[1305]]) ; la condition sur un événement **incertain** dans sa survenance même. Faut-il apprécier cette incertitude objectivement ou selon ce que les parties tenaient pour acquis ? La jurisprudence ancienne qualifiait parfois de terme un événement incertain que les parties considéraient comme certain (remboursement « à meilleure fortune », « lors de la vente du fonds »). La Cour de cassation a ensuite retenu une approche **objective** : un événement incertain non seulement dans sa date mais aussi dans sa réalisation est une **condition**, non un terme (Civ. 1re, 13 avr. 1999). La définition de [[1305]], sans référence à la volonté des parties, va dans ce sens." },
        { attention: "Une clause rédigée avec « quand » n'est pas forcément un terme : « la vente sera définitive quand l'acquéreur aura obtenu son prêt » reste une **condition**, car l'octroi du prêt est objectivement incertain." },
        { h: "La validité de la condition" },
        { liste: [
          "**Licéité** : la condition doit être licite, sinon **l'obligation est nulle** ([[1304-1]]). Le Code ne vise plus la condition impossible.",
          "**Potestativité** : est nulle l'obligation contractée sous une condition dont la réalisation dépend de la **seule volonté du débiteur** ([[1304-2]]). S'obliger « si je le veux », ce n'est pas s'obliger.",
          "**Tempérament** : la nullité ne peut plus être invoquée si l'obligation a été **exécutée en connaissance de cause** ([[1304-2]], seconde phrase).",
          "**Événement futur** : l'événement doit être à venir. Avant 2016, un événement déjà réalisé mais ignoré des parties pouvait valoir condition ; l'ordonnance ne reprend pas cette précision. L'exigence de **possibilité** de la condition, jugée peu cohérente, a aussi disparu.",
          "**Élément du contrat** : un élément essentiel du contrat (consentement, objet, cause) ne peut jamais être érigé en condition : celle-ci affecte l'existence de l'obligation, non la formation du contrat."
        ] },
        { schema: { type: "tableau", titre: "La condition potestative, avant et après 2016", colonnes: ["Catégorie (droit antérieur)", "Définition", "Sort avant 2016", "Depuis 2016 ([[1304-2]])"], lignes: [
          ["Casuelle", "Dépend du hasard (gain au loto)", "Valable", "Valable : ne dépend pas de la volonté du débiteur"],
          ["Mixte", "Dépend de la volonté d'une partie et d'un tiers (obtention d'un prêt, mariage)", "Valable", "Valable"],
          ["Simplement potestative", "Dépend de la volonté du débiteur, mais aussi de circonstances extérieures (« si je démissionne »)", "Valable (distinction doctrinale reçue en jurisprudence)", "Valable si la réalisation ne dépend pas de la **seule** volonté du débiteur"],
          ["Purement potestative", "Dépend de la seule volonté du débiteur (« si je le veux »)", "Nulle (art. 1174 anc.), si suspensive et du côté du débiteur", "**Nulle**, sauf exécution en connaissance de cause"]
        ] } },
        { p: "Les distinctions anciennes restent applicables aux contrats conclus avant le 1er octobre 2016. Le texte nouveau abandonne les catégories pour un critère unique : la réalisation dépend-elle de la **seule volonté du débiteur** ? Une condition apparemment extérieure (le mariage du vendeur) peut être potestative si le débiteur en maîtrise seul la survenance." },
        { p: "Sous l'empire du droit antérieur, la nullité ne frappait que la condition **suspensive**, **purement potestative**, du côté du **débiteur** : la condition **résolutoire** potestative était admise (faculté de rachat, [[1659]] ; reprise d'un article dans les magasins qui acceptent l'échange). L'article [[1304-2]] vise l'obligation « contractée sous une condition » sans distinguer suspensive et résolutoire : la portée exacte du texte sur ce point relève de l'interprétation." }
      ]
    },
    {
      titre: "La condition : les effets",
      contenu: [
        { h: "Pendant que la condition est en suspens" },
        { schema: { type: "tableau", titre: "Condition pendante", colonnes: ["", "Condition suspensive", "Condition résolutoire"], lignes: [
          ["Situation de l'obligation", "Pas encore efficace : le créancier ne peut exiger l'exécution", "S'exécute comme une obligation pure et simple"],
          ["Débiteur", "Doit s'abstenir de tout acte empêchant la bonne exécution ([[1304-5]], al. 1er)", "Exécute"],
          ["Créancier", "Droit **conditionnel** : actes conservatoires, action contre les actes frauduleux ([[1304-5]], al. 1er), droit transmissible", "Peut exiger l'exécution intégrale"],
          ["Paiement effectué", "Peut être **répété** tant que la condition n'est pas accomplie ([[1304-5]], al. 2)", "Dû"]
        ] } },
        { h: "Les fictions sanctionnant la mauvaise foi" },
        { liste: [
          "La condition **suspensive** est **réputée accomplie** si celui qui y avait intérêt en a **empêché** l'accomplissement ([[1304-3]], al. 1er).",
          "La condition **résolutoire** est **réputée défaillie** si son accomplissement a été **provoqué** par la partie qui y avait intérêt ([[1304-3]], al. 2).",
          "Application majeure : la promesse sous condition d'obtention d'un prêt. L'acquéreur doit avoir demandé un prêt **conforme aux caractéristiques** stipulées (montant, durée, taux) ; s'il a demandé un prêt différent, la condition est réputée accomplie (Civ. 3e, 30 janv. 2008). À l'inverse, la stipulation d'un montant maximal ne l'oblige pas à accepter n'importe quelle offre d'un montant inférieur (Civ. 3e, 14 déc. 2022, n° 21-24.539).",
          "Avant la réforme, la fiction de l'ancien article 1178 (Civ. 3e, 12 sept. 2007) jouait avec modération : la jurisprudence n'exigeait de la partie tenue que des **diligences moyennes** pour que la condition se réalise."
        ] },
        { h: "La renonciation" },
        { p: "Une partie peut renoncer à la condition stipulée **dans son intérêt exclusif**, tant que celle-ci n'est **ni accomplie ni défaillie** ([[1304-4]], rédaction issue de la loi du 20 avril 2018). La condition de prêt est stipulée dans l'intérêt exclusif de l'acquéreur : lui seul peut y renoncer, et avant l'échéance." },
        { h: "Le dénouement" },
        { schema: { type: "etapes", titre: "Le sort de l'obligation sous condition suspensive", etapes: [
          { t: "Conclusion du contrat", d: "le lien contractuel existe ; l'obligation est en suspens ; les risques de la chose restent au débiteur" },
          { t: "Condition pendante", d: "abstention du débiteur ; actes conservatoires du créancier ; répétition de ce qui a été payé ([[1304-5]])" },
          { t: "Accomplissement", d: "l'obligation devient pure et simple **à compter de l'accomplissement**, sans rétroactivité ([[1304-6]], al. 1er), sauf stipulation contraire ; même alors, risques, administration et fruits restent au débiteur jusqu'à l'accomplissement (al. 2)" },
          { t: "Ou défaillance", d: "l'obligation est réputée n'avoir **jamais existé** ([[1304-6]], al. 3) : restitution de ce qui aurait été exécuté" }
        ] } },
        { attention: "Revirement de 2016 : sous l'empire de l'ancien article 1179, l'accomplissement de la condition suspensive **rétroagissait** au jour de l'engagement. Depuis la réforme, la rétroactivité n'existe plus que si les parties l'ont **stipulée** ([[1304-6]], al. 2). Dans une vente sous condition suspensive, le transfert de propriété n'intervient donc, en principe, qu'au jour de l'accomplissement." },
        { p: "Condition **résolutoire** : son accomplissement **éteint rétroactivement** l'obligation, sans remettre en cause les actes conservatoires et d'administration ([[1304-7]], al. 1er). Pas de rétroactivité si les parties l'ont écartée ou si les prestations échangées ont trouvé leur **utilité au fur et à mesure** de l'exécution réciproque (al. 2), ce qui vise les contrats à exécution successive. Si elle défaille, l'obligation est **consolidée**." }
      ]
    },
    {
      titre: "Le terme",
      contenu: [
        { def: { terme: "Terme", texte: "événement **futur et certain** qui diffère l'**exigibilité** de l'obligation, « encore que la date en soit incertaine » ([[1305]]). Le terme affecte l'exigibilité (terme suspensif) ou la durée (terme extinctif), jamais l'existence de l'obligation." } },
        { schema: { type: "tableau", titre: "Les classifications du terme", colonnes: ["Critère", "Distinction", "Exemple"], lignes: [
          ["Source", "**Conventionnel** (exprès ou tacite, [[1305-1]], al. 1er), **judiciaire** (fixé par le juge à défaut d'accord, al. 2 ; délais de grâce de [[1343-5]], deux ans au plus), **légal**", "Livraison d'une maison à achever : terme tacite"],
          ["Date", "**Certain** : date connue ; **incertain** : date inconnue, survenance certaine", "« Le 31 juillet » / « au décès de X »"],
          ["Effet", "**Suspensif** : diffère l'exigibilité ; **extinctif** : met fin à l'obligation", "CDD du 1er juillet (suspensif) au 31 août (extinctif)"],
          ["Bénéficiaire", "Débiteur (présomption), créancier, ou les deux ([[1305-3]])", "Prêt à intérêt : terme souvent stipulé dans l'intérêt des deux parties"]
        ] } },
        { h: "Les effets du terme suspensif" },
        { liste: [
          "**Avant l'échéance** : la dette **existe** mais n'est **pas exigible** : « ce qui n'est dû qu'à terme ne peut être exigé avant l'échéance » ([[1305-2]]). Le créancier peut accomplir des actes conservatoires. Ce qui a été **payé d'avance ne peut être répété** (même texte) : la dette existait.",
          "**À l'échéance** : l'obligation devient exigible ; les intérêts moratoires et l'exécution forcée supposent en principe une **mise en demeure** ([[1344]], [[1344-1]]).",
          "**Terme extinctif** : l'obligation s'exécute normalement puis s'éteint **sans rétroactivité** ; pour le contrat à durée déterminée, voir [[1212]]."
        ] },
        { h: "La disparition anticipée du terme" },
        { liste: [
          "**Renonciation** : la partie au bénéfice **exclusif** de qui le terme a été fixé peut y renoncer sans le consentement de l'autre ([[1305-3]], al. 2). Le terme étant présumé stipulé en faveur du débiteur, celui-ci peut en principe payer par anticipation.",
          "**Déchéance légale** : le débiteur ne peut réclamer le bénéfice du terme s'il **ne fournit pas les sûretés promises** ou s'il **diminue celles** qui garantissent l'obligation ([[1305-4]]).",
          "**Déchéance conventionnelle** : clause d'exigibilité anticipée en cas de défaillance (échéances impayées d'un prêt), très fréquente.",
          "**Effet relatif** : la déchéance encourue par un débiteur est **inopposable à ses coobligés, même solidaires, et à ses cautions** ([[1305-5]]) : eux conservent le bénéfice du terme."
        ] },
        { attention: "Le décès du débiteur n'entraîne pas la déchéance du terme (Civ. 1re, 20 oct. 2021, n° 20-13.661). L'ouverture d'une sauvegarde ou d'un redressement judiciaire ne rend pas exigibles les créances non échues ; le jugement qui ouvre ou prononce la **liquidation judiciaire**, en revanche, les rend exigibles (C. com., art. L. 643-1), sous des réserves propres au droit des entreprises en difficulté." },
        { p: "Avant la réforme, la Cour de cassation lisait l'ancien article 1188 **strictement** : il ne visait que les sûretés **conventionnelles**, et leur diminution devait être **imputable au débiteur**. Ces exigences de l'ancien article 1188 sont à garder en tête pour les contrats antérieurs au 1er octobre 2016 (le manuel ne dit pas si elles valent pour [[1305-4]])." },
        { schema: { type: "tableau", titre: "Terme ou condition : la synthèse", colonnes: ["", "Terme", "Condition"], lignes: [
          ["Événement", "Futur et **certain**", "Futur et **incertain**"],
          ["Affecte", "L'**exigibilité** ou la durée", "L'**efficacité** de l'obligation (naissance ou anéantissement)"],
          ["Paiement anticipé", "Ne peut être répété ([[1305-2]])", "Peut être répété tant que la condition suspensive est pendante ([[1304-5]], al. 2)"],
          ["Survenance", "Pas de rétroactivité", "Suspensive : pas de rétroactivité sauf stipulation ([[1304-6]]) ; résolutoire : rétroactivité de principe ([[1304-7]])"],
          ["Renonciation", "Par la partie au bénéfice exclusif de qui il est stipulé ([[1305-3]])", "Par la partie dans l'intérêt exclusif de qui elle est stipulée, avant le dénouement ([[1304-4]])"]
        ] } }
      ]
    },
    {
      titre: "Les obligations à pluralité d'objets",
      contenu: [
        { p: "Une obligation peut porter sur **plusieurs prestations**. Trois figures, définies par la réforme de 2016, selon ce qui libère le débiteur." },
        { schema: { type: "tableau", titre: "Cumulative, alternative, facultative", colonnes: ["", "Obligation cumulative", "Obligation alternative", "Obligation facultative"], lignes: [
          ["Texte", "[[1306]]", "[[1307]] à [[1307-5]]", "[[1308]]"],
          ["Objet", "Plusieurs prestations", "Plusieurs prestations", "**Une** prestation, avec faculté d'en fournir une autre"],
          ["Ce qui libère", "L'exécution de **toutes**", "L'exécution de **l'une** d'elles", "La prestation due, ou la prestation de remplacement"],
          ["Exemple", "Livrer la voiture **et** les pneus neige", "Livrer la voiture **ou** payer 20 000 euros", "Livrer la voiture, avec la faculté de payer 20 000 euros à la place"],
          ["Impossibilité par force majeure", "Chaque prestation suit son sort", "Le débiteur doit en principe exécuter une autre prestation ([[1307-3]], [[1307-4]]) ; libéré seulement si toutes deviennent impossibles par force majeure ([[1307-5]])", "L'obligation est **éteinte** si la prestation **initialement convenue** devient impossible ([[1308]], al. 2)"]
        ] } },
        { h: "Le régime de l'obligation alternative" },
        { liste: [
          "Le **choix** appartient au **débiteur** ([[1307-1]], al. 1er), sauf stipulation contraire.",
          "S'il ne choisit pas dans le temps convenu ou un délai raisonnable, l'autre partie peut, **après mise en demeure**, exercer ce choix ou **résoudre** le contrat (al. 2).",
          "Le choix exercé est **définitif** et fait perdre à l'obligation son caractère alternatif (al. 3).",
          "Si la prestation choisie devient impossible par **force majeure**, le débiteur est libéré ([[1307-2]]).",
          "Avant tout choix, l'impossibilité d'une prestation oblige le débiteur à exécuter l'une des autres ([[1307-3]]) ; si le choix appartenait au créancier, celui-ci doit se contenter de l'une des autres lorsque l'impossibilité procède de la force majeure ([[1307-4]])."
        ] },
        { attention: "Obligation alternative ou facultative ? Demandez-vous ce qui est **dû** : dans l'alternative, plusieurs prestations sont dues ; dans l'obligation facultative, **une seule** est due, l'autre n'est qu'un moyen de paiement. D'où la différence en cas de perte fortuite de la prestation principale : l'obligation facultative s'éteint." }
      ]
    },
    {
      titre: "La pluralité de sujets : division et indivisibilité",
      contenu: [
        { h: "Le principe : la division" },
        { p: "L'obligation qui lie plusieurs créanciers ou débiteurs **se divise de plein droit** entre eux, **par parts égales** sauf règle contraire de la loi ou du contrat ([[1309]], al. 1er). Chaque créancier n'a droit qu'à sa part ; chaque débiteur n'est tenu que de sa part (al. 2). On parle d'obligation **conjointe**. Trois débiteurs de 900 euros : le créancier ne peut réclamer que 300 euros à chacun et supporte l'insolvabilité de l'un d'eux." },
        { p: "Il n'en va autrement que si l'obligation est **solidaire** ou la prestation **indivisible** ([[1309]], al. 3). La division joue aussi entre **successeurs**, « l'obligation fût-elle solidaire » (al. 1er) : au décès d'un débiteur solidaire, ses héritiers ne sont tenus chacun que de leur part héréditaire." },
        { h: "L'indivisibilité" },
        { def: { terme: "Obligation à prestation indivisible", texte: "obligation dont la prestation ne peut être fractionnée, **par nature** ou **par contrat** ([[1320]]). Naturelle absolue (livrer un cheval vivant, s'abstenir), naturelle relative (objet divisible mais conçu comme un tout : construire une maison), ou conventionnelle (les parties la stipulent)." } },
        { liste: [
          "**Côté créanciers** : chacun peut exiger et recevoir le **paiement intégral**, sauf à rendre compte aux autres ; mais il ne peut **seul disposer** de la créance ni recevoir le prix au lieu de la chose ([[1320]], al. 1er).",
          "**Côté débiteurs** : chacun est tenu **pour le tout**, avec recours en contribution contre les autres ([[1320]], al. 2).",
          "**Successeurs** : il en va de même pour les héritiers ([[1320]], al. 3). C'est tout l'intérêt de l'indivisibilité par rapport à la solidarité, qui se divise entre héritiers ([[1309]]) : d'où la clause fréquente de **solidarité et d'indivisibilité**."
        ] }
      ]
    },
    {
      titre: "La solidarité active",
      contenu: [
        { p: "Règle commune aux deux formes : « La solidarité est légale ou conventionnelle ; elle **ne se présume pas** » ([[1310]])." },
        { def: { terme: "Solidarité active", texte: "solidarité **entre créanciers** : chacun peut exiger et recevoir le paiement de **toute la créance** ; le paiement fait à l'un, qui en doit compte aux autres, **libère le débiteur à l'égard de tous** ([[1311]], al. 1er)." } },
        { liste: [
          "Le débiteur peut payer l'un ou l'autre des créanciers **tant qu'il n'est pas poursuivi** par l'un d'eux ([[1311]], al. 2).",
          "Tout acte qui **interrompt ou suspend la prescription** à l'égard de l'un des créanciers profite aux autres ([[1312]]).",
          "La jurisprudence a étendu cette solution à la **mise en demeure**.",
          "La **remise de dette** consentie par un seul créancier ne libère le débiteur que pour **la part de ce créancier** ([[1350-1]], al. 2) ; de même pour le serment déféré par l'un d'eux ([[1385-4]]).",
          "**Source** : exclusivement conventionnelle, sur clause expresse du titre ; même entre commerçants, elle ne se présume pas (Civ. 1re, 16 juin 1992 ; Com. 26 sept. 2018, n° 16-28.133)."
        ] },
        { attention: "Technique rare et dangereuse : les créanciers s'exposent à la malhonnêteté ou à l'insolvabilité de celui qui a encaissé. Application pratique principale : le **compte joint** (chaque cotitulaire peut en retirer la totalité)." }
      ]
    },
    {
      titre: "La solidarité passive",
      contenu: [
        { def: { terme: "Solidarité passive", texte: "solidarité **entre débiteurs** : chacun est tenu de **toute la dette** et le paiement fait par l'un libère tous les autres envers le créancier ([[1313]], al. 1er). Le créancier choisit le débiteur qu'il poursuit et peut poursuivre les autres ensuite (al. 2). C'est une **garantie** contre l'insolvabilité d'un codébiteur." } },
        { attention: "La qualification d'une exception (commune, personnelle, ou personnelle éteignant une part divise) commande son régime et prête à discussion : voir, par exemple, Civ. 1re, 5 juin 2019, n° 17-27.066. Distinguez l'exception **purement personnelle** (vice du consentement, incapacité, terme propre : elle ne profite qu'à son titulaire, les autres restent tenus du tout) de l'exception **simplement personnelle** (remise de dette : tous peuvent l'invoquer, mais elle ne diminue la dette que de la part de son bénéficiaire)." },
        { h: "Les sources" },
        { liste: [
          "**Conventionnelle** : elle ne se présume pas ([[1310]]) ; elle doit être **certaine**, mais aucune formule sacramentelle n'est exigée : une volonté non équivoque suffit (Civ. 1re, 3 déc. 1974 ; Civ. 3e, 26 janv. 2005). Clause type : « les preneurs sont tenus solidairement ».",
          "**Légale** : parents exerçant l'autorité parentale ([[1242]], al. 4) ; coemprunteurs d'une même chose ([[1887]]) ; époux pour les dettes ménagères (art. 220) ; coauteurs condamnés pour une même infraction (C. pr. pén.).",
          "**Présumée en matière commerciale** : exception coutumière ancienne, maintenue par la jurisprudence entre commerçants pour les dettes commerciales."
        ] },
        { h: "L'obligation à la dette : unité de dette, pluralité de liens" },
        { p: "La dette est **une** (chacun doit le tout), mais chaque débiteur est lié au créancier par un **lien propre**, qui peut être affecté d'une modalité particulière (terme, condition). D'où le régime des **exceptions** ([[1315]])." },
        { schema: { type: "arbre", titre: "Quelles exceptions le débiteur poursuivi peut-il opposer ? ([[1315]])", racine: { t: "Le débiteur solidaire poursuivi pour le tout", enfants: [
          { lien: "peut opposer", t: "Exceptions communes", d: "nullité, résolution, paiement, remise totale : elles profitent à tous" },
          { lien: "peut opposer", t: "Ses exceptions personnelles", d: "vice de son consentement, incapacité, terme ou condition qui lui est propre" },
          { lien: "ne peut pas opposer", t: "Les exceptions personnelles aux autres", d: "ex. le terme accordé à un codébiteur" },
          { lien: "sauf", t: "Exception personnelle éteignant la part divise d'un autre", d: "**compensation** ([[1347-6]], al. 2) ou **remise de dette** ([[1350-1]], al. 1er) : il fait déduire cette part du total" }
        ] } } },
        { h: "Les effets secondaires" },
        { liste: [
          "La **demande d'intérêts** formée contre l'un fait courir les intérêts à l'égard de tous ([[1314]]).",
          "L'**interruption de la prescription** contre l'un vaut contre tous ([[2245]], al. 1er).",
          "Le **serment** déféré à l'un profite aux autres ([[1385-4]]).",
          "Les codébiteurs répondent **solidairement de l'inexécution** ; la charge définitive pèse sur ceux à qui elle est imputable ([[1319]]).",
          "La **transaction** conclue avec l'un oblige les autres, en application de la représentation mutuelle (Com. 28 mars 2006). Les **voies de recours** et l'autorité de la chose jugée relèvent du même mécanisme ; voir par exemple l'effet de l'appel d'un coobligé en cas de solidarité ou d'indivisibilité (C. pr. civ., art. 552).",
          "Mais la **déchéance du terme** encourue par l'un est **inopposable** aux autres ([[1305-5]])."
        ] },
        { p: "Ces effets étaient expliqués par l'idée de **représentation mutuelle** des codébiteurs, chacun étant le « contradicteur légitime » du créancier et le représentant de ses coobligés (Civ., 1er déc. 1885), mais seulement pour conserver ou diminuer la dette, jamais pour l'aggraver (*ad conservandam, non ad augendam obligationem*). Critiquée, cette notion n'est pas reprise par l'ordonnance, qui énumère les effets au cas par cas." },
        { h: "La contribution à la dette" },
        { schema: { type: "etapes", titre: "A, B et C doivent solidairement 900 euros ; A paie tout", etapes: [
          { t: "1. Obligation à la dette", d: "le créancier réclame 900 euros à A, qui ne peut exiger la division ([[1313]])" },
          { t: "2. Contribution", d: "entre eux, chacun ne doit que sa part, en principe égale : 300 euros ([[1317]], al. 1er)" },
          { t: "3. Recours", d: "A agit contre B et C **à proportion de leur part** (répartition par **parts viriles** : le tout divisé par le nombre de codébiteurs) : 300 euros chacun, jamais 600 contre un seul ([[1317]], al. 2), par un recours subrogatoire ou personnel (mandat, gestion d'affaires) ; il ne récupère que ce qu'il a payé **au-delà de sa propre part** (Civ. 1re, 10 oct. 2019, n° 18-20.429)" },
          { t: "4. Insolvabilité", d: "si C est insolvable, sa part se répartit entre les solvables, **y compris A** : A et B supportent 150 euros de plus chacun ([[1317]], al. 3)" }
        ] } },
        { liste: [
          "Les parts peuvent être **inégales** si le contrat le prévoit ; et si la dette procède d'une affaire qui ne concerne qu'un codébiteur, lui seul la supporte définitivement ([[1318]]) : c'est la situation du codébiteur qui s'est engagé pour rendre service.",
          "**Remise de solidarité** ([[1316]]) : le créancier qui reçoit un paiement de l'un et le décharge de la solidarité conserve sa créance contre les autres, **déduction faite de la part** du débiteur déchargé. À distinguer de la **remise de dette** consentie à l'un, qui libère les autres à concurrence de sa part ([[1350-1]])."
        ] }
      ]
    },
    {
      titre: "L'obligation in solidum",
      contenu: [
        { def: { terme: "Obligation *in solidum*", texte: "obligation de plusieurs personnes tenues **chacune pour le tout** envers le créancier, sans être liées par la solidarité ni par un lien de représentation. Création **jurisprudentielle**, destinée à contourner la règle selon laquelle la solidarité ne se présume pas ; l'ordonnance de 2016 ne la régit pas (le projet de réforme de la responsabilité civile de mars 2017 la remplaçait par la solidarité)." } },
        { p: "Fondement : « quand il y a participation de plusieurs à un fait dommageable », la réparation est ordonnée **pour le tout contre chacun** s'il est impossible de déterminer dans quelle proportion chaque faute a concouru au dommage (Civ., 11 juill. 1892). La solidarité légale (parents du fait de leur enfant, coauteurs d'une infraction) est trop étroite pour couvrir les dommages à causes plurales ; à défaut, la victime serait réduite à diviser ses poursuites entre coresponsables, tenus d'une simple obligation conjointe." },
        { p: "Domaine principal : la **responsabilité civile**. Lorsque plusieurs personnes ont, par des faits distincts, concouru à un **même dommage**, chacune est condamnée à le réparer en totalité, quelle que soit la nature des faits générateurs (faute, fait d'une chose, fait d'autrui). Autres applications : obligation alimentaire, assurances." },
        { liste: [
          "**Effets principaux transposés** : la victime réclame le tout à l'un quelconque des coresponsables ; le paiement de l'un libère les autres ; celui qui a payé exerce un **recours en contribution** contre les autres.",
          "**Effets secondaires exclus** en principe : pas de représentation mutuelle, donc pas d'extension de l'interruption de la prescription ou de la chose jugée d'un coobligé à l'autre. Des exceptions rares existent (assurances : Civ. 1re, 12 juin 1968)."
        ] },
        { schema: { type: "tableau", titre: "Synthèse : la pluralité de débiteurs", colonnes: ["", "Obligation conjointe", "Solidarité passive", "Obligation *in solidum*", "Indivisibilité"], lignes: [
          ["Source", "Principe ([[1309]])", "Loi ou contrat, ne se présume pas ([[1310]])", "Jurisprudence", "Nature de la prestation ou contrat ([[1320]])"],
          ["Chacun doit", "Sa part seulement", "Le tout ([[1313]])", "Le tout", "Le tout"],
          ["Effets secondaires", "Non", "Oui ([[1314]], [[2245]])", "Non, en principe", "Non prévus par [[1320]]"],
          ["Héritiers d'un débiteur", "Divisée", "**Divisée** entre héritiers ([[1309]])", "—", "Chaque héritier tenu du tout ([[1320]], al. 3)"],
          ["Contribution", "—", "Par parts ([[1317]])", "Selon la gravité des fautes ou par parts égales", "Recours en contribution ([[1320]], al. 2)"]
        ] } }
      ]
    }
  ],
  retenir: [
    "Condition : événement futur et incertain ([[1304]]) ; terme : événement futur et certain, même de date inconnue ([[1305]]) ; critère objectif (Civ. 1re, 13 avr. 1999).",
    "Nullité de l'obligation sous condition dépendant de la seule volonté du débiteur, sauf exécution en connaissance de cause ([[1304-2]]).",
    "Fictions : condition suspensive réputée accomplie si celui qui y avait intérêt l'a empêchée ; résolutoire réputée défaillie si provoquée ([[1304-3]]).",
    "Condition suspensive accomplie : pas de rétroactivité, sauf stipulation ([[1304-6]]) ; défaillie : obligation réputée n'avoir jamais existé ; résolutoire : rétroactivité de principe ([[1304-7]]).",
    "Terme : payé d'avance, non répétable ([[1305-2]]) ; présumé en faveur du débiteur ([[1305-3]]) ; déchéance ([[1305-4]]) inopposable aux coobligés et cautions ([[1305-5]]).",
    "Alternative : choix du débiteur, définitif ([[1307-1]]) ; facultative : éteinte si la prestation principale devient impossible par force majeure ([[1308]]).",
    "Division de principe ([[1309]]) ; la solidarité ne se présume pas ([[1310]]) ; exceptions communes, personnelles, et déduction de la part divise éteinte ([[1315]]) ; contribution par parts, insolvabilité répartie ([[1317]]).",
    "Indivisibilité : même les héritiers sont tenus du tout ([[1320]]) ; in solidum : effets principaux de la solidarité, pas les effets secondaires."
  ],
  articles: ["1304", "1304-1", "1304-2", "1304-3", "1304-4", "1304-5", "1304-6", "1304-7", "1305", "1305-1", "1305-2", "1305-3", "1305-4", "1305-5", "1306", "1307", "1307-1", "1307-2", "1307-3", "1307-4", "1307-5", "1308", "1309", "1310", "1311", "1312", "1313", "1314", "1315", "1316", "1317", "1318", "1319", "1320", "1347-6", "1350-1", "1385-4", "1887", "2245"],
  regimes: ["condition-suspensive", "terme-decheance", "solidarite-passive"],
  cas: ["ch19-appartement-colocation"],
  quiz: [
    { q: "« Je te rembourserai quand je vendrai ma maison. » L'événement est objectivement incertain. Selon la jurisprudence récente, c'est :", choix: ["Un terme incertain", "Une condition", "Une obligation pure et simple"], bonne: 1, expl: "Civ. 1re, 13 avr. 1999 : un événement incertain dans sa réalisation est une condition, peu important ce que les parties tenaient pour acquis ; [[1305]] exige un événement certain." },
    { q: "Une promesse de vente est conclue le 5 janvier sous condition suspensive de prêt ; le prêt est accordé le 20 février, sans clause de rétroactivité. L'obligation du vendeur devient pure et simple :", choix: ["Le 20 février", "Le 5 janvier", "Le jour de l'acte authentique seulement"], bonne: 0, expl: "[[1304-6]], al. 1er : à compter de l'accomplissement, la rétroactivité devant être stipulée (al. 2)." },
    { q: "L'acquéreur, qui devait solliciter un prêt sur vingt ans, n'a demandé qu'un prêt sur dix ans, qui lui est refusé. La condition suspensive :", choix: ["A défailli : l'acquéreur est libéré", "Est nulle comme potestative", "Est réputée accomplie"], bonne: 2, expl: "[[1304-3]], al. 1er : il a empêché l'accomplissement en demandant un prêt non conforme (Civ. 3e, 30 janv. 2008)." },
    { q: "« Je te vends ma moto si je le décide d'ici un mois. » L'obligation est :", choix: ["Nulle", "Valable, sous condition suspensive", "Valable, sous condition résolutoire"], bonne: 0, expl: "[[1304-2]] : condition dépendant de la seule volonté du débiteur." },
    { q: "Un débiteur paie une dette à terme avant l'échéance, puis se ravise. Peut-il obtenir restitution ?", choix: ["Oui, par l'action en répétition de l'indu", "Non : ce qui a été payé d'avance ne peut être répété", "Oui, s'il prouve son erreur"], bonne: 1, expl: "[[1305-2]] : la dette existait, seule son exigibilité était différée. À comparer avec [[1304-5]], al. 2, pour la condition suspensive." },
    { q: "Un débiteur diminue les sûretés promises ; il est déchu du terme. Son codébiteur solidaire :", choix: ["Est aussi déchu", "Est libéré", "Conserve le bénéfice du terme"], bonne: 2, expl: "[[1305-5]] : la déchéance est inopposable aux coobligés, même solidaires, et aux cautions." },
    { q: "Le débiteur doit livrer un tableau précis, avec la faculté de payer 10 000 euros à la place. Le tableau est détruit par force majeure. Le débiteur :", choix: ["Est libéré", "Doit payer 10 000 euros", "Doit un tableau équivalent"], bonne: 0, expl: "Obligation facultative : [[1308]], al. 2. Dans une obligation alternative, il aurait dû exécuter l'autre prestation ([[1307-3]])." },
    { q: "A, B et C doivent solidairement 3 000 euros. Le créancier accorde à A une remise de dette. B, poursuivi, doit :", choix: ["3 000 euros", "2 000 euros", "1 000 euros"], bonne: 1, expl: "[[1350-1]], al. 1er et [[1315]] : la remise consentie à A libère les autres à concurrence de sa part (1 000 euros)." },
    { q: "A a payé seul les 900 euros dus solidairement avec B et C ; C est insolvable. A peut réclamer à B :", choix: ["300 euros", "450 euros", "600 euros"], bonne: 1, expl: "[[1317]] : recours à proportion de la part de B (300), plus la moitié de la part de C, répartie entre les solvables y compris A (150)." },
    { q: "Deux entrepreneurs ont, par des fautes distinctes, causé un même dommage. Sans texte ni clause, ils sont tenus :", choix: ["Conjointement", "Solidairement", "In solidum"], bonne: 2, expl: "Obligation *in solidum* : chacun doit réparer le tout, sans les effets secondaires de la solidarité, qui ne se présume pas ([[1310]])." }
  ]
});

OBL.regimes.push(
  {
    id: "condition-suspensive",
    chapitre: "Régime général de l'obligation",
    titre: "Le sort d'une obligation sous condition suspensive",
    fondement: ["1304", "1304-2", "1304-3", "1304-4", "1304-5", "1304-6"],
    resume: "Déterminer si une partie est engagée ou libérée lorsque son obligation dépend d'un événement incertain (obtention d'un prêt, d'un permis, d'une mutation).",
    conditions: [
      { nom: "La qualification de condition", question: "L'événement est-il futur et objectivement incertain dans sa réalisation (et non seulement dans sa date) ?", detail: "Sinon, c'est un terme ([[1305]]). Approche objective (Civ. 1re, 13 avr. 1999).", piege: "Se fier au mot « quand » : l'octroi d'un prêt reste incertain." },
      { nom: "La validité de la condition", question: "La condition est-elle licite ([[1304-1]]) ? Sa réalisation dépend-elle de la seule volonté du débiteur ([[1304-2]]) ?", detail: "Condition illicite : obligation nulle. Condition potestative : obligation nulle, sauf exécution en connaissance de cause.", piege: "La condition de prêt dépend d'un tiers (la banque) : elle n'est pas potestative." },
      { nom: "Le comportement des parties pendant la condition", question: "Le débiteur s'est-il abstenu de tout acte compromettant l'exécution ? La partie intéressée a-t-elle empêché l'accomplissement ?", detail: "[[1304-5]], al. 1er ; fiction de [[1304-3]], al. 1er. Promesse sous condition de prêt : demande conforme aux caractéristiques stipulées (Civ. 3e, 30 janv. 2008).", preuve: "C'est à l'acquéreur de prouver qu'il a sollicité un prêt conforme à la promesse.", piege: "Oublier que la sanction n'est pas des dommages et intérêts mais la **fiction d'accomplissement** : le contrat produit ses effets." },
      { nom: "Le dénouement", question: "La condition s'est-elle accomplie, a-t-elle défailli, ou a-t-on renoncé à elle ?", detail: "Accomplie : obligation pure et simple à compter de ce jour, sans rétroactivité sauf clause ([[1304-6]]). Défaillie : obligation réputée n'avoir jamais existé. Renonciation possible par la partie dans l'intérêt exclusif de laquelle elle est stipulée, avant le dénouement ([[1304-4]]).", piege: "Appliquer la rétroactivité de l'ancien article 1179 à un contrat conclu depuis le 1er octobre 2016." }
    ],
    exonerations: [
      { nom: "La défaillance de la condition", question: "Est-il certain que l'événement ne se produira pas (délai expiré, refus de prêt conforme) ?", detail: "[[1304-6]], al. 3.", effet: "L'obligation est réputée n'avoir jamais existé ; les sommes versées sont restituées." },
      { nom: "La nullité pour potestativité", question: "La réalisation dépendait-elle de la seule volonté du débiteur ?", detail: "[[1304-2]].", effet: "Obligation nulle, sauf si elle a été exécutée en connaissance de cause." }
    ],
    copie: [
      "Toujours dans l'ordre : qualification (terme ou condition), validité, période pendante, dénouement.",
      "Vérifier la date du contrat : les règles de 2016 s'appliquent aux contrats conclus depuis le 1er octobre 2016."
    ]
  },
  {
    id: "terme-decheance",
    chapitre: "Régime général de l'obligation",
    titre: "Exigibilité d'une dette à terme",
    fondement: ["1305", "1305-2", "1305-3", "1305-4", "1305-5"],
    resume: "Savoir si le créancier peut exiger immédiatement le paiement d'une dette assortie d'un terme, et à l'égard de qui.",
    conditions: [
      { nom: "L'existence d'un terme", question: "L'exigibilité est-elle différée jusqu'à un événement futur et certain ?", detail: "Terme exprès ou tacite ([[1305-1]], al. 1er) ; à défaut d'accord, le juge peut le fixer (al. 2)." },
      { nom: "L'échéance", question: "L'événement est-il survenu ?", detail: "Avant l'échéance, rien ne peut être exigé ([[1305-2]]) ; le créancier peut seulement accomplir des actes conservatoires.", piege: "Le paiement anticipé volontaire ne peut pas être répété ([[1305-2]])." },
      { nom: "Une cause de déchéance", question: "Le débiteur n'a-t-il pas fourni les sûretés promises ou a-t-il diminué celles qui existent ? Une clause d'exigibilité anticipée joue-t-elle ?", detail: "Déchéance légale ([[1305-4]]) ou conventionnelle.", preuve: "Au créancier." },
      { nom: "La personne poursuivie", question: "Le créancier poursuit-il le débiteur déchu, ou un coobligé ou une caution ?", detail: "La déchéance est inopposable aux coobligés, même solidaires, et aux cautions ([[1305-5]]).", piege: "Réclamer à la caution le capital restant dû à la suite de la déchéance du débiteur principal." }
    ],
    exonerations: [
      { nom: "Délai de grâce", question: "Le débiteur est-il de bonne foi et en difficulté ?", detail: "Le juge peut reporter ou échelonner le paiement dans la limite de deux années ([[1343-5]]).", effet: "Exigibilité reportée ; procédures d'exécution suspendues." }
    ],
    copie: [
      "Distinguer exigibilité (terme) et existence (condition) de la dette.",
      "Pour une déchéance, identifier sa source (loi, clause) puis son domaine personnel (débiteur seul)."
    ]
  },
  {
    id: "solidarite-passive",
    chapitre: "Régime général de l'obligation",
    titre: "La solidarité passive",
    fondement: ["1310", "1313", "1315", "1317", "1318"],
    resume: "Déterminer ce qu'un créancier peut réclamer à l'un de plusieurs débiteurs, les moyens de défense de celui-ci, puis la répartition finale entre codébiteurs.",
    conditions: [
      { nom: "Une source de solidarité", question: "Un texte ou une clause certaine établit-il la solidarité ?", detail: "Elle ne se présume pas ([[1310]]), sauf entre commerçants pour une dette commerciale ; sinon, division de principe ([[1309]]).", preuve: "Au créancier qui s'en prévaut.", piege: "Confondre avec l'obligation in solidum des coresponsables d'un même dommage." },
      { nom: "L'obligation au tout", question: "Le créancier réclame-t-il toute la dette à l'un des débiteurs ?", detail: "C'est son droit ([[1313]]) : pas de bénéfice de division." },
      { nom: "Les exceptions opposables", question: "Quelles exceptions le débiteur poursuivi invoque-t-il ?", detail: "Communes (nullité, résolution, paiement) et personnelles à lui : oui. Personnelles aux autres (terme accordé à un autre) : non. Compensation ou remise de dette éteignant la part divise d'un autre : déduction de cette part ([[1315]], [[1347-6]], [[1350-1]]).", piege: "Déduire toute la créance compensable d'un codébiteur, au-delà de sa part divise." },
      { nom: "La contribution", question: "Celui qui a payé agit-il contre les autres ?", detail: "Recours à proportion de la part de chacun, insolvabilité répartie entre tous les solvables ([[1317]]) ; charge exclusive de celui que l'affaire concerne seul ([[1318]]).", piege: "Réclamer à un seul codébiteur tout ce qui excède sa propre part." }
    ],
    exonerations: [
      { nom: "Remise de dette à un codébiteur", question: "Le créancier a-t-il libéré l'un des débiteurs de sa dette ?", detail: "[[1350-1]], al. 1er.", effet: "Les autres sont libérés à concurrence de la part du bénéficiaire." },
      { nom: "Remise de solidarité", question: "Le créancier a-t-il seulement déchargé l'un d'eux de la solidarité après avoir reçu un paiement ?", detail: "[[1316]].", effet: "Créance maintenue contre les autres, déduction faite de la part du débiteur déchargé." }
    ],
    copie: [
      "Deux temps obligatoires : obligation à la dette (créancier/débiteurs), puis contribution (entre débiteurs).",
      "Faire les calculs avec des chiffres : le correcteur les attend."
    ]
  }
);

OBL.cas.push({
  id: "ch19-appartement-colocation",
  titre: "La promesse sous condition de prêt et la colocation",
  seance: "Chapitre 19",
  regimes: ["condition-suspensive", "solidarite-passive"],
  faits: "Le 12 janvier 2026, Léa signe une promesse synallagmatique de vente portant sur un deux-pièces à Saint-Étienne, au prix de 190 000 euros, « sous la condition suspensive de l'obtention par l'acquéreur, au plus tard le 12 mars 2026, d'un prêt de 180 000 euros au plus, d'une durée de 25 ans, au taux maximal de 3,8 % ». Souhaitant rembourser plus vite, Léa sollicite un prêt de 180 000 euros sur 15 ans à 3,5 %, qui lui est refusé le 2 mars en raison de mensualités trop élevées. Elle informe le vendeur qu'elle est libérée et qu'elle a trouvé un autre bien. Le vendeur soutient qu'elle reste tenue d'acheter. Par ailleurs, depuis septembre 2025, Léa occupe en colocation un appartement avec Hugo et Sami ; le bail, signé par les trois, stipule que « les preneurs sont tenus solidairement au paiement des loyers ». Trois mois de loyer (4 500 euros au total, 1 500 euros par mois) sont restés impayés. En juin 2026, la bailleresse a écrit à Sami qu'elle le « libérait de sa part de la dette ». Elle doit par ailleurs 500 euros à Léa, qui a avancé le coût d'une réparation de la chaudière incombant à la bailleresse. Elle assigne aujourd'hui Hugo seul en paiement des 4 500 euros.",
  question: "Léa est-elle libérée de la promesse ? Que peut réclamer la bailleresse à Hugo, et quels recours aura-t-il ?",
  corrige: {
    qualification: "Une promesse synallagmatique de vente assortie d'une clause subordonnant l'engagement de l'acquéreur à l'obtention d'un prêt : condition suspensive (art. 1304). Un bail conclu par plusieurs preneurs avec clause de solidarité : solidarité passive conventionnelle (art. 1310 et 1313), avec une remise de dette consentie à un codébiteur et une créance compensable au profit d'un autre.",
    probleme: "La condition suspensive est-elle réputée accomplie lorsque l'acquéreur a sollicité un prêt non conforme aux caractéristiques prévues ? Le débiteur solidaire poursuivi pour le tout peut-il se prévaloir de la remise de dette consentie à un codébiteur et de la compensation dont bénéficie un autre ?",
    majeure: "L'obligation est conditionnelle lorsqu'elle dépend d'un événement futur et incertain (art. 1304) ; l'événement incertain dans sa réalisation est une condition, non un terme (Civ. 1re, 13 avr. 1999). Est nulle l'obligation sous une condition dont la réalisation dépend de la seule volonté du débiteur (art. 1304-2). La condition suspensive est réputée accomplie si celui qui y avait intérêt en a empêché l'accomplissement (art. 1304-3, al. 1er) ; tel est le cas de l'acquéreur qui n'a pas sollicité un prêt conforme aux caractéristiques stipulées dans la promesse, ce qu'il lui appartient de prouver (Civ. 3e, 30 janv. 2008). L'obligation devient pure et simple à compter de l'accomplissement (art. 1304-6, al. 1er) ; en cas de défaillance, elle est réputée n'avoir jamais existé (al. 3). La solidarité ne se présume pas ; elle est légale ou conventionnelle (art. 1310). Elle oblige chaque débiteur à toute la dette, le créancier poursuivant celui de son choix (art. 1313). Le débiteur poursuivi peut opposer les exceptions communes et ses exceptions personnelles, mais non celles personnelles aux autres ; toutefois, lorsqu'une exception personnelle à un autre codébiteur éteint la part divise de celui-ci, notamment compensation ou remise de dette, il peut la faire déduire du total (art. 1315). La remise de dette consentie à l'un libère les autres à concurrence de sa part (art. 1350-1, al. 1er) ; le codébiteur peut se prévaloir de la compensation de ce que le créancier doit à un coobligé pour faire déduire la part divise de celui-ci (art. 1347-6, al. 2). Entre eux, les codébiteurs ne contribuent que pour leur part ; celui qui a payé au-delà dispose d'un recours contre les autres à proportion de leur propre part (art. 1317).",
    mineure: [
      { condition: "La qualification de la clause", corrige: "L'octroi d'un prêt est un événement futur et objectivement incertain : la clause est une condition, et une condition suspensive, puisque l'engagement de Léa n'est efficace que si elle obtient le prêt. Elle ne dépend pas de la seule volonté de Léa, mais de la décision de la banque : elle n'est pas potestative (art. 1304-2). Conclue en 2026, la promesse est soumise aux textes issus de l'ordonnance de 2016." },
      { condition: "La demande de prêt non conforme", corrige: "La promesse visait un prêt de 180 000 euros sur 25 ans au taux maximal de 3,8 %. Léa a demandé le même montant, à un taux inférieur, mais sur 15 ans : la durée réduite augmente fortement les mensualités, et c'est précisément pour ce motif que la banque a refusé. Léa n'a donc pas sollicité un prêt conforme aux caractéristiques de la promesse ; il lui appartiendrait de prouver le contraire. En réduisant la durée, elle a empêché l'accomplissement de la condition stipulée dans son intérêt : la condition est réputée accomplie (art. 1304-3, al. 1er)." },
      { condition: "Les conséquences pour Léa", corrige: "La condition étant réputée accomplie, son obligation d'acheter est devenue pure et simple (art. 1304-6, al. 1er) : la promesse synallagmatique valant vente (art. 1589), le vendeur peut exiger la réitération de la vente ou, à défaut, demander la résolution et des dommages et intérêts (art. 1217), ou la pénalité éventuellement stipulée. Léa ne peut pas davantage invoquer une renonciation : elle pouvait renoncer à la condition stipulée dans son intérêt exclusif (art. 1304-4), mais une renonciation l'aurait engagée, non libérée." },
      { condition: "La solidarité et l'obligation au tout", corrige: "La clause du bail stipule expressément la solidarité des preneurs : la condition de l'article 1310 est remplie. La bailleresse peut donc réclamer toute la dette à Hugo seul (art. 1313), qui ne peut exiger la division." },
      { condition: "Les exceptions : remise de dette et compensation", corrige: "La lettre à Sami, qui le libère de sa part sans paiement, est une remise de dette consentie à un codébiteur : elle libère les autres à concurrence de la part de Sami, soit 1 500 euros (art. 1350-1, al. 1er ; art. 1315). La bailleresse doit 500 euros à Léa : Hugo peut se prévaloir de cette compensation pour faire déduire du total la part divise de Léa à hauteur de ce qui est éteint, soit 500 euros, montant inférieur à sa part de 1 500 euros (art. 1347-6, al. 2 ; art. 1315). Hugo ne doit donc payer que 4 500 − 1 500 − 500 = 2 500 euros." },
      { condition: "La contribution", corrige: "Entre les colocataires, la dette se répartit par parts égales, faute de clause contraire : 1 500 euros chacun (art. 1317, al. 1er). Hugo, qui aura payé 2 500 euros, a payé 1 000 euros au-delà de sa part. Sami ayant été libéré, Hugo ne peut agir que contre Léa, à proportion de sa part : celle-ci est de 1 500 euros, dont 500 déjà éteints par compensation, soit un recours de 1 000 euros (art. 1317, al. 2). Vérification : Hugo supporte 1 500 euros, Léa 1 500 euros (1 000 remboursés à Hugo et 500 par compensation), Sami rien ; la bailleresse a reçu 3 000 euros et renoncé à 1 500." }
    ],
    conclusion: "Léa n'est pas libérée : ayant sollicité un prêt non conforme, elle est réputée avoir empêché l'accomplissement de la condition, qui est tenue pour accomplie ; elle doit acquérir le bien ou répondre de son inexécution. Hugo, débiteur solidaire, peut être poursuivi seul, mais il fera déduire la part de Sami, qui a bénéficié d'une remise de dette, et les 500 euros compensés au profit de Léa : il paiera 2 500 euros et disposera d'un recours de 1 000 euros contre Léa."
  }
});

OBL.articles.push(
  {"num": "1304", "code": "C. civ.", "theme": "Condition", "texte": "L'obligation est conditionnelle lorsqu'elle dépend d'un événement futur et incertain.\n\nLa condition est suspensive lorsque son accomplissement rend l'obligation pure et simple.\n\nElle est résolutoire lorsque son accomplissement entraîne l'anéantissement de l'obligation.", "chapitres": [19], "retenir": "Événement futur et incertain ; suspensive (rend l'obligation pure et simple) ou résolutoire (l'anéantit)."},
  {"num": "1304-1", "code": "C. civ.", "theme": "Condition", "texte": "La condition doit être licite. A défaut, l'obligation est nulle.", "chapitres": [19], "retenir": "Condition illicite : obligation nulle."},
  {"num": "1304-2", "code": "C. civ.", "theme": "Condition", "texte": "Est nulle l'obligation contractée sous une condition dont la réalisation dépend de la seule volonté du débiteur. Cette nullité ne peut être invoquée lorsque l'obligation a été exécutée en connaissance de cause.", "chapitres": [19], "retenir": "Nullité de l'obligation sous condition dépendant de la seule volonté du débiteur, sauf exécution en connaissance de cause."},
  {"num": "1304-3", "code": "C. civ.", "theme": "Condition", "texte": "La condition suspensive est réputée accomplie si celui qui y avait intérêt en a empêché l'accomplissement.\n\nLa condition résolutoire est réputée défaillie si son accomplissement a été provoqué par la partie qui y avait intérêt.", "chapitres": [19], "retenir": "Suspensive réputée accomplie si l'intéressé l'a empêchée ; résolutoire réputée défaillie s'il l'a provoquée."},
  {"num": "1304-4", "code": "C. civ.", "theme": "Condition", "texte": "Une partie est libre de renoncer à la condition stipulée dans son intérêt exclusif, tant que celle-ci n'est pas accomplie ou n'a pas défailli.", "chapitres": [19], "retenir": "Renonciation à la condition stipulée dans l'intérêt exclusif d'une partie, avant accomplissement ou défaillance."},
  {"num": "1304-5", "code": "C. civ.", "theme": "Condition", "texte": "Avant que la condition suspensive ne soit accomplie, le débiteur doit s'abstenir de tout acte qui empêcherait la bonne exécution de l'obligation ; le créancier peut accomplir tout acte conservatoire et attaquer les actes du débiteur accomplis en fraude de ses droits.\n\nCe qui a été payé peut être répété tant que la condition suspensive ne s'est pas accomplie.", "chapitres": [19], "retenir": "Condition pendante : abstention du débiteur, actes conservatoires du créancier ; ce qui a été payé peut être répété."},
  {"num": "1304-6", "code": "C. civ.", "theme": "Condition", "texte": "L'obligation devient pure et simple à compter de l'accomplissement de la condition suspensive.\n\nToutefois, les parties peuvent prévoir que l'accomplissement de la condition rétroagira au jour du contrat. La chose, objet de l'obligation, n'en demeure pas moins aux risques du débiteur, qui en conserve l'administration et a droit aux fruits jusqu'à l'accomplissement de la condition.\n\nEn cas de défaillance de la condition suspensive, l'obligation est réputée n'avoir jamais existé.", "chapitres": [19], "retenir": "Pas de rétroactivité de la condition suspensive, sauf stipulation ; défaillance : obligation réputée n'avoir jamais existé."},
  {"num": "1304-7", "code": "C. civ.", "theme": "Condition", "texte": "L'accomplissement de la condition résolutoire éteint rétroactivement l'obligation, sans remettre en cause, le cas échéant, les actes conservatoires et d'administration.\n\nLa rétroactivité n'a pas lieu si telle est la convention des parties ou si les prestations échangées ont trouvé leur utilité au fur et à mesure de l'exécution réciproque du contrat.", "chapitres": [19], "retenir": "Condition résolutoire : extinction rétroactive, sauf convention ou prestations utiles au fur et à mesure."},
  {"num": "1305", "code": "C. civ.", "theme": "Terme", "texte": "L'obligation est à terme lorsque son exigibilité est différée jusqu'à la survenance d'un événement futur et certain, encore que la date en soit incertaine.", "chapitres": [19], "retenir": "Exigibilité différée jusqu'à un événement futur et certain, même de date incertaine."},
  {"num": "1305-1", "code": "C. civ.", "theme": "Terme", "texte": "Le terme peut être exprès ou tacite.\n\nA défaut d'accord, le juge peut le fixer en considération de la nature de l'obligation et de la situation des parties.", "chapitres": [19], "retenir": "Terme exprès ou tacite ; à défaut d'accord, fixé par le juge."},
  {"num": "1305-2", "code": "C. civ.", "theme": "Terme", "texte": "Ce qui n'est dû qu'à terme ne peut être exigé avant l'échéance ; mais ce qui a été payé d'avance ne peut être répété.", "chapitres": [19], "retenir": "Pas d'exigibilité avant l'échéance ; le paiement anticipé ne peut être répété."},
  {"num": "1305-3", "code": "C. civ.", "theme": "Terme", "texte": "Le terme profite au débiteur, s'il ne résulte de la loi, de la volonté des parties ou des circonstances qu'il a été établi en faveur du créancier ou des deux parties.\n\nLa partie au bénéfice exclusif de qui le terme a été fixé peut y renoncer sans le consentement de l'autre.", "chapitres": [19], "retenir": "Terme présumé en faveur du débiteur ; renonciation par la partie au bénéfice exclusif de qui il est fixé."},
  {"num": "1305-4", "code": "C. civ.", "theme": "Terme", "texte": "Le débiteur ne peut réclamer le bénéfice du terme s'il ne fournit pas les sûretés promises au créancier ou s'il diminue celles qui garantissent l'obligation.", "chapitres": [19], "retenir": "Déchéance du terme si le débiteur ne fournit pas ou diminue les sûretés."},
  {"num": "1305-5", "code": "C. civ.", "theme": "Terme", "texte": "La déchéance du terme encourue par un débiteur est inopposable à ses coobligés, même solidaires, et à ses cautions.", "chapitres": [19], "retenir": "Déchéance inopposable aux coobligés, même solidaires, et aux cautions."},
  {"num": "1306", "code": "C. civ.", "theme": "Pluralité d'objets", "texte": "L'obligation est cumulative lorsqu'elle a pour objet plusieurs prestations et que seule l'exécution de la totalité de celles-ci libère le débiteur.", "chapitres": [19], "retenir": "Obligation cumulative : toutes les prestations sont dues."},
  {"num": "1307", "code": "C. civ.", "theme": "Pluralité d'objets", "texte": "L'obligation est alternative lorsqu'elle a pour objet plusieurs prestations et que l'exécution de l'une d'elles libère le débiteur.", "chapitres": [19], "retenir": "Obligation alternative : l'exécution de l'une des prestations libère."},
  {"num": "1307-1", "code": "C. civ.", "theme": "Pluralité d'objets", "texte": "Le choix entre les prestations appartient au débiteur.\n\nSi le choix n'est pas exercé dans le temps convenu ou dans un délai raisonnable, l'autre partie peut, après mise en demeure, exercer ce choix ou résoudre le contrat.\n\nLe choix exercé est définitif et fait perdre à l'obligation son caractère alternatif.", "chapitres": [19], "retenir": "Choix du débiteur ; à défaut, choix ou résolution par l'autre partie après mise en demeure ; choix définitif."},
  {"num": "1307-2", "code": "C. civ.", "theme": "Pluralité d'objets", "texte": "Si elle procède d'un cas de force majeure, l'impossibilité d'exécuter la prestation choisie libère le débiteur.", "chapitres": [19], "retenir": "Impossibilité par force majeure de la prestation choisie : libération."},
  {"num": "1307-3", "code": "C. civ.", "theme": "Pluralité d'objets", "texte": "Le débiteur qui n'a pas fait connaître son choix doit, si l'une des prestations devient impossible, exécuter l'une des autres.", "chapitres": [19], "retenir": "Avant le choix du débiteur, impossibilité d'une prestation : exécuter une autre."},
  {"num": "1307-4", "code": "C. civ.", "theme": "Pluralité d'objets", "texte": "Le créancier qui n'a pas fait connaître son choix doit, si l'une des prestations devient impossible à exécuter par suite d'un cas de force majeure, se contenter de l'une des autres.", "chapitres": [19], "retenir": "Choix du créancier non exercé et impossibilité par force majeure : se contenter d'une autre prestation."},
  {"num": "1307-5", "code": "C. civ.", "theme": "Pluralité d'objets", "texte": "Lorsque les prestations deviennent impossibles, le débiteur n'est libéré que si l'impossibilité procède, pour chacune, d'un cas de force majeure.", "chapitres": [19], "retenir": "Toutes les prestations impossibles : libération seulement si chacune procède de la force majeure."},
  {"num": "1308", "code": "C. civ.", "theme": "Pluralité d'objets", "texte": "L'obligation est facultative lorsqu'elle a pour objet une certaine prestation mais que le débiteur a la faculté, pour se libérer, d'en fournir une autre.\n\nL'obligation facultative est éteinte si l'exécution de la prestation initialement convenue devient impossible pour cause de force majeure.", "chapitres": [19], "retenir": "Obligation facultative : une prestation due, faculté d'en fournir une autre ; extinction si la première devient impossible par force majeure."},
  {"num": "1309", "code": "C. civ.", "theme": "Pluralité de sujets", "texte": "L'obligation qui lie plusieurs créanciers ou débiteurs se divise de plein droit entre eux. La division a lieu également entre leurs successeurs, l'obligation fût-elle solidaire. Si elle n'est pas réglée autrement par la loi ou par le contrat, la division a lieu par parts égales.\n\nChacun des créanciers n'a droit qu'à sa part de la créance commune ; chacun des débiteurs n'est tenu que de sa part de la dette commune.\n\nIl n'en va autrement, dans les rapports entre les créanciers et les débiteurs, que si l'obligation est solidaire ou si la prestation due est indivisible.", "chapitres": [19], "retenir": "Division de plein droit, par parts égales, y compris entre successeurs, même si l'obligation est solidaire."},
  {"num": "1310", "code": "C. civ.", "theme": "Solidarité", "texte": "La solidarité est légale ou conventionnelle ; elle ne se présume pas.", "chapitres": [19], "retenir": "Légale ou conventionnelle ; ne se présume pas."},
  {"num": "1311", "code": "C. civ.", "theme": "Solidarité active", "texte": "La solidarité entre créanciers permet à chacun d'eux d'exiger et de recevoir le paiement de toute la créance. Le paiement fait à l'un d'eux, qui en doit compte aux autres, libère le débiteur à l'égard de tous.\n\nLe débiteur peut payer l'un ou l'autre des créanciers solidaires tant qu'il n'est pas poursuivi par l'un d'eux.", "chapitres": [19], "retenir": "Chaque créancier peut exiger tout ; le paiement à l'un libère envers tous."},
  {"num": "1312", "code": "C. civ.", "theme": "Solidarité active", "texte": "Tout acte qui interrompt ou suspend la prescription à l'égard de l'un des créanciers solidaires, profite aux autres créanciers.", "chapitres": [19], "retenir": "Interruption ou suspension de prescription au profit de tous les créanciers."},
  {"num": "1313", "code": "C. civ.", "theme": "Solidarité passive", "texte": "La solidarité entre les débiteurs oblige chacun d'eux à toute la dette. Le paiement fait par l'un d'eux les libère tous envers le créancier.\n\nLe créancier peut demander le paiement au débiteur solidaire de son choix. Les poursuites exercées contre l'un des débiteurs solidaires n'empêchent pas le créancier d'en exercer de pareilles contre les autres.", "chapitres": [19], "retenir": "Chaque débiteur doit tout ; le créancier choisit ; le paiement de l'un libère les autres."},
  {"num": "1314", "code": "C. civ.", "theme": "Solidarité passive", "texte": "La demande d'intérêts formée contre l'un des débiteurs solidaires fait courir les intérêts à l'égard de tous.", "chapitres": [19], "retenir": "La demande d'intérêts contre l'un fait courir les intérêts contre tous."},
  {"num": "1315", "code": "C. civ.", "theme": "Solidarité passive", "texte": "Le débiteur solidaire poursuivi par le créancier peut opposer les exceptions qui sont communes à tous les codébiteurs, telles que la nullité ou la résolution, et celles qui lui sont personnelles. Il ne peut opposer les exceptions qui sont personnelles à d'autres codébiteurs, telle que l'octroi d'un terme. Toutefois, lorsqu'une exception personnelle à un autre codébiteur éteint la part divise de celui-ci, notamment en cas de compensation ou de remise de dette, il peut s'en prévaloir pour la faire déduire du total de la dette.", "chapitres": [19], "retenir": "Exceptions communes et personnelles ; déduction de la part divise éteinte d'un autre codébiteur."},
  {"num": "1316", "code": "C. civ.", "theme": "Solidarité passive", "texte": "Le créancier qui reçoit paiement de l'un des codébiteurs solidaires et lui consent une remise de solidarité conserve sa créance contre les autres, déduction faite de la part du débiteur qu'il a déchargé.", "chapitres": [19], "retenir": "Remise de solidarité : créance maintenue contre les autres, déduction faite de la part du débiteur déchargé."},
  {"num": "1317", "code": "C. civ.", "theme": "Solidarité passive", "texte": "Entre eux, les codébiteurs solidaires ne contribuent à la dette que chacun pour sa part.\n\nCelui qui a payé au-delà de sa part dispose d'un recours contre les autres à proportion de leur propre part.\n\nSi l'un d'eux est insolvable, sa part se répartit, par contribution, entre les codébiteurs solvables, y compris celui qui a fait le paiement et celui qui a bénéficié d'une remise de solidarité.", "chapitres": [19], "retenir": "Contribution par parts ; recours à proportion ; insolvabilité répartie entre tous les solvables."},
  {"num": "1318", "code": "C. civ.", "theme": "Solidarité passive", "texte": "Si la dette procède d'une affaire qui ne concerne que l'un des codébiteurs solidaires, celui-ci est seul tenu de la dette à l'égard des autres. S'il l'a payée, il ne dispose d'aucun recours contre ses codébiteurs. Si ceux-ci l'ont payée, ils disposent d'un recours contre lui.", "chapitres": [19], "retenir": "Dette ne concernant qu'un codébiteur : lui seul la supporte."},
  {"num": "1319", "code": "C. civ.", "theme": "Solidarité passive", "texte": "Les codébiteurs solidaires répondent solidairement de l'inexécution de l'obligation. La charge en incombe à titre définitif à ceux auxquels l'inexécution est imputable.", "chapitres": [19], "retenir": "Réponse solidaire de l'inexécution ; charge finale sur ceux à qui elle est imputable."},
  {"num": "1320", "code": "C. civ.", "theme": "Indivisibilité", "texte": "Chacun des créanciers d'une obligation à prestation indivisible, par nature ou par contrat, peut en exiger et en recevoir le paiement intégral, sauf à rendre compte aux autres ; mais il ne peut seul disposer de la créance ni recevoir le prix au lieu de la chose.\n\nChacun des débiteurs d'une telle obligation en est tenu pour le tout ; mais il a ses recours en contribution contre les autres.\n\nIl en va de même pour chacun des successeurs de ces créanciers et débiteurs.", "chapitres": [19], "retenir": "Prestation indivisible : chacun exige ou doit le tout, y compris les successeurs ; recours en contribution."},
  {"num": "1347-6", "code": "C. civ.", "theme": "Solidarité passive", "texte": "La caution peut opposer la compensation de ce que le créancier doit au débiteur principal.\n\nLe codébiteur solidaire peut se prévaloir de la compensation de ce que le créancier doit à l'un de ses coobligés pour faire déduire la part divise de celui-ci du total de la dette.", "chapitres": [19], "retenir": "Le codébiteur peut opposer la compensation d'un coobligé pour déduire sa part divise."},
  {"num": "1350-1", "code": "C. civ.", "theme": "Solidarité", "texte": "La remise de dette consentie à l'un des codébiteurs solidaires libère les autres à concurrence de sa part.\n\nLa remise de dette faite par l'un seulement des créanciers solidaires ne libère le débiteur que pour la part de ce créancier.", "chapitres": [19], "retenir": "Remise à un codébiteur : libère les autres pour sa part ; remise par un créancier solidaire : pour sa part."},
  {"num": "1385-4", "code": "C. civ.", "theme": "Solidarité", "texte": "Le serment ne fait preuve qu'au profit de celui qui l'a déféré et de ses héritiers et ayants cause, ou contre eux.\n\nLe serment déféré par l'un des créanciers solidaires au débiteur ne libère celui-ci que pour la part de ce créancier.\n\nLe serment déféré au débiteur principal libère également les cautions.\n\nCelui déféré à l'un des débiteurs solidaires profite aux codébiteurs.\n\nCelui déféré à la caution profite au débiteur principal.\n\nDans ces deux derniers cas, le serment du codébiteur solidaire ou de la caution ne profite aux autres codébiteurs ou au débiteur principal que lorsqu'il a été déféré sur la dette, et non sur le fait de la solidarité ou du cautionnement.", "chapitres": [19], "retenir": "Effets du serment décisoire entre créanciers ou débiteurs solidaires."},
  {"num": "1887", "code": "C. civ.", "theme": "Solidarité légale", "texte": "Si plusieurs ont conjointement emprunté la même chose, ils en sont solidairement responsables envers le prêteur.", "chapitres": [19], "retenir": "Coemprunteurs d'une même chose solidairement responsables."},
  {"num": "2245", "code": "C. civ.", "theme": "Solidarité passive", "texte": "L'interpellation faite à l'un des débiteurs solidaires par une demande en justice ou par un acte d'exécution forcée ou la reconnaissance par le débiteur du droit de celui contre lequel il prescrivait interrompt le délai de prescription contre tous les autres, même contre leurs héritiers.\n\nEn revanche, l'interpellation faite à l'un des héritiers d'un débiteur solidaire ou la reconnaissance de cet héritier n'interrompt pas le délai de prescription à l'égard des autres cohéritiers, même en cas de créance hypothécaire, si l'obligation est divisible. Cette interpellation ou cette reconnaissance n'interrompt le délai de prescription, à l'égard des autres codébiteurs, que pour la part dont cet héritier est tenu.\n\nPour interrompre le délai de prescription pour le tout, à l'égard des autres codébiteurs, il faut l'interpellation faite à tous les héritiers du débiteur décédé ou la reconnaissance de tous ces héritiers.", "chapitres": [19], "retenir": "L'interruption de la prescription contre un débiteur solidaire vaut contre tous."}
);
