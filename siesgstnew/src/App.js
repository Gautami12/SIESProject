import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './NavigationComponent/navigation';
import LandingPage from './LandingPage/landingPage';
import News from './News/news';
import Announcement from './Announcements/announcements';
import TechCultural from './TechCulturalEvents/techcultural';
import Recruiter from './TopRecruiters/recruiter';
import ContactUs from './ContactUs/contactus';
import Footer from './Footer/Footer';



function App() {
  return (
    <div>
      <Navigation overiew = "Overview" core = "Core Values" principal = "The Principal" comitte = {"Managing Comittee"} comps= {"Computer Engineering"}
      mech = {"Mechanical Engineering"} IT = "Information Technology" PPT = "PPT"/><br></br><br />
<LandingPage/>
<br></br>
<br></br>
<br></br>
<br></br>
<News />
<Announcement />
<br></br>
<br></br><br></br><br></br><br></br>
<h1>TECHNICAL AND CULTURAL EVENTS</h1>
<br />
<TechCultural/>
<br />
<br />
<h2>TOP RECRUITERS</h2>
<br />
<Recruiter />
<br />
<ContactUs name = "CONTACT US" number = "022-24103908"/>
<br />

<Footer posted = "Gautami Pinkyar" email = "pinkyargautami@gmail.com" />



      </div>
  );
}

export default App;
