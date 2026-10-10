/* Chapitre 13 — Les faits générateurs de responsabilité délictuelle : la faute
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 13,
  intro: "La responsabilité pour faute est le **droit commun** de la responsabilité délictuelle : quand aucun régime spécial ne s'applique, la victime peut toujours agir sur le fondement de [[1240]] (faute volontaire, le **délit**) et de [[1241]] (imprudence ou négligence, le **quasi-délit**). C'est une responsabilité pour **faute prouvée** : la victime établit la faute, le dommage et le lien de causalité. Deux questions structurent le chapitre : **qu'est-ce qu'une faute ?** (un élément objectif ; l'élément subjectif a été abandonné) et **comment le responsable peut-il s'exonérer ?** (cause étrangère, faits justificatifs).",
  sections: [
    {
      titre: "La responsabilité pour faute, droit commun",
      contenu: [
        { p: "« Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer » ([[1240]]). On parle de **responsabilité subjective**, par opposition aux responsabilités objectives (sans faute) du fait des choses ou d'autrui." },
        { liste: [
          "**Valeur constitutionnelle** : le principe selon lequel tout fait fautif oblige son auteur à réparer a valeur constitutionnelle (Cons. const., 22 oct. 1982, n° 82-144 DC) et découle de l'art. 4 de la Déclaration de 1789 (Cons. const., 9 nov. 1999, n° 99-419 DC). Le législateur peut l'aménager, pas le supprimer.",
          "**Pas de définition légale** : le Code distingue faute volontaire ([[1240]]) et faute d'imprudence ([[1241]]), mais la jurisprudence les traite de façon **unitaire**. Définition classique de Planiol : la faute est la **violation d'une obligation préexistante**. C'est un **standard**, adaptable à toutes les situations.",
          "**Contrôle de la Cour de cassation** : la qualification de faute est une question de droit, que la Cour contrôle de près."
        ] },
        { schema: { type: "arbre", titre: "La faute délictuelle en droit positif", racine: { t: "Faute ([[1240]], [[1241]])", d: "à prouver par la victime", enfants: [
          { t: "Élément objectif (seul exigé)", d: "violation d'une norme de conduite", enfants: [
            { t: "Faute de commission", d: "acte positif contraire à une règle écrite, coutumière ou sportive, ou au comportement d'une personne raisonnable" },
            { t: "Faute d'abstention", d: "omission alors qu'une obligation d'agir existait (Branly, 1951)" },
            { t: "Appréciation", d: "*in abstracto* ; indifférence à la gravité et à l'intention de nuire" }
          ] },
          { t: "Élément subjectif (abandonné)", d: "discernement de l'auteur : indifférent", enfants: [
            { t: "Trouble mental", d: "[[414-3]] (loi du 3 janv. 1968)" },
            { t: "Infans", d: "Ass. plén., 9 mai 1984, Derguini et Lemaire" }
          ] }
        ] } } }
      ]
    },
    {
      titre: "L'élément objectif : la violation d'une norme de conduite",
      contenu: [
        { h: "La faute de commission" },
        { def: { terme: "Faute de commission", texte: "**acte positif** qui méconnaît une règle de conduite imposée par une obligation préexistante." } },
        { liste: [
          "**Règle de droit écrit** : violation d'une loi, d'un règlement, d'un arrêté (Code de la route, droit du travail, de la construction…).",
          "**Règle coutumière ou privée** : l'exemple type est le **sport**. Le coup porté **dans le respect des règles du jeu** n'est pas fautif ; le coup porté **en violation des règles** l'est. La norme violée est ici fixée par les fédérations, mais le juge civil **n'est pas lié** par la décision de l'arbitre (Civ. 2e, 10 juin 2004).",
          "**Devoir général de prudence** : à défaut de texte, le juge peut déduire la faute de tout comportement qu'une personne raisonnable et diligente n'aurait pas eu."
        ] },
        { h: "La faute d'abstention" },
        { p: "La doctrine classique craignait qu'une responsabilité pour simple omission ne menace la liberté individuelle. La Cour de cassation l'a pourtant admise largement dans l'**arrêt Branly** (Civ., 27 févr. 1951) : un historien de la TSF avait passé sous silence le rôle d'Édouard Branly. La faute « peut consister aussi bien dans une abstention que dans un acte positif » ; l'abstention, **même sans intention de nuire**, engage son auteur lorsque le fait omis devait être accompli en vertu d'une obligation **légale, réglementaire ou conventionnelle**, ou **dans l'ordre professionnel** (pour un historien, l'objectivité)." },
        { schema: { type: "tableau", titre: "Les deux apports de l'arrêt Branly", colonnes: ["Condition", "Contenu", "Portée"], lignes: [
          ["Intention de nuire", "**Inutile** : l'abstention peut être volontaire ou non", "Unifie le régime de l'abstention et de la commission ([[1240]] et [[1241]])"],
          ["Obligation d'agir préexistante", "**Nécessaire** : loi, règlement, contrat, déontologie, usage professionnel", "Appréciée largement : même les règles normales de la vie en société peuvent l'imposer, sans texte spécial"]
        ] } },
        { h: "L'appréciation de la faute" },
        { def: { terme: "Appréciation *in abstracto*", texte: "le juge compare le comportement du défendeur à celui d'une **personne raisonnable** placée dans les mêmes circonstances (l'expression a remplacé le « bon père de famille » dans le Code civil en 2014). Il ne tient pas compte des défauts **personnels** de l'auteur (maladresse, étourderie) ; il tient compte des **circonstances externes** : profession et spécialité (un chirurgien est comparé à un chirurgien de la même spécialité), urgence, difficultés particulières de l'acte." } },
        { liste: [
          "**Gravité indifférente** : la faute la plus légère suffit (*culpa levissima*) ; la victime n'a pas à prouver une faute grave.",
          "**Intention de nuire indifférente** : [[1240]] suppose un fait **volontaire**, pas une volonté de nuire. L'intention facilite seulement la preuve ; la recherche délibérée d'un gain peut, en outre, exposer un professionnel à la sanction civile de la faute lucrative ([[1254]])."
        ] },
        { attention: "Pour aller plus loin (points non traités par le manuel dans ce chapitre). **L'abus de droit** est une application de la faute : exercer un droit dans l'intention de nuire ou sans intérêt légitime (Req., 3 août 1915, Clément-Bayard : pieux hérissés de piques contre les dirigeables du voisin). En revanche, les **troubles anormaux de voisinage** relèvent d'une responsabilité **sans faute** : codifiée par la loi du 15 avril 2024, elle pèse **de plein droit** sur le propriétaire, le locataire, l'occupant ou le maître d'ouvrage à l'origine d'un trouble excédant les inconvénients normaux de voisinage, sauf antériorité d'une activité conforme aux lois et règlements et non aggravée ([[1253]]). Ne jamais écrire qu'il faut prouver une faute du voisin." }
      ]
    },
    {
      titre: "L'abandon de l'élément subjectif : la faute objective",
      contenu: [
        { p: "Traditionnellement, la faute devait être **imputable** : l'auteur devait avoir conscience de la portée de ses actes. Les personnes privées de discernement (aliéné, jeune enfant) ne pouvaient donc pas commettre de faute. Solution cohérente avec une responsabilité morale, mais injuste pour la victime. Le droit positif a abandonné cet élément en deux temps." },
        { schema: { type: "frise", titre: "De la faute subjective à la faute objective", evenements: [
          { date: "1804", t: "Faute subjective", d: "pas de faute sans discernement" },
          { date: "3 janv. 1968", t: "Loi sur les incapables majeurs", d: "art. 489-2 : l'auteur sous l'empire d'un trouble mental est obligé à réparation" },
          { date: "9 mai 1984", t: "Ass. plén., Derguini et Lemaire", d: "la faute de l'*infans* peut être retenue sans vérifier son discernement" },
          { date: "28 févr. 1996", t: "Civ. 2e", d: "la faute de l'enfant s'apprécie sans égard à son jeune âge" },
          { date: "5 mars 2007", t: "Réforme des majeurs protégés", d: "l'art. 489-2 devient l'art. [[414-3]], inchangé sur le fond" }
        ] } },
        { h: "Les personnes atteintes d'un trouble mental ([[414-3]])" },
        { p: "« Celui qui a causé un dommage à autrui alors qu'il était sous l'empire d'un trouble mental n'en est pas moins obligé à réparation » ([[414-3]])." },
        { liste: [
          "**Notion de trouble mental, interprétée strictement** : le texte ne couvre pas une perte de conscience sans lien avec un trouble mental, comme un **malaise cardiaque** (Civ. 2e, 4 févr. 1981).",
          "**Domaine personnel** : toute personne, **majeure ou mineure**.",
          "**Pas un régime autonome** : le texte neutralise l'état mental dans **tous** les cas de responsabilité (faute, fait des choses, fait d'autrui) (Civ. 2e, 4 mai 1977). Appliqué à [[1240]], il réduit la faute à la seule violation d'une norme de conduite."
        ] },
        { attention: "Ne confondez pas avec le droit pénal : l'irresponsabilité pénale pour abolition du discernement (C. pén., art. 122-1) n'empêche pas la condamnation civile à réparer." },
        { h: "L'enfant privé de discernement (*infans*)" },
        { p: "Le mineur doué de discernement a toujours pu être responsable de sa faute. Pour l'*infans*, la jurisprudence refusait toute faute, faute d'imputabilité. Revirement par l'**Assemblée plénière le 9 mai 1984** : dans **Derguini** (fillette de 5 ans et 9 mois qui traverse puis rebrousse chemin devant une voiture) et **Lemaire** (garçon de 13 ans électrocuté en changeant une ampoule sans couper le disjoncteur), la cour d'appel « n'était pas tenue de vérifier si le mineur était capable de discerner les conséquences de son acte » pour retenir sa faute. Le même jour, l'arrêt **Gabillet** a admis qu'un jeune enfant puisse être **gardien** d'une chose, et l'arrêt **Fullenwarth** a assoupli la responsabilité des parents (v. chapitres 14 et 15)." },
        { schema: { type: "tableau", titre: "La faute objective de l'infans : un résultat paradoxal", colonnes: ["Hypothèse", "Conséquence", "Appréciation"], lignes: [
          ["**Infans auteur** du dommage", "La victime peut agir contre l'enfant lui-même sur [[1240]] et [[1241]]", "Intérêt limité : l'enfant est souvent insolvable ; mieux vaut agir contre les **parents**, responsables de plein droit ([[1242]], al. 4)"],
          ["**Infans victime**", "Sa faute lui est **opposée** pour **réduire** son indemnisation (Derguini, Lemaire ; Civ. 2e, 28 févr. 1996)", "Contraire à l'objectif d'indemnisation qui justifiait la faute objective ; critiqué"]
        ] } },
        { liste: [
          "**Mode d'appréciation** : la deuxième chambre civile compare l'enfant à une **personne raisonnable**, et non à un enfant du même âge : elle a cassé un arrêt qui écartait la faute parce que le comportement était normal pour cet âge (Civ. 2e, 28 févr. 1996). Une partie de la doctrine préfère un modèle d'enfant d'âge équivalent ; la jurisprudence ne l'a pas suivie, même si certains arrêts de la 1re chambre civile ont pu sembler aller en ce sens (Civ. 1re, 6 mars 1996).",
          "**Réformes envisagées** : les avant-projets Catala et Terré, le projet de 2017 et la proposition sénatoriale de 2020 (art. 1255 proposé) écarteraient la faute d'une victime privée de discernement. Non adoptés.",
          "**Correctif légal ponctuel** : en matière d'accidents de la circulation, les victimes non conductrices de moins de 16 ans sont indemnisées de leurs dommages corporels « dans tous les cas », sauf si elles ont volontairement recherché le dommage ([[L85-3]]). Les faits de l'arrêt Derguini relèveraient aujourd'hui de cette loi."
        ] }
      ]
    },
    {
      titre: "L'exonération par la cause étrangère",
      contenu: [
        { p: "La faute établie, le défendeur a trois défenses : contester la faute (la victime est alors déboutée), invoquer une **cause étrangère** qui rompt le lien de causalité, ou un **fait justificatif** qui ôte au comportement son caractère illicite." },
        { h: "La force majeure" },
        { def: { terme: "Force majeure", texte: "événement **irrésistible**, **imprévisible** et **extérieur** au responsable, qui l'a contraint à commettre le fait dommageable. Elle exonère **totalement**." } },
        { liste: [
          "Après des divergences (la 1re chambre civile mettait l'accent sur l'irrésistibilité, la 2e exigeait aussi l'imprévisibilité), l'**Assemblée plénière** a unifié la notion par deux arrêts du **14 avril 2006** : irrésistibilité **et** imprévisibilité sont requises, quelle que soit la nature de la responsabilité.",
          "L'**extériorité** a été rappelée par l'Assemblée plénière le 10 juillet 2020.",
          "**Date d'appréciation** : au jour du **fait dommageable** en matière délictuelle ; en matière contractuelle, l'imprévisibilité s'apprécie lors de la **conclusion du contrat** ([[1218]])."
        ] },
        { h: "Le fait d'un tiers ou de la victime" },
        { schema: { type: "tableau", titre: "Effets du fait d'un tiers ou de la victime", colonnes: ["", "Présente les caractères de la force majeure", "Ne les présente pas"], lignes: [
          ["**Fait d'un tiers**", "Exonération **totale** s'il présente les caractères de la force majeure, même non fautif", "**Aucune** exonération envers la victime : les coauteurs sont tenus ***in solidum*** ; la répartition se fait ensuite par recours entre eux"],
          ["**Fait de la victime**", "Exonération **totale**, même si le fait n'est pas fautif", "Exonération **partielle** seulement s'il est **fautif** : partage de responsabilité selon la gravité des fautes respectives"]
        ] } },
        { attention: "La victime **n'est pas tenue de limiter son préjudice dans l'intérêt du responsable** (Civ. 2e, 19 juin 2003, deux arrêts) : refuser des soins ou de relancer son commerce après le dommage n'est pas une faute qui réduit son indemnité. Le projet de 2017 et la proposition sénatoriale de 2020 voulaient revenir sur cette solution, sauf en cas de dommage corporel. Non adoptés." }
      ]
    },
    {
      titre: "L'exonération par les faits justificatifs",
      contenu: [
        { def: { terme: "Fait justificatif", texte: "circonstance matérielle ou juridique qui **neutralise l'illicéité** du comportement : il n'y a plus de faute. Notion venue du droit pénal, entendue **plus largement** en droit civil." } },
        { schema: { type: "tableau", titre: "Les faits justificatifs en responsabilité civile", colonnes: ["Fait justificatif", "Source", "Portée en droit civil"], lignes: [
          ["Ordre ou autorisation de la loi, commandement de l'autorité légitime", "C. pén., art. 122-4", "Exonère, comme en droit pénal"],
          ["Légitime défense", "C. pén., art. 122-5", "Exonère (riposte nécessaire et proportionnée)"],
          ["État de nécessité", "C. pén., art. 122-7", "Exonère"],
          ["**Acceptation des risques**", "Jurisprudence civile", "Exonère dans le domaine sportif (compétition, risques normaux), **pas** en matière de fait des choses"],
          ["**Consentement de la victime**", "Adage *volenti non fit injuria*", "Exonère pour les atteintes aux **biens**, **jamais** pour les atteintes au **corps**"]
        ] } },
        { h: "L'acceptation des risques" },
        { p: "Admise d'abord pour le transport bénévole, elle joue aujourd'hui surtout en **matière sportive**. Son champ a été fortement réduit." },
        { liste: [
          "**Domaine** : depuis Civ. 2e, 4 nov. 2010, elle ne peut plus être opposée à la victime qui agit contre le **gardien d'une chose** sur l'art. 1384, al. 1er anc. ([[1242]], al. 1er). Elle reste invocable en matière de **faute**. (Le législateur a ensuite exclu, entre pratiquants, la responsabilité du fait des choses pour les seuls dommages **matériels** survenus lors d'une compétition ou de son entraînement, sur un lieu réservé à la pratique : C. sport, art. L. 321-3-1, loi du 12 mars 2012.)",
          "**Acceptation libre et éclairée** d'un danger particulier : la jurisprudence la limite désormais à la **compétition sportive** (pas au jeu improvisé ou à l'entraînement amical).",
          "**Seuls les risques normaux** de l'activité peuvent être acceptés : traditionnellement, ceux qui résultent d'une pratique **conforme aux règles** ; certains arrêts jugent aussi la nature du risque (un risque de **mort** ne peut pas être accepté).",
          "**Effet** : l'illicéité est neutralisée, la responsabilité n'est pas engagée."
        ] },
        { h: "Le consentement de la victime" },
        { liste: [
          "**Atteinte aux biens** : celui qui a consenti à la destruction de son bien ne peut plus agir, à condition d'avoir eu la **capacité** et le **pouvoir** d'en disposer et d'avoir donné un consentement **libre et éclairé**.",
          "**Atteinte à la personne** : pas d'effet justificatif, car le corps humain est **indisponible** (art. 16-1) et le droit à réparation du dommage corporel est d'ordre public. Le consentement pourra seulement être analysé comme une **faute de la victime** réduisant son indemnité."
        ] },
        { h: "Les clauses exonératoires ou limitatives de responsabilité" },
        { p: "Rares en matière délictuelle (pas de relation préalable), elles existent : le panneau « la direction décline toute responsabilité » à l'entrée d'un magasin. Principe : **nullité**, car [[1240]] et [[1241]] sont **d'ordre public** et ne peuvent être écartés par avance (Civ. 2e, 17 févr. 1955 ; Civ. 1re, 5 juill. 2017, n° 16-13.407, à propos d'une clause de garantie invoquée contre une action en dommages-intérêts pour réticence dolosive, exercée sans demande d'annulation du contrat : la faute a été commise avant la formation du contrat, ce qui explique le terrain délictuel malgré l'existence d'un contrat entre les parties)." },
        { liste: [
          "**Portée** : la motivation (caractère d'ordre public de la responsabilité **pour faute**) laisse penser que la clause pourrait être valable pour une responsabilité délictuelle **sans faute** (fait des choses, fait d'autrui). Question non tranchée.",
          "**Brèche** : le tiers qui invoque un manquement contractuel peut se voir opposer les **conditions et limites** du contrat (Com., 3 juill. 2024, n° 21-14.947). Une clause limitative peut donc jouer contre une victime qui agit sur le terrain délictuel, même en cas de faute ; les 1re et 2e chambres civiles ne se sont pas encore prononcées.",
          "**Réforme** : le projet de 2017 (art. 1281) et la proposition sénatoriale de 2020 (art. 1284) admettraient ces clauses en principe en matière extracontractuelle, avec deux exceptions : le **dommage corporel** et la **responsabilité pour faute**, ce qui conforterait la solution de 2017. Non adoptés."
        ] }
      ]
    }
  ],
  retenir: [
    "Faute prouvée ([[1240]], [[1241]]) : droit commun, principe à valeur constitutionnelle (Cons. const., 22 oct. 1982 ; 9 nov. 1999, art. 4 DDHC).",
    "Faute = violation d'une norme de conduite, par action ou par abstention (Branly, 1951 : obligation d'agir, sans intention de nuire).",
    "Appréciation *in abstracto* (personne raisonnable, circonstances externes) ; faute légère et non intentionnelle suffisent.",
    "Faute objective : trouble mental ([[414-3]], loi de 1968) ; *infans* (Ass. plén., 9 mai 1984, Derguini et Lemaire), apprécié comme un adulte raisonnable (Civ. 2e, 28 févr. 1996).",
    "Force majeure : irrésistible, imprévisible, extérieure (Ass. plén., 14 avr. 2006), appréciée au jour du fait dommageable.",
    "Fait du tiers non irrésistible : *in solidum* ; faute de la victime non irrésistible : partage ; pas d'obligation de minimiser (Civ. 2e, 19 juin 2003).",
    "Faits justificatifs : ceux du Code pénal, plus l'acceptation des risques (compétition, risques normaux, jamais contre le gardien : Civ. 2e, 4 nov. 2010) et le consentement (biens seulement).",
    "Clauses exonératoires nulles en responsabilité délictuelle pour faute (Civ. 1re, 5 juill. 2017) ; nuance : Com., 3 juill. 2024."
  ],
  articles: ["414-3", "1218", "1240", "1241", "1242", "1253", "1254", "L85-3"],
  regimes: ["faute-1240", "faute-sportive"],
  cas: ["ch13-tournoi-handball"],
  quiz: [
    { q: "Dans la responsabilité pour faute de [[1240]] :", choix: ["La faute est présumée", "La victime doit prouver la faute, le dommage et le lien de causalité", "Le responsable ne s'exonère que par la force majeure"], bonne: 1, expl: "Responsabilité pour faute prouvée ; le défendeur peut contester la faute ou invoquer une cause étrangère ou un fait justificatif." },
    { q: "Selon l'arrêt Branly (1951), l'abstention est fautive :", choix: ["Seulement si elle est dictée par l'intention de nuire", "Seulement si un texte pénal impose d'agir", "Lorsqu'une obligation d'agir existait, même sans intention de nuire"], bonne: 2, expl: "Obligation légale, réglementaire, conventionnelle ou professionnelle ; la jurisprudence l'admet largement." },
    { q: "Un conducteur maladroit invoque sa maladresse naturelle pour échapper à la faute. Le juge :", choix: ["Compare son comportement à celui d'une personne raisonnable", "Compare son comportement à celui d'un conducteur aussi maladroit", "Écarte la faute faute d'intention"], bonne: 0, expl: "Appréciation *in abstracto* : les particularités personnelles ne sont pas prises en compte, seules les circonstances externes le sont." },
    { q: "Un majeur, en pleine crise délirante, brise la vitrine d'un commerçant. Il :", choix: ["Doit réparation ([[414-3]])", "Est civilement irresponsable", "Ne répond que si un tuteur a été désigné"], bonne: 0, expl: "Loi du 3 janvier 1968, art. 489-2 devenu [[414-3]] ; peu importe l'irresponsabilité pénale." },
    { q: "Un automobiliste perd connaissance à la suite d'un malaise cardiaque et blesse un piéton. L'art. [[414-3]] :", choix: ["S'applique, comme à toute perte de conscience", "Ne s'applique pas : un malaise n'est pas un trouble mental", "S'applique seulement aux mineurs"], bonne: 1, expl: "Civ. 2e, 4 févr. 1981 : interprétation stricte. (La victime d'un accident de la circulation relèverait aujourd'hui de la loi Badinter.)" },
    { q: "Les arrêts Derguini et Lemaire (Ass. plén., 9 mai 1984) ont jugé que :", choix: ["Un enfant sans discernement ne peut commettre de faute", "Seuls les parents répondent de la faute de l'enfant", "La faute d'un jeune enfant victime peut lui être opposée sans vérifier son discernement"], bonne: 2, expl: "Abandon de l'imputabilité : faute objective." },
    { q: "La faute d'un enfant de six ans s'apprécie, selon la 2e chambre civile :", choix: ["Par comparaison avec une personne raisonnable", "Par comparaison avec un enfant du même âge", "*In concreto*, selon sa maturité"], bonne: 0, expl: "Civ. 2e, 28 févr. 1996 : cassation d'un arrêt qui excusait l'enfant en raison de son jeune âge." },
    { q: "Deux agresseurs frappent ensemble une victime. L'un invoque la faute de l'autre pour s'exonérer :", choix: ["Il est exonéré pour moitié", "Il reste tenu in solidum envers la victime", "Il est exonéré totalement"], bonne: 1, expl: "Le fait d'un tiers sans les caractères de la force majeure n'exonère pas : obligation *in solidum*, recours ensuite entre coauteurs." },
    { q: "L'acceptation des risques peut être opposée :", choix: ["Au joueur blessé en compétition par un coup régulier, sur le fondement de la faute", "À la victime qui agit contre le gardien de la chose instrument du dommage", "À toute victime d'un jeu improvisé entre amis"], bonne: 0, expl: "Domaine : faute, compétition, risques normaux. Exclue contre le gardien d'une chose depuis Civ. 2e, 4 nov. 2010." },
    { q: "Un panneau à l'entrée d'un parc de loisirs indique : « La direction décline toute responsabilité en cas d'accident. » Face à une action fondée sur [[1240]], ce panneau :", choix: ["Exonère l'exploitant si le visiteur l'a lu", "Limite l'indemnisation de moitié", "Est sans effet : clause nulle en responsabilité délictuelle pour faute"], bonne: 2, expl: "[[1240]] et [[1241]] sont d'ordre public (Civ. 2e, 17 févr. 1955 ; Civ. 1re, 5 juill. 2017)." }
  ]
});

OBL.regimes.push(
  {
    id: "faute-1240",
    chapitre: "La faute",
    titre: "Responsabilité du fait personnel (art. 1240 et 1241)",
    fondement: ["1240", "1241", "414-3"],
    resume: "Droit commun de la responsabilité délictuelle : la victime prouve une faute, un dommage et un lien de causalité ; le défendeur s'exonère par la cause étrangère ou un fait justificatif.",
    conditions: [
      { nom: "Un fait de l'homme", question: "Le défendeur a-t-il agi (commission) ou omis d'agir (abstention) ?", detail: "L'abstention n'est fautive que s'il existait une obligation d'agir (loi, règlement, contrat, ordre professionnel, règles normales de la vie sociale), sans qu'une intention de nuire soit nécessaire (Civ., 27 févr. 1951, Branly).", piege: "Écrire qu'une omission ne peut jamais être fautive." },
      { nom: "Le caractère fautif", question: "Une personne raisonnable, placée dans les mêmes circonstances externes, aurait-elle agi autrement ?", detail: "Violation d'une règle écrite, coutumière ou sportive, ou du devoir général de prudence. Appréciation *in abstracto* ; la faute la plus légère suffit ; délit ([[1240]]) ou quasi-délit ([[1241]]).", preuve: "Charge de la victime, par tout moyen (fait juridique).", piege: "Exiger une intention de nuire ou une faute grave." },
      { nom: "Le discernement : indifférent", question: "L'auteur était-il un jeune enfant ou atteint d'un trouble mental ?", detail: "Aucune incidence : [[414-3]] pour le trouble mental (hors simple malaise : Civ. 2e, 4 févr. 1981) ; Ass. plén., 9 mai 1984 pour l'*infans*. Penser à l'action contre les parents ([[1242]], al. 4), plus intéressante.", piege: "Conclure à l'irresponsabilité de l'auteur privé de discernement." },
      { nom: "Un dommage et un lien de causalité", question: "La victime a-t-elle subi un préjudice réparable causé par cette faute ?", detail: "Conditions communes à toutes les responsabilités (v. chapitre 17)." }
    ],
    exonerations: [
      { nom: "Force majeure", question: "L'événement était-il irrésistible, imprévisible (au jour du fait dommageable) et extérieur ?", detail: "Ass. plén., 14 avr. 2006 ; extériorité rappelée par l'Ass. plén. le 10 juill. 2020.", effet: "Exonération totale." },
      { nom: "Fait d'un tiers", question: "Un tiers a-t-il concouru au dommage ?", detail: "S'il présente les caractères de la force majeure, exonération totale ; sinon, aucun effet envers la victime.", effet: "Totale (force majeure) ou nulle : condamnation *in solidum* et recours contributif entre coauteurs." },
      { nom: "Faute de la victime", question: "La victime (même *infans*) a-t-elle commis une faute ayant concouru au dommage ?", detail: "Un fait non fautif n'exonère que s'il présente les caractères de la force majeure. Refuser de limiter son préjudice après coup n'est pas une faute (Civ. 2e, 19 juin 2003).", effet: "Totale (force majeure) ou partielle : partage selon la gravité des fautes." },
      { nom: "Fait justificatif pénal", question: "Ordre de la loi, commandement de l'autorité légitime, légitime défense, état de nécessité ?", detail: "C. pén., art. 122-4 s., transposés en droit civil.", effet: "Le comportement n'est plus fautif : pas de responsabilité." },
      { nom: "Consentement de la victime", question: "La victime a-t-elle valablement consenti à l'atteinte portée à son bien ?", detail: "Capacité, pouvoir de disposer, consentement libre et éclairé. Sans effet pour une atteinte au corps (art. 16-1).", effet: "Exonération pour le seul dommage aux biens." },
      { nom: "Clause exonératoire", question: "Le défendeur invoque-t-il une clause ou un avis déclinant sa responsabilité ?", detail: "Nulle : [[1240]] et [[1241]] sont d'ordre public (Civ. 2e, 17 févr. 1955 ; Civ. 1re, 5 juill. 2017). Réserve : limites contractuelles opposables au tiers qui invoque un manquement contractuel (Com., 3 juill. 2024).", effet: "Aucune exonération." }
    ],
    copie: [
      "Toujours vérifier d'abord la nature de la responsabilité (chapitre 12) : [[1240]] ne s'applique pas entre cocontractants pour l'inexécution du contrat.",
      "Syllogisme : fait → caractère fautif (norme violée + personne raisonnable) → dommage → causalité → exonérations.",
      "Si l'auteur est un enfant, traiter aussi, en ouverture, la responsabilité des parents ([[1242]], al. 4)."
    ]
  },
  {
    id: "faute-sportive",
    chapitre: "La faute",
    titre: "Dommage causé entre sportifs : faute et acceptation des risques",
    fondement: ["1240", "1242"],
    resume: "Déterminer si le sportif blessé par un autre peut obtenir réparation : faute caractérisée par la violation des règles du jeu, puis éventuelle acceptation des risques.",
    conditions: [
      { nom: "Le fondement", question: "La victime agit-elle sur la faute du joueur ([[1240]]) ou sur le fait d'une chose (ballon, crosse, [[1242]], al. 1er) ?", detail: "L'acceptation des risques ne peut pas être opposée sur le fondement du fait des choses (Civ. 2e, 4 nov. 2010), mais entre pratiquants, les dommages **matériels** causés par une chose lors d'une compétition ou de son entraînement ne relèvent plus de [[1242]], al. 1er (C. sport, art. L. 321-3-1).", piege: "Opposer l'acceptation des risques à une action contre le gardien." },
      { nom: "La violation des règles du jeu", question: "Le geste dommageable enfreint-il les règles du sport pratiqué ?", detail: "Le geste conforme aux règles n'est pas fautif ; le geste contraire aux règles l'est.", preuve: "Par tout moyen : témoins, vidéo, feuille de match. Le juge n'est pas lié par la décision de l'arbitre (Civ. 2e, 10 juin 2004).", piege: "Déduire l'absence de faute de l'absence de sanction arbitrale." },
      { nom: "Un dommage et un lien de causalité", question: "Le geste fautif a-t-il causé la blessure ?", detail: "Droit commun (v. chapitre 17)." }
    ],
    exonerations: [
      { nom: "Acceptation des risques", question: "La victime participait-elle à une compétition et le dommage résulte-t-il d'un risque normal de ce sport ?", detail: "Acceptation libre et éclairée (compétition, pas jeu improvisé) ; seuls les risques normaux, en principe ceux d'une pratique conforme aux règles ; jamais un risque de mort.", effet: "Neutralise l'illicéité : pas de responsabilité. Inopérante face à un geste contraire aux règles." }
    ],
    copie: [
      "Penser à l'action contre le club de l'auteur, fondée sur [[1242]], al. 1er (v. chapitre 15).",
      "Distinguer soigneusement faute (violation des règles) et acceptation des risques (risques normaux)."
    ]
  }
);

OBL.cas.push({
  id: "ch13-tournoi-handball",
  titre: "Le tournoi de handball",
  seance: "Chapitre 13",
  regimes: ["faute-1240", "faute-sportive"],
  faits: "Le 15 mars 2026, un match de championnat départemental de handball oppose le club de Firminy à celui de Roanne. Pendant une phase de jeu arrêtée, loin du ballon, Karim (Roanne) assène un coup de coude volontaire au visage de Mehdi (Firminy), qui a le nez fracturé. L'arbitre n'a rien vu et n'a pas sanctionné Karim ; la scène a été filmée par un parent. Karim soutient que Mehdi « a accepté les risques d'un sport de contact ». À la mi-temps, Paul, 34 ans, spectateur en pleine crise délirante (une expertise établit qu'il était sous l'empire d'un trouble mental), renverse la buvette du club de Firminy, détruisant du matériel. Après le match, Léo, 5 ans, s'échappe de la main de son père, traverse en courant la rue devant le gymnase et est renversé par Antoine, qui circulait à vélo (sans assistance électrique) à 35 km/h dans une zone limitée à 20 km/h. Antoine reproche à l'enfant d'avoir traversé sans regarder.",
  question: "Mehdi peut-il obtenir réparation de Karim ? Le club de Firminy peut-il agir contre Paul ? Antoine peut-il opposer à Léo sa propre faute ?",
  corrige: {
    qualification: "Trois dommages sans contrat entre la victime et l'auteur : une blessure entre adversaires en compétition ; un dommage matériel causé par une personne atteinte d'un trouble mental ; un dommage corporel subi par un enfant de 5 ans heurté par un cycliste. Le vélo sans moteur n'est pas un véhicule terrestre à moteur : la loi du 5 juillet 1985 ne s'applique pas. Responsabilité délictuelle pour faute (art. 1240 et 1241) ; pour Léo, le fait de la chose (le vélo, art. 1242, al. 1er) pourrait aussi être invoqué (v. chapitre 14), la faute de la victime y jouant de la même façon.",
    probleme: "La violation volontaire des règles du jeu est-elle une faute que l'acceptation des risques ne peut neutraliser ? Une personne sous l'empire d'un trouble mental peut-elle être condamnée à réparer ? La faute d'un enfant privé de discernement peut-elle réduire son indemnisation ?",
    majeure: "Tout fait quelconque de l'homme qui cause à autrui un dommage oblige celui par la faute duquel il est arrivé à le réparer (art. 1240), y compris par imprudence ou négligence (art. 1241). En matière sportive, la faute réside dans la violation des règles du jeu ; le juge civil n'est pas lié par la décision de l'arbitre (Civ. 2e, 10 juin 2004). L'acceptation des risques, invocable en matière de faute, suppose une compétition et ne couvre que les risques normaux de l'activité. Celui qui a causé un dommage sous l'empire d'un trouble mental n'en est pas moins obligé à réparation (art. 414-3), l'état mental étant indifférent dans tous les cas de responsabilité (Civ. 2e, 4 mai 1977). La faute d'un enfant peut être retenue sans qu'il soit nécessaire de vérifier s'il était capable de discerner les conséquences de son acte (Ass. plén., 9 mai 1984, Derguini et Lemaire) ; elle s'apprécie par référence à une personne raisonnable (Civ. 2e, 28 févr. 1996). La faute de la victime qui ne présente pas les caractères de la force majeure entraîne un partage de responsabilité.",
    mineure: [
      { condition: "Mehdi contre Karim : la faute", corrige: "Le coup de coude volontaire, porté loin du ballon pendant un arrêt de jeu, viole les règles du handball : c'est une faute au sens de l'article 1240. L'absence de sanction arbitrale est indifférente, le juge civil n'étant pas lié par l'arbitre ; la vidéo permet de prouver le geste." },
      { condition: "Mehdi contre Karim : l'acceptation des risques", corrige: "Le match de championnat est bien une compétition, mais Mehdi n'a accepté que les risques normaux du handball, c'est-à-dire ceux d'une pratique conforme aux règles. Un coup volontaire hors du jeu n'en fait pas partie : l'argument de Karim doit être écarté. Karim doit réparer l'entier dommage de Mehdi (l'action contre le club de Roanne, sur l'article 1242, al. 1er, relève du chapitre 15)." },
      { condition: "Le club de Firminy contre Paul", corrige: "Renverser volontairement la buvette est un comportement qu'une personne raisonnable n'aurait pas eu : l'élément objectif de la faute est constitué. Le trouble mental, établi par expertise, est indifférent (art. 414-3) : Paul est obligé à réparation. Une éventuelle irresponsabilité pénale n'y change rien. Le club peut agir contre lui." },
      { condition: "Léo contre Antoine : la faute du cycliste", corrige: "Rouler à 35 km/h dans une zone limitée à 20 km/h viole le Code de la route : c'est une faute (art. 1240 ou 1241) en lien causal avec la collision." },
      { condition: "Léo contre Antoine : la faute de l'enfant", corrige: "Traverser en courant sans regarder est un comportement qu'une personne raisonnable n'aurait pas eu. Peu importe que Léo, 5 ans, soit privé de discernement : sa faute peut lui être opposée (Derguini, dont les faits sont très proches) et s'apprécie sans égard à son âge (Civ. 2e, 28 févr. 1996). Cette faute n'était pas imprévisible et irrésistible pour un cycliste qui aurait respecté la vitesse autorisée : elle n'exonère pas totalement Antoine, mais entraîne un partage de responsabilité proportionné à la gravité des fautes respectives." }
    ],
    conclusion: "Karim doit réparer intégralement le préjudice de Mehdi : sa faute est caractérisée et l'acceptation des risques ne couvre pas un coup contraire aux règles. Paul doit réparer le dommage causé à la buvette malgré son trouble mental (art. 414-3). Antoine est responsable de l'accident, mais peut opposer à Léo sa faute, qui réduira son indemnisation (solution critiquée, que les projets de réforme voudraient abandonner). Si l'enfant avait été heurté par un véhicule terrestre à moteur, la loi Badinter l'aurait indemnisé intégralement de son dommage corporel (art. 3, al. 2)."
  }
});

OBL.articles.push(
  {"num": "414-3", "code": "C. civ.", "theme": "Trouble mental", "texte": "Celui qui a causé un dommage à autrui alors qu'il était sous l'empire d'un trouble mental n'en est pas moins obligé à réparation.", "chapitres": [13], "retenir": "L'auteur d'un dommage sous l'empire d'un trouble mental doit réparation (anc. art. 489-2, loi du 3 janv. 1968)."},
  {"num": "1218", "code": "C. civ.", "theme": "Force majeure", "texte": "Il y a force majeure en matière contractuelle lorsqu'un événement échappant au contrôle du débiteur, qui ne pouvait être raisonnablement prévu lors de la conclusion du contrat et dont les effets ne peuvent être évités par des mesures appropriées, empêche l'exécution de son obligation par le débiteur.\n\nSi l'empêchement est temporaire, l'exécution de l'obligation est suspendue à moins que le retard qui en résulterait ne justifie la résolution du contrat. Si l'empêchement est définitif, le contrat est résolu de plein droit et les parties sont libérées de leurs obligations dans les conditions prévues aux articles 1351 et 1351-1.", "chapitres": [13], "retenir": "En matière contractuelle, imprévisibilité appréciée lors de la conclusion du contrat."},
  {"num": "1240", "code": "C. civ.", "theme": "Faute", "texte": "Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", "chapitres": [13], "retenir": "Faute volontaire (délit) : tout fait quelconque de l'homme qui cause un dommage oblige son auteur fautif à le réparer."},
  {"num": "1241", "code": "C. civ.", "theme": "Faute", "texte": "Chacun est responsable du dommage qu'il a causé non seulement par son fait, mais encore par sa négligence ou par son imprudence.", "chapitres": [13], "retenir": "Faute d'imprudence ou de négligence (quasi-délit)."},
  {"num": "1242", "code": "C. civ.", "theme": "Renvois", "texte": "On est responsable non seulement du dommage que l'on cause par son propre fait, mais encore de celui qui est causé par le fait des personnes dont on doit répondre, ou des choses que l'on a sous sa garde.\n\nToutefois, celui qui détient, à un titre quelconque, tout ou partie de l'immeuble ou des biens mobiliers dans lesquels un incendie a pris naissance ne sera responsable, vis-à-vis des tiers, des dommages causés par cet incendie que s'il est prouvé qu'il doit être attribué à sa faute ou à la faute des personnes dont il est responsable.\n\nCette disposition ne s'applique pas aux rapports entre propriétaires et locataires, qui demeurent régis par les articles 1733 et 1734 du code civil.\n\nLes parents, en tant qu'ils exercent l'autorité parentale, sont, de plein droit, solidairement responsables du dommage causé par leurs enfants mineurs, sauf lorsque que [sic] ceux-ci ont été confiés à un tiers par une décision administrative ou judiciaire.\n\nLes maîtres et les commettants, du dommage causé par leurs domestiques et préposés dans les fonctions auxquelles ils les ont employés ;\n\nLes instituteurs et les artisans, du dommage causé par leurs élèves et apprentis pendant le temps qu'ils sont sous leur surveillance.\n\nLa responsabilité ci-dessus a lieu, à moins que les parents et les artisans ne prouvent qu'ils n'ont pu empêcher le fait qui donne lieu à cette responsabilité.\n\nEn ce qui concerne les instituteurs, les fautes, imprudences ou négligences invoquées contre eux comme ayant causé le fait dommageable, devront être prouvées, conformément au droit commun, par le demandeur, à l'instance.", "chapitres": [13], "retenir": "Fait des choses (al. 1er) : acceptation des risques inopposable ; parents de plein droit (al. 4)."},
  {"num": "1253", "code": "C. civ.", "theme": "Hors faute", "texte": "Le propriétaire, le locataire, l'occupant sans titre, le bénéficiaire d'un titre ayant pour objet principal de l'autoriser à occuper ou à exploiter un fonds, le maître d'ouvrage ou celui qui en exerce les pouvoirs qui est à l'origine d'un trouble excédant les inconvénients normaux de voisinage est responsable de plein droit du dommage qui en résulte.\n\nSous réserve de l'article L. 311-1-1 du code rural et de la pêche maritime, cette responsabilité n'est pas engagée lorsque le trouble anormal provient d'activités, quelle qu'en soit la nature, existant antérieurement à l'acte transférant la propriété ou octroyant la jouissance du bien ou, à défaut d'acte, à la date d'entrée en possession du bien par la personne lésée. Ces activités doivent être conformes aux lois et aux règlements et s'être poursuivies dans les mêmes conditions ou dans des conditions nouvelles qui ne sont pas à l'origine d'une aggravation du trouble anormal.", "chapitres": [13], "retenir": "Trouble anormal de voisinage : responsabilité de plein droit, sans faute (loi du 15 avril 2024)."},
  {"num": "1254", "code": "C. civ.", "theme": "Faute lucrative", "texte": "Lorsqu'une personne est reconnue responsable d'un manquement aux obligations légales ou contractuelles afférentes à son activité professionnelle, le juge peut, à la demande du ministère public, devant les juridictions de l'ordre judiciaire, ou du Gouvernement, devant les juridictions de l'ordre administratif, et par une décision spécialement motivée, la condamner au paiement d'une sanction civile, dont le produit est affecté à un fonds consacré au financement des actions de groupe.\n\nLa condamnation au paiement de la sanction civile ne peut intervenir que si les conditions suivantes sont remplies :\n\n1° L'auteur du dommage a délibérément commis une faute en vue d'obtenir un gain ou une économie indu ;\n\n2° Le manquement constaté a causé un ou plusieurs dommages à plusieurs personnes physiques ou morales placées dans une situation similaire.\n\nLe montant de la sanction est proportionné à la gravité de la faute commise et au profit que l'auteur de la faute en a retiré. Si celui-ci est une personne physique, ce montant ne peut être supérieur au double du profit réalisé. Si l'auteur est une personne morale, ce montant ne peut être supérieur au quintuple du montant du profit réalisé.\n\nLorsqu'une sanction civile est susceptible d'être cumulée avec une amende administrative ou pénale infligée en raison des mêmes faits à l'auteur du manquement, le montant global des amendes prononcées ne dépasse pas le maximum légal le plus élevé.\n\nLe risque d'une condamnation à la sanction civile n'est pas assurable.", "chapitres": [13], "retenir": "Sanction civile de la faute délibérée commise pour obtenir un gain ou une économie indus."},
  {"num": "L85-3", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Victimes protégées", "texte": "Les victimes, hormis les conducteurs de véhicules terrestres à moteur, sont indemnisées des dommages résultant des atteintes à leur personne qu'elles ont subis, sans que puisse leur être opposée leur propre faute à l'exception de leur faute inexcusable si elle a été la cause exclusive de l'accident.\n\nLes victimes désignées à l'alinéa précédent, lorsqu'elles sont âgées de moins de seize ans ou de plus de soixante-dix ans, ou lorsque, quel que soit leur âge, elles sont titulaires, au moment de l'accident, d'un titre leur reconnaissant un taux d'incapacité permanente ou d'invalidité au moins égal à 80 p. 100, sont, dans tous les cas, indemnisées des dommages résultant des atteintes à leur personne qu'elles ont subis.\n\nToutefois, dans les cas visés aux deux alinéas précédents, la victime n'est pas indemnisée par l'auteur de l'accident des dommages résultant des atteintes à sa personne lorsqu'elle a volontairement recherché le dommage qu'elle a subi.", "chapitres": [13], "retenir": "Victimes non conductrices de moins de 16 ans : indemnisées dans tous les cas de leurs dommages corporels, sauf dommage volontairement recherché.", "aff": "3"}
);
