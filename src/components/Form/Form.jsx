import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";

import { WrapperForm, Container } from "./Form.styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      contacts.find(
        (contact) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(actions.addContact({ name, number }));

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <WrapperForm>
      <form onSubmit={handleSubmit}>
        <Container>
          <TextField
            name="name"
            value={name}
            id="outlined-helperText"
            label="Name"
            variant="outlined"
            required
            onChange={handleInputChange}
          />
        </Container>

        <Container>
          <TextField
            type="tel"
            name="number"
            value={number}
            id="outlined-helperText"
            label="Number"
            variant="outlined"
            required
            onChange={handleInputChange}
          />
        </Container>
        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </form>
    </WrapperForm>
  );
}

export default Form;
