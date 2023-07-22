import { useContext, createContext, useReducer } from 'react';

const AutContex = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'logout':
      return { ...state, user: action.payload, isAuthenticated: false };

    default:
      throw new Error('Unknown aciton');
  }
}

const FAKE_USER = {
  name: 'Miguel',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: 'login', payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AutContex.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AutContex.Provider>
  );
}

function useAutH() {
  const context = useContext(AutContex);
  if (context === undefined)
    throw new Error('AuthContext was used outside AuthProvider.');

  return context;
}

export { AuthProvider, useAutH };
