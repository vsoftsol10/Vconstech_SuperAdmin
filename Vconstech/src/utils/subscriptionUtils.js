export const parseExpire = (str) => {
  const [d, m, y] = str.split("/");
  return new Date(`20${y}-${m}-${d}`);
};