const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateRandomGradient = () => {
  const angle = Math.floor(Math.random() * 360);
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  return `linear-gradient(315deg, ${color1}, ${color2})`;
};
