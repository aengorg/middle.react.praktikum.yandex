export const genKey = (): string => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  let id: string = timestamp + 'xxxxxxxxxxxxxxxx';
  id = id.replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16)).toLowerCase();
  return id;
};
