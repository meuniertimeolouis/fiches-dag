/* Chapitre 3 — La formation du contrat
   Fiche reformulée à partir du manuel ; textes vérifiés sur Légifrance. */
var OBL = window.OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [] };

OBL.chapitres.push({
  num: 3,
  intro: "Tout contrat se forme par la **rencontre d'une offre et d'une acceptation** ([[1113]]). La réforme de 2016 a codifié ce schéma (art. 1112 à 1127-6) et les situations plus complexes que la pratique connaissait : **négociations**, **pacte de préférence**, **promesses de contrat**, **contrats entre absents**. Ces règles s'appliquent aux contrats conclus depuis le 1er octobre 2016.",
  sections: [
    {
      titre: "L'offre",
      contenu: [
        { def: { terme: "Offre (ou pollicitation)", texte: "proposition de conclure un contrat qui **comprend les éléments essentiels** du contrat envisagé et **exprime la volonté de son auteur d'être lié en cas d'acceptation** ([[1114]]). À défaut, il n'y a qu'une **invitation à entrer en négociation**." } },
        { schema: { type: "arbre", titre: "Les trois caractères de l'offre", racine: { t: "Offre", d: "[[1114]]", enfants: [
          { t: "Précise", d: "contient les éléments essentiels (vente : chose et prix ; bail : chose louée et loyer)" },
          { t: "Ferme", d: "volonté d'être lié en cas d'acceptation" },
          { t: "Extériorisée", d: "déclaration ou comportement non équivoque ([[1113]], al. 2), à une personne déterminée ou au public" }
        ] } } },
        { p: "Pour savoir si l'offre est précise, on se demande quels sont les **éléments essentiels** du contrat envisagé : simple pour les contrats nommés, plus délicat pour les autres (Com., 17 sept. 2025, n° 24-10.604 : offre de cession de parts exprimée en pourcentage du capital d'une société en formation, jugée précise). À défaut d'un des caractères, il n'y a qu'une invitation à entrer en négociation (Civ. 3e, 11 mai 2023, n° 22-11.287) : le destinataire peut alors devenir lui-même offrant en faisant une proposition complète. En vente immobilière, l'[[1589-1]] interdit d'exiger de l'offrant le versement d'une somme d'argent qui anticiperait l'exécution du contrat." },
        { h: "L'offre avec réserves" },
        { p: "Les textes sont muets, mais la jurisprudence antérieure reste valable. La réserve doit en principe être **expresse**, sauf si elle découle de la nature du contrat : dans un contrat conclu *intuitu personae* (contrat de travail, bail), l'offrant conserve implicitement le droit d'agréer son cocontractant, de sorte que l'acceptation du premier venu ne suffit pas à former le contrat." },
        { schema: { type: "tableau", titre: "Réserve objective ou subjective", colonnes: ["", "Réserve objective", "Réserve subjective"], lignes: [
          ["Critère", "Contrôlable par un tiers", "Laisse à l'offrant le choix de contracter ou non"],
          ["Exemple", "« Dans la limite des stocks disponibles »", "« Sous réserve de confirmation »"],
          ["Qualification", "Reste une **offre** : la fermeté n'est pas atteinte", "Pas d'offre : simple invitation à négocier"]
        ] } },
        { h: "Offre au public" },
        { p: "L'offre peut être faite au public ([[1114]]) : le contrat se forme avec le **premier acceptant**, sauf contrat conclu en considération de la personne (Civ. 3e, 28 nov. 1968)." },
        { h: "Rétractation et caducité" },
        { schema: { type: "frise", titre: "La vie d'une offre", evenements: [
          { date: "Avant réception", t: "Rétractation libre", d: "tant que l'offre n'est pas parvenue à son destinataire ([[1115]])" },
          { date: "Après réception", t: "Maintien obligatoire", d: "pendant le délai fixé par l'offrant ou, à défaut, un **délai raisonnable** apprécié par les juges du fond ([[1116]], al. 1er)" },
          { date: "Rétractation fautive", t: "Pas de contrat, mais responsabilité", d: "le contrat ne peut pas se former ; responsabilité **extracontractuelle**, sans indemniser la perte des avantages attendus du contrat ([[1116]], al. 2 et 3)" },
          { date: "Fin", t: "Caducité", d: "à l'expiration du délai ; en cas d'**incapacité ou de décès de l'offrant**, ou de **décès du destinataire** ([[1117]])" }
        ] } },
        { attention: "Le décès du **destinataire** ne rend l'offre caduque que pour les offres émises depuis le 1er octobre 2018 (loi de ratification du 20 avril 2018). Pour une offre émise entre le 1er octobre 2016 et le 30 septembre 2018, seul le décès de l'offrant la rendait caduque. Avant la réforme, la jurisprudence était divisée : l'offre **sans délai** était caduque au décès de son auteur (Civ. 1re, 25 juin 2014, n° 13-16.529), alors que l'offre **assortie d'un délai** avait pu être jugée transmise aux héritiers (Civ. 3e, 10 déc. 1997). Depuis 2016, toute offre est caduque au décès de l'offrant." },
        { p: "Le **délai raisonnable** n'est défini par aucun critère légal : les juges du fond l'apprécient au cas par cas (nature et contenu du contrat, usages), a posteriori. Avant la réforme, la jurisprudence l'imposait déjà pour l'offre faite à personne déterminée (Civ. 3e, 20 mai 2009) et respectait le délai exprès (Civ. 3e, 7 mai 2008)." },
        { p: "**Fondement de l'obligation de maintien** : discuté. Demolombe y voyait un avant-contrat sur le délai, analyse jugée artificielle ; la doctrine contemporaine invoque l'engagement unilatéral ou la responsabilité délictuelle (la révocation fautive de l'[[1240|art. 1240]]), sans que cela explique entièrement l'obligation de maintenir l'offre. Le Code consacre la sanction délictuelle, ce qui distingue nettement l'offre de la promesse unilatérale." },
        { p: "Offres électroniques des professionnels : l'offrant reste engagé tant que son offre est accessible en ligne de son fait, et l'offre doit contenir des mentions obligatoires ([[1127-1]])." }
      ]
    },
    {
      titre: "L'acceptation",
      contenu: [
        { def: { terme: "Acceptation", texte: "manifestation de volonté de son auteur d'être lié **dans les termes de l'offre** ([[1118]]). Elle forme le contrat, sans que l'offrant ait à confirmer son consentement." } },
        { liste: [
          "**Certaine** : expresse ou tacite, si le comportement est non équivoque (monter dans un taxi, confier un meuble à l'ébéniste) : [[1113]], al. 2.",
          "**Pure et simple** : une acceptation qui modifie l'offre n'est qu'une **contre-proposition**, c'est-à-dire une offre nouvelle ([[1118]], al. 3). Les rôles d'offrant et d'acceptant s'inversent.",
          "**Rétractable** tant qu'elle n'est pas parvenue à l'offrant ([[1118]], al. 2). Une fois reçue, le contrat est formé.",
          "En ligne : règle du **double clic** — vérifier la commande, puis confirmer ([[1127-2]])."
        ] },
        { h: "Les conditions générales" },
        { p: "Elles ne sont opposables que si elles ont été **portées à la connaissance** de l'autre partie **et acceptées** par elle ([[1119]], al. 1er). Conflit entre conditions générales des deux parties : les clauses incompatibles sont **sans effet** ; conflit entre conditions générales et particulières : les **particulières l'emportent** ([[1119]], al. 2 et 3). Sous l'ancien droit, le défaut de communication des conditions générales et particulières était sanctionné par leur **inopposabilité** (Civ. 3e, 20 avr. 2017, n° 16-10.696), mais pas toujours : Civ. 1re, 4 oct. 2017, n° 16-10.411 retient l'absence de formation du contrat lorsque les conditions générales contiennent un élément essentiel." },
        { h: "Le silence" },
        { p: "Principe : **le silence ne vaut pas acceptation** (Civ., 25 mai 1870 ; [[1120]]). Une clause de l'offre disant le contraire serait sans valeur, et le procédé peut même être pénalement sanctionné (C. pén., art. R. 635-2). Exceptions légales : [[1738]] pour le bail, art. L. 112-2, al. 5 du Code des assurances." },
        { schema: { type: "arbre", titre: "Quand le silence vaut-il acceptation ? ([[1120]])", racine: { t: "Silence = refus", d: "principe", enfants: [
          { lien: "sauf", t: "La loi", d: "ex. tacite reconduction du bail, [[1738]]" },
          { lien: "sauf", t: "Les usages", d: "ex. lettre de confirmation dans le commerce" },
          { lien: "sauf", t: "Les relations d'affaires", d: "habitude réelle entre les parties" },
          { lien: "sauf", t: "Circonstances particulières", d: "offre faite dans l'**intérêt exclusif** du destinataire (Req., 29 mars 1938)" }
        ] } } },
        { attention: "Ne confondez pas l'**acceptation tacite** (un comportement actif, non équivoque) et le **silence** (passivité totale)." }
      ]
    },
    {
      titre: "Les négociations",
      contenu: [
        { p: "Principe de **liberté** : l'initiative, le déroulement et la rupture des négociations sont libres ; mais ils doivent **impérativement** respecter la bonne foi ([[1112]], al. 1er). S'y ajoutent un devoir d'**information** ([[1112-1]], étudié au chapitre 4) et un devoir de **confidentialité** ([[1112-2]])." },
        { p: "Fautes sanctionnées : rupture de **mauvaise foi** (entretenir l'autre dans l'espoir d'un contrat qu'on ne veut pas conclure), rupture **brutale et sans motif légitime** de pourparlers avancés, **divulgation** d'une information confidentielle. Fondement : responsabilité **extracontractuelle** ([[1240]])." },
        { p: "La faute s'apprécie à l'aune de l'**attente légitime** de la victime : elle suppose une mauvaise foi caractérisée, et le fait de rompre des négociations avancées sans motif légitime n'est sanctionné que si la victime pouvait raisonnablement espérer conclure. Cette formation progressive du contrat a été étudiée par la doctrine allemande sous le nom de **punctation** (accord point par point) avant d'être intégrée au Code en 2016." },
        { arret: { ref: "Com., 26 nov. 2003 (arrêt Manoukian)", apport: "La victime d'une rupture fautive des pourparlers est indemnisée de ses **pertes** (frais de négociation, études), mais pas des gains qu'elle espérait du contrat, ni de la **perte de chance** de les obtenir. Solution constamment reprise (Civ. 3e, 7 janv. 2009 ; Com., 18 sept. 2012) puis codifiée à [[1112]], al. 2. Elle marque un revirement par rapport aux juges du fond, qui indemnisaient la perte de chance de conclure." } },
        { attention: "Réparation limitée : on n'indemnise ni la perte des avantages attendus du contrat ni la perte de chance de les obtenir (rédaction de la loi du 20 avril 2018, jugée interprétative). C'est le point le plus souvent testé en cas pratique." }
      ]
    },
    {
      titre: "Le pacte de préférence",
      contenu: [
        { def: { terme: "Pacte de préférence", texte: "contrat par lequel une partie s'engage à proposer **prioritairement** à son bénéficiaire de traiter avec lui **pour le cas où elle déciderait de contracter** ([[1123]], al. 1er)." } },
        { p: "Le promettant ne s'engage **pas à vendre** : il s'engage seulement, s'il vend, à proposer d'abord au bénéficiaire. Le prix n'a donc pas à être fixé dans le pacte (Civ. 3e, 15 janv. 2003), et le pacte n'a pas à comporter de durée (Civ. 1re, 25 sept. 2024, n° 23-14.777 : la nullité du pacte est écartée en pareil cas, même si la sanction des engagements perpétuels peut jouer). À l'état de veille, le pacte ne produit pas de véritables effets : il peut en principe être transmis par le bénéficiaire à un tiers." },
        { schema: { type: "arbre", titre: "Sanction de la violation du pacte ([[1123]], al. 2)", racine: { t: "Contrat conclu avec un tiers en violation du pacte", enfants: [
          { lien: "dans les autres cas (tiers ignorant le pacte ou l'intention du bénéficiaire)", t: "Dommages et intérêts", d: "contre le promettant seulement" },
          { lien: "le tiers connaissait le pacte ET l'intention du bénéficiaire de s'en prévaloir", t: "Nullité ou substitution", d: "le bénéficiaire peut aussi faire annuler le contrat ou prendre la place du tiers" }
        ] } } },
        { arret: { ref: "Ch. mixte, 26 mai 2006, n° 03-19.376", apport: "Première admission de la **substitution** du bénéficiaire au tiers acquéreur, à la double condition de la connaissance, par le tiers, du pacte **et** de l'intention du bénéficiaire de s'en prévaloir. Solution reprise par [[1123]], al. 2." } },
        { p: "**Action interrogatoire** ([[1123]], al. 3 et 4) : le tiers peut demander par écrit au bénéficiaire de confirmer, dans un délai raisonnable, l'existence du pacte et son intention de s'en prévaloir ; sans réponse, le bénéficiaire perd le droit de demander la nullité ou la substitution (mais pas les dommages et intérêts). Applicable dès le 1er octobre 2016, même aux pactes antérieurs." }
      ]
    },
    {
      titre: "Les promesses de contrat",
      contenu: [
        { schema: { type: "tableau", titre: "Pacte de préférence, promesse unilatérale, promesse synallagmatique", colonnes: ["", "Pacte de préférence", "Promesse unilatérale", "Promesse synallagmatique"], lignes: [
          ["Engagement du promettant", "Proposer d'abord, **s'il décide** de vendre", "**Vendre** : il a déjà consenti au contrat", "Vendre"],
          ["Engagement du bénéficiaire", "Aucun", "Aucun : il a un **droit d'option**", "**Acheter**"],
          ["Texte", "[[1123]]", "[[1124]]", "[[1589]] pour la vente (« la promesse de vente vaut vente »)"],
          ["Violation par vente à un tiers", "Dommages et intérêts ; nullité ou substitution si tiers de mauvaise foi", "Contrat avec un tiers qui connaissait la promesse : **nul** ([[1124]], al. 3)", "Vente déjà formée entre les parties"]
        ] } },
        { h: "La promesse unilatérale" },
        { def: { terme: "Promesse unilatérale", texte: "contrat par lequel le **promettant** accorde au **bénéficiaire** le droit d'opter pour la conclusion d'un contrat dont les éléments essentiels sont déterminés, et pour la formation duquel ne manque que le consentement du bénéficiaire ([[1124]], al. 1er)." } },
        { p: "C'est un **contrat** (rencontre des volontés) **unilatéral** (seul le promettant est obligé). Si le bénéficiaire lève l'option dans le délai, le contrat promis est formé ; s'il ne la lève pas, le promettant conserve l'**indemnité d'immobilisation** éventuellement versée." },
        { schema: { type: "frise", titre: "La rétractation du promettant : une jurisprudence renversée", evenements: [
          { date: "15 déc. 1993", t: "Civ. 3e (arrêt Cruz)", d: "Le promettant ne doit qu'une obligation de faire : sa rétractation avant la levée d'option empêche la vente ; seulement des dommages et intérêts. Solution très critiquée." },
          { date: "1er oct. 2016", t: "Ordonnance, art. 1124, al. 2", d: "La révocation pendant le délai d'option **n'empêche pas** la formation du contrat promis : exécution forcée possible." },
          { date: "6 déc. 2018", t: "Civ. 3e, n° 17-21.171", d: "Maintien de la solution de 1993 pour les promesses antérieures à la réforme." },
          { date: "17 oct. 2019", t: "Civ. 3e, n° 19-40.028", d: "Refus de transmettre une QPC contre l'art. 1124, al. 2 : pas d'atteinte à la liberté contractuelle ni au droit de propriété." },
          { date: "23 juin 2021", t: "Civ. 3e, n° 20-17.554 (revirement)", d: "Même pour les promesses antérieures, le promettant s'oblige définitivement à vendre dès la promesse, sans possibilité de rétractation, sauf stipulation contraire. Suivi par Com., 15 mars 2023, n° 21-20.399 (même solution pour une promesse antérieure à 2016, même avant l'ouverture du délai d'option) et Civ. 3e, 21 nov. 2024, n° 21-12.661." }
        ] } },
        { h: "Indemnité d'immobilisation et requalification" },
        { p: "Une indemnité très élevée peut faire douter du caractère unilatéral (le bénéficiaire n'est plus vraiment libre de ne pas acheter). La jurisprudence classique requalifiait alors en promesse synallagmatique (Com., 20 nov. 1962) ; la 1re chambre civile s'en est tenue à la volonté des parties, même pour une indemnité proche du prix (Civ. 1re, 1er déc. 2010). La 3e chambre civile paraissait revenir au critère objectif (Civ. 3e, 26 sept. 2012, non publié). La réforme n'a pas tranché : l'[[1124]] ne distingue pas selon l'existence d'une indemnité, ce qui plaide pour la qualification unilatérale dès lors qu'un droit d'option est formellement conféré. L'avant-projet de réforme des contrats spéciaux (juillet 2022, art. 1590, al. 3) proposait la requalification en vente assortie d'un dédit lorsque la somme porte une atteinte manifestement excessive à la liberté du bénéficiaire." },
        { attention: "Forme : la promesse unilatérale de vente d'un **immeuble** ou d'un **fonds de commerce** est **nulle** si elle n'est pas passée par acte authentique ou par acte sous seing privé **enregistré dans les dix jours** de son acceptation ([[1589-2]])." },
        { h: "La promesse synallagmatique (« compromis de vente »)" },
        { p: "Les deux parties s'engagent : l'une à vendre, l'autre à acheter. En matière de vente, « la promesse de vente vaut vente » dès l'accord sur la chose et le prix ([[1589]]). Si les parties ont prévu une **réitération par acte notarié**, tout dépend de leur volonté : si l'acte notarié n'est qu'une formalité de preuve, la vente est déjà parfaite ; si elles en ont fait un **élément constitutif** de leur consentement, la vente forcée est impossible et seule la responsabilité du défaillant peut être engagée (Civ. 3e, 20 déc. 1994 ; 7 déc. 2023, n° 22-19.977). Autre cas fréquent : la promesse synallagmatique faite sous la **condition suspensive d'obtention d'un prêt**, qui subordonne la vente à la décision de la banque. Cette promesse n'a pas été reprise par l'ordonnance de 2016, mais elle subsiste en pratique." }
      ]
    },
    {
      titre: "Le contrat entre absents",
      contenu: [
        { p: "Quand les parties ne sont pas en présence (courrier, téléphone, internet), où et quand le contrat est-il formé ? La **date** reste essentielle : rétractation, prescription, transfert de propriété et des risques, loi applicable dans le temps." },
        { p: "L'intérêt du **lieu** de formation s'est réduit : en droit interne, la compétence territoriale ne dépend plus du lieu de formation du contrat, et, en droit international privé, le règlement Rome I (17 juin 2008) ne fait plus dépendre la loi applicable du lieu de conclusion (ce lieu ne reste qu'un rattachement alternatif pour la validité formelle, art. 11). Reste la **date** (rétractation, prescription, transfert de propriété, application de la loi dans le temps)." },
        { schema: { type: "tableau", titre: "Deux théories", colonnes: ["", "Théorie de l'émission", "Théorie de la réception"], lignes: [
          ["Moment", "Envoi de l'acceptation", "Réception de l'acceptation par l'offrant"],
          ["Idée", "Il suffit que les volontés coexistent", "Il faut une véritable rencontre des volontés"],
          ["Droit positif", "Retenue par Com., 7 janv. 1981 (droit antérieur ; anc. art. 1369-5 pour l'électronique, ambigu). Solution contraire : Civ. 3e, 16 juin 2011 ; Civ. 1re, 6 janv. 2021, n° 19-21.071", "**Consacrée** par [[1121]] : le contrat est conclu dès que l'acceptation **parvient** à l'offrant, au lieu où elle est parvenue"]
        ] } },
        { attention: "Il suffit que l'acceptation **parvienne** à l'offrant : peu importe qu'il en ait réellement pris connaissance." }
      ]
    }
  ],
  retenir: [
    "Contrat = offre + acceptation ([[1113]]). Offre = précise, ferme, extériorisée ([[1114]]) ; sinon, invitation à négocier.",
    "Offre : rétractation libre avant réception ([[1115]]) ; ensuite maintien pendant le délai fixé ou raisonnable ; rétractation fautive = pas de contrat + responsabilité extracontractuelle ([[1116]]). Caducité : délai, incapacité ou décès de l'offrant, décès du destinataire ([[1117]]).",
    "Acceptation pure et simple, sinon contre-offre ([[1118]]). Silence ≠ acceptation sauf loi, usages, relations d'affaires, circonstances particulières ([[1120]]).",
    "Négociations libres mais de bonne foi ; faute = responsabilité délictuelle, sans indemniser la perte de chance de conclure ([[1112]]).",
    "Pacte de préférence violé : dommages et intérêts ; nullité ou substitution si le tiers connaissait le pacte et l'intention du bénéficiaire ([[1123]]).",
    "Promesse unilatérale : la révocation n'empêche pas la formation du contrat ([[1124]], al. 2) ; revirement de 2021 pour les promesses anciennes.",
    "Contrat entre absents : théorie de la réception ([[1121]])."
  ],
  articles: ["1112", "1112-1", "1112-2", "1113", "1114", "1115", "1116", "1117", "1118", "1119", "1120", "1121", "1122", "1123", "1124", "1127-1", "1127-2", "1582", "1583", "1589", "1589-1", "1589-2", "1240", "1738"],
  regimes: ["pourparlers", "pacte-preference", "promesse-unilaterale"],
  cas: ["ch3-maison-bord-de-loire"],
  quiz: [
    { q: "Une annonce en ligne : « Vends vélo de course, bon état, faire offre ». Qualification ?", choix: ["Une offre au public", "Une invitation à entrer en négociation", "Une promesse unilatérale"], bonne: 1, expl: "Le prix, élément essentiel de la vente, manque : [[1114]], in fine." },
    { q: "L'offrant a laissé 15 jours au destinataire pour réfléchir ; il retire son offre au 5e jour, puis le destinataire accepte au 10e jour. Conséquence ?", choix: ["Le contrat est formé : exécution forcée", "Le contrat n'est pas formé, mais l'offrant engage sa responsabilité extracontractuelle", "Aucune conséquence"], bonne: 1, expl: "[[1116]], al. 2 et 3 : la rétractation fautive empêche la conclusion du contrat mais engage la responsabilité de son auteur, sans indemniser la perte des avantages attendus." },
    { q: "Une offre sans délai émise en 2025 à Paul ; Paul meurt avant d'avoir répondu. Ses héritiers peuvent-ils accepter ?", choix: ["Oui, l'offre leur est transmise", "Non, l'offre est caduque par le décès de son destinataire", "Oui, si l'offrant est encore vivant"], bonne: 1, expl: "[[1117]], al. 2, dans sa rédaction issue de la loi du 20 avril 2018 (offres émises depuis le 1er octobre 2018)." },
    { q: "Le destinataire répond : « J'accepte, mais à 10 % de moins. » Qualification ?", choix: ["Une acceptation", "Une contre-proposition, c'est-à-dire une nouvelle offre", "Un refus sans effet juridique"], bonne: 1, expl: "[[1118]], al. 3 : l'acceptation non conforme à l'offre vaut offre nouvelle." },
    { q: "Un contrat conclu par courrier : quand est-il formé ?", choix: ["À l'envoi de l'acceptation", "Dès que l'acceptation parvient à l'offrant", "Quand l'offrant lit la lettre"], bonne: 1, expl: "[[1121]] consacre la théorie de la réception ; la prise de connaissance effective n'est pas exigée." },
    { q: "Rupture fautive de pourparlers avancés : que peut obtenir la victime ?", choix: ["Le gain qu'elle aurait tiré du contrat", "La perte de chance de conclure le contrat", "Le remboursement de ses frais de négociation et d'études"], bonne: 2, expl: "[[1112]], al. 2 (et Com., 26 nov. 2003) : ni les avantages attendus, ni la perte de chance de les obtenir." },
    { q: "Le promettant d'une promesse unilatérale de vente (conclue en 2020) se rétracte avant la levée d'option ; le bénéficiaire lève l'option dans le délai. Solution ?", choix: ["Seulement des dommages et intérêts", "La vente est formée : exécution forcée possible", "La promesse est nulle"], bonne: 1, expl: "La promesse date de 2020 : seul [[1124]], al. 2 s'applique. L'arrêt Civ. 3e, 23 juin 2021, n° 20-17.554, concerne les promesses conclues **avant** le 1er octobre 2016 ; ne le citez pas comme fondement pour une promesse postérieure." },
    { q: "Violation d'un pacte de préférence : le tiers acquéreur connaissait le pacte mais ignorait que le bénéficiaire voulait s'en prévaloir. Le bénéficiaire peut obtenir :", choix: ["La substitution", "La nullité de la vente", "Seulement des dommages et intérêts"], bonne: 2, expl: "Les deux connaissances sont cumulatives ([[1123]], al. 2)." },
    { q: "Le silence gardé par un client après réception d'une offre qui lui propose une remise de dette gratuite :", choix: ["Ne vaut jamais acceptation", "Peut valoir acceptation : offre faite dans son intérêt exclusif", "Vaut refus"], bonne: 1, expl: "« Circonstances particulières » de [[1120]] (Req., 29 mars 1938)." },
    { q: "Une promesse unilatérale de vente d'un appartement, acceptée le 1er mars et signée sous seing privé, n'est jamais enregistrée. Conséquence ?", choix: ["Aucune", "Elle est nulle", "Elle est requalifiée en pacte de préférence"], bonne: 1, expl: "[[1589-2]] : acte authentique ou sous seing privé enregistré dans les dix jours de l'acceptation." }
  ]
});

