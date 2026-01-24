import { useLoaderData } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import { useState } from "react";

const Users = () => {
  const loadedUsers = useLoaderData();

  const [stateUsers, setStateUsers] = useState(loadedUsers);
  // Filter out the deleted user so the UI updates immediately
  const handleRemoveFromUi = (id) => {
    const remainStateUsers = stateUsers.filter((element) => element._id !== id);
    setStateUsers(remainStateUsers);
  };

  return (
    <div>
      <h1 className="text-2xl font-medium text-center mb-3">
        Users Available : {stateUsers.length}
      </h1>

      <div>
        {stateUsers.map((element) => (
          <UserInfo
            element={element}
            key={element._id}
            handleRemoveFromUi={handleRemoveFromUi}
          ></UserInfo>
        ))}
      </div>
    </div>
  );
};

export default Users;
