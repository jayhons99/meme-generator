import memeData from "../../memeData";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "TOP TEXT",
    bottomText: "BOTTOM TEXT",
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

  function handleChange(e) {
    const { value, name } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <div className="--meme">
      <div className="--meme-form">
        <input
          type="text"
          placeholder="Top text..."
          className="--meme-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Bottom text..."
          className="--meme-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button onClick={generateImage} type="button">
          Get a new meme image 😹
        </button>
      </div>
      <div className="--meme-text-container">
        <img className="--meme-image" src={meme.randomImage}></img>
        <h1 className="--meme-text top">{meme.topText}</h1>
        <h1 className="--meme-text bottom">{meme.bottomText}</h1>
      </div>
    </div>
  );
};
export default Meme;
