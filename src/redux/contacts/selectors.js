import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from 'redux/filter/selectors';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectContactsCount = createSelector(
  [selectContacts],
  contacts => {
    return contacts.length;
  }
);

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
