/* ============================================================
   B.LIFTED France — i18n v1.0
   Traductions FR / EN pour toutes les pages
   ============================================================ */
(function () {

  const T = {
    fr: {
      /* ── NAVIGATION ──────────────────────────────────── */
      'nav.services':    'Prestations',
      'nav.fleet':       'Flotte',
      'nav.territories': 'Territoires',
      'nav.weddings':    'Mariages',
      'nav.about':       'À propos',
      'nav.book':        'Réserver',
      'nav.entrust':     'Confier un déplacement',
      'nav.open':        'Ouvrir le menu',
      'nav.close':       'Fermer le menu',

      /* ── FOOTER ──────────────────────────────────────── */
      'footer.desc':             'Service de transport privé haut de gamme en Provence, French Riviera, Megève et Dubaï. Discrétion absolue, fiabilité sans compromis.',
      'footer.col.services':     'Services',
      'footer.col.territories':  'Territoires',
      'footer.col.contact':      'Contact',
      'footer.svc.transfer':     'Transfert aéroport',
      'footer.svc.disposal':     'Mise à disposition',
      'footer.svc.wedding':      'Mariages & événements',
      'footer.svc.stay':         'Séjours & coordination',
      'footer.svc.fleet':        'Notre flotte',
      'footer.legal.mentions':   'Mentions légales',
      'footer.legal.privacy':    'Confidentialité',

      /* ── HOME — HERO ─────────────────────────────────── */
      'home.hero.eyebrow':       'Partenaire des Professionnels du Luxe',
      'home.hero.title':         "Quand l'approximation<br><em>n'est pas une option.</em>",
      'home.hero.geo':           'Provence &nbsp;·&nbsp; French Riviera &nbsp;·&nbsp; Megève &nbsp;·&nbsp; Dubaï',
      'home.hero.stat2':         'Disponible 24h/24 · 7j/7',
      'home.hero.stat3':         'Discrétion absolue',
      'home.hero.stat4':         'Flotte Mercedes exclusivement',
      'home.hero.cta1':          'Confier un déplacement',
      'home.hero.cta2':          'Partenaires professionnels',
      'home.hero.trust':         'Wedding Planners · Travel Organizers',
      'home.hero.badge.label':   'Partenaire officiel',
      'home.hero.badge.value':   'Aéroport Avignon-Provence',
      'home.hero.scroll':        'Découvrir',

      /* ── HOME — STATEMENT ────────────────────────────── */
      'home.statement.text':     "Vos clients ne se demandent pas où est leur véhicule. Parce que nous avons <em>tout anticipé</em> avant qu'ils arrivent.",
      'home.statement.author':   'La promesse B.LIFTED',

      /* ── HOME — STATS ────────────────────────────────── */
      'home.stats.territories':  "Territoires d'excellence",
      'home.stats.satisfaction': 'Taux de satisfaction',
      'home.stats.experience':   "Années d'expérience",
      'home.stats.availability': 'Disponibilité totale',

      /* ── HOME — SERVICES ─────────────────────────────── */
      'home.services.eyebrow':   'Nos prestations',
      'home.services.title':     'Ce que nous <em>coordonnons</em>',
      'home.services.sub':       "Quatre expertises complémentaires, une seule exigence : l'irréprochable.",
      'home.svc1.title':         'Transfert aéroport & gare',
      'home.svc1.desc':          "Prise en charge personnalisée, suivi des vols en temps réel, attente sans limite. Votre chauffeur vous attend, quelle que soit l'heure.",
      'home.svc1.link':          'En savoir plus',
      'home.svc1.tag1':          'Aéroport Avignon',
      'home.svc1.tag2':          'Nice · Marseille',
      'home.svc1.tag3':          'Gares TGV',
      'home.svc2.title':         'Mise à disposition',
      'home.svc2.desc':          "Votre chauffeur dédié, à votre entière disposition pour la journée ou la demi-journée. Liberté totale, agenda flexible.",
      'home.svc2.link':          'En savoir plus',
      'home.svc2.tag1':          'Demi-journée',
      'home.svc2.tag2':          'Journée complète',
      'home.svc2.tag3':          'Multi-jours',
      'home.svc3.title':         'Mariages & événements',
      'home.svc3.desc':          "Coordination complète du transport pour votre jour J. Flotte adaptée, timing précis, discrétion absolue pour tous vos invités.",
      'home.svc3.link':          'Découvrir',
      'home.svc3.tag2':          'Séminaires',
      'home.svc3.tag3':          'Soirées privées',
      'home.svc4.title':         'Séjour & coordination',
      'home.svc4.desc':          "Accompagnement sur plusieurs jours pour vos séjours en Provence ou sur la Riviera. Votre chauffeur devient le fil conducteur de votre voyage.",
      'home.svc4.link':          'En savoir plus',
      'home.svc4.tag1':          'Séjours VIP',
      'home.svc4.tag2':          'Familles',
      'home.svc4.tag3':          'Groupes',

      /* ── HOME — SIMULATOR ────────────────────────────── */
      'home.sim.eyebrow':        'Configurateur',
      'home.sim.title':          'Décrivez votre <em>déplacement</em>',
      'home.sim.sub':            'En quelques clics, obtenez une estimation personnalisée pour votre prochain trajet.',
      'home.sim.q1':             'Quelle prestation souhaitez-vous ?',
      'home.sim.q1.hint':        'Sélectionnez la nature de votre déplacement',
      'home.sim.q2':             'Quel est votre territoire ?',
      'home.sim.q2.hint':        'Choisissez la zone de déplacement',
      'home.sim.q3':             'Quelle durée prévoyez-vous ?',
      'home.sim.q3.hint':        'Pour les mariages et séjours notamment',
      'home.sim.q4':             'Combien de passagers ?',
      'home.sim.q4.hint':        'Pour adapter le véhicule à votre groupe',
      'home.sim.svc1.label':     'Transfert',
      'home.sim.svc1.sub':      'Aéroport / Gare',
      'home.sim.svc1.desc':     'Prise en charge porte-à-porte, suivi vol en temps réel',
      'home.sim.svc2.label':     'Mise à disposition',
      'home.sim.svc2.sub':      'Chauffeur dédié',
      'home.sim.svc2.desc':     "Disponible à l'heure ou à la journée, selon votre agenda",
      'home.sim.svc3.label':     'Mariage',
      'home.sim.svc3.sub':      'Jour J & invités',
      'home.sim.svc3.desc':     'Coordination complète, véhicules décorés sur demande',
      'home.sim.svc4.label':     'Séjour',
      'home.sim.svc4.sub':      'Multi-événements',
      'home.sim.svc4.desc':     'Itinéraires multi-étapes, assistance logistique intégrale',
      'home.sim.ter1.desc':     'Avignon, Aix-en-Provence, Gordes, Les Baux',
      'home.sim.ter2.desc':     "Antibes, Saint-Tropez, Menton, côte d'Azur",
      'home.sim.ter3.desc':     "Chamonix, Courchevel, Val d'Isère, Albertville",
      'home.sim.ter4.sub':      'Émirats Arabes Unis',
      'home.sim.ter4.desc':     'Dubaï, Abu Dhabi, Sharjah — service bilingue',
      'home.sim.dur1.label':     'Demi-journée',
      'home.sim.dur1.sub':      "Jusqu'à 4h",
      'home.sim.dur1.desc':     'Idéal pour un transfert ou une excursion courte',
      'home.sim.dur2.label':     'Journée complète',
      'home.sim.dur2.sub':      '4h à 10h',
      'home.sim.dur2.desc':     "Visites, réunions d'affaires ou sorties culturelles",
      'home.sim.dur3.label':     'Multi-jours',
      'home.sim.dur3.sub':      '2 jours et plus',
      'home.sim.dur3.desc':     "Accompagnement sur l'ensemble de votre séjour",
      'home.sim.pax1.label':     '1 à 4 passagers',
      'home.sim.pax1.sub':      'Berline Mercedes',
      'home.sim.pax1.desc':     'Mercedes Classe E ou S, confort premium garanti',
      'home.sim.pax2.label':     '5 à 7 passagers',
      'home.sim.pax2.sub':      'Mercedes Classe V',
      'home.sim.pax2.desc':     'Van luxe avec espace bagages généreux',
      'home.sim.pax3.label':     '8 et plus',
      'home.sim.pax3.sub':      'Flotte multiple',
      'home.sim.pax3.desc':     'Flotte coordonnée, plusieurs véhicules si nécessaire',
      'home.sim.next':           'Continuer',
      'home.sim.back':           '← Retour',
      'home.sim.calc':           'Soumettre ma demande',
      'home.sim.result.label':   'Un déplacement d\'exception se construit ensemble.',
      'home.sim.result.note':    'Nos prestations ne s\'estiment pas — elles se conçoivent avec vous. Transmettez-nous votre programme sur WhatsApp, nous revenons vers vous sous 24h.',
      'home.sim.result.cta':     'Échanger avec l\'équipe',
      'home.sim.restart':        'Nouvelle simulation',

      /* ── HOME — TERRITORIES ──────────────────────────── */
      'home.territories.eyebrow': 'Nos destinations',
      'home.territories.title':  'Quatre <em>territoires</em> d\'exception',
      'home.territories.sub':    "De la Provence aux Émirats, une présence locale, une connaissance intime des routes.",
      'home.territories.explore': 'Explorer',
      'home.prov.desc':           "Alpilles, Luberon, Avignon. Le berceau de l'élégance provençale.",
      'home.riv.desc':            'Nice, Cannes, Monaco. La Côte d\'Azur dans toute sa splendeur.',
      'home.meg.desc':            'Alpes, Mont-Blanc. Le luxe discret des hauteurs enneigées.',
      'home.dub.desc':            "Émirats Arabes Unis. L'excellence au cœur du désert de cristal.",

      /* ── HOME — FLEET TEASER ─────────────────────────── */
      'home.fleet.eyebrow':      'Notre flotte',
      'home.fleet.title':        'Le confort<br><em>à l\'état pur</em>',
      'home.fleet.sub':          "Exclusivement Mercedes-Benz. Des véhicules entretenus selon les standards les plus exigeants, pour un confort irréprochable à chaque trajet.",
      'home.fleet.cta':          'Découvrir la flotte',
      'home.fleet.v.pax':        "Jusqu'à 7 passagers",
      'home.fleet.gle.type':     'SUV haut de gamme',
      'home.fleet.e.type':       'Berline executive',
      'home.fleet.s.type':       'Le summum du luxe',

      /* ── HOME — WEDDING ──────────────────────────────── */
      'home.wedding.eyebrow':    'Mariages & partenariats',
      'home.wedding.title':      'Le partenaire transport<br><em>de vos événements.</em>',
      'home.wedding.badge':      'Partenariat wedding planner',
      'home.wedding.feat1.t':    'Coordinateur partenaire',
      'home.wedding.feat1.d':    'Ligne directe avec votre équipe — avant, pendant et après chaque événement',
      'home.wedding.feat2.t':    'Planning synchronisé',
      'home.wedding.feat2.d':    'Votre rétroplanning devient le nôtre. Chaque rotation anticipée, chaque heure validée ensemble.',
      'home.wedding.feat3.t':    'Discrétion professionnelle',
      'home.wedding.feat3.d':    "Aucun nom, aucune photo communiquée. La confidentialité de vos clients est opérationnelle, pas rhétorique.",
      'home.wedding.cta':        "Initier un partenariat",

      /* ── HOME — TESTIMONIALS ─────────────────────────── */
      'home.testimonials.eyebrow': 'Témoignages',
      'home.testimonials.title': 'Ce qu\'ils <em>disent</em>',
      'home.test1.quote':   '"B.LIFTED est devenu notre partenaire transport exclusif en Provence. Réactivité parfaite, zéro surprise le Jour J. Exactement ce qu\'on attend quand on organise des mariages à 200 invités."',
      'home.test1.name':    'Marie-Charlotte P.',
      'home.test1.role':    'Wedding Planner, Avignon',
      'home.test2.quote':   '"Pour notre mariage en Provence, B.LIFTED a géré l\'intégralité de nos transferts. Discrétion parfaite, coordination exemplaire. Nos invités ont été enchantés."',
      'home.test2.name':    'Sophie & Thomas L.',
      'home.test2.role':    'Mariés, Saint-Rémy-de-Provence',
      'home.test3.quote':   '"Partenaire de confiance depuis 3 ans pour tous mes déplacements professionnels sur la Riviera. La fiabilité n\'est pas un mot, c\'est une réalité quotidienne."',
      'home.test3.name':    'Alexandre D.',
      'home.test3.role':    "Chef d'entreprise, Monaco",

      /* ── HOME — PROCESS ──────────────────────────────── */
      'home.process.eyebrow': 'Comment ça fonctionne',
      'home.proc1.title':  'Votre demande',
      'home.proc1.desc':   "Contactez-nous par téléphone, email ou via le formulaire. Décrivez votre déplacement en quelques lignes — nous nous chargeons du reste.",
      'home.proc2.title':  'Un devis sous 24h',
      'home.proc2.desc':   'Un interlocuteur dédié vous rappelle et établit un devis sur mesure. Tarif transparent, sans surprise. Vous validez en toute sérénité.',
      'home.proc3.title':  'Votre chauffeur',
      'home.proc3.desc':   "Le jour J, votre chauffeur attitré est là — ponctuel, en tenue, véhicule immaculé. Vous n'avez qu'à monter à bord.",

      /* ── HOME — FAQ ──────────────────────────────────── */
      'home.faq.eyebrow':  'Questions fréquentes',
      'home.faq.q1': 'Quels types de véhicules proposez-vous ?',
      'home.faq.a1': "Notre flotte est exclusivement composée de Mercedes-Benz : Classe E, Classe S, GLE et Classe V (jusqu'à 7 passagers). Tous nos véhicules sont récents, entretenus selon les standards les plus exigeants et préparés avant chaque mission.",
      'home.faq.q2': 'Intervenez-vous à toute heure, y compris la nuit ?',
      'home.faq.a2': "Oui. B.LIFTED est disponible 24h/24, 7j/7, y compris les jours fériés. Nous assurons les transferts aéroport tôt le matin ou tard dans la nuit, sans supplément d'horaire non-annoncé.",
      'home.faq.q3': 'Comment fonctionne la mise à disposition ?',
      'home.faq.a3': "Votre chauffeur est à votre entière disposition pour la durée choisie (demi-journée, journée, plusieurs jours). Il vous accompagne à chacun de vos rendez-vous, s'adapte aux changements de programme en temps réel, et reste joignable à tout moment.",
      'home.faq.q4': 'Dans quelles zones intervenez-vous ?',
      'home.faq.a4': "Nous opérons principalement en Provence (Avignon, Alpilles, Luberon), sur la French Riviera (Nice, Cannes, Monaco, Antibes), à Megève et dans les Alpes, ainsi qu'à Dubaï. Des interventions hors zones sont possibles sur demande.",
      'home.faq.q5': 'Gérez-vous la coordination transport pour les mariages ?',
      'home.faq.a5': "Absolument. Nous prenons en charge l'intégralité de la logistique transport de votre mariage : transfert des mariés, navettes invités, coordination avec les autres prestataires. Un seul interlocuteur du début à la fin.",
      'home.faq.q6': 'Comment obtenir un devis ?',
      'home.faq.a6': "Via notre formulaire en ligne, par email à contact@bliftedfrance.com ou par téléphone au +(33) 6 36 01 72 35. Vous recevez un devis personnalisé sous 2 heures en jours ouvrés.",

      /* ── HOME — CTA ──────────────────────────────────── */
      'home.cta.eyebrow': 'Prêt à commencer ?',
      'home.cta.btn1':    'Confier un déplacement',
      'home.cta.btn2':    'Simuler un tarif',
      'home.cta.phone':   'Ou appelez directement :',

      /* ── SERVICES PAGE ───────────────────────────────── */
      'services.hero.eyebrow': 'Nos prestations',
      'services.hero.cta':     'Confier un déplacement',
      'services.s1.eyebrow':   '01 / Transfert',
      'services.s1.before':    "Avant que vous n'atterrissiez.",
      'services.s1.cta':       'Demander un transfert',
      'services.s2.eyebrow':   '02 / Mise à disposition',
      'services.s2.before':    'Votre chauffeur pour la journée.',
      'services.s2.cta':       'Confier une journée',
      'services.s3.eyebrow':   '03 / Coordination mariage',
      'services.s3.before':    'Le timing de votre grand jour.',
      'services.s3.cta':       'En savoir plus sur les mariages',
      'services.s4.eyebrow':   '04 / Événement multi-sites',
      'services.s4.before':    'Plusieurs véhicules. Une seule coordination.',
      'services.s4.cta':       "Confier l'événement",
      'services.standards.eyebrow': 'Nos standards',
      'services.std1.title':   'Discrétion totale',
      'services.std2.title':   'Un seul interlocuteur',
      'services.std3.title':   'Ponctualité sans négo',
      'services.std4.title':   'Véhicule parfait',
      'services.std5.title':   'Tenue et posture',
      'services.std6.title':   'Réponse sous 24h',
      'services.cta.eyebrow':  'Décrivez votre mission.',
      'services.cta.btn1':     'Confier un déplacement',
      'services.cta.btn2':     'Estimer le budget',

      /* ── FLEET PAGE ──────────────────────────────────── */
      'fleet.hero.eyebrow':    'Notre flotte',
      'fleet.v.tags':          'Familles · Groupes · Mariages · Séjours',
      'fleet.gle.tags':        'Alpes · Megève · Villas · Prestige',
      'fleet.e.tags':          'Business · Solo · Discret',
      'fleet.s.tags':          'VIP · Cérémonies · Ultra-prestige',
      'fleet.phil.cta':        'Décrire votre contexte',
      'fleet.cta.btn1':        'Confier un déplacement',
      'fleet.cta.btn2':        'Estimer le budget',

      /* ── WEDDINGS PAGE ───────────────────────────────── */
      'weddings.hero.eyebrow': 'Coordination Mariage · Partenariats B2B',
      'weddings.hero.cta1':    'Partenariat wedding planner',
      'weddings.hero.cta2':    'Coordonner notre mariage',
      'weddings.coord.eyebrow':'Ce que nous gérons',
      'weddings.coord1.title': 'Accueil VIP des invités',
      'weddings.coord2.title': 'Arrivées protocolaires des mariés',
      'weddings.coord3.title': 'Rotations villa → cérémonie → réception',
      'weddings.coord4.title': 'Retours discrets de fin de soirée',
      'weddings.proc.eyebrow': 'Notre processus',
      'weddings.proc1.title':  'Briefing avec votre équipe',
      'weddings.proc2.title':  'Planning de transport partagé',
      'weddings.proc3.title':  'Exécution le Jour J',
      'weddings.planners.eyebrow': 'Pour les wedding planners',
      'weddings.planners.cta': 'Initier un partenariat',
      'weddings.territories.eyebrow': "Nos territoires mariage",
      'weddings.cta.btn1':     'Partenariat professionnel',
      'weddings.cta.btn2':     'Coordonner notre mariage',

      /* ── ABOUT PAGE ──────────────────────────────────── */
      'about.hero.eyebrow':    'B.LIFTED France',
      'about.manifesto.eyebrow': 'Notre philosophie',
      'about.manifesto.cta':   'Confier un déplacement',
      'about.founder.eyebrow': 'La fondatrice',
      'about.pillars.eyebrow': 'Les piliers',
      'about.selective.eyebrow': 'Sélectivité assumée',
      'about.selective.cta':   'Initier la coordination',
      'about.partners.eyebrow': "Écosystème de confiance",
      'about.partners.cta':    'Proposer un partenariat',

      /* ── CONTACT PAGE ────────────────────────────────── */
      'contact.hero.eyebrow':  'Initier une demande',

      /* ── PROVENCE ────────────────────────────────────── */
      'provence.hero.eyebrow': 'Territoire — Provence',
      'provence.pres.eyebrow': 'Provence',
      'provence.pres.partner': "Partenaire officiel — Aéroport d'Avignon-Provence",
      'provence.pres.cta':     'Organiser un transfert Provence',
      'provence.zones.eyebrow': 'Zones couvertes',
      'provence.z1.title':     'Avignon & Grand Avignon',
      'provence.z2.title':     'Lubéron',
      'provence.z3.title':     'Alpilles',
      'provence.z4.title':     'Aix-en-Provence',
      'provence.z5.title':     'Marseille & Aéroport',
      'provence.z6.title':     'Camargue & Arles',

      /* ── FRENCH RIVIERA ──────────────────────────────── */
      'riviera.hero.eyebrow':  'Territoire — French Riviera',
      'riviera.pres.eyebrow':  'French Riviera',
      'riviera.pres.cta':      'Organiser un transfert Riviera',
      'riviera.zones.eyebrow': 'Zones couvertes',
      'riviera.z1.title':      'Nice & Aéroport NCE',
      'riviera.z2.title':      'Cannes & Croisette',
      'riviera.z3.title':      'Monaco',
      'riviera.z4.title':      'Saint-Tropez & Golfe',
      'riviera.z5.title':      "Antibes & Cap d'Antibes",
      'riviera.z6.title':      'Héliports & Ports privés',
      'riviera.cta':           'Confier un déplacement sur la Riviera',

      /* ── MEGÈVE ──────────────────────────────────────── */
      'megeve.hero.eyebrow':   'Territoire — Megève & Alpes',
      'megeve.pres.eyebrow':   'Megève & Alpes',
      'megeve.pres.cta':       'Organiser un transfert Megève',
      'megeve.zones.eyebrow':  'Zones et liaisons couvertes',
      'megeve.z1.title':       'Genève — Megève',
      'megeve.z2.title':       'Lyon — Megève',
      'megeve.z3.title':       'Annecy & Chamonix',
      'megeve.z4.title':       'Chalets privés & Accès',
      'megeve.z5.title':       'Remontées & Domaines ski',
      'megeve.z6.title':       'Restaurants & Activités',
      'megeve.cta':            'Confier un déplacement à Megève',

      /* ── PARIS ───────────────────────────────────────── */
      'paris.hero.eyebrow':    'Territoire — Paris & Île-de-France',
      'paris.pres.eyebrow':    'Paris & Île-de-France',
      'paris.pres.cta':        'Organiser un transfert Paris',
      'paris.zones.eyebrow':   'Zones couvertes',
      'paris.z1.title':        'Aéroport CDG',
      'paris.z2.title':        'Aéroport Orly',
      'paris.z3.title':        'Paris intra-muros',
      'paris.z4.title':        'Versailles & Grand Paris',
      'paris.z5.title':        'Gares Parisiennes',
      'paris.z6.title':        'Châteaux & Sites privés',
      'paris.cta':             'Confier un déplacement à Paris',

      /* ── DUBAI ───────────────────────────────────────── */
      'dubai.hero.eyebrow':    'Territoire · Dubaï',
      'dubai.stat.avail':      'Disponibilité',
      'dubai.stat.pickup':     'Prise en charge DXB',
      'dubai.stat.vehicles':   'Véhicules premium',
      'dubai.stat.bilingual':  'Bilingue FR / EN',
      'dubai.pres.eyebrow':    'Notre présence à Dubaï',
      'dubai.zones.eyebrow':   'Zones desservies',
      'dubai.z1.title':        'Aéroport DXB',
      'dubai.z2.title':        'Aéroport DWC',
      'dubai.z3.title':        'Palm Jumeirah',
      'dubai.z4.title':        'Downtown & Burj Khalifa',
      'dubai.z5.title':        'DIFC & Business Bay',
      'dubai.z6.title':        'Marina & JBR',
      'dubai.cta.eyebrow':     'Prêt à réserver ?',
      'dubai.cta.btn1':        'Faire une demande',
      'dubai.cta.btn2':        'Appeler directement',
    },

    en: {
      /* ── NAVIGATION ──────────────────────────────────── */
      'nav.services':    'Services',
      'nav.fleet':       'Fleet',
      'nav.territories': 'Destinations',
      'nav.weddings':    'Weddings',
      'nav.about':       'About',
      'nav.book':        'Book now',
      'nav.entrust':     'Plan a journey',
      'nav.open':        'Open menu',
      'nav.close':       'Close menu',

      /* ── FOOTER ──────────────────────────────────────── */
      'footer.desc':             'Premium private chauffeur service in Provence, French Riviera, Megève and Dubai. Absolute discretion, uncompromising reliability.',
      'footer.col.services':     'Services',
      'footer.col.territories':  'Destinations',
      'footer.col.contact':      'Contact',
      'footer.svc.transfer':     'Airport transfer',
      'footer.svc.disposal':     'Private chauffeur',
      'footer.svc.wedding':      'Weddings & events',
      'footer.svc.stay':         'Multi-day stays',
      'footer.svc.fleet':        'Our fleet',
      'footer.legal.mentions':   'Legal notice',
      'footer.legal.privacy':    'Privacy',

      /* ── HOME — HERO ─────────────────────────────────── */
      'home.hero.eyebrow':       'Partner for Luxury Professionals',
      'home.hero.title':         'When approximation<br><em>is not an option.</em>',
      'home.hero.geo':           'Provence &nbsp;·&nbsp; French Riviera &nbsp;·&nbsp; Megève &nbsp;·&nbsp; Dubai',
      'home.hero.stat2':         'Available 24/7',
      'home.hero.stat3':         'Absolute discretion',
      'home.hero.stat4':         'Exclusively Mercedes fleet',
      'home.hero.cta1':          'Plan a journey',
      'home.hero.cta2':          'Professional partners',
      'home.hero.trust':         'Wedding Planners · Travel Organizers',
      'home.hero.badge.label':   'Official partner',
      'home.hero.badge.value':   'Avignon-Provence Airport',
      'home.hero.scroll':        'Discover',

      /* ── HOME — STATEMENT ────────────────────────────── */
      'home.statement.text':     "Your clients don't wonder where their vehicle is. Because we <em>anticipated everything</em> before they arrived.",
      'home.statement.author':   'The B.LIFTED promise',

      /* ── HOME — STATS ────────────────────────────────── */
      'home.stats.territories':  'Premium destinations',
      'home.stats.satisfaction': 'Satisfaction rate',
      'home.stats.experience':   'Years of experience',
      'home.stats.availability': 'Total availability',

      /* ── HOME — SERVICES ─────────────────────────────── */
      'home.services.eyebrow':   'Our services',
      'home.services.title':     'What we <em>coordinate</em>',
      'home.services.sub':       'Four complementary expertises, one single standard: irreproachable.',
      'home.svc1.title':         'Airport & station transfer',
      'home.svc1.desc':          'Personalised pick-up, real-time flight tracking, unlimited waiting. Your chauffeur awaits, whatever the hour.',
      'home.svc1.link':          'Learn more',
      'home.svc1.tag1':          'Avignon Airport',
      'home.svc1.tag2':          'Nice · Marseille',
      'home.svc1.tag3':          'TGV Stations',
      'home.svc2.title':         'Private chauffeur',
      'home.svc2.desc':          'Your dedicated chauffeur, entirely at your disposal for the day or half-day. Total freedom, flexible schedule.',
      'home.svc2.link':          'Learn more',
      'home.svc2.tag1':          'Half-day',
      'home.svc2.tag2':          'Full day',
      'home.svc2.tag3':          'Multi-day',
      'home.svc3.title':         'Weddings & events',
      'home.svc3.desc':          'Complete transport coordination for your wedding day. Adapted fleet, precise timing, absolute discretion for all your guests.',
      'home.svc3.link':          'Discover',
      'home.svc3.tag2':          'Seminars',
      'home.svc3.tag3':          'Private events',
      'home.svc4.title':         'Stay & coordination',
      'home.svc4.desc':          'Multi-day support for your stays in Provence or on the Riviera. Your chauffeur becomes the backbone of your journey.',
      'home.svc4.link':          'Learn more',
      'home.svc4.tag1':          'VIP stays',
      'home.svc4.tag2':          'Families',
      'home.svc4.tag3':          'Groups',

      /* ── HOME — SIMULATOR ────────────────────────────── */
      'home.sim.eyebrow':        'Configurator',
      'home.sim.title':          'Describe your <em>journey</em>',
      'home.sim.sub':            'In a few clicks, get a personalised estimate for your next trip.',
      'home.sim.q1':             'Which service do you need?',
      'home.sim.q1.hint':        'Select the type of journey',
      'home.sim.q2':             'Which destination?',
      'home.sim.q2.hint':        'Choose your travel area',
      'home.sim.q3':             'How long do you need?',
      'home.sim.q3.hint':        'Especially for weddings and stays',
      'home.sim.q4':             'How many passengers?',
      'home.sim.q4.hint':        'To select the right vehicle',
      'home.sim.svc1.label':     'Transfer',
      'home.sim.svc1.sub':      'Airport / Station',
      'home.sim.svc1.desc':     'Door-to-door pick-up, real-time flight tracking',
      'home.sim.svc2.label':     'Private chauffeur',
      'home.sim.svc2.sub':      'Dedicated driver',
      'home.sim.svc2.desc':     'Available by the hour or day, according to your schedule',
      'home.sim.svc3.label':     'Wedding',
      'home.sim.svc3.sub':      'Wedding day & guests',
      'home.sim.svc3.desc':     'Full coordination, decorated vehicles on request',
      'home.sim.svc4.label':     'Stay',
      'home.sim.svc4.sub':      'Multi-event',
      'home.sim.svc4.desc':     'Multi-leg itineraries, full logistical support',
      'home.sim.ter1.desc':     'Avignon, Aix-en-Provence, Gordes, Les Baux',
      'home.sim.ter2.desc':     'Antibes, Saint-Tropez, Menton, Côte d\'Azur',
      'home.sim.ter3.desc':     'Chamonix, Courchevel, Val d\'Isère, Albertville',
      'home.sim.ter4.sub':      'United Arab Emirates',
      'home.sim.ter4.desc':     'Dubai, Abu Dhabi, Sharjah — bilingual service',
      'home.sim.dur1.label':     'Half-day',
      'home.sim.dur1.sub':      'Up to 4 hours',
      'home.sim.dur1.desc':     'Ideal for a transfer or short excursion',
      'home.sim.dur2.label':     'Full day',
      'home.sim.dur2.sub':      '4 to 10 hours',
      'home.sim.dur2.desc':     'Visits, business meetings or cultural outings',
      'home.sim.dur3.label':     'Multi-day',
      'home.sim.dur3.sub':      '2 days or more',
      'home.sim.dur3.desc':     'Accompaniment throughout your entire stay',
      'home.sim.pax1.label':     '1 to 4 passengers',
      'home.sim.pax1.sub':      'Mercedes saloon',
      'home.sim.pax1.desc':     'Mercedes E-Class or S-Class, guaranteed premium comfort',
      'home.sim.pax2.label':     '5 to 7 passengers',
      'home.sim.pax2.sub':      'Mercedes V-Class',
      'home.sim.pax2.desc':     'Luxury van with generous luggage space',
      'home.sim.pax3.label':     '8 and above',
      'home.sim.pax3.sub':      'Multiple fleet',
      'home.sim.pax3.desc':     'Coordinated fleet, multiple vehicles as needed',
      'home.sim.next':           'Continue',
      'home.sim.back':           '← Back',
      'home.sim.calc':           'Submit my request',
      'home.sim.result.label':   'Every exceptional journey is built together.',
      'home.sim.result.note':    'Our services aren\'t estimated — they\'re designed around you. Share your programme on WhatsApp and we\'ll get back to you within 24 hours.',
      'home.sim.result.cta':     'Talk to the team',
      'home.sim.restart':        'New configuration',

      /* ── HOME — TERRITORIES ──────────────────────────── */
      'home.territories.eyebrow': 'Our destinations',
      'home.territories.title':  'Four <em>exceptional</em> destinations',
      'home.territories.sub':    'From Provence to the Emirates, a local presence, an intimate knowledge of the roads.',
      'home.territories.explore': 'Explore',
      'home.prov.desc':           'Alpilles, Luberon, Avignon. The cradle of Provençal elegance.',
      'home.riv.desc':            'Nice, Cannes, Monaco. The French Riviera in all its splendour.',
      'home.meg.desc':            'Alps, Mont-Blanc. The discreet luxury of snow-covered heights.',
      'home.dub.desc':            'United Arab Emirates. Excellence at the heart of the crystal desert.',

      /* ── HOME — FLEET TEASER ─────────────────────────── */
      'home.fleet.eyebrow':      'Our fleet',
      'home.fleet.title':        'Comfort<br><em>in its purest form</em>',
      'home.fleet.sub':          'Exclusively Mercedes-Benz. Vehicles maintained to the most demanding standards, for irreproachable comfort on every journey.',
      'home.fleet.cta':          'Discover the fleet',
      'home.fleet.v.pax':        'Up to 7 passengers',
      'home.fleet.gle.type':     'Premium SUV',
      'home.fleet.e.type':       'Executive saloon',
      'home.fleet.s.type':       'The ultimate in luxury',

      /* ── HOME — WEDDING ──────────────────────────────── */
      'home.wedding.eyebrow':    'Weddings & partnerships',
      'home.wedding.title':      'The transport partner<br><em>for your events.</em>',
      'home.wedding.badge':      'Wedding planner partner',
      'home.wedding.feat1.t':    'Partner coordinator',
      'home.wedding.feat1.d':    'Direct line to your team — before, during and after every event',
      'home.wedding.feat2.t':    'Synchronised planning',
      'home.wedding.feat2.d':    'Your schedule becomes ours. Every rotation anticipated, every hour confirmed together.',
      'home.wedding.feat3.t':    'Professional discretion',
      'home.wedding.feat3.d':    'No names, no photos shared. Your clients\' confidentiality is operational, not rhetorical.',
      'home.wedding.cta':        'Initiate a partnership',

      /* ── HOME — TESTIMONIALS ─────────────────────────── */
      'home.testimonials.eyebrow': 'Testimonials',
      'home.testimonials.title': 'What they <em>say</em>',
      'home.test1.quote':   '"B.LIFTED has become our exclusive transport partner in Provence. Perfect responsiveness, zero surprises on the day. Exactly what you expect when organising weddings for 200 guests."',
      'home.test1.name':    'Marie-Charlotte P.',
      'home.test1.role':    'Wedding Planner, Avignon',
      'home.test2.quote':   '"For our wedding in Provence, B.LIFTED managed all our transfers. Perfect discretion, exemplary coordination. Our guests were delighted."',
      'home.test2.name':    'Sophie & Thomas L.',
      'home.test2.role':    'Newlyweds, Saint-Rémy-de-Provence',
      'home.test3.quote':   '"A trusted partner for 3 years for all my professional travel on the Riviera. Reliability is not just a word — it\'s a daily reality."',
      'home.test3.name':    'Alexandre D.',
      'home.test3.role':    'Business owner, Monaco',

      /* ── HOME — PROCESS ──────────────────────────────── */
      'home.process.eyebrow': 'How it works',
      'home.proc1.title':  'Your request',
      'home.proc1.desc':   'Contact us by phone, email or via the form. Describe your journey in a few lines — we handle the rest.',
      'home.proc2.title':  'Quote within 24h',
      'home.proc2.desc':   'A dedicated contact calls you back and prepares a tailored quote. Transparent pricing, no surprises. You confirm with peace of mind.',
      'home.proc3.title':  'Your chauffeur',
      'home.proc3.desc':   'On the day, your assigned chauffeur is there — punctual, dressed, vehicle immaculate. You just get in.',

      /* ── HOME — FAQ ──────────────────────────────────── */
      'home.faq.eyebrow':  'Frequently asked questions',
      'home.faq.q1': 'What types of vehicles do you offer?',
      'home.faq.a1': 'Our fleet consists exclusively of Mercedes-Benz: E-Class, S-Class, GLE and V-Class (up to 7 passengers). All vehicles are recent, maintained to the highest standards and prepared before every mission.',
      'home.faq.q2': 'Are you available at any hour, including at night?',
      'home.faq.a2': 'Yes. B.LIFTED is available 24/7, including public holidays. We handle early morning and late-night airport transfers, with no unannounced surcharge.',
      'home.faq.q3': 'How does the private chauffeur service work?',
      'home.faq.a3': 'Your chauffeur is entirely at your disposal for the chosen duration (half-day, full day, several days). He accompanies you to each appointment, adapts to schedule changes in real time, and remains reachable at all times.',
      'home.faq.q4': 'Which areas do you cover?',
      'home.faq.a4': 'We operate primarily in Provence (Avignon, Alpilles, Luberon), on the French Riviera (Nice, Cannes, Monaco, Antibes), in Megève and the Alps, and in Dubai. Coverage outside these areas is available on request.',
      'home.faq.q5': 'Do you handle transport coordination for weddings?',
      'home.faq.a5': 'Absolutely. We take full charge of all wedding transport logistics: bride and groom transfers, guest shuttles, coordination with other vendors. One single contact from start to finish.',
      'home.faq.q6': 'How do I get a quote?',
      'home.faq.a6': 'Via our online form, by email at contact@bliftedfrance.com or by phone at +(33) 6 36 01 72 35. You receive a personalised quote within 2 hours on working days.',

      /* ── HOME — CTA ──────────────────────────────────── */
      'home.cta.eyebrow': 'Ready to begin?',
      'home.cta.btn1':    'Plan a journey',
      'home.cta.btn2':    'Estimate cost',
      'home.cta.phone':   'Or call directly:',

      /* ── SERVICES PAGE ───────────────────────────────── */
      'services.hero.eyebrow': 'Our services',
      'services.hero.cta':     'Plan a journey',
      'services.s1.eyebrow':   '01 / Transfer',
      'services.s1.before':    'Before you land.',
      'services.s1.cta':       'Request a transfer',
      'services.s2.eyebrow':   '02 / Private chauffeur',
      'services.s2.before':    'Your chauffeur for the day.',
      'services.s2.cta':       'Book a day',
      'services.s3.eyebrow':   '03 / Wedding coordination',
      'services.s3.before':    'The timing of your big day.',
      'services.s3.cta':       'Wedding planner partnership',
      'services.s4.eyebrow':   '04 / Multi-venue event',
      'services.s4.before':    'Multiple vehicles. One coordination.',
      'services.s4.cta':       'Entrust the event',
      'services.standards.eyebrow': 'Our standards',
      'services.std1.title':   'Total discretion',
      'services.std2.title':   'One single contact',
      'services.std3.title':   'Non-negotiable punctuality',
      'services.std4.title':   'Perfect vehicle',
      'services.std5.title':   'Dress & demeanour',
      'services.std6.title':   'Response within 24h',
      'services.cta.eyebrow':  'Describe your mission.',
      'services.cta.btn1':     'Plan a journey',
      'services.cta.btn2':     'Estimate budget',

      /* ── FLEET PAGE ──────────────────────────────────── */
      'fleet.hero.eyebrow':    'Our fleet',
      'fleet.v.tags':          'Families · Groups · Weddings · Stays',
      'fleet.gle.tags':        'Alps · Megève · Villas · Prestige',
      'fleet.e.tags':          'Business · Solo · Discreet',
      'fleet.s.tags':          'VIP · Ceremonies · Ultra-prestige',
      'fleet.phil.cta':        'Describe your context',
      'fleet.cta.btn1':        'Plan a journey',
      'fleet.cta.btn2':        'Estimate budget',

      /* ── WEDDINGS PAGE ───────────────────────────────── */
      'weddings.hero.eyebrow': 'Wedding Coordination · B2B Partnerships',
      'weddings.hero.cta1':    'Wedding planner partnership',
      'weddings.hero.cta2':    'Coordinate our wedding',
      'weddings.coord.eyebrow':'What we handle',
      'weddings.coord1.title': 'VIP guest arrivals',
      'weddings.coord2.title': 'Ceremonial arrivals of the couple',
      'weddings.coord3.title': 'Villa → ceremony → reception',
      'weddings.coord4.title': 'Discreet end-of-evening returns',
      'weddings.proc.eyebrow': 'Our process',
      'weddings.proc1.title':  'Briefing with your team',
      'weddings.proc2.title':  'Shared transport plan',
      'weddings.proc3.title':  'Execution on the day',
      'weddings.planners.eyebrow': 'For wedding planners',
      'weddings.planners.cta': 'Initiate a partnership',
      'weddings.territories.eyebrow': 'Our wedding territories',
      'weddings.cta.btn1':     'Professional partnership',
      'weddings.cta.btn2':     'Coordinate our wedding',

      /* ── ABOUT PAGE ──────────────────────────────────── */
      'about.hero.eyebrow':    'B.LIFTED France',
      'about.manifesto.eyebrow': 'Our philosophy',
      'about.manifesto.cta':   'Plan a journey',
      'about.founder.eyebrow': 'The founder',
      'about.pillars.eyebrow': 'The pillars',
      'about.selective.eyebrow': 'Assumed selectivity',
      'about.selective.cta':   'Initiate coordination',
      'about.partners.eyebrow': 'Ecosystem of trust',
      'about.partners.cta':    'Propose a partnership',

      /* ── CONTACT PAGE ────────────────────────────────── */
      'contact.hero.eyebrow':  'Initiate a request',

      /* ── PROVENCE ────────────────────────────────────── */
      'provence.hero.eyebrow': 'Destination — Provence',
      'provence.pres.eyebrow': 'Provence',
      'provence.pres.partner': 'Official partner — Avignon-Provence Airport',
      'provence.pres.cta':     'Plan a Provence transfer',
      'provence.zones.eyebrow': 'Areas covered',
      'provence.z1.title':     'Avignon & Greater Avignon',
      'provence.z2.title':     'Luberon',
      'provence.z3.title':     'Alpilles',
      'provence.z4.title':     'Aix-en-Provence',
      'provence.z5.title':     'Marseille & Airport',
      'provence.z6.title':     'Camargue & Arles',

      /* ── FRENCH RIVIERA ──────────────────────────────── */
      'riviera.hero.eyebrow':  'Destination — French Riviera',
      'riviera.pres.eyebrow':  'French Riviera',
      'riviera.pres.cta':      'Plan a Riviera transfer',
      'riviera.zones.eyebrow': 'Areas covered',
      'riviera.z1.title':      'Nice & NCE Airport',
      'riviera.z2.title':      'Cannes & La Croisette',
      'riviera.z3.title':      'Monaco',
      'riviera.z4.title':      'Saint-Tropez & Gulf',
      'riviera.z5.title':      "Antibes & Cap d'Antibes",
      'riviera.z6.title':      'Helipads & Private Ports',
      'riviera.cta':           'Plan a Riviera transfer',

      /* ── MEGÈVE ──────────────────────────────────────── */
      'megeve.hero.eyebrow':   'Destination — Megève & Alps',
      'megeve.pres.eyebrow':   'Megève & Alps',
      'megeve.pres.cta':       'Plan a Megève transfer',
      'megeve.zones.eyebrow':  'Areas & routes covered',
      'megeve.z1.title':       'Geneva — Megève',
      'megeve.z2.title':       'Lyon — Megève',
      'megeve.z3.title':       'Annecy & Chamonix',
      'megeve.z4.title':       'Private Chalets & Access',
      'megeve.z5.title':       'Ski Lifts & Domains',
      'megeve.z6.title':       'Restaurants & Activities',
      'megeve.cta':            'Plan a Megève transfer',

      /* ── PARIS ───────────────────────────────────────── */
      'paris.hero.eyebrow':    'Destination — Paris & Île-de-France',
      'paris.pres.eyebrow':    'Paris & Île-de-France',
      'paris.pres.cta':        'Plan a Paris transfer',
      'paris.zones.eyebrow':   'Areas covered',
      'paris.z1.title':        'CDG Airport',
      'paris.z2.title':        'Orly Airport',
      'paris.z3.title':        'Paris city centre',
      'paris.z4.title':        'Versailles & Greater Paris',
      'paris.z5.title':        'Paris Train Stations',
      'paris.z6.title':        'Châteaux & Private Venues',
      'paris.cta':             'Plan a Paris transfer',

      /* ── DUBAI ───────────────────────────────────────── */
      'dubai.hero.eyebrow':    'Destination · Dubai',
      'dubai.stat.avail':      'Availability',
      'dubai.stat.pickup':     'Pick-up DXB',
      'dubai.stat.vehicles':   'Premium vehicles',
      'dubai.stat.bilingual':  'Bilingual FR / EN',
      'dubai.pres.eyebrow':    'Our presence in Dubai',
      'dubai.zones.eyebrow':   'Areas covered',
      'dubai.z1.title':        'DXB Airport',
      'dubai.z2.title':        'DWC Airport',
      'dubai.z3.title':        'Palm Jumeirah',
      'dubai.z4.title':        'Downtown & Burj Khalifa',
      'dubai.z5.title':        'DIFC & Business Bay',
      'dubai.z6.title':        'Marina & JBR',
      'dubai.cta.eyebrow':     'Ready to book?',
      'dubai.cta.btn1':        'Make a request',
      'dubai.cta.btn2':        'Call directly',
    }
  };

  /* ── Engine ──────────────────────────────────────────── */
  let lang = localStorage.getItem('bl-lang') || 'fr';

  function apply(l) {
    lang = l;
    localStorage.setItem('bl-lang', l);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[l] && T[l][key] !== undefined) {
        el.textContent = T[l][key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (T[l] && T[l][key] !== undefined) {
        el.innerHTML = T[l][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (T[l] && T[l][key] !== undefined) {
        el.placeholder = T[l][key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (T[l] && T[l][key] !== undefined) {
        el.setAttribute('aria-label', T[l][key]);
      }
    });

    document.querySelectorAll('.header__lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.lang === l);
    });

    document.documentElement.lang = l === 'fr' ? 'fr-FR' : 'en-GB';
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(lang);

    document.querySelectorAll('.header__lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(this.dataset.lang);
      });
    });
  });

  window.BL = window.BL || {};
  window.BL.i18n = { apply: apply, t: function(key) { return T[lang][key] || key; } };

})();
