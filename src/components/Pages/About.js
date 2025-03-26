import React from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';


function About() {
    return(
        <div>
            <Header 
                title="About Us"
                subtitle="Scroll down to find out more!"
                showButton={false}
                image={image}
            />
            <Timeline />
            <Team />
        </div>
    )

}

export default About;