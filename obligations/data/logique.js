/* Logique des « Conditions » de chaque régime : cumulatives, négatives, alternatives, ou simples étapes de méthode.
   Lu par reviser/app.js. Clé = id du régime. c[i] décrit la condition n° i+1 (k = nature, n = note courte).
   skip : la ligne n'est pas posée dans l'arbre de raisonnement ; question : remplace la question de l'arbre ;
   ifNo : si l'on répond « Non », conclusion partielle au lieu de « ce fondement ne peut pas prospérer ». */
(function () {
  var L = window.OBL_LOGIQUE = {};
  var c = function (k, n, o) { var x = { k: k }; if (n) x.n = n; if (o) for (var p in o) x[p] = o[p]; return x; };

  /* Légende : nature → libellé et sens. « cumul » = la ligne compte comme condition à réunir. */
  L.KINDS = {
    cond:   { t: "Cumulative", d: "à réunir avec toutes les autres", cumul: true },
    neg:    { t: "Cumulative, négative", d: "se vérifie par l'absence d'un fait ; elle reste à réunir", cumul: true },
    pre:    { t: "Cumulative, préalable", d: "qualification à vérifier d'abord ; elle reste à réunir", cumul: true },
    sous:   { t: "Cumulative selon le cas", d: "exigée seulement dans certaines hypothèses", cumul: true },
    alt:    { t: "Alternative", d: "plusieurs voies possibles : une seule suffit", cumul: true },
    niv2:   { t: "Niveau 2", d: "ne s'ajoute que pour obtenir la sanction renforcée", cumul: true },
    hyp:    { t: "Situation de départ", d: "fait du cas, pas une condition à remplir" },
    etape:  { t: "Étape de méthode", d: "à examiner, mais n'est pas une condition" },
    effet:  { t: "Effet", d: "conséquence une fois le régime applicable, pas une condition" },
    opp:    { t: "Opposabilité", d: "conditionne l'effet à l'égard d'un tiers, pas la validité" },
    forme:  { t: "Formalité selon la variante", d: "dépend de la variante retenue" },
    opt:    { t: "Variante", d: "voie différente, qui ne s'ajoute pas aux autres conditions" },
    indiff: { t: "Point indifférent", d: "précision : sans incidence sur le régime" },
    aide:   { t: "Aide à la preuve", d: "facilite la preuve, n'est pas une condition" },
    evt:    { t: "Événement éventuel", d: "à examiner seulement si les faits le révèlent" },
    limite: { t: "Limite", d: "borne l'effet, n'est pas une condition" }
  };
  L.DEFAUT = "Conditions cumulatives : elles doivent toutes être réunies. Si une seule fait défaut, le régime ne s'applique pas.";

  L.pourparlers = { regle: "Quatre conditions cumulatives. La 1re est un préalable (sans pourparlers, il n'y a rien à rompre) ; les 2e, 3e et 4e sont la faute, le préjudice et le lien de causalité, soit les trois conditions de la responsabilité délictuelle (art. 1240 et 1112).", c: [c("pre"), c("cond"), c("cond"), c("cond")] };

  L["pacte-preference"] = { regle: "Deux niveaux. Avec les conditions 1 et 2, le bénéficiaire obtient des dommages et intérêts (art. 1123, al. 2, 1re phrase). Les conditions 3 et 4 sont cumulatives entre elles (connaissance du pacte ET de l'intention du bénéficiaire) : elles s'ajoutent aux deux premières pour ouvrir en plus la nullité ou la substitution (art. 1123, al. 2, 2e phrase).",
    c: [c("cond", "Niveau 1 : dommages et intérêts"), c("cond", "Niveau 1 : dommages et intérêts"), c("niv2", "Avec la condition 4", { ifNo: { text: "Les dommages et intérêts restent possibles, mais ni la nullité ni la substitution (art. 1123, al. 2)." } }), c("niv2", "Avec la condition 3", { ifNo: { text: "Les dommages et intérêts restent possibles, mais ni la nullité ni la substitution (art. 1123, al. 2)." } })] };

  L["promesse-unilaterale"] = { regle: "Les conditions 1 et 2 sont cumulatives : promesse valable et option levée dans le délai, le contrat promis est formé. La 3e n'est pas à remplir : c'est l'hypothèse du cas (le promettant se rétracte), et elle n'empêche pas la formation du contrat (art. 1124, al. 2).", c: [c("cond"), c("cond"), c("hyp", "Elle ne change pas le résultat", { skip: true })] };

  L.erreur = { regle: "Trois conditions cumulatives (art. 1130 à 1134). La 3e est négative : l'erreur ne doit pas être inexcusable (art. 1132).", c: [c("cond"), c("cond"), c("neg", "L'erreur ne doit pas être inexcusable")] };

  L.dol = { c: [c("cond"), c("cond"), c("cond"), c("cond")] };

  L["violence-dependance"] = { regle: "Trois conditions cumulatives. La 1re peut être remplie de deux façons alternatives : la violence (art. 1140) OU l'abus de dépendance (art. 1143).", c: [c("cond", "Deux voies alternatives : 1140 ou 1143"), c("cond"), c("cond")] };

  L["clause-obligation-essentielle"] = { c: [c("cond"), c("cond")] };

  L["action-nullite"] = { regle: "Les conditions 1, 3 et 4 sont cumulatives. La 2e n'est pas une condition : c'est une étape de qualification (nullité relative ou absolue) dont dépendent notamment la qualité pour agir (3) et la possibilité de confirmer (art. 1179 et 1180).", c: [c("cond"), c("etape", "Détermine la condition 3", { skip: true }), c("cond"), c("cond", "Écartée par voie d'exception si le contrat n'a pas été exécuté (art. 1185)")] };

  L.imprevision = { regle: "Quatre conditions cumulatives. La 1re est un préalable (champ d'application dans le temps) ; la 4e est négative : le risque ne doit pas avoir été accepté. Si l'exécution est impossible, ce n'est plus l'imprévision mais la force majeure (art. 1218).", c: [c("pre"), c("cond"), c("cond"), c("neg", "Le risque ne doit pas avoir été accepté")] };

  L["tiers-victime"] = { c: [c("neg", "Le tiers ne doit pas disposer d'une action contractuelle"), c("cond"), c("cond")] };

  L["force-majeure-contrat"] = { regle: "Les conditions 1, 2 et 3 sont cumulatives (art. 1218, al. 1er). La 4e n'est pas une condition : c'est l'effet, qui dépend de la nature de l'empêchement (suspension s'il est temporaire, résolution de plein droit s'il est définitif).", c: [c("cond"), c("cond"), c("cond"), c("effet", "Suspension ou résolution (art. 1218, al. 2)", { skip: true })] };

  L["exception-inexecution"] = { regle: "Les conditions 1, 2 et 3 sont cumulatives. La 2e a deux variantes alternatives : inexécution déjà constatée (art. 1219) OU risque manifeste d'inexécution future (art. 1220). La gravité (3) est exigée dans les deux cas : « suffisamment grave » (art. 1219), conséquences « suffisamment graves pour elle » (art. 1220). La 4e n'est pas une condition de fond : la forme dépend de la variante (aucune formalité pour l'art. 1219, notification pour l'art. 1220).", c: [c("cond"), c("alt", "1219 OU 1220"), c("cond"), c("forme", "Notification seulement pour l'art. 1220", { skip: true })] };

  L["execution-forcee-nature"] = { regle: "Les conditions 1, 2 et 3 sont cumulatives (art. 1221). La 4e est une variante : au lieu de poursuivre le débiteur, le créancier fait exécuter par un tiers (art. 1222). Même si ces conditions sont réunies, l'exécution forcée est refusée lorsqu'elle est impossible ou manifestement disproportionnée (art. 1221).", c: [c("cond"), c("cond"), c("cond"), c("opt", "Art. 1222", { skip: true })] };

  L["resolution-clause"] = { regle: "Quatre conditions cumulatives. La 4e est négative : le juge peut écarter la clause si le créancier est de mauvaise foi (art. 1104). La mise en demeure (3) n'est pas exigée si la clause prévoit que la résolution résulte du seul fait de l'inexécution (art. 1225, al. 2).", c: [c("cond"), c("cond"), c("cond", "Sauf clause contraire (art. 1225, al. 2)"), c("neg", "Pas de mauvaise foi du créancier")] };

  L["resolution-notification"] = { c: [c("cond"), c("cond", "Dispense : urgence (art. 1226) ; mise en demeure vaine : jurisprudence"), c("cond"), c("cond")] };

  L["responsabilite-contractuelle"] = { regle: "Cinq conditions cumulatives, avec deux aménagements : la mise en demeure (3) n'est pas exigée en cas d'inexécution définitive (art. 1231) ; la prévisibilité (4) ne limite que l'étendue de la réparation, sauf faute lourde ou dolosive (art. 1231-3).",
    c: [c("pre"), c("cond"), c("cond", "Sauf inexécution définitive", { question: "Le débiteur a-t-il été mis en demeure (ou l'inexécution est-elle définitive) ?" }), c("cond", "La prévisibilité limite le montant, sauf faute lourde ou dolosive"), c("cond")] };

  L["nature-responsabilite"] = { regle: "Cette grille sert à qualifier la responsabilité ; ce ne sont pas les conditions d'une responsabilité. Elle est contractuelle seulement si les conditions 2, 3 et 4 sont toutes réunies ; si l'une manque, elle est délictuelle (art. 1240). La 1re s'examine d'abord : si un régime spécial indifférent au contrat s'applique (loi Badinter, produits défectueux), c'est lui qui joue.",
    c: [c("pre", "À écarter d'abord", { question: "Aucun régime légal indifférent au contrat (circulation, produits défectueux, accident médical) ne s'applique-t-il au dommage ?", ifNo: { text: "Un régime spécial indifférent au contrat s'applique : il prime sur la distinction contractuelle / délictuelle." } }),
      c("cond", "Pour qu'elle soit contractuelle", { ifNo: { text: "La responsabilité n'est pas contractuelle : raisonner sur l'art. 1240." } }),
      c("cond", "Pour qu'elle soit contractuelle", { ifNo: { text: "La responsabilité n'est pas contractuelle : raisonner sur l'art. 1240." } }),
      c("cond", "Pour qu'elle soit contractuelle", { ifNo: { text: "La responsabilité n'est pas contractuelle : raisonner sur l'art. 1240." } })] };

  L["faute-1240"] = { regle: "Trois conditions cumulatives : la faute (1 et 2), le dommage et le lien de causalité (4). La 3e n'est pas une condition : elle précise que l'absence de discernement n'écarte pas la responsabilité (art. 414-3 ; Ass. plén., 9 mai 1984).", c: [c("cond"), c("cond"), c("indiff", "Ne joue ni pour ni contre", { skip: true }), c("cond")] };

  L["faute-sportive"] = { regle: "Les conditions 2 et 3 sont cumulatives. La 1re n'en est pas une : c'est un point de méthode, le choix du fondement (faute du joueur, art. 1240, ou fait d'une chose, art. 1242, al. 1er).", c: [c("etape", "Choix du fondement", { skip: true }), c("cond"), c("cond")] };

  L["choses-1242-al1"] = { c: [c("neg", "Aucun régime spécial ne doit s'appliquer"), c("cond"), c("cond"), c("cond")] };
  L["choses-animaux"] = { c: [c("cond"), c("cond"), c("cond")] };
  L["choses-ruine"] = { c: [c("cond"), c("cond"), c("cond", "Défaut d'entretien OU vice de construction"), c("cond")] };

  L["autrui-parents"] = { regle: "Quatre conditions cumulatives. La 4e est négative : si une décision administrative ou judiciaire a confié l'enfant à un tiers, les parents ne répondent pas (art. 1242, al. 4).", c: [c("cond"), c("cond"), c("cond"), c("neg", "Aucune décision administrative ou judiciaire ne doit avoir confié l'enfant à un tiers")] };

  L["autrui-commettant"] = { regle: "Trois conditions cumulatives. Dans la 3e, c'est l'abus de fonctions qui exonère le commettant, et il suppose trois éléments cumulatifs : agir hors des fonctions, sans autorisation, à des fins étrangères aux attributions (Ass. plén., 19 mai 1988).", c: [c("cond"), c("cond"), c("cond", "Absence d'abus de fonctions", { question: "Le préposé a-t-il agi dans ses fonctions (aucun abus de fonctions) ?" })] };

  L["autrui-blieck"] = { c: [c("neg", "Aucun régime spécial ne doit s'appliquer"), c("cond"), c("cond")] };
  L["badinter-indemnisation"] = { c: [c("cond"), c("cond"), c("cond"), c("cond"), c("cond")] };
  L["produits-defectueux"] = { c: [c("cond"), c("cond"), c("cond"), c("cond"), c("cond"), c("cond")] };
  L["troubles-voisinage"] = { c: [c("cond"), c("cond"), c("cond"), c("cond")] };

  L["prejudice-reparable"] = { regle: "Quatre caractères cumulatifs : le préjudice doit être personnel, certain, direct et légitime. La 5e n'est pas un caractère : une fois le préjudice reconnu réparable, on le range dans un poste et on l'évalue.", c: [c("cond"), c("cond"), c("cond"), c("cond"), c("etape", "Évaluation", { skip: true })] };

  L["causalite-exoneration"] = { regle: "Les conditions 1 et 2 sont cumulatives (lien certain et direct). La 3e est une aide à la preuve : quand une présomption de causalité existe, elle dispense la victime de prouver le lien.", c: [c("cond"), c("cond"), c("aide", "Quand elle existe", { skip: true })] };

  L["prejudice-ecologique"] = { c: [c("cond"), c("cond"), c("cond"), c("cond")] };

  L["gestion-affaires"] = { regle: "Conditions cumulatives, dont deux négatives : pas d'opposition du maître (1) et pas d'obligation préexistante, « sans y être tenu » (3) (art. 1301). L'utilité (5) est requise pour que le maître soit tenu envers le gérant (art. 1301-2) ; l'art. 1301 définit la gestion comme accomplie « sciemment et utilement ». Si ces conditions ne sont pas réunies mais que le maître en a profité, l'art. 1301-5 renvoie à l'enrichissement injustifié.", c: [c("neg", "Pas d'opposition du maître"), c("cond"), c("neg", "Aucune obligation préexistante d'agir"), c("cond"), c("cond", "Condition des obligations du maître (art. 1301-2)")] };

  L["indu-restitution"] = { regle: "Les conditions 1 et 2 sont cumulatives. L'absence de dette (2) prend trois formes alternatives : indu objectif, subjectif actif, subjectif passif. La 3e n'est exigée que pour l'indu subjectif passif, c'est-à-dire pour la dette d'autrui (art. 1302-2) ; dans les deux autres formes, aucune preuve d'erreur n'est exigée (art. 1302-1 ; Ass. plén., 2 avr. 1993).", c: [c("cond"), c("alt", "Trois formes d'indu"), c("sous", "Seulement pour la dette d'autrui (indu subjectif passif)", { question: "Si le solvens a payé la dette d'autrui : l'a-t-il fait par erreur ou sous la contrainte ? (Répondre Oui s'il ne s'agit pas de la dette d'autrui.)" })] };

  L["enrichissement-injustifie"] = { regle: "Quatre conditions cumulatives, dont deux négatives : l'absence de justification (3) et l'absence de toute autre action ouverte au demandeur (4, art. 1303-3). L'art. 1303 réserve aussi la gestion d'affaires et l'indu ; l'art. 1303-2, al. 1 exclut l'appauvri qui a agi en vue de son profit personnel.", c: [c("cond"), c("cond"), c("neg", "Aucune justification"), c("neg", "Aucune autre action ouverte (art. 1303-3)")] };

  L["condition-suspensive"] = { arbre: false, regle: "Ce ne sont pas des conditions cumulatives mais une grille d'analyse en quatre temps : qualifier la condition (1), vérifier sa validité (2), examiner le comportement des parties pendant l'attente (3), puis appliquer l'effet selon que la condition s'accomplit ou défaille (4).", c: [c("etape"), c("etape"), c("etape"), c("effet", "Accomplie ou défaillie")] };

  L["terme-decheance"] = { arbre: false, regle: "Pas de conditions cumulatives. Le créancier peut exiger le paiement dans deux cas alternatifs : l'échéance du terme (2) OU une cause de déchéance (3). La 1re est un préalable (qualifier le terme) et la 4e borne l'effet de la déchéance, inopposable aux coobligés et aux cautions (art. 1305-5).", c: [c("etape", "Qualifier le terme"), c("alt", "2 OU 3"), c("alt", "2 OU 3"), c("limite", "Inopposable aux coobligés et cautions")] };

  L["solidarite-passive"] = { arbre: false, regle: "Une seule condition : la source de la solidarité (1), qui ne se présume pas (art. 1310). Les points 2, 3 et 4 en sont les effets : obligation au tout, exceptions opposables, contribution entre codébiteurs.", c: [c("cond"), c("effet"), c("effet"), c("effet")] };

  L["cession-creance"] = { arbre: false, regle: "Trois niveaux. Validité : les conditions 1 et 2 sont cumulatives (écrit à peine de nullité, art. 1322). Opposabilité au débiteur (3) : formalité distincte ; sans elle la cession est valable mais n'est pas opposable au débiteur (art. 1324) : le paiement fait au cédant le libère. Effet (4) : le cessionnaire acquiert la créance pour sa valeur nominale.", c: [c("cond", "Validité"), c("cond", "Validité"), c("opp", "Au débiteur"), c("effet")] };

  L["cession-contrat"] = { arbre: false, regle: "Validité : les conditions 1 et 2 sont cumulatives (écrit à peine de nullité, art. 1216, al. 3). L'accord du cédé (3) conditionne l'opposabilité au cédé : à défaut, la cession est inopposable, non nulle (Com., 24 avr. 2024). La 4e est un effet à deux issues : cédant libéré ou, sinon, tenu solidairement (art. 1216-1).", c: [c("cond", "Validité"), c("cond", "Validité"), c("opp", "Au cédé"), c("effet", "Cédant libéré seulement si le cédé y a expressément consenti (art. 1216-1)")] };

  L["subrogation-personnelle"] = { arbre: false, regle: "Pour qu'il y ait subrogation : 1 (paiement) et 2 (source légale OU conventionnelle, alternatives). L'opposabilité au débiteur (3) est distincte (art. 1346-5) ; le montant du recours (4) est un effet.", c: [c("cond"), c("alt", "Légale OU conventionnelle"), c("opp", "Au débiteur"), c("effet")] };

  L.delegation = { arbre: false, regle: "Une seule condition de qualification (1) : sans engagement du délégué envers le délégataire, il n'y a qu'une indication de paiement (art. 1340). Les points 2 à 4 précisent la nature de la délégation (parfaite ou imparfaite) et ses effets.", c: [c("cond"), c("alt", "Parfaite OU imparfaite"), c("effet"), c("effet")] };

  L["compensation-legale"] = { regle: "Cinq conditions cumulatives : réciprocité (art. 1347), puis dettes fongibles, certaines, liquides et exigibles (art. 1347-1), et invocation par une partie (art. 1347, al. 2). Des assouplissements existent hors compensation légale : compensation judiciaire (art. 1348) et dettes connexes (art. 1348-1) ; compensation conventionnelle (art. 1348-2).", c: [c("cond"), c("cond"), c("cond"), c("cond", "Liquidité non exigée pour les dettes connexes (art. 1348-1)"), c("cond", "Condition de mise en œuvre")] };

  L["prescription-extinctive"] = { arbre: false, regle: "Ce n'est pas un régime à conditions cumulatives mais une méthode de calcul, à suivre dans l'ordre : délai (1), point de départ (2), puis, seulement si les faits les révèlent, suspension (3) et interruption (4), enfin plafond (5). L'action est prescrite si le délai ainsi calculé est expiré.", c: [c("etape"), c("etape"), c("evt", "Le délai est arrêté, puis reprend"), c("evt", "Un nouveau délai court"), c("limite", "Délai butoir")] };
})();
