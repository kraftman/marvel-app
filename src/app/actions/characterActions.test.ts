import { getCharacters } from './characterActions';
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

describe('getCharacters', () => {
  const mockPublicKey = 'mockPublicKey';
  const mockPrivateKey = 'mockPrivateKey';
  let date: Date;

  beforeAll(() => {
    process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY = mockPublicKey;
    process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY = mockPrivateKey;
    date = new Date('December 17, 2024 03:24:00');
    jest.useFakeTimers().setSystemTime(date);
  });

  it('should fetch and return character data', async () => {
    const mockTimestamp = date.getTime();
    const mockHash = 'f8f085ea2249d024d9f6c59486e9cd95';
    const mockResponse = {
      data: {
        results: [
          { id: 1, name: 'Spider-Man' },
          { id: 2, name: 'Iron Man' },
        ],
      },
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await getCharacters();

    expect(fetchMock).toHaveBeenCalledWith(
      `https://gateway.marvel.com/v1/public/characters?ts=${mockTimestamp}&apikey=${mockPublicKey}&hash=${mockHash}`,
    );

    expect(result).toEqual(mockResponse);
  });

  it('should handle fetch errors', async () => {
    const mockError = new Error('Fetch error');
    fetchMock.mockReject(mockError);

    const result = await getCharacters();

    expect(result).toEqual({});
    // check logging etc when added
  });
});
