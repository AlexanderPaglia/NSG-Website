// MainContent.jsx

import React from 'react';
import '../styles/HomePage.css'; // Import CSS file for styling
import logo from '../Images/NSGlogo.png';
import contentCreationImage from '../Images/content-creation.jpg';
import gamingImage from '../Images/gaming.jpg';
import esportsImage from '../Images/esports.jpg';
import UofA from '../Images/UofA.png';
import whimsea from '../Images/whimsea.jpg';
import yana from '../Images/yana.png';
import careerCoaching from '../Images/careerCoaching.jpg';
import talentManagement from '../Images/talentManagement.jpg';
import pivotProgram from '../Images/pivotProgram.jpg';
import NavBar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainContent = () => {
  // Initialize AOS once the component mounts
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease',
    });
  }, []);

  return (
    <div className="main-content">
      <header className="header">
        <NavBar />
        <div className="header-content">
          <img src={logo} alt="logo" className="logo" />
          <h1>Take the Next Step in your Gaming Career.</h1>
          <p>Our amazing team knows how to help you realize your value, grow your brand, and reach your maximum potential.</p>
          <button>Get Started</button>
        </div>
      </header>

      <section className="about-section">
        <div className="about-content">
          <div className="about-us" data-aos="fade-up">
            <h2 className="about-heading">Who We Are</h2>
            <p className="about-description">At Next Step Gaming Talent, we are passionate about empowering individuals in the gaming industry. With a dedicated focus on nurturing smaller content creators and supporting collegiate gaming professionals, we offer a range of unique services tailored to enhance the careers of gaming enthusiasts at any stage of their journey. Join us at Next Step Gaming Talent and take the next step towards realizing your dreams in the dynamic and exciting realm of gaming.</p>
            <button className="about-button">About Us</button>
          </div>
          <div className="testimonial" data-aos="fade-left">
            <div className="testimonial-content">
              <p className="testimonial-quote">“NSG has been able to foster the next generation of gamers at our University. Starting from a student group to a nationally recognized program with partnerships across Canada”</p>
            </div>
            <div className="testimonial-profile">
              <img src={UofA} alt="Profile Picture" />
              <p className="testimonial-author">- University of Alberta Esports Association</p>
            </div>
          </div>
        </div>
      </section>

      <section className="specialties">
        <div className="specialties-heading">
          <h1>Turn your passion into a well-polished brand in an instant from our specialties</h1>
        </div>
        <div className="specialties-container">
          <div className="specialty" data-aos="fade-left" data-aos-delay="0">
            <img src={contentCreationImage} alt="Content Creation" />
            <h3>Content Creation</h3>
          </div>
          <div className="specialty" data-aos="fade-left" data-aos-delay="200">
            <img src={gamingImage} alt="Gaming" />
            <h3>Gaming</h3>
          </div>
          <div className="specialty" data-aos="fade-left" data-aos-delay="400">
            <img src={esportsImage} alt="Esports" />
            <h3>Esports</h3>
          </div>
        </div>
        <div className="blurb">
          <p>NSG knows how to bring smaller content creators, collegiate gaming professionals, and Esports professionals to the next step!</p>
          <button>Learn more about our team</button>
        </div>
      </section>

      <section className="services">
        <h1>Our Services</h1>
        <div className="service">
          <img src={talentManagement} alt="Talent Management" />
          <h2>Talent management</h2>
          <p>We offer the full suite of services talent agents have to offer! We can help you polish your brand, scale up your career, and get you to the deals you need to accelerate your growth. Our main introductory service will be getting to know you, familiarizing ourselves with your brand and setting out a plan to fulfill your career’s needs. From content creators that are just starting out or veterans of the industry, we will find a way to bring you to the next step!</p>
        </div>
        <div className="service">
          <img src={careerCoaching} alt="Career Coaching" />
          <h2>Career Coaching</h2>
          <p>If you do not need the full buy-in to NSG’s talent management services we offer a lite version! If all you need is some career coaching or consulting we are more than happy to help with any concerns you may have on next steps to your gaming career</p>
        </div>
        <div className="service">
          <img src={pivotProgram} alt="Pivot Program" />
          <h2>Pivot Progam</h2>
          <p>What is probably the most unique service we offer against any other talent agency is our Pivot Program. While we hope to grow every single gaming professional to the highest of highs they can reach, some individuals eventually feel they want to explore new possibilities outside of gaming. While we want to explore every single opportunity to maintain their success, some people simply want a break or step away for a while to revisit their goals. NSG has deep experience in career pivoting and are able to provide the unique program of helping people lateral themselves into their new passions outside of gaming. </p>
        </div>
      </section>


      <section className="team-section">
      <h1 className="section-title">Our Team</h1>
      <div className="team-container">
        <div className="team-member">
          <div className="card">
            <div className="front">
              <img src="/path/to/profile1.jpg" alt="Team Member 1" className="profile-pic" />
              <h3 className="member-name">William "Mullet" Su</h3>
              <p className="member-role">CEO</p>
            </div>
            <div className="back">
              <div className="back-content">
                <p>William has been gaming since he was 8 years old, eventually competing in Counter-Strike: Global Offensive and Overwatch for 7 years before retiring. From competition to retirement, William learned many of the nuances in building a career in gaming from scratch. Currently, he sits as the Co-President of the University of Alberta Esports Association and graduated the RBC Gaming Grant Program hosted by Enthusiast Gaming where he started his talent management journey. William Su holds a Bcom from the University of Alberta Business school and is attending the University of Alberta as a 3rd year law student. William is currently on his path to fulfilling his dream of becoming a lawyer while fulfilling his passion in gaming.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="card">
            <div className="front">
              <img src="/path/to/profile1.jpg" alt="Team Member 1" className="profile-pic" />
              <h3 className="member-name">Joseph "v10mega" Albassam</h3>
              <p className="member-role">CEO</p>
            </div>
            <div className="back">
              <div className="back-content">
                <p>My name is Yousef Albassam, although I prefer Joseph. My very first game was the original Doom and ever since I loaded the game for the first time: I was in love. So much so that I have been gaming since that fateful day. I have participated in various pro tournaments in the Call of Duty scene under team VIO and NEVO during UMG Niagara in 2014 and UMG Orlando in 2015. Shortly after I decided that the pro scene was not for me, and I found my passion in marketing the game industry within Canada. Through fortune or fate I met William in the same program: Enthusiast Gaming’s Gaming Grant sponsored by the Royal Bank of Canada. We have similar interests and are fully determined to see the rise of Esports within Canada. My role within NSG is to help market, comfort and expand client’s content to reach a bigger audience. Favorite games: League of Legends, Apex Legends, Warhammer 40k</p>
              </div>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="card">
            <div className="front">
              <img src="/path/to/profile1.jpg" alt="Team Member 1" className="profile-pic" />
              <h3 className="member-name">Marianne "Songbird" Moyo</h3>
              <p className="member-role">CEO</p>
            </div>
            <div className="back">
              <div className="back-content">
                <p>Marianne is a passionate lover of video games with a degree in radio brodcasting as well as a background in Public Relations. She is a fellow RBC Gaming Grant Program Graduate and is incredibly inspired to support others reaching their highest potential and aspirations. On a more personal level, she has been a lover of RPGs, Farming Sims, Gachas, and Battle Royale's since the young age of 10.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="talents">
        <h1>Our Talent</h1>
        <div className="talent-container">
          <div className='talent' data-aos="fade-right" data-aos-delay="0">
            <img src={UofA} alt="University of Alberta Esports" />
            <h3>University of Alberta Esports Associationn</h3>
            <p>Premier Collegiate Esports in Canada</p>
          </div>
          <div className='talent' data-aos="fade-right" data-aos-delay="200">
            <img src={yana} alt="Yana Cosplay" />
            <h3>Yana Cosplay</h3>
            <p>Cosplayer, Dota and Valorant streamer boasting over 300k Followers</p>
          </div>
          <div className='talent' data-aos="fade-right" data-aos-delay="400">
            <img src={whimsea} alt="WhimSea Cosplay" />
            <h3>WhimSea Cosplay</h3>
            <p>Dedicated Cosplayer and Genshin Impact Enjoyer</p>
          </div>
        </div>
      </section>



      <footer className="footer">
        <div className="footer-content">
          <nav>
            <ul>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#talent">Our Talent</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="social-icons">
            {/* Add social media icons here */}
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <p>&copy; 2024 Next Step Gaming Talent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainContent;
