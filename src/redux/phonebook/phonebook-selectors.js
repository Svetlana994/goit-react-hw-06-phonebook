export const getFilter = (state) => state.contacts.filter;

export const getfilteredContacts = (state) => {
  const allContacts = state.contacts.items;
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
