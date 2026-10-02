/* Chapitre 15 — Les faits générateurs de responsabilité délictuelle : le fait d'autrui
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 15,
  intro: "Répondre du fait d'autrui, c'est indemniser la victime d'un dommage qu'on n'a pas matériellement causé. Le Code de 1804 prévoyait des cas **limitatifs** ([[1242]], al. 4 à 8) : **parents**, **commettants**, **instituteurs**, **artisans**. La jurisprudence les a transformés en responsabilités **de plein droit** (Bertrand, 1997, pour les parents), puis a admis, sur le fondement de [[1242]], al. 1er, des cas **non prévus par le Code** (Blieck, 1991). Dernière étape : la **loi du 23 juin 2025** a supprimé la condition de cohabitation entre les parents et l'enfant.",
  sections: [
    {
      titre: "Panorama des responsabilités du fait d'autrui",
      contenu: [
        { schema: { type: "tableau", titre: "Qui répond de qui ?", colonnes: ["Responsable", "Texte", "Fait exigé de l'auteur", "Nature", "Exonération"], lignes: [
          ["**Parents** exerçant l'autorité parentale", "[[1242]], al. 4 (loi du 23 juin 2025)", "Simple **fait causal** du mineur", "De plein droit (Bertrand, 1997)", "Force majeure, faute de la victime"],
          ["**Commettant**", "[[1242]], al. 5", "Fait du préposé de nature à engager sa responsabilité, **dans ses fonctions**", "De plein droit", "Abus de fonctions ; cause étrangère"],
          ["**Instituteur** (enseignant)", "[[1242]], al. 6 et 8 ; loi du 5 avril 1937", "Dommage causé par l'élève sous sa surveillance", "**Faute prouvée** de l'enseignant", "Absence de faute prouvée"],
          ["**Artisan**", "[[1242]], al. 6 et 7", "Dommage causé par l'apprenti sous sa surveillance", "Présomption simple de faute (texte)", "Preuve qu'il n'a pu empêcher le fait (désuétude)"],
          ["**Organisme** contrôlant le mode de vie ou l'activité d'autrui", "[[1242]], al. 1er (Blieck, 1991)", "Mode de vie : question ouverte ; club sportif : **faute caractérisée** (violation des règles du jeu)", "De plein droit (Crim., 26 mars 1997)", "Cause étrangère"]
        ] } },
        { p: "La victime garde toujours la possibilité d'agir contre l'**auteur** lui-même sur le fondement de sa faute ([[1240]], [[1241]]), sauf immunité du préposé (Costedoat). Mais le responsable du fait d'autrui est en principe **solvable et assuré** : c'est lui qu'on assigne en pratique." },
        { attention: "Articulation : *specialia generalibus derogant*. Si un régime spécial s'applique (parents, commettant), on ne peut pas se placer sur [[1242]], al. 1er. Si aucun régime du fait d'autrui ne s'applique, la victime peut encore prouver la **faute personnelle** du surveillant ([[1240]])." }
      ]
    },
    {
      titre: "La responsabilité des parents du fait de leurs enfants mineurs",
      contenu: [
        { p: "Depuis la loi du 23 juin 2025, [[1242]], al. 4 prévoit que les parents, en tant qu'ils exercent l'autorité parentale, sont **de plein droit** et **solidairement** responsables du dommage causé par leurs enfants mineurs, **sauf** si ceux-ci ont été **confiés à un tiers par une décision administrative ou judiciaire**. Les mots « habitant avec eux » ont disparu." },
        { h: "Les conditions" },
        { liste: [
          "**Un enfant mineur** : la responsabilité cesse à la majorité et à l'**émancipation** (art. 413-7 : les parents d'un mineur émancipé ne répondent plus de plein droit de ses actes).",
          "**Des parents exerçant l'autorité parentale** : exercice conjoint par principe, même après séparation (art. 372 et 373-2) ; en cas d'exercice unilatéral (décès, retrait, décision du juge aux affaires familiales, filiation établie tardivement), **seul** le parent qui l'exerce est responsable. Un beau-parent ou un grand-parent n'est jamais responsable sur ce fondement.",
          "**Un fait du mineur** ayant causé le dommage : un simple **fait causal** suffit, même non fautif (Ass. plén., 9 mai 1984, Fullenwarth ; Civ. 2e, 10 mai 2001, Levert, n° 99-11.287 ; Ass. plén., 13 déc. 2002).",
          "**Pas de décision administrative ou judiciaire** confiant l'enfant à un tiers (placement à l'aide sociale à l'enfance, par exemple). En dehors de ce cas, l'éloignement de l'enfant, même long, est indifférent (déjà avant 2024 : Crim., 8 févr. 2005, enfant confié depuis l'âge d'un an à sa grand-mère)."
        ] },
        { schema: { type: "frise", titre: "De la faute présumée des parents à la responsabilité liée à l'autorité parentale", evenements: [
          { date: "1804", t: "Faute présumée", d: "Présomption simple de faute d'éducation ou de surveillance ; les parents s'exonèrent en prouvant qu'ils n'ont pu empêcher le fait (al. 7 actuel). Condition de cohabitation." },
          { date: "9 mai 1984", t: "Ass. plén., Fullenwarth", d: "Il suffit d'un acte du mineur qui soit la **cause directe** du dommage : la faute de l'enfant n'est plus exigée." },
          { date: "19 févr. 1997", t: "Civ. 2e, Bertrand (n° 94-21.111)", d: "Responsabilité **de plein droit** : seules la **force majeure** ou la **faute de la victime** exonèrent les parents. Le même jour, Samda : un droit de visite et d'hébergement ne fait pas cesser la cohabitation avec le parent chez qui l'enfant réside." },
          { date: "2000", t: "Civ. 2e, 20 janv. et 9 mars 2000", d: "La cohabitation devient la **résidence habituelle** de l'enfant chez ses parents ou l'un d'eux ; confier l'enfant temporairement à un tiers ne la fait pas cesser." },
          { date: "13 déc. 2002", t: "Ass. plén. (deux arrêts)", d: "Confirmation : le fait, **même non fautif**, du mineur suffit." },
          { date: "28 juin 2024", t: "Ass. plén., n° 22-84.760", d: "La cohabitation est la **conséquence de l'exercice conjoint** de l'autorité parentale ; elle ne cesse que si une décision administrative ou judiciaire confie l'enfant à un tiers. Le parent divorcé chez qui l'enfant ne réside pas est donc responsable." },
          { date: "23 juin 2025", t: "Loi (autorité de la justice à l'égard des mineurs délinquants et de leurs parents)", d: "Réécriture de [[1242]], al. 4 : suppression de la cohabitation, ajout de « de plein droit »." }
        ] } },
        { arret: { ref: "Civ. 2e, 19 févr. 1997, Bertrand (n° 94-21.111)", apport: "Un enfant de 12 ans circulant à bicyclette heurte une motocyclette. Les juges du fond n'avaient pas à rechercher un défaut de surveillance du père : seule la force majeure ou la faute de la victime peut exonérer les parents de leur responsabilité de plein droit. Fin de la présomption de faute." } },
        { h: "Le régime" },
        { liste: [
          "**Pas d'exonération par l'absence de faute**, alors même que [[1242]], al. 7 évoque encore la preuve que les parents « n'ont pu empêcher le fait » : ce texte est neutralisé depuis Bertrand pour les parents.",
          "**Force majeure** : appréciée à l'égard des **parents** (Civ. 2e, 17 févr. 2011). Le fait de l'enfant ne leur étant jamais extérieur, l'exonération est quasi impossible.",
          "**Faute de la victime** et **fait d'un tiers** : effets du droit commun (exonération partielle ou totale).",
          "**Solidarité** entre les deux parents ; action possible, en plus, contre l'enfant lui-même sur le fondement de sa faute ([[1240]] ; Civ. 2e, 11 sept. 2014), l'*infans* pouvant commettre une faute objective (Ass. plén., 9 mai 1984, Lemaire et Derguini)."
        ] },
        { attention: "Loi dans le temps : pour des faits postérieurs à l'entrée en vigueur de la loi du 23 juin 2025, appliquez le nouveau texte. Pour des faits antérieurs, la solution est en pratique identique depuis l'arrêt d'Assemblée plénière du 28 juin 2024 (la cohabitation découle de l'exercice conjoint de l'autorité parentale)." }
      ]
    },
    {
      titre: "La responsabilité du commettant du fait de ses préposés",
      contenu: [
        { p: "[[1242]], al. 5 : les commettants répondent du dommage causé par leurs préposés « dans les fonctions auxquelles ils les ont employés ». Trois conditions cumulatives, puis la question de l'**immunité du préposé**." },
        { def: { terme: "Lien de préposition", texte: "droit de donner au préposé des **ordres ou des instructions** sur la manière de remplir ses fonctions. Il naît le plus souvent d'un **contrat de travail**, mais peut résulter d'une simple **situation de fait** (ami ou parent qui aide occasionnellement). Définition posée par Civ., 4 mai 1937." } },
        { liste: [
          "**Indépendance technique** : le médecin salarié d'une clinique reste son préposé, car il est subordonné dans l'organisation de son travail.",
          "**Prêt de main-d'œuvre** : l'entreprise utilisatrice devient commettant si elle a réellement le pouvoir de donner des ordres au salarié prêté ; sinon, l'employeur le reste.",
          "**Fait du préposé** : un fait de nature à engager sa propre responsabilité (en pratique une **faute**) ; une **faute objective** suffit (le préposé privé de discernement peut engager son commettant). À la différence des parents, la jurisprudence n'a pas, jusqu'ici, admis qu'un simple fait causal suffise (Civ. 2e, 8 avr. 2004), mais la solution est incertaine depuis Costedoat.",
          "**Chose utilisée par le préposé** : c'est le commettant qui en est gardien ([[1242]], al. 1er)."
        ] },
        { h: "Le lien avec les fonctions : l'abus de fonctions" },
        { arret: { ref: "Ass. plén., 19 mai 1988", apport: "Après une longue divergence entre la 2e chambre civile et la chambre criminelle, le commettant ne s'exonère que si son préposé a agi **hors des fonctions** auxquelles il était employé, **sans autorisation** et **à des fins étrangères à ses attributions**. Trois conditions **cumulatives**, à prouver par le commettant. La jurisprudence est très sévère : l'acte rattaché au travail par le temps, le lieu ou les moyens n'est pas un abus, quelles que soient les intentions du préposé (détournement de fonds sur le lieu de travail, incendie des locaux qu'il devait surveiller, agressions sexuelles sur le lieu de travail : Civ. 2e, 17 mars 2011)." } },
        { schema: { type: "etapes", titre: "Tester l'abus de fonctions", etapes: [
          { t: "1. Hors des fonctions ?", d: "Critère objectif : l'acte se rattache-t-il au travail par le **temps**, le **lieu** ou les **moyens** ? Si oui, pas d'abus." },
          { t: "2. Sans autorisation ?", d: "L'autorisation du commettant est en pratique présumée : à lui de prouver qu'il n'avait rien autorisé." },
          { t: "3. À des fins étrangères ?", d: "Critère subjectif : le préposé a-t-il agi dans son **intérêt personnel** ? S'il croyait servir son employeur, pas d'abus." },
          { t: "4. Croyance de la victime", d: "Si la victime **ne pouvait légitimement croire** que le préposé agissait pour le compte du commettant (fonds remis en espèces hors de l'agence, sans reçu), la responsabilité du commettant est écartée (Civ. 2e, 7 févr. 2013, n° 11-25.582)." }
        ] } },
        { h: "Nature et exonération" },
        { p: "Responsabilité **de plein droit** : le commettant ne s'exonère pas par l'absence de faute. Il peut prouver l'**abus de fonctions** ; invoquer une **force majeure** à l'égard du **préposé** (le fait du préposé n'est jamais extérieur au commettant) ; opposer la faute de la victime ou le fait d'un tiers dans les termes du droit commun." },
        { h: "L'immunité du préposé : Costedoat et Cousin" },
        { schema: { type: "arbre", titre: "La victime peut-elle agir contre le préposé ?", racine: { t: "Préposé auteur d'un dommage", enfants: [
          { lien: "dans les limites de sa mission", t: "Immunité civile", d: "« n'engage pas sa responsabilité à l'égard des tiers le préposé qui agit sans excéder les limites de la mission qui lui a été impartie par son commettant » (Ass. plén., 25 févr. 2000, Costedoat, n° 97-17.378) : seul le commettant répond ; pas de recours du commettant contre le préposé" },
          { lien: "infraction pénale intentionnelle", t: "Responsabilité personnelle", d: "« le préposé condamné pénalement pour avoir intentionnellement commis, fût-ce sur l'ordre du commettant, une infraction ayant porté préjudice à un tiers, engage sa responsabilité civile à l'égard de celui-ci » (Ass. plén., 14 déc. 2001, Cousin, n° 00-82.066)" },
          { lien: "faute intentionnelle", t: "Responsabilité personnelle", d: "même sans qualification pénale (Civ. 2e, 20 déc. 2007 ; 21 févr. 2008) ; certains arrêts l'ont aussi admise pour un préposé titulaire d'une délégation de pouvoirs" }
        ] } } },
        { liste: [
          "**Portée générale** : l'immunité profite à tout salarié, même techniquement indépendant (sage-femme salariée : Civ. 1re, 9 nov. 2004), et joue aussi dans le cadre de la loi du 5 juillet 1985 (Civ. 2e, 28 mai 2009).",
          "**Immunité procédurale, non irresponsabilité** : le commettant ou son assureur peut agir contre l'**assureur** de responsabilité du préposé (Civ. 1re, 12 juill. 2007). L'assureur du commettant n'a pas de recours contre le préposé, sauf malveillance (C. assur., art. L. 121-12, al. 3).",
          "**Cumul** : si le préposé a perdu son immunité sans que l'abus de fonctions soit caractérisé, la Cour de cassation paraît admettre le **cumul** des responsabilités du commettant et du préposé (Civ. 2e, 16 juin 2005), sans l'avoir jamais affirmé expressément. Si l'on assimilait le dépassement de mission à l'abus de fonctions, les deux responsabilités seraient au contraire alternatives.",
          "Précurseur : Com., 12 oct. 1993, Rochas."
        ] }
      ]
    },
    {
      titre: "Instituteurs et artisans",
      contenu: [
        { h: "Les membres de l'enseignement ([[1242]], al. 6 et 8)" },
        { liste: [
          "**Champ** : tous les membres de l'enseignement et les personnes exerçant une fonction éducative à l'école (surveillants, directeur), **à l'exclusion des professeurs d'université**.",
          "**Condition 1** : la victime prouve une **faute** de l'enseignant (le plus souvent un défaut de surveillance) : [[1242]], al. 8. C'est une responsabilité pour **faute prouvée**, pas une vraie responsabilité du fait d'autrui.",
          "**Condition 2** : dommage causé ou subi par l'élève **pendant qu'il était sous la surveillance** de l'enseignant (cours, récréation, sorties scolaires).",
          "**Substitution de l'État** (loi du 5 avril 1937 ; C. éduc., art. L. 911-4) : pour l'enseignement public et privé sous contrat, l'action est dirigée **contre l'État**, devant le **tribunal judiciaire**, dans un délai de **trois ans** ; l'enseignant ne peut pas être mis en cause par la victime ; l'État dispose d'un recours contre lui.",
          "Enseignement **privé hors contrat** : action contre l'enseignant et contre l'établissement, commettant ([[1242]], al. 5)."
        ] },
        { attention: "Pendant le temps scolaire, les parents restent responsables de plein droit ([[1242]], al. 4) : l'enfant n'est pas « confié à un tiers par décision administrative ou judiciaire ». La victime a donc souvent intérêt à agir contre les parents plutôt que de prouver la faute de l'enseignant." },
        { h: "Les artisans ([[1242]], al. 6 et 7)" },
        { p: "Responsabilité du fait des apprentis sous leur surveillance, fondée sur une **présomption simple de faute** (ils s'exonèrent en prouvant qu'ils n'ont pu empêcher le fait). Tombée en **désuétude** : l'apprenti étant aujourd'hui un salarié, on applique le régime du commettant. Les projets de réforme prévoient sa suppression." }
      ]
    },
    {
      titre: "Le principe général de responsabilité du fait d'autrui ([[1242]], al. 1er)",
      contenu: [
        { p: "Jusqu'en 1991, refus constant : le fait d'autrui était une exception, limitée aux cas du Code. L'arrêt **Blieck** ouvre la voie, à la demande de l'avocat général Dontenwille, pour deux raisons : un **risque social nouveau** (le traitement en milieu ouvert des personnes handicapées) et l'**alignement sur le droit administratif**, qui indemnise sans faute les victimes des méthodes libérales (détenus en permission, malades en sortie d'essai)." },
        { arret: { ref: "Ass. plén., 29 mars 1991, Blieck (n° 89-15.231)", apport: "Un handicapé mental placé dans un centre d'aide par le travail met le feu à une forêt. L'association qui avait **accepté la charge d'organiser et de contrôler, à titre permanent, le mode de vie** de cette personne doit répondre de ses actes sur le fondement de l'art. 1384, al. 1er anc. Pas un principe général au sens strict, mais un **décloisonnement** de l'article." } },
        { schema: { type: "tableau", titre: "Les deux domaines de l'art. 1242, al. 1er", colonnes: ["", "Contrôle du mode de vie d'autrui", "Contrôle de l'activité d'autrui"], lignes: [
          ["Responsables", "Associations et établissements prenant en charge des mineurs (assistance éducative) ou des majeurs handicapés", "Associations sportives ; association de majorettes (Civ. 2e, 12 déc. 2002)"],
          ["Pouvoir exigé", "Organiser et contrôler **à titre permanent** le mode de vie", "Organiser, diriger et contrôler l'activité, **temporairement** (compétition, entraînement, voire à l'issue du match : Civ. 2e, 5 juill. 2018, n° 17-19.957)"],
          ["Source du pouvoir", "**Décision judiciaire ou administrative** ; pas un contrat (Civ. 1re, 15 déc. 2011 : maison de retraite hébergeant un résident en vertu d'un contrat)", "Statuts et règles sportives"],
          ["Fait de l'auteur", "Question non tranchée (le fait causal suffit peut-être, par analogie avec les parents)", "**Faute caractérisée par une violation des règles du jeu**, par un joueur même non identifié (Civ. 2e, 20 nov. 2003 ; Ass. plén., 29 juin 2007)"],
          ["Exclus", "Membres de la famille (grands-parents), gardiens bénévoles ; administrateur légal d'un majeur incapable (Civ. 2e, 25 févr. 1998, avant la loi du 5 mars 2007), mais non tuteur d'un mineur (Crim., 28 mars 2000)", "Syndicat professionnel (Civ. 2e, 26 oct. 2006) ; association de chasse (Civ. 2e, 11 sept. 2008)"]
        ] } },
        { h: "La permanence du pouvoir" },
        { p: "L'association chargée par un **juge des enfants** d'organiser et de contrôler à titre permanent le mode de vie d'un mineur reste responsable de plein droit **même lorsque celui-ci est chez ses parents**, tant qu'aucune décision judiciaire n'a suspendu ou interrompu sa mission (Civ. 2e, 6 juin 2002 ; déjà Crim., 26 mars 1997). Symétriquement, les parents ne sont plus responsables : l'enfant est confié à un tiers par décision judiciaire ([[1242]], al. 4)." },
        { h: "La nature de la responsabilité" },
        { p: "**Responsabilité de plein droit** : le gardien d'autrui ne s'exonère pas en prouvant qu'il n'a commis aucune faute (Crim., 26 mars 1997, Notre-Dame des Flots). Seule la **cause étrangère** l'exonère. Les principaux régimes du fait d'autrui sont ainsi harmonisés." },
        { attention: "Le projet de réforme de 2017 et la proposition de loi sénatoriale de 2020 (non adoptés) distinguent la personne chargée par décision judiciaire ou administrative d'organiser et contrôler le mode de vie (responsabilité de plein droit) et le professionnel qui assume une surveillance par contrat (présomption simple de faute). Ce n'est pas du droit positif." }
      ]
    }
  ],
  retenir: [
    "Parents ([[1242]], al. 4, loi du 23 juin 2025) : mineur + exercice de l'autorité parentale + fait causal ; plus de condition de cohabitation ; exception : enfant confié à un tiers par décision administrative ou judiciaire.",
    "Fait causal suffisant : Fullenwarth (1984), Levert (2001), Ass. plén. 13 déc. 2002. Plein droit : Bertrand (1997) ; exonération par force majeure (appréciée à l'égard des parents) ou faute de la victime.",
    "Commettant ([[1242]], al. 5) : lien de préposition, fait du préposé, dans les fonctions ; abus de fonctions = hors fonctions + sans autorisation + fins étrangères (Ass. plén., 19 mai 1988).",
    "Immunité du préposé agissant dans les limites de sa mission (Costedoat, 2000), sauf infraction pénale intentionnelle (Cousin, 2001) ou faute intentionnelle.",
    "Instituteurs : faute prouvée ; substitution de l'État (loi du 5 avril 1937), tribunal judiciaire, trois ans. Artisans : présomption de faute, désuétude.",
    "Blieck (Ass. plén., 29 mars 1991) : responsabilité de plein droit (Crim., 26 mars 1997) de celui qui organise et contrôle à titre permanent le mode de vie d'autrui (décision judiciaire, pas contrat : Civ. 1re, 15 déc. 2011) ou l'activité d'autrui (clubs sportifs : violation des règles du jeu, Ass. plén., 29 juin 2007)."
  ],
  articles: ["1240", "1241", "1242"],
  regimes: ["autrui-parents", "autrui-commettant", "autrui-blieck"],
  cas: ["ch15-week-end-agite"],
  quiz: [
    { q: "Depuis la loi du 23 juin 2025, la responsabilité des parents du fait de leur enfant mineur suppose :", choix: ["L'exercice de l'autorité parentale et la cohabitation avec l'enfant", "L'exercice de l'autorité parentale, sauf enfant confié à un tiers par décision administrative ou judiciaire", "La seule filiation établie"], bonne: 1, expl: "[[1242]], al. 4 nouveau : la cohabitation a disparu du texte, qui codifie Ass. plén., 28 juin 2024." },
    { q: "Des parents séparés exercent en commun l'autorité parentale ; la résidence de l'enfant est fixée chez la mère. L'enfant cause un dommage pendant un week-end chez son père. Qui est responsable ?", choix: ["La mère seule", "Le père seul", "Les deux parents, solidairement"], bonne: 2, expl: "Ass. plén., 28 juin 2024, puis [[1242]], al. 4 : la résidence habituelle est indifférente." },
    { q: "Les parents peuvent-ils s'exonérer en prouvant qu'ils ont parfaitement surveillé et éduqué leur enfant ?", choix: ["Non : seules la force majeure ou la faute de la victime les exonèrent", "Oui, en application de [[1242]], al. 7", "Oui, si l'enfant n'a pas commis de faute"], bonne: 0, expl: "Civ. 2e, 19 févr. 1997, Bertrand. L'al. 7 est lettre morte pour les parents." },
    { q: "Un enfant blesse un camarade au cours d'un jeu, sans commettre la moindre faute. Ses parents :", choix: ["Sont responsables : le fait causal du mineur suffit", "Ne sont pas responsables faute d'acte illicite", "Ne sont responsables que si l'enfant avait plus de 13 ans"], bonne: 0, expl: "Civ. 2e, 10 mai 2001, Levert ; Ass. plén., 13 déc. 2002." },
    { q: "Un salarié livreur blesse un passant par imprudence au cours de sa tournée, sans poursuite pénale. La victime assigne le salarié seul. Son action :", choix: ["Prospère : toute faute engage son auteur", "Échoue : le préposé resté dans les limites de sa mission bénéficie d'une immunité", "Prospère si l'employeur est insolvable"], bonne: 1, expl: "Ass. plén., 25 févr. 2000, Costedoat : elle doit agir contre le commettant ([[1242]], al. 5)." },
    { q: "Un préposé commet, sur ordre de son employeur, une infraction intentionnelle pour laquelle il est condamné pénalement. La victime peut agir contre :", choix: ["Le seul employeur, qui a donné l'ordre", "Le seul préposé", "Le préposé et, si l'acte a été commis dans les fonctions, l'employeur"], bonne: 2, expl: "Ass. plén., 14 déc. 2001, Cousin : le préposé perd son immunité ; la responsabilité du commettant subsiste faute d'abus de fonctions." },
    { q: "Pour que le commettant échappe à sa responsabilité par l'abus de fonctions, il doit prouver que le préposé a agi :", choix: ["À des fins personnelles, quelles que soient les circonstances", "Hors de ses fonctions, sans autorisation et à des fins étrangères à ses attributions", "En commettant une infraction pénale"], bonne: 1, expl: "Ass. plén., 19 mai 1988 : trois conditions cumulatives." },
    { q: "Un élève d'une école publique en blesse un autre pendant la récréation. La victime veut agir sur le fondement de la faute de surveillance de l'enseignant. Elle doit assigner :", choix: ["L'enseignant devant le tribunal judiciaire", "L'État devant le tribunal administratif", "L'État devant le tribunal judiciaire"], bonne: 2, expl: "Loi du 5 avril 1937 : substitution de l'État, compétence judiciaire, prescription de trois ans. Elle peut aussi agir contre les parents de l'auteur ([[1242]], al. 4)." },
    { q: "Une maison de retraite accueille par contrat un résident qui frappe mortellement un autre pensionnaire. Sa responsabilité sur le fondement de [[1242]], al. 1er :", choix: ["Est engagée de plein droit (Blieck)", "Est exclue, le résident étant hébergé en vertu d'un contrat", "Suppose un simple fait causal du résident"], bonne: 1, expl: "Civ. 1re, 15 déc. 2011 : la source contractuelle du pouvoir écarte l'art. 1242, al. 1er ; reste la faute prouvée (contractuelle à l'égard du résident victime)." },
    { q: "Un rugbyman non identifié frappe un adversaire lors d'un match. La responsabilité du club de l'auteur suppose :", choix: ["Une faute caractérisée par une violation des règles du jeu, même si le joueur n'est pas identifié", "L'identification du joueur", "Un simple fait causal du joueur"], bonne: 0, expl: "Civ. 2e, 20 nov. 2003 ; Ass. plén., 29 juin 2007." }
  ]
});

OBL.regimes.push(
  {
    id: "autrui-parents",
    chapitre: "Fait d'autrui",
    titre: "Responsabilité des parents du fait de leur enfant mineur (art. 1242, al. 4)",
    fondement: ["1242"],
    resume: "Engager la responsabilité de plein droit et solidaire des parents qui exercent l'autorité parentale, pour le dommage causé par leur enfant mineur. Texte issu de la loi du 23 juin 2025 : plus de condition de cohabitation.",
    conditions: [
      { nom: "Un enfant mineur non émancipé", question: "L'auteur du dommage avait-il moins de 18 ans et n'était-il pas émancipé au jour des faits ?", detail: "Après l'émancipation, les parents ne répondent plus de plein droit de ses actes (art. 413-7)." },
      { nom: "L'exercice de l'autorité parentale", question: "Quel(s) parent(s) exerce(nt) l'autorité parentale ?", detail: "Exercice conjoint par principe, même après la séparation : les deux parents répondent solidairement. Exercice unilatéral : seul le parent qui l'exerce répond. Grand-parent, beau-parent, tiers : jamais sur ce fondement.", preuve: "La victime établit la filiation et l'autorité parentale ; le parent qui s'en prétend privé doit le prouver.", piege: "Écrire que le parent chez qui l'enfant ne réside pas n'est pas responsable : c'est faux depuis Ass. plén., 28 juin 2024 et la loi du 23 juin 2025." },
      { nom: "Un fait causal du mineur", question: "Un fait du mineur, même non fautif, est-il la cause directe du dommage ?", detail: "Fullenwarth (1984), Levert (2001), Ass. plén., 13 déc. 2002.", piege: "Exiger une faute de l'enfant." },
      { nom: "Pas de décision confiant l'enfant à un tiers", question: "Une décision administrative ou judiciaire avait-elle confié l'enfant à un tiers (placement) ?", detail: "Si oui, les parents ne répondent pas ; la victime se tourne vers l'organisme gardien ([[1242]], al. 1er, Blieck). Un simple séjour chez un proche, une colonie, l'école : indifférents.", piege: "Confondre enfant confié par les parents eux-mêmes (responsabilité maintenue) et enfant confié par décision (responsabilité écartée)." }
    ],
    exonerations: [
      { nom: "Absence de faute", question: "Les parents prouvent-ils une surveillance et une éducation irréprochables ?", detail: "Inopérant depuis Bertrand (1997), malgré la lettre de [[1242]], al. 7.", effet: "Aucun." },
      { nom: "Force majeure", question: "Le fait de l'enfant était-il imprévisible, irrésistible et extérieur pour les parents ?", detail: "Appréciée à l'égard des parents (Civ. 2e, 17 févr. 2011) : quasi impossible.", effet: "Exonération totale." },
      { nom: "Faute de la victime, fait d'un tiers", question: "La victime ou un tiers ont-ils contribué au dommage ?", detail: "Règles du droit commun.", effet: "Exonération partielle (ou totale si force majeure) ; sinon *in solidum* avec le tiers (par exemple les parents d'un autre enfant coauteur)." }
    ],
    copie: [
      "Vérifier la date des faits : après la loi du 23 juin 2025, citer le nouveau texte ; avant, citer Ass. plén., 28 juin 2024.",
      "Mentionner aussi l'action possible contre l'enfant lui-même ([[1240]]) et l'assurance de responsabilité civile des parents."
    ]
  },
  {
    id: "autrui-commettant",
    chapitre: "Fait d'autrui",
    titre: "Responsabilité du commettant du fait de son préposé (art. 1242, al. 5)",
    fondement: ["1242"],
    resume: "Engager la responsabilité de plein droit du commettant pour le dommage causé par son préposé dans ses fonctions, puis déterminer si le préposé peut aussi être poursuivi (Costedoat, Cousin).",
    conditions: [
      { nom: "Un lien de préposition", question: "Le défendeur avait-il le pouvoir de donner des ordres ou des instructions à l'auteur sur la manière d'accomplir sa tâche ?", detail: "Contrat de travail en général ; aussi une situation de fait (aide bénévole occasionnelle). Indépendance technique indifférente (médecin salarié). Prêt de main-d'œuvre : qui donne réellement les ordres ?", piege: "Qualifier de préposé un entrepreneur indépendant ou un sous-traitant : pas de subordination." },
      { nom: "Un fait dommageable du préposé", question: "Le préposé a-t-il commis un fait de nature à engager sa responsabilité (en pratique une faute) ?", detail: "La jurisprudence n'a pas étendu au préposé la solution du simple fait causal admise pour les enfants." },
      { nom: "Dans les fonctions", question: "Le commettant prouve-t-il un abus de fonctions (hors des fonctions, sans autorisation, à des fins étrangères aux attributions) ?", detail: "Ass. plén., 19 mai 1988 : conditions cumulatives. Un rattachement au travail par le temps, le lieu ou les moyens exclut l'abus. Nuance : la victime qui savait ou devait savoir que le préposé n'agissait pas pour le commettant ne peut pas invoquer [[1242]], al. 5.", preuve: "Charge du commettant.", piege: "Conclure à l'abus au seul motif que le préposé a agi dans son intérêt personnel." }
    ],
    exonerations: [
      { nom: "Absence de faute du commettant", question: "Le commettant a-t-il bien choisi et surveillé son préposé ?", detail: "Inopérant : responsabilité de plein droit.", effet: "Aucun." },
      { nom: "Force majeure", question: "L'événement présentait-il les caractères de la force majeure à l'égard du préposé ?", detail: "Le fait du préposé n'est jamais une force majeure pour le commettant.", effet: "Exonération totale." },
      { nom: "Faute de la victime, fait d'un tiers", question: "La victime ou un tiers ont-ils contribué au dommage ?", detail: "Droit commun.", effet: "Totale ou partielle." }
    ],
    copie: [
      "Après avoir retenu la responsabilité du commettant, traiter l'action contre le préposé : immunité (Costedoat) ou exceptions (infraction pénale intentionnelle, faute intentionnelle).",
      "Recours : pas contre le préposé immunisé, mais possible contre son assureur (Civ. 1re, 12 juill. 2007)."
    ]
  },
  {
    id: "autrui-blieck",
    chapitre: "Fait d'autrui",
    titre: "Responsabilité générale du fait d'autrui (art. 1242, al. 1er, Blieck)",
    fondement: ["1242"],
    resume: "Engager la responsabilité de plein droit d'une personne qui organise et contrôle le mode de vie ou l'activité de l'auteur du dommage, en dehors des cas spéciaux du Code.",
    conditions: [
      { nom: "Aucun régime spécial applicable", question: "Les parents (al. 4) ou un commettant (al. 5) répondent-ils déjà ?", detail: "Les responsabilités du fait d'autrui sont alternatives ; le régime spécial prime." },
      { nom: "Un pouvoir d'organisation et de contrôle", question: "Le défendeur organise-t-il et contrôle-t-il à titre permanent le mode de vie de l'auteur (mineur placé, majeur handicapé), ou dirige-t-il son activité (club sportif) ?", detail: "Mode de vie : pouvoir permanent, d'origine judiciaire ou administrative ; subsiste même si l'enfant est chez ses parents (Civ. 2e, 6 juin 2002). Pas de source contractuelle (Civ. 1re, 15 déc. 2011) ; pas de gardien bénévole ou familial ; pas le tuteur d'un majeur (Civ. 2e, 25 févr. 1998).", piege: "Appliquer Blieck à des grands-parents qui gardent leur petit-fils : exclu." },
      { nom: "Un fait de l'auteur", question: "Quel fait doit être prouvé ?", detail: "Club sportif : faute caractérisée par une violation des règles du jeu, même par un joueur non identifié (Ass. plén., 29 juin 2007). Mode de vie : non tranché.", piege: "Exiger une faute intentionnelle du sportif : une faute simple contraire aux règles suffit." }
    ],
    exonerations: [
      { nom: "Absence de faute", question: "L'organisme prouve-t-il qu'il a bien surveillé ?", detail: "Inopérant (Crim., 26 mars 1997).", effet: "Aucun." },
      { nom: "Cause étrangère", question: "Force majeure, fait d'un tiers, faute de la victime ?", detail: "Droit commun.", effet: "Totale ou partielle." }
    ],
    copie: [
      "Présenter Blieck comme un décloisonnement de l'art. 1242, al. 1er, non comme un principe général absolu.",
      "À défaut de conditions réunies, basculer sur la faute prouvée de surveillance ([[1240]]) ou sur la responsabilité contractuelle si la victime est cocontractante."
    ]
  }
);

OBL.cas.push({
  id: "ch15-week-end-agite",
  titre: "Un pétard, un vélo-cargo et de fausses cartes",
  seance: "Chapitre 15",
  regimes: ["autrui-parents", "autrui-commettant"],
  faits: "Enzo, 15 ans, vit à Lyon chez sa mère depuis la séparation de ses parents en 2022 : ceux-ci exercent en commun l'autorité parentale et le juge aux affaires familiales a fixé la résidence habituelle de l'enfant chez sa mère. Le samedi 14 mars 2026, alors qu'il passe le week-end chez son père à Saint-Étienne, Enzo glisse un pétard allumé dans la boîte aux lettres de M. Roche : le hall prend feu ; les dégâts s'élèvent à 12 000 euros. Le père affirme qu'il n'a pas à payer puisque son fils ne vit pas chez lui ; la mère, qu'elle était à 60 kilomètres et n'a commis aucune faute. Le jeudi 2 avril 2026, Nadia, salariée de la boulangerie SARL Fournil du Forez, livre des commandes avec le vélo-cargo sans assistance électrique de l'entreprise ; pour gagner du temps, elle roule sur le trottoir et renverse Mme Blanc, qui se fracture le poignet. Aucune poursuite pénale n'est engagée. Mme Blanc assigne Nadia personnellement. Enfin, Kevin, vendeur dans la même boulangerie, a vendu au comptoir, pendant les heures d'ouverture, à plusieurs clients habituels des « cartes de fidélité premium » qu'il avait fabriquées lui-même et dont il gardait le prix, payé en espèces (1 800 euros au total). Il a été condamné en mai 2026 pour escroquerie, mais il est insolvable. La SARL refuse d'indemniser les clients en invoquant l'abus de fonctions.",
  question: "M. Roche peut-il obtenir réparation des deux parents d'Enzo ? L'action de Mme Blanc contre Nadia peut-elle prospérer ? Les clients trompés peuvent-ils obtenir réparation de la SARL ?",
  corrige: {
    qualification: "Un dommage causé par un mineur dont les parents séparés exercent conjointement l'autorité parentale, pendant un séjour chez le parent chez qui il ne réside pas habituellement. Un dommage causé par une salariée agissant dans le cadre de sa mission, sans infraction pénale retenue. Une escroquerie commise par un salarié sur le lieu et pendant le temps de travail, à l'égard de clients de l'employeur.",
    probleme: "Le parent chez qui l'enfant ne réside pas habituellement répond-il du fait de cet enfant, et l'autre parent peut-il s'exonérer en prouvant son absence de faute ? La victime peut-elle agir contre le préposé resté dans les limites de sa mission ? Le commettant peut-il invoquer l'abus de fonctions lorsque le préposé a agi à des fins personnelles mais sur le lieu, pendant le temps et avec les moyens de son travail ?",
    majeure: "Selon l'article 1242, alinéa 4, du Code civil, dans sa rédaction issue de la loi du 23 juin 2025, les parents, en tant qu'ils exercent l'autorité parentale, sont de plein droit solidairement responsables du dommage causé par leurs enfants mineurs, sauf lorsque ceux-ci ont été confiés à un tiers par une décision administrative ou judiciaire. Un fait causal du mineur suffit (Ass. plén., 13 déc. 2002) ; les parents ne s'exonèrent que par la force majeure ou la faute de la victime (Civ. 2e, 19 févr. 1997, Bertrand). Selon l'article 1242, alinéa 5, les commettants répondent du dommage causé par leurs préposés dans les fonctions auxquelles ils les ont employés ; ils ne s'exonèrent que si le préposé a agi hors des fonctions auxquelles il était employé, sans autorisation et à des fins étrangères à ses attributions (Ass. plén., 19 mai 1988). N'engage pas sa responsabilité à l'égard des tiers le préposé qui agit sans excéder les limites de la mission qui lui a été impartie par son commettant (Ass. plén., 25 févr. 2000, Costedoat) ; en revanche, le préposé condamné pénalement pour avoir intentionnellement commis une infraction ayant porté préjudice à un tiers engage sa responsabilité civile envers celui-ci (Ass. plén., 14 déc. 2001, Cousin).",
    mineure: [
      { condition: "Enzo : minorité et fait causal", corrige: "Enzo, 15 ans, est mineur et rien n'indique qu'il soit émancipé. En glissant un pétard allumé dans la boîte aux lettres, il a directement causé l'incendie : le fait causal, ici fautif, est établi. Les faits datent du 14 mars 2026 : le nouvel article 1242, alinéa 4, s'applique." },
      { condition: "Enzo : l'autorité parentale", corrige: "Les deux parents exercent en commun l'autorité parentale, qui survit à la séparation. La fixation de la résidence habituelle chez la mère est indifférente : la condition de cohabitation a disparu du texte (et, déjà, Ass. plén., 28 juin 2024). Aucune décision administrative ou judiciaire n'a confié Enzo à un tiers. Le père et la mère sont donc solidairement responsables." },
      { condition: "Enzo : les causes d'exonération", corrige: "L'argument de la mère, qui n'a commis aucune faute de surveillance, est inopérant : la responsabilité est de plein droit (Bertrand). Le geste d'Enzo n'a pas pour les parents les caractères de la force majeure et M. Roche n'a commis aucune faute. M. Roche peut réclamer les 12 000 euros à l'un ou l'autre parent, pour le tout ; il pourrait aussi agir contre Enzo lui-même sur le fondement de l'article 1240." },
      { condition: "Nadia : la responsabilité de la SARL", corrige: "Nadia est liée à la SARL par un contrat de travail : lien de préposition. En roulant sur le trottoir, elle a commis une faute d'imprudence, pendant sa tournée de livraison, donc dans ses fonctions ; aucun abus de fonctions. La SARL répond de plein droit du dommage (art. 1242, al. 5) ; elle est aussi gardienne du vélo-cargo, le préposé ne pouvant être gardien (art. 1242, al. 1er). Un vélo sans moteur n'est pas un véhicule terrestre à moteur : la loi du 5 juillet 1985 ne s'applique pas." },
      { condition: "Nadia : l'immunité", corrige: "Livrer les commandes était sa mission ; rouler trop vite ou sur le trottoir est une manière fautive de l'exécuter, non un dépassement de ses limites. Aucune infraction pénale n'a été retenue et la faute n'est pas intentionnelle. Nadia bénéficie de l'immunité Costedoat : l'action de Mme Blanc dirigée contre elle seule doit être rejetée. Mme Blanc doit assigner la SARL, dans les dix ans de la consolidation de son dommage corporel (art. 2226)." },
      { condition: "Kevin : l'abus de fonctions", corrige: "Kevin, salarié, est préposé de la SARL et a commis une faute. Il a agi à des fins personnelles, mais au comptoir, pendant les heures d'ouverture, en vendant des produits présentés comme ceux de la boulangerie : l'acte se rattache à ses fonctions par le lieu, le temps et les moyens. La première condition de l'abus de fonctions (agir hors des fonctions) fait défaut ; les conditions étant cumulatives, l'abus est exclu. Les clients, habitués servis au comptoir, pouvaient légitimement croire que Kevin agissait pour le compte de la boulangerie : ils sont de bonne foi. La SARL est responsable (art. 1242, al. 5)." },
      { condition: "Kevin : sa responsabilité personnelle", corrige: "Condamné pénalement pour une infraction intentionnelle ayant porté préjudice aux clients, Kevin a perdu le bénéfice de l'immunité (Cousin). Les clients peuvent agir contre lui et contre la SARL ; vu son insolvabilité, ils ont intérêt à agir contre la SARL, qui ne pourra se retourner utilement contre Kevin." }
    ],
    conclusion: "M. Roche obtiendra la réparation de son préjudice de l'un ou l'autre des parents d'Enzo, solidairement responsables de plein droit, sans que l'absence de cohabitation ou l'absence de faute puisse leur être utilement opposée. L'action de Mme Blanc contre Nadia échouera en raison de l'immunité du préposé : elle doit agir contre la SARL, commettant et gardienne du vélo-cargo. Les clients trompés obtiendront réparation de la SARL, qui ne peut invoquer l'abus de fonctions ; ils pourraient aussi agir contre Kevin, privé de son immunité par sa condamnation pour escroquerie, mais insolvable."
  }
});

OBL.articles.push(
  {"num": "1240", "code": "C. civ.", "theme": "Responsabilité pour faute", "texte": "Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", "chapitres": [15], "retenir": "Action possible contre l'auteur (enfant, préposé non immunisé) et, à défaut de régime du fait d'autrui, contre le surveillant fautif."},
  {"num": "1241", "code": "C. civ.", "theme": "Responsabilité pour faute", "texte": "Chacun est responsable du dommage qu'il a causé non seulement par son fait, mais encore par sa négligence ou par son imprudence.", "chapitres": [15], "retenir": "Négligence ou imprudence : faute de surveillance prouvée."},
  {"num": "1242", "code": "C. civ.", "theme": "Fait d'autrui", "texte": "On est responsable non seulement du dommage que l'on cause par son propre fait, mais encore de celui qui est causé par le fait des personnes dont on doit répondre, ou des choses que l'on a sous sa garde.\n\nToutefois, celui qui détient, à un titre quelconque, tout ou partie de l'immeuble ou des biens mobiliers dans lesquels un incendie a pris naissance ne sera responsable, vis-à-vis des tiers, des dommages causés par cet incendie que s'il est prouvé qu'il doit être attribué à sa faute ou à la faute des personnes dont il est responsable.\n\nCette disposition ne s'applique pas aux rapports entre propriétaires et locataires, qui demeurent régis par les articles 1733 et 1734 du code civil.\n\nLes parents, en tant qu'ils exercent l'autorité parentale, sont, de plein droit, solidairement responsables du dommage causé par leurs enfants mineurs, sauf lorsque que ceux-ci ont été confiés à un tiers par une décision administrative ou judiciaire.\n\nLes maîtres et les commettants, du dommage causé par leurs domestiques et préposés dans les fonctions auxquelles ils les ont employés ;\n\nLes instituteurs et les artisans, du dommage causé par leurs élèves et apprentis pendant le temps qu'ils sont sous leur surveillance.\n\nLa responsabilité ci-dessus a lieu, à moins que les parents et les artisans ne prouvent qu'ils n'ont pu empêcher le fait qui donne lieu à cette responsabilité.\n\nEn ce qui concerne les instituteurs, les fautes, imprudences ou négligences invoquées contre eux comme ayant causé le fait dommageable, devront être prouvées, conformément au droit commun, par le demandeur, à l'instance.", "chapitres": [15], "retenir": "Al. 1er : principe (Blieck) ; al. 4 : parents exerçant l'autorité parentale, de plein droit, sans cohabitation (loi du 23 juin 2025) ; al. 5 : commettants ; al. 6 à 8 : instituteurs (faute prouvée) et artisans."}
);
