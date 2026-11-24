
/* =========================================================
   PORTFOLIO REYEN FOURATI
   NAVIGATION SANS RECHARGEMENT

   - Trois catégories déroulantes pour Projets
   - Expérience professionnelle indépendante
   - Accès depuis le bouton vert CA
   - Navigation par la barre latérale
   - Affichage des contenus dans la colonne droite
========================================================= */


/* =========================================================
   1. DONNÉES DES RUBRIQUES

   Pour une future miniature :
   miniature: "assets/images/chibi/nom.png"

   Pour un document :
   image: "assets/images/formations/f1.webp"
========================================================= */

const rubriques = {

  /* PRÉSENTATION */
  presentation: {
    titre: "Présentation",
    sousTitre: "Découvrir mon profil et mon parcours",
    categorie: "PRÉSENTATION",

    sujets: [
      {
        id: "profil",
        titre: "Mon profil",
        info: "À propos de moi",
        icone: "user",

        texte: [
          "Je suis Reyen Fourati, étudiant en BTS Services informatiques aux organisations, option SISR.",
          "À travers ce portfolio, je présente mon parcours, mes projets, mes compétences et mes engagements."
        ]
      },

      {
        id: "parcours",
        titre: "Mon parcours",
        info: "Études et expériences",
        icone: "graduation",

        texte: [
          "Mon parcours associe des expériences professionnelles et une formation en informatique.",
          "Cette rubrique sera enrichie avec les étapes de mon parcours."
        ]
      },

      {
        id: "objectifs",
        titre: "Mes objectifs",
        info: "Mon projet professionnel",
        icone: "cpu",

        texte: [
          "Je souhaite développer mes compétences en systèmes, réseaux et cybersécurité.",
          "Mes objectifs professionnels détaillés seront ajoutés ici."
        ]
      }
    ]
  },


  /* =====================================================
     FORMATION
  ===================================================== */

  formation: {
    titre: "Formation",
    sousTitre: "Diplômes, attestations et certifications",
    categorie: "FORMATION",

    /* Filtres affichés au-dessus de la grille (dans cet ordre).
       Un filtre n'apparaît que si au moins un document l'utilise. */
    filtres: [
      { id: "cybersecurite", nom: "Cybersécurité" },
      { id: "programmation", nom: "Programmation" },
      { id: "intelligence-artificielle", nom: "Intelligence artificielle" },
      { id: "systemes-reseaux", nom: "Systèmes & réseaux" },
      { id: "autre", nom: "Autre" },
      { id: "attestation", nom: "Attestation", type: true },
      { id: "certification", nom: "Certification", type: true },
      { id: "diplome", nom: "Diplôme", type: true }
    ],

    /* Triés automatiquement du plus récent au plus ancien (date).
       Documents : assets/images/formations/f1.webp à f10.webp */
    sujets: [
      {
        id: "google-linux-sql",
        filtres: ["cybersecurite", "systemes-reseaux", "programmation", "attestation"],
        titre: "Les outils du métier : Linux et SQL",
        info: "Google / Coursera · Attestation",
        date: "2026-06-27",
        icone: "graduation",
        image: "assets/images/formations/f10.webp",

        texte: [
          "Cours en ligne « Tools of the Trade: Linux and SQL », autorisé par Google et proposé par Coursera.",
          "Domaines : cybersécurité, systèmes et réseaux, programmation."
        ],

        lien: {
          texte: "Vérifier l'attestation sur Coursera",
          url: "https://coursera.org/verify/GYX2S9FRCUXJ"
        }
      },

      {
        id: "crf-sante-mentale",
        filtres: ["autre", "attestation"],
        titre: "Tous Acteurs de la Santé Mentale",
        info: "Croix-Rouge française · Attestation",
        date: "2026-06-14",
        icone: "graduation",
        image: "assets/images/formations/f8.webp",

        texte: [
          "Session de formation suivie avec succès le 10 mai 2026 à Paris, organisée par la Croix-Rouge française."
        ]
      },

      {
        id: "google-reseaux",
        filtres: ["cybersecurite", "systemes-reseaux", "attestation"],
        titre: "Connecter et protéger : Réseaux et sécurité des réseaux",
        info: "Google / Coursera · Attestation",
        date: "2026-05-12",
        icone: "graduation",
        image: "assets/images/formations/f9.webp",

        texte: [
          "Cours en ligne « Connect and Protect: Networks and Network Security », autorisé par Google et proposé par Coursera.",
          "Domaines : cybersécurité, systèmes et réseaux."
        ],

        lien: {
          texte: "Vérifier l'attestation sur Coursera",
          url: "https://coursera.org/verify/GHTAXM5IAFWO"
        }
      },

      {
        id: "psc",
        filtres: ["autre", "certification"],
        titre: "Citoyen sauveteur - PSC",
        info: "Croix-Rouge française · Certification",
        date: "2026-04-22",
        icone: "graduation",
        image: "assets/images/formations/f7.webp",

        texte: [
          "Certificat de compétences de citoyen sauveteur (PSC), délivré par la Croix-Rouge française à Sannois."
        ]
      },

      {
        id: "google-risques",
        filtres: ["cybersecurite", "attestation"],
        titre: "Jouer la carte de la sécurité : Gérer les risques de sécurité",
        info: "Google / Coursera · Attestation",
        date: "2026-04-13",
        icone: "graduation",
        image: "assets/images/formations/f6.webp",

        texte: [
          "Cours en ligne « Play It Safe: Manage Security Risks », autorisé par Google et proposé par Coursera."
        ],

        lien: {
          texte: "Vérifier l'attestation sur Coursera",
          url: "https://coursera.org/verify/HRNUM7B6BDTB"
        }
      },

      {
        id: "cisco-packet-tracer",
        filtres: ["systemes-reseaux", "attestation"],
        titre: "Premiers pas avec Cisco Packet Tracer",
        info: "Cisco Networking Academy · Attestation",
        date: "2026-04-04",
        icone: "graduation",
        image: "assets/images/formations/f5.webp",

        texte: [
          "Cours « Premiers pas avec Cisco Packet Tracer », proposé dans le cadre du programme Cisco Networking Academy."
        ]
      },

      {
        id: "google-cyber",
        filtres: ["cybersecurite", "attestation"],
        titre: "Fondamentaux de la cybersécurité",
        info: "Google / Coursera · Attestation",
        date: "2026-03-31",
        icone: "graduation",
        image: "assets/images/formations/f4.webp",

        texte: [
          "Formation en ligne « Foundations of Cybersecurity », proposée par Google sur Coursera."
        ]
      },

      {
        id: "jdc",
        filtres: ["autre", "certification"],
        titre: "Journée défense et citoyenneté",
        info: "Ministère des Armées · Certificat",
        date: "2023-11-06",
        icone: "graduation",
        image: "assets/images/formations/f3.webp",

        texte: [
          "Certificat individuel de participation à la journée défense et citoyenneté (JDC)."
        ]
      },

      {
        id: "bac",
        filtres: ["autre", "diplome"],
        titre: "Baccalauréat STMG",
        info: "Spécialité mercatique · Diplôme",
        date: "2023-07-18",
        icone: "graduation",
        image: "assets/images/formations/f2.webp",

        texte: [
          "Baccalauréat technologique STMG, enseignement spécifique mercatique, session 2023."
        ]
      },

      {
        id: "brevet",
        filtres: ["autre", "diplome"],
        titre: "Diplôme national du brevet",
        info: "Série générale · Diplôme",
        date: "2019-07-10",
        icone: "graduation",
        image: "assets/images/formations/f1.webp",

        texte: [
          "Diplôme national du brevet, série générale, session 2019."
        ]
      }
    ]
  },


  /* =====================================================
     COMPÉTENCES
  ===================================================== */

  competences: {
    titre: "Compétences",
    sousTitre: "Référentiel du BTS SIO et domaines techniques",
    categorie: "COMPÉTENCES",

    /* Les 6 compétences officielles (bloc 1 du référentiel, épreuve E5),
       chacune reliée à ses preuves, puis les domaines techniques SISR. */
    sujets: [
      {
        id: "b1-1-patrimoine",
        titre: "Gérer le patrimoine informatique",
        info: "Compétence B1.1 · Référentiel BTS SIO",
        icone: "document",

        contenu: [
          { type: "chapo", texte: "Connaître, organiser et sécuriser les ressources numériques d'une organisation : comptes, droits d'accès, matériels et services." },
          { type: "titre", texte: "Ce que recouvre la compétence" },
          { type: "liste", items: [
            "Recenser et identifier les ressources numériques.",
            "Exploiter des référentiels, normes et standards.",
            "Mettre en place et vérifier les niveaux d'habilitation associés à un service.",
            "Vérifier les conditions de la continuité d'un service informatique.",
            "Gérer des sauvegardes.",
            "Vérifier le respect des règles d'utilisation des ressources numériques."
          ] },
          { type: "titre", texte: "Mes preuves" },
          { type: "liste", items: [
            "**Projet GLPI, Lab 1** : organisation de l'annuaire Active Directory (OU, compte de service dédié, utilisateurs) et import dans l'outil de gestion de parc GLPI.",
            "**Projet GLPI, Lab 2** : mise en place et vérification des niveaux d'habilitation selon le principe du moindre privilège."
          ] }
        ]
      },

      {
        id: "b1-2-incidents",
        titre: "Répondre aux incidents et aux demandes d'assistance",
        info: "Compétence B1.2 · Référentiel BTS SIO",
        icone: "document",

        contenu: [
          { type: "chapo", texte: "Prendre en charge les demandes des utilisateurs, diagnostiquer les incidents et les résoudre en assurant le suivi et la traçabilité." },
          { type: "titre", texte: "Ce que recouvre la compétence" },
          { type: "liste", items: [
            "Collecter, suivre et orienter des demandes.",
            "Traiter des demandes concernant les services réseau et système.",
            "Traiter des demandes concernant les applications."
          ] },
          { type: "titre", texte: "Mes preuves" },
          { type: "liste", items: [
            "**Projet GLPI, Lab 3** : cycle de vie complet d'un ticket d'incident, de la création à la clôture, avec diagnostic réseau (ipconfig, nslookup, Test-NetConnection, net use).",
            "**Alternance au Crédit Agricole Life Insurance** : mission Support."
          ] }
        ]
      },

      {
        id: "b1-3-presence",
        titre: "Développer la présence en ligne de l'organisation",
        info: "Compétence B1.3 · Référentiel BTS SIO",
        icone: "document",

        contenu: [
          { type: "chapo", texte: "Participer à l'image numérique d'une organisation : site web, référencement et respect du cadre juridique." },
          { type: "titre", texte: "Ce que recouvre la compétence" },
          { type: "liste", items: [
            "Participer à la valorisation de l'image de l'organisation sur les médias numériques.",
            "Référencer les services en ligne de l'organisation et mesurer leur visibilité.",
            "Participer à l'évolution d'un site web exploitant les données de l'organisation."
          ] },
          { type: "titre", texte: "Mes preuves" },
          { type: "liste", items: [
            "**Ce portfolio** : conception et développement en HTML, CSS et JavaScript natifs, publié sur mon propre nom de domaine."
          ] }
        ]
      },

      {
        id: "b1-4-projet",
        titre: "Travailler en mode projet",
        info: "Compétence B1.4 · Référentiel BTS SIO",
        icone: "document",

        contenu: [
          { type: "chapo", texte: "Analyser les objectifs d'un projet, planifier les activités et suivre leur avancement." },
          { type: "titre", texte: "Ce que recouvre la compétence" },
          { type: "liste", items: [
            "Analyser les objectifs et les modalités d'organisation d'un projet.",
            "Planifier les activités.",
            "Évaluer les indicateurs de suivi d'un projet et analyser les écarts."
          ] },
          { type: "titre", texte: "Mes preuves" },
          { type: "liste", items: [
            "**Projet GLPI** : trois labs menés par étapes successives, chacun s'appuyant sur le précédent (annuaire, puis habilitations, puis traitement des tickets).",
            "**Adaptation de l'environnement** : reconstruction complète du laboratoire sous VMware Workstation lorsque l'infrastructure de l'école n'était pas accessible."
          ] }
        ]
      },

      {
        id: "b1-5-service",
        titre: "Mettre à disposition des utilisateurs un service informatique",
        info: "Compétence B1.5 · Référentiel BTS SIO",
        icone: "document",

        contenu: [
          { type: "chapo", texte: "Déployer un service, le tester avant sa mise en production et accompagner les utilisateurs." },
          { type: "titre", texte: "Ce que recouvre la compétence" },
          { type: "liste", items: [
            "Réaliser les tests d'intégration et d'acceptation d'un service.",
            "Déployer un service.",
            "Accompagner les utilisateurs dans la mise en place d'un service."
          ] },
          { type: "titre", texte: "Mes preuves" },
          { type: "liste", items: [
            "**Projet GLPI** : déploiement d'un serveur GLPI sous Debian (Apache, MariaDB, PHP) relié à Active Directory par LDAP.",
            "**Tests d'acceptation** : vérification, profil par profil, de ce que chaque utilisateur peut faire et de ce qui lui est refusé."
          ] }
        ]
      },

      {
        id: "b1-6-developpement",
        titre: "Organiser son développement professionnel",
        info: "Compétence B1.6 · Référentiel BTS SIO",
        icone: "document",

        contenu: [
          { type: "chapo", texte: "Se former en continu, assurer une veille technologique et construire son identité professionnelle." },
          { type: "titre", texte: "Ce que recouvre la compétence" },
          { type: "liste", items: [
            "Mettre en place son environnement d'apprentissage personnel.",
            "Mettre en œuvre des outils et stratégies de veille informationnelle.",
            "Gérer son identité professionnelle.",
            "Développer son projet professionnel."
          ] },
          { type: "titre", texte: "Mes preuves" },
          { type: "liste", items: [
            "**Veille technologique** : un article par mois sur le HNDL et la cryptographie post-quantique.",
            "**Formations complémentaires** : quatre cours Google en cybersécurité (Coursera) et Cisco Packet Tracer.",
            "**Identité professionnelle** : ce portfolio, publié sur mon propre nom de domaine."
          ] }
        ]
      },

      {
        id: "reseaux",
        titre: "Réseaux",
        info: "Domaine technique · SISR",
        icone: "cpu",

        contenu: [
          { type: "chapo", texte: "Protocoles, services et outils réseau utilisés dans mes travaux." },
          { type: "liste", items: [
            "**Adressage IP** : configuration statique, masques, passerelles.",
            "**DNS** : enregistrements A, CNAME et SRV, résolution dans un domaine Active Directory.",
            "**Services** : partage de fichiers SMB, annuaire LDAP (port 389).",
            "**Diagnostic** : ipconfig, ping, nslookup, net view, net use, Test-NetConnection.",
            "**Simulation** : Cisco Packet Tracer."
          ] }
        ]
      },

      {
        id: "systemes",
        titre: "Systèmes",
        info: "Domaine technique · SISR",
        icone: "cpu",

        contenu: [
          { type: "chapo", texte: "Systèmes et services administrés dans mes laboratoires." },
          { type: "liste", items: [
            "**Windows Server 2022** : Active Directory (AD DS), DNS, unités d'organisation et comptes.",
            "**Debian 13** : serveur web Apache, base de données MariaDB, PHP.",
            "**GLPI 11** : gestion de parc et de l'assistance, profils et habilitations.",
            "**Virtualisation** : VMware Workstation Pro.",
            "**Scripts** : PowerShell."
          ] }
        ]
      },

      {
        id: "securite",
        titre: "Cybersécurité",
        info: "Domaine technique · SISR",
        icone: "cpu",

        contenu: [
          { type: "chapo", texte: "Bonnes pratiques de sécurité appliquées et sujets suivis." },
          { type: "liste", items: [
            "**Moindre privilège** : profils limités au strict nécessaire, compte de service dédié.",
            "**Contrôle des accès** : vérification des accès refusés pour chaque profil.",
            "**Traçabilité** : historique complet des actions dans GLPI.",
            "**Veille** : menace HNDL et cryptographie post-quantique.",
            "**Formations** : parcours Google Cybersécurité sur Coursera."
          ] }
        ]
      }
    ]
  },


  /* =====================================================
     PROJETS : TROIS CATÉGORIES

     Chaque catégorie pourra contenir ses propres projets
     dans un tableau "projets".

     Exemple :

     projets: [
       {
         id: "projet-exemple",
         titre: "Mon projet",
         info: "Description",
         icone: "cpu",
         texte: ["Détails de mon projet."]
       }
     ]
  ===================================================== */

  projets: {
    titre: "Projets",
    sousTitre: "Mes projets classés par domaine de réalisation",
    categorie: "PROJETS",

    sujets: [
      {
        id: "academiques",
        titre: "Projets académique",
        info: "Réalisations dans le cadre du BTS SIO",
        icone: "folder",

        projets: [
          {
            id: "glpi",
            titre: "GLPI : gestion des utilisateurs et du support",
            info: "3 labs · Active Directory, LDAP, ITIL",
            date: "2026-11-21",
            icone: "folder",

            contenu: [
              { type: "chapo", texte: "Mise en place d'un outil de gestion de parc et de support (GLPI) relié à l'annuaire Active Directory, puis organisation des accès par profil et traitement complet d'un ticket d'incident." },

              { type: "titre", texte: "Environnement" },
              { type: "paragraphe", texte: "L'hyperviseur Proxmox de l'école n'étant joignable que depuis le réseau interne, j'ai reconstruit tout le laboratoire sur mon poste avec **VMware Workstation Pro**, en installant et configurant moi-même les deux serveurs." },
              { type: "liste", items: [
                "**SRV-AD** : Windows Server 2022, contrôleur de domaine AD DS et DNS du domaine ief2i.local (192.168.112.10).",
                "**GLPI-DEBIAN** : Debian 13, GLPI 11.0.13 avec Apache, MariaDB et PHP 8.4 (192.168.112.20)."
              ] },

              { type: "titre", texte: "Lab 1 · Synchronisation LDAP entre Active Directory et GLPI" },
              { type: "paragraphe", texte: "Création des OU **synch** et **glpi-users**, d'un compte de service dédié **glpisync** (droits minimaux, mot de passe sans expiration) et des utilisateurs de test. Déclaration de l'annuaire dans GLPI (BaseDN limité à glpi-users, bind authentifié, identifiant samaccountname, synchronisation par objectGUID), import des comptes puis vérification qu'une modification faite dans l'AD remonte bien dans GLPI." },

              { type: "titre", texte: "Lab 2 · Profils et habilitations" },
              { type: "paragraphe", texte: "Application du **principe du moindre privilège** : Super-Admin pour le responsable informatique, Technicien pour le support, Self-Service pour les collaborateurs. Chaque profil a été testé, y compris les accès refusés." },

              { type: "titre", texte: "Lab 3 · Cycle de vie d'un ticket d'incident" },
              { type: "paragraphe", texte: "Scénario : un collaborateur n'accède plus au lecteur réseau Z: (\\\\SRV-FICHIERS\\COMMUN). Pour obtenir un vrai diagnostic, j'ai simulé le serveur de fichiers (partage SMB et alias DNS CNAME)." },
              { type: "liste", ordonnee: true, items: [
                "Création du ticket par le demandeur (Self-Service).",
                "Qualification (urgence × impact = priorité) et affectation par le responsable.",
                "Diagnostic par le technicien : ipconfig, ping, nslookup, net view, Test-NetConnection sur le port 445, net use.",
                "Intervention tracée : suppression de l'ancienne session SMB et reconnexion du lecteur.",
                "Solution proposée, approuvée par le demandeur, puis contrôle final du ticket clos."
              ] },

              { type: "titre", texte: "Compétences mobilisées" },
              { type: "liste", items: [
                "Administration d'un annuaire Active Directory (OU, comptes de service, utilisateurs).",
                "Interconnexion LDAP entre un service Linux et un domaine Windows.",
                "Gestion des droits et sécurisation des accès (moindre privilège).",
                "Traitement des incidents selon une démarche ITIL et diagnostic réseau.",
                "Documentation technique et traçabilité."
              ] },

              { type: "documents", titre: "Comptes rendus", items: [
                { titre: "Lab 1 · Synchronisation LDAP entre Active Directory et GLPI", info: "PDF · 18 pages", url: "assets/documents/projets/glpi/Rapport_Lab_1.pdf" },
                { titre: "Lab 2 · Gestion des profils et des habilitations", info: "PDF · 24 pages", url: "assets/documents/projets/glpi/Rapport_Lab_2.pdf" },
                { titre: "Lab 3 · Workflow des tickets d'assistance", info: "PDF · 19 pages", url: "assets/documents/projets/glpi/Rapport_Lab_3.pdf" }
              ] }
            ]
          }
        ],

        texte: [
          "Retrouvez ici les projets réalisés au cours de ma formation BTS SIO SISR.",
          "Chaque projet pourra présenter son contexte, ses objectifs, les technologies utilisées et les résultats obtenus."
        ]
      },

      {
        id: "professionnel",
        titre: "Projet professionnel",
        info: "Projets informatiques réalisés en entreprise",
        icone: "briefcase",

        projets: [],

        texte: [
          "Cette catégorie est consacrée aux projets techniques réalisés dans un contexte professionnel.",
          "Les missions et expériences de travail sont présentées séparément dans l'onglet Expérience professionnelle."
        ]
      },

      {
        id: "personnel",
        titre: "Projet personnel",
        info: "Créations et expérimentations personnelles",
        icone: "cpu",

        projets: [],

        texte: [
          "Cette catégorie regroupe mes réalisations développées à titre personnel.",
          "Les fiches des projets pourront être enrichies de captures d'écran, d'explications techniques et de liens."
        ]
      }
    ]
  },


  /* =====================================================
     EXPÉRIENCE PROFESSIONNELLE

     Onglet indépendant de Projets.
  ===================================================== */

  experience: {
    titre: "Expérience professionnelle",
    sousTitre: "Mon parcours, mes missions et mes compétences en entreprise",
    categorie: "EXPÉRIENCE PROFESSIONNELLE",

    sujets: [
      {
        id: "cali",
        titre: "Crédit Agricole Life Insurance",
        info: "Alternance · IT & Organisation",
        icone: "briefcase",

        texte: [
          "Alternance au sein de Crédit Agricole Life Insurance, au Luxembourg, dans le domaine IT & Organisation.",
          "Les missions réalisées et les compétences mobilisées seront détaillées ici."
        ],

        contenu: [
          { type: "liste", items: ["Support", "ESB", "Gaia"] }
        ]
      }
    ]
  },


  /* =====================================================
     VEILLE TECHNOLOGIQUE
  ===================================================== */

  veille: {
    titre: "Veille technologique",
    sousTitre: "HNDL et cryptographie post-quantique · un article par mois",
    categorie: "VEILLE TECHNOLOGIQUE",

    /* Les articles sont dans data/veille.js */
    sujets: window.ARTICLES_VEILLE || []
  },


  /* =====================================================
     ENGAGEMENT ASSOCIATIF
  ===================================================== */

  engagement: {
    titre: "Engagement associatif",
    sousTitre: "Épreuve facultative EF4 — Engagement étudiant",
    categorie: "ENGAGEMENT ASSOCIATIF · EF4",

    sujets: [
      {
        id: "intro",
        titre: "Présentation de l'EF4",
        info: "Épreuve facultative · BTS SIO",
        icone: "heart",

        texte: [
          "Cette rubrique présente mon engagement bénévole à la Croix-Rouge française dans le cadre de l'épreuve facultative EF4 « Engagement étudiant » du BTS SIO.",
          "Elle est distincte des projets présentés pour les épreuves professionnelles obligatoires."
        ]
      },

      {
        id: "epicerie",
        titre: "Épicerie solidaire",
        info: "Responsable des créneaux",
        icone: "heart",

        texte: [
          "Cette mission constitue mon activité bénévole principale à la Croix-Rouge française.",
          "Je participe notamment à l'organisation des créneaux. Mes responsabilités précises et des exemples concrets seront détaillés ici."
        ]
      },

      {
        id: "inclusion",
        titre: "Inclusion numérique",
        info: "Accompagnement des publics",
        icone: "cpu",

        texte: [
          "J'accompagne des personnes dans leurs usages du numérique et leurs démarches.",
          "Cette mission permet notamment d'illustrer la pédagogie, l'accompagnement et l'assistance aux utilisateurs."
        ]
      },

      {
        id: "permanence",
        titre: "Permanences",
        info: "Accueil, démarches et orientation",
        icone: "heart",

        texte: [
          "Je participe à l'accueil, à l'aide aux démarches administratives et à l'orientation des personnes.",
          "L'objectif est de les accompagner dans la recherche d'une solution adaptée à leur situation."
        ]
      }
    ]
  },


  /* =====================================================
     CONTACT
  ===================================================== */

  contact: {
    titre: "Contact",
    sousTitre: "Mes coordonnées et réseaux professionnels",
    categorie: "CONTACT",

    sujets: [
      {
        id: "email",
        titre: "Email",
        info: "Me contacter directement",
        icone: "mail",

        texte: [
          "Pour me contacter, utilisez mon adresse électronique professionnelle."
        ],

        lien: {
          texte: "Envoyer un email",
          url: "mailto:reyen.fourati@gmail.com"
        }
      },

      {
        id: "linkedin",
        titre: "LinkedIn",
        info: "Mon profil professionnel",
        icone: "user",

        texte: [
          "Retrouvez mon profil et mon parcours sur LinkedIn."
        ],

        lien: {
          texte: "Voir mon LinkedIn",
          url: "https://www.linkedin.com/in/reyen-fourati-8a33a7434/"
        }
      }
    ]
  }
};


