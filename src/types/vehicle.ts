export interface VehiclePhoto {
  url: string;
  titre: string;
  principal: boolean;
}

export interface VehicleDetail {
  etat: string;
  climatisation: boolean;
  vitres_teintees: boolean;
  direction_assistee: boolean;
  [key: string]: boolean | string;
}

export interface Tarification {
  devise: string;
  prix_depart: number;
  prix_demi_journee: number;
  prix_journee_complete: number;
  heure_supplementaire: number;
  deplacement_hors_zone: string;
}

export interface Contrat {
  reference: string;
  type_evenement: string;
  date: string;
  lieu: string;
}

export interface Option {
  nom: string;
  prix: number;
}

export interface Chauffeur {
  experience_annees: number;
  permis_valide: boolean;
  tenue_formelle: boolean;
}

export interface Avis {
  note_moyenne: number;
  nombre_avis: number;
}

export interface SEO {
  title: string;
  description: string;
}

export interface Contact {
  telephone: string;
  email: string;
  whatsapp: string;
}

export interface Statistiques {
  nombre_mariages_realises: number;
  nombre_total_locations: number;
  taux_satisfaction: number;
}

export interface Disponibilite {
  statut: string;
  reservation_minimum_jours: number;
}

export interface Assurance {
  assurance_transport: boolean;
  passagers_couverts: boolean;
}

export interface Vehicle {
  id: string;
  nom: string;
  slug: string;
  marque: string;
  modele: string;
  categorie: string;
  type_vehicule: string;
  annee_modele: string;
  couleur_exterieure: string;
  couleur_interieure: string;
  places: number;
  bio: string;
  description: string;
  detail: VehicleDetail;
  photos: VehiclePhoto[];
  tarification: Tarification;
  contrats_deja_pris_comme_tete_cortege: Contrat[];
  services_inclus: string[];
  options: Option[];
  zone_intervention: string[];
  disponibilite: Disponibilite;
  assurance: Assurance;
  chauffeur: Chauffeur;
  avis: Avis;
  seo: SEO;
  contact: Contact;
  statistiques: Statistiques;
  date_creation: string;
  actif: boolean;
  mis_en_avant: boolean;
}

export interface BookingFormData {
  nomClient: string;
  emailClient: string;
  telephoneClient: string;
  dateEvenement: string;
  typeEvenement: string;
  vehiculeId: string;
  typeLocation: 'depart' | 'demi_journee' | 'journee_complete';
  message: string;
  accepteConditions: boolean;
}
