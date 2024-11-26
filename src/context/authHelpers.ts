import { createContext, useContext } from 'react';

interface IUser {
  id: string;
}

export const INITIAL_USER: IUser = { id: '' };

export interface IContextType {
  user: IUser;
  isLoading: boolean;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const INITIAL_STATE: IContextType = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};

export const AuthContext = createContext<IContextType>(INITIAL_STATE);

export const useUserContext = () => useContext(AuthContext);
