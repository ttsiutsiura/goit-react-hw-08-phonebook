import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInititalState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '+380504321211' },
    { id: 'id-2', name: 'Hermione Kline', number: '+441131235786' },
    { id: 'id-3', name: 'Eden Clements', number: '+48123456789' },
    { id: 'id-4', name: 'Annie Copeland', number: '+14084762222' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInititalState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },

      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      return {
        items: state.items.filter(contact => action.payload !== contact.id),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
