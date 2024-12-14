import React from 'react';
import Landing from '../layout/Landing';
import Team from '../layout/Home/All_Therapist';
import MoodStart from '../layout/Home/mood-start';
import Faq from '../layout/Home/Faq';
import Blog from '../layout/Home/Blogs';

const Home = () => {
    
    return (
        <>
        <Landing />
        <MoodStart />
        <Team />
        <Faq />
        <Blog />
      </>
    )
}
export default Home
