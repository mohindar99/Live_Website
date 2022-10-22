import React from 'react';
import Common from './Common';
import img_about from './Images/about.jpg';

function About() {
    return (
        <>
            <Common name="Welcome to About page" Nav="Contact Now" visit="/contact" imgsrc={img_about} />
        </>
      );
}
export default About;
