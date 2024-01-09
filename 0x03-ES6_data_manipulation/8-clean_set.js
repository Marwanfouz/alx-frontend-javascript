export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const cleanedValues = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
  return cleanedValues;
}
