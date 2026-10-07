/* Cours — Droit des obligations, S3 (Pr Florence Fouvet, UJM 2026-2027).
   Organisé selon les plans de cours distribués (introduction ; Partie 1, Titres 1 et 2).
   Blocs : p (paragraphe), txt (texte cité : r = référence, q = contenu), a (arrêt de la base, id + r = rôle ici),
   a2 (arrêt hors base : ref + r), cp (réflexe de cas pratique), attention, liste, def.
   Les textes entre guillemets sont repris des plans du cours ; Légifrance n'était pas accessible pour les recontrôler. */
window.OBL = window.OBL || {};
window.OBL.cours = {
  chapitres: [

/* =========================== INTRODUCTION =========================== */
{
  id: "intro", kick: "Introduction", t: "Introduction", plan: "Plan de l'introduction", manuel: [1, 12, 18],
  intro: "L'introduction pose le vocabulaire et les distinctions dont dépend toute la suite : qu'est-ce qu'une obligation, d'où vient-elle, et pourquoi la responsabilité civile extracontractuelle se distingue des responsabilités voisines. En cas pratique, elle sert surtout à **qualifier** avant de raisonner : obligation civile ou naturelle, contrat ou fait juridique, responsabilité contractuelle ou extracontractuelle, droit commun ou régime spécial.",
  s: [
  { t: "Section 1 – Présentation générale du droit des obligations", s: [
    { t: "§1. L'objet du droit des obligations", s: [
      { t: "A- La notion d'obligation", c: [
        { def: { terme: "Obligation", texte: "lien de droit entre deux personnes, en vertu duquel l'une (le créancier) peut exiger de l'autre (le débiteur) une prestation. Elle a une face active (la créance) et une face passive (la dette)." } },
        { p: "L'obligation est un **droit personnel** : elle s'exerce contre une personne, à la différence du droit réel, qui porte directement sur une chose." }
      ]},
      { t: "B- La classification des obligations", s: [
        { t: "1. Classifications en fonction de l'objet", c: [
          { liste: [
            "**Faire, ne pas faire, donner** : distinction traditionnelle. La réforme de 2016 ne reprend plus l'obligation de donner comme catégorie (le transfert de propriété résulte de l'échange des consentements, art. [[1196]]).",
            "**Obligations monétaires / non monétaires** : l'obligation de somme d'argent obéit à des règles propres (nominalisme monétaire, intérêts moratoires).",
            "**Obligation de moyens / de résultat** : le débiteur de moyens promet de tout mettre en œuvre ; le débiteur de résultat promet un résultat précis. L'enjeu est **probatoire** : pour une obligation de moyens, le créancier prouve la faute ; pour une obligation de résultat, la seule absence de résultat suffit et le débiteur ne s'exonère que par la force majeure."
          ]},
          { cp: "Dès qu'un contrat est en jeu (transport, soins, activité sportive encadrée), qualifie l'obligation de sécurité (moyens ou résultat) : c'est elle qui dit qui doit prouver quoi." }
        ]},
        { t: "2. Classification en fonction de la sanction", c: [
          { p: "L'**obligation civile** est susceptible d'exécution forcée (exemple du cours : l'obligation alimentaire entre ascendants et descendants, art. 203 et 205 C. civ.)." },
          { p: "L'**obligation naturelle** n'est pas susceptible d'exécution forcée, mais ce qui a été volontairement payé ne peut être répété." },
          { txt: { r: "Art. 1302, al. 2 C. civ. (seule occurrence de l'expression dans le Code)", q: "« La restitution n'est pas admise à l'égard des obligations naturelles qui ont été volontairement acquittées. »" } },
          { p: "Exemples : obligation alimentaire entre collatéraux (frères et sœurs) ; paiement d'une dette prescrite. L'engagement unilatéral d'exécuter une obligation naturelle la **transforme en obligation civile** (art. [[1100]], al. 2)." },
          { a: "civ1-2005-01-04-engagement-frere-legs-verbal", r: "L'engagement écrit de partager un legs verbal exécute une obligation naturelle et devient une obligation civile." },
          { a: "quinte-plus-1995", r: "Transformation de l'obligation naturelle en obligation civile par un engagement unilatéral, sans obligation civile préexistante (« improprement qualifiée novation »)." },
          { cp: "Quelqu'un réclame le remboursement de ce qu'il a payé « par devoir » ? Cherche l'obligation naturelle (art. 1302 al. 2) : pas de répétition si le paiement était volontaire. Quelqu'un a promis de payer par devoir moral ? L'art. 1100 al. 2 permet d'en exiger l'exécution." }
        ]},
        { t: "3. Classification en fonction des sources", c: [
          { txt: { r: "Art. 1100 C. civ.", q: "« Les obligations naissent d'actes juridiques, de faits juridiques ou de l'autorité seule de la loi. Elles peuvent naître de l'exécution volontaire ou de la promesse d'exécution d'un devoir de conscience envers autrui. »" } },
          { txt: { r: "Art. 1100-1 et 1100-2 C. civ.", q: "Acte juridique : « manifestation de volonté destinée à produire des effets de droit ». Fait juridique : « agissement ou événement auquel la loi attache des effets de droit »." } }
        ], s: [
          { t: "a) Les actes juridiques : la naissance volontaire d'obligations", c: [
            { p: "Contrat, acte unilatéral, acte juridique collectif." },
            { attention: "Les actes juridiques ne sont **pas traités ce semestre** : ils relèvent du S4 (Pr Étienne Cornut)." }
          ]},
          { t: "b) Les faits juridiques : les sources non volontaires d'obligations", c: [
            { p: "Deux familles : les faits qui **causent un dommage** (responsabilité civile, objet du semestre) et les faits qui procurent un **avantage indu** (quasi-contrats)." },
            { txt: { r: "Art. 1300 C. civ.", q: "« Les quasi-contrats sont des faits purement volontaires dont il résulte un engagement de celui qui en profite sans y avoir droit, et parfois un engagement de leur auteur envers autrui. Les quasi-contrats régis par le présent sous-titre sont la gestion d'affaire, le paiement de l'indu et l'enrichissement injustifié. »" } },
            { liste: [
              "**Gestion d'affaires** : conditions, art. [[1301]] (gérer sciemment et utilement l'affaire d'autrui, sans y être tenu, à l'insu ou sans opposition du maître) ; effets, art. [[1301-2]] (le maître exécute les engagements pris dans son intérêt, rembourse les dépenses, indemnise le gérant).",
              "**Paiement de l'indu** : art. [[1302]] à [[1302-3]]. Quatre figures vues en cours : dette inexistante, dette éteinte, paiement à un faux créancier, paiement par un faux débiteur. Restitution selon les art. 1352 à 1352-9 ; elle peut être réduite si le paiement procède d'une faute (art. 1302-3, al. 2).",
              "**Enrichissement injustifié** : né de l'arrêt Boudier (Req., 15 juin 1892), codifié aux art. [[1303]] à [[1303-4]] ; subsidiarité (art. [[1303-3]]) ; indemnité égale à la moindre des deux valeurs de l'enrichissement et de l'appauvrissement (art. 1303)."
            ]},
            { a: "req-1892-06-15-boudier", r: "Consécration prétorienne de l'action de in rem verso." },
            { cp: "Les quasi-contrats sont développés pour le cas pratique dans la partie « Hors plan » (fiche Quasi-contrats)." }
          ]}
        ]}
      ]}
    ]},
    { t: "§2. Les sources du droit des obligations", s: [
      { t: "A- L'évolution des sources nationales", s: [
        { t: "1. L'adoption du Code civil napoléonien", c: [
          { p: "Commission nommée par Bonaparte en 1800 : **Tronchet** et **Bigot de Préameneu** (pays de coutumes), **Portalis** et **Maleville** (pays de droit écrit). Le Code de 1804 concilie solutions romaines et coutumières dans une idéologie libérale. Livre III : Titre 3 « Des contrats » ; Titre 4, très bref, « Des engagements qui se forment sans convention » (responsabilité civile et quasi-contrats)." }
        ]},
        { t: "2. Le dépassement des textes d'origine", c: [
          { p: "Dépassement par des **normes spéciales** (lois de 1898 sur les accidents du travail, de 1985 sur les accidents de la circulation, de 1998 sur les produits défectueux…) et par des **normes jurisprudentielles** (principe général du fait des choses, du fait d'autrui…)." },
          { attention: "Jurisprudence ≠ contentieux, et jurisprudence ≠ un arrêt. On n'écrit pas « selon la jurisprudence du 7 septembre 2022 » mais « selon un arrêt de la deuxième chambre civile du… ». La doctrine n'est pas une source du droit : elle inspire seulement interprétations et réformes." }
        ]},
        { t: "3. La réforme du droit des obligations", c: [
          { liste: [
            "Avant-projets doctrinaux : Catala (2005) ; Terré (contrats 2009, responsabilité 2011, régime général 2013).",
            "Loi n° 2008-561 du 17 juin 2008 portant réforme de la prescription en matière civile.",
            "Ordonnance n° 2016-131 du 10 février 2016 (contrats, régime général, preuve), ratifiée par la loi n° 2018-287 du 20 avril 2018."
          ]},
          { attention: "La réforme de 2016 **ne touche pas** la responsabilité civile, contractuelle ou extracontractuelle (seule la numérotation a changé : 1382 → 1240, 1384 → 1242…). La responsabilité n'existe qu'à l'état de **projets** : projet de la Chancellerie (13 mars 2017), proposition de loi sénatoriale (29 juillet 2020). Cite-les comme projets, jamais comme droit positif." }
        ]}
      ]},
      { t: "B- La place des sources internationales et européennes", s: [
        { t: "1. Les normes au niveau de l'Union européenne", c: [
          { liste: [
            "Règles de conflit : Règlement Rome I n° 593/2008 (obligations contractuelles) ; Règlement Rome II n° 864/2007 (obligations non contractuelles : responsabilité extracontractuelle et quasi-contrats).",
            "Normes unifiées dans des domaines limités : directive 85/374/CEE du 25 juillet 1985 (produits défectueux, transposée en 1998) ; directive 2004/35/CE du 21 avril 2004 (responsabilité environnementale)."
          ]}
        ]},
        { t: "2. Les normes au niveau international", c: [
          { liste: ["Convention de Vienne sur la vente internationale de marchandises (CVIM) du 11 avril 1980, entrée en vigueur en France en 1988.", "Principes Unidroit (Institut international pour l'unification du droit privé, Rome)."] }
        ]}
      ]}
    ]}
  ]},
  { t: "Section 2 – Présentation générale du droit de la responsabilité civile extracontractuelle", c: [
    { p: "Pour G. Viney, la responsabilité civile est « l'ensemble des règles qui obligent l'auteur du dommage causé à autrui à le réparer en offrant à la victime une compensation »." }
  ], s: [
    { t: "§1. Le domaine du droit de la responsabilité civile", s: [
      { t: "A- Ce que n'est pas la responsabilité civile", s: [
        { t: "1. Distinction entre la responsabilité civile et la responsabilité administrative", c: [
          { a2: "TC, 8 février 1873, Blanco", r: "La responsabilité de l'État pour les dommages causés par les agents du service public « ne peut être régie par les principes qui sont établis dans le Code civil » ; elle relève du juge administratif." },
          { cp: "Le responsable est une personne publique agissant pour un service public administratif ? Le Code civil ne s'applique pas : signale-le et réoriente (sauf textes spéciaux, comme la substitution de l'État aux enseignants, art. L. 911-4 C. éduc., qui relève du juge judiciaire)." }
        ]},
        { t: "2. Distinction entre la responsabilité civile et la responsabilité pénale", c: [
          { attention: "« Délit » n'a pas le même sens : au pénal, catégorie d'infraction entre la contravention et le crime ; au civil, fait dommageable **intentionnel**, opposé au **quasi-délit** (imprudence, négligence)." },
          { liste: ["Des domaines qui ne coïncident pas (une infraction sans dommage ; un dommage sans infraction).", "Des fonctions distinctes : punir / réparer.", "Des mécanismes distincts : faute pénale définie par la loi, faute civile générale ; responsabilité pénale personnelle, responsabilité civile possible du fait d'autrui.", "Des différences de procédure (action civile devant le juge pénal ou civil)."] }
        ]}
      ]},
      { t: "B- Ce qu'est la responsabilité civile", s: [
        { t: "1. Responsabilité contractuelle et responsabilité extracontractuelle", c: [
          { p: "On parle désormais de responsabilité **extracontractuelle** (plutôt que délictuelle, qui englobait délits et quasi-délits). Le vocable exprime le **principe de non-cumul** : si un contrat valable existe et que le dommage résulte de son inexécution, la victime doit agir sur le terrain contractuel ; la responsabilité extracontractuelle est subsidiaire." },
          { attention: "Le nouveau vocabulaire ne signifie pas que la responsabilité extracontractuelle copie la contractuelle : historiquement, c'est l'inverse." },
          { cp: "Premier réflexe de tout cas pratique : y a-t-il un contrat valable entre le responsable et la victime, et le dommage vient-il de son exécution ? Si oui, terrain contractuel (art. 1231-1) ; sinon, art. 1240 s. Le tiers victime d'une inexécution contractuelle agit, lui, sur le terrain délictuel." }
        ]},
        { t: "2. Le droit commun de la responsabilité et les régimes spéciaux", c: [
          { p: "Droit commun : faute (art. [[1240]] et [[1241]]), fait des choses et fait d'autrui (art. [[1242]]). Régimes spéciaux : accidents de la circulation (loi du 5 juillet 1985), produits défectueux (art. 1245 s.), troubles anormaux de voisinage (art. 1253)… La règle *specialia generalibus derogant* impose de vérifier d'abord si un régime spécial s'applique." }
        ]}
      ]}
    ]},
    { t: "§2. Les évolutions du droit de la responsabilité civile", s: [
      { t: "A- L'objectivation de la responsabilité civile", c: [
        { p: "Passage d'une responsabilité fondée sur la faute morale à des responsabilités **sans faute** (fait des choses, fait d'autrui, régimes spéciaux) et à une faute **objective**, appréciée sans discernement (arrêts de 1984). L'objectif devient l'indemnisation de la victime." }
      ]},
      { t: "B- La collectivisation de la responsabilité civile", c: [
        { p: "Le poids de la réparation est transféré sur des collectivités : **assurance** de responsabilité (obligatoire pour les véhicules terrestres à moteur), **fonds d'indemnisation** (FGTI, FGAO, ONIAM), sécurité sociale. Conséquence pratique : derrière le responsable, il y a presque toujours un assureur ou un fonds." }
      ]}
    ]}
  ]}
  ]
},

/* =================== PARTIE 1 · TITRE 1 · CHAPITRE 1 : PRÉJUDICE =================== */
{
  id: "prejudice", kick: "Partie 1 · Titre 1 · Chapitre 1", t: "Un préjudice résultant d'un dommage", plan: "Plan du Chapitre 1er du Titre 1er de la Partie 1", manuel: [17],
  intro: "Pas de responsabilité sans préjudice réparable. En cas pratique, c'est la première condition à établir pour chaque victime (directe ou par ricochet) et pour chaque poste : il faut le **qualifier** (dommage corporel, matériel, moral ; préjudice patrimonial ou extrapatrimonial) puis vérifier ses **caractères** (certain, légitime, direct, personnel).",
  s: [
  { t: "Section 1 – Les différents types de dommages et de préjudices", c: [
    { p: "**Teneur de la distinction.** Le **dommage** est l'atteinte, le fait brut (une blessure, la destruction d'un bien) ; le **préjudice** est la conséquence juridique de cette atteinte, l'intérêt lésé dont on demande réparation (perte de revenus, souffrances, préjudice d'affection). L'art. [[1240]] parle de « dommage » ; les art. 1246 à 1252 parlent de « préjudice écologique »." },
    { p: "**Intérêt de la distinction** : un même dommage produit plusieurs préjudices, qui s'indemnisent poste par poste ; la nomenclature Dintilhac classe des préjudices, non des dommages." },
    { cp: "Structure ta mineure ainsi : un dommage (ex. : blessure), puis la liste des préjudices qu'il entraîne pour chaque victime, chacun rattaché à un poste." }
  ], s: [
    { t: "§1. Le siège de l'atteinte : la classification des dommages", s: [
      { t: "A- Les dommages à la personne", c: [
        { liste: ["**1. Atteintes à la vie ou à l'intégrité corporelle** : dommage corporel, le plus protégé (régimes spéciaux, prescription de dix ans, art. 2226).", "**2. Atteintes aux aspects moraux de la personnalité** : honneur, vie privée (art. 9 C. civ.), image."] }
      ]},
      { t: "B- Les dommages aux biens", c: [
        { p: "Destruction, détérioration, perte d'un bien ; la mort d'un animal peut aussi causer un préjudice d'affection." },
        { a: "lunus-1962", r: "La mort d'un animal (le cheval Lunus) cause à son propriétaire un préjudice affectif réparable, en plus de sa valeur." }
      ]}
    ]},
    { t: "§2. La nature des intérêts lésés : la classification des préjudices", s: [
      { t: "A- Les préjudices patrimoniaux", c: [
        { p: "Évaluables en argent : soit une **perte effective** (*damnum emergens* : bien détérioré, frais de soins), soit un **manque à gagner** (*lucrum cessans* : gains dont on est privé)." }
      ]},
      { t: "B- Les préjudices moraux (extrapatrimoniaux)", c: [
        { a: "lejars-templier-1923", r: "L'art. 1382 s'applique « par la généralité de ses termes » au dommage moral comme au dommage matériel : les enfants de la victime sont indemnisés de leur douleur." },
        { p: "Outils d'évaluation : nomenclature **Dintilhac** (2005) des postes de préjudice corporel ; référentiel **Mornet** (indemnisation des préjudices en cas de blessures ou de décès, septembre 2022). La Cour de cassation admet des préjudices autonomes hors nomenclature :" },
        { a: "ch-mixte-2022-03-25-angoisse-mort-imminente", r: "L'angoisse de mort imminente de la victime directe est réparée de façon autonome, à côté des souffrances endurées." },
        { a: "ch-mixte-2022-03-25-attente-inquietude", r: "Le préjudice d'attente et d'inquiétude des proches est un préjudice spécifique, distinct du préjudice d'affection." },
        { a: "civ1-2026-02-18-distilbene-anxiete", r: "Préjudice d'anxiété : il est caractérisé par la seule connaissance, par la victime, d'un risque élevé de développer une pathologie grave." },
        { cp: "Pour une victime décédée, distingue toujours : (1) les préjudices de la victime elle-même, transmis à ses héritiers (souffrances, angoisse de mort imminente) ; (2) les préjudices personnels des proches, victimes par ricochet (affection, attente et inquiétude, pertes de revenus du foyer)." }
      ]}
    ]}
  ]},
  { t: "Section 2 – Les caractères du préjudice réparable", c: [
    { txt: { r: "Art. 1235 du projet de réforme de 2017 (et de la proposition sénatoriale de 2020)", q: "« Est réparable tout préjudice certain résultant d'un dommage et consistant en la lésion d'un intérêt licite, patrimonial ou extrapatrimonial. »" } }
  ], s: [
    { t: "§1. Le caractère certain du préjudice", s: [
      { t: "A- La preuve d'un préjudice existant", c: [
        { p: "Le préjudice doit être prouvé par celui qui en demande réparation ; le juge l'évalue souverainement mais ne peut refuser d'évaluer un préjudice dont il constate l'existence, ni allouer une somme forfaitaire." },
        { a: "com-2020-02-12-montbronn-cristal-de-paris", r: "Concurrence déloyale : un préjudice s'infère nécessairement de l'acte ; s'il est difficile à chiffrer, il peut être évalué d'après l'avantage indu que s'est octroyé l'auteur, modulé selon les volumes d'affaires." },
        { a: "civ2-1989-06-21-etat-vegetatif-capital-rente", r: "Victime en état végétatif : le juge doit justifier l'évaluation et répondre aux conclusions (capital ou rente)." },
        { a: "crim-1994-01-05-victime-inconsciente", r: "L'indemnisation ne dépend pas de la représentation que la victime se fait de son dommage, mais de sa constatation par le juge." },
        { a: "civ2-1995-02-22-etat-vegetatif-tous-chefs", r: "L'état végétatif n'exclut aucun chef d'indemnisation : le préjudice est réparé dans tous ses éléments." },
        { attention: "Piège classique : refuser d'indemniser une victime inconsciente « parce qu'elle ne souffre pas ». C'est faux depuis 1994-1995 : l'appréciation est objective." }
      ]},
      { t: "B- Le préjudice futur", c: [
        { txt: { r: "Art. 1236 du projet de réforme", q: "« Le préjudice futur est réparable lorsqu'il est la prolongation certaine et directe d'un état des choses actuel. »" } },
        { p: "Futur ne veut pas dire éventuel : le préjudice futur est réparable s'il est **certain** (ex. : frais de soins à venir, perte de revenus jusqu'à la retraite). Le préjudice simplement **éventuel** ne l'est pas." }
      ]},
      { t: "C- La perte d'une chance", c: [
        { txt: { r: "Art. 1238 du projet de réforme", q: "« Seule constitue une perte de chance réparable, la disparition actuelle et certaine d'une éventualité favorable. Ce préjudice doit être mesuré à la chance perdue et ne peut être égal à l'avantage qu'aurait procuré cette chance si elle s'était réalisée. »" } },
        { a: "civ2-1966-05-12-perte-de-chance", r: "Une chance purement hypothétique (carrière de pharmacienne non entreprise) n'est pas réparable." },
        { a: "civ2-2022-05-25-athlete-jeux-olympiques", r: "« Toute perte de chance ouvre droit à réparation » : le juge ne peut exiger que la chance perdue ait été sérieuse ; sa faible probabilité joue seulement sur le montant." },
        { a: "ass-plen-2025-06-27-unipatis-avocat", r: "La perte de chance répare une part de l'entier dommage, à hauteur de la chance perdue ; le juge saisi de l'entier dommage doit rechercher la perte de chance (après débat contradictoire) et ne peut refuser de l'indemniser au motif qu'elle n'était pas demandée." },
        { a: "ass-plen-2025-06-27-baobabs-notaire", r: "Même solution, en matière extracontractuelle (faute de conseil du notaire, art. 1240)." },
        { cp: "Méthode : (1) identifier l'éventualité favorable perdue ; (2) vérifier qu'elle a disparu de façon actuelle et certaine ; (3) chiffrer = valeur de l'avantage espéré × probabilité. Ne jamais indemniser à 100 % : ce serait réparer l'entier dommage." }
      ]}
    ]},
    { t: "§2. Le caractère légitime du préjudice", c: [
      { p: "Le préjudice doit léser un intérêt **licite** (projet, art. 1235). Deux illustrations du cours :" }
    ], s: [
      { t: "A- L'exemple du préjudice résultant du décès du concubin", c: [
        { a: "civ-1937-07-27-concubine-interet-legitime", r: "Refus : le demandeur doit justifier « de la lésion certaine d'un intérêt légitime, juridiquement protégé » ; le concubinage n'en confère pas." },
        { a: "ch-mixte-1970-02-27-dangereux", r: "Revirement : l'art. 1382 « n'exige pas, en cas de décès, l'existence d'un lien de droit entre le défunt et le demandeur »." },
        { cp: "Aujourd'hui, la concubine, le partenaire, l'ami proche peuvent agir comme victimes par ricochet : il suffit de prouver un préjudice personnel (affection, perte de revenus), sans lien de droit." }
      ]},
      { t: "B- L'exemple du préjudice résultant de la naissance d'un enfant", c: [
        { a: "civ1-1991-06-25-picard-ivg-enfant-non-desire", r: "La naissance d'un enfant en bonne santé, même après une IVG manquée, ne constitue pas à elle seule un préjudice réparable pour la mère." },
        { a: "ass-plen-2000-11-17-perruche", r: "L'enfant né handicapé peut demander réparation du préjudice résultant de son handicap, causé par les fautes qui ont empêché sa mère d'interrompre sa grossesse." },
        { txt: { r: "Art. L. 114-5 CASF (art. 1er de la loi n° 2002-303 du 4 mars 2002, dite « anti-Perruche »)", q: "« Nul ne peut se prévaloir d'un préjudice du seul fait de sa naissance. […] Lorsque la responsabilité d'un professionnel ou d'un établissement de santé est engagée vis-à-vis des parents d'un enfant né avec un handicap non décelé pendant la grossesse à la suite d'une faute caractérisée, les parents peuvent demander une indemnité au titre de leur seul préjudice. Ce préjudice ne saurait inclure les charges particulières découlant, tout au long de la vie de l'enfant, de ce handicap. La compensation de ce dernier relève de la solidarité nationale. »" } },
        { a: "cons-const-2010-06-11-anti-perruche-qpc", r: "Al. 1 et 3 de l'art. L. 114-5 conformes ; mais l'application aux instances en cours est censurée." },
        { a: "civ1-2025-10-15-echographiste-trisomie-gains-parents", r: "Le préjudice propre des parents peut inclure leurs pertes de gains professionnels, s'ils ont dû cesser ou réduire leur activité pour s'occuper de l'enfant." },
        { attention: "Distingue l'enfant dont le handicap a été **causé** par la faute médicale (droit commun, réparation intégrale) et celui dont le handicap n'a pas été **décelé** (régime de l'art. L. 114-5 : faute caractérisée, préjudice des seuls parents)." }
      ]}
    ]},
    { t: "§3. Les autres caractères du préjudice : le caractère direct et le caractère personnel", s: [
      { t: "A- Le caractère direct du dommage ou le caractère direct du préjudice ?", c: [
        { p: "Le préjudice doit être la suite directe du fait générateur. La condition se confond largement avec le **lien de causalité** (chapitre suivant) : on peut écrire indifféremment que le préjudice n'est pas direct ou que le lien de causalité fait défaut." }
      ]},
      { t: "B- Le caractère personnel du préjudice", c: [
        { p: "Seul celui qui subit personnellement le préjudice peut en demander réparation (victime directe, victimes par ricochet pour leur propre préjudice, héritiers pour le préjudice de la victime décédée)." },
        { p: "**Exception : le préjudice écologique.** La loi n° 2016-1087 du 8 août 2016 (reconquête de la biodiversité) a introduit les art. 1246 à 1252 C. civ. Il est défini comme « une atteinte non négligeable aux éléments ou aux fonctions des écosystèmes ou aux bénéfices collectifs tirés par l'homme de l'environnement » (art. 1247). Il n'est personnel à personne : c'est pourquoi la loi désigne qui peut agir (fiche « Préjudice écologique » dans la partie Hors plan)." },
        { a: "crim-2012-09-25-erika", r: "Avant la loi de 2016, la chambre criminelle avait déjà admis la réparation du préjudice écologique « pur »." }
      ]}
    ]}
  ]}
  ]
},

/* =================== PARTIE 1 · TITRE 1 · CHAPITRE 2 : CAUSALITÉ =================== */
{
  id: "causalite", kick: "Partie 1 · Titre 1 · Chapitre 2", t: "Un lien de causalité", plan: "Plan du Chapitre 2 du Titre 1er de la Partie 1", manuel: [17],
  intro: "Le lien de causalité relie le fait générateur au dommage. En cas pratique, il soulève deux questions distinctes : **peut-on prouver** que le fait du défendeur est intervenu (causalité matérielle) et **ce fait est-il juridiquement la cause** du dommage (causalité juridique) ? Puis, lorsque plusieurs causes ont concouru, il faut traiter les **causes d'exonération** et la répartition entre coresponsables.",
  s: [
  { t: "Section 1 – La détermination de la causalité", s: [
    { t: "§1. La causalité matérielle : la preuve de l'intervention du fait générateur dans la production du dommage", s: [
      { t: "A- La charge de la preuve", c: [
        { txt: { r: "Art. 1239 du projet de réforme ministériel (et de la proposition sénatoriale)", q: "« La responsabilité suppose un rapport de causalité certain entre le fait imputé au défendeur et le dommage. »" } }
      ], s: [
        { t: "1. Le principe : l'attribution de la charge de la preuve au demandeur", c: [
          { p: "Celui qui réclame réparation prouve le lien de causalité (art. 1353 C. civ.)." }
        ]},
        { t: "2. Les exceptions : les cas de causalité présumée", s: [
          { t: "a) La présomption de causalité en matière de fait des choses", c: [
            { p: "Lorsqu'une chose **en mouvement** est entrée en **contact** avec le siège du dommage, elle est présumée en être l'instrument (voir chapitre Fait des choses)." },
            { a: "civ2-1997-04-02-escalator-meridien", r: "Escalator en mouvement : présomption de rôle actif, au gardien de prouver la cause étrangère." }
          ]},
          { t: "b) Les présomptions légales de causalité", c: [
            { liste: [
              "Art. 47 de la loi n° 91-1406 du 31 décembre 1991 : fonds d'indemnisation des victimes de contamination par le VIH par transfusion, avec présomption de causalité ; fonds absorbé par l'ONIAM (loi n° 2004-806 du 9 août 2004).",
              "Art. 102 de la loi n° 2002-303 du 4 mars 2002 : allègement de la preuve pour les contaminations transfusionnelles par le virus de l'hépatite C (indemnisation aujourd'hui assurée par l'ONIAM)."
            ]}
          ]},
          { t: "c) Les présomptions de causalité en cas de dommage causé par une personne non déterminée", c: [
            { p: "Quand l'auteur est indéterminé au sein d'un groupe identifié, la jurisprudence renverse la charge de la preuve : chacun répond pour le tout, sauf à prouver qu'il n'a pas pu causer le dommage." },
            { a: "civ2-1983-12-14-chiens", r: "Action commune de deux chiens : le propriétaire de chacun répond du dommage, sauf à prouver que le sien n'y a pas participé." },
            { a: "civ2-1998-04-01-petards", r: "Participation de l'enfant à toutes les étapes du processus ayant abouti au sinistre." },
            { a: "civ1-2009-09-24-des-08-16305", r: "Distilbène : une fois l'exposition au DES établie, c'est à chaque laboratoire de prouver que son produit n'est pas à l'origine du dommage." },
            { a: "civ1-2019-06-19-des-preuve", r: "Même si le DES n'est pas la seule cause possible, l'exposition peut être prouvée par présomptions." },
            { a: "civ1-2010-06-17-infection-nosocomiale", r: "Infection nosocomiale contractée dans plusieurs établissements : chacun doit prouver qu'il n'en est pas à l'origine." },
            { a: "chmixte-2026-05-29-des-anxiete-prescription", r: "Distilbène : préjudice d'anxiété et point de départ de la prescription." },
            { txt: { r: "Art. 1240 du projet de réforme ministériel", q: "« Lorsqu'un dommage corporel est causé par une personne indéterminée parmi des personnes identifiées agissant de concert ou exerçant une activité similaire, chacune en répond pour le tout, sauf à démontrer qu'elle ne peut l'avoir causé. Les responsables contribuent alors entre eux à proportion de la probabilité que chacun ait causé le dommage. »" } },
            { cp: "Victime blessée par « l'un des chasseurs » ou « l'un des joueurs » ? Ne conclus pas à l'absence de responsabilité : invoque la présomption (groupe identifié, activité commune) ou cherche une responsabilité du groupement (art. 1242 al. 1er, chapitre Fait d'autrui)." }
          ]}
        ]}
      ]},
      { t: "B- Les moyens de preuve", c: [
        { txt: { r: "Art. 1382 C. civ. (ancien art. 1353)", q: "« Les présomptions qui ne sont pas établies par la loi, sont laissées à l'appréciation du juge, qui ne doit les admettre que si elles sont graves, précises et concordantes, et dans les cas seulement où la loi admet la preuve par tout moyen. »" } },
        { p: "Le lien de causalité étant un fait juridique, il se prouve par tout moyen, notamment par présomptions de fait. Le contentieux du vaccin contre l'hépatite B en est le laboratoire :" },
        { a: "civ1-2003-09-23-engerix", r: "Premier temps : refus de déduire défaut et causalité de simples éléments de doute." },
        { a: "soc-2003-04-02-vaccination-hepatite-b-accident-travail", r: "La vaccination imposée par l'employeur constitue un accident du travail." },
        { a2: "CE, 9 mars 2007, n° 267635 (Recueil)", r: "Le Conseil d'État admet l'imputabilité au service de la sclérose en plaques après vaccination obligatoire, au vu du délai et de l'absence d'antécédents." },
        { a: "civ1-2008-05-22-vaccin-hepatite-b-presomptions", r: "Revirement : la preuve du défaut et du lien de causalité peut résulter de présomptions graves, précises et concordantes, appréciées souverainement." },
        { a: "civ1-2009-07-09-genhevac-rejet", r: "Présomptions admises (délai court, absence d'antécédents)." },
        { a: "civ1-2009-09-24-genhevac-rejet", r: "Présomptions jugées insuffisantes : appréciation souveraine des juges du fond." },
        { txt: { r: "Art. 4 de la directive 85/374/CEE, repris à l'art. 1245-8 C. civ.", q: "« Le demandeur doit prouver le dommage, le défaut et le lien de causalité entre le défaut et le dommage. »" } },
        { a: "civ1-2015-11-12-vaccin-renvoi-prejudiciel", r: "Renvoi préjudiciel à la CJUE sur la compatibilité de ce mode de preuve." },
        { a: "cjue-2017-06-21-sanofi-pasteur", r: "Les indices graves, précis et concordants sont admis ; mais pas de présomption automatique fondée sur des indices prédéterminés." },
        { a: "civ1-2017-10-18-vaccin-hepatite-b-apres-cjue", r: "Application après la CJUE." },
        { a: "civ2-2024-03-14-vih-presomptions", r: "Contamination par le VIH entre partenaires : lien causal déduit de présomptions, toute autre cause étant écartée." },
        { cp: "Dans la mineure, liste les indices un par un (proximité temporelle, absence d'antécédents, absence d'autre cause, données scientifiques non contraires) et conclus qu'ils forment des présomptions graves, précises et concordantes. Ne prétends jamais que la causalité est « présumée » sans texte." }
      ]}
    ]},
    { t: "§2. La causalité juridique : la détermination du rôle déclencheur du dommage", c: [
      { liste: [
        "**Équivalence des conditions** : est cause tout événement sans lequel le dommage ne se serait pas produit (*condition sine qua non*). Large, favorable à la victime.",
        "**Causalité adéquate** : n'est cause que l'événement qui, selon le cours normal des choses, devait produire ce dommage. Plus sélective."
      ]},
      { p: "**Quelle théorie choisir ?** La jurisprudence n'en consacre aucune expressément et choisit selon l'objectif poursuivi (souvent l'équivalence quand il s'agit d'indemniser). Projets de réforme : le groupe Terré retenait la causalité adéquate (art. 10 : « constitue la cause du dommage tout fait propre à le produire selon le cours ordinaire des choses et sans lequel il ne serait pas advenu ») ; les projets Catala, de la Chancellerie et du Sénat ne prennent pas position." },
      { a: "civ2-2000-01-27-accident-puis-operation", r: "L'opération rendue nécessaire par l'accident : l'accident est la cause directe et certaine de la perte d'un œil survenue lors de l'opération." },
      { cp: "Présente les deux théories, applique-les aux faits et montre que le résultat converge (ou explique pourquoi l'une est plus convaincante). Ne t'arrête pas à « la jurisprudence applique l'équivalence » : c'est une tendance, pas une règle." }
    ]}
  ]},
  { t: "Section 2 – La pluralité de causes", c: [
    { a: "civ1-2023-10-18-des-cause-non-exclusive", r: "Ouvre droit à réparation le dommage en lien causal avec une faute, même si celle-ci n'en est pas la seule cause." }
  ], s: [
    { t: "§1. Les causes d'exonération totale", c: [
      { p: "Seule la **force majeure** exonère totalement : événement **imprévisible**, **irrésistible** et **extérieur** au défendeur. Elle peut prendre la forme d'un cas fortuit, du fait d'un tiers ou du fait de la victime." },
      { a: "ass-plen-2006-04-14-ratp-suicide", r: "La faute de la victime n'exonère totalement le gardien que si elle présente les caractères de la force majeure (imprévisible et irrésistible)." },
      { a: "chmixte-1981-12-04-paquebot-france", r: "Le fait de l'équipage, préposés de l'armateur, n'est pas extérieur : pas de force majeure." },
      { a: "civ2-1993-03-17-beaulieu-sur-mer", r: "L'érosion d'une falaise n'est pas imprévisible et des parades existaient : pas de force majeure." },
      { a: "civ3-2008-02-27-papeete-mur-soutenement", r: "Pluies d'une intensité exceptionnelle : appréciation souveraine de la force majeure." },
      { a: "civ2-2018-02-08-ratp-agression-metro", r: "Le juge doit motiver précisément l'imprévisibilité et l'irrésistibilité." },
      { a: "civ2-2018-02-08-sncf-rer-tiers-schizophrene", r: "Geste soudain et irrationnel d'un tiers : force majeure retenue." },
      { a: "civ2-2021-06-17-glissement-de-terrain", r: "Épisode pluvieux exceptionnel : force majeure retenue." },
      { txt: { r: "Art. 1253 du projet de réforme ministériel (et de la proposition sénatoriale)", q: "« Le cas fortuit, le fait du tiers ou de la victime sont totalement exonératoires s'ils revêtent les caractères de la force majeure. En matière extracontractuelle, la force majeure est l'événement échappant au contrôle du défendeur ou de la personne dont il doit répondre, et dont ceux-ci ne pouvaient éviter ni la réalisation ni les conséquences par des mesures appropriées. […] »" } },
      { cp: "Teste chaque caractère séparément, à la date du fait, du point de vue du défendeur. Un seul manque, pas d'exonération totale. Pense aussi à l'extériorité : le fait d'un préposé ou d'une chose dont on a la garde n'est jamais extérieur." }
    ]},
    { t: "§2. Les causes d'exonération partielle", s: [
      { t: "A- Le fait de la victime", s: [
        { t: "1. Le fait fautif de la victime", c: [
          { p: "**En matière de responsabilité du fait personnel** : la faute de la victime qui a concouru au dommage entraîne un partage de responsabilité." },
          { a: "civ1-2010-07-01-banque-notaire", r: "La faute non dolosive de la victime ayant concouru au dommage justifie un partage." },
          { p: "**En matière de fait des choses** :" },
          { a: "civ2-1982-07-21-desmares", r: "Solution du « tout ou rien » : la faute de la victime n'exonère le gardien que si elle constitue un cas de force majeure ; sinon, aucune exonération." },
          { a: "civ2-1987-04-06-boirie", r: "Abandon de Desmares : retour à l'exonération partielle par la faute de la victime." },
          { p: "**En matière de transport ferroviaire** :" },
          { a: "chmixte-2008-11-28-sncf-adolescent-train", r: "Transporteur tenu d'une obligation de sécurité de résultat : la faute de la victime ne l'exonère que si elle présente les caractères de la force majeure." },
          { a: "civ1-2019-12-11-sncf-reglement-1371-2007", r: "Revirement imposé par le règlement (CE) n° 1371/2007 : la faute simple du voyageur exonère partiellement le transporteur." },
          { p: "**En matière contractuelle cependant** :" },
          { a: "ass-plen-2026-05-29-aroeven", r: "Dommage corporel lors d'une activité sportive ou de loisirs encadrée : l'organisateur professionnel ne peut opposer la faute d'imprudence simple de la victime (spécificité du dommage corporel)." },
          { txt: { r: "Art. 1254 et 1255 du projet de réforme ministériel", q: "Art. 1254 : « Le manquement de la victime à ses obligations contractuelles, sa faute ou celle d'une personne dont elle doit répondre sont partiellement exonératoires lorsqu'ils ont contribué à la réalisation du dommage. En cas de dommage corporel, seule une faute lourde peut entraîner l'exonération partielle. » Art. 1255 : « Sauf si elle revêt les caractères de la force majeure, la faute de la victime privée de discernement n'a pas d'effet exonératoire. »" } },
          { attention: "La faute de la victime directe est opposable aux victimes par ricochet (Ass. plén., 19 juin 1981), dont l'action procède du même fait." }
        ]},
        { t: "2. Le fait non fautif de la victime", c: [
          { p: "Les prédispositions de la victime ne réduisent pas son indemnisation lorsque l'affection n'a été provoquée ou révélée que par le fait dommageable." },
          { txt: { r: "Art. 1268 du projet de réforme ministériel (art. 1271 de la proposition sénatoriale)", q: "« Les préjudices doivent être appréciés sans qu'il soit tenu compte d'éventuelles prédispositions de la victime lorsque l'affection qui en est issue n'a été provoquée ou révélée que par le fait dommageable. »" } },
          { a: "civ1-1997-10-28-cataracte-etat-anterieur", r: "La victime déjà borgne qui perd son second œil : indemnisation de la cécité totale, sans réduction pour l'état antérieur." }
        ]}
      ]},
      { t: "B- Le fait d'un tiers", c: [
        { txt: { r: "Art. 1265 du projet de réforme ministériel (art. 1267 de la proposition sénatoriale)", q: "« Lorsque plusieurs personnes sont responsables d'un même dommage, elles sont solidairement tenues à réparation envers la victime. Si toutes ou certaines d'entre elles ont commis une faute, elles contribuent entre elles à proportion de la gravité et du rôle causal du fait générateur qui leur est imputable. Si aucune d'elles n'a commis de faute, elles contribuent à proportion du rôle causal du fait générateur qui leur est imputable, ou à défaut par parts égales. »" } }
      ], s: [
        { t: "1. Les rapports entre la victime et les responsables", c: [
          { p: "Le fait d'un tiers qui n'est pas une force majeure **n'exonère pas** le défendeur envers la victime : les coauteurs sont tenus **in solidum**, chacun pour le tout. La victime peut réclamer l'intégralité à l'un quelconque d'entre eux." }
        ]},
        { t: "2. Les rapports entre coresponsables", c: [
          { p: "Celui qui a payé exerce un **recours en contribution** contre les autres. Droit positif : entre coauteurs fautifs, partage selon la gravité des fautes ; entre coauteurs non fautifs (gardiens), parts égales ; le coauteur fautif supporte en principe seul la charge face au coauteur non fautif." },
          { cp: "Rédige en deux temps : (1) l'**obligation à la dette** (la victime réclame tout à qui elle veut) ; (2) la **contribution à la dette** (comment les coresponsables se répartissent la charge). Confondre les deux est une erreur classique." }
        ]}
      ]}
    ]}
  ]}
  ]
},

/* =================== PARTIE 1 · TITRE 2 · CHAPITRE 1 : FAUTE =================== */
{
  id: "faute", kick: "Partie 1 · Titre 2 · Chapitre 1", t: "Le fait personnel : la faute", plan: "Plan du Chapitre 1 du Titre 2 de la Partie 1", manuel: [13],
  intro: "La faute est le fait générateur de droit commun : elle s'applique à tout dommage, contre toute personne, à défaut de régime plus favorable. En cas pratique, elle s'invoque toujours **en plus** des responsabilités sans faute (contre l'auteur direct) et elle est indispensable lorsqu'aucune chose ni aucun « autrui » n'est en cause.",
  c: [
    { txt: { r: "Art. 1240 et 1241 C. civ. (anciens art. 1382 et 1383)", q: "Art. 1240 : « Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer. » Art. 1241 : « Chacun est responsable du dommage qu'il a causé non seulement par son fait, mais encore par sa négligence ou par son imprudence. »" } },
    { txt: { r: "Art. 1242 du projet de réforme ministériel de mars 2017 (art. 1241 de la proposition sénatoriale de juillet 2020)", q: "« Constitue une faute la violation d'une prescription légale ou le manquement au devoir général de prudence ou de diligence. »" } }
  ],
  s: [
  { t: "Section 1 – Les éléments constitutifs de la faute", s: [
    { t: "§1. Les éléments objectifs de la faute", s: [
      { t: "A- Un comportement", c: [
        { p: "La faute peut être une action ou une **abstention**." },
        { a: "branly-1951", r: "L'abstention engage la responsabilité de son auteur lorsque le fait omis devait être accompli en vertu d'une obligation légale, réglementaire ou conventionnelle, ou, dans l'ordre professionnel, d'une obligation d'objectivité (omission volontaire du rôle de Branly dans une histoire de la TSF)." },
        { a: "civ2-2000-01-06-chantier-enfant-electrocute", r: "Ne pas interdire l'accès d'un chantier dangereux aux enfants est une négligence fautive." }
      ]},
      { t: "B- L'illicéité", s: [
        { t: "1. Notion générale", c: [
          { liste: ["**a) La violation d'une règle écrite** : loi, règlement (code de la route, règles de sécurité), y compris une infraction pénale.", "**b) La violation d'une règle non écrite** : le devoir général de prudence et de diligence, que le juge apprécie au cas par cas."] }
        ]},
        { t: "2. L'appréciation de la faute", c: [
          { p: "**a) Appréciation in abstracto** : le comportement est comparé à celui d'une personne raisonnable (autrefois le « bon père de famille ») placée dans les mêmes circonstances externes (lieu, moment, profession), sans tenir compte des aptitudes personnelles de l'auteur." },
          { p: "**b) La gravité du comportement** : en droit commun, la faute la plus légère suffit (*culpa levissima*). Certains textes exigent une faute qualifiée :" },
          { liste: ["Faute **inexcusable** de l'employeur (art. L. 452-1 CSS) : indemnisation complémentaire de la victime d'un accident du travail.", "Faute **caractérisée** du professionnel de santé envers les parents d'un enfant né avec un handicap non décelé (art. L. 114-5 CASF).", "Faute **intentionnelle** ou **inexcusable** de la victime dans la loi Badinter (art. 3)."] },
          { cp: "Majeure type : « La faute s'entend de la violation d'une règle de conduite imposée par la loi ou du manquement au devoir général de prudence ; elle s'apprécie in abstracto, par référence au comportement d'une personne raisonnable placée dans les mêmes circonstances. »" }
        ]}
      ]}
    ]},
    { t: "§2. L'absence d'élément subjectif de la faute", s: [
      { t: "A- L'intention", c: [
        { p: "L'intention de nuire n'est pas une condition de la faute civile : une imprudence suffit (art. 1241)." },
        { txt: { r: "Art. 1241 du projet de réforme ministériel (art. 1240 de la proposition sénatoriale)", q: "« On est responsable du dommage causé par sa faute. »" } }
      ]},
      { t: "B- Le discernement", c: [
        { a: "guyomard-comba-1967", r: "La personne morale répond des fautes commises par ses organes, sans que la victime ait à identifier l'auteur personnel." }
      ], s: [
        { t: "1. La responsabilité des personnes atteintes de troubles mentaux", c: [
          { txt: { r: "Art. 414-3 C. civ. (ex-art. 489-2, loi n° 68-5 du 3 janvier 1968)", q: "« Celui qui a causé un dommage à autrui alors qu'il était sous l'empire d'un trouble mental n'en est pas moins obligé à réparation. »" } },
          { a: "civ2-1977-05-04-article-489-2-tous-regimes", r: "Le texte s'applique à tous les régimes de responsabilité des art. 1382 s." },
          { a: "civ2-1981-02-04-malaise-cardiaque", r: "Un simple malaise cardiaque n'est pas un « trouble mental »." }
        ]},
        { t: "2. La responsabilité de l'infans", s: [
          { t: "a) Le revirement de jurisprudence", c: [
            { p: "Les quatre arrêts d'Assemblée plénière du **9 mai 1984** abandonnent l'exigence de discernement :" },
            { a: "gabillet-1984", r: "Fait des choses : l'enfant de 3 ans peut être gardien d'un bâton." },
            { a: "fullenwarth-1984", r: "Parents : il suffit que l'enfant ait commis un acte cause directe du dommage." },
            { a: "lemaire-1984", r: "Faute de l'enfant auteur, retenue sans vérifier son discernement." },
            { a: "derguini-1984", r: "Faute de l'enfant victime, opposée pour réduire son indemnisation." }
          ]},
          { t: "b) Réception du revirement", c: [
            { p: "**L'infans auteur du dommage** :" },
            { a: "civ2-1984-12-12-enfant-7-ans-banc", r: "Enfant de 7 ans : faute retenue sans recherche du discernement." },
            { p: "**L'infans victime du dommage** :" },
            { a: "civ2-1996-02-28-faute-enfant-casserole", r: "La faute d'un mineur peut être retenue contre lui même s'il n'est pas capable de discerner les conséquences de son acte." },
            { txt: { r: "Art. 1255 du projet de réforme ministériel (repris par la proposition sénatoriale)", q: "« Sauf si elle revêt les caractères de la force majeure, la faute de la victime privée de discernement n'a pas d'effet exonératoire. »" } },
            { attention: "La faute objective est favorable à la victime quand l'enfant est **auteur**, mais défavorable quand il est **victime** (Derguini) : c'est le paradoxe que les projets de réforme veulent corriger." }
          ]}
        ]}
      ]}
    ]}
  ]},
  { t: "Section 2 – Les faits justificatifs", c: [
    { p: "Repris du droit pénal : ordre de la loi et commandement de l'autorité légitime (art. 122-4 C. pén.), légitime défense (art. 122-5), état de nécessité (art. 122-7). Ils effacent le caractère illicite du comportement." }
  ], s: [
    { t: "§1. La faute dans l'exercice d'un droit", s: [
      { t: "A- La théorie générale de l'abus de droit", c: [
        { a: "clement-bayard-1915", r: "Le propriétaire qui érige des carcasses hérissées de tiges de fer, sans utilité pour lui, dans le seul but de nuire au voisin (hangar à dirigeables) abuse de son droit." },
        { cp: "Le défendeur répond « j'avais le droit de le faire » ? Cherche l'intention de nuire ou l'absence d'intérêt légitime : l'exercice d'un droit devient fautif quand il est détourné de sa finalité." }
      ]},
      { t: "B- Le cas spécifique des abus de la liberté d'expression", c: [
        { p: "**Propos liminaires** : l'art. 1240 s'est d'abord appliqué aux propos dommageables." },
        { a: "civ2-1997-04-02-guignols-citroen", r: "L'art. 1382 n'exige pas l'intention de nuire ; le caractère outrancier et répété des propos devait conduire à retenir une faute." },
        { a: "ass-plen-2000-07-12-guignols-citroen", r: "Mais l'Assemblée plénière écarte la faute : les propos relevaient du registre satirique." },
        { p: "**L'exclusion du droit commun** : articles 23 à 41-1 de la loi du 29 juillet 1881 sur la liberté de la presse." },
        { a: "ass-plen-2000-07-12-lieutenant-algerie", r: "Les abus de la liberté d'expression prévus et réprimés par la loi de 1881 ne peuvent être réparés sur le fondement de l'art. 1382." },
        { a: "ass-plen-2000-07-12-on-ne-badine-pas-avec-la-mort", r: "Même solution." },
        { a: "civ1-2005-09-27-figaro-litteraire", r: "Les abus de la liberté d'expression envers les personnes ne peuvent être poursuivis sur le fondement de l'art. 1382." },
        { a: "civ1-2014-07-02-ppr-gucci-empire-menace", r: "Hors restriction légale, la liberté d'expression ne peut être sanctionnée sur le fondement de l'art. 1382, **sauf dénigrement de produits ou services**." },
        { a: "civ1-2020-03-25-denonciation-temeraire-cci-montpellier", r: "La dénonciation à l'autorité judiciaire de faits inexacts n'est fautive que si son auteur connaissait leur inexactitude (dénonciation calomnieuse) ; hors des textes spéciaux, pas de faute de « dénonciation téméraire »." },
        { a: "civ2-2022-11-24-denonciation-temeraire-plaintes", r: "Même solution, combinée avec l'autorité de la chose jugée au pénal." },
        { a: "civ1-2008-04-08-greenpeace-areva", r: "Dénigrement des marques : appréciation au regard de la liberté d'expression et du but d'intérêt général." },
        { a: "civ1-2013-11-27-allianz-agent-general", r: "Le dénigrement de produits ou services commis par voie de presse relève de l'art. 1382, non de la loi de 1881." },
        { cp: "Propos dommageables dans un cas pratique : (1) atteinte à une **personne** (honneur, considération) → loi de 1881 exclusivement, art. 1240 inapplicable ; (2) **dénigrement** de produits ou services → art. 1240 ; (3) vie privée → art. 9 C. civ." }
      ]}
    ]},
    { t: "§2. L'acceptation des risques", s: [
      { t: "A- Domaine de l'acceptation des risques", c: [
        { a: "civ2-2010-11-04-motard-entrainement-circuit", r: "L'acceptation des risques ne peut plus être opposée à la victime qui agit contre le gardien sur le fondement de l'art. 1384 al. 1er." },
        { p: "Elle conserve un rôle en matière de faute : dans une activité sportive, le pratiquant accepte les risques normaux du jeu ; seule une faute caractérisée engage la responsabilité d'un autre pratiquant." }
      ]},
      { t: "B- Conditions de l'acceptation des risques", c: [
        { a: "civ2-2004-09-23-karate-coup-poing-ouvert", r: "La responsabilité d'un sportif envers un autre participant suppose une faute caractérisée par une violation des règles du sport." },
        { a: "civ2-2016-04-14-football-coup-tete", r: "Circonstances du coup indéterminées : pas de manquement caractérisé aux règles du jeu." },
        { a: "civ2-2004-06-10-polo-marquage-dangereux", r: "Le juge civil n'est pas lié par l'appréciation de l'arbitre." },
        { a: "civ2-2014-11-20-football-tacle-gardien", r: "Un carton jaune et la gravité des blessures ne suffisent pas à prouver la faute caractérisée." },
        { cp: "Dommage entre sportifs : cherche la règle du jeu violée et montre qu'elle l'a été de façon caractérisée (brutalité, déloyauté, risque anormal). Ni l'arbitre, ni la gravité du dommage ne tranchent seuls." }
      ]}
    ]},
    { t: "§3. Le consentement de la victime", s: [
      { t: "A- Le consentement au dommage", c: [
        { p: "*Volenti non fit injuria* : le consentement de la victime à une atteinte portant sur un droit dont elle peut disposer peut écarter la responsabilité. Il est sans effet pour les atteintes à l'intégrité corporelle, hors cas autorisés par la loi (acte médical consenti, art. 16-3 C. civ.)." },
        { txt: { r: "Art. 1257-1 du projet de réforme ministériel (non repris par la proposition sénatoriale)", q: "« Ne donne pas non plus lieu à responsabilité le fait dommageable portant atteinte à un droit ou à un intérêt dont la victime pouvait disposer, si celle-ci y a consenti. »" } }
      ]},
      { t: "B- Le consentement à la non-responsabilité", c: [
        { a: "civ1-2017-07-05-cast-clause-garantie-dol", r: "Les art. 1240 et 1241 sont d'ordre public : sont nulles les clauses d'exonération ou d'atténuation de responsabilité en matière délictuelle." },
        { a: "civ2-1955-02-17-clause-non-responsabilite-delictuelle", r: "Solution déjà posée en 1955." },
        { txt: { r: "Projets de réforme", q: "Art. 1281 (projet 2017) : les clauses limitatives ou exclusives sont en principe valables en matière contractuelle comme extracontractuelle, sauf dommage corporel. Art. 1283 : en matière extracontractuelle, on ne peut exclure ou limiter la responsabilité pour faute. Art. 1303-15 de la proposition de loi du 16 septembre 2025 : principe de validité, sauf dommage corporel." } },
        { attention: "Droit positif : clause exonératoire **nulle** en matière extracontractuelle. Les textes contraires ne sont que des projets." }
      ]}
    ]}
  ]}
  ]
},

/* =================== PARTIE 1 · TITRE 2 · CHAPITRE 2 : FAIT DES CHOSES =================== */
{
  id: "choses", kick: "Partie 1 · Titre 2 · Chapitre 2", t: "Le fait des choses", plan: "Plan du Chapitre 2 du Titre 2 de la Partie 1", manuel: [14],
  intro: "Responsabilité de plein droit du gardien (art. [[1242]], al. 1er). En cas pratique, c'est souvent le fondement le plus avantageux pour la victime : elle n'a pas à prouver de faute. Ordre d'examen : (1) régime spécial applicable ? (2) une chose ; (3) le fait de la chose (rôle actif) ; (4) un gardien ; (5) les causes d'exonération.",
  s: [
  { t: "Section 1 – L'éclosion d'un principe général du fait des choses", s: [
    { t: "§1. La création jurisprudentielle du régime général", s: [
      { t: "A- L'arrêt Teffaine", c: [
        { a: "teffaine-1896", r: "Explosion de la chaudière d'un remorqueur : le propriétaire répond du vice de la chose sur le fondement de l'art. 1384 al. 1er et ne peut s'exonérer par la faute du constructeur." },
        { p: "Contexte : loi du 9 avril 1898 sur les accidents du travail, qui prend ensuite le relais pour les ouvriers." }
      ]},
      { t: "B- L'arrêt Jand'heur", c: [
        { a: "jandheur-1930", r: "Présomption de **responsabilité** (et non de faute) : peu importe que la chose soit actionnée ou non par la main de l'homme, ou qu'elle ait un vice ; le gardien ne s'exonère qu'en prouvant un cas fortuit, une force majeure ou une cause étrangère qui ne lui soit pas imputable ; l'absence de faute est indifférente." }
      ]}
    ]},
    { t: "§2. La coexistence de régimes spéciaux", s: [
      { t: "A- Les régimes spéciaux originaires", s: [
        { t: "1. La responsabilité du fait des animaux (art. 1243)", c: [
          { p: "Le propriétaire d'un animal, ou celui qui s'en sert pendant qu'il est à son usage, répond du dommage que l'animal a causé, qu'il soit sous sa garde ou égaré. Le régime suit la logique de la garde." },
          { a: "civ2-2019-01-17-chiens-chevaux", r: "Même sans contact, le comportement anormal des chiens établit leur rôle causal." },
          { a: "civ2-2020-07-16-manadier-cheval", r: "La garde suppose usage, direction et contrôle ; le seul pouvoir d'instruction du manadier ne suffit pas." }
        ]},
        { t: "2. La responsabilité du fait des bâtiments en ruine (art. 1244)", c: [
          { p: "Le **propriétaire** répond de la ruine de son bâtiment lorsqu'elle est due à un défaut d'entretien ou à un vice de construction. La victime doit prouver ce défaut ou ce vice." },
          { a: "civ2-2000-03-23-grange", r: "L'art. 1244 n'empêche pas d'agir sur l'art. 1242 al. 1er contre un gardien non propriétaire." },
          { a: "civ2-2008-10-16-basculement-immeuble", r: "Hors ruine, l'art. 1242 al. 1er s'applique." },
          { cp: "Mur ou toiture qui s'effondre : contre le propriétaire, art. 1244 (prouver la ruine et le défaut d'entretien ou le vice) ; contre un gardien non propriétaire, ou s'il n'y a pas « ruine », art. 1242 al. 1er." }
        ]}
      ]},
      { t: "B- Les régimes spéciaux modernes", c: [
        { p: "Accidents de la circulation (loi du 5 juillet 1985), produits défectueux (art. 1245 s.), troubles anormaux de voisinage (art. 1253). La professeure les renvoie à la **Partie 3** du cours ; ils sont présentés pour le cas pratique dans la partie « Hors plan »." }
      ]}
    ]}
  ]},
  { t: "Section 2 – Les conditions d'engagement de la responsabilité du fait des choses", s: [
    { t: "§1. Le domaine d'application", s: [
      { t: "A- Le domaine de principe", c: [
        { p: "Toute chose : mobilière ou immobilière, dangereuse ou non, actionnée ou non par l'homme, avec ou sans vice (Jand'heur)." }
      ]},
      { t: "B- Les exclusions", c: [
        { liste: ["*Specialia generalibus derogant* : l'art. 1242 al. 1er s'efface devant un régime spécial applicable (véhicule terrestre à moteur impliqué : loi de 1985 exclusivement ; animal : art. 1243 ; ruine : art. 1244 contre le propriétaire ; communication d'incendie : art. 1242 al. 2).", "*Res nullius* : les choses sans maître (neige, eau de pluie) n'ont pas de gardien, sauf à les rattacher à une chose gardée (le sol)."] },
        { a: "civ2-2023-06-15-cassegrain-verglas", r: "La société est gardienne non du verglas mais du **sol** de sa propriété, rendu anormalement glissant." }
      ]}
    ]},
    { t: "§2. Le rôle causal de la chose", s: [
      { t: "A- Le rôle de la chose en mouvement", c: [
        { liste: ["**1. Contact entre la chose en mouvement et le siège du dommage** : la chose est présumée avoir été l'instrument du dommage ; le gardien doit prouver une cause étrangère.", "**2. Absence de contact** : la victime doit prouver le rôle actif de la chose (comportement anormal, frayeur provoquée…)."] },
        { a: "civ2-1997-04-02-escalator-meridien", r: "Escalator en mouvement, instrument du dommage : au gardien de prouver une cause étrangère." }
      ]},
      { t: "B- Le rôle de la chose inerte", c: [
        { p: "La victime doit prouver l'**anormalité** de la chose inerte : position, état ou fonctionnement anormal." },
        { a: "civ2-2005-02-24-baie-vitree", r: "Porte vitrée fragile qui se brise : l'anormalité tient à l'état de la chose." },
        { a: "civ2-2005-02-24-tremplin-gruissan", r: "Tremplin sans dangerosité propre, détourné de son usage : pas d'anormalité, pas d'instrument du dommage." },
        { a: "civ2-2022-05-25-plaque-fibrociment", r: "Le seul défaut d'entretien ne suffit pas : il faut caractériser l'anormalité de la plaque." },
        { a: "civ2-2023-06-15-cassegrain-verglas", r: "Le sol est en position normale s'il permet le passage, anormale s'il est rendu glissant." },
        { a: "civ2-2023-11-30-tige-filetee", r: "Tige filetée de configuration anormale : au moins pour partie l'instrument du dommage." },
        { cp: "Chose immobile (porte, sol, escalier, mobilier) : la présomption ne joue pas. Démontre l'anormalité avec les faits (fragilité, position, absence de signalisation) ; sinon, le dommage s'explique par le fait de la victime." }
      ]}
    ]},
    { t: "§3. L'imputation du fait de la chose à son gardien", s: [
      { t: "A- La définition de la garde", s: [
        { t: "1. Les solutions de l'arrêt Franck", c: [
          { a: "franck-1941", r: "La garde est le pouvoir d'**usage, de direction et de contrôle** de la chose : le propriétaire volé n'est plus gardien." },
          { a: "civ2-2024-09-05-nuage-toxique-airbus", r: "La société propriétaire et exploitante de l'usine est gardienne des substances qui peuvent émaner en son sein, même non identifiées." }
        ]},
        { t: "2. Le transfert de la garde", c: [
          { p: "Le propriétaire est **présumé gardien** ; il ne cesse de l'être que s'il prouve un transfert des pouvoirs d'usage, de direction et de contrôle." },
          { a: "civ2-1996-02-28-bouteille-continent", r: "Le client d'un libre-service qui manipule une bouteille n'en devient pas gardien." },
          { a: "civ2-2003-06-19-tondeuse", r: "Tondeuse remise brièvement : pas de transfert de garde." },
          { a: "civ2-2010-04-15-jument-amie", r: "L'amie chargée de l'entretien courant d'une jument n'en a pas la garde." },
          { a: "civ2-2026-05-07-jument-que-je-t-aime", r: "La propriétaire reste gardienne faute de prouver que le cavalier exerçait les pouvoirs de direction et de contrôle." }
        ]}
      ]},
      { t: "B- Le caractère alternatif de la garde", s: [
        { t: "1. La garde en commun", c: [
          { a: "civ2-2005-01-13-football-gardien-de-but", r: "Dans un jeu collectif, nul n'a individuellement le contrôle du ballon : pas de gardien." },
          { a: "civ2-1990-05-09-voilier-skipper", r: "Une activité coordonnée ne suffit pas à rendre la garde commune à tous les équipiers." },
          { a: "civ2-2002-07-11-briquet-ronds-de-fumee", r: "Avoir montré le jeu ne confère pas la garde commune du briquet." },
          { txt: { r: "Art. L. 321-3-1 C. sport (loi n° 2012-348 du 12 mars 2012)", q: "« Les pratiquants ne peuvent être tenus pour responsables des dommages matériels causés à un autre pratiquant par le fait d'une chose qu'ils ont sous leur garde, au sens du premier alinéa de l'article 1242 du code civil, à l'occasion de l'exercice d'une pratique sportive au cours d'une manifestation sportive ou d'un entraînement en vue de cette manifestation sportive sur un lieu réservé de manière permanente ou temporaire à cette pratique. »" } }
        ]},
        { t: "2. La garde de la structure et la garde du comportement", c: [
          { a: "oxygene-liquide-1956", r: "Pour une chose dotée d'un dynamisme propre (bouteille d'oxygène), le fabricant peut rester gardien de la structure tandis que le détenteur a la garde du comportement." },
          { a: "civ2-1991-01-16-televiseur-itt-oceanic", r: "Incendie d'un téléviseur : vice interne, garde de la structure." },
          { a: "civ1-2007-02-27-aeroclub-bastia", r: "Aéronef : application et limites de la distinction." },
          { a: "civ2-2022-03-31-tracteur-garage", r: "Tracteur confié à un garage : le propriétaire reste gardien de la structure si l'accident vient d'un défaut dont il n'a pas averti le garagiste." },
          { attention: "La distinction ne vaut que pour les choses dotées d'un dynamisme propre et dangereux (Civ. 2e, 20 nov. 2003, cigarettes)." }
        ]}
      ]},
      { t: "C- La capacité de discernement du gardien", c: [
        { a: "gabillet-1984", r: "Un enfant de 3 ans peut être gardien : la garde s'apprécie sans discernement." },
        { a: "civ2-2020-11-26-enfant-pistolet", r: "Mais l'enfant de 11 ans à qui on prête un pistolet n'en a pas nécessairement la garde." }
      ]}
    ]}
  ]},
  { t: "Section 3 – Les causes d'exonération de la responsabilité du gardien", s: [
    { t: "§1. L'indifférence de l'absence de faute personnelle du gardien", c: [
      { p: "**Principe** : arrêt Jand'heur, l'absence de faute ne libère pas le gardien. **Exception** : art. 1242 al. 2 et 3 (communication d'incendie), où la faute du détenteur doit être prouvée." },
      { a: "civ2-1991-01-16-televiseur-itt-oceanic", r: "L'al. 2 ne s'applique pas lorsque l'incendie est la conséquence d'une cause antérieure (implosion du téléviseur) : retour à l'al. 1er." }
    ]},
    { t: "§2. Les causes étrangères : les causes d'exonération communes aux autres régimes", c: [
      { a: "civ2-1982-07-21-desmares", r: "Le « tout ou rien » de 1982…" },
      { a: "civ2-1987-04-06-boirie", r: "…abandonné dès 1987 : la faute de la victime exonère partiellement." },
      { a: "civ2-2016-03-03-sncf-voyageur", r: "La faute du voyageur qui remonte dans un train en marche n'était ni imprévisible ni irrésistible pour la SNCF." },
      { a: "civ2-2024-09-19-ski-cross", r: "Le positionnement d'un concurrent en ski cross n'est pas imprévisible : pas de force majeure." },
      { a: "civ2-2022-04-07-fait-victime-cause-exclusive", r: "Seul le fait de la victime cause exclusive du dommage fait obstacle à la responsabilité du gardien." }
    ]},
    { t: "§3. La question de l'acceptation des risques", c: [
      { a: "civ2-2010-11-04-motard-entrainement-circuit", r: "L'acceptation des risques n'est pas opposable à la victime agissant contre le gardien." },
      { a: "civ2-2016-04-14-sidecar-cross", r: "Side-car : le pilote est seul gardien ; l'acceptation des risques n'est pas opposable au passager." },
      { attention: "Depuis 2012, l'art. L. 321-3-1 C. sport écarte la responsabilité du fait des choses entre pratiquants, mais **seulement pour les dommages matériels** : les dommages corporels restent couverts par l'art. 1242 al. 1er." }
    ]}
  ]}
  ]
},

/* =================== PARTIE 1 · TITRE 2 · CHAPITRE 3 : FAIT D'AUTRUI =================== */
{
  id: "autrui", kick: "Partie 1 · Titre 2 · Chapitre 3", t: "Le fait d'autrui", plan: "Plan du Chapitre 3 du Titre 2 de la Partie 1", manuel: [15],
  intro: "On répond d'autrui lorsqu'on a autorité sur lui ou qu'on organise son activité. En cas pratique, cela permet d'atteindre un responsable **solvable et assuré** (parents, employeur, association) à côté de l'auteur direct. Commence toujours par les cas légaux (art. [[1242]] al. 4 à 8) avant le principe général de l'al. 1er.",
  c: [
    { txt: { r: "Art. 1242 C. civ. (version issue de la loi n° 2025-568 du 23 juin 2025, telle que reproduite dans le plan)", q: "« On est responsable non seulement du dommage que l'on cause par son propre fait, mais encore de celui qui est causé par le fait des personnes dont on doit répondre, ou des choses que l'on a sous sa garde. […] Les parents, en tant qu'ils exercent l'autorité parentale, sont, de plein droit, solidairement responsables du dommage causé par leurs enfants mineurs, sauf lorsque que ceux-ci ont été confiés à un tiers par une décision administrative ou judiciaire. Les maîtres et les commettants, du dommage causé par leurs domestiques et préposés dans les fonctions auxquelles ils les ont employés ; Les instituteurs et les artisans, du dommage causé par leurs élèves et apprentis pendant le temps qu'ils sont sous leur surveillance. La responsabilité ci-dessus a lieu, à moins que les parents et les artisans ne prouvent qu'ils n'ont pu empêcher le fait qui donne lieu à cette responsabilité. En ce qui concerne les instituteurs, les fautes, imprudences ou négligences invoquées contre eux comme ayant causé le fait dommageable, devront être prouvées, conformément au droit commun, par le demandeur, à l'instance. »" } },
    { p: "Projets de réforme : projet de la Chancellerie du 13 mars 2017 (art. 1245 à 1249) et proposition sénatoriale du 29 juillet 2020 (art. 1243 à 1248). Ils posent que la responsabilité du fait d'autrui suppose la preuve d'un fait de nature à engager la responsabilité de l'auteur direct." }
  ],
  s: [
  { t: "Section 1 – Les cas légaux de responsabilité du fait d'autrui", c: [
    { p: "**Les instituteurs** (loi du 5 avril 1937 ; art. L. 911-4 C. éduc.) : faute **prouvée** de l'enseignant ; dans l'enseignement public, la responsabilité de l'État est **substituée** à celle de l'enseignant, qui ne peut être mis en cause par la victime ; action devant le juge judiciaire, contre l'autorité académique ; prescription de trois ans à compter du fait dommageable." },
    { a: "civ2-2026-06-18-instituteurs-cour-recreation", r: "La substitution de l'État suppose une faute personnelle de l'enseignant, que le juge doit caractériser." },
    { p: "**Les artisans** du fait de leurs apprentis : responsabilité de l'art. 1242 al. 6, dont ils peuvent s'exonérer en prouvant qu'ils n'ont pu empêcher le fait (al. 7). Cas rare en pratique." }
  ], s: [
    { t: "§1. La responsabilité des parents du fait de leurs enfants", s: [
      { t: "A- Les conditions de la responsabilité des parents du fait de leurs enfants", c: [
        { p: "Texte originel : « Le père et la mère, en tant qu'ils exercent l'autorité parentale, sont solidairement responsables du dommage causé par leurs enfants mineurs **habitant avec eux** ». L'art. 3 de la loi n° 2025-568 du 23 juin 2025 a remplacé « le père et la mère » par « les parents », ajouté « de plein droit » et supprimé la cohabitation, remplacée par l'exception du mineur confié à un tiers par décision administrative ou judiciaire." }
      ], s: [
        { t: "1. Un lien de filiation", c: [{ p: "Seuls les parents (filiation établie) sont visés ; les grands-parents, beaux-parents ou tuteurs ne le sont pas par l'al. 4." }] },
        { t: "2. La minorité de l'enfant", c: [{ p: "Appréciée au jour du fait dommageable ; l'émancipation fait cesser la responsabilité." }] },
        { t: "3. L'exercice de l'autorité parentale", s: [
          { t: "a) Notion", c: [{ p: "Le parent qui n'exerce pas l'autorité parentale (retrait, exercice exclusif par l'autre) n'est pas responsable sur ce fondement." }] },
          { t: "b) Abandon du critère de « la cohabitation »", c: [
            { a: "civ2-1997-02-19-samda", r: "Le droit de visite et d'hébergement ne fait pas cesser la cohabitation avec le parent gardien." },
            { a: "civ2-2000-01-20-cohabitation-residence-habituelle", r: "Cohabitation = résidence habituelle : un séjour chez la grand-mère ne l'interrompt pas." },
            { a: "civ2-2000-03-09-crayon-centre-medico-pedagogique", r: "Enfant confié temporairement à un centre médico-pédagogique : la cohabitation n'est pas interrompue." },
            { a: "crim-2014-04-29-pere-droit-de-visite", r: "Seul le parent chez qui la résidence habituelle est fixée est responsable de plein droit." },
            { a: "cc-2023-04-21-qpc-1045-residence-habituelle", r: "La condition de cohabitation est conforme à la Constitution." },
            { a: "ass-plen-2024-06-28-cohabitation-autorite-parentale", r: "Revirement : la cohabitation résulte de la résidence de l'enfant chez l'un ou l'autre parent ; les deux parents exerçant l'autorité parentale sont responsables, même s'ils sont séparés." },
            { p: "La **loi du 23 juin 2025** supprime la condition légale de cohabitation : seule l'exception du mineur confié à un tiers par décision administrative ou judiciaire subsiste." },
            { attention: "Pour un fait antérieur à l'entrée en vigueur de la loi de 2025, raisonne avec l'arrêt de 2024 ; pour un fait postérieur, applique le nouveau texte. Vérifie toujours la date des faits du cas pratique." }
          ]}
        ]},
        { t: "4. Le fait dommageable de l'enfant", c: [
          { a: "fullenwarth-1984", r: "Il suffit d'un acte de l'enfant, cause directe du dommage." },
          { a: "civ2-2001-05-10-levert", r: "La responsabilité des parents n'est pas subordonnée à l'existence d'une faute de l'enfant." },
          { a: "ass-plen-2002-12-13-fait-non-fautif-mineur", r: "Le fait, même non fautif, du mineur suffit." },
          { txt: { r: "Art. 1245 du projet de la Chancellerie et art. 1244 de la proposition sénatoriale", q: "La responsabilité du fait d'autrui « suppose la preuve d'un fait de nature à engager la responsabilité de l'auteur direct du dommage »." } },
          { attention: "Les projets reviendraient sur Levert : seul un fait de nature à engager la responsabilité de l'enfant suffirait. Ce n'est pas le droit positif." }
        ]}
      ]},
      { t: "B- La nature de la responsabilité des parents du fait de leurs enfants", s: [
        { t: "1. Une responsabilité de plein droit", c: [
          { a: "civ2-1997-02-19-bertrand", r: "Responsabilité de plein droit : les parents ne s'exonèrent pas en prouvant qu'ils n'ont pas commis de faute de surveillance ou d'éducation." }
        ]},
        { t: "2. L'exonération par la preuve d'une cause étrangère", c: [
          { a: "civ2-2011-02-17-rollers-cycliste", r: "Seule la force majeure ou la faute de la victime exonère ; l'exonération totale suppose que cette faute ait été imprévisible et irrésistible pour les parents." },
          { cp: "Majeure type : « Les parents qui exercent l'autorité parentale sont responsables de plein droit du dommage causé par le fait, même non fautif, de leur enfant mineur (art. 1242 al. 4 ; Ass. plén., 13 déc. 2002) ; ils ne s'exonèrent que par la force majeure ou la faute de la victime (Civ. 2e, 19 févr. 1997, Bertrand). »" }
        ]}
      ]}
    ]},
    { t: "§2. La responsabilité des commettants du fait de leurs préposés", c: [
      { p: "**Propos introductifs sur le fondement** : garantie offerte à la victime par celui qui profite de l'activité du préposé et qui doit l'assurer." },
      { a: "ass-plen-2000-02-25-costedoat", r: "Le commettant est le vrai débiteur de la réparation : le préposé qui agit dans les limites de sa mission n'engage pas sa responsabilité envers les tiers." }
    ], s: [
      { t: "A- Les conditions de la responsabilité du commettant du fait de ses préposés", s: [
        { t: "1. Un lien de préposition", c: [
          { p: "Pouvoir de donner des **ordres ou des instructions** sur la manière de remplir les fonctions (le contrat de travail le fait présumer, mais un lien de fait suffit)." },
          { a: "civ2-2020-01-16-damioli-gardien-preposé", r: "Les qualités de gardien et de préposé sont incompatibles : le salarié n'est pas gardien du camion de son employeur." }
        ]},
        { t: "2. Un fait fautif du préposé", c: [
          { a: "civ2-2004-04-08-joueur-professionnel-om-nantes", r: "En compétition sportive, le joueur professionnel salarié engage la responsabilité de son employeur par une faute caractérisée par une violation des règles du jeu." }
        ]},
        { t: "3. Un rattachement aux fonctions du préposé", c: [{ p: "Le dommage doit avoir été causé dans les fonctions auxquelles le préposé était employé ; le contentieux se concentre sur l'abus de fonction." }] }
      ]},
      { t: "B- Les causes d'exonération du commettant", s: [
        { t: "1. L'abus de fonction", c: [
          { a: "ass-plen-1988-05-19-la-cite", r: "Le commettant ne s'exonère que si le préposé a agi **hors des fonctions** auxquelles il était employé, **sans autorisation** et **à des fins étrangères** à ses attributions : conditions cumulatives." },
          { a: "civ2-2004-06-03-jansou", r: "Application des trois conditions." },
          { a: "civ2-2011-03-17-irsam-professeur-de-musique", r: "Le préposé qui trouve dans ses fonctions les moyens et l'occasion de sa faute n'agit pas hors de ses fonctions." },
          { a: "civ2-1998-01-14-sablage-volets", r: "La victime qui ne pouvait légitimement croire que le préposé agissait pour le commettant ne peut se prévaloir de l'art. 1242 al. 5." },
          { a: "civ2-1998-04-29-bnp-remise-especes", r: "Même solution (remise d'espèces au préposé dans des conditions anormales)." },
          { a: "civ2-2013-02-07-le-conservateur", r: "La croyance légitime de la victime s'apprécie à la date de l'opération." },
          { cp: "Teste les trois conditions dans l'ordre, puis vérifie la croyance légitime de la victime : si elle savait (ou devait savoir) que le préposé agissait pour son propre compte, le commettant est libéré." }
        ]},
        { t: "2. La cause étrangère", c: [{ p: "Force majeure ou faute de la victime, selon le droit commun." }] }
      ]},
      { t: "C- L'immunité du préposé", s: [
        { t: "1. Les conditions de l'immunité du préposé", c: [
          { a: "ass-plen-2000-02-25-costedoat", r: "N'engage pas sa responsabilité à l'égard des tiers le préposé qui agit sans excéder les limites de la mission impartie par son commettant." },
          { a: "civ2-2009-05-28-preposé-conducteur-loi-1985", r: "Le préposé conducteur d'un véhicule de son commettant n'est pas tenu d'indemniser la victime (loi de 1985 combinée avec Costedoat)." },
          { a: "civ1-2007-07-12-radiotherapie-croix-rouge", r: "Le médecin salarié qui agit dans les limites de sa mission bénéficie de l'immunité." }
        ]},
        { t: "2. Les limites de l'immunité du préposé", c: [
          { a: "ass-plen-2001-12-14-cousin", r: "Faute pénale intentionnelle : le préposé condamné pénalement engage sa responsabilité civile, même s'il a agi sur ordre." },
          { txt: { r: "Art. 121-3 C. pén.", q: "« Il n'y a point de crime ou de délit sans intention de le commettre. Toutefois, lorsque la loi le prévoit, il y a délit en cas d'imprudence, de négligence ou de mise en danger délibérée de la personne d'autrui. […] »" } },
          { p: "**La faute pénale non intentionnelle** : la faute qualifiée de l'art. 121-3 C. pén." },
          { a: "crim-2006-03-28-stade-de-france", r: "Faute pénale non intentionnelle qualifiée (art. 121-3) : le préposé titulaire d'une délégation de pouvoirs engage sa responsabilité." },
          { p: "**La faute civile intentionnelle** :" },
          { a: "civ2-2007-12-20-voiturier-recours-commettant", r: "Faute civile intentionnelle : la victime n'a pas d'action contre le préposé resté dans sa mission, « hors le cas où le préjudice résulte d'une infraction pénale ou d'une faute intentionnelle » ; le commettant n'a donc pas de recours subrogatoire contre lui." },
          { a: "civ2-2008-02-21-gardienne-courrier", r: "Même formule : l'immunité cède devant l'infraction pénale ou la faute intentionnelle." }
        ]},
        { t: "3. Récapitulatif", c: [
          { schema: { type: "tableau", titre: "Qui répond du fait du préposé ?", colonnes: ["Situation du préposé", "Responsabilité du commettant", "Responsabilité du préposé"], lignes: [
            ["Agit dans les limites de sa mission", "Oui (art. 1242 al. 5)", "Non (immunité Costedoat), sauf infraction pénale intentionnelle (Cousin), faute qualifiée (Crim. 2006), faute civile intentionnelle"],
            ["Commet un abus de fonction (trois conditions)", "Non", "Oui (art. 1240)"],
            ["Dépasse les limites de sa mission sans abus de fonction", "Oui", "Oui (art. 1240) : coresponsables envers la victime"]
          ]}}
        ]}
      ]}
    ]}
  ]},
  { t: "Section 2 – L'extension jurisprudentielle de la responsabilité du fait d'autrui", c: [
    { a: "ass-plen-1991-03-29-blieck", r: "L'association qui accepte la charge d'organiser et de contrôler, à titre permanent, le mode de vie d'un handicapé répond de ses actes sur le fondement de l'art. 1384 al. 1er : naissance d'un principe général." }
  ], s: [
    { t: "§1. Les cas de responsabilité fondée sur l'article 1242 alinéa 1er", s: [
      { t: "A- La responsabilité des personnes chargées de contrôler et d'organiser le mode de vie d'autrui", c: [
        { a: "civ2-2002-06-06-sauvegarde-angers", r: "L'association chargée par le juge des enfants du mineur en reste responsable même pendant un séjour chez ses parents." },
        { a: "civ2-2002-06-06-association-havraise", r: "Même solution." },
        { a: "civ2-2004-10-07-departement-tuteur-mineure", r: "Le département tuteur répond de plein droit du mineur tant qu'aucune décision n'a suspendu sa mission." },
        { a: "civ1-2011-12-15-maison-de-retraite", r: "Limite : l'établissement qui héberge une personne en vertu d'un contrat n'en répond pas de plein droit." },
        { p: "La loi du 23 juin 2025 tire la conséquence pour les parents : ils ne répondent plus du mineur confié à un tiers par décision administrative ou judiciaire." }
      ]},
      { t: "B- La responsabilité des personnes chargées de contrôler et d'organiser l'activité d'autrui", c: [
        { a: "civ2-1995-05-22-club-de-varetz", r: "Les associations sportives qui organisent, dirigent et contrôlent l'activité de leurs membres en compétition répondent des dommages qu'ils causent." },
        { a: "civ2-1995-05-22-uspeg-monteux", r: "Même solution (bagarre lors d'un match)." },
        { a: "civ2-2002-12-12-majorettes", r: "Extension à une association de majorettes lors d'un défilé." },
        { a: "civ2-2006-10-26-fnsea", r: "Un syndicat n'organise pas l'activité de ses adhérents lors des manifestations : pas de responsabilité de plein droit." },
        { a: "civ2-2008-09-11-association-chasse-coligny", r: "Une association communale de chasse n'organise pas l'activité de ses membres pendant une battue." }
      ]}
    ]},
    { t: "§2. La nature de la responsabilité fondée sur l'article 1242 alinéa 1er", s: [
      { t: "A- Une responsabilité additionnelle", c: [
        { a: "ass-plen-2007-06-29-comites-regionaux-rugby", r: "L'association sportive ne répond que si une faute caractérisée par une violation des règles du jeu est imputable à un ou plusieurs de ses membres, même non identifiés." },
        { a: "civ2-2003-11-20-clubs-sportifs", r: "Effondrement de mêlée sans faute caractérisée : pas de responsabilité." }
      ]},
      { t: "B- Une responsabilité de plein droit", c: [
        { a: "crim-1997-03-26-notre-dame-des-flots", r: "L'établissement responsable du mineur ne s'exonère pas en prouvant l'absence de faute." },
        { cp: "Groupement (club, association, établissement) : vérifie (1) la mission d'organiser et contrôler le mode de vie ou l'activité, (2) pour les activités sportives, la faute caractérisée d'un membre, (3) l'absence de cause étrangère. Puis cumule avec la faute de l'auteur direct (art. 1240)." }
      ]}
    ]}
  ]}
  ]
}
  ],

  /* ====================== HORS PLAN : notions du manuel, orientées cas pratique ======================
     Champs : t, kick, manuel (chapitres du manuel), interet, developper (ce que la notion permet de développer),
     textes, methode (étapes du raisonnement), arrets, pieges ({faux, juste}). */
  horsplan: [
{
  id: "badinter", t: "Les accidents de la circulation (loi Badinter)", kick: "Régime spécial · Partie 3 du cours", manuel: [16],
  interet: "Dès qu'un véhicule terrestre à moteur (voiture, moto, scooter, tracteur, engin de chantier) est impliqué, la loi n° 85-677 du 5 juillet 1985 s'applique **à l'exclusion** des art. 1240 et 1242. C'est le régime le plus fréquent en cas pratique et le plus favorable aux victimes non conductrices : ni la force majeure ni le fait d'un tiers ne leur sont opposables.",
  developper: [
    "La notion d'**implication**, plus large que la causalité : il suffit que le véhicule soit intervenu à quelque titre que ce soit dans l'accident.",
    "La **hiérarchie des victimes** : piétons et passagers (quasi-automaticité), victimes « super-protégées » (moins de 16 ans, plus de 70 ans, invalidité d'au moins 80 %), conducteurs (leur faute réduit ou exclut l'indemnisation).",
    "La distinction entre **dommages corporels** (art. 3) et **dommages aux biens** (art. 5).",
    "L'articulation avec l'**immunité du préposé** conducteur (Civ. 2e, 28 mai 2009)."
  ],
  textes: ["Loi n° 85-677 du 5 juillet 1985, art. 1er à 6"],
  methode: [
    "**Domaine (art. 1er)** : un accident de la circulation (événement fortuit, sur une voie publique ou privée, véhicule en circulation ou en stationnement) ; un VTAM (pas les trains ni les tramways sur voies propres) ; l'implication de ce véhicule ; l'imputation du dommage à l'accident.",
    "**Implication** : véhicule en mouvement entré en contact avec la victime → impliqué. Sans contact, ou véhicule à l'arrêt, la victime doit montrer qu'il a joué un rôle (manœuvre perturbatrice, position gênante).",
    "**Débiteur** : le conducteur ou le gardien de chaque VTAM impliqué, et son assureur (assurance obligatoire).",
    "**Défenses exclues (art. 2)** : la force majeure et le fait d'un tiers ne sont opposables à aucune victime, même conductrice.",
    "**Victime non conductrice, dommage corporel (art. 3)** : indemnisée sauf faute inexcusable cause exclusive de l'accident ; si elle a moins de 16 ans, plus de 70 ans ou un taux d'incapacité d'au moins 80 %, indemnisée dans tous les cas, sauf si elle a volontairement recherché le dommage.",
    "**Victime conductrice (art. 4)** : sa faute, appréciée en elle-même, limite ou exclut son indemnisation.",
    "**Dommages aux biens (art. 5)** et **victimes par ricochet (art. 6)** : la faute de la victime directe leur est opposable dans les mêmes limites."
  ],
  arrets: [
    { a: "civ2-2009-05-28-preposé-conducteur-loi-1985", r: "Le préposé conducteur d'un véhicule de son commettant, resté dans sa mission, n'est pas tenu d'indemniser la victime." },
    { a: "civ2-2022-03-31-tracteur-garage", r: "Gardien de la structure du véhicule impliqué, tenu sur le fondement de la loi de 1985." },
    { a2: "Civ. 2e, 20 juillet 1987 et Ass. plén., 10 novembre 1995", r: "Faute inexcusable : faute volontaire, d'une exceptionnelle gravité, exposant sans raison valable son auteur à un danger dont il aurait dû avoir conscience. Elle n'est presque jamais retenue." }
  ],
  pieges: [
    { faux: "La voiture n'a pas causé l'accident, donc la loi de 1985 ne s'applique pas.", juste: "La loi exige l'**implication**, non la causalité : un véhicule qui a joué un rôle quelconque est impliqué." },
    { faux: "Le piéton a traversé hors du passage piéton : son indemnisation est réduite.", juste: "La faute simple du piéton ne lui est pas opposable pour son dommage corporel (art. 3) ; seule une faute inexcusable cause exclusive l'exclut." },
    { faux: "Le conducteur invoque la force majeure (verglas, chevreuil).", juste: "La force majeure est inopposable à toutes les victimes (art. 2)." },
    { faux: "La victime peut choisir l'art. 1242 al. 1er si c'est plus favorable.", juste: "La loi de 1985 est exclusive dès qu'un VTAM est impliqué." },
    { faux: "La faute du conducteur victime se compare à celle de l'autre conducteur.", juste: "Elle s'apprécie en elle-même, sans égard au comportement de l'autre conducteur." }
  ],
  limite: "Les références de 1987 et 1995 sont citées de mémoire : Légifrance n'était pas accessible pour les recontrôler. Vérifie-les avant de les citer en copie."
},
{
  id: "produits", t: "Les produits défectueux (art. 1245 s.)", kick: "Régime spécial · Partie 3 du cours", manuel: [16],
  interet: "Régime d'origine européenne (directive 85/374/CEE, transposée par la loi n° 98-389 du 19 mai 1998) : le **producteur** répond de plein droit du dommage causé par le défaut de sécurité de son produit, qu'il soit ou non lié par contrat à la victime (art. [[1245]]). Utile dès qu'un médicament, un vaccin, un appareil ou un aliment blesse quelqu'un.",
  developper: [
    "La notion de **défaut** : le produit n'offre pas la sécurité à laquelle on peut légitimement s'attendre (art. 1245-3), ce qui n'est pas la même chose qu'un vice.",
    "La **preuve** par présomptions graves, précises et concordantes (vaccins, Distilbène) et ses limites posées par la CJUE.",
    "Les causes d'exonération propres, notamment le **risque de développement**.",
    "Les **délais** : prescription de trois ans et extinction dix ans après la mise en circulation."
  ],
  textes: ["Art. 1245 à 1245-17 C. civ."],
  methode: [
    "**Domaine** : un produit (tout bien meuble, même incorporé dans un immeuble, électricité comprise, art. 1245-2) mis en circulation ; un dommage à la personne ou à un bien autre que le produit lui-même (art. 1245-1).",
    "**Responsable** : le producteur (fabricant du produit fini, d'une matière première ou d'une partie composante), ou celui qui se présente comme tel, ou l'importateur dans l'Union (art. 1245-5). Le fournisseur ne répond qu'à titre subsidiaire si le producteur n'est pas identifié, sauf à désigner son propre fournisseur ou le producteur dans les trois mois (art. 1245-6).",
    "**Preuve (art. 1245-8)** : la victime prouve le dommage, le défaut et le lien de causalité ; les présomptions de fait sont admises.",
    "**Exonérations (art. 1245-10)** : produit non mis en circulation ; défaut apparu après ; produit non destiné à la vente ; risque de développement (état des connaissances scientifiques et techniques au moment de la mise en circulation), écarté pour les éléments et produits du corps humain (art. 1245-11) ; conformité à des règles impératives.",
    "**Faute de la victime** : réduction ou suppression (art. 1245-12). **Fait d'un tiers** : aucune réduction envers la victime (art. 1245-13).",
    "**Délais** : action dans les trois ans à compter de la connaissance du dommage, du défaut et de l'identité du producteur (art. 1245-16), et au plus tard dix ans après la mise en circulation du produit (art. 1245-15).",
    "**Option** : le régime n'exclut pas les actions fondées sur la faute ou la garantie des vices cachés, mais il absorbe les actions fondées sur un défaut de sécurité (art. 1245-17)."
  ],
  arrets: [
    { a: "civ1-2008-05-22-vaccin-hepatite-b-presomptions", r: "Défaut et causalité peuvent se prouver par présomptions graves, précises et concordantes." },
    { a: "cjue-2017-06-21-sanofi-pasteur", r: "Indices admis, mais pas de présomption automatique." },
    { a: "civ1-2017-10-18-vaccin-hepatite-b-apres-cjue", r: "Application par la Cour de cassation." },
    { a: "civ1-2018-07-11-produits-defectueux", r: "Le régime couvre aussi le dommage causé à un bien à usage professionnel ; articulation avec le fait des choses." }
  ],
  pieges: [
    { faux: "Le produit est défectueux car il est tombé en panne.", juste: "Le défaut est un **défaut de sécurité** : une panne sans danger relève de la garantie des vices cachés ou de la conformité." },
    { faux: "La victime agit contre le vendeur, cocontractant.", juste: "Le débiteur est le **producteur** ; le vendeur n'est tenu qu'à titre subsidiaire (art. 1245-6)." },
    { faux: "Le fait d'un tiers ayant concouru au dommage réduit la responsabilité du producteur.", juste: "Non : art. 1245-13." },
    { faux: "Le dommage au produit lui-même est réparé par ce régime.", juste: "Seul le dommage à la personne ou à un **autre** bien est couvert (art. 1245-1)." }
  ],
  limite: "Une nouvelle directive (UE) 2024/2853 doit remplacer la directive de 1985 pour les produits mis en circulation à compter du 9 décembre 2026. Vérifie si la loi de transposition est intervenue avant de l'invoquer : je n'ai pas pu le contrôler sur Légifrance."
},
{
  id: "voisinage", t: "Les troubles anormaux de voisinage (art. 1253)", kick: "Régime spécial · Partie 3 du cours", manuel: [16],
  interet: "Responsabilité **sans faute** : celui qui est à l'origine d'un trouble excédant les inconvénients normaux de voisinage répond du dommage, même s'il respecte toutes les règles. Créé par la jurisprudence (principe « nul ne doit causer à autrui un trouble anormal de voisinage »), codifié par la loi n° 2024-346 du 15 avril 2024 à l'art. [[1253]].",
  developper: [
    "L'**anormalité** du trouble, appréciée concrètement (lieu, moment, intensité, durée).",
    "Le cercle des **responsables** : propriétaire, locataire, occupant sans titre, bénéficiaire d'un titre d'occupation ou d'exploitation, maître d'ouvrage.",
    "L'exception de **pré-occupation** : activité antérieure, conforme aux lois et règlements, poursuivie sans aggravation.",
    "Le choix entre art. 1253 (sans faute) et art. 1240 (faute) selon les faits."
  ],
  textes: ["Art. 1253 C. civ. (loi n° 2024-346 du 15 avril 2024)"],
  methode: [
    "**Qualité des parties** : un voisin (pas forcément contigu ; un locataire ou un occupant peut agir) et un responsable visé par l'art. 1253.",
    "**Trouble anormal** : décris le trouble (bruit, odeurs, poussière, perte d'ensoleillement) et montre qu'il excède ce qui est normalement supportable dans ce contexte (zone rurale ou urbaine, jour ou nuit, durée).",
    "**Indifférence de la faute** : le respect des règlements ou d'une autorisation administrative ne suffit pas à écarter la responsabilité.",
    "**Exonération par pré-occupation** : activité existant avant l'arrivée de la victime, conforme aux lois et règlements, poursuivie dans les mêmes conditions ou sans aggravation du trouble.",
    "**Sanction** : dommages-intérêts et, le cas échéant, mesures propres à faire cesser le trouble."
  ],
  arrets: [],
  pieges: [
    { faux: "Le voisin respecte les normes de bruit : pas de responsabilité.", juste: "La conformité aux règlements n'exclut pas l'anormalité du trouble ; seule la pré-occupation, dans ses conditions strictes, exonère." },
    { faux: "Il faut prouver une faute du voisin.", juste: "L'art. 1253 instaure une responsabilité de plein droit." },
    { faux: "Tout trouble de voisinage est réparable.", juste: "Seul le trouble **excédant les inconvénients normaux** du voisinage l'est." }
  ],
  limite: "Le texte de l'art. 1253 est résumé, pas cité : Légifrance n'était pas accessible pour en reprendre la lettre exacte."
},
{
  id: "ecologique", t: "Le préjudice écologique (art. 1246 à 1252)", kick: "Préjudice · lien avec le chapitre 1 du Titre 1", manuel: [17],
  interet: "Le préjudice écologique pur (atteinte à la nature elle-même) n'est personnel à personne. La loi n° 2016-1087 du 8 août 2016 l'a rendu réparable et a désigné qui peut agir. Le texte ne crée pas de fait générateur : il faut encore une faute, le fait d'une chose ou un régime spécial.",
  developper: [
    "L'exception au **caractère personnel** du préjudice.",
    "La **réparation en nature** prioritaire.",
    "Le délai de prescription propre (art. 2226-1)."
  ],
  textes: ["Art. 1246 à 1252 et 2226-1 C. civ."],
  methode: [
    "**Préjudice** : « une atteinte non négligeable aux éléments ou aux fonctions des écosystèmes ou aux bénéfices collectifs tirés par l'homme de l'environnement » (art. 1247).",
    "**Fait générateur et causalité** : à établir selon le droit commun (art. 1240, 1242) ou un régime spécial (art. 1246 : « toute personne responsable d'un préjudice écologique est tenue de le réparer »).",
    "**Qualité pour agir (art. 1248)** : toute personne ayant qualité et intérêt, notamment l'État, l'Office français de la biodiversité, les collectivités territoriales concernées, les associations agréées ou créées depuis au moins cinq ans pour la protection de la nature.",
    "**Réparation (art. 1249)** : par priorité en nature ; à défaut, dommages-intérêts affectés à la réparation de l'environnement. Les dépenses de prévention sont aussi réparables (art. 1251).",
    "**Prescription (art. 2226-1)** : dix ans à compter du jour où le titulaire de l'action a connu ou aurait dû connaître la manifestation du préjudice."
  ],
  arrets: [ { a: "crim-2012-09-25-erika", r: "Reconnaissance jurisprudentielle du préjudice écologique avant la loi de 2016." } ],
  pieges: [
    { faux: "Un pêcheur dont la rivière est polluée demande réparation du préjudice écologique pour lui-même.", juste: "Il demande réparation de son **préjudice personnel** (perte de revenus) sur le droit commun ; le préjudice écologique, lui, est réparé au profit de l'environnement, sur l'action des personnes de l'art. 1248." },
    { faux: "L'art. 1246 suffit à engager la responsabilité.", juste: "Il faut encore établir un fait générateur et un lien de causalité." }
  ],
  limite: "Les articles sont résumés de mémoire : Légifrance n'était pas accessible ; reporte-toi au Code pour la lettre exacte, surtout l'art. 1248."
},
{
  id: "reparation", t: "La réparation et l'action en responsabilité", kick: "Effets de la responsabilité · probablement la Partie 2 du cours", manuel: [17],
  interet: "Le cas pratique ne s'arrête pas au « il est responsable » : il faut dire **qui** peut agir, **contre qui**, **sur quel fondement**, **dans quel délai** et **pour quoi**. Ces règles transversales rapportent des points dans la conclusion de chaque question.",
  developper: [
    "Le principe de **réparation intégrale** (« sans perte ni profit pour la victime ») et ses corollaires.",
    "Le choix du **fondement** : non-cumul des responsabilités contractuelle et extracontractuelle, régimes spéciaux exclusifs.",
    "La **prescription**, dont le point de départ fait souvent la différence.",
    "La **pluralité de responsables** : obligation in solidum, puis recours en contribution."
  ],
  textes: ["Art. 1240 s., 2224, 2226, 2232 C. civ."],
  methode: [
    "**Choisir le fondement** : (1) un contrat valable lie-t-il les parties, et le dommage résulte-t-il de son inexécution ? Alors responsabilité contractuelle (principe de non-cumul, Civ., 11 janvier 1922). (2) Un régime spécial s'applique-t-il ? Il est souvent exclusif. (3) Sinon, examine la faute, le fait des choses et le fait d'autrui, cumulativement, contre chaque défendeur possible.",
    "**Tiers victime d'une inexécution contractuelle** : il agit sur le terrain extracontractuel et peut invoquer le manquement contractuel dès lors qu'il lui cause un dommage (Ass. plén., 6 octobre 2006 et 13 janvier 2020).",
    "**Réparation intégrale** : tout le préjudice, rien que le préjudice ; évaluation au jour du jugement ; la victime n'est pas tenue de minimiser son dommage ; elle dispose librement des sommes allouées.",
    "**Postes de préjudice** : pour un dommage corporel, ventile selon la nomenclature Dintilhac (préjudices patrimoniaux et extrapatrimoniaux, temporaires et permanents) ; pour les proches, préjudice d'affection, d'attente et d'inquiétude, pertes de revenus.",
    "**Transmission** : l'action en réparation du préjudice subi par la victime avant son décès passe à ses héritiers.",
    "**Pluralité de responsables** : obligation in solidum envers la victime, puis contribution entre coresponsables.",
    "**Prescription** : cinq ans à compter du jour où le titulaire a connu ou aurait dû connaître les faits (art. 2224) ; dix ans à compter de la consolidation pour le dommage corporel, victime directe ou indirecte (art. 2226) ; vingt ans pour certains dommages (tortures ou actes de barbarie, violences ou agressions sexuelles sur mineur, art. 2226 al. 2). Le délai butoir de vingt ans de l'art. 2232 ne s'applique pas à l'art. 2226."
  ],
  arrets: [
    { a: "civ-1943-07-15-evaluation-jour-du-jugement", r: "Évaluation du préjudice au jour du jugement." },
    { a: "civ2-2003-06-19-pas-obligation-minimiser", r: "La victime n'est pas tenue de limiter son préjudice dans l'intérêt du responsable." },
    { a: "ch-mixte-1976-04-30-transmission-prejudice-moral", r: "Transmission aux héritiers de l'action en réparation." },
    { a: "ass-plen-1981-06-19-faute-victime-ricochet", r: "La faute de la victime directe est opposable aux victimes par ricochet." },
    { a: "civ2-2017-12-14-infans-conceptus", r: "L'enfant conçu au moment du décès de son père peut, dès sa naissance, demander réparation de son préjudice." },
    { a: "civ2-2009-05-28-prejudice-agrement", r: "Préjudice d'agrément : impossibilité de pratiquer une activité sportive ou de loisirs spécifique." },
    { a: "com-2024-07-03-opposabilite-limites-contractuelles-au-tiers", r: "Le tiers qui invoque un manquement contractuel se voit opposer les limites du contrat." }
  ],
  pieges: [
    { faux: "La victime cocontractante agit sur l'art. 1240 parce que c'est plus avantageux.", juste: "Principe de non-cumul : si le dommage résulte de l'inexécution d'un contrat valable, seule la responsabilité contractuelle est ouverte." },
    { faux: "L'action se prescrit par cinq ans à compter de l'accident.", juste: "Dommage corporel : dix ans à compter de la **consolidation** (art. 2226)." },
    { faux: "La victime, qui a refusé une opération, voit son indemnisation réduite.", juste: "Pas d'obligation de minimiser son dommage (Civ. 2e, 19 juin 2003)." },
    { faux: "On indemnise la perte de chance à hauteur de l'avantage espéré.", juste: "On l'indemnise à hauteur de la chance perdue, jamais de l'entier avantage." }
  ],
  limite: "Civ., 11 janvier 1922 et les deux arrêts d'Ass. plén. (2006, 2020) ne figurent pas dans la base d'arrêts du site : références citées de mémoire, à vérifier."
},
{
  id: "quasi", t: "Les quasi-contrats approfondis", kick: "Faits juridiques · Introduction, Section 1", manuel: [18],
  interet: "Quand une personne a profité d'un avantage sans titre (paiement d'une dette inexistante, travaux utiles faits pour un absent, enrichissement au détriment d'autrui), ni le contrat ni la responsabilité ne permettent d'agir. Les quasi-contrats (art. 1300 s.) organisent alors une restitution ou une indemnisation. L'introduction du cours les présente ; voici comment les mobiliser.",
  developper: [
    "Les conditions et effets de la **gestion d'affaires** (art. 1301 à 1301-5).",
    "Les deux figures du **paiement de l'indu** : indu objectif (art. 1302-1) et indu subjectif (art. 1302-2).",
    "La **subsidiarité** de l'enrichissement injustifié (art. 1303-3) et le calcul de l'indemnité (art. 1303, 1303-4)."
  ],
  textes: ["Art. 1300 à 1303-4 et 1352 à 1352-9 C. civ."],
  methode: [
    "**Gestion d'affaires** : (1) gestion de l'affaire d'autrui, sans y être tenu ; (2) sciemment ; (3) utilement ; (4) à l'insu ou sans opposition du maître (art. 1301). Effets : le gérant doit agir en personne raisonnable et poursuivre la gestion (art. 1301-1) ; le maître exécute les engagements pris dans son intérêt, rembourse les dépenses utiles avec intérêts et indemnise les dommages subis (art. 1301-2) ; si la gestion n'était pas utile mais a profité au maître, renvoi à l'enrichissement injustifié (art. 1301-5).",
    "**Paiement de l'indu** : dette inexistante (indu objectif) → celui qui a reçu, « par erreur ou sciemment », ce qui ne lui était pas dû doit le restituer (art. 1302-1), sans que le solvens ait à prouver son erreur (Ass. plén., 2 avr. 1993) ; paiement de la dette d'autrui → restitution contre le créancier si le paiement a été fait par erreur ou sous la contrainte, sauf si le créancier a détruit son titre ou abandonné ses sûretés ; recours aussi contre le véritable débiteur (art. 1302-2). La faute du solvens n'empêche pas la restitution, elle peut la réduire (art. 1302-3, al. 2).",
    "**Enrichissement injustifié** : enrichissement, appauvrissement corrélatif, absence de justification (ni obligation de l'appauvri, ni intention libérale, art. 1303-1), pas d'acte accompli par l'appauvri en vue d'un profit personnel (art. 1303-2), subsidiarité : aucune autre action ouverte, ni obstacle de droit comme la prescription (art. 1303-3).",
    "**Indemnité** : la moindre des deux valeurs de l'enrichissement et de l'appauvrissement (art. 1303) ; appauvrissement constaté au jour de la dépense, enrichissement tel qu'il subsiste au jour de la demande, tous deux évalués au jour du jugement ; en cas de mauvaise foi de l'enrichi, la plus forte des deux (art. 1303-4)."
  ],
  arrets: [
    { a: "req-1892-06-15-boudier", r: "Naissance de l'action de in rem verso." },
    { a: "com-1999-01-12-banque-actions", r: "Gestion d'affaires refusée : l'utilité ne suffit pas, il fallait établir que le client ne pouvait agir lui-même." },
    { a: "ass-plen-1993-04-02-jeumont-schneider", r: "Indu objectif : restitution sans autre preuve que l'absence de dette." },
    { a: "civ1-2010-02-17-faute-solvens", r: "L'absence de faute du solvens n'est pas une condition de la répétition." },
    { a: "civ1-1994-07-12-piete-filiale", r: "L'aide d'un enfant à ses parents excédant la piété filiale ouvre droit à indemnité." },
    { a: "civ1-2024-01-10-carence-probatoire-pret", r: "Subsidiarité : on ne peut pallier l'échec à prouver un prêt par l'enrichissement injustifié." },
    { a: "ch-mixte-2002-09-06-loterie-publicitaire", r: "Quasi-contrat hors des trois figures légales : l'organisateur d'une loterie qui annonce un gain sans aléa doit le délivrer." }
  ],
  pieges: [
    { faux: "Le prêteur qui ne peut prouver le prêt agit en enrichissement injustifié.", juste: "Subsidiarité (art. 1303-3) : l'échec de l'action principale faute de preuve ferme l'action en enrichissement (Civ. 1re, 10 janv. 2024)." },
    { faux: "Celui qui a payé une dette inexistante doit prouver son erreur.", juste: "Pour l'indu objectif, le solvens n'a pas à prouver son erreur (Ass. plén., 2 avr. 1993, Jeumont-Schneider)." },
    { faux: "L'indemnité d'enrichissement injustifié est égale à l'appauvrissement.", juste: "Elle est égale à la **moindre** des deux valeurs, sauf mauvaise foi de l'enrichi." }
  ],
  limite: ""
}
  ]
};
