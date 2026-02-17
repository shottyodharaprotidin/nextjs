"use client"

import { useEffect } from 'react';

const useRemoveBodyClass = (classNamesToAdd, classNamesToRemove) => {
  useEffect(() => {
    if (classNamesToRemove && classNamesToRemove.length > 0) {
      classNamesToRemove.forEach(className => {
        document.body.classList.remove(className);
      });
    }
    if (classNamesToAdd && classNamesToAdd.length > 0) {
      classNamesToAdd.forEach(className => {
        document.body.classList.add(className);
      });
    }
  }, [classNamesToAdd, classNamesToRemove]);
};

export default useRemoveBodyClass;
