
import React from "react";
import Contact from "../ContactUs/Contact";
import Footer from "../Footer/Footer";
import headerImg from "../image/siteimg1.jpg";
import Multic from "../Multicarasoul/Multic";
import "./Home.css";
const Home = () => {
  return (
    <div className="HomepageBackground">
      <div className="container">
        <div className="header row">
          <div className="col-md-7">
            <h1>BONGOCARE</h1>
          
          <p>
            Our mission is to make healthcare more accessible to every people in
            Bangladesh. We are committed to making healthcare accessible to
            every person in Bangladesh. The people of Bangladesh are constantly
            facing some kind of crisis while seeking health care One of these is
            repeating a test, not getting the blood right, of any size. The
            problem is not getting medical care at home. We will provide these
            services easily for the welfare of the people this is our purpose.
            We will save various health check-up reports of people through this
            website From Diagnostic Canter. Each person's account will have
            various health check reports. Later, when you go to see a doctor,
            the doctor can easily see those reports. Moreover, people can talk
            to the doctor through this website. If you need blood, you can
            easily contact any blood donor
          </p>
          </div>
          <div className="col-md-3">
            <img src={headerImg} className="headerImg" alt="" />
          </div>
        </div>
      </div>
      <div className="container services">
        <h5>Our Services</h5>
        <h3>Services We Provide</h3>
        <div className="row">
        <div className="container">
        <section id="skills">
  
       
  
        <div class="skills-center row">
          <article class="skill col-md-4">
          <i class="fa-solid fa-heart-pulse fa"></i>
            <h3>Save Health Check-Up Report</h3>
            <p>
            We will save various health check-up reports of people through this website From Diagnostic Canter. Each person's account will have various health check reports. Later, when you go to see a doctor, the doctor can easily see those reports.
            </p>
          </article>
          <article class="skill col-md-4">
          <i class="fa-solid fa-comment-medical fa"></i>
            <h3>24H/7D You can consult a doctor</h3>
            <p>
            If you face any health problem. you can easily contact a doctor at any time 24H/7D
            </p>
          </article>
          <article class="skill col-md-4">
          <i class="fa-solid fa-handshake-angle fa"></i>
            <h3>Any Support(Blood/Tips)</h3>
            <p>
            There are many users on this platform. If you need blood you can easily find a donor here.
            Also, you can post something here if you need any help and people can see your post and give feedback
            </p>
          </article>
          
        </div>
      </section>
      </div>
        </div>

      </div>
      <div className="container">
        <Multic/>
      </div>
  
      <Contact/>
    <Footer/>
    </div>
  );
};

export default Home;
