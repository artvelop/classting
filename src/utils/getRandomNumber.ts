type Params = {
  min: number;
  max: number;
};

export const getRandomNumber = ({ min, max }: Params) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
