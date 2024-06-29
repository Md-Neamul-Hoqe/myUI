export default function Capitalize(content: string) {
  // const isMultiline = /\r?\n/.test(content);
  const String = content.split(" ");

  /* if the content is contain a word only */
  if (String?.length === 1) return handleCapitalization(content);

  /* if the content is formed of words */
  const CapitalizedContent = String.map((text) => handleCapitalization(text));

  /* return the array of the capitalized words joining to a string */
  return CapitalizedContent.join(" ");
}

function handleCapitalization(text: string) {
  return text.charAt(0).toUpperCase().concat(text.slice(1));
}
