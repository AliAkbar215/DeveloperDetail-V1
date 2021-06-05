import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { userUpdated } from "./usersSlice";
import MultiSelect from "react-multi-select-component";

export function EditUser() {
  const options = [
    { label: "HTML", value: "HTML" },
    { label: "CSS3", value: "CSS3" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "Reactjs", value: "Reactjs" },
    { label: "Nodejs", value: "Nodejs" },
    { label: "MongoDB", value: "MongoDB" },
    { label: "GraphQL", value: "GraphQL" },
  ];

  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-dev/", ""));

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [name, setName] = useState(user.name);
  const [selected, setSelected] = useState([
    user.selected.forEach((element) => {
      return element;
    }),
  ]);
  
  console.log("selected===>", selected);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  // const handleSkills=(e)=>setSkills(e.target.value)

  const handleClick = () => {
    if (name && selected) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          selected,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@gmail.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          {/* <input
            className="u-full-width"
            type="text"
            placeholder="Enter your skills"
            id="nameInput"
            onChange={handleSkills}
            value={skill}
          /> */}
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />

          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}
