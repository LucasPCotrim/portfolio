import { createContext, useContext } from 'react';
type State = {
  page: string;
};
export type GlobalContent = {
  state: State;
  setState: (s: State) => void;
};

export const AppContext = createContext<GlobalContent>({
  state: { page: 'InitialLoadingScreen' },
  setState: () => {},
});

export const useAppContext = () => useContext(AppContext);
