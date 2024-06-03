import { getCharacters } from './characterActions';
import { enableFetchMocks } from 'jest-fetch-mock';
import md5 from 'md5';

enableFetchMocks();

jest.mock('md5');

describe('getCharacters', () => {
  const mockPublicKey = 'mockPublicKey';
  const mockPrivateKey = 'mockPrivateKey';
  let date;

  beforeAll(() => {
    process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY = mockPublicKey;
    process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY = mockPrivateKey;
    date = new Date();
    jest.useFakeTimers().setSystemTime(date);
  });

  it('should fetch and return character data', async () => {
    const mockTimestamp = date.getTime();
    const mockHash = 'mockHash';
    const mockResponse = {
      data: {
        results: [
          { id: 1, name: 'Spider-Man' },
          { id: 2, name: 'Iron Man' },
        ],
      },
    };

    md5.mockReturnValue(mockHash);

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await getCharacters();

    expect(fetch).toHaveBeenCalledWith(
      `https://gateway.marvel.com/v1/public/characters?ts=${mockTimestamp}&apikey=${mockPublicKey}&hash=${mockHash}`,
    );
    expect(md5).toHaveBeenCalledWith(`${mockTimestamp}${mockPrivateKey}${mockPublicKey}`);
    expect(result).toEqual(mockResponse.data.results);
  });

  it('should handle fetch errors', async () => {
    const mockError = new Error('Fetch error');
    fetchMock.mockReject(mockError);

    const result = await getCharacters();

    expect(result).toEqual({});
    // check logging etc when added
  });
});
