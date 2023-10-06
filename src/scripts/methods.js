export default function splitToNChunks(array, n) {
  let result = [];
  for (let i = 0; i < array.length; i += n) result.push(array.slice(i, i + n));
  return result;
};