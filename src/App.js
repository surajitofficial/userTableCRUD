// import React, { useState } from 'react';
// import UserForm from './components/UserForm';
// import UserTable from './components/UserTable';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [editing, setEditing] = useState(false);
//   const [currentUser, setCurrentUser] = useState({});

//   const addUser = (user) => {
//     setUsers([...users, user]);
//   };

//   const editUser = (index) => {
//     setEditing(true);
//     setCurrentUser(users[index]);
//   };

//   const updateUser = (updatedUser) => {
//     const updatedUsers = users.map((user, index) =>
//       index === users.indexOf(currentUser) ? updatedUser : user
//     );
//     setUsers(updatedUsers);
//     setEditing(false);
//     setCurrentUser({});
//   };

//   const deleteUser = (index) => {
//     setUsers(users.filter((user, i) => i !== index));
//   };

//   return (
//     <div className="App">
//       <UserForm addUser={addUser} />
//       {editing ? (
//         <div>
//           <h2>Edit User</h2>
//           <UserForm addUser={updateUser} user={currentUser} />
//         </div>
//       ) : null}
//       <UserTable users={users} editUser={editUser} deleteUser={deleteUser} />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import UserTable from './components/UserTable/UserTable';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <UserTable />
      </Container>
    </>
  );
}

export default App;
