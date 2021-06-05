import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

const Select = () => {
  const options = [
    { label: "HTML", value: "HTML" },
    { label: "CSS3", value: "CSS3" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "Reactjs", value: "Reactjs" },
    { label: "Nodejs", value: "Nodejs" },
    { label: "MongoDB", value: "MongoDB" },
    { label: "GraphQL", value: "GraphQL" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default Select;