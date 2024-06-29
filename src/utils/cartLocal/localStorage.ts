/**
 * to get the items from the localStorage
 * @param item the name of localStorage item
 * @returns items
 */
export const getStorage = (item: string): string[] | object | string => {
  /* return if localStorage is not supported */
  if (!localStorage) return "";

  const storeString = localStorage?.getItem(item);

  if (!storeString) return "";

  /* transform string to object or array */
  const storeLS = isJSON(storeString);

  /* return the store with all items as object or array */
  return storeLS;
};

/**
 * store the array or object to the LS as named `item`
 * @param item the name of localStorage item
 * @param value the array or object
 */
export const setStorage = (
  item: string,
  value: string[] | object | string
): void => {
  if (!localStorage) return;

  /* if the value is a string */
  if (typeof value === "string") return localStorage?.setItem(item, value);

  /* transform object or array to string */
  const storageString = JSON.stringify(value);

  /* set items to LS */
  return localStorage.setItem(item, storageString);
};

export function isJSON(str: string) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}