/* =========================================================
   2. RÉFÉRENCES HTML
========================================================= */

const accueil = document.getElementById("accueil");
const interfacePortfolio = document.getElementById("interface");

const titreSection = document.getElementById("section-title");
const sousTitreSection = document.getElementById("section-subtitle");

const liste = document.getElementById("items-list");
const compteur = document.getElementById("items-count");

const categorieLecteur = document.getElementById("reader-category");
const dateLecteur = document.getElementById("reader-date");
const contenuLecteur = document.getElementById("reader-content");

let ongletActif = "projets";


/* =========================================================
   3. FONCTIONS UTILITAIRES
========================================================= */

function element(tag, classe, texte) {
  const noeud = document.createElement(tag);

  if (classe) {
    noeud.className = classe;
  }

  if (texte !== undefined) {
    noeud.textContent = texte;
  }

  return noeud;
}


function dateFr(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(`${date}T12:00:00`));
}


function sujetsTries(rubriqueId) {
  const sujets = [...rubriques[rubriqueId].sujets];

  if (
    rubriqueId === "veille" ||
    rubriqueId === "formation"
  ) {
    sujets.sort((a, b) => {
      return (b.date || "").localeCompare(a.date || "");
    });
  }

  return sujets;
}


function creerIcone(nom) {
  const svg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");

  const use = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );

  use.setAttribute(
    "href",
    `#icon-${nom || "document"}`
  );

  svg.appendChild(use);

  return svg;
}