OBL.regimes.push(
  {
    id: "pourparlers",
    chapitre: "Formation du contrat",
    titre: "Rupture fautive des pourparlers",
    fondement: ["1112", "1240"],
    resume: "Engager la responsabilité de celui qui a rompu des négociations de façon fautive. La liberté de rompre est le principe ; la faute est l'exception.",
    conditions: [
      { nom: "Des pourparlers", question: "Les parties étaient-elles en négociation, sans contrat déjà conclu (ni offre acceptée) ?", detail: "Période de discussion préalable où les parties n'entendent pas encore s'engager.", preuve: "La victime prouve l'existence et l'état d'avancement des négociations.", piege: "Si une offre a été acceptée, le contrat est formé : on est sur le terrain de l'inexécution, pas de la rupture des pourparlers." },
      { nom: "Une faute dans la rupture", question: "La rupture est-elle fautive (mauvaise foi, rupture brutale de pourparlers avancés sans motif légitime, divulgation d'une information confidentielle) ?", detail: "La rupture en elle-même est libre ([[1112]], al. 1er). La faute tient aux circonstances : laisser croire à la conclusion, rompre brutalement des négociations très avancées, utiliser les informations confidentielles reçues ([[1112-2]]).", preuve: "Charge de la victime.", piege: "Ne jamais dire que « rompre est une faute » : c'est la manière de rompre qui l'est." },
      { nom: "Un préjudice réparable", question: "La victime a-t-elle subi des pertes (frais engagés, études, occasions manquées) ?", detail: "Seuls les frais et pertes subis sont réparés. Sont exclus la perte des avantages attendus du contrat et la perte de chance de les obtenir ([[1112]], al. 2 ; Com., 26 nov. 2003).", piege: "Réclamer « le bénéfice qu'aurait rapporté le contrat » ou « la perte de chance d'obtenir ces avantages » : c'est la réponse fausse classique. En revanche, la perte d'une autre occasion (un contrat avec un tiers, écarté à cause des pourparlers) peut être indemnisée." },
      { nom: "Un lien de causalité", question: "Ce préjudice résulte-t-il de la faute (et non de la simple rupture) ?", detail: "Le dommage doit découler des circonstances fautives de la rupture." }
    ],
    exonerations: [],
    copie: [
      "Fondement : responsabilité extracontractuelle ([[1240]]) et [[1112]], pas responsabilité contractuelle (pas de contrat).",
      "Toujours vérifier d'abord qu'aucune offre n'a été acceptée."
    ]
  },
  {
    id: "pacte-preference",
    chapitre: "Formation du contrat",
    titre: "Violation d'un pacte de préférence",
    fondement: ["1123"],
    resume: "Déterminer ce que peut obtenir le bénéficiaire quand le promettant a contracté avec un tiers sans lui proposer d'abord le contrat.",
    conditions: [
      { nom: "Un pacte de préférence valable", question: "Existe-t-il un pacte par lequel le promettant s'est engagé à proposer prioritairement le contrat au bénéficiaire ?", detail: "Le prix n'a pas à être déterminé. Pas besoin de durée (Civ. 1re, 25 sept. 2024).", piege: "Ne pas confondre avec une promesse unilatérale : ici, le promettant ne s'engage pas à vendre." },
      { nom: "Un contrat conclu avec un tiers en violation du pacte", question: "Le promettant a-t-il contracté avec un tiers sans proposer d'abord au bénéficiaire ?", detail: "La violation est constituée dès que le promettant décide de vendre à un tiers, par exemple par une promesse de vente au profit d'un tiers (Civ. 3e, 6 déc. 2018, n° 17-23.321).", preuve: "Ouvre droit, au minimum, à des dommages et intérêts contre le promettant." },
      { nom: "Connaissance du pacte par le tiers", question: "Le tiers connaissait-il l'existence du pacte ?", detail: "Condition de la nullité et de la substitution.", preuve: "Au bénéficiaire de la prouver.", piege: "Sans cette connaissance : seulement des dommages et intérêts." },
      { nom: "Connaissance de l'intention du bénéficiaire", question: "Le tiers savait-il aussi que le bénéficiaire entendait se prévaloir du pacte ?", detail: "Seconde condition cumulative ([[1123]], al. 2 ; Ch. mixte, 26 mai 2006). Si elle est remplie, le bénéficiaire peut agir en nullité ou demander sa substitution au tiers.", piege: "Si le tiers a exercé l'action interrogatoire et que le bénéficiaire n'a pas répondu dans le délai, il ne peut plus demander nullité ou substitution." }
    ],
    exonerations: [],
    copie: [
      "Construire la réponse en deux temps : sanction minimale (dommages et intérêts contre le promettant), puis sanctions renforcées (nullité, substitution) si double connaissance du tiers.",
      "Penser à l'action interrogatoire ([[1123]], al. 3 et 4)."
    ]
  },
  {
    id: "promesse-unilaterale",
    chapitre: "Formation du contrat",
    titre: "Rétractation du promettant (promesse unilatérale)",
    fondement: ["1124"],
    resume: "Savoir si le bénéficiaire d'une promesse unilatérale peut obtenir la conclusion forcée du contrat malgré la rétractation du promettant.",
    conditions: [
      { nom: "Une promesse unilatérale valable", question: "Le promettant a-t-il consenti au contrat définitif, dont les éléments essentiels sont déterminés, en laissant au bénéficiaire un droit d'option ?", detail: "[[1124]], al. 1er. Pour un immeuble ou un fonds de commerce : acte authentique ou sous seing privé enregistré dans les dix jours ([[1589-2]]).", piege: "Oublier l'exigence d'enregistrement de l'article 1589-2." },
      { nom: "Levée de l'option dans le délai", question: "Le bénéficiaire a-t-il levé l'option avant l'expiration du délai ?", detail: "La levée d'option forme le contrat promis. Hors délai, la promesse est caduque." },
      { nom: "Rétractation pendant le délai d'option", question: "Le promettant s'est-il rétracté pendant le délai d'option ?", detail: "Cette révocation n'empêche pas la formation du contrat promis ([[1124]], al. 2) : le bénéficiaire peut obtenir l'exécution forcée. Même solution pour les promesses conclues avant 2016 depuis Civ. 3e, 23 juin 2021.", piege: "Citer l'arrêt Cruz (1993) comme droit positif : il est abandonné." }
    ],
    exonerations: [
      { nom: "Une stipulation contraire", question: "La promesse autorise-t-elle expressément le promettant à se rétracter ?", detail: "Le revirement de 2021 réserve la « stipulation contraire ».", effet: "Seulement des dommages et intérêts, selon la clause." },
      { nom: "Un tiers de bonne foi", question: "Le bien a-t-il été vendu à un tiers qui ignorait la promesse ?", detail: "Le contrat conclu avec un tiers qui connaissait la promesse est nul ([[1124]], al. 3). S'il l'ignorait, la vente au tiers tient.", effet: "Le bénéficiaire n'obtient que des dommages et intérêts contre le promettant." }
    ],
    copie: [
      "Distinguer selon la date de la promesse : avant ou après le 1er octobre 2016 ; puis indiquer que la solution est désormais identique (revirement de 2021)."
    ]
  }
);

