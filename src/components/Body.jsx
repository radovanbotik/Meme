import memeData from "../memeData";
import { useState } from "react";
export default function Body() {
  const [imageURL, setImageURL] = useState("");

  const jokes = memeData.data.memes;
  const getJoke = e => {
    e.preventDefault();

    const randomNumber = () => {
      return Math.floor(Math.random() * jokes.length);
    };
    const randomJokeURL = () => {
      return jokes[randomNumber()].url;
    };
    setImageURL(randomJokeURL());
  };
  return (
    <div className="appbody">
      <form>
        <input
          type="text"
          className="line-1"
          placeholder="line-top"
          name="linetop"
        />
        <input
          type="text"
          className="line2"
          placeholder="line-bottom"
          name="linebottom"
        />
        <button className="submit" id="submit" onClick={getJoke}>
          Get a new meme image
        </button>
      </form>
      <div className="meme-final">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
