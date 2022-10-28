export default function Body() {
  return (
    <div className="appbody">
      <form action="">
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
        <button className="submit" id="submit">
          Get a new meme image
        </button>
      </form>
      <div className="meme-final">
        <img src="" alt="" />
      </div>
    </div>
  );
}