/* =========================================================
   4. CRÉER UNE CARTE DE SUJET
========================================================= */

function creerCarteSujet(sujet) {
  const bouton = element("button", "item-card");

  bouton.type = "button";
  bouton.dataset.item = sujet.id;

  bouton.setAttribute("aria-pressed", "false");

  /* MINIATURE OU ICÔNE */

  const avatar = element("span", "item-card__avatar");

  avatar.setAttribute("aria-hidden", "true");

  if (sujet.miniature) {
    const image = element("img");

    image.src = sujet.miniature;
    image.alt = "";

    image.onerror = () => {
      image.replaceWith(creerIcone(sujet.icone));
    };

    avatar.appendChild(image);
  } else {
    avatar.appendChild(creerIcone(sujet.icone));
  }

  /* TITRE ET SOUS-TITRE */

  const textes = element("span", "item-card__text");

  textes.appendChild(
    element("strong", "", sujet.titre)
  );

  textes.appendChild(
    element(
      "small",
      "",
      sujet.periode
        ? `${sujet.periode} · ${sujet.info}`
        : sujet.date
          ? `${dateFr(sujet.date)} · ${sujet.info}`
          : sujet.info
    )
  );

  /* FLÈCHE */

  const fleche = creerIcone("chevron");

  fleche.classList.add("item-card__arrow");

  bouton.append(avatar, textes, fleche);

  /* OUVERTURE DU SUJET */

  bouton.addEventListener("click", () => {
    afficherSujet(sujet.id);
  });

  return bouton;
}


