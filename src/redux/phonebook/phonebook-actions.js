import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction("contact/Add", ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction("contact/Delete");

const changeFilter = createAction("contact/changeFilter");

export default { addContact, deleteContact, changeFilter };
