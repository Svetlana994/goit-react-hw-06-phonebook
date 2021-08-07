import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

import TextField from "@material-ui/core/TextField";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <TextField
        id="standard-multiline-flexible"
        label="Find contacts by name"
        size="medium"
        InputLabelProps={{
          shrink: true,
        }}
        multiline
        value={value}
        onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
