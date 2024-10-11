import "./Background.css";
import video from "../../assets/video_1.mp4";
import image_1 from "../../assets/img_1.jpg";
import image_2 from "../../assets/img_2.jpg";
import image_3 from "../../assets/img_3.jpg";
import image_4 from "../../assets/img_4.jpg";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background" loop autoPlay >
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image_1} className="background" alt="image 1" />;
  } else if (heroCount === 1) {
    return <img src={image_2} className="background" alt="image 2" />;
  } else if (heroCount === 2) {
    return <img src={image_3} className="background" alt="image 3" />;
  } else if (heroCount === 3) {
    return <img src={image_4} className="background" alt="image 4" />;
  }
};

export default Background;
