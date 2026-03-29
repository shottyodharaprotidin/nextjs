"use client";

import { createContext, useContext } from 'react';

const HeaderDataContext = createContext(null);

export function HeaderDataProvider({ initialHeaderData = null, children }) {
  return (
    <HeaderDataContext.Provider value={initialHeaderData}>
      {children}
    </HeaderDataContext.Provider>
  );
}

export function useHeaderData() {
  return useContext(HeaderDataContext);
}
