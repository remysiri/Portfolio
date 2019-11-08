import React from 'react';

/*
Styles
*/
import Picture from '../../assets/images/picture.jpg';

const About = () => {
    return (
            <article className="about__content">
                <div className="picture">
                    <img src={ Picture } alt="Remy"/>
                </div>
                <div className="aboutme">
                    <h1>Hi, my name is <span>Rémy Sirichantho</span></h1>
                    <p className="intro__about">
                        I am a 22 year old developer and designer located in Belgium with a weak spot for minimalistic lifestyles.
                    </p>
                    <p>
                        When I was a kid I never planned on becoming a developer or whatsoever I dreamed of repairing computers and all kinds of electronics, but when I started to get into games and saw those private servers climbing the rankings and get popular I wanted to be one of those too. I set a server up with the help of some tutorials and then came the moment  when I had to set the control panel up which was the website, I honestly spend most of my time fiddling with the website as it was the first thing people and players came across, if it was bad people wouldn't stay too long on there. So I began to stare and stare at those lines of codes which I couldn't comprehend a single word of and before I knew it I became quite interested in those lines and spend most of my days in the editor.
                        <br/><br/>
                        I changed my study orientation and did "Multimedia" to get a better understanding of everything of websites and the world of media, It was pretty much just replicating websites in HTML/CSS with mobile compatibility for a whole 3 year in highschool. We also got to work on our own concepts and such. After my graduation from highschool I naturally went to a college in Ghent and went for a Bachelor of Graphics & Digital Media and there we went deeper into development such as Nodejs (React, Native and Angular), backend development with the framework Laravel.
                    </p>
                </div>
            </article>
    );
}

export default About;