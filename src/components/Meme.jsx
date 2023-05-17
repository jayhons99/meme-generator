const Meme = () => {
  return (
    <div className="--meme">
      <form className="--meme-form">
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
        <button type="button">Get a new meme image 🖼</button>
      </form>
    </div>
  );
};
export default Meme;
