import AboutMe from "../../components/AboutMe/AboutMe";
import Hero from "../../components/HeroSection/Hero";
import PopularServices from "../../components/PopularServices/PopularServices";
import Pricing from "../../components/Pricing/Pricing";


const Home = () => {
    return (
        <div className='min-h-screen'>
            <div>

            <Hero />
            </div>

            <div>
                <AboutMe/>
            </div>

            <div>
                <PopularServices />
            </div>

            <div>
                <Pricing />
            </div>
        </div>
    );
};

export default Home;