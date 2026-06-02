'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { BookingFormData } from '@/types/vehicle';
import { vehicles } from '@/data/vehicles';

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    nomClient: '',
    emailClient: '',
    telephoneClient: '',
    dateEvenement: '',
    typeEvenement: '',
    vehiculeId: '',
    typeLocation: 'journee_complete',
    message: '',
    accepteConditions: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Booking form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        nomClient: '',
        emailClient: '',
        telephoneClient: '',
        dateEvenement: '',
        typeEvenement: '',
        vehiculeId: '',
        typeLocation: 'journee_complete',
        message: '',
        accepteConditions: false,
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-luxury-ivory border border-luxury-gold p-8 rounded-none text-center">
        <h3 className="font-playfair text-2xl text-luxury-gold mb-4">
          Merci pour votre réservation !
        </h3>
        <p className="font-inter text-luxury-light-text">
          Nous avons reçu votre demande et vous recontacterons très bientôt pour
          confirmer votre réservation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="font-playfair text-xl text-luxury-dark-text mb-6">
          Vos Coordonnées
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="nomClient"
            placeholder="Nom complet"
            value={formData.nomClient}
            onChange={handleChange}
            required
            className="px-6 py-3 border border-luxury-champagne bg-luxury-cream font-inter text-luxury-dark-text placeholder-luxury-light-text focus:outline-none focus:border-luxury-gold"
          />
          <input
            type="email"
            name="emailClient"
            placeholder="Adresse email"
            value={formData.emailClient}
            onChange={handleChange}
            required
            className="px-6 py-3 border border-luxury-champagne bg-luxury-cream font-inter text-luxury-dark-text placeholder-luxury-light-text focus:outline-none focus:border-luxury-gold"
          />
          <input
            type="tel"
            name="telephoneClient"
            placeholder="Numéro de téléphone"
            value={formData.telephoneClient}
            onChange={handleChange}
            required
            className="px-6 py-3 border border-luxury-champagne bg-luxury-cream font-inter text-luxury-dark-text placeholder-luxury-light-text focus:outline-none focus:border-luxury-gold"
          />
        </div>
      </div>

      {/* Event Details */}
      <div>
        <h3 className="font-playfair text-xl text-luxury-dark-text mb-6">
          Détails de l'Événement
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="date"
            name="dateEvenement"
            value={formData.dateEvenement}
            onChange={handleChange}
            required
            className="px-6 py-3 border border-luxury-champagne bg-luxury-cream font-inter text-luxury-dark-text focus:outline-none focus:border-luxury-gold"
          />
          <select
            name="typeEvenement"
            value={formData.typeEvenement}
            onChange={handleChange}
            required
            className="px-6 py-3 border border-luxury-champagne bg-luxury-cream font-inter text-luxury-dark-text focus:outline-none focus:border-luxury-gold"
          >
            <option value="">Sélectionner le type d'événement</option>
            <option value="mariage">Mariage</option>
            <option value="fiancailles">Fiançailles</option>
            <option value="anniversaire">Anniversaire</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      {/* Vehicle Selection */}
      <div>
        <h3 className="font-playfair text-xl text-luxury-dark-text mb-6">
          Sélection du Véhicule
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select
            name="vehiculeId"
            value={formData.vehiculeId}
            onChange={handleChange}
            required
            className="px-6 py-3 border border-luxury-champagne bg-luxury-cream font-inter text-luxury-dark-text focus:outline-none focus:border-luxury-gold"
          >
            <option value="">Choisir un véhicule</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.nom}
              </option>
            ))}
          </select>

          <select
            name="typeLocation"
            value={formData.typeLocation}
            onChange={handleChange}
            className="px-6 py-3 border border-luxury-champagne bg-luxury-cream font-inter text-luxury-dark-text focus:outline-none focus:border-luxury-gold"
          >
            <option value="depart">À l'heure</option>
            <option value="demi_journee">Demi-journée</option>
            <option value="journee_complete">Journée complète</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="font-playfair text-xl text-luxury-dark-text mb-6 block">
          Message (Optionnel)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Vous pouvez nous donner plus de détails sur votre événement..."
          rows={5}
          className="w-full px-6 py-3 border border-luxury-champagne bg-luxury-cream font-inter text-luxury-dark-text placeholder-luxury-light-text focus:outline-none focus:border-luxury-gold"
        />
      </div>

      {/* Checkbox */}
      <label className="flex items-start gap-3 font-inter text-sm text-luxury-light-text">
        <input
          type="checkbox"
          name="accepteConditions"
          checked={formData.accepteConditions}
          onChange={handleChange}
          required
          className="mt-1"
        />
        <span>
          J'accepte les conditions générales et la politique de confidentialité
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!formData.accepteConditions}
        className="w-full px-8 py-4 bg-luxury-gold text-white font-inter font-medium hover:bg-luxury-gold-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Envoyer la Réservation
      </button>
    </form>
  );
}
