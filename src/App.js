import { useSelector } from "react-redux";

import Section from "./components/Section/Section";
import Contacts from "./components/Contacts/Contacts";
import Form from "./components/Form/Form";

function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      {!!contacts.length && (
        <Section title="Contacts">
          <Contacts />
        </Section>
      )}
    </>
  );
}

export default App;
