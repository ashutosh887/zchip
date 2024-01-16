const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  let isWhiteShade = true;

  while (isWhiteShade) {
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    const rgb = parseInt(color.substring(1), 16);
    isWhiteShade = rgb < 0xcccccc;
  }

  return color;
};

export default getRandomColor;