OBL.cas.push({
  id: "ch3-maison-bord-de-loire",
  titre: "La maison au bord de la Loire",
  seance: "Chapitre 3",
  regimes: ["pacte-preference", "promesse-unilaterale"],
  faits: "En 2021, Marc a consenti à sa voisine Inès un pacte de préférence sur sa maison, par acte sous seing privé, sans fixer de prix ni de durée. En mars 2026, il signe avec Julien, un ami d'Inès parfaitement au courant du pacte, une promesse unilatérale de vente de cette maison au prix de 280 000 euros, avec un délai d'option de deux mois ; l'acte est enregistré quatre jours après. Inès apprend la nouvelle en avril et écrit aussitôt à Marc et à Julien qu'elle entend exercer son droit de préférence. Le 5 mai, Marc, pris de remords, écrit à Julien qu'il « retire sa promesse ». Julien lève l'option le 10 mai.",
  question: "Julien peut-il obtenir la vente ? Quels sont les droits d'Inès ?",
  corrige: {
    qualification: "Marc est promettant d'un pacte de préférence au profit d'Inès, puis promettant d'une promesse unilatérale de vente au profit de Julien, régulièrement enregistrée. Marc s'est rétracté pendant le délai d'option ; Julien a levé l'option dans le délai. Julien connaissait le pacte et, à partir d'avril, l'intention d'Inès de s'en prévaloir.",
    probleme: "La rétractation du promettant pendant le délai d'option empêche-t-elle la formation de la vente ? Le bénéficiaire d'un pacte de préférence violé peut-il obtenir la nullité du contrat conclu avec un tiers ou sa substitution à ce tiers ?",
    majeure: "Selon l'article 1124, alinéa 2, du Code civil, la révocation de la promesse unilatérale pendant le temps laissé au bénéficiaire pour opter n'empêche pas la formation du contrat promis. L'article 1589-2 impose, pour la promesse unilatérale de vente d'un immeuble, un acte authentique ou un acte sous seing privé enregistré dans les dix jours de son acceptation. Selon l'article 1123, alinéa 2, lorsqu'un contrat est conclu avec un tiers en violation d'un pacte de préférence, le bénéficiaire peut obtenir des dommages et intérêts ; si le tiers connaissait l'existence du pacte et l'intention du bénéficiaire de s'en prévaloir, il peut aussi agir en nullité ou demander à être substitué au tiers. La violation du pacte est constituée dès la conclusion d'une promesse de vente au profit d'un tiers (Civ. 3e, 6 déc. 2018, n° 17-23.321).",
    mineure: [
      { condition: "La vente au profit de Julien", corrige: "La promesse porte sur un immeuble et a été enregistrée dans les dix jours : elle est valable (art. 1589-2). La rétractation de Marc le 5 mai intervient pendant le délai d'option : elle n'empêche pas la formation de la vente, qui est conclue par la levée d'option du 10 mai (art. 1124, al. 2). Julien pourrait donc, a priori, obtenir l'exécution forcée." },
      { condition: "La violation du pacte", corrige: "Le pacte est valable même sans prix ni durée. En consentant une promesse de vente à Julien sans proposer d'abord la maison à Inès, Marc a violé le pacte dès la signature de la promesse en mars." },
      { condition: "La connaissance du tiers", corrige: "La double connaissance s'apprécie au moment où le tiers contracte (Ch. mixte, 26 mai 2006), c'est-à-dire ici lors de la signature de la promesse, date à laquelle le pacte est violé (Civ. 3e, 6 déc. 2018). En mars, Julien connaissait l'existence du pacte, mais ignorait encore qu'Inès voulait s'en prévaloir : elle ne l'a fait savoir qu'en avril. La seconde condition de l'article 1123, alinéa 2, n'est donc pas remplie. Julien aurait pu user de l'action interrogatoire (art. 1123, al. 3), mais il n'y était pas obligé." },
      { condition: "Les droits d'Inès", corrige: "Inès ne peut ni faire annuler la vente, ni se substituer à Julien. Elle peut seulement obtenir des dommages et intérêts de Marc, qui a violé le pacte en signant la promesse sans lui proposer d'abord la maison." }
    ],
    conclusion: "La rétractation de Marc est sans effet : la vente à Julien est formée par la levée d'option et Julien peut en obtenir l'exécution forcée. Inès, victime de la violation du pacte, n'obtiendra que des dommages et intérêts contre Marc, faute de pouvoir prouver que Julien connaissait son intention de se prévaloir du pacte au moment de la promesse."
  }
});

