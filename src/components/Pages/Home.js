import React from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable Components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

function Home(){
    return(
        <div>
           <Header 
                title="Welcome To Our Studio!"
                subtitle="Its nice to meet you!"
                buttonText="Tell me more :)"
                link="/services"
                showButton={true}
                image={image}
           />

           <Services />
           <Portfolio />
           <Timeline />
           <Team />
        </div>
    )
}

export default Home;