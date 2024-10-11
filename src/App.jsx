import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";

function App() {
  const myData = [
    { text1: "Raise Up", text2: "Your Glass!" },
    { text1: "Make Yourself", text2: "Comportable" },
    { text1: "Enjoy Our Delicious", text2: "Meals And Come Again!" },
    { text1: "Choose Variety of", text2: "Food You Like" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  // useEffect(() => {
  //   setInterval(() => {
  //     setHeroCount((count) => {

  //       return count === 3 ? 0 : count + 1;
  //     });
  //   }, 3000);
  // }, []);
  return (
    <>
      <Navbar />

      <Background
        heroCount={heroCount}
        playStatus={playStatus}
        setHeroCount={setHeroCount}
      />
      <Hero
        playStatus={playStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        setPlayStatus={setPlayStatus}
        myData={myData[heroCount]}
      />
    </>
  );
}

export default App;
