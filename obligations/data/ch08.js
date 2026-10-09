/* Chapitre 8 — Les effets du contrat entre les parties
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 8,
  intro: "Un contrat valablement formé **oblige** les parties : « Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits » ([[1103]]). Pour appliquer cette force obligatoire, il faut d'abord **interpréter** le contrat, puis l'**exécuter de bonne foi** ; il ne peut être **modifié ou révoqué** que d'un commun accord ou dans les cas prévus par la loi, notamment l'**imprévision** ([[1195]]). Enfin, le contrat peut **transférer la propriété** ([[1196]]).",
  sections: [
    {
      titre: "L'interprétation du contrat",
      contenu: [
        { p: "Interpréter relève du **pouvoir souverain des juges du fond** ; la Cour de cassation ne contrôle que la **dénaturation** d'une clause claire et précise (Civ., 15 avr. 1872, Veuve Foucauld : le juge ne peut, sous prétexte d'interpréter, modifier une clause claire). Solution codifiée : [[1192]]." },
        { liste: [
          "**Principe** : pouvoir souverain des juges du fond (Cass., sect. réun., 2 févr. 1808) ; aucun pourvoi pour « fausse interprétation », car l'opération repose sur des circonstances de fait.",
          "**Dénaturation** d'une clause claire et précise ([[1192]]). La notion, longtemps restrictive à la chambre commerciale (simple reproduction erronée), a été alignée sur les autres chambres (Com., 31 janv. 1995) : elle vise l'interprétation d'une clause claire et, par extension, l'erreur flagrante d'interprétation.",
          "**Qualification** du contrat : question de droit contrôlée (Com., 30 mai 1969, cassation d'une décision qualifiant de bail une vente).",
          "**Clauses types** : contrôle direct de certaines clauses reproduites en grand nombre (conventions collectives, Ass. plén., 6 févr. 1976 ; certains contrats d'assurance, Civ. 1re, 16 mai 1995), sans principe général."
        ] },
        { schema: { type: "etapes", titre: "La méthode des articles 1188 à 1192", etapes: [
          { t: "Clause claire ?", d: "on l'applique, sans l'interpréter ([[1192]])" },
          { t: "Commune intention", d: "plutôt que le sens littéral ([[1188]], al. 1er) : méthode subjective" },
          { t: "Personne raisonnable", d: "à défaut d'intention décelable ([[1188]], al. 2) : méthode objective" },
          { t: "Cohérence et effet utile", d: "clauses les unes par les autres ; opération d'ensemble ([[1189]]) ; sens qui donne un effet ([[1191]])" },
          { t: "Dans le doute", d: "gré à gré : contre le créancier ; adhésion : contre celui qui l'a proposé ([[1190]])" }
        ] } },
        { p: "Précisions : [[1188]], al. 1er, reprend l'ancien art. 1156 ; l'al. 2 (personne raisonnable), d'inspiration européenne, introduit une **hiérarchie** (volonté d'abord, norme objective à défaut). [[1189]], al. 2 : les contrats qui concourent, dans l'intention commune, à une même opération s'interprètent en fonction d'elle. [[1190]] prolonge C. consom., art. L. 211-1, al. 2 (doute en faveur du consommateur). Les anciens art. 1158 à 1160, 1163 et 1164 n'ont pas été repris mais restent applicables aux contrats conclus avant le 1er octobre 2016." },
        { h: "L'interprétation créatrice : le « forçage » du contrat" },
        { p: "Les contrats obligent aussi à « toutes les suites que leur donnent l'équité, l'usage ou la loi » ([[1194]]). Sur ce fondement, le juge a **ajouté** des obligations que les parties n'avaient pas prévues." },
        { arret: { ref: "Civ., 21 nov. 1911 (Compagnie générale transatlantique)", apport: "Le transporteur de personnes est tenu d'une **obligation de sécurité** : conduire le voyageur sain et sauf à destination. Point de départ du forçage du contrat (expression de Josserand), étendu ensuite à de nombreux contrats (obligation d'information, de conseil, de sécurité)." } },
        { liste: [
          "**Fondements** : la bonne foi ([[1104]]) et surtout [[1194]] (ancien art. 1135) : le juge ajoute ce que l'équité, l'usage ou la loi attachent à l'obligation d'après sa nature ; l'arrêt de 1911 est rendu au visa de l'ancien art. 1134. Les usages professionnels peuvent s'imposer à des tiers à la profession qui les ont connus et acceptés (Com., 4 oct. 2023, n° 22-15.685).",
          "**Obligation de sécurité** : tout contrat de transport, pendant toute la durée de son exécution (Civ. 1re, 7 mars 1989), étendue aux moyens les plus divers (télésiège, remonte-pente, toboggan aquatique), professionnels dont la clientèle est blessée dans leurs locaux, assistance bénévole. Son extension à la vente (Civ. 1re, 11 juin 1991) a été abandonnée avec le régime des produits défectueux. Contrat de travail : amiante (Soc., 28 févr. 2002 ; Ass. plén., 24 juin 2005 : obligation de résultat, manquement constitutif d'une faute inexcusable), puis régime hybride de présomption simple de faute (Soc., 25 nov. 2015 ; Ass. plén., 5 avr. 2019, n° 18-17.442), préjudice d'anxiété (Soc., 11 sept. 2019) et rattachement à une obligation **légale** (Civ. 2e, 8 oct. 2020).",
          "**Obligation contractuelle d'information et de conseil** (à distinguer de l'obligation précontractuelle) : due par les professions dont le statut impose le conseil (médecin, avocat, notaire, banquier...) et dans les contrats translatifs ; le vendeur professionnel doit se renseigner sur les besoins de l'acheteur (Civ. 1re, 11 mai 2022, n° 20-22.210).",
          "Critique : ces obligations ne sont pas voulues par les parties, le rattachement au contrat est artificiel ; les projets de réforme de la responsabilité envisagent de sortir le dommage corporel du terrain contractuel."
        ] },
        { attention: "Le forçage connaît un reflux : la jurisprudence préfère parfois, pour les dommages corporels, la responsabilité extracontractuelle. Et l'obligation de sécurité de l'employeur n'est plus une obligation de résultat : l'employeur s'exonère en prouvant qu'il a pris toutes les mesures de prévention nécessaires (Soc., 25 nov. 2015, n° 14-24.444, Air France)." }
      ]
    },
    {
      titre: "L'exécution de bonne foi",
      contenu: [
        { p: "La bonne foi s'impose à l'exécution ([[1104]], d'ordre public). Elle impose deux devoirs : **loyauté** (ne pas nuire à l'autre, ne pas abuser d'une prérogative contractuelle) et **coopération** (faciliter l'exécution, informer)." },
        { arret: { ref: "Com., 3 nov. 1992 (arrêt Huard)", apport: "Le fournisseur qui, profitant de l'évolution des circonstances économiques, refuse de renégocier et prive son distributeur lié par une clause d'exclusivité des moyens de pratiquer des prix concurrentiels manque à la bonne foi : illustration du devoir de coopération, sanctionné par des dommages et intérêts et non par une révision judiciaire (solution prolongée par Com., 24 nov. 1998 ; contra Civ. 1re, 16 mars 2004)." } },
        { arret: { ref: "Com., 10 juill. 2007 (arrêt Les Maréchaux)", apport: "Si la règle de bonne foi permet au juge de sanctionner l'usage **déloyal** d'une prérogative contractuelle, elle ne l'autorise pas à porter atteinte à la **substance même des droits et obligations** légalement convenus. La bonne foi sanctionne la manière d'exercer un droit, pas le droit lui-même." } },
        { liste: [
          "**Loyauté** : ne pas nuire à l'autre ni rendre plus difficile son exécution (le chauffeur de taxi qui prend toujours le trajet le plus long) ; la jurisprudence ne sanctionne que les abus les plus graves (Civ. 1re, 30 juin 2004). **Cohérence** : changer brutalement d'attitude peut être sanctionné (Civ. 3e, 28 janv. 2009).",
          "**Coopération** : obligations positives (renégocier, faciliter l'exécution) restées marginales ; pas d'obligation d'assistance à la reconversion (Com., 6 mai 2002). La doctrine solidariste (Demogue, Mazeaud) va plus loin que la Cour de cassation, qui s'en tient à un « égoïsme tempéré ».",
          "**Place dans le Code** : [[1104]], d'ordre public, figure parmi les dispositions liminaires et vaut à tous les stades du contrat (négociation, formation, exécution) ; l'ordonnance n'en fait ni un principe directeur ni une règle supérieure aux autres.",
          "**Prolongements de l'arrêt Les Maréchaux** : le juge ne peut modifier les modalités de paiement (Com., 19 juin 2019, n° 17-29.000) ; la seule mauvaise foi du vendeur n'est pas un motif de résolution ou d'annulation de la vente (Civ. 1re, 1er juill. 2020)."
        ] },
        { attention: "La mauvaise foi prive d'effet l'exercice d'une clause (ex. invoquer une clause résolutoire de mauvaise foi) ; elle ne permet pas de réécrire le contrat. Distinction très attendue en commentaire." }
      ]
    },
    {
      titre: "La modification du contrat",
      contenu: [
        { p: "Principe : les contrats ne peuvent être modifiés ou révoqués que **du consentement mutuel** des parties, ou pour les causes que la **loi** autorise ([[1193]]). Le législateur peut modifier la norme contractuelle, mais la loi nouvelle ne s'applique en principe pas aux contrats en cours (d'où le seuil du 1er octobre 2016). Le juge ne peut pas non plus, sous prétexte d'équité, modifier des clauses précises (Com., 10 juill. 2007)." },
        { h: "L'imprévision" },
        { p: "L'imprévision est un déséquilibre **survenu en cours d'exécution** ; la lésion suppose un déséquilibre dès la formation. Avant 2016, la révision était refusée, avec des correctifs indirects : sanction du refus de renégocier au titre de la bonne foi (Huard, 1992) et Com., 29 juin 2010 (référé, au visa de l'ancien art. 1131 : le déséquilibre privant l'engagement de contrepartie réelle rend l'obligation sérieusement contestable)." },
        { schema: { type: "frise", titre: "De Craponne à l'article 1195", evenements: [
          { date: "6 mars 1876", t: "Civ., Canal de Craponne", d: "Refus de toute révision judiciaire pour imprévision, même si le prix fixé en 1560 est devenu dérisoire : le juge ne peut modifier le contrat, quelque équitable que cela lui paraisse." },
          { date: "1916", t: "CE, Gaz de Bordeaux", d: "Le juge administratif admet l'imprévision dans les contrats administratifs : le droit civil reste fermé." },
          { date: "1er oct. 2016", t: "[[1195]]", d: "Consécration de la révision pour imprévision en droit civil, pour les contrats conclus depuis cette date." }
        ] } },
        { schema: { type: "etapes", titre: "Le mécanisme de l'article 1195", etapes: [
          { t: "Conditions", d: "changement de circonstances **imprévisible** à la conclusion + exécution **excessivement onéreuse** + risque **non accepté** par la partie qui s'en plaint" },
          { t: "Renégociation", d: "demandée au cocontractant ; on **continue d'exécuter** pendant ce temps" },
          { t: "Échec ou refus", d: "résolution convenue, ou adaptation demandée d'un commun accord au juge" },
          { t: "À défaut d'accord dans un délai raisonnable", d: "le juge, saisi par **une** partie, peut **réviser** le contrat ou **y mettre fin**" }
        ] } },
        { attention: "[[1195]] n'est pas d'ordre public : les parties peuvent l'écarter ou aménager le risque (clause de hardship, d'indexation). Il ne s'applique pas aux contrats conclus avant le 1er octobre 2016 ; il est écarté pour certaines opérations sur titres et contrats financiers (C. mon. fin., art. L. 211-40-1)." },
        { liste: [
          "Le changement de circonstances n'a pas à être économique (épidémie, guerre) ; l'**imprévisibilité** s'apprécie *in abstracto* ; l'« excessive onérosité » n'est pas définie. La troisième condition (risque non accepté) rend le texte **supplétif** : la clause d'acceptation du risque est presque de style dans les contrats d'affaires, mais sa rédaction peut se heurter à [[1170]] (obligation essentielle) ou [[1171]] (déséquilibre significatif). Le débat est vif entre impérativité raisonnée (Libchaber) et liberté d'exclure (Genicon).",
          "Le texte a été maintenu en 2018 malgré l'opposition du Sénat ; le mécanisme est **préventif** (menace de révision ou de fin du contrat pour inciter à négocier). La révision judiciaire porte sur le prix pour l'avenir ou les conditions d'exécution ; ses critères restent flous et les cas sont très rares."
        ] },
        { h: "Les aménagements contractuels" },
        { liste: [
          "**Clause de révision (hardship)** : oblige à **renégocier de bonne foi**, non à conclure ; sans accord, le contrat est maintenu en l'état, la mauvaise foi dans la négociation engageant la responsabilité (Com., 3 oct. 2006). Validité fondée sur la liberté contractuelle.",
          "**Clause d'indexation (échelle mobile)** : fait varier le prix **automatiquement** selon un indice. Validité reconnue pour les dettes de somme d'argent ([[1343]], al. 2) ; encadrée par C. mon. fin., art. L. 112-1 s. : indice en lien direct avec l'objet du contrat ou l'activité des parties, pas d'indexation sur le niveau général des prix ou des salaires (art. L. 112-2), le lien avec la cause étant admis (Civ. 1re, 9 janv. 1974) ; exceptions : dettes d'aliments, certains livrets. Elle doit jouer **à la hausse comme à la baisse** (Civ. 3e, 30 juin 2021, n° 19-23.038 ; Civ. 3e, 19 juin 2025, n° 23-18.853).",
          "Indexation illicite : nullité absolue (ordre public monétaire de direction), mais le juge peut limiter la nullité à la clause et substituer un indice (Com., 7 janv. 1975), solution que [[1167]] (indice disparu) conforte par extension."
        ] },
        { h: "La fin unilatérale du contrat" },
        { schema: { type: "tableau", titre: "Peut-on sortir seul du contrat ?", colonnes: ["Contrat", "Règle", "Texte"], lignes: [
          ["Engagement perpétuel", "Prohibé : chacun peut y mettre fin comme pour un contrat à durée indéterminée", "[[1210]]"],
          ["À durée indéterminée", "Résiliation à tout moment, en respectant le préavis prévu ou, à défaut, un **délai raisonnable**", "[[1211]]"],
          ["À durée déterminée", "Exécution **jusqu'au terme** ; pas de résiliation unilatérale, sauf clause ou texte", "[[1212]]"],
          ["Tout contrat", "Révocation par accord des parties (*mutuus dissensus*)", "[[1193]]"]
        ] } },
        { h: "Mutuus dissensus et résiliation" },
        { p: "Le **mutuus dissensus** est l'accord de volonté qui met fin au contrat. Il suppose les conditions de validité des contrats ([[1128]] s.) ; la volonté tacite est admise si elle est non équivoque (Civ. 1re, 22 nov. 1960) ; pas de parallélisme des formes, sauf pour les contrats solennels notariés. En théorie, preuve écrite au-delà de 1 500 euros ([[1359]]), mais la jurisprudence admettait la liberté de preuve (Civ. 1re, 18 mai 1994). Effets : aucune indemnité (Com., 1er févr. 1994) ; il produit, selon la jurisprudence, les effets d'une **condition résolutoire**, donc rétroactifs, sauf volonté contraire des parties de ne mettre fin au contrat que pour l'avenir." },
        { p: "**Résiliation unilatérale** : autorisée par la loi pour certains contrats (travail, C. trav., art. L. 1231-1 ; bail, art. 1736 ; assurance, C. assur., art. L. 113-12 ; mandat, art. 2004 et 2007) ou par une clause de dédit. Aucun principe général pour les contrats *intuitu personae* : seulement les textes. Dans le contrat à durée indéterminée, elle s'impose à l'autre partie même si le contrat énumère limitativement les causes de rupture (Com., 31 mai 1994), sans obligation de motiver, mais l'**abus** (rupture brutale après avoir laissé espérer la pérennité et suscité des dépenses : Com., 28 févr. 1995 ; 20 janv. 1998) engage la responsabilité de droit commun, l'abus n'étant pas repris par [[1211]] mais maintenu selon le rapport (Com., 8 févr. 2017). La faculté de résilier unilatéralement tout contrat à durée indéterminée, fondée sur la prohibition des engagements perpétuels, a valeur constitutionnelle (Cons. const., 9 nov. 1999) ; un pacte d'associés pour la durée de la société n'en est pas un (Civ. 1re, 25 janv. 2023, n° 19-25.478)." }
      ]
    },
    {
      titre: "L'effet translatif",
      contenu: [
        { p: "Dans les contrats qui ont pour objet l'aliénation de la propriété, le **transfert s'opère lors de la conclusion du contrat**, par le seul échange des consentements, sauf report voulu par les parties, imposé par la nature des choses (chose de genre : transfert à l'individualisation) ou par la loi ([[1196]]). Le vendeur doit conserver la chose jusqu'à la délivrance avec les soins d'une personne raisonnable ([[1197]])." },
        { p: "Avant 2016, l'effet translatif se rattachait à l'obligation de donner (ancien art. 1138) ; il est aujourd'hui un effet **direct** du contrat, dit « non obligationnel », immédiat et automatique. Exceptions : **volonté des parties** (réserve de propriété, art. 2367 : suspend l'effet translatif jusqu'au complet paiement, non la vente elle-même, Com., 17 oct. 2018) ; **nature des choses** (chose future, chose de genre non individualisée, art. 1585) ; **loi** (vente à terme d'un immeuble à construire, art. 1601-2)." },
        { h: "Les risques" },
        { p: "*Res perit domino* : le transfert de propriété emporte transfert des **risques** ([[1196]], al. 3). Mais le débiteur de l'obligation de délivrer **mis en demeure** reprend les risques ([[1344-2]]), sauf s'il prouve que la perte serait survenue de la même manière si l'obligation avait été exécutée ([[1351-1]], al. 1er). Hors contrat translatif, la règle est *res perit debitori* : le débiteur de l'obligation devenue impossible en supporte le risque, le créancier est libéré. Le jeu combiné du transfert immédiat et de *res perit domino* est sévère pour l'acheteur, d'où les clauses de réserve de propriété." },
        { h: "Les conflits entre acquéreurs successifs" },
        { schema: { type: "tableau", titre: "Le même bien vendu deux fois ([[1198]])", colonnes: ["Bien", "Qui l'emporte ?", "Condition"], lignes: [
          ["Meuble corporel", "Celui qui a **pris possession** le premier, même si son droit est postérieur", "Être de **bonne foi**"],
          ["Immeuble", "Celui qui a **publié le premier** son titre authentique au fichier immobilier, même si son droit est postérieur", "Être de **bonne foi**"]
        ] } },
        { attention: "La condition de **bonne foi** du second acquéreur qui publie le premier est une nouveauté de 2016 : elle renverse Civ. 3e, 12 janv. 2011, qui jugeait la connaissance de la première vente indifférente. Les deux acquéreurs doivent tenir leur droit d'une **même personne**. Pour les meubles, [[1198]], al. 1er, applique [[2276]]." }
      ]
    }
  ],
  retenir: [
    "Force obligatoire ([[1103]]) ; bonne foi dans l'exécution ([[1104]]).",
    "Interprétation : clause claire non interprétable ([[1192]]) ; commune intention, puis personne raisonnable ([[1188]]) ; cohérence ([[1189]]) ; doute ([[1190]]) ; effet utile ([[1191]]). Forçage par [[1194]] (obligation de sécurité, 1911).",
    "Bonne foi : sanctionne l'usage déloyal d'une prérogative, pas la substance des droits (Com., 10 juill. 2007).",
    "Modification ou révocation : accord des parties ou loi ([[1193]]) ; imprévision ([[1195]]) : renégociation, puis résolution ou révision.",
    "Durée : engagements perpétuels prohibés ([[1210]]) ; CDI résiliable avec préavis raisonnable ([[1211]]) ; CDD jusqu'au terme ([[1212]]).",
    "Mutuus dissensus, résiliation légale ou du CDI ; clause de révision et d'indexation pour prévenir l'imprévision.",
    "Transfert de propriété et des risques à la conclusion ([[1196]]) ; mise en demeure ([[1344-2]]) ; conflits d'acquéreurs : possession ou publicité de bonne foi ([[1198]])."
  ],
  articles: ["1103", "1104", "1188", "1189", "1190", "1191", "1192", "1193", "1194", "1195", "1196", "1197", "1198", "1210", "1211", "1212", "1344-2"],
  regimes: ["imprevision"],
  cas: ["ch8-contrat-energie"],
  quiz: [
    { q: "Le juge peut-il interpréter une clause claire et précise ?", choix: ["Oui, s'il l'estime inéquitable", "Non : ce serait une dénaturation", "Oui, selon la commune intention"], bonne: 1, expl: "[[1192]] ; Civ., 15 avr. 1872." },
    { q: "Lorsque la commune intention des parties ne peut être décelée, le contrat s'interprète :", choix: ["Contre le créancier", "Selon le sens que lui donnerait une personne raisonnable placée dans la même situation", "Selon le sens littéral"], bonne: 1, expl: "[[1188]], al. 2." },
    { q: "Sur quel texte le juge a-t-il découvert l'obligation de sécurité du transporteur ?", choix: ["L'actuel article 1195", "L'article devenu 1194 (suites que donnent l'équité, l'usage ou la loi)", "L'article 1240"], bonne: 1, expl: "Civ., 21 nov. 1911 (visa de l'ancien art. 1134 ; fondement doctrinal : ancien art. 1135, devenu [[1194]])." },
    { q: "Selon l'arrêt Les Maréchaux (2007), la bonne foi permet au juge :", choix: ["De modifier l'équilibre du contrat", "De sanctionner l'usage déloyal d'une prérogative, sans toucher à la substance des droits et obligations", "D'annuler le contrat"], bonne: 1, expl: "Com., 10 juill. 2007." },
    { q: "Un contrat de 2014 devient ruineux à cause d'une flambée imprévisible des prix. Le juge peut-il le réviser ?", choix: ["Oui, sur le fondement de l'article 1195", "Non : l'article 1195 ne s'applique qu'aux contrats conclus depuis le 1er octobre 2016", "Oui, sur le fondement de la bonne foi"], bonne: 1, expl: "Pour les contrats antérieurs, la jurisprudence Canal de Craponne (1876) s'applique : pas de révision judiciaire." },
    { q: "Pendant la renégociation de l'article 1195, la partie qui la demande :", choix: ["Peut suspendre ses obligations", "Doit continuer à exécuter ses obligations", "Peut résilier le contrat"], bonne: 1, expl: "[[1195]], al. 1er, in fine." },
    { q: "Un contrat de prestation sans durée : une partie veut en sortir. Que doit-elle respecter ?", choix: ["Rien", "Le préavis prévu ou, à défaut, un délai raisonnable", "L'accord du juge"], bonne: 1, expl: "[[1211]]." },
    { q: "Paul vend sa voiture à Anne le 1er mars, puis à Bruno le 3 mars ; Bruno, de bonne foi, en prend possession le 4 mars. Qui est propriétaire ?", choix: ["Anne, première acheteuse", "Bruno, premier en possession et de bonne foi", "Paul"], bonne: 1, expl: "[[1198]], al. 1er ; Anne a une action contre Paul." },
    { q: "Une maison vendue devant notaire est détruite par un incendie avant la remise des clés, sans faute ni mise en demeure du vendeur. Qui supporte la perte ?", choix: ["Le vendeur", "L'acheteur, devenu propriétaire dès la conclusion", "Les deux par moitié"], bonne: 1, expl: "[[1196]], al. 1er et 3 (res perit domino) ; la solution serait inverse si le vendeur avait été mis en demeure de délivrer ([[1344-2]])." }
  ]
});

OBL.regimes.push({
  id: "imprevision",
  chapitre: "Effets du contrat",
  titre: "Révision pour imprévision",
  fondement: ["1195"],
  resume: "Obtenir la renégociation, puis la révision ou la fin d'un contrat devenu excessivement onéreux à la suite d'un événement imprévisible.",
  conditions: [
    { nom: "Un contrat conclu depuis le 1er octobre 2016", question: "Le contrat a-t-il été conclu depuis le 1er octobre 2016 et l'article 1195 n'a-t-il pas été écarté par les parties ?", detail: "Texte supplétif : clause d'exclusion ou d'aménagement valable (sauf contrôle de [[1171]] en contrat d'adhésion).", piege: "Pour un contrat antérieur : Canal de Craponne, pas de révision." },
    { nom: "Un changement de circonstances imprévisible", question: "Le changement était-il imprévisible lors de la conclusion ?", detail: "Guerre, crise énergétique, bouleversement réglementaire… apprécié au jour de la conclusion." },
    { nom: "Une exécution excessivement onéreuse", question: "L'exécution est-elle devenue excessivement onéreuse (et non impossible) pour la partie qui s'en plaint ?", detail: "Si l'exécution est impossible, on raisonne en force majeure ([[1218]]).", piege: "Confondre imprévision (onéreux) et force majeure (impossible)." },
    { nom: "Un risque non accepté", question: "La partie n'avait-elle pas accepté d'assumer ce risque (contrat aléatoire, clause de prix ferme) ?", detail: "Si le risque a été accepté, pas de révision." }
  ],
  exonerations: [],
  copie: [
    "Décrire les étapes : renégociation (en continuant d'exécuter), puis résolution convenue ou adaptation d'un commun accord par le juge, enfin révision ou résiliation judiciaire à la demande d'une partie.",
    "Ne jamais oublier la date du contrat."
  ]
});

OBL.cas.push({
  id: "ch8-contrat-energie",
  titre: "La boulangerie et le prix de l'électricité",
  seance: "Chapitre 8",
  regimes: ["imprevision"],
  faits: "En janvier 2021, la boulangerie de Mme Ferrand signe avec un fournisseur d'électricité un contrat de trois ans, à prix fixe. Le contrat ne dit rien de l'imprévision. Fin 2022, à la suite d'une crise énergétique que personne n'avait anticipée, le coût d'achat de l'électricité par le fournisseur est multiplié par six ; chaque kilowattheure vendu à Mme Ferrand lui fait perdre de l'argent. Le fournisseur annonce qu'il cesse la fourniture tant qu'un nouveau prix n'est pas accepté.",
  question: "Le fournisseur peut-il suspendre la fourniture ? Que peut-il faire ?",
  corrige: {
    qualification: "Contrat de fourniture à exécution successive et à durée déterminée, conclu en 2021 à prix fixe, sans clause sur l'imprévision. Un événement postérieur et imprévu rend l'exécution très déficitaire pour le fournisseur, qui menace de suspendre ses prestations.",
    probleme: "Le contractant dont l'exécution est devenue excessivement onéreuse à la suite d'un changement imprévisible de circonstances peut-il suspendre l'exécution, et peut-il obtenir la révision du contrat ?",
    majeure: "Selon l'article 1195 du Code civil, applicable aux contrats conclus depuis le 1er octobre 2016, si un changement de circonstances imprévisible lors de la conclusion rend l'exécution excessivement onéreuse pour une partie qui n'avait pas accepté d'en assumer le risque, elle peut demander une renégociation, en continuant d'exécuter ses obligations. En cas de refus ou d'échec, les parties peuvent convenir de la résolution ou demander ensemble au juge l'adaptation du contrat ; à défaut d'accord dans un délai raisonnable, le juge peut, à la demande d'une partie, réviser le contrat ou y mettre fin. Par ailleurs, le contrat à durée déterminée doit être exécuté jusqu'à son terme (art. 1212).",
    mineure: [
      { condition: "Contrat postérieur au 1er octobre 2016", corrige: "Le contrat date de janvier 2021 et ne contient aucune clause écartant l'article 1195 : le texte est applicable." },
      { condition: "Changement imprévisible et risque non accepté", corrige: "La crise énergétique n'était pas prévisible en janvier 2021. Reste une discussion : en acceptant un prix fixe sur trois ans, le fournisseur, professionnel de l'énergie, n'a-t-il pas accepté le risque de variation des cours ? Un prix fixe couvre des variations normales, mais pas nécessairement un bouleversement multipliant les coûts par six. On peut soutenir que ce risque n'a pas été accepté." },
      { condition: "Exécution excessivement onéreuse", corrige: "Un coût multiplié par six, qui rend chaque livraison déficitaire, caractérise une exécution excessivement onéreuse (et non impossible : on n'est pas dans la force majeure)." },
      { condition: "Suspension de la fourniture", corrige: "L'article 1195 impose de continuer à exécuter pendant la renégociation. La suspension unilatérale est donc une inexécution fautive : Mme Ferrand pourrait en demander l'exécution forcée et des dommages et intérêts." }
    ],
    conclusion: "Le fournisseur ne peut pas suspendre la fourniture. Il doit demander à Mme Ferrand une renégociation tout en continuant à livrer ; si elle refuse ou échoue, les parties peuvent convenir de la résolution ou d'une adaptation par le juge, et à défaut d'accord dans un délai raisonnable, le fournisseur peut demander au juge de réviser le prix ou de mettre fin au contrat."
  }
});

OBL.articles.push(
  {"num": "1103", "code": "C. civ.", "theme": "Force obligatoire", "texte": "Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits.", "chapitres": [8], "retenir": "Les contrats tiennent lieu de loi à ceux qui les ont faits."},
  {"num": "1104", "code": "C. civ.", "theme": "Bonne foi", "texte": "Les contrats doivent être négociés, formés et exécutés de bonne foi.\n\nCette disposition est d'ordre public.", "chapitres": [8], "retenir": "Bonne foi de la négociation à l'exécution ; ordre public."},
  {"num": "1188", "code": "C. civ.", "theme": "Interprétation", "texte": "Le contrat s'interprète d'après la commune intention des parties plutôt qu'en s'arrêtant au sens littéral de ses termes.\n\nLorsque cette intention ne peut être décelée, le contrat s'interprète selon le sens que lui donnerait une personne raisonnable placée dans la même situation.", "chapitres": [8], "retenir": "Commune intention, sinon personne raisonnable."},
  {"num": "1189", "code": "C. civ.", "theme": "Interprétation", "texte": "Toutes les clauses d'un contrat s'interprètent les unes par rapport aux autres, en donnant à chacune le sens qui respecte la cohérence de l'acte tout entier.\n\nLorsque, dans l'intention commune des parties, plusieurs contrats concourent à une même opération, ils s'interprètent en fonction de celle-ci.", "chapitres": [8], "retenir": "Cohérence de l'acte ; opération d'ensemble."},
  {"num": "1190", "code": "C. civ.", "theme": "Interprétation", "texte": "Dans le doute, le contrat de gré à gré s'interprète contre le créancier et en faveur du débiteur, et le contrat d'adhésion contre celui qui l'a proposé.", "chapitres": [8], "retenir": "Dans le doute : contre le créancier (gré à gré) ou contre le rédacteur (adhésion)."},
  {"num": "1191", "code": "C. civ.", "theme": "Interprétation", "texte": "Lorsqu'une clause est susceptible de deux sens, celui qui lui confère un effet l'emporte sur celui qui ne lui en fait produire aucun.", "chapitres": [8], "retenir": "Préférer le sens qui donne un effet à la clause."},
  {"num": "1192", "code": "C. civ.", "theme": "Interprétation", "texte": "On ne peut interpréter les clauses claires et précises à peine de dénaturation.", "chapitres": [8], "retenir": "Pas d'interprétation des clauses claires et précises (dénaturation)."},
  {"num": "1193", "code": "C. civ.", "theme": "Modification", "texte": "Les contrats ne peuvent être modifiés ou révoqués que du consentement mutuel des parties, ou pour les causes que la loi autorise.", "chapitres": [8], "retenir": "Modification ou révocation : consentement mutuel ou loi."},
  {"num": "1194", "code": "C. civ.", "theme": "Interprétation créatrice", "texte": "Les contrats obligent non seulement à ce qui y est exprimé, mais encore à toutes les suites que leur donnent l'équité, l'usage ou la loi.", "chapitres": [8], "retenir": "Suites que donnent l'équité, l'usage ou la loi : fondement du forçage."},
  {"num": "1195", "code": "C. civ.", "theme": "Imprévision", "texte": "Si un changement de circonstances imprévisible lors de la conclusion du contrat rend l'exécution excessivement onéreuse pour une partie qui n'avait pas accepté d'en assumer le risque, celle-ci peut demander une renégociation du contrat à son cocontractant. Elle continue à exécuter ses obligations durant la renégociation.\n\nEn cas de refus ou d'échec de la renégociation, les parties peuvent convenir de la résolution du contrat, à la date et aux conditions qu'elles déterminent, ou demander d'un commun accord au juge de procéder à son adaptation. A défaut d'accord dans un délai raisonnable, le juge peut, à la demande d'une partie, réviser le contrat ou y mettre fin, à la date et aux conditions qu'il fixe.", "chapitres": [8], "retenir": "Renégociation, puis résolution convenue, adaptation ou révision judiciaire."},
  {"num": "1196", "code": "C. civ.", "theme": "Effet translatif", "texte": "Dans les contrats ayant pour objet l'aliénation de la propriété ou la cession d'un autre droit, le transfert s'opère lors de la conclusion du contrat.\n\nCe transfert peut être différé par la volonté des parties, la nature des choses ou par l'effet de la loi.\n\nLe transfert de propriété emporte transfert des risques de la chose. Toutefois le débiteur de l'obligation de délivrer en retrouve la charge à compter de sa mise en demeure, conformément à l'article 1344-2 et sous réserve des règles prévues à l'article 1351-1.", "chapitres": [8], "retenir": "Transfert de propriété et des risques à la conclusion."},
  {"num": "1197", "code": "C. civ.", "theme": "Effet translatif", "texte": "L'obligation de délivrer la chose emporte obligation de la conserver jusqu'à la délivrance, en y apportant tous les soins d'une personne raisonnable.", "chapitres": [8], "retenir": "Obligation de conserver la chose jusqu'à la délivrance."},
  {"num": "1198", "code": "C. civ.", "theme": "Effet translatif", "texte": "Lorsque deux acquéreurs successifs d'un même meuble corporel tiennent leur droit d'une même personne, celui qui a pris possession de ce meuble en premier est préféré, même si son droit est postérieur, à condition qu'il soit de bonne foi.\n\nLorsque deux acquéreurs successifs de droits portant sur un même immeuble tiennent leur droit d'une même personne, celui qui a, le premier, publié son titre d'acquisition passé en la forme authentique au fichier immobilier est préféré, même si son droit est postérieur, à condition qu'il soit de bonne foi.", "chapitres": [8], "retenir": "Conflits d'acquéreurs : possession (meuble) ou publicité (immeuble), de bonne foi."},
  {"num": "1210", "code": "C. civ.", "theme": "Durée", "texte": "Les engagements perpétuels sont prohibés.\n\nChaque contractant peut y mettre fin dans les conditions prévues pour le contrat à durée indéterminée.", "chapitres": [8], "retenir": "Engagements perpétuels prohibés."},
  {"num": "1211", "code": "C. civ.", "theme": "Durée", "texte": "Lorsque le contrat est conclu pour une durée indéterminée, chaque partie peut y mettre fin à tout moment, sous réserve de respecter le délai de préavis contractuellement prévu ou, à défaut, un délai raisonnable.", "chapitres": [8], "retenir": "CDI : résiliation avec préavis contractuel ou raisonnable."},
  {"num": "1212", "code": "C. civ.", "theme": "Durée", "texte": "Lorsque le contrat est conclu pour une durée déterminée, chaque partie doit l'exécuter jusqu'à son terme.\n\nNul ne peut exiger le renouvellement du contrat.", "chapitres": [8], "retenir": "CDD : exécution jusqu'au terme."},
  {"num": "1344-2", "code": "C. civ.", "theme": "Risques", "texte": "La mise en demeure de délivrer une chose met les risques à la charge du débiteur, s'ils n'y sont déjà.", "chapitres": [8], "retenir": "La mise en demeure de délivrer met les risques à la charge du débiteur."}
);
