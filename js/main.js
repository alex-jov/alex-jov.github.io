const translations = {
    en: {
        "nav.about": "About",
        "nav.portfolio": "Portfolio",
        "nav.cv": "Resume",
        "hero.title": "Networks & Telecommunications",
        "hero.desc": "Passionate student in Networks & Telecommunications at IUT de Béthune. Networking, web development and cybersecurity.",
        "hero.scroll": "Scroll",
        "hero.cta.about": "Learn more",
        "hero.cta.projects": "View my projects",
        "about.title": "Who I am",
        "about.p1": "I'm a passionate 18-year-old student currently pursuing a BUT in Networks & Telecommunications at IUT de Béthune. My goal is to master modern network infrastructures while developing my skills in web development and cybersecurity.",
        "about.p2": "Since a young age, I've been fascinated by computers and new technologies. This passion led me to choose the NSI (Digital & Computer Science) specialization in high school, then continue in the field of networks and telecommunications.",
        "about.education": "Education",
        "about.location": "Location",
        "about.languages": "Languages",
        "about.languages_val": "French (native), English (C1)",
        "about.availability": "Availability",
        "about.availability_val": "Internship / Work-study",
        "about.skill_sec": "Network Security",
        "about.stat_edu": "Education",
        "about.stat_proj": "Projects",
        "about.stat_eng": "English",
        "about.stat_cur": "Curiosity",
        "portfolio.title": "My projects",
        "filter.all": "All",
        "filter.admin": "Administer",
        "filter.connect": "Connect",
        "filter.program": "Program",
        "proj.vlan.name": "VLAN Network Configuration",
        "proj.vlan.desc": "Setting up segmented networks with VLANs, multi-VLAN Trunk links and STP/RSTP protocol on Cisco equipment.",
        "proj.trans.name": "Transmission Systems",
        "proj.trans.desc": "Characterization of Ethernet and coaxial cables: theoretical study, computer simulation and analysis of attenuation and delay.",
        "proj.site.name": "Portfolio Website",
        "proj.site.desc": "Creation of a responsive showcase website to present my skills and projects, optimized for all devices.",
        "proj.ws.name": "WebSocket Connection Test",
        "proj.ws.desc": "Test script for real-time bidirectional communication via WebSocket, with connection and disconnection detection.",
        "proj.up.name": "AI Video Upscaling",
        "proj.up.desc": "Local AI-powered video enhancement tool using Real-ESRGAN, with Tkinter GUI and GPU acceleration.",
        "proj.path.name": "Pathfinding Visualizer",
        "proj.path.desc": "Interactive educational tool visualizing Dijkstra's and A* algorithms on a grid with step-by-step animations and maze generation.",
        "proj.algo.name": "Algorithm Visualizer",
        "proj.algo.desc": "Interactive sorting algorithm visualizer with step-by-step animations, sound effects and complexity metrics.",
        "proj.perso": "PERSONAL",
        "cv.title": "Education & Skills",
        "cv.edu": "Education",
        "cv.date1": "2025 — Ongoing",
        "cv.place1": "IUT de Béthune — University of Artois",
        "cv.desc1": "Network administration, telecommunications, IT security and application development.",
        "cv.bac": "General Baccalaureate",
        "cv.desc2": "Mathematics and NSI (Digital & Computer Science) specializations.",
        "cv.brevet": "National Diploma (Brevet)",
        "cv.brevet_place": "Coll\u00e8ge Louis Pasteur, Somain",
        "cv.desc3": "IT security best practices, cyber threat awareness.",
        "cv.skills": "Technical Skills",
        "cv.date4": "2020 — Present",
        "cv.webdev": "Web Development",
        "cv.self": "Self-taught",
        "cv.web1": "HTML5, CSS3, PHP — dynamic websites",
        "cv.web2": "JavaScript — interactivity and animations",
        "cv.web3": "MySQL — database management",
        "cv.web4": "Bootstrap — CSS frameworks",
        "cv.date5": "2025 — Present",
        "cv.net": "Networking",
        "cv.net1": "LAN / VLAN — configuration & administration",
        "cv.net2": "Cisco — routers & switches",
        "cv.net3": "Linux — Debian, Ubuntu",
        "cv.date6": "2018 — Present",
        "cv.prog": "Programming",
        "cv.selfacad": "Self-taught & academic",
        "cv.prog1": "Python — automation, Discord bots",
        "cv.prog2": "C# — Windows applications",
        "cv.prog3": "SQL & PHP — database management",
        "cv.prog4": "Kotlin — mobile app basics",
        "cv.cisco_py": "Cisco — Python Essentials 1",
        "cv.cisco_py_desc": "Python programming fundamentals, data types, control flow, functions and data structures.",
        "cv.ccna_date": "2025 — In progress",
        "cv.ccna_desc": "Networking fundamentals, routing & switching, IP addressing, network security and automation.",
        "contact.title": "Get in touch",
        "footer": "\u00a9 2026 Alex Jov\u00e9niaux \u2014 All rights reserved",
        "modal.close": "Close",
        "modal.github": "\u2197 View on GitHub",
        "modal.skills_dev": "Skills developed:",
        "modal.tech": "Technologies:",
        "modal.context": "Context:",
        "modal.formats": "Supported formats:",
        "modal.vlan.title": "R1.03 \u2014 Local Networks & Active Equipment",
        "modal.vlan.p1": "This course enabled the acquisition of fundamental Ethernet infrastructure skills, including the configuration of active equipment such as switches and the setup of segmented networks.",
        "modal.vlan.skills": "Switch configuration, VLAN network segmentation, multi-VLAN Trunk links, inter-VLAN communication, STP/RSTP protocol.",
        "modal.vlan.ctx": "R1.03 \u2014 IUT de B\u00e9thune \u2014 January 2025",
        "modal.trans.title": "SAE 1.03 \u2014 Transmission System Characterization",
        "modal.trans.p1": "This project involved characterizing transmission systems used in computer networks, including Ethernet and coaxial cables. The goal was to understand and quantify attenuation and delay.",
        "modal.trans.p2": "The project was conducted in three complementary approaches: theoretical study using mathematical calculations, computer simulation with specialized software, and preparation for real measurements.",
        "modal.trans.skills": "Physical link characterization (copper, fiber optic), attenuation & delay measurement, transmission system simulation.",
        "modal.trans.ctx": "SAE 1.03 \u2014 IUT de B\u00e9thune \u2014 January 2025",
        "modal.site.title": "Portfolio Website",
        "modal.site.p1": "Creation of this responsive portfolio site to showcase my skills and projects. Built with HTML5, CSS3, Bootstrap framework, and JavaScript for animations and interactions.",
        "modal.site.p2": "This project allowed me to put my front-end web development knowledge into practice, with optimization for all devices and browsers.",
        "modal.site.ctx": "SA\u00c9 1.4 \"Presenting yourself on the Internet\" \u2014 IUT de B\u00e9thune",
        "modal.ws.title": "WebSocket Connection Test",
        "modal.ws.p1": "Development of a test script for WebSocket connections. This project provides an easy way to explore real-time bidirectional communication.",
        "modal.ws.p2": "The script displays exchanged messages and detects connections and disconnections.",
        "modal.ws.ctx": "Personal project",
        "modal.up.title": "Local AI Video Upscaling",
        "modal.up.p1": "AI-powered video enhancement tool running entirely locally, without cloud or API. The program uses Real-ESRGAN to increase video resolution while preserving original audio quality.",
        "modal.up.p2": "The process is split into three steps: frame extraction with FFmpeg, enhancement via Real-ESRGAN, then video reconstruction. The Tkinter GUI makes the tool user-friendly.",
        "modal.up.ctx": "Personal project",
        "modal.demo": "\u2197 Live Demo",
        "modal.path.title": "Pathfinding Visualizer",
        "modal.path.p1": "An interactive educational tool that demonstrates pathfinding algorithms in action. Watch Dijkstra's and A* algorithms explore a grid to find the shortest path between two points, with smooth step-by-step animations.",
        "modal.path.p2": "Features include drawing walls by clicking and dragging, toggling diagonal movement, generating random mazes, adjusting animation speed, and viewing live statistics. Responsive design with dark/light mode.",
        "modal.path.ctx": "Personal project",
        "modal.algo.title": "Algorithm Visualizer",
        "modal.algo.p1": "An interactive web application that demonstrates sorting algorithms through step-by-step animations with visual feedback and sound effects.",
        "modal.algo.p2": "Visualizes Bubble Sort, Selection Sort, Insertion Sort and Quick Sort with adjustable speed and array size. Features color-coded states, complexity metrics, dark/light mode and audio feedback where sound frequency corresponds to bar heights.",
        "modal.algo.ctx": "Personal project",
        "nav.certifications": "Certifications",
        "cert.title": "My certifications",
        "cert.view": "View certificate \u2192",
        "proj.orbital.name": "Orbital Tracker",
        "proj.orbital.desc": "Real-time 3D satellite tracking application visualizing 10,000+ active satellites on an interactive globe with Three.js.",
        "modal.orbital.title": "Orbital Tracker",
        "modal.orbital.p1": "A real-time 3D satellite tracking application that visualizes over 10,000 active satellites orbiting Earth on an interactive globe. Uses Celestrak API for live TLE data and satellite.js for SGP4 orbital propagation.",
        "modal.orbital.p2": "Features include category-based filtering (Space Stations, Starlink, GPS, Weather), detailed telemetry panel, orbital path visualization, user geolocation with visibility calculations, and zoom-adaptive labels.",
        "modal.orbital.ctx": "Personal project",
        "proj.sae102.name": "Enterprise Network Infrastructure",
        "proj.sae102.desc": "Complete design and deployment of a segmented enterprise network with VLANs, DHCP, DNS, and a web server on real and virtual equipment.",
        "modal.sae102.title": "SAE 1.02 \u2014 Enterprise Network Infrastructure",
        "modal.sae102.p1": "Group project simulating a professional scenario: designing and deploying the complete IT infrastructure for a small enterprise. The network is segmented into four VLANs (Admin, Personnel, Production, Video) using Cisco 2960 switches and a Cisco 800 series router, with a full IPv4 addressing plan.",
        "modal.sae102.p2": "The project progressed through multiple phases: equipment research and network diagram design with draw.io, simulation and testing in Cisco Packet Tracer, deployment on virtual machines with Apache web server, DHCP and DNS services (dnsmasq), and finally a physical implementation on real Cisco equipment supervised by second-year students.",
        "modal.sae102.p3": "Extensive testing was carried out at each stage: ARP, DNS and DHCP request captures, inter-VLAN routing validation, web server accessibility verification, and network stability assessment. All results were documented in Jupyter Notebook using Markdown.",
        "modal.sae102.skills": "IPv4 addressing & subnetting, VLAN configuration & segmentation, inter-VLAN routing, DHCP/DNS server deployment, Apache web server setup, network troubleshooting & traffic analysis, technical documentation.",
        "modal.sae102.ctx": "SAE 1.02 \u2014 IUT de B\u00e9thune \u2014 January 2026",
        "proj.techint.name": "Internet Technologies",
        "proj.techint.desc": "WAN infrastructure design with dynamic routing (RIP, OSPF), Linux gateways with NAT/IP forwarding, IPv6, ACLs and packet filtering.",
        "modal.techint.title": "R2.01 \u2014 Internet Technologies",
        "modal.techint.p1": "This course covers the knowledge and skills required to design, deploy and maintain wide-area network (Internet) infrastructures. Topics include in-depth IPv4 addressing with subnetting plans, UDP and TCP transport protocols, and essential network protocols such as ARP, ICMP, DNS, DHCP, SSH, FTP and HTTP.",
        "modal.techint.p2": "A major focus is placed on routing: static routing with routing tables, then dynamic routing protocols RIP (v2) and OSPF, first simulated in Cisco Packet Tracer then implemented on real equipment. Labs also cover building a Linux gateway with IP forwarding and NAT using iptables, configuring DNS and proxy access.",
        "modal.techint.p3": "The course also introduces IPv6 addressing and protocols, as well as packet filtering with Cisco ACLs and Linux firewalling. Practical assessments (CTP) are based on personal write-ups, and CCNA SRWE certification is mandatory.",
        "modal.techint.skills": "IPv4/IPv6 addressing & subnetting, static & dynamic routing (RIP v2, OSPF), Linux gateway configuration (IP forwarding, NAT/iptables), TCP/UDP transport analysis, ACL packet filtering, Wireshark traffic capture, network troubleshooting.",
        "modal.techint.ctx": "R2.01 \u2014 IUT de B\u00e9thune \u2014 2025-2026"
    },
    fr: {
        "nav.about": "\u00c0 propos",
        "nav.portfolio": "Portfolio",
        "nav.cv": "CV",
        "hero.title": "R\u00e9seaux & T\u00e9l\u00e9communications",
        "hero.desc": "\u00c9tudiant passionn\u00e9 en BUT R&T \u00e0 l'IUT de B\u00e9thune. R\u00e9seaux, d\u00e9veloppement web et cybers\u00e9curit\u00e9.",
        "hero.scroll": "D\u00e9filer",
        "hero.cta.about": "En savoir plus",
        "hero.cta.projects": "Voir mes projets",
        "about.title": "Qui suis-je",
        "about.p1": "\u00c9tudiant passionn\u00e9 de 18 ans, je poursuis actuellement un BUT R\u00e9seaux et T\u00e9l\u00e9communications \u00e0 l'IUT de B\u00e9thune. Mon objectif est de ma\u00eettriser les infrastructures r\u00e9seau modernes tout en d\u00e9veloppant mes comp\u00e9tences en d\u00e9veloppement web et cybers\u00e9curit\u00e9.",
        "about.p2": "Depuis mon plus jeune \u00e2ge, je suis fascin\u00e9 par l'informatique et les nouvelles technologies. Cette passion m'a conduit \u00e0 choisir la sp\u00e9cialit\u00e9 NSI au lyc\u00e9e, puis \u00e0 poursuivre dans le domaine des r\u00e9seaux et t\u00e9l\u00e9communications.",
        "about.education": "Formation",
        "about.location": "Localisation",
        "about.languages": "Langues",
        "about.languages_val": "Fran\u00e7ais (natif), Anglais (C1)",
        "about.availability": "Disponibilit\u00e9",
        "about.availability_val": "Stage / Alternance",
        "about.skill_sec": "S\u00e9curit\u00e9 R\u00e9seau",
        "about.stat_edu": "Formation",
        "about.stat_proj": "Projets",
        "about.stat_eng": "Anglais",
        "about.stat_cur": "Curiosit\u00e9",
        "portfolio.title": "Mes projets",
        "filter.all": "Tout",
        "filter.admin": "Administrer",
        "filter.connect": "Connecter",
        "filter.program": "Programmer",
        "proj.vlan.name": "Configuration de R\u00e9seaux VLAN",
        "proj.vlan.desc": "Mise en place de r\u00e9seaux segment\u00e9s avec VLAN, liens Trunk multi-VLAN et protocole STP/RSTP sur \u00e9quipements Cisco.",
        "proj.trans.name": "Syst\u00e8mes de Transmission",
        "proj.trans.desc": "Caract\u00e9risation de c\u00e2bles Ethernet et coaxiaux : \u00e9tude th\u00e9orique, simulation informatique et analyse d'att\u00e9nuation et de retard.",
        "proj.site.name": "Site Web Portfolio",
        "proj.site.desc": "Cr\u00e9ation d'un site vitrine responsive pour pr\u00e9senter mes comp\u00e9tences et projets, optimis\u00e9 pour tous les appareils.",
        "proj.ws.name": "Test Connexion WebSocket",
        "proj.ws.desc": "Script de test pour la communication bidirectionnelle en temps r\u00e9el via WebSocket, avec d\u00e9tection des connexions et d\u00e9connexions.",
        "proj.up.name": "Upscaling IA de Vid\u00e9os",
        "proj.up.desc": "Outil d'am\u00e9lioration de vid\u00e9os par IA en local avec Real-ESRGAN, interface Tkinter et acc\u00e9l\u00e9ration GPU.",
        "proj.path.name": "Visualiseur de Pathfinding",
        "proj.path.desc": "Outil éducatif interactif visualisant les algorithmes Dijkstra et A* sur une grille avec animations pas-à-pas et génération de labyrinthes.",
        "proj.algo.name": "Visualiseur d'Algorithmes",
        "proj.algo.desc": "Visualiseur interactif d'algorithmes de tri avec animations pas-à-pas, effets sonores et métriques de complexité.",
        "proj.perso": "PROJET PERSO",
        "cv.title": "Formation & comp\u00e9tences",
        "cv.edu": "Formation",
        "cv.date1": "2025 \u2014 En cours",
        "cv.place1": "IUT de B\u00e9thune \u2014 Universit\u00e9 d'Artois",
        "cv.desc1": "Administration r\u00e9seau, t\u00e9l\u00e9communications, s\u00e9curit\u00e9 informatique et d\u00e9veloppement d'applications.",
        "cv.bac": "Baccalaur\u00e9at G\u00e9n\u00e9ral",
        "cv.desc2": "Sp\u00e9cialit\u00e9s Math\u00e9matiques et NSI (Num\u00e9rique et Sciences Informatiques).",
        "cv.brevet": "Dipl\u00f4me National du Brevet",
        "cv.brevet_place": "Coll\u00e8ge Louis Pasteur, Somain",
        "cv.desc3": "Bonnes pratiques de s\u00e9curit\u00e9 informatique, sensibilisation aux menaces cyber.",
        "cv.skills": "Comp\u00e9tences techniques",
        "cv.date4": "2020 \u2014 Pr\u00e9sent",
        "cv.webdev": "D\u00e9veloppement Web",
        "cv.self": "Autodidacte",
        "cv.web1": "HTML5, CSS3, PHP \u2014 sites dynamiques",
        "cv.web2": "JavaScript \u2014 interactivit\u00e9 et animations",
        "cv.web3": "MySQL \u2014 bases de donn\u00e9es",
        "cv.web4": "Bootstrap \u2014 frameworks CSS",
        "cv.date5": "2025 \u2014 Pr\u00e9sent",
        "cv.net": "R\u00e9seaux",
        "cv.net1": "LAN / VLAN \u2014 configuration & administration",
        "cv.net2": "Cisco \u2014 routeurs & commutateurs",
        "cv.net3": "Linux \u2014 Debian, Ubuntu",
        "cv.date6": "2018 \u2014 Pr\u00e9sent",
        "cv.prog": "Programmation",
        "cv.selfacad": "Autodidacte & formation acad\u00e9mique",
        "cv.prog1": "Python \u2014 automatisation, bots Discord",
        "cv.prog2": "C# \u2014 programmes Windows",
        "cv.prog3": "SQL & PHP \u2014 gestion de bases de donn\u00e9es",
        "cv.prog4": "Kotlin \u2014 notions applications mobiles",
        "cv.cisco_py": "Cisco \u2014 Python Essentials 1",
        "cv.cisco_py_desc": "Fondamentaux de la programmation Python, types de donn\u00e9es, flux de contr\u00f4le, fonctions et structures de donn\u00e9es.",
        "cv.ccna_date": "2025 \u2014 En cours",
        "cv.ccna_desc": "Fondamentaux r\u00e9seaux, routage & commutation, adressage IP, s\u00e9curit\u00e9 r\u00e9seau et automatisation.",
        "contact.title": "Me contacter",
        "footer": "\u00a9 2026 Alex Jov\u00e9niaux \u2014 Tous droits r\u00e9serv\u00e9s",
        "modal.close": "Fermer",
        "modal.github": "\u2197 Voir sur GitHub",
        "modal.skills_dev": "Comp\u00e9tences d\u00e9velopp\u00e9es :",
        "modal.tech": "Technologies :",
        "modal.context": "Contexte :",
        "modal.formats": "Formats support\u00e9s :",
        "modal.vlan.title": "R1.03 \u2014 R\u00e9seaux Locaux et \u00c9quipements Actifs",
        "modal.vlan.p1": "Cette ressource a permis l'acquisition des comp\u00e9tences fondamentales en infrastructure Ethernet, notamment la configuration de mat\u00e9riels actifs comme les commutateurs et la mise en place de r\u00e9seaux segment\u00e9s.",
        "modal.vlan.skills": "Configuration de commutateurs, Segmentation r\u00e9seau avec VLAN, Liens Trunk multi-VLAN, Communication inter-VLAN, Protocole STP/RSTP.",
        "modal.vlan.ctx": "R1.03 \u2014 IUT de B\u00e9thune \u2014 Janvier 2025",
        "modal.trans.title": "SAE 1.03 \u2014 Caract\u00e9risation de Syst\u00e8mes de Transmission",
        "modal.trans.p1": "Ce projet consistait \u00e0 caract\u00e9riser des syst\u00e8mes de transmission utilis\u00e9s dans les r\u00e9seaux informatiques, notamment les c\u00e2bles Ethernet et coaxiaux. L'objectif \u00e9tait de comprendre et quantifier l'att\u00e9nuation et le retard.",
        "modal.trans.p2": "Le projet s'est d\u00e9roul\u00e9 en trois approches compl\u00e9mentaires : \u00e9tude th\u00e9orique, simulation informatique et pr\u00e9paration aux mesures r\u00e9elles.",
        "modal.trans.skills": "Caract\u00e9risation de liaisons physiques (cuivre, fibre optique), mesure d'att\u00e9nuation et de retard, simulation de syst\u00e8mes de transmission.",
        "modal.trans.ctx": "SAE 1.03 \u2014 IUT de B\u00e9thune \u2014 Janvier 2025",
        "modal.site.title": "Site Web Portfolio",
        "modal.site.p1": "Cr\u00e9ation de ce site portfolio responsive pour pr\u00e9senter mes comp\u00e9tences et projets. D\u00e9velopp\u00e9 en HTML5, CSS3 avec Bootstrap et JavaScript pour les animations et interactions.",
        "modal.site.p2": "Ce projet m'a permis de mettre en pratique mes connaissances en d\u00e9veloppement web front-end, avec une optimisation pour tous les appareils.",
        "modal.site.ctx": "SA\u00c9 1.4 \u00abSe pr\u00e9senter sur Internet\u00bb \u2014 IUT de B\u00e9thune",
        "modal.ws.title": "Test Connexion WebSocket",
        "modal.ws.p1": "D\u00e9veloppement d'un script de test pour les connexions WebSocket. Ce projet permet de d\u00e9couvrir facilement la communication bidirectionnelle en temps r\u00e9el.",
        "modal.ws.p2": "Le script affiche les messages \u00e9chang\u00e9s, et d\u00e9tecte les connexions et d\u00e9connexions.",
        "modal.ws.ctx": "Projet personnel",
        "modal.up.title": "Upscaling IA de Vid\u00e9os en Local",
        "modal.up.p1": "Outil d'am\u00e9lioration de vid\u00e9os par IA fonctionnant enti\u00e8rement en local, sans cloud ni API. Le programme utilise Real-ESRGAN pour augmenter la r\u00e9solution tout en pr\u00e9servant l'audio originale.",
        "modal.up.p2": "Le processus se d\u00e9compose en trois \u00e9tapes : extraction des images avec FFmpeg, am\u00e9lioration via Real-ESRGAN, puis reconstruction de la vid\u00e9o. L'interface Tkinter rend l'outil accessible.",
        "modal.up.ctx": "Projet personnel",
        "modal.demo": "\u2197 Démo en ligne",
        "modal.path.title": "Visualiseur de Pathfinding",
        "modal.path.p1": "Un outil éducatif interactif qui démontre les algorithmes de recherche de chemin en action. Observez Dijkstra et A* explorer une grille pour trouver le chemin le plus court entre deux points, avec des animations fluides pas-à-pas.",
        "modal.path.p2": "Fonctionnalités : dessin de murs par clic et glissement, mouvement diagonal, génération de labyrinthes aléatoires, vitesse d'animation ajustable et statistiques en temps réel. Design responsive avec mode sombre/clair.",
        "modal.path.ctx": "Projet personnel",
        "modal.algo.title": "Visualiseur d'Algorithmes",
        "modal.algo.p1": "Une application web interactive qui démontre les algorithmes de tri par des animations pas-à-pas avec retour visuel et effets sonores.",
        "modal.algo.p2": "Visualise Bubble Sort, Selection Sort, Insertion Sort et Quick Sort avec vitesse et taille de tableau ajustables. Inclut des états codés par couleur, métriques de complexité, mode sombre/clair et retour audio où la fréquence correspond à la hauteur des barres.",
        "modal.algo.ctx": "Projet personnel",
        "nav.certifications": "Certifications",
        "cert.title": "Mes certifications",
        "cert.view": "Voir le certificat \u2192",
        "proj.orbital.name": "Orbital Tracker",
        "proj.orbital.desc": "Application de suivi de satellites en 3D temps r\u00e9el, visualisant 10 000+ satellites actifs sur un globe interactif avec Three.js.",
        "modal.orbital.title": "Orbital Tracker",
        "modal.orbital.p1": "Une application de suivi de satellites en 3D temps r\u00e9el qui visualise plus de 10 000 satellites actifs en orbite terrestre sur un globe interactif. Utilise l'API Celestrak pour les donn\u00e9es TLE en direct et satellite.js pour la propagation orbitale SGP4.",
        "modal.orbital.p2": "Fonctionnalit\u00e9s : filtrage par cat\u00e9gorie (stations spatiales, Starlink, GPS, m\u00e9t\u00e9o), panneau de t\u00e9l\u00e9m\u00e9trie d\u00e9taill\u00e9, visualisation des trajectoires orbitales, g\u00e9olocalisation utilisateur avec calculs de visibilit\u00e9 et labels adaptatifs au zoom.",
        "modal.orbital.ctx": "Projet personnel",
        "proj.sae102.name": "Infrastructure R\u00e9seau d'Entreprise",
        "proj.sae102.desc": "Conception et d\u00e9ploiement complet d'un r\u00e9seau d'entreprise segment\u00e9 avec VLANs, DHCP, DNS et serveur web sur \u00e9quipements r\u00e9els et virtuels.",
        "modal.sae102.title": "SAE 1.02 \u2014 Infrastructure R\u00e9seau d'Entreprise",
        "modal.sae102.p1": "Projet de groupe simulant un sc\u00e9nario professionnel : concevoir et d\u00e9ployer l'infrastructure informatique compl\u00e8te d'une petite entreprise. Le r\u00e9seau est segment\u00e9 en quatre VLANs (Admin, Personnel, Production, Vid\u00e9o) \u00e0 l'aide de commutateurs Cisco 2960 et d'un routeur Cisco s\u00e9rie 800, avec un plan d'adressage IPv4 complet.",
        "modal.sae102.p2": "Le projet s'est d\u00e9roul\u00e9 en plusieurs phases : recherche d'\u00e9quipements et conception du sch\u00e9ma r\u00e9seau avec draw.io, simulation et tests sous Cisco Packet Tracer, d\u00e9ploiement sur machines virtuelles avec serveur web Apache, services DHCP et DNS (dnsmasq), et enfin mise en \u0153uvre physique sur \u00e9quipements Cisco r\u00e9els encadr\u00e9e par des \u00e9tudiants de RT2.",
        "modal.sae102.p3": "Des tests approfondis ont \u00e9t\u00e9 men\u00e9s \u00e0 chaque \u00e9tape : captures de requ\u00eates ARP, DNS et DHCP, validation du routage inter-VLAN, v\u00e9rification de l'accessibilit\u00e9 du serveur web et \u00e9valuation de la stabilit\u00e9 du r\u00e9seau. Tous les r\u00e9sultats ont \u00e9t\u00e9 document\u00e9s dans des notebooks Jupyter en Markdown.",
        "modal.sae102.skills": "Adressage IPv4 & sous-r\u00e9seaux, configuration & segmentation VLAN, routage inter-VLAN, d\u00e9ploiement serveur DHCP/DNS, installation serveur web Apache, d\u00e9pannage r\u00e9seau & analyse de trafic, documentation technique.",
        "modal.sae102.ctx": "SAE 1.02 \u2014 IUT de B\u00e9thune \u2014 Janvier 2026",
        "proj.techint.name": "Technologies de l'Internet",
        "proj.techint.desc": "Conception d'infrastructures WAN avec routage dynamique (RIP, OSPF), passerelles Linux avec NAT/IP forwarding, IPv6, ACL et filtrage de paquets.",
        "modal.techint.title": "R2.01 \u2014 Technologies de l'Internet",
        "modal.techint.p1": "Cette ressource couvre les connaissances et comp\u00e9tences n\u00e9cessaires pour concevoir, d\u00e9ployer et maintenir des infrastructures r\u00e9seau longue distance (Internet). Les th\u00e8mes abord\u00e9s incluent l'adressage IPv4 approfondi avec plans de sous-r\u00e9seaux, les protocoles de transport UDP et TCP, et les protocoles r\u00e9seau essentiels : ARP, ICMP, DNS, DHCP, SSH, FTP et HTTP.",
        "modal.techint.p2": "Un axe majeur porte sur le routage : routage statique avec tables de routage, puis protocoles de routage dynamique RIP (v2) et OSPF, d'abord simul\u00e9s sous Cisco Packet Tracer puis mis en \u0153uvre sur \u00e9quipements r\u00e9els. Les TP couvrent \u00e9galement la cr\u00e9ation d'une passerelle Linux avec IP forwarding et NAT via iptables, la configuration DNS et l'acc\u00e8s proxy.",
        "modal.techint.p3": "La ressource introduit aussi l'adressage et les protocoles IPv6, ainsi que le filtrage de paquets avec les ACL Cisco et le pare-feu Linux. Les \u00e9valuations pratiques (CTP) s'appuient sur des write-ups personnels, et la certification CCNA SRWE est obligatoire.",
        "modal.techint.skills": "Adressage IPv4/IPv6 & sous-r\u00e9seaux, routage statique & dynamique (RIP v2, OSPF), configuration passerelle Linux (IP forwarding, NAT/iptables), analyse transport TCP/UDP, filtrage de paquets ACL, capture de trafic Wireshark, d\u00e9pannage r\u00e9seau.",
        "modal.techint.ctx": "R2.01 \u2014 IUT de B\u00e9thune \u2014 2025-2026"
    }
};

