/* Chapitre 4 — La protection du consentement contractuel
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 4,
  intro: "Le consentement est la première condition de validité du contrat ([[1128]]). Il doit d'abord **exister** (être sain d'esprit : [[1129]]), puis être **libre et éclairé**. Le Code civil le protège de deux façons : **curative**, par la théorie des vices du consentement (erreur, dol, violence : art. 1130 à 1144), et **préventive**, par l'obligation précontractuelle d'information ([[1112-1]]) et les techniques du droit de la consommation.",
  sections: [
    {
      titre: "Le tronc commun des vices du consentement",
      contenu: [
        { schema: { type: "arbre", titre: "Les trois vices ([[1130]] à [[1144]])", racine: { t: "Vices du consentement", d: "nullité relative ([[1131]])", enfants: [
          { t: "Erreur", d: "consentement non éclairé : fausse représentation spontanée", enfants: [
            { t: "Qualités essentielles de la prestation", d: "[[1132]], [[1133]]" },
            { t: "Qualités essentielles du cocontractant", d: "contrats *intuitu personae* ([[1134]])" }
          ] },
          { t: "Dol", d: "erreur provoquée par la malhonnêteté du cocontractant ([[1137]])" },
          { t: "Violence", d: "consentement non libre : contrainte ([[1140]]), y compris abus de dépendance ([[1143]])" }
        ] } } },
        { p: "Condition commune : le vice doit être **déterminant** : sans lui, la partie n'aurait pas contracté ou aurait contracté à des conditions **substantiellement différentes** ([[1130]], al. 1er). Ce caractère s'apprécie **in concreto**, « eu égard aux personnes et aux circonstances » (al. 2)." },
        { p: "Sanction commune : **nullité relative** ([[1131]]), que seule la victime peut invoquer. Le délai de prescription (cinq ans, [[2224]]) ne court qu'à compter de la **découverte** de l'erreur ou du dol, ou de la **cessation** de la violence ([[1144]])." },
        { p: "**Existence du consentement** : l'exigence de sain d'esprit ([[1129]], renvoyant à l'art. 414-1) s'applique même si le contractant est placé sous **curatelle** (Civ. 1re, 15 janv. 2020, n° 18-26.683). Le droit français reste attaché à la **volonté interne** : l'accord n'a pleine valeur que si son expression correspond à ce que son auteur s'est réellement représenté." },
        { p: "**Origine des ambiguïtés** : le droit romain classique ignorait les vices du consentement ; le préteur a puni le dol et la violence comme des **délits**, mais non l'erreur. L'Ancien droit a protégé la volonté (l'erreur est alors prise en compte), et le Code civil a fait la synthèse. D'où la double nature du dol et de la violence : **vice de la volonté** (nullité) et **faute** (responsabilité). La difficulté est aussi de politique juridique : protéger le consentement sans sacrifier la sécurité juridique, donc n'annuler que dans les cas graves." }
      ]
    },
    {
      titre: "L'erreur",
      contenu: [
        { def: { terme: "Erreur", texte: "fausse représentation de la réalité : l'*errans* croit vrai ce qui est faux. Erreur de fait ou de droit sont traitées de la même façon ([[1132]])." } },
        { h: "1. Les erreurs qui entraînent la nullité" },
        { p: "**Sur les qualités essentielles de la prestation** ([[1132]]). L'ancien article 1110 parlait de « substance » de la chose. La jurisprudence est passée d'une conception **objective** (la matière : les chandeliers de Pothier, argentés au lieu d'être en argent) à une conception **subjective** : les qualités en considération desquelles on a contracté. C'est celle de [[1133]] : les qualités « expressément ou tacitement convenues et en considération desquelles les parties ont contracté » (authenticité d'une œuvre, constructibilité d'un terrain, millésime d'un véhicule)." },
        { p: "Applications : pour une cession de titres de société, la qualité essentielle est la possibilité de **réaliser l'objet social** et d'avoir une activité économique (société vidée de son actif à l'insu de l'acheteur : Com., 1er oct. 1991 ; 17 oct. 1995) ; l'**éligibilité à un dispositif de défiscalisation** peut être une qualité substantielle convenue (Com., 22 juin 2022, n° 20-11.846) ; pour une œuvre d'art, l'authenticité est le plus souvent la qualité essentielle (Civ. 1re, 4 déc. 2024, n° 23-17.569), mais aussi la période historique (Civ. 1re, 27 févr. 2007). À l'inverse, l'importance des restaurations d'une table « Boulle » n'a pas été jugée essentielle (Civ. 1re, 20 oct. 2011)." },
        { p: "**Appréciation** : en théorie, deux méthodes. *In abstracto* : qualité tenue pour essentielle par l'opinion commune (l'authenticité d'un tableau, non l'emplacement d'origine). *In concreto* : qualité effectivement recherchée par l'*errans*. Le droit positif, et l'art. [[1133]] (qualités « convenues »), penchent pour l'*in concreto*, avec le risque d'insécurité et un problème de **preuve**, qui pèse sur l'*errans*." },
        { p: "**Sur sa propre prestation** : le vendeur peut invoquer une erreur sur la chose qu'il vend ([[1133]], al. 2)." },
        { arret: { ref: "Affaire du Poussin : Civ. 1re, 22 févr. 1978, puis Civ. 1re, 13 déc. 1983", apport: "Les vendeurs d'un tableau présenté comme de « l'école des Carrache », attribué ensuite à Poussin, obtiennent la nullité pour erreur sur leur propre prestation. L'erreur s'apprécie au jour du contrat, mais peut être prouvée par des éléments postérieurs." } },
        { p: "**Sur les qualités essentielles du cocontractant**, seulement dans les contrats conclus **en considération de la personne** ([[1134]]) : identité civile ou physique, qualifications professionnelles, honorabilité, aptitude nécessaire à l'exécution. Les applications sont rares (contrat de travail : Soc., 3 juill. 1990 ; cautionnement : Com., 19 nov. 2003). Hors contrat *intuitu personae*, l'erreur sur la personne est indifférente." },
        { h: "2. Les erreurs indifférentes" },
        { schema: { type: "tableau", titre: "Erreurs qui ne permettent pas d'annuler le contrat", colonnes: ["Erreur", "Principe", "Exception"], lignes: [
          ["Sur un simple **motif** ([[1135]])", "Indifférente (ex. j'achète un appartement parce que je crois être muté)", "Si les parties en ont **expressément** fait un élément déterminant (le motif doit être entré dans le champ contractuel : Civ. 1re, 13 févr. 2001 ; Civ. 3e, 14 déc. 2017, n° 16-24.096) ; toujours prise en compte pour les **libéralités** (al. 2)"],
          ["Sur la **valeur** ([[1136]])", "Indifférente : simple appréciation économique inexacte", "Si elle découle d'une erreur sur une qualité essentielle, ou d'un dol ([[1139]])"],
          ["**Inexcusable** ([[1132]])", "Pas de nullité : « de non vigilantibus non curat praetor »", "Faute caractérisée, appréciée in concreto : plus sévèrement pour un professionnel dans sa spécialité ou pour l'erreur sur sa propre prestation"],
          ["Sur une qualité **aléatoire** ([[1133]], al. 3)", "« L'aléa chasse l'erreur » : tableau vendu « attribué à »", "—"]
        ] } },
        { arret: { ref: "Affaire du verrou de Fragonard : Civ. 1re, 24 mars 1987", apport: "Les parties avaient accepté un aléa sur l'authenticité du tableau (« attribué à Fragonard ») : le vendeur ne peut invoquer l'erreur quand l'œuvre se révèle authentique. Le décret du 3 mars 1981 précise le sens d'expressions comme « attribué à », « atelier de » ou « école de » pour éviter que le profane ne s'y trompe." } },
        { h: "3. La preuve" },
        { p: "Si la qualité est essentielle **pour tout le monde** (authenticité d'une œuvre), le juge présume qu'elle l'était pour l'*errans*. Si elle n'est essentielle que **pour lui**, il doit prouver qu'elle est **entrée dans le champ contractuel** : l'autre partie savait qu'elle était déterminante (ex. la solvabilité du débiteur pour une caution : Com., 2 mars 1982). Avant 2016, la jurisprudence exigeait une **stipulation expresse** faisant de la qualité une condition du contrat (Civ. 3e, 24 avr. 2003), solution que [[1133]] reprend (qualité « convenue »). Exemple d'échec de la preuve : l'acheteur d'une table qui n'établit pas qu'il l'a achetée pour son plateau plutôt que pour la signature de l'ébéniste (Civ. 1re, 21 oct. 2020, n° 19-15.415)." },
        { h: "4. Le caractère déterminant et le caractère excusable" },
        { p: "Le caractère déterminant ([[1130]]) s'apprécie *in concreto*, **au jour du consentement** ; des éléments postérieurs peuvent servir de preuve (affaire du Poussin ; Civ. 3e, 23 mai 2007, avis d'experts postérieurs). En droit de la consommation, la 1re chambre civile juge que le manquement du professionnel à l'obligation d'information de l'art. L. 111-1 du Code de la consommation, sur des éléments essentiels, vicie nécessairement le consentement et entraîne l'annulation dans les conditions des art. 1130 s. (Civ. 1re, 20 déc. 2023, n° 22-18.928) ; solution écartée dans l'affaire du « Dieselgate » (Civ. 1re, 24 sept. 2025, n° 23-23.869)." },
        { p: "L'erreur n'est excusable que si l'*errans* n'a pas commis une **faute caractérisée**, appréciée *in concreto* (Com., 13 févr. 2012 ; Civ. 1re, 4 déc. 2024). La jurisprudence était constante avant que [[1132]] ne l'écrive en 2016." },
        { h: "5. Articulations : erreur obstacle et vice caché" },
        { attention: "L'**erreur obstacle** (malentendu si grave qu'il empêche toute rencontre des volontés, par exemple sur la nature du contrat ou sur son objet) n'est pas mentionnée par la réforme, qui ne consacre à l'existence du consentement que l'insanité d'esprit ([[1129]]). Une partie de la doctrine y voit une **absence de consentement** (nullité absolue, voire inexistence). La jurisprudence ne lui reconnaît pas d'autonomie nette : elle la traite plutôt comme un vice du consentement (nullité relative : Civ. 3e, 26 juin 2013), parfois par l'absence de cause avant 2016. Et lorsque l'erreur porte sur un défaut constitutif d'un **vice caché**, la garantie des vices cachés est l'unique fondement : l'action en nullité pour erreur sur les qualités essentielles est exclue (Civ. 1re, 14 mai 1996), mais pas l'action pour dol (Civ. 3e, 29 nov. 2000 ; Civ. 3e, 23 sept. 2020, n° 19-18.104)." },
        { p: "L'erreur n'est pas une faute : elle entraîne rarement des dommages et intérêts, sauf faute de l'autre partie ([[1240]])." }
      ]
    },
    {
      titre: "Le dol",
      contenu: [
        { def: { terme: "Dol", texte: "fait pour un contractant d'obtenir le consentement de l'autre par des **manœuvres**, des **mensonges** ou la **dissimulation intentionnelle** d'une information dont il sait le caractère déterminant pour l'autre ([[1137]])." } },
        { h: "1. L'élément matériel" },
        { schema: { type: "arbre", titre: "Trois formes de dol ([[1137]])", racine: { t: "Élément matériel", enfants: [
          { t: "Manœuvres", d: "acte positif, mise en scène, artifices (proche de l'escroquerie ; ex. Civ. 3e, 26 oct. 2022, n° 21-19.900)" },
          { t: "Mensonge", d: "un simple mensonge, sans acte extérieur, suffit (Civ. 3e, 6 nov. 1970)" },
          { t: "Réticence dolosive", d: "silence intentionnel sur une information que l'on sait déterminante ([[1137]], al. 2)" }
        ] } } },
        { p: "Le « bon dol » (*dolus bonus*, simple exagération commerciale) reste toléré, mais les juges l'admettent de moins en moins de la part d'un professionnel (Civ. 3e, 12 oct. 2017, n° 16-23.362 : mensonge dépassant la nécessité de flatter le produit). Pour le **mensonge**, la dissimulation d'une information suffit sans qu'il faille prouver son caractère déterminant pour l'autre partie, contrairement à la réticence (Civ. 3e, 15 juin 2022, n° 21-13.286)." },
        { p: "**Réticence dolosive** : le silence n'était pas jugé dolosif à l'origine (ni manœuvre, ni cause de l'erreur) ; la jurisprudence l'a admis progressivement (Civ. 1re, 19 mai 1958 ; Civ. 3e, 15 janv. 1971), et [[1137]], al. 2, la consacre. Elle altère la notion classique : le contractant n'a pas **provoqué** l'erreur, il l'a **exploitée**. Elle est aujourd'hui la forme de dol la plus fréquente, car elle sanctionne l'inexécution intentionnelle de l'obligation d'information. Lors de la loi de ratification de 2018, le Sénat avait proposé de lier expressément réticence dolosive et [[1112-1]] ; l'Assemblée a refusé, de peur de restreindre trop le dol." },
        { attention: "**Pas de dol sur la valeur** : l'acheteur n'a pas à révéler au vendeur son estimation de la valeur du bien ([[1137]], al. 3, ajouté en 2018, consacrant l'arrêt **Baldus**, Civ. 1re, 3 mai 2000 : l'acheteur de photographies qui en connaissait la valeur réelle n'a pas commis de dol). Même règle pour l'obligation d'information ([[1112-1]], al. 2). Le dol reste possible si des **circonstances particulières** s'ajoutent au silence (ex. dirigeant qui rachète les parts de sa société : Com., 27 févr. 1996), ou si l'ignorance du vendeur sur la valeur vient d'une **erreur sur une qualité substantielle** ; et l'information non révélée doit être déterminante, l'auteur la connaissant ([[1137]], al. 2)." },
        { h: "2. L'élément intentionnel" },
        { p: "Le dol suppose la **volonté de tromper**. Le texte ne l'exige expressément que pour la réticence, mais le rapport au Président de la République le suppose pour toutes les formes. Sans intention, un simple défaut d'information n'ouvre droit qu'à des **dommages et intérêts**. Cette exigence remet en cause des arrêts antérieurs qui déduisaient le dol du seul manquement d'un professionnel à son devoir d'information, voire renversaient la charge de la preuve de l'intention (Civ. 1re, 15 mai 2002) : leur pérennité est incertaine. L'intention se prouve aisément pour des manœuvres ou un mensonge, plus difficilement pour une pure abstention." },
        { h: "3. Les caractères du dol" },
        { liste: [
          "**Déterminant** ([[1130]]) : le dol **principal** entraîne la nullité ; le dol **incident** (sans influence sur la volonté : la victime aurait contracté de toute façon, à des conditions voisines) n'ouvre droit qu'à des dommages et intérêts sur le fondement de [[1240]]. Une partie de la doctrine conteste la distinction, mais la malhonnêteté peut constituer une faute indépendamment de son effet sur la volonté, à condition d'établir un préjudice. Depuis 2016, [[1130]] vise aussi le cas où la victime « aurait contracté à des conditions substantiellement différentes », ce qui brouille la frontière.",
          "**Provoquant une erreur** : il faut une erreur provoquée ; de simples pressions sans fausse représentation ne sont pas un dol (Civ. 1re, 10 juill. 1995 ; Civ. 1re, 9 mars 2022, n° 20-18.532). La jurisprudence refuse d'en faire une sanction générale de la déloyauté précontractuelle ; le lien avec l'erreur est réaffirmé par [[1139]].",
          "**Toute erreur compte** : l'erreur provoquée par un dol est **toujours excusable** et entraîne la nullité même si elle porte sur la **valeur** ou sur un **simple motif** ([[1139]] ; Com., 18 sept. 2024, n° 23-10.183).",
          "**Émanant du cocontractant** : en principe pas le dol d'un tiers. Exceptions ([[1138]]) : représentant (qui a agi dans le cadre de son mandat), gérant d'affaires, préposé ou porte-fort du contractant ; tiers de connivence. Le dol d'un tiers étranger n'est sanctionné que par sa responsabilité délictuelle, la victime pouvant en plus invoquer l'erreur (Civ. 1re, 3 juill. 1996). Il est aussi pris en compte pour les actes unilatéraux et les donations."
        ] },
        { h: "4. La double sanction" },
        { schema: { type: "tableau", titre: "Ce que peut demander la victime d'un dol", colonnes: ["Action", "Fondement", "Ce qu'elle obtient"], lignes: [
          ["Nullité relative", "Vice du consentement ([[1131]])", "Anéantissement du contrat et restitutions"],
          ["Dommages et intérêts", "Faute délictuelle ([[1240]])", "Réparation, en principe de la **perte de chance** de ne pas contracter ou de contracter à de meilleures conditions (Civ. 1re, 25 mars 2010 ; Com., 10 juill. 2012 ; Com., 5 juin 2019, n° 16-10.391)"],
          ["Cumul ou choix", "Double nature du dol (Ch. mixte, 29 oct. 2021)", "Les deux actions sont indépendantes : la victime peut garder le contrat et demander seulement des dommages et intérêts, pour rééquilibrer le contrat"]
        ] } },
        { arret: { ref: "Ch. mixte, 29 oct. 2021, n° 19-18.470", apport: "Le dol du **mandataire** permet d'annuler le contrat, mais n'engage la **responsabilité** du mandant que s'il a personnellement commis une faute, prouvée par la victime." } }
      ]
    },
    {
      titre: "La violence",
      contenu: [
        { def: { terme: "Violence", texte: "contrainte qui inspire à une partie la crainte d'exposer sa personne, sa fortune ou celles de ses **proches** à un **mal considérable** ([[1140]])." } },
        { schema: { type: "tableau", titre: "Trois formes de violence", colonnes: ["Forme", "Exemple", "Texte"], lignes: [
          ["Physique", "Coups, séquestration", "[[1140]]"],
          ["Morale", "Chantage, menaces, emprise d'une secte (Civ. 3e, 13 janv. 1999), harcèlement moral (Soc., 30 janv. 2013)", "[[1140]]"],
          ["Abus de dépendance", "Partenaire économiquement dépendant qui accepte un engagement très défavorable", "[[1143]]"]
        ] } },
        { h: "Les caractères" },
        { liste: [
          "**Illégitime** : la menace d'une voie de droit n'est pas une violence, sauf si elle est **détournée de son but** ou utilisée pour obtenir un **avantage manifestement excessif** ([[1141]]). Il en va de même de la grève licite, sauf abus (séquestration, voie de fait), et, le plus souvent, de la simple domination économique objective.",
          "**Déterminante**, appréciée in concreto : âge, état physique ou psychologique de la victime ([[1130]], al. 2).",
          "**Quel qu'en soit l'auteur** : à la différence du dol, la violence d'un **tiers** entraîne aussi la nullité ([[1142]])."
        ] },
        { h: "L'abus de dépendance" },
        { schema: { type: "etapes", titre: "Les trois conditions de l'article 1143", etapes: [
          { t: "État de dépendance « à son égard »", d: "la dépendance doit résulter de la relation avec le cocontractant (précision de la loi de 2018, interprétative), pas seulement de la faiblesse personnelle de la victime" },
          { t: "Abus", d: "exploitation de cette dépendance ; pas d'abus si la victime pouvait refuser (Com., 10 juill. 2024, n° 22-21.947)" },
          { t: "Engagement + avantage manifestement excessif", d: "engagement qui n'aurait pas été souscrit sans la contrainte ; avantage apprécié aussi au regard de ce que l'autre partie a obtenu (Civ. 1re, 29 janv. 2025, n° 23-21.150)" }
        ] } },
        { p: "Avant la réforme, la jurisprudence l'admettait déjà sous le nom de **violence économique** (Civ. 1re, 30 mai 2000 ; Civ. 1re, 3 avr. 2002 : exploitation abusive d'une situation de dépendance économique pour tirer profit de la crainte d'un mal menaçant directement les intérêts légitimes de la personne ; Civ. 2e, 9 déc. 2021, n° 20-10.096 : avocat économiquement dépendant ayant accepté une convention d'honoraires défavorable)." },
        { p: "**Discussions** : sur la dépendance, avant la loi de 2018, les juges du fond retenaient parfois une **vulnérabilité intrinsèque** (âge, faiblesse), que la loi écarte au profit d'une dépendance née de la relation avec le cocontractant. Sur l'abus, certains y voient une condition autonome indispensable, d'autres la jugent absorbée par la preuve de la dépendance. L'avantage manifestement excessif, réintroduit après les critiques du projet de 2015, rend l'article « mâtiné de lésion »." }
      ]
    },
    {
      titre: "La protection préventive",
      contenu: [
        { h: "1. L'obligation précontractuelle d'information ([[1112-1]])" },
        { p: "« Celui qui sait doit informer celui qui ne sait pas », en rupture avec l'adage *emptor debet esse curiosus*. Consacrée par la réforme parmi les règles de la négociation." },
        { schema: { type: "tableau", titre: "L'article 1112-1 alinéa par alinéa", colonnes: ["Alinéa", "Règle"], lignes: [
          ["1", "Une partie qui **connaît** une information déterminante pour l'autre doit la lui donner si l'autre l'**ignore légitimement** ou **fait confiance** à son cocontractant"],
          ["2", "Pas d'obligation sur l'**estimation de la valeur** de la prestation"],
          ["3", "Information déterminante = **lien direct et nécessaire** avec le contenu du contrat ou la qualité des parties (conditions cumulatives : Com., 14 mai 2025, n° 23-17.948)"],
          ["4", "Preuve : le créancier prouve que l'information lui était due ; le débiteur prouve qu'il l'a donnée (déjà Civ. 1re, 25 févr. 1997)"],
          ["5", "**D'ordre public** : ni limitation ni exclusion"],
          ["6", "Sanctions : **responsabilité** de celui qui en était tenu ; **nullité** si les conditions d'un vice (dol) sont réunies"]
        ] } },
        { attention: "Le texte vise l'information que le débiteur **connaît**, et non plus celle qu'il **devait connaître** (formule du projet de 2015, abandonnée). Le devoir de se renseigner du professionnel est donc discuté." },
        { p: "Au-delà : **devoir de conseil** (aider le client à orienter sa décision ; professions libérales, ex. l'avocat) et **devoir de mise en garde** (attirer l'attention du profane sur les risques, voire le dissuader), du banquier envers l'emprunteur **non averti** (Ch. mixte, 29 juin 2007 ; préjudice : perte de chance de ne pas contracter, Com., 26 janv. 2010), du créancier professionnel envers la caution personne physique (art. 2299, issu de l'ordonnance du 15 sept. 2021). Fondement général : la bonne foi ([[1104]])." },
        { p: "Les textes spéciaux restent applicables (C. consom., art. L. 111-1 : caractéristiques essentielles, prix, délai, identité du contractant, garanties légales ; crédit, assurance), mais n'écartent pas [[1112-1]] pour une information qu'ils ne couvrent pas (Civ. 1re, 25 sept. 2024, n° 23-10.560). L'obligation existe aussi entre consommateurs ou entre professionnels, et pas seulement du professionnel au consommateur. Le **créancier** de l'information est celui qui ne peut la connaître, par technicité ou par confiance : l'obligation de se renseigner n'a pas disparu, mais elle est marginalisée." },
        { h: "2. Les techniques du droit de la consommation" },
        { liste: [
          "**Formalisme informatif** : clauses ou mentions impératives de l'offre ou du contrat. Son respect interdit en principe d'invoquer un vice du consentement, mais la responsabilité pour manquement au devoir de conseil ou de mise en garde reste possible (Ch. mixte, 29 juin 2007). Revirement : pour un contrat hors établissement, la simple reproduction des articles du Code de la consommation ne permet pas au consommateur de connaître le vice qui l'affecte (Civ. 1re, 24 janv. 2024, n° 22-16.115).",
          "**Droit de rétractation** : 14 jours pour les contrats conclus à distance ou hors établissement (C. consom., art. L. 221-18) ; 10 jours pour l'acquéreur non professionnel d'un immeuble d'habitation (CCH, art. L. 271-1). Le Code civil se borne à le définir ([[1122]]). Le professionnel doit informer le consommateur de ce droit et lui remettre un formulaire type (C. consom., art. L. 221-5) ; seuls les frais directs de renvoi peuvent rester à la charge du consommateur (art. L. 221-23). Le CCH, art. L. 271-1, joue pour un acte sous seing privé. Explication doctrinale : formation progressive du contrat, proche de la théorie de la *punctation*."
        ] }
      ]
    }
  ],
  retenir: [
    "Vices : erreur, dol, violence, déterminants ([[1130]]), sanctionnés par la nullité relative ([[1131]]) ; prescription de cinq ans à compter de la découverte ou de la cessation ([[1144]]).",
    "Erreur : qualités essentielles convenues ([[1132]], [[1133]]), de la prestation ou du cocontractant (*intuitu personae*, [[1134]]) ; indifférente sur le motif ([[1135]]), la valeur ([[1136]]), si inexcusable ou si l'aléa a été accepté.",
    "Dol : manœuvres, mensonge, réticence intentionnelle ([[1137]]) ; toute erreur provoquée compte ([[1139]]) ; en principe du cocontractant ([[1138]]) ; nullité et/ou dommages et intérêts ; pas de dol sur l'estimation de la valeur (Baldus, [[1137]], al. 3).",
    "Violence : illégitime ([[1141]]), déterminante, même d'un tiers ([[1142]]) ; abus de dépendance à l'égard du cocontractant + avantage manifestement excessif ([[1143]]).",
    "Obligation d'information : [[1112-1]] (connaissance, ignorance légitime, lien direct et nécessaire, preuve répartie, ordre public)."
  ],
  articles: ["1112-1", "1122", "1128", "1129", "1130", "1131", "1132", "1133", "1134", "1135", "1136", "1137", "1138", "1139", "1140", "1141", "1142", "1143", "1144", "1240", "1641", "2224"],
  regimes: ["erreur", "dol", "violence-dependance"],
  cas: ["ch4-brocante"],
  quiz: [
    { q: "Quel est le point de départ du délai de l'action en nullité pour dol ?", choix: ["La conclusion du contrat", "La découverte du dol", "La mise en demeure"], bonne: 1, expl: "[[1144]] ; délai de cinq ans ([[2224]])." },
    { q: "Un acheteur paie un prix très élevé pour un vase en croyant faire un bon placement ; la cote s'effondre. Erreur ?", choix: ["Oui, sur les qualités essentielles", "Non : erreur sur la valeur, indifférente", "Oui, sur la personne"], bonne: 1, expl: "[[1136]] : appréciation économique inexacte, sans erreur sur une qualité du vase." },
    { q: "Paul achète un appartement parce qu'il croit être muté à Lyon ; il ne l'est pas. Nullité ?", choix: ["Oui, pour erreur", "Non, erreur sur un simple motif, sauf si les parties en ont expressément fait un élément déterminant", "Oui, pour dol du vendeur"], bonne: 1, expl: "[[1135]], al. 1er." },
    { q: "Un antiquaire achète à un particulier, pour 50 €, un tableau qu'il sait valoir 20 000 €, sans rien dire. Dol ?", choix: ["Oui, réticence dolosive", "Non : on n'est pas tenu de révéler son estimation de la valeur", "Oui, car il est professionnel"], bonne: 1, expl: "[[1137]], al. 3 et arrêt Baldus (Civ. 1re, 3 mai 2000). Mais si le vendeur se trompait sur une qualité essentielle (auteur du tableau), il pourrait invoquer l'erreur." },
    { q: "Un vendeur de voitures ment sur le kilométrage, mais l'acheteur aurait de toute façon acheté, un peu moins cher. Que peut-il obtenir ?", choix: ["Toujours la nullité", "Selon la conception classique, seulement des dommages et intérêts (dol incident)", "Rien"], bonne: 1, expl: "Dol incident → dommages et intérêts ([[1240]]). Mais [[1130]] vise aussi les « conditions substantiellement différentes » : discutez-le sur une copie." },
    { q: "L'erreur provoquée par un dol :", choix: ["Doit être excusable", "Est toujours excusable, même sur la valeur ou un motif", "N'est prise en compte que si elle porte sur une qualité essentielle"], bonne: 1, expl: "[[1139]]." },
    { q: "Le dol d'un tiers sans lien avec le cocontractant :", choix: ["Entraîne la nullité", "N'entraîne pas la nullité pour dol, mais la victime peut agir contre le tiers en responsabilité, voire invoquer l'erreur", "Est assimilé à la violence"], bonne: 1, expl: "[[1138]] ne vise que le représentant, gérant d'affaires, préposé, porte-fort ou tiers de connivence." },
    { q: "La violence exercée par un tiers :", choix: ["N'entraîne pas la nullité", "Entraîne la nullité", "N'entraîne que des dommages et intérêts"], bonne: 1, expl: "[[1142]] : différence majeure avec le dol." },
    { q: "Un créancier menace son débiteur d'une saisie s'il ne signe pas une reconnaissance de dette du montant exact de la dette. Violence ?", choix: ["Oui", "Non : menace d'une voie de droit, sans détournement ni avantage excessif", "Oui, si le débiteur a eu peur"], bonne: 1, expl: "[[1141]]." },
    { q: "Depuis la loi de 2018, l'état de dépendance de l'article 1143 doit exister :", choix: ["Envers n'importe qui (âge, maladie…)", "À l'égard du cocontractant", "Seulement dans les contrats de consommation"], bonne: 1, expl: "« dans lequel se trouve son cocontractant **à son égard** » : précision interprétative, applicable dès le 1er octobre 2016." },
    { q: "Qui doit prouver que l'information précontractuelle a été donnée ?", choix: ["Celui qui la réclame", "Celui qui en était débiteur, une fois établi qu'elle était due", "Le juge"], bonne: 1, expl: "[[1112-1]], al. 4." }
  ]
});

OBL.regimes.push(
  {
    id: "erreur",
    chapitre: "Validité du contrat",
    titre: "Nullité pour erreur",
    fondement: ["1132", "1133", "1134", "1130", "1131"],
    resume: "Obtenir l'annulation d'un contrat conclu sur une fausse représentation spontanée de la réalité.",
    conditions: [
      { nom: "Une erreur sur une qualité essentielle", question: "L'erreur porte-t-elle sur une qualité essentielle de la prestation (ou du cocontractant dans un contrat intuitu personae) ?", detail: "Qualités expressément ou tacitement convenues, en considération desquelles on a contracté ([[1133]]). Peut porter sur sa propre prestation. Sur la personne : seulement si le contrat est conclu en considération de la personne ([[1134]]).", preuve: "L'errans prouve son erreur et, si la qualité n'est pas objectivement essentielle, qu'elle était entrée dans le champ contractuel.", piege: "Erreur sur la valeur ([[1136]]) ou sur un motif ([[1135]]) : pas de nullité (sauf dol)." },
      { nom: "Une erreur déterminante", question: "Sans cette erreur, la victime aurait-elle refusé de contracter ou contracté à des conditions substantiellement différentes ?", detail: "Appréciation in concreto ([[1130]]).", preuve: "Éléments postérieurs admis pour prouver l'erreur au jour du contrat (affaire du Poussin)." },
      { nom: "Une erreur excusable", question: "L'erreur est-elle excusable, compte tenu de la qualité et des compétences de l'errans ?", detail: "Erreur inexcusable = pas de nullité ([[1132]]). Sévérité accrue pour un professionnel dans sa spécialité.", piege: "Ne pas oublier cette condition : c'est un point de correction fréquent." }
    ],
    exonerations: [
      { nom: "L'acceptation d'un aléa", question: "Les parties avaient-elles accepté un aléa sur cette qualité (ex. « attribué à ») ?", detail: "[[1133]], al. 3 ; affaire du verrou de Fragonard.", effet: "L'erreur est exclue : pas de nullité." },
      { nom: "L'existence d'un vice caché", question: "Le défaut relève-t-il de la garantie des vices cachés ([[1641]]) ?", detail: "Selon la jurisprudence, la garantie des vices cachés est l'unique fondement possible ; l'action pour erreur est exclue (Civ. 1re, 14 mai 1996).", effet: "Action en garantie (délai de deux ans à compter de la découverte), pas en nullité pour erreur." },
      { nom: "La prescription", question: "Plus de cinq ans se sont-ils écoulés depuis la découverte de l'erreur ?", detail: "[[1144]] et [[2224]].", effet: "Action prescrite." }
    ],
    copie: [
      "Toujours vérifier d'abord la piste du dol : elle est plus favorable (toute erreur compte, dommages et intérêts)."
    ]
  },
  {
    id: "dol",
    chapitre: "Validité du contrat",
    titre: "Nullité pour dol",
    fondement: ["1137", "1138", "1139", "1130", "1131"],
    resume: "Obtenir l'annulation du contrat, et le cas échéant des dommages et intérêts, lorsqu'une partie a été trompée par l'autre.",
    conditions: [
      { nom: "Un élément matériel", question: "Y a-t-il eu manœuvres, mensonge ou dissimulation d'une information ?", detail: "[[1137]], al. 1er et 2. Un simple mensonge suffit. La réticence porte sur une information que l'auteur sait déterminante pour l'autre.", piege: "Le silence de l'acheteur sur son estimation de la valeur n'est pas un dol ([[1137]], al. 3)." },
      { nom: "Un élément intentionnel", question: "L'auteur voulait-il tromper ?", detail: "Exigé expressément pour la réticence ; sans intention, simple manquement au devoir d'information → dommages et intérêts ([[1112-1]]).", preuve: "À la charge de la victime ; se déduit souvent des manœuvres ou du mensonge." },
      { nom: "Un dol déterminant", question: "Sans le dol, la victime aurait-elle refusé de contracter ou contracté à des conditions substantiellement différentes ?", detail: "[[1130]]. Dol incident → dommages et intérêts selon la conception classique.", piege: "Toute erreur provoquée est prise en compte, même sur la valeur ou un motif, et elle est toujours excusable ([[1139]])." },
      { nom: "Émanant du cocontractant", question: "Le dol vient-il du cocontractant ou d'une personne assimilée (représentant, préposé, gérant d'affaires, porte-fort, tiers de connivence) ?", detail: "[[1138]].", piege: "Dol d'un tiers étranger : pas de nullité pour dol ; penser à l'erreur et à la responsabilité délictuelle du tiers." }
    ],
    exonerations: [
      { nom: "La prescription", question: "Plus de cinq ans se sont-ils écoulés depuis la découverte du dol ?", detail: "[[1144]], [[2224]].", effet: "Action en nullité prescrite ; l'action en responsabilité suit sa propre prescription." }
    ],
    copie: [
      "Annoncer les deux sanctions : nullité relative ([[1131]]) et responsabilité délictuelle ([[1240]]), cumulables ou alternatives.",
      "Préjudice réparable : en principe la perte de chance de ne pas contracter ou de contracter à de meilleures conditions."
    ]
  },
  {
    id: "violence-dependance",
    chapitre: "Validité du contrat",
    titre: "Nullité pour violence (dont abus de dépendance)",
    fondement: ["1140", "1141", "1142", "1143", "1130", "1131"],
    resume: "Obtenir l'annulation d'un contrat conclu sous la contrainte, physique, morale ou économique.",
    conditions: [
      { nom: "Une contrainte", question: "La victime s'est-elle engagée sous la pression d'une contrainte (physique, morale) ou d'un abus de l'état de dépendance dans lequel elle se trouvait à l'égard de son cocontractant ?", detail: "[[1140]] : crainte d'un mal considérable pour sa personne, sa fortune ou celles de ses proches. [[1143]] : dépendance à l'égard du cocontractant, abus, avantage manifestement excessif.", piege: "Depuis 2018, la simple vulnérabilité personnelle (âge, maladie) ne suffit pas pour 1143 : la dépendance doit exister « à son égard »." },
      { nom: "Une contrainte illégitime", question: "La contrainte est-elle illégitime ?", detail: "La menace d'une voie de droit n'est pas une violence, sauf détournement ou avantage manifestement excessif ([[1141]])." },
      { nom: "Une contrainte déterminante", question: "Sans elle, la victime aurait-elle refusé de contracter ou contracté à des conditions substantiellement différentes ?", detail: "Appréciation in concreto ([[1130]], al. 2)." }
    ],
    exonerations: [
      { nom: "La prescription", question: "Plus de cinq ans se sont-ils écoulés depuis que la violence a cessé ?", detail: "[[1144]].", effet: "Action prescrite." }
    ],
    copie: [
      "L'auteur est indifférent : la violence d'un tiers suffit ([[1142]]).",
      "Pour l'abus de dépendance, traiter les trois conditions séparément."
    ]
  }
);

OBL.cas.push({
  id: "ch4-brocante",
  titre: "La commode de la brocante",
  seance: "Chapitre 4",
  regimes: ["erreur", "dol"],
  faits: "Clara, qui meuble son premier appartement, achète 900 euros à Victor, brocanteur, une commode que celui-ci présente comme « d'époque Louis XV, estampillée ». Victor savait que l'estampille avait été ajoutée au XXe siècle et que le meuble est une copie valant 200 euros ; il ne l'a pas dit. Trois ans plus tard, un expert le révèle à Clara. De son côté, Victor avait acheté la commode 50 euros à Mme Roux, une retraitée qui ignorait sa valeur, sans lui dire qu'il espérait la revendre bien plus cher ; Mme Roux savait que le meuble était une copie.",
  question: "Clara peut-elle obtenir l'annulation de la vente et des dommages et intérêts ? Mme Roux peut-elle agir contre Victor ?",
  corrige: {
    qualification: "Deux ventes de meubles. Dans la première, un professionnel a affirmé à une acheteuse profane que le meuble était ancien et estampillé, tout en sachant qu'il s'agissait d'une copie. Dans la seconde, le même professionnel a acheté à une particulière sans lui révéler le prix auquel il comptait revendre.",
    probleme: "L'affirmation mensongère d'un vendeur professionnel sur l'authenticité d'un meuble constitue-t-elle un dol permettant l'annulation et l'indemnisation de l'acheteuse ? Le silence de l'acheteur sur la valeur du bien qu'il acquiert est-il un dol ?",
    majeure: "Selon l'article 1137 du Code civil, le dol est le fait d'obtenir le consentement de l'autre par des manœuvres ou des mensonges ; il doit être déterminant (art. 1130) et entraîne la nullité relative (art. 1131). L'erreur provoquée par un dol est toujours excusable (art. 1139). Le délai de l'action ne court qu'à compter de la découverte du dol (art. 1144), et il est de cinq ans (art. 2224). La victime peut en outre demander réparation sur le fondement de l'article 1240. En revanche, ne constitue pas un dol le fait pour une partie de ne pas révéler son estimation de la valeur de la prestation (art. 1137, al. 3 ; Civ. 1re, 3 mai 2000, Baldus).",
    mineure: [
      { condition: "Élément matériel", corrige: "Victor a affirmé que la commode était d'époque et estampillée : c'est un mensonge, qui suffit à caractériser l'élément matériel du dol (art. 1137, al. 1er)." },
      { condition: "Élément intentionnel", corrige: "Victor savait que l'estampille était fausse : l'intention de tromper est établie." },
      { condition: "Caractère déterminant", corrige: "Clara a payé 900 euros pour un meuble ancien ; elle n'aurait pas acheté une copie valant 200 euros à ce prix. Le dol est déterminant (art. 1130). L'erreur qu'il a provoquée, sur l'authenticité, est excusable par hypothèse (art. 1139), d'autant que Clara est profane face à un professionnel." },
      { condition: "Délai", corrige: "Clara a découvert le dol trois ans après la vente : le délai de cinq ans court à compter de cette découverte (art. 1144) ; l'action est recevable." },
      { condition: "Dommages et intérêts", corrige: "Le mensonge intentionnel est une faute délictuelle (art. 1240). Clara peut demander, en plus de la nullité et de la restitution des 900 euros, réparation de ses autres préjudices (frais d'expertise, par exemple)." },
      { condition: "L'action de Mme Roux", corrige: "Victor n'a rien affirmé de faux : il a seulement tu sa propre estimation de la valeur. Ce silence n'est pas un dol (art. 1137, al. 3). Mme Roux ne pourrait agir que si elle s'était trompée sur une qualité essentielle du meuble (erreur sur sa propre prestation, art. 1133, al. 2) ; or elle a vendu une copie comme une copie : pas d'erreur sur les qualités essentielles, seulement sur la valeur (art. 1136)." }
    ],
    conclusion: "Clara peut obtenir l'annulation de la vente pour dol, la restitution du prix contre la remise de la commode, et des dommages et intérêts. Mme Roux ne dispose d'aucune action : le silence de Victor sur la valeur n'est pas un dol, elle ne s'est pas trompée sur une qualité essentielle, et la lésion n'est pas une cause générale de nullité (art. 1168), la rescision étant réservée à la vente d'immeubles (art. 1674)."
  }
});

OBL.articles.push(
  {"num": "1112-1", "code": "C. civ.", "theme": "Obligation d'information", "texte": "Celle des parties qui connaît une information dont l'importance est déterminante pour le consentement de l'autre doit l'en informer dès lors que, légitimement, cette dernière ignore cette information ou fait confiance à son cocontractant.\n\nNéanmoins, ce devoir d'information ne porte pas sur l'estimation de la valeur de la prestation.\n\nOnt une importance déterminante les informations qui ont un lien direct et nécessaire avec le contenu du contrat ou la qualité des parties.\n\nIl incombe à celui qui prétend qu'une information lui était due de prouver que l'autre partie la lui devait, à charge pour cette autre partie de prouver qu'elle l'a fournie.\n\nLes parties ne peuvent ni limiter, ni exclure ce devoir.\n\nOutre la responsabilité de celui qui en était tenu, le manquement à ce devoir d'information peut entraîner l'annulation du contrat dans les conditions prévues aux articles 1130 et suivants.", "chapitres": [4], "retenir": "Six alinéas : connaissance, ignorance légitime, pas sur la valeur, lien direct et nécessaire, preuve, ordre public, sanctions."},
  {"num": "1122", "code": "C. civ.", "theme": "Droit de la consommation", "texte": "La loi ou le contrat peuvent prévoir un délai de réflexion, qui est le délai avant l'expiration duquel le destinataire de l'offre ne peut manifester son acceptation ou un délai de rétractation, qui est le délai avant l'expiration duquel son bénéficiaire peut rétracter son consentement.", "chapitres": [4], "retenir": "Délai de réflexion et délai de rétractation."},
  {"num": "1128", "code": "C. civ.", "theme": "Conditions de validité", "texte": "Sont nécessaires à la validité d'un contrat :\n\n1° Le consentement des parties ;\n\n2° Leur capacité de contracter ;\n\n3° Un contenu licite et certain.", "chapitres": [4], "retenir": "Consentement, capacité, contenu licite et certain."},
  {"num": "1129", "code": "C. civ.", "theme": "Existence du consentement", "texte": "Conformément à l'article 414-1, il faut être sain d'esprit pour consentir valablement à un contrat.", "chapitres": [4], "retenir": "Il faut être sain d'esprit (renvoi à l'art. 414-1)."},
  {"num": "1130", "code": "C. civ.", "theme": "Vices du consentement", "texte": "L'erreur, le dol et la violence vicient le consentement lorsqu'ils sont de telle nature que, sans eux, l'une des parties n'aurait pas contracté ou aurait contracté à des conditions substantiellement différentes.\n\nLeur caractère déterminant s'apprécie eu égard aux personnes et aux circonstances dans lesquelles le consentement a été donné.", "chapitres": [4], "retenir": "Vice déterminant, apprécié eu égard aux personnes et aux circonstances."},
  {"num": "1131", "code": "C. civ.", "theme": "Vices du consentement", "texte": "Les vices du consentement sont une cause de nullité relative du contrat.", "chapitres": [4], "retenir": "Nullité relative."},
  {"num": "1132", "code": "C. civ.", "theme": "Erreur", "texte": "L'erreur de droit ou de fait, à moins qu'elle ne soit inexcusable, est une cause de nullité du contrat lorsqu'elle porte sur les qualités essentielles de la prestation due ou sur celles du cocontractant.", "chapitres": [4], "retenir": "Erreur de droit ou de fait, excusable, sur les qualités essentielles de la prestation ou du cocontractant."},
  {"num": "1133", "code": "C. civ.", "theme": "Erreur", "texte": "Les qualités essentielles de la prestation sont celles qui ont été expressément ou tacitement convenues et en considération desquelles les parties ont contracté.\n\nL'erreur est une cause de nullité qu'elle porte sur la prestation de l'une ou de l'autre partie.\n\nL'acceptation d'un aléa sur une qualité de la prestation exclut l'erreur relative à cette qualité.", "chapitres": [4], "retenir": "Qualités essentielles = convenues ; erreur sur sa propre prestation ; l'aléa chasse l'erreur."},
  {"num": "1134", "code": "C. civ.", "theme": "Erreur", "texte": "L'erreur sur les qualités essentielles du cocontractant n'est une cause de nullité que dans les contrats conclus en considération de la personne.", "chapitres": [4], "retenir": "Erreur sur le cocontractant : seulement dans les contrats intuitu personae."},
  {"num": "1135", "code": "C. civ.", "theme": "Erreur", "texte": "L'erreur sur un simple motif, étranger aux qualités essentielles de la prestation due ou du cocontractant, n'est pas une cause de nullité, à moins que les parties n'en aient fait expressément un élément déterminant de leur consentement.\n\nNéanmoins l'erreur sur le motif d'une libéralité, en l'absence duquel son auteur n'aurait pas disposé, est une cause de nullité.", "chapitres": [4], "retenir": "Erreur sur un motif : indifférente, sauf stipulation expresse ; exception pour les libéralités."},
  {"num": "1136", "code": "C. civ.", "theme": "Erreur", "texte": "L'erreur sur la valeur par laquelle, sans se tromper sur les qualités essentielles de la prestation, un contractant fait seulement de celle-ci une appréciation économique inexacte, n'est pas une cause de nullité.", "chapitres": [4], "retenir": "Erreur sur la valeur : indifférente."},
  {"num": "1137", "code": "C. civ.", "theme": "Dol", "texte": "Le dol est le fait pour un contractant d'obtenir le consentement de l'autre par des manœuvres ou des mensonges.\n\nConstitue également un dol la dissimulation intentionnelle par l'un des contractants d'une information dont il sait le caractère déterminant pour l'autre partie.\n\nNéanmoins, ne constitue pas un dol le fait pour une partie de ne pas révéler à son cocontractant son estimation de la valeur de la prestation.", "chapitres": [4], "retenir": "Manœuvres, mensonges, réticence intentionnelle ; pas de dol sur l'estimation de la valeur."},
  {"num": "1138", "code": "C. civ.", "theme": "Dol", "texte": "Le dol est également constitué s'il émane du représentant, gérant d'affaires, préposé ou porte-fort du contractant.\n\nIl l'est encore lorsqu'il émane d'un tiers de connivence.", "chapitres": [4], "retenir": "Dol du représentant, gérant d'affaires, préposé, porte-fort, tiers de connivence."},
  {"num": "1139", "code": "C. civ.", "theme": "Dol", "texte": "L'erreur qui résulte d'un dol est toujours excusable ; elle est une cause de nullité alors même qu'elle porterait sur la valeur de la prestation ou sur un simple motif du contrat.", "chapitres": [4], "retenir": "L'erreur provoquée par le dol est toujours excusable, même sur la valeur ou un motif."},
  {"num": "1140", "code": "C. civ.", "theme": "Violence", "texte": "Il y a violence lorsqu'une partie s'engage sous la pression d'une contrainte qui lui inspire la crainte d'exposer sa personne, sa fortune ou celles de ses proches à un mal considérable.", "chapitres": [4], "retenir": "Crainte d'un mal considérable pour sa personne, sa fortune ou celles de ses proches."},
  {"num": "1141", "code": "C. civ.", "theme": "Violence", "texte": "La menace d'une voie de droit ne constitue pas une violence. Il en va autrement lorsque la voie de droit est détournée de son but ou lorsqu'elle est invoquée ou exercée pour obtenir un avantage manifestement excessif.", "chapitres": [4], "retenir": "Menace d'une voie de droit : pas une violence, sauf détournement ou avantage manifestement excessif."},
  {"num": "1142", "code": "C. civ.", "theme": "Violence", "texte": "La violence est une cause de nullité qu'elle ait été exercée par une partie ou par un tiers.", "chapitres": [4], "retenir": "Violence d'une partie ou d'un tiers."},
  {"num": "1143", "code": "C. civ.", "theme": "Violence", "texte": "Il y a également violence lorsqu'une partie, abusant de l'état de dépendance dans lequel se trouve son cocontractant à son égard, obtient de lui un engagement qu'il n'aurait pas souscrit en l'absence d'une telle contrainte et en tire un avantage manifestement excessif.", "chapitres": [4], "retenir": "Abus de l'état de dépendance à l'égard du cocontractant + avantage manifestement excessif."},
  {"num": "1144", "code": "C. civ.", "theme": "Vices du consentement", "texte": "Le délai de l'action en nullité ne court, en cas d'erreur ou de dol, que du jour où ils ont été découverts et, en cas de violence, que du jour où elle a cessé.", "chapitres": [4], "retenir": "Point de départ du délai : découverte de l'erreur ou du dol, cessation de la violence."},
  {"num": "1240", "code": "C. civ.", "theme": "Responsabilité", "texte": "Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", "chapitres": [4], "retenir": "Fondement des dommages et intérêts contre l'auteur d'un dol."},
  {"num": "1641", "code": "C. civ.", "theme": "Articulation", "texte": "Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la rendent impropre à l'usage auquel on la destine, ou qui diminuent tellement cet usage que l'acheteur ne l'aurait pas acquise, ou n'en aurait donné qu'un moindre prix, s'il les avait connus.", "chapitres": [4], "retenir": "Garantie des vices cachés : exclut l'action en nullité pour erreur."},
  {"num": "2224", "code": "C. civ.", "theme": "Prescription", "texte": "Les actions personnelles ou mobilières se prescrivent par cinq ans à compter du jour où le titulaire d'un droit a connu ou aurait dû connaître les faits lui permettant de l'exercer.", "chapitres": [4], "retenir": "Prescription quinquennale de droit commun."}
);
