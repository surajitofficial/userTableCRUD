export const addUser = (users, newUser) => {
    return [...users, newUser];
  };
  
  export const editUser = (users, index, editedUser) => {
    const updatedUsers = [...users];
    updatedUsers[index] = editedUser;
    return updatedUsers;
  };
  
  export const deleteUser = (users, index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    return updatedUsers;
  };
  