let currentLang = localStorage.getItem('lang') || 'fr';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.getElementById('lang-en').classList.toggle('lang-active', lang === 'en');
    document.getElementById('lang-fr').classList.toggle('lang-active', lang === 'fr');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

function toggleLang() {
    setLang(currentLang === 'en' ? 'fr' : 'en');
}


setLang(currentLang);


const canvas = document.getElementById('network-canvas');
const ctx = canvas.getContext('2d');
let width, height, particles, mouse;

const CONFIG = {
    particleCount: 120,
    connectionDistance: 150,
    mouseRadius: 200,
    particleSpeed: 0.3,
    particleMinSize: 1,
    particleMaxSize: 2.5,
    lineWidth: 0.5,
    accentColor: { r: 0, g: 200, b: 255 },
    baseColor: { r: 100, g: 100, b: 130 }
};

mouse = { x: -1000, y: -1000 };


const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
let mouseIdleTimer = 0;
let lastMousePos = { x: -1000, y: -1000 };
let burstFired = false;
const BURST_CONFIG = {
    idleThreshold: 150,  
    moveThreshold: 3,   
    clusterCount: 8,      
    clusterRadius: 80,    
    force: 3.5           
};

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * CONFIG.particleSpeed;
        this.vy = (Math.random() - 0.5) * CONFIG.particleSpeed;
        this.size = Math.random() * (CONFIG.particleMaxSize - CONFIG.particleMinSize) + CONFIG.particleMinSize;
        this.baseAlpha = Math.random() * 0.5 + 0.2;
        this.alpha = this.baseAlpha;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulse) * 0.1;

        if (!isMobile) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONFIG.mouseRadius) {
                if (!burstFired) {
                    const force = (1 - dist / CONFIG.mouseRadius) * 0.02;
                    this.vx += dx * force;
                    this.vy += dy * force;
                }
                this.alpha = Math.min(1, this.alpha + (1 - dist / CONFIG.mouseRadius) * 0.3);
            }
        }

        this.vx *= 0.99;
        this.vy *= 0.99;

        const maxSpeed = burstFired ? CONFIG.particleSpeed * 12 : CONFIG.particleSpeed * 3;
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
        }

        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;
    }

    draw() {
        const { r, g, b } = CONFIG.baseColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
        ctx.fill();

        if (this.alpha > 0.4) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${CONFIG.accentColor.r}, ${CONFIG.accentColor.g}, ${CONFIG.accentColor.b}, ${(this.alpha - 0.4) * 0.1})`;
            ctx.fill();
        }
    }
}

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.min(CONFIG.particleCount, Math.floor((width * height) / 8000));
    particles = Array.from({ length: count }, () => new Particle());
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < CONFIG.connectionDistance) {
                const alpha = (1 - dist / CONFIG.connectionDistance) * 0.15;
                const midX = (particles[i].x + particles[j].x) / 2;
                const midY = (particles[i].y + particles[j].y) / 2;
                const mouseDist = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2);

                let r, g, b;
                if (mouseDist < CONFIG.mouseRadius) {
                    const blend = 1 - mouseDist / CONFIG.mouseRadius;
                    r = CONFIG.baseColor.r + (CONFIG.accentColor.r - CONFIG.baseColor.r) * blend;
                    g = CONFIG.baseColor.g + (CONFIG.accentColor.g - CONFIG.baseColor.g) * blend;
                    b = CONFIG.baseColor.b + (CONFIG.accentColor.b - CONFIG.baseColor.b) * blend;
                } else {
                    ({ r, g, b } = CONFIG.baseColor);
                }

                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(${r|0}, ${g|0}, ${b|0}, ${alpha})`;
                ctx.lineWidth = CONFIG.lineWidth;
                ctx.stroke();
            }
        }
    }
}

