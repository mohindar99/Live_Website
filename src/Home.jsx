import React from "react";
import Common from "./Common";
import img from './Images/img1.jpg'

function Home() {
  return (
    <>
      <Common name="Grow your Business with" Nav="Get Started" visit="/Services" imgsrc={img} />
    </>
  );
}
export default Home;
