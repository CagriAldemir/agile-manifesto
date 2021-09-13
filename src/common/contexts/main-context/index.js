import React, { useReducer, createContext, useContext } from 'react';
import mainReducer, { initialState } from './main-reducer';

const MainContext = createContext();
MainContext.displayName = 'Main Context';

const useMainContext = () => useContext(MainContext);

export const withMainContext = (WrappedComponent) =>
  function MainContextProvider(props) {
    const [globalState, dispatch] = useReducer(mainReducer, initialState);
    return (
      <MainContext.Provider value={[globalState, dispatch]}>
        <WrappedComponent {...props} />
      </MainContext.Provider>
    );
  };

export default useMainContext;