function triggerBurst(bx, by) {
    particles.forEach(p => {
        const dx = p.x - bx;
        const dy = p.y - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.mouseRadius && dist > 0) {
            const strength = (1 - dist / CONFIG.mouseRadius) * BURST_CONFIG.force;
            p.vx += (dx / dist) * strength;
            p.vy += (dy / dist) * strength;
        }
    });
    burstFired = true;
}

function updateBurst() {
    if (isMobile) return;

    const mdx = mouse.x - lastMousePos.x;
    const mdy = mouse.y - lastMousePos.y;
    const moved = Math.sqrt(mdx * mdx + mdy * mdy) > BURST_CONFIG.moveThreshold;

    if (moved) {
        mouseIdleTimer = 0;
        burstFired = false;
        lastMousePos.x = mouse.x;
        lastMousePos.y = mouse.y;
    } else if (mouse.x > 0 && mouse.y > 0) {
        mouseIdleTimer++;
    }

    if (mouseIdleTimer >= BURST_CONFIG.idleThreshold && !burstFired) {
        let nearby = 0;
        for (const p of particles) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            if (Math.sqrt(dx * dx + dy * dy) < BURST_CONFIG.clusterRadius) nearby++;
            if (nearby >= BURST_CONFIG.clusterCount) break;
        }
        if (nearby >= BURST_CONFIG.clusterCount) {
            triggerBurst(mouse.x, mouse.y);
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    updateBurst();
    particles.forEach(p => p.update());
    drawConnections();
    particles.forEach(p => p.draw());
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

document.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

init();
animate();


const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));


const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll('section[id]');
const backToTop = document.getElementById('backToTop');
const parallaxSections = document.querySelectorAll('.parallax-section .section-container');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    document.querySelector('nav').classList.toggle('scrolled', scrollY > 50);

    backToTop.classList.toggle('visible', scrollY > 600);

    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 200;
        if (scrollY >= top) current = sec.getAttribute('id');
    });
    navLinksAll.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });

    parallaxSections.forEach(container => {
        const rect = container.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - window.innerHeight / 2) * 0.04;
        container.style.transform = `translateY(${offset}px)`;
    });
});


function toggleNav() {
    document.querySelector('.nav-links').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});


const filterBtns = document.querySelectorAll('.portfolio-filters button');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});


projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeModal() {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
        m.classList.remove('active');
    });
    document.body.style.overflow = '';
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
