import memeData from "../memeData";
import { useState } from "react";
export default function Body() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [lines, setLines] = useState({
    linetop: "",
    linebottom: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData.data.memes);
  const jokes = memeData.data.memes;
  const handleChange = event => {
    const { name, value } = event.target;
    setLines(prev => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = () => {};

  const getJoke = e => {
    e.preventDefault();
    const randomNumber = () => {
      return Math.floor(Math.random() * jokes.length);
    };
    setMeme(prevState => {
      return { ...prevState, randomImage: allMemeImages[randomNumber()].url };
    });
  };
  return (
    <div className="appbody">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="line-1"
          placeholder="line-top"
          name="linetop"
          onChange={handleChange}
          value={lines.linetop}
        />
        <input
          type="text"
          className="line2"
          placeholder="line-bottom"
          name="linebottom"
          onChange={handleChange}
          value={lines.linebottom}
        />
        <button className="submit" id="submit" onClick={getJoke}>
          Get a new meme image
        </button>
      </form>
      <div className="meme-final">
        <img src={meme.randomImage} alt="" />
        <h2 className="line lineTop">{lines.linetop}</h2>
        <h2 className="line lineBottom">{lines.linebottom}</h2>
      </div>
    </div>
  );
}
