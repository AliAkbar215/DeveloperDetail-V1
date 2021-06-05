import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function DeveloperList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  console.log('state===>',entities[0]);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Developer List </h1>
      </div>
      <div className="row">
        
        <div className="two columns">
          <Link to="/add-dev">
            <button className="button-primary btn1">Add Developer</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Skills</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {entities.length>0 &&
                entities.map(({ id, name ,selected}, i) => {
                  return(
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                      <td>
                        {selected.map((item)=>{
                          console.log("item==>",item);
                          return(
                            <span>{item.value+" "}</span>
                          )
                        })}
                      </td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      {/* <Link to={`/edit-dev/${id}`}>
                        <button>Edit</button>
                      </Link> */}
                    </td>
                  </tr>
                  )
              }
               )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
