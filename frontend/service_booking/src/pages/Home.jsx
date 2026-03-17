import Hero from '../components/Hero';
import PopularServices from '../components/PopularServices';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Stats />
        <PopularServices />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
};

export default Home;
