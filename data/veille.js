/* =========================================================
   VEILLE TECHNOLOGIQUE — ARTICLES

   Sujet suivi : HNDL (Harvest Now, Decrypt Later)
   et transition vers la cryptographie post-quantique.

   AJOUTER UN ARTICLE
   Copier un bloc { ... } ci-dessous et changer :
   - id      : identifiant unique, sans espace ni accent
   - date    : AAAA-MM-JJ (sert à trier, du plus récent au plus ancien)
   - periode : texte affiché à la place de la date (ex. "Novembre 2026")
   - contenu : la liste des blocs de l'article

   BLOCS DISPONIBLES DANS "contenu"
   { type: "chapo", texte: "..." }          introduction mise en avant
   { type: "titre", texte: "..." }          intertitre
   { type: "paragraphe", texte: "..." }     paragraphe
   { type: "liste", items: ["...", "..."] } liste à puces
   { type: "liste", ordonnee: true, items: [...] }   liste numérotée
   { type: "formule", texte: "...", lignes: ["...", "..."] }   encadré de formule
   { type: "encadre", titre: "...", texte: "..." }   encadré « à retenir »
   { type: "chronologie", items: [{ date: "...", texte: "..." }] }
   { type: "sources", items: [{ texte: "...", url: "https://..." }] }

   Dans tous les textes, **mot** s'affiche en gras.
========================================================= */