/* =========================================================
   5. AFFICHER LES 3 CATÉGORIES DE PROJETS
========================================================= */

function afficherCategoriesProjets() {
  const categories = rubriques.projets.sujets;

  liste.replaceChildren();

  categories.forEach(categorie => {

    /* BLOC CATÉGORIE */

    const groupe = element(
      "section",
      "project-group"
    );

    groupe.dataset.category = categorie.id;

    /* BOUTON D'OUVERTURE */

    const bouton = element(
      "button",
      "project-group__toggle"
    );

    bouton.type = "button";

    bouton.setAttribute(
      "aria-expanded",
      "false"
    );

    bouton.setAttribute(
      "aria-label",
      `Ouvrir ${categorie.titre}`
    );

    /* ICÔNE */

    const icone = element(
      "span",
      "project-group__icon"
    );

    icone.appendChild(
      creerIcone(categorie.icone)
    );

    /* TEXTES */

    const libelle = element(
      "span",
      "project-group__label"
    );

    libelle.appendChild(
      element("strong", "", categorie.titre)
    );

    libelle.appendChild(
      element("small", "", categorie.info)
    );

    /* FLÈCHE DÉROULANTE */

    const chevron = creerIcone("chevron");

    chevron.classList.add(
      "project-group__chevron"
    );

    bouton.append(
      icone,
      libelle,
      chevron
    );

    /* CONTENU DÉROULANT */

    const details = element(
      "div",
      "project-group__contents"
    );

    details.hidden = true;

    if (
      Array.isArray(categorie.projets) &&
      categorie.projets.length > 0
    ) {
      categorie.projets.forEach(projet => {
        details.appendChild(
          creerCarteSujet(projet)
        );
      });
    } else {
      details.appendChild(
        element(
          "p",
          "project-group__empty",
          "Aucun projet ajouté dans cette catégorie pour le moment."
        )
      );
    }

    /* CLIC SUR LA CATÉGORIE */

    bouton.addEventListener("click", () => {
      ouvrirCategorieProjet(categorie.id);
    });

    groupe.append(bouton, details);

    liste.appendChild(groupe);
  });

  compteur.textContent = "3 catégories de projets";

  /* PREMIÈRE CATÉGORIE OUVERTE */
  if (categories.length > 0) {
    ouvrirCategorieProjet(
      categories[0].id,
      false
    );
  }
}


