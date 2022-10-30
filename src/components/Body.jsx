import memeData from "../memeData";
import { useState } from "react";
export default function Body() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memeData.data.memes);
  const jokes = memeData.data.memes;
  const getJoke = e => {
    e.preventDefault();

    const randomNumber = () => {
      return Math.floor(Math.random() * jokes.length);
    };
    // const randomJokeURL = () => {
    //   return jokes[randomNumber()].url;
    // };
    setMeme(prevState => {
      return { ...prevState, randomImage: allMemeImages[randomNumber()].url };
    });
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
        <img src={meme.randomImage} alt="" />
      </div>
    </div>
  );
}
