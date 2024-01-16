const getUserInitials = (name: string) => {
  const words = name.split(" ");
  if (words.length === 0) {
    return "!";
  }

  const firstLetter = words[0][0].toUpperCase();
  const lastLetter =
    words.length > 1 ? words[words.length - 1][0].toUpperCase() : "";

  return firstLetter + (lastLetter !== firstLetter ? lastLetter : "");
};

export default getUserInitials;
