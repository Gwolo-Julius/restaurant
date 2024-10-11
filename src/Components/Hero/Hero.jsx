import "./Hero.css";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";
const Hero = ({
  heroCount,
  playStatus,
  setHeroCount,
  setPlayStatus,
  myData,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>{myData.text1}</h1>
        <h1>{myData.text2}</h1>
      </div>
      <button className="btn">Explore More</button>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(3)}
            className={heroCount === 3 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="play-btn">
          <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="" />
          <p>Play the Video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
