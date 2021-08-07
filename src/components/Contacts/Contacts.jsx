import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";
import { getfilteredContacts } from "../../redux/phonebook/phonebook-selectors";

import Filter from "../Filter/Filter";

import { ContactItem, NumberText } from "./Contacts.styles";
import { BiWinkSmile } from "react-icons/bi";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Contacts = () => {
  const options = useSelector(getfilteredContacts);

  const dispatch = useDispatch();

  return (
    <>
      <Filter />
      <ul>
        {options.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <BiWinkSmile size={18} />
              <span>{name}:</span>
              <NumberText>{number}</NumberText>
              <Button
                startIcon={<DeleteIcon fontSize="small" />}
                variant="outlined"
                color="primary"
                onClick={() => dispatch(actions.deleteContact(id))}
              >
                Delete
              </Button>
            </ContactItem>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;
