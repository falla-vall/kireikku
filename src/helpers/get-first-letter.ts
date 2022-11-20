const getFirstLetter = (str: string, length?: number) =>
  str
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, length || 2);

export default getFirstLetter;
