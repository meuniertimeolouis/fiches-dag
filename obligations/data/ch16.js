/* Chapitre 16 — Les faits générateurs de responsabilité : les régimes spéciaux
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 16,
  intro: "Le droit commun (faute, fait des choses, fait d'autrui) laisse des victimes sans réparation : fait générateur impossible à prouver, cause d'exonération, responsable insolvable. Le législateur a donc créé des **régimes spéciaux**, tournés vers l'**indemnisation** plus que vers la recherche d'un coupable. Trois sont au programme : les **accidents de la circulation** (loi Badinter du 5 juillet 1985), les **produits défectueux** ([[1245]] à [[1245-17]]) et les **troubles anormaux de voisinage**, codifiés à [[1253]] depuis la loi du 15 avril 2024. Réflexe de copie : quand un régime spécial s'applique, il passe **avant** le droit commun, et parfois **à sa place**.",
  sections: [
    {
      titre: "Pourquoi des régimes spéciaux ?",
      contenu: [
        { p: "Même interprétés très favorablement, les articles 1240 et suivants ne garantissent pas l'indemnisation. Deux obstacles : la victime doit prouver un **fait générateur** et le défendeur peut invoquer une **cause d'exonération** ; surtout, une condamnation ne vaut rien si le responsable est **insolvable**. D'où un mouvement de **socialisation des risques** : lois d'indemnisation, assurance obligatoire, fonds de garantie." },
        { schema: { type: "frise", titre: "Quelques jalons", evenements: [
          { date: "9 avr. 1898", t: "Accidents du travail", d: "première loi d'indemnisation, aujourd'hui dans le Code de la sécurité sociale" },
          { date: "5 juill. 1985", t: "Loi Badinter (n° 85-677)", d: "victimes d'accidents de la circulation" },
          { date: "19 mai 1998", t: "Loi n° 98-389", d: "transpose la directive du 25 juillet 1985 : responsabilité du fait des produits défectueux (art. 1386-1 s., devenus [[1245]] s. en 2016)" },
          { date: "4 mars 2002", t: "Loi sur les droits des malades", d: "accidents médicaux non fautifs indemnisés par la solidarité nationale (ONIAM) ; hors programme détaillé" },
          { date: "15 avr. 2024", t: "Loi n° 2024-346", d: "codifie la responsabilité pour troubles anormaux de voisinage ([[1253]])" },
          { date: "9 déc. 2026", t: "Directive (UE) 2024/2853", d: "date limite de transposition de la nouvelle directive sur les produits défectueux" }
        ] } }
      ]
    },
    {
      titre: "La loi Badinter : conditions d'application",
      contenu: [
        { p: "Défendue par la doctrine (Tunc) qui voyait dans l'accident automobile un **risque social**, la loi du 5 juillet 1985 ne cherche pas un coupable mais un **débiteur solvable**, c'est-à-dire un assureur. Elle s'applique aux victimes « même lorsqu'elles sont transportées en vertu d'un contrat » ([[L85-1|art. 1er de la loi de 1985]]) : elle **dépasse la distinction** entre responsabilité contractuelle et délictuelle." },
        { attention: "La loi instaure un régime **autonome et d'ordre public**, qui **exclut** le droit commun (jurisprudence constante, rappelée par Civ. 2e, 31 mars 2022). La loi ne répare toutefois pas les dommages causés aux **marchandises** transportées par un véhicule accidenté, qui restent hors de son champ (Civ. 2e, 7 avr. 2022, n° 21-11.137). Si ses conditions sont réunies, on n'invoque ni [[1240]] ni [[1242]], al. 1er." },
        { schema: { type: "arbre", titre: "Quatre conditions cumulatives ([[L85-1|art. 1er]])", racine: { t: "Application de la loi de 1985", enfants: [
          { t: "Un accident de la circulation", d: "événement soudain et fortuit, en lien avec la circulation" },
          { t: "Un véhicule terrestre à moteur (VTAM)", d: "avec ses remorques ; sauf trains et tramways sur voie propre" },
          { t: "L'implication du VTAM", d: "participation à un titre quelconque ; pas de causalité" },
          { t: "L'imputabilité du dommage à l'accident", d: "présumée si le dommage apparaît peu après l'accident" }
        ] } } },
        { h: "L'accident de la circulation" },
        { liste: [
          "**Événement fortuit** : le fait **volontaire** est exclu (le conducteur qui fonce délibérément sur une personne ne relève pas de la loi, mais du droit commun).",
          "**Lien avec la circulation** apprécié largement : la loi joue pour un véhicule **en stationnement**, dans un atelier de réparation ou lors d'une cascade de tournage.",
          "Lieu de circulation **public ou privé** (parking, chemin privé) ; en revanche, pas dans un hall d'immeuble.",
          "Exclusion quand l'engin cause le dommage dans sa **fonction d'outil** (chariot élévateur qui lève une charge, moissonneuse-batteuse au travail)."
        ] },
        { h: "Le véhicule terrestre à moteur" },
        { def: { terme: "VTAM", texte: "engin doté d'une **force motrice**, apte à transporter des personnes ou des choses, et qui **circule sur le sol** (définition du Code des assurances). Sont exclus avions et bateaux, engins **sans moteur** (vélo, trottinette mécanique, rollers) et **chemins de fer et tramways circulant sur une voie qui leur est propre** ([[L85-1|art. 1er]])." } },
        { schema: { type: "tableau", titre: "VTAM ou pas ?", colonnes: ["Engin", "Qualification", "Source"], lignes: [
          ["Voiture, moto, scooter, camion, tracteur", "**VTAM**", "Définition même"],
          ["Tondeuse autoportée, mini-moto", "**VTAM** (même si la circulation n'est pas sa fonction principale)", "Civ. 2e, 24 juin 2004 ; Civ. 2e, 22 oct. 2015"],
          ["Fauteuil roulant électrique", "**Pas un VTAM** : dispositif médical de déplacement", "Civ. 2e, 6 mai 2021, n° 20-14.551"],
          ["Vélo à assistance électrique", "Hors de la notion de véhicule à moteur pour l'assurance obligatoire (assistance au pédalage seulement)", "CJUE, 12 oct. 2023, aff. C-286/22"],
          ["Trottinette électrique et autres engins motorisés", "Qualification probable (assurance obligatoire), non tranchée", "Jurisprudence à venir"],
          ["Train, tramway sur voie propre", "**Exclus** ([[L85-1|art. 1er]])", "Un train au passage à niveau reste sur sa voie propre ; un tramway qui traverse un carrefour ouvert aux autres usagers n'y est pas"]
        ] } },
        { h: "L'implication" },
        { p: "Le législateur a choisi l'**implication** pour rompre avec la causalité : est impliqué le véhicule qui a **joué un rôle quelconque** dans l'accident, même s'il n'en est pas la cause (rappel récent : Civ. 2e, 3 avr. 2025, n° 23-19.534). La preuve varie selon les situations." },
        { schema: { type: "tableau", titre: "La preuve de l'implication", colonnes: ["Situation", "Solution", "Référence"], lignes: [
          ["**Contact** entre le véhicule et la victime (ou son véhicule)", "Implication **certaine**, que le véhicule soit **en mouvement ou à l'arrêt**", "Civ. 2e, 23 mars 1994 : est nécessairement impliqué tout VTAM heurté, à l'arrêt ou en mouvement"],
          ["**Pas de contact**", "La victime doit prouver que le véhicule a **joué un rôle** (éblouissement, manœuvre qui fait chuter, gravillons projetés)", "Appréciation souple : véhicule de pompiers dont le conducteur fait signe aux cyclistes (Civ. 2e, 1er juin 2011)"],
          ["**Accident complexe** (carambolage)", "Sont impliqués **tous les véhicules intervenus à quelque titre que ce soit** dans un accident traité comme un **fait unique**, s'il y a continuité temporelle et causale", "Abandon de l'appréciation collision par collision, qui prévalait auparavant"]
        ] } },
        { h: "L'imputabilité du dommage à l'accident" },
        { p: "Le dommage doit se rattacher à l'accident. L'imputabilité est **présumée** : le conducteur impliqué ne s'en libère qu'en prouvant que l'accident est **sans relation** avec le dommage (Civ. 2e, 19 févr. 1997). La présomption vaut pour un dommage apparu peu après l'accident ; pour un suicide survenu des mois plus tard, les ayants droit doivent prouver le lien." },
        { h: "Qui indemnise ?" },
        { liste: [
          "Le **conducteur** ou le **gardien** d'un VTAM impliqué ([[L85-2|art. 2]]), la garde s'entendant comme pour [[1242]], al. 1er ; en pratique, leur **assureur**.",
          "Le **préposé** qui conduit le véhicule de son commettant n'est en principe pas débiteur de l'indemnisation : on agit contre le commettant, gardien.",
          "Le **conducteur** blessé qui agit contre un **piéton** ou un **cycliste** ne peut pas invoquer la loi : droit commun ([[1240]], [[1242]])."
        ] }
      ]
    },
    {
      titre: "La loi Badinter : les moyens de défense",
      contenu: [
        { p: "« Les victimes, y compris les conducteurs, ne peuvent se voir opposer la **force majeure** ou le **fait d'un tiers** » ([[L85-2|art. 2]]). Seule reste la **faute de la victime**, dont l'effet dépend de **qui** est victime et de **quel** dommage elle subit." },
        { schema: { type: "tableau", titre: "La faute de la victime selon la loi de 1985 (tableau de synthèse)", colonnes: ["Victime", "Atteintes à la personne", "Dommages aux biens"], lignes: [
          ["**Non-conducteur « super-protégé »** : moins de 16 ans, plus de 70 ans, ou titulaire d'un titre d'incapacité ou d'invalidité d'au moins 80 %", "Indemnisé **dans tous les cas**, sauf s'il a **volontairement recherché** le dommage ([[L85-3|art. 3]], al. 2 et 3)", "Toute faute peut limiter ou exclure l'indemnisation ([[L85-5|art. 5]])"],
          ["**Autre non-conducteur** (piéton, cycliste, passager de 16 à 70 ans)", "Seules sont opposables la recherche volontaire du dommage et la **faute inexcusable** qui a été la **cause exclusive de l'accident** ([[L85-3|art. 3]], al. 1er et 3)", "Toute faute ([[L85-5|art. 5]])"],
          ["**Conducteur** d'un VTAM, quel que soit son âge", "**Toute faute** ayant contribué à son préjudice peut limiter ou exclure l'indemnisation ([[L85-4|art. 4]])", "Toute faute ([[L85-5|art. 5]])"],
          ["**Victime par ricochet**", "Mêmes limitations ou exclusions que la victime directe ([[L85-6|art. 6]])", "Idem"]
        ] } },
        { h: "La faute inexcusable du non-conducteur" },
        { def: { terme: "Faute inexcusable", texte: "« faute **volontaire**, d'une **exceptionnelle gravité**, exposant **sans raison valable** son auteur à un **danger dont il aurait dû avoir conscience** » (Civ. 2e, 20 juill. 1987 ; Ass. plén., 10 nov. 1995)." } },
        { liste: [
          "Retenue très rarement : piéton qui franchit les glissières pour traverser de nuit une voie rapide, piéton couché la nuit au milieu de la chaussée, passager qui saute d'un véhicule en marche.",
          "Écartée pour les simples infractions au Code de la route (traverser hors du passage, cycliste qui grille un feu), pour une imprudence même grave, et quand la conscience de la victime était altérée (passager en état de confusion mentale).",
          "Il faut en plus qu'elle soit la **cause exclusive de l'accident**, et non du seul dommage : le passager qui n'a pas bouclé sa ceinture n'a pas causé l'accident, sa faute ne lui est donc pas opposable pour ses blessures."
        ] },
        { attention: "Recherche volontaire du dommage = avoir **voulu l'atteinte corporelle** (suicide, automutilation). C'est la seule faute opposable aux victimes super-protégées." },
        { h: "La faute du conducteur victime" },
        { p: "Le conducteur est la « victime sacrifiée » de la loi : **toute faute** peut réduire ou supprimer son indemnisation ([[L85-4|art. 4]]), pour des raisons surtout financières (coût pour les assureurs)." },
        { def: { terme: "Conducteur", texte: "celui qui a la **maîtrise** du véhicule ou se trouve **dans ou sur** celui-ci au moment de l'accident. La personne éjectée ou descendue du véhicule peut avoir perdu cette qualité ; en cas de doute, la preuve incombe à celui qui invoque la qualité de conducteur." } },
        { schema: { type: "etapes", titre: "Appliquer l'article 4 au conducteur victime", etapes: [
          { t: "Caractériser une faute", d: "excès de vitesse, alcool, franchissement de ligne blanche, casque ou ceinture non attaché, etc." },
          { t: "Vérifier son rôle causal", d: "la faute doit avoir **contribué à la réalisation de son préjudice** (Ch. mixte, 28 mars 1997). Un état d'ivresse ou l'absence de permis ne suffit pas sans lien avec le dommage (Ass. plén., 6 avr. 2007)." },
          { t: "Apprécier la faute isolément", d: "en faisant **abstraction du comportement des autres conducteurs** (Civ. 2e, 13 oct. 2005)." },
          { t: "Fixer l'effet", d: "limitation ou exclusion, appréciée souverainement par les juges du fond ; l'exclusion totale n'exige pas les caractères de la force majeure." }
        ] } },
        { attention: "Différence clé : pour le **non-conducteur**, la faute doit être la cause exclusive de l'**accident** ; pour le **conducteur**, il suffit qu'elle ait contribué à son **préjudice**. La ceinture non bouclée : inopposable au passager, opposable au conducteur." },
        { h: "Dommages aux biens et victimes par ricochet" },
        { liste: [
          "Biens : la faute de la victime, **quelle qu'elle soit**, limite ou exclut son indemnisation ; mais les appareils délivrés sur prescription médicale (lunettes de vue, prothèse) suivent le régime des atteintes à la personne ([[L85-5|art. 5]], al. 1er).",
          "Véhicule prêté : la faute du conducteur non propriétaire est opposable au **propriétaire** pour les dégâts de son véhicule, qui a un recours contre le conducteur ([[L85-5|art. 5]], al. 2).",
          "Proches de la victime : leur préjudice est réparé en tenant compte des limitations ou exclusions opposables à la victime directe ([[L85-6|art. 6]])."
        ] },
        { h: "La procédure d'indemnisation" },
        { p: "L'assureur doit présenter une **offre d'indemnité** à la victime d'une atteinte à la personne au plus tard **huit mois après l'accident** (C. assur., art. L. 211-9). Sanctions : offre tardive, intérêts au double du taux légal (art. L. 211-13) ; offre manifestement insuffisante, pénalité (art. L. 211-14). L'acceptation forme une transaction. Si la victime accepte l'offre, le paiement doit intervenir **dans le mois** de l'acceptation (art. L. 211-18) ; si elle la refuse, elle agit en justice contre l'assureur. Si le responsable n'est pas assuré ou reste inconnu, le **FGAO** (fonds de garantie des assurances obligatoires de dommages) indemnise." }
      ]
    },
    {
      titre: "Les produits défectueux : conditions",
      contenu: [
        { p: "Transposant la directive du 25 juillet 1985, la loi du 19 mai 1998 a créé une **responsabilité de plein droit du producteur**, qu'il soit ou non lié par contrat avec la victime ([[1245]]). La France, condamnée pour transposition imparfaite (CJCE, 25 avr. 2002 et 14 mars 2006), a modifié le texte, notamment sur la responsabilité du fournisseur (loi du 5 avril 2006)." },
        { schema: { type: "arbre", titre: "Conditions de la responsabilité du producteur", racine: { t: "[[1245]]", d: "responsabilité sans faute", enfants: [
          { t: "Un produit", d: "tout bien **meuble**, même incorporé dans un immeuble ; électricité ; produits du sol, de l'élevage ; éléments du corps humain ([[1245-2]])" },
          { t: "Un défaut", d: "le produit n'offre pas la **sécurité à laquelle on peut légitimement s'attendre** ([[1245-3]])" },
          { t: "Une mise en circulation", d: "dessaisissement **volontaire** du producteur ; une seule mise en circulation ([[1245-4]])" },
          { t: "Un dommage réparable", d: "atteinte à la personne ; atteinte à un **autre bien** que le produit, au-delà de 500 € ([[1245-1]])" },
          { t: "Un lien de causalité", d: "entre le défaut et le dommage, prouvé par la victime ([[1245-8]])" }
        ] } } },
        { h: "Le produit" },
        { p: "Définition large ([[1245-2]]). En sont exclus les **immeubles** (responsabilité des constructeurs : les personnes responsables sur le fondement des articles 1792 s. ne sont pas des producteurs, [[1245-5]], al. 3) et l'information inexacte d'un article de journal, qui n'est pas un produit (CJUE, 10 juin 2021, aff. C-65/20). Terrain privilégié : les **médicaments** et produits de santé." },
        { h: "Le défaut" },
        { liste: [
          "Notion de **sécurité**, non d'aptitude à l'usage : un produit qui ne marche pas relève de la garantie des vices ou de la conformité, pas de [[1245]].",
          "Appréciation *in abstracto*, selon toutes les circonstances : **présentation**, **usage raisonnablement attendu**, **moment de la mise en circulation** ([[1245-3]], al. 2). Un produit n'est pas défectueux du seul fait qu'un autre, plus perfectionné, est sorti ensuite (al. 3).",
          "**Défaut d'information** : une notice qui ne signale pas un risque suffit souvent à caractériser le défaut ; mais la mention du risque n'exonère pas toujours, notamment si le bilan bénéfice/risque est défavorable.",
          "Le respect des règles de l'art, des normes ou d'une **autorisation administrative** (AMM) n'exclut pas le défaut ([[1245-9]]).",
          "Si le **type ou la série** est défectueux, inutile de prouver le défaut de l'exemplaire utilisé (CJUE, 5 mars 2015).",
          "Preuve **double** : la victime établit le **défaut** et le lien causal avec le dommage, mais aussi que le dommage est **imputable au produit** ; la Cour de cassation l'a affirmé à propos de l'intoxication d'un agriculteur par un produit phytosanitaire (Civ. 1re, 21 oct. 2020, Monsanto)."
        ] },
        { h: "La preuve" },
        { p: "La victime prouve le **dommage**, le **défaut** et le **lien de causalité** ([[1245-8]]). Elle peut recourir à des **présomptions graves, précises et concordantes** (Civ. 1re, 22 mai 2008, vaccin contre l'hépatite B), même quand la science n'établit ni n'exclut le lien (CJUE, 21 juin 2017, aff. C-621/15), mais sans présomption irréfragable. L'appréciation des indices (proximité temporelle, absence d'antécédents) relève des juges du fond." },
        { h: "Le producteur et les autres responsables" },
        { schema: { type: "tableau", titre: "Qui répond du défaut ?", colonnes: ["Personne", "Régime", "Texte"], lignes: [
          ["Fabricant du produit fini, producteur d'une matière première, fabricant d'une partie composante (à titre professionnel)", "**Producteur**", "[[1245-5]], al. 1er"],
          ["Celui qui appose son nom ou sa marque ; l'importateur dans l'Union", "**Assimilé** au producteur", "[[1245-5]], al. 2 (la marque apposée suffit : CJUE, 7 juill. 2022, aff. C-264/21)"],
          ["Fabricant de la composante et celui qui l'a incorporée", "**Solidairement** responsables", "[[1245-7]]"],
          ["Vendeur, loueur (sauf crédit-bailleur), autre fournisseur professionnel", "**Subsidiaire** : seulement si le producteur **ne peut être identifié**, et il s'exonère en désignant son fournisseur ou le producteur dans les **trois mois** de la demande", "[[1245-6]]"]
        ] } },
        { h: "La mise en circulation" },
        { p: "Le produit est mis en circulation quand le producteur s'en **dessaisit volontairement** ([[1245-4]]), c'est-à-dire quand il sort du processus de fabrication pour entrer dans un processus de commercialisation (CJCE, 9 févr. 2006, aff. C-127/04). Un transfert de propriété à la victime n'est pas nécessaire (produit utilisé lors d'une prestation de soins : CJCE, 10 mai 2001). Pour un produit fabriqué en série, la date retenue est celle de la mise en circulation du **lot** dont il est issu." }
      ]
    },
    {
      titre: "Les produits défectueux : mise en œuvre",
      contenu: [
        { h: "Un double délai" },
        { schema: { type: "tableau", titre: "Délais de l'action", colonnes: ["", "Délai de forclusion (« péremption »)", "Délai de prescription"], lignes: [
          ["Texte", "[[1245-15]]", "[[1245-16]]"],
          ["Durée", "**10 ans**", "**3 ans**"],
          ["Point de départ", "**Mise en circulation** du produit même qui a causé le dommage", "Date à laquelle le demandeur a connu ou aurait dû connaître **le dommage, le défaut et l'identité du producteur**"],
          ["Exemple", "Produit mis en circulation le 1er mars 2024 : responsabilité éteinte le 1er mars 2034, sauf action engagée avant", "Victime qui apprend tout le 10 janv. 2026 : action possible jusqu'au 10 janv. 2029"],
          ["Tempérament", "Pas d'extinction en cas de **faute** du producteur (« sauf faute du producteur »)", "Voir l'évolution sur la consolidation, ci-dessous"]
        ] } },
        { p: "La 1re chambre civile avait fixé le point de départ de la prescription à la **consolidation** du dommage et jugé qu'il ne pouvait pas courir pour une maladie évolutive (Civ. 1re, 5 juill. 2023, n° 22-18.914). La CJUE a condamné cette lecture : le délai court dès que la victime connaît le dommage, apparu de façon certaine, **peu important son évolution ultérieure**, ainsi que le défaut et le producteur (CJUE, 26 mars 2026, *LF c/ Sanofi Pasteur*, aff. C-338/24, qui juge aussi le délai de dix ans compatible avec le droit d'accès au juge). La Cour de cassation devrait s'aligner." },
        { h: "Des causes d'exonération limitativement énumérées" },
        { schema: { type: "tableau", titre: "Ce que le producteur peut invoquer", colonnes: ["Moyen", "Effet", "Texte"], lignes: [
          ["Absence de mise en circulation ; défaut né après la mise en circulation ; produit non destiné à la distribution", "Exonération totale", "[[1245-10]], 1° à 3°"],
          ["**Risque de développement** : l'état des connaissances scientifiques et techniques, lors de la mise en circulation, ne permettait pas de déceler le défaut", "Exonération totale, **sauf** dommage causé par un élément ou un produit du corps humain", "[[1245-10]], 4° ; [[1245-11]] (distinction jugée conforme à la Constitution : Cons. const., 10 mars 2023, n° 2023-1036 QPC)"],
          ["Conformité à des règles impératives législatives ou réglementaires", "Exonération totale", "[[1245-10]], 5°"],
          ["Faute de la victime (ou d'une personne dont elle répond)", "Réduction ou suppression, selon les circonstances ; la faute qui n'a fait qu'**aggraver** le dommage sans le causer est écartée (Civ. 1re, 2 juin 2021)", "[[1245-12]]"],
          ["**Fait d'un tiers**", "**Aucune** réduction envers la victime (seulement un recours)", "[[1245-13]]"],
          ["Respect des normes ou autorisation administrative", "**Aucun** effet", "[[1245-9]]"],
          ["Clause limitative ou exonératoire", "**Réputée non écrite**, sauf entre professionnels pour les biens à usage professionnel", "[[1245-14]]"]
        ] } },
        { attention: "Le risque de développement est exonératoire ici alors qu'en droit commun il ne constitue pas une force majeure, faute d'extériorité : c'est une singularité du régime. Rare application : fromage contaminé par une bactérie inconnue à l'époque (Civ. 1re, 5 mai 2021)." },
        { h: "L'articulation avec le droit commun" },
        { p: "[[1245-17]] réserve les autres actions, mais la CJCE l'a lu restrictivement (CJCE, 25 avr. 2002, *González Sánchez*, aff. C-183/00) : la victime **ne peut pas** invoquer un autre régime reposant sur le **même fondement** (le défaut de sécurité) ; elle **peut** invoquer un fondement **différent**, comme la **garantie des vices cachés** ou la **faute**. Le juge doit relever d'office le régime spécial quand les faits s'y prêtent (Ch. mixte, 7 juill. 2017)." },
        { liste: [
          "Exclus contre le producteur : l'obligation de sécurité et la responsabilité du fait des choses, qui procèdent nécessairement d'un défaut de sécurité (Civ. 1re, 11 juill. 2018, n° 17-20.154). Les **vices cachés** restent possibles (Civ. 1re, 19 avr. 2023, n° 21-23.126).",
          "Admise : la **faute distincte du défaut**, par exemple le **maintien en circulation** d'un produit dont le producteur connaît le défaut ou un **manquement à son devoir de vigilance** sur les risques (Civ. 1re, 15 nov. 2023, n° 22-21.174 et trois autres, Mediator). Intérêt majeur : échapper au délai de trois ans et bénéficier de la prescription de droit commun (dix ans à compter de la consolidation pour un dommage corporel, [[2226]]).",
          "Le principe d'exclusivité ne vise que les dommages causés à un bien d'usage **privé** ; pour un bien professionnel, d'autres régimes restent ouverts (CJCE, 4 juin 2009, aff. C-285/08).",
          "Il ne protège que le **producteur** : l'**utilisateur** professionnel d'un produit défectueux (hôpital, médecin, exploitant) répond selon son propre régime (CJUE, 21 déc. 2011, aff. C-495/10 ; pour le professionnel de santé, responsabilité pour faute : Civ. 1re, 12 juill. 2012). Condamné, l'utilisateur sans faute dans l'usage peut obtenir du producteur le remboursement **intégral** de ce qu'il a versé (Civ. 1re, 18 févr. 2026, n° 24-19.881)."
        ] },
        { h: "La réparation" },
        { p: "Réparation intégrale des atteintes à la personne ; pour les biens, seulement ceux **autres que le produit lui-même** et au-delà d'une **franchise de 500 €** fixée par décret ([[1245-1]], al. 2)." },
        { h: "La directive (UE) 2024/2853 du 23 octobre 2024" },
        { schema: { type: "tableau", titre: "Ce qui va changer (produits mis en circulation après le 9 décembre 2026)", colonnes: ["Point", "Code civil actuel", "Nouvelle directive"], lignes: [
          ["Produits", "Biens meubles, électricité", "Ajout des **logiciels** (hors logiciels libres fournis hors activité commerciale), des fichiers de fabrication numérique et des services connexes"],
          ["Responsables", "Producteur ; fournisseur à titre subsidiaire", "Fabricant, celui qui **modifie substantiellement** le produit ; pour un fabricant hors Union : importateur, mandataire, prestataire d'exécution des commandes ; à défaut, distributeur"],
          ["Preuve", "Présomptions de fait admises par la jurisprudence", "Présomptions encadrées (art. 10) et **divulgation des éléments de preuve** (art. 9)"],
          ["Dommages", "Franchise de 500 € pour les biens", "Suppression de la franchise ; atteinte **médicalement reconnue à la santé psychologique** ; destruction ou corruption de **données**"],
          ["Délais", "3 ans / 10 ans", "Maintenus, mais **25 ans** pour les lésions corporelles à période de latence"],
          ["Risque de développement", "Exonératoire", "Maintenu"]
        ] } },
        { attention: "Au 29 septembre 2026, la directive n'est pas encore transposée : les articles [[1245]] à [[1245-17]] restent dans leur rédaction antérieure. En copie, raisonnez sur le Code civil et mentionnez la directive en perspective." }
      ]
    },
    {
      titre: "Les troubles anormaux de voisinage",
      contenu: [
        { p: "Création prétorienne (arrêt du 27 novembre 1844, sous le visa des articles 544 et 1382 anciens), la responsabilité s'est détachée de la faute et de l'abus de droit pour reposer sur un principe autonome : « **nul ne doit causer à autrui un trouble anormal de voisinage** » (Civ. 2e, 19 nov. 1986). La loi du 15 avril 2024 l'a codifiée à [[1253]], en reprenant l'essentiel de la jurisprudence." },
        { schema: { type: "arbre", titre: "La responsabilité de l'article 1253", racine: { t: "Responsabilité **de plein droit** ([[1253]], al. 1er)", enfants: [
          { t: "Un trouble", d: "bruit, odeurs, vibrations, fumées, perte d'ensoleillement, poussières ; en principe durable, parfois un événement unique (Civ. 3e, 8 nov. 2018)" },
          { t: "Anormal", d: "excède les inconvénients normaux de voisinage : intensité, heure, lieu (ville ou campagne), seuil de la personne raisonnable ; peu importe que l'activité soit licite ou autorisée" },
          { t: "Causé par un responsable énuméré", d: "propriétaire, locataire, occupant sans titre, titulaire d'un titre d'occupation ou d'exploitation, maître d'ouvrage ou celui qui en exerce les pouvoirs" },
          { t: "À un voisin", d: "toute personne proche qui subit le trouble ; pas de contiguïté exigée" },
          { lien: "sauf", t: "Préoccupation", d: "activité antérieure à l'installation de la victime, conforme aux lois et règlements, poursuivie sans aggravation (al. 2)" }
        ] } } },
        { liste: [
          "**Pas de faute** à prouver, et l'absence de faute ne libère pas le responsable. Seule la **cause étrangère** exonère, selon le droit commun.",
          "Le **propriétaire** répond du seul fait de son titre, même s'il n'occupe pas les lieux : il peut être tenu *in solidum* avec l'occupant.",
          "L'entrepreneur « voisin occasionnel », que la jurisprudence retenait (Civ. 3e, 30 juin 1998), n'est plus dans la liste ; le **maître d'ouvrage**, lui, y figure.",
          "L'autorisation administrative ou le « patrimoine sensoriel des campagnes » (C. envir., art. L. 110-1) ne rendent pas normal un trouble excessif."
        ] },
        { h: "La préoccupation" },
        { p: "Il serait peu cohérent qu'on se plaigne d'un trouble qui existait avant son arrivée. L'article 1253, al. 2, exclut donc la responsabilité quand le trouble provient d'activités **antérieures** à l'acte qui transfère la propriété ou la jouissance à la victime (ou, à défaut d'acte, à son entrée en possession), à trois conditions : activités **conformes aux lois et règlements**, poursuivies **dans les mêmes conditions** ou dans des conditions nouvelles **qui n'aggravent pas** le trouble. Pour les **activités agricoles**, l'article L. 311-1-1 du Code rural est plus souple : il admet aussi les changements résultant d'une mise en conformité ou sans modification substantielle de leur nature ou de leur intensité." }
      ]
    },
    {
      titre: "Synthèse : trois régimes spéciaux",
      contenu: [
        { schema: { type: "tableau", titre: "Comparer pour choisir le bon fondement", colonnes: ["", "Loi Badinter", "Produits défectueux", "Troubles de voisinage"], lignes: [
          ["Texte", "Loi n° 85-677 du 5 juill. 1985, art. 1er à 6", "[[1245]] à [[1245-17]]", "[[1253]]"],
          ["Fait générateur", "**Implication** d'un VTAM dans un accident de la circulation", "**Défaut** de sécurité d'un produit mis en circulation", "**Trouble anormal** de voisinage"],
          ["Débiteur", "Conducteur ou gardien (son assureur)", "Producteur (fournisseur à titre subsidiaire)", "Propriétaire, occupant, maître d'ouvrage…"],
          ["Force majeure", "**Inopposable** à la victime", "Non prévue ; exonérations limitatives", "Exonératoire (cause étrangère)"],
          ["Fait du tiers", "**Inopposable**", "**Inopposable** à la victime", "Exonératoire s'il présente les caractères de la force majeure"],
          ["Faute de la victime", "Graduée selon la victime et le dommage", "Réduction ou suppression", "Droit commun"],
          ["Exclusivité", "**Oui** : exclut le droit commun", "Oui pour les actions fondées sur le défaut ; faute distincte ou vices cachés possibles", "Non : régime spécial à côté de [[1240]]"]
        ] } }
      ]
    }
  ],
  retenir: [
    "Loi Badinter : accident de la circulation + VTAM + **implication** + imputabilité ([[L85-1|art. 1er]]) ; régime autonome et d'ordre public, exclusif du droit commun.",
    "Implication = rôle quelconque ; contact avec un véhicule, même à l'arrêt, = implication (Civ. 2e, 23 mars 1994) ; accident complexe traité comme un fait unique.",
    "Ni force majeure ni fait du tiers ([[L85-2|art. 2]]) ; faute du non-conducteur : faute inexcusable, cause exclusive de l'accident, ou recherche volontaire du dommage (seule opposable aux moins de 16 ans, plus de 70 ans, invalides à 80 %) ([[L85-3|art. 3]]).",
    "Conducteur victime : toute faute ayant contribué à son préjudice, appréciée isolément ([[L85-4|art. 4]] ; Ch. mixte, 28 mars 1997 ; Ass. plén., 6 avr. 2007).",
    "Produits défectueux : producteur responsable de plein droit du défaut de sécurité ([[1245]], [[1245-3]]) ; preuve par la victime, présomptions admises ([[1245-8]]) ; fournisseur subsidiaire ([[1245-6]]).",
    "Délais : 3 ans à compter de la connaissance ([[1245-16]]), 10 ans après la mise en circulation ([[1245-15]]) ; risque de développement exonératoire sauf produits du corps humain ([[1245-10]], [[1245-11]]) ; fait du tiers inopposable ([[1245-13]]).",
    "Exclusivité : pas d'autre action fondée sur le défaut ; faute distincte (Mediator, 2023) ou vices cachés possibles ; utilisateur hors champ.",
    "Directive (UE) 2024/2853 : à transposer avant le 9 déc. 2026, Code civil encore inchangé.",
    "Troubles anormaux de voisinage : responsabilité de plein droit ([[1253]]) ; exception de préoccupation (al. 2)."
  ],
  articles: ["L85-1", "L85-2", "L85-3", "L85-4", "L85-5", "L85-6", "1245", "1245-1", "1245-2", "1245-3", "1245-4", "1245-5", "1245-6", "1245-7", "1245-8", "1245-9", "1245-10", "1245-11", "1245-12", "1245-13", "1245-14", "1245-15", "1245-16", "1245-17", "1253", "1240", "1242", "2226"],
  regimes: ["badinter-indemnisation", "produits-defectueux", "troubles-voisinage"],
  cas: ["ch16-scooter"],
  quiz: [
    { q: "Un cycliste de 30 ans percute un camion arrêté à un feu rouge et se blesse. La loi Badinter s'applique-t-elle ?", choix: ["Non : le camion était à l'arrêt", "Oui : le camion, heurté, est impliqué", "Non : le cycliste a commis une faute"], bonne: 1, expl: "Tout VTAM heurté, à l'arrêt ou en mouvement, est impliqué (Civ. 2e, 23 mars 1994). Le vélo n'est pas un VTAM, mais le camion en est un." },
    { q: "Un automobiliste mis en cause invoque le fait d'un tiers, imprévisible et irrésistible, qui l'a projeté sur la victime. Effet ?", choix: ["Aucun à l'égard de la victime", "Exonération totale", "Exonération partielle"], bonne: 0, expl: "[[L85-2|Art. 2 de la loi de 1985]] : ni la force majeure ni le fait du tiers ne sont opposables aux victimes, conducteurs compris." },
    { q: "Une piétonne de 74 ans traverse au feu rouge et est renversée. Que peut-on lui opposer pour ses blessures ?", choix: ["Sa faute inexcusable, cause exclusive de l'accident", "Toute faute", "Seulement la recherche volontaire du dommage"], bonne: 2, expl: "Victime de plus de 70 ans : indemnisée dans tous les cas, sauf recherche volontaire du dommage ([[L85-3|art. 3]], al. 2 et 3)." },
    { q: "Un passager de 25 ans n'avait pas bouclé sa ceinture ; il est grièvement blessé dans une collision. Son indemnisation :", choix: ["Est réduite pour faute", "Est intégrale", "Est exclue"], bonne: 1, expl: "Non-conducteur : seule la faute inexcusable, cause exclusive de l'**accident**, est opposable ; l'absence de ceinture n'a pas causé l'accident." },
    { q: "Un motard en état d'ivresse est percuté par une voiture qui a grillé un stop ; l'expertise montre que l'alcool n'a joué aucun rôle. Son indemnisation peut-elle être réduite pour ivresse ?", choix: ["Oui, l'ivresse est toujours une faute opposable", "Non, faute de rôle causal", "Oui, mais seulement de moitié"], bonne: 1, expl: "[[L85-4|Art. 4]] : la faute doit avoir contribué au préjudice (Ass. plén., 6 avr. 2007), appréciée sans tenir compte de la faute de l'autre conducteur." },
    { q: "Un fauteuil roulant électrique renverse un piéton sur un trottoir. Fondement ?", choix: ["Loi Badinter", "Droit commun de la responsabilité", "Responsabilité du fait des produits défectueux obligatoirement"], bonne: 1, expl: "Le fauteuil roulant électrique n'est pas un VTAM (Civ. 2e, 6 mai 2021, n° 20-14.551)." },
    { q: "Une victime ignore qui a fabriqué la bouilloire défectueuse qui l'a brûlée. Le vendeur, assigné, désigne le fabricant deux mois après la demande. Il est :", choix: ["Responsable comme le producteur", "Tenu solidairement avec le producteur", "Libéré"], bonne: 2, expl: "[[1245-6]] : le fournisseur n'est responsable qu'à titre subsidiaire et se libère en désignant le producteur dans les trois mois." },
    { q: "Un médicament autorisé (AMM) cause des lésions graves. Le laboratoire invoque l'autorisation administrative. Effet ?", choix: ["Aucune exonération", "Exonération totale", "Réduction de moitié"], bonne: 0, expl: "[[1245-9]] : le respect des normes ou d'une autorisation administrative n'exclut pas la responsabilité." },
    { q: "Une victime d'un médicament défectueux agit plus de trois ans après avoir connu dommage, défaut et producteur. Que peut-elle encore tenter ?", choix: ["Rien, tout est prescrit", "La responsabilité du fait des choses contre le producteur", "La responsabilité pour faute du producteur, si elle prouve une faute distincte du défaut"], bonne: 2, expl: "Civ. 1re, 15 nov. 2023 (Mediator) : maintien en circulation d'un produit dont le défaut est connu, manquement au devoir de vigilance. Le fait des choses est exclu (Civ. 1re, 11 juill. 2018)." },
    { q: "Un couple achète en 2025 une maison voisine d'un élevage de volailles existant depuis 2010, exploité conformément aux règlements et sans changement. Il se plaint des odeurs. Solution ?", choix: ["Responsabilité de plein droit de l'éleveur", "Pas de responsabilité : préoccupation", "Responsabilité seulement si l'éleveur a commis une faute"], bonne: 1, expl: "[[1253]], al. 2, et C. rur., art. L. 311-1-1 pour les activités agricoles." }
  ]
});

OBL.regimes.push(
  {
    id: "badinter-indemnisation",
    chapitre: "Régimes spéciaux",
    titre: "Indemnisation d'une victime d'accident de la circulation (loi Badinter)",
    fondement: ["L85-1", "L85-2", "L85-3", "L85-4", "L85-5", "L85-6"],
    resume: "Déterminer si la victime peut agir sur la loi du 5 juillet 1985 contre le conducteur ou le gardien d'un VTAM, puis mesurer son droit selon sa qualité et la nature de son dommage.",
    conditions: [
      { nom: "Un accident de la circulation", question: "Un événement soudain et fortuit, en lien avec la circulation, sur une voie publique ou privée ?", detail: "Fait volontaire exclu. Véhicule en stationnement inclus. Exclusion quand le véhicule agit dans sa fonction d'outil.", piege: "Oublier d'écarter l'hypothèse de l'acte intentionnel." },
      { nom: "Un VTAM", question: "Un engin à moteur, circulant sur le sol, qui n'est ni un train ni un tramway sur voie propre ?", detail: "[[L85-1|Art. 1er]]. Tondeuse autoportée : oui ; fauteuil roulant électrique : non (Civ. 2e, 6 mai 2021) ; vélo, rollers : non.", piege: "Le véhicule de la **victime** n'a pas à être un VTAM : c'est le véhicule **mis en cause** qui compte." },
      { nom: "L'implication", question: "Le VTAM a-t-il joué un rôle quelconque dans l'accident ?", detail: "Contact : implication acquise, véhicule à l'arrêt ou en mouvement (Civ. 2e, 23 mars 1994). Sans contact : la victime prouve le rôle du véhicule. Accident complexe : tous les véhicules intervenus sont impliqués.", preuve: "Charge de la victime ; facilitée en cas de contact.", piege: "Raisonner en termes de causalité ou de faute du conducteur : hors sujet." },
      { nom: "L'imputabilité", question: "Le dommage se rattache-t-il à l'accident ?", detail: "Présomption simple si le dommage apparaît peu après l'accident (Civ. 2e, 19 févr. 1997) ; le défendeur peut prouver l'absence de relation.", preuve: "Présumée ; preuve contraire à la charge du défendeur." },
      { nom: "Un défendeur visé par la loi", question: "La victime agit-elle contre le conducteur ou le gardien d'un VTAM impliqué ?", detail: "[[L85-2|Art. 2]]. Contre un piéton ou un cycliste, droit commun.", piege: "Le conducteur blessé qui agit contre le piéton fautif ne peut pas invoquer la loi." }
    ],
    exonerations: [
      { nom: "Force majeure et fait du tiers", question: "Le défendeur invoque-t-il un événement extérieur ou le fait d'un tiers ?", detail: "[[L85-2|Art. 2]] : inopposables à toutes les victimes, conducteurs compris.", effet: "Aucune exonération ; seulement des recours entre coobligés." },
      { nom: "Faute du non-conducteur (atteintes à la personne)", question: "La victime est-elle super-protégée (moins de 16 ans, plus de 70 ans, invalide à 80 %) ? Sinon, a-t-elle commis une faute inexcusable, cause exclusive de l'accident ?", detail: "[[L85-3|Art. 3]]. Super-protégée : seule la recherche volontaire du dommage. Autres : faute inexcusable (Civ. 2e, 20 juill. 1987 ; Ass. plén., 10 nov. 1995) **et** cause exclusive de l'accident, ou recherche volontaire.", effet: "Exclusion totale si la faute qualifiée est établie ; sinon indemnisation intégrale." },
      { nom: "Faute du conducteur victime", question: "Le conducteur a-t-il commis une faute ayant contribué à son préjudice ?", detail: "[[L85-4|Art. 4]] ; Ch. mixte, 28 mars 1997 ; rôle causal exigé (Ass. plén., 6 avr. 2007) ; abstraction faite du comportement des autres conducteurs.", effet: "Limitation ou exclusion, souverainement appréciée." },
      { nom: "Faute de la victime (dommages aux biens)", question: "La victime a-t-elle commis une faute, quelle qu'elle soit ?", detail: "[[L85-5|Art. 5]] ; les appareils sur prescription médicale suivent le régime des atteintes à la personne.", effet: "Limitation ou exclusion." }
    ],
    copie: [
      "Toujours commencer par qualifier la victime : conducteur ou non ; si non-conducteur, son âge et son taux d'incapacité.",
      "Séparer atteintes à la personne et dommages aux biens : les règles ne sont pas les mêmes.",
      "Victimes par ricochet : appliquer les limitations opposables à la victime directe ([[L85-6|art. 6]])."
    ]
  },
  {
    id: "produits-defectueux",
    chapitre: "Régimes spéciaux",
    titre: "Responsabilité du fait des produits défectueux",
    fondement: ["1245", "1245-3", "1245-8", "1245-10", "1245-15", "1245-16"],
    resume: "Engager la responsabilité sans faute du producteur pour le dommage causé par le défaut de sécurité de son produit, contractant ou non de la victime.",
    conditions: [
      { nom: "Un produit", question: "Un bien meuble (même incorporé à un immeuble), l'électricité, un produit du corps humain ?", detail: "[[1245-2]]. Pas les immeubles (constructeurs : [[1245-5]], al. 3)." },
      { nom: "Un producteur ou assimilé", question: "Le défendeur est-il fabricant, producteur de matière première ou de composante, importateur, ou se présente-t-il comme producteur ?", detail: "[[1245-5]] ; composante et incorporateur solidaires ([[1245-7]]). Le fournisseur n'est tenu que si le producteur n'est pas identifié et s'il ne désigne pas son fournisseur dans les trois mois ([[1245-6]]).", piege: "Assigner le vendeur alors que le producteur est connu." },
      { nom: "Une mise en circulation", question: "Le producteur s'est-il volontairement dessaisi du produit ?", detail: "[[1245-4]] ; une seule mise en circulation ; point de départ du délai de dix ans." },
      { nom: "Un défaut de sécurité", question: "Le produit offrait-il la sécurité à laquelle on pouvait légitimement s'attendre, compte tenu de sa présentation, de son usage attendu et du moment de sa mise en circulation ?", detail: "[[1245-3]] ; le défaut d'information suffit souvent ; normes et AMM indifférentes ([[1245-9]]).", preuve: "Victime ([[1245-8]]) ; présomptions graves, précises et concordantes admises.", piege: "Confondre défaut de sécurité et défaut d'usage (garantie des vices)." },
      { nom: "Un dommage réparable et un lien de causalité", question: "Atteinte à la personne, ou à un autre bien que le produit au-delà de 500 € ? Le défaut a-t-il causé le dommage ?", detail: "[[1245-1]] ; [[1245-8]] ; imputabilité du dommage au produit.", preuve: "Victime, par tous moyens, présomptions comprises (CJUE, 21 juin 2017)." },
      { nom: "Des délais respectés", question: "Moins de 3 ans depuis la connaissance du dommage, du défaut et du producteur ? Moins de 10 ans depuis la mise en circulation ?", detail: "[[1245-16]] et [[1245-15]]. Si le délai est dépassé : chercher une faute distincte du défaut (Mediator, 2023)." }
    ],
    exonerations: [
      { nom: "Causes de l'article 1245-10", question: "Absence de mise en circulation, défaut postérieur, produit non destiné à la distribution, conformité à des règles impératives ?", detail: "Liste limitative.", effet: "Exonération totale." },
      { nom: "Risque de développement", question: "L'état des connaissances, au moment de la mise en circulation, permettait-il de déceler le défaut ?", detail: "[[1245-10]], 4° ; exclu pour les éléments et produits du corps humain ([[1245-11]]).", effet: "Exonération totale." },
      { nom: "Faute de la victime", question: "La victime (ou une personne dont elle répond) a-t-elle concouru au dommage par sa faute ?", detail: "[[1245-12]].", effet: "Réduction ou suppression." },
      { nom: "Fait du tiers", question: "Un tiers a-t-il concouru au dommage ?", detail: "[[1245-13]].", effet: "Aucune réduction envers la victime." }
    ],
    copie: [
      "Vérifier d'abord si le régime s'applique : il **exclut** les autres actions fondées sur le défaut de sécurité (CJCE, 25 avr. 2002), et le juge doit le relever d'office (Ch. mixte, 7 juill. 2017).",
      "Si l'action est tardive, basculer sur la faute distincte du producteur ou la garantie des vices cachés."
    ]
  },
  {
    id: "troubles-voisinage",
    chapitre: "Régimes spéciaux",
    titre: "Responsabilité pour trouble anormal de voisinage",
    fondement: ["1253"],
    resume: "Obtenir réparation d'un trouble excédant les inconvénients normaux du voisinage, sans avoir à prouver de faute.",
    conditions: [
      { nom: "Un trouble", question: "La victime subit-elle une nuisance (bruit, odeurs, vibrations, fumées, perte de vue ou d'ensoleillement) ?", detail: "En principe durable, parfois ponctuel." },
      { nom: "Son anormalité", question: "Le trouble excède-t-il les inconvénients normaux de voisinage, compte tenu de son intensité, de l'heure et du lieu ?", detail: "Appréciation souveraine, par rapport à une personne raisonnable ; la licéité de l'activité est indifférente.", preuve: "Victime (constats, expertises acoustiques).", piege: "Chercher une faute ou une illégalité : inutile." },
      { nom: "Un responsable visé par le texte", question: "Le défendeur est-il propriétaire, locataire, occupant sans titre, titulaire d'un titre d'occupation ou d'exploitation, maître d'ouvrage ?", detail: "[[1253]], al. 1er ; le propriétaire répond même s'il n'occupe pas ; responsabilité *in solidum* possible." },
      { nom: "Un voisin victime", question: "La victime se trouve-t-elle à proximité de la source du trouble ?", detail: "Pas de contiguïté exigée." }
    ],
    exonerations: [
      { nom: "Préoccupation", question: "L'activité existait-elle avant l'acte d'acquisition ou de jouissance de la victime, était-elle conforme aux lois et règlements, et s'est-elle poursuivie sans aggravation ?", detail: "[[1253]], al. 2 ; règles plus souples pour les activités agricoles (C. rur., art. L. 311-1-1).", effet: "Pas de responsabilité." },
      { nom: "Cause étrangère", question: "Le trouble résulte-t-il d'un événement présentant les caractères de la force majeure ?", detail: "Droit commun.", effet: "Exonération." }
    ],
    copie: [
      "Citer [[1253]] (loi du 15 avril 2024) et le principe de Civ. 2e, 19 nov. 1986 ; vérifier systématiquement la préoccupation."
    ]
  }
);

OBL.cas.push({
  id: "ch16-scooter",
  titre: "L'embardée du scooter",
  seance: "Chapitre 16",
  regimes: ["badinter-indemnisation"],
  faits: "Le 7 février 2026, vers 23 heures, Théo, 19 ans, rentre chez lui en scooter (50 cm³) après une soirée où il a bu : son taux d'alcool dépasse le seuil légal. Il roule à la vitesse autorisée, casque posé sur la tête mais jugulaire non attachée. Mme Garnier, 72 ans, traverse la rue hors du passage piéton, dans une zone mal éclairée. Pour l'éviter, Théo fait une brusque embardée ; Mme Garnier, effrayée par le scooter qui fonce vers elle, recule précipitamment, chute et se fracture le col du fémur ; ses lunettes de vue sont brisées. Le scooter n'a pas touché la piétonne. Il glisse et percute la voiture de Karim, régulièrement stationnée. Théo, dont le casque s'est détaché, souffre d'un traumatisme crânien. L'expertise conclut qu'un conducteur à jeun aurait freiné plus tôt et plus en ligne, et que la jugulaire attachée aurait évité l'essentiel des lésions crâniennes. Des passants confirment la chute de Mme Garnier au passage du scooter. Le 29 septembre 2026, l'assureur de Théo n'a encore fait aucune offre à Mme Garnier.",
  question: "Mme Garnier peut-elle être indemnisée par Théo, et dans quelle mesure ? Théo peut-il être indemnisé, et contre qui ? Qu'en est-il de la voiture de Karim ?",
  corrige: {
    qualification: "Un accident de la circulation impliquant deux VTAM : le scooter de Théo (en mouvement, sans contact avec la piétonne) et la voiture de Karim (en stationnement, heurtée). Mme Garnier est une victime non conductrice âgée de plus de 70 ans ; Théo est un conducteur victime ; Karim, absent du véhicule, subit un dommage aux biens.",
    probleme: "Un véhicule qui n'est pas entré en contact avec la victime peut-il être impliqué dans l'accident ? Quelles fautes peuvent être opposées à une victime non conductrice de plus de 70 ans, à un conducteur victime et à une victime de dommages aux biens ? Le conducteur blessé peut-il invoquer la loi de 1985 contre le piéton ?",
    majeure: "La loi du 5 juillet 1985 s'applique aux victimes d'un accident de la circulation dans lequel est impliqué un VTAM (art. 1er) ; ce régime autonome exclut le droit commun. Est impliqué le véhicule qui a joué un rôle quelconque dans l'accident ; en l'absence de contact, la victime doit prouver ce rôle ; tout VTAM heurté, à l'arrêt ou en mouvement, est impliqué (Civ. 2e, 23 mars 1994). La force majeure et le fait d'un tiers sont inopposables (art. 2). Les victimes non conductrices de plus de 70 ans sont indemnisées dans tous les cas des atteintes à leur personne, sauf si elles ont volontairement recherché le dommage (art. 3, al. 2 et 3). La faute de la victime limite ou exclut l'indemnisation des dommages aux biens, mais les appareils délivrés sur prescription médicale suivent le régime des atteintes à la personne (art. 5, al. 1er). La faute du conducteur victime limite ou exclut son indemnisation (art. 4) si elle a contribué à la réalisation de son préjudice, appréciée en faisant abstraction du comportement des autres (Ch. mixte, 28 mars 1997 ; Civ. 2e, 13 oct. 2005) ; l'ivresse n'est opposable que si elle a joué un rôle causal (Ass. plén., 6 avr. 2007). L'action d'un conducteur contre un piéton relève du droit commun (art. 1240 C. civ.). L'assureur doit présenter une offre à la victime d'une atteinte à la personne dans les huit mois de l'accident (C. assur., art. L. 211-9), à peine d'intérêts au double du taux légal (art. L. 211-13).",
    mineure: [
      { condition: "L'implication du scooter à l'égard de Mme Garnier", corrige: "Il n'y a pas eu de contact : Mme Garnier doit prouver que le scooter a joué un rôle dans sa chute. Les témoins établissent qu'elle a reculé et chuté à cause de l'embardée du scooter qui fonçait vers elle : le scooter est impliqué. Le dommage, survenu immédiatement, est imputable à l'accident. Elle peut agir contre Théo, conducteur, et son assureur." },
      { condition: "Les fautes opposables à Mme Garnier", corrige: "Âgée de 72 ans, elle est une victime super-protégée : seule la recherche volontaire du dommage pourrait lui être opposée, ce qui n'est manifestement pas le cas. Sa traversée hors du passage est indifférente pour ses blessures : indemnisation intégrale de son préjudice corporel. Ses lunettes de vue, délivrées sur prescription médicale, sont traitées comme une atteinte à la personne (art. 5, al. 1er) : indemnisation intégrale également." },
      { condition: "L'offre de l'assureur", corrige: "L'accident date du 7 février 2026 : l'offre doit être faite au plus tard le 7 octobre 2026. Au 29 septembre 2026, l'assureur est encore dans les délais ; à défaut d'offre à cette date, la somme finalement offerte ou allouée produira des intérêts au double du taux légal." },
      { condition: "Théo contre Karim", corrige: "La voiture de Karim, heurtée, est impliquée même à l'arrêt. Théo, conducteur, peut agir contre Karim, gardien, et son assureur. Mais ses fautes lui sont opposables : l'ivresse a joué un rôle causal selon l'expertise (réaction tardive), et la jugulaire non attachée a contribué à ses lésions crâniennes. Appréciées sans tenir compte du comportement de la piétonne, ces fautes justifient une limitation importante, voire une exclusion, souverainement fixée par les juges du fond." },
      { condition: "Théo contre Mme Garnier", corrige: "Mme Garnier n'est pas conductrice d'un VTAM : la loi de 1985 ne s'applique pas. Théo ne peut agir que sur le droit commun (art. 1240 et 1241 : traversée imprudente hors du passage, de nuit). Sa propre faute (ivresse, jugulaire) réduira sa réparation par un partage de responsabilité." },
      { condition: "La voiture de Karim", corrige: "Karim, qui n'était pas dans son véhicule, est une victime non conductrice d'un dommage aux biens. Il agit contre Théo, conducteur du scooter impliqué. Seule sa propre faute pourrait lui être opposée (art. 5) : il était régulièrement stationné, il n'en a commis aucune. Indemnisation intégrale." }
    ],
    conclusion: "Mme Garnier sera intégralement indemnisée par l'assureur de Théo, lunettes comprises, sans que sa traversée hors passage puisse lui être opposée ; l'offre doit lui parvenir avant le 7 octobre 2026. Karim obtiendra la réparation intégrale de sa voiture. Théo peut agir contre Karim sur la loi de 1985, mais son ivresse et sa jugulaire détachée, qui ont contribué à son préjudice, limiteront fortement, voire excluront, son indemnisation ; contre Mme Garnier, il ne dispose que du droit commun, avec un partage de responsabilité."
  }
});

OBL.articles.push(
  {"num": "L85-1", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Loi Badinter", "texte": "Les dispositions du présent chapitre s'appliquent, même lorsqu'elles sont transportées en vertu d'un contrat, aux victimes d'un accident de la circulation dans lequel est impliqué un véhicule terrestre à moteur ainsi que ses remorques ou semi-remorques, à l'exception des chemins de fer et des tramways circulant sur des voies qui leur sont propres.", "chapitres": [16], "retenir": "Champ d'application : accident de la circulation impliquant un VTAM, même pour les victimes transportées ; exclusion des trains et tramways sur voie propre.", "aff": "1er"},
  {"num": "L85-2", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Loi Badinter", "texte": "Les victimes, y compris les conducteurs, ne peuvent se voir opposer la force majeure ou le fait d'un tiers par le conducteur ou le gardien d'un véhicule mentionné à l'article 1er.", "chapitres": [16], "retenir": "Force majeure et fait du tiers inopposables à toutes les victimes, conducteurs compris.", "aff": "2"},
  {"num": "L85-3", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Loi Badinter", "texte": "Les victimes, hormis les conducteurs de véhicules terrestres à moteur, sont indemnisées des dommages résultant des atteintes à leur personne qu'elles ont subis, sans que puisse leur être opposée leur propre faute à l'exception de leur faute inexcusable si elle a été la cause exclusive de l'accident.\n\nLes victimes désignées à l'alinéa précédent, lorsqu'elles sont âgées de moins de seize ans ou de plus de soixante-dix ans, ou lorsque, quel que soit leur âge, elles sont titulaires, au moment de l'accident, d'un titre leur reconnaissant un taux d'incapacité permanente ou d'invalidité au moins égal à 80 p. 100, sont, dans tous les cas, indemnisées des dommages résultant des atteintes à leur personne qu'elles ont subis.\n\nToutefois, dans les cas visés aux deux alinéas précédents, la victime n'est pas indemnisée par l'auteur de l'accident des dommages résultant des atteintes à sa personne lorsqu'elle a volontairement recherché le dommage qu'elle a subi.", "chapitres": [16], "retenir": "Non-conducteurs : seule la faute inexcusable, cause exclusive de l'accident, ou la recherche volontaire du dommage ; victimes de moins de 16 ans, de plus de 70 ans ou invalides à 80 % : seule la recherche volontaire.", "aff": "3"},
  {"num": "L85-4", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Loi Badinter", "texte": "La faute commise par le conducteur du véhicule terrestre à moteur a pour effet de limiter ou d'exclure l'indemnisation des dommages qu'il a subis.", "chapitres": [16], "retenir": "La faute du conducteur limite ou exclut l'indemnisation de ses dommages.", "aff": "4"},
  {"num": "L85-5", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Loi Badinter", "texte": "La faute, commise par la victime a pour effet de limiter ou d'exclure l'indemnisation des dommages aux biens qu'elle a subis. Toutefois, les fournitures et appareils délivrés sur prescription médicale donnent lieu à indemnisation selon les règles applicables à la réparation des atteintes à la personne.\n\nLorsque le conducteur d'un véhicule terrestre à moteur n'en est pas le propriétaire, la faute de ce conducteur peut être opposée au propriétaire pour l'indemnisation des dommages causés à son véhicule. Le propriétaire dispose d'un recours contre le conducteur.", "chapitres": [16], "retenir": "Dommages aux biens : toute faute de la victime est opposable ; appareils sur prescription médicale traités comme atteintes à la personne ; faute du conducteur opposable au propriétaire du véhicule.", "aff": "5"},
  {"num": "L85-6", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Loi Badinter", "texte": "Le préjudice subi par un tiers du fait des dommages causés à la victime directe d'un accident de la circulation est réparé en tenant compte des limitations ou exclusions applicables à l'indemnisation de ces dommages.", "chapitres": [16], "retenir": "Victimes par ricochet : mêmes limitations ou exclusions que la victime directe.", "aff": "6"},
  {"num": "1245", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Le producteur est responsable du dommage causé par un défaut de son produit, qu'il soit ou non lié par un contrat avec la victime.", "chapitres": [16], "retenir": "Le producteur est responsable du dommage causé par un défaut de son produit, contractant ou non de la victime."},
  {"num": "1245-1", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Les dispositions du présent chapitre s'appliquent à la réparation du dommage qui résulte d'une atteinte à la personne.\n\nElles s'appliquent également à la réparation du dommage supérieur à un montant déterminé par décret, qui résulte d'une atteinte à un bien autre que le produit défectueux lui-même.", "chapitres": [16], "retenir": "Dommages réparables : atteinte à la personne ; atteinte à un autre bien que le produit, au-delà d'un seuil fixé par décret (500 euros)."},
  {"num": "1245-2", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Est un produit tout bien meuble, même s'il est incorporé dans un immeuble, y compris les produits du sol, de l'élevage, de la chasse et de la pêche. L'électricité est considérée comme un produit.", "chapitres": [16], "retenir": "Produit : tout bien meuble, même incorporé dans un immeuble ; électricité."},
  {"num": "1245-3", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Un produit est défectueux au sens du présent chapitre lorsqu'il n'offre pas la sécurité à laquelle on peut légitimement s'attendre.\n\nDans l'appréciation de la sécurité à laquelle on peut légitimement s'attendre, il doit être tenu compte de toutes les circonstances et notamment de la présentation du produit, de l'usage qui peut en être raisonnablement attendu et du moment de sa mise en circulation.\n\nUn produit ne peut être considéré comme défectueux par le seul fait qu'un autre, plus perfectionné, a été mis postérieurement en circulation.", "chapitres": [16], "retenir": "Défaut : absence de la sécurité à laquelle on peut légitimement s'attendre ; présentation, usage attendu, moment de la mise en circulation."},
  {"num": "1245-4", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Un produit est mis en circulation lorsque le producteur s'en est dessaisi volontairement.\n\nUn produit ne fait l'objet que d'une seule mise en circulation.", "chapitres": [16], "retenir": "Mise en circulation : dessaisissement volontaire ; une seule mise en circulation."},
  {"num": "1245-5", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Est producteur, lorsqu'il agit à titre professionnel, le fabricant d'un produit fini, le producteur d'une matière première, le fabricant d'une partie composante.\n\nEst assimilée à un producteur pour l'application du présent chapitre toute personne agissant à titre professionnel :\n\n1° Qui se présente comme producteur en apposant sur le produit son nom, sa marque ou un autre signe distinctif ;\n\n2° Qui importe un produit dans la Communauté européenne en vue d'une vente, d'une location, avec ou sans promesse de vente, ou de toute autre forme de distribution.\n\nNe sont pas considérées comme producteurs, au sens du présent chapitre, les personnes dont la responsabilité peut être recherchée sur le fondement des articles 1792 à 1792-6 et 1646-1.", "chapitres": [16], "retenir": "Producteurs et assimilés (marque, importateur) ; les constructeurs n'en sont pas."},
  {"num": "1245-6", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Si le producteur ne peut être identifié, le vendeur, le loueur, à l'exception du crédit-bailleur ou du loueur assimilable au crédit-bailleur, ou tout autre fournisseur professionnel, est responsable du défaut de sécurité du produit, dans les mêmes conditions que le producteur, à moins qu'il ne désigne son propre fournisseur ou le producteur, dans un délai de trois mois à compter de la date à laquelle la demande de la victime lui a été notifiée.\n\nLe recours du fournisseur contre le producteur obéit aux mêmes règles que la demande émanant de la victime directe du défaut. Toutefois, il doit agir dans l'année suivant la date de sa citation en justice.", "chapitres": [16], "retenir": "Fournisseur responsable seulement si le producteur n'est pas identifié, sauf désignation dans les trois mois."},
  {"num": "1245-7", "code": "C. civ.", "theme": "Produits défectueux", "texte": "En cas de dommage causé par le défaut d'un produit incorporé dans un autre, le producteur de la partie composante et celui qui a réalisé l'incorporation sont solidairement responsables.", "chapitres": [16], "retenir": "Produit incorporé : producteur de la composante et incorporateur solidairement responsables."},
  {"num": "1245-8", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Le demandeur doit prouver le dommage, le défaut et le lien de causalité entre le défaut et le dommage.", "chapitres": [16], "retenir": "Le demandeur prouve le dommage, le défaut et le lien de causalité."},
  {"num": "1245-9", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Le producteur peut être responsable du défaut alors même que le produit a été fabriqué dans le respect des règles de l'art ou de normes existantes ou qu'il a fait l'objet d'une autorisation administrative.", "chapitres": [16], "retenir": "Respect des règles de l'art, des normes ou d'une autorisation administrative : pas d'exonération."},
  {"num": "1245-10", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Le producteur est responsable de plein droit à moins qu'il ne prouve :\n\n1° Qu'il n'avait pas mis le produit en circulation ;\n\n2° Que, compte tenu des circonstances, il y a lieu d'estimer que le défaut ayant causé le dommage n'existait pas au moment où le produit a été mis en circulation par lui ou que ce défaut est né postérieurement ;\n\n3° Que le produit n'a pas été destiné à la vente ou à toute autre forme de distribution ;\n\n4° Que l'état des connaissances scientifiques et techniques, au moment où il a mis le produit en circulation, n'a pas permis de déceler l'existence du défaut ;\n\n5° Ou que le défaut est dû à la conformité du produit avec des règles impératives d'ordre législatif ou réglementaire.\n\nLe producteur de la partie composante n'est pas non plus responsable s'il établit que le défaut est imputable à la conception du produit dans lequel cette partie a été incorporée ou aux instructions données par le producteur de ce produit.", "chapitres": [16], "retenir": "Causes d'exonération limitatives, dont le risque de développement (4°)."},
  {"num": "1245-11", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Le producteur ne peut invoquer la cause d'exonération prévue au 4° de l'article 1245-10 lorsque le dommage a été causé par un élément du corps humain ou par les produits issus de celui-ci.", "chapitres": [16], "retenir": "Pas de risque de développement pour les éléments et produits du corps humain."},
  {"num": "1245-12", "code": "C. civ.", "theme": "Produits défectueux", "texte": "La responsabilité du producteur peut être réduite ou supprimée, compte tenu de toutes les circonstances, lorsque le dommage est causé conjointement par un défaut du produit et par la faute de la victime ou d'une personne dont la victime est responsable.", "chapitres": [16], "retenir": "Faute de la victime : réduction ou suppression de la responsabilité."},
  {"num": "1245-13", "code": "C. civ.", "theme": "Produits défectueux", "texte": "La responsabilité du producteur envers la victime n'est pas réduite par le fait d'un tiers ayant concouru à la réalisation du dommage.", "chapitres": [16], "retenir": "Le fait d'un tiers ne réduit pas la responsabilité du producteur envers la victime."},
  {"num": "1245-14", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Les clauses qui visent à écarter ou à limiter la responsabilité du fait des produits défectueux sont interdites et réputées non écrites.\n\nToutefois, pour les dommages causés aux biens qui ne sont pas utilisés par la victime principalement pour son usage ou sa consommation privée, les clauses stipulées entre professionnels sont valables.", "chapitres": [16], "retenir": "Clauses limitatives ou exonératoires réputées non écrites, sauf entre professionnels pour les biens à usage professionnel."},
  {"num": "1245-15", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Sauf faute du producteur, la responsabilité de celui-ci, fondée sur les dispositions du présent chapitre, est éteinte dix ans après la mise en circulation du produit même qui a causé le dommage à moins que, durant cette période, la victime n'ait engagé une action en justice.", "chapitres": [16], "retenir": "Extinction dix ans après la mise en circulation, sauf faute du producteur ou action engagée."},
  {"num": "1245-16", "code": "C. civ.", "theme": "Produits défectueux", "texte": "L'action en réparation fondée sur les dispositions du présent chapitre se prescrit dans un délai de trois ans à compter de la date à laquelle le demandeur a eu ou aurait dû avoir connaissance du dommage, du défaut et de l'identité du producteur.", "chapitres": [16], "retenir": "Prescription de trois ans à compter de la connaissance du dommage, du défaut et du producteur."},
  {"num": "1245-17", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Les dispositions du présent chapitre ne portent pas atteinte aux droits dont la victime d'un dommage peut se prévaloir au titre du droit de la responsabilité contractuelle ou extracontractuelle ou au titre d'un régime spécial de responsabilité.\n\nLe producteur reste responsable des conséquences de sa faute et de celle des personnes dont il répond.", "chapitres": [16], "retenir": "Les autres régimes restent ouverts s'ils reposent sur un fondement différent du défaut ; le producteur répond de sa faute."},
  {"num": "1253", "code": "C. civ.", "theme": "Troubles de voisinage", "texte": "Le propriétaire, le locataire, l'occupant sans titre, le bénéficiaire d'un titre ayant pour objet principal de l'autoriser à occuper ou à exploiter un fonds, le maître d'ouvrage ou celui qui en exerce les pouvoirs qui est à l'origine d'un trouble excédant les inconvénients normaux de voisinage est responsable de plein droit du dommage qui en résulte.\n\nSous réserve de l'article L. 311-1-1 du code rural et de la pêche maritime, cette responsabilité n'est pas engagée lorsque le trouble anormal provient d'activités, quelle qu'en soit la nature, existant antérieurement à l'acte transférant la propriété ou octroyant la jouissance du bien ou, à défaut d'acte, à la date d'entrée en possession du bien par la personne lésée. Ces activités doivent être conformes aux lois et aux règlements et s'être poursuivies dans les mêmes conditions ou dans des conditions nouvelles qui ne sont pas à l'origine d'une aggravation du trouble anormal.", "chapitres": [16], "retenir": "Responsabilité de plein droit pour trouble anormal de voisinage ; exception de préoccupation."},
  {"num": "1240", "code": "C. civ.", "theme": "Droit commun", "texte": "Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", "chapitres": [16], "retenir": "Fondement de l'action du conducteur contre un piéton ou un cycliste, et de la faute distincte du producteur."},
  {"num": "1242", "code": "C. civ.", "theme": "Droit commun", "texte": "On est responsable non seulement du dommage que l'on cause par son propre fait, mais encore de celui qui est causé par le fait des personnes dont on doit répondre, ou des choses que l'on a sous sa garde.\n\nToutefois, celui qui détient, à un titre quelconque, tout ou partie de l'immeuble ou des biens mobiliers dans lesquels un incendie a pris naissance ne sera responsable, vis-à-vis des tiers, des dommages causés par cet incendie que s'il est prouvé qu'il doit être attribué à sa faute ou à la faute des personnes dont il est responsable.\n\nCette disposition ne s'applique pas aux rapports entre propriétaires et locataires, qui demeurent régis par les articles 1733 et 1734 du code civil.\n\nLes parents, en tant qu'ils exercent l'autorité parentale, sont, de plein droit, solidairement responsables du dommage causé par leurs enfants mineurs, sauf lorsque que ceux-ci ont été confiés à un tiers par une décision administrative ou judiciaire.\n\nLes maîtres et les commettants, du dommage causé par leurs domestiques et préposés dans les fonctions auxquelles ils les ont employés ;\n\nLes instituteurs et les artisans, du dommage causé par leurs élèves et apprentis pendant le temps qu'ils sont sous leur surveillance.\n\nLa responsabilité ci-dessus a lieu, à moins que les parents et les artisans ne prouvent qu'ils n'ont pu empêcher le fait qui donne lieu à cette responsabilité.\n\nEn ce qui concerne les instituteurs, les fautes, imprudences ou négligences invoquées contre eux comme ayant causé le fait dommageable, devront être prouvées, conformément au droit commun, par le demandeur, à l'instance.", "chapitres": [16], "retenir": "La garde du VTAM s'apprécie comme pour la responsabilité du fait des choses."},
  {"num": "2226", "code": "C. civ.", "theme": "Prescription", "texte": "L'action en responsabilité née à raison d'un événement ayant entraîné un dommage corporel, engagée par la victime directe ou indirecte des préjudices qui en résultent, se prescrit par dix ans à compter de la date de la consolidation du dommage initial ou aggravé.\n\nToutefois, en cas de préjudice causé par des tortures ou des actes de barbarie, ou par des violences ou des agressions sexuelles commises contre un mineur, l'action en responsabilité civile est prescrite par vingt ans.", "chapitres": [16], "retenir": "Dommage corporel : dix ans à compter de la consolidation, utile quand l'action fondée sur l'article 1245 est prescrite."}
);
