class MarvelService {
  gerResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=aab1e5355feab466212827456a5844a1"
    );
  };
}

export default MarvelService;
