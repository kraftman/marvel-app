

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY!;

const getMarvelData = async () => {
  const ts = new Date().getTime();
  
  const url = ``;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getMarvelData };

// example call:
//https://gateway.marvel.com/v1/public/characters?apikey=b74403139e05f58847a7da8cfa1bfc9c