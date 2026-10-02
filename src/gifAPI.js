export const gifAPI = (() => {
  const img = document.querySelector("img");

  const loadGif = async (keyword) => {
    try {
      const result = await fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=g2abkbpoLqci4Lvwv78ZGpwEkMqHbMTK&s=" +
          keyword +
          "&rating=g",
      );
      const jsonResult = await result.json();
      img.src = jsonResult.data.images.original.url;
    } catch (error) {
      throw new Error("couldnt retrieve gif :(");
    }
  };
})();
