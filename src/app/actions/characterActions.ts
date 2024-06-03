'use server';
import md5 from 'md5';

export async function getCharacters() {
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY!;

  try {
    const ts = new Date().getTime();

    const hash = md5(ts + privateKey + publicKey);
    const queryParams = `ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    const url = `https://gateway.marvel.com/v1/public/characters?${queryParams}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data.data.results);

    return data.data.results;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function getCharacterById(id: string) {
  try {
    const ts = new Date().getTime();

    const hash = md5(ts + privateKey + publicKey);
    let queryParams = `ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    const url = `https://gateway.marvel.com/v1/public/characters/${id}?${queryParams}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.data.results.length > 0 ? data.data.results[0] : {};
  } catch (error) {
    console.log(error);
    return {};
  }
}
