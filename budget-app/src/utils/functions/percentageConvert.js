// eslint-disable-next-line import/prefer-default-export
export const percentage = (total, categoryTotal) => {
  const result = ((categoryTotal / total) * 100).toFixed(1);
  const degrees = `${(result / 100) * 180}deg`;

  return [result, degrees];
};
