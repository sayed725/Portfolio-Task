import AboutMe from "../../components/AboutMe/AboutMe";
import Hero from "../../components/HeroSection/Hero";
import PopularServices from "../../components/PopularServices/PopularServices";
import Pricing from "../../components/Pricing/Pricing";
import Projects from "../../components/Projects/Projects";
import Reviews from "../../components/Reviews/Reviews";
import Skills from "../../components/Skills/Skills";


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
                <Skills />
            </div>

            <div>
                <Projects />
            </div>
           
            <div>
                <Reviews />
            </div>
            <div>
                <Pricing />
            </div>
        </div>
    );
};

export default Home;