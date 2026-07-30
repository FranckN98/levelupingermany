export type Language = 'fr' | 'en' | 'de';

export interface LocalizedText {
  fr: string;
  en: string;
  de: string;
}

export const content: Record<Language, {
  navigation: Record<'home' | 'about' | 'appearances' | 'gallery' | 'book', string>;
  hero: { eyebrow: string; title: string; titleAccent: string; introduction: string; roles: string; book: string; appearances: string };
  stats: { events: string; people: string };
  about: { eyebrow: string; title: string; body: string; detail: string; qualities: string[] };
  gallery: { eyebrow: string; title: string; hint: string; previous: string; next: string; close: string };
  appearances: { eyebrow: string; title: string; body: string; explore: string; close: string; date: string; location: string; role: string };
  contact: { eyebrow: string; title: string; body: string; book: string; formTitle: string; fields: Record<'name' | 'organisation' | 'email' | 'phone' | 'date' | 'location' | 'type' | 'message', string>; send: string };
}> = {
  fr: {
    navigation: { home: 'Accueil', about: 'À propos', appearances: 'Événements', gallery: 'Galerie', book: 'Réserver Eddy' },
    hero: { eyebrow: 'Animateur · Modérateur · Speaker · Maître de cérémonie', title: 'Bonjour, je suis', titleAccent: 'Eddy Gaetan.', introduction: 'J’apporte de la présence, de l’énergie et du sens à chaque scène.', roles: 'Je crée le lien entre le programme, les intervenants et la salle.', book: 'Réserver Eddy 🎤', appearances: 'Voir les événements' },
    stats: { events: 'Événements réalisés', people: 'Personnes touchées' },
    about: { eyebrow: 'À propos d’Eddy', title: 'Une présence qui donne le ton.', body: 'Eddy Gaetan accompagne les événements où le fond compte autant que l’énergie. Il prépare chaque séquence avec précision, écoute les intervenants et lit la salle pour que le programme garde son rythme naturel.', detail: 'Sur une conférence, un panel ou une cérémonie, il sait donner de l’espace aux voix invitées, relancer une conversation et faire de chaque transition un vrai moment. Les organisateurs gagnent un partenaire fiable. Le public vit un événement plus clair, plus vivant et plus humain.', qualities: ['Conduite de scène', 'Panels et conversations', 'Événements corporate', 'Français · English · Deutsch'] },
    gallery: { eyebrow: 'En images', title: 'L’énergie se voit.', hint: 'Faites défiler pour découvrir les moments de scène.', previous: 'Photo précédente', next: 'Photo suivante', close: 'Fermer l’image' },
    appearances: { eyebrow: 'Sur scène', title: 'Apparitions et événements', body: 'Une sélection de formats où la voix, le rythme et la relation au public font toute la différence.', explore: 'Découvrir l’événement', close: 'Fermer les détails', date: 'Date', location: 'Lieu', role: 'Rôle' },
    contact: { eyebrow: 'Parlons de votre événement', title: 'Apportons de la présence à votre prochain événement.', body: 'Partagez le contexte, le public et l’intention. Eddy vous répondra avec une approche adaptée à votre scène.', book: 'Réserver Eddy 🎤', formTitle: 'Votre projet', fields: { name: 'Nom', organisation: 'Organisation', email: 'Adresse email', phone: 'Téléphone (facultatif)', date: 'Date de l’événement', location: 'Lieu de l’événement', type: 'Type d’événement', message: 'Votre message' }, send: 'Envoyer la demande' },
  },
  en: {
    navigation: { home: 'Home', about: 'About Eddy', appearances: 'Appearances', gallery: 'Gallery', book: 'Book Eddy' },
    hero: { eyebrow: 'Event Host · Moderator · Speaker · Master of Ceremony', title: 'Hi, I’m', titleAccent: 'Eddy Gaetan.', introduction: 'I bring presence, energy and purpose to every stage.', roles: 'I connect the programme, the speakers and the room.', book: 'Book Eddy 🎤', appearances: 'View Event Appearances' },
    stats: { events: 'Events delivered', people: 'People reached' },
    about: { eyebrow: 'About Eddy', title: 'The presence that sets the tone.', body: 'Eddy Gaetan works on events where substance matters as much as energy. He prepares every sequence with care, listens closely to speakers and reads the room so the programme keeps its natural momentum.', detail: 'Across conferences, panels and ceremonies, he makes space for guest voices, knows when to sharpen a conversation and turns each transition into a moment that carries the audience forward. Organisers gain a dependable partner. Audiences experience something clearer, warmer and more alive.', qualities: ['Stage direction', 'Panels and conversations', 'Corporate events', 'Français · English · Deutsch'] },
    gallery: { eyebrow: 'In the room', title: 'Energy has a point of view.', hint: 'Swipe through a selection of moments on stage.', previous: 'Previous photo', next: 'Next photo', close: 'Close image' },
    appearances: { eyebrow: 'On stage', title: 'Event Appearances', body: 'A selection of stages where voice, pace and a connection with the audience made the difference.', explore: 'Explore event', close: 'Close details', date: 'Date', location: 'Location', role: 'Role' },
    contact: { eyebrow: 'Let’s talk about your event', title: 'Bring presence to your next event.', body: 'Share the context, audience and ambition. Eddy will come back to you with an approach that fits your stage.', book: 'Book Eddy 🎤', formTitle: 'Your event', fields: { name: 'Name', organisation: 'Organisation', email: 'Email address', phone: 'Phone (optional)', date: 'Event date', location: 'Event location', type: 'Event type', message: 'Your message' }, send: 'Send enquiry' },
  },
  de: {
    navigation: { home: 'Start', about: 'Über Eddy', appearances: 'Auftritte', gallery: 'Galerie', book: 'Eddy buchen' },
    hero: { eyebrow: 'Event Host · Moderator · Speaker · Zeremonienmeister', title: 'Hallo, ich bin', titleAccent: 'Eddy Gaetan.', introduction: 'Ich bringe Präsenz, Energie und Haltung auf jede Bühne.', roles: 'Ich verbinde Programm, Gäste und Publikum.', book: 'Eddy buchen 🎤', appearances: 'Auftritte ansehen' },
    stats: { events: 'Realisierte Events', people: 'Erreichte Menschen' },
    about: { eyebrow: 'Über Eddy', title: 'Eine Präsenz, die den Ton angibt.', body: 'Eddy Gaetan begleitet Veranstaltungen, bei denen Inhalt und Energie gleich wichtig sind. Er bereitet jeden Ablauf präzise vor, hört den Gästen zu und spürt den Raum, damit das Programm seinen natürlichen Rhythmus behält.', detail: 'Ob Konferenz, Panel oder Zeremonie: Er gibt Stimmen Raum, bringt Gespräche auf den Punkt und macht aus Übergängen echte Momente. Veranstalter gewinnen einen verlässlichen Partner. Das Publikum erlebt ein klareres, lebendigeres und persönlicheres Event.', qualities: ['Bühnenführung', 'Panels und Gespräche', 'Corporate Events', 'Français · English · Deutsch'] },
    gallery: { eyebrow: 'Im Bild', title: 'Energie wird sichtbar.', hint: 'Wischen Sie durch ausgewählte Bühnenmomente.', previous: 'Vorheriges Foto', next: 'Nächstes Foto', close: 'Bild schließen' },
    appearances: { eyebrow: 'Auf der Bühne', title: 'Auftritte und Veranstaltungen', body: 'Eine Auswahl von Bühnen, auf denen Stimme, Rhythmus und Verbindung zum Publikum den Unterschied gemacht haben.', explore: 'Event entdecken', close: 'Details schließen', date: 'Datum', location: 'Ort', role: 'Rolle' },
    contact: { eyebrow: 'Sprechen wir über Ihr Event', title: 'Geben Sie Ihrem nächsten Event Präsenz.', body: 'Teilen Sie Kontext, Publikum und Ziel mit. Eddy meldet sich mit einem Ansatz, der zu Ihrer Bühne passt.', book: 'Eddy buchen 🎤', formTitle: 'Ihr Event', fields: { name: 'Name', organisation: 'Organisation', email: 'E-Mail-Adresse', phone: 'Telefon (optional)', date: 'Eventdatum', location: 'Eventort', type: 'Eventtyp', message: 'Ihre Nachricht' }, send: 'Anfrage senden' },
  },
};

export const siteSettings = {
  personName: 'Eddy Gaetan',
  email: 'hello@eddy-host.com',
  phone: '+49 176 766 42953',
  phoneHref: 'tel:+4917676642953',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
  stats: { events: 50, people: 10000 },
  gallery: [
    { src: '/appearances/eddy-hero.jpg', alt: 'Eddy Gaetan holding a microphone in front of an audience' },
    { src: '/appearances/eddy-mega-conference.jpg', alt: 'Eddy Gaetan speaking among guests at Level Up Mega Conference' },
    { src: '/appearances/eddy-panel.jpg', alt: 'Eddy Gaetan moderating a live panel' },
    { src: '/appearances/eddy-momo-stage.jpg', alt: 'Eddy Gaetan on stage at a live activation' },
    { src: '/appearances/eddy-festival.jpg', alt: 'Eddy Gaetan backstage at a summer event' },
  ],
};