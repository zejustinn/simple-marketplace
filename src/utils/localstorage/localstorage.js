export const createUser = (displayName, email, password) => localStorage.setItem(email, JSON.stringify({ displayName, email, password }));

export const readUser = (email) => JSON.parse(localStorage.getItem(email));

