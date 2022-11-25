'use client';
import { useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import InitialLoadingScreen from '../components/InitialLoadingScreen/InitialLoadingScreen';

export default function App() {
  const [state, setState] = useState({
    page: 'InitialLoadingScreen',
  });
  return (
    <>
      <AppContext.Provider value={{ state, setState }}>
        {state.page === 'InitialLoadingScreen' ? (
          <InitialLoadingScreen />
        ) : (
          <>
            <h1>Home Page</h1>
          </>
        )}
      </AppContext.Provider>
    </>
  );
}
