import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
// Components
import Hero from '../components/Hero';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/About';
import QuickLinks from '../components/QuickLinks';
import SitePlan from '../components/SitePlan';

const Home = () => {
  return (
    <>
      <HomeLayout
        row1={<Hero />}
        row2={<Header />}
        row3={<Navigation />}
        row4Left={<About />}
        row4RightA={<QuickLinks />}
        row4RightB={<QuickLinks />}
        row5={<SitePlan />}
      />
    </>
  );
};

export default Home;
