import AboutMe from "../../components/AboutMe/AboutMe";
import Hero from "../../components/HeroSection/Hero";


const Home = () => {
    return (
        <div className='min-h-screen'>
            <div>

            <Hero />
            </div>

            <div>
                <AboutMe/>
            </div>
        </div>
    );
};

export default Home;