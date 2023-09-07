const LOCAL_STORAGE_KEY = 'user_data';

export const saveUsers = (users) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
};

export const loadUsers = () => {
  const usersString = localStorage.getItem(LOCAL_STORAGE_KEY);
  return usersString ? JSON.parse(usersString) : [];
};
