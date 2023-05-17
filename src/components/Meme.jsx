import memeData from "../../memeData";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });
  // eslint-disable-next-line no-unused-vars
  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function generateImage() {
    const arr = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * arr.length);
    const newUrl = arr[randomIndex].url;
    setMeme((prev) => ({
      ...prev,
      randomImage: newUrl,
    }));
  }
  return (
    <div className="--meme">
      <div className="--meme-form">
        <input
          type="text"
          placeholder="Shut up..."
          className="--meme-input"
        ></input>
        <input
          type="text"
          placeholder="...and take my money"
          className="--meme-input"
        ></input>
        <button onClick={generateImage} type="button">
          Get a new meme image 😹
        </button>
      </div>
      <p>{`${meme.topText} ${meme.bottomText}`}</p>
      <img className="--meme-image" src={meme.randomImage}></img>
    </div>
  );
};
export default Meme;
