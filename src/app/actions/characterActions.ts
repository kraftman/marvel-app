'use server';

import { generateApiKey } from './utils';

const MARVEL_URL = 'https://gateway.marvel.com/v1/public';

export async function getCharacters(offset, limit) {
  try {
    const ts = new Date().getTime();
    const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
    const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY!;

    const hash = generateApiKey(ts, publicKey, privateKey);
    let queryParams = `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    if (offset) {
      queryParams += `&offset=${offset}`;
    }
    if (limit) {
      queryParams += `&limit=${limit}`;
    }

    const url = `${MARVEL_URL}/characters?${queryParams}`;
    const response = await fetch(url, { cache: 'force-cache' });
    const data = await response.json();

    return data;
  } catch (error) {
    //eslint-disable-next-line
    console.log(error);
    return {};
  }
}

export async function getCharacterById(id: string) {
  try {
    const ts = new Date().getTime();
    const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
    const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY!;

    const hash = generateApiKey(ts, publicKey, privateKey);
    let queryParams = `ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    const url = `${MARVEL_URL}/characters/${id}?${queryParams}`;
    const response = await fetch(url, { cache: 'force-cache' });
    const data = await response.json();

    return data.data.results.length > 0 ? data.data.results[0] : {};
  } catch (error) {
    //eslint-disable-next-line
    console.log(error);
    return {};
  }
}
