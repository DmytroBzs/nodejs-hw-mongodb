import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = ContactsCollection.findById(contactId);
  return contact;
};
