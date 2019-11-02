import React from 'react';

/*
Styles
*/
import Picture from '../../assets/images/picture.jpg';

const About = () => {
    return (
            <article className="about__content">
                <div className="picture">
                    <img src={ Picture } alt="picture"/>
                </div>
                <div className="aboutme">
                    <h1>Hi, my name is <span>Rémy Sirichantho</span></h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus molestie arcu.<br /><br />
At gravida est lacinia ultricies. Curabitur ullamcorper nisi ac est congue euismod. Aliquam vitae gravida nunc. Pellentesque tortor nisl, ultrices id elementum sed, fringilla eget dui. Proin pretium sodales nulla sed consectetur. Morbi ultricies volutpat ante, quis tempus nisl auctor in. Proin interdum quam dui, at tempus felis pretium eget. 
 </p>
                </div>
            </article>
    );
}

export default About;