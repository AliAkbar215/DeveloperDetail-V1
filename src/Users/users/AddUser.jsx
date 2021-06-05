import { useDispatch, useSelector } from "react-redux";
import Select from "./Select";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";
import MultiSelect from "react-multi-select-component";

export function AddUser() {
  const options = [
    {label: "HTML", value: "HTML" },
    {label: "CSS3", value: "CSS3" },
    {label: "JavaScript", value: "JavaScript" },
    {label: "Reactjs", value: "Reactjs" },
    {label: "Nodejs", value: "Nodejs" },
    {label: "MongoDB", value: "MongoDB" },
    {label: "GraphQL", value: "GraphQL" },
  ];

  const dispatch = useDispatch();
  const history = useHistory();
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleSkill = (e) => setSkill(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (name && selected) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          selected,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setSelected("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add Developer</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          {/* <input
            className="u-full-width"
            type="text"
            placeholder="Add your Skils"
            id="nameInput"
            onChange={handleSkill}
            value={skill}
          /> */}

          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />

          {error && error}
          <button onClick={handleClick} className="button-primary btn1">
            Add Developer
          </button>
        </div>
      </div>
    </div>
  );
}