/* =========================================================
   6. OUVRIR UNE CATÉGORIE DE PROJETS
========================================================= */

function ouvrirCategorieProjet(
  id,
  ouvrirSurMobile = true
) {
  if (ongletActif !== "projets") return;

  liste.querySelectorAll(
    ".project-group"
  ).forEach(groupe => {

    const actif =
      groupe.dataset.category === id;

    groupe.classList.toggle(
      "is-active",
      actif
    );

    groupe.classList.toggle(
      "is-open",
      actif
    );

    groupe.querySelector(
      ".project-group__toggle"
    ).setAttribute(
      "aria-expanded",
      String(actif)
    );

    groupe.querySelector(
      ".project-group__contents"
    ).hidden = !actif;
  });

  afficherSujet(id, ouvrirSurMobile);
}


/* =========================================================
   7. OUVRIR UNE RUBRIQUE
========================================================= */

function afficherOnglet(id) {

  /* RETOUR ACCUEIL */

  if (id === "accueil") {
    interfacePortfolio.hidden = true;
    accueil.hidden = false;

    interfacePortfolio.classList.remove(
      "vue-galerie"
    );

    interfacePortfolio.classList.remove(
      "reader-open"
    );

    document.title = "Portfolio | Reyen Fourati";

    return;
  }

  /* CHERCHER LA RUBRIQUE */

  const rubrique = rubriques[id];

  if (!rubrique) {
    console.warn(
      "[Portfolio] Rubrique introuvable :",
      id
    );
    return;
  }

  ongletActif = id;

  accueil.hidden = true;
  interfacePortfolio.hidden = false;

  interfacePortfolio.classList.remove(
    "reader-open"
  );

  document.title =
    `${rubrique.titre} | Reyen Fourati`;

  titreSection.textContent = rubrique.titre;

  sousTitreSection.textContent =
    rubrique.sousTitre;

  /* METTRE EN ÉVIDENCE L'ONGLET ACTIF */

  document.querySelectorAll(
    ".sidebar__button[data-tab]"
  ).forEach(bouton => {

    const actif =
      bouton.dataset.tab === id;

    bouton.classList.toggle(
      "is-active",
      actif
    );

    if (actif) {
      bouton.setAttribute(
        "aria-current",
        "page"
      );
    } else {
      bouton.removeAttribute(
        "aria-current"
      );
    }
  });

  /* TRAITEMENT SPÉCIAL : FORMATION (GRILLE) */

  interfacePortfolio.classList.toggle(
    "vue-galerie",
    id === "formation"
  );

  if (id === "formation") {
    afficherGalerieFormation(rubrique);
    return;
  }

  /* TRAITEMENT SPÉCIAL : PROJETS */

  if (id === "projets") {
    afficherCategoriesProjets();
    return;
  }

  /* RUBRIQUES CLASSIQUES */

  const sujets = sujetsTries(id);

  liste.replaceChildren(
    ...sujets.map(creerCarteSujet)
  );

  compteur.textContent =
    `${sujets.length} élément${sujets.length > 1 ? "s" : ""}`;

  if (sujets.length > 0) {
    afficherSujet(sujets[0].id, false);
  } else {
    categorieLecteur.textContent =
      rubrique.categorie;

    dateLecteur.textContent = "";

    contenuLecteur.replaceChildren(
      element(
        "p",
        "",
        "Aucun contenu pour le moment."
      )
    );
  }
}


