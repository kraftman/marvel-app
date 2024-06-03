import md5 from 'md5';

export const generateApiKey = (
  timeStamp: number,
  publicKey: string,
  privateKey: string,
): string => {
  const hash = md5(timeStamp + privateKey + publicKey);
  return hash;
};
