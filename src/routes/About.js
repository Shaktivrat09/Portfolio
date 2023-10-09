import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';



const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="ABOUT ME" text="
        
        
        Hi, I'm Shaktivrat Kumar Singh, a passionate front-end developer residing in the bustling city of Noida. Since I was young, I've been captivated by the world of computers and the internet, and this fascination eventually led me to the realm of web development.
        I find immense joy in crafting visually stunning and highly functional digital experiences. It's amazing to see how a few lines of code can come together to create something so impactful and user-friendly. I believe that a perfect blend of aesthetics and seamless user experience is the key to success in the world of front-end development.
        To stay ahead of the game, I'm constantly on the lookout for the latest technologies, frameworks, and tools. Embracing new challenges excites me, and I eagerly adopt emerging trends to push the boundaries of what can be achieved on the web."/>

        <Footer/>
    </div>
  )
}

export default About