/* =========================================================
   8. AFFICHER UN SUJET DANS LE LECTEUR
========================================================= */

function afficherSujet(
  id,
  ouvrirSurMobile = true
) {
  const rubrique = rubriques[ongletActif];

  let sujet = rubrique.sujets.find(
    entree => entree.id === id
  );

  let categorieParente = null;

  /* CHERCHER DANS LES PROJETS IMBRIQUÉS */

  if (
    !sujet &&
    ongletActif === "projets"
  ) {
    for (const categorie of rubrique.sujets) {

      const projet = (
        categorie.projets || []
      ).find(
        entree => entree.id === id
      );

      if (projet) {
        sujet = projet;
        categorieParente = categorie;
        break;
      }
    }
  }

  if (!sujet) return;

  /* OUVRIR LA BONNE CATÉGORIE */

  if (categorieParente) {
    liste.querySelectorAll(
      ".project-group"
    ).forEach(groupe => {

      const ouvert =
        groupe.dataset.category ===
        categorieParente.id;

      groupe.classList.toggle(
        "is-active",
        ouvert
      );

      groupe.classList.toggle(
        "is-open",
        ouvert
      );

      groupe.querySelector(
        ".project-group__toggle"
      ).setAttribute(
        "aria-expanded",
        String(ouvert)
      );

      groupe.querySelector(
        ".project-group__contents"
      ).hidden = !ouvert;
    });
  }

  /* SÉLECTION VISUELLE */

  liste.querySelectorAll(
    ".item-card"
  ).forEach(bouton => {

    const actif =
      bouton.dataset.item === id;

    bouton.classList.toggle(
      "is-selected",
      actif
    );

    bouton.setAttribute(
      "aria-pressed",
      String(actif)
    );
  });

  /* EN-TÊTE DU LECTEUR */

  categorieLecteur.textContent =
    categorieParente
      ? categorieParente.titre.toUpperCase()
      : rubrique.categorie;

  dateLecteur.textContent =
    sujet.periode || dateFr(sujet.date);

  /* CONSTRUIRE LE CONTENU */

  const article = [];

  article.push(
    element(
      "p",
      "eyebrow",
      rubrique.categorie
    )
  );

  const titre = element(
    "h2",
    "",
    sujet.titre
  );

  titre.id = "reader-title";

  article.push(titre);

  /* IMAGE DU SUJET */

  if (sujet.image) {
    const image = element("img");

    image.src = sujet.image;

    image.alt =
      `Document : ${sujet.titre}`;

    image.loading = "lazy";

    image.onerror = () => {
      image.remove();
    };

    article.push(image);
  }

  /* PARAGRAPHES */

  (sujet.texte || []).forEach(paragraphe => {
    article.push(
      texteRiche(element("p"), paragraphe)
    );
  });

  /* BLOCS D'ARTICLE (voir data/veille.js) */

  if (Array.isArray(sujet.contenu)) {
    sujet.contenu.forEach(bloc => {
      const noeud = creerBloc(bloc);
      if (noeud) article.push(noeud);
    });
  }

  /* LIEN EXTERNE */

  if (sujet.lien) {
    const lien = element(
      "a",
      "reader-link",
      sujet.lien.texte
    );

    lien.href = sujet.lien.url;

    if (
      sujet.lien.url.startsWith("https://")
    ) {
      lien.target = "_blank";
      lien.rel = "noopener noreferrer";
    }

    article.push(lien);
  }

  contenuLecteur.replaceChildren(
    ...article
  );

  contenuLecteur.scrollTop = 0;

  if (ouvrirSurMobile) {
    interfacePortfolio.classList.add(
      "reader-open"
    );
  }
}


/* =========================================================
   8 BIS. BLOCS D'ARTICLE

   Transforme les blocs de data/veille.js en HTML.
   Tout le texte passe par textContent : aucun HTML
   n'est interprété. Seul **mot** devient du gras.
========================================================= */

/* Découpe un texte en phrases (abréviations comme « ex. » ou
   « etc. » ignorées) pour aller à la ligne à chaque phrase. */
function decouperPhrases(texte) {
  const phrases = [];
  const fins = /[.!?…]+[»"”)]?\s+(?=[A-ZÀ-ÖØ-Þ«"“(])/g;
  const abreviations = /^(ex|etc|cf|env|vs|p|M|Mme|Dr|n°)\.$/i;

  let debut = 0;
  let trouve;

  while ((trouve = fins.exec(texte))) {
    const dernierMot = texte
      .slice(debut, trouve.index + 1)
      .trim()
      .split(/\s+/)
      .pop();

    if (abreviations.test(dernierMot)) continue;

    phrases.push(texte.slice(debut, trouve.index + trouve[0].trimEnd().length));
    debut = trouve.index + trouve[0].length;
  }

  phrases.push(texte.slice(debut));

  return phrases.filter(phrase => phrase.trim());
}


/* Texte riche : **gras** et retour à la ligne à chaque phrase */
function texteRiche(conteneur, texte) {
  decouperPhrases(String(texte || "")).forEach((phrase, index) => {
    if (index > 0) {
      conteneur.appendChild(element("br"));
    }

    phrase
      .split(/(\*\*[^*]+\*\*)/)
      .forEach(morceau => {
        if (!morceau) return;

        if (morceau.startsWith("**") && morceau.endsWith("**")) {
          conteneur.appendChild(
            element("strong", "", morceau.slice(2, -2))
          );
        } else {
          conteneur.appendChild(
            document.createTextNode(morceau)
          );
        }
      });
  });

  return conteneur;
}