window.ARTICLES_VEILLE = [

  /* =====================================================
     ARTICLE N° 1 — SEPTEMBRE 2026
  ===================================================== */
  {
    id: "hndl-01-introduction",
    titre: "HNDL : pourquoi nos données chiffrées sont déjà menacées",
    info: "Article n° 1 · Choix du sujet et définition",
    date: "2026-09-28",
    periode: "Septembre 2026",
    icone: "rss",

    contenu: [
      {
        type: "chapo",
        texte: "Premier article de ma veille technologique : pourquoi j'ai choisi de suivre la menace « Harvest Now, Decrypt Later », et en quoi elle consiste."
      },

      { type: "titre", texte: "Le déclic" },
      {
        type: "paragraphe",
        texte: "Tout est parti de la vidéo YouTube « La Menace Quantique ». Elle explique qu'une attaque informatique peut commencer aujourd'hui et ne produire ses effets que dans plusieurs années. En creusant le sujet, j'ai découvert que cette menace porte un nom, qu'elle mobilise déjà les agences de cybersécurité du monde entier, et qu'elle concerne directement le métier d'administrateur systèmes et réseaux."
      },

      { type: "titre", texte: "Le constat" },
      {
        type: "paragraphe",
        texte: "Chaque jour, nos connexions HTTPS, nos VPN et nos sessions SSH sont protégées par des algorithmes comme **RSA** ou les **courbes elliptiques** (ECDH, ECDSA). Ils reposent sur des problèmes mathématiques que les ordinateurs actuels ne savent pas résoudre en un temps raisonnable."
      },
      {
        type: "paragraphe",
        texte: "Un ordinateur quantique suffisamment puissant, en exécutant l'**algorithme de Shor**, pourrait les résoudre. Cette machine n'existe pas encore. Pourtant, la menace est déjà réelle."
      },

      { type: "titre", texte: "Qu'est-ce que le HNDL ?" },
      {
        type: "paragraphe",
        texte: "**Harvest Now, Decrypt Later** signifie « récolter maintenant, déchiffrer plus tard ». Un attaquant, souvent un acteur étatique, intercepte et stocke aujourd'hui des communications chiffrées qu'il ne peut pas encore lire. Il attend simplement le jour où un ordinateur quantique le permettra."
      },
      {
        type: "paragraphe",
        texte: "Ce qui compte, c'est donc la **durée de vie des données**. Un code de validation bancaire ne vaut plus rien après quelques minutes. En revanche, un dossier médical, un secret industriel ou une information diplomatique doivent rester confidentiels pendant des décennies."
      },

      { type: "titre", texte: "Pourquoi agir dès maintenant ?" },
      {
        type: "formule",
        texte: "Le chercheur Michele Mosca résume le problème par une inégalité : si x + y > z, nous sommes déjà en retard.",
        lignes: [
          "**x** : la durée pendant laquelle une donnée doit rester confidentielle",
          "**y** : le temps nécessaire pour migrer nos systèmes",
          "**z** : le temps restant avant un ordinateur quantique capable de casser le chiffrement"
        ]
      },
      {
        type: "paragraphe",
        texte: "Personne ne connaît la valeur exacte de z. En revanche, on sait qu'une migration cryptographique prend des années. Pour les données à longue durée de vie, attendre est donc déjà un risque."
      },

      { type: "titre", texte: "Ce que le quantique casse, et ce qu'il ne casse pas" },
      {
        type: "liste",
        items: [
          "**Menacée** : la cryptographie asymétrique (RSA, ECDH, ECDSA), qui sert à l'échange de clés et aux signatures. C'est elle que vise le HNDL.",
          "**Peu affectée** : la cryptographie symétrique (AES) et les fonctions de hachage. L'algorithme de Grover réduit seulement leur marge de sécurité, et AES-256 reste solide."
        ]
      },

      { type: "titre", texte: "Pourquoi ce sujet concerne un technicien SISR" },
      {
        type: "paragraphe",
        texte: "La migration vers des algorithmes résistants passera par les administrateurs systèmes et réseaux, qui devront :"
      },
      {
        type: "liste",
        items: [
          "**inventorier** les usages cryptographiques : certificats, VPN, SSH, applications ;",
          "**mettre à jour** les serveurs, les bibliothèques et les équipements ;",
          "**tester la compatibilité** des nouveaux algorithmes avec l'existant ;",
          "**rendre les systèmes « crypto-agiles »**, c'est-à-dire capables de changer d'algorithme sans tout reconstruire."
        ]
      },

      { type: "titre", texte: "Ce que je vais suivre dans cette veille" },
      {
        type: "liste",
        ordonnee: true,
        items: [
          "l'évolution des standards et des calendriers : NIST, ANSSI, Union européenne ;",
          "le déploiement réel : navigateurs, SSH, VPN, certificats ;",
          "les avancées du matériel quantique, analysées sans sensationnalisme ;",
          "mes propres tests en laboratoire : connexions post-quantiques, configuration d'OpenSSL et de serveurs web."
        ]
      },

      {
        type: "sources",
        items: [
          { texte: "Vidéo « La Menace Quantique », YouTube", url: "https://www.youtube.com/watch?v=aKc8zS7A_-8" },
          { texte: "M. Mosca, « Cybersecurity in an Era with Quantum Computers: Will We Be Ready? », IEEE Security & Privacy, 2018" }
        ]
      }
    ]
  },


  /* =====================================================
     ARTICLE N° 2 — OCTOBRE 2026
  ===================================================== */
  {
    id: "hndl-02-mesures",
    titre: "Post-quantique : les mesures déjà en place",
    info: "Article n° 2 · Standards, calendriers et déploiement",
    date: "2026-10-28",
    periode: "Octobre 2026",
    icone: "rss",

    contenu: [
      {
        type: "chapo",
        texte: "Après avoir défini la menace, ce deuxième article fait le point sur la réponse : de nouveaux algorithmes standardisés, des échéances officielles et un déploiement déjà massif."
      },

      { type: "titre", texte: "1. De nouveaux algorithmes standardisés" },
      {
        type: "paragraphe",
        texte: "La réponse au HNDL s'appelle la **cryptographie post-quantique** : des algorithmes qui fonctionnent sur nos ordinateurs actuels, mais qui résistent aux attaques d'un ordinateur quantique. Après huit ans de compétition internationale, le NIST américain a publié ses premiers standards :"
      },
      {
        type: "liste",
        items: [
          "**FIPS 203 (ML-KEM)**, août 2024 : l'échange de clés. C'est lui qui protège contre le HNDL.",
          "**FIPS 204 (ML-DSA)** et **FIPS 205 (SLH-DSA)**, août 2024 : les signatures numériques.",
          "**HQC**, retenu en mars 2025 : un algorithme de secours, fondé sur des mathématiques différentes de ML-KEM."
        ]
      },
      {
        type: "paragraphe",
        texte: "Ces algorithmes sont récents. La plupart des acteurs les déploient donc en mode **hybride** : on combine un algorithme classique éprouvé (X25519) et un algorithme post-quantique (ML-KEM). Pour casser la connexion, il faudrait casser les deux. C'est l'approche recommandée par l'ANSSI."
      },

      { type: "titre", texte: "2. Des calendriers officiels" },
      {
        type: "chronologie",
        items: [
          { date: "Juin 2025", texte: "**Union européenne** : une feuille de route coordonnée demande aux États membres de lancer la transition d'ici fin 2026 et de protéger les systèmes à haut risque d'ici fin 2030." },
          { date: "22 juin 2026", texte: "**États-Unis** : le décret présidentiel 14412 impose aux administrations fédérales un échange de clés post-quantique d'ici fin 2030, et des signatures post-quantiques d'ici fin 2031." },
          { date: "3 septembre 2026", texte: "**G7** : sous la présidence française, l'ANSSI mène la publication de « Preparing for the Post-Quantum Era: A Call to Action », avec notamment la CISA, le NCSC britannique et le BSI allemand. Le message : la migration ne peut plus être traitée comme un problème d'avenir." }
        ]
      },
      {
        type: "encadre",
        titre: "À retenir",
        texte: "Europe, États-Unis, G7 : tous convergent vers **2030** comme horizon pour protéger les systèmes les plus sensibles. Les agences demandent aussi de commencer par un **inventaire cryptographique** (CBOM), pour savoir où se trouve chaque algorithme à remplacer."
      },

      { type: "titre", texte: "3. Un déploiement déjà massif" },
      {
        type: "liste",
        items: [
          "**Navigateurs et web** : Chrome, Firefox et Edge négocient un échange de clés hybride X25519MLKEM768. Selon Cloudflare, plus des deux tiers du trafic des navigateurs vers son réseau sont déjà protégés de cette manière.",
          "**SSH** : OpenSSH 10 utilise par défaut un échange de clés post-quantique hybride.",
          "**Bibliothèques** : OpenSSL 3.5 prend en charge ML-KEM, ML-DSA et SLH-DSA, ce qui ouvre la voie aux serveurs web et aux VPN.",
          "**Messageries** : Signal et iMessage ont adopté des protocoles post-quantiques."
        ]
      },
      {
        type: "paragraphe",
        texte: "Autrement dit, une partie de nos connexions quotidiennes est déjà protégée contre le HNDL, le plus souvent sans que l'utilisateur le sache."
      },

      { type: "titre", texte: "4. L'actualité du mois : les certificats" },
      {
        type: "paragraphe",
        texte: "Le 29 septembre, Cloudflare a annoncé vouloir devenir une autorité de certification publique, avec un nouveau format : les **Merkle Tree Certificates**. Leur but est de rendre utilisables les signatures post-quantiques, beaucoup plus volumineuses que les signatures actuelles. Les premiers certificats sont attendus début 2027."
      },

      { type: "titre", texte: "Mon analyse" },
      {
        type: "paragraphe",
        texte: "Le chantier avance en deux temps. L'**échange de clés**, qui protège contre le HNDL, est déjà largement déployé sur le web. Les **signatures et les certificats**, qui servent à l'authentification, sont le prochain défi : les algorithmes sont plus lourds, et toute la chaîne des autorités de certification doit évoluer."
      },
      {
        type: "paragraphe",
        texte: "Pour un administrateur, cela confirme les priorités : savoir quels systèmes utilisent quelle cryptographie, mettre à jour les composants qui le permettent déjà, comme OpenSSH et OpenSSL, et préparer des infrastructures capables de changer d'algorithme."
      },

      { type: "titre", texte: "Prochain article" },
      {
        type: "paragraphe",
        texte: "En novembre, je passe à la pratique : vérifier qu'une connexion web utilise bien un échange de clés post-quantique, puis mettre en place une connexion SSH post-quantique entre deux machines virtuelles."
      },

      {
        type: "sources",
        items: [
          { texte: "NIST, FIPS 203 : ML-KEM (août 2024)", url: "https://csrc.nist.gov/pubs/fips/203/final" },
          { texte: "NIST, FIPS 204 : ML-DSA (août 2024)", url: "https://csrc.nist.gov/pubs/fips/204/final" },
          { texte: "NIST, FIPS 205 : SLH-DSA (août 2024)", url: "https://csrc.nist.gov/pubs/fips/205/final" },
          { texte: "Commission européenne, feuille de route coordonnée pour la transition post-quantique (juin 2025)" },
          { texte: "Cloudflare, article sur le décret présidentiel américain (juin 2026)", url: "https://blog.cloudflare.com/post-quantum-eo-2026" },
          { texte: "ANSSI et partenaires du G7, « Preparing for the Post-Quantum Era: A Call to Action » (septembre 2026)", url: "https://cyber.gouv.fr/en/publications/jointly-led-international-publications/preparing-for-the-post-quantum-era-a-call-to-action/" },
          { texte: "Notes de version d'OpenSSH", url: "https://www.openssh.com/releasenotes.html" }
        ]
      }
    ]
  }
];
