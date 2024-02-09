'use client';
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

export type TaxonomyKeys = keyof TaxonomyContextType;
const initialState = {} as TaxonomyContextType;
export const TaxonomyContext = createContext<TaxonomyContextType>(initialState);
export const TaxonomyDispatchContext = createContext<Dispatch<any>>(() => {});
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_TAXONOMY':
      const url = new URL(window.location.href);
      const merge = { ...state, ...action.payload };
      // Remove empty keys
      Object.keys(merge).forEach((key) => (merge[key] == null || merge[key] == '') && delete merge[key]);
      // Create new params.
      const params = new URLSearchParams(merge);
      url.search = params.toString();
      // Change the URL.
      window.history.pushState({}, '', url.toString());
      // Save the state.
      return merge;
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