function creerBloc(bloc) {
  switch (bloc && bloc.type) {

    case "chapo":
      return texteRiche(element("p", "article-chapo"), bloc.texte);

    case "titre":
      return element("h3", "article-titre", bloc.texte);

    case "paragraphe":
      return texteRiche(element("p"), bloc.texte);

    case "liste": {
      const liste = element(
        bloc.ordonnee ? "ol" : "ul",
        "article-liste"
      );

      (bloc.items || []).forEach(item => {
        liste.appendChild(texteRiche(element("li"), item));
      });

      return liste;
    }

    case "formule": {
      const boite = element("div", "article-formule");

      if (bloc.texte) {
        boite.appendChild(
          texteRiche(element("p", "article-formule__texte"), bloc.texte)
        );
      }

      const liste = element("ul", "article-formule__lignes");

      (bloc.lignes || []).forEach(ligne => {
        liste.appendChild(texteRiche(element("li"), ligne));
      });

      boite.appendChild(liste);
      return boite;
    }

    case "encadre": {
      const boite = element("aside", "article-encadre");

      if (bloc.titre) {
        boite.appendChild(
          element("p", "article-encadre__titre", bloc.titre)
        );
      }

      boite.appendChild(texteRiche(element("p"), bloc.texte));
      return boite;
    }

    case "chronologie": {
      const frise = element("ol", "article-chronologie");

      (bloc.items || []).forEach(etape => {
        const li = element("li");

        li.appendChild(
          element("span", "article-chronologie__date", etape.date)
        );

        li.appendChild(
          texteRiche(element("p"), etape.texte)
        );

        frise.appendChild(li);
      });

      return frise;
    }

    case "sources": {
      const boite = element("section", "article-sources");

      boite.appendChild(
        element("h3", "article-sources__titre", "Sources")
      );

      const liste = element("ul");

      (bloc.items || []).forEach(source => {
        const li = element("li");

        if (source.url) {
          const lien = element("a", "", source.texte);
          lien.href = source.url;
          lien.target = "_blank";
          lien.rel = "noopener noreferrer";
          li.appendChild(lien);
        } else {
          li.textContent = source.texte;
        }

        liste.appendChild(li);
      });

      boite.appendChild(liste);
      return boite;
    }

    case "documents": {
      const boite = element("section", "article-documents");

      boite.appendChild(
        element("h3", "article-titre", bloc.titre || "Documents")
      );

      const liste = element("ul", "article-documents__liste");

      (bloc.items || []).forEach(doc => {
        const li = element("li", "article-document");

        const icone = element("span", "article-document__icone", "PDF");
        icone.setAttribute("aria-hidden", "true");

        const textes = element("span", "article-document__textes");
        textes.append(
          element("strong", "", doc.titre),
          element("small", "", doc.info || "")
        );

        const actions = element("span", "article-document__actions");

        const lire = element("a", "article-document__bouton", "Lire");
        lire.href = doc.url;
        lire.target = "_blank";
        lire.rel = "noopener";
        lire.setAttribute("aria-label", `Lire : ${doc.titre} (nouvel onglet)`);

        const telecharger = element(
          "a",
          "article-document__bouton article-document__bouton--secondaire",
          "Télécharger"
        );
        telecharger.href = doc.url;
        telecharger.setAttribute("download", "");
        telecharger.setAttribute("aria-label", `Télécharger : ${doc.titre}`);

        actions.append(lire, telecharger);
        li.append(icone, textes, actions);
        liste.appendChild(li);
      });

      boite.appendChild(liste);
      return boite;
    }

    default:
      return null;
  }
}


/* =========================================================
   8 TER. FORMATION : GRILLE, FILTRES ET VISIONNEUSE

   La rubrique Formation occupe les colonnes 2 et 3 :
   filtres en haut, documents en grille, et un clic ouvre
   le document en plein écran.
========================================================= */

function afficherGalerieFormation(rubrique) {
  const documents = sujetsTries("formation");

  categorieLecteur.textContent = rubrique.categorie;
  dateLecteur.textContent =
    `${documents.length} document${documents.length > 1 ? "s" : ""}`;

  /* FILTRES (seulement ceux utilisés par au moins un document) */

  const utilises = new Set(
    documents.flatMap(doc => doc.filtres || [])
  );

  const filtres = [
    { id: "tout", nom: "Tout" },
    ...(rubrique.filtres || []).filter(f => utilises.has(f.id))
  ];

  const barre = element("div", "galerie-filtres");
  barre.setAttribute("role", "toolbar");
  barre.setAttribute("aria-label", "Filtrer les documents");

  const grille = element("div", "galerie-grille");

  const vide = element(
    "p",
    "galerie-vide",
    "Aucun document dans cette catégorie."
  );
  vide.hidden = true;

  filtres.forEach((filtre, index) => {
    const precedent = filtres[index - 1];

    /* Petit séparateur entre les domaines et les types */
    if (filtre.type && precedent && !precedent.type) {
      barre.appendChild(element("span", "galerie-filtres__separateur"));
    }

    const bouton = element("button", "galerie-filtre", filtre.nom);
    bouton.type = "button";
    bouton.setAttribute("aria-pressed", String(filtre.id === "tout"));

    bouton.addEventListener("click", () => {
      barre.querySelectorAll(".galerie-filtre").forEach(autre => {
        autre.setAttribute("aria-pressed", String(autre === bouton));
      });

      let visibles = 0;

      grille.querySelectorAll(".galerie-carte").forEach(carte => {
        const correspond =
          filtre.id === "tout" ||
          carte.dataset.filtres.split(" ").includes(filtre.id);

        carte.hidden = !correspond;
        if (correspond) visibles++;
      });

      vide.hidden = visibles > 0;
    });

    barre.appendChild(bouton);
  });

  /* CARTES */

  documents.forEach(doc => {
    const carte = element("button", "galerie-carte");
    carte.type = "button";
    carte.dataset.filtres = (doc.filtres || []).join(" ");
    carte.setAttribute("aria-label", `Agrandir le document : ${doc.titre}`);

    const cadre = element("span", "galerie-carte__image");

    if (doc.image) {
      const image = element("img");
      image.src = doc.image;
      image.alt = "";
      image.loading = "lazy";
      image.decoding = "async";
      cadre.appendChild(image);
    } else {
      cadre.appendChild(creerIcone(doc.icone));
    }

    carte.append(
      cadre,
      element("span", "galerie-carte__titre", doc.titre),
      element(
        "span",
        "galerie-carte__meta",
        [dateFr(doc.date), doc.info].filter(Boolean).join(" · ")
      )
    );

    carte.addEventListener("click", () => ouvrirVisionneuse(doc, carte));

    grille.appendChild(carte);
  });

  /* ASSEMBLAGE */

  const titre = element("h2", "", rubrique.titre);
  titre.id = "reader-title";

  contenuLecteur.replaceChildren(
    element("p", "eyebrow", "BTS SIO · SISR"),
    titre,
    element("p", "galerie-sous-titre", rubrique.sousTitre),
    barre,
    grille,
    vide
  );

  contenuLecteur.scrollTop = 0;
}


