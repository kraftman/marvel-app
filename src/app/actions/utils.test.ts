import { generateApiKey } from './utils';

describe(' characterAction Utis', () => {
  it('should generate api key', () => {
    const timeStamp = 123456789;
    const publicKey = 'publicKey';
    const privateKey = 'private';
    const expectedHash = '9cd05af8bcda6d2271a2612e4f9366c7';
    const result = generateApiKey(timeStamp, publicKey, privateKey);
    expect(result).toBe(expectedHash);
  });
});
