/**
 * to get the items from the localStorage
 * @param item the name of localStorage item
 * @returns items
 */
export const getStorage = (item: string) => {
  /* get the items from local storage */
  const storeString = localStorage?.getItem(item)?.toString();

  /* transform string to object or array */
  const storeLS = storeString && JSON.parse(storeString);

  /* return the store with all items as object or array */
  return storeLS;
};

/**
 * store the array or object to the LS as named `item`
 * @param item the name of localStorage item
 * @param value the array or object
 */
export const setStorage = (item: string, value: string[] | object) => {
  /* transform object or array to string */
  const storageString = JSON.stringify(value);

  /* set items to LS */
  localStorage.setItem(item, storageString);
};