/* VISIONNEUSE PLEIN ÉCRAN */

const visionneuse = element("div", "visionneuse");
visionneuse.hidden = true;
visionneuse.setAttribute("role", "dialog");
visionneuse.setAttribute("aria-modal", "true");
visionneuse.setAttribute("aria-label", "Document agrandi");

const visionneuseFermer = element("button", "visionneuse__fermer", "×");
visionneuseFermer.type = "button";
visionneuseFermer.setAttribute("aria-label", "Fermer le document");

const visionneuseImage = element("img", "visionneuse__image");
const visionneuseLegende = element("div", "visionneuse__legende");

visionneuse.append(
  visionneuseFermer,
  visionneuseImage,
  visionneuseLegende
);

document.body.appendChild(visionneuse);

let visionneuseRetour = null;

function ouvrirVisionneuse(doc, origine) {
  if (!doc.image) return;

  visionneuseRetour = origine || null;

  visionneuseImage.src = doc.image;
  visionneuseImage.alt = `Document : ${doc.titre}`;

  const legende = [
    element("strong", "", doc.titre),
    element(
      "span",
      "",
      [dateFr(doc.date), doc.info].filter(Boolean).join(" · ")
    )
  ];

  if (doc.lien && doc.lien.url.startsWith("https://")) {
    const lien = element("a", "reader-link", doc.lien.texte);
    lien.href = doc.lien.url;
    lien.target = "_blank";
    lien.rel = "noopener noreferrer";
    legende.push(lien);
  }

  visionneuseLegende.replaceChildren(...legende);

  visionneuse.hidden = false;
  document.body.style.overflow = "hidden";
  visionneuseFermer.focus();
}

function fermerVisionneuse() {
  if (visionneuse.hidden) return;

  visionneuse.hidden = true;
  visionneuseImage.removeAttribute("src");
  document.body.style.overflow = "";

  visionneuseRetour?.focus();
  visionneuseRetour = null;
}

visionneuseFermer.addEventListener("click", fermerVisionneuse);

/* Fermer en cliquant sur le fond */
visionneuse.addEventListener("click", (evenement) => {
  if (evenement.target === visionneuse) fermerVisionneuse();
});

/* Fermer avec Échap */
document.addEventListener("keydown", (evenement) => {
  if (evenement.key === "Escape") fermerVisionneuse();
});

/* =========================================================
   9. NAVIGATION PRINCIPALE

   Un seul gestionnaire pour :
   - les hologrammes
   - le bouton vert CA
   - le bouton rouge Croix-Rouge
   - les icônes de la barre latérale
   - le menu mobile
========================================================= */

document.addEventListener(
  "click",
  (evenement) => {

    const cible = evenement.target;

    if (!(cible instanceof Element)) {
      return;
    }

    const bouton = cible.closest(
      "[data-open-tab], .sidebar__button[data-tab]"
    );

    if (!bouton) return;

    const id =
      bouton.dataset.openTab ||
      bouton.dataset.tab;

    if (!id) return;

    afficherOnglet(id);
  }
);


/* =========================================================
   10. RETOUR À LA LISTE SUR MOBILE
========================================================= */

document.getElementById(
  "reader-back"
)?.addEventListener(
  "click",
  () => {
    interfacePortfolio.classList.remove(
      "reader-open"
    );
  }
);


/* =========================================================
   11. INITIALISATION

   Prépare les projets sans quitter l'accueil.
========================================================= */

afficherOnglet("projets");

interfacePortfolio.hidden = true;
accueil.hidden = false;

document.title = "Portfolio | Reyen Fourati";


/* =========================================================
   12. INFOBULLES DES ONGLET

   Affiche le nom de la rubrique au survol
   ou au focus clavier.
========================================================= */

const tooltipOnglet =
  document.createElement("div");

tooltipOnglet.className = "sidebar-tooltip";

tooltipOnglet.setAttribute(
  "role",
  "tooltip"
);

tooltipOnglet.hidden = true;

document.body.appendChild(
  tooltipOnglet
);


function masquerTooltipOnglet() {
  tooltipOnglet.hidden = true;
}


function montrerTooltipOnglet(
  bouton,
  libelle
) {
  if (interfacePortfolio.hidden) return;

  tooltipOnglet.textContent = libelle;
  tooltipOnglet.hidden = false;

  const cible =
    bouton.getBoundingClientRect();

  const bulle =
    tooltipOnglet.getBoundingClientRect();

  const marge = 8;

  const gauche = Math.min(
    cible.right + 14,
    window.innerWidth - bulle.width - marge
  );

  const haut = Math.max(
    marge,
    Math.min(
      cible.top + cible.height / 2 - bulle.height / 2,
      window.innerHeight - bulle.height - marge
    )
  );

  tooltipOnglet.style.left =
    `${Math.max(marge, gauche)}px`;

  tooltipOnglet.style.top =
    `${haut}px`;
}


/* =========================================================
   13. ÉVÉNEMENTS DES INFOBULLES
========================================================= */

document.querySelectorAll(
  ".sidebar__button"
).forEach(bouton => {

  const libelle =
    bouton.getAttribute("title") ||
    bouton.getAttribute("aria-label");

  bouton.removeAttribute("title");

  bouton.addEventListener(
    "pointerenter",
    event => {
      if (
        event.pointerType === "mouse" ||
        event.pointerType === "pen"
      ) {
        montrerTooltipOnglet(
          bouton,
          libelle
        );
      }
    }
  );

  bouton.addEventListener(
    "pointerleave",
    masquerTooltipOnglet
  );

  bouton.addEventListener(
    "focus",
    () => {
      if (
        window.matchMedia(
          "(hover: hover)"
        ).matches
      ) {
        montrerTooltipOnglet(
          bouton,
          libelle
        );
      }
    }
  );

  bouton.addEventListener(
    "blur",
    masquerTooltipOnglet
  );

  bouton.addEventListener(
    "click",
    masquerTooltipOnglet
  );
});


window.addEventListener(
  "resize",
  masquerTooltipOnglet
);

document.querySelector(
  ".sidebar__nav"
)?.addEventListener(
  "scroll",
  masquerTooltipOnglet
);
