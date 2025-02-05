import React from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable Components
import Services from '../Common/Services';

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
        </div>
    )
}

export default Home;