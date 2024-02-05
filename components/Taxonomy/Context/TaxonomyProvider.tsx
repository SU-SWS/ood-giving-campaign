/**
 * Context, Provider and Consumer for Taxonomy Filter Page
 */

import React, { createContext, useReducer, Dispatch } from 'react';
export type TaxonomyContextType = {
  topics?: any;
  schools?: any;
  initiatives?: any;
  themes?: any;
};
export const TaxonomyContext = createContext<TaxonomyContextType>(null);
export const TaxonomyDispatchContext = createContext<Dispatch<any>>(() => {});
const initialState = {};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_TAXONOMY':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const TaxonomyProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TaxonomyContext.Provider value={state}>
      <TaxonomyDispatchContext.Provider value={dispatch}>
        {children}
      </TaxonomyDispatchContext.Provider>
    </TaxonomyContext.Provider>
  );
};
