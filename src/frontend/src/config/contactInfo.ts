/**
 * Business contact information configuration
 * Update these values to reflect your actual contact details
 */

export interface ContactInfo {
  phone?: string;
  email?: string;
  address?: string;
  addressLink?: string;
}

export const contactInfo: ContactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'info@saconstruction.com',
  address: '123 Construction Ave, Building City, ST 12345',
  // Optional: Add a Google Maps link or other address URL
  // addressLink: 'https://maps.google.com/?q=123+Construction+Ave'
};
