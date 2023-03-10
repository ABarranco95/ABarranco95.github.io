import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faFutbol } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="bg-[#4a3030] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">About Me</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
          <div className="md:pr-8">
            <p className="text-lg text-white">Hi there! I'm Angel, a passionate software developer based in the US.</p>
            <p className="mt-3 text-lg text-white">I love building web and mobile applications that make a positive impact on people's lives. My main focus is on front-end development, but I'm also comfortable with back-end technologies.</p>
            <p className="mt-3 text-lg text-white">In my free time, I enjoy pursuing my personal interests, such as playing video games and playing soccer on the weekends with my Sunday league team. Additionally, I cherish the opportunity to spend quality time with my family and friends, and consider myself a devoted husband and father to my three-year-old son.</p>
            <div className="flex mt-6">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ff5424] hover:bg-white hover:text-[#ff5424]">
                Contact Me
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex">
              <div className="mr-3">
                <FontAwesomeIcon icon={faGamepad} size="3x" className="text-white " />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Gaming</h3>
                <p className="mt-2 text-base text-white">I'm a big fan of competitive e-sports gaming and enjoy playing a variety of games in my free time.</p>
              </div>
            </div>
            <div className="flex mt-6">
              <div className="mr-3">
                <FontAwesomeIcon icon={faFutbol} size="3x" className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Football (Soccer)</h3>
                <p className="mt-2 text-base text-white">I'm also a big football (soccer) fan and enjoy following the latest news and matches from around the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
