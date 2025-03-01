import AboutSection from "../AllPages/AboutSection/AboutSection";
import AfterBanner from "../AllPages/AfterBanner/AfterBanner";
import Banner from "../AllPages/Banner/Banner";
import CarLogoPage from "../AllPages/CarLogoPage/CarLogoPage";
import Reviews from "../AllPages/Reviews/Reviews";
import Sponsered from "../AllPages/Sponsered/Sponsered";
import YoutubeChannel from "../AllPages/YoutubeChannel/YoutubeChannel";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AfterBanner></AfterBanner>
           <AboutSection></AboutSection>
           <YoutubeChannel></YoutubeChannel>
           <CarLogoPage></CarLogoPage>
           <Reviews></Reviews>
           <Sponsered></Sponsered>
        </div>
    );
};

export default Home;