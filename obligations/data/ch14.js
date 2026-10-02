/* Chapitre 14 — Les faits générateurs de responsabilité délictuelle : le fait des choses
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 14,
  intro: "En 1804, le Code ne connaissait que deux cas de responsabilité du fait d'une chose : l'**animal** ([[1243]]) et le **bâtiment en ruine** ([[1244]]). Face aux accidents de l'ère industrielle, la Cour de cassation a « découvert » dans la phrase d'annonce de l'art. 1384, al. 1er anc. (aujourd'hui [[1242]], al. 1er) un **principe général de responsabilité du fait des choses**, sans faute (Teffaine, 1896 ; Jand'heur, 1930). Trois conditions : une **chose**, un **fait de la chose**, un **gardien**. Une seule issue pour le gardien : la **cause étrangère**. Les régimes spéciaux (incendie, animaux, ruine, et hors Code les accidents de la circulation et les produits défectueux) l'emportent sur le principe général quand ils s'appliquent.",
  sections: [
    {
      titre: "La découverte d'un principe général",
      contenu: [
        { p: "L'art. 1384, al. 1er anc. n'était, pour les rédacteurs du Code, qu'un **texte de transition** annonçant les cas spéciaux des alinéas suivants. Saleilles et Josserand proposent d'en faire un principe autonome pour indemniser les victimes du **machinisme**, qui ne peuvent presque jamais prouver la faute du propriétaire de la machine. La jurisprudence les suit, dans une logique de **risque**." },
        { schema: { type: "frise", titre: "De la phrase d'annonce au principe général", evenements: [
          { date: "16 juin 1896", t: "Civ., Teffaine", d: "Explosion de la chaudière d'un remorqueur, mort du mécanicien : le propriétaire répond du **vice de la machine** sur le fondement de l'art. 1384, al. 1er, sans preuve de sa faute." },
          { date: "13 févr. 1930", t: "Ch. réunies, Jand'heur", d: "Une jeune fille renversée par un camion. La présomption pesant sur le gardien ne cède que devant la **cause étrangère** ; il ne suffit pas de prouver l'absence de faute ; peu importe que la chose soit actionnée par la main de l'homme ou atteinte d'un vice : la responsabilité est attachée à la **garde**, non à la chose." },
          { date: "2 déc. 1941", t: "Ch. réunies, Franck", d: "Définition matérielle de la garde : **usage, direction et contrôle**. Le propriétaire d'une voiture volée n'en est plus gardien." },
          { date: "5 juill. 1985", t: "Loi Badinter", d: "Les accidents de la circulation impliquant un véhicule terrestre à moteur sortent du champ de l'art. 1384, al. 1er ([[L85-1]])." },
          { date: "19 mai 1998", t: "Loi sur les produits défectueux", d: "Régime spécial du producteur ([[1245]] s.), exclusif lorsque l'action repose sur un défaut de sécurité du produit." },
          { date: "2016", t: "Ordonnance du 10 février", d: "Renumérotation : l'art. 1384 devient [[1242]], sans changement de fond." }
        ] } },
        { arret: { ref: "Ch. réunies, 13 févr. 1930, Jand'heur", apport: "Arrêt fondateur : la responsabilité du gardien est **de plein droit** ; le gardien ne s'exonère ni par la preuve de son absence de faute ni en montrant que la cause du dommage est restée inconnue, mais seulement par un cas fortuit, une force majeure ou une cause étrangère qui ne lui est pas imputable." } },
        { attention: "Vocabulaire : on parlait en 1930 de « présomption de responsabilité ». On dit aujourd'hui **responsabilité de plein droit** ou **objective**. Ne jamais écrire « présomption de faute » : le gardien ne peut pas prouver qu'il n'a pas commis de faute." }
      ]
    },
    {
      titre: "La chose",
      contenu: [
        { p: "Le mot est entendu **très largement** : toute chose, quelle que soit sa nature, peut engager la responsabilité de son gardien." },
        { liste: [
          "**Nature physique indifférente** : solide, liquide, gaz, fumée, voire phénomène immatériel (onde, courant électrique). Exemple récent : le nuage toxique né d'émanations au sein d'une entreprise (Civ. 2e, 5 sept. 2024, n° 21-23.442).",
          "**Nature juridique indifférente** : meuble ou immeuble (un sol glissant, un escalier, une vitrine).",
          "**Caractères indifférents** : chose dangereuse ou non, actionnée par la main de l'homme ou non, viciée ou non (Jand'heur), en mouvement ou inerte."
        ] },
        { h: "Les choses exclues" },
        { schema: { type: "arbre", titre: "Quand l'art. 1242, al. 1er ne s'applique-t-il pas à la chose ?", racine: { t: "Chose instrument du dommage", d: "principe : [[1242]], al. 1er", enfants: [
          { lien: "sauf", t: "Chose soumise à un régime spécial", d: "*specialia generalibus derogant* : animal ([[1243]]), bâtiment en ruine ([[1244]]), incendie communiqué ([[1242]], al. 2), véhicule terrestre à moteur ([[L85-1]]), produit défectueux lorsque l'action repose sur le défaut ([[1245]] s.)" },
          { lien: "sauf", t: "Corps humain", d: "ce n'est pas une chose : la victime agit sur le fondement de [[1240]] ou [[1241]] (nuance : le corps qui fait un tout avec une chose, comme le skieur et ses skis, a parfois été traité comme une chose)" },
          { lien: "sauf", t: "Chose sans maître ou abandonnée", d: "*res nullius* (neige, eau de pluie) ou *res derelictae* : sans gardien, pas de responsabilité ; mais celui qui s'approprie la chose, même un instant, en devient gardien (Civ. 2e, 10 févr. 1982 : coup de pied dans une bouteille abandonnée)" },
          { lien: "sauf", t: "Dommages matériels entre sportifs", d: "C. sport, art. L. 321-3-1 (loi du 12 mars 2012) : pas de responsabilité du fait des choses pour les dommages **matériels** causés à un autre pratiquant pendant une manifestation ou un entraînement, sur un lieu réservé à la pratique" }
        ] } } },
        { p: "**Choses sans maître** : la neige ou l'eau de pluie n'ont pas de gardien. Mais le propriétaire ou l'occupant du sol sur lequel elles se sont accumulées peut en devenir gardien, ce qui fait disparaître la qualité de *res nullius* (Civ. 2e, 15 juin 2023, n° 22-12.162 : sol recouvert de neige glacée, société gardienne du sol). Solution exceptionnelle." },
        { attention: "Produits défectueux : le régime des [[1245]] s. réserve les autres actions ([[1245-17]]), mais la CJCE (25 avr. 2002, Commission c/ France et González Sánchez) juge que la victime ne peut pas invoquer un autre régime **fondé sur le défaut de sécurité** du produit. Elle garde la faute et la garantie des vices cachés. En pratique, l'art. 1242, al. 1er est donc écarté quand le dommage tient au défaut du produit (Civ. 1re, 11 juill. 2018, n° 17-20.154). La directive (UE) 2024/2853, à transposer au plus tard le 9 décembre 2026, n'a pas encore modifié les [[1245]] s." }
      ]
    },
    {
      titre: "Le fait de la chose",
      contenu: [
        { def: { terme: "Fait de la chose", texte: "exigence de **causalité** : la chose doit avoir été l'**instrument du dommage**, c'est-à-dire avoir joué un **rôle actif** dans sa réalisation. Un simple rôle passif ne suffit pas." } },
        { p: "Tout est question de **preuve**. La jurisprudence distingue selon que la chose était en mouvement et est entrée en contact avec la victime, ou non." },
        { schema: { type: "tableau", titre: "Qui doit prouver le rôle actif ?", colonnes: ["Situation", "Preuve à la charge de la victime", "Défense du gardien", "Exemples"], lignes: [
          ["Chose **en mouvement** + **contact** avec la victime", "Seulement l'**intervention matérielle** de la chose : le rôle actif est **présumé**", "Présomption simple : prouver le **rôle passif** de la chose (Civ., 19 févr. 1941)", "Bouteille de gaz qui explose, tuile qui tombe, ballon qui frappe"],
          ["Chose **inerte** (même avec contact)", "Le rôle actif, c'est-à-dire l'**anormalité** : position, état ou comportement anormal", "Démontrer que la chose était normale", "Paroi vitrée qui se brise au moindre choc, plot mal signalé, marche glissante"],
          ["**Absence de contact**", "Le rôle actif : la chose a eu un rôle **perturbateur** (surgissement, position anormale)", "Démontrer le caractère normal de la chose", "Piéton qui tombe en voulant éviter un vélo qui surgit"]
        ] } },
        { arret: { ref: "Civ. 2e, 24 févr. 2005 (deux arrêts)", apport: "Fin des hésitations : pour une chose **inerte**, la victime doit prouver son **anormalité** (état, position ou fonctionnement anormal). Le simple contact ne fait pas présumer le rôle actif. Solution constante depuis." } },
        { p: "Illustrations récentes : le défaut d'entretien ne prouve pas à lui seul l'anormalité d'une plaque de toiture qui cède sous le poids d'une personne courant dessus (Civ. 2e, 25 mai 2022, n° 20-17.123) ; une tige filetée non protégée en bas d'une rampe d'escalier, heurtée par un enfant tombé du cinquième étage, a été **au moins pour partie** l'instrument du dommage, ce qui suffit (Civ. 2e, 30 nov. 2023, n° 22-16.835)." },
        { attention: "Ne dites pas « la chose inerte ne peut jamais être l'instrument du dommage ». Elle peut l'être, mais la victime doit alors prouver son anormalité." }
      ]
    },
    {
      titre: "La garde",
      contenu: [
        { def: { terme: "Garde", texte: "pouvoir d'**usage**, de **direction** et de **contrôle** exercé sur la chose au moment du dommage (Ch. réunies, 2 déc. 1941, Franck). Conception **matérielle** : on regarde qui maîtrisait réellement la chose, non qui en était propriétaire." } },
        { liste: [
          "**Présomption** : le propriétaire est présumé gardien ; il peut prouver qu'il avait **transféré** la garde.",
          "**Garde alternative** : en principe, une seule personne est gardienne à un instant donné.",
          "**Infans** : un enfant, même privé de discernement, peut être gardien (Ass. plén., 9 mai 1984, Gabillet : un enfant de trois ans tenant un bâton).",
          "**Préposé** : jamais gardien, car il n'exerce pas ses pouvoirs de façon indépendante. C'est le **commettant** qui est gardien de la chose utilisée par son salarié (rappel de principe : Civ. 2e, 16 janv. 2020, n° 19-10.489)."
        ] },
        { schema: { type: "arbre", titre: "Qui est gardien ?", racine: { t: "Le propriétaire", d: "présumé gardien (présomption simple)", enfants: [
          { lien: "transfert involontaire", t: "Le voleur ou celui qui a détourné la chose", d: "Franck : le propriétaire volé perd la garde (limite : un jeune enfant qui s'empare d'un pistolet chez des hôtes n'en devient pas gardien, Civ. 2e, 26 nov. 2020, n° 19-19.676)" },
          { lien: "transfert volontaire", t: "Le locataire, l'emprunteur, le dépositaire", d: "à condition d'avoir reçu **toute possibilité de prévenir le dommage** : simple usage ≠ transfert de garde. Pour le **prêt**, les solutions varient avec la complexité de la chose, la durée et les circonstances : pas de transfert pour un tracteur prêté brièvement dans un but précis, transfert pour un chariot confié à un client de grand magasin (deux arrêts, Civ. 2e, 14 janv. 1999)" },
          { lien: "garde fractionnée", t: "Fabricant (structure) / détenteur (comportement)", d: "pour les choses dotées d'un dynamisme propre et dangereuses (Civ. 2e, 5 janv. 1956, Oxygène liquide)" },
          { lien: "garde commune", t: "Plusieurs cogardiens", d: "pouvoirs identiques, sans hiérarchie ; exceptionnelle et en repli" }
        ] } } },
        { h: "Garde de la structure et garde du comportement" },
        { p: "Proposée par Goldman, la distinction impute au **fabricant** les dommages dus au **vice interne** de la chose (garde de la structure) et au **détenteur** ceux dus à son **utilisation** (garde du comportement). Elle est réservée aux choses dotées d'un dynamisme propre et dangereuses (bouteilles de gaz, aérosols, téléviseur qui implose) ; elle a été refusée pour les cigarettes (Civ. 2e, 20 nov. 2003). Son intérêt a beaucoup reculé depuis le régime des produits défectueux ([[1245]] s.), qui vise directement le producteur." },
        { h: "La garde commune" },
        { p: "Elle suppose des pouvoirs **identiques et sans hiérarchie** (pas de garde commune entre le skipper et ses équipiers : le skipper est seul gardien). Dans les jeux de balle, la jurisprudence préfère aujourd'hui attribuer la garde **successivement** au joueur qui a la balle (jeu de balle, football, enfants jouant avec une torche, squash : Civ. 2e, 27 nov. 2025, n° 24-12.045). Effets : **responsabilité *in solidum*** des cogardiens envers un tiers ; mais la victime **cogardienne** ne peut rien réclamer, car on ne peut être à la fois gardien et victime." }
      ]
    },
    {
      titre: "Le régime : une responsabilité de plein droit",
      contenu: [
        { p: "La victime n'a **pas à prouver la faute** du gardien ; le gardien **ne peut pas s'exonérer** en prouvant qu'il n'a commis aucune faute. Il ne peut échapper à sa responsabilité que de deux façons." },
        { schema: { type: "tableau", titre: "Les défenses du gardien", colonnes: ["Moyen", "Contenu", "Effet"], lignes: [
          ["Contester une **condition**", "Rôle passif de la chose (renverser la présomption) ; transfert de la garde (à prouver par le propriétaire)", "Pas de responsabilité du défendeur ; en cas de transfert, la victime agit contre le vrai gardien"],
          ["**Force majeure**", "Événement imprévisible, irrésistible et **extérieur** au gardien **et à la chose** : le vice interne de la chose n'est jamais une force majeure", "Exonération **totale**"],
          ["**Fait d'un tiers**", "Exonératoire seulement s'il présente les caractères de la force majeure", "Sinon : responsabilité ***in solidum*** du gardien et du tiers envers la victime, puis recours entre eux"],
          ["**Faute de la victime**", "Force majeure : exonération totale. Simple faute : exonération partielle. Fait de la victime cause exclusive : obstacle à la responsabilité (Civ. 2e, 7 avr. 2022, n° 20-19.746)", "Totale ou partielle (partage)"],
          ["Acceptation des risques", "**Abandonnée** en matière de fait des choses (Civ. 2e, 4 nov. 2010, n° 09-65.947)", "Aucun effet exonératoire"]
        ] } },
        { schema: { type: "frise", titre: "La faute de la victime : l'épisode Desmares", evenements: [
          { date: "21 juill. 1982", t: "Civ. 2e, Desmares", d: "Le gardien ne peut s'exonérer partiellement par la faute de la victime : c'est tout (force majeure) ou rien. But avoué : pousser le législateur à réformer les accidents de la circulation." },
          { date: "5 juill. 1985", t: "Loi Badinter", d: "Le législateur intervient pour les accidents de la circulation." },
          { date: "6 avr. 1987", t: "Civ. 2e (trois arrêts)", d: "Abandon de Desmares : la faute de la victime qui n'a pas les caractères de la force majeure exonère **partiellement** le gardien." }
        ] } },
        { p: "La force majeure est appréciée avec une **grande sévérité**, surtout pour la SNCF : le comportement d'un voyageur qui descend d'un train en marche ou traverse les voies n'est presque jamais jugé imprévisible. Même sévérité en matière sportive : la chute d'un motard sur un circuit (Civ. 2e, 30 nov. 2023, n° 22-16.820) ou la déviation de trajectoire d'un skieur en compétition (Civ. 2e, 19 sept. 2024, n° 23-10.638) sont jugées prévisibles. Admission exceptionnelle en 2018 pour des victimes poussées sur les voies par un tiers (Civ. 2e, 8 févr. 2018, n° 17-10.516 et 16-26.198), après un examen détaillé des circonstances des agressions." },
        { attention: "Si aucun régime de responsabilité du fait des choses ne s'applique, la victime peut toujours agir contre le propriétaire ou l'utilisateur sur le fondement de la **faute prouvée** ([[1240]], [[1241]])." }
      ]
    },
    {
      titre: "Les régimes spéciaux du Code civil",
      contenu: [
        { h: "L'incendie communiqué ([[1242]], al. 2 et 3)" },
        { p: "Issu de la loi du 7 novembre 1922, adoptée pour éviter que l'art. 1384, al. 1er ne rende tout détenteur responsable sans faute des incendies. Celui qui détient, **à un titre quelconque**, tout ou partie de l'immeuble ou des biens mobiliers dans lesquels l'incendie **a pris naissance** ne répond, envers les **tiers**, des dommages causés par cet incendie que si la victime **prouve sa faute** ou celle des personnes dont il répond. C'est un retour à la **faute prouvée**." },
        { attention: "L'al. 2 ne joue pas entre **bailleur et locataire** ([[1242]], al. 3) : le locataire répond de l'incendie envers le bailleur, sauf preuve d'un cas fortuit, d'une force majeure, d'un vice de construction ou de la communication du feu par une maison voisine ([[1733]] ; pluralité de locataires : [[1734]])." },
        { h: "Le fait des animaux ([[1243]])" },
        { liste: [
          "**Animal** : tout animal **approprié** (domestique ou sauvage captif). L'animal sauvage en liberté n'a pas de gardien.",
          "**Responsable** : le **propriétaire** ou **celui qui s'en sert** pendant qu'il est à son usage, c'est-à-dire en pratique le gardien (usage à titre indépendant : dresseur, vétérinaire, maréchal-ferrant qui a la maîtrise de l'animal).",
          "**Fait de l'animal** : mêmes règles de preuve que pour les choses (présumé en cas de mouvement et de contact ; sinon, rôle actif à prouver, par exemple des chiens qui effraient un cheval : Civ. 2e, 17 janv. 2019).",
          "**Régime** : responsabilité de plein droit, identique à celle de [[1242]], al. 1er. L'animal **égaré ou échappé** reste sous la responsabilité de son propriétaire : la fuite n'est pas une force majeure (le texte le dit), pas plus que l'avertissement donné sur la dangerosité de l'animal (Civ. 2e, 27 mars 2014, n° 13-15.528)."
        ] },
        { h: "La ruine des bâtiments ([[1244]])" },
        { liste: [
          "**Bâtiment** : construction en matériaux durables, élevée par l'homme et **incorporée au sol** (maison, mur, pont). Sont exclus les ouvrages naturels (grotte) et les constructions provisoires (baraque de chantier).",
          "**Ruine** : destruction totale ou **partielle** (chute d'un élément). Conception stricte : la jurisprudence a parfois refusé cette qualification (chute de pierres d'une voûte, Civ. 2e, 22 oct. 2009), renvoyant au droit commun.",
          "**Cause** : la victime prouve un **défaut d'entretien** ou un **vice de construction**.",
          "**Responsable** : toujours le **propriétaire**, même si le défaut d'entretien est imputable au locataire ou le vice au constructeur. Il paie, puis exerce un **recours** contre eux.",
          "**Exonération** : seulement la cause étrangère."
        ] },
        { p: "Le texte est marginalisé : la victime peut aussi agir contre le **gardien non propriétaire** sur le fondement de [[1242]], al. 1er (Civ. 2e, 23 mars 2000). La Cour de cassation a proposé à plusieurs reprises son abrogation, et les projets de réforme ne le reprennent pas." },
        { schema: { type: "tableau", titre: "Synthèse : quatre régimes du fait des choses dans le Code civil", colonnes: ["", "Principe général", "Incendie", "Animaux", "Ruine"], lignes: [
          ["Texte", "[[1242]], al. 1er", "[[1242]], al. 2 et 3", "[[1243]]", "[[1244]]"],
          ["Responsable", "Le **gardien**", "Le **détenteur** du lieu ou du bien où le feu a pris", "**Propriétaire** ou **utilisateur**", "Le **propriétaire**, exclusivement"],
          ["Faute à prouver ?", "Non", "**Oui** (faute du détenteur ou des personnes dont il répond)", "Non", "Non, mais preuve d'un défaut d'entretien ou d'un vice de construction"],
          ["Exonération", "Cause étrangère", "Absence de faute prouvée par la victime", "Cause étrangère (pas la fuite de l'animal)", "Cause étrangère (pas le fait du locataire ou du constructeur)"]
        ] } }
      ]
    }
  ],
  retenir: [
    "Principe général de responsabilité du fait des choses : [[1242]], al. 1er (Teffaine 1896 ; Jand'heur, Ch. réunies, 13 févr. 1930).",
    "Chose : conception très large ; exclusions : régimes spéciaux, corps humain, choses sans maître, dommages matériels entre sportifs (C. sport, art. L. 321-3-1).",
    "Fait de la chose : présumé si chose en mouvement + contact ; chose inerte ou absence de contact : la victime prouve l'anormalité (Civ. 2e, 24 févr. 2005).",
    "Garde : usage, direction, contrôle (Franck, 1941) ; propriétaire présumé gardien ; transfert possible ; infans gardien (Gabillet, 1984) ; préposé jamais gardien.",
    "Garde de la structure / du comportement (Oxygène liquide, 1956) : choses dangereuses à dynamisme propre ; déclin depuis [[1245]] s.",
    "Régime : responsabilité de plein droit ; exonération par la seule cause étrangère ; faute simple de la victime = exonération partielle (fin de Desmares en 1987) ; acceptation des risques abandonnée (2010).",
    "Incendie ([[1242]], al. 2) : faute prouvée envers les tiers ; bailleur/locataire : [[1733]].",
    "Animaux ([[1243]]) : propriétaire ou utilisateur, même si l'animal s'est échappé. Ruine ([[1244]]) : propriétaire, défaut d'entretien ou vice de construction, recours contre le fautif."
  ],
  articles: ["1240", "1241", "1242", "1243", "1244", "1245", "1245-17", "1733", "1734", "L85-1"],
  regimes: ["choses-1242-al1", "choses-animaux", "choses-ruine"],
  cas: ["ch14-jour-de-tempete"],
  quiz: [
    { q: "Le principe général de responsabilité du fait des choses a été :", choix: ["Voulu par les rédacteurs du Code civil en 1804", "Créé par la loi du 5 juillet 1985", "Dégagé par la jurisprudence à partir de la phrase d'annonce de l'art. 1384, al. 1er"], bonne: 2, expl: "Teffaine (1896) puis Jand'heur (1930). La loi de 1985 a au contraire réduit le champ du principe." },
    { q: "Un client heurte une porte vitrée parfaitement visible et en bon état, et se blesse. Il agit contre le propriétaire du magasin sur le fondement de [[1242]], al. 1er :", choix: ["Il doit prouver l'anormalité de la porte, ce qui paraît impossible ici", "Le rôle actif de la porte est présumé car il y a eu contact", "Le propriétaire doit prouver qu'il n'a commis aucune faute"], bonne: 0, expl: "Chose inerte : la victime prouve l'anormalité (Civ. 2e, 24 févr. 2005)." },
    { q: "Une bouteille de gaz explose dans un magasin et blesse un client. Le rôle actif de la bouteille :", choix: ["Doit être prouvé par la victime", "Est présumé de façon irréfragable", "Est présumé, mais le gardien peut prouver le rôle passif"], bonne: 2, expl: "Chose en mouvement entrée en contact avec la victime : présomption simple de rôle actif." },
    { q: "La voiture de Paul a été volée ; le voleur blesse un piéton en perdant le contrôle du véhicule. Qui répond ?", choix: ["Le voleur, seul gardien", "Paul, présumé gardien comme propriétaire", "Ni l'un ni l'autre"], bonne: 0, expl: "Franck (1941) : le propriétaire volé a perdu l'usage, la direction et le contrôle. Aujourd'hui, l'accident relève de la loi du 5 juillet 1985, mais la notion de gardien y est la même." },
    { q: "Un chauffeur-livreur salarié renverse un passant avec le diable de livraison de son employeur. Qui est gardien du diable ?", choix: ["Le chauffeur", "L'employeur", "Les deux, en garde commune"], bonne: 1, expl: "Le préposé n'est jamais gardien : le commettant l'est." },
    { q: "Un enfant de 4 ans blesse un camarade avec un bâton. Peut-il être déclaré gardien ?", choix: ["Non, faute de discernement", "Seulement s'il a commis une faute", "Oui : le discernement n'est pas exigé"], bonne: 2, expl: "Ass. plén., 9 mai 1984, Gabillet." },
    { q: "Pendant une partie de tennis entre amis, l'un reçoit la balle dans l'œil. Si les deux joueurs sont jugés cogardiens de la balle :", choix: ["La victime est indemnisée in solidum", "La victime ne peut rien obtenir sur le fondement de [[1242]], al. 1er", "Le partage se fait par moitié"], bonne: 1, expl: "On ne peut être à la fois gardien et victime. D'où la tendance à attribuer la garde successivement à celui qui frappe la balle." },
    { q: "Le chien de Julie s'échappe de son jardin et mord un passant. Julie :", choix: ["S'exonère car le chien n'était plus sous sa garde", "Est responsable : l'animal échappé reste sous la responsabilité de son propriétaire", "N'est responsable que si elle a mal fermé le portail"], bonne: 1, expl: "[[1243]] : « soit que l'animal fût sous sa garde, soit qu'il fût égaré ou échappé »." },
    { q: "Un balcon mal entretenu s'effondre sur un passant. L'immeuble est loué et l'entretien incombait au locataire. Qui répond sur le fondement de [[1244]] ?", choix: ["Le propriétaire, qui aura un recours contre le locataire", "Le locataire", "Personne"], bonne: 0, expl: "L'art. 1244 vise exclusivement le propriétaire ; le défaut d'entretien imputable à un tiers ne l'exonère pas envers la victime." },
    { q: "Un incendie né dans l'appartement de Marc se propage chez son voisin. Pour obtenir réparation de Marc, le voisin doit :", choix: ["Prouver seulement que le feu est parti de chez Marc", "Prouver un vice de construction", "Prouver une faute de Marc ou d'une personne dont il répond"], bonne: 2, expl: "[[1242]], al. 2 : régime de faute prouvée envers les tiers (loi du 7 nov. 1922)." }
  ]
});

OBL.regimes.push(
  {
    id: "choses-1242-al1",
    chapitre: "Fait des choses",
    titre: "Responsabilité du gardien d'une chose (art. 1242, al. 1er)",
    fondement: ["1242"],
    resume: "Engager la responsabilité de plein droit du gardien d'une chose qui a été l'instrument du dommage. Toujours vérifier d'abord qu'aucun régime spécial ne s'applique.",
    conditions: [
      { nom: "Une chose hors régime spécial", question: "Le dommage a-t-il été causé par une chose qui n'est ni un animal, ni un bâtiment en ruine, ni un incendie communiqué, ni un véhicule terrestre à moteur impliqué dans un accident de la circulation, ni un produit défectueux (action fondée sur le défaut) ?", detail: "Conception large de la chose (meuble, immeuble, dangereuse ou non). Exclus : corps humain, *res nullius* et *res derelictae*, dommages matériels entre sportifs (C. sport, art. L. 321-3-1).", piege: "Appliquer [[1242]], al. 1er à un accident de voiture : c'est la loi du 5 juillet 1985." },
      { nom: "Le fait de la chose", question: "La chose a-t-elle été l'instrument du dommage (rôle actif) ?", detail: "Chose en mouvement + contact : rôle actif présumé. Chose inerte ou absence de contact : la victime prouve une position, un état ou un comportement anormal (Civ. 2e, 24 févr. 2005). Un rôle partiel suffit (Civ. 2e, 30 nov. 2023).", preuve: "Victime : intervention matérielle de la chose ; en plus, son anormalité si la chose est inerte ou sans contact.", piege: "Présumer le rôle actif d'une chose inerte au seul motif du contact." },
      { nom: "Le gardien", question: "Qui avait l'usage, la direction et le contrôle de la chose au moment du dommage ?", detail: "Franck (1941). Propriétaire présumé gardien ; transfert volontaire (location, prêt avec toute possibilité de prévenir le dommage) ou involontaire (vol). Infans gardien possible (Gabillet). Préposé jamais gardien. Structure / comportement pour les choses dangereuses à dynamisme propre.", preuve: "Le propriétaire qui invoque un transfert de garde doit le prouver.", piege: "Confondre simple usage de la chose par un tiers et transfert de garde." },
      { nom: "Un dommage réparable causé à autrui", question: "La victime a-t-elle subi un préjudice réparable, et n'est-elle pas elle-même gardienne (ou cogardienne) de la chose ?", detail: "La qualité de gardien est incompatible avec celle de victime." }
    ],
    exonerations: [
      { nom: "Absence de faute", question: "Le gardien prouve-t-il qu'il n'a commis aucune faute ?", detail: "Inopérant depuis Jand'heur.", effet: "Aucun." },
      { nom: "Force majeure", question: "L'événement était-il imprévisible, irrésistible et extérieur au gardien et à la chose ?", detail: "Le vice interne de la chose n'est jamais extérieur. Appréciation très stricte.", effet: "Exonération totale." },
      { nom: "Fait d'un tiers", question: "Un tiers a-t-il contribué au dommage ?", detail: "Exonératoire seulement s'il a les caractères de la force majeure.", effet: "Totale si force majeure ; sinon condamnation *in solidum* et recours contributif." },
      { nom: "Faute de la victime", question: "La victime a-t-elle commis une faute ayant contribué à son dommage ?", detail: "Faute ayant les caractères de la force majeure, ou fait de la victime cause exclusive (Civ. 2e, 7 avr. 2022) : exonération totale. Simple faute : partage (Civ. 2e, 6 avr. 1987, fin de Desmares).", effet: "Totale ou partielle." },
      { nom: "Acceptation des risques", question: "La victime participait-elle à une activité dangereuse ?", detail: "Abandonnée en matière de fait des choses (Civ. 2e, 4 nov. 2010).", effet: "Aucun (mais attention à C. sport, art. L. 321-3-1 pour les dommages matériels)." }
    ],
    copie: [
      "Ordre : 1) régime spécial ? 2) chose ; 3) fait de la chose (distinguer mouvement/contact et inertie) ; 4) gardien ; 5) exonérations.",
      "Citer Jand'heur pour le caractère de plein droit et Franck pour la définition de la garde."
    ]
  },
  {
    id: "choses-animaux",
    chapitre: "Fait des choses",
    titre: "Responsabilité du fait des animaux (art. 1243)",
    fondement: ["1243"],
    resume: "Engager la responsabilité de plein droit du propriétaire ou de l'utilisateur d'un animal qui a causé un dommage.",
    conditions: [
      { nom: "Un animal approprié", question: "L'animal a-t-il un propriétaire (animal domestique ou sauvage captif) ?", detail: "L'animal sauvage en liberté n'engage personne sur ce fondement.", piege: "Oublier que l'animal égaré ou échappé reste approprié." },
      { nom: "Le fait de l'animal", question: "L'animal a-t-il été l'instrument du dommage ?", detail: "Présumé en cas de mouvement et de contact (morsure, ruade) ; sinon, la victime prouve un comportement anormal (chiens qui surgissent et effraient un cheval : Civ. 2e, 17 janv. 2019)." },
      { nom: "Le responsable", question: "Qui était propriétaire, ou qui se servait de l'animal au moment du dommage ?", detail: "Propriétaire par principe, même si l'animal s'est échappé. L'utilisateur qui a la maîtrise indépendante de l'animal (dresseur, vétérinaire, maréchal-ferrant) peut répondre à sa place.", piege: "Écrire que la fuite de l'animal transfère la garde." }
    ],
    exonerations: [
      { nom: "Cause étrangère", question: "Force majeure, fait d'un tiers ou faute de la victime ?", detail: "Mêmes règles que pour [[1242]], al. 1er. La fuite de l'animal ou un simple panneau « chien méchant » ne suffisent pas.", effet: "Totale (force majeure) ou partielle (faute simple de la victime)." }
    ],
    copie: [
      "Fondement : [[1243]] et non [[1242]], al. 1er (*specialia generalibus derogant*), même si les régimes sont en pratique identiques."
    ]
  },
  {
    id: "choses-ruine",
    chapitre: "Fait des choses",
    titre: "Responsabilité du fait de la ruine d'un bâtiment (art. 1244)",
    fondement: ["1244"],
    resume: "Engager la responsabilité du propriétaire d'un bâtiment dont la ruine, due à un défaut d'entretien ou à un vice de construction, a causé un dommage.",
    conditions: [
      { nom: "Un bâtiment", question: "L'élément en cause est-il une construction en matériaux durables, élevée par l'homme et incorporée au sol ?", detail: "Maison, mur, balcon, pont. Pas une grotte ni une baraque de chantier (droit commun alors)." },
      { nom: "Une ruine", question: "Le dommage résulte-t-il de la destruction totale ou partielle du bâtiment (chute d'un élément) ?", detail: "Conception stricte (Civ. 2e, 22 oct. 2009) : si ce n'est pas une ruine, on revient à [[1242]], al. 1er." },
      { nom: "Un défaut d'entretien ou un vice de construction", question: "La victime prouve-t-elle que la ruine est due à l'un ou à l'autre ?", detail: "Condition propre à [[1244]] ; souvent établie par expertise.", preuve: "À la charge de la victime." },
      { nom: "Le propriétaire", question: "Qui est propriétaire du bâtiment au jour du dommage ?", detail: "Responsabilité exclusive du propriétaire, même si le défaut est imputable au locataire ou au constructeur (recours ensuite). Contre un gardien non propriétaire, la victime peut agir sur [[1242]], al. 1er (Civ. 2e, 23 mars 2000).", piege: "Écrire que le propriétaire s'exonère en prouvant la faute du locataire." }
    ],
    exonerations: [
      { nom: "Cause étrangère", question: "La ruine est-elle due à un événement de force majeure (et non au défaut d'entretien) ?", detail: "Un vent annoncé ou un défaut d'entretien imputable à un tiers ne sont pas des forces majeures.", effet: "Exonération totale si force majeure ; partielle en cas de faute de la victime." }
    ],
    copie: [
      "Toujours signaler le recours du propriétaire contre le locataire ou le constructeur fautif.",
      "Mentionner que le texte est marginalisé et que son abrogation est proposée."
    ]
  }
);

OBL.cas.push({
  id: "ch14-jour-de-tempete",
  titre: "Un jour de tempête",
  seance: "Chapitre 14",
  regimes: ["choses-1242-al1", "choses-ruine"],
  faits: "Le 2 novembre 2025 au soir, Météo-France place la Loire en vigilance orange « vents violents » pour le lendemain. À Saint-Étienne, Lucie, locataire d'un appartement au troisième étage d'un immeuble appartenant en totalité à M. Ferrand, laisse sur la rambarde de son balcon une lourde jardinière en terre cuite qui lui appartient. Le 3 novembre en fin de matinée, une rafale la fait basculer : elle tombe sur l'épaule de Samir, qui passait sur le trottoir (fracture de la clavicule). Une heure plus tard, une partie du mur de clôture en pierre de la cour de l'immeuble, dont les joints se délitent depuis des années, s'effondre sur la voiture de Samir, garée le long de la cour. Lucie soutient qu'elle n'a commis aucune faute et que la tempête est un cas de force majeure. M. Ferrand répond que le vent est seul en cause et que l'entretien du mur incombait à l'entreprise de maçonnerie avec laquelle il a signé un contrat d'entretien en 2023.",
  question: "Samir peut-il obtenir réparation de son préjudice corporel et des dégâts causés à sa voiture ? Contre qui et sur quel fondement ?",
  corrige: {
    qualification: "Deux dommages distincts : un dommage corporel causé par une chose mobilière en mouvement (la jardinière) ; un dommage matériel causé par l'effondrement partiel d'un mur de clôture, c'est-à-dire d'un bâtiment. Aucun régime spécial ne vise la jardinière ; la chute du mur relève du régime spécial de la ruine des bâtiments.",
    probleme: "Le propriétaire d'une chose tombée sur un passant peut-il s'exonérer en invoquant l'absence de faute et un vent violent annoncé la veille ? Le propriétaire d'un bâtiment dont une partie s'est effondrée faute d'entretien peut-il échapper à sa responsabilité en invoquant le vent et l'obligation d'entretien d'une entreprise tierce ?",
    majeure: "Selon l'article 1242, alinéa 1er, du Code civil, on est responsable du dommage causé par le fait des choses que l'on a sous sa garde. Cette responsabilité est de plein droit : le gardien ne s'exonère ni par la preuve de son absence de faute, ni en montrant que la cause du dommage est inconnue, mais seulement par une cause étrangère présentant les caractères de la force majeure, ou partiellement par la faute de la victime (Ch. réunies, 13 févr. 1930, Jand'heur). Le rôle actif de la chose est présumé lorsqu'elle était en mouvement et est entrée en contact avec la victime. Le gardien est celui qui a l'usage, la direction et le contrôle de la chose (Ch. réunies, 2 déc. 1941, Franck) ; le propriétaire est présumé gardien. Selon l'article 1244, le propriétaire d'un bâtiment est responsable du dommage causé par sa ruine lorsqu'elle est arrivée par suite du défaut d'entretien ou du vice de sa construction ; cette responsabilité pèse sur lui seul, qui dispose ensuite d'un recours contre le tiers fautif, et il ne s'exonère que par la cause étrangère. La force majeure suppose un événement imprévisible, irrésistible et extérieur.",
    mineure: [
      { condition: "La jardinière : chose et fait de la chose", corrige: "La jardinière est une chose mobilière qui ne relève d'aucun régime spécial : l'article 1242, alinéa 1er, s'applique. Elle était en mouvement (chute) et est entrée en contact avec Samir : son rôle actif est présumé, et Lucie ne peut prouver un rôle passif." },
      { condition: "La jardinière : la garde", corrige: "Lucie est propriétaire de la jardinière et l'avait placée elle-même sur son balcon : elle en avait l'usage, la direction et le contrôle. Elle est gardienne. M. Ferrand, propriétaire de l'immeuble, n'a aucun pouvoir sur les objets de sa locataire." },
      { condition: "La jardinière : les causes d'exonération", corrige: "L'absence de faute de Lucie est inopérante (Jand'heur). Le vent ne constitue pas une force majeure : l'alerte avait été donnée la veille, il était donc prévisible, et Lucie pouvait éviter le dommage en rentrant la jardinière, ce qui exclut l'irrésistibilité. Aucune faute n'est reprochable à Samir, simple passant sur le trottoir. Lucie (en pratique son assureur de responsabilité civile) doit réparer intégralement le préjudice corporel." },
      { condition: "Le mur : bâtiment et ruine", corrige: "Un mur de clôture en pierre est une construction en matériaux durables incorporée au sol : c'est un bâtiment. Son effondrement partiel constitue une ruine. L'article 1244 s'applique à l'exclusion de l'article 1242, alinéa 1er." },
      { condition: "Le mur : défaut d'entretien et responsable", corrige: "Samir doit prouver que la ruine est due à un défaut d'entretien : les joints qui se délitent depuis des années l'établissent, au besoin par expertise. Le responsable est le propriétaire, M. Ferrand. Qu'il ait confié l'entretien à une entreprise ne l'exonère pas envers la victime : il pourra seulement exercer contre elle un recours, sur le fondement du contrat d'entretien." },
      { condition: "Le mur : exonération", corrige: "Le vent, annoncé la veille, n'était pas imprévisible, et l'effondrement procède d'abord du défaut d'entretien : pas de force majeure. M. Ferrand doit réparer les dégâts causés à la voiture." }
    ],
    conclusion: "Samir obtiendra de Lucie, gardienne de la jardinière, la réparation intégrale de son préjudice corporel (art. 1242, al. 1er) ; son action se prescrit par dix ans à compter de la consolidation de son dommage (art. 2226). Il obtiendra de M. Ferrand, propriétaire du mur, la réparation des dégâts matériels (art. 1244), dans un délai de cinq ans à compter du 3 novembre 2025, soit jusqu'au 3 novembre 2030 (art. 2224) ; M. Ferrand pourra ensuite se retourner contre l'entreprise de maçonnerie."
  }
});

OBL.articles.push(
  {"num": "1240", "code": "C. civ.", "theme": "Responsabilité pour faute", "texte": "Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", "chapitres": [14], "retenir": "Recours de droit commun quand aucun régime du fait des choses ne s'applique (faute prouvée)."},
  {"num": "1241", "code": "C. civ.", "theme": "Responsabilité pour faute", "texte": "Chacun est responsable du dommage qu'il a causé non seulement par son fait, mais encore par sa négligence ou par son imprudence.", "chapitres": [14], "retenir": "Négligence ou imprudence : même rôle subsidiaire que l'art. 1240."},
  {"num": "1242", "code": "C. civ.", "theme": "Fait des choses", "texte": "On est responsable non seulement du dommage que l'on cause par son propre fait, mais encore de celui qui est causé par le fait des personnes dont on doit répondre, ou des choses que l'on a sous sa garde.\n\nToutefois, celui qui détient, à un titre quelconque, tout ou partie de l'immeuble ou des biens mobiliers dans lesquels un incendie a pris naissance ne sera responsable, vis-à-vis des tiers, des dommages causés par cet incendie que s'il est prouvé qu'il doit être attribué à sa faute ou à la faute des personnes dont il est responsable.\n\nCette disposition ne s'applique pas aux rapports entre propriétaires et locataires, qui demeurent régis par les articles 1733 et 1734 du code civil.\n\nLes parents, en tant qu'ils exercent l'autorité parentale, sont, de plein droit, solidairement responsables du dommage causé par leurs enfants mineurs, sauf lorsque que ceux-ci ont été confiés à un tiers par une décision administrative ou judiciaire.\n\nLes maîtres et les commettants, du dommage causé par leurs domestiques et préposés dans les fonctions auxquelles ils les ont employés ;\n\nLes instituteurs et les artisans, du dommage causé par leurs élèves et apprentis pendant le temps qu'ils sont sous leur surveillance.\n\nLa responsabilité ci-dessus a lieu, à moins que les parents et les artisans ne prouvent qu'ils n'ont pu empêcher le fait qui donne lieu à cette responsabilité.\n\nEn ce qui concerne les instituteurs, les fautes, imprudences ou négligences invoquées contre eux comme ayant causé le fait dommageable, devront être prouvées, conformément au droit commun, par le demandeur, à l'instance.", "chapitres": [14], "retenir": "Al. 1er : principe général de responsabilité du gardien (Jand'heur) ; al. 2 et 3 : incendie communiqué, faute prouvée envers les tiers, sauf rapports bailleur-locataire."},
  {"num": "1243", "code": "C. civ.", "theme": "Fait des animaux", "texte": "Le propriétaire d'un animal, ou celui qui s'en sert, pendant qu'il est à son usage, est responsable du dommage que l'animal a causé, soit que l'animal fût sous sa garde, soit qu'il fût égaré ou échappé.", "chapitres": [14], "retenir": "Propriétaire ou utilisateur responsable de plein droit, même si l'animal s'est égaré ou échappé."},
  {"num": "1244", "code": "C. civ.", "theme": "Ruine des bâtiments", "texte": "Le propriétaire d'un bâtiment est responsable du dommage causé par sa ruine, lorsqu'elle est arrivée par une suite du défaut d'entretien ou par le vice de sa construction.", "chapitres": [14], "retenir": "Propriétaire responsable de la ruine due au défaut d'entretien ou au vice de construction."},
  {"num": "1245", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Le producteur est responsable du dommage causé par un défaut de son produit, qu'il soit ou non lié par un contrat avec la victime.", "chapitres": [14], "retenir": "Régime spécial du producteur, qui écarte l'art. 1242, al. 1er quand l'action repose sur le défaut du produit."},
  {"num": "1245-17", "code": "C. civ.", "theme": "Produits défectueux", "texte": "Les dispositions du présent chapitre ne portent pas atteinte aux droits dont la victime d'un dommage peut se prévaloir au titre du droit de la responsabilité contractuelle ou extracontractuelle ou au titre d'un régime spécial de responsabilité.\n\nLe producteur reste responsable des conséquences de sa faute et de celle des personnes dont il répond.", "chapitres": [14], "retenir": "Les autres régimes restent ouverts, mais pas sur le même fondement du défaut de sécurité (CJCE, 25 avr. 2002)."},
  {"num": "1733", "code": "C. civ.", "theme": "Incendie", "texte": "Il répond de l'incendie, à moins qu'il ne prouve :\n\nQue l'incendie est arrivé par cas fortuit ou force majeure, ou par vice de construction.\n\nOu que le feu a été communiqué par une maison voisine.", "chapitres": [14], "retenir": "Le locataire répond de l'incendie envers le bailleur, sauf cas fortuit, force majeure, vice de construction ou feu communiqué."},
  {"num": "1734", "code": "C. civ.", "theme": "Incendie", "texte": "S'il y a plusieurs locataires, tous sont responsables de l'incendie, proportionnellement à la valeur locative de la partie de l'immeuble qu'ils occupent ;\n\nA moins qu'ils ne prouvent que l'incendie a commencé dans l'habitation de l'un d'eux, auquel cas celui-là seul en est tenu ;\n\nOu que quelques-uns ne prouvent que l'incendie n'a pu commencer chez eux, auquel cas ceux-là n'en sont pas tenus.", "chapitres": [14], "retenir": "Pluralité de locataires : responsabilité proportionnelle à la valeur locative, sauf preuve de l'origine du feu."},
  {"num": "L85-1", "code": "Loi n° 85-677 du 5 juill. 1985", "theme": "Accidents de la circulation", "texte": "Les dispositions du présent chapitre s'appliquent, même lorsqu'elles sont transportées en vertu d'un contrat, aux victimes d'un accident de la circulation dans lequel est impliqué un véhicule terrestre à moteur ainsi que ses remorques ou semi-remorques, à l'exception des chemins de fer et des tramways circulant sur des voies qui leur sont propres.", "chapitres": [14], "retenir": "Les accidents impliquant un véhicule terrestre à moteur échappent à l'art. 1242, al. 1er.", "aff": "1"}
);
