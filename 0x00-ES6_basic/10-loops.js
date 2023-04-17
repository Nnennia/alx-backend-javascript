export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    let i = idx;
    i = appendString + i;
    newArray.push(i);
  }

  return newArray;
}
