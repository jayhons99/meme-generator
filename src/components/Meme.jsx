import memeData from "../../memeData";
import { useState } from "react";

const Meme = () => {
  const [imageUrl, setImageUrl] = useState("");
  function generateImage() {
    const arr = memeData.data.memes;
    const randomIndex = Math.floor(Math.random() * arr.length);
    const newUrl = arr[randomIndex].url;
    setImageUrl(newUrl);
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
      <img className="--meme-image" src={imageUrl}></img>
    </div>
  );
};
export default Meme;