OBL.articles.push(
  {"num": "1112", "code": "C. civ.", "theme": "Négociations", "texte": "L'initiative, le déroulement et la rupture des négociations précontractuelles sont libres. Ils doivent impérativement satisfaire aux exigences de la bonne foi.\n\nEn cas de faute commise dans les négociations, la réparation du préjudice qui en résulte ne peut avoir pour objet de compenser ni la perte des avantages attendus du contrat non conclu, ni la perte de chance d'obtenir ces avantages.", "chapitres": [3], "retenir": "Liberté des négociations, bonne foi impérative ; réparation sans les avantages attendus ni la perte de chance."},
  {"num": "1112-1", "code": "C. civ.", "theme": "Négociations", "texte": "Celle des parties qui connaît une information dont l'importance est déterminante pour le consentement de l'autre doit l'en informer dès lors que, légitimement, cette dernière ignore cette information ou fait confiance à son cocontractant.\n\nNéanmoins, ce devoir d'information ne porte pas sur l'estimation de la valeur de la prestation.\n\nOnt une importance déterminante les informations qui ont un lien direct et nécessaire avec le contenu du contrat ou la qualité des parties.\n\nIl incombe à celui qui prétend qu'une information lui était due de prouver que l'autre partie la lui devait, à charge pour cette autre partie de prouver qu'elle l'a fournie.\n\nLes parties ne peuvent ni limiter, ni exclure ce devoir.\n\nOutre la responsabilité de celui qui en était tenu, le manquement à ce devoir d'information peut entraîner l'annulation du contrat dans les conditions prévues aux articles 1130 et suivants.", "chapitres": [3], "retenir": "Devoir précontractuel d'information (voir chapitre 4)."},
  {"num": "1112-2", "code": "C. civ.", "theme": "Négociations", "texte": "Celui qui utilise ou divulgue sans autorisation une information confidentielle obtenue à l'occasion des négociations engage sa responsabilité dans les conditions du droit commun.", "chapitres": [3], "retenir": "Confidentialité des informations reçues pendant les négociations."},
  {"num": "1113", "code": "C. civ.", "theme": "Offre et acceptation", "texte": "Le contrat est formé par la rencontre d'une offre et d'une acceptation par lesquelles les parties manifestent leur volonté de s'engager.\n\nCette volonté peut résulter d'une déclaration ou d'un comportement non équivoque de son auteur.", "chapitres": [3], "retenir": "Le contrat se forme par la rencontre d'une offre et d'une acceptation ; volonté exprimée par déclaration ou comportement non équivoque."},
  {"num": "1114", "code": "C. civ.", "theme": "Offre et acceptation", "texte": "L'offre, faite à personne déterminée ou indéterminée, comprend les éléments essentiels du contrat envisagé et exprime la volonté de son auteur d'être lié en cas d'acceptation. A défaut, il y a seulement invitation à entrer en négociation.", "chapitres": [3], "retenir": "Offre : éléments essentiels + volonté d'être lié ; sinon, invitation à négocier."},
  {"num": "1115", "code": "C. civ.", "theme": "Offre et acceptation", "texte": "Elle peut être librement rétractée tant qu'elle n'est pas parvenue à son destinataire.", "chapitres": [3], "retenir": "Rétractation libre avant réception."},
  {"num": "1116", "code": "C. civ.", "theme": "Offre et acceptation", "texte": "Elle ne peut être rétractée avant l'expiration du délai fixé par son auteur ou, à défaut, l'issue d'un délai raisonnable.\n\nLa rétractation de l'offre en violation de cette interdiction empêche la conclusion du contrat.\n\nElle engage la responsabilité extracontractuelle de son auteur dans les conditions du droit commun sans l'obliger à compenser la perte des avantages attendus du contrat.", "chapitres": [3], "retenir": "Maintien pendant le délai fixé ou raisonnable ; rétractation fautive = pas de contrat + responsabilité extracontractuelle."},
  {"num": "1117", "code": "C. civ.", "theme": "Offre et acceptation", "texte": "L'offre est caduque à l'expiration du délai fixé par son auteur ou, à défaut, à l'issue d'un délai raisonnable.\n\nElle l'est également en cas d'incapacité ou de décès de son auteur, ou de décès de son destinataire.", "chapitres": [3], "retenir": "Caducité : fin du délai, incapacité ou décès de l'offrant, décès du destinataire."},
  {"num": "1118", "code": "C. civ.", "theme": "Offre et acceptation", "texte": "L'acceptation est la manifestation de volonté de son auteur d'être lié dans les termes de l'offre.\n\nTant que l'acceptation n'est pas parvenue à l'offrant, elle peut être librement rétractée, pourvu que la rétractation parvienne à l'offrant avant l'acceptation.\n\nL'acceptation non conforme à l'offre est dépourvue d'effet, sauf à constituer une offre nouvelle.", "chapitres": [3], "retenir": "Acceptation dans les termes de l'offre ; rétractable avant réception ; sinon contre-offre."},
  {"num": "1119", "code": "C. civ.", "theme": "Offre et acceptation", "texte": "Les conditions générales invoquées par une partie n'ont effet à l'égard de l'autre que si elles ont été portées à la connaissance de celle-ci et si elle les a acceptées.\n\nEn cas de discordance entre des conditions générales invoquées par l'une et l'autre des parties, les clauses incompatibles sont sans effet.\n\nEn cas de discordance entre des conditions générales et des conditions particulières, les secondes l'emportent sur les premières.", "chapitres": [3], "retenir": "Conditions générales : connues et acceptées ; clauses incompatibles sans effet ; les particulières l'emportent."},
  {"num": "1120", "code": "C. civ.", "theme": "Offre et acceptation", "texte": "Le silence ne vaut pas acceptation, à moins qu'il n'en résulte autrement de la loi, des usages, des relations d'affaires ou de circonstances particulières.", "chapitres": [3], "retenir": "Le silence ne vaut pas acceptation, sauf loi, usages, relations d'affaires ou circonstances particulières."},
  {"num": "1121", "code": "C. civ.", "theme": "Contrat entre absents", "texte": "Le contrat est conclu dès que l'acceptation parvient à l'offrant. Il est réputé l'être au lieu où l'acceptation est parvenue.", "chapitres": [3], "retenir": "Théorie de la réception : date et lieu de réception de l'acceptation."},
  {"num": "1122", "code": "C. civ.", "theme": "Offre et acceptation", "texte": "La loi ou le contrat peuvent prévoir un délai de réflexion, qui est le délai avant l'expiration duquel le destinataire de l'offre ne peut manifester son acceptation ou un délai de rétractation, qui est le délai avant l'expiration duquel son bénéficiaire peut rétracter son consentement.", "chapitres": [3], "retenir": "Délai de réflexion et délai de rétractation."},
  {"num": "1123", "code": "C. civ.", "theme": "Pacte de préférence", "texte": "Le pacte de préférence est le contrat par lequel une partie s'engage à proposer prioritairement à son bénéficiaire de traiter avec lui pour le cas où elle déciderait de contracter.\n\nLorsqu'un contrat est conclu avec un tiers en violation d'un pacte de préférence, le bénéficiaire peut obtenir la réparation du préjudice subi. Lorsque le tiers connaissait l'existence du pacte et l'intention du bénéficiaire de s'en prévaloir, ce dernier peut également agir en nullité ou demander au juge de le substituer au tiers dans le contrat conclu.\n\nLe tiers peut demander par écrit au bénéficiaire de confirmer dans un délai qu'il fixe et qui doit être raisonnable, l'existence d'un pacte de préférence et s'il entend s'en prévaloir.\n\nL'écrit mentionne qu'à défaut de réponse dans ce délai, le bénéficiaire du pacte ne pourra plus solliciter sa substitution au contrat conclu avec le tiers ou la nullité du contrat.", "chapitres": [3], "retenir": "Définition ; sanctions ; action interrogatoire."},
  {"num": "1124", "code": "C. civ.", "theme": "Promesse unilatérale", "texte": "La promesse unilatérale est le contrat par lequel une partie, le promettant, accorde à l'autre, le bénéficiaire, le droit d'opter pour la conclusion d'un contrat dont les éléments essentiels sont déterminés, et pour la formation duquel ne manque que le consentement du bénéficiaire.\n\nLa révocation de la promesse pendant le temps laissé au bénéficiaire pour opter n'empêche pas la formation du contrat promis.\n\nLe contrat conclu en violation de la promesse unilatérale avec un tiers qui en connaissait l'existence est nul.", "chapitres": [3], "retenir": "Définition ; la révocation n'empêche pas la formation du contrat ; nullité du contrat avec un tiers de mauvaise foi."},
  {"num": "1127-1", "code": "C. civ.", "theme": "Contrat électronique", "texte": "Quiconque propose à titre professionnel, par voie électronique, la fourniture de biens ou la prestation de services, met à disposition les stipulations contractuelles applicables d'une manière qui permette leur conservation et leur reproduction.\n\nL'auteur d'une offre reste engagé par elle tant qu'elle est accessible par voie électronique de son fait.\n\nL'offre énonce en outre :\n\n1° Les différentes étapes à suivre pour conclure le contrat par voie électronique ;\n\n2° Les moyens techniques permettant au destinataire de l'offre, avant la conclusion du contrat, d'identifier d'éventuelles erreurs commises dans la saisie des données et de les corriger ;\n\n3° Les langues proposées pour la conclusion du contrat au nombre desquelles doit figurer la langue française ;\n\n4° Le cas échéant, les modalités d'archivage du contrat par l'auteur de l'offre et les conditions d'accès au contrat archivé ;\n\n5° Les moyens de consulter par voie électronique les règles professionnelles et commerciales auxquelles l'auteur de l'offre entend, le cas échéant, se soumettre.", "chapitres": [3], "retenir": "Offre électronique d'un professionnel : engagement tant qu'elle est accessible ; mentions obligatoires."},
  {"num": "1127-2", "code": "C. civ.", "theme": "Contrat électronique", "texte": "Le contrat n'est valablement conclu que si le destinataire de l'offre a eu la possibilité de vérifier le détail de sa commande et son prix total et de corriger d'éventuelles erreurs avant de confirmer celle-ci pour exprimer son acceptation définitive.\n\nL'auteur de l'offre doit accuser réception sans délai injustifié, par voie électronique, de la commande qui lui a été adressée.\n\nLa commande, la confirmation de l'acceptation de l'offre et l'accusé de réception sont considérés comme reçus lorsque les parties auxquelles ils sont adressés peuvent y avoir accès.", "chapitres": [3], "retenir": "Double clic : vérification puis confirmation ; accusé de réception."},
  {"num": "1582", "code": "C. civ.", "theme": "Vente", "texte": "La vente est une convention par laquelle l'un s'oblige à livrer une chose, et l'autre à la payer.\n\nElle peut être faite par acte authentique ou sous seing privé.", "chapitres": [3], "retenir": "Définition de la vente."},
  {"num": "1583", "code": "C. civ.", "theme": "Vente", "texte": "Elle est parfaite entre les parties, et la propriété est acquise de droit à l'acheteur à l'égard du vendeur, dès qu'on est convenu de la chose et du prix, quoique la chose n'ait pas encore été livrée ni le prix payé.", "chapitres": [3], "retenir": "Vente parfaite dès l'accord sur la chose et le prix."},
  {"num": "1589", "code": "C. civ.", "theme": "Promesse synallagmatique", "texte": "La promesse de vente vaut vente, lorsqu'il y a consentement réciproque des deux parties sur la chose et sur le prix.\n\nSi cette promesse s'applique à des terrains déjà lotis ou à lotir, son acceptation et la convention qui en résultera s'établiront par le paiement d'un acompte sur le prix, quel que soit le nom donné à cet acompte, et par la prise de possession du terrain.\n\nLa date de la convention, même régularisée ultérieurement, sera celle du versement du premier acompte.", "chapitres": [3], "retenir": "La promesse de vente vaut vente en cas de consentement réciproque sur la chose et le prix."},
  {"num": "1589-1", "code": "C. civ.", "theme": "Offre", "texte": "Est frappé de nullité tout engagement unilatéral souscrit en vue de l'acquisition d'un bien ou d'un droit immobilier pour lequel il est exigé ou reçu de celui qui s'engage un versement, quelle qu'en soit la cause et la forme.", "chapitres": [3], "retenir": "Nullité de l'engagement unilatéral d'acquérir un immeuble assorti d'un versement."},
  {"num": "1589-2", "code": "C. civ.", "theme": "Promesse unilatérale", "texte": "Est nulle et de nul effet toute promesse unilatérale de vente afférente à un immeuble, à un droit immobilier, à un fonds de commerce, à un droit à un bail portant sur tout ou partie d'un immeuble ou aux titres des sociétés visées aux articles 728 et 1655 ter du code général des impôts, si elle n'est pas constatée par un acte authentique ou par un acte sous seing privé enregistré dans le délai de dix jours à compter de la date de son acceptation par le bénéficiaire. Il en est de même de toute cession portant sur lesdites promesses qui n'a pas fait l'objet d'un acte authentique ou d'un acte sous seing privé enregistré dans les dix jours de sa date.", "chapitres": [3], "retenir": "Promesse unilatérale de vente d'immeuble ou de fonds de commerce : acte authentique ou enregistrement dans les dix jours, à peine de nullité."},
  {"num": "1240", "code": "C. civ.", "theme": "Responsabilité", "texte": "Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.", "chapitres": [3], "retenir": "Fondement de la responsabilité pour faute dans les négociations."},
  {"num": "1738", "code": "C. civ.", "theme": "Silence", "texte": "Si, à l'expiration des baux écrits, le preneur reste et est laissé en possession, il s'opère un nouveau bail dont l'effet est réglé par l'article relatif aux locations faites sans écrit.", "chapitres": [3], "retenir": "Exemple légal : le silence du bailleur qui laisse le preneur en possession fait naître un nouveau bail."}
);
